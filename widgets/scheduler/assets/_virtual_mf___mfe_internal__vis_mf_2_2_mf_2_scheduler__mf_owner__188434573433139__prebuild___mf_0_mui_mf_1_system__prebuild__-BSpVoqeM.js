import { n as e } from "./rolldown-runtime-XKyaHtl9.js";
import { $ as t, $t as n, A as r, At as i, B as a, Bt as o, C as s, Ct as c, D as l, Dt as u, E as d, Et as f, F as p, Ft as m, G as h, Gt as g, H as _, Ht as v, I as y, It as b, J as x, Jt as S, K as C, Kt as ee, L as w, Lt as te, M as T, Mt as E, N as ne, Nt as re, O as D, Ot as O, P as k, Pt as A, Q as j, Qt as M, R as ie, Rt as ae, S as oe, St as N, T as se, Tt as P, U as F, Ut as ce, V as I, Vt as L, W as R, Wt as z, X as B, Y as V, Yt as le, Z as ue, Zt as de, _ as fe, _t as pe, a as me, at as he, b as ge, bt as _e, c as ve, ct as ye, d as be, en as xe, et as Se, f as Ce, ft as H, g as we, gt as Te, h as Ee, ht as De, i as Oe, it as ke, j as Ae, jt as je, k as Me, kt as U, l as Ne, lt as Pe, m as Fe, mt as Ie, n as Le, nt as Re, o as W, ot as G, p as ze, pt as Be, q as Ve, qt as He, r as Ue, rt as We, s as K, st as Ge, t as Ke, tt as qe, u as Je, v as Ye, vt as Xe, w as Ze, wt as Qe, x as $e, xt as et, y as tt, yt as nt, z as rt, zt as it } from "./createStyled-BKi0ou9I.js";
import { D as at, E as q, O as ot, S as J, _t as st, at as ct, b as lt, bt as ut, d as dt, f as ft, gt as pt, h as mt, ht, it as gt, o as Y, s as _t, u as vt, vt as yt, x as bt, y as xt } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__188434573433139__loadShare__shared-D9z2PFkA.js";
import { n as St, t as Ct } from "./emotion-cache.browser.esm--RCZvsJA.js";
import { S as wt, _ as Tt, a as Et, b as Dt, c as Ot, d as kt, f as At, g as jt, i as Mt, m as Nt, n as Pt, o as Ft, p as It, r as Lt, s as Rt, u as zt, v as Bt, x as X, y as Vt } from "./useMediaQuery-lC-F__CQ.js";
var Ht = {}, Ut = /* @__PURE__ */ new Map(), Wt = { insert: void 0 }, Gt = (e2, t2) => {
  let n2 = Ct(e2);
  return n2.sheet = new t2({ key: n2.key, nonce: n2.sheet.nonce, container: n2.sheet.container, speedy: n2.sheet.isSpeedy, prepend: n2.sheet.prepend, insertionPoint: n2.sheet.insertionPoint }), n2;
}, Z;
if (typeof document == `object` && (Z = document.querySelector(`[name="emotion-insertion-point"]`), !Z)) {
  Z = document.createElement(`meta`), Z.setAttribute(`name`, `emotion-insertion-point`), Z.setAttribute(`content`, ``);
  let e2 = document.querySelector(`head`);
  e2 && e2.prepend(Z);
}
function Kt(e2, t2) {
  if (e2 || t2) {
    class n2 extends St {
      insert(e3, t3) {
        return Wt.insert ? Wt.insert(e3, t3) : (this.key && this.key.endsWith(`global`) && (this.before = Z), super.insert(e3, t3));
      }
    }
    let r2 = Gt({ key: t2 ? `mui` : `css`, insertionPoint: e2 ? Z : void 0 }, n2);
    if (t2) {
      let e3 = r2.insert;
      r2.insert = (...t3) => (t3[1].styles.match(/^@layer\s+[^{]*$/) || (t3[1].styles = `@layer mui {${t3[1].styles}}`), e3(...t3));
    }
    return r2;
  }
}
function qt(e2) {
  let { injectFirst: t2, enableCssLayer: n2, children: r2 } = e2, i2 = q(() => {
    let e3 = `${t2}-${n2}`;
    if (typeof document == `object` && Ut.has(e3)) return Ut.get(e3);
    let r3 = Kt(t2, n2);
    return Ut.set(e3, r3), r3;
  }, [t2, n2]);
  return i2 ? Y(ht, { value: i2, children: r2 }) : r2;
}
function Jt(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function Yt(e2) {
  let { styles: t2, defaultTheme: n2 = {} } = e2;
  return Y(ut, { styles: typeof t2 == `function` ? (e3) => t2(Jt(e3) ? n2 : e3) : t2 });
}
function Xt(e2) {
  let t2 = Be(e2);
  return e2 !== t2 && t2.styles ? (t2.styles.match(/^@layer\s+[^{]*$/) || (t2.styles = `@layer global{${t2.styles}}`), t2) : e2;
}
function Zt({ styles: e2, themeId: t2, defaultTheme: n2 = {} }) {
  let r2 = Tt(n2), i2 = t2 && r2[t2] || r2, a2 = typeof e2 == `function` ? e2(i2) : e2;
  return i2.modularCssLayers && (a2 = Array.isArray(a2) ? a2.map((e3) => Xt(typeof e3 == `function` ? e3(i2) : e3)) : Xt(a2)), Y(Yt, { styles: a2 });
}
function Qt(e2) {
  let t2 = X(), n2 = Bt() || ``, { modularCssLayers: r2 } = e2, i2 = `mui.global, mui.components, mui.theme, mui.custom, mui.sx`;
  return i2 = !r2 || t2 !== null ? `` : typeof r2 == `string` ? r2.replace(/mui(?!\.)/g, i2) : `@layer ${i2};`, wt(() => {
    var _a2, _b;
    let e3 = document.querySelector(`head`);
    if (!e3) return;
    let t3 = e3.firstChild;
    if (i2) {
      if (t3 && ((_a2 = t3.hasAttribute) == null ? void 0 : _a2.call(t3, `data-mui-layer-order`)) && t3.getAttribute(`data-mui-layer-order`) === n2) return;
      let r3 = document.createElement(`style`);
      r3.setAttribute(`data-mui-layer-order`, n2), r3.textContent = i2, e3.prepend(r3);
    } else (_b = e3.querySelector(`style[data-mui-layer-order="${n2}"]`)) == null ? void 0 : _b.remove();
  }, [i2, n2]), i2 ? Y(Zt, { styles: i2 }) : null;
}
var $t = {};
function en(e2, t2, n2, r2 = false) {
  return q(() => {
    let i2 = e2 && t2[e2] || t2;
    if (typeof n2 == `function`) {
      let a2 = n2(i2), o2 = e2 ? { ...t2, [e2]: a2 } : a2;
      return r2 ? () => o2 : o2;
    }
    return e2 ? { ...t2, [e2]: n2 } : { ...t2, ...n2 };
  }, [e2, t2, n2, r2]);
}
function tn(e2) {
  let { children: t2, theme: n2, themeId: r2 } = e2, i2 = X($t), a2 = ct() || $t, o2 = en(r2, i2, n2), s2 = en(r2, a2, n2, true), c2 = (r2 ? o2[r2] : o2).direction === `rtl`, l2 = Qt(o2);
  return Y(gt, { theme: s2, children: Y(pt.Provider, { value: o2, children: Y(Vt, { value: c2, children: _t(Pe, { value: r2 ? o2[r2].components : o2.components, children: [l2, t2] }) }) }) });
}
function nn() {
}
var rn = ({ key: e2, storageWindow: t2 }) => (!t2 && typeof window < `u` && (t2 = window), { get(n2) {
  if (typeof window > `u`) return;
  if (!t2) return n2;
  let r2;
  try {
    r2 = t2.localStorage.getItem(e2);
  } catch {
  }
  return r2 || n2;
}, set: (n2) => {
  if (t2) try {
    t2.localStorage.setItem(e2, n2);
  } catch {
  }
}, subscribe: (n2) => {
  if (!t2) return nn;
  let r2 = (t3) => {
    let r3 = t3.newValue;
    t3.key === e2 && n2(r3);
  };
  return t2.addEventListener(`storage`, r2), () => {
    t2.removeEventListener(`storage`, r2);
  };
} });
function an() {
}
function on(e2) {
  if (typeof window < `u` && typeof window.matchMedia == `function` && e2 === `system`) return window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
}
function sn(e2, t2) {
  if (e2.mode === `light` || e2.mode === `system` && e2.systemMode === `light`) return t2(`light`);
  if (e2.mode === `dark` || e2.mode === `system` && e2.systemMode === `dark`) return t2(`dark`);
}
function cn(e2) {
  return sn(e2, (t2) => {
    if (t2 === `light`) return e2.lightColorScheme;
    if (t2 === `dark`) return e2.darkColorScheme;
  });
}
function ln(e2) {
  let { defaultMode: t2 = `light`, defaultLightColorScheme: n2, defaultDarkColorScheme: r2, supportedColorSchemes: i2 = [], modeStorageKey: a2 = Nt, colorSchemeStorageKey: o2 = It, storageWindow: s2 = typeof window > `u` ? void 0 : window, storageManager: c2 = rn, noSsr: l2 = false } = e2, u2 = i2.join(`,`), d2 = i2.length > 1, f2 = q(() => c2 == null ? void 0 : c2({ key: a2, storageWindow: s2 }), [c2, a2, s2]), p2 = q(() => c2 == null ? void 0 : c2({ key: `${o2}-light`, storageWindow: s2 }), [c2, o2, s2]), m2 = q(() => c2 == null ? void 0 : c2({ key: `${o2}-dark`, storageWindow: s2 }), [c2, o2, s2]), [h2, g2] = ot(() => {
    let e3 = (f2 == null ? void 0 : f2.get(t2)) || t2, i3 = (p2 == null ? void 0 : p2.get(n2)) || n2, a3 = (m2 == null ? void 0 : m2.get(r2)) || r2;
    return { mode: e3, systemMode: on(e3), lightColorScheme: i3, darkColorScheme: a3 };
  }), [_2, v2] = ot(l2 || !d2);
  J(() => {
    v2(true);
  }, []);
  let y2 = cn(h2), b2 = xt((e3) => {
    g2((n3) => {
      if (e3 === n3.mode) return n3;
      let r3 = e3 ?? t2;
      return f2 == null ? void 0 : f2.set(r3), { ...n3, mode: r3, systemMode: on(r3) };
    });
  }, [f2, t2]), x2 = xt((e3) => {
    e3 ? typeof e3 == `string` ? e3 && !u2.includes(e3) ? console.error(`\`${e3}\` does not exist in \`theme.colorSchemes\`.`) : g2((t3) => {
      let n3 = { ...t3 };
      return sn(t3, (t4) => {
        t4 === `light` && (p2 == null ? void 0 : p2.set(e3), n3.lightColorScheme = e3), t4 === `dark` && (m2 == null ? void 0 : m2.set(e3), n3.darkColorScheme = e3);
      }), n3;
    }) : g2((t3) => {
      let i3 = { ...t3 }, a3 = e3.light === null ? n2 : e3.light, o3 = e3.dark === null ? r2 : e3.dark;
      return a3 && (u2.includes(a3) ? (i3.lightColorScheme = a3, p2 == null ? void 0 : p2.set(a3)) : console.error(`\`${a3}\` does not exist in \`theme.colorSchemes\`.`)), o3 && (u2.includes(o3) ? (i3.darkColorScheme = o3, m2 == null ? void 0 : m2.set(o3)) : console.error(`\`${o3}\` does not exist in \`theme.colorSchemes\`.`)), i3;
    }) : g2((e4) => (p2 == null ? void 0 : p2.set(n2), m2 == null ? void 0 : m2.set(r2), { ...e4, lightColorScheme: n2, darkColorScheme: r2 }));
  }, [u2, p2, m2, n2, r2]), S2 = xt((e3) => {
    h2.mode === `system` && g2((t3) => {
      let n3 = (e3 == null ? void 0 : e3.matches) ? `dark` : `light`;
      return t3.systemMode === n3 ? t3 : { ...t3, systemMode: n3 };
    });
  }, [h2.mode]), C2 = at(S2);
  return C2.current = S2, J(() => {
    if (typeof window.matchMedia != `function` || !d2) return;
    let e3 = (...e4) => C2.current(...e4), t3 = window.matchMedia(`(prefers-color-scheme: dark)`);
    return t3.addListener(e3), e3(t3), () => {
      t3.removeListener(e3);
    };
  }, [d2]), J(() => {
    if (d2) {
      let e3 = (f2 == null ? void 0 : f2.subscribe((e4) => {
        (!e4 || [`light`, `dark`, `system`].includes(e4)) && b2(e4 || t2);
      })) || an, n3 = (p2 == null ? void 0 : p2.subscribe((e4) => {
        (!e4 || u2.match(e4)) && x2({ light: e4 });
      })) || an, r3 = (m2 == null ? void 0 : m2.subscribe((e4) => {
        (!e4 || u2.match(e4)) && x2({ dark: e4 });
      })) || an;
      return () => {
        e3(), n3(), r3();
      };
    }
  }, [x2, b2, u2, t2, s2, d2, f2, p2, m2]), { ...h2, mode: _2 ? h2.mode : void 0, systemMode: _2 ? h2.systemMode : void 0, colorScheme: _2 ? y2 : void 0, setMode: b2, setColorScheme: x2 };
}
var un = `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function dn(e2) {
  let { themeId: t2, theme: n2 = {}, modeStorageKey: r2 = Nt, colorSchemeStorageKey: i2 = It, disableTransitionOnChange: a2 = false, defaultColorScheme: o2, resolveTheme: s2 } = e2, c2 = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, l2 = ft(void 0), u2 = () => lt(l2) || c2, d2 = {}, f2 = {};
  function p2(e3) {
    var _a2, _b, _c, _d;
    let { children: c3, theme: u3, modeStorageKey: p3 = r2, colorSchemeStorageKey: m3 = i2, disableTransitionOnChange: h3 = a2, storageManager: g2, storageWindow: _2 = typeof window > `u` ? void 0 : window, documentNode: v2 = typeof document > `u` ? void 0 : document, colorSchemeNode: y2 = typeof document > `u` ? void 0 : document.documentElement, disableNestedContext: b2 = false, disableStyleSheetGeneration: x2 = false, defaultMode: S2 = `system`, forceThemeRerender: C2 = false, noSsr: ee2 } = e3, w2 = at(false), te2 = ct(), T2 = lt(l2), E2 = !!T2 && !b2, ne2 = q(() => u3 || (typeof n2 == `function` ? n2() : n2), [u3]), re2 = ne2[t2], D2 = re2 || ne2, { colorSchemes: O2 = d2, components: k2 = f2, cssVarPrefix: A2 } = D2, j2 = Object.keys(O2).filter((e4) => !!O2[e4]).join(`,`), M2 = q(() => j2.split(`,`), [j2]), ie2 = typeof o2 == `string` ? o2 : o2.light, ae2 = typeof o2 == `string` ? o2 : o2.dark, { mode: oe2, setMode: N2, systemMode: se2, lightColorScheme: P2, darkColorScheme: F2, colorScheme: ce2, setColorScheme: I2 } = ln({ supportedColorSchemes: M2, defaultLightColorScheme: ie2, defaultDarkColorScheme: ae2, modeStorageKey: p3, colorSchemeStorageKey: m3, defaultMode: O2[ie2] && O2[ae2] ? S2 : ((_b = (_a2 = O2[D2.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c = D2.palette) == null ? void 0 : _c.mode), storageManager: g2, storageWindow: _2, noSsr: ee2 }), L2 = oe2, R2 = ce2;
    E2 && (L2 = T2.mode, R2 = T2.colorScheme);
    let z2 = R2 || D2.defaultColorScheme;
    D2.vars && !C2 && (z2 = D2.defaultColorScheme);
    let B2 = q(() => {
      var _a3;
      let e4 = ((_a3 = D2.generateThemeVars) == null ? void 0 : _a3.call(D2)) || D2.vars, t3 = { ...D2, components: k2, colorSchemes: O2, cssVarPrefix: A2, vars: e4 };
      if (typeof t3.generateSpacing == `function` && (t3.spacing = t3.generateSpacing()), z2) {
        let e5 = O2[z2];
        e5 && typeof e5 == `object` && Object.keys(e5).forEach((n3) => {
          e5[n3] && typeof e5[n3] == `object` ? t3[n3] = { ...t3[n3], ...e5[n3] } : t3[n3] = e5[n3];
        });
      }
      return s2 ? s2(t3) : t3;
    }, [D2, z2, k2, O2, A2]), V2 = D2.colorSchemeSelector;
    wt(() => {
      if (R2 && y2 && V2 && V2 !== `media`) {
        let e4 = V2, t3 = V2;
        if (e4 === `class` && (t3 = `.%s`), e4 === `data` && (t3 = `[data-%s]`), (e4 == null ? void 0 : e4.startsWith(`data-`)) && !e4.includes(`%s`) && (t3 = `[${e4}="%s"]`), t3.startsWith(`.`)) y2.classList.remove(...M2.map((e5) => t3.substring(1).replace(`%s`, e5))), y2.classList.add(t3.substring(1).replace(`%s`, R2));
        else {
          let e5 = t3.replace(`%s`, R2).match(/\[([^\]]+)\]/);
          if (e5) {
            let [t4, n3] = e5[1].split(`=`);
            n3 || M2.forEach((e6) => {
              y2.removeAttribute(t4.replace(R2, e6));
            }), y2.setAttribute(t4, n3 ? n3.replace(/"|'/g, ``) : ``);
          } else y2.setAttribute(t3, R2);
        }
      }
    }, [R2, V2, y2, M2]), J(() => {
      let e4;
      if (h3 && w2.current && v2) {
        let t3 = v2.createElement(`style`);
        t3.appendChild(v2.createTextNode(un)), v2.head.appendChild(t3), window.getComputedStyle(v2.body), e4 = setTimeout(() => {
          v2.head.removeChild(t3);
        }, 1);
      }
      return () => {
        clearTimeout(e4);
      };
    }, [R2, h3, v2]), J(() => (w2.current = true, () => {
      w2.current = false;
    }), []);
    let le2 = q(() => ({ allColorSchemes: M2, colorScheme: R2, darkColorScheme: F2, lightColorScheme: P2, mode: L2, setColorScheme: I2, setMode: N2, systemMode: se2 }), [M2, R2, F2, P2, L2, I2, N2, se2, B2.colorSchemeSelector]), ue2 = true;
    (x2 || D2.cssVariables === false || E2 && (te2 == null ? void 0 : te2.cssVarPrefix) === A2) && (ue2 = false);
    let de2 = _t(bt, { children: [Y(tn, { themeId: re2 ? t2 : void 0, theme: B2, children: c3 }), ue2 && Y(Yt, { styles: ((_d = B2.generateStyleSheets) == null ? void 0 : _d.call(B2)) || [] })] });
    return E2 ? de2 : Y(l2.Provider, { value: le2, children: de2 });
  }
  let m2 = typeof o2 == `string` ? o2 : o2.light, h2 = typeof o2 == `string` ? o2 : o2.dark;
  return { CssVarsProvider: p2, useColorScheme: u2, getInitColorSchemeScript: (e3) => jt({ colorSchemeStorageKey: i2, defaultLightColorScheme: m2, defaultDarkColorScheme: h2, modeStorageKey: r2, ...e3 }) };
}
function fn({ colorSchemeSelector: e2 = `[${At}="%s"]`, ...t2 }) {
  let n2 = t2, r2 = Je(n2, { ...t2, prefix: t2.cssVarPrefix, colorSchemeSelector: e2 });
  return n2.vars = r2.vars, n2.generateThemeVars = r2.generateThemeVars, n2.generateStyleSheets = r2.generateStyleSheets, n2.colorSchemeSelector = e2, n2.getColorSchemeSelector = Ne(e2), n2.internal_cache = {}, n2;
}
var pn = (e2) => {
  var _a2;
  let t2 = { systemProps: {}, otherProps: {} }, n2 = ((_a2 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Ee;
  return Object.keys(e2).forEach((r2) => {
    n2[r2] ? t2.systemProps[r2] = e2[r2] : t2.otherProps[r2] = e2[r2];
  }), t2;
};
function mn(e2) {
  let { sx: t2, ...n2 } = e2, { systemProps: r2, otherProps: i2 } = pn(n2), a2;
  return a2 = Array.isArray(t2) ? [r2, ...t2] : typeof t2 == `function` ? (...e3) => {
    let n3 = t2(...e3);
    return M(n3) ? { ...r2, ...n3 } : r2;
  } : { ...r2, ...t2 }, { ...i2, sx: a2 };
}
var hn = Lt();
function gn(e2) {
  return K(`MuiGrid`, e2);
}
var _n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vn = [`column-reverse`, `column`, `row-reverse`, `row`], yn = [`nowrap`, `wrap-reverse`, `wrap`], Q = [`auto`, `grow`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], bn = W(`MuiGrid`, [`root`, `container`, `item`, ..._n.map((e2) => `spacing-xs-${e2}`), ...vn.map((e2) => `direction-xs-${e2}`), ...yn.map((e2) => `wrap-xs-${e2}`), ...Q.map((e2) => `grid-xs-${e2}`), ...Q.map((e2) => `grid-sm-${e2}`), ...Q.map((e2) => `grid-md-${e2}`), ...Q.map((e2) => `grid-lg-${e2}`), ...Q.map((e2) => `grid-xl-${e2}`)]), xn = P({ prop: `displayPrint`, cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }), Sn = P({ prop: `display` }), Cn = P({ prop: `overflow` }), wn = P({ prop: `textOverflow` }), Tn = P({ prop: `visibility` }), En = P({ prop: `whiteSpace` }), Dn = G(xn, Sn, Cn, wn, Tn, En), On = P({ prop: `flexBasis` }), kn = P({ prop: `flexDirection` }), An = P({ prop: `flexWrap` }), jn = P({ prop: `justifyContent` }), Mn = P({ prop: `alignItems` }), Nn = P({ prop: `alignContent` }), Pn = P({ prop: `order` }), Fn = P({ prop: `flex` }), In = P({ prop: `flexGrow` }), Ln = P({ prop: `flexShrink` }), Rn = P({ prop: `alignSelf` }), zn = P({ prop: `justifyItems` }), Bn = P({ prop: `justifySelf` }), Vn = G(On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn), Hn = P({ prop: `position` }), Un = P({ prop: `zIndex`, themeKey: `zIndex` }), Wn = P({ prop: `top` }), Gn = P({ prop: `right` }), Kn = P({ prop: `bottom` }), qn = P({ prop: `left` }), Jn = G(Hn, Un, Wn, Gn, Kn, qn), Yn = P({ prop: `boxShadow`, themeKey: `shadows` }), Xn = P({ prop: `fontFamily`, themeKey: `typography` }), Zn = P({ prop: `fontSize`, themeKey: `typography` }), Qn = P({ prop: `fontStyle`, themeKey: `typography` }), $n = P({ prop: `fontWeight`, themeKey: `typography` }), er = P({ prop: `letterSpacing` }), tr = P({ prop: `textTransform` }), nr = P({ prop: `lineHeight` }), rr = P({ prop: `textAlign` }), ir = P({ prop: `typography`, cssProperty: false, themeKey: `typography` }), ar = G(ir, Xn, Zn, Qn, $n, er, nr, rr, tr), or = { borders: We, display: Dn, flexbox: Vn, grid: k, positions: Jn, palette: r, shadows: Yn, sizing: Ze, spacing: N, typography: ar }, sr = Object.keys(or).reduce((e2, t2) => {
  let n2 = or[t2];
  for (let t3 of n2.filterProps) e2[t3] = n2;
  return e2;
}, {});
function cr(e2, t2, n2) {
  let r2 = { [e2]: t2, theme: n2 }, i2 = sr[e2];
  return i2 ? i2(r2) : { [e2]: t2 };
}
function lr(e2 = {}) {
  let { themeId: t2, defaultTheme: n2, defaultClassName: r2 = `MuiBox-root`, generateClassName: i2 } = e2, a2 = Ie(`div`, { shouldForwardProp: (e3) => e3 !== `theme` && e3 !== `sx` && e3 !== `as` })(ze);
  return mt(function(e3, o2) {
    let s2 = Tt(n2), { className: c2, component: l2 = `div`, ...u2 } = e3;
    return Y(a2, { as: l2, ref: o2, className: H(c2, i2 ? i2(r2) : r2), theme: t2 && s2[t2] || s2, ...u2 });
  });
}
var ur = W(`MuiBox`, [`root`]), dr = lr({ defaultClassName: ur.root, generateClassName: ve.generate }), fr = { theme: void 0 };
function pr(e2) {
  let t2, n2;
  return function(r2) {
    let i2 = t2;
    return (i2 === void 0 || r2.theme !== n2) && (fr.theme = r2.theme, i2 = Oe(e2(fr)), t2 = i2, n2 = r2.theme), i2;
  };
}
function mr(e2 = ``) {
  function t2(...n2) {
    if (!n2.length) return ``;
    let r2 = n2[0];
    return typeof r2 == `string` && !r2.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ``}${r2}${t2(...n2.slice(1))})` : `, ${r2}`;
  }
  return (n2, ...r2) => `var(--${e2 ? `${e2}-` : ``}${n2}${t2(...r2)})`;
}
var hr = `9.5.0`, gr = Ce(), _r = Ot(`div`, { name: `MuiContainer`, slot: `Root`, overridesResolver: (e2, t2) => {
  let { ownerState: n2 } = e2;
  return [t2.root, t2[`maxWidth${f(String(n2.maxWidth))}`], n2.fixed && t2.fixed, n2.disableGutters && t2.disableGutters];
} }), vr = (e2) => zt({ props: e2, name: `MuiContainer`, defaultTheme: gr }), yr = (e2, t2) => {
  let n2 = (e3) => K(t2, e3), { classes: r2, fixed: i2, disableGutters: a2, maxWidth: o2 } = e2, s2 = { root: [`root`, o2 && `maxWidth${f(String(o2))}`, i2 && `fixed`, a2 && `disableGutters`] };
  return me(s2, n2, r2);
};
function br(e2 = {}) {
  let { createStyledComponent: t2 = _r, useThemeProps: n2 = vr, componentName: r2 = `MuiContainer` } = e2, i2 = t2(({ theme: e3, ownerState: t3 }) => ({ width: `100%`, marginLeft: `auto`, boxSizing: `border-box`, marginRight: `auto`, ...!t3.disableGutters && { paddingLeft: e3.spacing(2), paddingRight: e3.spacing(2), [e3.breakpoints.up(`sm`)]: { paddingLeft: e3.spacing(3), paddingRight: e3.spacing(3) } } }), ({ theme: e3, ownerState: t3 }) => t3.fixed && Object.keys(e3.breakpoints.values).reduce((t4, n3) => {
    let r3 = n3, i3 = e3.breakpoints.values[r3];
    return i3 !== 0 && (t4[e3.breakpoints.up(r3)] = { maxWidth: `${i3}${e3.breakpoints.unit}` }), t4;
  }, {}), ({ theme: e3, ownerState: t3 }) => ({ ...t3.maxWidth === `xs` && { [e3.breakpoints.up(`xs`)]: { maxWidth: Math.max(e3.breakpoints.values.xs, 444) } }, ...t3.maxWidth && t3.maxWidth !== `xs` && { [e3.breakpoints.up(t3.maxWidth)]: { maxWidth: `${e3.breakpoints.values[t3.maxWidth]}${e3.breakpoints.unit}` } } }));
  return mt(function(e3, t3) {
    let a2 = n2(e3), { className: o2, component: s2 = `div`, disableGutters: c2 = false, fixed: l2 = false, maxWidth: u2 = `lg`, classes: d2, ...f2 } = a2, p2 = { ...a2, component: s2, disableGutters: c2, fixed: l2, maxWidth: u2 }, m2 = yr(p2, r2);
    return Y(i2, { as: s2, ownerState: p2, className: H(m2.root, o2), ref: t3, ...f2 });
  });
}
var xr = br();
function Sr(e2) {
  return K(`MuiContainer`, e2);
}
var Cr = W(`MuiContainer`, [`root`, `disableGutters`, `fixed`, `maxWidthXs`, `maxWidthSm`, `maxWidthMd`, `maxWidthLg`, `maxWidthXl`]), wr = Ce(), Tr = Ot(`div`, { name: `MuiStack`, slot: `Root` });
function Er(e2) {
  return zt({ props: e2, name: `MuiStack`, defaultTheme: wr });
}
function Dr(e2, t2) {
  let n2 = vt.toArray(e2).filter(Boolean);
  return n2.reduce((e3, r2, i2) => (e3.push(r2), i2 < n2.length - 1 && e3.push(dt(t2, { key: `separator-${i2}` })), e3), []);
}
var Or = (e2) => ({ row: `Left`, "row-reverse": `Right`, column: `Top`, "column-reverse": `Bottom` })[e2], kr = ({ ownerState: e2, theme: t2 }) => {
  let n2 = { display: `flex`, flexDirection: `column`, ...u({ theme: t2 }, U({ values: e2.direction, breakpoints: t2.breakpoints.values }), (e3) => ({ flexDirection: e3 })) };
  if (e2.spacing) {
    let r2 = De(t2), i2 = Object.keys(t2.breakpoints.values).reduce((t3, n3) => ((typeof e2.spacing == `object` && e2.spacing[n3] != null || typeof e2.direction == `object` && e2.direction[n3] != null) && (t3[n3] = true), t3), {}), a2 = U({ values: e2.direction, base: i2 }), o2 = U({ values: e2.spacing, base: i2 });
    typeof a2 == `object` && Object.keys(a2).forEach((e3, t3, n3) => {
      if (!a2[e3]) {
        let r3 = t3 > 0 ? a2[n3[t3 - 1]] : `column`;
        a2[e3] = r3;
      }
    }), n2 = de(n2, u({ theme: t2 }, o2, (t3, n3) => e2.useFlexGap ? { gap: pe(r2, t3) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${Or(n3 ? a2[n3] : e2.direction)}`]: pe(r2, t3) } }));
  }
  return n2 = O(t2.breakpoints, n2), n2;
};
function Ar(e2 = {}) {
  let { createStyledComponent: t2 = Tr, useThemeProps: n2 = Er, componentName: r2 = `MuiStack` } = e2, i2 = () => me({ root: [`root`] }, (e3) => K(r2, e3), {}), a2 = t2(kr);
  return mt(function(e3, t3) {
    let { component: r3 = `div`, direction: o2 = `column`, spacing: s2 = 0, divider: c2, children: l2, className: u2, useFlexGap: d2 = false, ...f2 } = n2(e3), p2 = { direction: o2, spacing: s2, useFlexGap: d2 }, m2 = i2();
    return Y(a2, { as: r3, ownerState: p2, ref: t3, className: H(m2.root, u2), ...f2, children: c2 ? Dr(l2, c2) : l2 });
  });
}
var jr = Ar();
function Mr(e2) {
  return K(`MuiStack`, e2);
}
var Nr = W(`MuiStack`, [`root`]), Pr = e({ Box: () => dr, Container: () => xr, GlobalStyles: () => Zt, Grid: () => hn, RtlProvider: () => Vt, Stack: () => jr, StyledEngineProvider: () => qt, ThemeProvider: () => tn, alignContent: () => Nn, alignItems: () => Mn, alignSelf: () => Rn, alpha: () => E, backgroundColor: () => l, bgcolor: () => D, blend: () => re, border: () => h, borderBottom: () => C, borderBottomColor: () => Ve, borderColor: () => x, borderLeft: () => V, borderLeftColor: () => B, borderRadius: () => ue, borderRight: () => j, borderRightColor: () => t, borderTop: () => Se, borderTopColor: () => qe, borderTransform: () => Re, borders: () => We, bottom: () => Kn, boxClasses: () => ur, boxSizing: () => we, breakpoints: () => i, color: () => Me, colorChannel: () => A, columnGap: () => T, compose: () => G, containerClasses: () => Cr, createBox: () => lr, createBreakpoints: () => n, createContainer: () => br, createGrid: () => Lt, createSpacing: () => Ge, createStack: () => Ar, createStyled: () => Ke, createTheme: () => Ce, createUnarySpacing: () => De, createUnaryUnit: () => Te, css: () => st, cssContainerQueries: () => je, darken: () => m, decomposeColor: () => b, display: () => Dn, emphasize: () => te, experimental_sx: () => Fr, flex: () => Fn, flexBasis: () => On, flexDirection: () => kn, flexGrow: () => In, flexShrink: () => Ln, flexWrap: () => An, flexbox: () => Vn, fontFamily: () => Xn, fontSize: () => Zn, fontStyle: () => Qn, fontWeight: () => $n, gap: () => ne, getContainerUtilityClass: () => Sr, getContrastRatio: () => ae, getGridUtilityClass: () => gn, getLuminance: () => it, getPath: () => c, getStackUtilityClass: () => Mr, getStyleValue: () => Qe, getThemeProps: () => kt, getValue: () => pe, grid: () => k, gridArea: () => p, gridAutoColumns: () => y, gridAutoFlow: () => w, gridAutoRows: () => ie, gridClasses: () => bn, gridColumn: () => rt, gridRow: () => a, gridTemplateAreas: () => I, gridTemplateColumns: () => _, gridTemplateRows: () => F, handleBreakpoints: () => u, height: () => fe, hexToRgb: () => o, hslToRgb: () => L, justifyContent: () => jn, justifyItems: () => zn, justifySelf: () => Bn, keyframes: () => yt, left: () => qn, letterSpacing: () => er, lighten: () => v, lineHeight: () => nr, major: () => 9, margin: () => Xe, marginKeys: () => nt, maxHeight: () => Ye, maxWidth: () => tt, mergeBreakpointsInOrder: () => O, minHeight: () => ge, minWidth: () => $e, minor: () => 5, order: () => Pn, outline: () => ke, outlineColor: () => he, padding: () => _e, paddingKeys: () => et, palette: () => r, paletteTransform: () => Ae, patch: () => 0, position: () => Hn, positions: () => Jn, prerelease: () => void 0, private_safeAlpha: () => ce, private_safeColorChannel: () => z, private_safeDarken: () => g, private_safeEmphasize: () => ee, private_safeLighten: () => He, recomposeColor: () => S, responsivePropType: () => Ht, rgbToHex: () => le, right: () => Gn, rowGap: () => R, shadows: () => Yn, shape: () => ye, shouldForwardProp: () => Le, sizeHeight: () => oe, sizeWidth: () => s, sizing: () => Ze, sizingTransform: () => se, spacing: () => N, stackClasses: () => Nr, style: () => P, styled: () => Ot, systemDefaultTheme: () => Ue, textAlign: () => rr, textTransform: () => tr, top: () => Wn, typography: () => ar, typographyVariant: () => ir, unstable_createCssVarsProvider: () => dn, unstable_createCssVarsTheme: () => fn, unstable_createGetCssVar: () => mr, unstable_createStyleFunctionSx: () => Fe, unstable_cssVarsParser: () => be, unstable_defaultSxConfig: () => Ee, unstable_extendSxProp: () => mn, unstable_generateDirectionClasses: () => Mt, unstable_generateSizeClassNames: () => Et, unstable_generateSpacingClassNames: () => Ft, unstable_getThemeValue: () => cr, unstable_memoTheme: () => pr, unstable_prepareCssVars: () => Je, unstable_resolveBreakpointValues: () => U, unstable_styleFunctionSx: () => ze, unstable_traverseBreakpoints: () => Rt, useMediaQuery: () => Pt, useRtl: () => Dt, useTheme: () => Tt, useThemeProps: () => zt, useThemeWithoutDefault: () => X, version: () => hr, width: () => d, zIndex: () => Un });
function Fr() {
  throw Error(xe(19));
}
var $ = Pr, Ir = $.experimental_sx, Lr = $.css, Rr = $.keyframes, zr = $.StyledEngineProvider, Br = $.GlobalStyles, Vr = $.borders, Hr = $.breakpoints, Ur = $.cssContainerQueries, Wr = $.handleBreakpoints, Gr = $.mergeBreakpointsInOrder, Kr = $.unstable_resolveBreakpointValues, qr = $.compose, Jr = $.display, Yr = $.flexbox, Xr = $.grid, Zr = $.palette, Qr = $.positions, $r = $.shadows, ei = $.sizing, ti = $.spacing, ni = $.style, ri = $.getPath, ii = $.getStyleValue, ai = $.typography, oi = $.unstable_styleFunctionSx, si = $.unstable_createStyleFunctionSx, ci = $.unstable_extendSxProp, li = $.unstable_defaultSxConfig, ui = $.unstable_getThemeValue, di = $.Box, fi = $.createBox, pi = $.createStyled, mi = $.styled, hi = $.createTheme, gi = $.createBreakpoints, _i = $.createSpacing, vi = $.shape, yi = $.useThemeProps, bi = $.getThemeProps, xi = $.useTheme, Si = $.useThemeWithoutDefault, Ci = $.useMediaQuery, wi = $.ThemeProvider, Ti = $.unstable_memoTheme, Ei = $.unstable_createCssVarsProvider, Di = $.unstable_createGetCssVar, Oi = $.unstable_cssVarsParser, ki = $.unstable_prepareCssVars, Ai = $.unstable_createCssVarsTheme, ji = $.responsivePropType, Mi = $.RtlProvider, Ni = $.createContainer, Pi = $.Container, Fi = $.Grid, Ii = $.Stack, Li = $.borderTransform, Ri = $.border, zi = $.borderTop, Bi = $.borderRight, Vi = $.borderBottom, Hi = $.borderLeft, Ui = $.borderColor, Wi = $.borderTopColor, Gi = $.borderRightColor, Ki = $.borderBottomColor, qi = $.borderLeftColor, Ji = $.outline, Yi = $.outlineColor, Xi = $.borderRadius, Zi = $.flexBasis, Qi = $.flexDirection, $i = $.flexWrap, ea = $.justifyContent, ta = $.alignItems, na = $.alignContent, ra = $.order, ia = $.flex, aa = $.flexGrow, oa = $.flexShrink, sa = $.alignSelf, ca = $.justifyItems, la = $.justifySelf, ua = $.gap, da = $.columnGap, fa = $.rowGap, pa = $.gridColumn, ma = $.gridRow, ha = $.gridAutoFlow, ga = $.gridAutoColumns, _a = $.gridAutoRows, va = $.gridTemplateColumns, ya = $.gridTemplateRows, ba = $.gridTemplateAreas, xa = $.gridArea, Sa = $.paletteTransform, Ca = $.color, wa = $.bgcolor, Ta = $.backgroundColor, Ea = $.position, Da = $.zIndex, Oa = $.top, ka = $.right, Aa = $.bottom, ja = $.left, Ma = $.sizingTransform, Na = $.width, Pa = $.maxWidth, Fa = $.minWidth, Ia = $.height, La = $.maxHeight, Ra = $.minHeight, za = $.sizeWidth, Ba = $.sizeHeight, Va = $.boxSizing, Ha = $.marginKeys, Ua = $.paddingKeys, Wa = $.createUnaryUnit, Ga = $.createUnarySpacing, Ka = $.getValue, qa = $.margin, Ja = $.padding, Ya = $.fontFamily, Xa = $.fontSize, Za = $.fontStyle, Qa = $.fontWeight, $a = $.letterSpacing, eo = $.textTransform, to = $.lineHeight, no = $.textAlign, ro = $.typographyVariant, io = $.boxClasses, ao = $.systemDefaultTheme, oo = $.shouldForwardProp, so = $.hexToRgb, co = $.decomposeColor, lo = $.colorChannel, uo = $.private_safeColorChannel, fo = $.recomposeColor, po = $.rgbToHex, mo = $.hslToRgb, ho = $.getLuminance, go = $.getContrastRatio, _o = $.alpha, vo = $.private_safeAlpha, yo = $.darken, bo = $.private_safeDarken, xo = $.lighten, So = $.private_safeLighten, Co = $.emphasize, wo = $.private_safeEmphasize, To = $.blend, Eo = $.useRtl, Do = $.version, Oo = $.major, ko = $.minor, Ao = $.patch, jo = $.prerelease, Mo = $.containerClasses, No = $.getContainerUtilityClass, Po = $.createGrid, Fo = $.gridClasses, Io = $.unstable_traverseBreakpoints, Lo = $.unstable_generateDirectionClasses, Ro = $.unstable_generateSizeClassNames, zo = $.unstable_generateSpacingClassNames, Bo = $.getGridUtilityClass, Vo = $.createStack, Ho = $.stackClasses, Uo = $.getStackUtilityClass, Wo = Reflect.get(Pr, `default`) ?? Pr;
export {
  di as Box,
  Pi as Container,
  Br as GlobalStyles,
  Fi as Grid,
  Mi as RtlProvider,
  Ii as Stack,
  zr as StyledEngineProvider,
  wi as ThemeProvider,
  na as alignContent,
  ta as alignItems,
  sa as alignSelf,
  _o as alpha,
  Ta as backgroundColor,
  wa as bgcolor,
  To as blend,
  Ri as border,
  Vi as borderBottom,
  Ki as borderBottomColor,
  Ui as borderColor,
  Hi as borderLeft,
  qi as borderLeftColor,
  Xi as borderRadius,
  Bi as borderRight,
  Gi as borderRightColor,
  zi as borderTop,
  Wi as borderTopColor,
  Li as borderTransform,
  Vr as borders,
  Aa as bottom,
  io as boxClasses,
  Va as boxSizing,
  Hr as breakpoints,
  Ca as color,
  lo as colorChannel,
  da as columnGap,
  qr as compose,
  Mo as containerClasses,
  fi as createBox,
  gi as createBreakpoints,
  Ni as createContainer,
  Po as createGrid,
  _i as createSpacing,
  Vo as createStack,
  pi as createStyled,
  hi as createTheme,
  Ga as createUnarySpacing,
  Wa as createUnaryUnit,
  Lr as css,
  Ur as cssContainerQueries,
  yo as darken,
  co as decomposeColor,
  Wo as default,
  Jr as display,
  Co as emphasize,
  Ir as experimental_sx,
  ia as flex,
  Zi as flexBasis,
  Qi as flexDirection,
  aa as flexGrow,
  oa as flexShrink,
  $i as flexWrap,
  Yr as flexbox,
  Ya as fontFamily,
  Xa as fontSize,
  Za as fontStyle,
  Qa as fontWeight,
  ua as gap,
  No as getContainerUtilityClass,
  go as getContrastRatio,
  Bo as getGridUtilityClass,
  ho as getLuminance,
  ri as getPath,
  Uo as getStackUtilityClass,
  ii as getStyleValue,
  bi as getThemeProps,
  Ka as getValue,
  Xr as grid,
  xa as gridArea,
  ga as gridAutoColumns,
  ha as gridAutoFlow,
  _a as gridAutoRows,
  Fo as gridClasses,
  pa as gridColumn,
  ma as gridRow,
  ba as gridTemplateAreas,
  va as gridTemplateColumns,
  ya as gridTemplateRows,
  Wr as handleBreakpoints,
  Ia as height,
  so as hexToRgb,
  mo as hslToRgb,
  ea as justifyContent,
  ca as justifyItems,
  la as justifySelf,
  Rr as keyframes,
  ja as left,
  $a as letterSpacing,
  xo as lighten,
  to as lineHeight,
  Oo as major,
  qa as margin,
  Ha as marginKeys,
  La as maxHeight,
  Pa as maxWidth,
  Gr as mergeBreakpointsInOrder,
  Ra as minHeight,
  Fa as minWidth,
  ko as minor,
  ra as order,
  Ji as outline,
  Yi as outlineColor,
  Ja as padding,
  Ua as paddingKeys,
  Zr as palette,
  Sa as paletteTransform,
  Ao as patch,
  Ea as position,
  Qr as positions,
  jo as prerelease,
  vo as private_safeAlpha,
  uo as private_safeColorChannel,
  bo as private_safeDarken,
  wo as private_safeEmphasize,
  So as private_safeLighten,
  fo as recomposeColor,
  ji as responsivePropType,
  po as rgbToHex,
  ka as right,
  fa as rowGap,
  $r as shadows,
  vi as shape,
  oo as shouldForwardProp,
  Ba as sizeHeight,
  za as sizeWidth,
  ei as sizing,
  Ma as sizingTransform,
  ti as spacing,
  Ho as stackClasses,
  ni as style,
  mi as styled,
  ao as systemDefaultTheme,
  no as textAlign,
  eo as textTransform,
  Oa as top,
  ai as typography,
  ro as typographyVariant,
  Ei as unstable_createCssVarsProvider,
  Ai as unstable_createCssVarsTheme,
  Di as unstable_createGetCssVar,
  si as unstable_createStyleFunctionSx,
  Oi as unstable_cssVarsParser,
  li as unstable_defaultSxConfig,
  ci as unstable_extendSxProp,
  Lo as unstable_generateDirectionClasses,
  Ro as unstable_generateSizeClassNames,
  zo as unstable_generateSpacingClassNames,
  ui as unstable_getThemeValue,
  Ti as unstable_memoTheme,
  ki as unstable_prepareCssVars,
  Kr as unstable_resolveBreakpointValues,
  oi as unstable_styleFunctionSx,
  Io as unstable_traverseBreakpoints,
  Ci as useMediaQuery,
  Eo as useRtl,
  xi as useTheme,
  yi as useThemeProps,
  Si as useThemeWithoutDefault,
  Do as version,
  Na as width,
  Da as zIndex
};
