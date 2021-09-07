import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    TextField, withStyles, FormLabel, IconButton,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import I18n from '@iobroker/adapter-react/i18n';
import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
};

class StatesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelectId: false,
        };
    }

    stateChange = state => {
        this.props.onChange(state);
    }

    renderSelectIdDialog() {
        if (this.state.showSelectId) {
            return <DialogSelectID
                key="tableSelect"
                imagePrefix="../.."
                filterFunc={obj => (obj && obj.common && obj.common.type === 'boolean')}
                dialogName={this.props.adapterName}
                themeType={this.props.themeType}
                socket={this.props.socket}
                // statesOnly
                onClose={() => this.setState({ showSelectId: false })}
                onOk={selected => {
                    const id = selected;
                    this.setState({ showSelectId: false }, () => this.stateChange(id));
                }}
            />;
        }

        return null;
    }

    render() {
        const title = this.props.title ? this.props.title : 'State';

        return <>
            {this.renderSelectIdDialog()}
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t(title)}
            </FormLabel>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <TextField
                    style={{ flex: 1 }}
                    value={typeof this.props.value === 'undefined' ? '' : this.props.value}
                    onClick={() => this.setState({ showSelectId: true })}
                />
                {this.props.value !== `scheduler.0.${this.props.profileTitle}` ? <IconButton onClick={() => this.stateChange(`scheduler.0.${this.props.profileTitle}`)}>
                    <ClearIcon />
                </IconButton> : null}
            </div>
        </>;
    }
}

StatesPanel.propTypes = {
    value: PropTypes.string,
    profileTitle: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    socket: PropTypes.object,
};
export default withStyles(styles)(StatesPanel);
