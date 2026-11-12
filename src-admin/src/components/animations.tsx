/**
 * Own animations of the configuration page. All of them are plain CSS and run only if the user did not ask
 * the system for less motion.
 */
import { type CSSProperties, type JSX } from 'react';
import { SvgIcon, type SxProps, type Theme } from '@mui/material';
import { keyframes } from '@mui/material/styles';

/** Applies the styles only if the user did not ask for less motion */
export function motion(sx: Record<string, any>): Record<string, any> {
    return { '@media (prefers-reduced-motion: no-preference)': sx };
}

/** True if the user asked the system for less motion */
export function prefersReducedMotion(): boolean {
    return !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/** Plays a one-time animation on an element (Web Animations API), unless the user wants less motion */
export function playOnce(
    element: Element | null | undefined,
    frames: Keyframe[],
    options: KeyframeAnimationOptions,
): void {
    if (element && typeof element.animate === 'function' && !prefersReducedMotion()) {
        element.animate(frames, options);
    }
}

/** Short bounce of a button that was switched on or off */
export const BOUNCE_FRAMES: Keyframe[] = [
    { transform: 'scale(1)' },
    { transform: 'scale(0.86)', offset: 0.35 },
    { transform: 'scale(1.07)', offset: 0.7 },
    { transform: 'scale(1)' },
];

/** Content comes in: it fades in and slides up a little */
export const fadeSlideIn = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: none; }
`;

/** Plain fade in, e.g. for a text that changes */
export const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

/** An element appears: it grows from a smaller size and overshoots a little */
export const popIn = keyframes`
    0% { opacity: 0; transform: scale(0.6); }
    70% { opacity: 1; transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
`;

/** A ring grows out of a button to draw attention to it */
export const pulseRing = keyframes`
    0% { box-shadow: 0 0 0 0 var(--iob-pulse-color, rgba(33, 150, 243, 0.55)); }
    70% { box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
`;

/** The line of the current time breathes */
export const breathe = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
`;

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

/** Style for a container whose children come in one after another */
export function staggerChildren(stepMs = 40, durationMs = 300): Record<string, any> {
    const children: Record<string, any> = {};
    for (let i = 1; i <= 12; i++) {
        children[`& > *:nth-of-type(${i})`] = { animationDelay: `${(i - 1) * stepMs}ms` };
    }
    return motion({
        '& > *': {
            animation: `${fadeSlideIn} ${durationMs}ms ease-out both`,
        },
        ...children,
    });
}

/** Gear of the settings button: turns while the mouse is over its button */
export const gearOnHover: Record<string, any> = {
    '& svg': motion({ transition: 'transform 600ms cubic-bezier(.4,1.6,.6,1)' }),
    '&:hover svg, &:focus-visible svg': { transform: 'rotate(90deg)' },
};

/**
 * Clock of the scheduler. `running`: the hands go around continuously (e.g. on the empty page),
 * otherwise they make one round when the mouse is over the icon or over the menu item around it.
 */
export function AnimatedClock(props: { running?: boolean; sx?: SxProps<Theme>; style?: CSSProperties }): JSX.Element {
    const hand = {
        transformOrigin: '12px 12px',
        transformBox: 'view-box',
    };
    return (
        <SvgIcon
            style={props.style}
            sx={[
                {
                    '& .clock-minute': hand,
                    '& .clock-hour': hand,
                    ...motion(
                        props.running
                            ? {
                                  '& .clock-minute': { animation: `${spin} 3s linear infinite` },
                                  '& .clock-hour': { animation: `${spin} 36s linear infinite` },
                              }
                            : {
                                  '& .clock-minute': { transition: 'transform 900ms ease-in-out' },
                                  '& .clock-hour': { transition: 'transform 900ms ease-in-out' },
                                  '&:hover .clock-minute, .flow-menu-item:hover & .clock-minute': {
                                      transform: 'rotate(360deg)',
                                  },
                                  '&:hover .clock-hour, .flow-menu-item:hover & .clock-hour': {
                                      transform: 'rotate(30deg)',
                                  },
                              },
                    ),
                },
                ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
            ]}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
            <line
                className="clock-hour"
                x1="12"
                y1="12"
                x2="12"
                y2="7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                className="clock-minute"
                x1="12"
                y1="12"
                x2="15.5"
                y2="14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </SvgIcon>
    );
}
