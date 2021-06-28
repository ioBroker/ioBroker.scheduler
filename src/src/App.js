import React from 'react'; 
import './App.scss';
import {withStyles} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';  
import Tab from '@material-ui/core/Tab';
import GenericApp from '@iobroker/adapter-react/GenericApp';
import Loader from '@iobroker/adapter-react/Components/Loader'

import I18n from '@iobroker/adapter-react/i18n';
import ProfilesPanel from './components/ProfilesPanel';
import TypePanel from './components/TypePanel';
import PriorityPanel from './components/PriorityPanel';
import IntervalsContainer from './components/IntervalsContainer';
import DayOfWeekPanel from './components/DayOfWeekPanel';
import DevicesPanel from './components/DevicesPanel';
import EditPanel from './components/EditPanel';
import defaultOptions from './data/defaultOptions.json'
import minmax from './data/minmax.json'
import { Grid } from '@material-ui/core';

import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ViewListIcon from '@material-ui/icons/ViewList';
import ScheduleIcon from '@material-ui/icons/Schedule';

const mobile_panel = {
        '@media (max-width:570px)': 
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 10px 0 60px !important',
            height: '100%',
            width:'calc(100% - 70px)',
            left:'calc(-100% - 70px)',
            background: defaultOptions.options.backgrounds[ 1 ]
        }
    }
const styles = theme => ({
    app:{
        display:'flex',
        position: 'relative',
        height: '100%',
        backgroundColor: theme.palette.background.paper
    },
    root: {},
    tabContent: {
        padding: 10,
        height: 'calc(100% - 64px - 48px - 20px)',
        overflow: 'auto'
    },
    tabContentIFrame: {
        padding: 10,
        height: 'calc(100% - 64px - 48px - 20px - 38px)',
        overflow: 'auto'
    },
    clip_left_sm_2 : mobile_panel,
    clip_left_sm_4 : mobile_panel,
    clip_left_sm_5 : mobile_panel,
    clip_left_sm_6 : mobile_panel,
    clip_left_sm_7 : mobile_panel
    
});

