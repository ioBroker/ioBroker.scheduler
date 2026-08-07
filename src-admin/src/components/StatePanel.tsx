import { Component, type JSX } from 'react';

import { TextField, IconButton, Button } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';

import { I18n, DialogSelectID, type AdminConnection, type IobTheme, type ThemeType } from '@iobroker/gui-components';

import type { SchedulerProfile } from '../types';

interface StatePanelProps {
    /** `true` means "use the generated ID", a string is an explicitly selected state ID */
    value: string | boolean | null | undefined;
    profile: SchedulerProfile;
    onChange: (state: string | boolean) => void;
    title?: string;
    socket: AdminConnection;
    possibleStateId: string;
    adapterName?: string;
    themeType: ThemeType;
    theme: IobTheme;
}

interface StatePanelState {
    showSelectId: boolean;
}

export default class StatePanel extends Component<StatePanelProps, StatePanelState> {
    constructor(props: StatePanelProps) {
        super(props);
        this.state = {
            showSelectId: false,
        };
    }

    async componentDidMount(): Promise<void> {
        if (this.props.value === true || !this.props.value) {
            // check that state exists
            const state = await this.props.socket.getObject(this.props.possibleStateId);
            if (!state) {
                await this.props.socket.setObject(this.props.possibleStateId, {
                    common: {
                        type: 'boolean',
                        read: true,
                        write: true,
                        role: 'switch',
                        def: true,
                        name: this.props.profile.title,
                    },
                    type: 'state',
                    native: {},
                    _id: this.props.possibleStateId,
                });
            }
            if (!this.props.value) {
                this.props.onChange(true);
            }
        }
    }

    stateChange = (state: string | boolean): void => {
        if (state === this.props.possibleStateId) {
            this.props.onChange(true);
        } else {
            this.props.onChange(state);
        }
    };

    renderSelectIdDialog(): JSX.Element | null {
        if (this.state.showSelectId) {
            return (
                <DialogSelectID
                    key="tableSelect"
                    imagePrefix="../.."
                    selected={this.props.value === true ? this.props.possibleStateId : this.props.value || ''}
                    filterFunc={obj => obj?.common?.type === 'boolean'}
                    dialogName={this.props.adapterName}
                    themeType={this.props.themeType}
                    theme={this.props.theme}
                    socket={this.props.socket}
                    // statesOnly
                    onClose={() => this.setState({ showSelectId: false })}
                    onOk={selected => {
                        const id = (Array.isArray(selected) ? selected[0] : selected) || '';
                        this.setState({ showSelectId: false }, () => this.stateChange(id));
                    }}
                />
            );
        }

        return null;
    }

    render(): JSX.Element {
        const title = this.props.title ? this.props.title : 'Activation state';

        return (
            <>
                {this.renderSelectIdDialog()}
                <div style={{ display: 'flex' }}>
                    <TextField
                        title={I18n.t('You can provide here the state that controls the activation of this profile')}
                        variant="standard"
                        style={{ flex: 1 }}
                        label={I18n.t(title)}
                        value={this.props.value === true ? this.props.possibleStateId : this.props.value || ''}
                        helperText={`(${I18n.t('optional')})`}
                        slotProps={{
                            input: {
                                readOnly: true,
                                endAdornment:
                                    this.props.value !== true ? (
                                        <IconButton
                                            onClick={e => {
                                                e.stopPropagation();
                                                this.stateChange(true);
                                            }}
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    ) : null,
                            },
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
            </>
        );
    }
}
