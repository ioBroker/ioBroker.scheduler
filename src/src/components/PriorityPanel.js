import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    FormControl, FormLabel, MenuItem, Select,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import I18n from '@iobroker/adapter-react-v5/i18n';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
};
class PriorityPanel extends Component {
    on = evt => {
        const priority = evt.target.value;
        this.props.onChange(priority);
    }

    render() {
        const { priority } = this.props;
        return <FormControl component="fieldset" className="w-100">
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t('Priority')}
            </FormLabel>
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
export default withStyles(styles)(PriorityPanel);
