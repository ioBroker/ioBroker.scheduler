import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import ReactSplit, { SplitDirection, GutterTheme } from '@devbookhq/splitter';

import {
    Tabs,
    Tab,
    Fab, FormControlLabel, Checkbox,
    Dialog, DialogTitle, DialogActions,
    Button, DialogContent, TextField,
    Drawer, Grid, IconButton, InputAdornment,
} from '@mui/material';

import { Check, Close } from '@mui/icons-material';

import GenericApp from '@iobroker/adapter-react-v5/GenericApp';
import {
    I18n, Utils, Loader,
    SelectID as DialogSelectID,
} from '@iobroker/adapter-react-v5';

import {
    Clear as ClearIcon,
    Dehaze as DehazeIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    CalendarToday as CalendarTodayIcon,
    CallSplit as CallSplitIcon,
    ViewList as ViewListIcon,
    AccountTree as AccountTreeIcon,
} from '@mui/icons-material';

import minmax from './data/minmax.json';
import DevicesPanel from './components/DevicesPanel';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import IntervalsContainer from './components/IntervalsContainer';
import PriorityPanel from './components/PriorityPanel';
import TypePanel from './components/TypePanel';
import ProfilesPanel from './components/ProfilesPanel';
import StatePanel from './components/StatePanel';
import ResetAllValues from './components/ResetAllValues';

