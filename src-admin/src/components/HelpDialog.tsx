import { type JSX } from 'react';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Close as IconClose } from '@mui/icons-material';

import { I18n } from '@iobroker/gui-components';

import type { ProfileValueType } from '../types';
import { TYPE_HINTS, TYPE_NAMES } from './typeHints';
import { staggerChildren } from './animations';

const styles: Record<string, any> = {
    section: {
        mb: '16px',
    },
    sectionTitle: {
        fontWeight: 700,
        mb: '4px',
    },
    list: {
        m: 0,
        mt: '4px',
        pl: '20px',
        '& li': {
            mb: '4px',
        },
    },
};

const TYPES: ProfileValueType[] = ['percent', 'temperature', 'onoff', 'custom'];

/** One section of the help. All texts are translation keys */
interface HelpSection {
    title: string;
    text: string;
    /** Optional list below the text: a name in bold and its explanation */
    items?: { name: string; text: string }[];
}

const SECTIONS: HelpSection[] = [
    { title: 'Profiles', text: 'hint_profiles' },
    { title: 'Intervals', text: 'hint_intervals' },
    { title: 'Days of week', text: 'hint_days' },
    { title: 'Priority', text: 'hint_priority' },
    {
        title: 'Type',
        text: 'hint_type',
        items: TYPES.map(type => ({ name: TYPE_NAMES[type], text: TYPE_HINTS[type] })),
    },
    { title: 'Values', text: 'hint_values_help' },
    { title: 'Activation state', text: 'hint_activation' },
    {
        title: 'Advanced settings',
        text: 'hint_advanced',
        items: [
            { name: 'Ignore values if same as previous', text: 'hint_ignore_same' },
            { name: 'Do not control if device already in desired state', text: 'hint_do_not_write_same' },
            { name: 'Holiday ID', text: 'hint_holiday_id' },
        ],
    },
];

/** Explains the whole configuration page, so that the user does not need the README */
export default function HelpDialog(props: { onClose: () => void }): JSX.Element {
    return (
        <Dialog
            open={!0}
            maxWidth="md"
            fullWidth
            onClose={props.onClose}
        >
            <DialogTitle>{I18n.t('How the scheduler works')}</DialogTitle>
            <DialogContent sx={staggerChildren(50, 350)}>
                {SECTIONS.map(section => (
                    <Box
                        key={section.title}
                        sx={styles.section}
                    >
                        <Typography sx={styles.sectionTitle}>{I18n.t(section.title)}</Typography>
                        <Typography variant="body2">{I18n.t(section.text)}</Typography>
                        {section.items ? (
                            <Box
                                component="ul"
                                sx={styles.list}
                            >
                                {section.items.map(item => (
                                    <li key={item.name}>
                                        <Typography variant="body2">
                                            <b>{I18n.t(item.name)}</b>: {I18n.t(item.text)}
                                        </Typography>
                                    </li>
                                ))}
                            </Box>
                        ) : null}
                    </Box>
                ))}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.onClose}
                    variant="contained"
                    startIcon={<IconClose />}
                    color="grey"
                >
                    {I18n.t('Close')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
