import PropTypes from 'prop-types';
import { Component } from 'react';
import dayNight from '../assets/img/day-night.jpg';

class DayNightSwitcher extends Component {
    onSlide = quorteId => {
        if (this.props.on) {
            this.props.on(quorteId);
        }
    }

    render() {
        const { sections } = this.props;
        const height = sections === 1 ? 0 : 78;
        const region = 100 / sections;
        const quortes = Array(sections).fill().map((_, i) => (
            <div
                key={i}
                className="day-night-quorte"
                onClick={() => this.onSlide(i)}
            />
        ));
        return (
            <div className="day_night_cont" style={{ height }}>
                <div>
                    <img src={dayNight} alt="day-night" id="day-night" />
                    <div className="day_night">
                        { quortes }
                        <div
                            className="day-night-slide"
                            style={{
                                maxWidth: `${region}%`,
                                width: `${region}%`,
                                left: `calc(${this.props.quorteId * region}% - 5px)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

DayNightSwitcher.propTypes = {
    on: PropTypes.func,
    quorteId: PropTypes.number,
    sections: PropTypes.number,
};
export default DayNightSwitcher;
