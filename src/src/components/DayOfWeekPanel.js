import PropTypes from 'prop-types';
import { FormControl, FormControlLabel, withStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import I18n from '@iobroker/adapter-react/i18n';

const daysOfWeek = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
];

const dowOrder = [1, 2, 3, 4, 5, 6, 0];
const styles = {
    flow: {
        width: 26,
        height: 28,
        maxHeight: 28,
        minHeight: 28,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
    }
}
class DayOfWeekPanel extends Component {
    render() {
        const { flow } = this.props.classes;
        return (
            <FormControl component="fieldset">
                {dowOrder.map(index => (
                    <FormControlLabel
                        key={index}
                        control={(
                            <Checkbox
                                checked={this.props.dow.includes(index)}
                                color="primary"
                                className={flow}
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
export default withStyles(styles)(DayOfWeekPanel);
