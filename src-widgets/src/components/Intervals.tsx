import { Component, type JSX } from 'react';
import { Box } from '@mui/material';
import type { IobTheme, Translate } from '@iobroker/adapter-react-v5';

import DayNightSwitcher from './DayNightSwitcher';
import Interval from './Interval';
import type { MinMax, ProfileValueType } from '../types';

const styles: Record<string, any> = {
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
    timeLine: (theme: IobTheme): any => ({
        zIndex: 100,
        borderWidth: 2,
        borderColor: theme.palette.text.primary,
        borderLeftStyle: 'dashed',
        width: 4,
        height: 'calc(100% - 20px)',
        position: 'relative',
    }),
};

interface IntervalsProps {
    data: number[];
    intervalsWidth: number;
    onChange: (data: number[]) => void;
    range: number;
    theme: IobTheme;
    type: ProfileValueType;
    id: string;
    minMax: MinMax;
    /** Disables all sliders - the vis widget can be configured read only */
    readOnly?: boolean;
    t: Translate;
}

interface IntervalsState {
    slideId: number;
    selected: boolean[];
    intervalsWidth: number;
    key: number;
    currentTime: Date;
}

export default class Intervals extends Component<IntervalsProps, IntervalsState> {
    private timeInterval: ReturnType<typeof setInterval> | null = null;

    private setSlideInterval: ReturnType<typeof setInterval> | null = null;

    private readonly onText: string;

    private readonly offText: string;

    constructor(props: IntervalsProps) {
        super(props);

        this.state = {
            slideId: 0,
            selected: [],
            intervalsWidth: props.intervalsWidth,
            key: Math.round(Date.now() + Math.random() * 1000),
            currentTime: new Date(),
        };

        this.onText = props.t('on');
        this.offText = props.t('off');
    }

    componentDidMount(): void {
        this.setSlideOfTime();
        this.timeInterval = setInterval(
            () =>
                this.setState({
                    currentTime: new Date(),
                }),
            1000 * 120,
        );

        this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 1000 * 120);
    }

    componentWillUnmount(): void {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
            this.timeInterval = null;
        }
        if (this.setSlideInterval) {
            clearInterval(this.setSlideInterval);
            this.setSlideInterval = null;
        }
    }

    componentDidUpdate(nextProps: IntervalsProps): void {
        if (nextProps.range !== this.props.range) {
            this.setState({ slideId: 0 });
            this.setSlideOfTime();
        }
        if (this.props.intervalsWidth && nextProps.intervalsWidth !== this.props.intervalsWidth) {
            this.setState({
                intervalsWidth: this.props.intervalsWidth,
                key: Math.round(Date.now() + Math.random() * 1000),
                slideId: this.getSlideOfTime(nextProps.intervalsWidth),
            });
        }
    }

    getNumberOfSectionsByRange = (range: number): number => {
        if (this.state.intervalsWidth >= 720) {
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

    getCountByRange = (range: number, intervalsWidth?: number): number => {
        intervalsWidth = intervalsWidth || this.state.intervalsWidth;

        if (intervalsWidth >= 720) {
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

    static getMaxByRange = (range: number): number => 24 / range;

    setSlideId = (slideId: number): void => {
        this.setState({ slideId });
    };

    onChange = (field: 'selected' | 'data', value: number | boolean, i: number): void => {
        const { selected } = this.state;
        if (field === 'selected') {
            const newSelected = [...selected];
            newSelected[i] = !!value;
            this.setState({ selected: newSelected });
        } else {
            const data: number[] = JSON.parse(JSON.stringify(this.props.data));
            const inSelected = selected[i];
            if (!inSelected) {
                this.setState({ selected: [] });
            }
            if (!inSelected || selected.filter(e => e).length === 0) {
                data[i] = value as number;
            } else {
                data.forEach((_element, index) => {
                    if (selected[index]) {
                        data[index] = value as number;
                    }
                });
            }
            this.props.onChange(data);
        }
    };

    getSlide(): JSX.Element | null {
        const { intervalsWidth, slideId, selected, key } = this.state;
        const { type, theme, range, data, minMax } = this.props;
        const count = this.getCountByRange(range);
        const maxSlide = Intervals.getMaxByRange(range);
        if (slideId * count >= maxSlide) {
            setTimeout(() => {
                this.setSlideOfTime();
            }, 50);
            return null;
        }

        const sliders = [];
        for (let i = slideId * count; i < (slideId + 1) * count; i++) {
            sliders.push(
                <Interval
                    key={`${i}step${range}${key}`}
                    value={data[i]}
                    selected={selected[i]}
                    i={i}
                    id={this.props.id}
                    step={range}
                    on={this.onChange}
                    type={type}
                    theme={theme}
                    intervalsWidth={intervalsWidth / count}
                    minMax={minMax}
                    onText={this.onText}
                    offText={this.offText}
                    readOnly={this.props.readOnly}
                    t={this.props.t}
                />,
            );
        }

        const now = new Date(this.state.currentTime);

        const leftOffset = Math.round(
            (((now.getHours() + now.getMinutes() / 60) / range - count * slideId) / count) * intervalsWidth,
        );

        return (
            <>
                <div
                    style={styles.timeLineContainer}
                    title={this.props.t('Now')}
                >
                    <Box
                        sx={styles.timeLine}
                        style={{ left: leftOffset }}
                    />
                </div>
                {sliders}
            </>
        );
    }

    getSlideOfTime(intervalsWidth?: number): number {
        const { range } = this.props;
        intervalsWidth = intervalsWidth || this.state.intervalsWidth;
        if (intervalsWidth) {
            const hour = new Date().getHours();
            const part = this.getCountByRange(range, intervalsWidth) * range;
            return Math.floor(hour / part);
        }
        return 0;
    }

    setSlideOfTime(): void {
        if (this.state.intervalsWidth) {
            this.setState({ slideId: this.getSlideOfTime() });
        }
    }

    render(): JSX.Element | null {
        if (!this.state.intervalsWidth) {
            return null;
        }
        const { slideId } = this.state;
        const { range } = this.props;
        const sections = this.getNumberOfSectionsByRange(range);
        return (
            <>
                <Box sx={styles.swiperContent}>
                    <div style={styles.swiper}>{this.getSlide()}</div>
                </Box>
                <DayNightSwitcher
                    id={this.props.id}
                    sections={sections}
                    quarterId={slideId}
                    onChange={quarterId => {
                        this.setSlideId(quarterId);
                        if (this.setSlideInterval) {
                            clearInterval(this.setSlideInterval);
                        }
                        this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 1000 * 120);
                    }}
                />
            </>
        );
    }
}
