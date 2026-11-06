/**
 * A profile of the scheduler as a web component: `<iob-scheduler-profile>`.
 *
 * One module for every host - vis-2, devices, Aura, admin (`@iobroker/web-components`). Its manifest is a file of
 * its own (`scheduler-profile.json`, written by the build from `manifest.ts`), so a host loads this module only when
 * it shows the element. The host sets `socket` and `settings`, and if it has them `theme` and `editMode`.
 *
 * The profiles live in the instance object `system.adapter.scheduler.<n>`, which the element keeps up to date. The
 * setting names a state of the profile (`scheduler.0.<profile>_active`), from which the instance and the profile
 * are found. The vis-2 widget writes the instance object itself; a web component may not write objects, so the
 * element sends its changes to the adapter (`setProfile`), which writes them on behalf of the user. Like the
 * vis-2 widget it writes 2 seconds after the last change, and only while the instance runs.
 *
 * React is not in the module: it comes from `lib/esm/react-19.js` beside `adapter/`, see `vite.config.ts`.
 */
import type { JSX } from 'react';
import { createRoot, type Root } from 'react-dom/client';

import { defineWebComponent, IobWebComponent } from '@iobroker/web-components/element';

import { SET_PROFILE_COMMAND, TAG, type ProfileSettings } from './constants';
import { getWord, type WordKey } from './i18n';
import {
    findProfile,
    findProfileById,
    getValueRange,
    isSameChange,
    parseProfileRef,
    SAMPLE_PROFILE,
    toChange,
    toShown,
    type ProfileChange,
    type ProfileRef,
    type SchedulerProfile,
} from './profile';
import { Hint, ProfileView, type ProfileStatus } from './ProfileView';
import { STYLES } from './styles';

/** Like the vis-2 widget: one write after the user is done, not one per bar */
const SAVE_DELAY = 2000;

/** How long to wait for the answer of the adapter */
const ANSWER_TIMEOUT = 8000;

/** A message sent while the instance restarts gets lost: so often it is sent again, this long apart */
const MAX_ATTEMPTS = 3;
const RETRY_DELAY = 4000;

/** How long a written change is shown before the instance object, if the object does not show it by then */
const KEEP_SENT = 15000;

/** A change of one profile that the instance object does not show yet */
interface LocalEdit {
    /** `<instance>/<profile ID>` */
    key: string;
    /** `scheduler.0` */
    instance: string;
    profileId: string;
    change: ProfileChange;
    /** Waiting for the delay or the instance, on its way, or written and waiting for the object */
    phase: 'pending' | 'sending' | 'sent';
    sentAt: number;
}

interface SetProfileAnswer {
    result?: boolean;
    error?: string;
}

class TimeoutError extends Error {}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timer = setTimeout(() => reject(new TimeoutError('timeout')), ms);
        promise.then(
            value => {
                clearTimeout(timer);
                resolve(value);
            },
            (error: unknown) => {
                clearTimeout(timer);
                reject(error instanceof Error ? error : new Error(String(error)));
            },
        );
    });
}

function getInstanceObjectId(instance: string): string {
    return `system.adapter.${instance}`;
}

class SchedulerProfileElement extends IobWebComponent<ProfileSettings> {
    readonly #mount: HTMLDivElement;

    #root: Root | null = null;

    /** The change the user made, until the instance object shows it */
    #edit: LocalEdit | null = null;

    #inFlight: LocalEdit | null = null;

    #saveTimer: ReturnType<typeof setTimeout> | null = null;

    #retryTimer: ReturnType<typeof setTimeout> | null = null;

    #keepTimer: ReturnType<typeof setTimeout> | null = null;

    #attempts = 0;

    /** Why the last change was not saved */
    #error = '';

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = STYLES;
        this.#mount = document.createElement('div');
        this.#mount.className = 'mount';
        shadow.append(style, this.#mount);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        // do not lose the last change if the element leaves the page before the delayed write (e.g. a view change)
        if (this.#edit?.phase === 'pending') {
            this.#send(this.#edit);
        }
        this.#clearTimers();
        // a host that only moves the element connects it again in the same task: keep React then
        queueMicrotask(() => {
            if (!this.isConnected && this.#root) {
                this.#root.unmount();
                this.#root = null;
            }
        });
    }

