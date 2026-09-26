import { Component, type JSX } from 'react';
import { Box, ToggleButton, Tooltip } from '@mui/material';
import type { Translate } from '@iobroker/gui-components';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const dowOrderMonday = [1, 2, 3, 4, 5, 6, 0];
const dowOrderSunday = [0, 1, 2, 3, 4, 5, 6];

const styles: Record<string, any> = {
    grid: {
        display: 'grid',
        gap: '4px',
        width: '100%',
    },
    button: {
        borderRadius: '8px',
        p: '4px 0',
        minWidth: 0,
        lineHeight: 1.2,
        fontSize: '0.8rem',
        fontWeight: 600,
        textTransform: 'none',
        border: '1px solid',
        borderColor: 'divider',
        '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            borderColor: 'primary.main',
            '&:hover': {
                backgroundColor: 'primary.dark',
            },
        },
    },
};

interface DayOfWeekPanelProps {
    dow: number[];
    holiday?: boolean;
    holidayVisible?: boolean;
    /** Called with the day index, or with 'holiday' for the holiday button */
    onChange: (day: number | 'holiday', enabled: boolean) => void;
    firstDayOfWeek?: string;
    /** Number of buttons per row. 1 renders the compact vertical strip used by the vis widget */
    columns?: number;
    readOnly?: boolean;
    t: Translate;
}

export default class DayOfWeekPanel extends Component<DayOfWeekPanelProps> {
    private renderButton(
        key: string,
        label: string,
        title: string,
        selected: boolean,
        onClick: () => void,
    ): JSX.Element {
        return (
            <Tooltip
                key={key}
                title={title}
                slotProps={{ popper: { sx: { pointerEvents: 'none' } } }}
            >
                <span>
                    <ToggleButton
                        value={key}
                        size="small"
                        fullWidth
                        disabled={this.props.readOnly}
                        selected={selected}
                        onChange={onClick}
                        sx={styles.button}
                    >
                        {label}
                    </ToggleButton>
                </span>
            </Tooltip>
        );
    }

    render(): JSX.Element {
        const dowOrder = this.props.firstDayOfWeek === 'monday' ? dowOrderMonday : dowOrderSunday;
        const columns = this.props.columns || 1;

        const buttons = dowOrder.map(index =>
            this.renderButton(
                `dow${index}`,
                this.props.t(daysOfWeek[index]),
                this.props.t(daysOfWeek[index]),
                this.props.dow.includes(index),
                () => this.props.onChange(index, !this.props.dow.includes(index)),
            ),
        );

        if (this.props.holidayVisible) {
            buttons.push(
                this.renderButton(
                    'holiday',
                    this.props.t('Holiday'),
                    this.props.t('Holiday'),
                    !!this.props.holiday,
                    () => this.props.onChange('holiday', !this.props.holiday),
                ),
            );
        }

        return (
            <Box
                sx={styles.grid}
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
                {buttons}
            </Box>
        );
    }
}
