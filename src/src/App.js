import React from 'react'; 
import './App.scss';
import {withStyles} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';  
import Tab from '@material-ui/core/Tab';
import GenericApp from '@iobroker/adapter-react/GenericApp';
import Loader from '@iobroker/adapter-react/Components/Loader'

import I18n from '@iobroker/adapter-react/i18n';
import TabOptions from './Tabs/Options';
import TapperPanel from './components/TapperPanel';
import TypePanel from './components/TypePanel';
import PriorityPanel from './components/PriorityPanel';
import Sliders from './components/Sliders';
import TapperRightPanel from './components/TapperRightPanel';
import DivicesPanel from './components/DevicesPanel';
import EditPanel from './components/EditPanel';
import defaultOptopns from "./data/defaultOptopns.json"
import { Grid, Typography } from '@material-ui/core';

import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ViewListIcon from '@material-ui/icons/ViewList';
import CodeIcon from '@material-ui/icons/Code';
import ScheduleIcon from '@material-ui/icons/Schedule';

const mobile_panel = {
        background:"transparent",
        ['@media (max-width:570px)']: 
        {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px 10px 0 60px !important",
            height: "100%",
            width:"calc(100% - 70px)",
            left:"calc(-100% - 70px)",
            background: defaultOptopns.options.backgrounds[ 1 ]
        }
    }
const styles = theme => ({
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
            type : "temperature",
            priority: "normal",
            menu : defaultOptopns.menu,
            max_menu_id : defaultOptopns.max_menu_id,
            activeMenu : "main",
            isMenuEdit : false,
            range: 0 // масштаб 
        } 
        this.isExpert = true;  
        window.SchedullerApp = this;
    }
    componentWillMount()
    {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }
    omponentWillUnmount() 
	{ 
        window.removeEventListener('scroll', this.updateWindowDimensions);
    }
    updateWindowDimensions( evt )
	{
        window.SchedullerApp.setState({
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
        this.setState({ type });
    }
    onPriority = priority =>
    {
        this.setState({ priority });
    }
    onMenu = active =>
    {
        this.setState({ activeMenu : active });
        setTimeout(()=>
        {
            this.setState({ leftOpen : false });
        }, 250)
    }
    onEditMenu = isMenuEdit =>
    {
        this.setState({ isMenuEdit: !isMenuEdit })
    }
    onChangeMenu = (newMenu, max_menu_id) =>
    {
        console.log(newMenu, max_menu_id)
        this.setState({ menu: newMenu, max_menu_id })
    }
    onRange = (event, range)  =>
    {
        this.setState({ range });
        setTimeout(() =>
        {
            this.setState({ leftOpen7: false });
        }, 350 )
    }
    render()
    { 
        if (!this.state.loaded) 
        {
            return <MuiThemeProvider theme={this.state.theme}>
                <Loader theme={this.state.themeType} />
            </MuiThemeProvider>;
        }   
        // console.log(this.props);
        const { classes } = this.props;
        const { menu, activeMenu, isMenuEdit, max_menu_id, range } = this.state;

        const AntTabs = withStyles({
            root: { 
                margin:0,  
                width: "100%",
                justifyContent:"center"
            },
            indicator: { 
                transition : "all 300ms ease-out"
            },
        })(Tabs);
        
        const AntTab = withStyles((theme) => ({
            root: { 
                //backgroundColor:'#444',
                minWidth: 140,
                fontWeight: 700, 
                fontSize: "0.75rem",
                opacity: 1, 
            },
            selected: {},
        }))((props) => <Tab disableRipple {...props} />);

        return <MuiThemeProvider theme={this.state.theme}>
            <div className="App">
                <Grid container 
                    spacing={0} 
                    style={{ }}
                    className="mobile-scrolled"
                > 
                    <Grid 
                        item 
                        xs={12} 
                        lg={2} 
                        className={ "h-100 sm-hidden " } 
                    > 
                        <div 
                            className={
                                "tapper-grid tapper-shadow m-1 h-100 clip-left-sm-1 " + 
                                ( this.state.leftOpen ? " active" : "" )
                            }  
                            style={{background:"#444"}}
                        > 
                            <div className="close-label-left-sm flow-dark " onClick={this.onLeftOpen1}>
                                <ClearIcon />
                            </div>
                            <TapperPanel
                                active={activeMenu}
                                isEdit={isMenuEdit}
                                menu={menu}
                                on={this.onMenu}
                                max_menu_id={max_menu_id}
                                onChangeMenu={this.onChangeMenu}
                            />
                            {
                                this.isExpert
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
                        
                        <Sliders 
                            type={ this.state.type }
                            range={range}
                            _width={ this.state._width }
                        />
                        {
                            this.isExpert
                                ? 
                                <div 
                                    className={
                                        "tapper-grid tapper-shadow m-1 mt-1 clip_left_sm_7 "+ 
                                        classes.clip_left_sm_7 + 
                                        (this.state.leftOpen7 ? " active " :"") 
                                    }
                                    style={{ }}
                                >
                                    <div className="close-label-left-sm flow-dark " onClick={this.onLeftOpen7}>
                                        <ClearIcon />
                                    </div>
                                    <div className="mt-sm-auto mb-sm-auto w-100">
                                        <AntTabs
                                            value={ range }
                                            onChange={ this.onRange } 
                                            orientation={ this.state._width < 768 ? "vertical" : "horizontal" }                                            
                                            indicatorColor="primary"
                                            textColor="primary"
                                            centered
                                        >
                                            <AntTab label="0.5 hr" />
                                            <AntTab label="1 hr"  />
                                            <AntTab label="2 hrs" />
                                            <AntTab label="3 hrs" />
                                            <AntTab label="4 hrs" />
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
                            this.isExpert
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
                                                    type={ this.state.type }
                                                    _width={this.state._width}
                                                
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
                                        <DivicesPanel
                                            title={ this.isExpert ? "Devices (expert)" : "Devices" }
                                            isExpert={ this.isExpert }
                                            rows={ 1 }  
                                            _width={ this.state._width }
                                        /> 
                                    </div>
                                </div>
                            </Grid>  
                            {
                                this.isExpert
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
                                                        on={this.onPriority}
                                                        priority={ this.state.priority }
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
                                <TapperRightPanel
                                    _width={this.state._width}
                                    value={this.state.week}
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
                        this.isExpert
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
                { this.renderError() }
                { this.renderSaveCloseButtons() }
            </div>
        </MuiThemeProvider>;
    }
}

export default withStyles(styles)(App);
