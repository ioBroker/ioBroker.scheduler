import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    FormLabel, withStyles, Chip, Tooltip, Fab,
} from '@material-ui/core';
import IconAdd from '@material-ui/icons/Add';

import I18n from '@iobroker/adapter-react/i18n';
import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import Utils from '@iobroker/adapter-react/Components/Utils';
import Icon from '@iobroker/adapter-react/Components/Icon';

const styles = {
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem',
    },
    chip: {
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    deviceId: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    deviceIcon: {
        height: 26,
        width: 26,
        marginRight: 4,
    },
    deviceContainer: {
        display: 'flex',
        alignItems: 'center',
    },
};

function checkObject(obj, type) {
    if (!obj || !obj.common) {
        return false;
    }
    if (type === 'percent') {
        return obj.common.unit === '%' || ('min' in obj.common && 'max' in obj.common);
    }
    if (type === 'temperature') {
        return obj.common.type === 'number';
    }
    if (type === 'onoff') {
        return obj.common.type === 'boolean';
    }
    return false;
}

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
                filterFunc={obj => checkObject(obj, this.props.type)}
                dialogName={this.props.adapterName}
                themeType={this.props.themeType}
                socket={this.props.socket}
                // statesOnly
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

        const errors = {};

        this.props.members.forEach(device => {
            let duplicates = 0;
            errors[device] = [];

            for (const k in this.props.profiles) {
                const profile = this.props.profiles[k];
                if (profile.type === 'profile'
                    && profile.data.members.includes(device)
                    && profile.data.prio === this.props.prio
                ) {
                    duplicates++;
                }
            }
            if (duplicates > 1) {
                errors[device].push(I18n.t('duplicate'));
            }

            if (!this.props.devicesCache[device]) {
                if (this.props.devicesCache[device] === false) {
                    errors[device].push(I18n.t('not exists'));
                }
            } else if (!checkObject(this.props.devicesCache[device], this.props.type)) {
                errors[device].push(I18n.t('wrong type'));
            }
        });

        const lang = I18n.getLanguage();

        return <>
            {this.renderSelectIdDialog()}
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t(title)}
            </FormLabel>
            <div style={{ display: 'flex' }}>
                <div>
                    {this.props.members.map(id => <span key={id}>
                        <Tooltip
                            title={errors[id].length ? `${I18n.t('Errors')}: ${errors[id].join(', ')}` : ''}
                        >
                            <Chip
                                label={<div className={this.props.classes.deviceContainer}>
                                    <Icon src={this.props.icons[id]} className={this.props.classes.deviceIcon} />
                                    <div>
                                        {this.props.devicesCache[id] ? <div>
                                            {Utils.getObjectNameFromObj(this.props.devicesCache[id], lang)}
                                        </div> : null}
                                        <div className={this.props.classes.deviceId}>{id}</div>
                                    </div>
                                </div>}
                                onDelete={this.props.isExpert ? () => this.deviceDelete(id) : null}
                                style={errors[id].length ? { backgroundColor: 'red' } : null}
                                className={this.props.classes.chip}
                                disabled={!this.props.isExpert}
                            />
                        </Tooltip>
                    </span>)}
                </div>
                {this.props.isExpert
                    ? <Fab
                        size="small"
                        color="primary"
                        onClick={() => this.setState({ showSelectId: true })}
                    >
                        <IconAdd />
                    </Fab>
                    : null}
            </div>
        </>;
    }
}

DevicesPanel.propTypes = {
    type: PropTypes.string,
    members: PropTypes.array,
    onChange: PropTypes.func,
    title: PropTypes.string,
    isExpert: PropTypes.bool,
    socket: PropTypes.object,
    devicesCache: PropTypes.object,
    icons: PropTypes.object,
};
export default withStyles(styles)(DevicesPanel);
