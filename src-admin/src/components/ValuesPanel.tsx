import { Component, type JSX } from 'react';

import { Box, Button, FormHelperText, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Add as IconAdd, Clear as IconClear } from '@mui/icons-material';

import {
    I18n,
    DialogSelectID,
    IconTrash,
    type AdminConnection,
    type IobTheme,
    type ThemeType,
} from '@iobroker/gui-components';

import type { MinMax, ProfileRange, ProfileValue, ProfileValueType } from '../types';
import { fadeIn, motion, popIn } from './animations';

const styles: Record<string, any> = {
    row: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '4px',
        ...motion({ animation: `${popIn} 250ms ease-out both` }),
    },
    index: {
        width: 18,
        flexShrink: 0,
        pb: '6px',
        fontSize: '0.75rem',
        opacity: 0.6,
    },
    label: {
        flex: 1,
        minWidth: 0,
    },
    value: {
        flex: 1,
        minWidth: 0,
    },
    rangeRow: {
        display: 'flex',
        gap: '8px',
    },
    addButton: {
        alignSelf: 'flex-start',
        borderRadius: '8px',
        textTransform: 'none',
        '& .MuiButton-startIcon svg': motion({ transition: 'transform 300ms ease-out' }),
        '&:hover .MuiButton-startIcon svg': { transform: 'rotate(90deg)' },
    },
    hint: motion({ animation: `${fadeIn} 400ms ease-out both` }),
    smallButton: {
        mb: '2px',
    },
};

interface ValuesPanelProps {
    type: ProfileValueType;
    range: ProfileRange | null | undefined;
    values: ProfileValue[] | null | undefined;
    /** Range from the first data point or the defaults: shown as placeholder of the own range */
    baseMinMax: MinMax;
    onChange: (range: ProfileRange | null, values: ProfileValue[] | null) => void;
    socket: AdminConnection;
    theme: IobTheme;
    themeType: ThemeType;
}

interface ValuesPanelState {
    /** Index of the entry, for which a state is selected */
    selectIdFor: number | null;
}

/**
 * Own range of the bars (temperature and custom) and the value list (custom): which values the bars choose and
 * which value the adapter writes. See `range` and `values` in src/types.ts.
 */
export default class ValuesPanel extends Component<ValuesPanelProps, ValuesPanelState> {
    constructor(props: ValuesPanelProps) {
        super(props);
        this.state = { selectIdFor: null };
    }

    changeRange(attr: keyof ProfileRange, text: string): void {
        const range: ProfileRange = { ...this.props.range };
        const value = parseFloat(text.replace(',', '.'));
        if (text.trim() === '' || !Number.isFinite(value)) {
            delete range[attr];
        } else {
            range[attr] = value;
        }
        this.props.onChange(Object.keys(range).length ? range : null, this.props.values || null);
    }

    changeValue(index: number, change: Partial<ProfileValue> | null): void {
        const values: ProfileValue[] = (this.props.values || []).map(entry => ({ ...entry }));
        if (change === null) {
            values.splice(index, 1);
        } else {
            const entry: ProfileValue = { ...values[index], ...change };
            // an entry has either a fixed value or a state
            if (change.id) {
                delete entry.value;
            } else if (change.id === '') {
                delete entry.id;
            }
            values[index] = entry;
        }
        this.props.onChange(this.props.range || null, values.length ? values : null);
    }

    addValue(): void {
        const values: ProfileValue[] = [...(this.props.values || [])];
        values.push({ label: '', value: String(values.length) });
        this.props.onChange(this.props.range || null, values);
    }

    renderSelectIdDialog(): JSX.Element | null {
        if (this.state.selectIdFor === null) {
            return null;
        }
        const index = this.state.selectIdFor;
        return (
            <DialogSelectID
                imagePrefix="../.."
                dialogName="schedulerValue"
                selected={this.props.values?.[index]?.id || ''}
                filterFunc={obj => obj?.type === 'state'}
                themeType={this.props.themeType}
                theme={this.props.theme}
                socket={this.props.socket}
                onClose={() => this.setState({ selectIdFor: null })}
                onOk={selected => {
                    const id = (Array.isArray(selected) ? selected[0] : selected) || '';
                    this.setState({ selectIdFor: null }, () => this.changeValue(index, { id }));
                }}
            />
        );
    }

