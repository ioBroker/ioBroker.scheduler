import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    FormLabel, Chip, Tooltip, Fab,
} from '@mui/material';
import IconAdd from '@mui/icons-material/Add';

import {
    I18n,
    SelectID as DialogSelectID,
    Utils,
    Icon,
} from '@iobroker/adapter-react-v5';

const styles = {
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
    if (!obj?.common) {
        return false;
    }
    if (type === 'custom') {
        return obj.common.type === 'number';
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
        if (!devices.includes(device)) {
            devices.push(device);
            this.props.onChange(devices);
        }
    }

    deviceDelete = device => {
        const devices = JSON.parse(JSON.stringify(this.props.members));
        devices.splice(devices.indexOf(device), 1);
        this.props.onChange(devices);
    }

    renderSelectIdDialog() {
        if (this.state.showSelectId) {
            return <DialogSelectID
                theme={this.props.theme}
                key="tableSelect"
                imagePrefix="../.."
                filterFunc={obj => checkObject(obj, this.props.type)}
                dialogName={this.props.adapterName}
                themeType={this.props.themeType}
                socket={this.props.socket}
                multiSelect
                // statesOnly
                onClose={() => this.setState({ showSelectId: false })}
                onOk={selected => {
                    this.setState({ showSelectId: false }, () => {
                        if (Array.isArray(selected)) {
                            const devices = JSON.parse(JSON.stringify(this.props.members));
                            for (const id of selected) {
                                if (!devices.includes(id)) {
                                    devices.push(id);
                                }
                            }
                            this.props.onChange(devices);
                        } else if (selected) {
                            this.deviceAdd(selected);
                        }
                    });
                }}
            />;
        }

        return null;
    }

    render() {
        const title = this.props.title ? this.props.title : 'Devices';

        const errors = {};

        this.props.members.forEach(deviceID => {
            const duplicates = [];
            errors[deviceID] = [];

            for (const k in this.props.profiles) {
                const profile = this.props.profiles[k];
                if (profile.type === 'profile' &&
                    profile.data.members.includes(deviceID) &&
                    profile.data.prio === this.props.prio
                ) {
                    if (duplicates.length) {
                        // check if profiles have same dows
                        const dows1 = profile.data.dow;
                        const dows2 = this.props.profiles[duplicates[0]].data.dow;
                        if (dows1?.find(d => dows2.includes(d)) || dows2?.find(d => dows1.includes(d))) {
                            duplicates.push(k);
                            break;
                        }
                    } else {
                        duplicates.push(k);
                    }
                }
            }
            if (duplicates.length > 1) {
                errors[deviceID].push(I18n.t('duplicate'));
            }

            if (!this.props.devicesCache[deviceID]) {
                if (this.props.devicesCache[deviceID] === false) {
                    errors[deviceID].push(I18n.t('not exists'));
                }
            } else if (!checkObject(this.props.devicesCache[deviceID], this.props.type)) {
                errors[deviceID].push(I18n.t('wrong type'));
            }
        });

        const lang = I18n.getLanguage();

        return <>
            {this.renderSelectIdDialog()}
            <FormLabel>
                {I18n.t(title)}
            </FormLabel>
            <div style={{ display: 'flex' }}>
                <div>
                    {this.props.members.map(id => <span key={id}>
                        <Tooltip
                            title={errors[id].length ? `${I18n.t('Errors')}: ${errors[id].join(', ')}` : ''}
                        >
                            <Chip
                                label={<div style={styles.deviceContainer}>
                                    <Icon src={this.props.icons[id]} style={styles.deviceIcon} />
                                    <div>
                                        {this.props.devicesCache[id] ? <div>
                                            {Utils.getObjectNameFromObj(this.props.devicesCache[id], lang)}
                                        </div> : null}
                                        <div style={styles.deviceId}>{id}</div>
                                    </div>
                                </div>}
                                onDelete={this.props.isExpert ? () => this.deviceDelete(id) : null}
                                style={errors[id].length ? { backgroundColor: 'red' } : null}
                                style={styles.chip}
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
    theme: PropTypes.object,
};
export default DevicesPanel;
