/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
'use strict';

// @ts-ignore
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

function main() {
    setInterval(async () => {
        const settings = await adapter.getForeignObjectAsync('system.adapter.scheduler.0');
        const profiles = settings.native.profiles;
        const now = new Date();
        const nextTime = new Date(now);
        const devices = {};
        if (nextTime.getMinutes() < 30) {
            nextTime.setMinutes(30);
        } else {
            nextTime.setHours(nextTime.getHours() + 1);
            nextTime.setMinutes(0);
        }
        nextTime.setSeconds(0);
        nextTime.setMilliseconds(0);
        adapter.log.info(`${nextTime}`);
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
                        value: value
                    });
                }
            }
        }
        for (const device in devices) {
            if (await adapter.getForeignObjectAsync(device)) {
                const profiles = devices[device];
                let selectedPriority = -1;
                let selectedProfile = null;
                for (const k in profiles) {
                    const profile = profiles[k];
                    if (profile.priority <= selectedPriority) {
                        continue;
                    }
                    selectedPriority = profile.priority;
                    selectedProfile = profile;
                }
                adapter.setForeignState(device, selectedProfile.value);                        
                adapter.log.info(`${device} in ${selectedProfile.title} set to ${selectedProfile.value}`);
            } else {
                adapter.log.error(`${device} does not exists`);
            }
        }
        adapter.log.info(JSON.stringify(devices));
    }, 1000);
}

// If started as allInOne mode => return function to create instance
// @ts-ignore
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
