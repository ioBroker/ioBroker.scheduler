import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormLabel, TextField, withStyles } from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';
import ChipInput from 'material-ui-chip-input';

const styles = {
    tapperTitle: {
        fontSize: "1.3rem",
        textTransform: "uppercase",
        paddingBottom: "1rem!important"
    },
};
const CssTextField = withStyles({
    root: {
        backgroundColor: '#FFFFFF12',
        padding: 0,
        margin: 0,
        borderRadius: 15,
        display: 'flex',
        width: 'auto',
    },
})(ChipInput);

class DevicesPanel extends Component {
    deviceAdd = device => {
        const devices = JSON.parse(JSON.stringify(this.props.members));
        devices.push(device);
        this.props.onChange(devices);
    }

    deviceDelete = device => {
        const devices = JSON.parse(JSON.stringify(this.props.members));
        devices.splice(devices.indexOf(device), 1);
        this.props.onChange(devices);
    }

    render() {
        const title = this.props.title ? this.props.title : 'Devices';
        return (
            <>
                <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                    {I18n.t(title)}
                </FormLabel>
                <CssTextField
                    id="standard-full-width"
                    label=""
                    value={this.props.members}
                    onAdd={this.deviceAdd}
                    onDelete={this.deviceDelete}
                    className="p-0 m-0"
                    placeholder={I18n.t('Put device names per comma')}
                    helperText=""
                    fullWidth
                    disabled={!this.props.isExpert}
                    margin="normal"
                    multiline="1"
                    rows={this.props.rows || 3}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </>
        );
    }
}

DevicesPanel.propTypes = {
    members: PropTypes.array,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    title: PropTypes.string,
    isExpert: PropTypes.bool,
};
export default withStyles(styles)(DevicesPanel);
