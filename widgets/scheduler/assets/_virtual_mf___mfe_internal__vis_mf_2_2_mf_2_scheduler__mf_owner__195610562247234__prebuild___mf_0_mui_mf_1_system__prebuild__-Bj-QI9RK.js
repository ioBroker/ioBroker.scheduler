import { n as e } from "./rolldown-runtime-hePW80VL.js";
import { i as t, n, o as r, r as i, t as a } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare___mf_0_emotion_mf_1_react__loadShare__.js-BHa70R9q.js";
import { n as o, t as s } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare___mf_0_mui_mf_1_private_mf_2_theming__loadShare__.js-ifFkCxr2.js";
import { _ as c, b as l, d as u, f as d, n as f, o as p, p as m, r as h, t as g, u as _, y as ee } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare__react__loadShare__.js-DfDU6gQX.js";
import { n as v, r as y } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-FePC3bXN.js";
import { n as b, t as x } from "./emotion-cache.browser.esm--RCZvsJA.js";
import { $ as S, $t as C, A as w, At as T, B as E, Bt as D, C as te, Ct as ne, D as re, Dt as O, E as k, Et as A, F as j, Ft as M, G as ie, Gt as ae, H as N, Ht as P, I as oe, It as F, J as se, Jt as I, K as ce, Kt as le, L as ue, Lt as de, M as fe, Mt as pe, N as me, Nt as he, O as ge, Ot as L, P as R, Pt as z, Q as B, Qt as V, R as _e, Rt as H, S as U, St as W, T as ve, Tt as G, U as ye, Ut as be, V as xe, Vt as Se, W as Ce, Wt as we, X as Te, Y as Ee, Yt as De, Z as Oe, Zt as ke, _ as Ae, _t as je, a as Me, at as Ne, b as Pe, bt as Fe, c as Ie, ct as Le, d as Re, en as ze, et as Be, f as Ve, ft as He, g as Ue, gt as We, h as Ge, ht as Ke, i as qe, it as Je, j as Ye, jt as Xe, k as Ze, kt as K, l as Qe, lt as $e, m as et, mt as tt, n as nt, nt as rt, o as q, ot as J, p as it, pt as at, q as ot, qt as st, r as ct, rt as lt, s as Y, st as ut, t as dt, tt as ft, u as pt, v as mt, vt as ht, w as gt, wt as _t, x as vt, xt as yt, y as bt, yt as xt, z as St, zt as Ct } from "./createStyled-dfYyZxbm.js";
import { S as wt, _ as Tt, a as Et, b as Dt, c as Ot, d as kt, f as At, g as jt, i as Mt, m as Nt, n as Pt, o as Ft, p as It, r as Lt, s as Rt, u as zt, v as Bt, x as Vt, y as Ht } from "./useMediaQuery-BOXfRYNp.js";
var Ut = {}, Wt = /* @__PURE__ */ new Map(), Gt = { insert: void 0 }, Kt = (e2, t2) => {
  let n2 = x(e2);
  return n2.sheet = new t2({ key: n2.key, nonce: n2.sheet.nonce, container: n2.sheet.container, speedy: n2.sheet.isSpeedy, prepend: n2.sheet.prepend, insertionPoint: n2.sheet.insertionPoint }), n2;
}, X;
if (typeof document == `object` && (X = document.querySelector(`[name="emotion-insertion-point"]`), !X)) {
  X = document.createElement(`meta`), X.setAttribute(`name`, `emotion-insertion-point`), X.setAttribute(`content`, ``);
  let e2 = document.querySelector(`head`);
  e2 && e2.prepend(X);
}
function qt(e2, t2) {
  if (e2 || t2) {
    class n2 extends b {
      insert(e3, t3) {
        return Gt.insert ? Gt.insert(e3, t3) : (this.key && this.key.endsWith(`global`) && (this.before = X), super.insert(e3, t3));
      }
    }
    let r2 = Kt({ key: t2 ? `mui` : `css`, insertionPoint: e2 ? X : void 0 }, n2);
    if (t2) {
      let e3 = r2.insert;
      r2.insert = (...t3) => (t3[1].styles.match(/^@layer\s+[^{]*$/) || (t3[1].styles = `@layer mui {${t3[1].styles}}`), e3(...t3));
    }
    return r2;
  }
}
function Jt(e2) {
  let { injectFirst: t2, enableCssLayer: n2, children: r2 } = e2, i2 = c(() => {
    let e3 = `${t2}-${n2}`;
    if (typeof document == `object` && Wt.has(e3)) return Wt.get(e3);
    let r3 = qt(t2, n2);
    return Wt.set(e3, r3), r3;
  }, [t2, n2]);
  return i2 ? v(a, { value: i2, children: r2 }) : r2;
}
function Yt(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function Xt(e2) {
  let { styles: t2, defaultTheme: n2 = {} } = e2;
  return v(r, { styles: typeof t2 == `function` ? (e3) => t2(Yt(e3) ? n2 : e3) : t2 });
}
function Zt(e2) {
  let t2 = at(e2);
  return e2 !== t2 && t2.styles ? (t2.styles.match(/^@layer\s+[^{]*$/) || (t2.styles = `@layer global{${t2.styles}}`), t2) : e2;
}
function Qt({ styles: e2, themeId: t2, defaultTheme: n2 = {} }) {
  let r2 = Tt(n2), i2 = t2 && r2[t2] || r2, a2 = typeof e2 == `function` ? e2(i2) : e2;
  return i2.modularCssLayers && (a2 = Array.isArray(a2) ? a2.map((e3) => Zt(typeof e3 == `function` ? e3(i2) : e3)) : Zt(a2)), v(Xt, { styles: a2 });
}
function $t(e2) {
  let t2 = Vt(), n2 = Bt() || ``, { modularCssLayers: r2 } = e2, i2 = `mui.global, mui.components, mui.theme, mui.custom, mui.sx`;
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
  }, [i2, n2]), i2 ? v(Qt, { styles: i2 }) : null;
}
var en = {};
function tn(e2, t2, n2, r2 = false) {
  return c(() => {
    let i2 = e2 && t2[e2] || t2;
    if (typeof n2 == `function`) {
      let a2 = n2(i2), o2 = e2 ? { ...t2, [e2]: a2 } : a2;
      return r2 ? () => o2 : o2;
    }
    return e2 ? { ...t2, [e2]: n2 } : { ...t2, ...n2 };
  }, [e2, t2, n2, r2]);
}
function nn(e2) {
  let { children: t2, theme: r2, themeId: i2 } = e2, a2 = Vt(en), c2 = o() || en, l2 = tn(i2, a2, r2), u2 = tn(i2, c2, r2, true), d2 = (i2 ? l2[i2] : l2).direction === `rtl`, f2 = $t(l2);
  return v(s, { theme: u2, children: v(n.Provider, { value: l2, children: v(Ht, { value: d2, children: y($e, { value: i2 ? l2[i2].components : l2.components, children: [f2, t2] }) }) }) });
}
function rn() {
}
var an = ({ key: e2, storageWindow: t2 }) => (!t2 && typeof window < `u` && (t2 = window), { get(n2) {
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
  if (!t2) return rn;
  let r2 = (t3) => {
    let r3 = t3.newValue;
    t3.key === e2 && n2(r3);
  };
  return t2.addEventListener(`storage`, r2), () => {
    t2.removeEventListener(`storage`, r2);
  };
} });
function on() {
}
function sn(e2) {
  if (typeof window < `u` && typeof window.matchMedia == `function` && e2 === `system`) return window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
}
function cn(e2, t2) {
  if (e2.mode === `light` || e2.mode === `system` && e2.systemMode === `light`) return t2(`light`);
  if (e2.mode === `dark` || e2.mode === `system` && e2.systemMode === `dark`) return t2(`dark`);
}
function ln(e2) {
  return cn(e2, (t2) => {
    if (t2 === `light`) return e2.lightColorScheme;
    if (t2 === `dark`) return e2.darkColorScheme;
  });
}
function un(e2) {
  let { defaultMode: t2 = `light`, defaultLightColorScheme: n2, defaultDarkColorScheme: r2, supportedColorSchemes: i2 = [], modeStorageKey: a2 = Nt, colorSchemeStorageKey: o2 = It, storageWindow: s2 = typeof window > `u` ? void 0 : window, storageManager: u2 = an, noSsr: d2 = false } = e2, f2 = i2.join(`,`), p2 = i2.length > 1, h2 = c(() => u2 == null ? void 0 : u2({ key: a2, storageWindow: s2 }), [u2, a2, s2]), g2 = c(() => u2 == null ? void 0 : u2({ key: `${o2}-light`, storageWindow: s2 }), [u2, o2, s2]), v2 = c(() => u2 == null ? void 0 : u2({ key: `${o2}-dark`, storageWindow: s2 }), [u2, o2, s2]), [y2, b2] = l(() => {
    let e3 = (h2 == null ? void 0 : h2.get(t2)) || t2, i3 = (g2 == null ? void 0 : g2.get(n2)) || n2, a3 = (v2 == null ? void 0 : v2.get(r2)) || r2;
    return { mode: e3, systemMode: sn(e3), lightColorScheme: i3, darkColorScheme: a3 };
  }), [x2, S2] = l(d2 || !p2);
  m(() => {
    S2(true);
  }, []);
  let C2 = ln(y2), w2 = _((e3) => {
    b2((n3) => {
      if (e3 === n3.mode) return n3;
      let r3 = e3 ?? t2;
      return h2 == null ? void 0 : h2.set(r3), { ...n3, mode: r3, systemMode: sn(r3) };
    });
  }, [h2, t2]), T2 = _((e3) => {
    e3 ? typeof e3 == `string` ? e3 && !f2.includes(e3) ? console.error(`\`${e3}\` does not exist in \`theme.colorSchemes\`.`) : b2((t3) => {
      let n3 = { ...t3 };
      return cn(t3, (t4) => {
        t4 === `light` && (g2 == null ? void 0 : g2.set(e3), n3.lightColorScheme = e3), t4 === `dark` && (v2 == null ? void 0 : v2.set(e3), n3.darkColorScheme = e3);
      }), n3;
    }) : b2((t3) => {
      let i3 = { ...t3 }, a3 = e3.light === null ? n2 : e3.light, o3 = e3.dark === null ? r2 : e3.dark;
      return a3 && (f2.includes(a3) ? (i3.lightColorScheme = a3, g2 == null ? void 0 : g2.set(a3)) : console.error(`\`${a3}\` does not exist in \`theme.colorSchemes\`.`)), o3 && (f2.includes(o3) ? (i3.darkColorScheme = o3, v2 == null ? void 0 : v2.set(o3)) : console.error(`\`${o3}\` does not exist in \`theme.colorSchemes\`.`)), i3;
    }) : b2((e4) => (g2 == null ? void 0 : g2.set(n2), v2 == null ? void 0 : v2.set(r2), { ...e4, lightColorScheme: n2, darkColorScheme: r2 }));
  }, [f2, g2, v2, n2, r2]), E2 = _((e3) => {
    y2.mode === `system` && b2((t3) => {
      let n3 = (e3 == null ? void 0 : e3.matches) ? `dark` : `light`;
      return t3.systemMode === n3 ? t3 : { ...t3, systemMode: n3 };
    });
  }, [y2.mode]), D2 = ee(E2);
  return D2.current = E2, m(() => {
    if (typeof window.matchMedia != `function` || !p2) return;
    let e3 = (...e4) => D2.current(...e4), t3 = window.matchMedia(`(prefers-color-scheme: dark)`);
    return t3.addListener(e3), e3(t3), () => {
      t3.removeListener(e3);
    };
  }, [p2]), m(() => {
    if (p2) {
      let e3 = (h2 == null ? void 0 : h2.subscribe((e4) => {
        (!e4 || [`light`, `dark`, `system`].includes(e4)) && w2(e4 || t2);
      })) || on, n3 = (g2 == null ? void 0 : g2.subscribe((e4) => {
        (!e4 || f2.match(e4)) && T2({ light: e4 });
      })) || on, r3 = (v2 == null ? void 0 : v2.subscribe((e4) => {
        (!e4 || f2.match(e4)) && T2({ dark: e4 });
      })) || on;
      return () => {
        e3(), n3(), r3();
      };
    }
  }, [T2, w2, f2, t2, s2, p2, h2, g2, v2]), { ...y2, mode: x2 ? y2.mode : void 0, systemMode: x2 ? y2.systemMode : void 0, colorScheme: x2 ? C2 : void 0, setMode: w2, setColorScheme: T2 };
}
var dn = `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function fn(e2) {
  let { themeId: t2, theme: n2 = {}, modeStorageKey: r2 = Nt, colorSchemeStorageKey: i2 = It, disableTransitionOnChange: a2 = false, defaultColorScheme: s2, resolveTheme: l2 } = e2, f2 = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, p2 = h(void 0), g2 = () => u(p2) || f2, _2 = {}, b2 = {};
  function x2(e3) {
    var _a2, _b, _c, _d;
    let { children: f3, theme: h2, modeStorageKey: g3 = r2, colorSchemeStorageKey: x3 = i2, disableTransitionOnChange: S3 = a2, storageManager: C3, storageWindow: w2 = typeof window > `u` ? void 0 : window, documentNode: T2 = typeof document > `u` ? void 0 : document, colorSchemeNode: E2 = typeof document > `u` ? void 0 : document.documentElement, disableNestedContext: D2 = false, disableStyleSheetGeneration: te2 = false, defaultMode: ne2 = `system`, forceThemeRerender: re2 = false, noSsr: O2 } = e3, k2 = ee(false), A2 = o(), j2 = u(p2), M2 = !!j2 && !D2, ie2 = c(() => h2 || (typeof n2 == `function` ? n2() : n2), [h2]), ae2 = ie2[t2], N2 = ae2 || ie2, { colorSchemes: P2 = _2, components: oe2 = b2, cssVarPrefix: F2 } = N2, se2 = Object.keys(P2).filter((e4) => !!P2[e4]).join(`,`), I2 = c(() => se2.split(`,`), [se2]), ce2 = typeof s2 == `string` ? s2 : s2.light, le2 = typeof s2 == `string` ? s2 : s2.dark, { mode: ue2, setMode: de2, systemMode: fe2, lightColorScheme: pe2, darkColorScheme: me2, colorScheme: he2, setColorScheme: ge2 } = un({ supportedColorSchemes: I2, defaultLightColorScheme: ce2, defaultDarkColorScheme: le2, modeStorageKey: g3, colorSchemeStorageKey: x3, defaultMode: P2[ce2] && P2[le2] ? ne2 : ((_b = (_a2 = P2[N2.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c = N2.palette) == null ? void 0 : _c.mode), storageManager: C3, storageWindow: w2, noSsr: O2 }), L2 = ue2, R2 = he2;
    M2 && (L2 = j2.mode, R2 = j2.colorScheme);
    let z2 = R2 || N2.defaultColorScheme;
    N2.vars && !re2 && (z2 = N2.defaultColorScheme);
    let B2 = c(() => {
      var _a3;
      let e4 = ((_a3 = N2.generateThemeVars) == null ? void 0 : _a3.call(N2)) || N2.vars, t3 = { ...N2, components: oe2, colorSchemes: P2, cssVarPrefix: F2, vars: e4 };
      if (typeof t3.generateSpacing == `function` && (t3.spacing = t3.generateSpacing()), z2) {
        let e5 = P2[z2];
        e5 && typeof e5 == `object` && Object.keys(e5).forEach((n3) => {
          e5[n3] && typeof e5[n3] == `object` ? t3[n3] = { ...t3[n3], ...e5[n3] } : t3[n3] = e5[n3];
        });
      }
      return l2 ? l2(t3) : t3;
    }, [N2, z2, oe2, P2, F2]), V2 = N2.colorSchemeSelector;
    wt(() => {
      if (R2 && E2 && V2 && V2 !== `media`) {
        let e4 = V2, t3 = V2;
        if (e4 === `class` && (t3 = `.%s`), e4 === `data` && (t3 = `[data-%s]`), (e4 == null ? void 0 : e4.startsWith(`data-`)) && !e4.includes(`%s`) && (t3 = `[${e4}="%s"]`), t3.startsWith(`.`)) E2.classList.remove(...I2.map((e5) => t3.substring(1).replace(`%s`, e5))), E2.classList.add(t3.substring(1).replace(`%s`, R2));
        else {
          let e5 = t3.replace(`%s`, R2).match(/\[([^\]]+)\]/);
          if (e5) {
            let [t4, n3] = e5[1].split(`=`);
            n3 || I2.forEach((e6) => {
              E2.removeAttribute(t4.replace(R2, e6));
            }), E2.setAttribute(t4, n3 ? n3.replace(/"|'/g, ``) : ``);
          } else E2.setAttribute(t3, R2);
        }
      }
    }, [R2, V2, E2, I2]), m(() => {
      let e4;
      if (S3 && k2.current && T2) {
        let t3 = T2.createElement(`style`);
        t3.appendChild(T2.createTextNode(dn)), T2.head.appendChild(t3), window.getComputedStyle(T2.body), e4 = setTimeout(() => {
          T2.head.removeChild(t3);
        }, 1);
      }
      return () => {
        clearTimeout(e4);
      };
    }, [R2, S3, T2]), m(() => (k2.current = true, () => {
      k2.current = false;
    }), []);
    let _e2 = c(() => ({ allColorSchemes: I2, colorScheme: R2, darkColorScheme: me2, lightColorScheme: pe2, mode: L2, setColorScheme: ge2, setMode: de2, systemMode: fe2 }), [I2, R2, me2, pe2, L2, ge2, de2, fe2, B2.colorSchemeSelector]), H2 = true;
    (te2 || N2.cssVariables === false || M2 && (A2 == null ? void 0 : A2.cssVarPrefix) === F2) && (H2 = false);
    let U2 = y(d, { children: [v(nn, { themeId: ae2 ? t2 : void 0, theme: B2, children: f3 }), H2 && v(Xt, { styles: ((_d = B2.generateStyleSheets) == null ? void 0 : _d.call(B2)) || [] })] });
    return M2 ? U2 : v(p2.Provider, { value: _e2, children: U2 });
  }
  let S2 = typeof s2 == `string` ? s2 : s2.light, C2 = typeof s2 == `string` ? s2 : s2.dark;
  return { CssVarsProvider: x2, useColorScheme: g2, getInitColorSchemeScript: (e3) => jt({ colorSchemeStorageKey: i2, defaultLightColorScheme: S2, defaultDarkColorScheme: C2, modeStorageKey: r2, ...e3 }) };
}
function pn({ colorSchemeSelector: e2 = `[${At}="%s"]`, ...t2 }) {
  let n2 = t2, r2 = pt(n2, { ...t2, prefix: t2.cssVarPrefix, colorSchemeSelector: e2 });
  return n2.vars = r2.vars, n2.generateThemeVars = r2.generateThemeVars, n2.generateStyleSheets = r2.generateStyleSheets, n2.colorSchemeSelector = e2, n2.getColorSchemeSelector = Qe(e2), n2.internal_cache = {}, n2;
}
var mn = (e2) => {
  var _a2;
  let t2 = { systemProps: {}, otherProps: {} }, n2 = ((_a2 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Ge;
  return Object.keys(e2).forEach((r2) => {
    n2[r2] ? t2.systemProps[r2] = e2[r2] : t2.otherProps[r2] = e2[r2];
  }), t2;
};
function hn(e2) {
  let { sx: t2, ...n2 } = e2, { systemProps: r2, otherProps: i2 } = mn(n2), a2;
  return a2 = Array.isArray(t2) ? [r2, ...t2] : typeof t2 == `function` ? (...e3) => {
    let n3 = t2(...e3);
    return V(n3) ? { ...r2, ...n3 } : r2;
  } : { ...r2, ...t2 }, { ...i2, sx: a2 };
}
var gn = Lt();
function _n(e2) {
  return Y(`MuiGrid`, e2);
}
var vn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], yn = [`column-reverse`, `column`, `row-reverse`, `row`], bn = [`nowrap`, `wrap-reverse`, `wrap`], Z = [`auto`, `grow`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], xn = q(`MuiGrid`, [`root`, `container`, `item`, ...vn.map((e2) => `spacing-xs-${e2}`), ...yn.map((e2) => `direction-xs-${e2}`), ...bn.map((e2) => `wrap-xs-${e2}`), ...Z.map((e2) => `grid-xs-${e2}`), ...Z.map((e2) => `grid-sm-${e2}`), ...Z.map((e2) => `grid-md-${e2}`), ...Z.map((e2) => `grid-lg-${e2}`), ...Z.map((e2) => `grid-xl-${e2}`)]), Sn = G({ prop: `displayPrint`, cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }), Cn = G({ prop: `display` }), wn = G({ prop: `overflow` }), Tn = G({ prop: `textOverflow` }), En = G({ prop: `visibility` }), Dn = G({ prop: `whiteSpace` }), On = J(Sn, Cn, wn, Tn, En, Dn), kn = G({ prop: `flexBasis` }), An = G({ prop: `flexDirection` }), jn = G({ prop: `flexWrap` }), Mn = G({ prop: `justifyContent` }), Nn = G({ prop: `alignItems` }), Pn = G({ prop: `alignContent` }), Fn = G({ prop: `order` }), In = G({ prop: `flex` }), Ln = G({ prop: `flexGrow` }), Rn = G({ prop: `flexShrink` }), zn = G({ prop: `alignSelf` }), Bn = G({ prop: `justifyItems` }), Vn = G({ prop: `justifySelf` }), Hn = J(kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn), Un = G({ prop: `position` }), Wn = G({ prop: `zIndex`, themeKey: `zIndex` }), Gn = G({ prop: `top` }), Kn = G({ prop: `right` }), qn = G({ prop: `bottom` }), Jn = G({ prop: `left` }), Q = J(Un, Wn, Gn, Kn, qn, Jn), Yn = G({ prop: `boxShadow`, themeKey: `shadows` }), Xn = G({ prop: `fontFamily`, themeKey: `typography` }), Zn = G({ prop: `fontSize`, themeKey: `typography` }), Qn = G({ prop: `fontStyle`, themeKey: `typography` }), $n = G({ prop: `fontWeight`, themeKey: `typography` }), er = G({ prop: `letterSpacing` }), tr = G({ prop: `textTransform` }), nr = G({ prop: `lineHeight` }), rr = G({ prop: `textAlign` }), ir = G({ prop: `typography`, cssProperty: false, themeKey: `typography` }), ar = J(ir, Xn, Zn, Qn, $n, er, nr, rr, tr), or = { borders: lt.filterProps, display: On.filterProps, flexbox: Hn.filterProps, grid: R.filterProps, positions: Q.filterProps, palette: w.filterProps, shadows: Yn.filterProps, sizing: gt.filterProps, spacing: W.filterProps, typography: ar.filterProps }, sr = { borders: lt, display: On, flexbox: Hn, grid: R, positions: Q, palette: w, shadows: Yn, sizing: gt, spacing: W, typography: ar }, cr = Object.keys(or).reduce((e2, t2) => {
  for (let n2 of or[t2]) e2[n2] = sr[t2];
  return e2;
}, {});
function lr(e2, t2, n2) {
  let r2 = { [e2]: t2, theme: n2 }, i2 = cr[e2];
  return i2 ? i2(r2) : { [e2]: t2 };
}
function ur(e2 = {}) {
  let { themeId: t2, defaultTheme: n2, defaultClassName: r2 = `MuiBox-root`, generateClassName: i2 } = e2, a2 = tt(`div`, { shouldForwardProp: (e3) => e3 !== `theme` && e3 !== `sx` && e3 !== `as` })(it);
  return p(function(e3, o2) {
    let s2 = Tt(n2), { className: c2, component: l2 = `div`, ...u2 } = e3;
    return v(a2, { as: l2, ref: o2, className: He(c2, i2 ? i2(r2) : r2), theme: t2 && s2[t2] || s2, ...u2 });
  });
}
var dr = q(`MuiBox`, [`root`]), fr = ur({ defaultClassName: dr.root, generateClassName: Ie.generate }), pr = { theme: void 0 };
function mr(e2) {
  let t2, n2;
  return function(r2) {
    let i2 = t2;
    return (i2 === void 0 || r2.theme !== n2) && (pr.theme = r2.theme, i2 = qe(e2(pr)), t2 = i2, n2 = r2.theme), i2;
  };
}
function hr(e2 = ``) {
  function t2(...n2) {
    if (!n2.length) return ``;
    let r2 = n2[0];
    return typeof r2 == `string` && !r2.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ``}${r2}${t2(...n2.slice(1))})` : `, ${r2}`;
  }
  return (n2, ...r2) => `var(--${e2 ? `${e2}-` : ``}${n2}${t2(...r2)})`;
}
var gr = `9.4.0`, _r = Ve(), vr = Ot(`div`, { name: `MuiContainer`, slot: `Root`, overridesResolver: (e2, t2) => {
  let { ownerState: n2 } = e2;
  return [t2.root, t2[`maxWidth${A(String(n2.maxWidth))}`], n2.fixed && t2.fixed, n2.disableGutters && t2.disableGutters];
} }), yr = (e2) => zt({ props: e2, name: `MuiContainer`, defaultTheme: _r }), br = (e2, t2) => {
  let n2 = (e3) => Y(t2, e3), { classes: r2, fixed: i2, disableGutters: a2, maxWidth: o2 } = e2, s2 = { root: [`root`, o2 && `maxWidth${A(String(o2))}`, i2 && `fixed`, a2 && `disableGutters`] };
  return Me(s2, n2, r2);
};
function xr(e2 = {}) {
  let { createStyledComponent: t2 = vr, useThemeProps: n2 = yr, componentName: r2 = `MuiContainer` } = e2, i2 = t2(({ theme: e3, ownerState: t3 }) => ({ width: `100%`, marginLeft: `auto`, boxSizing: `border-box`, marginRight: `auto`, ...!t3.disableGutters && { paddingLeft: e3.spacing(2), paddingRight: e3.spacing(2), [e3.breakpoints.up(`sm`)]: { paddingLeft: e3.spacing(3), paddingRight: e3.spacing(3) } } }), ({ theme: e3, ownerState: t3 }) => t3.fixed && Object.keys(e3.breakpoints.values).reduce((t4, n3) => {
    let r3 = n3, i3 = e3.breakpoints.values[r3];
    return i3 !== 0 && (t4[e3.breakpoints.up(r3)] = { maxWidth: `${i3}${e3.breakpoints.unit}` }), t4;
  }, {}), ({ theme: e3, ownerState: t3 }) => ({ ...t3.maxWidth === `xs` && { [e3.breakpoints.up(`xs`)]: { maxWidth: Math.max(e3.breakpoints.values.xs, 444) } }, ...t3.maxWidth && t3.maxWidth !== `xs` && { [e3.breakpoints.up(t3.maxWidth)]: { maxWidth: `${e3.breakpoints.values[t3.maxWidth]}${e3.breakpoints.unit}` } } }));
  return p(function(e3, t3) {
    let a2 = n2(e3), { className: o2, component: s2 = `div`, disableGutters: c2 = false, fixed: l2 = false, maxWidth: u2 = `lg`, classes: d2, ...f2 } = a2, p2 = { ...a2, component: s2, disableGutters: c2, fixed: l2, maxWidth: u2 }, m2 = br(p2, r2);
    return v(i2, { as: s2, ownerState: p2, className: He(m2.root, o2), ref: t3, ...f2 });
  });
}
var Sr = xr();
function Cr(e2) {
  return Y(`MuiContainer`, e2);
}
var wr = q(`MuiContainer`, [`root`, `disableGutters`, `fixed`, `maxWidthXs`, `maxWidthSm`, `maxWidthMd`, `maxWidthLg`, `maxWidthXl`]), Tr = Ve(), Er = Ot(`div`, { name: `MuiStack`, slot: `Root` });
function Dr(e2) {
  return zt({ props: e2, name: `MuiStack`, defaultTheme: Tr });
}
function Or(e2, t2) {
  let n2 = g.toArray(e2).filter(Boolean);
  return n2.reduce((e3, r2, i2) => (e3.push(r2), i2 < n2.length - 1 && e3.push(f(t2, { key: `separator-${i2}` })), e3), []);
}
var kr = (e2) => ({ row: `Left`, "row-reverse": `Right`, column: `Top`, "column-reverse": `Bottom` })[e2], Ar = ({ ownerState: e2, theme: t2 }) => {
  let n2 = { display: `flex`, flexDirection: `column`, ...O({ theme: t2 }, K({ values: e2.direction, breakpoints: t2.breakpoints.values }), (e3) => ({ flexDirection: e3 })) };
  if (e2.spacing) {
    let r2 = Ke(t2), i2 = Object.keys(t2.breakpoints.values).reduce((t3, n3) => ((typeof e2.spacing == `object` && e2.spacing[n3] != null || typeof e2.direction == `object` && e2.direction[n3] != null) && (t3[n3] = true), t3), {}), a2 = K({ values: e2.direction, base: i2 }), o2 = K({ values: e2.spacing, base: i2 });
    typeof a2 == `object` && Object.keys(a2).forEach((e3, t3, n3) => {
      if (!a2[e3]) {
        let r3 = t3 > 0 ? a2[n3[t3 - 1]] : `column`;
        a2[e3] = r3;
      }
    }), n2 = ke(n2, O({ theme: t2 }, o2, (t3, n3) => e2.useFlexGap ? { gap: je(r2, t3) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${kr(n3 ? a2[n3] : e2.direction)}`]: je(r2, t3) } }));
  }
  return n2 = L(t2.breakpoints, n2), n2;
};
function jr(e2 = {}) {
  let { createStyledComponent: t2 = Er, useThemeProps: n2 = Dr, componentName: r2 = `MuiStack` } = e2, i2 = () => Me({ root: [`root`] }, (e3) => Y(r2, e3), {}), a2 = t2(Ar);
  return p(function(e3, t3) {
    let { component: r3 = `div`, direction: o2 = `column`, spacing: s2 = 0, divider: c2, children: l2, className: u2, useFlexGap: d2 = false, ...f2 } = n2(e3), p2 = { direction: o2, spacing: s2, useFlexGap: d2 }, m2 = i2();
    return v(a2, { as: r3, ownerState: p2, ref: t3, className: He(m2.root, u2), ...f2, children: c2 ? Or(l2, c2) : l2 });
  });
}
var Mr = jr();
function Nr(e2) {
  return Y(`MuiStack`, e2);
}
var Pr = q(`MuiStack`, [`root`]), Fr = e({ Box: () => fr, Container: () => Sr, GlobalStyles: () => Qt, Grid: () => gn, RtlProvider: () => Ht, Stack: () => Mr, StyledEngineProvider: () => Jt, ThemeProvider: () => nn, alignContent: () => Pn, alignItems: () => Nn, alignSelf: () => zn, alpha: () => pe, backgroundColor: () => re, bgcolor: () => ge, blend: () => he, border: () => ie, borderBottom: () => ce, borderBottomColor: () => ot, borderColor: () => se, borderLeft: () => Ee, borderLeftColor: () => Te, borderRadius: () => Oe, borderRight: () => B, borderRightColor: () => S, borderTop: () => Be, borderTopColor: () => ft, borderTransform: () => rt, borders: () => lt, bottom: () => qn, boxClasses: () => dr, boxSizing: () => Ue, breakpoints: () => T, color: () => Ze, colorChannel: () => z, columnGap: () => fe, compose: () => J, containerClasses: () => wr, createBox: () => ur, createBreakpoints: () => C, createContainer: () => xr, createGrid: () => Lt, createSpacing: () => ut, createStack: () => jr, createStyled: () => dt, createTheme: () => Ve, createUnarySpacing: () => Ke, createUnaryUnit: () => We, css: () => i, cssContainerQueries: () => Xe, darken: () => M, decomposeColor: () => F, display: () => On, emphasize: () => de, experimental_sx: () => Ir, flex: () => In, flexBasis: () => kn, flexDirection: () => An, flexGrow: () => Ln, flexShrink: () => Rn, flexWrap: () => jn, flexbox: () => Hn, fontFamily: () => Xn, fontSize: () => Zn, fontStyle: () => Qn, fontWeight: () => $n, gap: () => me, getContainerUtilityClass: () => Cr, getContrastRatio: () => H, getGridUtilityClass: () => _n, getLuminance: () => Ct, getPath: () => ne, getStackUtilityClass: () => Nr, getStyleValue: () => _t, getThemeProps: () => kt, getValue: () => je, grid: () => R, gridArea: () => j, gridAutoColumns: () => oe, gridAutoFlow: () => ue, gridAutoRows: () => _e, gridClasses: () => xn, gridColumn: () => St, gridRow: () => E, gridTemplateAreas: () => xe, gridTemplateColumns: () => N, gridTemplateRows: () => ye, handleBreakpoints: () => O, height: () => Ae, hexToRgb: () => D, hslToRgb: () => Se, justifyContent: () => Mn, justifyItems: () => Bn, justifySelf: () => Vn, keyframes: () => t, left: () => Jn, letterSpacing: () => er, lighten: () => P, lineHeight: () => nr, major: () => 9, margin: () => ht, marginKeys: () => xt, maxHeight: () => mt, maxWidth: () => bt, mergeBreakpointsInOrder: () => L, minHeight: () => Pe, minWidth: () => vt, minor: () => 4, order: () => Fn, outline: () => Je, outlineColor: () => Ne, padding: () => Fe, paddingKeys: () => yt, palette: () => w, paletteTransform: () => Ye, patch: () => 0, position: () => Un, positions: () => Q, prerelease: () => void 0, private_safeAlpha: () => be, private_safeColorChannel: () => we, private_safeDarken: () => ae, private_safeEmphasize: () => le, private_safeLighten: () => st, recomposeColor: () => I, responsivePropType: () => Ut, rgbToHex: () => De, right: () => Kn, rowGap: () => Ce, shadows: () => Yn, shape: () => Le, shouldForwardProp: () => nt, sizeHeight: () => U, sizeWidth: () => te, sizing: () => gt, sizingTransform: () => ve, spacing: () => W, stackClasses: () => Pr, style: () => G, styled: () => Ot, systemDefaultTheme: () => ct, textAlign: () => rr, textTransform: () => tr, top: () => Gn, typography: () => ar, typographyVariant: () => ir, unstable_createCssVarsProvider: () => fn, unstable_createCssVarsTheme: () => pn, unstable_createGetCssVar: () => hr, unstable_createStyleFunctionSx: () => et, unstable_cssVarsParser: () => Re, unstable_defaultSxConfig: () => Ge, unstable_extendSxProp: () => hn, unstable_generateDirectionClasses: () => Mt, unstable_generateSizeClassNames: () => Et, unstable_generateSpacingClassNames: () => Ft, unstable_getThemeValue: () => lr, unstable_memoTheme: () => mr, unstable_prepareCssVars: () => pt, unstable_resolveBreakpointValues: () => K, unstable_styleFunctionSx: () => it, unstable_traverseBreakpoints: () => Rt, useMediaQuery: () => Pt, useRtl: () => Dt, useTheme: () => Tt, useThemeProps: () => zt, useThemeWithoutDefault: () => Vt, version: () => gr, width: () => k, zIndex: () => Wn });
function Ir() {
  throw Error(ze(19));
}
var $ = Fr, Lr = $.experimental_sx, Rr = $.css, zr = $.keyframes, Br = $.StyledEngineProvider, Vr = $.GlobalStyles, Hr = $.borders, Ur = $.breakpoints, Wr = $.cssContainerQueries, Gr = $.handleBreakpoints, Kr = $.mergeBreakpointsInOrder, qr = $.unstable_resolveBreakpointValues, Jr = $.compose, Yr = $.display, Xr = $.flexbox, Zr = $.grid, Qr = $.palette, $r = $.positions, ei = $.shadows, ti = $.sizing, ni = $.spacing, ri = $.style, ii = $.getPath, ai = $.getStyleValue, oi = $.typography, si = $.unstable_styleFunctionSx, ci = $.unstable_createStyleFunctionSx, li = $.unstable_extendSxProp, ui = $.unstable_defaultSxConfig, di = $.unstable_getThemeValue, fi = $.Box, pi = $.createBox, mi = $.createStyled, hi = $.styled, gi = $.createTheme, _i = $.createBreakpoints, vi = $.createSpacing, yi = $.shape, bi = $.useThemeProps, xi = $.getThemeProps, Si = $.useTheme, Ci = $.useThemeWithoutDefault, wi = $.useMediaQuery, Ti = $.ThemeProvider, Ei = $.unstable_memoTheme, Di = $.unstable_createCssVarsProvider, Oi = $.unstable_createGetCssVar, ki = $.unstable_cssVarsParser, Ai = $.unstable_prepareCssVars, ji = $.unstable_createCssVarsTheme, Mi = $.responsivePropType, Ni = $.RtlProvider, Pi = $.createContainer, Fi = $.Container, Ii = $.Grid, Li = $.Stack, Ri = $.borderTransform, zi = $.border, Bi = $.borderTop, Vi = $.borderRight, Hi = $.borderBottom, Ui = $.borderLeft, Wi = $.borderColor, Gi = $.borderTopColor, Ki = $.borderRightColor, qi = $.borderBottomColor, Ji = $.borderLeftColor, Yi = $.outline, Xi = $.outlineColor, Zi = $.borderRadius, Qi = $.flexBasis, $i = $.flexDirection, ea = $.flexWrap, ta = $.justifyContent, na = $.alignItems, ra = $.alignContent, ia = $.order, aa = $.flex, oa = $.flexGrow, sa = $.flexShrink, ca = $.alignSelf, la = $.justifyItems, ua = $.justifySelf, da = $.gap, fa = $.columnGap, pa = $.rowGap, ma = $.gridColumn, ha = $.gridRow, ga = $.gridAutoFlow, _a = $.gridAutoColumns, va = $.gridAutoRows, ya = $.gridTemplateColumns, ba = $.gridTemplateRows, xa = $.gridTemplateAreas, Sa = $.gridArea, Ca = $.paletteTransform, wa = $.color, Ta = $.bgcolor, Ea = $.backgroundColor, Da = $.position, Oa = $.zIndex, ka = $.top, Aa = $.right, ja = $.bottom, Ma = $.left, Na = $.sizingTransform, Pa = $.width, Fa = $.maxWidth, Ia = $.minWidth, La = $.height, Ra = $.maxHeight, za = $.minHeight, Ba = $.sizeWidth, Va = $.sizeHeight, Ha = $.boxSizing, Ua = $.marginKeys, Wa = $.paddingKeys, Ga = $.createUnaryUnit, Ka = $.createUnarySpacing, qa = $.getValue, Ja = $.margin, Ya = $.padding, Xa = $.fontFamily, Za = $.fontSize, Qa = $.fontStyle, $a = $.fontWeight, eo = $.letterSpacing, to = $.textTransform, no = $.lineHeight, ro = $.textAlign, io = $.typographyVariant, ao = $.boxClasses, oo = $.systemDefaultTheme, so = $.shouldForwardProp, co = $.hexToRgb, lo = $.decomposeColor, uo = $.colorChannel, fo = $.private_safeColorChannel, po = $.recomposeColor, mo = $.rgbToHex, ho = $.hslToRgb, go = $.getLuminance, _o = $.getContrastRatio, vo = $.alpha, yo = $.private_safeAlpha, bo = $.darken, xo = $.private_safeDarken, So = $.lighten, Co = $.private_safeLighten, wo = $.emphasize, To = $.private_safeEmphasize, Eo = $.blend, Do = $.useRtl, Oo = $.version, ko = $.major, Ao = $.minor, jo = $.patch, Mo = $.prerelease, No = $.containerClasses, Po = $.getContainerUtilityClass, Fo = $.createGrid, Io = $.gridClasses, Lo = $.unstable_traverseBreakpoints, Ro = $.unstable_generateDirectionClasses, zo = $.unstable_generateSizeClassNames, Bo = $.unstable_generateSpacingClassNames, Vo = $.getGridUtilityClass, Ho = $.createStack, Uo = $.stackClasses, Wo = $.getStackUtilityClass, Go = Reflect.get(Fr, `default`) ?? Fr;
export {
  fi as Box,
  Fi as Container,
  Vr as GlobalStyles,
  Ii as Grid,
  Ni as RtlProvider,
  Li as Stack,
  Br as StyledEngineProvider,
  Ti as ThemeProvider,
  ra as alignContent,
  na as alignItems,
  ca as alignSelf,
  vo as alpha,
  Ea as backgroundColor,
  Ta as bgcolor,
  Eo as blend,
  zi as border,
  Hi as borderBottom,
  qi as borderBottomColor,
  Wi as borderColor,
  Ui as borderLeft,
  Ji as borderLeftColor,
  Zi as borderRadius,
  Vi as borderRight,
  Ki as borderRightColor,
  Bi as borderTop,
  Gi as borderTopColor,
  Ri as borderTransform,
  Hr as borders,
  ja as bottom,
  ao as boxClasses,
  Ha as boxSizing,
  Ur as breakpoints,
  wa as color,
  uo as colorChannel,
  fa as columnGap,
  Jr as compose,
  No as containerClasses,
  pi as createBox,
  _i as createBreakpoints,
  Pi as createContainer,
  Fo as createGrid,
  vi as createSpacing,
  Ho as createStack,
  mi as createStyled,
  gi as createTheme,
  Ka as createUnarySpacing,
  Ga as createUnaryUnit,
  Rr as css,
  Wr as cssContainerQueries,
  bo as darken,
  lo as decomposeColor,
  Go as default,
  Yr as display,
  wo as emphasize,
  Lr as experimental_sx,
  aa as flex,
  Qi as flexBasis,
  $i as flexDirection,
  oa as flexGrow,
  sa as flexShrink,
  ea as flexWrap,
  Xr as flexbox,
  Xa as fontFamily,
  Za as fontSize,
  Qa as fontStyle,
  $a as fontWeight,
  da as gap,
  Po as getContainerUtilityClass,
  _o as getContrastRatio,
  Vo as getGridUtilityClass,
  go as getLuminance,
  ii as getPath,
  Wo as getStackUtilityClass,
  ai as getStyleValue,
  xi as getThemeProps,
  qa as getValue,
  Zr as grid,
  Sa as gridArea,
  _a as gridAutoColumns,
  ga as gridAutoFlow,
  va as gridAutoRows,
  Io as gridClasses,
  ma as gridColumn,
  ha as gridRow,
  xa as gridTemplateAreas,
  ya as gridTemplateColumns,
  ba as gridTemplateRows,
  Gr as handleBreakpoints,
  La as height,
  co as hexToRgb,
  ho as hslToRgb,
  ta as justifyContent,
  la as justifyItems,
  ua as justifySelf,
  zr as keyframes,
  Ma as left,
  eo as letterSpacing,
  So as lighten,
  no as lineHeight,
  ko as major,
  Ja as margin,
  Ua as marginKeys,
  Ra as maxHeight,
  Fa as maxWidth,
  Kr as mergeBreakpointsInOrder,
  za as minHeight,
  Ia as minWidth,
  Ao as minor,
  ia as order,
  Yi as outline,
  Xi as outlineColor,
  Ya as padding,
  Wa as paddingKeys,
  Qr as palette,
  Ca as paletteTransform,
  jo as patch,
  Da as position,
  $r as positions,
  Mo as prerelease,
  yo as private_safeAlpha,
  fo as private_safeColorChannel,
  xo as private_safeDarken,
  To as private_safeEmphasize,
  Co as private_safeLighten,
  po as recomposeColor,
  Mi as responsivePropType,
  mo as rgbToHex,
  Aa as right,
  pa as rowGap,
  ei as shadows,
  yi as shape,
  so as shouldForwardProp,
  Va as sizeHeight,
  Ba as sizeWidth,
  ti as sizing,
  Na as sizingTransform,
  ni as spacing,
  Uo as stackClasses,
  ri as style,
  hi as styled,
  oo as systemDefaultTheme,
  ro as textAlign,
  to as textTransform,
  ka as top,
  oi as typography,
  io as typographyVariant,
  Di as unstable_createCssVarsProvider,
  ji as unstable_createCssVarsTheme,
  Oi as unstable_createGetCssVar,
  ci as unstable_createStyleFunctionSx,
  ki as unstable_cssVarsParser,
  ui as unstable_defaultSxConfig,
  li as unstable_extendSxProp,
  Ro as unstable_generateDirectionClasses,
  zo as unstable_generateSizeClassNames,
  Bo as unstable_generateSpacingClassNames,
  di as unstable_getThemeValue,
  Ei as unstable_memoTheme,
  Ai as unstable_prepareCssVars,
  qr as unstable_resolveBreakpointValues,
  si as unstable_styleFunctionSx,
  Lo as unstable_traverseBreakpoints,
  wi as useMediaQuery,
  Do as useRtl,
  Si as useTheme,
  bi as useThemeProps,
  Ci as useThemeWithoutDefault,
  Oo as version,
  Pa as width,
  Oa as zIndex
};
