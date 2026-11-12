import { Adapter, type AdapterOptions } from '@iobroker/adapter-core'; // Get common adapter utils

import type { ActiveDevice, ProfileValue, ProfileValueType, SchedulerProfile } from './types';

const adapterName: string = (require('../package.json') as { name: string }).name.split('.').pop()!;

const FORBIDDEN_CHARS = /[^._\-/ :!#$%&()+=@^{}|~\p{Ll}\p{Lu}\p{Nd}]+/gu;

/** Message `setProfile`: what a client may change of one profile */
interface ProfileChange {
    /** ID of the profile */
    id: string;
    /** Desired value for every interval of the day - as many as the profile has */
    intervals?: number[];
    /** Active days of the week: 0 - Sunday, 1 - Monday, ... */
    dow?: number[];
    /** True if the profile is active on holidays too */
    holiday?: boolean;
}

class SchedulerAdapter extends Adapter {
    /** Cache of all objects, which are controlled by the profiles */
    private readonly devices: { [id: string]: ioBroker.StateObject } = {};

    /** Timer for the next interval */
    private timer: ioBroker.Timeout | undefined;

    /** IDs of the states, whose values the value lists of the profiles write */
    private valueIds: string[] = [];

    /** Changes of profiles are written one after another, each on the result of the previous one */
    private profileWrites: Promise<void> = Promise.resolve();

    public constructor(options: Partial<AdapterOptions> = {}) {
        super({ ...options, name: adapterName });

        this.on('ready', () => this.main());
        this.on('objectChange', (id, obj) => this.onObjectChange(id, obj));
        this.on('stateChange', (id, state) => this.onStateChange(id, state));
        this.on('message', obj => this.onMessage(obj));
        this.on('unload', callback => this.onUnload(callback));
    }

    /**
     * `setProfile`: changes the intervals, the days of the week and the holiday flag of one profile - what the web
     * component `<iob-scheduler-profile>` edits. A web component may not write objects, so it asks the adapter.
     */
    private onMessage(msg: ioBroker.Message): void {
        if (msg?.command !== 'setProfile') {
            return;
        }
        const answer = (result: { result?: boolean; error?: string }): void => {
            if (msg.callback) {
                this.sendTo(msg.from, msg.command, result, msg.callback);
            }
        };
        this.profileWrites = this.profileWrites
            .then(() => this.setProfile(msg.message, msg.user))
            .then(
                () => answer({ result: true }),
                (e: unknown) => {
                    const error = e instanceof Error ? e.message : String(e);
                    this.log.warn(`Cannot change profile: ${error}`);
                    answer({ error });
                },
            );
    }

    /**
     * Writes the change of one profile into the instance object, which is read fresh, so that other profiles and
     * settings stay as they are. It is written on behalf of the user of the socket (`user` of the message), so the
     * same rights apply as for the vis-2 widget, which writes the object itself. Like saving in admin, this restarts
     * the instance with the new profiles.
     *
     * @param message the change, see {@link ProfileChange}
     * @param user the user the message was sent for
     */
    private async setProfile(message: unknown, user?: ioBroker.ObjectIDs.User): Promise<void> {
        const change = (message && typeof message === 'object' ? message : {}) as Partial<
            Record<keyof ProfileChange, unknown>
        >;
        if (typeof change.id !== 'string' || !change.id) {
            throw new Error('No profile ID');
        }
        const id = `system.adapter.${this.namespace}`;
        const obj = await this.getForeignObjectAsync(id);
        const profiles = (obj?.native as ioBroker.AdapterConfig | undefined)?.profiles;
        const profile = Array.isArray(profiles)
            ? profiles.find(item => item?.id === change.id && item.type === 'profile')
            : undefined;
        if (!obj || !profile) {
            throw new Error(`Profile ${change.id} not found`);
        }
        const isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);
        if (change.intervals !== undefined) {
            if (
                !Array.isArray(change.intervals) ||
                change.intervals.length !== profile.data.intervals.length ||
                !change.intervals.every(isNumber)
            ) {
                throw new Error(`Invalid intervals for profile "${profile.title}"`);
            }
            profile.data.intervals = change.intervals;
        }
        if (change.dow !== undefined) {
            if (
                !Array.isArray(change.dow) ||
                !change.dow.every(day => isNumber(day) && Number.isInteger(day) && day >= 0 && day <= 6)
            ) {
                throw new Error(`Invalid days of the week for profile "${profile.title}"`);
            }
            profile.data.dow = [...new Set(change.dow)];
        }
        if (change.holiday !== undefined) {
            if (typeof change.holiday !== 'boolean') {
                throw new Error(`Invalid holiday flag for profile "${profile.title}"`);
            }
            profile.data.holiday = change.holiday;
        }
        obj.from = `system.adapter.${this.namespace}`;
        obj.ts = Date.now();
        if (user) {
            obj.user = user;
        }
        await this.setForeignObjectAsync(id, obj, user ? { user } : undefined);
    }

    /**
     * A state of a value list changed: the data points, which get their value from it now, get the new value
     *
     * @param id the ID of the state
     * @param state the new state
     */
    private onStateChange(id: string, state: ioBroker.State | null | undefined): void {
        if (state && this.valueIds.includes(id)) {
            this.updateStates(true, id).catch(e => this.log.error(`Cannot update states: ${e as Error}`));
        }
    }

    private onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
        if (this.devices[id]) {
            if (obj) {
                this.devices[id] = obj as ioBroker.StateObject;
                // the native part is not used here and could be big
                this.devices[id].native = {};
            } else {
                delete this.devices[id];
            }
        }
    }

    private onUnload(callback: () => void): void {
        // stop running timer
        if (this.timer) {
            this.clearTimeout(this.timer);
            this.timer = undefined;
        }
        callback();
    }

    // Must stay identical to checkObject() in src-admin/src/components/DevicesPanel.tsx
    private static checkObject(obj: ioBroker.StateObject, type: ProfileValueType, hasValueList?: boolean): boolean {
        if (type === 'custom') {
            if (hasValueList) {
                // the entries of a value list can be numbers, texts or true/false
                return ['number', 'string', 'boolean', 'mixed'].includes(obj.common.type);
            }
            return obj.common.type === 'number' || obj.common.type === 'mixed';
        }
        if (type === 'percent') {
            return (
                obj.common.unit === '%' ||
                (obj.common.min !== undefined && obj.common.max !== undefined) ||
                obj.common.type === 'mixed'
            );
        }
        if (type === 'temperature') {
            return obj.common.type === 'number' || obj.common.type === 'mixed';
        }
        if (type === 'onoff') {
            return obj.common.type === 'boolean' || obj.common.type === 'mixed';
        }
        return false;
    }

    private static convertValue(obj: ioBroker.StateObject, type: ProfileValueType, value: number): number | boolean {
        if (type === 'percent') {
            if (obj.common.min !== undefined && obj.common.max !== undefined) {
                const delta = obj.common.max - obj.common.min;
                return obj.common.min + Math.round((delta * value) / 100);
            }
            return value;
        }
        if (type === 'temperature' || type === 'custom') {
            return value;
        }
        if (type === 'onoff') {
            return !!value;
        }

        return false;
    }

    /**
     * Converts a value of a value list to the type of the data point
     *
     * @param obj the controlled data point
     * @param value the value of the entry (text from the settings) or of its state
     */
    private static convertListValue(obj: ioBroker.StateObject, value: ioBroker.StateValue): ioBroker.StateValue {
        if (value === null || value === undefined) {
            return null;
        }
        const text = String(value).trim();
        switch (obj.common.type) {
            case 'number': {
                if (typeof value === 'boolean') {
                    return value ? 1 : 0;
                }
                const number = parseFloat(text.replace(',', '.'));
                return Number.isFinite(number) ? number : null;
            }
            case 'boolean':
                if (typeof value === 'boolean') {
                    return value;
                }
                if (typeof value === 'number') {
                    return !!value;
                }
                return ['true', '1', 'on', 'yes', 'ein', 'an'].includes(text.toLowerCase());
            case 'string':
                return typeof value === 'string' ? value : text;
            default:
                // mixed: a value of a state keeps its type, a text of the settings becomes a number or true/false if it is one
                if (typeof value !== 'string') {
                    return value;
                }
                if (text === 'true' || text === 'false') {
                    return text === 'true';
                }
                return text !== '' && Number.isFinite(Number(text)) ? Number(text) : value;
        }
    }

    /**
     * Value of an entry of a value list: the current value of its state or its fixed value
     *
     * @param values the value list of the profile
     * @param index the index of the entry, as stored in the interval
     */
    private async getListValue(values: ProfileValue[], index: number): Promise<ioBroker.StateValue> {
        const entry = values[Math.min(values.length - 1, Math.max(0, Math.round(index)))];
        if (!entry) {
            return null;
        }
        if (entry.id) {
            const state = await this.getForeignStateAsync(entry.id);
            return state ? state.val : null;
        }
        return entry.value ?? null;
    }

    private static getPreviousValue(intervals: number[], index: number): number {
        if (index === 0) {
            return intervals[intervals.length - 1];
        }
        return intervals[index - 1];
    }

    /**
     * Writes the values of the current intervals
     *
     * @param force write the values also if the interval did not start now and if the value is the same as before
     * @param changedValueId only write the data points, whose current value comes from this state of a value list
     */
    private async updateStates(force?: boolean, changedValueId?: string): Promise<void> {
        const profiles = this.config.profiles;
        const now = new Date();
        const active: { [id: string]: ActiveDevice } = {};
        let isHoliday = false;

        if (this.config.holidayId) {
            try {
                const state = await this.getForeignStateAsync(this.config.holidayId);
                isHoliday = !!state?.val;
            } catch (e) {
                this.log.warn(`Cannot get is holiday: ${e as Error}`);
            }
        }

        for (const profile of profiles) {
            let profileState: ioBroker.StateValue = null;

            if (profile.type === 'profile' && typeof profile.data.state === 'string' && profile.data.state) {
                const state = await this.getForeignStateAsync(profile.data.state);
                profileState = state ? state.val : null;
            }

            const minutes = now.getMinutes();
            // if not XX:00 or XX:30
            if (!force && profile.data.intervalDuration === 0.5 && (minutes === 15 || minutes === 45)) {
                continue;
            }
            // if not XX:00
            if (!force && profile.data.intervalDuration >= 1 && minutes) {
                continue;
            }
            if (profile.type === 'profile') {
                if ((profile.data.dow.includes(now.getDay()) || (profile.data.holiday && isHoliday)) && profileState) {
                    const index = Math.floor((now.getHours() + now.getMinutes() / 60) / profile.data.intervalDuration);
                    const value = profile.data.intervals[index];
                    if (profile.data.activeState) {
                        await this.setStateAsync(profile.data.activeState, true, true);
                    }
                    if (
                        force ||
                        !profile.data.ignoreSameValues ||
                        SchedulerAdapter.getPreviousValue(profile.data.intervals, index) !== value
                    ) {
                        for (const id of profile.data.members) {
                            if (!this.devices[id]) {
                                this.log.warn(
                                    `Device ${id} used in schedule "${profile.title}", but object does not exist.`,
                                );
                                // this object was deleted after adapter start
                                continue;
                            }

                            if (!active[id] || active[id].priority < profile.data.prio) {
                                active[id] = {
                                    id: profile.id,
                                    title: profile.title,
                                    priority: profile.data.prio,
                                    type: profile.data.type,
                                    value,
                                    doNotWriteSameValue: profile.data.doNotWriteSameValue,
                                    values:
                                        profile.data.type === 'custom' && profile.data.values?.length
                                            ? profile.data.values
                                            : null,
                                };
                            } else if (active[id].priority === profile.data.prio) {
                                // check if the days are different
                                this.log.error(
                                    `"${id}" is in two or more profiles: "${profile.title}" and "${active[id].title}"(<-used for control)`,
                                );
                            }
                        }
                    }
                } else if (profile.data.activeState) {
                    await this.setStateAsync(profile.data.activeState, false, true);
                }
            }
        }

        for (const id in active) {
            const profile = active[id];
            const obj = this.devices[id];

            if (changedValueId) {
                // only the data points, which get their value from the changed state now
                const entry = profile.values?.[Math.round(profile.value)];
                if (entry?.id !== changedValueId) {
                    continue;
                }
            }

            if (!SchedulerAdapter.checkObject(obj, profile.type, !!profile.values)) {
                this.log.error(`${id} in ${profile.title} is not type ${profile.type}`);
                continue;
            }
            let value: ioBroker.StateValue;
            if (profile.values) {
                value = SchedulerAdapter.convertListValue(obj, await this.getListValue(profile.values, profile.value));
                if (value === null) {
                    this.log.warn(
                        `${id} in ${profile.title}: entry ${Math.round(profile.value) + 1} of the value list has no value`,
                    );
                    continue;
                }
            } else {
                value = SchedulerAdapter.convertValue(obj, profile.type, profile.value);
            }

            if (profile.doNotWriteSameValue) {
                const currentValue = await this.getForeignStateAsync(id);
                if (currentValue && currentValue.val === value) {
                    continue;
                }
            }

            await this.setForeignStateChangedAsync(id, value);

            this.log.info(`${id} in ${profile.title} set to ${value}`);
        }
    }

    private startNextInterval(): void {
        const time = new Date();

        // get the next 15 minutes
        if (time.getMinutes() < 15) {
            time.setMinutes(15);
        } else if (time.getMinutes() < 30) {
            time.setMinutes(30);
        } else if (time.getMinutes() < 45) {
            time.setMinutes(45);
        } else {
            time.setHours(time.getHours() + 1);
            time.setMinutes(0);
        }
        time.setSeconds(0);
        time.setMilliseconds(0);

        this.timer = this.setTimeout(() => {
            this.timer = undefined;
            this.updateStates().catch(e => this.log.error(`Cannot update states: ${e as Error}`));
            this.startNextInterval();
        }, time.getTime() - Date.now());
    }

    private getStateId(profile: SchedulerProfile, profiles: SchedulerProfile[], _list?: string[]): string | null {
        _list = _list || [];
        _list.unshift(profile.title.replace(FORBIDDEN_CHARS, '_').replace(/\./g, '_'));

        if (profile.parent) {
            // find parent profile
            const parentProfile = profiles.find(item => item.id === profile.parent);
            if (parentProfile) {
                return this.getStateId(parentProfile, profiles, _list);
            }
            this.log.error(`Cannot find parent ${profile.parent}`);
            return null;
        }

        return `${this.namespace}.${_list.join('.')}`;
    }

    private async createActiveState(id: string): Promise<void> {
        const obj = await this.getForeignObjectAsync(id);
        if (!obj) {
            await this.setObjectAsync(id, {
                type: 'state',
                common: {
                    name: 'Active state of the profile',
                    type: 'boolean',
                    role: 'indicator',
                    read: true,
                    write: false,
                    def: false,
                },
                native: {},
            });
        }
    }

    private async main(): Promise<void> {
        const profiles = this.config.profiles;

        // collect all devices
        for (const profile of profiles) {
            if (profile?.type === 'profile') {
                const stateId = this.getStateId(profile, profiles);

                if (profile.data.state === true) {
                    profile.data.state = stateId;
                }

                if (stateId) {
                    profile.data.activeState = `${stateId}_active`;
                    await this.createActiveState(profile.data.activeState);
                } else {
                    profile.data.activeState = null;
                    this.log.error(`Cannot build the "active" state ID for the profile "${profile.title}"`);
                }

                for (const member of profile.data.members) {
                    if (!this.devices[member]) {
                        const obj = await this.getForeignObjectAsync(member);
                        if (obj?.common) {
                            this.devices[obj._id] = obj as ioBroker.StateObject;
                            // the native part is not used here and could be big
                            this.devices[obj._id].native = {};
                        }
                    }
                }
            }
        }

        // subscribe on all used IDs
        await this.subscribeForeignObjectsAsync(Object.keys(this.devices));

        // a changed state of a value list is written at once, e.g. a new comfort temperature
        const valueIds = new Set<string>();
        for (const profile of profiles) {
            if (profile?.type === 'profile' && profile.data.type === 'custom') {
                profile.data.values?.forEach(entry => entry.id && valueIds.add(entry.id));
            }
        }
        this.valueIds = [...valueIds];
        if (this.valueIds.length) {
            await this.subscribeForeignStatesAsync(this.valueIds);
        }

        await this.updateStates(true);
        this.startNextInterval();
    }
}

// If started as allInOne mode => return function to create instance
if (require.main !== module) {
    module.exports = (options: Partial<AdapterOptions> | undefined) => new SchedulerAdapter(options);
} else {
    // or start the instance directly
    (() => new SchedulerAdapter())();
}
