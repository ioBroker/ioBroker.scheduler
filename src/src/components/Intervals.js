import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { Swipe } from 'react-swipe-component';
import DayNightSwitcher from './DayNightSwitcher';
import Interval from './Interval';

class Intervals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideId: 0,
            selected: [],
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.range !== this.props.range || prevProps.intervalsWidth !== this.props.intervalsWidth) {
            this.setState({
                slideId: 0,
            });
        }
    }

    getSectionByRange = range => {
        if (this.props.intervalsWidth >= 720) {
            return range === 0.5 ? 2 : 1;
        }
        switch (range) {
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
    }

    getCountByRange = range => {
        if (this.props.intervalsWidth >= 720) {
            return range === 0.5 ? 24 : this.getMaxByRange(range);
        }
        switch (range) {
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
    }

    getMaxByRange = range => 24 / range

    prev = () => {
        const { slideId } = this.state;
        const { range } = this.props;
        if (slideId > 0) this.setSlideId(slideId - 1);
        else this.setSlideId(this.getSectionByRange(range) - 1);
    }

    next = () => {
        const { slideId } = this.state;
        const { range } = this.props;
        if (slideId < this.getSectionByRange(range) - 1) this.setSlideId(slideId + 1);
        else this.setSlideId(0);
    }

    selectAll = () => {
        const { range } = this.props;
        this.setState({ selected: Array(this.getMaxByRange(range) + 1).fill(1).map((e, i) => i) });
    }

    selectNone = () => {
        this.setState({ selected: [] });
    }

    setSlideId = slideId => {
        this.setState({ slideId: parseInt(slideId) });
    }

    onChange = (field, value, i) => {
        const { selected } = this.state;
        const state = { ...this.state };
        if (field === 'selected') {
            state[field][i] = value;
            this.setState(state);
        }
        if (field === 'data') {
            const data = [...this.props.data];
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
    }

    getSlide() {
        const { slideId, selected } = this.state;
        const {
            type, intervalsWidth, theme, range, data,
        } = this.props;
        const count = this.getCountByRange(range);

        const sliders = [];
        for (let i = slideId * count; i < (slideId + 1) * count; i++) {
            sliders.push(
                <Interval
                    key={`${i}step${range}`}
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
        return sliders;
    }

    onSwipeLeftListener = () => {
        this.prev();
    }

    onSwipeRightListener = () => {
        this.next();
    }

    render() {
        if (!this.props.intervalsWidth) {
            return null;
        }
        const { slideId } = this.state;
        const { range } = this.props;
        const sections = this.getSectionByRange(range);
        return (
            <>
                <div className="swiper-content">
                    <Swipe
                        nodeName="div"
                        className="h-100 w-100"
                        mouseSwipe={false}
                        onSwipedLeft={this.onSwipeLeftListener}
                        onSwipedRight={this.onSwipeRightListener}
                    >
                        <div className="swiper">
                            { this.getSlide() }
                        </div>
                    </Swipe>
                </div>
                <DayNightSwitcher
                    sections={sections}
                    quorteId={parseInt(slideId)}
                    onChange={quorteId => this.setSlideId(quorteId)}
                />
            </>
        );
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
export default Intervals;
