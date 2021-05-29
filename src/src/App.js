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
    render()
    {
        if (!this.state.loaded) {
            return <MuiThemeProvider theme={this.state.theme}>
                <Loader theme={this.state.themeType} />
            </MuiThemeProvider>;
        }   
        console.log(this.state.theme);
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
                                Profile
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={2} className="order-sm-1 h-100"> 
                        <div className="tapper-shadow m-1 p-2 h-100"> 
                            <TapperPanel/>
                        </div>
                    </Grid> 
                    <Grid item xs={12} lg={2}  className="order-sm-3 h-100">
                        <div className="tapper-shadow m-1 p-2 h-100"> 
                            <TapperLeftPanel/>
                        </div>
                    </Grid> 
                    <Grid item xs={12} lg={5}  className="order-sm-1"> 
                        <Sliders />
                        <DivicesPanel/> 
                    </Grid> 
                    <Grid item xs={12} lg={3} className="order-sm-4 h-100">
                        <div className="tapper-shadow m-1 p-2 h-100">
                            <TapperRightPanel/>
                        </div>
                    </Grid> 
                </Grid> 
                { this.renderError() }
                { this.renderSaveCloseButtons() }
            </div>
        </MuiThemeProvider>;
    }
}

export default withStyles(styles)(App);
