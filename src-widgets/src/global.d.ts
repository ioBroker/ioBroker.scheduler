// Module augmentations for the vis-2 widgets.
// (The wildcard declarations for static assets live in assets.d.ts,
// because a file with a top-level export cannot host them.)

declare module '@mui/material/styles' {
    // The scheduler theme adds two adapter specific text colors to the palette.
    // They are optional, because the theme delivered by vis-2 does not contain them.
    interface TypeText {
        danger?: { color: string };
        success?: { color: string };
    }
}

declare global {
    interface Window {
        /** Remembers whether a shift-drag over the time labels selects or deselects */
        myselectMode: boolean;
    }

    interface Navigator {
        /** IE/Edge legacy touch detection */
        msMaxTouchPoints?: number;
    }
}

export {};
