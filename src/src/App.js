import React from 'react';
import './App.scss';
import clsx from 'clsx';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GenericApp from '@iobroker/adapter-react/GenericApp';
import Loader from '@iobroker/adapter-react/Components/Loader';
import Fab from '@material-ui/core/Fab';

import I18n from '@iobroker/adapter-react/i18n';
// import defaultOptions from './data/defaultOptions.json'
import { Drawer, Grid } from '@material-ui/core';

import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ViewListIcon from '@material-ui/icons/ViewList';
import ScheduleIcon from '@material-ui/icons/Schedule';
import minmax from './data/minmax.json';
import DevicesPanel from './components/DevicesPanel';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import IntervalsContainer from './components/IntervalsContainer';
import PriorityPanel from './components/PriorityPanel';
import TypePanel from './components/TypePanel';
import ProfilesPanel from './components/ProfilesPanel';

const styles = theme => {
    const mobilePanel = {
        '@media (max-width:768px)':
        {
            position: 'absolute',
            top: 0,
            width: 'calc(100% - 70px)',
            left: 'calc(-100% - 70px)',
            zIndex: 2,
            transition: 'all 300ms ease-out',
            '&.active':
            {
                left: 0,
            }
        },
        '@media (max-width:570px)':
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 10px 0 60px !important',
            height: '100%',
            width: 'calc(100% - 70px)',
            left: 'calc(-100% - 70px)',
            background: theme.palette.background.paper,
        },
    };
    const leftRSM = {
        position: 'absolute',
        zIndex: 4,
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
        }
    }
    return {
        app: {
            display: 'flex',
            position: 'relative',
            height: 'calc(100% - 64px)',
            backgroundColor: theme.palette.background.paper,
        },
        mobileScrolled:
        {
            overflowY: 'auto'
        },
        drawer: {
            display: "flex",
            flexGrow: 0,
            maxWidth: 330,
            width: 330,
            flexBasis: 330,
            transition: "width 300ms ease-in"
        },
        drGrid: {
            width: 330,
            transition: "width 300ms ease-in"
        },
        drawerClose: {
            width: 40,
            maxWidth: 40,
            flexBasis: 40,
            transition: "width 300ms ease-in"
        },
        drGridClose: {
            width: 40,
            transition: "width 300ms ease-in"
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
            }
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
                content: "",
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: 0,
                marginTop: 0,
                width: 0,
                height: 0,
                transition: 'all 200ms ease-out',
                opacity: 0,
            }
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
            }
        },
        labelLeftSm1:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM
            }
        },
        labelLeftSm2:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                bottom: 61,
                top: 'auto',
            }
        },
        labelRightSm3:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 60
            }
        },
        labelRightSm4:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 11
            }
        },
        labelRightSm5:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 110
            }
        },
        labelRightSm6:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 110
            }
        },
        labelRightSm7:
        {
            display: 'none',
            '@media (max-width:570px)':
            {
                ...leftRSM,
                top: 'auto',
                bottom: 160
            }
        },
        labelMenu:
        {
            display: 'none',
            '@media (max-width:570px)':
            {

            }
        },
        labelNenuBottom:
        {
            display: 'none',
            '@media (max-width:570px)':
            {

            }
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
            }

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
        clip_left_sm_1: mobilePanel,
        clip_left_sm_2: mobilePanel,
        clip_left_sm_4: mobilePanel,
        clip_left_sm_5: mobilePanel,
        clip_left_sm_6: mobilePanel,
        clip_left_sm_7: mobilePanel,
        slidersContainer: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }

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
        extendedProps.encryptedFields = ['pass'];
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

        super(props, extendedProps);
        this.state = {
            ...this.state,
            isDrawOpen: true,
            activeProfile: -1, // defaultOptions.menu[0].id,
            isExpert: true,
            leftOpen: 0,
        };
    }

    componentWillMount() {
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
        this.setState({
            isDrawOpen: !this.state.isDrawOpen
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

    render() {
        if (!this.state.loaded || !this.state.native.profiles) {
            return (
                <MuiThemeProvider theme={this.state.theme}>
                    <Loader theme={this.state.themeType} />
                </MuiThemeProvider>
            );
        }

        const { classes } = this.props;
        const { activeProfile } = this.state;
        const profile = this.currentProfile();
        const { profiles } = this.state.native;

        const profileGrid = <>
            <div
                className={
                    classes.tapperGrid + " " +
                    classes.clip_left_sm_1 + " " +
                    classes.paneling + " " +
                    (this.state.leftOpen === 1 ? ' active ' : '') +
                    ` h-100 m-0 `
                }
            >
                <div
                    className={classes.flowDark + " " + classes.closeLabelLeftSm}
                    onClick={() => this.onLeftOpen(1)}
                >
                    <ClearIcon />
                </div>
                <ProfilesPanel
                    active={activeProfile}
                    profiles={profiles}
                    onSelectProfile={this.onSelectProfile}
                    onChangeProfiles={this.changeProfiles}
                    theme={this.props.theme}
                />
            </div>
            <div
                className={classes.labelLeftSm1 + ` ${this.state.leftOpen === 1 ? 'active' : ''}`}
                onClick={() => this.onLeftOpen(1)}
            >
                <Fab
                    size="small"
                    color={this.state.leftOpen === 1 ? "secondary" : "primary"}
                    aria-label="add"
                >
                    <DehazeIcon />
                </Fab>
            </div>
        </>
        const profilePanel = this.state.windowWidth < 768
            ?
            profileGrid
            :
            <Drawer
                variant="persistent"
                anchor="left"
                open={this.state.isDrawOpen}
                className={this.state.isDrawOpen ? classes.drawer : classes.drawerClose}
            >
                <div
                    className={this.state.isDrawOpen ? classes.drGrid : classes.drGridClose}
                >
                    <div className="absolute-right p-1" onClick={this.onDrawerHandler}>
                        {
                            this.state.isDrawOpen
                                ?
                                <ChevronLeftIcon className="ml-auto" />
                                :
                                <ChevronRightIcon className="ml-auto" />
                        }
                    </div>
                    {profileGrid}
                </div>
            </Drawer>

        return (
            <MuiThemeProvider theme={this.state.theme}>
                <div className={classes.app}>
                    {profilePanel}
                    <Grid
                        container
                        spacing={0}
                        style={{ background: this.state.theme.palette.background.paper }}
                        className={classes.mobileScrolled}
                    >
                        {
                            this.currentProfile()
                                ? (
                                    <>
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
                                                    ? (
                                                        <div
                                                            className={
                                                                classes.tapperGrid +
                                                                ` m-1 mt-1 ${classes.clip_left_sm_7
                                                                }${this.state.leftOpen === 7 ? ' active ' : ''}`
                                                            }
                                                        >
                                                            <div
                                                                className={classes.flowDark + " " + classes.closeLabelLeftSm}
                                                                onClick={() => this.onLeftOpen(7)}
                                                            >
                                                                <ClearIcon />
                                                            </div>
                                                            <div className="mt-sm-auto mb-sm-auto w-100">
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
                                                            </div>
                                                        </div>
                                                    )
                                                    : null
                                            }
                                            <Grid
                                                container
                                                spacing={0}
                                            >
                                                {
                                                    this.state.isExpert
                                                        ? (
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                lg={3}
                                                                className="h-100 expert sm-hidden"
                                                            >
                                                                <div
                                                                    className={
                                                                        classes.tapperGrid +
                                                                        ` h-100 m-1 p-2 ${classes.clip_left_sm_2
                                                                        }${this.state.leftOpen === 2 ? ' active ' : ''}`
                                                                    }
                                                                >
                                                                    <div
                                                                        className={classes.flowDark + " " + classes.closeLabelLeftSm}
                                                                        onClick={() => this.onLeftOpen(2)}
                                                                    >
                                                                        <ClearIcon />
                                                                    </div>
                                                                    <div className="mt-sm-auto mb-sm-auto">
                                                                        <div>
                                                                            <TypePanel
                                                                                onChange={this.onType}
                                                                                type={this.currentProfile().type}
                                                                            />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        )
                                                        : null
                                                }
                                                <Grid
                                                    item
                                                    xs={12}
                                                    lg={6}
                                                    className="h-100 expert sm-hidden"
                                                >
                                                    <div
                                                        className={
                                                            classes.tapperGrid +
                                                            ` m-1 p-2 mt-1 ${classes.clip_left_sm_5
                                                            }${this.state.leftOpen === 5 ? ' active ' : ''}`
                                                        }
                                                        style={{ flexGrow: 100 }}
                                                    >
                                                        <div
                                                            className={classes.flowDark + " " + classes.closeLabelLeftSm}
                                                            onClick={() => this.onLeftOpen(5)}
                                                        >
                                                            <ClearIcon />
                                                        </div>
                                                        <div className="mt-sm-auto mb-sm-auto wc-100">
                                                            <DevicesPanel
                                                                members={this.currentProfile().members}
                                                                onChange={this.onDevices}
                                                                title={this.state.isExpert ? 'Devices (expert)' : 'Devices'}
                                                                isExpert={this.state.isExpert}
                                                                rows={1}
                                                                windowWidth={this.state.windowWidth}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                {
                                                    this.state.isExpert
                                                        ? (
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                lg={3}
                                                                className="h-100 expert sm-hidden "
                                                            >
                                                                <div
                                                                    className={
                                                                        classes.tapperGrid +
                                                                        ` h-100 m-1 p-2 ${classes.clip_left_sm_4
                                                                        }${this.state.leftOpen === 4 ? ' active ' : ''}`
                                                                    }
                                                                >
                                                                    <div
                                                                        className={classes.flowDark + " " + classes.closeLabelLeftSm}
                                                                        onClick={() => this.onLeftOpen(4)}
                                                                    >
                                                                        <ClearIcon />
                                                                    </div>
                                                                    <div className="mt-sm-auto mb-sm-auto">
                                                                        <div>
                                                                            <PriorityPanel
                                                                                profile={this.currentProfile()}
                                                                                onChange={this.onPriority}
                                                                                priority={this.currentProfile().prio}
                                                                                windowWidth={this.state.windowWidth}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        )
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
                                            <div
                                                className={
                                                    classes.tapperGrid +
                                                    ` m-1 p-2 h-100 ${classes.clip_left_sm_2
                                                    }${this.state.leftOpen === 3 ? ' active ' : ''}`
                                                }
                                            >
                                                <div
                                                    className={classes.flowDark + " " + classes.closeLabelLeftSm}
                                                    onClick={() => this.onLeftOpen(3)}
                                                >
                                                    <ClearIcon />
                                                </div>
                                                <div className="mt-sm-auto mb-sm-auto">
                                                    <DayOfWeekPanel
                                                        dow={this.currentProfile().dow}
                                                        onChange={this.onDow}
                                                    />
                                                </div>
                                            </div>

                                        </Grid>

                                        <div className={classes.labelMenuBottom} />

                                        <div className={classes.labelRightSm5 + ` ${this.state.leftOpen === 5 ? 'active' : ''}`} onClick={() => this.onLeftOpen(5)}>
                                            <Fab
                                                size="small"
                                                color={this.state.leftOpen === 5 ? "secondary" : "primary"}
                                                aria-label="split"
                                            >
                                                <CallSplitIcon />
                                            </Fab>
                                        </div>
                                        <div className={classes.labelRightSm3 + ` ${this.state.leftOpen === 3 ? 'active' : ''}`} onClick={() => this.onLeftOpen(3)}>
                                            <Fab
                                                size="small"
                                                color={this.state.leftOpen === 3 ? "secondary" : "primary"}
                                                aria-label="calendar"
                                            >
                                                <CalendarTodayIcon />
                                            </Fab>
                                        </div>
                                        {
                                            this.state.isExpert
                                                ?
                                                (
                                                    <>
                                                        <div className={classes.labelMenuBottom} />
                                                        <div className={classes.labelLeftSm2 + `  expert ${this.state.leftOpen === 2 ? 'active' : ''}`} onClick={() => this.onLeftOpen(2)}>
                                                            <Fab
                                                                size="small"
                                                                color={this.state.leftOpen === 2 ? "secondary" : "primary"}
                                                                aria-label="assignment"
                                                            >
                                                                <AssignmentTurnedInIcon />
                                                            </Fab>
                                                        </div>
                                                        <div className={classes.labelRightSm6 + ` ${this.state.leftOpen === 4 ? 'active' : ''}`} onClick={() => this.onLeftOpen(4)}>
                                                            <Fab
                                                                size="small"
                                                                color={this.state.leftOpen === 4 ? "secondary" : "primary"}
                                                                aria-label="view"
                                                            >
                                                                <ViewListIcon />
                                                            </Fab>
                                                        </div>
                                                        <div className={classes.labelRightSm4 + ` ${this.state.leftOpen === 7 ? 'active' : ''}`} onClick={() => this.onLeftOpen(7)}>
                                                            <Fab
                                                                size="small"
                                                                color={this.state.leftOpen === 7 ? "secondary" : "primary"}
                                                                aria-label="scheduler"
                                                            >
                                                                <ScheduleIcon />
                                                            </Fab>
                                                        </div>
                                                    </>
                                                )
                                                :
                                                null
                                        }
                                    </>
                                )
                                :
                                null
                        }
                        <div className="absolute-left p-1" onClick={this.onDrawerHandler}>
                            <DehazeIcon />
                        </div>
                    </Grid>
                </div>
                {this.renderSaveCloseButtons()}
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
