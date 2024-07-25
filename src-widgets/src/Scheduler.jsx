import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    LinearProgress,
    MenuItem,
    Select,
} from '@mui/material';

import {
    Schedule as ScheduleIcon,
} from '@mui/icons-material';

import {
    IconClosed as FolderIcon,
    I18n,
} from '@iobroker/adapter-react-v5';

import IntervalsContainer from './components/IntervalsContainer';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import minmax from './data/minmax.json';

const styles = {
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
};

const ProfileSelector = props => {
    const [object, setObject] = useState(null);
    useEffect(() => {
        props.context.socket.getObject(`system.adapter.scheduler.${props.data.instance}`)
            .then(_object => setObject(_object));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!object) {
        return null;
    }

    const profilesArray = [];

    const profileRecursive = (profiles, level) => {
        profiles.forEach(profile => {
            profilesArray.push({
                profile,
                level,
            });
            if (object.native.profiles.filter(p => p.parent === profile.id).length) {
                profileRecursive(object.native.profiles.filter(p => p.parent === profile.id), level + 1);
            }
        });
    };

    profileRecursive(object.native.profiles.filter(p => !p.parent), 0);

    console.log(profilesArray);

    return <Select
        style={{ width: '100%' }}
        value={props.data[props.field.name]}
        onChange={e => {
            const data = { ...props.data, [props.field.name]: e.target.value };
            const oldProfile = profilesArray.find(p => p.profile.id === props.data[props.field.name]);
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
        {profilesArray.map(profile =>
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
            </MenuItem>)}
    </Select>;
};

class Scheduler extends window.visRxWidget {
    static getWidgetInfo() {
        return {
            id: 'tplScheduler',
            visSet: 'scheduler',
            visWidgetLabel: 'scheduler',  // Label of widget
            visSetLabel: 'set_label', // Label of the widget set
            visSetColor: '#70BBF7', // color of the widget set
            visName: 'Scheduler',
            visAttrs: [{
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
                        hidden: data => !data.instance && data.instance !== 0,
                        component: (field, data, setData, props) => <ProfileSelector
                            field={field}
                            data={data}
                            setData={setData}
                            context={props.context}
                            selectedWidgets={props.selectedWidgets}
                            selectedView={props.selectedView}
                        />,
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
            }],
            visDefaultStyle: {
                width: '100%',
                height: 355,
                position: 'relative',
            },
            visPrev: 'widgets/scheduler/img/prev_scheduler.png',
        };
    }

    static t(key, ...args) {
        return I18n.t(`scheduler_${key}`, ...args);
    }

    constructor(props) {
        super(props);
        this.widgetRef = React.createRef();
    }

    async propertiesUpdate() {
        // calculate current instance
        const instanceId = this.state.rxData.instance || this.state.rxData.instance === 0 ? `system.adapter.scheduler.${this.state.rxData.instance}` : '';

        // if instance changed
        if (this.subscribedId !== instanceId) {
            // unsubscribe from old instance
            this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged);
            this.subscribedId = instanceId;

            if (this.subscribedId) {
                // read new instance
                const object = await this.props.context.socket.getObject(this.subscribedId);
                const profile = object.native.profiles.find(p => p.id === this.state.rxData.profile);
                const newState = { object };
                if (profile) {
                    const minMaxObjectId = profile.data.type === 'custom' ? profile.data.members[0] : '';
                    if (minMaxObjectId !== this.minMaxObjectId) {
                        this.minMaxObjectId = minMaxObjectId;
                        let minMaxObject;
                        if (this.minMaxObjectId) {
                            minMaxObject = await this.props.context.socket.getObject(this.minMaxObjectId);
                        } else {
                            minMaxObject = null;
                        }
                        newState.minMaxObject = minMaxObject;
                    }
                }

                await this.props.context.socket.subscribeObject(this.subscribedId, this.onProfileChanged);

                this.setState(newState);
            } else {
                this.setState({ object: null });
            }
        } else if (this.state.object && this.state.rxData.profile) {
            const profile = this.state.object.native.profiles.find(p => p.id === this.state.rxData.profile);
            const minMaxObjectId = profile.data.type === 'custom' || profile.data.type === 'temperature' ? profile.data.members[0] : '';
            if (minMaxObjectId !== this.minMaxObjectId) {
                this.minMaxObjectId = minMaxObjectId;
                let minMaxObject;
                if (this.minMaxObjectId) {
                    minMaxObject = await this.props.context.socket.getObject(this.minMaxObjectId);
                } else {
                    minMaxObject = null;
                }
                this.setState({ minMaxObject });
            }
        }
    }

    componentDidMount() {
        super.componentDidMount();
        this.propertiesUpdate();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged);
    }

    onProfileChanged = (id, obj) => {
        if (id === this.state.object._id) {
            const profileOld = this.state.object.native.profiles.find(
                profile => profile.id === this.state.rxData.profile,
            );

            const profileNew = obj.native?.profiles?.find(
                profile => profile.id === this.state.rxData.profile,
            );

            if (JSON.stringify(profileOld) !== JSON.stringify(profileNew)) {
                this.setState({ object: obj });
            }
        }
    };

    onRxDataChanged() {
        this.propertiesUpdate();
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return Scheduler.getWidgetInfo();
    }

    onDow = (day, enabled) => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        if (day === 'holiday') {
            profile.holiday = enabled;
        } else if (enabled && !profile.dow.includes(day)) {
            profile.dow.push(day);
        } else if (!enabled && profile.dow.includes(day)) {
            profile.dow.splice(profile.dow.indexOf(day), 1);
        }
        this.changeProfile(profile);
    };

    onIntervals = intervals => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.intervals = intervals;
        this.changeProfile(profile);
    };

    changeProfile = newData => {
        if (this.state.rxData.readOnly) {
            return;
        }
        const object = JSON.parse(JSON.stringify(this.state.object));
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
        this.writeTimeout = setTimeout(async _object => {
            this.writeTimeout = null;
            await this.props.context.socket.setObject(_object._id, _object);
            this.setState({ writing: false });
        }, 2000, object);
    };

    currentProfile = () => {
        const foundProfile = this.state.object.native.profiles.find(profile => profile.id === this.state.rxData.profile);
        return foundProfile ? foundProfile.type === 'profile' && foundProfile.data : null;
    };

    getProfileMinMax(profile) {
        if (profile.type === 'custom') {
            const obj = this.state.minMaxObject;
            if (obj?.common?.type === 'number') {
                if (obj.common.states && !Array.isArray(obj.common.states)) {
                    const keys = Object.keys(obj.common.states).map(i => parseFloat(i)).sort();
                    return {
                        min: keys[0],
                        max: keys[keys.length - 1],
                        unit: obj.common.unit,
                        marks: obj.common.states,
                    };
                }
                if (obj.common.min !== undefined || obj.common.max !== undefined) {
                    return {
                        min: obj.common.min !== undefined ? obj.common.min : 0,
                        max: obj.common.max !== undefined ? obj.common.max : 100,
                        unit: obj.common.unit,
                        marks: null,
                    };
                }
            }
            return {
                min: 0,
                max: 100,
                marks: null,
                unit: obj?.common?.unit,
            };
        }
        if (profile.type === 'temperature') {
            const obj = this.state.minMaxObject;
            if (obj?.common && (obj.common.min !== undefined || obj.common.max !== undefined)) {
                return {
                    min: obj.common.min !== undefined ? obj.common.min : minmax.temperature.min,
                    max: obj.common.max !== undefined ? obj.common.max : minmax.temperature.max,
                    unit: obj.common.unit || minmax[profile.type].unit,
                    marks: null,
                };
            }
        }

        return {
            min: minmax[profile.type].min,
            max: minmax[profile.type].max,
            step: minmax[profile.type].step,
            marks: null,
            unit: minmax[profile.type].unit,
        };
    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        if (!this.state.rxData.instance) {
            return <div>{Scheduler.t('instance_not_selected')}</div>;
        }

        if (!this.state.object) {
            return null;
        }

        console.log(this.state.object);

        const profile  = this.currentProfile();

        if (!profile) {
            return <div>{Scheduler.t('profile_not_selected')}</div>;
        }

        if (!this.widgetRef.current?.offsetWidth) {
            setTimeout(() => this.forceUpdate(), 100);
        }

        let width = (this.widgetRef.current?.offsetWidth || 0) - (this.state.rxData.hideDow ? 0 : 80);
        if (width < 0) {
            width = 0;
        }

        const content = <div
            style={styles.content}
            ref={this.widgetRef}
        >
            {this.state.writing ? <LinearProgress
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: 0,
                    left: 0,
                    width: '100%',
                }}
            /> : null}
            {width ? <IntervalsContainer
                id={this.props.id}
                onChange={this.onIntervals}
                theme={this.props.context.theme} // ?? this.props.context.theme
                intervals={profile.intervals}
                range={profile.intervalDuration}
                type={profile.type}
                socket={this.props.context.socket}
                windowWidth={width}
                readOnly={this.state.rxData.readOnly}
                intervalsWidth={width}
                minMax={this.getProfileMinMax(profile)}
                t={Scheduler.t}
            /> : null}
            {this.state.rxData.hideDow && width ? null :
                <DayOfWeekPanel
                    firstDayOfWeek={this.props.context.socket.systemConfig.common.firstDayOfWeek || 'monday'}
                    readOnly={this.state.rxData.readOnly}
                    dow={profile.dow}
                    holiday={profile.holiday}
                    holidayVisible={!!this.state.object.native.holidayId}
                    onChange={this.onDow}
                    theme={this.props.context.theme} // ?? this.props.context.theme
                    t={Scheduler.t}
                />}
        </div>;

        if (this.state.rxData.noCard || props.widget.usedInWidget) {
            return content;
        }

        return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 50px)' });
    }
}

Scheduler.propTypes = {
    context: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default Scheduler;
