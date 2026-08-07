import { type JSX, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import ReactSplit, { SplitDirection, GutterTheme } from '@devbookhq/splitter';

import {
    Fab,
    FormControlLabel,
    Checkbox,
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
    DialogContent,
    TextField,
    Drawer,
    IconButton,
    InputAdornment,
    Box,
    Paper,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';

import {
    Check,
    Close,
    Settings,
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

import {
    I18n,
    Utils,
    Loader,
    SelectID as DialogSelectID,
    GenericApp,
    type GenericAppProps,
    type GenericAppState,
    type IobTheme,
} from '@iobroker/gui-components';

import minmax from './data/minmax.json';
import DevicesPanel from './components/DevicesPanel';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import IntervalsContainer from './components/IntervalsContainer';
import PriorityPanel from './components/PriorityPanel';
import TypePanel from './components/TypePanel';
import ProfilesPanel from './components/ProfilesPanel';
import StatePanel from './components/StatePanel';
import ResetAllValues from './components/ResetAllValues';

import type { DevicesCache, MinMax, ProfileData, ProfileValueType, SchedulerNative, SchedulerProfile } from './types';

import enLang from './i18n/en.json';
import deLang from './i18n/de.json';
import ruLang from './i18n/ru.json';
import ptLang from './i18n/pt.json';
import nlLang from './i18n/nl.json';
import frLang from './i18n/fr.json';
import itLang from './i18n/it.json';
import esLang from './i18n/es.json';
import plLang from './i18n/pl.json';
import ukLang from './i18n/uk.json';
import zhCNLang from './i18n/zh-cn.json';

const defaultMinMax: Record<string, MinMax> = minmax;

const leftRSM: Record<string, any> = {
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

const styles: Record<string, any> = {
    app: (theme: IobTheme): any => ({
        display: 'flex',
        position: 'relative',
        height: 'calc(100% - 64px)',
        backgroundColor: theme.palette.background.paper,
    }),
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
        p: '10px',
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
        p: 0,
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
            ml: 0,
            mt: 0,
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
    paneling: (theme: IobTheme): any => ({
        backgroundColor: theme.palette.background.paper,
    }),
    mobilePanel: {},
    slidersContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    // ---- layout: one flex row, nothing scrolls except the sidebar ----
    /** The whole working area right of the profile tree */
    content: {
        display: 'flex',
        gap: '8px',
        width: '100%',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden',
        p: '8px',
        boxSizing: 'border-box',
    },
    /** Sliders + interval duration. Takes all the width and height that is left over */
    mainColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1,
        minWidth: 0,
        minHeight: 0,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        flexShrink: 0,
        minHeight: 36,
    },
    /** Wrapper of the sliders: the only element that may grow */
    slidersCard: {
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    /** Right-hand column with all the profile settings */
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: 320,
        flexShrink: 0,
        minHeight: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    card: {
        borderRadius: '12px',
        p: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        backgroundImage: 'none',
    },
    cardTitle: (theme: IobTheme): any => ({
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: theme.palette.text.secondary,
    }),
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
    },
    rangeGroup: {
        display: 'flex',
        width: '100%',
        '& .MuiToggleButton-root': {
            flex: 1,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            py: '4px',
        },
    },
    emptyProfile: (theme: IobTheme): any => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: theme.palette.text.primary,
    }),
    title: (theme: IobTheme): any => ({
        fontSize: 18,
        fontWeight: 'bold',
        ml: '20px',
        color: theme.palette.text.primary,
    }),
    checkbox: (theme: IobTheme): any => ({
        color: theme.palette.text.primary,
    }),
};

/** A flat, rounded panel with an optional caption - the building block of the settings column */
function Card(props: {
    title?: string;
    action?: JSX.Element | null;
    children: ReactNode;
    grow?: boolean;
}): JSX.Element {
    return (
        <Paper
            elevation={0}
            variant="outlined"
            sx={{ ...styles.card, ...(props.grow ? { flex: 1, minHeight: 0 } : undefined) }}
        >
            {props.title || props.action ? (
                <Box sx={styles.cardHeader}>
                    <Typography sx={styles.cardTitle}>{props.title}</Typography>
                    {props.action}
                </Box>
            ) : null}
            {props.children}
        </Paper>
    );
}

/** One entry of the state/object update queue built in `onPrepareSave` */
type Task =
    | { method: 'setObject'; id: string; obj: Partial<ioBroker.StateObject>; val?: boolean }
    | { method: 'setState'; id: string; val: boolean }
    | { method: 'delObject'; id: string }
    | { method: 'rename'; id: string; newId: string; val?: boolean };

/** Advanced options, shown in the settings dialog */
interface OptionsDialog {
    ignoreSameValues?: boolean;
    doNotWriteSameValue?: boolean;
    holidayId: string;
}

interface AppState extends GenericAppState {
    native: SchedulerNative;
    isDrawOpen: boolean;
    activeProfile: string;
    isExpert: boolean;
    leftOpen: number;
    devicesCache: DevicesCache;
    splitSizes: number[];
    windowWidth: number;
    windowHeight: number;
    optionsDialog: OptionsDialog | null;
    originalOptions: string;
    showSelectId: boolean;
}

export default class App extends GenericApp<GenericAppProps, AppState> {
    /** Icon cache */
    private readonly icons: Record<string, string> = {};

    private lastDevices = '';

    /**
     * Copy of the last saved configuration, used by `onPrepareSave` to diff the profiles.
     * Deliberately not called `savedNative`: GenericApp has a private field of that name for its own change detection.
     */
    private lastSavedNative: SchedulerNative = { holidayId: '', profiles: [] };

    constructor(props: GenericAppProps) {
        const extendedProps = {
            ...props,
            translations: {
                en: enLang,
                de: deLang,
                ru: ruLang,
                pt: ptLang,
                nl: nlLang,
                fr: frLang,
                it: itLang,
                es: esLang,
                pl: plLang,
                uk: ukLang,
                'zh-cn': zhCNLang,
            },
            sentryDSN: window.sentryDSN,
        };

        super(props, extendedProps);

        let splitSizes: number[] = [30, 70];
        const storedSizes = window.localStorage.getItem('Scheduler.splitSizes');
        if (storedSizes) {
            try {
                splitSizes = JSON.parse(storedSizes);
            } catch {
                splitSizes = [30, 70];
            }
        }

        const storedDrawOpen = window.localStorage.getItem('iobroker.scheduler.isDrawOpen');

        this.state = {
            ...this.state,
            isDrawOpen: storedDrawOpen === null ? true : JSON.parse(storedDrawOpen),
            activeProfile: window.localStorage.getItem('iobroker.scheduler.activeProfile') || '',
            isExpert: true,
            leftOpen: 0,
            devicesCache: {},
            splitSizes,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            optionsDialog: null,
            originalOptions: '',
            showSelectId: false,
        };
    }

    componentDidMount(): void {
        super.componentDidMount();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = (): void => {
        this.setState({
            windowWidth: window.innerWidth - Math.random(),
            windowHeight: window.innerHeight,
        });
    };

    onLeftOpen = (panelIndex: number): void => {
        this.setState({
            leftOpen: this.state.leftOpen === panelIndex ? 0 : panelIndex,
        });
    };

    onDrawerHandler = (): void => {
        window.localStorage.setItem('iobroker.scheduler.isDrawOpen', JSON.stringify(!this.state.isDrawOpen));
        this.setState({
            isDrawOpen: !this.state.isDrawOpen,
        });
        setTimeout(() => this.updateWindowDimensions(), 200);
    };

    currentProfile = (): ProfileData | null => {
        const foundProfile = this.state.native.profiles.find(profile => profile.id === this.state.activeProfile);
        return foundProfile && foundProfile.type === 'profile' ? foundProfile.data : null;
    };

    changeProfile = (newData: ProfileData): void => {
        const profiles: SchedulerProfile[] = JSON.parse(JSON.stringify(this.state.native.profiles));
        const profileIndex = this.state.native.profiles.findIndex(profile => profile.id === this.state.activeProfile);
        profiles[profileIndex].data = newData;
        this.updateNativeValue('profiles', profiles);
    };

    onType = (type: ProfileValueType): void => {
        const current = this.currentProfile();
        if (!current) {
            return;
        }
        const profile: ProfileData = JSON.parse(JSON.stringify(current));
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
    };

    onPriority = (priority: number): void => {
        const current = this.currentProfile();
        if (!current) {
            return;
        }
        const profile: ProfileData = JSON.parse(JSON.stringify(current));
        profile.prio = priority;
        this.changeProfile(profile);
    };

    onDevices = (devices: string[]): void => {
        const current = this.currentProfile();
        if (!current) {
            return;
        }
        const profile: ProfileData = JSON.parse(JSON.stringify(current));
        profile.members = devices;
        this.changeProfile(profile);
    };

    onState = (state: string | boolean): void => {
        const current = this.currentProfile();
        if (!current) {
            return;
        }
        const currentProfile: ProfileData = JSON.parse(JSON.stringify(current));
        currentProfile.state = state;
        this.changeProfile(currentProfile);
    };

    async processTasks(tasks: Task[]): Promise<void> {
        for (let t = 0; t < tasks.length; t++) {
            const task = tasks[t];

            if (task.method === 'setObject') {
                const obj = await this.socket.getObject(task.id);
                if (!obj) {
                    await this.socket.setObject(task.id, task.obj as ioBroker.StateObject);
                }
                const state = await this.socket.getState(task.id);
                if (!state || state.val !== task.val) {
                    await this.socket.setState(task.id, task.val!);
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
                if (obj) {
                    await this.socket.setObject(task.newId, obj);
                }
                if (task.val !== undefined) {
                    await this.socket.setState(task.newId, task.val);
                }
                await this.socket.delObject(task.id);
            }
        }
    }

    onPrepareSave(settings: SchedulerNative): boolean {
        super.onPrepareSave(settings);
        const tasks: Task[] = [];
        settings.profiles.forEach(profile => {
            if (profile.type === 'profile') {
                const originalProfile = this.lastSavedNative.profiles.find(
                    foundProfile => foundProfile.id === profile.id,
                );

                const stateId = this.getStateId(profile, settings.profiles);
                if (!stateId) {
                    return;
                }

                // if new profile
                if (!originalProfile && profile.data.state === true) {
                    tasks.push({
                        method: 'setObject',
                        id: stateId,
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
                    id: `${stateId}_active`,
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

        this.lastSavedNative.profiles.forEach(profile => {
            if (profile.type === 'profile') {
                const newProfile = settings.profiles.find(p => p.id === profile.id);

                // If deleted
                if (!newProfile) {
                    const oldStateId = this.getStateId(profile, this.lastSavedNative.profiles);
                    if (!oldStateId) {
                        return;
                    }
                    if (profile.data.state === true) {
                        tasks.push({
                            method: 'delObject',
                            id: oldStateId,
                        });
                    }
                    tasks.push({
                        method: 'delObject',
                        id: `${oldStateId}_active`,
                    });
                } else {
                    const isOldNormalId = profile.data.state === true;
                    const isNewNormalId = newProfile.data.state === true;

                    if (isOldNormalId !== isNewNormalId) {
                        // If new has other state (old exists, new does not)
                        if (isOldNormalId) {
                            const oldStateId = this.getStateId(profile, this.lastSavedNative.profiles);
                            if (!oldStateId) {
                                return;
                            }
                            // delete old one
                            tasks.push({
                                method: 'delObject',
                                id: oldStateId,
                            });
                            tasks.push({
                                method: 'delObject',
                                id: `${oldStateId}_active`,
                            });
                        } else {
                            // If new has other state (old does no exist, new does)
                            const newStateId = this.getStateId(newProfile, settings.profiles);
                            if (!newStateId) {
                                return;
                            }
                            tasks.push({
                                method: 'setObject',
                                id: newStateId,
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
                                id: `${newStateId}_active`,
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
                        const oldStateId = this.getStateId(profile, this.lastSavedNative.profiles);
                        const newStateId = this.getStateId(newProfile, settings.profiles);

                        if (oldStateId && newStateId && oldStateId !== newStateId) {
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
                console.log('States updated');
                this.lastSavedNative = JSON.parse(JSON.stringify(this.state.native));
            })
            .catch((e: unknown) => console.error(`Cannot update states: ${e as Error}`));

        return true;
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

    onSelectProfile = (active: string): void => {
        this.setState({ activeProfile: active, leftOpen: 0 });
        window.localStorage.setItem('iobroker.scheduler.activeProfile', active);
    };

    changeProfiles = (profiles: SchedulerProfile[], activeProfile?: string, cb?: () => void): void => {
        this.updateNativeValue('profiles', profiles, () => {
            if (activeProfile) {
                this.setState({ activeProfile }, () => cb && cb());
            } else if (cb) {
                cb();
            }
        });
    };

    onRange = (_event: ReactMouseEvent<HTMLElement>, intervalDuration: number | null): void => {
        const currentProfile = this.currentProfile();
        // `null` arrives when the already selected duration is clicked again
        if (!currentProfile || intervalDuration === null) {
            return;
        }
        const profile: ProfileData = JSON.parse(JSON.stringify(currentProfile));
        profile.intervalDuration = intervalDuration;

        if (currentProfile.intervalDuration < intervalDuration) {
            const relation = intervalDuration / currentProfile.intervalDuration;
            const newIntervals: number[][] = [];
            for (let i = 0; i < currentProfile.intervals.length; i += relation) {
                newIntervals.push(currentProfile.intervals.slice(i, i + relation));
            }
            profile.intervals = newIntervals.map(chunk => Math.round(chunk.reduce((a, b) => a + b, 0) / relation));
        }
        if (currentProfile.intervalDuration > intervalDuration) {
            const relation = currentProfile.intervalDuration / intervalDuration;
            const newIntervals: number[] = [];
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
    };

    onConnectionReady(): void {
        if (!this.state.native.profiles) {
            const native: SchedulerNative = {
                holidayId: '',
                profiles: [],
            };
            this.setState({ native });
            this.lastSavedNative = native;
        } else {
            this.lastSavedNative = JSON.parse(JSON.stringify(this.state.native));
        }
    }

    renderProfile(): JSX.Element {
        const { activeProfile } = this.state;
        const { profiles } = this.state.native;

        return (
            <ProfilesPanel
                active={activeProfile}
                profiles={profiles}
                onSelectProfile={this.onSelectProfile}
                onChangeProfiles={this.changeProfiles}
                instance={this.instance}
                socket={this.socket}
                getStateId={this.getStateId}
            />
        );
    }

    renderRange(currentProfile: ProfileData): JSX.Element {
        const isMobile = this.state.windowWidth < 768;
        return (
            <ToggleButtonGroup
                exclusive
                size="small"
                color="primary"
                orientation={isMobile ? 'vertical' : 'horizontal'}
                value={currentProfile.intervalDuration}
                onChange={this.onRange}
                sx={styles.rangeGroup}
            >
                {[0.25, 0.5, 1, 2, 3, 4].map(duration => (
                    <ToggleButton
                        key={duration}
                        value={duration}
                    >
                        {duration === 0.25
                            ? I18n.t('15 m.')
                            : duration === 0.5
                              ? I18n.t('30 m.')
                              : `${duration} ${I18n.t('hr')}`}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        );
    }

    renderType(currentProfile: ProfileData): JSX.Element {
        return (
            <TypePanel
                key="type"
                onChange={this.onType}
                type={currentProfile.type}
            />
        );
    }

    renderDow(currentProfile: ProfileData, columns: number): JSX.Element {
        return (
            <DayOfWeekPanel
                key="dow"
                firstDayOfWeek={this.socket.systemConfig?.common?.firstDayOfWeek || 'monday'}
                dow={currentProfile.dow}
                onChange={this.onDow}
                holidayVisible={!!this.state.native.holidayId}
                holiday={currentProfile.holiday}
                columns={columns}
                t={I18n.t}
            />
        );
    }

    renderResetHours(currentProfile: ProfileData): JSX.Element {
        return (
            <ResetAllValues
                key="reset"
                type={currentProfile.type}
                minMax={this.getProfileMinMax(currentProfile)}
                onChange={value => {
                    const current = this.currentProfile();
                    if (!current) {
                        return;
                    }
                    const profile: ProfileData = JSON.parse(JSON.stringify(current));
                    profile.intervals = profile.intervals.map(() => Number(value));
                    this.changeProfile(profile);
                }}
            />
        );
    }

    renderPriority(currentProfile: ProfileData): JSX.Element {
        return (
            <PriorityPanel
                key="priority"
                onChange={this.onPriority}
                priority={currentProfile.prio}
            />
        );
    }

    /** The whole settings column right of the sliders */
    renderSidebar(currentProfile: ProfileData): JSX.Element {
        return (
            <Box sx={styles.sidebar}>
                <Card
                    title={I18n.t('Days of week')}
                    action={this.renderResetHours(currentProfile)}
                >
                    {this.renderDow(currentProfile, 4)}
                </Card>
                {this.state.isExpert ? (
                    <Card
                        title={I18n.t('Settings')}
                        action={this.renderOptions()}
                    >
                        {this.renderPriority(currentProfile)}
                        {this.renderType(currentProfile)}
                        {this.renderState()}
                    </Card>
                ) : null}
                <Card title={I18n.t('Devices')}>{this.renderDevices(currentProfile, true)}</Card>
            </Box>
        );
    }

    renderDevices(currentProfile: ProfileData, hideTitle?: boolean): JSX.Element {
        return (
            <div className="wc-100">
                <DevicesPanel
                    members={currentProfile.members}
                    onChange={this.onDevices}
                    title="Devices"
                    hideTitle={hideTitle}
                    isExpert={this.state.isExpert}
                    rows={1}
                    socket={this.socket}
                    windowWidth={this.state.windowWidth}
                    devicesCache={this.state.devicesCache}
                    type={currentProfile.type}
                    prio={currentProfile.prio}
                    profiles={this.state.native.profiles}
                    icons={this.icons}
                    themeType={this.state.themeType}
                    theme={this.state.theme}
                />
            </div>
        );
    }

    renderState(): JSX.Element | null {
        const activeProfile = this.state.native.profiles.find(item => item.id === this.state.activeProfile);
        if (!activeProfile) {
            return null;
        }

        return (
            <div className="mt-sm-auto mb-sm-auto wc-100">
                <StatePanel
                    value={activeProfile.data.state}
                    possibleStateId={this.getStateId(activeProfile, this.state.native.profiles) || ''}
                    onChange={this.onState}
                    socket={this.socket}
                    themeType={this.state.themeType}
                    theme={this.state.theme}
                    profile={activeProfile}
                />
            </div>
        );
    }

    renderSelectIdDialog(): JSX.Element | null {
        if (this.state.showSelectId) {
            return (
                <DialogSelectID
                    imagePrefix="../.."
                    dialogName="holiday"
                    themeType={this.state.themeType}
                    theme={this.state.theme}
                    socket={this.socket}
                    // statesOnly
                    onClose={() => this.setState({ showSelectId: false })}
                    onOk={selected => {
                        const optionsDialog: OptionsDialog = JSON.parse(JSON.stringify(this.state.optionsDialog));
                        optionsDialog.holidayId = Array.isArray(selected) ? selected[0] : selected || '';
                        this.setState({ optionsDialog, showSelectId: false });
                    }}
                />
            );
        }

        return null;
    }

    renderOptionsDialog(): JSX.Element | null {
        const { optionsDialog } = this.state;
        if (!optionsDialog) {
            return null;
        }

        return (
            <Dialog
                open={!0}
                maxWidth="md"
                onClose={() => this.setState({ optionsDialog: null, originalOptions: '' })}
            >
                <DialogTitle>{I18n.t('Advanced profile options')}</DialogTitle>
                <DialogContent>
                    <FormControlLabel
                        key="ignoreSameValues"
                        sx={styles.checkbox}
                        control={
                            <Checkbox
                                checked={!!optionsDialog.ignoreSameValues}
                                onChange={() => {
                                    const newOptions: OptionsDialog = JSON.parse(JSON.stringify(optionsDialog));
                                    newOptions.ignoreSameValues = !newOptions.ignoreSameValues;
                                    this.setState({ optionsDialog: newOptions });
                                }}
                            />
                        }
                        label={I18n.t('Ignore values if same as previous')}
                    />
                    <FormControlLabel
                        key="doNotWriteSameValue"
                        sx={styles.checkbox}
                        control={
                            <Checkbox
                                checked={!!optionsDialog.doNotWriteSameValue}
                                onChange={() => {
                                    const newOptions: OptionsDialog = JSON.parse(JSON.stringify(optionsDialog));
                                    newOptions.doNotWriteSameValue = !newOptions.doNotWriteSameValue;
                                    this.setState({ optionsDialog: newOptions });
                                }}
                            />
                        }
                        label={I18n.t('Do not control if device already in desired state')}
                    />
                    <div style={{ width: '100%' }}>
                        <TextField
                            value={optionsDialog.holidayId || ''}
                            onChange={e => {
                                const newOptions: OptionsDialog = JSON.parse(JSON.stringify(optionsDialog));
                                newOptions.holidayId = e.target.value;
                                this.setState({ optionsDialog: newOptions });
                            }}
                            slotProps={{
                                input: {
                                    endAdornment: optionsDialog.holidayId ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    const newOptions: OptionsDialog = JSON.parse(
                                                        JSON.stringify(optionsDialog),
                                                    );
                                                    newOptions.holidayId = '';
                                                    this.setState({ optionsDialog: newOptions });
                                                }}
                                                edge="end"
                                            >
                                                <Close />
                                            </IconButton>
                                        </InputAdornment>
                                    ) : null,
                                },
                            }}
                            helperText={I18n.t('Applied for all profiles')}
                            variant="standard"
                            label={I18n.t('Holiday ID')}
                            style={{ width: 'calc(100% - 76px)', marginRight: 16 }}
                        />
                        <Button
                            style={{ minWidth: 48, marginTop: 12 }}
                            onClick={() => this.setState({ showSelectId: true })}
                            variant="outlined"
                            color="primary"
                        >
                            ...
                        </Button>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={JSON.stringify(optionsDialog) === this.state.originalOptions}
                        onClick={() => {
                            const current = this.currentProfile();
                            if (current) {
                                const profile: ProfileData = JSON.parse(JSON.stringify(current));
                                profile.ignoreSameValues = optionsDialog.ignoreSameValues;
                                profile.doNotWriteSameValue = optionsDialog.doNotWriteSameValue;
                                this.changeProfile(profile);
                            }
                            this.updateNativeValue('holidayId', optionsDialog.holidayId);
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
        );
    }

    onShowOptions(): void {
        const currentProfile = this.currentProfile();
        if (!currentProfile) {
            return;
        }
        const optionsDialog: OptionsDialog = {
            ignoreSameValues: currentProfile.ignoreSameValues,
            doNotWriteSameValue: currentProfile.doNotWriteSameValue,
            holidayId: this.state.native.holidayId,
        };

        this.setState({
            optionsDialog,
            originalOptions: JSON.stringify(optionsDialog),
        });
    }

    renderOptions(): JSX.Element {
        // if screen width less than 1600
        if (this.state.windowWidth < 1600) {
            return (
                <IconButton
                    key="options"
                    style={{ marginRight: 20, height: 40, marginTop: 8 }}
                    title={I18n.t('Advanced settings')}
                    onClick={() => this.onShowOptions()}
                >
                    <Settings />
                </IconButton>
            );
        }
        return (
            <Button
                key="options"
                style={{ marginTop: 8, marginRight: 16, minWidth: 130, height: 40 }}
                onClick={() => this.onShowOptions()}
                startIcon={<Settings />}
                variant="outlined"
                color="grey"
            >
                {I18n.t('Advanced settings')}
            </Button>
        );
    }

    renderMobileDrawer(isMobile: boolean, currentProfile: ProfileData): JSX.Element | null {
        if (!isMobile) {
            return null;
        }
        let content: JSX.Element | JSX.Element[] | null = null;
        if (this.state.leftOpen === 1) {
            content = this.renderProfile();
        } else if (this.state.leftOpen === 2) {
            content = this.renderType(currentProfile);
        } else if (this.state.leftOpen === 3) {
            content = [this.renderDow(currentProfile, 2), this.renderResetHours(currentProfile)];
        } else if (this.state.leftOpen === 4) {
            content = [this.renderPriority(currentProfile), this.renderOptions()];
        } else if (this.state.leftOpen === 5) {
            content = this.renderDevices(currentProfile);
        } else if (this.state.leftOpen === 7) {
            content = this.renderRange(currentProfile);
        } else if (this.state.leftOpen === 8) {
            content = this.renderState();
        }

        return (
            <Drawer
                anchor="left"
                slotProps={{
                    paper: {
                        style: {
                            width: 'calc(100% - 50px)',
                            paddingLeft: 50,
                        },
                    },
                }}
                open={!!content && !!this.state.leftOpen}
            >
                <Box
                    sx={styles.tapperGrid}
                    style={styles.mobilePanel}
                    className="h-100 m-1 p-2 active"
                >
                    <Box
                        sx={styles.flowDark}
                        style={styles.closeLabelLeftSm}
                        onClick={() => this.onLeftOpen(this.state.leftOpen)}
                    >
                        <ClearIcon />
                    </Box>
                    {content}
                </Box>
            </Drawer>
        );
    }

    static getParentId(id: string): string {
        const pos = id.lastIndexOf('.');
        if (pos !== -1) {
            return id.substring(0, pos);
        }

        return id;
    }

    async getObjectSafe(id: string): Promise<ioBroker.Object | false> {
        let obj: ioBroker.Object | false = false;
        try {
            obj = (await this.socket.getObject(id)) || false;
            if (obj && obj.native) {
                obj.native = {};
            }
        } catch {
            // console.error('Cannot read object ' + id);
        }
        return obj;
    }

    async updateDevices(devices: string[]): Promise<void> {
        const devicesCache: DevicesCache = JSON.parse(JSON.stringify(this.state.devicesCache));

        let changed = false;

        const currentProfile = this.currentProfile();
        if (!currentProfile) {
            return;
        }
        const oldMinMax = this.getProfileMinMax(currentProfile);

        for (let d = 0; d < devices.length; d++) {
            const id = devices[d];
            if (!this.state.devicesCache[id] && this.state.devicesCache[id] !== false) {
                const obj = await this.getObjectSafe(id);

                if (!devicesCache[id] || JSON.stringify(obj) !== JSON.stringify(devicesCache[id])) {
                    devicesCache[id] = obj || false;
                    changed = changed || !!obj;

                    // find icon
                    let icon = Utils.getObjectIcon(id, devicesCache[id] || undefined);
                    if (!icon) {
                        let parentId = App.getParentId(id);
                        if (!devicesCache[parentId] && devicesCache[parentId] !== false) {
                            devicesCache[parentId] = await this.getObjectSafe(parentId);
                        }

                        const parentObj = devicesCache[parentId];
                        if (parentObj && parentObj.type === 'channel') {
                            icon = Utils.getObjectIcon(parentId, parentObj);
                            if (!icon) {
                                parentId = App.getParentId(parentId);
                                if (!devicesCache[parentId] && devicesCache[parentId] !== false) {
                                    devicesCache[parentId] = await this.getObjectSafe(parentId);
                                }
                                const grandParentObj = devicesCache[parentId];
                                if (grandParentObj && grandParentObj.type === 'device') {
                                    icon = Utils.getObjectIcon(parentId, grandParentObj);
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

        const newMinMax = this.getProfileMinMax(currentProfile, undefined, devicesCache);
        if (
            (newMinMax.min !== oldMinMax.min || newMinMax.max !== oldMinMax.max) &&
            !oldMinMax.simulated &&
            !newMinMax.simulated
        ) {
            const profile: ProfileData = JSON.parse(JSON.stringify(currentProfile));
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

    checkDevices(): void {
        const devices: string[] = [];
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
            setTimeout(
                () =>
                    void this.updateDevices(devices).catch((e: unknown) =>
                        console.error(`Cannot update devices: ${e as Error}`),
                    ),
                300,
            );
        }
    }

    getProfileMinMax(profile: ProfileData, type?: ProfileValueType, devicesCache?: DevicesCache): MinMax {
        type = type || profile.type;
        devicesCache = devicesCache || this.state.devicesCache;
        if (type === 'custom') {
            const obj = devicesCache[profile.members[0]];
            const common = obj ? (obj.common as ioBroker.StateCommon) : undefined;
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
                step: 1,
                marks: null,
                unit: common?.unit,
                simulated: true,
            };
        }
        if (type === 'temperature') {
            const obj = devicesCache[profile.members[0]];
            const common = obj ? (obj.common as ioBroker.StateCommon) : undefined;
            if (common && (common.min !== undefined || common.max !== undefined)) {
                return {
                    min: common.min !== undefined ? common.min : defaultMinMax.temperature.min,
                    max: common.max !== undefined ? common.max : defaultMinMax.temperature.max,
                    unit: common.unit || defaultMinMax[type].unit,
                    marks: null,
                };
            }
        }
        return {
            min: defaultMinMax[type].min,
            max: defaultMinMax[type].max,
            step: defaultMinMax[type].step,
            marks: null,
            unit: defaultMinMax[type].unit,
        };
    }

    getStateId = (profile: SchedulerProfile, profiles: SchedulerProfile[], _list?: string[]): string | null => {
        _list = _list || [];
        _list.unshift(profile.title.replace(Utils.FORBIDDEN_CHARS, '_').replace(/\./g, '_'));
        if (profile.parent) {
            // find parent profile
            const parentProfile = profiles.find(item => item.id === profile.parent);
            if (parentProfile) {
                return this.getStateId(parentProfile, profiles, _list);
            }
            console.error(`Cannot find parent ${profile.parent}`);
            return null;
        }

        return `scheduler.${this.instance}.${_list.join('.')}`;
    };

    render(): JSX.Element {
        if (!this.state.loaded || !this.state.native.profiles) {
            return (
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={this.state.theme}>
                        <Loader themeType={this.state.themeType} />
                    </ThemeProvider>
                </StyledEngineProvider>
            );
        }
        const currentProfile = this.currentProfile();

        this.checkDevices();

        if (!currentProfile && this.state.native.profiles.length) {
            // try to select first profile
            setTimeout(() => {
                this.onSelectProfile(this.state.native.profiles[0].id);
            }, 100);
        }

        const fullProfile = this.state.native.profiles.find(profile => profile.id === this.state.activeProfile);

        const profileGrid = (
            <Box
                sx={Utils.getStyle(this.state.theme, styles.tapperGrid, styles.paneling)}
                className="h-100 m-0"
            >
                {this.renderProfile()}
            </Box>
        );

        const isMobile = this.state.windowWidth < 768;

        const desktopProfilePanel = isMobile ? null : this.state.isDrawOpen ? (
            <div style={{ ...(this.state.isDrawOpen ? styles.drGrid : styles.drGridClose), position: 'relative' }}>
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
                    {this.state.isDrawOpen ? (
                        <ChevronLeftIcon className="ml-auto" />
                    ) : (
                        <ChevronRightIcon className="ml-auto" />
                    )}
                </IconButton>
                {profileGrid}
            </div>
        ) : null;

        const content = (
            <Box
                sx={styles.content}
                style={{ background: this.state.theme.palette.background.default }}
            >
                {currentProfile ? (
                    <>
                        <Box sx={styles.mainColumn}>
                            <Box sx={styles.header}>
                                {isMobile ? (
                                    <div style={{ width: 40 }} />
                                ) : this.state.isDrawOpen ? null : (
                                    <IconButton
                                        component="span"
                                        size="small"
                                        title={I18n.t('show profiles')}
                                        onClick={this.onDrawerHandler}
                                    >
                                        <DehazeIcon />
                                    </IconButton>
                                )}
                                <Box sx={styles.title}>{fullProfile?.title}</Box>
                            </Box>
                            <Card grow>
                                <Box sx={styles.slidersCard}>
                                    <IntervalsContainer
                                        id="IntervalsContainer"
                                        type={currentProfile.type}
                                        intervals={currentProfile.intervals}
                                        onChange={this.onIntervals}
                                        theme={this.state.theme}
                                        range={currentProfile.intervalDuration}
                                        intervalsWidth={undefined}
                                        minMax={this.getProfileMinMax(currentProfile)}
                                        t={I18n.t}
                                    />
                                </Box>
                            </Card>
                            {this.state.isExpert && !isMobile ? (
                                <Card title={I18n.t('Interval duration')}>{this.renderRange(currentProfile)}</Card>
                            ) : null}
                        </Box>
                        {isMobile ? null : this.renderSidebar(currentProfile)}

                        {isMobile ? (
                            <>
                                <div style={styles.labelMenuBottom} />
                                <div
                                    style={styles.labelRightSm5}
                                    className={this.state.leftOpen === 5 ? 'active' : ''}
                                    onClick={() => this.onLeftOpen(5)}
                                >
                                    <Fab
                                        size="small"
                                        color={this.state.leftOpen === 5 ? 'secondary' : 'primary'}
                                        aria-label="split"
                                    >
                                        <CallSplitIcon />
                                    </Fab>
                                </div>
                                <div
                                    style={styles.labelRightSm3}
                                    className={this.state.leftOpen === 3 ? 'active' : ''}
                                    onClick={() => this.onLeftOpen(3)}
                                >
                                    <Fab
                                        size="small"
                                        color={this.state.leftOpen === 3 ? 'secondary' : 'primary'}
                                        aria-label="calendar"
                                    >
                                        <CalendarTodayIcon />
                                    </Fab>
                                </div>
                                {this.state.isExpert ? (
                                    <>
                                        <div style={styles.labelMenuBottom} />
                                        <div
                                            style={styles.labelLeftSm2}
                                            className={`expert ${this.state.leftOpen === 2 ? 'active' : ''}`}
                                            onClick={() => this.onLeftOpen(2)}
                                        >
                                            <Fab
                                                size="small"
                                                color={this.state.leftOpen === 2 ? 'secondary' : 'primary'}
                                                aria-label="assignment"
                                            >
                                                <AssignmentTurnedInIcon />
                                            </Fab>
                                        </div>
                                        <div
                                            style={styles.labelLeftSm2}
                                            className={this.state.leftOpen === 4 ? 'active' : ''}
                                            onClick={() => this.onLeftOpen(4)}
                                        >
                                            <Fab
                                                size="small"
                                                color={this.state.leftOpen === 4 ? 'secondary' : 'primary'}
                                                aria-label="view"
                                            >
                                                <ViewListIcon />
                                            </Fab>
                                        </div>
                                        <div
                                            style={styles.labelRightSm8}
                                            className={this.state.leftOpen === 8 ? 'active' : ''}
                                            onClick={() => this.onLeftOpen(8)}
                                        >
                                            <Fab
                                                size="small"
                                                color={this.state.leftOpen === 8 ? 'secondary' : 'primary'}
                                                aria-label="scheduler"
                                            >
                                                <AccountTreeIcon />
                                            </Fab>
                                        </div>
                                    </>
                                ) : null}
                            </>
                        ) : null}
                    </>
                ) : (
                    <Box sx={styles.emptyProfile}>{I18n.t('Select or create profile in left menu')}</Box>
                )}
            </Box>
        );

        const allContent =
            !isMobile && this.state.isDrawOpen ? (
                <Box sx={styles.app}>
                    <ReactSplit
                        direction={SplitDirection.Horizontal}
                        initialSizes={this.state.splitSizes}
                        minWidths={[200, 240]}
                        onResizeFinished={(_gutterIdx, splitSizes) => {
                            this.setState({ splitSizes });
                            window.localStorage.setItem('Scheduler.splitSizes', JSON.stringify(splitSizes));
                        }}
                        gutterTheme={this.state.themeName === 'dark' ? GutterTheme.Dark : GutterTheme.Light}
                        gutterClassName={this.state.themeName === 'dark' ? 'Dark visGutter' : 'Light visGutter'}
                    >
                        {desktopProfilePanel}
                        {content}
                    </ReactSplit>
                </Box>
            ) : (
                <Box sx={styles.app}>
                    {desktopProfilePanel}
                    {isMobile ? (
                        <div
                            style={styles.labelLeftSm1}
                            className={this.state.leftOpen === 1 ? 'active' : ''}
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
                    ) : null}
                    {currentProfile ? this.renderMobileDrawer(isMobile, currentProfile) : null}
                    {content}
                </Box>
            );

        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    {allContent}
                    {this.renderOptionsDialog()}
                    {this.renderSelectIdDialog()}
                    {this.renderSaveCloseButtons()}
                </ThemeProvider>
            </StyledEngineProvider>
        );
    }
}
