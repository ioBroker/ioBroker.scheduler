import { Component, type JSX } from 'react';
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { I18n } from '@iobroker/gui-components';

import type { ProfileValueType } from '../types';

interface TypePanelProps {
    onChange: (type: ProfileValueType) => void;
    type: ProfileValueType;
}

export default class TypePanel extends Component<TypePanelProps> {
    on = (evt: SelectChangeEvent<ProfileValueType>): void => {
        this.props.onChange(evt.target.value);
    };

    render(): JSX.Element {
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
