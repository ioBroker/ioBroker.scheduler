import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    FormLabel, withStyles, Chip, Tooltip, Fab,
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
    chip: {
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    deviceId: {
        fontSize: '80%',
    },
    deviceIcon: {
        maxWidth: 32,
        maxHeight: 32,
        marginRight: 4,
    },
    deviceContainer: {
        display: 'flex',
        alignItems: 'center',
    },
};

function checkObject(object, type) {
    if (type === 'percent') {
        return object.common.unit === '%' || ('min' in object.common && 'max' in object.common);
    }
    if (type === 'temperature') {
        return object.common.type === 'number';
    }
    if (type === 'onoff') {
        return object.common.type === 'boolean';
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
                // filterFunc={obj => checkObject(obj, this.props.type)}
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

        return <>
            {this.renderSelectIdDialog()}
            <FormLabel component="legend" className={this.props.classes.tapperTitle}>
                {I18n.t(title)}
            </FormLabel>
            <div style={{ display: 'flex' }}>
                <div>
                    {this.props.members.map(device => <span key={device}>
                        <Tooltip
                            title={errors[device].length ? `${I18n.t('Errors')}: ${errors[device].join(', ')}` : ''}
                        >
                            <Chip
                                label={<div className={this.props.classes.deviceContainer}>
                                    {this.props.devicesCache[device] && this.props.devicesCache[device].common.icon
                                        ? <img alt="" src={this.props.devicesCache[device].common.icon} className={this.props.classes.deviceIcon} />
                                        : null}
                                    <div>
                                        {this.props.devicesCache[device] ? <div>
                                            {typeof this.props.devicesCache[device].common.name === 'string'
                                                ? this.props.devicesCache[device].common.name
                                                : this.props.devicesCache[device].common.name[I18n.lang()]}
                                        </div> : null}
                                        <div className={this.props.classes.deviceId}>{device}</div>
                                    </div>
                                </div>}
                                onDelete={this.props.isExpert ? () => this.deviceDelete(device) : null}
                                style={errors[device].length ? { backgroundColor: 'red' } : null}
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
};
export default withStyles(styles)(DevicesPanel);
