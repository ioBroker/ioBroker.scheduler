import type { MinMax, ProfileData, ProfileValueType } from '../types';

// Must stay identical to src-admin/src/components/valueRange.ts

/** True if the profile is `custom` and has a value list: the bars choose an entry of the list */
export function hasValueList(profile: Pick<ProfileData, 'values'>, type: ProfileValueType): boolean {
    return type === 'custom' && !!profile.values?.length;
}

/** Text of an entry of the value list at the bars */
export function getValueLabel(profile: Pick<ProfileData, 'values'>, index: number): string {
    const entry = profile.values?.[index];
    return entry ? entry.label || entry.value || entry.id || String(index) : String(index);
}

/**
 * Range of the bars with the settings of the profile: a value list replaces the range by its entries, an own
 * range (`temperature` and `custom`) replaces the limits of the first data point and the defaults.
 *
 * @param base the range from the first data point or the defaults
 * @param profile the profile
 * @param type the type of the profile (it can differ from `profile.type` while the type is changed)
 */
export function applyOwnRange(
    base: MinMax,
    profile: Pick<ProfileData, 'range' | 'values'>,
    type: ProfileValueType,
): MinMax {
    if (hasValueList(profile, type)) {
        const marks: Record<string, string> = {};
        profile.values!.forEach((_entry, i) => (marks[i] = getValueLabel(profile, i)));
        return { min: 0, max: profile.values!.length - 1, step: 1, unit: '', marks };
    }
    const range = profile.range;
    if (!range || (type !== 'temperature' && type !== 'custom')) {
        return base;
    }
    const isSet = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);
    if (!isSet(range.min) && !isSet(range.max) && !isSet(range.step)) {
        return base;
    }
    const result: MinMax = { ...base, simulated: false };
    if (isSet(range.min) || isSet(range.max)) {
        result.min = isSet(range.min) ? range.min : base.min;
        result.max = isSet(range.max) ? range.max : base.max;
        // the states of the data point do not fit an own range
        result.marks = null;
    }
    if (isSet(range.step) && range.step > 0) {
        result.step = range.step;
    }
    return result.max > result.min ? result : base;
}
