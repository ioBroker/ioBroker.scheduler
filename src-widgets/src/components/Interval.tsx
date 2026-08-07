import { Component, type JSX, type MouseEvent as ReactMouseEvent } from 'react';
import { Box, Slider, Tooltip } from '@mui/material';
import type { IobTheme, Translate } from '@iobroker/adapter-react-v5';

import minmax from '../data/minmax.json';
import type { MinMax, ProfileValueType } from '../types';

const defaultMinMax: Record<string, MinMax> = minmax;

const styles: Record<string, any> = {
    pretty: (intervalsWidth: number): any => ({
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: intervalsWidth,
        // padding:"0 3px"
    }),
    prettyLabel: {
        color: '#6c7a93',
        fontWeight: 700,
        fontSize: '.9rem',
        height: 30,
        width: 'calc(100% - 5px)',
        textAlign: 'center',
    },
    prettyTime: {
        position: 'absolute',
        fontSize: '0.9rem',
        fontWeight: 700,
        bottom: 27,
        width: 'calc(100% - 5px)',
        borderRadius: '4px',
        height: 28,
        maxHeight: 28,
        minHeight: 28,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    active: (theme: IobTheme): any => ({
        backgroundColor: theme.palette.primary.light,
        color: '#FFF',
    }),
    prettySecs: (theme: IobTheme): any => ({
        fontSize: '0.6rem',
        fontWeight: 100,
        color: theme.palette.text.primary,
    }),
    tooltip: {
        pointerEvents: 'none',
    },
};

const prettySliderStyles = {
    root: (theme: IobTheme, intervalsWidth: number): any => ({
        color: theme.palette.primary.light,
        borderRadius: 0,
        transition: 'all 100ms ease-out',
        position: 'relative',
        width: `${intervalsWidth}px`,
        p: 0,
        height: 'calc(100% - 90px)',
    }),
    thumb: (type: ProfileValueType): any => ({
        left: '50%',
        width: 0,
        height: 0,
        display: type === 'onoff' ? 'none' : 'flex',
    }),
    active: {
        backgroundColor: 'transparent',
        width: 0,
        height: 0,
    },
    valueLabel: (theme: IobTheme, fontSize?: number): any => ({
        position: 'relative',
        left: 'unset',
        right: 'unset',
        textAlign: 'center',
        transform: 'none !important',
        background: 'transparent',
        userSelect: 'none',
        '& *': {
            userSelect: 'none',
            background: 'transparent',
            fontWeight: 100,
            color: theme.palette.text.primary,
            fontSize: fontSize ? `${fontSize}px` : '1.0rem',
            transition: 'all 100ms ease-out',
        },
    }),
    valueLabelCircle: {
        background: 'transparent',
    },
    track: {
        transition: 'all 100ms ease-out',
        borderRadius: '4px',
        width: 'calc(100% - 8px)',
    },
    rail: (theme: IobTheme): any => ({
        transition: 'all 100ms ease-out',
        borderRadius: '4px',
        height: 'calc(100% + 5px)',
        mt: '-5px',
        backgroundColor: theme.palette.primary.light,
        width: 'calc(100% - 5px)',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }),
};

/** Re-used canvas for the text measurement */
let measureCanvas: HTMLCanvasElement | null = null;

function getTextWidth(text: string): number {
    measureCanvas = measureCanvas || document.createElement('canvas');
    const context = measureCanvas.getContext('2d');
    if (!context) {
        return 0;
    }
    context.font = 'normal 1rem Roboto, Helvetica, Arial, sans-serif';
    return context.measureText(text).width;
}

interface PrettySliderProps {
    id: string;
    theme: IobTheme;
    intervalsWidth: number;
    type: ProfileValueType;
    value: number;
    valueLabelFormat: string;
    min: number;
    max: number;
    step: number;
    disabled?: boolean;
    onChange: (event: Event, value: number | number[]) => void;
}

function PrettySlider(props: PrettySliderProps): JSX.Element {
    const { id, theme, intervalsWidth, type, value, valueLabelFormat, min, max, step, disabled, onChange } = props;

    const textWidth = getTextWidth(valueLabelFormat);
    let fontSize: number | undefined;
    if (textWidth > intervalsWidth) {
        fontSize = Math.floor((intervalsWidth / textWidth) * 13);
    }

    return (
        <Slider
            id={id}
            sx={{
                '&.MuiSlider-root': prettySliderStyles.root(theme, intervalsWidth),
                '& .MuiSlider-thumb': prettySliderStyles.thumb(type),
                '& .MuiSlider-active': prettySliderStyles.active,
                '& .MuiSlider-valueLabel': prettySliderStyles.valueLabel(theme, fontSize),
                '& .MuiSlider-valueLabelCircle': prettySliderStyles.valueLabelCircle,
                '& .MuiSlider-track': prettySliderStyles.track,
                '& .MuiSlider-rail': prettySliderStyles.rail(theme),
            }}
            orientation="vertical"
            aria-label="pretty slider"
            valueLabelDisplay="on"
            value={value}
            valueLabelFormat={valueLabelFormat}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            onChange={onChange}
        />
    );
}

/** The slider element remembers its component, so the raw `onmousemove` handler can reach it */
interface SliderElement extends HTMLElement {
    _interval?: Interval;
}

interface IntervalProps {
    i: number;
    intervalsWidth: number;
    on: (field: 'selected' | 'data', value: number | boolean, i: number) => void;
    selected?: boolean;
    step: number;
    theme: IobTheme;
    type: ProfileValueType;
    value: number;
    id: string;
    minMax: MinMax;
    offText: string;
    onText: string;
    /** Disables the slider and the shift-drag handler */
    readOnly?: boolean;
    t: Translate;
}

interface IntervalState {
    intervalsWidth: number;
}

export default class Interval extends Component<IntervalProps, IntervalState> {
    private installed = false;

    constructor(props: IntervalProps) {
        super(props);
        this.state = {
            intervalsWidth: props.intervalsWidth,
        };
    }

    componentDidMount(): void {
        this.installHandlers();
    }

    componentWillUnmount(): void {
        const el: SliderElement | null = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
        if (el) {
            el.onmousemove = null;
            delete el._interval;
        }
    }

    installHandlers(): void {
        if (this.props.readOnly) {
            return;
        }
        const el: SliderElement | null = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
        if (el && !this.installed) {
            this.installed = true;
            el._interval = this;
            el.onmousemove = function (this: GlobalEventHandlers, e: MouseEvent): void {
                const element = this as SliderElement;
                const touches = (e as MouseEvent & { touches?: TouchList }).touches;
                if ((e.buttons || touches?.length) && e.shiftKey) {
                    const that = element._interval;
                    if (!that) {
                        return;
                    }
                    const height = element.getBoundingClientRect().height;
                    let pos: number;
                    if (touches?.length) {
                        pos = touches[0].clientY - element.getBoundingClientRect().top;
                    } else {
                        pos = e.clientY - element.getBoundingClientRect().top;
                    }
                    const { min, max } = that.getMinMax();
                    let val: number;
                    switch (that.props.type) {
                        case 'temperature':
                            val = pos / height;
                            val = min + Math.round((max - min) * (1 - val) * 2) / 2;
                            val = Math.min(max, Math.max(min, val));
                            break;

                        case 'onoff':
                            val = Math.round((pos / height) * 100) < 50 ? 1 : 0;
                            break;

                        case 'custom':
                            val = pos / height;
                            val = min + Math.round((max - min) * (1 - val));
                            val = Math.min(max, Math.max(min, val));
                            break;

                        case 'percent':
                        default:
                            val = Math.round((pos / height) * 100);
                            val = 100 - val;
                            val = Math.min(100, Math.max(0, val));
                            break;
                    }
                    // calculate the value
                    that.props.on('data', val, that.props.i);
                }
            };
        }
    }

    componentDidUpdate(prevProps: IntervalProps): void {
        this.installHandlers();
        if (prevProps.intervalsWidth !== this.props.intervalsWidth) {
            this.setState({
                intervalsWidth: this.props.intervalsWidth,
            });
        }
    }

    handleSliderChange = (event: Event, data: number | number[]): void => {
        if (!(event as MouseEvent).shiftKey) {
            this.on('data', Array.isArray(data) ? data[0] : data);
        }
    };

    handleSelected = (event: ReactMouseEvent<HTMLDivElement>): void => {
        if (!event.shiftKey && !this.props.readOnly) {
            this.on('selected', !this.props.selected);
        }
    };

    on = (field: 'selected' | 'data', value: number | boolean): void => this.props.on?.(field, value, this.props.i);

    getPostfix(value: number): string | JSX.Element {
        switch (this.props.type) {
            case 'onoff':
                return value ? (
                    <span style={this.props.theme.palette.text.success}>{this.props.onText}</span>
                ) : (
                    <span style={this.props.theme.palette.text.danger}>{this.props.offText}</span>
                );

            case 'custom':
                if (this.props.minMax.marks && this.props.minMax.marks[value] !== undefined) {
                    return this.props.minMax.marks[value].toString();
                }
                if (this.props.minMax.unit) {
                    return value.toString() + this.props.minMax.unit;
                }
                return value.toString();

            case 'percent':
            case 'temperature':
            default:
                return value.toString() + (this.props.minMax.unit || '');
        }
    }

    getMinMax(): MinMax {
        if (this.props.type === 'custom') {
            return this.props.minMax;
        }

        return defaultMinMax[this.props.type] || { min: 0, max: 100 };
    }

    getLabel = (): [number, string] => {
        const { step, i } = this.props;
        const label = i * step;
        const hrs = Math.floor(label);
        const mins = `0${(label % 1) * 60}`.slice(-2);
        return [hrs, mins];
    };

    render(): JSX.Element | null {
        const { value, i, selected, theme, type } = this.props;
        const { intervalsWidth } = this.state;
        if (i < 0) {
            return null;
        }

        const { min, max, step } = this.getMinMax();
        const label = this.getLabel();
        const val = !value ? 0 : value;
        const vl = type === 'onoff' ? this.getPostfix(val) : '';
        const v2 = type !== 'onoff' ? (this.getPostfix(val) as string) : '';

        return (
            <Tooltip
                title={this.props.t('Press "shift" and move mouse to change more than one slider')}
                slotProps={{ popper: { sx: styles.tooltip } }}
            >
                <span style={styles.pretty(intervalsWidth)}>
                    <span style={styles.prettyLabel}>{vl}</span>
                    <PrettySlider
                        key={i}
                        theme={theme}
                        intervalsWidth={intervalsWidth}
                        type={type}
                        value={val}
                        valueLabelFormat={v2}
                        min={min}
                        max={max}
                        step={step || 1}
                        disabled={this.props.readOnly}
                        onChange={this.handleSliderChange}
                        id={`slider_${this.props.i}_${this.props.id}`}
                    />
                    <Box
                        sx={selected ? styles.active : undefined}
                        onClick={this.handleSelected}
                        onMouseMove={event => {
                            if (event.shiftKey && event.buttons) {
                                this.on('selected', window.myselectMode);
                            }
                        }}
                        onMouseDown={event => {
                            if (event.shiftKey) {
                                window.myselectMode = !this.props.selected;
                                this.on('selected', !this.props.selected);
                            }
                        }}
                        style={{ ...styles.prettyTime, userSelect: 'none' }}
                    >
                        <span style={{ color: this.props.theme.palette.text.primary }}>{label[0]}</span>
                        <Box
                            component="span"
                            sx={styles.prettySecs}
                        >
                            {label[1]}
                        </Box>
                    </Box>
                </span>
            </Tooltip>
        );
    }
}
