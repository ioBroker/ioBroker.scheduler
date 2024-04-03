import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@mui/styles';

import Intervals from './Intervals';

const styles = () => ({
    tapperGrid: {
        margin: 0,
        boxShadow: 'none',
        borderRadius: 0,
        alignItems: 'center',
        padding: 10,
        '@media (max-width:570px)': {
            margin: 0,
            boxShadow: 'none',
            borderRadius: 0,
            alignItems: 'center',
            padding: '0px 10px 0 60px',
        },
    },
    tapperInside: {
        overflow: 'hidden',
        height: '100%',
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

class IntervalsContainer extends Component {
    constructor(props) {
        super(props);
        this.tapperRef = React.createRef();
        this.state = {
            intervalsWidth: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.range !== this.props.range) {
            this.updateWindowDimensions();
        }
        if (prevProps.windowWidth !== this.props.windowWidth) {
            this.updateWindowDimensions();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const w = this.tapperRef.current?.getBoundingClientRect().width;
        this.setState({
            intervalsWidth: w || 30,
        });
    };

    render() {
        const {
            type, theme, range, intervals,
        } = this.props;
        const { tapperGrid, tapperInside } = this.props.classes;
        const intervalsWidth = this.tapperRef.current?.getBoundingClientRect().width;
        if (intervalsWidth && intervalsWidth !== this.state.intervalsWidth) {
            this.updateWidth = this.updateWidth || setTimeout(() => {
                this.updateWidth = null;
                this.updateWindowDimensions();
            }, 100);
        }
        // console.log(this.state.intervalsWidth);
        return <div
            className={`${tapperGrid} m-1 h-100`}
            style={{ backgroundColor: theme.palette.background.default }}
        >
            <div
                className={tapperInside}
                id="tapper-inside"
                ref={this.tapperRef}
                style={{
                    padding: 0,
                    width: '100%',
                }}
            >
                {this.props.intervalsWidth || this.state.intervalsWidth ? <Intervals
                    data={intervals}
                    onChange={this.props.onChange}
                    theme={theme}
                    type={type}
                    range={range}
                    intervalsWidth={this.props.intervalsWidth || this.state.intervalsWidth}
                /> : null}
            </div>
        </div>;
    }
}

IntervalsContainer.propTypes = {
    intervals: PropTypes.array,
    onChange: PropTypes.func,
    range: PropTypes.number,
    theme: PropTypes.object,
    type: PropTypes.string,
    intervalsWidth: PropTypes.number,
};
export default withStyles(styles)(IntervalsContainer);
