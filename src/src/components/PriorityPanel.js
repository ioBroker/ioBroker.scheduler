import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    FormControl, FormLabel, MenuItem, Select,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import I18n from '@iobroker/adapter-react/i18n';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem!important',
    },
};
class PriorityPanel extends Component {
    on = evt => {
        const priority = evt.target.value;
        this.props.onChange(priority);
    }

    render() {
        const { priority } = this.props;
        return (
            <FormControl component="fieldset" className="w-100">
                <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                    {I18n.t('Priority')}
                </FormLabel>
                <Select
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
                        {I18n.t('High')}
                    </MenuItem>
                    <MenuItem value={2}>
                        {I18n.t('Highest eg. Holiday')}
                    </MenuItem>
                </Select>
            </FormControl>
        );
    }
}

PriorityPanel.propTypes = {
    onChange: PropTypes.func,
    priority: PropTypes.number,
};
export default withStyles(styles)(PriorityPanel);
