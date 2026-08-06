import * as utils from '@iobroker/adapter-core'; // Get common adapter utils

import type { ActiveDevice, ProfileValueType, SchedulerProfile } from './types';

const adapterName: string = (require('../package.json') as { name: string }).name.split('.').pop()!;

const FORBIDDEN_CHARS = /[^._\-/ :!#$%&()+=@^{}|~\p{Ll}\p{Lu}\p{Nd}]+/gu;

class SchedulerAdapter extends utils.Adapter {
    /** Cache of all objects, which are controlled by the profiles */
    private readonly devices: { [id: string]: ioBroker.StateObject } = {};

    /** Timer for the next interval */
    private timer: ioBroker.Timeout | undefined;

    public constructor(options: Partial<utils.AdapterOptions> = {}) {
        super({ ...options, name: adapterName });

        this.on('ready', () => this.main());
        this.on('objectChange', (id, obj) => this.onObjectChange(id, obj));
        this.on('unload', callback => this.onUnload(callback));
    }

    private onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
        if (this.devices[id]) {
            if (obj) {
                this.devices[id] = obj as ioBroker.StateObject;
                // the native part is not used here and could be big
                this.devices[id].native = {};
            } else {
                delete this.devices[id];
            }
        }
    }

    private onUnload(callback: () => void): void {
        // stop running timer
        if (this.timer) {
            this.clearTimeout(this.timer);
            this.timer = undefined;
        }
        callback();
    }

    private static checkObject(obj: ioBroker.StateObject, type: ProfileValueType): boolean {
        if (type === 'percent') {
            return obj.common.unit === '%' || (obj.common.min !== undefined && obj.common.max !== undefined);
        }
        if (type === 'temperature') {
            return obj.common.type === 'number';
        }
        if (type === 'onoff') {
            return obj.common.type === 'boolean';
        }
        return false;
    }

    private static convertValue(obj: ioBroker.StateObject, type: ProfileValueType, value: number): number | boolean {
        if (type === 'percent') {
            if (obj.common.min !== undefined && obj.common.max !== undefined) {
                const delta = obj.common.max - obj.common.min;
                return obj.common.min + Math.round((delta * value) / 100);
            }
            return value;
        }
        if (type === 'temperature') {
            return value;
        }
        if (type === 'onoff') {
            return !!value;
        }

        return false;
    }

    private static getPreviousValue(intervals: number[], index: number): number {
        if (index === 0) {
            return intervals[intervals.length - 1];
        }
        return intervals[index - 1];
    }

    private async updateStates(force?: boolean): Promise<void> {
        const profiles = this.config.profiles;
        const now = new Date();
        const active: { [id: string]: ActiveDevice } = {};
        let isHoliday = false;

        if (this.config.holidayId) {
            try {
                const state = await this.getForeignStateAsync(this.config.holidayId);
                isHoliday = !!state?.val;
            } catch (e) {
                this.log.warn(`Cannot get is holiday: ${e as Error}`);
            }
        }

        for (const profile of profiles) {
            let profileState: ioBroker.StateValue = null;

            if (profile.type === 'profile' && typeof profile.data.state === 'string' && profile.data.state) {
                const state = await this.getForeignStateAsync(profile.data.state);
                profileState = state ? state.val : null;
            }

            const minutes = now.getMinutes();
            // if not XX:00 or XX:30
            if (!force && profile.data.intervalDuration === 0.5 && (minutes === 15 || minutes === 45)) {
                continue;
            }
            // if not XX:00
            if (!force && profile.data.intervalDuration >= 1 && minutes) {
                continue;
            }
            if (profile.type === 'profile') {
                if ((profile.data.dow.includes(now.getDay()) || (profile.data.holiday && isHoliday)) && profileState) {
                    const index = Math.floor((now.getHours() + now.getMinutes() / 60) / profile.data.intervalDuration);
                    const value = profile.data.intervals[index];
                    if (profile.data.activeState) {
                        await this.setStateAsync(profile.data.activeState, true, true);
                    }
                    if (
                        force ||
                        !profile.data.ignoreSameValues ||
                        SchedulerAdapter.getPreviousValue(profile.data.intervals, index) !== value
                    ) {
                        for (const id of profile.data.members) {
                            if (!this.devices[id]) {
                                this.log.warn(
                                    `Device ${id} used in schedule "${profile.title}", but object does not exist.`,
                                );
                                // this object was deleted after adapter start
                                continue;
                            }

                            if (!active[id] || active[id].priority < profile.data.prio) {
                                active[id] = {
                                    id: profile.id,
                                    title: profile.title,
                                    priority: profile.data.prio,
                                    type: profile.data.type,
                                    value,
                                    doNotWriteSameValue: profile.data.doNotWriteSameValue,
                                };
                            } else if (active[id].priority === profile.data.prio) {
                                // check if the days are different
                                this.log.error(
                                    `"${id}" is in two or more profiles: "${profile.title}" and "${active[id].title}"(<-used for control)`,
                                );
                            }
                        }
                    }
                } else if (profile.data.activeState) {
                    await this.setStateAsync(profile.data.activeState, false, true);
                }
            }
        }

        for (const id in active) {
            const profile = active[id];
            const obj = this.devices[id];

            if (!SchedulerAdapter.checkObject(obj, profile.type)) {
                this.log.error(`${id} in ${profile.title} is not type ${profile.type}`);
                continue;
            }
            const value = SchedulerAdapter.convertValue(obj, profile.type, profile.value);

            if (profile.doNotWriteSameValue) {
                const currentValue = await this.getForeignStateAsync(id);
                if (currentValue && currentValue.val === value) {
                    continue;
                }
            }

            await this.setForeignStateChangedAsync(id, value);

            this.log.info(`${id} in ${profile.title} set to ${value}`);
        }
    }

    private startNextInterval(): void {
        const time = new Date();

        // get the next 15 minutes
        if (time.getMinutes() < 15) {
            time.setMinutes(15);
        } else if (time.getMinutes() < 30) {
            time.setMinutes(30);
        } else if (time.getMinutes() < 45) {
            time.setMinutes(45);
        } else {
            time.setHours(time.getHours() + 1);
            time.setMinutes(0);
        }
        time.setSeconds(0);
        time.setMilliseconds(0);

        this.timer = this.setTimeout(() => {
            this.timer = undefined;
            this.updateStates().catch(e => this.log.error(`Cannot update states: ${e as Error}`));
            this.startNextInterval();
        }, time.getTime() - Date.now());
    }

    private getStateId(profile: SchedulerProfile, profiles: SchedulerProfile[], _list?: string[]): string | null {
        _list = _list || [];
        _list.unshift(profile.title.replace(FORBIDDEN_CHARS, '_').replace(/\./g, '_'));

        if (profile.parent) {
            // find parent profile
            const parentProfile = profiles.find(item => item.id === profile.parent);
            if (parentProfile) {
                return this.getStateId(parentProfile, profiles, _list);
            }
            this.log.error(`Cannot find parent ${profile.parent}`);
            return null;
        }

        return `${this.namespace}.${_list.join('.')}`;
    }

    private async createActiveState(id: string): Promise<void> {
        const obj = await this.getForeignObjectAsync(id);
        if (!obj) {
            await this.setObjectAsync(id, {
                type: 'state',
                common: {
                    name: 'Active state of the profile',
                    type: 'boolean',
                    role: 'indicator',
                    read: true,
                    write: false,
                    def: false,
                },
                native: {},
            });
        }
    }

    private async main(): Promise<void> {
        const profiles = this.config.profiles;

        // collect all devices
        for (const profile of profiles) {
            if (profile?.type === 'profile') {
                const stateId = this.getStateId(profile, profiles);

                if (profile.data.state === true) {
                    profile.data.state = stateId;
                }

                if (stateId) {
                    profile.data.activeState = `${stateId}_active`;
                    await this.createActiveState(profile.data.activeState);
                } else {
                    profile.data.activeState = null;
                    this.log.error(`Cannot build the "active" state ID for the profile "${profile.title}"`);
                }

                for (const member of profile.data.members) {
                    if (!this.devices[member]) {
                        const obj = await this.getForeignObjectAsync(member);
                        if (obj?.common) {
                            this.devices[obj._id] = obj as ioBroker.StateObject;
                            // the native part is not used here and could be big
                            this.devices[obj._id].native = {};
                        }
                    }
                }
            }
        }

        // subscribe on all used IDs
        await this.subscribeForeignObjectsAsync(Object.keys(this.devices));

        await this.updateStates(true);
        this.startNextInterval();
    }
}

// If started as allInOne mode => return function to create instance
if (require.main !== module) {
    module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new SchedulerAdapter(options);
} else {
    // or start the instance directly
    (() => new SchedulerAdapter())();
}
