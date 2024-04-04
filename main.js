/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
'use strict';

const utils       = require('@iobroker/adapter-core'); // Get common adapter utils
// @ts-ignore
const adapterName = require('./package.json').name.split('.').pop();

/**
 * The adapter instance
 * @type {ioBroker.Adapter}
 */
let adapter;
let timer;
const devices = {};

function startAdapter(options) {
    options = options || {};

    Object.assign(options, {
        name: adapterName,
        objectChange: (id, obj) => {
            if (devices[id]) {
                if (obj) {
                    devices[id] = obj;
                    delete devices[id].native;
                } else {
                    delete devices[id];
                }
            }
        },
        unload: callback => {
            // stop running timer
            timer && clearTimeout(timer);
            timer = null;
            callback();
        },
        ready: () => main()
    });

    adapter = new utils.Adapter(options);

    return adapter;
}

function checkObject(obj, type) {
    if (type === 'percent') {
        return obj.common.unit === '%' || ('min' in obj.common && 'max' in obj.common);
    } else if (type === 'temperature') {
        return obj.common.type === 'number';
    } else if (type === 'onoff') {
        return obj.common.type === 'boolean';
    }
    return false;
}

function convertValue(obj, type, value) {
    if (type === 'percent') {
        if ('min' in obj.common && 'max' in obj.common) {
            const delta = obj.common.max - obj.common.min;
            return obj.common.min + Math.round(delta * value / 100);
        } else {
            return value;
        }
    } else if (type === 'temperature') {
        return value;
    } else if (type === 'onoff') {
        return !!value;
    }

    return false;
}

function getPreviousValue(intervals, index) {
    if (index === 0) {
        return intervals[intervals.length - 1];
    }
    return intervals[index - 1];
}

const updateStates = async force => {
    const profiles = adapter.config.profiles;
    const now = new Date();
    const active = {};

    for (const k in profiles) {
        const profile = profiles[k];

        let profileState = profile.type === 'profile' && profile.data.state && (await adapter.getForeignStateAsync(profile.data.state));

        if (profileState && typeof profileState === 'object') {
            profileState = profileState.val;
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
            if (profile.data.dow.includes(now.getDay()) && profileState) {
                const index = Math.floor((now.getHours() + now.getMinutes() / 60) / profile.data.intervalDuration);
                const value = profile.data.intervals[index];
                await adapter.setStateAsync(profile.data.activeState, true, true);
                if (force || !profile.data.ignoreSameValues || getPreviousValue(profile.data.intervals, index) !== value) {
                    profile.data.members.forEach(id => {
                        if (!devices[id]) {
                            adapter.log.warn(`Device ${id} used in schedule "${profile.title}", but object does not exist.`);
                            // this object was deleted after adapter start
                            return;
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
                        } else if (active[id] && active[id].priority === profile.data.prio) {
                            // check if the days are different
                            adapter.log.error(`"${id}" is in two or more profiles: "${profile.title}" and "${active[id].title}"(<-used for control)`);
                        }
                    });
                }
            } else {
                await adapter.setStateAsync(profile.data.activeState, false, true);
            }
        }
    }

    for (const id in active) {
        const profile = active[id];

        if (!checkObject(devices[id], profile.type)) {
            adapter.log.error(`${id} in ${profile.title} is not type ${profile.type}`);
            continue;
        }
        const value = convertValue(devices[id], profile.type, profile.value);

        if (profile.doNotWriteSameValue) {
            const currentValue = await adapter.getForeignStateAsync(id);
            if (currentValue && currentValue.val === value) {
                continue;
            }
        }

        await adapter.setForeignStateChangedAsync(id, value);

        adapter.log.info(`${id} in ${profile.title} set to ${value}`);
    }
}

function startNextInterval() {
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

    timer = setTimeout(() => {
        timer = null;
        updateStates();
        startNextInterval();
    }, time.getTime() - Date.now());
}

const FORBIDDEN_CHARS = /[^._\-/ :!#$%&()+=@^{}|~\p{Ll}\p{Lu}\p{Nd}]+/gu;

function getStateId(profile, profiles, _list) {
    _list = _list || [];
    _list.unshift(profile.title.replace(FORBIDDEN_CHARS, '_').replace(/\./g, '_'));

    if (profile.parent) {
        // find parent profile
        const parentProfile = profiles.find(item => item.id === profile.parent);
        if (parentProfile) {
            return getStateId(parentProfile, profiles, _list);
        }
        // eslint-disable-next-line
        console.error(`Cannot find parent ${profile.parent}`);
        return null;
    }

    return `${adapter.namespace}.${_list.join('.')}`;
}

async function createActiveState(id) {
    const obj = await adapter.getForeignObjectAsync(id);
    if (!obj) {
        await adapter.setObjectAsync(id, {
            type: 'state',
            common: {
                name: 'Active state of the profile',
                type: 'boolean',
                role: 'indicator',
                read: true,
                write: false,
                def: false,
            },
            native: {}
        });

    }
}

async function main() {
    const profiles = adapter.config.profiles;

    // collect all devices
    for (let k = 0; k < profiles.length; k++) {
        const profile = profiles[k];

        if (profile && profile.type === 'profile') {
            if (profile.data.state === true) {
                profile.data.state = getStateId(profile, profiles);
            }
            profile.data.activeState = `${getStateId(profile, profiles)}_active`;
            await createActiveState(profile.data.activeState);

            for (const m in profile.data.members) {
                if (!devices[profile.data.members[m]]) {
                    const obj = await adapter.getForeignObjectAsync(profile.data.members[m]);
                    if (obj && obj.common) {
                        devices[obj._id] = obj;
                        delete obj.native;
                    }
                }
            }
        }
    }

    // subscribe on all used IDs
    adapter.subscribeForeignObjects(Object.keys(devices));

    await updateStates(true);
    startNextInterval();
}

// If started as allInOne mode => return function to create instance
// @ts-ignore
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
