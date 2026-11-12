/**
 * What the element computes from the instance object of the scheduler: which profile a state belongs to, the range
 * of its values and how they are written. Pure logic, no DOM.
 *
 * The types and the default ranges are those of the vis-2 widget (`src-widgets/src`), compiled in.
 */
import type {
    ProfileData,
    ProfileValueType,
    SchedulerInstanceObject,
    SchedulerProfile,
} from '../../src-widgets/src/types';
import minmax from '../../src-widgets/src/data/minmax.json';

export type { ProfileData, ProfileValueType, SchedulerProfile };

/** Characters the adapter and admin replace in the state IDs of the profiles, see `getStateId()` in `src/main.ts` */
const FORBIDDEN_CHARS = /[^._\-/ :!#$%&()+=@^{}|~\p{Ll}\p{Lu}\p{Nd}]+/gu;

/** What the element edits of a profile - what `setProfile` of the adapter takes */
export interface ProfileChange {
    intervals: number[];
    dow: number[];
    holiday: boolean;
}

/** What the element shows of a profile */
export interface ProfileShown extends ProfileChange {
    type: ProfileValueType;
    /** Duration of one interval in hours */
    intervalDuration: number;
}

/** A labelled value of a `custom` profile, from `common.states` of the controlled state */
export interface Mark {
    value: number;
    label: string;
}

/** The values a profile can take */
export interface ValueRange {
    min: number;
    max: number;
    step: number;
    unit: string;
    /** For a `custom` profile with `common.states`: the only values, sorted */
    marks: Mark[];
}

/** The profile a setting names */
export interface ProfileRef {
    /** `scheduler.0` */
    instance: string;
    /** The ID as the user picked it */
    id: string;
}

/**
 * The instance and the ID of a state of a profile
 *
 * @param id what the user picked, e.g. `scheduler.0.Heating.Living_room_active`
 */
export function parseProfileRef(id: string | undefined): ProfileRef | null {
    const trimmed = typeof id === 'string' ? id.trim() : '';
    const match = trimmed.match(/^(scheduler\.\d+)\.[^.]/);
    return match ? { instance: match[1], id: trimmed } : null;
}

/**
 * The ID of the switch of a profile, `scheduler.0.<folder>.<title>` - the same as the adapter and admin build it.
 * The adapter creates `<ID>_active` for every profile, admin `<ID>` for a profile with its own switch.
 *
 * @param instance e.g. `scheduler.0`
 * @param profile the profile
 * @param profiles all profiles and folders of the instance
 */
export function getProfileStateId(
    instance: string,
    profile: SchedulerProfile,
    profiles: SchedulerProfile[],
): string | null {
    const parts: string[] = [];
    let current: SchedulerProfile | undefined = profile;
    // a broken tree must not loop forever
    for (let depth = 0; current && depth < 100; depth++) {
        parts.unshift(
            String(current.title ?? '')
                .replace(FORBIDDEN_CHARS, '_')
                .replace(/\./g, '_'),
        );
        if (!current.parent) {
            return `${instance}.${parts.join('.')}`;
        }
        const parentId: string = current.parent;
        current = profiles.find(item => item.id === parentId);
    }
    return null;
}

/**
 * The profile a state belongs to
 *
 * @param object the instance object `system.adapter.scheduler.<n>`
 * @param ref the state the user picked
 */
export function findProfile(object: ioBroker.Object | null | undefined, ref: ProfileRef): SchedulerProfile | null {
    const profiles = (object as SchedulerInstanceObject | null | undefined)?.native?.profiles;
    if (!Array.isArray(profiles)) {
        return null;
    }
    for (const profile of profiles) {
        if (profile?.type !== 'profile' || !profile.data || !Array.isArray(profile.data.intervals)) {
            continue;
        }
        const stateId = getProfileStateId(ref.instance, profile, profiles);
        if (stateId && (ref.id === stateId || ref.id === `${stateId}_active`)) {
            return profile;
        }
    }
    return null;
}

/**
 * A profile by its ID
 *
 * @param object the instance object `system.adapter.scheduler.<n>`
 * @param id the ID of the profile
 */
export function findProfileById(object: ioBroker.Object | null | undefined, id: string): SchedulerProfile | null {
    const profiles = (object as SchedulerInstanceObject | null | undefined)?.native?.profiles;
    return (Array.isArray(profiles) && profiles.find(item => item?.id === id && item.type === 'profile')) || null;
}

/**
 * What the element edits of a profile
 *
 * @param data the data of the profile
 */
export function toChange(data: ProfileData): ProfileChange {
    const { intervals, dow, holiday } = toShown(data);
    return { intervals, dow, holiday };
}

/**
 * What the element shows of a profile
 *
 * @param data the data of the profile
 */
export function toShown(data: ProfileData): ProfileShown {
    return {
        type: data.type,
        intervalDuration: Number(data.intervalDuration) || 1,
        intervals: data.intervals.map(value => Number(value) || 0),
        dow: Array.isArray(data.dow) ? data.dow : [],
        holiday: !!data.holiday,
    };
}

/**
 * Whether a profile shows the change already
 *
 * @param data the data of the profile
 * @param change what was written
 */
export function isSameChange(data: ProfileData, change: ProfileChange): boolean {
    const shown = toShown(data);
    return (
        shown.holiday === change.holiday &&
        shown.intervals.join(',') === change.intervals.join(',') &&
        [...shown.dow].sort().join(',') === [...change.dow].sort().join(',')
    );
}

const DEFAULTS: Record<string, { min: number; max: number; step?: number; unit?: string }> = minmax;

/**
 * The values a profile can take - as the vis-2 widget shows them: a value list of a `custom` profile gives its
 * entries, an own range of a `temperature` or `custom` profile its limits, else `temperature`, `percent` and
 * `onoff` take the range of the adapter and `custom` the range or the states of the first controlled state.
 *
 * @param type the type of the profile
 * @param member the object of the first state the profile controls, if it was read
 * @param data the own range and the value list of the profile
 */
export function getValueRange(
    type: ProfileValueType,
    member: ioBroker.Object | null | undefined,
    data?: Pick<ProfileData, 'range' | 'values'>,
): ValueRange {
    if (type === 'custom' && data?.values?.length) {
        const marks = data.values.map((entry, i) => ({
            value: i,
            label: entry.label || entry.value || entry.id || String(i),
        }));
        return { min: 0, max: marks.length - 1, step: 1, unit: '', marks };
    }
    const base = getBaseValueRange(type, member);
    const range = data?.range;
    if (!range || (type !== 'temperature' && type !== 'custom')) {
        return base;
    }
    const isSet = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);
    const result: ValueRange = { ...base };
    if (isSet(range.min) || isSet(range.max)) {
        result.min = isSet(range.min) ? range.min : base.min;
        result.max = isSet(range.max) ? range.max : base.max;
        result.marks = [];
    }
    if (isSet(range.step) && range.step > 0) {
        result.step = range.step;
    }
    return result.max > result.min ? result : base;
}

