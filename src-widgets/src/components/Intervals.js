import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import DayNightSwitcher from './DayNightSwitcher';
import Interval from './Interval';

const styles = theme => ({
    swiperContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width:570px)': {
            justifyContent: 'center',
        },
    },
    swiper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 15,
        position: 'relative',
    },
    timeLineContainer: {
        position: 'absolute',
        height: '100%',
    },
    timeLine: {
        zIndex: 100,
        borderWidth: 1,
        borderColor: theme.palette.text.primary,
        borderLeftStyle: 'dashed',
        width: 4,
        height: 'calc(100% - 20px)',
        position: 'relative',
    },
});

class Intervals extends Component {
    timeInterval = null;

    setSlideInterval = null;

    constructor(props) {
        super(props);

        this.state = {
            slideId: 0,
            selected: [],
            intervalsWidth: props.intervalsWidth,
            key: parseInt(Date.now() + Math.random() * 1000),
            currentTime: new Date(),
        };
    }

    componentDidMount() {
        this.setSlideOfTime();
        this.timeInterval = setInterval(() =>
            this.setState({
                currentTime: new Date(),
            }), 1000 * 120);

        this.setSlideInterval = setInterval(() =>
            this.setSlideOfTime(), 1000 * 120);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
        this.timeInterval = null;
        clearInterval(this.setSlideInterval);
        this.setSlideInterval = null;
    }

    componentDidUpdate(nextProps) {
        if (nextProps.range !== this.props.range) {
            this.setState({ slideId: 0 });
            this.setSlideOfTime();
        }
        if (this.props.intervalsWidth && nextProps.intervalsWidth !== this.props.intervalsWidth) {
            // console.log(nextProps.intervalsWidth, this.props.intervalsWidth)
            // setTimeout(() => {
            this.setState({
                intervalsWidth: this.props.intervalsWidth + Math.random(),
                key: parseInt(Date.now() + Math.random() * 1000),
            });
            // }, 1)
        }
    }

    getSectionByRange = range => {
        if (this.props.intervalsWidth >= 720) {
            if (range === 0.25) {
                return 4;
            }
            return range === 0.5 ? 2 : 1;
        }
        switch (range) {
            case 0.25:
                return 16;
            case 0.5:
                return 8;
            case 1:
                return 4;
            case 2:
                return 3;
            case 4:
                return 1;
            case 3:
            default:
                return 2;
        }
    };

    getCountByRange = range => {
        if (this.state.intervalsWidth >= 720) {
            return range === 0.5 || range === 0.25 ? 24 : Intervals.getMaxByRange(range);
        }
        switch (range) {
            case 0.25:
                return 6;
            case 0.5:
                return 6;
            case 1:
                return 6;
            case 2:
                return 4;
            case 4:
                return 6;
            case 3:
            default:
                return 4;
        }
    };

    static getMaxByRange = range => 24 / range;

    /*
    prev = () => {
        const { slideId } = this.state;
        const { range } = this.props;
        if (slideId > 0) {
            this.setSlideId(slideId - 1);
        } else {
            this.setSlideId(this.getSectionByRange(range) - 1);
        }
    }

    next = () => {
        const { slideId } = this.state;
        const { range } = this.props;
        if (slideId < this.getSectionByRange(range) - 1) {
            this.setSlideId(slideId + 1);
        } else {
            this.setSlideId(0);
        }
    }

    selectAll = () => {
        const { range } = this.props;
        this.setState({ selected: Array(this.getMaxByRange(range) + 1).fill(1).map((e, i) => i) });
    }

    selectNone = () => {
        this.setState({ selected: [] });
    }
    */

    setSlideId = slideId => {
        this.setState({ slideId: parseInt(slideId) });
    };

    onChange = (field, value, i) => {
        const { selected } = this.state;
        const state = JSON.parse(JSON.stringify(this.state));
        if (field === 'selected') {
            state[field][i] = value;
            this.setState(state);
        } else if (field === 'data') {
            const data = JSON.parse(JSON.stringify(this.props.data));
            const inSelected = selected[i];
            if (!inSelected) {
                this.setState({ selected: [] });
            }
            if (!inSelected || selected.filter(e => e).length === 0) {
                data[i] = value;
            } else {
                data.forEach((element, index) => {
                    if (selected[index]) {
                        data[index] = value;
                    }
                });
            }
            this.props.onChange(data);
        }
    };

    getSlide() {
        const {
            intervalsWidth, slideId, selected, key,
        } = this.state;
        const {
            type, theme, range, data, classes,
        } = this.props;
        const count = this.getCountByRange(range);

        const sliders = [];
        for (let i = slideId * count; i < (slideId + 1) * count; i++) {
            sliders.push(
                <Interval
                    key={`${i}step${range}${key}`}
                    value={data[i]}
                    selected={selected[i]}
                    label=""
                    i={i}
                    step={range}
                    on={this.onChange}
                    type={type}
                    theme={theme}
                    intervalsWidth={intervalsWidth / count}
                />,
            );
        }

        const leftOffset = Math.round(
            (((this.state.currentTime.getHours() + this.state.currentTime.getMinutes() / 60) / range - count * slideId) / count) * intervalsWidth,
        );

        return <>
            <div className={classes.timeLineContainer}>
                <div
                    className={classes.timeLine}
                    style={{ left: leftOffset }}
                />
            </div>
            {sliders}
        </>;
    }

    /*
    onSwipeLeftListener = () => {
        this.prev();
    }

    onSwipeRightListener = () => {
        this.next();
    }
    */

    setSlideOfTime = () => {
        const { range } = this.props;
        const hour = new Date().getHours();
        const part = this.getCountByRange(range) * range;
        this.setState({ slideId: Math.floor(hour / part) });
    };

    render() {
        if (!this.state.intervalsWidth) {
            return null;
        }
        const { slideId } = this.state;
        const { range } = this.props;
        const { swiperContent, swiper } = this.props.classes;
        const sections = this.getSectionByRange(range);
        return <>
            <div className={swiperContent}>
                <div className={swiper}>
                    {this.getSlide()}
                </div>
            </div>
            <DayNightSwitcher
                sections={sections}
                quarterId={parseInt(slideId)}
                onChange={quarterId => {
                    this.setSlideId(quarterId);
                    clearInterval(this.setSlideInterval);
                    this.setSlideInterval = setInterval(() => {
                        this.setSlideOfTime();
                    }, 1000 * 120);
                }}
            />
        </>;
    }
}

Intervals.propTypes = {
    data: PropTypes.array,
    intervalsWidth: PropTypes.number,
    onChange: PropTypes.func,
    range: PropTypes.number,
    theme: PropTypes.object,
    type: PropTypes.string,
};
export default withStyles(styles)(Intervals);
