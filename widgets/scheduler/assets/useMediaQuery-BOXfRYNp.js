import { n as e } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare___mf_0_emotion_mf_1_react__loadShare__.js-BHa70R9q.js";
import { C as t, _ as n, b as r, d as i, g as a, n as o, o as s, p as c, r as l, s as u, t as d, u as f } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare__react__loadShare__.js-DfDU6gQX.js";
import { n as p } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-FePC3bXN.js";
import { a as m, dt as h, f as g, ft as ee, s as _, t as v } from "./createStyled-dfYyZxbm.js";
var y = typeof window < `u` ? a : c;
function b(e2) {
  return Object.keys(e2).length === 0;
}
function x(t2 = null) {
  let n2 = i(e);
  return !n2 || b(n2) ? t2 : n2;
}
var S = l();
function C({ value: e2, ...t2 }) {
  return p(S.Provider, { value: e2 ?? true, ...t2 });
}
var w = () => i(S) ?? false, T = 0;
function E(e2) {
  let [t2, n2] = r(e2), i2 = e2 || t2;
  return c(() => {
    t2 ?? (T += 1, n2(`mui-${T}`));
  }, [t2]), i2;
}
var D = { ...t }.useId;
function O(e2) {
  if (D !== void 0) {
    let t2 = D();
    return e2 ?? t2;
  }
  return E(e2);
}
var k = g();
function A(e2 = k) {
  return x(e2);
}
var j = `mode`, M = `color-scheme`, N = `data-color-scheme`, P = { ...t }.useSyncExternalStore, te = () => () => {
};
function ne() {
  return P === void 0 || P(te, () => false, () => true);
}
function F(e2) {
  let { defaultMode: t2 = `system`, defaultLightColorScheme: n2 = `light`, defaultDarkColorScheme: r2 = `dark`, modeStorageKey: i2 = j, colorSchemeStorageKey: a2 = M, attribute: o2 = N, colorSchemeNode: s2 = `document.documentElement`, nonce: c2 } = e2 || {}, l2 = ``, u2 = o2;
  if (o2 === `class` && (u2 = `.%s`), o2 === `data` && (u2 = `[data-%s]`), u2.startsWith(`.`)) {
    let e3 = u2.substring(1);
    l2 += `${s2}.classList.remove('${e3}'.replace('%s', light), '${e3}'.replace('%s', dark));
      ${s2}.classList.add('${e3}'.replace('%s', colorScheme));`;
  }
  let d2 = u2.match(/\[([^[\]]+)\]/);
  if (d2) {
    let [e3, t3] = d2[1].split(`=`);
    t3 || (l2 += `${s2}.removeAttribute('${e3}'.replace('%s', light));
      ${s2}.removeAttribute('${e3}'.replace('%s', dark));`), l2 += `
      ${s2}.setAttribute('${e3}'.replace('%s', colorScheme), ${t3 ? `${t3}.replace('%s', colorScheme)` : `""`});`;
  } else u2 !== `.%s` && (l2 += `${s2}.setAttribute('${u2}', colorScheme);`);
  return p(`script`, { suppressHydrationWarning: true, nonce: typeof window > `u` ? c2 : ``, dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i2}') || '${t2}';
  const dark = localStorage.getItem('${a2}-dark') || '${r2}';
  const light = localStorage.getItem('${a2}-light') || '${n2}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l2}
  }
} catch(e){}})();` } }, `mui-color-scheme-init`);
}
function re(e2) {
  return ne() ? F(e2) : null;
}
function I(e2) {
  let { theme: t2, name: n2, props: r2 } = e2;
  return !t2 || !t2.components || !t2.components[n2] || !t2.components[n2].defaultProps ? r2 : h(t2.components[n2].defaultProps, r2);
}
function L(e2) {
  let { props: t2, name: n2, defaultTheme: r2, themeId: i2 } = e2, a2 = A(r2);
  return i2 && (a2 = a2[i2] || a2), I({ theme: a2, name: n2, props: t2 });
}
function R(e2, t2) {
  var _a, _b, _c;
  return u(e2) && t2.indexOf(e2.type.muiName ?? ((_c = (_b = (_a = e2.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
}
var z = v(), ie = (e2, t2) => e2.filter((e3) => t2.includes(e3)), B = (e2, t2, n2) => {
  let r2 = e2.keys[0];
  Array.isArray(t2) ? t2.forEach((t3, r3) => {
    n2((t4, n3) => {
      r3 <= e2.keys.length - 1 && (r3 === 0 ? Object.assign(t4, n3) : t4[e2.up(e2.keys[r3])] = n3);
    }, t3);
  }) : t2 && typeof t2 == `object` ? (Object.keys(t2).length > e2.keys.length ? e2.keys : ie(e2.keys, Object.keys(t2))).forEach((i2) => {
    if (e2.keys.includes(i2)) {
      let a2 = t2[i2];
      a2 !== void 0 && n2((t3, n3) => {
        r2 === i2 ? Object.assign(t3, n3) : t3[e2.up(i2)] = n3;
      }, a2);
    }
  }) : (typeof t2 == `number` || typeof t2 == `string`) && n2((e3, t3) => {
    Object.assign(e3, t3);
  }, t2);
};
function V(e2) {
  return `--Grid-${e2}Spacing`;
}
function H(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
var U = `--Grid-columns`, W = `--Grid-parent-columns`, ae = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return B(e2.breakpoints, t2.size, (e3, t3) => {
    let r2 = {};
    t3 === `grow` && (r2 = { flexBasis: 0, flexGrow: 1, maxWidth: `100%` }), t3 === `auto` && (r2 = { flexBasis: `auto`, flexGrow: 0, flexShrink: 0, maxWidth: `none`, width: `auto` }), typeof t3 == `number` && (r2 = { flexGrow: 0, flexBasis: `auto`, width: `calc(100% * ${t3} / var(${W}) - (var(${W}) - ${t3}) * (var(${H(`column`)}) / var(${W})))` }), e3(n2, r2);
  }), n2;
}, G = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return B(e2.breakpoints, t2.offset, (e3, t3) => {
    let r2 = {};
    t3 === `auto` && (r2 = { marginLeft: `auto` }), typeof t3 == `number` && (r2 = { marginLeft: t3 === 0 ? `0px` : `calc(100% * ${t3} / var(${W}) + var(${H(`column`)}) * ${t3} / var(${W}))` }), e3(n2, r2);
  }), n2;
}, K = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = { [U]: 12 };
  return B(e2.breakpoints, t2.columns, (e3, t3) => {
    let r2 = t3 ?? 12;
    e3(n2, { [U]: r2, "> *": { [W]: r2 } });
  }), n2;
}, q = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return B(e2.breakpoints, t2.rowSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [V(`row`)]: i2, "> *": { [H(`row`)]: i2 } });
  }), n2;
}, oe = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return B(e2.breakpoints, t2.columnSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [V(`column`)]: i2, "> *": { [H(`column`)]: i2 } });
  }), n2;
}, se = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return B(e2.breakpoints, t2.direction, (e3, t3) => {
    e3(n2, { flexDirection: t3 });
  }), n2;
}, ce = ({ ownerState: e2 }) => ({ minWidth: 0, boxSizing: `border-box`, ...e2.container && { display: `flex`, flexWrap: `wrap`, ...e2.wrap && e2.wrap !== `wrap` && { flexWrap: e2.wrap }, gap: `var(${V(`row`)}) var(${V(`column`)})` } }), J = (e2) => {
  let t2 = [];
  return Object.entries(e2).forEach(([e3, n2]) => {
    n2 !== false && n2 !== void 0 && t2.push(`grid-${e3}-${String(n2)}`);
  }), t2;
}, Y = (e2, t2 = `xs`) => {
  function n2(e3) {
    return e3 === void 0 ? false : typeof e3 == `string` && !Number.isNaN(Number(e3)) || typeof e3 == `number` && e3 > 0;
  }
  if (n2(e2)) return [`spacing-${t2}-${String(e2)}`];
  if (typeof e2 == `object` && !Array.isArray(e2)) {
    let t3 = [];
    return Object.entries(e2).forEach(([e3, r2]) => {
      n2(r2) && t3.push(`spacing-${e3}-${String(r2)}`);
    }), t3;
  }
  return [];
}, X = (e2) => e2 === void 0 ? [] : typeof e2 == `object` ? Object.entries(e2).map(([e3, t2]) => `direction-${e3}-${t2}`) : [`direction-xs-${String(e2)}`], Z = g(), le = z(`div`, { name: `MuiGrid`, slot: `Root` });
function ue(e2) {
  return L({ props: e2, name: `MuiGrid`, defaultTheme: Z });
}
function de(e2 = {}) {
  let { createStyledComponent: t2 = le, useThemeProps: n2 = ue, useTheme: r2 = A, componentName: i2 = `MuiGrid` } = e2, a2 = (e3, t3) => {
    let { container: n3, direction: r3, spacing: a3, wrap: o2, size: s2 } = e3, c3 = { root: [`root`, n3 && `container`, o2 !== `wrap` && `wrap-xs-${String(o2)}`, ...X(r3), ...J(s2), ...n3 ? Y(a3, t3.breakpoints.keys[0]) : []] };
    return m(c3, (e4) => _(i2, e4), {});
  };
  function c2(e3, t3, n3 = () => true) {
    let r3 = {};
    return e3 === null || (Array.isArray(e3) ? e3.forEach((e4, i3) => {
      e4 !== null && n3(e4) && t3.keys[i3] && (r3[t3.keys[i3]] = e4);
    }) : typeof e3 == `object` ? Object.keys(e3).forEach((t4) => {
      let i3 = e3[t4];
      i3 != null && n3(i3) && (r3[t4] = i3);
    }) : r3[t3.keys[0]] = e3), r3;
  }
  let l2 = t2(K, oe, q, ae, se, ce, G), f2 = s(function(e3, t3) {
    let i3 = r2(), s2 = n2(e3), { className: f3, children: m2, columns: h2 = 12, container: g2 = false, component: _2 = `div`, direction: v2 = `row`, wrap: y2 = `wrap`, size: b2 = {}, offset: x2 = {}, spacing: S2 = 0, rowSpacing: C2 = S2, columnSpacing: w2 = S2, unstable_level: T2 = 0, ...E2 } = s2, D2 = c2(b2, i3.breakpoints, (e4) => e4 !== false), O2 = c2(x2, i3.breakpoints), k2 = e3.columns ?? (T2 ? void 0 : h2), A2 = e3.spacing ?? (T2 ? void 0 : S2), j2 = e3.rowSpacing ?? e3.spacing ?? (T2 ? void 0 : C2), M2 = e3.columnSpacing ?? e3.spacing ?? (T2 ? void 0 : w2), N2 = { ...s2, level: T2, columns: k2, container: g2, direction: v2, wrap: y2, spacing: A2, rowSpacing: j2, columnSpacing: M2, size: D2, offset: O2 }, P2 = a2(N2, i3);
    return p(l2, { ref: t3, as: _2, ownerState: N2, className: ee(P2.root, f3), ...E2, children: d.map(m2, (e4) => {
      var _a;
      return u(e4) && R(e4, [`Grid`]) && g2 && e4.props.container ? o(e4, { unstable_level: ((_a = e4.props) == null ? void 0 : _a.unstable_level) ?? T2 + 1 }) : e4;
    }) });
  });
  return f2.muiName = `Grid`, f2;
}
function fe(e2, t2, n2, i2, a2) {
  let [o2, s2] = r(() => a2 && n2 ? n2(e2).matches : i2 ? i2(e2).matches : t2);
  return y(() => {
    if (!n2) return;
    let t3 = n2(e2), r2 = () => {
      s2(t3.matches);
    };
    return r2(), t3.addEventListener(`change`, r2), () => {
      t3.removeEventListener(`change`, r2);
    };
  }, [e2, n2]), o2;
}
var Q = { ...t }.useSyncExternalStore;
function pe(e2, t2, r2, i2, a2) {
  let o2 = f(() => t2, [t2]), s2 = n(() => {
    if (a2 && r2) return () => r2(e2).matches;
    if (i2 !== null) {
      let { matches: t3 } = i2(e2);
      return () => t3;
    }
    return o2;
  }, [o2, e2, i2, a2, r2]), [c2, l2] = n(() => {
    if (r2 === null) return [o2, () => () => {
    }];
    let t3 = r2(e2);
    return [() => t3.matches, (e3) => (t3.addEventListener(`change`, e3), () => {
      t3.removeEventListener(`change`, e3);
    })];
  }, [o2, r2, e2]);
  return Q(l2, c2, s2);
}
function $(e2 = {}) {
  let { themeId: t2 } = e2;
  return function(e3, r2 = {}) {
    let i2 = x();
    i2 && t2 && (i2 = i2[t2] || i2);
    let a2 = typeof window < `u` && window.matchMedia !== void 0 ? window.matchMedia : null, { defaultMatches: o2 = false, matchMedia: s2, ssrMatchMedia: c2 = null, noSsr: l2 = false } = I({ name: `MuiUseMediaQuery`, props: r2, theme: i2 }), u2 = n(() => s2 === void 0 ? a2 === null ? null : a2.bind(window) : s2, [s2, a2]), d2 = typeof e3 == `function` ? e3(i2) : e3;
    return d2 = d2.replace(/^@media( ?)/m, ``), d2.includes(`print`) && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", `Using the print media query to modify print styles can lead to unexpected results.`, "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Q === void 0 ? fe : pe)(d2, o2, u2, c2, l2);
  };
}
var me = $();
export {
  y as S,
  A as _,
  J as a,
  w as b,
  z as c,
  I as d,
  N as f,
  F as g,
  re as h,
  X as i,
  R as l,
  j as m,
  me as n,
  Y as o,
  M as p,
  de as r,
  B as s,
  $ as t,
  L as u,
  O as v,
  x,
  C as y
};