/**
 * The values a profile can take without its own range and value list
 *
 * @param type the type of the profile
 * @param member the object of the first state the profile controls, if it was read
 */
function getBaseValueRange(type: ProfileValueType, member: ioBroker.Object | null | undefined): ValueRange {
    const common = member?.type === 'state' ? (member.common as ioBroker.StateCommon) : undefined;
    if (type === 'custom') {
        const unit = common?.unit || '';
        if (
            common?.type === 'number' &&
            common.states &&
            typeof common.states === 'object' &&
            !Array.isArray(common.states)
        ) {
            const marks = Object.entries(common.states)
                .map(([value, label]) => ({ value: parseFloat(value), label: String(label) }))
                .filter(mark => Number.isFinite(mark.value))
                .sort((a, b) => a.value - b.value);
            if (marks.length) {
                return { min: marks[0].value, max: marks[marks.length - 1].value, step: 1, unit, marks };
            }
        }
        if (common?.type === 'number' && (common.min !== undefined || common.max !== undefined)) {
            return { min: common.min ?? 0, max: common.max ?? 100, step: 1, unit, marks: [] };
        }
        return { min: 0, max: 100, step: 1, unit, marks: [] };
    }
    const defaults = DEFAULTS[type] || { min: 0, max: 100 };
    return {
        min: defaults.min,
        max: defaults.max,
        step: defaults.step || 1,
        // the unit of a thermostat, e.g. °C, else the one of the adapter
        unit: (type === 'temperature' && common?.unit) || defaults.unit || '',
        marks: [],
    };
}

