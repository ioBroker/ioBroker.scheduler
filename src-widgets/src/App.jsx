import React from 'react';
import { withStyles } from '@mui/styles';

import WidgetDemoApp from '@iobroker/vis-2-widgets-react-dev/widgetDemoApp';
import { i18n as I18n } from '@iobroker/adapter-react-v5';

import translations from './translations';

import Scheduler from './Scheduler';
import './App.scss';

const styles = theme => ({
    app: {
        backgroundColor: theme?.palette?.background.default,
        color: theme?.palette?.text.primary,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        display: 'flex',
    },
});

class App extends WidgetDemoApp {
    constructor(props) {
        super(props);

        // init translations
        I18n.extendTranslations(translations);

        this.socket.registerConnectionHandler(this.onConnectionChanged);
    }

    onConnectionChanged = isConnected => {
        if (isConnected) {
            this.socket.getSystemConfig()
                .then(systemConfig => this.setState({ systemConfig }));
        }
    };

    renderWidget() {
        return <div className={this.props.classes.app}>
            <Scheduler
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 400,
                    height: 300,
                }}
                systemConfig={this.state.systemConfig}
                data={{
                    profile: 'af1b84fa-ee94-4cf8-959b-8896efd5c176',
                }}
            />
        </div>;
    }
}

export default withStyles(styles)(App);
