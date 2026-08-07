import { Theme, type IobTheme, type ThemeName } from '@iobroker/gui-components';

/** ioBroker theme extended by the two adapter specific text colors used by the interval sliders */
export default function MyTheme(type: ThemeName): IobTheme {
    const danger = '#dd5325';
    const success = '#73b6a8';
    const theme = Theme(type);
    if (!theme) {
        return theme;
    }
    theme.palette.text.danger = { color: danger };
    theme.palette.text.success = { color: success };

    return theme;
}
