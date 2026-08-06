import { v as Ge, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
import { r as Me } from "./index-hsLLLtN8.js";
import { v as rt, a as nt, __tla as __tla_1 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
import { __tla as __tla_2 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__prop_mf_2_types__loadShare__-DjolvwIX.js";
let de, ft, Fr, Jr, Er, _r, Ar, Kr, Lr, ut, qr, ne, U, Nr, Y, yr, be, it, R, G, V, Zr, X, $r, Vr, Z, Q, Ir, N, Se, pt, Dr, He, Xe, xe, $e, ht;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  ne = {
    black: "#000",
    white: "#fff"
  };
  N = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  Q = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  U = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  X = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  Y = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  Z = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  it = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  V = function(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((i) => r.searchParams.append("args[]", i)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  };
  let ot, at, st, lt;
  qr = "$$material";
  ({ loadShare: ot } = nt);
  ({ initPromise: at } = rt);
  st = at.then((e) => ot("@mui/system", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  }));
  lt = await st.then((e) => e());
  He = lt;
  const ct = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, i) => r.val - i.val), t.reduce((r, i) => ({
      ...r,
      [i.key]: i.val
    }), {});
  };
  ut = function(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: i = 5, ...o } = e, a = ct(t), l = Object.keys(a);
    function c(u) {
      return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${r})`;
    }
    function f(u) {
      return `@media (max-width:${(typeof t[u] == "number" ? t[u] : u) - i / 100}${r})`;
    }
    function d(u, b) {
      const p = l.indexOf(b);
      return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${r}) and (max-width:${(p !== -1 && typeof t[l[p]] == "number" ? t[l[p]] : b) - i / 100}${r})`;
    }
    function h(u) {
      return l.indexOf(u) + 1 < l.length ? d(u, l[l.indexOf(u) + 1]) : c(u);
    }
    function g(u) {
      const b = l.indexOf(u);
      return b === 0 ? c(l[1]) : b === l.length - 1 ? f(l[b]) : d(u, l[l.indexOf(u) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: l,
      values: a,
      up: c,
      down: f,
      between: d,
      only: h,
      not: g,
      unit: r,
      ...o
    };
  };
  G = function(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  function Ve(e) {
    if (Ge.isValidElement(e) || Me.isValidElementType(e) || !G(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = Ve(e[r]);
    }), t;
  }
  R = function(e, t, r = {
    clone: true
  }) {
    const i = r.clone ? {
      ...e
    } : e;
    return G(e) && G(t) && Object.keys(t).forEach((o) => {
      Ge.isValidElement(t[o]) || Me.isValidElementType(t[o]) ? i[o] = t[o] : G(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && G(e[o]) ? i[o] = R(e[o], t[o], r) : r.clone ? i[o] = G(t[o]) ? Ve(t[o]) : t[o] : i[o] = t[o];
    }), i;
  };
  ft = function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  };
  function Ae(e, t = 0, r = 1) {
    return ft(e, t, r);
  }
  function dt(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((i) => i + i)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((i, o) => o < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function M(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return M(dt(e));
    const t = e.indexOf("("), r = e.substring(0, t);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(r)) throw new Error(V(9, e));
    let i = e.substring(t + 1, e.length - 1), o;
    if (r === "color") {
      if (i = i.split(" "), o = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(o)) throw new Error(V(10, o));
    } else i = i.split(",");
    return i = i.map((a) => parseFloat(a)), {
      type: r,
      values: i,
      colorSpace: o
    };
  }
  const gt = (e) => {
    const t = M(e);
    return t.values.slice(0, 3).map((r, i) => t.type.includes("hsl") && i !== 0 ? `${r}%` : r).join(" ");
  }, ee = (e, t) => {
    try {
      return gt(e);
    } catch {
      return e;
    }
  };
  function ue(e) {
    const { type: t, colorSpace: r } = e;
    let { values: i } = e;
    return t.includes("rgb") ? i = i.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), t.includes("color") ? i = `${r} ${i.join(" ")}` : i = `${i.join(", ")}`, `${t}(${i})`;
  }
  function Ne(e) {
    e = M(e);
    const { values: t } = e, r = t[0], i = t[1] / 100, o = t[2] / 100, a = i * Math.min(o, 1 - o), l = (d, h = (d + r / 30) % 12) => o - a * Math.max(Math.min(h - 3, 9 - h, 1), -1);
    let c = "rgb";
    const f = [
      Math.round(l(0) * 255),
      Math.round(l(8) * 255),
      Math.round(l(4) * 255)
    ];
    return e.type === "hsla" && (c += "a", f.push(t[3])), ue({
      type: c,
      values: f
    });
  }
  function ke(e) {
    e = M(e);
    let t = e.type === "hsl" || e.type === "hsla" ? M(Ne(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  }
  function mt(e, t) {
    const r = ke(e), i = ke(t);
    return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
  }
  pt = function(e, t) {
    return e = M(e), t = Ae(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ue(e);
  };
  function ae(e, t, r) {
    try {
      return pt(e, t);
    } catch {
      return e;
    }
  }
  xe = function(e, t) {
    if (e = M(e), t = Ae(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return ue(e);
  };
  function C(e, t, r) {
    try {
      return xe(e, t);
    } catch {
      return e;
    }
  }
  $e = function(e, t) {
    if (e = M(e), t = Ae(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return ue(e);
  };
  function w(e, t, r) {
    try {
      return $e(e, t);
    } catch {
      return e;
    }
  }
  ht = function(e, t = 0.15) {
    return ke(e) > 0.5 ? xe(e, t) : $e(e, t);
  };
  function se(e, t, r) {
    try {
      return ht(e, t);
    } catch {
      return e;
    }
  }
  function Qe() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: ne.white,
        default: ne.white
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const yt = Qe();
  function Ue() {
    return {
      text: {
        primary: ne.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: ne.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const Ie = Ue();
  function Pe(e, t, r, i) {
    const o = i.light || i, a = i.dark || i * 1.5;
    e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = $e(e.main, o) : t === "dark" && (e.dark = xe(e.main, a)));
  }
  function bt(e = "light") {
    return e === "dark" ? {
      main: U[200],
      light: U[50],
      dark: U[400]
    } : {
      main: U[700],
      light: U[400],
      dark: U[800]
    };
  }
  function St(e = "light") {
    return e === "dark" ? {
      main: Q[200],
      light: Q[50],
      dark: Q[400]
    } : {
      main: Q[500],
      light: Q[300],
      dark: Q[700]
    };
  }
  function Ct(e = "light") {
    return e === "dark" ? {
      main: N[500],
      light: N[300],
      dark: N[700]
    } : {
      main: N[700],
      light: N[400],
      dark: N[800]
    };
  }
  function wt(e = "light") {
    return e === "dark" ? {
      main: X[400],
      light: X[300],
      dark: X[700]
    } : {
      main: X[700],
      light: X[500],
      dark: X[900]
    };
  }
  function kt(e = "light") {
    return e === "dark" ? {
      main: Y[400],
      light: Y[300],
      dark: Y[700]
    } : {
      main: Y[800],
      light: Y[500],
      dark: Y[900]
    };
  }
  function At(e = "light") {
    return e === "dark" ? {
      main: Z[400],
      light: Z[300],
      dark: Z[700]
    } : {
      main: "#ed6c02",
      light: Z[500],
      dark: Z[900]
    };
  }
  function Be(e) {
    const { mode: t = "light", contrastThreshold: r = 3, tonalOffset: i = 0.2, ...o } = e, a = e.primary || bt(t), l = e.secondary || St(t), c = e.error || Ct(t), f = e.info || wt(t), d = e.success || kt(t), h = e.warning || At(t);
    function g(S) {
      return mt(S, Ie.text.primary) >= r ? Ie.text.primary : yt.text.primary;
    }
    const u = ({ color: S, name: _, mainShade: P = 500, lightShade: z = 300, darkShade: k = 700 }) => {
      if (S = {
        ...S
      }, !S.main && S[P] && (S.main = S[P]), !S.hasOwnProperty("main")) throw new Error(V(11, _ ? ` (${_})` : "", P));
      if (typeof S.main != "string") throw new Error(V(12, _ ? ` (${_})` : "", JSON.stringify(S.main)));
      return Pe(S, "light", z, i), Pe(S, "dark", k, i), S.contrastText || (S.contrastText = g(S.main)), S;
    };
    let b;
    return t === "light" ? b = Qe() : t === "dark" && (b = Ue()), R({
      common: {
        ...ne
      },
      mode: t,
      primary: u({
        color: a,
        name: "primary"
      }),
      secondary: u({
        color: l,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: u({
        color: c,
        name: "error"
      }),
      warning: u({
        color: h,
        name: "warning"
      }),
      info: u({
        color: f,
        name: "info"
      }),
      success: u({
        color: d,
        name: "success"
      }),
      grey: it,
      contrastThreshold: r,
      getContrastText: g,
      augmentColor: u,
      tonalOffset: i,
      ...b
    }, o);
  }
  function re(e, t) {
    return t ? R(e, t, {
      clone: false
    }) : e;
  }
  function Ee(e, t) {
    if (!e.containerQueries) return t;
    const r = Object.keys(t).filter((i) => i.startsWith("@container")).sort((i, o) => {
      var _a, _b;
      const a = /min-width:\s*([0-9.]+)/;
      return +(((_a = i.match(a)) == null ? void 0 : _a[1]) || 0) - +(((_b = o.match(a)) == null ? void 0 : _b[1]) || 0);
    });
    return r.length ? r.reduce((i, o) => {
      const a = t[o];
      return delete i[o], i[o] = a, i;
    }, {
      ...t
    }) : t;
  }
  function xt(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function $t(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, i, o] = r, a = Number.isNaN(+i) ? i || 0 : +i;
    return e.containerQueries(o).up(a);
  }
  function Bt(e) {
    const t = (a, l) => a.replace("@media", l ? `@container ${l}` : "@container");
    function r(a, l) {
      a.up = (...c) => t(e.breakpoints.up(...c), l), a.down = (...c) => t(e.breakpoints.down(...c), l), a.between = (...c) => t(e.breakpoints.between(...c), l), a.only = (...c) => t(e.breakpoints.only(...c), l), a.not = (...c) => {
        const f = t(e.breakpoints.not(...c), l);
        return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
      };
    }
    const i = {}, o = (a) => (r(i, a), i);
    return r(o), {
      ...e,
      containerQueries: o
    };
  }
  const fe = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Re = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (e) => `@media (min-width:${fe[e]}px)`
  }, Tt = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : fe[t] || t;
        return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
      }
    })
  };
  function K(e, t, r) {
    const i = e.theme || {};
    if (Array.isArray(t)) {
      const a = i.breakpoints || Re;
      return t.reduce((l, c, f) => (l[a.up(a.keys[f])] = r(t[f]), l), {});
    }
    if (typeof t == "object") {
      const a = i.breakpoints || Re;
      return Object.keys(t).reduce((l, c) => {
        if (xt(a.keys, c)) {
          const f = $t(i.containerQueries ? i : Tt, c);
          f && (l[f] = r(t[c], c));
        } else if (Object.keys(a.values || fe).includes(c)) {
          const f = a.up(c);
          l[f] = r(t[c], c);
        } else {
          const f = c;
          l[f] = t[f];
        }
        return l;
      }, {});
    }
    return r(t);
  }
  function vt(e = {}) {
    var _a;
    return ((_a = e.keys) == null ? void 0 : _a.reduce((r, i) => {
      const o = e.up(i);
      return r[o] = {}, r;
    }, {})) || {};
  }
  function je(e, t) {
    return e.reduce((r, i) => {
      const o = r[i];
      return (!o || Object.keys(o).length === 0) && delete r[i], r;
    }, t);
  }
  Xe = function(e) {
    if (typeof e != "string") throw new Error(V(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  de = function(e, t, r = true) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const i = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
      if (i != null) return i;
    }
    return t.split(".").reduce((i, o) => i && i[o] != null ? i[o] : null, e);
  };
  function le(e, t, r, i = r) {
    let o;
    return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || i : o = de(e, r) || i, t && (o = t(o, i, e)), o;
  }
  function T(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: i, transform: o } = e, a = (l) => {
      if (l[t] == null) return null;
      const c = l[t], f = l.theme, d = de(f, i) || {};
      return K(l, c, (g) => {
        let u = le(d, o, g);
        return g === u && typeof g == "string" && (u = le(d, o, `${t}${g === "default" ? "" : Xe(g)}`, g)), r === false ? u : {
          [r]: u
        };
      });
    };
    return a.propTypes = {}, a.filterProps = [
      t
    ], a;
  }
  function Ot(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  const _t = {
    m: "margin",
    p: "padding"
  }, It = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: [
      "Left",
      "Right"
    ],
    y: [
      "Top",
      "Bottom"
    ]
  }, De = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, Pt = Ot((e) => {
    if (e.length > 2) if (De[e]) e = De[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), i = _t[t], o = It[r] || "";
    return Array.isArray(o) ? o.map((a) => i + a) : [
      i + o
    ];
  }), Te = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd"
  ], ve = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd"
  ];
  [
    ...Te,
    ...ve
  ];
  function ie(e, t, r, i) {
    const o = de(e, t, true) ?? r;
    return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : typeof o == "string" ? `calc(${a} * ${o})` : o * a : Array.isArray(o) ? (a) => {
      if (typeof a == "string") return a;
      const l = Math.abs(a), c = o[l];
      return a >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
    } : typeof o == "function" ? o : () => {
    };
  }
  function Oe(e) {
    return ie(e, "spacing", 8);
  }
  function oe(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  }
  function Et(e, t) {
    return (r) => e.reduce((i, o) => (i[o] = oe(t, r), i), {});
  }
  function Rt(e, t, r, i) {
    if (!t.includes(r)) return null;
    const o = Pt(r), a = Et(o, i), l = e[r];
    return K(e, l, a);
  }
  function Ye(e, t) {
    const r = Oe(e.theme);
    return Object.keys(e).map((i) => Rt(e, t, i, r)).reduce(re, {});
  }
  function x(e) {
    return Ye(e, Te);
  }
  x.propTypes = {};
  x.filterProps = Te;
  function $(e) {
    return Ye(e, ve);
  }
  $.propTypes = {};
  $.filterProps = ve;
  const jt = {
    borderRadius: 4
  };
  function Dt(e = 8, t = Oe({
    spacing: e
  })) {
    if (e.mui) return e;
    const r = (...i) => (i.length === 0 ? [
      1
    ] : i).map((a) => {
      const l = t(a);
      return typeof l == "number" ? `${l}px` : l;
    }).join(" ");
    return r.mui = true, r;
  }
  function ge(...e) {
    const t = e.reduce((i, o) => (o.filterProps.forEach((a) => {
      i[a] = o;
    }), i), {}), r = (i) => Object.keys(i).reduce((o, a) => t[a] ? re(o, t[a](i)) : o, {});
    return r.propTypes = {}, r.filterProps = e.reduce((i, o) => i.concat(o.filterProps), []), r;
  }
  function j(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  function D(e, t) {
    return T({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  const Wt = D("border", j), Ft = D("borderTop", j), Lt = D("borderRight", j), Kt = D("borderBottom", j), zt = D("borderLeft", j), Gt = D("borderColor"), Mt = D("borderTopColor"), Ht = D("borderRightColor"), Vt = D("borderBottomColor"), Nt = D("borderLeftColor"), Qt = D("outline", j), Ut = D("outlineColor"), me = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ie(e.theme, "shape.borderRadius", 4), r = (i) => ({
        borderRadius: oe(t, i)
      });
      return K(e, e.borderRadius, r);
    }
    return null;
  };
  me.propTypes = {};
  me.filterProps = [
    "borderRadius"
  ];
  ge(Wt, Ft, Lt, Kt, zt, Gt, Mt, Ht, Vt, Nt, me, Qt, Ut);
  const pe = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = ie(e.theme, "spacing", 8), r = (i) => ({
        gap: oe(t, i)
      });
      return K(e, e.gap, r);
    }
    return null;
  };
  pe.propTypes = {};
  pe.filterProps = [
    "gap"
  ];
  const he = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = ie(e.theme, "spacing", 8), r = (i) => ({
        columnGap: oe(t, i)
      });
      return K(e, e.columnGap, r);
    }
    return null;
  };
  he.propTypes = {};
  he.filterProps = [
    "columnGap"
  ];
  const ye = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = ie(e.theme, "spacing", 8), r = (i) => ({
        rowGap: oe(t, i)
      });
      return K(e, e.rowGap, r);
    }
    return null;
  };
  ye.propTypes = {};
  ye.filterProps = [
    "rowGap"
  ];
  const Xt = T({
    prop: "gridColumn"
  }), Yt = T({
    prop: "gridRow"
  }), qt = T({
    prop: "gridAutoFlow"
  }), Jt = T({
    prop: "gridAutoColumns"
  }), Zt = T({
    prop: "gridAutoRows"
  }), er = T({
    prop: "gridTemplateColumns"
  }), tr = T({
    prop: "gridTemplateRows"
  }), rr = T({
    prop: "gridTemplateAreas"
  }), nr = T({
    prop: "gridArea"
  });
  ge(pe, he, ye, Xt, Yt, qt, Jt, Zt, er, tr, rr, nr);
  function q(e, t) {
    return t === "grey" ? t : e;
  }
  const ir = T({
    prop: "color",
    themeKey: "palette",
    transform: q
  }), or = T({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: q
  }), ar = T({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: q
  });
  ge(ir, or, ar);
  function E(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const sr = T({
    prop: "width",
    transform: E
  }), _e = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var _a, _b, _c, _d, _e2;
        const i = ((_c = (_b = (_a = e.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[r]) || fe[r];
        return i ? ((_e2 = (_d = e.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${i}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: i
        } : {
          maxWidth: E(r)
        };
      };
      return K(e, e.maxWidth, t);
    }
    return null;
  };
  _e.filterProps = [
    "maxWidth"
  ];
  const lr = T({
    prop: "minWidth",
    transform: E
  }), cr = T({
    prop: "height",
    transform: E
  }), ur = T({
    prop: "maxHeight",
    transform: E
  }), fr = T({
    prop: "minHeight",
    transform: E
  });
  T({
    prop: "size",
    cssProperty: "width",
    transform: E
  });
  T({
    prop: "size",
    cssProperty: "height",
    transform: E
  });
  const dr = T({
    prop: "boxSizing"
  });
  ge(sr, _e, lr, cr, ur, fr, dr);
  be = {
    border: {
      themeKey: "borders",
      transform: j
    },
    borderTop: {
      themeKey: "borders",
      transform: j
    },
    borderRight: {
      themeKey: "borders",
      transform: j
    },
    borderBottom: {
      themeKey: "borders",
      transform: j
    },
    borderLeft: {
      themeKey: "borders",
      transform: j
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: j
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: me
    },
    color: {
      themeKey: "palette",
      transform: q
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: q
    },
    backgroundColor: {
      themeKey: "palette",
      transform: q
    },
    p: {
      style: $
    },
    pt: {
      style: $
    },
    pr: {
      style: $
    },
    pb: {
      style: $
    },
    pl: {
      style: $
    },
    px: {
      style: $
    },
    py: {
      style: $
    },
    padding: {
      style: $
    },
    paddingTop: {
      style: $
    },
    paddingRight: {
      style: $
    },
    paddingBottom: {
      style: $
    },
    paddingLeft: {
      style: $
    },
    paddingX: {
      style: $
    },
    paddingY: {
      style: $
    },
    paddingInline: {
      style: $
    },
    paddingInlineStart: {
      style: $
    },
    paddingInlineEnd: {
      style: $
    },
    paddingBlock: {
      style: $
    },
    paddingBlockStart: {
      style: $
    },
    paddingBlockEnd: {
      style: $
    },
    m: {
      style: x
    },
    mt: {
      style: x
    },
    mr: {
      style: x
    },
    mb: {
      style: x
    },
    ml: {
      style: x
    },
    mx: {
      style: x
    },
    my: {
      style: x
    },
    margin: {
      style: x
    },
    marginTop: {
      style: x
    },
    marginRight: {
      style: x
    },
    marginBottom: {
      style: x
    },
    marginLeft: {
      style: x
    },
    marginX: {
      style: x
    },
    marginY: {
      style: x
    },
    marginInline: {
      style: x
    },
    marginInlineStart: {
      style: x
    },
    marginInlineEnd: {
      style: x
    },
    marginBlock: {
      style: x
    },
    marginBlockStart: {
      style: x
    },
    marginBlockEnd: {
      style: x
    },
    displayPrint: {
      cssProperty: false,
      transform: (e) => ({
        "@media print": {
          display: e
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: pe
    },
    rowGap: {
      style: ye
    },
    columnGap: {
      style: he
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: E
    },
    maxWidth: {
      style: _e
    },
    minWidth: {
      transform: E
    },
    height: {
      transform: E
    },
    maxHeight: {
      transform: E
    },
    minHeight: {
      transform: E
    },
    boxSizing: {},
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function gr(...e) {
    const t = e.reduce((i, o) => i.concat(Object.keys(o)), []), r = new Set(t);
    return e.every((i) => r.size === Object.keys(i).length);
  }
  function mr(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function pr() {
    function e(r, i, o, a) {
      const l = {
        [r]: i,
        theme: o
      }, c = a[r];
      if (!c) return {
        [r]: i
      };
      const { cssProperty: f = r, themeKey: d, transform: h, style: g } = c;
      if (i == null) return null;
      if (d === "typography" && i === "inherit") return {
        [r]: i
      };
      const u = de(o, d) || {};
      return g ? g(l) : K(l, i, (p) => {
        let S = le(u, h, p);
        return p === S && typeof p == "string" && (S = le(u, h, `${r}${p === "default" ? "" : Xe(p)}`, p)), f === false ? S : {
          [f]: S
        };
      });
    }
    function t(r) {
      const { sx: i, theme: o = {}, nested: a } = r || {};
      if (!i) return null;
      const l = o.unstable_sxConfig ?? be;
      function c(f) {
        let d = f;
        if (typeof f == "function") d = f(o);
        else if (typeof f != "object") return f;
        if (!d) return null;
        const h = vt(o.breakpoints), g = Object.keys(h);
        let u = h;
        return Object.keys(d).forEach((b) => {
          const p = mr(d[b], o);
          if (p != null) if (typeof p == "object") if (l[b]) u = re(u, e(b, p, o, l));
          else {
            const S = K({
              theme: o
            }, p, (_) => ({
              [b]: _
            }));
            gr(S, p) ? u[b] = t({
              sx: p,
              theme: o,
              nested: true
            }) : u = re(u, S);
          }
          else u = re(u, e(b, p, o, l));
        }), !a && o.modularCssLayers ? {
          "@layer sx": Ee(o, je(g, u))
        } : Ee(o, je(g, u));
      }
      return Array.isArray(i) ? i.map(c) : c(i);
    }
    return t;
  }
  Se = pr();
  Se.filterProps = [
    "sx"
  ];
  function hr(e, t) {
    var _a;
    const r = this;
    if (r.vars) {
      if (!((_a = r.colorSchemes) == null ? void 0 : _a[e]) || typeof r.getColorSchemeSelector != "function") return {};
      let i = r.getColorSchemeSelector(e);
      return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
        [i]: t
      });
    }
    return r.palette.mode === e ? t : {};
  }
  yr = function(e = {}, ...t) {
    const { breakpoints: r = {}, palette: i = {}, spacing: o, shape: a = {}, ...l } = e, c = ut(r), f = Dt(o);
    let d = R({
      breakpoints: c,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...i
      },
      spacing: f,
      shape: {
        ...jt,
        ...a
      }
    }, l);
    return d = Bt(d), d.applyStyles = hr, d = t.reduce((h, g) => R(h, g), d), d.unstable_sxConfig = {
      ...be,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(g) {
      return Se({
        sx: g,
        theme: this
      });
    }, d;
  };
  const We = (e, t, r, i = []) => {
    let o = e;
    t.forEach((a, l) => {
      l === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = i.includes(a) ? [] : {}), o = o[a]);
    });
  }, br = (e, t, r) => {
    function i(o, a = [], l = []) {
      Object.entries(o).forEach(([c, f]) => {
        (!r || r && !r([
          ...a,
          c
        ])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? i(f, [
          ...a,
          c
        ], Array.isArray(f) ? [
          ...l,
          c
        ] : l) : t([
          ...a,
          c
        ], f, l));
      });
    }
    i(e);
  }, Sr = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((i) => e.includes(i)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  function Ce(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: i } = t || {}, o = {}, a = {}, l = {};
    return br(e, (c, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!i || !i(c, f))) {
        const h = `--${r ? `${r}-` : ""}${c.join("-")}`, g = Sr(c, f);
        Object.assign(o, {
          [h]: g
        }), We(a, c, `var(${h})`, d), We(l, c, `var(${h}, ${g})`, d);
      }
    }, (c) => c[0] === "vars"), {
      css: o,
      vars: a,
      varsWithDefaults: l
    };
  }
  function Cr(e, t = {}) {
    const { getSelector: r = _, disableCssColorScheme: i, colorSchemeSelector: o } = t, { colorSchemes: a = {}, components: l, defaultColorScheme: c = "light", ...f } = e, { vars: d, css: h, varsWithDefaults: g } = Ce(f, t);
    let u = g;
    const b = {}, { [c]: p, ...S } = a;
    if (Object.entries(S || {}).forEach(([k, y]) => {
      const { vars: v, css: H, varsWithDefaults: J } = Ce(y, t);
      u = R(u, J), b[k] = {
        css: H,
        vars: v
      };
    }), p) {
      const { css: k, vars: y, varsWithDefaults: v } = Ce(p, t);
      u = R(u, v), b[c] = {
        css: k,
        vars: y
      };
    }
    function _(k, y) {
      var _a, _b;
      let v = o;
      if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (v = `[${o}="%s"]`), k) {
        if (v === "media") return e.defaultColorScheme === k ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a = a[k]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || k})`]: {
            ":root": y
          }
        };
        if (v) return e.defaultColorScheme === k ? `:root, ${v.replace("%s", String(k))}` : v.replace("%s", String(k));
      }
      return ":root";
    }
    return {
      vars: u,
      generateThemeVars: () => {
        let k = {
          ...d
        };
        return Object.entries(b).forEach(([, { vars: y }]) => {
          k = R(k, y);
        }), k;
      },
      generateStyleSheets: () => {
        var _a, _b;
        const k = [], y = e.defaultColorScheme || "light";
        function v(W, O) {
          Object.keys(O).length && k.push(typeof W == "string" ? {
            [W]: {
              ...O
            }
          } : W);
        }
        v(r(void 0, {
          ...h
        }), h);
        const { [y]: H, ...J } = b;
        if (H) {
          const { css: W } = H, O = (_b = (_a = a[y]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode, n = !i && O ? {
            colorScheme: O,
            ...W
          } : {
            ...W
          };
          v(r(y, {
            ...n
          }), n);
        }
        return Object.entries(J).forEach(([W, { css: O }]) => {
          var _a2, _b2;
          const n = (_b2 = (_a2 = a[W]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, m = !i && n ? {
            colorScheme: n,
            ...O
          } : {
            ...O
          };
          v(r(W, {
            ...m
          }), m);
        }), k;
      }
    };
  }
  function wr(e) {
    const t = {};
    return Object.entries(e).forEach((i) => {
      const [o, a] = i;
      typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
    }), t;
  }
  function kr(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  }
  Ar = function(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [e.up("sm")]: {
          minHeight: 64
        }
      },
      ...t
    };
  };
  function xr(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Fe = {
    textTransform: "uppercase"
  }, Le = '"Roboto", "Helvetica", "Arial", sans-serif';
  $r = function(e, t) {
    const { fontFamily: r = Le, fontSize: i = 14, fontWeightLight: o = 300, fontWeightRegular: a = 400, fontWeightMedium: l = 500, fontWeightBold: c = 700, htmlFontSize: f = 16, allVariants: d, pxToRem: h, ...g } = typeof t == "function" ? t(e) : t, u = i / 14, b = h || ((_) => `${_ / f * u}rem`), p = (_, P, z, k, y) => ({
      fontFamily: r,
      fontWeight: _,
      fontSize: b(P),
      lineHeight: z,
      ...r === Le ? {
        letterSpacing: `${xr(k / P)}em`
      } : {},
      ...y,
      ...d
    }), S = {
      h1: p(o, 96, 1.167, -1.5),
      h2: p(o, 60, 1.2, -0.5),
      h3: p(a, 48, 1.167, 0),
      h4: p(a, 34, 1.235, 0.25),
      h5: p(a, 24, 1.334, 0),
      h6: p(l, 20, 1.6, 0.15),
      subtitle1: p(a, 16, 1.75, 0.15),
      subtitle2: p(l, 14, 1.57, 0.1),
      body1: p(a, 16, 1.5, 0.15),
      body2: p(a, 14, 1.43, 0.15),
      button: p(l, 14, 1.75, 0.4, Fe),
      caption: p(a, 12, 1.66, 0.4),
      overline: p(a, 12, 2.66, 1, Fe),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return R({
      htmlFontSize: f,
      pxToRem: b,
      fontFamily: r,
      fontSize: i,
      fontWeightLight: o,
      fontWeightRegular: a,
      fontWeightMedium: l,
      fontWeightBold: c,
      ...S
    }, g, {
      clone: false
    });
  };
  const Br = 0.2, Tr = 0.14, vr = 0.12;
  function A(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Br})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Tr})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${vr})`
    ].join(",");
  }
  let Or;
  Or = [
    "none",
    A(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    A(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    A(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    A(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    A(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    A(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    A(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    A(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    A(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    A(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    A(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    A(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    A(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    A(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    A(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    A(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    A(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    A(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    A(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    A(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    A(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    A(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    A(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    A(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  _r = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  Ir = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Ke(e) {
    return `${Math.round(e)}ms`;
  }
  function Pr(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
  }
  Er = function(e) {
    const t = {
      ..._r,
      ...e.easing
    }, r = {
      ...Ir,
      ...e.duration
    };
    return {
      getAutoHeightDuration: Pr,
      create: (o = [
        "all"
      ], a = {}) => {
        const { duration: l = r.standard, easing: c = t.easeInOut, delay: f = 0, ...d } = a;
        return (Array.isArray(o) ? o : [
          o
        ]).map((h) => `${h} ${typeof l == "string" ? l : Ke(l)} ${c} ${typeof f == "string" ? f : Ke(f)}`).join(",");
      },
      ...e,
      easing: t,
      duration: r
    };
  };
  const Rr = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function jr(e) {
    return G(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
  }
  function qe(e = {}) {
    const t = {
      ...e
    };
    function r(i) {
      const o = Object.entries(i);
      for (let a = 0; a < o.length; a++) {
        const [l, c] = o[a];
        !jr(c) || l.startsWith("unstable_") ? delete i[l] : G(c) && (i[l] = {
          ...c
        }, r(i[l]));
      }
    }
    return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function ce(e = {}, ...t) {
    const { breakpoints: r, mixins: i = {}, spacing: o, palette: a = {}, transitions: l = {}, typography: c = {}, shape: f, ...d } = e;
    if (e.vars && e.generateThemeVars === void 0) throw new Error(V(20));
    const h = Be(a), g = yr(e);
    let u = R(g, {
      mixins: Ar(g.breakpoints, i),
      palette: h,
      shadows: Or.slice(),
      typography: $r(h, c),
      transitions: Er(l),
      zIndex: {
        ...Rr
      }
    });
    return u = R(u, d), u = t.reduce((b, p) => R(b, p), u), u.unstable_sxConfig = {
      ...be,
      ...d == null ? void 0 : d.unstable_sxConfig
    }, u.unstable_sx = function(p) {
      return Se({
        sx: p,
        theme: this
      });
    }, u.toRuntimeSource = qe, u;
  }
  Jr = function(...e) {
    return ce(...e);
  };
  Dr = function(e) {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
  };
  const Wr = [
    ...Array(25)
  ].map((e, t) => {
    if (t === 0) return "none";
    const r = Dr(t);
    return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
  });
  function Je(e) {
    return {
      inputPlaceholder: e === "dark" ? 0.5 : 0.42,
      inputUnderline: e === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
      switchTrack: e === "dark" ? 0.3 : 0.38
    };
  }
  function Ze(e) {
    return e === "dark" ? Wr : [];
  }
  Fr = function(e) {
    const { palette: t = {
      mode: "light"
    }, opacity: r, overlays: i, ...o } = e, a = Be(t);
    return {
      palette: a,
      opacity: {
        ...Je(a.mode),
        ...r
      },
      overlays: i || Ze(a.mode),
      ...o
    };
  };
  Lr = function(e) {
    var _a;
    return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!((_a = e[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
  };
  let zr;
  Kr = (e) => [
    ...[
      ...Array(25)
    ].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`
  ];
  zr = (e) => (t, r) => {
    const i = e.rootSelector || ":root", o = e.colorSchemeSelector;
    let a = o;
    if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
      if (t === "dark") {
        const l = {};
        return Kr(e.cssVarPrefix).forEach((c) => {
          l[c] = r[c], delete r[c];
        }), a === "media" ? {
          [i]: r,
          "@media (prefers-color-scheme: dark)": {
            [i]: l
          }
        } : a ? {
          [a.replace("%s", t)]: l,
          [`${i}, ${a.replace("%s", t)}`]: r
        } : {
          [i]: {
            ...r,
            ...l
          }
        };
      }
      if (a && a !== "media") return `${i}, ${a.replace("%s", String(t))}`;
    } else if (t) {
      if (a === "media") return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [i]: r
        }
      };
      if (a) return a.replace("%s", String(t));
    }
    return i;
  };
  function Gr(e, t) {
    t.forEach((r) => {
      e[r] || (e[r] = {});
    });
  }
  function s(e, t, r) {
    !e[t] && r && (e[t] = r);
  }
  function te(e) {
    return typeof e != "string" || !e.startsWith("hsl") ? e : Ne(e);
  }
  function L(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = ee(te(e[t])));
  }
  function Mr(e) {
    return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
  }
  const F = (e) => {
    try {
      return e();
    } catch {
    }
  }, Hr = (e = "mui") => He.unstable_createGetCssVar(e);
  function we(e, t, r, i) {
    if (!t) return;
    t = t === true ? {} : t;
    const o = i === "dark" ? "dark" : "light";
    if (!r) {
      e[i] = Fr({
        ...t,
        palette: {
          mode: o,
          ...t == null ? void 0 : t.palette
        }
      });
      return;
    }
    const { palette: a, ...l } = ce({
      ...r,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return e[i] = {
      ...t,
      palette: a,
      opacity: {
        ...Je(o),
        ...t == null ? void 0 : t.opacity
      },
      overlays: (t == null ? void 0 : t.overlays) || Ze(o)
    }, l;
  }
  Vr = function(e = {}, ...t) {
    const { colorSchemes: r = {
      light: true
    }, defaultColorScheme: i, disableCssColorScheme: o = false, cssVarPrefix: a = "mui", shouldSkipGeneratingVar: l = Lr, colorSchemeSelector: c = r.light && r.dark ? "media" : void 0, rootSelector: f = ":root", ...d } = e, h = Object.keys(r)[0], g = i || (r.light && h !== "light" ? "light" : h), u = Hr(a), { [g]: b, light: p, dark: S, ..._ } = r, P = {
      ..._
    };
    let z = b;
    if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (z = true), !z) throw new Error(V(21, g));
    const k = we(P, z, d, g);
    p && !P.light && we(P, p, void 0, "light"), S && !P.dark && we(P, S, void 0, "dark");
    let y = {
      defaultColorScheme: g,
      ...k,
      cssVarPrefix: a,
      colorSchemeSelector: c,
      rootSelector: f,
      getCssVar: u,
      colorSchemes: P,
      font: {
        ...wr(k.typography),
        ...k.font
      },
      spacing: Mr(d.spacing)
    };
    Object.keys(y.colorSchemes).forEach((O) => {
      const n = y.colorSchemes[O].palette, m = (B) => {
        const I = B.split("-"), et = I[1], tt = I[2];
        return u(B, n[et][tt]);
      };
      if (n.mode === "light" && (s(n.common, "background", "#fff"), s(n.common, "onBackground", "#000")), n.mode === "dark" && (s(n.common, "background", "#000"), s(n.common, "onBackground", "#fff")), Gr(n, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip"
      ]), n.mode === "light") {
        s(n.Alert, "errorColor", C(n.error.light, 0.6)), s(n.Alert, "infoColor", C(n.info.light, 0.6)), s(n.Alert, "successColor", C(n.success.light, 0.6)), s(n.Alert, "warningColor", C(n.warning.light, 0.6)), s(n.Alert, "errorFilledBg", m("palette-error-main")), s(n.Alert, "infoFilledBg", m("palette-info-main")), s(n.Alert, "successFilledBg", m("palette-success-main")), s(n.Alert, "warningFilledBg", m("palette-warning-main")), s(n.Alert, "errorFilledColor", F(() => n.getContrastText(n.error.main))), s(n.Alert, "infoFilledColor", F(() => n.getContrastText(n.info.main))), s(n.Alert, "successFilledColor", F(() => n.getContrastText(n.success.main))), s(n.Alert, "warningFilledColor", F(() => n.getContrastText(n.warning.main))), s(n.Alert, "errorStandardBg", w(n.error.light, 0.9)), s(n.Alert, "infoStandardBg", w(n.info.light, 0.9)), s(n.Alert, "successStandardBg", w(n.success.light, 0.9)), s(n.Alert, "warningStandardBg", w(n.warning.light, 0.9)), s(n.Alert, "errorIconColor", m("palette-error-main")), s(n.Alert, "infoIconColor", m("palette-info-main")), s(n.Alert, "successIconColor", m("palette-success-main")), s(n.Alert, "warningIconColor", m("palette-warning-main")), s(n.AppBar, "defaultBg", m("palette-grey-100")), s(n.Avatar, "defaultBg", m("palette-grey-400")), s(n.Button, "inheritContainedBg", m("palette-grey-300")), s(n.Button, "inheritContainedHoverBg", m("palette-grey-A100")), s(n.Chip, "defaultBorder", m("palette-grey-400")), s(n.Chip, "defaultAvatarColor", m("palette-grey-700")), s(n.Chip, "defaultIconColor", m("palette-grey-700")), s(n.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), s(n.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), s(n.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), s(n.LinearProgress, "primaryBg", w(n.primary.main, 0.62)), s(n.LinearProgress, "secondaryBg", w(n.secondary.main, 0.62)), s(n.LinearProgress, "errorBg", w(n.error.main, 0.62)), s(n.LinearProgress, "infoBg", w(n.info.main, 0.62)), s(n.LinearProgress, "successBg", w(n.success.main, 0.62)), s(n.LinearProgress, "warningBg", w(n.warning.main, 0.62)), s(n.Skeleton, "bg", `rgba(${m("palette-text-primaryChannel")} / 0.11)`), s(n.Slider, "primaryTrack", w(n.primary.main, 0.62)), s(n.Slider, "secondaryTrack", w(n.secondary.main, 0.62)), s(n.Slider, "errorTrack", w(n.error.main, 0.62)), s(n.Slider, "infoTrack", w(n.info.main, 0.62)), s(n.Slider, "successTrack", w(n.success.main, 0.62)), s(n.Slider, "warningTrack", w(n.warning.main, 0.62));
        const B = se(n.background.default, 0.8);
        s(n.SnackbarContent, "bg", B), s(n.SnackbarContent, "color", F(() => n.getContrastText(B))), s(n.SpeedDialAction, "fabHoverBg", se(n.background.paper, 0.15)), s(n.StepConnector, "border", m("palette-grey-400")), s(n.StepContent, "border", m("palette-grey-400")), s(n.Switch, "defaultColor", m("palette-common-white")), s(n.Switch, "defaultDisabledColor", m("palette-grey-100")), s(n.Switch, "primaryDisabledColor", w(n.primary.main, 0.62)), s(n.Switch, "secondaryDisabledColor", w(n.secondary.main, 0.62)), s(n.Switch, "errorDisabledColor", w(n.error.main, 0.62)), s(n.Switch, "infoDisabledColor", w(n.info.main, 0.62)), s(n.Switch, "successDisabledColor", w(n.success.main, 0.62)), s(n.Switch, "warningDisabledColor", w(n.warning.main, 0.62)), s(n.TableCell, "border", w(ae(n.divider, 1), 0.88)), s(n.Tooltip, "bg", ae(n.grey[700], 0.92));
      }
      if (n.mode === "dark") {
        s(n.Alert, "errorColor", w(n.error.light, 0.6)), s(n.Alert, "infoColor", w(n.info.light, 0.6)), s(n.Alert, "successColor", w(n.success.light, 0.6)), s(n.Alert, "warningColor", w(n.warning.light, 0.6)), s(n.Alert, "errorFilledBg", m("palette-error-dark")), s(n.Alert, "infoFilledBg", m("palette-info-dark")), s(n.Alert, "successFilledBg", m("palette-success-dark")), s(n.Alert, "warningFilledBg", m("palette-warning-dark")), s(n.Alert, "errorFilledColor", F(() => n.getContrastText(n.error.dark))), s(n.Alert, "infoFilledColor", F(() => n.getContrastText(n.info.dark))), s(n.Alert, "successFilledColor", F(() => n.getContrastText(n.success.dark))), s(n.Alert, "warningFilledColor", F(() => n.getContrastText(n.warning.dark))), s(n.Alert, "errorStandardBg", C(n.error.light, 0.9)), s(n.Alert, "infoStandardBg", C(n.info.light, 0.9)), s(n.Alert, "successStandardBg", C(n.success.light, 0.9)), s(n.Alert, "warningStandardBg", C(n.warning.light, 0.9)), s(n.Alert, "errorIconColor", m("palette-error-main")), s(n.Alert, "infoIconColor", m("palette-info-main")), s(n.Alert, "successIconColor", m("palette-success-main")), s(n.Alert, "warningIconColor", m("palette-warning-main")), s(n.AppBar, "defaultBg", m("palette-grey-900")), s(n.AppBar, "darkBg", m("palette-background-paper")), s(n.AppBar, "darkColor", m("palette-text-primary")), s(n.Avatar, "defaultBg", m("palette-grey-600")), s(n.Button, "inheritContainedBg", m("palette-grey-800")), s(n.Button, "inheritContainedHoverBg", m("palette-grey-700")), s(n.Chip, "defaultBorder", m("palette-grey-700")), s(n.Chip, "defaultAvatarColor", m("palette-grey-300")), s(n.Chip, "defaultIconColor", m("palette-grey-300")), s(n.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), s(n.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), s(n.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), s(n.LinearProgress, "primaryBg", C(n.primary.main, 0.5)), s(n.LinearProgress, "secondaryBg", C(n.secondary.main, 0.5)), s(n.LinearProgress, "errorBg", C(n.error.main, 0.5)), s(n.LinearProgress, "infoBg", C(n.info.main, 0.5)), s(n.LinearProgress, "successBg", C(n.success.main, 0.5)), s(n.LinearProgress, "warningBg", C(n.warning.main, 0.5)), s(n.Skeleton, "bg", `rgba(${m("palette-text-primaryChannel")} / 0.13)`), s(n.Slider, "primaryTrack", C(n.primary.main, 0.5)), s(n.Slider, "secondaryTrack", C(n.secondary.main, 0.5)), s(n.Slider, "errorTrack", C(n.error.main, 0.5)), s(n.Slider, "infoTrack", C(n.info.main, 0.5)), s(n.Slider, "successTrack", C(n.success.main, 0.5)), s(n.Slider, "warningTrack", C(n.warning.main, 0.5));
        const B = se(n.background.default, 0.98);
        s(n.SnackbarContent, "bg", B), s(n.SnackbarContent, "color", F(() => n.getContrastText(B))), s(n.SpeedDialAction, "fabHoverBg", se(n.background.paper, 0.15)), s(n.StepConnector, "border", m("palette-grey-600")), s(n.StepContent, "border", m("palette-grey-600")), s(n.Switch, "defaultColor", m("palette-grey-300")), s(n.Switch, "defaultDisabledColor", m("palette-grey-600")), s(n.Switch, "primaryDisabledColor", C(n.primary.main, 0.55)), s(n.Switch, "secondaryDisabledColor", C(n.secondary.main, 0.55)), s(n.Switch, "errorDisabledColor", C(n.error.main, 0.55)), s(n.Switch, "infoDisabledColor", C(n.info.main, 0.55)), s(n.Switch, "successDisabledColor", C(n.success.main, 0.55)), s(n.Switch, "warningDisabledColor", C(n.warning.main, 0.55)), s(n.TableCell, "border", C(ae(n.divider, 1), 0.68)), s(n.Tooltip, "bg", ae(n.grey[700], 0.92));
      }
      L(n.background, "default"), L(n.background, "paper"), L(n.common, "background"), L(n.common, "onBackground"), L(n, "divider"), Object.keys(n).forEach((B) => {
        const I = n[B];
        B !== "tonalOffset" && I && typeof I == "object" && (I.main && s(n[B], "mainChannel", ee(te(I.main))), I.light && s(n[B], "lightChannel", ee(te(I.light))), I.dark && s(n[B], "darkChannel", ee(te(I.dark))), I.contrastText && s(n[B], "contrastTextChannel", ee(te(I.contrastText))), B === "text" && (L(n[B], "primary"), L(n[B], "secondary")), B === "action" && (I.active && L(n[B], "active"), I.selected && L(n[B], "selected")));
      });
    }), y = t.reduce((O, n) => R(O, n), y);
    const v = {
      prefix: a,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: l,
      getSelector: zr(y)
    }, { vars: H, generateThemeVars: J, generateStyleSheets: W } = Cr(y, v);
    return y.vars = H, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([O, n]) => {
      y[O] = n;
    }), y.generateThemeVars = J, y.generateStyleSheets = W, y.generateSpacing = function() {
      return He.createSpacing(d.spacing, Oe(this));
    }, y.getColorSchemeSelector = kr(c), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = l, y.unstable_sxConfig = {
      ...be,
      ...d == null ? void 0 : d.unstable_sxConfig
    }, y.unstable_sx = function(n) {
      return Se({
        sx: n,
        theme: this
      });
    }, y.toRuntimeSource = qe, y;
  };
  function ze(e, t, r) {
    e.colorSchemes && r && (e.colorSchemes[t] = {
      ...r !== true && r,
      palette: Be({
        ...r === true ? {} : r.palette,
        mode: t
      })
    });
  }
  Nr = function(e = {}, ...t) {
    const { palette: r, cssVariables: i = false, colorSchemes: o = r ? void 0 : {
      light: true
    }, defaultColorScheme: a = r == null ? void 0 : r.mode, ...l } = e, c = a || "light", f = o == null ? void 0 : o[c], d = {
      ...o,
      ...r ? {
        [c]: {
          ...typeof f != "boolean" && f,
          palette: r
        }
      } : void 0
    };
    if (i === false) {
      if (!("colorSchemes" in e)) return ce(e, ...t);
      let h = r;
      "palette" in e || d[c] && (d[c] !== true ? h = d[c].palette : c === "dark" && (h = {
        mode: "dark"
      }));
      const g = ce({
        ...e,
        palette: h
      }, ...t);
      return g.defaultColorScheme = c, g.colorSchemes = d, g.palette.mode === "light" && (g.colorSchemes.light = {
        ...d.light !== true && d.light,
        palette: g.palette
      }, ze(g, "dark", d.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
        ...d.dark !== true && d.dark,
        palette: g.palette
      }, ze(g, "light", d.light)), g;
    }
    return !r && !("light" in d) && c === "light" && (d.light = true), Vr({
      ...l,
      colorSchemes: d,
      defaultColorScheme: c,
      ...typeof i != "boolean" && i
    }, ...t);
  };
  Zr = Nr();
});
export {
  de as A,
  ft as B,
  Fr as C,
  Jr as D,
  Er as E,
  _r as F,
  Ar as G,
  Kr as H,
  Lr as I,
  ut as J,
  qr as T,
  __tla,
  ne as a,
  U as b,
  Nr as c,
  Y as d,
  yr as e,
  be as f,
  it as g,
  R as h,
  G as i,
  V as j,
  Zr as k,
  X as l,
  $r as m,
  Vr as n,
  Z as o,
  Q as p,
  Ir as q,
  N as r,
  Se as s,
  pt as t,
  Dr as u,
  He as v,
  Xe as w,
  xe as x,
  $e as y,
  ht as z
};