    protected override getObjectIds(settings: ProfileSettings): (string | undefined)[] {
        const ref = parseProfileRef(settings.profile);
        if (!ref) {
            return [];
        }
        const objectId = getInstanceObjectId(ref.instance);
        const profile = findProfile(this.objects[objectId], ref);
        // the range of the values comes from the first state the profile controls, as in the vis-2 widget
        const member =
            profile && (profile.data.type === 'custom' || profile.data.type === 'temperature')
                ? profile.data.members?.[0]
                : undefined;
        return [objectId, 'system.config', member];
    }

    protected override getStateIds(settings: ProfileSettings): string[] {
        const ref = parseProfileRef(settings.profile);
        // changes are sent only while the instance runs: a message to a stopped instance gets lost
        return ref ? [`${getInstanceObjectId(ref.instance)}.alive`] : [];
    }

    protected override render(): void {
        if (!this.isConnected) {
            return;
        }
        this.#root ||= createRoot(this.#mount);
        this.#root.render(this.#renderContent());
    }

    #word = (key: WordKey): string => getWord(this.systemLang, key);

    #renderContent(): JSX.Element {
        const settings = this.settings;
        const word = this.#word;
        const ref = parseProfileRef(settings.profile);

        if (!ref) {
            return this.editMode ? (
                this.#renderSample()
            ) : (
                <Hint
                    text={word('chooseProfile')}
                    editMode={false}
                />
            );
        }
        const object = this.objects[getInstanceObjectId(ref.instance)];
        if (object === undefined) {
            // not read yet
            return <div className="box" />;
        }
        if (!object) {
            return (
                <Hint
                    text={`${word('noInstance')}: ${ref.instance}`}
                    editMode={this.editMode}
                />
            );
        }
        const profile = findProfile(object, ref);
        if (!profile) {
            return (
                <Hint
                    text={word('notProfile')}
                    editMode={this.editMode}
                />
            );
        }

        const key = `${ref.instance}/${profile.id}`;
        let edit = this.#edit?.key === key ? this.#edit : null;
        if (
            edit?.phase === 'sent' &&
            (isSameChange(profile.data, edit.change) || Date.now() - edit.sentAt >= KEEP_SENT)
        ) {
            this.#edit = null;
            edit = null;
        }

        const alive = this.states[`${getInstanceObjectId(ref.instance)}.alive`];
        // unknown until the state arrives: then it is tried
        const running = alive === undefined || !!alive?.val;
        this.#sendWhenReady(running);

        const unsaved = !!edit && edit.phase !== 'sent';
        const status: ProfileStatus = { saving: unsaved && running, text: '', kind: '' };
        if (this.#error) {
            status.text = `${word('notSaved')}: ${this.#error}`;
            status.kind = 'error';
        } else if (!running) {
            status.text = unsaved ? `${word('notRunning')} - ${word('waiting')}` : word('notRunning');
            status.kind = 'warning';
        }

        const shown = { ...toShown(profile.data), ...edit?.change };
        const memberId = profile.data.members?.[0];
        const config = this.objects['system.config'] as ioBroker.SystemConfigObject | null | undefined;