const AntTabs = withStyles({
    root: { 
        margin:0,  
        width: '100%',
        justifyContent:'center'
    },
    indicator: { 
        transition : 'all 300ms ease-out'
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: { 
        //backgroundColor:'#444',
        minWidth: 140,
        fontWeight: 700, 
        fontSize: '0.75rem',
        opacity: 1, 
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

class App extends GenericApp {
    constructor(props) {
        const extendedProps = {...props};
        extendedProps.encryptedFields = ['pass'];
        extendedProps.translations = {
            'en': require('./i18n/en'),
            'de': require('./i18n/de'),
            'ru': require('./i18n/ru'),
            'pt': require('./i18n/pt'),
            'nl': require('./i18n/nl'),
            'fr': require('./i18n/fr'),
            'it': require('./i18n/it'),
            'es': require('./i18n/es'),
            'pl': require('./i18n/pl'),
            'zh-cn': require('./i18n/zh-cn'),
        };

        super(props, extendedProps);
        this.state ={
            ...this.state,
            menu : defaultOptions.menu,
            max_menu_id : defaultOptions.max_menu_id,
            activeMenu : 'main',
            isMenuEdit : false,
            isExpert : true,
            leftOpened: [],
            profile: {
                enabled: false,
                id: '11231359898', 
                name: 'Basic', 
                members: ['id1', 'id2'],
                type: 'temperature',
                prio: 0, // 0 normal, 1 - high, 2 - highest
                dow: [1, 2, 3, 4, 5], // 0 - sunday, 1 - monday
                intervalDuration: 0.5, // in hours
                intervals: [3, 14, 6, 22, 18, 3, 14, 6, 22, 18, 3, 14, 6, 22, 18, 3, 14, 6, 22, 18, 3, 14, 6, 22, 22 ]
            }
        } 
    }
    componentWillMount()
    {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }
    componentWillUnmount() 
	{ 
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions = () =>
	{
        this.setState({
            _width : window.innerWidth,
            _height: window.innerHeight
        })
    }
    getSelectedTab() {
        const tab = this.state.selectedTab;
        if (!tab || tab === 'options') {
            return 0;
        }
    }
    onLeftOpen = (index) =>
    {
        let leftOpened = JSON.parse(JSON.stringify(this.state.leftOpened));
        let oldOpened = leftOpened[index];
        for (let i in leftOpened) {
            leftOpened[i] = false;
        }
        leftOpened[index] = !oldOpened;
        this.setState({leftOpened});
    }
    onLeftOpen1 = () =>
    {
        this.setState({ 
            leftOpen  : !this.state.leftOpen,  
            leftOpen2 : false,  
            leftOpen3 : false,  
            leftOpen4 : false,  
            leftOpen5 : false,     
            leftOpen6 : false,
            leftOpen7 : false
        })
    }
    onLeftOpen2 = () =>
    {
        this.setState({ 
            leftOpen7 : false, 
            leftOpen  : false, 
            leftOpen2 : !this.state.leftOpen2,
            leftOpen3 : false,  
            leftOpen4 : false,   
            leftOpen5 : false,     
            leftOpen6 : false 
        })
    }
    onLeftOpen3 = () =>
    {
        this.setState({ 
            leftOpen3 : !this.state.leftOpen3,  
            leftOpen7 : false,  
            leftOpen2 : false,  
            leftOpen  : false,  
            leftOpen4 : false,  
            leftOpen5 : false,   
            leftOpen6 : false  
        })
    }
    onLeftOpen4 = () =>
    {
        this.setState({ 
            leftOpen4 : !this.state.leftOpen4,   
            leftOpen7 : false,  
            leftOpen6 : false,  
            leftOpen5 : false,  
            leftOpen3 : false,  
            leftOpen2 : false,  
            leftOpen  : false  
        })
    }
    onLeftOpen5 = () =>
    {
        this.setState({ 
            leftOpen5 : !this.state.leftOpen5,  
            leftOpen7 : false,  
            leftOpen6 : false,  
            leftOpen4 : false,  
            leftOpen3 : false,  
            leftOpen2 : false,  
            leftOpen  : false  
        })
    }
    onLeftOpen6 = () =>
    {
        this.setState({ 
            leftOpen6 : !this.state.leftOpen6, 
            leftOpen7 : false,    
            leftOpen5 : false,    
            leftOpen4 : false,  
            leftOpen3 : false,  
            leftOpen2 : false,  
            leftOpen  : false  
        })
    }
    onLeftOpen7 = () =>
    {
        this.setState({ 
            leftOpen7 : !this.state.leftOpen7, 
            leftOpen6 : false,    
            leftOpen5 : false,    
            leftOpen4 : false,  
            leftOpen3 : false,  
            leftOpen2 : false,  
            leftOpen  : false  
        })
    }
    onType = type =>
    {
        let profile = JSON.parse(JSON.stringify(this.state.profile))
        profile.type = type;
        if (type !== this.state.profile.type) {
            profile.intervals = profile.intervals.map(interval => {
                if (interval < minmax[type].min) {
                    return minmax[type].min;
                }
                if (interval > minmax[type].max) {
                    return minmax[type].max;
                }
                return interval;
            })
        }
        this.setState({ profile });
    }
    onPriority = priority =>
    {
        let profile = JSON.parse(JSON.stringify(this.state.profile))
        profile.prio = priority;
        this.setState({ profile });
    }
    onDevices = devices =>
    {
        let profile = JSON.parse(JSON.stringify(this.state.profile))
        profile.members = devices.split(', ');
        this.setState({ profile });
    }
    onDow = (day, enabled) => {
        let profile = JSON.parse(JSON.stringify(this.state.profile));
        if (enabled && !profile.dow.includes(day)) {
            profile.dow.push(day);
        } else if (!enabled && profile.dow.includes(day)) {
            profile.dow.splice(profile.dow.indexOf(day), 1);
        }
        this.setState({ profile });;
    }
    onIntervals = intervals =>
    {
        let profile = JSON.parse(JSON.stringify(this.state.profile))
        profile.intervals = intervals;
        this.setState({ profile });
    }
    onMenu = active =>
    {
        this.setState({ activeMenu : active, leftOpen : false });
    }
    onEditMenu = isMenuEdit =>
    {
        this.setState({ isMenuEdit: !isMenuEdit })
    }
    onChangeMenu = (newMenu, max_menu_id) =>
    {
        this.setState({ menu: newMenu, max_menu_id })
    }
    onRange = (event, intervalDuration)  =>
    {
        let profile = JSON.parse(JSON.stringify(this.state.profile))
        profile.intervalDuration = intervalDuration;
        if (this.state.profile.intervalDuration < intervalDuration) {
            let relation = intervalDuration / this.state.profile.intervalDuration;
            let newIntervals = [];
            for (let i = 0; i < this.state.profile.intervals.length; i+=relation) {
                newIntervals.push(this.state.profile.intervals.slice(i, i+relation));
            }
            profile.intervals = newIntervals.map(chunk => Math.round(chunk.reduce((a, b) => a + b, 0) / relation));
        }
        if (this.state.profile.intervalDuration > intervalDuration) {
            let relation = this.state.profile.intervalDuration / intervalDuration;
            let newIntervals = [];
            let newIndex = 0;
            this.state.profile.intervals.forEach((interval, index) => {
               for (let shift = 0; shift < relation; shift++) {
                   newIntervals[newIndex] = interval;
                   newIndex++;
               }
            });
            profile.intervals = newIntervals;
        }
        this.setState({ profile, leftOpen7: false });
    }
    render()
    { 
        if (!this.state.loaded) 
        {
            return <MuiThemeProvider theme={this.state.theme}>
                <Loader theme={this.state.themeType} />
            </MuiThemeProvider>;
        }   
        const { classes } = this.props;
        const { menu, activeMenu, isMenuEdit, max_menu_id, profile } = this.state;

        return <MuiThemeProvider theme={this.state.theme}>
            <div className={classes.app}>
                <Grid container 
                    spacing={0} 
                    style={{ background : this.state.theme.palette.background.paper }}
                    className="mobile-scrolled"
                > 
                    <Grid 
                        item 
                        xs={12} 
                        lg={2} 
                        className="h-100 sm-hidden " 
                    > 
                        <div 
                            className={
                                'tapper-grid tapper-shadow m-1 h-100 clip-left-sm-1 ' + 
                                ( this.state.leftOpen ? ' active' : '' )
                            }  
                            style={{background:'#444'}}
                        > 
                            <div className='close-label-left-sm flow-dark ' onClick={this.onLeftOpen1}>
                                <ClearIcon />
                            </div>
                            <ProfilesPanel
                                active={activeMenu}
                                isEdit={isMenuEdit}
                                menu={menu}
                                on={this.onMenu}
                                max_menu_id={max_menu_id}
                                onChangeMenu={this.onChangeMenu}
                            />
                            {
                                this.state.isExpert
                                    ? 
                                    <EditPanel
                                        isEdit={isMenuEdit}
                                        menu={menu}
                                        on={this.onEditMenu}
                                    /> 
                                    :
                                    null
                            }
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={ 9 } className="sliders-container"> 
                        
                        <IntervalsContainer 
                            type={ this.state.profile.type }
                            intervals={ this.state.profile.intervals }
                            onChange={ this.onIntervals }
                            theme={ this.state.theme }
                            range={profile.intervalDuration}
                            _width={ this.state._width }
                        />
                        {
                            this.state.isExpert
                                ? 
                                <div 
                                    className={
                                        'tapper-grid tapper-shadow m-1 mt-1 clip_left_sm_7 '+ 
                                        classes.clip_left_sm_7 + 
                                        (this.state.leftOpen7 ? ' active ' :'') 
                                    }
                                    style={{ }}
                                >
                                    <div className="close-label-left-sm flow-dark " onClick={this.onLeftOpen7}>
                                        <ClearIcon />
                                    </div>
                                    <div className="mt-sm-auto mb-sm-auto w-100">
                                        <AntTabs
                                            value={ profile.intervalDuration }
                                            onChange={ this.onRange } 
                                            orientation={ this.state._width < 768 ? 'vertical' : 'horizontal' }                                            
                                            indicatorColor="primary"
                                            textColor="primary"
                                            centered
                                        >
                                            {
                                                [0.5, 1, 2, 3, 4].map(duration => 
                                                    <AntTab key={duration} value={duration} label={duration + ' ' + I18n.t('hr')} />
                                                )
                                            }
                                        </AntTabs>
                                    </div>
                                </div>
                                    :
                                    null
                        }
                        <Grid container 
                            spacing={0}   
                        > 
                        {
                            this.state.isExpert
                                ? 
                                <Grid 
                                    item 
                                    xs={12} 
                                    lg={3}  
                                    className={ "h-100 expert sm-hidden " }
                                >
                                    <div 
                                        className={
                                            "tapper-grid tapper-shadow h-100 m-1 p-2 clip_left_sm_2 " + 
                                            classes.clip_left_sm_2 + 
                                            (this.state.leftOpen2 ? " active " :"")
                                        }
                                    > 
                                        <div className="close-label-left-sm flow-dark" onClick={this.onLeftOpen2}>
                                            <ClearIcon />
                                        </div>
                                        <div className="mt-sm-auto mb-sm-auto">
                                            <div>
                                                <TypePanel
                                                    on={this.onType}
                                                    type={ this.state.profile.type }
                                                
                                                />
                                            </div>
                                           
                                        </div>
                                    </div> 
                                </Grid>    
                                :
                                null
                            } 
                            <Grid 
                                item 
                                xs={12} 
                                lg={6}  
                                className={ "h-100 expert sm-hidden " }
                            >                                           
                                <div className={
                                        "tapper-grid tapper-shadow m-1 p-2 mt-1 clip_left_sm_5 "+ 
                                        classes.clip_left_sm_5 + 
                                        (this.state.leftOpen5 ? " active " :"") 
                                    }
                                    style={{flexGrow:100}}
                                >
                                    <div className="close-label-left-sm flow-dark " onClick={this.onLeftOpen5}>
                                        <ClearIcon />
                                    </div>
                                    <div className="mt-sm-auto mb-sm-auto wc-100">
                                        <DevicesPanel
                                            members={ this.state.profile.members }
                                            onChange={ this.onDevices }
                                            title={ this.state.isExpert ? "Devices (expert)" : "Devices" }
                                            isExpert={ this.state.isExpert }
                                            rows={ 1 }  
                                            _width={ this.state._width }
                                        /> 
                                    </div>
                                </div>
                            </Grid>  
                            {
                                this.state.isExpert
                                    ? 
                                    <Grid 
                                        item 
                                        xs={12} 
                                        lg={3}  
                                        className={ "h-100 expert sm-hidden " }
                                    > 
                                        <div 
                                            className={
                                                "tapper-grid tapper-shadow h-100 m-1 p-2 clip_left_sm_4 "+ 
                                                classes.clip_left_sm_4 + 
                                                (this.state.leftOpen4 ? " active " :"")

                                            }
                                        > 
                                            <div className="close-label-left-sm flow-dark" onClick={this.onLeftOpen4}>
                                                <ClearIcon />
                                            </div>
                                            <div className="mt-sm-auto mb-sm-auto">
                                                <div className=" ">
                                                    <PriorityPanel
                                                        profile={ this.state.profile }
                                                        on={this.onPriority}
                                                        priority={ this.state.profile.prio }
                                                        _width={this.state._width}
                                                    
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>    
                                    :
                                    null
                            } 
                        </Grid> 
                    </Grid> 
                    <Grid 
                        item 
                        xs={12} 
                        lg={1} 
                        className={
                            "h-100  sm-hidden  " 
                        }
                    >
                        <div 
                            className={
                                "tapper-grid tapper-shadow m-1 p-2 clip_right_sm_3 h-100 "+ 
                                classes.clip_left_sm_2 + 
                                (this.state.leftOpen3 ? " active " :"")
                            }                            
                        >
                            <div className="close-label-left-sm flow-dark" onClick={this.onLeftOpen3}>
                                <ClearIcon />
                            </div>
                            <div className="mt-sm-auto mb-sm-auto">
                                <DayOfWeekPanel
                                    dow={ this.state.profile.dow }
                                    onChange={ this.onDow }
                                />
                            </div>
                        </div>
                        
                    </Grid> 
                    <div className="label-menu" />
                    <div className={"label-left-sm-1 " + (this.state.leftOpen ? "active" : "")} onClick={this.onLeftOpen1}>
                        <DehazeIcon />
                    </div>
                    <div className={"label-right-sm-5 " + (this.state.leftOpen5 ? "active" : "")} onClick={this.onLeftOpen5}>
                        <CallSplitIcon/>
                    </div>
                    <div className={"label-right-sm-3 " + (this.state.leftOpen3 ? "active" : "")} onClick={this.onLeftOpen3}>
                        <CalendarTodayIcon/>
                    </div>
                    {
                        this.state.isExpert
                            ? 
                            <>
                                <div className="label-menu-bottom" />
                                <div className={"label-left-sm-2  expert " + (this.state.leftOpen2 ? "active" : "")} onClick={this.onLeftOpen2}>
                                    <AssignmentTurnedInIcon />
                                </div>
                                <div className={"label-right-sm-6 " + (this.state.leftOpen6 ? "active" : "")} onClick={this.onLeftOpen6}>
                                    <CallSplitIcon/>
                                </div>
                                <div className={"label-right-sm-4 " + (this.state.leftOpen4 ? "active" : "")} onClick={this.onLeftOpen4}>
                                    <ViewListIcon/>
                                </div>
                                <div className={"label-right-sm-7 " + (this.state.leftOpen7 ? "active" : "")} onClick={this.onLeftOpen7}>
                                    <ScheduleIcon/>
                                </div>

                            </>
                            :
                            null
                    } 
                    
                </Grid>  
            </div>
        </MuiThemeProvider>;
    }
}

export default withStyles(styles)(App);
