import { t as e } from "./rolldown-runtime-hePW80VL.js";
import { a as t, n } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare___mf_0_emotion_mf_1_react__loadShare__.js-BHa70R9q.js";
import { d as r, f as i, i as a, r as o, s } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare__react__loadShare__.js-DfDU6gQX.js";
import { n as c } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-FePC3bXN.js";
import { a as l, c as u, i as d, o as f, r as p, s as m, t as h } from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-CdY6xi2W.js";
function g(e3, ...t2) {
  let n2 = new URL(`https://mui.com/production-error/?code=${e3}`);
  return t2.forEach((e4) => n2.searchParams.append(`args[]`, e4)), `Minified MUI error #${e3}; visit ${n2} for the full message.`;
}
var _ = (e3) => {
  let t2 = Object.keys(e3).map((t3) => ({ key: t3, val: e3[t3] })) || [];
  return t2.sort((e4, t3) => e4.val - t3.val), t2.reduce((e4, t3) => ({ ...e4, [t3.key]: t3.val }), {});
};
function v(e3) {
  let { values: t2 = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n2 = `px`, step: r2 = 5, ...i2 } = e3, a2 = _(t2), o2 = Object.keys(a2);
  function s2(e4) {
    return `@media (min-width:${typeof t2[e4] == `number` ? t2[e4] : e4}${n2})`;
  }
  function c2(e4) {
    return `@media (max-width:${(typeof t2[e4] == `number` ? t2[e4] : e4) - r2 / 100}${n2})`;
  }
  function l2(e4, i3) {
    let a3 = o2.indexOf(i3);
    return `@media (min-width:${typeof t2[e4] == `number` ? t2[e4] : e4}${n2}) and (max-width:${(a3 !== -1 && typeof t2[o2[a3]] == `number` ? t2[o2[a3]] : i3) - r2 / 100}${n2})`;
  }
  function u2(e4) {
    return o2.indexOf(e4) + 1 < o2.length ? l2(e4, o2[o2.indexOf(e4) + 1]) : s2(e4);
  }
  function d2(e4) {
    let t3 = o2.indexOf(e4);
    return t3 === 0 ? s2(o2[1]) : t3 === o2.length - 1 ? c2(o2[t3]) : l2(e4, o2[o2.indexOf(e4) + 1]).replace(`@media`, `@media not all and`);
  }
  let f2 = [];
  for (let e4 = 0; e4 < o2.length; e4 += 1) f2.push(s2(o2[e4]));
  return { keys: o2, values: a2, up: s2, down: c2, between: l2, only: u2, not: d2, unit: n2, internal_mediaKeys: f2, ...i2 };
}
var y = e(((e3) => {
  var t2 = /* @__PURE__ */ Symbol.for(`react.fragment`), n2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), r2 = /* @__PURE__ */ Symbol.for(`react.profiler`), i2 = /* @__PURE__ */ Symbol.for(`react.consumer`), a2 = /* @__PURE__ */ Symbol.for(`react.context`), o2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), s2 = /* @__PURE__ */ Symbol.for(`react.suspense`), c2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), l2 = /* @__PURE__ */ Symbol.for(`react.memo`), u2 = /* @__PURE__ */ Symbol.for(`react.lazy`), d2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), f2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
  e3.isValidElementType = function(e4) {
    return !!(typeof e4 == `string` || typeof e4 == `function` || e4 === t2 || e4 === r2 || e4 === n2 || e4 === s2 || e4 === c2 || e4 === d2 || typeof e4 == `object` && e4 && (e4.$$typeof === u2 || e4.$$typeof === l2 || e4.$$typeof === a2 || e4.$$typeof === i2 || e4.$$typeof === o2 || e4.$$typeof === f2 || e4.getModuleId !== void 0));
  };
})), b = e(((e3, t2) => {
  t2.exports = y();
}))();
function x(e3) {
  if (typeof e3 != `object` || !e3) return false;
  let t2 = Object.getPrototypeOf(e3);
  return (t2 === null || t2 === Object.prototype || Object.getPrototypeOf(t2) === null) && !(Symbol.toStringTag in e3) && !(Symbol.iterator in e3);
}
function S(e3) {
  if (s(e3) || (0, b.isValidElementType)(e3) || !x(e3)) return e3;
  let t2 = {};
  return Object.keys(e3).forEach((n2) => {
    t2[n2] = S(e3[n2]);
  }), t2;
}
function C(e3, t2, n2 = { clone: true }) {
  let r2 = n2.clone ? { ...e3 } : e3;
  return x(e3) && x(t2) && Object.keys(t2).forEach((i2) => {
    s(t2[i2]) || (0, b.isValidElementType)(t2[i2]) ? r2[i2] = t2[i2] : x(t2[i2]) && Object.prototype.hasOwnProperty.call(e3, i2) && x(e3[i2]) ? r2[i2] = C(e3[i2], t2[i2], n2) : n2.clone ? r2[i2] = x(t2[i2]) ? S(t2[i2]) : t2[i2] : r2[i2] = t2[i2];
  }), r2;
}
function ee(e3, t2 = -(2 ** 53 - 1), n2 = 2 ** 53 - 1) {
  return Math.max(t2, Math.min(e3, n2));
}
function te(e3, t2 = 0, n2 = 1) {
  return ee(e3, t2, n2);
}
function ne(e3) {
  e3 = e3.slice(1);
  let t2 = RegExp(`.{1,${e3.length >= 6 ? 2 : 1}}`, `g`), n2 = e3.match(t2);
  return n2 && n2[0].length === 1 && (n2 = n2.map((e4) => e4 + e4)), n2 ? `rgb${n2.length === 4 ? `a` : ``}(${n2.map((e4, t3) => t3 < 3 ? parseInt(e4, 16) : Math.round(parseInt(e4, 16) / 255 * 1e3) / 1e3).join(`, `)})` : ``;
}
function re(e3) {
  let t2 = e3.toString(16);
  return t2.length === 1 ? `0${t2}` : t2;
}
function w(e3) {
  if (e3.type) return e3;
  if (e3.charAt(0) === `#`) return w(ne(e3));
  let t2 = e3.indexOf(`(`), n2 = e3.substring(0, t2);
  if (![`rgb`, `rgba`, `hsl`, `hsla`, `color`].includes(n2)) throw Error(g(9, e3));
  let r2 = e3.substring(t2 + 1, e3.length - 1), i2;
  if (n2 === `color`) {
    if (r2 = r2.split(` `), i2 = r2.shift(), r2.length === 4 && r2[3].charAt(0) === `/` && (r2[3] = r2[3].slice(1)), ![`srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec-2020`].includes(i2)) throw Error(g(10, i2));
  } else r2 = r2.split(`,`);
  return r2 = r2.map((e4) => parseFloat(e4)), { type: n2, values: r2, colorSpace: i2 };
}
var ie = (e3) => {
  let t2 = w(e3);
  return t2.values.slice(0, 3).map((e4, n2) => t2.type.includes(`hsl`) && n2 !== 0 ? `${e4}%` : e4).join(` `);
}, ae = (e3, t2) => {
  try {
    return ie(e3);
  } catch {
    return e3;
  }
};
function T(e3) {
  let { type: t2, colorSpace: n2 } = e3, { values: r2 } = e3;
  return t2.includes(`rgb`) ? r2 = r2.map((e4, t3) => t3 < 3 ? parseInt(e4, 10) : e4) : t2.includes(`hsl`) && (r2[1] = `${r2[1]}%`, r2[2] = `${r2[2]}%`), r2 = t2.includes(`color`) ? `${n2} ${r2.join(` `)}` : `${r2.join(`, `)}`, `${t2}(${r2})`;
}
function oe(e3) {
  if (e3.startsWith(`#`)) return e3;
  let { values: t2 } = w(e3);
  return `#${t2.map((e4, t3) => re(t3 === 3 ? Math.round(255 * e4) : e4)).join(``)}`;
}
function se(e3) {
  e3 = w(e3);
  let { values: t2 } = e3, n2 = t2[0], r2 = t2[1] / 100, i2 = t2[2] / 100, a2 = r2 * Math.min(i2, 1 - i2), o2 = (e4, t3 = (e4 + n2 / 30) % 12) => i2 - a2 * Math.max(Math.min(t3 - 3, 9 - t3, 1), -1), s2 = `rgb`, c2 = [Math.round(o2(0) * 255), Math.round(o2(8) * 255), Math.round(o2(4) * 255)];
  return e3.type === `hsla` && (s2 += `a`, c2.push(t2[3])), T({ type: s2, values: c2 });
}
function E(e3) {
  e3 = w(e3);
  let t2 = e3.type === `hsl` || e3.type === `hsla` ? w(se(e3)).values : e3.values;
  return t2 = t2.map((t3) => (e3.type !== `color` && (t3 /= 255), t3 <= 0.03928 ? t3 / 12.92 : ((t3 + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t2[0] + 0.7152 * t2[1] + 0.0722 * t2[2]).toFixed(3));
}
function ce(e3, t2) {
  let n2 = E(e3), r2 = E(t2);
  return (Math.max(n2, r2) + 0.05) / (Math.min(n2, r2) + 0.05);
}
function le(e3, t2) {
  return e3 = w(e3), t2 = te(t2), (e3.type === `rgb` || e3.type === `hsl`) && (e3.type += `a`), e3.type === `color` ? e3.values[3] = `/${t2}` : e3.values[3] = t2, T(e3);
}
function ue(e3, t2, n2) {
  try {
    return le(e3, t2);
  } catch {
    return e3;
  }
}
function de(e3, t2) {
  if (e3 = w(e3), t2 = te(t2), e3.type.includes(`hsl`)) e3.values[2] *= 1 - t2;
  else if (e3.type.includes(`rgb`) || e3.type.includes(`color`)) for (let n2 = 0; n2 < 3; n2 += 1) e3.values[n2] *= 1 - t2;
  return T(e3);
}
function fe(e3, t2, n2) {
  try {
    return de(e3, t2);
  } catch {
    return e3;
  }
}
function pe(e3, t2) {
  if (e3 = w(e3), t2 = te(t2), e3.type.includes(`hsl`)) e3.values[2] += (100 - e3.values[2]) * t2;
  else if (e3.type.includes(`rgb`)) for (let n2 = 0; n2 < 3; n2 += 1) e3.values[n2] += (255 - e3.values[n2]) * t2;
  else if (e3.type.includes(`color`)) for (let n2 = 0; n2 < 3; n2 += 1) e3.values[n2] += (1 - e3.values[n2]) * t2;
  return T(e3);
}
function me(e3, t2, n2) {
  try {
    return pe(e3, t2);
  } catch {
    return e3;
  }
}
function he(e3, t2 = 0.15) {
  return E(e3) > 0.5 ? de(e3, t2) : pe(e3, t2);
}
function ge(e3, t2, n2) {
  try {
    return he(e3, t2);
  } catch {
    return e3;
  }
}
function _e(e3, t2, n2, r2 = 1) {
  let i2 = (e4, t3) => Math.round((e4 ** (1 / r2) * (1 - n2) + t3 ** (1 / r2) * n2) ** r2), a2 = w(e3), o2 = w(t2);
  return T({ type: `rgb`, values: [i2(a2.values[0], o2.values[0]), i2(a2.values[1], o2.values[1]), i2(a2.values[2], o2.values[2])] });
}
function ve(e3) {
  if (e3 == null) return true;
  for (let t2 in e3) return false;
  return true;
}
function D(e3, t2) {
  let n2 = Array.isArray(t2), r2 = Array.isArray(e3);
  return Ce(t2) ? t2 : we(e3) ? O(t2) : n2 && r2 ? xe(e3, t2) : n2 === r2 ? Te(e3, t2) : O(t2);
}
function ye(e3) {
  let t2 = 0, n2 = e3.length, r2 = Array(n2);
  for (t2 = 0; t2 < n2; t2 += 1) r2[t2] = O(e3[t2]);
  return r2;
}
function be(e3) {
  let t2 = {};
  for (let n2 in e3) n2 !== `__proto__` && n2 !== `constructor` && n2 !== `prototype` && (t2[n2] = O(e3[n2]));
  return t2;
}
function xe(e3, t2) {
  let n2 = e3.length;
  for (let r2 = 0; r2 < t2.length; r2 += 1) e3[n2 + r2] = O(t2[r2]);
  return e3;
}
function Se(e3) {
  return typeof e3 == `object` && !!e3 && !(e3 instanceof RegExp) && !(e3 instanceof Date);
}
function Ce(e3) {
  return typeof e3 != `object` || !e3;
}
function we(e3) {
  return typeof e3 != `object` || !e3 || e3 instanceof RegExp || e3 instanceof Date;
}
function O(e3) {
  return Se(e3) ? Array.isArray(e3) ? ye(e3) : be(e3) : e3;
}
function Te(e3, t2) {
  for (let n2 in t2) n2 !== `__proto__` && n2 !== `constructor` && n2 !== `prototype` && (e3[n2] = n2 in e3 ? D(e3[n2], t2[n2]) : O(t2[n2]));
  return e3;
}
var Ee = { clone: false };
function De(e3, t2) {
  return t2 ? C(e3, t2, Ee) : e3;
}
var Oe = /min-width:\s*([0-9.]+)/;
function ke(e3, t2) {
  if (!e3.containerQueries || !Ae(t2)) return t2;
  let n2 = [];
  for (let e4 in t2) e4.startsWith(`@container`) && n2.push(e4);
  n2.sort((e4, t3) => {
    var _a, _b;
    return +(((_a = e4.match(Oe)) == null ? void 0 : _a[1]) || 0) - (((_b = t3.match(Oe)) == null ? void 0 : _b[1]) || 0);
  });
  let r2 = t2;
  for (let e4 = 0; e4 < n2.length; e4 += 1) {
    let t3 = n2[e4], i2 = r2[t3];
    delete r2[t3], r2[t3] = i2;
  }
  return r2;
}
function Ae(e3) {
  for (let t2 in e3) if (t2.startsWith(`@container`)) return true;
  return false;
}
function je(e3, t2) {
  return t2 === `@` || t2.startsWith(`@`) && (e3.some((e4) => t2.startsWith(`@${e4}`)) || !!t2.match(/^@\d/));
}
function Me(e3, t2) {
  let n2 = t2.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n2) return null;
  let [, r2, i2] = n2, a2 = Number.isNaN(+r2) ? r2 || 0 : +r2;
  return e3.containerQueries(i2).up(a2);
}
function Ne(e3) {
  let t2 = (e4, t3) => e4.replace(`@media`, t3 ? `@container ${t3}` : `@container`);
  function n2(n3, r3) {
    n3.up = (...n4) => t2(e3.breakpoints.up(...n4), r3), n3.down = (...n4) => t2(e3.breakpoints.down(...n4), r3), n3.between = (...n4) => t2(e3.breakpoints.between(...n4), r3), n3.only = (...n4) => t2(e3.breakpoints.only(...n4), r3), n3.not = (...n4) => {
      let i3 = t2(e3.breakpoints.not(...n4), r3);
      return i3.includes(`not all and`) ? i3.replace(`not all and `, ``).replace(`min-width:`, `width<`).replace(`max-width:`, `width>`).replace(`and`, `or`) : i3;
    };
  }
  let r2 = {}, i2 = (e4) => (n2(r2, e4), r2);
  return n2(i2), { ...e3, containerQueries: i2 };
}
var Pe = {}, Fe = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, k = v({ values: Fe }), Ie = { containerQueries: (e3) => ({ up: (t2) => {
  let n2 = typeof t2 == `number` ? t2 : Fe[t2] || t2;
  return typeof n2 == `number` && (n2 = `${n2}px`), e3 ? `@container ${e3} (min-width:${n2})` : `@container (min-width:${n2})`;
} }) };
function A(e3, t2, n2) {
  let r2 = {};
  return Le(r2, e3.theme, t2, (e4, t3, i2) => {
    let a2 = n2(t3, i2);
    e4 ? r2[e4] = a2 : D(r2, a2);
  });
}
function Le(e3, t2, n2, r2) {
  if (t2 ?? (t2 = Pe), Array.isArray(n2)) {
    let i2 = t2.breakpoints ?? k;
    for (let t3 = 0; t3 < n2.length; t3 += 1) Re(e3, i2.up(i2.keys[t3]), n2[t3], void 0, r2);
    return e3;
  }
  if (typeof n2 == `object`) {
    let i2 = t2.breakpoints ?? k, a2 = i2.values ?? Fe;
    for (let o2 in n2) if (je(i2.keys, o2)) {
      let i3 = Me(t2.containerQueries ? t2 : Ie, o2);
      i3 && Re(e3, i3, n2[o2], o2, r2);
    } else if (o2 in a2) Re(e3, i2.up(o2), n2[o2], o2, r2);
    else {
      let t3 = o2;
      e3[t3] = n2[t3];
    }
    return e3;
  }
  return r2(void 0, n2), e3;
}
function Re(e3, t2, n2, r2, i2) {
  e3[t2] ?? (e3[t2] = {}), i2(t2, n2, r2);
}
function ze(e3) {
  let t2 = (t3) => {
    let n2 = t3.theme || {}, r2 = e3(t3), i2 = n2.breakpoints || k;
    return De(r2, i2.keys.reduce((r3, a2) => (t3[a2] && (r3 || (r3 = {}), r3[i2.up(a2)] = e3({ theme: n2, ...t3[a2] })), r3), null));
  };
  return t2.propTypes = {}, t2.filterProps = [`xs`, `sm`, `md`, `lg`, `xl`, ...e3.filterProps], t2;
}
function Be(e3 = k) {
  let { internal_mediaKeys: t2 } = e3, n2 = {};
  for (let e4 = 0; e4 < t2.length; e4 += 1) n2[t2[e4]] = {};
  return n2;
}
function Ve(e3, t2) {
  let n2 = e3.internal_mediaKeys;
  for (let e4 = 0; e4 < n2.length; e4 += 1) {
    let r2 = n2[e4];
    ve(t2[r2]) && delete t2[r2];
  }
  return t2;
}
function He(e3, ...t2) {
  return Ve(e3, [Be(e3), ...t2].reduce((e4, t3) => C(e4, t3), {}));
}
function Ue(e3, t2) {
  if (typeof e3 != `object`) return {};
  let n2 = {}, r2 = Object.keys(t2);
  return Array.isArray(e3) ? r2.forEach((t3, r3) => {
    r3 < e3.length && (n2[t3] = true);
  }) : r2.forEach((t3) => {
    e3[t3] != null && (n2[t3] = true);
  }), n2;
}
function We(e3) {
  let { values: t2, breakpoints: n2, base: r2 } = e3, i2 = r2 || Ue(t2, n2), a2 = Object.keys(i2);
  if (a2.length === 0) return t2;
  let o2;
  return a2.reduce((e4, n3, r3) => {
    if (Array.isArray(t2)) e4[n3] = t2[r3] == null ? t2[o2] : t2[r3], o2 = r3;
    else if (typeof t2 == `object` && t2) {
      let r4 = t2;
      e4[n3] = r4[n3] == null ? r4[o2] : r4[n3], o2 = n3;
    } else e4[n3] = t2;
    return e4;
  }, {});
}
function Ge(e3, t2) {
  if (Array.isArray(t2)) return true;
  if (typeof t2 == `object` && t2) {
    for (let n3 = 0; n3 < e3.keys.length; n3 += 1) if (e3.keys[n3] in t2) return true;
    let n2 = Object.keys(t2);
    for (let t3 = 0; t3 < n2.length; t3 += 1) if (je(e3.keys, n2[t3])) return true;
  }
  return false;
}
function Ke(e3) {
  if (typeof e3 != `string`) throw Error(g(7));
  return e3.charAt(0).toUpperCase() + e3.slice(1);
}
function qe(e3, t2, n2, r2 = n2) {
  let i2;
  return i2 = typeof e3 == `function` ? e3(n2) : Array.isArray(e3) ? e3[n2] || r2 : typeof n2 == `string` && j(e3, n2) || r2, t2 && (i2 = t2(i2, r2, e3)), i2;
}
function Je(e3, t2, n2, r2) {
  let i2;
  return i2 = typeof e3 == `function` ? e3(n2) : Array.isArray(e3) ? e3[n2] || n2 : typeof n2 == `string` && j(e3, n2, true, r2) || n2, t2 && (i2 = t2(i2, n2, e3)), i2;
}
function j(e3, t2, n2 = true, r2 = void 0) {
  if (!e3 || !t2) return null;
  let i2 = t2.split(`.`);
  if (e3.vars && n2) {
    let t3 = Ye(e3.vars, i2, r2);
    if (t3 != null) return t3;
  }
  return Ye(e3, i2, r2);
}
function Ye(e3, t2, n2 = void 0) {
  let r2, i2 = e3, a2 = 0;
  for (; a2 < t2.length; ) {
    if (i2 == null) return i2;
    r2 = i2, i2 = i2[t2[a2]], a2 += 1;
  }
  if (n2 && i2 === void 0) {
    let e4 = t2[t2.length - 1], i3 = `${n2}${e4 === "default" ? `` : Ke(e4)}`;
    return r2 == null ? void 0 : r2[i3];
  }
  return i2;
}
function M(e3) {
  let { prop: t2, cssProperty: n2 = e3.prop, themeKey: r2, transform: i2 } = e3, a2 = (e4) => {
    if (e4[t2] == null) return null;
    let a3 = e4[t2], o2 = e4.theme, s2 = j(o2, r2) || {};
    return A(e4, a3, (e5) => {
      let r3 = Je(s2, i2, e5, t2);
      return n2 === false ? r3 : { [n2]: r3 };
    });
  };
  return a2.propTypes = {}, a2.filterProps = [t2], a2;
}
var Xe = { internal_cache: {} }, N = { m: `margin`, p: `padding` }, Ze = { t: `Top`, r: `Right`, b: `Bottom`, l: `Left`, x: [`Left`, `Right`], y: [`Top`, `Bottom`] }, Qe = { marginX: `mx`, marginY: `my`, paddingX: `px`, paddingY: `py` }, P = {};
for (let e3 in N) P[e3] = [N[e3]];
for (let e3 in N) for (let t2 in Ze) {
  let n2 = N[e3], r2 = Ze[t2], i2 = Array.isArray(r2) ? r2.map((e4) => n2 + e4) : [n2 + r2];
  P[e3 + t2] = i2;
}
for (let e3 in Qe) P[e3] = P[Qe[e3]];
var F = /* @__PURE__ */ new Set([`m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`, `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginX`, `marginY`, `marginInline`, `marginInlineStart`, `marginInlineEnd`, `marginBlock`, `marginBlockStart`, `marginBlockEnd`]), I = /* @__PURE__ */ new Set([`p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingX`, `paddingY`, `paddingInline`, `paddingInlineStart`, `paddingInlineEnd`, `paddingBlock`, `paddingBlockStart`, `paddingBlockEnd`]), $e = /* @__PURE__ */ new Set([...F, ...I]);
function L(e3, t2, n2, r2) {
  let i2 = j(e3, t2, true) ?? n2;
  return typeof i2 == `number` || typeof i2 == `string` ? (e4) => typeof e4 == `string` ? e4 : typeof i2 == `string` ? i2.startsWith(`var(`) && e4 === 0 ? 0 : i2.startsWith(`var(`) && e4 === 1 ? i2 : `calc(${e4} * ${i2})` : i2 * e4 : Array.isArray(i2) ? (e4) => {
    if (typeof e4 == `string`) return e4;
    let t3 = i2[Math.abs(e4)];
    return e4 >= 0 ? t3 : typeof t3 == `number` ? -t3 : typeof t3 == `string` && t3.startsWith(`var(`) ? `calc(-1 * ${t3})` : `-${t3}`;
  } : typeof i2 == `function` ? i2 : () => void 0;
}
function et(e3) {
  return L(e3, `spacing`, 8, `spacing`);
}
function R(e3, t2) {
  return typeof t2 == `string` || t2 == null ? t2 : e3(t2);
}
var tt = [``];
function nt(e3, t2) {
  var _a;
  let n2 = e3.theme ?? Xe, r2 = ((_a = n2 == null ? void 0 : n2.internal_cache) == null ? void 0 : _a.unarySpacing) ?? et(n2), i2 = {};
  for (let n3 in e3) {
    if (!t2.has(n3)) continue;
    let a2 = P[n3] ?? (tt[0] = n3, tt), o2 = e3[n3];
    Le(i2, e3.theme, o2, (e4, t3) => {
      let n4 = e4 ? i2[e4] : i2;
      for (let e5 = 0; e5 < a2.length; e5 += 1) n4[a2[e5]] = R(r2, t3);
    });
  }
  return i2;
}
function rt(e3) {
  return nt(e3, F);
}
rt.propTypes = {}, rt.filterProps = F;
var z = rt;
function it(e3) {
  return nt(e3, I);
}
it.propTypes = {}, it.filterProps = I;
var B = it;
function at(e3) {
  return nt(e3, $e);
}
at.propTypes = {}, at.filterProps = $e;
var ot = at, st = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ct = u(function(e3) {
  return st.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
}), lt = function(e3) {
  return e3 !== `theme`;
}, ut = function(e3) {
  return typeof e3 == `string` && e3.charCodeAt(0) > 96 ? ct : lt;
}, dt = function(e3, t2, n2) {
  var r2;
  if (t2) {
    var i2 = t2.shouldForwardProp;
    r2 = e3.__emotion_forwardProp && i2 ? function(t3) {
      return e3.__emotion_forwardProp(t3) && i2(t3);
    } : i2;
  }
  return typeof r2 != `function` && n2 && (r2 = e3.__emotion_forwardProp), r2;
}, ft = function(e3) {
  var t2 = e3.cache, n2 = e3.serialized, r2 = e3.isStringTag;
  return f(t2, n2, r2), h(function() {
    return l(t2, n2, r2);
  }), null;
}, pt = function e2(o2, s2) {
  var c2 = o2.__emotion_real === o2, l2 = c2 && o2.__emotion_base || o2, u2, f2;
  s2 !== void 0 && (u2 = s2.label, f2 = s2.target);
  var h2 = dt(o2, s2, c2), g2 = h2 || ut(l2), _2 = !g2(`as`);
  return function() {
    var v2 = arguments, y2 = c2 && o2.__emotion_styles !== void 0 ? o2.__emotion_styles.slice(0) : [];
    if (u2 !== void 0 && y2.push(`label:` + u2 + `;`), v2[0] == null || v2[0].raw === void 0) y2.push.apply(y2, v2);
    else {
      var b2 = v2[0];
      y2.push(b2[0]);
      for (var x2 = v2.length, S2 = 1; S2 < x2; S2++) y2.push(v2[S2], b2[S2]);
    }
    var C2 = t(function(e3, t2, o3) {
      var s3 = _2 && e3.as || l2, c3 = ``, u3 = [], m2 = e3;
      if (e3.theme == null) {
        for (var v3 in m2 = {}, e3) m2[v3] = e3[v3];
        m2.theme = r(n);
      }
      typeof e3.className == `string` ? c3 = d(t2.registered, u3, e3.className) : e3.className != null && (c3 = e3.className + ` `);
      var b3 = p(y2.concat(u3), t2.registered, m2);
      c3 += t2.key + `-` + b3.name, f2 !== void 0 && (c3 += ` ` + f2);
      var x3 = _2 && h2 === void 0 ? ut(s3) : g2, S3 = {};
      for (var C3 in e3) _2 && C3 === `as` || x3(C3) && (S3[C3] = e3[C3]);
      return S3.className = c3, o3 && (S3.ref = o3), a(i, null, a(ft, { cache: t2, serialized: b3, isStringTag: typeof s3 == `string` }), a(s3, S3));
    });
    return C2.displayName = u2 === void 0 ? `Styled(` + (typeof l2 == `string` ? l2 : l2.displayName || l2.name || `Component`) + `)` : u2, C2.defaultProps = o2.defaultProps, C2.__emotion_real = C2, C2.__emotion_base = l2, C2.__emotion_styles = y2, C2.__emotion_forwardProp = h2, Object.defineProperty(C2, "toString", { value: function() {
      return `.` + f2;
    } }), C2.withComponent = function(t2, n2) {
      return e2(t2, m({}, s2, n2, { shouldForwardProp: dt(C2, n2, true) })).apply(void 0, y2);
    }, C2;
  };
}, mt = `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`), ht = pt.bind(null);
mt.forEach(function(e3) {
  ht[e3] = ht(e3);
});
function gt(e3, t2) {
  return ht(e3, t2);
}
function _t(e3, t2) {
  Array.isArray(e3.__emotion_styles) && (e3.__emotion_styles = t2(e3.__emotion_styles));
}
var vt = [];
function V(e3) {
  return vt[0] = e3, p(vt);
}
function yt(e3) {
  var t2, n2, r2 = ``;
  if (typeof e3 == `string` || typeof e3 == `number`) r2 += e3;
  else if (typeof e3 == `object`) {
    if (Array.isArray(e3)) {
      var i2 = e3.length;
      for (t2 = 0; t2 < i2; t2++) e3[t2] && (n2 = yt(e3[t2])) && (r2 && (r2 += ` `), r2 += n2);
    } else for (n2 in e3) e3[n2] && (r2 && (r2 += ` `), r2 += n2);
  }
  return r2;
}
function bt() {
  for (var e3, t2, n2 = 0, r2 = ``, i2 = arguments.length; n2 < i2; n2++) (e3 = arguments[n2]) && (t2 = yt(e3)) && (r2 && (r2 += ` `), r2 += t2);
  return r2;
}
function H(e3, t2, n2 = false) {
  let r2 = { ...t2 };
  for (let i2 in e3) if (Object.prototype.hasOwnProperty.call(e3, i2)) {
    let a2 = i2;
    if (a2 === `components` || a2 === `slots`) r2[a2] = { ...e3[a2], ...r2[a2] };
    else if (a2 === `componentsProps` || a2 === `slotProps`) {
      let i3 = e3[a2], o2 = t2[a2];
      if (!o2) r2[a2] = i3 || {};
      else if (!i3) r2[a2] = o2;
      else {
        r2[a2] = { ...o2 };
        for (let e4 in i3) if (Object.prototype.hasOwnProperty.call(i3, e4)) {
          let t3 = e4, s2 = i3[t3], c2 = o2[t3];
          typeof s2 == `function` || typeof c2 == `function` ? r2[a2][t3] = (...e5) => H((typeof s2 == `function` ? s2(...e5) : s2) ?? {}, (typeof c2 == `function` ? c2(...e5) : c2) ?? {}, n2) : r2[a2][t3] = H(s2 ?? {}, c2 ?? {}, n2);
        }
      }
    } else a2 === `className` && n2 && t2.className !== void 0 ? r2.className = bt(e3 == null ? void 0 : e3.className, t2 == null ? void 0 : t2.className) : a2 === `style` && n2 && t2.style ? r2.style = { ...e3 == null ? void 0 : e3.style, ...t2 == null ? void 0 : t2.style } : r2[a2] === void 0 && (r2[a2] = e3[a2]);
  }
  return r2;
}
var xt = o(void 0);
function St({ value: e3, children: t2 }) {
  return c(xt.Provider, { value: e3, children: t2 });
}
function Ct(e3) {
  let { theme: t2, name: n2, props: r2 } = e3;
  if (!t2 || !t2.components || !t2.components[n2]) return r2;
  let i2 = t2.components[n2];
  return i2.defaultProps ? H(i2.defaultProps, r2, t2.components.mergeClassNameAndStyle) : !i2.styleOverrides && !i2.variants ? H(i2, r2, t2.components.mergeClassNameAndStyle) : r2;
}
function wt({ props: e3, name: t2 }) {
  return Ct({ props: e3, name: t2, theme: { components: r(xt) } });
}
var Tt = { borderRadius: 4 };
function Et(e3 = 8, t2 = et({ spacing: e3 })) {
  if (e3.mui) return e3;
  let n2 = (...e4) => (e4.length === 0 ? [1] : e4).map((e5) => {
    let n3 = t2(e5);
    return typeof n3 == `number` ? `${n3}px` : n3;
  }).join(` `);
  return n2.mui = true, n2;
}
function U(...e3) {
  let t2 = e3.reduce((e4, t3) => (t3.filterProps.forEach((n3) => {
    e4[n3] = t3;
  }), e4), {}), n2 = (e4) => {
    let n3 = {};
    for (let r2 in e4) t2[r2] && D(n3, t2[r2](e4));
    return n3;
  };
  return n2.propTypes = {}, n2.filterProps = e3.reduce((e4, t3) => e4.concat(t3.filterProps), []), n2;
}
function W(e3) {
  return typeof e3 == `number` ? `${e3}px solid` : e3;
}
function G(e3, t2) {
  return M({ prop: e3, themeKey: `borders`, transform: t2 });
}
var Dt = G(`border`, W), Ot = G(`borderTop`, W), kt = G(`borderRight`, W), At = G(`borderBottom`, W), jt = G(`borderLeft`, W), Mt = G(`borderColor`), Nt = G(`borderTopColor`), Pt = G(`borderRightColor`), Ft = G(`borderBottomColor`), It = G(`borderLeftColor`), Lt = G(`outline`, W), Rt = G(`outlineColor`), K = (e3) => {
  if (e3.borderRadius !== void 0 && e3.borderRadius !== null) {
    let t2 = L(e3.theme, `shape.borderRadius`, 4, `borderRadius`);
    return A(e3, e3.borderRadius, (e4) => ({ borderRadius: R(t2, e4) }));
  }
  return null;
};
K.propTypes = {}, K.filterProps = [`borderRadius`];
var zt = U(Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, K, Lt, Rt), q = (e3) => {
  if (e3.gap !== void 0 && e3.gap !== null) {
    let t2 = L(e3.theme, `spacing`, 8, `gap`);
    return A(e3, e3.gap, (e4) => ({ gap: R(t2, e4) }));
  }
  return null;
};
q.propTypes = {}, q.filterProps = [`gap`];
var J = (e3) => {
  if (e3.columnGap !== void 0 && e3.columnGap !== null) {
    let t2 = L(e3.theme, `spacing`, 8, `columnGap`);
    return A(e3, e3.columnGap, (e4) => ({ columnGap: R(t2, e4) }));
  }
  return null;
};
J.propTypes = {}, J.filterProps = [`columnGap`];
var Y = (e3) => {
  if (e3.rowGap !== void 0 && e3.rowGap !== null) {
    let t2 = L(e3.theme, `spacing`, 8, `rowGap`);
    return A(e3, e3.rowGap, (e4) => ({ rowGap: R(t2, e4) }));
  }
  return null;
};
Y.propTypes = {}, Y.filterProps = [`rowGap`];
var Bt = M({ prop: `gridColumn` }), Vt = M({ prop: `gridRow` }), Ht = M({ prop: `gridAutoFlow` }), Ut = M({ prop: `gridAutoColumns` }), Wt = M({ prop: `gridAutoRows` }), Gt = M({ prop: `gridTemplateColumns` }), Kt = M({ prop: `gridTemplateRows` }), qt = M({ prop: `gridTemplateAreas` }), Jt = M({ prop: `gridArea` }), Yt = U(q, J, Y, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt);
function X(e3, t2) {
  return t2 === `grey` ? t2 : e3;
}
var Xt = M({ prop: `color`, themeKey: `palette`, transform: X }), Zt = M({ prop: `bgcolor`, cssProperty: `backgroundColor`, themeKey: `palette`, transform: X }), Qt = M({ prop: `backgroundColor`, themeKey: `palette`, transform: X }), $t = U(Xt, Zt, Qt), en = Fe;
function Z(e3) {
  return e3 <= 1 && e3 !== 0 ? `${e3 * 100}%` : e3;
}
var tn = M({ prop: `width`, transform: Z }), nn = (e3) => e3.maxWidth !== void 0 && e3.maxWidth !== null ? A(e3, e3.maxWidth, (t2) => {
  var _a, _b, _c, _d, _e2;
  let n2 = ((_c = (_b = (_a = e3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[t2]) || en[t2];
  return n2 ? ((_e2 = (_d = e3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e2.unit) === `px` ? { maxWidth: n2 } : { maxWidth: `${n2}${e3.theme.breakpoints.unit}` } : { maxWidth: Z(t2) };
}) : null;
nn.filterProps = [`maxWidth`];
var rn = M({ prop: `minWidth`, transform: Z }), an = M({ prop: `height`, transform: Z }), on = M({ prop: `maxHeight`, transform: Z }), sn = M({ prop: `minHeight`, transform: Z }), cn = M({ prop: `size`, cssProperty: `width`, transform: Z }), ln = M({ prop: `size`, cssProperty: `height`, transform: Z }), un = M({ prop: `boxSizing` }), dn = U(tn, nn, rn, an, on, sn, un), fn = { border: { themeKey: `borders`, transform: W }, borderTop: { themeKey: `borders`, transform: W }, borderRight: { themeKey: `borders`, transform: W }, borderBottom: { themeKey: `borders`, transform: W }, borderLeft: { themeKey: `borders`, transform: W }, borderColor: { themeKey: `palette` }, borderTopColor: { themeKey: `palette` }, borderRightColor: { themeKey: `palette` }, borderBottomColor: { themeKey: `palette` }, borderLeftColor: { themeKey: `palette` }, outline: { themeKey: `borders`, transform: W }, outlineColor: { themeKey: `palette` }, borderRadius: { themeKey: `shape.borderRadius`, style: K }, color: { themeKey: `palette`, transform: X }, bgcolor: { themeKey: `palette`, cssProperty: `backgroundColor`, transform: X }, backgroundColor: { themeKey: `palette`, transform: X }, p: { style: B }, pt: { style: B }, pr: { style: B }, pb: { style: B }, pl: { style: B }, px: { style: B }, py: { style: B }, padding: { style: B }, paddingTop: { style: B }, paddingRight: { style: B }, paddingBottom: { style: B }, paddingLeft: { style: B }, paddingX: { style: B }, paddingY: { style: B }, paddingInline: { style: B }, paddingInlineStart: { style: B }, paddingInlineEnd: { style: B }, paddingBlock: { style: B }, paddingBlockStart: { style: B }, paddingBlockEnd: { style: B }, m: { style: z }, mt: { style: z }, mr: { style: z }, mb: { style: z }, ml: { style: z }, mx: { style: z }, my: { style: z }, margin: { style: z }, marginTop: { style: z }, marginRight: { style: z }, marginBottom: { style: z }, marginLeft: { style: z }, marginX: { style: z }, marginY: { style: z }, marginInline: { style: z }, marginInlineStart: { style: z }, marginInlineEnd: { style: z }, marginBlock: { style: z }, marginBlockStart: { style: z }, marginBlockEnd: { style: z }, displayPrint: { cssProperty: false, transform: (e3) => ({ "@media print": { display: e3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: q }, rowGap: { style: Y }, columnGap: { style: J }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: `zIndex` }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: `shadows` }, width: { transform: Z }, maxWidth: { style: nn }, minWidth: { transform: Z }, height: { transform: Z }, maxHeight: { transform: Z }, minHeight: { transform: Z }, boxSizing: {}, font: { themeKey: `font` }, fontFamily: { themeKey: `typography` }, fontSize: { themeKey: `typography` }, fontStyle: { themeKey: `typography` }, fontWeight: { themeKey: `typography` }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: `typography` } }, pn = {};
function mn() {
  function e3(t2) {
    if (!t2.sx) return null;
    let { sx: n2, theme: r2 = pn, nested: i2 } = t2, a2 = r2.unstable_sxConfig ?? fn, o2 = { sx: null, theme: r2, nested: true };
    function s2(n3) {
      let s3 = n3;
      if (typeof n3 == `function`) s3 = n3(r2);
      else if (typeof n3 != `object`) return n3;
      if (!s3) return null;
      let c2 = r2.breakpoints ?? k, l2 = Be(c2);
      for (let n4 in s3) {
        let i3 = _n(s3[n4], r2);
        if (i3 != null) {
          if (typeof i3 != `object`) {
            gn(l2, n4, i3, r2, a2);
            continue;
          }
          if (a2[n4]) {
            gn(l2, n4, i3, r2, a2);
            continue;
          }
          Ge(c2, i3) ? Le(l2, t2.theme, i3, (e4, t3) => {
            l2[e4][n4] = t3;
          }) : (o2.sx = i3, l2[n4] = e3(o2));
        }
      }
      return !i2 && r2.modularCssLayers ? { "@layer sx": ke(r2, Ve(c2, l2)) } : ke(r2, Ve(c2, l2));
    }
    return Array.isArray(n2) ? n2.map(s2) : s2(n2);
  }
  return e3.filterProps = [`sx`], e3;
}
var hn = mn();
function gn(e3, t2, n2, r2, i2) {
  let a2 = i2[t2];
  if (!a2) {
    e3[t2] = n2;
    return;
  }
  if (n2 == null) return;
  let { themeKey: o2 } = a2;
  if (o2 === `typography` && n2 === `inherit`) {
    e3[t2] = n2;
    return;
  }
  let { style: s2 } = a2;
  if (s2) {
    D(e3, s2({ [t2]: n2, theme: r2 }));
    return;
  }
  let { cssProperty: c2 = t2, transform: l2 } = a2, u2 = j(r2, o2);
  Le(e3, r2, n2, (n3, r3) => {
    let i3 = Je(u2, l2, r3, t2);
    c2 === false ? D(n3 ? e3[n3] : e3, i3) : n3 ? e3[n3][c2] = i3 : e3[c2] = i3;
  });
}
function _n(e3, t2) {
  return typeof e3 == `function` ? e3(t2) : e3;
}
function vn(e3, t2) {
  var _a;
  let n2 = this;
  if (n2.vars) {
    if (!((_a = n2.colorSchemes) == null ? void 0 : _a[e3]) || typeof n2.getColorSchemeSelector != `function`) return {};
    let r2 = n2.getColorSchemeSelector(e3);
    return r2 === `&` ? t2 : ((r2.includes(`data-`) || r2.includes(`.`)) && (r2 = `*:where(${r2.replace(/\s*&$/, ``)}) &`), { [r2]: t2 });
  }
  return n2.palette.mode === e3 ? t2 : {};
}
function yn(e3 = {}, ...t2) {
  let { breakpoints: n2 = {}, palette: r2 = {}, spacing: i2, shape: a2 = {}, ...o2 } = e3, s2 = v(n2), c2 = Et(i2), l2 = C({ breakpoints: s2, direction: `ltr`, components: {}, palette: { mode: `light`, ...r2 }, spacing: c2, shape: { ...Tt, ...a2 } }, o2);
  return l2 = Ne(l2), l2.applyStyles = vn, l2 = t2.reduce((e4, t3) => C(e4, t3), l2), l2.unstable_sxConfig = { ...fn, ...o2 == null ? void 0 : o2.unstable_sxConfig }, l2.unstable_sx = function(e4) {
    return hn({ sx: e4, theme: this });
  }, l2.internal_cache = {}, l2;
}
var bn = /* @__PURE__ */ new Set([`__proto__`, `constructor`, `prototype`]), xn = (e3, t2, n2, r2 = []) => {
  let i2 = e3;
  for (let e4 = 0; e4 < t2.length; e4 += 1) {
    let a2 = t2[e4];
    if (bn.has(a2)) break;
    e4 === t2.length - 1 ? Array.isArray(i2) ? i2[Number(a2)] = n2 : i2 && typeof i2 == `object` && (i2[a2] = n2) : i2 && typeof i2 == `object` && (i2[a2] || (i2[a2] = r2.includes(a2) ? [] : {}), i2 = i2[a2]);
  }
}, Sn = (e3, t2, n2) => {
  function r2(e4, i2 = [], a2 = []) {
    Object.entries(e4).forEach(([e5, o2]) => {
      (!n2 || n2 && !n2([...i2, e5])) && o2 != null && (typeof o2 == `object` && Object.keys(o2).length > 0 ? r2(o2, [...i2, e5], Array.isArray(o2) ? [...a2, e5] : a2) : t2([...i2, e5], o2, a2));
    });
  }
  r2(e3);
}, Cn = (e3, t2) => typeof t2 == `number` ? [`lineHeight`, `fontWeight`, `opacity`, `zIndex`].some((t3) => e3.includes(t3)) || e3[e3.length - 1].toLowerCase().includes(`opacity`) ? t2 : `${t2}px` : t2;
function wn(e3, t2) {
  let { prefix: n2, shouldSkipGeneratingVar: r2 } = t2 || {}, i2 = {}, a2 = {}, o2 = {};
  return Sn(e3, (e4, t3, s2) => {
    if ((typeof t3 == `string` || typeof t3 == `number`) && (!r2 || !r2(e4, t3))) {
      let r3 = `--${n2 ? `${n2}-` : ``}${e4.join(`-`)}`, c2 = Cn(e4, t3);
      Object.assign(i2, { [r3]: c2 }), xn(a2, e4, `var(${r3})`, s2), xn(o2, e4, `var(${r3}, ${c2})`, s2);
    }
  }, (e4) => e4[0] === `vars`), { css: i2, vars: a2, varsWithDefaults: o2 };
}
function Tn(e3, t2 = {}) {
  let { getSelector: n2 = _2, disableCssColorScheme: r2, colorSchemeSelector: i2, enableContrastVars: a2 } = t2, { colorSchemes: o2 = {}, components: s2, defaultColorScheme: c2 = `light`, ...l2 } = e3, { vars: u2, css: d2, varsWithDefaults: f2 } = wn(l2, t2), p2 = f2, m2 = {}, { [c2]: h2, ...g2 } = o2;
  if (Object.entries(g2 || {}).forEach(([e4, n3]) => {
    let { vars: r3, css: i3, varsWithDefaults: a3 } = wn(n3, t2);
    p2 = C(p2, a3), m2[e4] = { css: i3, vars: r3 };
  }), h2) {
    let { css: e4, vars: n3, varsWithDefaults: r3 } = wn(h2, t2);
    p2 = C(p2, r3), m2[c2] = { css: e4, vars: n3 };
  }
  function _2(t3, n3) {
    var _a, _b;
    let r3 = i2;
    if (i2 === `class` && (r3 = `.%s`), i2 === `data` && (r3 = `[data-%s]`), (i2 == null ? void 0 : i2.startsWith(`data-`)) && !i2.includes(`%s`) && (r3 = `[${i2}="%s"]`), t3) {
      if (r3 === `media`) return e3.defaultColorScheme === t3 ? `:root` : { [`@media (prefers-color-scheme: ${((_b = (_a = o2[t3]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || t3})`]: { ":root": n3 } };
      if (r3) return e3.defaultColorScheme === t3 ? `:root, ${r3.replace(`%s`, String(t3))}` : r3.replace(`%s`, String(t3));
    }
    return `:root`;
  }
  return { vars: p2, generateThemeVars: () => {
    let e4 = { ...u2 };
    return Object.entries(m2).forEach(([, { vars: t3 }]) => {
      e4 = C(e4, t3);
    }), e4;
  }, generateStyleSheets: () => {
    var _a, _b;
    let t3 = [], i3 = e3.defaultColorScheme || `light`;
    function s3(e4, n3) {
      Object.keys(n3).length && t3.push(typeof e4 == `string` ? { [e4]: { ...n3 } } : e4);
    }
    s3(n2(void 0, { ...d2 }), d2);
    let { [i3]: c3, ...l3 } = m2;
    if (c3) {
      let { css: e4 } = c3, t4 = (_b = (_a = o2[i3]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode, a3 = !r2 && t4 ? { colorScheme: t4, ...e4 } : { ...e4 };
      s3(n2(i3, { ...a3 }), a3);
    }
    return Object.entries(l3).forEach(([e4, { css: t4 }]) => {
      var _a2, _b2;
      let i4 = (_b2 = (_a2 = o2[e4]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, a3 = !r2 && i4 ? { colorScheme: i4, ...t4 } : { ...t4 };
      s3(n2(e4, { ...a3 }), a3);
    }), a2 && t3.push({ ":root": { "--__l-threshold": `0.7`, "--__l": `clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)`, "--__a": `clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)` } }), t3;
  } };
}
function En(e3) {
  return function(t2) {
    return e3 === `media` ? `@media (prefers-color-scheme: ${t2})` : e3 ? e3.startsWith(`data-`) && !e3.includes(`%s`) ? `[${e3}="${t2}"] &` : e3 === `class` ? `.${t2} &` : e3 === `data` ? `[data-${t2}] &` : `${e3.replace(`%s`, t2)} &` : `&`;
  };
}
var Dn = (e3) => e3, On = /* @__PURE__ */ (() => {
  let e3 = Dn;
  return { configure(t2) {
    e3 = t2;
  }, generate(t2) {
    return e3(t2);
  }, reset() {
    e3 = Dn;
  } };
})(), kn = { active: `active`, checked: `checked`, completed: `completed`, disabled: `disabled`, error: `error`, expanded: `expanded`, focused: `focused`, focusVisible: `focusVisible`, open: `open`, readOnly: `readOnly`, required: `required`, selected: `selected` };
function An(e3, t2, n2 = `Mui`) {
  let r2 = kn[t2];
  return r2 ? `${n2}-${r2}` : `${On.generate(e3)}-${t2}`;
}
function jn(e3, t2, n2 = `Mui`) {
  let r2 = {};
  return t2.forEach((t3) => {
    r2[t3] = An(e3, t3, n2);
  }), r2;
}
function Mn(e3, t2, n2 = void 0) {
  let r2 = {};
  for (let i2 in e3) {
    let a2 = e3[i2], o2 = ``, s2 = true;
    for (let e4 = 0; e4 < a2.length; e4 += 1) {
      let r3 = a2[e4];
      r3 && (o2 += (s2 === true ? `` : ` `) + t2(r3), s2 = false, n2 && n2[r3] && (o2 += ` ` + n2[r3]));
    }
    r2[i2] = o2;
  }
  return r2;
}
function Nn(e3) {
  let { variants: t2, ...n2 } = e3, r2 = { variants: t2, style: V(n2), isProcessed: true };
  return r2.style === n2 || t2 && t2.forEach((e4) => {
    typeof e4.style != `function` && (e4.style = V(e4.style));
  }), r2;
}
var Pn = yn();
function Fn(e3) {
  return e3 !== `ownerState` && e3 !== `theme` && e3 !== `sx` && e3 !== `as`;
}
function Q(e3, t2) {
  return t2 && e3 && typeof e3 == `object` && e3.styles && !e3.styles.startsWith(`@layer`) && (e3.styles = `@layer ${t2}{${String(e3.styles)}}`), e3;
}
function In(e3) {
  return e3 ? (t2, n2) => n2[e3] : null;
}
function Ln(e3, t2, n2) {
  e3.theme = ve(e3.theme) ? n2 : e3.theme[t2] || e3.theme;
}
function $(e3, t2, n2) {
  let r2 = typeof t2 == `function` ? t2(e3) : t2;
  if (Array.isArray(r2)) return r2.flatMap((t3) => $(e3, t3, n2));
  if (Array.isArray(r2 == null ? void 0 : r2.variants)) {
    let t3;
    if (r2.isProcessed) t3 = n2 ? Q(r2.style, n2) : r2.style;
    else {
      let { variants: e4, ...i2 } = r2;
      t3 = n2 ? Q(V(i2), n2) : i2;
    }
    return Rn(e3, r2.variants, [t3], n2);
  }
  return (r2 == null ? void 0 : r2.isProcessed) ? n2 ? Q(V(r2.style), n2) : r2.style : n2 ? Q(V(r2), n2) : r2;
}
function Rn(e3, t2, n2 = [], r2 = void 0) {
  var _a;
  let i2;
  variantLoop: for (let a2 = 0; a2 < t2.length; a2 += 1) {
    let o2 = t2[a2];
    if (typeof o2.props == `function`) {
      if (i2 ?? (i2 = { ...e3, ...e3.ownerState, ownerState: e3.ownerState }), !o2.props(i2)) continue;
    } else for (let t3 in o2.props) if (e3[t3] !== o2.props[t3] && ((_a = e3.ownerState) == null ? void 0 : _a[t3]) !== o2.props[t3]) continue variantLoop;
    typeof o2.style == `function` ? (i2 ?? (i2 = { ...e3, ...e3.ownerState, ownerState: e3.ownerState }), n2.push(r2 ? Q(V(o2.style(i2)), r2) : o2.style(i2))) : n2.push(r2 ? Q(V(o2.style), r2) : o2.style);
  }
  return n2;
}
function zn(e3 = {}) {
  let { themeId: t2, defaultTheme: n2 = Pn, rootShouldForwardProp: r2 = Fn, slotShouldForwardProp: i2 = Fn } = e3;
  function a2(e4) {
    Ln(e4, t2, n2);
  }
  return (e4, t3 = {}) => {
    _t(e4, (e5) => e5.filter((e6) => e6 !== hn));
    let { name: n3, slot: o2, skipVariantsResolver: s2, skipSx: c2, overridesResolver: l2 = In(Vn(o2)), ...u2 } = t3, d2 = n3 && n3.startsWith(`Mui`) || o2 ? `components` : `custom`, f2 = s2 === void 0 ? o2 && o2 !== `Root` && o2 !== `root` || false : s2, p2 = c2 || false, m2 = Fn;
    o2 === `Root` || o2 === `root` ? m2 = r2 : o2 ? m2 = i2 : Bn(e4) && (m2 = void 0);
    let h2 = gt(e4, { shouldForwardProp: m2, label: void 0, ...u2 }), g2 = (e5) => {
      if (e5.__emotion_real === e5) return e5;
      if (typeof e5 == `function`) return function(t4) {
        return $(t4, e5, t4.theme.modularCssLayers ? d2 : void 0);
      };
      if (x(e5)) {
        let t4 = Nn(e5);
        return function(e6) {
          return t4.variants ? $(e6, t4, e6.theme.modularCssLayers ? d2 : void 0) : e6.theme.modularCssLayers ? Q(t4.style, d2) : t4.style;
        };
      }
      return e5;
    }, _2 = (...t4) => {
      let r3 = [], i3 = t4.map(g2), o3 = [];
      if (r3.push(a2), n3 && l2 && o3.push(function(e5) {
        var _a, _b;
        let t5 = (_b = (_a = e5.theme.components) == null ? void 0 : _a[n3]) == null ? void 0 : _b.styleOverrides;
        if (!t5) return null;
        let r4 = {};
        for (let n4 in t5) r4[n4] = $(e5, t5[n4], e5.theme.modularCssLayers ? `theme` : void 0);
        return l2(e5, r4);
      }), n3 && !f2 && o3.push(function(e5) {
        var _a, _b, _c;
        let t5 = (_c = (_b = (_a = e5.theme) == null ? void 0 : _a.components) == null ? void 0 : _b[n3]) == null ? void 0 : _c.variants;
        return t5 ? Rn(e5, t5, [], e5.theme.modularCssLayers ? `theme` : void 0) : null;
      }), p2 || o3.push(hn), Array.isArray(i3[0])) {
        let e5 = i3.shift(), t5 = Array(r3.length).fill(``), n4 = Array(o3.length).fill(``), a3;
        a3 = [...t5, ...e5, ...n4], a3.raw = [...t5, ...e5.raw, ...n4], r3.unshift(a3);
      }
      let s3 = [...r3, ...i3, ...o3], c3 = h2(...s3);
      return e4.muiName && (c3.muiName = e4.muiName), c3;
    };
    return h2.withConfig && (_2.withConfig = h2.withConfig), _2;
  };
}
function Bn(e3) {
  return typeof e3 == `string` && e3.charCodeAt(0) > 96;
}
function Vn(e3) {
  return e3 && e3.charAt(0).toLowerCase() + e3.slice(1);
}
export {
  Pt as $,
  v as $t,
  $t as A,
  ze as At,
  Vt as B,
  ne as Bt,
  cn as C,
  j as Ct,
  Qt as D,
  A as Dt,
  tn as E,
  Ke as Et,
  Jt as F,
  de as Ft,
  Dt as G,
  fe as Gt,
  Gt as H,
  pe as Ht,
  Ut as I,
  w as It,
  Mt as J,
  T as Jt,
  At as K,
  ge as Kt,
  Ht as L,
  he as Lt,
  J as M,
  le as Mt,
  q as N,
  _e as Nt,
  Zt as O,
  He as Ot,
  Yt as P,
  ie as Pt,
  kt as Q,
  x as Qt,
  Wt as R,
  ce as Rt,
  ln as S,
  ot as St,
  Z as T,
  M as Tt,
  Kt as U,
  ue as Ut,
  qt as V,
  se as Vt,
  Y as W,
  ae as Wt,
  It as X,
  ee as Xt,
  jt as Y,
  oe as Yt,
  K as Z,
  C as Zt,
  an as _,
  R as _t,
  Mn as a,
  Rt as at,
  sn as b,
  B as bt,
  On as c,
  Tt as ct,
  wn as d,
  H as dt,
  g as en,
  Ot as et,
  yn as f,
  bt as ft,
  un as g,
  L as gt,
  fn as h,
  et as ht,
  Nn as i,
  Lt as it,
  X as j,
  Ne as jt,
  Xt as k,
  We as kt,
  En as l,
  St as lt,
  mn as m,
  gt as mt,
  Fn as n,
  W as nt,
  jn as o,
  U as ot,
  hn as p,
  V as pt,
  Ft as q,
  me as qt,
  Pn as r,
  zt as rt,
  An as s,
  Et as st,
  zn as t,
  Nt as tt,
  Tn as u,
  wt as ut,
  on as v,
  z as vt,
  dn as w,
  qe as wt,
  rn as x,
  I as xt,
  nn as y,
  F as yt,
  Bt as z,
  E as zt
};