const styles = theme => {
    const mobilePanel = {};

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
        '&.active': {
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
        mobileScrolled: {
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
            // width: 330,
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
            '@media (max-width:570px)': {
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
            '&::before': {
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
        closeLabelLeftSm: {
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        labelLeftSm1: {
            ...leftRSM,
        },
        labelLeftSm2: {
            ...leftRSM,
            top: 'auto',
            bottom: 60,
        },
        labelRightSm3: {
            ...leftRSM,
            top: 60,
        },
        labelRightSm4: {
            ...leftRSM,
            top: 'auto',
            bottom: 11,
        },
        labelRightSm5: {
            ...leftRSM,
            top: 110,
        },
        labelRightSm6: {
            ...leftRSM,
            top: 'auto',
            bottom: 10,
        },
        labelRightSm7: {
            ...leftRSM,
            top: 'auto',
            bottom: 60,
        },
        labelRightSm8: {
            ...leftRSM,
            top: 160,
        },
        labelMenuBottom: {
            top: 'auto',
            bottom: -75,
            transform: 'skewY(11deg)',
            height: 290,
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
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 20,
            color: theme.palette.text.primary,
        },
        checkbox: {
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
            uk: require('./i18n/uk'),
            'zh-cn': require('./i18n/zh-cn'),
        };

        extendedProps.sentryDSN = window.sentryDSN;

        super(props, extendedProps);
        let splitSizes = window.localStorage.getItem('Scheduler.splitSizes');
        if (splitSizes) {
            try {
                splitSizes = JSON.parse(splitSizes);
            } catch (e) {
                splitSizes = [30, 70];
            }
        } else {
            splitSizes = [30, 70];
        }

        this.state = {
            ...this.state,
            isDrawOpen: window.localStorage.getItem('iobroker.scheduler.isDrawOpen') === null ? true
                : JSON.parse(window.localStorage.getItem('iobroker.scheduler.isDrawOpen')),
            activeProfile: window.localStorage.getItem('iobroker.scheduler.activeProfile') || '',
            isExpert: true,
            leftOpen: 0,
            devicesCache: {},
            splitSizes,
        };

        this.subscribedIDs = [];
        // icon cache
        this.icons = {};
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        this.subscribedIDs.length && this.socket.unsubscribeState(this.subscribedIDs, this.onEnabled);
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
        const foundProfile = this.state.native.profiles.find(profile => profile.id === this.state.activeProfile);
        return foundProfile ? foundProfile.type === 'profile' && foundProfile.data : null;
    }

    changeProfile = newData => {
        const profiles = JSON.parse(JSON.stringify(this.state.native.profiles));
        const profileIndex = this.state.native.profiles.findIndex(
            profile => profile.id === this.state.activeProfile,
        );
        profiles[profileIndex].data = newData;
        this.updateNativeValue('profiles', profiles);
    }

    onType = type => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        const currentProfileType = profile.type;
        profile.type = type;

        if (type !== currentProfileType) {
            const oldMax = this.getProfileMinMax(profile, currentProfileType).max;
            const newMinMax = this.getProfileMinMax(profile, type);
            const newMax = newMinMax.max;

            if (oldMax !== newMax) {
                profile.intervals = profile.intervals.map(interval => {
                    const normalizedInterval = Math.round((newMax / oldMax) * interval);
                    if (normalizedInterval < newMinMax.min) {
                        return newMinMax.min;
                    }
                    if (normalizedInterval > newMinMax.max) {
                        return newMinMax.max;
                    }
                    return normalizedInterval;
                });
            }
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

    onState = async state => {
        const currentProfile = JSON.parse(JSON.stringify(this.currentProfile()));
        currentProfile.state = state;
        this.changeProfile(currentProfile);
    }

    async processTasks(tasks) {
        for (let t = 0; t < tasks.length; t++) {
            const task = tasks[t];

            if (task.method === 'setObject') {
                const obj = await this.socket.getObject(task.id, task.obj);
                if (!obj) {
                    await this.socket.setObject(task.id, task.obj);
                }
                const state = await this.socket.getState(task.id);
                if (!state || state.val !== task.val) {
                    await this.socket.setState(task.id, task.val);
                }
            } else if (task.method === 'setState') {
                const state = await this.socket.getState(task.id);
                if (!state || state.val !== task.val) {
                    await this.socket.setState(task.id, task.val);
                }
            } else if (task.method === 'delObject') {
                await this.socket.delObject(task.id);
            } else if (task.method === 'rename') {
                const obj = await this.socket.getObject(task.id);
                await this.socket.setObject(task.newId, obj);
                await this.socket.setState(task.newId, task.val);
                await this.socket.delObject(task.id);
            }
        }
    }

    onPrepareSave(settings) {
        super.onPrepareSave(settings);
        const tasks = [];
        settings.profiles.forEach(profile => {
            if (profile.type === 'profile') {
                const originalProfile = this.savedNative.profiles.find(foundProfile => foundProfile.id === profile.id);

                // if new profile
                if (!originalProfile && profile.data.state === true) {
                    tasks.push({
                        method: 'setObject',
                        id: this.getStateId(profile, settings.profiles),
                        val: true,
                        obj: {
                            common: {
                                type: 'boolean',
                                read: true,
                                write: true,
                                role: 'switch',
                                def: true,
                                name: profile.title,
                            },
                            type: 'state',
                        },
                    });
                }
                tasks.push({
                    method: 'setObject',
                    id: `${this.getStateId(profile, settings.profiles)}_active`,
                    obj: {
                        common: {
                            type: 'boolean',
                            read: true,
                            write: false,
                            role: 'state',
                            name: `Is ${profile.title} today active or not`,
                        },
                        type: 'state',
                    },
                });
            }
        });

        this.savedNative.profiles.forEach(profile => {
            if (profile.type === 'profile') {
                const newProfile = settings.profiles.find(p => p.id === profile.id);

                // If deleted
                if (!newProfile) {
                    if (profile.data.state === true) {
                        tasks.push({
                            method: 'delObject',
                            id: this.getStateId(profile, this.savedNative.profiles),
                        });
                    }
                    tasks.push({
                        method: 'delObject',
                        id: `${this.getStateId(profile, this.savedNative.profiles)}_active`,
                    });
                } else
                if (newProfile) {
                    const isOldNormalId = profile.data.state === true;
                    const isNewNormalId = newProfile.data.state === true;

                    if (isOldNormalId !== isNewNormalId) {
                        // If new has other state (old exists, new does not)
                        if (isOldNormalId) {
                            // delete old one
                            tasks.push({
                                method: 'delObject',
                                id: this.getStateId(profile, this.savedNative.profiles),
                            });
                            tasks.push({
                                method: 'delObject',
                                id: `${this.getStateId(profile, this.savedNative.profiles)}_active`,
                            });
                        } else {
                            // If new has other state (old does no exist, new does)
                            tasks.push({
                                method: 'setObject',
                                id: this.getStateId(newProfile, settings.profiles),
                                val: true,
                                obj: {
                                    common: {
                                        type: 'boolean',
                                        read: true,
                                        write: true,
                                        role: 'switch',
                                        def: true,
                                        name: newProfile.title,
                                    },
                                    type: 'state',
                                },
                            });
                            tasks.push({
                                method: 'setObject',
                                id: `${this.getStateId(newProfile, settings.profiles)}_active`,
                                obj: {
                                    common: {
                                        type: 'boolean',
                                        read: true,
                                        write: false,
                                        role: 'state',
                                        def: true,
                                        name: `Is ${newProfile.title} today active or not`,
                                    },
                                    type: 'state',
                                },
                            });
                        }
                    } else if (isOldNormalId) {
                        const oldStateId = this.getStateId(profile, this.savedNative.profiles);
                        const newStateId = this.getStateId(newProfile, settings.profiles);

                        if (oldStateId !== newStateId) {
                            tasks.push({
                                method: 'rename',
                                id: oldStateId,
                                newId: newStateId,
                                val: true,
                            });
                            tasks.push({
                                method: 'rename',
                                id: `${oldStateId}_active`,
                                newId: `${newStateId}_active`,
                            });
                        }
                    }
                }
            }
        });

        this.processTasks(tasks)
            .then(() => {
                // eslint-disable-next-line
                console.log('States updated');
                this.savedNative = JSON.parse(JSON.stringify(this.state.native));
            });
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

    changeProfiles = (profiles, activeProfile, cb) => {
        this.updateNativeValue('profiles', profiles, () => {
            if (activeProfile) {
                this.setState({ activeProfile }, () => cb && cb());
            } else if (cb) {
                cb();
            }
        });
    }

    onRange = (event, intervalDuration) => {
        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
        profile.intervalDuration = intervalDuration;
        const currentProfile = this.currentProfile();

        if (currentProfile.intervalDuration < intervalDuration) {
            const relation = intervalDuration / currentProfile.intervalDuration;
            const newIntervals = [];
            for (let i = 0; i < currentProfile.intervals.length; i += relation) {
                newIntervals.push(currentProfile.intervals.slice(i, i + relation));
            }
            profile.intervals = newIntervals.map(
                chunk => Math.round(chunk.reduce((a, b) => a + b, 0) / relation),
            );
        }
        if (currentProfile.intervalDuration > intervalDuration) {
            const relation = currentProfile.intervalDuration / intervalDuration;
            const newIntervals = [];
            let newIndex = 0;
            currentProfile.intervals.forEach(interval => {
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
        } else {
            this.savedNative = JSON.parse(JSON.stringify(this.state.native));
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
            instance={this.instance}
            socket={this.socket}
            getStateId={this.getStateId}
        />;
    }

    renderRange(currentProfile) {
        const isMobile = this.state.windowWidth < 768;
        return <div className="mt-sm-auto mb-sm-auto w-100">
            <AntTabs
                value={currentProfile.intervalDuration}
                onChange={this.onRange}
                orientation={isMobile ? 'vertical' : 'horizontal'}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {[0.25, 0.5, 1, 2, 3, 4].map(duration =>
                    <AntTab
                        key={duration}
                        value={duration}
                        label={duration === 0.25 ? I18n.t('15 m.') : (duration === 0.5 ? I18n.t('30 m.') : `${duration} ${I18n.t('hr')}`)}
                    />,
                )}
            </AntTabs>
        </div>;
    }

    renderType(currentProfile) {
        return <div className="mt-sm-auto mb-sm-auto">
            <div>
                <TypePanel
                    onChange={this.onType}
                    type={currentProfile.type}
                />
            </div>
        </div>;
    }

    renderDow(currentProfile) {
        return <div className="mt-sm-auto mb-sm-auto">
            <DayOfWeekPanel
                firstDayOfWeek={this.socket.systemConfig.common.firstDayOfWeek || 'monday'}
                dow={currentProfile.dow}
                onChange={this.onDow}
                holidayVisible={!!this.state.native.holidayId}
                holiday={currentProfile.holiday}
                theme={this.state.theme}
                t={I18n.t}
            />
        </div>;
    }

    renderResetHours(currentProfile) {
        return <div className="mt-sm-auto mb-sm-auto">
            <ResetAllValues
                firstDayOfWeek={this.socket.systemConfig.common.firstDayOfWeek || 'monday'}
                type={currentProfile.type}
                minMax={this.getProfileMinMax(currentProfile)}
                onChange={value => {
                    const profile = JSON.parse(JSON.stringify(this.currentProfile()));
                    profile.intervals = profile.intervals.map(() => value);
                    this.changeProfile(profile);
                }}
            />
        </div>;
    }

    renderPriority(currentProfile) {
        return <div className="mt-sm-auto mb-sm-auto" key="prioprity">
            <div>
                <PriorityPanel
                    profile={currentProfile}
                    onChange={this.onPriority}
                    priority={currentProfile.prio}
                    windowWidth={this.state.windowWidth}
                />
            </div>
        </div>;
    }

    renderDevices(currentProfile) {
        return <div className="mt-sm-auto mb-sm-auto wc-100">
            <DevicesPanel
                members={currentProfile.members}
                onChange={this.onDevices}
                title="Devices"
                isExpert={this.state.isExpert}
                rows={1}
                socket={this.socket}
                windowWidth={this.state.windowWidth}
                devicesCache={this.state.devicesCache}
                type={currentProfile.type}
                prio={currentProfile.prio}
                profiles={this.state.native.profiles}
                icons={this.icons}
            />
        </div>;
    }

    renderState() {
        const activeProfile = this.state.native.profiles.find(item => item.id === this.state.activeProfile);

        return <div className="mt-sm-auto mb-sm-auto wc-100">
            <StatePanel
                value={activeProfile.data.state}
                possibleStateId={this.getStateId(activeProfile, this.state.native.profiles)}
                onChange={this.onState}
                socket={this.socket}
                themeType={this.state.themeType}
            />
        </div>;
    }

    renderSelectIdDialog() {
        if (this.state.showSelectId) {
            return <DialogSelectID
                imagePrefix="../.."
                dialogName="holiday"
                themeType={this.state.themeType}
                socket={this.socket}
                // statesOnly
                onClose={() => this.setState({ showSelectId: false })}
                onOk={selected => {
                    const optionsDialog = JSON.parse(JSON.stringify(this.state.optionsDialog));
                    optionsDialog.holidayId = selected;
                    this.setState({ optionsDialog, showSelectId: false });
                }}
            />;
        }

        return null;
    }

    renderOptionsDialog() {
        if (!this.state.optionsDialog) {
            return null;
        }
        const currentProfile = this.currentProfile();

        return <Dialog
            open={!0}
            maxWidth="md"
            onClose={() => this.setState({ optionsDialog: false, originalOptions: '' })}
        >
            <DialogTitle>{I18n.t('Advanced profile options')}</DialogTitle>
            <DialogContent>
                <FormControlLabel
                    key="ignoreSameValues"
                    className={this.props.classes.checkbox}
                    control={<Checkbox
                        checked={currentProfile.ignoreSameValues}
                        onChange={e => {
                            const optionsDialog = JSON.parse(JSON.stringify(this.state.optionsDialog));
                            optionsDialog.ignoreSameValues = !optionsDialog.ignoreSameValues;
                            this.setState({ optionsDialog });
                        }}
                    />}
                    label={I18n.t('Ignore values if same as previous')}
                />
                <FormControlLabel
                    key="doNotWriteSameValue"
                    className={this.props.classes.checkbox}
                    control={<Checkbox
                        checked={currentProfile.doNotWriteSameValue}
                        onChange={e => {
                            const optionsDialog = JSON.parse(JSON.stringify(this.state.optionsDialog));
                            optionsDialog.doNotWriteSameValue = !optionsDialog.doNotWriteSameValue;
                            this.setState({ optionsDialog });
                        }}
                    />}
                    label={I18n.t('Do not control if device already in desired state')}
                />
                <div style={{ width: '100%' }}>
                    <TextField
                        value={this.state.optionsDialog.holidayId || ''}
                        onChange={e => {
                            const optionsDialog = JSON.parse(JSON.stringify(this.state.optionsDialog));
                            optionsDialog.holidayId = e.target.value;
                            this.setState({ optionsDialog });
                        }}
                        endAdornment={
                            this.state.optionsDialog.holidayId ? <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        const optionsDialog = JSON.parse(JSON.stringify(this.state.optionsDialog));
                                        optionsDialog.holidayId = '';
                                        this.setState({ optionsDialog });
                                    }}
                                    edge="end"
                                >
                                    <Close />
                                </IconButton>
                            </InputAdornment> : null
                        }
                        label="Password"
                    />
                        variant="standard"
                        label={I18n.t('Holiday ID')}
                        style={{ width: 'calc(100% - 60px)' }}

                    />
                    <Button
                        style={{ minWidth: 48 }}
                        onClick={() => this.setState({ showSelectId: true })}
                        variant="standard"
                        color="primary"
                    >
                        ...
                    </Button>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    disabled={JSON.stringify(this.state.optionsDialog) === this.state.originalOptions}
                    onClick={() => {
                        const profile = JSON.parse(JSON.stringify(this.currentProfile()));
                        profile.ignoreSameValues = this.state.optionsDialog.ignoreSameValues;
                        profile.doNotWriteSameValue = this.state.optionsDialog.doNotWriteSameValue;
                        this.changeProfile(profile);
                        this.updateNativeValue('holidayId', this.state.optionsDialog.holidayId);
                        this.setState({ optionsDialog: null, originalOptions: '' });
                    }}
                    startIcon={<Check />}
                    variant="contained"
                    color="primary"
                >
                    {I18n.t('Apply')}
                </Button>
                <Button
                    onClick={() => this.setState({ optionsDialog: null, originalOptions: '' })}
                    variant="contained"
                    startIcon={<Close />}
                    color="grey"
                >
                    {I18n.t('Cancel')}
                </Button>
            </DialogActions>
        </Dialog>
    }

    renderOptions() {
        return <Button
            style={{ marginTop: 12 }}
            onClick={() => {
                const currentProfile = this.currentProfile();
                const optionsDialog = {
                    ignoreSameValues: currentProfile.ignoreSameValues,
                    doNotWriteSameValue: currentProfile.doNotWriteSameValue,
                    holidayId: this.state.native.holidayId,
                };

                this.setState({
                    optionsDialog,
                    originalOptions: JSON.stringify(optionsDialog),
                });
            }}
            variant="outlined"
            color="grey"
        >
            {I18n.t('Advanced settings')}
        </Button>;
    }

    renderMobileDrawer(isMobile, currentProfile) {
        if (!isMobile) {
            return null;
        }
        let content = null;
        if (this.state.leftOpen === 1) {
            content = this.renderProfile();
        } else if (this.state.leftOpen === 2) {
            content = this.renderType(currentProfile);
        } else if (this.state.leftOpen === 3) {
            content = this.renderDow(currentProfile);
        } else if (this.state.leftOpen === 4) {
            content = [
                this.renderPriority(currentProfile),
                this.renderOptions(),
            ];
        } else if (this.state.leftOpen === 5) {
            content = this.renderDevices(currentProfile);
        } else if (this.state.leftOpen === 7) {
            content = this.renderRange(currentProfile);
        } else if (this.state.leftOpen === 8) {
            content = this.renderState(currentProfile);
        }

        return <Drawer
            anchor="left"
            PaperProps={{
                style: {
                    width: 'calc(100% - 50px)',
                    paddingLeft: 50
                },
            }}
            open={!!content && !!this.state.leftOpen}
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

        const currentProfile = this.currentProfile();
        const oldMinMax = this.getProfileMinMax(currentProfile);

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

        const newMinMax = this.getProfileMinMax(currentProfile, null, devicesCache);
        if (newMinMax.min !== oldMinMax.min || newMinMax.max !== oldMinMax.max) {
            const profile = JSON.parse(JSON.stringify(currentProfile));
            profile.intervals = profile.intervals.map(interval => {
                const normalizedInterval = Math.round((newMinMax.max / oldMinMax.max) * interval);
                if (normalizedInterval < newMinMax.min) {
                    return newMinMax.min;
                }
                if (normalizedInterval > newMinMax.max) {
                    return newMinMax.max;
                }
                return normalizedInterval;
            });
            this.changeProfile(profile);
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

    getProfileMinMax(profile, type, devicesCache) {
        type = type || profile.type;
        devicesCache = devicesCache || this.state.devicesCache;
        if (type === 'custom') {
            const obj = devicesCache[profile.members[0]];
            if (obj?.common?.type === 'number') {
                if (obj.common.states && !Array.isArray(obj.common.states)) {
                    const keys = Object.keys(obj.common.states).map(i => parseFloat(i)).sort();
                    return {
                        min: keys[0],
                        max: keys[keys.length - 1],
                        unit: obj.common.unit,
                        marks: obj.common.states,
                    };
                } else if (obj.common.min !== undefined || obj.common.max !== undefined) {
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
                step: 1,
                marks: null,
                unit: obj?.common?.unit,
            };
        } else if (type === 'temperature') {
            const obj = devicesCache[profile.members[0]];
            if (obj?.common && (obj.common.min !== undefined || obj.common.max !== undefined)) {
                return {
                    min: obj.common.min !== undefined ? obj.common.min : minmax.temperature.min,
                    max: obj.common.max !== undefined ? obj.common.max : minmax.temperature.max,
                    unit: obj.common.unit || minmax[type].unit,
                    marks: null,
                };
            }
        }
        return {
            min: minmax[type].min,
            max: minmax[type].max,
            step: minmax[type].step,
            marks: null,
            unit: minmax[type].unit,
        };
    }

    getStateId = (profile, profiles, _list) => {
        _list = _list || [];
        _list.unshift(profile.title.replace(Utils.FORBIDDEN_CHARS, '_').replace(/\./g, '_'));
        if (profile.parent) {
            // find parent profile
            const parentProfile = profiles.find(item => item.id === profile.parent);
            if (parentProfile) {
                return this.getStateId(parentProfile, profiles, _list);
            }
            // eslint-disable-next-line
            console.error(`Cannot find parent ${profile.parent}`);
            return null;
        }

        return `scheduler.${this.instance}.${_list.join('.')}`;
    }

    render() {
        if (!this.state.loaded || !this.state.native.profiles) {
            return <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <Loader themeType={this.state.themeType} />
                </ThemeProvider>
            </StyledEngineProvider>;
        }
        const currentProfile = this.currentProfile();

        this.checkDevices();

        if (!currentProfile && Object.keys(this.state.native.profiles).length) {
            // try to select first profile
            setTimeout(() => {
                this.onSelectProfile(this.state.native.profiles[0].id);
            }, 100);
        }


        const { classes } = this.props;
        const fullProfile = this.state.native.profiles.find(profile => profile.id === this.state.activeProfile);

        const profileGrid = <div className={`${classes.tapperGrid} ${classes.paneling} h-100 m-0`}>
            {this.renderProfile()}
        </div>;

        const isMobile = this.state.windowWidth < 768;

        const desktopProfilePanel = isMobile ? null :
            (this.state.isDrawOpen ? <div className={this.state.isDrawOpen ? classes.drGrid : classes.drGridClose} style={{ position: 'relative' }}>
                <IconButton
                    style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: 14,
                        right: 8,
                    }}
                    component="span"
                    size="small"
                    title={I18n.t('hide profiles')}
                    onClick={this.onDrawerHandler}
                >
                    {this.state.isDrawOpen
                        ? <ChevronLeftIcon className="ml-auto" />
                        : <ChevronRightIcon className="ml-auto" />}
                </IconButton>
                {profileGrid}
            </div> : null);

        const content = <Grid
            container
            spacing={0}
            style={{
                background: this.state.theme.palette.background.paper,
                overflowY: 'auto',
                height: '100%',
            }}
        >
            {currentProfile ? <>
                {this.state.isDrawOpen && !isMobile ? null : <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 8,
                        left: 0,
                        zIndex: 2,
                    }}
                >
                    {isMobile ? <div style={{ width: 40 }} /> : <IconButton
                        component="span"
                        size="small"
                        title={I18n.t('show profiles')}
                        onClick={isMobile ? () => this.onLeftOpen(1): this.onDrawerHandler}
                    >
                        <DehazeIcon />
                    </IconButton>}
                    <div className={this.props.classes.title}>{fullProfile.title}</div>
                </div>}
                <Grid className={this.props.classes.slidersContainer} item xs={11} >
                    <IntervalsContainer
                        id="IntervalsContainer"
                        type={currentProfile.type}
                        intervals={currentProfile.intervals}
                        onChange={this.onIntervals}
                        theme={this.state.theme}
                        range={currentProfile.intervalDuration}
                        windowWidth={this.state.windowWidth}
                        minMax={this.getProfileMinMax(currentProfile)}
                    />
                    {this.state.isExpert ? <div className={`${classes.tapperGrid} m-1 mt-1`}>
                        {isMobile ? null : this.renderRange(currentProfile)}
                    </div> : null}
                    {isMobile ? null : <Grid
                        container
                        spacing={0}
                    >
                        <Grid item xs={6} className="h-100 expert">
                            <div
                                className={`${classes.tapperGrid} m-1 p-2 mt-1`}
                                style={{ flexGrow: 100 }}
                            >
                                {this.renderDevices(currentProfile)}
                            </div>
                        </Grid>
                        {this.state.isExpert ? <Grid item xs={6}>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <div>
                                    {this.renderPriority(currentProfile)}
                                </div>
                                <div>
                                    {this.renderType(currentProfile)}
                                </div>
                                <div>
                                    {this.renderState(currentProfile)}
                                </div>
                                <div>
                                    {this.renderOptions()}
                                </div>
                            </div>
                        </Grid> : null}
                    </Grid>}
                </Grid>
                {isMobile ? null : <Grid
                    item
                    xs={1}
                    className="h-100  sm-hidden"
                >
                    <div className={`${classes.tapperGrid} m-1 p-2 h-100`}>
                        {this.renderDow(currentProfile)}
                        {this.renderResetHours(currentProfile)}
                    </div>
                </Grid>}

                {isMobile ? <div className={classes.labelMenuBottom} /> : null}

                {isMobile ? <div className={`${classes.labelRightSm5} ${this.state.leftOpen === 5 ? 'active' : ''}`} onClick={() => this.onLeftOpen(5)}>
                    <Fab
                        size="small"
                        color={this.state.leftOpen === 5 ? 'secondary' : 'primary'}
                        aria-label="split"
                    >
                        <CallSplitIcon />
                    </Fab>
                </div> : null}
                {isMobile ? <div className={`${classes.labelRightSm3} ${this.state.leftOpen === 3 ? 'active' : ''}`} onClick={() => this.onLeftOpen(3)}>
                    <Fab
                        size="small"
                        color={this.state.leftOpen === 3 ? 'secondary' : 'primary'}
                        aria-label="calendar"
                    >
                        <CalendarTodayIcon />
                    </Fab>
                </div> : null}
                {isMobile && this.state.isExpert ? <>
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
                </> : null}
            </>
            : <div className={classes.emptyProfile}>
                {I18n.t('Select or create profile in left menu')}
            </div>}
        </Grid>;

        const allContent = !isMobile && this.state.isDrawOpen ? <div className={classes.app}>
            <ReactSplit
                direction={SplitDirection.Horizontal}
                initialSizes={this.state.splitSizes}
                minWidths={[200, 240]}
                onResizeFinished={(gutterIdx, splitSizes) => {
                    this.setState({ splitSizes });
                    window.localStorage.setItem('Scheduler.splitSizes', JSON.stringify(splitSizes));
                }}
                theme={this.state.themeName === 'dark' ? GutterTheme.Dark : GutterTheme.Light}
                gutterClassName={this.state.themeName === 'dark' ? 'Dark visGutter' : 'Light visGutter'}
            >
                {desktopProfilePanel}
                {content}
            </ReactSplit>
        </div> : <div className={classes.app}>
            {desktopProfilePanel}
            {isMobile ? <div
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
            </div>: null}
            {this.renderMobileDrawer(isMobile, currentProfile)}
            {content}
        </div>;

        return <StyledEngineProvider injectFirst>
            <ThemeProvider theme={this.state.theme}>
                {allContent}
                {this.renderOptionsDialog()}
                {this.renderSelectIdDialog()}
                {this.renderSaveCloseButtons()}
            </ThemeProvider>
        </StyledEngineProvider>;
    }
}

export default withStyles(styles)(App);
