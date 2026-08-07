/*!
 * ioBroker build tasks
 */
import { copyFileSync, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { fork } from 'node:child_process';
import { buildReact, copyFiles, deleteFoldersRecursive, npmInstall, patchHtmlFile } from '@iobroker/build-tools';

import { name } from './package.json';

const adapterName = name.replace('iobroker.', '');
const srcAdmin = `${__dirname}/src-admin/`;
const srcWidgets = `${__dirname}/src-widgets/`;

/** Compile the adapter backend: src/*.ts => build/*.js */
function buildBackend(): Promise<void> {
    deleteFoldersRecursive(`${__dirname}/build`);

    return new Promise((resolve, reject) => {
        const script = `${__dirname}/node_modules/typescript/bin/tsc`;
        if (!existsSync(script)) {
            reject(new Error(`Cannot find execution file: ${script}`));
            return;
        }
        const child = fork(script, ['-p', `${__dirname}/tsconfig.build.json`], { stdio: 'pipe', cwd: __dirname });
        child.stdout?.on('data', (data: Buffer) => console.log(data.toString()));
        child.stderr?.on('data', (data: Buffer) => console.error(data.toString()));
        child.on('close', code => (code ? reject(new Error(`tsc exit code: ${code}`)) : resolve()));
    });
}

/** Keep a file, that is used by the admin and by the widgets, in sync. The newer one wins */
function sync2files(src: string, dst: string): void {
    const srcTxt = readFileSync(src).toString('utf8');
    const destTxt = readFileSync(dst).toString('utf8');
    if (srcTxt !== destTxt) {
        const srcs = statSync(src);
        const dest = statSync(dst);
        if (srcs.mtime > dest.mtime) {
            writeFileSync(dst, srcTxt);
        } else {
            writeFileSync(src, destTxt);
        }
    }
}

// --------------------------------------- widgets ---------------------------------------
function cleanWidgets(): void {
    deleteFoldersRecursive(`${srcWidgets}build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
}

function buildWidgets(): Promise<void> {
    // Sync the files, that are shared between src-admin and src-widgets.
    // The React components cannot be synced any longer: src-admin was migrated to TypeScript,
    // React 19 and MUI 9 (*.tsx, @iobroker/gui-components), while src-widgets is still bound to
    // React 18 and MUI 6 by vis-2 (*.jsx, @iobroker/adapter-react-v5).
    // Re-enable this as soon as vis-2 runs on React 19.
    /*sync2files(`${srcWidgets}src/components/DayNightSwitcher.jsx`, `${srcAdmin}src/components/DayNightSwitcher.jsx`);
    sync2files(`${srcWidgets}src/components/DayOfWeekPanel.jsx`, `${srcAdmin}src/components/DayOfWeekPanel.jsx`);
    sync2files(`${srcWidgets}src/components/Interval.jsx`, `${srcAdmin}src/components/Interval.jsx`);
    sync2files(`${srcWidgets}src/components/Intervals.jsx`, `${srcAdmin}src/components/Intervals.jsx`);
    sync2files(
        `${srcWidgets}src/components/IntervalsContainer.jsx`,
        `${srcAdmin}src/components/IntervalsContainer.jsx`,
    );*/
    sync2files(`${srcWidgets}src/data/minmax.json`, `${srcAdmin}src/data/minmax.json`);

    // `rootDir` makes the build take over the version from the root package.json
    return buildReact(srcWidgets, { rootDir: __dirname, vite: true });
}

function copyAllFilesWidgets(): void {
    copyFiles(['src-widgets/build/assets/**/*'], `widgets/${adapterName}/assets`);
    copyFiles(['src-widgets/build/img/**/*'], `widgets/${adapterName}/img`);
    copyFiles(['src-widgets/build/customWidgets.js'], `widgets/${adapterName}`);
}

// ---------------------------------------- admin ----------------------------------------
function cleanAdmin(): void {
    deleteFoldersRecursive(`${__dirname}/admin`, [`${adapterName}.png`]);
}

function npmInstallAdmin(): Promise<void> {
    if (existsSync(`${srcAdmin}node_modules`)) {
        return Promise.resolve();
    }
    return npmInstall(srcAdmin);
}

function buildAdmin(): Promise<void> {
    return buildReact(srcAdmin, { vite: true });
}

function copyAllFilesAdmin(): void {
    // index.html is not copied here, but patched and stored as `admin/index_m.html`
    copyFiles(['src-admin/build/**/*', '!src-admin/build/index.html'], 'admin');
}

async function patch(): Promise<void> {
    await patchHtmlFile(`${srcAdmin}build/index.html`);
    copyFileSync(`${srcAdmin}build/index.html`, `${__dirname}/admin/index_m.html`);
}

// ---------------------------------------- tasks ----------------------------------------
function widgetBuild(): Promise<void> {
    cleanWidgets();
    return npmInstall(srcWidgets)
        .then(() => buildWidgets())
        .then(() => copyAllFilesWidgets());
}

function adminBuild(): Promise<void> {
    cleanAdmin();
    return npmInstallAdmin()
        .then(() => buildAdmin())
        .then(() => copyAllFilesAdmin())
        .then(() => patch());
}

function onError(e: unknown): never {
    console.error(`Cannot build: ${e as Error}`);
    process.exit(1);
}

if (process.argv.includes('--backend-build')) {
    buildBackend().catch(onError);
} else if (process.argv.includes('--0-widget-clean')) {
    cleanWidgets();
} else if (process.argv.includes('--1-widget-npm')) {
    npmInstall(srcWidgets).catch(onError);
} else if (process.argv.includes('--2-widget-compile')) {
    buildWidgets().catch(onError);
} else if (process.argv.includes('--3-widget-copy')) {
    copyAllFilesWidgets();
} else if (process.argv.includes('--widget-build')) {
    widgetBuild().catch(onError);
} else if (process.argv.includes('--0-clean')) {
    cleanAdmin();
} else if (process.argv.includes('--1-npm')) {
    npmInstallAdmin().catch(onError);
} else if (process.argv.includes('--2-build')) {
    buildAdmin().catch(onError);
} else if (process.argv.includes('--3-copy')) {
    copyAllFilesAdmin();
} else if (process.argv.includes('--4-patch')) {
    patch().catch(onError);
} else if (process.argv.includes('--admin-build')) {
    adminBuild().catch(onError);
} else {
    adminBuild()
        .then(() => widgetBuild())
        .then(() => buildBackend())
        .catch(onError);
}
