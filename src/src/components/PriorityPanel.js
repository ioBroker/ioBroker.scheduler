import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    FormControl, InputLabel,
    MenuItem, Select,
} from '@mui/material';
import { I18n } from '@iobroker/adapter-react-v5';

class PriorityPanel extends Component {
    on = evt => {
        const priority = evt.target.value;
        this.props.onChange(priority);
    }

    render() {
        const { priority } = this.props;
        return <FormControl fullWidth>
            <InputLabel style={{ transform: 'translate(0px, -2px) scale(0.75)' }}>{I18n.t('Priority')}</InputLabel>
            <Select
                variant="standard"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="w-100"
                value={priority}
                onChange={this.on}
            >
                <MenuItem value={0}>
                    {I18n.t('Normal')}
                </MenuItem>
                <MenuItem value={1}>
                    &#8593;
                    {I18n.t('High')}
                </MenuItem>
                <MenuItem value={2}>
                    &#8593;&#8593;
                    {I18n.t('Highest eg. Holiday')}
                </MenuItem>
            </Select>
        </FormControl>;
    }
}

PriorityPanel.propTypes = {
    onChange: PropTypes.func,
    priority: PropTypes.number,
};
export default PriorityPanel;
