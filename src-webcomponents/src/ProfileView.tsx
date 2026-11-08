import {
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
    type JSX,
    type KeyboardEvent,
    type PointerEvent,
} from 'react';

import type { WordKey } from './i18n';
import {
    getCurrentInterval,
    getDayNames,
    getIntervalStart,
    snapValue,
    stepValue,
    toFraction,
    type ProfileShown,
    type ProfileValueType,
    type ValueRange,
} from './profile';

/** What the element tells about writing */
export interface ProfileStatus {
    /** Changes are not written yet */
    saving: boolean;
    /** A line below the profile, empty for none */
    text: string;
    kind: '' | 'error' | 'warning';
}

export interface ProfileViewProps {
    title: string;
    profile: ProfileShown;
    range: ValueRange;
    showDow: boolean;
    /** The instance has a holiday state: the holiday button is shown */
    holidayVisible: boolean;
    mondayFirst: boolean;
    /** False in read-only mode, in the editor of the host and without a connection */
    editable: boolean;
    editMode: boolean;
    /** Sample data for the editor of the host */
    sample?: boolean;
    status: ProfileStatus;
    lang: string;
    word: (key: WordKey) => string;
    /** Called once the user is done: the finger or the mouse is lifted, a key pressed */
    onIntervals: (intervals: number[]) => void;
    onDays: (dow: number[], holiday: boolean) => void;
}

/** A drag over the bars: sets the interval it started on, or paints every interval it passes */
interface Drag {
    pointerId: number;
    /** Touch waits for a move or the lift: a sideways swipe scrolls and must change nothing */
    touch: boolean;
    applied: boolean;
    start: number;
    startX: number;
    /** Left edge of the strip and width of one interval, in px of the viewport */
    left: number;
    colWidth: number;
    /** Top and height of the bars, in px of the viewport */
    top: number;
    height: number;
    base: number[];
    values: number[];
    last: number;
    painting: boolean;
    /** The selected intervals, if the drag started on one of them: they all get the value */
    group: number[] | null;
    /** On/off: the value of the whole drag - the opposite of the interval it started on */
    toggled: number | null;
}

/** Values the user moves, shown until the profile shows them */
interface Draft {
    values: number[];
    /** The intervals of the profile when the draft was made */
    base: string;
    dragging: boolean;
}

const SCHEDULE_ICON =
    'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z';

const DAYS_MONDAY_FIRST = [1, 2, 3, 4, 5, 6, 0];
const DAYS_SUNDAY_FIRST = [0, 1, 2, 3, 4, 5, 6];

/** The current time, every 30 seconds: the line of "now" moves on */
function useNow(): Date {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 30000);
        return () => clearInterval(timer);
    }, []);
    return now;
}

/**
 * A value as the vis-2 widget writes it: with its unit, its label or on/off. The unit apart: a narrow interval
 * leaves it out
 *
 * @param value the value
 * @param range the values of the profile
 * @param type the type of the profile
 * @param word the words of the element
 */
function formatValue(
    value: number,
    range: ValueRange,
    type: ProfileValueType,
    word: (key: WordKey) => string,
): { text: string; unit: string } {
    if (type === 'onoff') {
        return { text: word(value ? 'on' : 'off'), unit: '' };
    }
    const mark = range.marks.find(item => item.value === value);
    if (mark) {
        return { text: mark.label, unit: '' };
    }
    return { text: String(Number(value.toFixed(2))), unit: range.unit };
}

/** A hint instead of the profile: nothing chosen, or what is chosen is no profile */
export function Hint({ text, editMode }: { text: string; editMode: boolean }): JSX.Element {
    return (
        <div className={`box${editMode ? ' edit' : ''}`}>
            <div className="hint">
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d={SCHEDULE_ICON} />
                </svg>
                <span>{text}</span>
            </div>
        </div>
    );
}

/**
 * One profile: a bar per interval of the day, its value on top and its time below, and the days of the week beside.
 * A drag up or down sets the value of a bar, a drag across paints all bars passed; a tap on a time selects the
 * interval, and a change of a selected interval changes all selected ones. On/off intervals switch with a tap.
 */
