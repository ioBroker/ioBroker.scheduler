import { Component, createRef, type JSX, type RefObject } from 'react';

import { Box } from '@mui/material';
import type { IobTheme, Translate } from '@iobroker/gui-components';

import Intervals from './Intervals';
import type { MinMax, ProfileValueType } from '../types';

const styles: Record<string, any> = {
    /** Fills the surrounding card completely; the height comes from the flex parent, not from a calc() */
    tapperGrid: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden',
        borderRadius: '8px',
    },
    tapperInside: {
        overflow: 'hidden',
        flexGrow: 1,
        minHeight: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
    },
};

interface IntervalsContainerProps {
    intervals: number[];
    onChange: (intervals: number[]) => void;
    range: number;
    theme: IobTheme;
    type: ProfileValueType;
    intervalsWidth?: number;
    id: string;
    minMax: MinMax;
    /** Disables all sliders - the vis widget can be configured read only */
    readOnly?: boolean;
    t: Translate;
}

interface IntervalsContainerState {
    intervalsWidth: number;
}

export default class IntervalsContainer extends Component<IntervalsContainerProps, IntervalsContainerState> {
    private readonly tapperRef: RefObject<HTMLDivElement | null>;

    private updateWidth: ReturnType<typeof setTimeout> | null = null;

    constructor(props: IntervalsContainerProps) {
        super(props);
        this.tapperRef = createRef<HTMLDivElement>();
        this.state = {
            intervalsWidth: 0,
        };
    }

    componentDidMount(): void {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentDidUpdate(prevProps: IntervalsContainerProps): void {
        if (prevProps.range !== this.props.range) {
            this.updateWindowDimensions();
        }
        if (prevProps.intervalsWidth !== this.props.intervalsWidth) {
            this.updateWindowDimensions();
        }
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.updateWindowDimensions);
        if (this.updateWidth) {
            clearTimeout(this.updateWidth);
            this.updateWidth = null;
        }
    }

    updateWindowDimensions = (): void => {
        const w = this.tapperRef.current?.getBoundingClientRect().width;
        this.setState({
            intervalsWidth: w || 30,
        });
    };

    render(): JSX.Element {
        const { type, theme, range, intervals, minMax } = this.props;
        const intervalsWidth = this.tapperRef.current?.getBoundingClientRect().width;
        if (intervalsWidth && intervalsWidth !== this.state.intervalsWidth) {
            this.updateWidth =
                this.updateWidth ||
                setTimeout(() => {
                    this.updateWidth = null;
                    this.updateWindowDimensions();
                }, 100);
        }

        return (
            <Box
                sx={styles.tapperGrid}
                style={{ backgroundColor: theme.palette.background.default }}
            >
                <div
                    id={`${this.props.id}-tapper-inside`}
                    ref={this.tapperRef}
                    style={styles.tapperInside}
                >
                    {this.props.intervalsWidth || this.state.intervalsWidth ? (
                        <Intervals
                            id={this.props.id}
                            data={intervals}
                            onChange={this.props.onChange}
                            theme={theme}
                            type={type}
                            range={range}
                            intervalsWidth={this.props.intervalsWidth || this.state.intervalsWidth}
                            minMax={minMax}
                            readOnly={this.props.readOnly}
                            t={this.props.t}
                        />
                    ) : null}
                </div>
            </Box>
        );
    }
}
