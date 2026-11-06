/** Tag of the custom element; a host checks that the module defines exactly this one */
export const TAG = 'iob-scheduler-profile';

/** The built module, next to its manifest */
export const MODULE_FILE = 'scheduler-profile.js';

/** The manifest the build writes next to the module; `common.webComponents` names this one */
export const MANIFEST_FILE = 'scheduler-profile.json';

/** Where `tasks.ts` puts the module in the admin folder; the React import is relative to it */
export const MODULE_PATH = `webcomponents/${MODULE_FILE}`;

/** The command of the adapter that changes one profile (`onMessage` in `src/main.ts`) */
export const SET_PROFILE_COMMAND = 'setProfile';

/** The values of the settings of the manifest; a setting without a value is missing */
export type ProfileSettings = {
    /** A state of the profile: `scheduler.0.<profile>` or `scheduler.0.<profile>_active` */
    profile?: string;
    title?: string;
    readOnly?: boolean;
    hideDow?: boolean;
};
