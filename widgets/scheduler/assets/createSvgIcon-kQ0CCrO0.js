import { $ as e, Y as t, g as n, h as r, o as i, s as a, tt as o, v as s } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__108432574651544__loadShare__shared-TMCjcIVW.js";
import { Et as c, Ft as l, Gt as u, Ht as d, Kt as f, Mt as p, Pt as m, Qt as h, Rt as g, Ut as _, Vt as v, Wt as y, Zt as b, a as x, en as S, f as C, ft as ee, h as te, ht as ne, l as re, o as w, p as ie, qt as T, s as E, t as D, u as ae, ut as O } from "./createStyled-BG7FRUE4.js";
var k = { black: `#000`, white: `#fff` }, A = { 50: `#ffebee`, 100: `#ffcdd2`, 200: `#ef9a9a`, 300: `#e57373`, 400: `#ef5350`, 500: `#f44336`, 600: `#e53935`, 700: `#d32f2f`, 800: `#c62828`, 900: `#b71c1c`, A100: `#ff8a80`, A200: `#ff5252`, A400: `#ff1744`, A700: `#d50000` }, j = { 50: `#f3e5f5`, 100: `#e1bee7`, 200: `#ce93d8`, 300: `#ba68c8`, 400: `#ab47bc`, 500: `#9c27b0`, 600: `#8e24aa`, 700: `#7b1fa2`, 800: `#6a1b9a`, 900: `#4a148c`, A100: `#ea80fc`, A200: `#e040fb`, A400: `#d500f9`, A700: `#aa00ff` }, M = { 50: `#e3f2fd`, 100: `#bbdefb`, 200: `#90caf9`, 300: `#64b5f6`, 400: `#42a5f5`, 500: `#2196f3`, 600: `#1e88e5`, 700: `#1976d2`, 800: `#1565c0`, 900: `#0d47a1`, A100: `#82b1ff`, A200: `#448aff`, A400: `#2979ff`, A700: `#2962ff` }, N = { 50: `#e1f5fe`, 100: `#b3e5fc`, 200: `#81d4fa`, 300: `#4fc3f7`, 400: `#29b6f6`, 500: `#03a9f4`, 600: `#039be5`, 700: `#0288d1`, 800: `#0277bd`, 900: `#01579b`, A100: `#80d8ff`, A200: `#40c4ff`, A400: `#00b0ff`, A700: `#0091ea` }, P = { 50: `#e8f5e9`, 100: `#c8e6c9`, 200: `#a5d6a7`, 300: `#81c784`, 400: `#66bb6a`, 500: `#4caf50`, 600: `#43a047`, 700: `#388e3c`, 800: `#2e7d32`, 900: `#1b5e20`, A100: `#b9f6ca`, A200: `#69f0ae`, A400: `#00e676`, A700: `#00c853` }, F = { 50: `#fff3e0`, 100: `#ffe0b2`, 200: `#ffcc80`, 300: `#ffb74d`, 400: `#ffa726`, 500: `#ff9800`, 600: `#fb8c00`, 700: `#f57c00`, 800: `#ef6c00`, 900: `#e65100`, A100: `#ffd180`, A200: `#ffab40`, A400: `#ff9100`, A700: `#ff6d00` }, oe = { 50: `#fafafa`, 100: `#f5f5f5`, 200: `#eeeeee`, 300: `#e0e0e0`, 400: `#bdbdbd`, 500: `#9e9e9e`, 600: `#757575`, 700: `#616161`, 800: `#424242`, 900: `#212121`, A100: `#f5f5f5`, A200: `#eeeeee`, A400: `#bdbdbd`, A700: `#616161` }, se = `$$material`;
function ce() {
  return { text: { primary: `rgba(0, 0, 0, 0.87)`, secondary: `rgba(0, 0, 0, 0.6)`, disabled: `rgba(0, 0, 0, 0.38)` }, divider: `rgba(0, 0, 0, 0.12)`, background: { paper: k.white, default: k.white }, action: { active: `rgba(0, 0, 0, 0.54)`, hover: `rgba(0, 0, 0, 0.04)`, hoverOpacity: 0.04, selected: `rgba(0, 0, 0, 0.08)`, selectedOpacity: 0.08, disabled: `rgba(0, 0, 0, 0.26)`, disabledBackground: `rgba(0, 0, 0, 0.12)`, disabledOpacity: 0.38, focus: `rgba(0, 0, 0, 0.12)`, focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
var le = ce();
function ue() {
  return { text: { primary: k.white, secondary: `rgba(255, 255, 255, 0.7)`, disabled: `rgba(255, 255, 255, 0.5)`, icon: `rgba(255, 255, 255, 0.5)` }, divider: `rgba(255, 255, 255, 0.12)`, background: { paper: `#121212`, default: `#121212` }, action: { active: k.white, hover: `rgba(255, 255, 255, 0.08)`, hoverOpacity: 0.08, selected: `rgba(255, 255, 255, 0.16)`, selectedOpacity: 0.16, disabled: `rgba(255, 255, 255, 0.3)`, disabledBackground: `rgba(255, 255, 255, 0.12)`, disabledOpacity: 0.38, focus: `rgba(255, 255, 255, 0.12)`, focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
var I = ue();
function de(e2, t2, n2, r2) {
  let i2 = r2.light || r2, a2 = r2.dark || r2 * 1.5;
  e2[t2] || (e2.hasOwnProperty(n2) ? e2[t2] = e2[n2] : t2 === `light` ? e2.light = d(e2.main, i2) : t2 === `dark` && (e2.dark = l(e2.main, a2)));
}
function fe(e2, t2, n2, r2, i2) {
  let a2 = i2.light || i2, o2 = i2.dark || i2 * 1.5;
  t2[n2] || (t2.hasOwnProperty(r2) ? t2[n2] = t2[r2] : n2 === `light` ? t2.light = `color-mix(in ${e2}, ${t2.main}, #fff ${(a2 * 100).toFixed(0)}%)` : n2 === `dark` && (t2.dark = `color-mix(in ${e2}, ${t2.main}, #000 ${(o2 * 100).toFixed(0)}%)`));
}
function pe(e2 = `light`) {
  return e2 === `dark` ? { main: M[200], light: M[50], dark: M[400] } : { main: M[700], light: M[400], dark: M[800] };
}
function me(e2 = `light`) {
  return e2 === `dark` ? { main: j[200], light: j[50], dark: j[400] } : { main: j[500], light: j[300], dark: j[700] };
}
function he(e2 = `light`) {
  return e2 === `dark` ? { main: A[500], light: A[300], dark: A[700] } : { main: A[700], light: A[400], dark: A[800] };
}
function ge(e2 = `light`) {
  return e2 === `dark` ? { main: N[400], light: N[300], dark: N[700] } : { main: N[700], light: N[500], dark: N[900] };
}
function _e(e2 = `light`) {
  return e2 === `dark` ? { main: P[400], light: P[300], dark: P[700] } : { main: P[800], light: P[500], dark: P[900] };
}
function ve(e2 = `light`) {
  return e2 === `dark` ? { main: F[400], light: F[300], dark: F[700] } : { main: `#ed6c02`, light: F[500], dark: F[900] };
}
function ye(e2) {
  return `oklch(from ${e2} var(--__l) 0 h / var(--__a))`;
}
function L(e2) {
  let { mode: t2 = `light`, contrastThreshold: n2 = 3, tonalOffset: r2 = 0.2, colorSpace: i2, ...a2 } = e2, o2 = e2.primary || pe(t2), s2 = e2.secondary || me(t2), c2 = e2.error || he(t2), l2 = e2.info || ge(t2), u2 = e2.success || _e(t2), d2 = e2.warning || ve(t2);
  function f2(e3) {
    return i2 ? ye(e3) : g(e3, I.text.primary) >= n2 ? I.text.primary : le.text.primary;
  }
  let p2 = ({ color: e3, name: t3, mainShade: n3 = 500, lightShade: a3 = 300, darkShade: o3 = 700 }) => {
    if (e3 = { ...e3 }, !e3.main && e3[n3] && (e3.main = e3[n3]), !e3.hasOwnProperty(`main`)) throw Error(S(11, t3 ? ` (${t3})` : ``, n3));
    if (typeof e3.main != `string`) throw Error(S(12, t3 ? ` (${t3})` : ``, JSON.stringify(e3.main)));
    return i2 ? (fe(i2, e3, `light`, a3, r2), fe(i2, e3, `dark`, o3, r2)) : (de(e3, `light`, a3, r2), de(e3, `dark`, o3, r2)), e3.contrastText || (e3.contrastText = f2(e3.main)), e3;
  }, m2;
  return t2 === `light` ? m2 = ce() : t2 === `dark` && (m2 = ue()), b({ common: { ...k }, mode: t2, primary: p2({ color: o2, name: `primary` }), secondary: p2({ color: s2, name: `secondary`, mainShade: `A400`, lightShade: `A200`, darkShade: `A700` }), error: p2({ color: c2, name: `error` }), warning: p2({ color: d2, name: `warning` }), info: p2({ color: l2, name: `info` }), success: p2({ color: u2, name: `success` }), grey: oe, contrastThreshold: n2, getContrastText: f2, augmentColor: p2, tonalOffset: r2, ...m2 }, a2);
}
var R = `--_focusVisible-offset`, z = `--_focusVisible-behavior`, be = `--_focusVisible-shadow`, xe = `var(${R}, 1)`, Se = `var(${z}, )`, Ce = { [R]: 1, [z]: `initial` };
function we(e2) {
  return { [be]: e2 };
}
function Te(e2) {
  return { [R]: -e2, [z]: `inset` };
}
function Ee(e2, t2) {
  return t2.reduce((e3, t3) => t3 && `focusVisible` in t3 ? b(e3, { focusVisible: t3.focusVisible }) : e3, { focusVisible: e2 }).focusVisible;
}
function De(e2) {
  return typeof e2 == `object` && !!e2 && typeof e2.outlineOffset == `string` && e2.outlineOffset.includes(R);
}
function B(e2, t2) {
  return Oe({ outlineStyle: `solid`, outlineColor: t2, outlineWidth: 2, outlineOffset: 2, boxShadow: `var(${be}, 0 0)`, ...e2 === true ? null : e2 });
}
function Oe(e2) {
  let t2 = e2.outlineOffset ?? 0;
  (typeof t2 != `string` || !t2.includes(R)) && (e2.outlineOffset = `calc(${xe} * ${typeof t2 == `number` ? `${t2}px` : t2})`);
  let n2 = /* @__PURE__ */ new Set([`none`, `initial`, `inherit`, `unset`, `revert`, `revert-layer`]);
  return typeof e2.boxShadow == `string` && !n2.has(e2.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e2.boxShadow) && !e2.boxShadow.includes(z) && (e2.boxShadow = `${Se} ${e2.boxShadow}`), e2;
}
function ke(e2) {
  let t2 = {};
  return Object.entries(e2).forEach((e3) => {
    let [n2, r2] = e3;
    typeof r2 == `object` && (t2[n2] = `${r2.fontStyle ? `${r2.fontStyle} ` : ``}${r2.fontVariant ? `${r2.fontVariant} ` : ``}${r2.fontWeight ? `${r2.fontWeight} ` : ``}${r2.fontStretch ? `${r2.fontStretch} ` : ``}${r2.fontSize || ``}${r2.lineHeight ? `/${r2.lineHeight} ` : ``}${r2.fontFamily || ``}`);
  }), t2;
}
function Ae(e2, t2) {
  return { toolbar: { minHeight: 56, [e2.up(`xs`)]: { "@media (orientation: landscape)": { minHeight: 48 } }, [e2.up(`sm`)]: { minHeight: 64 } }, ...t2 };
}
function je(e2) {
  return Math.round(e2 * 1e5) / 1e5;
}
var V = { textTransform: `uppercase` }, H = `"Roboto", "Helvetica", "Arial", sans-serif`;
function Me(e2, t2) {
  let { fontFamily: n2 = H, fontSize: r2 = 14, fontWeightLight: i2 = 300, fontWeightRegular: a2 = 400, fontWeightMedium: o2 = 500, fontWeightBold: s2 = 700, htmlFontSize: c2 = 16, allVariants: l2, pxToRem: u2, ...d2 } = typeof t2 == `function` ? t2(e2) : t2, f2 = r2 / 14, p2 = u2 || ((e3) => `${e3 / c2 * f2}rem`), m2 = (e3, t3, r3, i3, a3) => ({ fontFamily: n2, fontWeight: e3, fontSize: p2(t3), lineHeight: r3, ...n2 === H ? { letterSpacing: `${je(i3 / t3)}em` } : {}, ...a3, ...l2 }), h2 = { h1: m2(i2, 96, 1.167, -1.5), h2: m2(i2, 60, 1.2, -0.5), h3: m2(a2, 48, 1.167, 0), h4: m2(a2, 34, 1.235, 0.25), h5: m2(a2, 24, 1.334, 0), h6: m2(o2, 20, 1.6, 0.15), subtitle1: m2(a2, 16, 1.75, 0.15), subtitle2: m2(o2, 14, 1.57, 0.1), body1: m2(a2, 16, 1.5, 0.15), body2: m2(a2, 14, 1.43, 0.15), button: m2(o2, 14, 1.75, 0.4, V), caption: m2(a2, 12, 1.66, 0.4), overline: m2(a2, 12, 2.66, 1, V), inherit: { fontFamily: `inherit`, fontWeight: `inherit`, fontSize: `inherit`, lineHeight: `inherit`, letterSpacing: `inherit` } };
  return b({ htmlFontSize: c2, pxToRem: p2, fontFamily: n2, fontSize: r2, fontWeightLight: i2, fontWeightRegular: a2, fontWeightMedium: o2, fontWeightBold: s2, ...h2 }, d2, { clone: false });
}
var Ne = 0.2, Pe = 0.14, Fe = 0.12;
function U(...e2) {
  return [`${e2[0]}px ${e2[1]}px ${e2[2]}px ${e2[3]}px rgba(0,0,0,${Ne})`, `${e2[4]}px ${e2[5]}px ${e2[6]}px ${e2[7]}px rgba(0,0,0,${Pe})`, `${e2[8]}px ${e2[9]}px ${e2[10]}px ${e2[11]}px rgba(0,0,0,${Fe})`].join(`,`);
}
var Ie = [`none`, U(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), U(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), U(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), U(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), U(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), U(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), U(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), U(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), U(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), U(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), U(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), U(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), U(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), U(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), U(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), U(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), U(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), U(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), U(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), U(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), U(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), U(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), U(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), U(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Le = [`all`], Re = {}, ze = { easeInOut: `cubic-bezier(0.4, 0, 0.2, 1)`, easeOut: `cubic-bezier(0.0, 0, 0.2, 1)`, easeIn: `cubic-bezier(0.4, 0, 1, 1)`, sharp: `cubic-bezier(0.4, 0, 0.6, 1)` }, Be = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Ve(e2) {
  return `${Math.round(e2)}ms`;
}
function He(e2) {
  if (!e2) return 0;
  let t2 = e2 / 36;
  return Math.min(Math.round((4 + 15 * t2 ** 0.25 + t2 / 5) * 10), 3e3);
}
function Ue(e2) {
  let t2 = { ...e2 };
  delete t2.reducedMotion;
  let n2 = { ...ze, ...t2.easing }, r2 = { ...Be, ...t2.duration };
  return { getAutoHeightDuration: He, create: t2.create ?? ((e3 = Le, t3 = Re) => {
    let { duration: i2 = r2.standard, easing: a2 = n2.easeInOut, delay: o2 = 0, ...s2 } = t3;
    return (Array.isArray(e3) ? e3 : [e3]).map((e4) => `${e4} ${typeof i2 == `string` ? i2 : Ve(i2)} ${a2} ${typeof o2 == `string` ? o2 : Ve(o2)}`).join(`,`);
  }), ...t2, easing: n2, duration: r2 };
}
var We = {};
function Ge(e2 = We) {
  return { reducedMotion: `never`, ...e2 };
}
var Ke = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function qe(e2) {
  return h(e2) || e2 === void 0 || typeof e2 == `string` || typeof e2 == `boolean` || typeof e2 == `number` || Array.isArray(e2);
}
function Je(e2 = {}) {
  let t2 = { ...e2 };
  function n2(e3) {
    let t3 = Object.entries(e3);
    for (let r2 = 0; r2 < t3.length; r2++) {
      let [i2, a2] = t3[r2];
      !qe(a2) || i2.startsWith(`unstable_`) || i2.startsWith(`internal_`) ? delete e3[i2] : h(a2) && (e3[i2] = { ...a2 }, n2(e3[i2]));
    }
  }
  return n2(t2), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t2, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ye(e2) {
  return typeof e2 == `number` ? `${(e2 * 100).toFixed(0)}%` : `calc((${e2}) * 100%)`;
}
var Xe = (e2) => {
  if (!Number.isNaN(+e2)) return +e2;
  let t2 = e2.match(/\d*\.?\d+/g);
  if (!t2) return 0;
  let n2 = 0;
  for (let e3 = 0; e3 < t2.length; e3 += 1) n2 += +t2[e3];
  return n2;
};
function Ze(e2) {
  return e2.startsWith(`hsl`) ? v(e2) : e2;
}
function Qe(e2, t2, n2 = ``) {
  let r2 = n2.trim();
  if (r2 && !r2.startsWith(`color(`)) try {
    let e3 = m(Ze(r2));
    if (e3.split(` `).length === 3 && !e3.includes(`NaN`)) return `var(--${t2}Channel, ${e3})`;
  } catch {
  }
  return `var(--${t2}Channel)`;
}
function $e(e2) {
  Object.assign(e2, { alpha(t2, n2) {
    let r2 = this || e2;
    if (r2.colorSpace) return `oklch(from ${t2} l c h / ${typeof n2 == `string` ? `calc(${n2})` : n2})`;
    if (r2.vars) {
      let e3 = typeof n2 == `string` ? `calc(${n2})` : n2;
      return t2.startsWith(`color(`) ? t2.replace(/\s*(?:\/[^)]*)?\)$/, ` / ${e3})`) : `rgba(${t2.includes(`var(`) ? t2.replace(/var\(--([^,\s)]+)(?:,((?:[^()]|\([^()]*\))+)\)|(?:,[^)]+)?\)+)/g, Qe) : y(Ze(t2))} / ${e3})`;
    }
    return p(t2, Xe(n2));
  }, lighten(t2, n2) {
    let r2 = this || e2;
    return r2.colorSpace ? `color-mix(in ${r2.colorSpace}, ${t2}, #fff ${Ye(n2)})` : d(t2, n2);
  }, darken(t2, n2) {
    let r2 = this || e2;
    return r2.colorSpace ? `color-mix(in ${r2.colorSpace}, ${t2}, #000 ${Ye(n2)})` : l(t2, n2);
  } });
}
function W(e2 = {}, ...t2) {
  let { breakpoints: n2, mixins: r2 = {}, spacing: i2, palette: a2 = {}, motion: o2 = {}, transitions: s2 = {}, typography: c2 = {}, shape: l2, colorSpace: u2, ...d2 } = e2;
  if (e2.vars && e2.generateThemeVars === void 0) throw Error(S(22));
  let f2 = L({ ...a2, colorSpace: u2 }), p2 = C(e2), m2 = b(p2, { mixins: Ae(p2.breakpoints, r2), palette: f2, shadows: Ie.slice(), typography: Me(f2, c2), motion: Ge(o2), transitions: Ue(s2), zIndex: { ...Ke } });
  return m2 = b(m2, d2), m2 = t2.reduce((e3, t3) => b(e3, t3), m2), delete m2.transitions.reducedMotion, m2.focusVisible != null && m2.focusVisible !== false && (m2.focusVisible = B(m2.focusVisible, m2.palette.primary.main)), m2.unstable_sxConfig = { ...te, ...d2 == null ? void 0 : d2.unstable_sxConfig }, m2.unstable_sx = function(e3) {
    return ie({ sx: e3, theme: this });
  }, m2.toRuntimeSource = Je, $e(m2), m2;
}
function et(e2) {
  let t2;
  return t2 = e2 < 1 ? 5.11916 * e2 ** 2 : 4.5 * Math.log(e2 + 1) + 2, Math.round(t2 * 10) / 1e3;
}
var tt = [...Array(25)].map((e2, t2) => {
  if (t2 === 0) return `none`;
  let n2 = et(t2);
  return `linear-gradient(rgba(255 255 255 / ${n2}), rgba(255 255 255 / ${n2}))`;
});
function nt(e2) {
  return { inputPlaceholder: e2 === `dark` ? 0.5 : 0.42, inputUnderline: e2 === `dark` ? 0.7 : 0.42, switchTrackDisabled: e2 === `dark` ? 0.2 : 0.12, switchTrack: e2 === `dark` ? 0.3 : 0.38 };
}
function rt(e2) {
  return e2 === `dark` ? tt : [];
}
function G(e2) {
  let { palette: t2 = { mode: `light` }, opacity: n2, overlays: r2, colorSpace: i2, ...a2 } = e2, o2 = L({ ...t2, colorSpace: i2 });
  return { palette: o2, opacity: { ...nt(o2.mode), ...n2 }, overlays: r2 || rt(o2.mode), ...a2 };
}
function it(e2) {
  var _a;
  return e2[0] === `motion` || e2[0] === `focusVisible` || !!e2[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e2[0].match(/sxConfig$/) || e2[0] === `palette` && !!((_a = e2[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
var at = (e2) => [...[...Array(25)].map((t2, n2) => `--${e2 ? `${e2}-` : ``}overlays-${n2}`), `--${e2 ? `${e2}-` : ``}palette-AppBar-darkBg`, `--${e2 ? `${e2}-` : ``}palette-AppBar-darkColor`], ot = (e2) => (t2, n2) => {
  let r2 = e2.rootSelector || `:root`, i2 = e2.colorSchemeSelector, a2 = i2;
  if (i2 === `class` && (a2 = `.%s`), i2 === `data` && (a2 = `[data-%s]`), (i2 == null ? void 0 : i2.startsWith(`data-`)) && !i2.includes(`%s`) && (a2 = `[${i2}="%s"]`), e2.defaultColorScheme === t2) {
    if (t2 === `dark`) {
      let i3 = {};
      return at(e2.cssVarPrefix).forEach((e3) => {
        i3[e3] = n2[e3], delete n2[e3];
      }), a2 === `media` ? { [r2]: n2, "@media (prefers-color-scheme: dark)": { [r2]: i3 } } : a2 ? { [a2.replace(`%s`, t2)]: i3, [`${r2}, ${a2.replace(`%s`, t2)}`]: n2 } : { [r2]: { ...n2, ...i3 } };
    }
    if (a2 && a2 !== `media`) return `${r2}, ${a2.replace(`%s`, String(t2))}`;
  } else if (t2) {
    if (a2 === `media`) return { [`@media (prefers-color-scheme: ${String(t2)})`]: { [r2]: n2 } };
    if (a2) return a2.replace(`%s`, String(t2));
  }
  return r2;
};
function st(e2, t2) {
  t2.forEach((t3) => {
    e2[t3] || (e2[t3] = {});
  });
}
function K(e2, t2, n2) {
  !e2[t2] && n2 && (e2[t2] = n2);
}
function q(e2) {
  return typeof e2 != `string` || !e2.startsWith(`hsl`) ? e2 : v(e2);
}
function J(e2, t2) {
  `${t2}Channel` in e2 || (e2[`${t2}Channel`] = y(q(e2[t2]), `MUI: Can't create \`palette.${t2}Channel\` because \`palette.${t2}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t2}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ct(e2) {
  return typeof e2 == `number` ? `${e2}px` : typeof e2 == `string` || typeof e2 == `function` || Array.isArray(e2) ? e2 : `8px`;
}
var Y = (e2) => {
  try {
    return e2();
  } catch {
  }
}, lt = (e2 = `mui`) => o(e2);
function X(e2, t2, n2, r2, i2) {
  if (!n2) return;
  n2 = n2 === true ? {} : n2;
  let a2 = i2 === `dark` ? `dark` : `light`;
  if (!r2) {
    t2[i2] = G({ ...n2, palette: { mode: a2, ...n2 == null ? void 0 : n2.palette }, colorSpace: e2 });
    return;
  }
  let { palette: o2, ...s2 } = W({ ...r2, palette: { mode: a2, ...n2 == null ? void 0 : n2.palette }, colorSpace: e2 });
  return t2[i2] = { ...n2, palette: o2, opacity: { ...nt(a2), ...n2 == null ? void 0 : n2.opacity }, overlays: (n2 == null ? void 0 : n2.overlays) || rt(a2) }, s2;
}
function ut(e2 = {}, ...n2) {
  let { colorSchemes: r2 = { light: true }, defaultColorScheme: i2, disableCssColorScheme: a2 = false, cssVarPrefix: o2 = `mui`, nativeColor: s2 = false, shouldSkipGeneratingVar: c2 = it, colorSchemeSelector: l2 = r2.light && r2.dark ? `media` : void 0, rootSelector: d2 = `:root`, ...p2 } = e2, m2 = Object.keys(r2)[0], h2 = i2 || (r2.light && m2 !== `light` ? `light` : m2), g2 = lt(o2), { [h2]: v2, light: x2, dark: C2, ...ee2 } = r2, w2 = { ...ee2 }, E2 = v2;
  if ((h2 === `dark` && !(`dark` in r2) || h2 === `light` && !(`light` in r2)) && (E2 = true), !E2) throw Error(S(21, h2));
  let D2;
  s2 && (D2 = `oklch`);
  let O2 = X(D2, w2, E2, p2, h2);
  x2 && !w2.light && X(D2, w2, x2, void 0, `light`), C2 && !w2.dark && X(D2, w2, C2, void 0, `dark`);
  let k2 = { defaultColorScheme: h2, ...O2, cssVarPrefix: o2, colorSchemeSelector: l2, rootSelector: d2, getCssVar: g2, colorSchemes: w2, font: { ...ke(O2.typography), ...O2.font }, spacing: ct(p2.spacing) };
  Object.keys(k2.colorSchemes).forEach((e3) => {
    let t2 = k2.colorSchemes[e3].palette, n3 = (e4) => {
      let n4 = e4.split(`-`), r4 = n4[1], i3 = n4[2];
      return g2(e4, t2[r4][i3]);
    };
    t2.mode === `light` && (K(t2.common, `background`, `#fff`), K(t2.common, `onBackground`, `#000`)), t2.mode === `dark` && (K(t2.common, `background`, `#000`), K(t2.common, `onBackground`, `#fff`)), s2 || J(t2.text, `primary`);
    function r3(e4, t3, n4) {
      if (D2) {
        let r4;
        return e4 === _ && (r4 = `transparent ${((1 - n4) * 100).toFixed(0)}%`), e4 === u && (r4 = `#000 ${(n4 * 100).toFixed(0)}%`), e4 === T && (r4 = `#fff ${(n4 * 100).toFixed(0)}%`), `color-mix(in ${D2}, ${t3}, ${r4})`;
      }
      return e4(t3, n4);
    }
    if (st(t2, [`Alert`, `AppBar`, `Avatar`, `Button`, `Chip`, `FilledInput`, `Input`, `LinearProgress`, `Skeleton`, `Slider`, `SnackbarContent`, `SpeedDialAction`, `StepConnector`, `StepContent`, `Switch`, `TableCell`, `Tooltip`]), t2.mode === `light`) {
      K(t2.Alert, `errorColor`, r3(u, s2 ? g2(`palette-error-light`) : t2.error.light, 0.6)), K(t2.Alert, `infoColor`, r3(u, s2 ? g2(`palette-info-light`) : t2.info.light, 0.6)), K(t2.Alert, `successColor`, r3(u, s2 ? g2(`palette-success-light`) : t2.success.light, 0.6)), K(t2.Alert, `warningColor`, r3(u, s2 ? g2(`palette-warning-light`) : t2.warning.light, 0.6)), K(t2.Alert, `errorFilledBg`, n3(`palette-error-main`)), K(t2.Alert, `infoFilledBg`, n3(`palette-info-main`)), K(t2.Alert, `successFilledBg`, n3(`palette-success-main`)), K(t2.Alert, `warningFilledBg`, n3(`palette-warning-main`)), K(t2.Alert, `errorFilledColor`, Y(() => t2.getContrastText(t2.error.main))), K(t2.Alert, `infoFilledColor`, Y(() => t2.getContrastText(t2.info.main))), K(t2.Alert, `successFilledColor`, Y(() => t2.getContrastText(t2.success.main))), K(t2.Alert, `warningFilledColor`, Y(() => t2.getContrastText(t2.warning.main))), K(t2.Alert, `errorStandardBg`, r3(T, s2 ? g2(`palette-error-light`) : t2.error.light, 0.9)), K(t2.Alert, `infoStandardBg`, r3(T, s2 ? g2(`palette-info-light`) : t2.info.light, 0.9)), K(t2.Alert, `successStandardBg`, r3(T, s2 ? g2(`palette-success-light`) : t2.success.light, 0.9)), K(t2.Alert, `warningStandardBg`, r3(T, s2 ? g2(`palette-warning-light`) : t2.warning.light, 0.9)), K(t2.Alert, `errorIconColor`, n3(`palette-error-main`)), K(t2.Alert, `infoIconColor`, n3(`palette-info-main`)), K(t2.Alert, `successIconColor`, n3(`palette-success-main`)), K(t2.Alert, `warningIconColor`, n3(`palette-warning-main`)), K(t2.AppBar, `defaultBg`, n3(`palette-grey-100`)), K(t2.Avatar, `defaultBg`, n3(`palette-grey-400`)), K(t2.Button, `inheritContainedBg`, n3(`palette-grey-300`)), K(t2.Button, `inheritContainedHoverBg`, n3(`palette-grey-A100`)), K(t2.Chip, `defaultBorder`, n3(`palette-grey-400`)), K(t2.Chip, `defaultAvatarColor`, n3(`palette-grey-700`)), K(t2.Chip, `defaultIconColor`, n3(`palette-grey-700`)), K(t2.FilledInput, `bg`, `rgba(0, 0, 0, 0.06)`), K(t2.FilledInput, `hoverBg`, `rgba(0, 0, 0, 0.09)`), K(t2.FilledInput, `disabledBg`, `rgba(0, 0, 0, 0.12)`), K(t2.Input, `autofillWebkitBoxShadow`, `none`), K(t2.LinearProgress, `primaryBg`, r3(T, s2 ? g2(`palette-primary-main`) : t2.primary.main, 0.62)), K(t2.LinearProgress, `secondaryBg`, r3(T, s2 ? g2(`palette-secondary-main`) : t2.secondary.main, 0.62)), K(t2.LinearProgress, `errorBg`, r3(T, s2 ? g2(`palette-error-main`) : t2.error.main, 0.62)), K(t2.LinearProgress, `infoBg`, r3(T, s2 ? g2(`palette-info-main`) : t2.info.main, 0.62)), K(t2.LinearProgress, `successBg`, r3(T, s2 ? g2(`palette-success-main`) : t2.success.main, 0.62)), K(t2.LinearProgress, `warningBg`, r3(T, s2 ? g2(`palette-warning-light`) : t2.warning.main, 0.62)), K(t2.Skeleton, `bg`, D2 ? r3(_, s2 ? g2(`palette-text-primary`) : t2.text.primary, 0.11) : `rgba(${n3(`palette-text-primaryChannel`)} / 0.11)`), K(t2.Slider, `primaryTrack`, r3(T, s2 ? g2(`palette-primary-main`) : t2.primary.main, 0.62)), K(t2.Slider, `secondaryTrack`, r3(T, s2 ? g2(`palette-secondary-main`) : t2.secondary.main, 0.62)), K(t2.Slider, `errorTrack`, r3(T, s2 ? g2(`palette-error-main`) : t2.error.main, 0.62)), K(t2.Slider, `infoTrack`, r3(T, s2 ? g2(`palette-info-main`) : t2.info.main, 0.62)), K(t2.Slider, `successTrack`, r3(T, s2 ? g2(`palette-success-main`) : t2.success.main, 0.62)), K(t2.Slider, `warningTrack`, r3(T, s2 ? g2(`palette-warning-main`) : t2.warning.main, 0.62));
      let e4 = D2 ? r3(u, s2 ? g2(`palette-background-default`) : t2.background.default, 0.6825) : f(t2.background.default, 0.8);
      K(t2.SnackbarContent, `bg`, e4), K(t2.SnackbarContent, `color`, Y(() => D2 ? I.text.primary : t2.getContrastText(e4))), K(t2.SpeedDialAction, `fabHoverBg`, f(t2.background.paper, 0.15)), K(t2.StepConnector, `border`, n3(`palette-grey-400`)), K(t2.StepContent, `border`, n3(`palette-grey-400`)), K(t2.Switch, `defaultColor`, n3(`palette-common-white`)), K(t2.Switch, `defaultDisabledColor`, n3(`palette-grey-100`)), K(t2.Switch, `primaryDisabledColor`, r3(T, s2 ? g2(`palette-primary-main`) : t2.primary.main, 0.62)), K(t2.Switch, `secondaryDisabledColor`, r3(T, s2 ? g2(`palette-secondary-main`) : t2.secondary.main, 0.62)), K(t2.Switch, `errorDisabledColor`, r3(T, s2 ? g2(`palette-error-main`) : t2.error.main, 0.62)), K(t2.Switch, `infoDisabledColor`, r3(T, s2 ? g2(`palette-info-main`) : t2.info.main, 0.62)), K(t2.Switch, `successDisabledColor`, r3(T, s2 ? g2(`palette-success-main`) : t2.success.main, 0.62)), K(t2.Switch, `warningDisabledColor`, r3(T, s2 ? g2(`palette-warning-main`) : t2.warning.main, 0.62)), K(t2.TableCell, `border`, r3(T, _(s2 ? g2(`palette-divider`) : t2.divider, 1), 0.88)), K(t2.Tooltip, `bg`, r3(_, s2 ? g2(`palette-grey-700`) : t2.grey[700], 0.92));
    }
    if (t2.mode === `dark`) {
      K(t2.Alert, `errorColor`, r3(T, s2 ? g2(`palette-error-light`) : t2.error.light, 0.6)), K(t2.Alert, `infoColor`, r3(T, s2 ? g2(`palette-info-light`) : t2.info.light, 0.6)), K(t2.Alert, `successColor`, r3(T, s2 ? g2(`palette-success-light`) : t2.success.light, 0.6)), K(t2.Alert, `warningColor`, r3(T, s2 ? g2(`palette-warning-light`) : t2.warning.light, 0.6)), K(t2.Alert, `errorFilledBg`, n3(`palette-error-dark`)), K(t2.Alert, `infoFilledBg`, n3(`palette-info-dark`)), K(t2.Alert, `successFilledBg`, n3(`palette-success-dark`)), K(t2.Alert, `warningFilledBg`, n3(`palette-warning-dark`)), K(t2.Alert, `errorFilledColor`, Y(() => t2.getContrastText(t2.error.dark))), K(t2.Alert, `infoFilledColor`, Y(() => t2.getContrastText(t2.info.dark))), K(t2.Alert, `successFilledColor`, Y(() => t2.getContrastText(t2.success.dark))), K(t2.Alert, `warningFilledColor`, Y(() => t2.getContrastText(t2.warning.dark))), K(t2.Alert, `errorStandardBg`, r3(u, s2 ? g2(`palette-error-light`) : t2.error.light, 0.9)), K(t2.Alert, `infoStandardBg`, r3(u, s2 ? g2(`palette-info-light`) : t2.info.light, 0.9)), K(t2.Alert, `successStandardBg`, r3(u, s2 ? g2(`palette-success-light`) : t2.success.light, 0.9)), K(t2.Alert, `warningStandardBg`, r3(u, s2 ? g2(`palette-warning-light`) : t2.warning.light, 0.9)), K(t2.Alert, `errorIconColor`, n3(`palette-error-main`)), K(t2.Alert, `infoIconColor`, n3(`palette-info-main`)), K(t2.Alert, `successIconColor`, n3(`palette-success-main`)), K(t2.Alert, `warningIconColor`, n3(`palette-warning-main`)), K(t2.AppBar, `defaultBg`, n3(`palette-grey-900`)), K(t2.AppBar, `darkBg`, n3(`palette-background-paper`)), K(t2.AppBar, `darkColor`, n3(`palette-text-primary`)), K(t2.Avatar, `defaultBg`, n3(`palette-grey-600`)), K(t2.Button, `inheritContainedBg`, n3(`palette-grey-800`)), K(t2.Button, `inheritContainedHoverBg`, n3(`palette-grey-700`)), K(t2.Chip, `defaultBorder`, n3(`palette-grey-700`)), K(t2.Chip, `defaultAvatarColor`, n3(`palette-grey-300`)), K(t2.Chip, `defaultIconColor`, n3(`palette-grey-300`)), K(t2.FilledInput, `bg`, `rgba(255, 255, 255, 0.09)`), K(t2.FilledInput, `hoverBg`, `rgba(255, 255, 255, 0.13)`), K(t2.FilledInput, `disabledBg`, `rgba(255, 255, 255, 0.12)`), K(t2.Input, `autofillWebkitBoxShadow`, `0 0 0 100px #266798 inset`), K(t2.LinearProgress, `primaryBg`, r3(u, s2 ? g2(`palette-primary-main`) : t2.primary.main, 0.5)), K(t2.LinearProgress, `secondaryBg`, r3(u, s2 ? g2(`palette-secondary-main`) : t2.secondary.main, 0.5)), K(t2.LinearProgress, `errorBg`, r3(u, s2 ? g2(`palette-error-main`) : t2.error.main, 0.5)), K(t2.LinearProgress, `infoBg`, r3(u, s2 ? g2(`palette-info-main`) : t2.info.main, 0.5)), K(t2.LinearProgress, `successBg`, r3(u, s2 ? g2(`palette-success-main`) : t2.success.main, 0.5)), K(t2.LinearProgress, `warningBg`, r3(u, s2 ? g2(`palette-warning-main`) : t2.warning.main, 0.5)), K(t2.Skeleton, `bg`, D2 ? r3(_, s2 ? g2(`palette-text-primary`) : t2.text.primary, 0.13) : `rgba(${n3(`palette-text-primaryChannel`)} / 0.13)`), K(t2.Slider, `primaryTrack`, r3(u, s2 ? g2(`palette-primary-main`) : t2.primary.main, 0.5)), K(t2.Slider, `secondaryTrack`, r3(u, s2 ? g2(`palette-secondary-main`) : t2.secondary.main, 0.5)), K(t2.Slider, `errorTrack`, r3(u, s2 ? g2(`palette-error-main`) : t2.error.main, 0.5)), K(t2.Slider, `infoTrack`, r3(u, s2 ? g2(`palette-info-main`) : t2.info.main, 0.5)), K(t2.Slider, `successTrack`, r3(u, s2 ? g2(`palette-success-main`) : t2.success.main, 0.5)), K(t2.Slider, `warningTrack`, r3(u, s2 ? g2(`palette-warning-light`) : t2.warning.main, 0.5));
      let e4 = D2 ? r3(T, s2 ? g2(`palette-background-default`) : t2.background.default, 0.985) : f(t2.background.default, 0.98);
      K(t2.SnackbarContent, `bg`, e4), K(t2.SnackbarContent, `color`, Y(() => D2 ? le.text.primary : t2.getContrastText(e4))), K(t2.SpeedDialAction, `fabHoverBg`, f(t2.background.paper, 0.15)), K(t2.StepConnector, `border`, n3(`palette-grey-600`)), K(t2.StepContent, `border`, n3(`palette-grey-600`)), K(t2.Switch, `defaultColor`, n3(`palette-grey-300`)), K(t2.Switch, `defaultDisabledColor`, n3(`palette-grey-600`)), K(t2.Switch, `primaryDisabledColor`, r3(u, s2 ? g2(`palette-primary-main`) : t2.primary.main, 0.55)), K(t2.Switch, `secondaryDisabledColor`, r3(u, s2 ? g2(`palette-secondary-main`) : t2.secondary.main, 0.55)), K(t2.Switch, `errorDisabledColor`, r3(u, s2 ? g2(`palette-error-main`) : t2.error.main, 0.55)), K(t2.Switch, `infoDisabledColor`, r3(u, s2 ? g2(`palette-info-main`) : t2.info.main, 0.55)), K(t2.Switch, `successDisabledColor`, r3(u, s2 ? g2(`palette-success-main`) : t2.success.main, 0.55)), K(t2.Switch, `warningDisabledColor`, r3(u, s2 ? g2(`palette-warning-light`) : t2.warning.main, 0.55)), K(t2.TableCell, `border`, r3(u, _(s2 ? g2(`palette-divider`) : t2.divider, 1), 0.68)), K(t2.Tooltip, `bg`, r3(_, s2 ? g2(`palette-grey-700`) : t2.grey[700], 0.92));
    }
    s2 || (J(t2.background, `default`), J(t2.background, `paper`), J(t2.common, `background`), J(t2.common, `onBackground`), J(t2, `divider`)), Object.keys(t2).forEach((e4) => {
      let n4 = t2[e4];
      e4 !== `tonalOffset` && !s2 && n4 && typeof n4 == `object` && (n4.main && K(t2[e4], `mainChannel`, y(q(n4.main))), n4.light && K(t2[e4], `lightChannel`, y(q(n4.light))), n4.dark && K(t2[e4], `darkChannel`, y(q(n4.dark))), n4.contrastText && K(t2[e4], `contrastTextChannel`, y(q(n4.contrastText))), e4 === `text` && (J(t2[e4], `primary`), J(t2[e4], `secondary`)), e4 === `action` && (n4.active && J(t2[e4], `active`), n4.selected && J(t2[e4], `selected`)));
    });
  }), k2 = n2.reduce((e3, t2) => b(e3, t2), k2);
  let A2 = Ee(e2.focusVisible, n2);
  A2 != null && A2 !== false && (k2.focusVisible = B(A2, g2(`palette-primary-main`)));
  let j2 = { prefix: o2, disableCssColorScheme: a2, shouldSkipGeneratingVar: c2, getSelector: ot(k2), enableContrastVars: s2 }, { vars: M2, generateThemeVars: N2, generateStyleSheets: P2 } = ae(k2, j2);
  return k2.vars = M2, Object.entries(k2.colorSchemes[k2.defaultColorScheme]).forEach(([e3, t2]) => {
    k2[e3] = t2;
  }), k2.generateThemeVars = N2, k2.generateStyleSheets = P2, k2.generateSpacing = function() {
    return t(p2.spacing, ne(this));
  }, k2.getColorSchemeSelector = re(l2), k2.spacing = k2.generateSpacing(), k2.shouldSkipGeneratingVar = c2, k2.unstable_sxConfig = { ...te, ...p2 == null ? void 0 : p2.unstable_sxConfig }, k2.unstable_sx = function(e3) {
    return ie({ sx: e3, theme: this });
  }, k2.internal_cache = {}, k2.toRuntimeSource = Je, k2;
}
function dt(e2, t2, n2) {
  e2.colorSchemes && n2 && (e2.colorSchemes[t2] = { ...n2 !== true && n2, palette: L({ ...n2 === true ? {} : n2.palette, mode: t2 }) });
}
function ft(e2 = {}, ...t2) {
  let { palette: n2, cssVariables: r2 = false, colorSchemes: i2 = n2 ? void 0 : { light: true }, defaultColorScheme: a2 = n2 == null ? void 0 : n2.mode, ...o2 } = e2, s2 = a2 || `light`, c2 = i2 == null ? void 0 : i2[s2], l2 = { ...i2, ...n2 ? { [s2]: { ...typeof c2 != `boolean` && c2, palette: n2 } } : void 0 };
  if (r2 === false) {
    if (!(`colorSchemes` in e2)) return W(e2, ...t2);
    let r3 = n2;
    `palette` in e2 || l2[s2] && (l2[s2] === true ? s2 === `dark` && (r3 = { mode: `dark` }) : r3 = l2[s2].palette);
    let i3 = W({ ...e2, palette: r3 }, ...t2);
    if (i3.defaultColorScheme = s2, i3.colorSchemes = l2, i3.palette.mode === `light` && (i3.colorSchemes.light = { ...l2.light !== true && l2.light, palette: i3.palette }, dt(i3, `dark`, l2.dark)), i3.palette.mode === `dark` && (i3.colorSchemes.dark = { ...l2.dark !== true && l2.dark, palette: i3.palette }, dt(i3, `light`, l2.light)), i3.focusVisible != null && i3.focusVisible !== false) {
      let n3 = i3.focusVisible, r4 = Ee(e2.focusVisible, t2), a3 = r4 && typeof r4 == `object` ? r4.outlineColor : void 0;
      if (!a3 || De(r4) && a3 === i3.palette.primary.main) {
        let { outlineColor: e3, ...t3 } = n3;
        n3 = t3;
      }
      Object.keys(i3.colorSchemes).forEach((e3) => {
        var _a, _b;
        let t3 = (_b = (_a = i3.colorSchemes) == null ? void 0 : _a[e3]) == null ? void 0 : _b.palette;
        (t3 == null ? void 0 : t3.primary) && (i3.colorSchemes[e3].focusVisible = B(n3, t3.primary.main));
      });
    }
    return i3;
  }
  return !n2 && !(`light` in l2) && s2 === `light` && (l2.light = true), ut({ ...o2, colorSchemes: l2, defaultColorScheme: s2, ...typeof r2 != `boolean` && r2 }, ...t2);
}
var pt = ft();
function mt(e2) {
  return e2 !== `ownerState` && e2 !== `theme` && e2 !== `sx` && e2 !== `as`;
}
var ht = (e2) => mt(e2) && e2 !== `classes`, gt = D({ themeId: se, defaultTheme: pt, rootShouldForwardProp: ht }), _t = e;
function vt(e2) {
  return O(e2);
}
var Z = c, yt = { transition: `none` };
function bt(e2, t2) {
  return e2 === `always` ? t2 : e2 === `system` ? { "@media (prefers-reduced-motion: reduce)": t2 } : null;
}
var xt = (e2) => e2.scrollTop, Q = { offsetX: 0, offsetY: 0 }, St = {}, Ct = [`all`], wt = {}, Tt = { matrix: [4, 5], matrix3d: [12, 13], translate: [0, 1], translate3d: [0, 1], translateX: [0, null], translateY: [null, 0] };
function Et(e2) {
  let t2 = parseFloat(e2 ?? ``);
  return Number.isNaN(t2) ? 0 : t2;
}
function Dt(e2) {
  let t2 = e2.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
  return t2 ? { type: t2[1], values: t2[2].split(`,`).map(Et) } : null;
}
function Ot(e2, t2) {
  return t2 === null ? 0 : e2[t2] || 0;
}
function kt(e2) {
  if (!e2 || e2 === `none`) return Q;
  let t2 = Dt(e2);
  if (!t2) return Q;
  let { type: n2, values: r2 } = t2, i2 = Tt[n2];
  return i2 ? { offsetX: Ot(r2, i2[0]), offsetY: Ot(r2, i2[1]) } : Q;
}
function At(e2, t2) {
  return (n2) => {
    if (t2) {
      let r2 = e2.current;
      n2 === void 0 ? t2(r2) : t2(r2, n2);
    }
  };
}
function jt(e2, t2, n2, r2, i2, a2) {
  let o2 = e2 === `exited` && !t2 ? r2 : n2[e2] || n2.exited;
  return i2 || a2 ? { ...o2, ...i2, ...a2 } : o2;
}
function Mt(e2, t2) {
  let { timeout: n2, easing: r2, style: i2 = St } = e2;
  return { duration: i2.transitionDuration ?? (typeof n2 == `number` ? n2 : n2[t2.mode] || 0), easing: i2.transitionTimingFunction ?? (typeof r2 == `object` ? r2[t2.mode] : r2), delay: i2.transitionDelay };
}
function Nt(e2, t2) {
  var _a;
  let n2 = t2 ?? yt;
  return bt((_a = e2.motion) == null ? void 0 : _a.reducedMotion, n2);
}
function Pt(e2, t2 = Ct, n2 = wt) {
  var _a, _b;
  let r2 = (_b = (_a = e2.transitions) == null ? void 0 : _a.create) == null ? void 0 : _b.call(_a, t2, n2), i2 = Nt(e2);
  if (r2 === void 0) return i2 ?? St;
  let a2 = { transition: r2 };
  return i2 ? { ...a2, ...i2 } : a2;
}
function Ft(e2) {
  return E(`MuiSvgIcon`, e2);
}
var It = w(`MuiSvgIcon`, [`root`, `colorPrimary`, `colorSecondary`, `colorAction`, `colorError`, `colorDisabled`, `fontSizeInherit`, `fontSizeSmall`, `fontSizeMedium`, `fontSizeLarge`]), Lt = (e2) => {
  let { color: t2, fontSize: n2, classes: r2 } = e2, i2 = { root: [`root`, t2 !== `inherit` && `color${Z(t2)}`, `fontSize${Z(n2)}`] };
  return x(i2, Ft, r2);
}, Rt = gt(`svg`, { name: `MuiSvgIcon`, slot: `Root`, overridesResolver: (e2, t2) => {
  let { ownerState: n2 } = e2;
  return [t2.root, n2.color !== `inherit` && t2[`color${Z(n2.color)}`], t2[`fontSize${Z(n2.fontSize)}`]];
} })(_t(({ theme: e2 }) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
  return { userSelect: `none`, width: `1em`, height: `1em`, display: `inline-block`, flexShrink: 0, ...Pt(e2, `fill`, { duration: (_b = (_a = (e2.vars ?? e2).transitions) == null ? void 0 : _a.duration) == null ? void 0 : _b.shorter }), variants: [{ props: (e3) => !e3.hasSvgAsChild, style: { fill: `currentColor` } }, { props: { fontSize: `inherit` }, style: { fontSize: `inherit` } }, { props: { fontSize: `small` }, style: { fontSize: ((_d = (_c = e2.typography) == null ? void 0 : _c.pxToRem) == null ? void 0 : _d.call(_c, 20)) || `1.25rem` } }, { props: { fontSize: `medium` }, style: { fontSize: ((_f = (_e2 = e2.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f.call(_e2, 24)) || `1.5rem` } }, { props: { fontSize: `large` }, style: { fontSize: ((_h = (_g = e2.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 35)) || `2.1875rem` } }, ...Object.entries((e2.vars ?? e2).palette).filter(([, e3]) => e3 && e3.main).map(([t2]) => {
    var _a2, _b2;
    return { props: { color: t2 }, style: { color: (_b2 = (_a2 = (e2.vars ?? e2).palette) == null ? void 0 : _a2[t2]) == null ? void 0 : _b2.main } };
  }), { props: { color: `action` }, style: { color: (_j = (_i = (e2.vars ?? e2).palette) == null ? void 0 : _i.action) == null ? void 0 : _j.active } }, { props: { color: `disabled` }, style: { color: (_l = (_k = (e2.vars ?? e2).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.disabled } }, { props: { color: `inherit` }, style: { color: void 0 } }] };
})), $ = r(function(e2, t2) {
  let r2 = vt({ props: e2, name: `MuiSvgIcon` }), { children: o2, className: s2, color: c2 = `inherit`, component: l2 = `svg`, fontSize: u2 = `medium`, htmlColor: d2, inheritViewBox: f2 = false, titleAccess: p2, viewBox: m2 = `0 0 24 24`, ...h2 } = r2, g2 = n(o2) && o2.type === `svg`, _2 = { ...r2, color: c2, component: l2, fontSize: u2, instanceFontSize: e2.fontSize, inheritViewBox: f2, viewBox: m2, hasSvgAsChild: g2 }, v2 = {};
  f2 || (v2.viewBox = m2);
  let y2 = Lt(_2);
  return a(Rt, { as: l2, className: ee(y2.root, s2), focusable: `false`, color: d2, "aria-hidden": !p2 || void 0, role: p2 ? `img` : void 0, ref: t2, ...v2, ...h2, ...g2 && o2.props, ownerState: _2, children: [g2 ? o2.props.children : o2, p2 ? i(`title`, { children: p2 }) : null] });
});
$.muiName = `SvgIcon`;
function zt(e2, t2) {
  function n2(t3, n3) {
    return i($, { "data-testid": void 0, ref: n3, ...t3, children: e2 });
  }
  return n2.muiName = $.muiName, s(r(n2));
}
export {
  we as A,
  A as B,
  G as C,
  ze as D,
  Be as E,
  F,
  P as I,
  N as L,
  Ce as M,
  se as N,
  Me as O,
  oe as P,
  M as R,
  it as S,
  Ue as T,
  k as V,
  mt as _,
  Nt as a,
  ut as b,
  Pt as c,
  xt as d,
  Z as f,
  ht as g,
  gt as h,
  It as i,
  Te as j,
  Ae as k,
  kt as l,
  _t as m,
  $ as n,
  jt as o,
  vt as p,
  Ft as r,
  Mt as s,
  zt as t,
  At as u,
  pt as v,
  et as w,
  at as x,
  ft as y,
  j as z
};
