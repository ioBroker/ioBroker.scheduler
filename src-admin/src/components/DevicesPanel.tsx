import { Component, type JSX } from 'react';

import { Box, Button, Chip, FormHelperText, FormLabel, Tooltip } from '@mui/material';
import { Add as IconAdd } from '@mui/icons-material';

import {
    I18n,
    DialogSelectID,
    Utils,
    Icon,
    IconResult,
    type AdminConnection,
    type IobTheme,
    type ThemeType,
} from '@iobroker/gui-components';

import type { DevicesCache, ProfileValueType, SchedulerProfile } from '../types';
import { getTypeHint } from './typeHints';
import { fadeIn, motion, popIn } from './animations';

const styles: Record<string, any> = {
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '6px',
        width: '100%',
    },
    chip: {
        borderRadius: '8px',
        height: 'auto',
        maxWidth: '100%',
        py: '4px',
        '& .MuiChip-label': {
            overflow: 'hidden',
        },
        // a new data point pops in
        ...motion({ animation: `${popIn} 300ms ease-out both` }),
    },
    addButton: {
        borderRadius: '8px',
        textTransform: 'none',
        '& .MuiButton-startIcon svg': motion({ transition: 'transform 300ms ease-out' }),
        '&:hover .MuiButton-startIcon svg': { transform: 'rotate(90deg)' },
    },
    hint: motion({ animation: `${fadeIn} 400ms ease-out both` }),
    deviceId: {
        fontSize: 10,
        fontStyle: 'italic',
        opacity: 0.7,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    deviceName: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    deviceText: {
        minWidth: 0,
        overflow: 'hidden',
    },
    deviceIcon: {
        height: 22,
        width: 22,
        marginRight: 6,
        flexShrink: 0,
    },
    deviceContainer: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
    },
    tooltip: {
        pointerEvents: 'none',
        whiteSpace: 'pre-line',
    },
};

// Must stay identical to SchedulerAdapter.checkObject() in src/main.ts
function checkObject(
    obj: ioBroker.Object | false | null | undefined,
    type: ProfileValueType,
    hasValueList?: boolean,
): boolean {
    if (!obj || !obj.common) {
        return false;
    }
    const common = obj.common as ioBroker.StateCommon;
    if (type === 'custom') {
        if (hasValueList) {
            // the entries of a value list can be numbers, texts or true/false
            return ['number', 'string', 'boolean', 'mixed'].includes(common.type);
        }
        return common.type === 'number' || common.type === 'mixed';
    }
    if (type === 'percent') {
        return common.unit === '%' || (common.min !== undefined && common.max !== undefined) || common.type === 'mixed';
    }
    if (type === 'temperature') {
        return common.type === 'number' || common.type === 'mixed';
    }
    if (type === 'onoff') {
        return common.type === 'boolean' || common.type === 'mixed';
    }
    return false;
}

interface DevicesPanelProps {
    type: ProfileValueType;
    /** The profile has a value list: data points of type string and boolean fit too */
    hasValueList?: boolean;
    members: string[];
    onChange: (members: string[]) => void;
    title?: string;
    /** Set when the surrounding card already shows a caption */
    hideTitle?: boolean;
    isExpert?: boolean;
    rows?: number;
    socket: AdminConnection;
    windowWidth?: number;
    devicesCache: DevicesCache;
    prio: number;
    profiles: SchedulerProfile[];
    icons: Record<string, string>;
    adapterName?: string;
    themeType?: ThemeType;
    theme: IobTheme;
}

interface DevicesPanelState {
    showSelectId: boolean;
}

export default class DevicesPanel extends Component<DevicesPanelProps, DevicesPanelState> {
    constructor(props: DevicesPanelProps) {
        super(props);
        this.state = {
            showSelectId: false,
        };
    }

    deviceAdd = (device: string): void => {
        const devices: string[] = JSON.parse(JSON.stringify(this.props.members));
        if (!devices.includes(device)) {
            devices.push(device);
            this.props.onChange(devices);
        }
    };

