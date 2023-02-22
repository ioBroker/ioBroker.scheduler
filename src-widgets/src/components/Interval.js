import PropTypes from 'prop-types';
import { Component } from 'react';
import { withStyles, makeStyles } from '@mui/styles';
import { Slider } from '@mui/material';
import minmax from '../data/minmax.json';

const styles = () => ({
    pretto: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: props => props.intervalsWidth,
        // padding:"0 3px"
    },
    prettoLabel: {
        color: '#6c7a93',
        fontWeight: 700,
        fontSize: '.9rem',
        height: 30,
        width: 'calc(100% - 5px)',
        textAlign: 'center',
    },
    prettoTime: {
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
    active: {
        backgroundColor: props => props.theme.palette.primary.light,
        color: '#FFF',
    },
    prettoSecs: {
        fontSize: '0.6rem',
        fontWeight: 100,
        color: props => props.theme.palette.text.primary,
    },
});

const usePrettoSliderStyles = makeStyles({
    root: props => ({
        color: props.theme.palette.primary.light,
        borderRadius: 0,
        transition: 'all 100ms ease-out',
        position: 'relative',
        '&&': {
            width: `${props.intervalsWidth}px`,
            padding: '0',
            height: 'calc(100% - 90px)',
        },
    }),
    thumb: props => ({
        left: 'calc(50% + 10px)',
        width: 0,
        height: 0,
        display: props.type === 'onoff' ? 'none' : 'flex',
    }),
    active: {
        backgroundColor: 'transparent',
        width: 0,
        height: 0,
    },
    valueLabel: props => ({
        left: -35,
        background: 'transparent',
        '& *': {
            background: 'transparent',
            fontWeight: 100,
            color: props.theme.palette.text.primary,
            fontSize: '1.0rem',
            transition: 'all 100ms ease-out',
        },
    }),
    valueLabelCircle: {
        background: 'transparent',
    },
    track: {
        transition: 'all 100ms ease-out',
        borderRadius: 4,
        '&&': {
            width: 'calc(100% - 8px)',
        },
    },
    rail: props => ({
        transition: 'all 100ms ease-out',
        borderRadius: 4,
        height: 'calc(100% + 5px)',
        marginTop: -5,
        backgroundColor: props.theme.palette.primary.light,
        '&&': {
            width: 'calc(100% - 5px)',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
        },
    }),
});

// react/function-component-definition
// eslint-disable-next-line
const PrettoSlider = props => {
    const componentProps = { ...props };
    delete componentProps.intervalsWidth;
    delete componentProps.type;
    delete componentProps.theme;

    return <Slider
        classes={
            usePrettoSliderStyles({
                intervalsWidth: props.intervalsWidth,
                type: props.type,
                theme: props.theme,
            })
        }
        {...componentProps}
    />;
};

class Interval extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalsWidth: props.intervalsWidth,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.intervalsWidth !== this.props.intervalsWidth) {
            this.setState({
                intervalsWidth: this.props.intervalsWidth,
            });
        }
    }

    handleSliderChange = (event, data) => this.on('data', data);

    handleSelected = () => this.on('selected', !this.props.selected);

    on = (field, value) => {
        if (this.props.on) {
            this.props.on(field, value, this.props.i);
        }
    };

    getPostfix(value) {
        switch (this.props.type) {
            case 'temperature':
                return `${value.toString()}º`;

            case 'onoff':
                return value
                    ? <span style={this.props.theme.palette.text.success}>on</span>
                    : <span style={this.props.theme.palette.text.danger}>off</span>;

            case 'percent':
            default:
                return `${value.toString()}%`;
        }
    }

    getMinMax() {
        return minmax[this.props.type];
    }

    getLabel = () => {
        const { step, i } = this.props;
        const label = i * step;
        const hrs = parseInt(label);
        const secs = (`0${(label % 1) * 60}`).slice(-2);
        return [hrs, secs];
    };

    render() {
        const {
            value, i, selected, theme, type,
        } = this.props;
        const { intervalsWidth } = this.state;
        const {
            pretto, prettoLabel, prettoTime, active, prettoSecs,
        } = this.props.classes;
        if (i < 0) {
            return '';
        }
        const { min, max } = this.getMinMax();
        const label = this.getLabel();
        const val = !value ? 0 : value;
        const vl = type === 'onoff' ? this.getPostfix(val || 0) : '';
        const v2 = type !== 'onoff' ? this.getPostfix(val || 0) : '';

        return <span className={pretto}>
            <span className={prettoLabel}>
                {vl}
            </span>
            <PrettoSlider
                key={i}
                theme={theme}
                intervalsWidth={intervalsWidth}
                type={type}
                orientation="vertical"
                aria-label="pretto slider"
                value={val}
                valueLabelFormat={v2}
                min={min}
                max={max}
                selected={selected}
                onChange={this.handleSliderChange}
                valueLabelDisplay="on"
            />
            <div
                className={
                    `${prettoTime} ${
                        selected ? active : ''}`
                }
                onClick={this.handleSelected}
            >
                <span style={{ color: this.props.theme.palette.text.primary }}>{label[0]}</span>
                <span className={prettoSecs}>
                    {label[1]}
                </span>

            </div>
        </span>;
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
};
export default withStyles(styles)(Interval);
