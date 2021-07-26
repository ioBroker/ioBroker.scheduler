import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Intervals from './Intervals';

const styles = () => ({
    tab: {
        width: '100%',
        minHeight: '100%',
    },
    column: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: 20,
    },
    columnSettings: {
        width: 'calc(100% - 370px)',
    },
    tapperInside:{
        overflow: "hidden",
        height: "100%",
        flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
});

class IntervalsContainer extends Component {
    constructor(props) {
        super(props);
        this.tapperRef = React.createRef();
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.range !== this.props.range) {
            this.updateWindowDimensions();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const w = this.tapperRef.current.getBoundingClientRect().width;
        this.setState({
            intervalsWidth: w ? w * 0.85 : 30,
        });
    }

    render() {
        const {
            type, theme, range, intervals,
        } = this.props;
        return (
            <div
                className="tapper-grid tapper-shadow m-1 p-1 h-100"
                style={{
                    padding: 0,
                    paddingBottom: 0,
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <div
                    className={this.props.classes.tapperInside}
                    id="tapper-inside"
                    ref={this.tapperRef}
                    style={{
                        padding: 0,
                        width: '100%',
                    }}
                >
                    <Intervals
                        data={intervals}
                        onChange={this.props.onChange}
                        theme={theme}
                        type={type}
                        range={range}
                        intervalsWidth={this.state.intervalsWidth}
                    />
                </div>
            </div>
        );
    }
}

IntervalsContainer.propTypes = {
    intervals: PropTypes.array,
    onChange: PropTypes.func,
    range: PropTypes.number,
    theme: PropTypes.object,
    type: PropTypes.string,
};
export default withStyles(styles)(IntervalsContainer);
