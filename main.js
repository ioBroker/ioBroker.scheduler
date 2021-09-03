/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
'use strict';

// @ts-ignore
const CronJob = require('cron').CronJob;
const utils       = require('@iobroker/adapter-core'); // Get common adapter utils
// @ts-ignore
const adapterName = require('./package.json').name.split('.').pop();

/**
 * The adapter instance
 * @type {ioBroker.Adapter}
 */
let adapter;

function startAdapter(options) {
    options = options || {};

    Object.assign(options, {
        name: adapterName,
        objectChange: (id, obj) => {
        },
        stateChange: (id, state) => {

        },
        unload: callback => {
            try {

                callback();
            } catch (e) {
                callback();
            }
        },
        message: obj => {
            if (obj) {

            }
        },
        ready: () => main()
    });

    adapter = new utils.Adapter(options);

    return adapter;
}

function checkObject(object, type) {
    if (type === 'percent') {
        return object.common.unit === '%' || ('min' in object.common && 'max' in object.common);
    } else if (type === 'temperature') {
        return object.common.type === 'number';
    } else if (type === 'onoff') {
        return object.common.type === 'boolean';
    }
    return false;
}

function convertValue(object, type, value) {
    if (type === 'percent') {
        if ('min' in object.common && 'max' in object.common) {
            const delta = object.common.max - object.common.min;
            return object.common.min + Math.round(delta * value / 100);
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

const updateStates = async () => {
    const settings = await adapter.getForeignObjectAsync('system.adapter.scheduler.0');
    const profiles = settings.native.profiles;
    const now = new Date();
    const devices = {};
    // const nextTime = new Date(now);
    // if (nextTime.getMinutes() < 30) {
    //     nextTime.setMinutes(30);
    // } else {
    //     nextTime.setHours(nextTime.getHours() + 1);
    //     nextTime.setMinutes(0);
    // }
    // nextTime.setSeconds(0);
    // nextTime.setMilliseconds(0);
    // adapter.log.info(`${nextTime}`);
    for (const k in profiles) {
        const profile = profiles[k];
        if (profile.type === 'profile' 
            && profile.data.enabled
            && profile.data.dow.includes(now.getDay())
        ) {
            const index = Math.floor((now.getHours() + now.getMinutes() / 60) / profile.data.intervalDuration);
            const value = profile.data.intervals[index];
            for (const k in profile.data.members) {
                const member = profile.data.members[k];
                if (!devices[member]) {
                    devices[member] = []
                }
                devices[member].push({
                    id: profile.id,
                    title: profile.title,
                    priority: profile.data.prio,
                    type: profile.data.type,
                    value: value,
                });
            }
        }
    }
    const duplicates = [];
    for (const device in devices) {
        const object = await adapter.getForeignObjectAsync(device);
        if (object) {
            const profiles = devices[device];
            let selectedPriority = -1;
            let selectedProfile = null;
            for (const k in profiles) {
                const profile = profiles[k];
                let error = false;
                if (duplicates.includes(`${device} ${profile.priority}`)) {
                    adapter.log.error(`${device} in ${profile.title} is duplicate`);
                    error = true;
                }
                duplicates.push(`${device} ${profile.priority}`);
                if (!checkObject(object, profile.type)) {
                    adapter.log.error(`${device} in ${profile.title} is not type ${profile.type}`);
                    error = true;
                }
                if (profile.priority <= selectedPriority) {
                    continue;
                }
                if (error) {
                    continue;
                }
                selectedPriority = profile.priority;
                selectedProfile = profile;
            }
            if (!selectedProfile) {
                continue;
            }
            const value = convertValue(object, selectedProfile.type, selectedProfile.value);
            adapter.setForeignState(device, value);                        
            adapter.log.info(`${device} in ${selectedProfile.title} set to ${value}`);
        } else {
            adapter.log.error(`${device} does not exists`);
        }
    }
}

function main() {
    updateStates();
    // setInterval(updateStates, 1000);
    const job = new CronJob('0 0,30 * * * *', updateStates);
}

// If started as allInOne mode => return function to create instance
// @ts-ignore
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
