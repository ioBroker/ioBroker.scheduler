import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Slider, Tooltip } from '@mui/material';

import minmax from '../data/minmax.json';

const styles = {
    pretty: intervalsWidth => ({
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
    active: theme => ({
        backgroundColor: theme.palette.primary.light,
        color: '#FFF',
    }),
    prettySecs: theme => ({
        fontSize: '0.6rem',
        fontWeight: 100,
        color: theme.palette.text.primary,
    }),
    tooltip: {
        pointerEvents: 'none',
    },
};

const prettySliderStyles = {
    root: (theme, intervalsWidth) => ({
        color: theme.palette.primary.light,
        borderRadius: 0,
        transition: 'all 100ms ease-out',
        position: 'relative',
        width: `${intervalsWidth}px`,
        p: 0,
        height: 'calc(100% - 90px)',
    }),
    thumb: type => ({
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
    valueLabel: (theme, fontSize) => ({
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
    rail: theme => ({
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

function getTextWidth(text) {
    // re-use a canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = 'normal 1rem Roboto, Helvetica, Arial, sans-serif';
    const metrics = context.measureText(text);
    return metrics.width;
}

// react/function-component-definition
// eslint-disable-next-line
const PrettySlider = props => {
    const componentProps = { ...props };
    const intervalsWidth = componentProps.intervalsWidth;
    delete componentProps.intervalsWidth;
    delete componentProps.type;
    delete componentProps.theme;

    const textWidth = getTextWidth(props.valueLabelFormat);
    let fontSize;
    if (textWidth > intervalsWidth) {
        fontSize = Math.floor((intervalsWidth / textWidth) * 13);
    }

    return (
        <Slider
            id={props.id}
            sx={{
                '&.MuiSlider-root': prettySliderStyles.root(props.theme, intervalsWidth),
                '& .MuiSlider-thumb': prettySliderStyles.thumb(props.type),
                '& .MuiSlider-active': prettySliderStyles.active,
                '& .MuiSlider-valueLabel': prettySliderStyles.valueLabel(props.theme, fontSize),
                '& .MuiSlider-valueLabelCircle': prettySliderStyles.valueLabelCircle,
                '& .MuiSlider-track': prettySliderStyles.track,
                '& .MuiSlider-rail': prettySliderStyles.rail(props.theme),
            }}
            {...componentProps}
        />
    );
};

class Interval extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalsWidth: props.intervalsWidth,
        };
        this.installed = false;
    }

    componentDidMount() {
        this.installHandlers();
    }

    componentWillUnmount() {
        const el = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
        if (el) {
            el.onmousemove = null;
        }
    }

    installHandlers() {
        const el = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
        if (el && !this.installed) {
            this.installed = true;
            el._interval = this;
            // eslint-disable-next-line
            el.onmousemove = function (e) {
                if ((e.buttons || e.touches?.length) && e.shiftKey) {
                    const that = this._interval;
                    const height = this.getBoundingClientRect().height;
                    let pos;
                    if (e.touches?.length) {
                        pos = e.touches[0].clientY - this.getBoundingClientRect().top;
                    } else {
                        pos = e.clientY - this.getBoundingClientRect().top;
                    }
                    const { min, max } = that.getMinMax();
                    let val;
                    switch (that.props.type) {
                        case 'temperature':
                            val = pos / height;
                            val = min + Math.round((max - min) * (1 - val) * 2) / 2;
                            val = Math.min(max, Math.max(min, val));
                            break;

                        case 'onoff':
                            val = Math.round((pos / height) * 100) < 50;
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

    componentDidUpdate(prevProps) {
        this.installHandlers();
        if (prevProps.intervalsWidth !== this.props.intervalsWidth) {
            this.setState({
                intervalsWidth: this.props.intervalsWidth,
            });
        }
    }

    handleSliderChange = (event, data) => {
        if (!event.shiftKey) {
            this.on('data', data);
        }
    };

    handleSelected = event => {
        if (!event.shiftKey) {
            this.on('selected', !this.props.selected);
        }
    };

    on = (field, value) => this.props.on && this.props.on(field, value, this.props.i);

    getPostfix(value) {
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
                return value.toString() + this.props.minMax.unit;
        }
    }

    getMinMax() {
        if (this.props.type === 'custom') {
            return this.props.minMax;
        }

        return minmax[this.props.type] || { min: 0, max: 100 };
    }

    getLabel = () => {
        const { step, i } = this.props;
        const label = i * step;
        const hrs = parseInt(label);
        const mins = `0${(label % 1) * 60}`.slice(-2);
        return [hrs, mins];
    };

    render() {
        const { value, i, selected, theme, type } = this.props;
        const { intervalsWidth } = this.state;
        if (i < 0) {
            return '';
        }

        const { min, max, step } = this.getMinMax();
        console.log('min', min, 'max', max, 'step', step);
        const label = this.getLabel();
        const val = !value ? 0 : value;
        const vl = type === 'onoff' ? this.getPostfix(val || 0) : '';
        const v2 = type !== 'onoff' ? this.getPostfix(val || 0) : '';

        return (
            <Tooltip
                title={this.props.t('Press "shift" and move mouse to change more than one slider')}
                componentsProps={{ popper: { sx: styles.tooltip } }}
            >
                <span style={styles.pretty(intervalsWidth)}>
                    <span style={styles.prettyLabel}>{vl}</span>
                    <PrettySlider
                        key={i}
                        ref={this.ref}
                        theme={theme}
                        intervalsWidth={intervalsWidth}
                        type={type}
                        orientation="vertical"
                        aria-label="pretty slider"
                        value={val}
                        valueLabelFormat={v2}
                        min={min}
                        max={max}
                        step={step || 1}
                        selected={selected}
                        onChange={this.handleSliderChange}
                        valueLabelDisplay="on"
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

Interval.propTypes = {
    i: PropTypes.number,
    intervalsWidth: PropTypes.number,
    on: PropTypes.func,
    selected: PropTypes.bool,
    step: PropTypes.number,
    theme: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    id: PropTypes.string.isRequired,
    minMax: PropTypes.object,
    offText: PropTypes.string,
    onText: PropTypes.string,
    t: PropTypes.func.isRequired,
};

export default Interval;
