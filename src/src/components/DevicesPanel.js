import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChipInput from 'material-ui-chip-input';

import {
    FormLabel, withStyles, makeStyles, IconButton,
} from '@material-ui/core';
import IconAdd from '@material-ui/icons/Add';

import I18n from '@iobroker/adapter-react/i18n';
import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
};
const useChipStyles = makeStyles({
    root: {
        padding: 0,
        borderRadius: 15,
        flex: 1,
    },
    chipContainer: {
        marginTop: '-6px',
    },
    chip: props => ({
        '&>svg': {
            display: props.disabled ? 'none' : null,
        },
    }),
});

const CssTextField = props => {
    const chipStyles = useChipStyles({
        disabled: props.disabled,
        theme: props.theme,
    });

    return <ChipInput
        classes={chipStyles}
        {...props}
    />;
};

class DevicesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelectId: false,
        };
    }

    deviceAdd = device => {
        const devices = JSON.parse(JSON.stringify(this.props.members));
        devices.push(device);
        this.props.onChange(devices);
    }

    deviceDelete = device => {
        const devices = JSON.parse(JSON.stringify(this.props.members));
        devices.splice(devices.indexOf(device), 1);
        this.props.onChange(devices);
    }

    renderSelectIdDialog() {
        if (this.state.showSelectId) {
            return <DialogSelectID
                key="tableSelect"
                imagePrefix="../.."
                dialogName={this.props.adapterName}
                themeType={this.props.themeType}
                socket={this.props.socket}
                statesOnly
                onClose={() => this.setState({ showSelectId: false })}
                onOk={selected => {
                    const id = selected;
                    this.setState({ showSelectId: false }, () => this.deviceAdd(id));
                }}
            />;
        }

        return null;
    }

    render() {
        const title = this.props.title ? this.props.title : 'Devices';
        return <>
            {this.renderSelectIdDialog()}
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t(title)}
            </FormLabel>
            <div style={{ display: 'flex' }}>
                <CssTextField
                    value={this.props.members}
                    onAdd={this.deviceAdd}
                    onDelete={this.deviceDelete}
                    placeholder={I18n.t('Put device names per comma')}
                    helperText=""
                    disabled={!this.props.isExpert}
                    multiline="1"
                    rows={this.props.rows || 3}
                    InputLabelProps={{ shrink: true }}
                />
                <IconButton size="small" onClick={() => this.setState({ showSelectId: true })}><IconAdd /></IconButton>
            </div>
        </>;
    }
}

DevicesPanel.propTypes = {
    members: PropTypes.array,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    title: PropTypes.string,
    isExpert: PropTypes.bool,
    socket: PropTypes.object,
};
export default withStyles(styles)(DevicesPanel);
