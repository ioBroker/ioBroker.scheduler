import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { I18n } from '@iobroker/adapter-react-v5';

class TypePanel extends Component {
    on = evt => {
        const type = evt.target.value;
        this.props.onChange(type);
    };

    render() {
        const { type } = this.props;
        return (
            <FormControl fullWidth>
                <InputLabel style={{ transform: 'translate(0px, -2px) scale(0.75)' }}>{I18n.t('Type')}</InputLabel>
                <Select
                    variant="standard"
                    labelId="type-select-label"
                    id="type-select"
                    className="w-100"
                    value={type}
                    onChange={this.on}
                >
                    <MenuItem value="percent">{I18n.t('Percent')}</MenuItem>
                    <MenuItem value="temperature">{I18n.t('Temperature')}</MenuItem>
                    <MenuItem value="onoff">{I18n.t('On/Off')}</MenuItem>
                    <MenuItem value="custom">{I18n.t('Custom')}</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

TypePanel.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
};
export default TypePanel;
