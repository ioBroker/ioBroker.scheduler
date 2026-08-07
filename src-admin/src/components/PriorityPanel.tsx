import { Component, type JSX } from 'react';
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { I18n } from '@iobroker/gui-components';

interface PriorityPanelProps {
    onChange: (priority: number) => void;
    priority: number;
}

export default class PriorityPanel extends Component<PriorityPanelProps> {
    on = (evt: SelectChangeEvent<number>): void => {
        this.props.onChange(Number(evt.target.value));
    };

    render(): JSX.Element {
        const { priority } = this.props;
        return (
            <FormControl fullWidth>
                <InputLabel style={{ transform: 'translate(0px, -2px) scale(0.75)' }}>{I18n.t('Priority')}</InputLabel>
                <Select
                    variant="standard"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className="w-100"
                    value={priority}
                    onChange={this.on}
                >
                    <MenuItem value={0}>{I18n.t('Normal')}</MenuItem>
                    <MenuItem value={1}>
                        &#8593;
                        {I18n.t('High')}
                    </MenuItem>
                    <MenuItem value={2}>
                        &#8593;&#8593;
                        {I18n.t('Highest eg. Holiday')}
                    </MenuItem>
                </Select>
            </FormControl>
        );
    }
}
