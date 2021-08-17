import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormLabel, withStyles, makeStyles } from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';
import ChipInput from 'material-ui-chip-input';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
};
const useChipStyles = makeStyles({
    root: {
        padding: 0,
        borderRadius: 15,
        display: 'flex',
        width: 'auto',
    },
    chipContainer: {
        marginTop: '-6px',
    },
    chip: props => ({
        '&>svg': {
            display: props.disabled ? 'none' : null,
        },
    }),
});

const CssTextField = props => {
    const chipStyles = useChipStyles({
        disabled: props.disabled,
        theme: props.theme,
    });
    return <ChipInput
        classes={chipStyles}
        {...props}
    />;
};

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
                    value={this.props.members}
                    onAdd={this.deviceAdd}
                    onDelete={this.deviceDelete}
                    placeholder={I18n.t('Put device names per comma')}
                    helperText=""
                    fullWidth
                    disabled={!this.props.isExpert}
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