/**
 * A value moved onto the steps of the range, or the nearest mark
 *
 * @param value the raw value
 * @param range the values the profile can take
 */
export function snapValue(value: number, range: ValueRange): number {
    if (range.marks.length) {
        let best = range.marks[0].value;
        for (const mark of range.marks) {
            if (Math.abs(mark.value - value) < Math.abs(best - value)) {
                best = mark.value;
            }
        }
        return best;
    }
    const clamped = Math.min(range.max, Math.max(range.min, value));
    const stepped = range.min + Math.round((clamped - range.min) / range.step) * range.step;
    return Math.min(range.max, Math.max(range.min, Number(stepped.toFixed(4))));
}

/**
 * The next value up or down - a step, or the next mark
 *
 * @param value the current value
 * @param range the values the profile can take
 * @param up up or down
 */
export function stepValue(value: number, range: ValueRange, up: boolean): number {
    if (range.marks.length) {
        const values = range.marks.map(mark => mark.value);
        const next = up ? values.find(v => v > value) : [...values].reverse().find(v => v < value);
        return next ?? snapValue(value, range);
    }
    return snapValue(value + (up ? range.step : -range.step), range);
}

/**
 * Where a value lies in the range, 0..1
 *
 * @param value the value
 * @param range the values the profile can take
 */
export function toFraction(value: number, range: ValueRange): number {
    const span = range.max - range.min;
    return span > 0 ? Math.min(1, Math.max(0, (value - range.min) / span)) : value >= range.max ? 1 : 0;
}

/**
 * Hours and minutes at which an interval starts
 *
 * @param index number of the interval
 * @param duration duration of one interval in hours
 */
export function getIntervalStart(index: number, duration: number): { hours: number; minutes: string } {
    const start = index * duration;
    const hours = Math.floor(start);
    return { hours, minutes: String(Math.round((start - hours) * 60)).padStart(2, '0') };
}

/**
 * The interval of the current time
 *
 * @param now the current time
 * @param duration duration of one interval in hours
 */
export function getCurrentInterval(now: Date, duration: number): number {
    return Math.floor((now.getHours() + now.getMinutes() / 60) / duration);
}

/**
 * The short names of the days of the week in a language, Sunday first
 *
 * @param lang the language of the system
 */
export function getDayNames(lang: string): string[] {
    try {
        const format = new Intl.DateTimeFormat(lang === 'zh-cn' ? 'zh-CN' : lang, {
            weekday: 'short',
            timeZone: 'UTC',
        });
        // 7 January 2024 was a Sunday
        return [0, 1, 2, 3, 4, 5, 6].map(day => format.format(new Date(Date.UTC(2024, 0, 7 + day))).replace(/\.$/, ''));
    } catch {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
}

/** A profile to show in the editor of a host while no profile is chosen */
export const SAMPLE_PROFILE: ProfileShown = {
    type: 'temperature',
    intervalDuration: 1,
    intervals: [
        17, 17, 17, 17, 17, 17, 21, 21, 21, 19, 19, 19, 19, 19, 19, 19, 19, 21.5, 21.5, 21.5, 21.5, 21.5, 21.5, 17,
    ],
    dow: [1, 2, 3, 4, 5],
    holiday: false,
};
