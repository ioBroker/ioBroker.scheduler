import React from 'react';
import './App.scss';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GenericApp from '@iobroker/adapter-react/GenericApp';
import Loader from '@iobroker/adapter-react/Components/Loader';
import Fab from '@material-ui/core/Fab';
import { Drawer, Grid, IconButton } from '@material-ui/core';

import I18n from '@iobroker/adapter-react/i18n';
import Utils from '@iobroker/adapter-react/Components/Utils';

// import defaultOptions from './data/defaultOptions.json'

import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ViewListIcon from '@material-ui/icons/ViewList';
// import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import minmax from './data/minmax.json';
import DevicesPanel from './components/DevicesPanel';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import IntervalsContainer from './components/IntervalsContainer';
import PriorityPanel from './components/PriorityPanel';
import TypePanel from './components/TypePanel';
import ProfilesPanel from './components/ProfilesPanel';
import StatePanel from './components/StatePanel';

const styles = theme => {
    const mobilePanel = {
    };
    const leftRSM = {
        position: 'absolute',
        zIndex: 2000,
        color: '#FF0000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: 7,
        transition: 'all 300ms ease-out',
        '&.active':
        {
            color: '#FFF',
        },
    };
    return {
        app: {
            display: 'flex',
            position: 'relative',
            height: 'calc(100% - 64px)',
            backgroundColor: theme.palette.background.paper,
        },
        mobileScrolled:
        {
            overflowY: 'auto',
        },
        drawer: {
            display: 'flex',
            flexGrow: 0,
            maxWidth: 330,
            width: 330,
            flexBasis: 330,
            transition: 'width 300ms ease-in',
        },
        drawerPaper: {
            height: 'calc(100% - 64px)',
        },
        drGrid: {
            width: 330,
            transition: 'width 300ms ease-in',
        },
        drawerClose: {
            width: 40,
            maxWidth: 40,
            flexBasis: 40,
            transition: 'width 300ms ease-in',
        },
        drGridClose: {
            transition: 'width 300ms ease-in',
        },
        tapperGrid: {
            margin: 0,
            boxShadow: 'none',
            borderRadius: 0,
            alignItems: 'center',
            padding: 10,
            '@media (max-width:570px)':
            {
                margin: 0,
                boxShadow: 'none',
                borderRadius: 0,
                alignItems: 'center',
                padding: '0px 10px 0 60px',
            },
        },
        flowDark: {
            width: 26,
            height: 28,
            maxHeight: 28,
            minHeight: 28,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            position: 'relative',
            '&::before':
            {
                content: '',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: 0,
                marginTop: 0,
                width: 0,
                height: 0,
                transition: 'all 200ms ease-out',
                opacity: 0,
            },
        },
        closeLabelLeftSm:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                height: 60,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
        labelLeftSm1:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
            },
        },
        labelLeftSm2:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 60,
            },
        },
        labelRightSm3:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 60,
            },
        },
        labelRightSm4:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 11,
            },
        },
        labelRightSm5:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 110,
            },
        },
        labelRightSm6:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 10,
            },
        },
        labelRightSm7:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 60,
            },
        },
        labelRightSm8:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 160,
            },
        },
        labelMenu:
        {
            display: 'none',
            '@media (max-width:570px)':
            {

            },
        },
        labelNenuBottom:
        {
            display: 'none',
            '@media (max-width:570px)':
            {

            },
        },
        labelMenuBottom:
        {
            display: 'none',
            '@media (max-width:768px)':
            {
                top: 'auto',
                bottom: -75,
                transform: 'skewY(11deg)',
                height: 290,
            },

        },
        root: {},
        tabContent: {
            padding: 10,
            height: 'calc(100% - 64px - 48px - 20px)',
            overflow: 'auto',
        },
        tabContentIFrame: {
            padding: 10,
            height: 'calc(100% - 64px - 48px - 20px - 38px)',
            overflow: 'auto',
        },
        paneling: {
            backgroundColor: theme.palette.background.paper,
        },
        mobilePanel,
        slidersContainer: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        emptyProfile: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: theme.palette.text.primary,
        },

    };
};

const AntTabs = withStyles({
    root: {
        margin: 0,
        width: '100%',
        justifyContent: 'center',
    },
    indicator: {
        transition: 'all 300ms ease-out',
    },
})(Tabs);