export function ProfileView(props: ProfileViewProps): JSX.Element {
    const { profile, range, word, editable, status } = props;
    const count = profile.intervals.length;
    const duration = profile.intervalDuration;
    const now = useNow();
    const current = getCurrentInterval(now, duration);
    const dayNames = useMemo(() => getDayNames(props.lang), [props.lang]);

    const [draft, setDraft] = useState<Draft | null>(null);
    const [selected, setSelected] = useState<number[]>([]);
    const [focus, setFocus] = useState<number | null>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<Drag | null>(null);

    const intervalsKey = profile.intervals.join(',');
    const draftDone = !!draft && !draft.dragging && draft.base !== intervalsKey;
    if (draftDone) {
        // the profile shows the change now - or it was not saved and is back as it was: the draft is done either way
        setDraft(null);
    }
    const shown = draft && !draftDone ? draft.values : profile.intervals;
    const focusIndex = Math.min(count - 1, Math.max(0, focus ?? current));

    // a long day starts at the current time; later the user scrolls
    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller && scroller.scrollWidth > scroller.clientWidth) {
            const time = new Date();
            const fraction = (time.getHours() + time.getMinutes() / 60) / 24;
            scroller.scrollLeft = Math.max(0, fraction * scroller.scrollWidth - scroller.clientWidth / 2);
        }
    }, []);

    const commit = (values: number[], base: number[]): void => {
        if (values.join(',') === base.join(',')) {
            setDraft(null);
            return;
        }
        setDraft({ values, base: intervalsKey, dragging: false });
        props.onIntervals(values);
    };

    const apply = (drag: Drag, clientX: number, clientY: number): void => {
        drag.applied = true;
        let index = drag.colWidth > 0 ? Math.floor((clientX - drag.left) / drag.colWidth) : drag.start;
        index = Math.min(count - 1, Math.max(0, index));
        if (!drag.painting) {
            if (!drag.group && index !== drag.start && Math.abs(clientX - drag.startX) > drag.colWidth * 0.6) {
                drag.painting = true;
            } else {
                index = drag.start;
            }
        }
        let value = drag.toggled;
        if (value === null) {
            const fraction = drag.height > 0 ? (drag.top + drag.height - clientY) / drag.height : 0;
            value = snapValue(range.min + Math.min(1, Math.max(0, fraction)) * (range.max - range.min), range);
        }
        const values = [...drag.values];
        if (drag.group) {
            drag.group.forEach(i => (values[i] = value));
        } else {
            const from = Math.min(drag.last, index);
            const to = Math.max(drag.last, index);
            for (let i = from; i <= to; i++) {
                values[i] = value;
            }
            drag.last = index;
        }
        drag.values = values;
        setDraft({ values, base: intervalsKey, dragging: true });
    };

    const onPointerDown = (e: PointerEvent<HTMLDivElement>): void => {
        if (!editable || e.button !== 0) {
            return;
        }
        const track = (e.target as Element).closest<HTMLElement>('.track');
        const index = Number(track?.dataset.index);
        if (!track || !Number.isInteger(index)) {
            return;
        }
        const strip = e.currentTarget.getBoundingClientRect();
        const bars = track.getBoundingClientRect();
        const group = selected.includes(index) ? selected : null;
        if (!group && selected.length) {
            setSelected([]);
        }
        const base = [...shown];
        const drag: Drag = {
            pointerId: e.pointerId,
            touch: e.pointerType !== 'mouse',
            applied: false,
            start: index,
            startX: e.clientX,
            left: strip.left,
            colWidth: strip.width / count,
            top: bars.top,
            height: bars.height,
            base,
            values: base,
            last: index,
            painting: false,
            group,
            toggled: profile.type === 'onoff' ? (base[index] ? 0 : 1) : null,
        };
        dragRef.current = drag;
        setFocus(index);
        track.focus({ preventScroll: true });
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
            // the pointer is gone already
        }
        if (!drag.touch) {
            apply(drag, e.clientX, e.clientY);
        }
    };

    const onPointerMove = (e: PointerEvent<HTMLDivElement>): void => {
        const drag = dragRef.current;
        if (drag?.pointerId === e.pointerId) {
            apply(drag, e.clientX, e.clientY);
        }
    };

    const onPointerUp = (e: PointerEvent<HTMLDivElement>): void => {
        const drag = dragRef.current;
        if (drag?.pointerId !== e.pointerId) {
            return;
        }
        if (!drag.applied) {
            // a tap
            apply(drag, e.clientX, e.clientY);
        }
        dragRef.current = null;
        commit(drag.values, drag.base);
    };

    /** The browser took over (a swipe that scrolls) or the pointer is gone: nothing changes */
    const onPointerCancel = (e: PointerEvent<HTMLDivElement>): void => {
        if (dragRef.current?.pointerId === e.pointerId) {
            dragRef.current = null;
            setDraft(null);
        }
    };

    const toggleSelected = (index: number): void => {
        if (editable) {
            setSelected(
                selected.includes(index)
                    ? selected.filter(i => i !== index)
                    : [...selected, index].sort((a, b) => a - b),
            );
        }
    };

    const focusInterval = (index: number): void => {
        setFocus(index);
        scrollerRef.current?.querySelector<HTMLElement>(`.track[data-index="${index}"]`)?.focus();
    };

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number): void => {
        switch (e.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'Home':
            case 'End': {
                const next = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: count - 1 }[e.key];
                if (next >= 0 && next < count) {
                    focusInterval(next);
                }
                break;
            }
            case 'ArrowUp':
            case 'ArrowDown': {
                if (!editable) {
                    return;
                }
                const up = e.key === 'ArrowUp';
                const value = profile.type === 'onoff' ? (up ? 1 : 0) : stepValue(shown[index], range, up);
                const targets = selected.includes(index) ? selected : [index];
                if (!selected.includes(index) && selected.length) {
                    setSelected([]);
                }
                const values = [...shown];
                targets.forEach(i => (values[i] = value));
                commit(values, shown);
                break;
            }
            case ' ':
            case 'Enter':
                toggleSelected(index);
                break;
            default:
                return;
        }
        e.preventDefault();
    };

    const classes = ['box'];
    if (editable) {
        classes.push('editable');
    }
    if (props.editMode) {
        classes.push('edit');
    }
    if (props.sample) {
        classes.push('sample');
    }

    const days = props.mondayFirst ? DAYS_MONDAY_FIRST : DAYS_SUNDAY_FIRST;
    const nowLeft = ((now.getHours() + now.getMinutes() / 60) / 24) * 100;

    return (
        <div className={classes.join(' ')}>
            {status.saving ? (
                <div
                    className="progress"
                    role="progressbar"
                    aria-label={word('saving')}
                />
            ) : null}
            {props.title ? <div className="title">{props.title}</div> : null}
            <div className="main">
                <div className="chart">
                    <div
                        className="scroller"
                        ref={scrollerRef}
                    >
                        <div
                            className={duration < 1 ? 'strip fine' : 'strip'}
                            style={{ '--count': count } as CSSProperties}
                            role="group"
                            aria-label={word('intervals')}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            onPointerCancel={onPointerCancel}
                            onLostPointerCapture={onPointerCancel}
                        >
                            {shown.map((value, i) => {
                                const start = getIntervalStart(i, duration);
                                const formatted = formatValue(value, range, profile.type, word);
                                const label = formatted.text + formatted.unit;
                                const time = `${start.hours}:${start.minutes}`;
                                const colClasses = ['col'];
                                if (i === current) {
                                    colClasses.push('current');
                                }
                                if (selected.includes(i)) {
                                    colClasses.push('selected');
                                }
                                let valueClass = 'value';
                                if (profile.type === 'onoff') {
                                    valueClass += value ? ' on' : ' off';
                                }
                                return (
                                    <div
                                        key={i}
                                        className={colClasses.join(' ')}
                                    >
                                        <div
                                            className={valueClass}
                                            title={label}
                                        >
                                            {formatted.text}
                                            {formatted.unit ? <span className="unit">{formatted.unit}</span> : null}
                                        </div>
                                        <div
                                            className="track"
                                            data-index={i}
                                            role="slider"
                                            tabIndex={i === focusIndex ? 0 : -1}
                                            aria-label={time}
                                            aria-valuemin={range.min}
                                            aria-valuemax={range.max}
                                            aria-valuenow={value}
                                            aria-valuetext={label}
                                            aria-readonly={!editable}
                                            onFocus={() => setFocus(i)}
                                            onKeyDown={e => onKeyDown(e, i)}
                                        >
                                            <div
                                                className="bar"
                                                style={{ height: `${toFraction(value, range) * 100}%` }}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="time"
                                            tabIndex={-1}
                                            disabled={!editable}
                                            aria-pressed={selected.includes(i)}
                                            aria-label={time}
                                            title={editable ? word('select') : time}
                                            onClick={() => toggleSelected(i)}
                                        >
                                            {start.hours}
                                            {duration < 1 ? <small>:{start.minutes}</small> : null}
                                        </button>
                                    </div>
                                );
                            })}
                            <div
                                className="now"
                                style={{ left: `${nowLeft}%` }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
                {props.showDow ? (
                    <div
                        className="days"
                        role="group"
                        aria-label={word('days')}
                    >
                        {days.map(day => {
                            const active = profile.dow.includes(day);
                            return (
                                <button
                                    key={day}
                                    type="button"
                                    className="day"
                                    aria-pressed={active}
                                    disabled={!editable}
                                    title={dayNames[day]}
                                    onClick={() =>
                                        props.onDays(
                                            active ? profile.dow.filter(d => d !== day) : [...profile.dow, day],
                                            profile.holiday,
                                        )
                                    }
                                >
                                    {dayNames[day]}
                                </button>
                            );
                        })}
                        {props.holidayVisible ? (
                            <button
                                type="button"
                                className="day"
                                aria-pressed={profile.holiday}
                                disabled={!editable}
                                title={word('holiday')}
                                onClick={() => props.onDays(profile.dow, !profile.holiday)}
                            >
                                {word('holiday')}
                            </button>
                        ) : null}
                    </div>
                ) : null}
            </div>
            {status.text ? (
                <div
                    className={`status${status.kind ? ` ${status.kind}` : ''}`}
                    role={status.kind === 'error' ? 'alert' : undefined}
                    title={status.text}
                >
                    {status.text}
                </div>
            ) : null}
        </div>
    );
}
