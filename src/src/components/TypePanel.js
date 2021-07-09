import React, { Component } from 'react';
import {
    FormControl, FormLabel, MenuItem, Select,
} from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';

class TypePanel extends Component {
    on = (evt) => {
        const type = evt.target.value;
        this.props.on(type);
    }

    render() {
        const { type } = this.props;
        return (
            <FormControl component="fieldset" className="w-100">
                <FormLabel component="legend" className="tapper-title">{ I18n.t('Type') }</FormLabel>
                <Select
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
            </FormControl>
        );
    }
}
export default TypePanel;