    renderValueList(values: ProfileValue[]): JSX.Element {
        return (
            <>
                {values.map((entry, i) => (
                    <Box
                        key={i}
                        sx={styles.row}
                    >
                        <Typography sx={styles.index}>{i + 1}.</Typography>
                        <TextField
                            variant="standard"
                            size="small"
                            sx={styles.label}
                            label={I18n.t('Label')}
                            value={entry.label}
                            onChange={e => this.changeValue(i, { label: e.target.value })}
                        />
                        <TextField
                            variant="standard"
                            size="small"
                            sx={styles.value}
                            label={I18n.t(entry.id ? 'Value of state' : 'Value')}
                            title={entry.id || undefined}
                            value={entry.id || entry.value || ''}
                            onChange={e => this.changeValue(i, { value: e.target.value })}
                            slotProps={{
                                input: {
                                    readOnly: !!entry.id,
                                    endAdornment: entry.id ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                title={I18n.t('Use a fixed value')}
                                                onClick={() => this.changeValue(i, { id: '' })}
                                            >
                                                <IconClear fontSize="small" />
                                            </IconButton>
                                        </InputAdornment>
                                    ) : null,
                                },
                            }}
                        />
                        <Button
                            size="small"
                            variant="outlined"
                            sx={styles.smallButton}
                            style={{ minWidth: 32, padding: '2px 4px' }}
                            title={I18n.t('Take the value from a state')}
                            onClick={() => this.setState({ selectIdFor: i })}
                        >
                            ...
                        </Button>
                        <IconButton
                            size="small"
                            sx={styles.smallButton}
                            title={I18n.t('Delete')}
                            onClick={() => this.changeValue(i, null)}
                        >
                            <IconTrash fontSize="small" />
                        </IconButton>
                    </Box>
                ))}
            </>
        );
    }

    renderRange(): JSX.Element {
        const range = this.props.range || {};
        const base = this.props.baseMinMax;
        const invalid =
            range.min !== undefined && range.max !== undefined && range.max <= range.min
                ? I18n.t('Max must be greater than min')
                : '';
        const field = (attr: keyof ProfileRange, label: string, placeholder: number | undefined): JSX.Element => (
            <TextField
                variant="standard"
                size="small"
                type="number"
                label={I18n.t(label)}
                value={range[attr] ?? ''}
                placeholder={placeholder === undefined ? '' : String(placeholder)}
                error={!!invalid && attr !== 'step'}
                onChange={e => this.changeRange(attr, e.target.value)}
                slotProps={{ inputLabel: { shrink: true } }}
            />
        );
        return (
            <>
                <Box sx={styles.rangeRow}>
                    {field('min', 'Min', base.min)}
                    {field('max', 'Max', base.max)}
                    {field('step', 'Step', base.step || 1)}
                </Box>
                <FormHelperText
                    error={!!invalid}
                    sx={styles.hint}
                >
                    {invalid || I18n.t('hint_range')}
                </FormHelperText>
            </>
        );
    }

    render(): JSX.Element {
        const values = this.props.type === 'custom' ? this.props.values || [] : [];
        return (
            <>
                {this.renderSelectIdDialog()}
                {values.length ? null : this.renderRange()}
                {this.props.type === 'custom' ? (
                    <>
                        {this.renderValueList(values)}
                        <Button
                            size="small"
                            variant="outlined"
                            startIcon={<IconAdd />}
                            sx={styles.addButton}
                            onClick={() => this.addValue()}
                        >
                            {I18n.t('Add value')}
                        </Button>
                        <FormHelperText sx={styles.hint}>{I18n.t('hint_values')}</FormHelperText>
                    </>
                ) : null}
            </>
        );
    }
}