const AntTab = withStyles(() => ({
    root: {
        // backgroundColor:'#444',
        minWidth: 140,
        fontWeight: 700,
        fontSize: '0.75rem',
        opacity: 1,
    },
    selected: {},
}))(props => <Tab {...props} />);

class App extends GenericApp {
    constructor(props) {
        const extendedProps = { ...props };
        extendedProps.translations = {
            en: require('./i18n/en'),
            de: require('./i18n/de'),
            ru: require('./i18n/ru'),
            pt: require('./i18n/pt'),
            nl: require('./i18n/nl'),
            fr: require('./i18n/fr'),
            it: require('./i18n/it'),
            es: require('./i18n/es'),
            pl: require('./i18n/pl'),
            'zh-cn': require('./i18n/zh-cn'),
        };

        extendedProps.sentryDSN = window.sentryDSN;

        super(props, extendedProps);

        this.state = {
            ...this.state,
            isDrawOpen: window.localStorage.getItem('iobroker.scheduler.isDrawOpen') === null ? true
                : JSON.parse(window.localStorage.getItem('iobroker.scheduler.isDrawOpen')),
            activeProfile: window.localStorage.getItem('iobroker.scheduler.activeProfile') || -1,
            isExpert: true,
            leftOpen: 0,
            devicesCache: {},
        };

        // icon cache
        this.icons = {};
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth - Math.random(),
            windowHeight: window.innerHeight,
        });
    }

    onLeftOpen = panelIndex => {
        this.setState({
            leftOpen: this.state.leftOpen === panelIndex ? 0 : panelIndex,
        });
    }

    onDrawerHandler = () => {
        window.localStorage.setItem('iobroker.scheduler.isDrawOpen', !this.state.isDrawOpen);
        this.setState({
            isDrawOpen: !this.state.isDrawOpen,
        });
        setTimeout(() => this.updateWindowDimensions(), 200);
    }

    currentProfile = () => {
        const findedProfile = this.state.native.profiles.find(
            profile => profile.id === this.state.activeProfile,
        );
        return findedProfile ? findedProfile.type === 'profile' && findedProfile.data : null;
    }

    changeProfile = newData => {
        const profiles = JSON.parse(JSON.stringify(this.state.native.profiles));
        const profileIndex = this.state.native.profiles.findIndex(
            profile => profile.id === this.state.activeProfile,
        );
        profiles[profileIndex].data = newData;
        this.fullUpdateNativeValue('profiles', profiles);
    }

    onType = type => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.type = type;
        if (type !== this.currentProfile().type) {
            const oldMax = minmax[this.currentProfile().type].max;
            const newMax = minmax[type].max;

            profile.intervals = profile.intervals.map(interval => {
                const normalizedInterval = Math.round((newMax / oldMax) * interval);
                if (normalizedInterval < minmax[type].min) {
                    return minmax[type].min;
                }
                if (normalizedInterval > minmax[type].max) {
                    return minmax[type].max;
                }
                return normalizedInterval;
            });
        }
        this.changeProfile(profile);
    }

    onPriority = priority => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.prio = priority;
        this.changeProfile(profile);
    }

    onDevices = devices => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.members = devices;
        this.changeProfile(profile);
    }

    onState = state => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.state = state;
        if (profile.state !== this.getStateId(this.state.native.profiles.find(
            foundProfile => foundProfile.id === this.state.activeProfile,
        ).title)) {
            profile.enabled = true;
        }
        this.changeProfile(profile);
    }

    onDow = (day, enabled) => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        if (enabled && !profile.dow.includes(day)) {
            profile.dow.push(day);
        } else if (!enabled && profile.dow.includes(day)) {
            profile.dow.splice(profile.dow.indexOf(day), 1);
        }
        this.changeProfile(profile);
    }

    onIntervals = intervals => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.intervals = intervals;
        this.changeProfile(profile);
    }

    onSelectProfile = active => {
        this.setState({ activeProfile: active, leftOpen: false });
        window.localStorage.setItem('iobroker.scheduler.activeProfile', active);
    }

    changeProfiles = profiles => {
        this.fullUpdateNativeValue('profiles', profiles);
    }

    fullUpdateNativeValue(attr, value) {
        const native = JSON.parse(JSON.stringify(this.state.native));
        native[attr] = value;
        const changed = this.getIsChanged(native);
        this.setState({ native, changed });
    }

    onRange = (event, intervalDuration) => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.intervalDuration = intervalDuration;
        if (this.currentProfile().intervalDuration < intervalDuration) {
            const relation = intervalDuration / this.currentProfile().intervalDuration;
            const newIntervals = [];
            for (let i = 0; i < this.currentProfile().intervals.length; i += relation) {
                newIntervals.push(this.currentProfile().intervals.slice(i, i + relation));
            }
            profile.intervals = newIntervals.map(
                chunk => Math.round(chunk.reduce((a, b) => a + b, 0) / relation),
            );
        }
        if (this.currentProfile().intervalDuration > intervalDuration) {
            const relation = this.currentProfile().intervalDuration / intervalDuration;
            const newIntervals = [];
            let newIndex = 0;
            this.currentProfile().intervals.forEach(interval => {
                for (let shift = 0; shift < relation; shift++) {
                    newIntervals[newIndex] = interval;
                    newIndex++;
                }
            });
            profile.intervals = newIntervals;
        }
        this.changeProfile(profile);
        this.onLeftOpen(this.state.leftOpen);
    }

    onConnectionReady() {
        if (!this.state.native.profiles) {
            const native = {
                profiles: [],
            };
            this.setState({ native });
            this.savedNative = native;
        }
    }

    renderProfile() {
        const { activeProfile } = this.state;
        const { profiles } = this.state.native;

        return <ProfilesPanel
            active={activeProfile}
            profiles={profiles}
            onSelectProfile={this.onSelectProfile}
            onChangeProfiles={this.changeProfiles}
            theme={this.props.theme}
        />;
    }

    renderRange() {
        const profile = this.currentProfile();

        return <div className="mt-sm-auto mb-sm-auto w-100">
            <AntTabs
                value={profile.intervalDuration}
                onChange={this.onRange}
                orientation={this.state.windowWidth < 768 ? 'vertical' : 'horizontal'}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {
                    [0.5, 1, 2, 3, 4].map(
                        duration => <AntTab key={duration} value={duration} label={`${duration} ${I18n.t('hr')}`} />,
                    )
                }
            </AntTabs>
        </div>;
    }

    renderType() {
        return <div className="mt-sm-auto mb-sm-auto">
            <div>
                <TypePanel
                    onChange={this.onType}
                    type={this.currentProfile().type}
                />
            </div>
        </div>;
    }

    renderDow() {
        return <div className="mt-sm-auto mb-sm-auto">
            <DayOfWeekPanel
                dow={this.currentProfile().dow}
                onChange={this.onDow}
                theme={this.state.theme}
            />
        </div>;
    }

    renderPriority() {
        return <div className="mt-sm-auto mb-sm-auto">
            <div>
                <PriorityPanel
                    profile={this.currentProfile()}
                    onChange={this.onPriority}
                    priority={this.currentProfile().prio}
                    windowWidth={this.state.windowWidth}
                />
            </div>
        </div>;
    }

    renderDevices() {
        return <div className="mt-sm-auto mb-sm-auto wc-100">
            <DevicesPanel
                members={this.currentProfile().members}
                onChange={this.onDevices}
                title="Devices"
                isExpert={this.state.isExpert}
                rows={1}
                socket={this.socket}
                windowWidth={this.state.windowWidth}
                devicesCache={this.state.devicesCache}
                type={this.currentProfile().type}
                prio={this.currentProfile().prio}
                profiles={this.state.native.profiles}
                icons={this.icons}
            />
        </div>;
    }

    renderState() {
        return <div className="mt-sm-auto mb-sm-auto wc-100">
            <StatePanel
                value={this.currentProfile().state}
                instance={this.instance}
                profileTitle={this.state.native.profiles
                    .find(profile => profile.id === this.state.activeProfile).title}
                onChange={this.onState}
                socket={this.socket}
            />
        </div>;
    }

    renderDrawer() {
        if (this.state.windowWidth >= 768) {
            return null;
        }
        let content = null;
        if (this.state.leftOpen === 1) {
            content = this.renderProfile();
        } else if (this.state.leftOpen === 2) {
            content = this.renderType();
        } else if (this.state.leftOpen === 3) {
            content = this.renderDow();
        } else if (this.state.leftOpen === 4) {
            content = this.renderPriority();
        } else if (this.state.leftOpen === 5) {
            content = this.renderDevices();
        } else if (this.state.leftOpen === 7) {
            content = this.renderRange();
        } else if (this.state.leftOpen === 8) {
            content = this.renderState();
        }

        return <Drawer
            anchor="left"
            PaperProps={{
                style: { width: '100%' },
            }}
            open={!!content && this.state.leftOpen}
        >
            <div
                className={
                    `${this.props.classes.tapperGrid
                    } h-100 m-1 p-2 ${this.props.classes.mobilePanel} active`
                }
            >
                <div
                    className={`${this.props.classes.flowDark} ${this.props.classes.closeLabelLeftSm}`}
                    onClick={() => this.onLeftOpen(this.state.leftOpen)}
                >
                    <ClearIcon />
                </div>
                {content}
            </div>
        </Drawer>;
    }

    static getParentId(id) {
        const pos = id.lastIndexOf('.');
        if (pos !== -1) {
            return id.substring(0, pos);
        }

        return id;
    }

    async getObjectSafe(id) {
        let obj;
        try {
            obj = (await this.socket.getObject(id)) || false;
            if (obj && obj.native) {
                delete obj.native;
            }
        } catch (e) {
            // console.error('Cannot read object ' + id);
        }
        return obj;
    }

    async updateDevices(devices) {
        const devicesCache = JSON.parse(JSON.stringify(this.state.devicesCache));

        let changed = false;

        for (let d = 0; d < devices.length; d++) {
            const id = devices[d];
            if (!this.state.devicesCache[id] && this.state.devicesCache[id] !== false) {
                // eslint-disable-next-line
                const obj = await this.getObjectSafe(id);

                if (!devicesCache[id] || JSON.stringify(obj) !== JSON.stringify(devicesCache[id])) {
                    devicesCache[id] = obj || false;
                    changed = obj;

                    // find icon
                    let icon = Utils.getObjectIcon(id, devicesCache[id]);
                    if (!icon) {
                        let parentId = App.getParentId(id);
                        if (!devicesCache[parentId] && devicesCache[parentId] !== false) {
                            // eslint-disable-next-line
                            devicesCache[parentId] = await this.getObjectSafe(parentId);
                        }

                        if (devicesCache[parentId] && devicesCache[parentId].type === 'channel') {
                            icon = Utils.getObjectIcon(parentId, devicesCache[parentId]);
                            if (!icon) {
                                parentId = App.getParentId(parentId);
                                if (!devicesCache[parentId] && devicesCache[parentId] !== false) {
                                    // eslint-disable-next-line
                                    devicesCache[parentId] = await this.getObjectSafe(parentId);
                                }
                                if (devicesCache[parentId] && devicesCache[parentId].type === 'device') {
                                    icon = Utils.getObjectIcon(parentId, devicesCache[parentId]);
                                }
                            }
                        }
                    }
                    if (icon) {
                        this.icons[id] = icon;
                    }
                }
            }
        }

        if (changed) {
            this.setState({ devicesCache });
        }
    }

    checkDevices() {
        const devices = [];
        this.state.native.profiles.forEach(profile => {
            if (profile.data && profile.data.members) {
                profile.data.members.forEach(device => {
                    if (!devices.includes(device)) {
                        devices.push(device);
                    }
                });
            }
        });

        devices.sort();
        const newLastDevices = JSON.stringify(devices);
        if (!this.lastDevices || newLastDevices !== this.lastDevices) {
            this.lastDevices = newLastDevices;
            setTimeout(() => this.updateDevices(devices), 300);
        }
    }

    getStateId(title) {
        return `scheduler.${this.instance}.${title.replace(Utils.FORBIDDEN_CHARS).replace(/./g, '_')}`;
    }

    onSave(isClose) {
        this.state.native.profiles.forEach(profile => {
            if (profile.type === 'profile') {
                const originalProfile = this.savedNative.profiles.find(foundProfile => foundProfile.id === profile.id);
                if (!originalProfile && profile.data.state === this.getStateId(profile.title)) {
                    this.socket.setObject(profile.data.state, {
                        common: {
                            type: 'boolean',
                            read: true,
                            write: true,
                            role: 'switch',
                            def: true,
                            name: profile.title,
                        },
                        type: 'state',
                    });
                }
            }
        });

        this.savedNative.profiles.forEach(profile => {
            if (profile.type === 'profile') {
                const changedProfile = this.state.native.profiles.find(foundProfile => foundProfile.id === profile.id);
                if (!changedProfile && profile.data.state === this.getStateId(profile.title)) {
                    this.socket.delObject(profile.data.state);
                }
                if (changedProfile
                    && profile.data.state === this.getStateId(profile.title)
                    && changedProfile.data.state === this.getStateId(changedProfile.title)
                    && profile.title !== changedProfile.title
                ) {
                    this.socket.getObject(profile.data.state)
                        .then(state => this.socket.setObject(changedProfile.data.state, state))
                        .then(() => this.socket.delObject(profile.data.state));
                }
            }
        });

        super.onSave(isClose);
    }

    render() {
        if (!this.state.loaded || !this.state.native.profiles) {
            return <MuiThemeProvider theme={this.state.theme}>
                <Loader theme={this.state.themeType} />
            </MuiThemeProvider>;
        }

        this.checkDevices();

        const { classes } = this.props;
        const profile = this.currentProfile();

        const profileGrid = <div className={`${classes.tapperGrid} ${classes.paneling} h-100 m-0`}>
            {this.renderProfile()}
        </div>;

        const profilePanel = this.state.windowWidth < 768
            ? null
            : <Drawer
                variant="persistent"
                anchor="left"
                open={this.state.isDrawOpen}
                classes={{
                    root: this.state.isDrawOpen ? classes.drawer : classes.drawerClose,
                    paper: classes.drawerPaper,
                }}
            >
                <div
                    className={this.state.isDrawOpen ? classes.drGrid : classes.drGridClose}
                >
                    <div className="absolute-right p-1">
                        <IconButton
                            component="span"
                            size="small"
                            title={I18n.t('finish searching')}
                            onClick={this.onDrawerHandler}
                        >
                            {
                                this.state.isDrawOpen
                                    ? <ChevronLeftIcon className="ml-auto" />
                                    : <ChevronRightIcon className="ml-auto" />
                            }
                        </IconButton>
                    </div>
                    {profileGrid}
                </div>
            </Drawer>;

        return <MuiThemeProvider theme={this.state.theme}>
            <div className={classes.app}>
                {profilePanel}
                <div
                    className={`${classes.labelLeftSm1} ${this.state.leftOpen === 1 ? 'active' : ''}`}
                    onClick={() => this.onLeftOpen(1)}
                >
                    <Fab
                        size="small"
                        color={this.state.leftOpen === 1 ? 'secondary' : 'primary'}
                        aria-label="add"
                    >
                        <DehazeIcon />
                    </Fab>
                </div>
                {this.renderDrawer()}
                <Grid
                    container
                    spacing={0}
                    style={{ background: this.state.theme.palette.background.paper }}
                    className={classes.mobileScrolled}
                >
                    {
                        this.currentProfile()
                            ? <>
                                <Grid item xs={12} lg={11} className={this.props.classes.slidersContainer}>
                                    <IntervalsContainer
                                        type={this.currentProfile().type}
                                        intervals={this.currentProfile().intervals}
                                        onChange={this.onIntervals}
                                        theme={this.state.theme}
                                        range={profile.intervalDuration}
                                        windowWidth={this.state.windowWidth}
                                    />
                                    {
                                        this.state.isExpert
                                            ? <div className={`${classes.tapperGrid} m-1 mt-1`}>
                                                {this.state.windowWidth > 768 ? this.renderRange() : null}
                                            </div>
                                            : null
                                    }
                                    <Grid
                                        container
                                        spacing={0}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            lg={6}
                                            className="h-100 expert sm-hidden"
                                        >
                                            <div
                                                className={`${classes.tapperGrid} m-1 p-2 mt-1`}
                                                style={{ flexGrow: 100 }}
                                            >
                                                {this.state.windowWidth > 768 ? this.renderDevices() : null}
                                            </div>
                                        </Grid>
                                        {
                                            this.state.isExpert
                                                ? <>
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        lg={1}
                                                        className="h-100 expert sm-hidden"
                                                    >
                                                        <div className={`${classes.tapperGrid} h-100 m-1 p-2`}>
                                                            {this.state.windowWidth > 768 ? this.renderPriority() : null}
                                                        </div>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        lg={2}
                                                        className="h-100 expert sm-hidden"
                                                    >
                                                        <div
                                                            className={`${classes.tapperGrid} h-100 m-1 p-2`}
                                                        >
                                                            {this.state.windowWidth > 768 ? this.renderType() : null}
                                                        </div>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        lg={3}
                                                        className="h-100 expert sm-hidden"
                                                    >
                                                        <div
                                                            className={`${classes.tapperGrid} h-100 m-1 p-2`}
                                                        >
                                                            {this.state.windowWidth > 768 ? this.renderState() : null}
                                                        </div>
                                                    </Grid>
                                                </>
                                                : null
                                        }
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    lg={1}
                                    className="h-100  sm-hidden"
                                >
                                    <div className={`${classes.tapperGrid} m-1 p-2 h-100`}>
                                        {this.state.windowWidth > 768 ? this.renderDow() : null}
                                    </div>
                                </Grid>

                                <div className={classes.labelMenuBottom} />

                                <div className={`${classes.labelRightSm5} ${this.state.leftOpen === 5 ? 'active' : ''}`} onClick={() => this.onLeftOpen(5)}>
                                    <Fab
                                        size="small"
                                        color={this.state.leftOpen === 5 ? 'secondary' : 'primary'}
                                        aria-label="split"
                                    >
                                        <CallSplitIcon />
                                    </Fab>
                                </div>
                                <div className={`${classes.labelRightSm3} ${this.state.leftOpen === 3 ? 'active' : ''}`} onClick={() => this.onLeftOpen(3)}>
                                    <Fab
                                        size="small"
                                        color={this.state.leftOpen === 3 ? 'secondary' : 'primary'}
                                        aria-label="calendar"
                                    >
                                        <CalendarTodayIcon />
                                    </Fab>
                                </div>
                                {
                                    this.state.isExpert
                                        ? <>
                                            <div className={classes.labelMenuBottom} />
                                            <div className={`${classes.labelLeftSm2} expert ${this.state.leftOpen === 2 ? 'active' : ''}`} onClick={() => this.onLeftOpen(2)}>
                                                <Fab
                                                    size="small"
                                                    color={this.state.leftOpen === 2 ? 'secondary' : 'primary'}
                                                    aria-label="assignment"
                                                >
                                                    <AssignmentTurnedInIcon />
                                                </Fab>
                                            </div>
                                            <div className={`${classes.labelRightSm6} ${this.state.leftOpen === 4 ? 'active' : ''}`} onClick={() => this.onLeftOpen(4)}>
                                                <Fab
                                                    size="small"
                                                    color={this.state.leftOpen === 4 ? 'secondary' : 'primary'}
                                                    aria-label="view"
                                                >
                                                    <ViewListIcon />
                                                </Fab>
                                            </div>
                                            {/* <div className={`${classes.labelRightSm4} ${this.state.leftOpen === 7 ? 'active' : ''}`} onClick={() => this.onLeftOpen(7)}>
                                                <Fab
                                                    size="small"
                                                    color={this.state.leftOpen === 7 ? 'secondary' : 'primary'}
                                                    aria-label="scheduler"
                                                >
                                                    <ScheduleIcon />
                                                </Fab>
                                            </div> */}
                                            <div className={`${classes.labelRightSm8} ${this.state.leftOpen === 8 ? 'active' : ''}`} onClick={() => this.onLeftOpen(8)}>
                                                <Fab
                                                    size="small"
                                                    color={this.state.leftOpen === 8 ? 'secondary' : 'primary'}
                                                    aria-label="scheduler"
                                                >
                                                    <AccountTreeIcon />
                                                </Fab>
                                            </div>
                                        </>
                                        : null
                                }
                            </>
                            : <div className={classes.emptyProfile}>
                                {I18n.t('Select or create profile in left menu')}
                            </div>
                    }

                    <div className="absolute-left p-1">
                        <IconButton
                            component="span"
                            size="small"
                            title={I18n.t('finish searching')}
                            onClick={this.onDrawerHandler}
                        >
                            <DehazeIcon />
                        </IconButton>
                    </div>
                </Grid>
            </div>
            {this.renderSaveCloseButtons()}
        </MuiThemeProvider>;
    }
}

export default withStyles(styles)(App);
