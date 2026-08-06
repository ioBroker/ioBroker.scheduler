/** Type of the values, which are controlled by a profile */
export type ProfileValueType = 'temperature' | 'percent' | 'onoff' | 'custom';

/** Settings of one schedule profile */
export interface ProfileData {
    enabled: boolean;
    /** IDs of the states, which are controlled by this profile */
    members: string[];
    /** Type of the controlled values */
    type: ProfileValueType;
    /** Priority: 0 - normal, 1 - high, 2 - highest */
    prio: number;
    /** Active days of the week: 0 - Sunday, 1 - Monday, ... */
    dow: number[];
    /** True if the profile is active on holidays too */
    holiday?: boolean;
    /** Duration of one interval in hours */
    intervalDuration: number;
    /** Desired value for every interval of the day */
    intervals: number[];
    /**
     * ID of the state, which enables/disables this profile.
     * `true` means "build the ID from the profile path" and is replaced by the real ID on adapter start.
     */
    state?: string | boolean | null;
    /** ID of the automatically created `<profile>_active` indicator. Calculated on adapter start */
    activeState?: string | null;
    /** Do not write the value if it is the same as in the previous interval */
    ignoreSameValues?: boolean;
    /** Do not write the value if the device is already in the desired state */
    doNotWriteSameValue?: boolean;
}

/** One entry of the profile tree: either a profile or a folder, which groups profiles */
export interface SchedulerProfile {
    id: string;
    title: string;
    /** ID of the parent folder or '' for the root level */
    parent: string;
    type: 'profile' | 'folder';
    data: ProfileData;
    /** Only used by the admin UI to store the expanded state of a folder */
    isOpen?: boolean;
}

/** Value, which must be written to one device in the current interval */
export interface ActiveDevice {
    /** ID of the profile, which controls the device */
    id: string;
    /** Title of the profile, which controls the device */
    title: string;
    priority: number;
    type: ProfileValueType;
    value: number;
    doNotWriteSameValue?: boolean;
}

declare global {
    // the ioBroker adapter configuration can only be typed by augmenting the global `ioBroker` namespace
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ioBroker {
        interface AdapterConfig {
            /** ID of the state, which indicates a holiday */
            holidayId: string;
            profiles: SchedulerProfile[];
        }
    }
}
