// Module augmentations for the admin GUI.
// (Ambient declarations for untyped packages live in their own *.d.ts files,
// because a file with a top-level export cannot host them.)

declare module '@mui/material/styles' {
    // `theme.ts` adds two adapter specific text colors to the palette.
    // They are optional, because the theme built by GenericApp does not contain them.
    interface TypeText {
        danger?: { color: string };
        success?: { color: string };
    }
}

declare global {
    interface Window {
        adapterName: string | undefined;
        sentryDSN: string | undefined;
        /** Remembers whether a shift-drag over the time labels selects or deselects */
        myselectMode: boolean;
    }

    interface Navigator {
        /** IE/Edge legacy touch detection */
        msMaxTouchPoints?: number;
    }
}

export {};
