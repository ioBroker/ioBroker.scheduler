import PropTypes from 'prop-types';
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

const dowOrder = [1, 2, 3, 4, 5, 6, 0];

class DayOfWeekPanel extends Component {
    render() {
        return (
            <FormControl component="fieldset">
                {dowOrder.map(index => (
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
                        label={I18n.t(daysOfWeek[index])}
                        className="px-1"
                    />
                ))}
            </FormControl>
        );
    }
}

DayOfWeekPanel.propTypes = {
    dow: PropTypes.array,
    onChange: PropTypes.func,
};
export default DayOfWeekPanel;
