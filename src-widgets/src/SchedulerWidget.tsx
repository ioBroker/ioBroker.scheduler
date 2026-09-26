import React, { type JSX } from 'react';

import { LinearProgress, MenuItem, Select } from '@mui/material';

import { Schedule as ScheduleIcon } from '@mui/icons-material';

import { IconClosed as FolderIcon, I18n } from '@iobroker/gui-components';

import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';
import type {
    RxRenderWidgetProps,
    RxWidgetInfo,
    RxWidgetInfoAttributesField,
    VisRxWidgetState,
    RxWidgetInfoCustomComponentContext,
} from '@iobroker/types-vis-2';

import IntervalsContainer from './components/IntervalsContainer';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import minmax from './data/minmax.json';
import type { MinMax, ProfileData, SchedulerInstanceObject, SchedulerProfile } from './types';

const defaultMinMax: Record<string, MinMax> = minmax;

const styles: Record<string, React.CSSProperties> = {
    content: {
        display: 'flex',
        gap: 8,
        width: '100%',
        height: '100%',
        minHeight: 0,
        position: 'relative',
        boxSizing: 'border-box',
    },
    intervals: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    days: {
        width: 68,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
    },
};

interface SchedulerRxData {
    instance?: number | string;
    profile?: string;
    readOnly?: boolean;
    hideDow?: boolean;
    noCard?: boolean;
    widgetTitle?: string;
    name?: string;
}

interface SchedulerWidgetState extends VisRxWidgetState {
    object: SchedulerInstanceObject | null;
    minMaxObject?: ioBroker.StateObject | null;
    writing?: boolean;
}

/** Entry of the flattened profile tree shown in the widget attribute editor */
interface ProfileEntry {
    profile: SchedulerProfile;
    level: number;
}

interface ProfileSelectorProps {
    field: RxWidgetInfoAttributesField;
    data: SchedulerRxData;
    setData: (data: SchedulerRxData) => void;
    context: RxWidgetInfoCustomComponentContext;
}

