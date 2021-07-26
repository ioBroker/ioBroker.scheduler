import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormLabel, TextField, withStyles } from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';

const styles = {
    tapperTitle: {
        fontSize: "1.3rem",
        textTransform: "uppercase",
        paddingBottom: "1rem!important"
    }
}
const CssTextField = withStyles({
    root: {
        backgroundColor: '#FFFFFF12',
        padding: 0,
        margin: 0,
        borderRadius: 15,
        display: 'flex',
        width: 'auto',
    },
})(TextField);

class DevicesPanel extends Component {
    render() {
        const title = this.props.title ? this.props.title : 'Devices';
        return (
            <>
                <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                    {I18n.t(title)}
                </FormLabel>
                <CssTextField
                    id="standard-full-width"
                    label=""
                    value={this.props.members.join(', ')}
                    onChange={e => this.props.onChange(e.target.value)}
                    className="p-0 m-0"
                    placeholder={I18n.t('Put device names per comma')}
                    helperText=""
                    fullWidth
                    disabled={!this.props.isExpert}
                    margin="normal"
                    multiline
                    rows={this.props.rows || 3}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </>
        );
    }
}

DevicesPanel.propTypes = {
    members: PropTypes.array,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    title: PropTypes.string,
    isExpert: PropTypes.bool,
};
export default withStyles(styles)(DevicesPanel);
