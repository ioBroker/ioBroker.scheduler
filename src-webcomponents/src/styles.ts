/**
 * The styles of the shadow root. The element fills the box of the host, has a transparent background and inherits
 * `color` and `font`; the colors of the host come as `--iob-*` variables. Everything scales with the box through
 * container units - nothing is measured.
 *
 * The intervals lie side by side in a strip that is at least as wide as the box and at least `--col-min` per
 * interval: a day of 96 quarter hours scrolls sideways, a day of 24 hours fits the usual box. Every interval is a
 * container of its own, so a narrow one leaves out the unit of its value.
 */
export const STYLES = `
:host {
    display: block;
    width: 100%;
    height: 100%;
}
.mount {
    width: 100%;
    height: 100%;
    /* the size of the box does not depend on what is in it */
    container: box / size;
}
.box {
    --gap: clamp(4px, 1.8cqmin, 10px);
    --fs: clamp(11px, 3.8cqmin, 14px);
    --fs-small: clamp(9px, 3.1cqmin, 12px);
    --col-min: clamp(22px, 6.6cqmin, 42px);
    --time-height: 2.4em;
    --track: color-mix(in srgb, currentColor 9%, transparent);
    --hover: color-mix(in srgb, currentColor 14%, transparent);
    --radius: var(--iob-border-radius, 4px);
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: var(--gap);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    overflow: hidden;
    font-size: var(--fs);
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.box.edit {
    pointer-events: none;
}
.title {
    flex: none;
    font-size: clamp(12px, 4.6cqmin, 17px);
    font-weight: 600;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.main {
    flex: 1;
    min-height: 0;
    display: flex;
    gap: var(--gap);
}
.chart {
    flex: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
}
.sample .chart,
.sample .days {
    opacity: 0.45;
}
.scroller {
    flex: 1;
    min-height: 0;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
}
.strip {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: max(100%, calc(var(--count) * var(--col-min)));
    display: grid;
    grid-template-columns: repeat(var(--count), minmax(0, 1fr));
    /* a sideways swipe scrolls, an up or down drag sets the value */
    touch-action: pan-x;
    /* computed here, against the box: inside an interval the container units would mean the interval */
    font-size: var(--fs-small);
}
/* intervals shorter than an hour carry minutes below them */
.strip.fine {
    --col-min: clamp(30px, 9cqmin, 44px);
}
.col {
    container: interval / inline-size;
    min-width: 0;
    display: flex;
    flex-direction: column;
}
.value {
    flex: none;
    height: 1.7em;
    line-height: 1.7em;
    padding: 0 1px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.value.on {
    color: var(--iob-success);
    font-weight: 600;
}
.value.off {
    color: var(--iob-text-secondary);
}
@container interval (max-width: 27px) {
    .value {
        padding: 0;
        font-size: 0.88em;
        letter-spacing: -0.02em;
    }
    .value .unit {
        display: none;
    }
}
.track {
    position: relative;
    flex: 1;
    min-height: 8px;
    margin: 0 1px;
    border-radius: var(--radius) var(--radius) 0 0;
    background: var(--track);
    outline: none;
}
.editable .track {
    cursor: ns-resize;
}
.editable .track:hover {
    background: var(--hover);
}
.track:focus-visible {
    box-shadow: inset 0 0 0 2px var(--iob-primary);
}
.bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--iob-primary);
    transition: height 80ms ease-out;
}
.col.selected .bar {
    background: color-mix(in srgb, var(--iob-primary) 75%, var(--iob-text));
}
.time {
    flex: none;
    box-sizing: border-box;
    height: var(--time-height);
    margin: 2px 1px 0;
    padding: 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--iob-text-secondary);
    background: none;
    border: none;
    border-radius: var(--radius);
    white-space: nowrap;
    overflow: hidden;
}
.editable .time {
    cursor: pointer;
}
.editable .time:hover {
    background: var(--hover);
}
.time small {
    font-size: 0.78em;
    font-weight: 400;
    opacity: 0.8;
}
.col.current .time {
    color: inherit;
    box-shadow: inset 0 -2px 0 var(--iob-primary);
}
.col.selected .time {
    background: var(--iob-primary);
    color: var(--iob-primary-contrast);
}
.now {
    position: absolute;
    top: 0;
    bottom: calc(var(--time-height) + 2px);
    width: 0;
    margin-left: -1px;
    border-left: 2px dashed currentColor;
    opacity: 0.55;
    pointer-events: none;
}
.days {
    flex: none;
    width: clamp(40px, 13cqmin, 64px);
    display: grid;
    grid-auto-rows: minmax(0, 1fr);
    gap: clamp(2px, 1cqmin, 6px);
}
.day {
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    margin: 0;
    padding: 0 2px;
    font: inherit;
    font-size: var(--fs-small);
    font-weight: 600;
    color: inherit;
    background: transparent;
    border: 1px solid var(--iob-divider);
    border-radius: calc(var(--radius) * 2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.day[aria-pressed='true'] {
    background: var(--iob-primary);
    border-color: var(--iob-primary);
    color: var(--iob-primary-contrast);
}
.editable .day {
    cursor: pointer;
}
.editable .day[aria-pressed='false']:hover {
    background: var(--hover);
}
.editable .day[aria-pressed='true']:hover {
    background: color-mix(in srgb, var(--iob-primary) 85%, var(--iob-text));
}
.day:focus-visible {
    outline: 2px solid var(--iob-primary);
    outline-offset: 1px;
}
/* a narrow box: the days below the intervals, in a row */
@container box (orientation: portrait) {
    .main {
        flex-direction: column;
    }
    .days {
        width: auto;
        height: clamp(28px, 10cqmin, 40px);
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr);
        grid-auto-rows: auto;
    }
}
.status {
    flex: none;
    font-size: var(--fs-small);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--iob-text-secondary);
}
.status.error {
    color: var(--iob-error);
}
.status.warning {
    color: var(--iob-warning);
}
.progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    overflow: hidden;
    background: color-mix(in srgb, var(--iob-primary) 25%, transparent);
}
.progress::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -35%;
    width: 35%;
    background: var(--iob-primary);
    animation: progress 1.2s ease-in-out infinite;
}
@keyframes progress {
    to {
        left: 100%;
    }
}
@media (prefers-reduced-motion: reduce) {
    .progress::after {
        animation: none;
        left: 0;
        width: 100%;
        opacity: 0.6;
    }
    .bar {
        transition: none;
    }
}
.hint {
    margin: auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
    color: var(--iob-text-secondary);
    font-size: clamp(11px, 4.4cqmin, 15px);
}
.hint svg {
    width: clamp(18px, 10cqmin, 32px);
    height: clamp(18px, 10cqmin, 32px);
    fill: currentColor;
    opacity: 0.8;
}
`;
