import { FormControl, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import I18n from '@iobroker/adapter-react/i18n';

const daysOfWeek = [
    'Sn',
    'Mn',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
];

class DayOfWeekPanel extends Component {
    render() {
        return (
            <FormControl component="fieldset">
                {daysOfWeek.map((title, index) => (
                    <FormControlLabel
                        key={index}
                        control={(
                            <Checkbox
                                checked={this.props.dow.includes(index)}
                                color="primary"
                                className="flow checkbox"
                                onChange={e => this.props.onChange(index, e.target.checked)}
                            />
                        )}
                        label={I18n.t(title)}
                        className="px-1"
                    />
                ))}
            </FormControl>
        );
    }
}
export default DayOfWeekPanel;
