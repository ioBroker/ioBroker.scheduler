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
     * `true` means "build the ID from the profile path".
     */
    state?: string | boolean | null;
    /** ID of the automatically created `<profile>_active` indicator. Calculated by the backend */
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
    /** Only used while deleting a sub-tree */
    toDelete?: boolean;
}

/** Adapter configuration as stored in `native` */
export interface SchedulerNative {
    /** ID of the state, which indicates a holiday */
    holidayId: string;
    profiles: SchedulerProfile[];
}

/** Value range of a profile, derived from the controlled objects or from `minmax.json` */
export interface MinMax {
    min: number;
    max: number;
    step?: number;
    unit?: string;
    /** Labels for discrete values of a `custom` profile */
    marks?: Record<string, string> | null;
    /** True if no controlled object provided a range, so 0...100 is assumed */
    simulated?: boolean;
}

/** Cache of the objects behind the profile members. `false` means "object does not exist" */
export type DevicesCache = Record<string, ioBroker.Object | false>;
