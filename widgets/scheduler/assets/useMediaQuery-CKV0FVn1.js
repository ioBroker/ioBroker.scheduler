import { E as e, O as t, S as n, T as r, b as i, d as a, f as o, g as s, gt as c, h as l, j as u, o as d, u as f, y as p } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__108432574651544__loadShare__shared-TMCjcIVW.js";
import { a as m, dt as h, f as g, ft as ee, s as _, t as v } from "./createStyled-BG7FRUE4.js";
var y = typeof window < `u` ? r : n;
function b(e2) {
  return Object.keys(e2).length === 0;
}
function x(e2 = null) {
  let t2 = i(c);
  return !t2 || b(t2) ? e2 : t2;
}
var S = o(void 0);
function C({ value: e2, ...t2 }) {
  return d(S.Provider, { value: e2 ?? true, ...t2 });
}
var w = () => i(S) ?? false, T = 0;
function E(e2) {
  let [r2, i2] = t(e2), a2 = e2 || r2;
  return n(() => {
    r2 ?? (T += 1, i2(`mui-${T}`));
  }, [r2]), a2;
}
var D = { ...u }.useId;
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
var j = `mode`, M = `color-scheme`, N = `data-color-scheme`, P = { ...u }.useSyncExternalStore, te = () => () => {
};
function F(e2) {
  return JSON.stringify(e2).replace(/</g, `\\u003c`).replace(/\u2028/g, `\\u2028`).replace(/\u2029/g, `\\u2029`);
}
function I(e2, t2) {
  let n2 = e2.split(`%s`), r2 = [];
  for (let e3 = 0; e3 < n2.length; e3 += 1) e3 > 0 && r2.push(t2), n2[e3] && r2.push(F(n2[e3]));
  return r2.join(` + `) || `""`;
}
function ne() {
  return P === void 0 || P(te, () => false, () => true);
}
function L(e2) {
  let { defaultMode: t2 = `system`, defaultLightColorScheme: n2 = `light`, defaultDarkColorScheme: r2 = `dark`, modeStorageKey: i2 = j, colorSchemeStorageKey: a2 = M, attribute: o2 = N, colorSchemeNode: s2 = `document.documentElement`, nonce: c2 } = e2 || {}, l2 = ``, u2 = o2;
  if (o2 === `class` && (u2 = `.%s`), o2 === `data` && (u2 = `[data-%s]`), u2.startsWith(`.`)) {
    let e3 = u2.substring(1);
    l2 += `${s2}.classList.remove(${I(e3, `light`)}, ${I(e3, `dark`)});
      ${s2}.classList.add(${I(e3, `colorScheme`)});`;
  }
  let f2 = u2.match(/\[([^[\]]+)\]/);
  if (f2) {
    let e3 = f2[1].indexOf(`=`), t3 = e3 === -1 ? f2[1] : f2[1].slice(0, e3), n3 = e3 === -1 ? void 0 : f2[1].slice(e3 + 1);
    n3 || (l2 += `${s2}.removeAttribute(${I(t3, `light`)});
      ${s2}.removeAttribute(${I(t3, `dark`)});`);
    let r3 = n3 ? I(n3.replace(/^(['"])(.*)\1$/, `$2`), `colorScheme`) : `""`;
    l2 += `
      ${s2}.setAttribute(${I(t3, `colorScheme`)}, ${r3});`;
  } else u2.startsWith(`.`) || (l2 += `${s2}.setAttribute(${F(u2)}, colorScheme);`);
  return d(`script`, { suppressHydrationWarning: true, nonce: typeof window > `u` ? c2 : ``, dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem(${F(i2)}) || ${F(t2)};
  const dark = localStorage.getItem(${F(`${a2}-dark`)}) || ${F(r2)};
  const light = localStorage.getItem(${F(`${a2}-light`)}) || ${F(n2)};
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
  return ne() ? L(e2) : null;
}
function R(e2) {
  let { theme: t2, name: n2, props: r2 } = e2;
  return !t2 || !t2.components || !t2.components[n2] || !t2.components[n2].defaultProps ? r2 : h(t2.components[n2].defaultProps, r2);
}
function z(e2) {
  let { props: t2, name: n2, defaultTheme: r2, themeId: i2 } = e2, a2 = A(r2);
  return i2 && (a2 = a2[i2] || a2), R({ theme: a2, name: n2, props: t2 });
}
function B(e2, t2) {
  var _a, _b, _c;
  return s(e2) && t2.indexOf(e2.type.muiName ?? ((_c = (_b = (_a = e2.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
}
var V = v(), ie = (e2, t2) => e2.filter((e3) => t2.includes(e3)), H = (e2, t2, n2) => {
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
function U(e2) {
  return `--Grid-${e2}Spacing`;
}
function W(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
var G = `--Grid-columns`, K = `--Grid-parent-columns`, ae = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return H(e2.breakpoints, t2.size, (e3, t3) => {
    let r2 = {};
    t3 === `grow` && (r2 = { flexBasis: 0, flexGrow: 1, maxWidth: `100%` }), t3 === `auto` && (r2 = { flexBasis: `auto`, flexGrow: 0, flexShrink: 0, maxWidth: `none`, width: `auto` }), typeof t3 == `number` && (r2 = { flexGrow: 0, flexBasis: `auto`, width: `calc(100% * ${t3} / var(${K}) - (var(${K}) - ${t3}) * (var(${W(`column`)}) / var(${K})))` }), e3(n2, r2);
  }), n2;
}, q = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return H(e2.breakpoints, t2.offset, (e3, t3) => {
    let r2 = {};
    t3 === `auto` && (r2 = { marginLeft: `auto` }), typeof t3 == `number` && (r2 = { marginLeft: t3 === 0 ? `0px` : `calc(100% * ${t3} / var(${K}) + var(${W(`column`)}) * ${t3} / var(${K}))` }), e3(n2, r2);
  }), n2;
}, oe = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = { [G]: 12 };
  return H(e2.breakpoints, t2.columns, (e3, t3) => {
    let r2 = t3 ?? 12;
    e3(n2, { [G]: r2, "> *": { [K]: r2 } });
  }), n2;
}, se = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return H(e2.breakpoints, t2.rowSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [U(`row`)]: i2, "> *": { [W(`row`)]: i2 } });
  }), n2;
}, ce = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return H(e2.breakpoints, t2.columnSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [U(`column`)]: i2, "> *": { [W(`column`)]: i2 } });
  }), n2;
}, le = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return H(e2.breakpoints, t2.direction, (e3, t3) => {
    e3(n2, { flexDirection: t3 });
  }), n2;
}, ue = ({ ownerState: e2 }) => ({ minWidth: 0, boxSizing: `border-box`, ...e2.container && { display: `flex`, flexWrap: `wrap`, ...e2.wrap && e2.wrap !== `wrap` && { flexWrap: e2.wrap }, gap: `var(${U(`row`)}) var(${U(`column`)})` } }), J = (e2) => {
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
}, X = (e2) => e2 === void 0 ? [] : typeof e2 == `object` ? Object.entries(e2).map(([e3, t2]) => `direction-${e3}-${t2}`) : [`direction-xs-${String(e2)}`], de = g(), Z = V(`div`, { name: `MuiGrid`, slot: `Root` });
function fe(e2) {
  return z({ props: e2, name: `MuiGrid`, defaultTheme: de });
}
function pe(e2 = {}) {
  let { createStyledComponent: t2 = Z, useThemeProps: n2 = fe, useTheme: r2 = A, componentName: i2 = `MuiGrid` } = e2, o2 = (e3, t3) => {
    let { container: n3, direction: r3, spacing: a2, wrap: o3, size: s2 } = e3, c3 = { root: [`root`, n3 && `container`, o3 !== `wrap` && `wrap-xs-${String(o3)}`, ...X(r3), ...J(s2), ...n3 ? Y(a2, t3.breakpoints.keys[0]) : []] };
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
  let u2 = t2(oe, ce, se, ae, le, ue, q), p2 = l(function(e3, t3) {
    let i3 = r2(), l2 = n2(e3), { className: p3, children: m2, columns: h2 = 12, container: g2 = false, component: _2 = `div`, direction: v2 = `row`, wrap: y2 = `wrap`, size: b2 = {}, offset: x2 = {}, spacing: S2 = 0, rowSpacing: C2 = S2, columnSpacing: w2 = S2, unstable_level: T2 = 0, ...E2 } = l2, D2 = c2(b2, i3.breakpoints, (e4) => e4 !== false), O2 = c2(x2, i3.breakpoints), k2 = e3.columns ?? (T2 ? void 0 : h2), A2 = e3.spacing ?? (T2 ? void 0 : S2), j2 = e3.rowSpacing ?? e3.spacing ?? (T2 ? void 0 : C2), M2 = e3.columnSpacing ?? e3.spacing ?? (T2 ? void 0 : w2), N2 = { ...l2, level: T2, columns: k2, container: g2, direction: v2, wrap: y2, spacing: A2, rowSpacing: j2, columnSpacing: M2, size: D2, offset: O2 }, P2 = o2(N2, i3);
    return d(u2, { ref: t3, as: _2, ownerState: N2, className: ee(P2.root, p3), ...E2, children: f.map(m2, (e4) => {
      var _a;
      return s(e4) && B(e4, [`Grid`]) && g2 && e4.props.container ? a(e4, { unstable_level: ((_a = e4.props) == null ? void 0 : _a.unstable_level) ?? T2 + 1 }) : e4;
    }) });
  });
  return p2.muiName = `Grid`, p2;
}
function me(e2, n2, r2, i2, a2) {
  let [o2, s2] = t(() => a2 && r2 ? r2(e2).matches : i2 ? i2(e2).matches : n2);
  return y(() => {
    if (!r2) return;
    let t2 = r2(e2), n3 = () => {
      s2(t2.matches);
    };
    return n3(), t2.addEventListener(`change`, n3), () => {
      t2.removeEventListener(`change`, n3);
    };
  }, [e2, r2]), o2;
}
var Q = { ...u }.useSyncExternalStore;
function he(t2, n2, r2, i2, a2) {
  let o2 = p(() => n2, [n2]), s2 = e(() => {
    if (a2 && r2) return () => r2(t2).matches;
    if (i2 !== null) {
      let { matches: e2 } = i2(t2);
      return () => e2;
    }
    return o2;
  }, [o2, t2, i2, a2, r2]), [c2, l2] = e(() => {
    if (r2 === null) return [o2, () => () => {
    }];
    let e2 = r2(t2);
    return [() => e2.matches, (t3) => (e2.addEventListener(`change`, t3), () => {
      e2.removeEventListener(`change`, t3);
    })];
  }, [o2, r2, t2]);
  return Q(l2, c2, s2);
}
function $(t2 = {}) {
  let { themeId: n2 } = t2;
  return function(t3, r2 = {}) {
    let i2 = x();
    i2 && n2 && (i2 = i2[n2] || i2);
    let a2 = typeof window < `u` && window.matchMedia !== void 0 ? window.matchMedia : null, { defaultMatches: o2 = false, matchMedia: s2, ssrMatchMedia: c2 = null, noSsr: l2 = false } = R({ name: `MuiUseMediaQuery`, props: r2, theme: i2 }), u2 = e(() => s2 === void 0 ? a2 === null ? null : a2.bind(window) : s2, [s2, a2]), d2 = typeof t3 == `function` ? t3(i2) : t3;
    return d2 = d2.replace(/^@media( ?)/m, ``), d2.includes(`print`) && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", `Using the print media query to modify print styles can lead to unexpected results.`, "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Q === void 0 ? me : he)(d2, o2, u2, c2, l2);
  };
}
var ge = $();
export {
  y as S,
  A as _,
  J as a,
  w as b,
  V as c,
  R as d,
  N as f,
  L as g,
  re as h,
  X as i,
  B as l,
  j as m,
  ge as n,
  Y as o,
  M as p,
  pe as r,
  H as s,
  $ as t,
  z as u,
  O as v,
  x,
  C as y
};
