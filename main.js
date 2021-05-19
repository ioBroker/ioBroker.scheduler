/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
'use strict';

// @ts-ignore
const utils = require('./lib/utils'); // Get common adapter utils
// @ts-ignore
const adapterName = require('./package.json').name.split('.').pop();

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

}

// If started as allInOne mode => return function to create instance
// @ts-ignore
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