    deviceDelete = (device: string): void => {
        const devices: string[] = JSON.parse(JSON.stringify(this.props.members));
        devices.splice(devices.indexOf(device), 1);
        this.props.onChange(devices);
    };

    renderSelectIdDialog(): JSX.Element | null {
        if (this.state.showSelectId) {
            return (
                <DialogSelectID
                    theme={this.props.theme}
                    key="tableSelect"
                    imagePrefix="../.."
                    filterFunc={obj => checkObject(obj, this.props.type, this.props.hasValueList)}
                    dialogName={this.props.adapterName}
                    themeType={this.props.themeType}
                    socket={this.props.socket}
                    multiSelect
                    // statesOnly
                    onClose={() => this.setState({ showSelectId: false })}
                    onOk={selected => {
                        this.setState({ showSelectId: false }, () => {
                            if (Array.isArray(selected)) {
                                const devices: string[] = JSON.parse(JSON.stringify(this.props.members));
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
                />
            );
        }

        return null;
    }

    render(): JSX.Element {
        const title = this.props.title ? this.props.title : 'Devices';

        const errors: Record<string, string[]> = {};

        this.props.members.forEach(deviceID => {
            const duplicates: number[] = [];
            errors[deviceID] = [];

            for (let k = 0; k < this.props.profiles.length; k++) {
                const profile = this.props.profiles[k];
                if (
                    profile.type === 'profile' &&
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
            } else if (!checkObject(this.props.devicesCache[deviceID], this.props.type, this.props.hasValueList)) {
                errors[deviceID].push(
                    `${I18n.t('wrong type')}. ${I18n.t(getTypeHint(this.props.type, this.props.hasValueList))}`,
                );
            }
        });

        const lang = I18n.getLanguage();

        return (
            <>
                {this.renderSelectIdDialog()}
                {this.props.hideTitle ? null : <FormLabel>{I18n.t(title)}</FormLabel>}
                <Box sx={styles.list}>
                    {this.props.members.map(id => {
                        const obj = this.props.devicesCache[id];
                        const hasError = !!errors[id].length;
                        return (
                            <Tooltip
                                key={id}
                                title={hasError ? `${I18n.t('Errors')}:\n${errors[id].join('\n')}` : ''}
                                slotProps={{ popper: { sx: styles.tooltip } }}
                            >
                                <Chip
                                    variant="outlined"
                                    color={hasError ? 'error' : 'default'}
                                    icon={
                                        hasError ? (
                                            <IconResult
                                                type="error"
                                                fontSize="small"
                                                replay={errors[id].join()}
                                            />
                                        ) : undefined
                                    }
                                    label={
                                        <Box sx={styles.deviceContainer}>
                                            <Icon
                                                src={this.props.icons[id]}
                                                style={styles.deviceIcon}
                                            />
                                            <Box sx={styles.deviceText}>
                                                {obj ? (
                                                    <Box sx={styles.deviceName}>
                                                        {Utils.getObjectNameFromObj(obj, lang)}
                                                    </Box>
                                                ) : null}
                                                <Box sx={styles.deviceId}>{id}</Box>
                                            </Box>
                                        </Box>
                                    }
                                    onDelete={this.props.isExpert ? () => this.deviceDelete(id) : undefined}
                                    sx={styles.chip}
                                    disabled={!this.props.isExpert}
                                />
                            </Tooltip>
                        );
                    })}
                    {this.props.isExpert ? (
                        <Button
                            size="small"
                            variant="outlined"
                            startIcon={<IconAdd />}
                            sx={styles.addButton}
                            onClick={() => this.setState({ showSelectId: true })}
                        >
                            {I18n.t('Add')}
                        </Button>
                    ) : null}
                </Box>
                {this.props.members.length ? null : (
                    <FormHelperText sx={styles.hint}>
                        {I18n.t('hint_no_devices')} {I18n.t(getTypeHint(this.props.type, this.props.hasValueList))}
                    </FormHelperText>
                )}
            </>
        );
    }
}
