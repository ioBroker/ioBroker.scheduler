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
    /** ID of the state, which enables/disables this profile */
    state?: string | boolean | null;
    /** ID of the automatically created `<profile>_active` indicator */
    activeState?: string | null;
    ignoreSameValues?: boolean;
    doNotWriteSameValue?: boolean;
    /** Own range of the bars for `temperature` and `custom`, see `src/types.ts` */
    range?: ProfileRange | null;
    /** Only `custom`: list of the values, the intervals store the index of the entry, see `src/types.ts` */
    values?: ProfileValue[] | null;
}

/** Own range of the bars of a profile */
export interface ProfileRange {
    min?: number;
    max?: number;
    step?: number;
}

/** One entry of the value list of a `custom` profile */
export interface ProfileValue {
    /** Shown at the bars */
    label: string;
    /** Written value as text */
    value?: string;
    /** ID of a state, whose value is written instead of `value` */
    id?: string;
}

/** One entry of the profile tree: either a profile or a folder, which groups profiles */
export interface SchedulerProfile {
    id: string;
    title: string;
    /** ID of the parent folder or '' for the root level */
    parent: string;
    type: 'profile' | 'folder';
    data: ProfileData;
}

/** `native` part of the `system.adapter.scheduler.N` object */
export interface SchedulerNative {
    holidayId: string;
    profiles: SchedulerProfile[];
}

/** The instance object the widget reads the profiles from */
export interface SchedulerInstanceObject extends ioBroker.InstanceObject {
    native: SchedulerNative;
}

/** Value range of a profile, derived from the controlled object or from `minmax.json` */
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
