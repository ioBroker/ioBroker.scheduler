import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
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
    InputLabel, Select, MenuItem,
} from '@mui/material';

import EditAllIcon from '@mui/icons-material/Filter9Plus';
import IconClose from '@mui/icons-material/Close';
import IconCheck from '@mui/icons-material/Check';

import I18n from '@iobroker/adapter-react-v5/i18n';

const styles = () => ({

});

class ResetAllValues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
            value: this.props.type === 'onoff' ? false : 21,
        };
    }

    onSetValue() {
        let { value } = this.state;
        if (this.props.type === 'onoff') {
            value = !!value;
        } else {
            value = parseFloat(value);
        }

        this.setState({ showDialog: false }, () => this.props.onChange(value));
    }

    renderSelect(marks) {
        return <FormControl fullWidth variant="standard">
            <InputLabel>{I18n.t('Value for all intervals')}</InputLabel>
            <Select
                variant="standard"
                value={parseFloat(this.state.value)}
                onChange={e => this.setState({ value: e.target.value })}
            >
                {Object.keys(marks).map(key =>
                    <MenuItem value={parseFloat(key)}>{marks[key]}</MenuItem>)}
            </Select>
        </FormControl>
    }

    renderSwitch() {
        return <FormControlLabel
            control={
                <Switch
                    autoFocus
                    checked={!!this.state.value}
                    onChange={e => this.setState({ value: e.target.checked })}
                    color="primary"
                />
            }
            label={this.state.value ? I18n.t('ON') : I18n.t('OFF')}
        />;
    }

    renderText() {
        return <TextField
            variant="standard"
            fullWidth
            autoFocus
            value={this.state.value}
            type="number"
            onKeyUp={e => e.keyCode === 13 && this.onSetValue()}
            inputProps={{
                min: this.props.minMax.min,
                max: this.props.minMax.max,
            }}
            onChange={e => this.setState({ value: e.target.value })}
            label={this.props.type === 'temperature' ? 'Temperature for all intervals' : (this.props.type === 'percent' ? 'Percent value for all intervals' : 'Value for all intervals')}
        />;
    }

    render() {
        return <>
            <Fab
                title={I18n.t('Set all periods to one value')}
                onClick={() => this.setState({ showDialog: true })}
                size="small"
            >
                <EditAllIcon />
            </Fab>
            {
                this.state.showDialog
                    ? <Dialog
                        open={this.state.showDialog}
                        onClose={() => this.setState({ showDialog: false })}
                    >
                        <DialogTitle>{I18n.t('Reset all intervals to following value:')}</DialogTitle>
                        <DialogContent>
                            {this.props.type !== 'onoff' ? (
                                this.props.type === 'custom' && this.props.minMax.marks ? this.renderSelect(this.props.minMax.marks) : this.renderText())
                                :
                                this.renderSwitch()
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button
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
                    : null
            }
        </>;
    }
}

ResetAllValues.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    minMax: PropTypes.object,
};

export default withStyles(styles)(ResetAllValues);
