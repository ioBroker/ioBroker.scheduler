import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { Component } from 'react';
import dayNight from '../assets/img/day-night.jpg';

const styles = {
    dayNightCont: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'height 300ms ease-out',
        '&>div': {
            position: 'relative',
        },
        '&>div>.day_night': {
            width: '100%',
            maxWidth: 550,
            maxHeight: 90,
        },
        '&>div>img': {
            width: '100%',
            maxWidth: 550,
            height: 'auto',
            maxHeight: 90,
        },
    },
    dayNightQuarter: {
        display: 'flex',
        width: '100%',
    },
    dayNightSlide: {
        display: 'flex',
        width: '100%',
        height: 'calc(100% - 9px)',
        position: 'absolute',
        border: '6px solid #FFF',
        marginTop: -3,
        transition: 'all 400ms ease-out',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 'calc(-200% - 5px)',
            top: -5,
            height: 'calc(100% + 12px)',
            width: '200%',
            pointerEvents: 'none',
            background: 'linear-gradient(to left,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 99%,rgba(255,255,255,0) 100%)',
            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 )",

        },
        '&::after': {
            content: '""',
            position: 'absolute',
            right: 'calc(-200% - 5px)',
            top: -5,
            height: 'calc(100% + 12px)',
            width: '200%',
            pointerEvents: 'none',
            background: 'linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 99%,rgba(255,255,255,0) 100%)',
            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 )",
        },
    },

    dn: {
        width: '100%',
        maxWidth: 550,
        // height: 'auto',
        maxHeight: 90,
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
    },
};
class DayNightSwitcher extends Component {
    onSlide = quarterId => {
        if (this.props.onChange) {
            this.props.onChange(quarterId);
        }
    };

    render() {
        const { sections } = this.props;
        const {
            dayNightCont, dayNightSlide, dayNightQuarter, dn,
        } = this.props.classes;
        const height = sections === 1 ? 0 : 78;
        const region = 100 / sections;

        const quarters = Array(sections).fill().map((_, i) => <div
            key={i}
            className={dayNightQuarter}
            onClick={() => this.onSlide(i)}
        />);

        return <div className={dayNightCont} style={{ height }}>
            <div>
                <img src={dayNight} alt="day-night" id="day-night" />
                <div className={dn}>
                    {quarters}
                    <div
                        className={dayNightSlide}
                        style={{
                            maxWidth: `${region}%`,
                            width: `${region}%`,
                            left: `calc(${this.props.quarterId * region}% - 5px)`,
                        }}
                    />
                </div>
            </div>
        </div>;
    }
}

DayNightSwitcher.propTypes = {
    onChange: PropTypes.func,
    quarterId: PropTypes.number,
    sections: PropTypes.number,
};
export default withStyles(styles)(DayNightSwitcher);
