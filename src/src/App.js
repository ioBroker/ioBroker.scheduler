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
import TapperLeftPanel from './components/TapperLeftPanel';
import Sliders from './components/Sliders';
import TapperRightPanel from './components/TapperRightPanel';
import DivicesPanel from './components/DevicesPanel';
import defaultOptopns from "./data/defaultOptopns.json"
import { Grid, Typography } from '@material-ui/core';

import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

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
    clip_left_sm_2 :
    {
        background:"transparent",
        ['@media (max-width:570px)']: 
        {
            background: defaultOptopns.options.backgrounds[ 1 ]
        }
    }
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
    }

    getSelectedTab() {
        const tab = this.state.selectedTab;
        if (!tab || tab === 'options') {
            return 0;
        }
    }

    render_222()
    {
        
        const tab = <TabOptions
            key="options"
            common={this.common}
            socket={this.socket}
            native={this.state.native}
            onError={text => this.setState({errorText: (text || text === 0) && typeof text !== 'string' ? text.toString() : text})}
            onLoad={native => this.onLoadConfig(native)}
            instance={this.instance}
            adapterName={this.adapterName}
            changed={this.state.changed}
            onChange={(attr, value, cb) => this.updateNativeValue(attr, value, cb)}
        />   
    }
    onLeftOpen1 = () =>
    {
        this.setState({ leftOpen : !this.state.leftOpen,  leftOpen2 : false,  leftOpen3 : false })
    }
    onLeftOpen2 = () =>
    {
        this.setState({ leftOpen : false, leftOpen2 : !this.state.leftOpen2, leftOpen3 : false  })
    }
    onLeftOpen3 = () =>
    {
        this.setState({ leftOpen3 : !this.state.leftOpen3,  leftOpen2 : false,  leftOpen : false  })
    }
    render()
    {
        if (!this.state.loaded) {
            return <MuiThemeProvider theme={this.state.theme}>
                <Loader theme={this.state.themeType} />
            </MuiThemeProvider>;
        }   
        const { classes } = this.props;
        return <MuiThemeProvider theme={this.state.theme}>
            <div className="App">
                <Grid container 
                    spacing={0} 
                    style={{ 
                        backgroundColor:defaultOptopns.options.backgrounds[ 1 ] ,
                        background: "radial-gradient(circle at 5% 5%, " + defaultOptopns.options.backgrounds[ 5 ][ 0 ] + " 0%, "+defaultOptopns.options.backgrounds[5][1]+" 100%)",
                        height: "calc(100% - 65px)"
                    }}
                    className="mobile-scrolled"
                >
                    <Grid item xs={12} lg={12} style={{ display: "none" }} > 
                        <div className="">
                            <Typography variant="h4" className="tapper-title">
                                {I18n.t( "Profile" )}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        lg={2} 
                        className={ "clip-left-sm-1 h-100 " + (this.state.leftOpen ? " active" : "") }
                    > 
                        <div className="tapper-grid tapper-shadow m-1 h-100"  style={{background:"#444"}}> 
                            <div className="close-label-left-sm flow-dark " onClick={this.onLeftOpen1}>
                                <ClearIcon />
                            </div>
                            <TapperPanel/>
                        </div>
                    </Grid> 
                    <Grid 
                        item 
                        xs={12} 
                        lg={2}  
                        className={
                            "clip_left_sm_2 h-100 " + 
                            classes.clip_left_sm_2 + 
                            (this.state.leftOpen2 ? " active " :"")
                        }
                >
                        <div className="tapper-grid tapper-shadow m-1 p-2 h-100"> 
                            <div className="close-label-left-sm flow-dark" onClick={this.onLeftOpen2}>
                                <ClearIcon />
                            </div>
                            <TapperLeftPanel/>
                        </div>
                    </Grid> 
                    <Grid item xs={12} lg={5}  className="order-sm-1"> 
                        <Sliders />
                        <DivicesPanel/> 
                    </Grid> 
                    <Grid 
                        item 
                        xs={12} 
                        lg={3} 
                        className={
                            "clip_right_sm_3 h-100 " + 
                            classes.clip_left_sm_2 + 
                            (this.state.leftOpen3 ? " active " :"")
                        }
                    >
                        <div className="tapper-grid tapper-shadow m-1 p-2 h-100">
                            <div className="close-label-left-sm flow-dark" onClick={this.onLeftOpen3}>
                                <ClearIcon />
                            </div>
                            <TapperRightPanel/>
                        </div>
                    </Grid> 
                    <div className="label-menu" />
                    <div className={"label-left-sm-1 " + (this.state.leftOpen ? "active" : "")} onClick={this.onLeftOpen1}>
                        <DehazeIcon />
                    </div>
                    <div className={"label-left-sm-2 " + (this.state.leftOpen2 ? "active" : "")} onClick={this.onLeftOpen2}>
                        <AssignmentTurnedInIcon />
                    </div>
                    <div className={"label-right-sm-3 " + (this.state.leftOpen3 ? "active" : "")} onClick={this.onLeftOpen3}>
                        <CalendarTodayIcon/>
                    </div>
                </Grid> 
                { this.renderError() }
                { this.renderSaveCloseButtons() }
            </div>
        </MuiThemeProvider>;
    }
}

export default withStyles(styles)(App);
