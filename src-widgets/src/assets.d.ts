// Ambient declarations for the static assets imported by the components.
// This file must NOT contain a top-level import/export, otherwise the
// wildcard module declarations would be treated as module augmentations.

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}
