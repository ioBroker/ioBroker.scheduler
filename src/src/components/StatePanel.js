import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    TextField, IconButton, Button,
} from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';

import { I18n, SelectID as DialogSelectID } from '@iobroker/adapter-react-v5';

class StatePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelectId: false,
        };
    }

    async componentDidMount() {
        if (this.props.value === true || !this.props.value) {
            // check that state exists
            const state = await this.props.socket.getObject(this.props.possibleStateId);
            if (!state) {
                this.props.socket.setObject(this.props.possibleStateId, {
                    common: {
                        type: 'boolean',
                        read: true,
                        write: true,
                        role: 'switch',
                        def: true,
                        name: this.props.profile.title,
                    },
                    type: 'state',
                });
            }
            if (!this.props.value) {
                this.props.onChange(true);
            }
        }
    }

    stateChange = state => {
        if (state === this.props.possibleStateId) {
            this.props.onChange(true);
        } else {
            this.props.onChange(state);
        }
    }

    renderSelectIdDialog() {
        if (this.state.showSelectId) {
            return <DialogSelectID
                key="tableSelect"
                imagePrefix="../.."
                selected={this.props.value === true ? this.props.possibleStateId : this.props.value || ''}
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

    render() {
        const title = this.props.title ? this.props.title : 'Activation state';

        return <>
            {this.renderSelectIdDialog()}
            <div style={{ display: 'flex' }}>
                <TextField
                    title={I18n.t('You can provide here the state that controls the activation of this profile')}
                    variant="standard"
                    style={{ flex: 1 }}
                    label={I18n.t(title)}
                    value={this.props.value === true ? this.props.possibleStateId : this.props.value || ''}
                    helperText={`(${I18n.t('optional')})`}
                    InputProps={{
                        readOnly: true,
                        endAdornment:
                            this.props.value !== true ? <IconButton onClick={e => {
                                e.stopPropagation();
                                this.stateChange(true);
                            }}>
                                <ClearIcon />
                            </IconButton> : null
                    }}
                />
                <Button
                    style={{ minWidth: 40, height: 40, marginTop: 8 }}
                    onClick={() => this.setState({ showSelectId: true })}
                    variant="outlined"
                >
                    ...
                </Button>
            </div>
        </>;
    }
}

StatePanel.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    profile: PropTypes.object,
    onChange: PropTypes.func,
    title: PropTypes.string,
    socket: PropTypes.object,
    possibleStateId: PropTypes.string,
};
export default StatePanel;