function ProfileSelector(props: ProfileSelectorProps): JSX.Element | null {
    const [object, setObject] = React.useState<SchedulerInstanceObject | null>(null);

    React.useEffect(() => {
        void props.context.socket
            .getObject(`system.adapter.scheduler.${props.data.instance}`)
            .then(_object => setObject((_object as SchedulerInstanceObject) || null));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!object) {
        return null;
    }

    const profilesArray: ProfileEntry[] = [];

    const profileRecursive = (profiles: SchedulerProfile[], level: number): void => {
        profiles.forEach(profile => {
            profilesArray.push({ profile, level });
            const children = object.native.profiles.filter(p => p.parent === profile.id);
            if (children.length) {
                profileRecursive(children, level + 1);
            }
        });
    };

    profileRecursive(
        object.native.profiles.filter(p => !p.parent),
        0,
    );

    const fieldName = props.field.name as keyof SchedulerRxData;

    return (
        <Select
            style={{ width: '100%' }}
            value={(props.data[fieldName] as string) || ''}
            onChange={e => {
                const data: SchedulerRxData = { ...props.data, [fieldName]: e.target.value };
                const oldProfile = profilesArray.find(p => p.profile.id === props.data[fieldName]);
                const newProfile = profilesArray.find(p => p.profile.id === e.target.value);
                if (newProfile && (!data.name || (oldProfile && props.data.name === oldProfile.profile.title))) {
                    data.name = newProfile.profile.title;
                }
                props.setData(data);
            }}
            variant="standard"
            renderValue={value => {
                const profile = profilesArray.find(p => p.profile.id === value);
                return <div>{profile ? profile.profile.title : ''}</div>;
            }}
        >
            {profilesArray.map(profile => (
                <MenuItem
                    key={profile.profile.id}
                    value={profile.profile.id}
                    disabled={profile.profile.type === 'folder'}
                >
                    <div style={{ paddingLeft: profile.level * 20, display: 'flex' }}>
                        <span style={{ paddingRight: 4 }}>
                            {profile.profile.type === 'folder' ? <FolderIcon /> : <ScheduleIcon />}
                        </span>
                        {profile.profile.title}
                    </div>
                </MenuItem>
            ))}
        </Select>
    );
}

export default class SchedulerWidget extends (window.visRxWidget as typeof VisRxWidget)<
    SchedulerRxData,
    SchedulerWidgetState
> {
    private readonly widgetRef: React.RefObject<HTMLDivElement | null> = React.createRef();

    private subscribedId = '';

    private minMaxObjectId = '';

    private writeTimeout: ReturnType<typeof setTimeout> | null = null;

    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplScheduler',
            visSet: 'scheduler',
            visWidgetLabel: 'scheduler', // Label of widget
            visSetLabel: 'set_label', // Label of the widget set
            visSetColor: '#70BBF7', // color of the widget set
            visName: 'Scheduler',
            visAttrs: [
                {
                    name: 'common',
                    fields: [
                        {
                            label: 'instance',
                            name: 'instance',
                            type: 'instance',
                            adapter: 'scheduler',
                            isShort: true,
                        },
                        {
                            label: 'profile',
                            name: 'profile',
                            type: 'custom',
                            hidden: (data: Record<string, any>): boolean => !data.instance && data.instance !== 0,
                            component: (field, data, setData, props): JSX.Element => (
                                <ProfileSelector
                                    field={field}
                                    data={data}
                                    setData={setData}
                                    context={props.context}
                                />
                            ),
                        },
                        {
                            label: 'read_only',
                            name: 'readOnly',
                            type: 'checkbox',
                            default: false,
                        },
                        {
                            label: 'hide_days_of_week',
                            name: 'hideDow',
                            type: 'checkbox',
                            default: false,
                        },
                        {
                            name: 'noCard',
                            label: 'without_card',
                            type: 'checkbox',
                            hidden: '!!data.externalDialog',
                        },
                        {
                            name: 'widgetTitle',
                            label: 'name',
                            hidden: '!!data.noCard',
                        },
                    ],
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 355,
                position: 'relative',
            },
            visPrev: 'widgets/scheduler/img/prev_scheduler.png',
        };
    }

    static t(key: string, ...args: (string | number | boolean)[]): string {
        return I18n.t(`scheduler_${key}`, ...args);
    }

    async propertiesUpdate(): Promise<void> {
        // calculate current instance
        const instanceId =
            this.state.rxData.instance || this.state.rxData.instance === 0
                ? `system.adapter.scheduler.${this.state.rxData.instance}`
                : '';

        // if instance changed
        if (this.subscribedId !== instanceId) {
            // unsubscribe from old instance
            if (this.subscribedId) {
                void this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged);
            }
            this.subscribedId = instanceId;

            if (this.subscribedId) {
                // read new instance
                const object = await this.getInstanceObject(this.subscribedId);
                if (!object) {
                    this.setState({ object: null });
                    return;
                }
                const profile = object.native.profiles.find(p => p.id === this.state.rxData.profile);
                const newState: Partial<SchedulerWidgetState> = { object };
                if (profile) {
                    const minMaxObjectId = profile.data.type === 'custom' ? profile.data.members[0] : '';
                    if (minMaxObjectId !== this.minMaxObjectId) {
                        this.minMaxObjectId = minMaxObjectId;
                        newState.minMaxObject = await this.getStateObject(this.minMaxObjectId);
                    }
                }

                await this.props.context.socket.subscribeObject(this.subscribedId, this.onProfileChanged);

                this.setState(newState as SchedulerWidgetState);
            } else {
                this.setState({ object: null });
            }
        } else if (this.state.object && this.state.rxData.profile) {
            const profile = this.state.object.native.profiles.find(p => p.id === this.state.rxData.profile);
            if (!profile) {
                return;
            }
            const minMaxObjectId =
                profile.data.type === 'custom' || profile.data.type === 'temperature' ? profile.data.members[0] : '';
            if (minMaxObjectId !== this.minMaxObjectId) {
                this.minMaxObjectId = minMaxObjectId;
                this.setState({ minMaxObject: await this.getStateObject(this.minMaxObjectId) });
            }
        }
    }

    /** `getObject` returns the union of all object types, so both readers narrow it here */
    private async getInstanceObject(id: string): Promise<SchedulerInstanceObject | null> {
        const object = await this.props.context.socket.getObject(id);
        return object ? (object as unknown as SchedulerInstanceObject) : null;
    }

    private async getStateObject(id: string): Promise<ioBroker.StateObject | null> {
        if (!id) {
            return null;
        }
        const object = await this.props.context.socket.getObject(id);
        return object ? (object as unknown as ioBroker.StateObject) : null;
    }

    componentDidMount(): void {
        super.componentDidMount();
        void this.propertiesUpdate();
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        if (this.subscribedId) {
            void this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged);
        }
        if (this.writeTimeout) {
            clearTimeout(this.writeTimeout);
            this.writeTimeout = null;
        }
    }

    onProfileChanged = (id: string, obj: ioBroker.Object | null | undefined): void => {
        if (this.state.object && id === this.state.object._id) {
            const profileOld = this.state.object.native.profiles.find(
                profile => profile.id === this.state.rxData.profile,
            );

            const newObject = obj as SchedulerInstanceObject | null | undefined;
            const profileNew = newObject?.native?.profiles?.find(profile => profile.id === this.state.rxData.profile);

            if (JSON.stringify(profileOld) !== JSON.stringify(profileNew) && newObject) {
                this.setState({ object: newObject });
            }
        }
    };

    onRxDataChanged(): void {
        void this.propertiesUpdate();
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return SchedulerWidget.getWidgetInfo();
    }

    onDow = (day: number | 'holiday', enabled: boolean): void => {
        const current = this.currentProfile();
        if (!current) {
            return;
        }
        const profile: ProfileData = JSON.parse(JSON.stringify(current));
        if (day === 'holiday') {
            profile.holiday = enabled;
        } else if (enabled && !profile.dow.includes(day)) {
            profile.dow.push(day);
        } else if (!enabled && profile.dow.includes(day)) {
            profile.dow.splice(profile.dow.indexOf(day), 1);
        }
        this.changeProfile(profile);
    };

    onIntervals = (intervals: number[]): void => {
        const current = this.currentProfile();
        if (!current) {
            return;
        }
        const profile: ProfileData = JSON.parse(JSON.stringify(current));
        profile.intervals = intervals;
        this.changeProfile(profile);
    };

    changeProfile = (newData: ProfileData): void => {
        if (this.state.rxData.readOnly || !this.state.object) {
            return;
        }
        const object: SchedulerInstanceObject = JSON.parse(JSON.stringify(this.state.object));
        const profileIndex = this.state.object.native.profiles.findIndex(
            profile => profile.id === this.state.rxData.profile,
        );
        object.native.profiles[profileIndex].data = newData;
        this.setState({ object });
        if (this.writeTimeout) {
            clearTimeout(this.writeTimeout);
        } else {
            this.setState({ writing: true });
        }
        this.writeTimeout = setTimeout(() => {
            this.writeTimeout = null;
            this.props.context.socket
                .setObject(object._id, object)
                .then(() => this.setState({ writing: false }))
                .catch((e: unknown) => {
                    this.setState({ writing: false });
                    console.error(`Cannot write profile: ${e as Error}`);
                });
        }, 2000);
    };

    currentProfile = (): ProfileData | null => {
        const foundProfile = this.state.object?.native.profiles.find(
            profile => profile.id === this.state.rxData.profile,
        );
        return foundProfile && foundProfile.type === 'profile' ? foundProfile.data : null;
    };

    getProfileMinMax(profile: ProfileData): MinMax {
        if (profile.type === 'custom') {
            const obj = this.state.minMaxObject;
            const common = obj?.common;
            if (common?.type === 'number') {
                if (common.states && !Array.isArray(common.states)) {
                    const keys = Object.keys(common.states)
                        .map(i => parseFloat(i))
                        .sort();
                    return {
                        min: keys[0],
                        max: keys[keys.length - 1],
                        unit: common.unit,
                        marks: common.states as Record<string, string>,
                    };
                }
                if (common.min !== undefined || common.max !== undefined) {
                    return {
                        min: common.min !== undefined ? common.min : 0,
                        max: common.max !== undefined ? common.max : 100,
                        unit: common.unit,
                        marks: null,
                    };
                }
            }
            return {
                min: 0,
                max: 100,
                marks: null,
                unit: common?.unit,
            };
        }
        if (profile.type === 'temperature') {
            const common = this.state.minMaxObject?.common;
            if (common && (common.min !== undefined || common.max !== undefined)) {
                return {
                    min: common.min !== undefined ? common.min : defaultMinMax.temperature.min,
                    max: common.max !== undefined ? common.max : defaultMinMax.temperature.max,
                    unit: common.unit || defaultMinMax[profile.type].unit,
                    marks: null,
                };
            }
        }

        return {
            min: defaultMinMax[profile.type].min,
            max: defaultMinMax[profile.type].max,
            step: defaultMinMax[profile.type].step,
            marks: null,
            unit: defaultMinMax[profile.type].unit,
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): JSX.Element | JSX.Element[] | null {
        super.renderWidgetBody(props);

        if (!this.state.rxData.instance && this.state.rxData.instance !== 0) {
            return <div>{SchedulerWidget.t('instance_not_selected')}</div>;
        }

        if (!this.state.object) {
            return null;
        }

        const profile = this.currentProfile();

        if (!profile) {
            return <div>{SchedulerWidget.t('profile_not_selected')}</div>;
        }

        if (!this.widgetRef.current?.offsetWidth) {
            setTimeout(() => this.forceUpdate(), 100);
        }

        const showDow = !this.state.rxData.hideDow;
        let width = (this.widgetRef.current?.offsetWidth || 0) - (showDow ? 76 : 0);
        if (width < 0) {
            width = 0;
        }

        const content = (
            <div
                style={styles.content}
                ref={this.widgetRef}
            >
                {this.state.writing ? (
                    <LinearProgress
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: 0,
                            left: 0,
                            width: '100%',
                        }}
                    />
                ) : null}
                {width ? (
                    <div style={styles.intervals}>
                        <IntervalsContainer
                            id={this.props.id}
                            onChange={this.onIntervals}
                            theme={this.props.context.theme}
                            intervals={profile.intervals}
                            range={profile.intervalDuration}
                            type={profile.type}
                            readOnly={this.state.rxData.readOnly}
                            intervalsWidth={width}
                            minMax={this.getProfileMinMax(profile)}
                            t={SchedulerWidget.t}
                        />
                    </div>
                ) : null}
                {showDow && width ? (
                    <div style={styles.days}>
                        <DayOfWeekPanel
                            firstDayOfWeek={this.props.context.socket.systemConfig?.common?.firstDayOfWeek || 'monday'}
                            readOnly={this.state.rxData.readOnly}
                            dow={profile.dow}
                            holiday={profile.holiday}
                            holidayVisible={!!this.state.object.native.holidayId}
                            onChange={this.onDow}
                            columns={1}
                            t={SchedulerWidget.t}
                        />
                    </div>
                ) : null}
            </div>
        );

        if (this.state.rxData.noCard || props.widget.usedInWidget) {
            return content;
        }

        return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' });
    }
}
