import type { ProfileValueType } from '../types';

/** Translation key of the profile type names, as shown in the type selector */
export const TYPE_NAMES: Record<ProfileValueType, string> = {
    percent: 'Percent',
    temperature: 'Temperature',
    onoff: 'On/Off',
    custom: 'Custom',
};

/**
 * Translation key of the hint which data points a profile type needs and which value is written.
 * Must describe checkObject() and convertValue() in src/main.ts.
 */
export const TYPE_HINTS: Record<ProfileValueType, string> = {
    percent: 'hint_type_percent',
    temperature: 'hint_type_temperature',
    onoff: 'hint_type_onoff',
    custom: 'hint_type_custom',
};

/** Translation key of the hint for the data points of a profile, see {@link TYPE_HINTS} */
export function getTypeHint(type: ProfileValueType, hasValueList?: boolean): string {
    return type === 'custom' && hasValueList ? 'hint_type_custom_list' : TYPE_HINTS[type];
}