        return (
            <ProfileView
                key={key}
                title={settings.title || ''}
                profile={shown}
                range={getValueRange(shown.type, memberId ? this.objects[memberId] : null)}
                showDow={!settings.hideDow}
                holidayVisible={!!(object.native as { holidayId?: string } | undefined)?.holidayId}
                mondayFirst={config?.common?.firstDayOfWeek !== 'sunday'}
                editable={!this.editMode && !settings.readOnly && !!this.socket}
                editMode={this.editMode}
                status={status}
                lang={this.systemLang}
                word={word}
                onIntervals={intervals => this.#change(ref, profile, { intervals })}
                onDays={(dow, holiday) => this.#change(ref, profile, { dow, holiday })}
            />
        );
    }

    /** What the element looks like, for the editor of the host while no profile is chosen */
    #renderSample(): JSX.Element {
        return (
            <ProfileView
                key="sample"
                sample
                title={this.settings.title || ''}
                profile={SAMPLE_PROFILE}
                range={getValueRange(SAMPLE_PROFILE.type, null)}
                showDow={!this.settings.hideDow}
                holidayVisible={false}
                mondayFirst
                editable={false}
                editMode={this.editMode}
                status={{ saving: false, text: this.#word('chooseProfile'), kind: '' }}
                lang={this.systemLang}
                word={this.#word}
                onIntervals={() => undefined}
                onDays={() => undefined}
            />
        );
    }

    /** The user changed the profile: shown at once, written after {@link SAVE_DELAY} */
    #change(ref: ProfileRef, profile: SchedulerProfile, part: Partial<ProfileChange>): void {
        if (this.editMode || this.settings.readOnly) {
            return;
        }
        const key = `${ref.instance}/${profile.id}`;
        const previous = this.#edit;
        if (previous && previous.key !== key && previous.phase === 'pending') {
            // the settings name another profile now: write the change of the old one at once
            this.#send(previous);
        }
        const base = previous?.key === key ? previous.change : toChange(profile.data);
        this.#edit = {
            key,
            instance: ref.instance,
            profileId: profile.id,
            change: { ...base, ...part },
            phase: 'pending',
            sentAt: 0,
        };
        this.#error = '';
        this.#attempts = 0;
        if (this.#retryTimer) {
            clearTimeout(this.#retryTimer);
            this.#retryTimer = null;
        }
        if (this.#saveTimer) {
            clearTimeout(this.#saveTimer);
        }
        this.#saveTimer = setTimeout(() => {
            this.#saveTimer = null;
            this.render();
        }, SAVE_DELAY);
        this.render();
    }

    /** Send the change once the delay is over, nothing else is on its way and the instance runs */
    #sendWhenReady(running: boolean): void {
        const edit = this.#edit;
        if (
            edit?.phase === 'pending' &&
            running &&
            !this.#saveTimer &&
            !this.#retryTimer &&
            !this.#inFlight &&
            this.socket &&
            !this.editMode
        ) {
            this.#send(edit);
        }
    }

    #send(job: LocalEdit): void {
        const socket = this.socket;
        if (!socket || this.editMode) {
            return;
        }
        job.phase = 'sending';
        this.#inFlight = job;
        withTimeout(
            socket.sendTo<SetProfileAnswer | null>(job.instance, SET_PROFILE_COMMAND, {
                id: job.profileId,
                ...job.change,
            }),
            ANSWER_TIMEOUT,
        )
            .then(answer => {
                if (answer?.error) {
                    throw new Error(String(answer.error));
                }
                this.#saved(job);
            })
            .catch((error: unknown) => this.#failed(job, error))
            .finally(() => {
                if (this.#inFlight === job) {
                    this.#inFlight = null;
                }
                this.render();
            });
    }

    #saved(job: LocalEdit): void {
        this.#attempts = 0;
        this.#error = '';
        if (this.#edit === job) {
            job.phase = 'sent';
            job.sentAt = Date.now();
            if (this.#keepTimer) {
                clearTimeout(this.#keepTimer);
            }
            // then the instance object wins, even if it does not show the change
            this.#keepTimer = setTimeout(() => {
                this.#keepTimer = null;
                this.render();
            }, KEEP_SENT);
        }
    }

    #failed(job: LocalEdit, error: unknown): void {
        if (this.#edit !== job) {
            // newer changes: they are written next, with this one
            return;
        }
        // the change may be written although the answer got lost: the instance object tells
        const profile = findProfileById(this.objects[getInstanceObjectId(job.instance)], job.profileId);
        if (profile && isSameChange(profile.data, job.change)) {
            this.#saved(job);
            return;
        }
        if (error instanceof TimeoutError && ++this.#attempts < MAX_ATTEMPTS) {
            job.phase = 'pending';
            this.#retryTimer = setTimeout(() => {
                this.#retryTimer = null;
                this.render();
            }, RETRY_DELAY);
            return;
        }
        this.#attempts = 0;
        this.#error =
            error instanceof TimeoutError ? this.#word('noAnswer') : (error as Error).message || String(error);
        console.warn(`<${TAG}>: cannot save the profile ${job.profileId} of ${job.instance}: ${this.#error}`);
        // what is not saved is not shown either: the profile as it is
        this.#edit = null;
    }

    #clearTimers(): void {
        for (const timer of [this.#saveTimer, this.#retryTimer, this.#keepTimer]) {
            if (timer) {
                clearTimeout(timer);
            }
        }
        this.#saveTimer = null;
        this.#retryTimer = null;
        this.#keepTimer = null;
    }
}

defineWebComponent(TAG, SchedulerProfileElement);
