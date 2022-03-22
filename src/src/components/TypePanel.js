import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import {
    FormControl, FormLabel, MenuItem, Select,
} from '@mui/material';
import I18n from '@iobroker/adapter-react-v5/i18n';

const styles = () => ({
    tapperInside: {
        overflow: 'hidden',
        height: '100%',
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
});

class TypePanel extends Component {
    on = evt => {
        const type = evt.target.value;
        this.props.onChange(type);
    }

    render() {
        const { type } = this.props;
        return <FormControl component="fieldset" className="w-100">
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t('Type')}
            </FormLabel>
            <Select
                variant="standard"
                labelId="type-select-label"
                id="type-select"
                className="w-100"
                value={type}
                onChange={this.on}
            >
                <MenuItem value="percent">
                    {I18n.t('Percent')}
                </MenuItem>
                <MenuItem value="temperature">
                    {I18n.t('Temperature')}
                </MenuItem>
                <MenuItem value="onoff">
                    {I18n.t('On/Off')}
                </MenuItem>
            </Select>
        </FormControl>;
    }
}

TypePanel.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
};
export default withStyles(styles)(TypePanel);
