import { Component, type JSX } from 'react';

import {
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Switch,
    FormControlLabel,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

import { Filter9Plus as EditAllIcon, Close as IconClose, Check as IconCheck } from '@mui/icons-material';

import { I18n } from '@iobroker/gui-components';

import type { MinMax, ProfileValueType } from '../types';

interface ResetAllValuesProps {
    type: ProfileValueType;
    onChange: (value: number | boolean) => void;
    minMax: MinMax;
}

interface ResetAllValuesState {
    showDialog: boolean;
    /** Kept as string/boolean while editing, converted on apply */
    value: string | number | boolean;
}

export default class ResetAllValues extends Component<ResetAllValuesProps, ResetAllValuesState> {
    constructor(props: ResetAllValuesProps) {
        super(props);
        this.state = {
            showDialog: false,
            value: this.props.type === 'onoff' ? false : 21,
        };
    }

    onSetValue(): void {
        const { value } = this.state;
        const newValue: number | boolean = this.props.type === 'onoff' ? !!value : parseFloat(value as string);

        this.setState({ showDialog: false }, () => this.props.onChange(newValue));
    }

    renderSelect(marks: Record<string, string>): JSX.Element {
        return (
            <FormControl
                fullWidth
                variant="standard"
            >
                <InputLabel>{I18n.t('Value for all intervals')}</InputLabel>
                <Select
                    variant="standard"
                    value={parseFloat(this.state.value as string)}
                    onChange={e => this.setState({ value: e.target.value })}
                >
                    {Object.keys(marks).map(key => (
                        <MenuItem
                            key={key}
                            value={parseFloat(key)}
                        >
                            {marks[key]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }

    renderSwitch(): JSX.Element {
        return (
            <FormControlLabel
                control={
                    <Switch
                        autoFocus
                        checked={!!this.state.value}
                        onChange={e => this.setState({ value: e.target.checked })}
                        color="primary"
                    />
                }
                label={this.state.value ? I18n.t('ON') : I18n.t('OFF')}
            />
        );
    }

    renderText(): JSX.Element {
        return (
            <TextField
                variant="standard"
                fullWidth
                autoFocus
                value={this.state.value}
                type="number"
                onKeyUp={e => e.key === 'Enter' && this.onSetValue()}
                slotProps={{
                    htmlInput: {
                        min: this.props.minMax.min,
                        max: this.props.minMax.max,
                    },
                }}
                onChange={e => this.setState({ value: e.target.value })}
                label={
                    this.props.type === 'temperature'
                        ? 'Temperature for all intervals'
                        : this.props.type === 'percent'
                          ? 'Percent value for all intervals'
                          : 'Value for all intervals'
                }
            />
        );
    }

    render(): JSX.Element {
        const numericValue = parseFloat(this.state.value as string);

        return (
            <>
                <Fab
                    title={I18n.t('Set all periods to one value')}
                    onClick={() => this.setState({ showDialog: true })}
                    size="small"
                >
                    <EditAllIcon />
                </Fab>
                {this.state.showDialog ? (
                    <Dialog
                        open={this.state.showDialog}
                        onClose={() => this.setState({ showDialog: false })}
                    >
                        <DialogTitle>{I18n.t('Reset all intervals to following value:')}</DialogTitle>
                        <DialogContent>
                            {this.props.type !== 'onoff'
                                ? this.props.type === 'custom' && this.props.minMax.marks
                                    ? this.renderSelect(this.props.minMax.marks)
                                    : this.renderText()
                                : this.renderSwitch()}
                        </DialogContent>
                        <DialogActions>
                            <Button
                                disabled={
                                    this.props.type !== 'onoff'
                                        ? numericValue > this.props.minMax.max || numericValue < this.props.minMax.min
                                        : false
                                }
                                variant="contained"
                                onClick={() => this.onSetValue()}
                                color="primary"
                                startIcon={<IconCheck />}
                            >
                                {I18n.t('Set')}
                            </Button>
                            <Button
                                onClick={() => this.setState({ showDialog: false })}
                                variant="contained"
                                color="grey"
                                startIcon={<IconClose />}
                            >
                                {I18n.t('Cancel')}
                            </Button>
                        </DialogActions>
                    </Dialog>
                ) : null}
            </>
        );
    }
}
