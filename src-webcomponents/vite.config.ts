import react from '@vitejs/plugin-react';
import { checkManifest, getReactImportPath, REACT_SPECIFIERS } from '@iobroker/web-components';
import type { Plugin } from 'vite';

// with the extension: Vite may load its config natively, without a bundler that would add it
import { MANIFEST_FILE, MODULE_FILE, MODULE_PATH, profileManifest } from './src/manifest.ts';

/**
 * The web component `<iob-scheduler-profile>`: one ES module, `admin/webcomponents/scheduler-profile.js`, and its
 * manifest `scheduler-profile.json` next to it (`common.webComponents`). Every host - vis-2, devices, Aura, admin -
 * reads them from `/adapter/scheduler/webcomponents/`. No module federation: the host shares nothing but the socket.
 *
 * React is not bundled: the four React imports point at `lib/esm/react-19.js`, which web and admin serve beside
 * `adapter/`. The path is relative to the module, so a path prefix of a reverse proxy stays.
 */

/** Writes `scheduler-profile.json` next to the module, checked like a host checks it */
function manifestFile(): Plugin {
    return {
        name: 'scheduler-web-component-manifest',
        generateBundle() {
            const problem = checkManifest(profileManifest);
            if (problem) {
                this.error(`${MANIFEST_FILE}: ${problem}`);
            }
            this.emitFile({
                type: 'asset',
                fileName: MANIFEST_FILE,
                source: `${JSON.stringify(profileManifest, null, 4)}\n`,
            });
        },
    };
}

const reactImport = getReactImportPath(MODULE_PATH);

export default {
    plugins: [react(), manifestFile()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        target: 'es2022',
        outDir: './build',
        emptyOutDir: true,
        lib: {
            entry: './src/index.tsx',
            formats: ['es'],
            fileName: (): string => MODULE_FILE,
        },
        rollupOptions: {
            external: [...REACT_SPECIFIERS],
            output: {
                paths: Object.fromEntries(REACT_SPECIFIERS.map(specifier => [specifier, reactImport])),
                // one file: a host imports exactly one URL
                codeSplitting: false,
                // library mode keeps whitespace for the bundler of a consumer; this module is loaded as it is
                minify: true,
            },
        },
    },
};
