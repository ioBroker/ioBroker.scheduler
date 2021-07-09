import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Intervals from './Intervals';

const styles = (theme) => ({
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
                    className="tapper-inside"
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
export default withStyles(styles)(IntervalsContainer);
