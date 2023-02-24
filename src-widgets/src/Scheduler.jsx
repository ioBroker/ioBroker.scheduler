import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

import {
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

import { VisRxWidget } from '@iobroker/vis-2-widgets-react-dev';

import IntervalsContainer from './components/IntervalsContainer';
import DayOfWeekPanel from './components/DayOfWeekPanel';

const styles = () => ({
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
});

const ProfileSelector = props => {
    const [object, setObject] = useState(null);
    useEffect(() => {
        props.socket.getObject(`system.adapter.scheduler.${props.data.instance}`).then(_object => setObject(_object));
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

const Generic = window.visRxWidget || VisRxWidget;

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
                        label: 'instance',
                        name: 'instance',
                        type: 'instance',
                        adapter: 'scheduler',
                        isShort: true,
                    },
                    {
                        label: 'scheduler',
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
                        label: 'name',
                        name: 'name',
                        tooltip: 'used_only_with_relative',
                        default: '',
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

        if (!this.state.rxData.instance) {
            return <div>{I18n.t('Instance not selected')}</div>;
        }

        if (!this.state.object) {
            return null;
        }

        console.log(this.state.object);

        const profile  = this.currentProfile();

        if (!profile) {
            return <div>{Generic.t('profile_not_selected')}</div>;
        }

        if (!this.widgetRef.current?.offsetWidth) {
            this.forceUpdate();
        }

        let width = (this.widgetRef.current?.offsetWidth || 0) - (this.state.rxData.hideDow ? 0 : 80);
        if (width < 0) {
            width = 0;
        }

        const content = <div
            className={this.props.classes.content}
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
                readOnly={this.state.rxData.readOnly}
                intervalsWidth={width}
            />
            {this.state.rxData.hideDow ? null :
                <DayOfWeekPanel
                    firstDayOfWeek={this.props.socket.systemConfig.common.firstDayOfWeek || 'monday'}
                    readOnly={this.state.rxData.readOnly}
                    dow={profile.dow}
                    onChange={this.onDow}
                    theme={this.props.theme}
                />}
        </div>;

        if (this.state.rxStyle.position === 'relative') {
            return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' });
        }

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
