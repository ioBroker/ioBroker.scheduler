import { readFileSync } from 'node:fs';
import { defineVisWidgetConfig } from '@iobroker/types-vis-2/defineVisWidgetConfig';

const pack = JSON.parse(readFileSync('./package.json').toString());

export default defineVisWidgetConfig({
    name: 'vis-2-scheduler',
    exposes: {
        './SchedulerWidget': './src/SchedulerWidget',
        './translations': './src/translations.js',
    },
    pack,
    devServerPort: 4173,
});
