import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import {
    Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button, Switch, FormControlLabel, TextField,
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
                            {this.props.type !== 'onoff' ?
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    autoFocus
                                    value={this.state.value}
                                    type="number"
                                    onKeyUp={e => e.keyCode === 13 && this.onSetValue()}
                                    inputProps={{
                                        min: this.props.type === 'temperature' ? 12 : 0,
                                        max: this.props.type === 'temperature' ? 36 : 100,
                                    }}
                                    onChange={e => this.setState({ value: e.target.value })}
                                    label={this.props.type === 'temperature' ? 'Temperature for all intervals' : 'Percent value for all intervals'}
                                />
                                :
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
};

export default withStyles(styles)(ResetAllValues);
