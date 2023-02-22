import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

import { MenuItem, Select } from '@mui/material';

import { I18n } from '@iobroker/adapter-react-v5';

import Generic from './Generic';
import IntervalsContainer from './components/IntervalsContainer';
import DayOfWeekPanel from './components/DayOfWeekPanel';

const styles = () => ({
});

const ProfileSelector = props => {
    const [object, setObject] = useState(null);
    useEffect(() => {
        props.socket.getObject(`system.adapter.scheduler.${props.data.instance}`).then(_object => setObject(_object));
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
        value={props.data[props.field.name]}
        onChange={e => props.setData({ ...props.data, [props.field.name]: e.target.value })}
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
            >
                <div
                    style={{
                        paddingLeft: profile.level * 20,
                    }}
                >
                    {profile.profile.title}
                </div>
            </MenuItem>)}
    </Select>;
};

class Scheduler extends Generic {
    static getWidgetInfo() {
        return {
            id: 'tplScheduler',
            visSet: 'scheduler',
            visWidgetLabel: 'scheduler',  // Label of widget
            visSetLabel: 'set_label', // Label of widget set
            visName: 'Scheduler',
            visAttrs: [{
                name: 'common',
                fields: [
                    {
                        label: 'Instance',
                        name: 'instance',
                        type: 'instance',
                        adapter: 'scheduler',
                        isShort: true,
                    },
                    {
                        label: 'Scheduler',
                        name: 'profile',
                        type: 'custom',
                        hidden: data => !data.instance && data.instance !== 0,
                        component: (field, data, setData, props) => <ProfileSelector
                            field={field}
                            data={data}
                            setData={setData}
                            socket={props.socket}
                            selectedWidgets={props.selectedWidgets}
                            selectedView={props.selectedView}
                            project={props.project}
                            projectName={props.projectName}
                            instance={props.instance}
                            adapterName={props.adapterName}
                        />,
                    },
                    {
                        label: 'Read only',
                        name: 'readOnly',
                        type: 'checkbox',
                        default: false,
                    },
                ],
            }],
            visDefaultStyle: {
                width: '100%',
                height: 120,
                position: 'relative',
            },
            visPrev: 'widgets/scheduler/img/prev_scheduler.png',
        };
    }

    constructor(props) {
        super(props);
        this.widgetRef = React.createRef();
    }

    async propertiesUpdate() {
        const object = await this.props.socket.getObject(`system.adapter.scheduler.${this.state.rxData.instance}`);
        this.setState({ object });
    }

    componentDidMount() {
        super.componentDidMount();
        this.propertiesUpdate();
    }

    onRxDataChanged() {
        this.propertiesUpdate();
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return Scheduler.getWidgetInfo();
    }

    onDow = (day, enabled) => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        if (enabled && !profile.dow.includes(day)) {
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
        this.props.socket.setObject(object._id, object);
    };

    currentProfile = () => {
        const foundProfile = this.state.object.native.profiles.find(profile => profile.id === this.state.rxData.profile);
        return foundProfile ? foundProfile.type === 'profile' && foundProfile.data : null;
    };

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        if (!this.state.object) {
            return null;
        }

        console.log(this.state.object);

        const profile  = this.currentProfile();

        if (!profile) {
            return <div>{I18n.t('Profile not selected')}</div>;
        }

        if (!this.widgetRef.current?.offsetWidth) {
            this.forceUpdate();
        }

        let width = (this.widgetRef.current?.offsetWidth || 0) - 80;
        if (width < 0) {
            width = 0;
        }

        const content = <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
            }}
            ref={this.widgetRef}
        >
            <IntervalsContainer
                onChange={this.onIntervals}
                theme={this.props.theme}
                intervals={profile.intervals}
                range={profile.intervalDuration}
                type={profile.type}
                socket={this.props.socket}
                windowWidth={width}
                intervalsWidth={width}
            />
            <DayOfWeekPanel
                firstDayOfWeek={this.props.socket.systemConfig.common.firstDayOfWeek || 'monday'}
                dow={profile.dow}
                onChange={this.onDow}
                theme={this.props.theme}
            />
        </div>;

        return content;
    }
}

Scheduler.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default withStyles(styles)(withTheme(Scheduler));
