import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    TextField, withStyles, FormLabel, IconButton,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import I18n from '@iobroker/adapter-react/i18n';
import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import Utils from '@iobroker/adapter-react/Components/Utils';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
};

class StatePanel extends Component {
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
                filterFunc={obj => obj?.common?.type === 'boolean'}
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

    getStateId() {
        return `scheduler.${this.props.instance}.${this.props.profileTitle.replace(Utils.FORBIDDEN_CHARS).replace(/./g, '_')}`;
    }

    render() {
        const title = this.props.title ? this.props.title : 'Activation state';

        return <>
            {this.renderSelectIdDialog()}
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t(title)}
            </FormLabel>
            <div style={{ display: 'flex', flexDirection: 'row' }} title={I18n.t('You can provide here the state that controls the enability of this profile')}>
                <TextField
                    style={{ flex: 1 }}
                    value={typeof this.props.value === 'undefined' ? '' : this.props.value}
                    onClick={() => this.setState({ showSelectId: true })}
                    helperText={`(${I18n.t('optional')})`}
                />
                {this.props.value !== this.getStateId() ? <IconButton onClick={() => this.getStateId()}>
                    <ClearIcon />
                </IconButton> : null}
            </div>
        </>;
    }
}

StatePanel.propTypes = {
    value: PropTypes.string,
    profileTitle: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    socket: PropTypes.object,
    instance: PropTypes.number,
};
export default withStyles(styles)(StatePanel);
