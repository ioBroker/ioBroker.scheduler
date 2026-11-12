import { t as e } from "./assets/dist-B4My1YVh.js";
import { t } from "./assets/helpers-PTLizuYm.js";
import { t as n } from "./assets/vite-preload-helper-DclECHGd.js";
let te, R;
let __tla = (async () => {
  var _a, _b;
  var r = {}, i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
  function o(e2, t2) {
    let n2 = a.get(e2);
    return n2 || (n2 = Promise.resolve().then(t2).catch((t3) => {
      throw a.delete(e2), t3;
    }), a.set(e2, n2)), n2;
  }
  async function s(e2) {
    if (typeof document > `u`) return;
    let t2 = r[e2] || [];
    await Promise.all(t2.map((e3) => {
      let t3 = new URL(e3, import.meta.url).href;
      return i.has(t3) || (i.add(t3), document.querySelector(`link[rel="stylesheet"][href="${t3}"]`)) ? Promise.resolve() : new Promise((e4, n2) => {
        let r2 = document.createElement(`link`);
        r2.rel = `stylesheet`, r2.href = t3, r2.onload = () => e4(), r2.onerror = () => {
          i.delete(t3), r2.remove(), n2(Error(`[Module Federation] Failed to load CSS asset: ${t3}`));
        }, document.head.appendChild(r2);
      });
    }));
  }
  var c = {
    "./SchedulerWidget": async () => {
      await s(`./SchedulerWidget`), await Promise.all([]);
      let e2 = await o(`./SchedulerWidget`, () => n(() => import("./assets/SchedulerWidget-CErA5i01.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url)), t2 = e2 && e2.__mf_remote_dependency_pending;
      t2 && typeof t2.then == `function` && await t2;
      let r2 = {};
      return Object.assign(r2, e2), Object.defineProperty(r2, "__esModule", {
        value: true,
        enumerable: false
      }), r2;
    },
    "./translations": async () => {
      await s(`./translations`), await Promise.all([]);
      let e2 = await o(`./translations`, () => n(() => import("./assets/translations-CKAFcKay.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url)), t2 = e2 && e2.__mf_remote_dependency_pending;
      t2 && typeof t2.then == `function` && await t2;
      let r2 = {};
      return Object.assign(r2, e2), Object.defineProperty(r2, "__esModule", {
        value: true,
        enumerable: false
      }), r2;
    }
  };
  typeof __VUE_HMR_RUNTIME__ > `u` && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  var l = `__mf_init__virtual:mf:__mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__188434573433139__mf_v__runtimeInit__mf_v__.js__`, u = globalThis[l];
  if (!u) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    u = globalThis[l] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var d = u.initResolve, { initReject: f } = u, p = (e2) => {
    throw f(e2), e2;
  }, m = `__mf_module_cache__`;
  globalThis[m] || (globalThis[m] = {
    share: {},
    remote: {}
  }), (_a = globalThis[m]).share || (_a.share = {}), (_b = globalThis[m]).remote || (_b.remote = {});
  var h = globalThis[m];
  for (let e2 of Object.keys(h.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    h.share[t2] === void 0 && (h.share[t2] = h.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    h.share[t2] === void 0 && (h.share[t2] = h.share[e2]);
  }
  var g = {}, _ = Array.isArray(`default`) ? `default` : [
    `default`
  ], v = `default`, y = `vis-2-scheduler`, b = [
    [
      `react`
    ],
    [
      `react/jsx-dev-runtime`,
      `react/jsx-runtime`,
      `react-dom`,
      `@emotion/react`,
      `@mui/private-theming`
    ],
    [
      `react-dom/client`,
      `@mui/system`
    ],
    [
      `@mui/material`
    ]
  ], x, S;
  async function C(e2) {
    for (let t2 = 0; ; t2++) try {
      return await e2();
    } catch (e3) {
      throw e3;
    }
  }
  var w = /* @__PURE__ */ Symbol(`mf.originalSharedProvider`), T = {
    emit: (e2) => e2
  }, E = (e2) => Array.isArray(e2.scope) ? e2.scope : [
    e2.scope || `default`
  ], D = (e2, t2) => {
    if (t2 !== `version-first`) return e2;
    let n2 = {};
    for (let [t3, r2] of Object.entries(e2)) n2[t3] = Object.assign({}, r2, {
      [w]: r2
    });
    return n2;
  }, O = (e2, t2) => {
    if (!t2) return;
    let n2 = Object.entries(e2 || {}), r2 = n2.find(([, e3]) => e3 === t2);
    if (r2) return {
      version: r2[0],
      provider: t2,
      registered: true
    };
    if (typeof t2.version == `string` && t2.version) return {
      version: t2.version,
      provider: t2,
      registered: false
    };
    let i2 = n2.filter(([, e3]) => e3 === t2 || !!(t2.from && (e3 == null ? void 0 : e3.from) === t2.from));
    if (i2.length === 1) return {
      version: i2[0][0],
      provider: t2,
      registered: false
    };
  }, k = (e2, n2, r2, i2) => {
    var _a2;
    if (!e2 || !r2) return;
    let a2 = Object.fromEntries(Object.entries(e2).filter(([, e3]) => {
      var _a3;
      return ((_a3 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a3.import) !== false;
    }));
    if (Object.keys(a2).length === 0) return;
    let o2 = E(r2), s2 = D(a2, i2), c2 = {};
    for (let e3 of o2) c2[e3 || `default`] = {
      [n2]: s2
    };
    let l2 = (_a2 = t.getRegisteredShare(c2, n2, {
      ...r2,
      scope: o2,
      strategy: i2
    }, T)) == null ? void 0 : _a2.shared;
    return (l2 == null ? void 0 : l2[w]) || l2;
  }, A = (e2, t2, n2, r2) => {
    var _a2;
    let i2 = (e3) => j(e3, n2), a2 = Object.fromEntries(Object.entries(e2 || {}).filter(([, e3]) => {
      var _a3;
      return !i2(e3) && ((_a3 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a3.import) !== false;
    }));
    (n2 == null ? void 0 : n2.version) && ((_a2 = n2.shareConfig) == null ? void 0 : _a2.import) !== false && (a2[n2.version] || (a2[n2.version] = n2));
    let o2 = k(a2, t2, n2, r2);
    return i2(o2) ? void 0 : o2;
  }, j = (e2, t2) => e2 === t2 || !!((t2 == null ? void 0 : t2.from) && (e2 == null ? void 0 : e2.from) === t2.from), M = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    var _a2, _b2, _c;
    if (c2 !== `version-first` || !s2) return;
    let l2 = (_b2 = (_a2 = t2 == null ? void 0 : t2.options) == null ? void 0 : _a2.shared) == null ? void 0 : _b2[i2], u2 = Array.isArray(l2) ? l2.find((e3) => (e3 == null ? void 0 : e3.version) === a2) : void 0, d2 = ((s2 == null ? void 0 : s2.from) === ((_c = t2 == null ? void 0 : t2.options) == null ? void 0 : _c.name) ? s2 : void 0) || (j(u2, s2) ? u2 : t2 ? void 0 : s2);
    if (d2) return e2.some((e3) => {
      var _a3, _b3;
      return e3 !== t2 && ((_a3 = e3 == null ? void 0 : e3.options) == null ? void 0 : _a3.name) === (o2 == null ? void 0 : o2.from) && ((_b3 = e3 == null ? void 0 : e3.shareScopeMap) == null ? void 0 : _b3[r2]) === n2;
    }) ? d2 : void 0;
  }, ee = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    let l2 = a2.registered ? M(e2, t2, n2, r2, i2, a2.version, a2.provider, s2, c2) : void 0, u2 = l2 || o2;
    if (u2 && (!a2.registered || j(u2, s2))) return {
      provider: u2,
      scopeRootProvider: l2
    };
  };
  async function N() {
    return x || (x = C(() => n(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__1-CP1i8pmX.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [], import.meta.url)).catch((e2) => {
      throw x = void 0, e2;
    })), x;
  }
  async function P() {
    return c;
  }
  var F = 0, I = Promise.resolve(), L = () => {
  };
  R = async function(t2 = {}, n2 = [], r2 = {}) {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
    F++ === 0 && (I = new Promise((e2) => L = e2));
    try {
      let V = function(e2) {
        if (typeof (e2 == null ? void 0 : e2.get) != `function`) return false;
        let t3 = Function.prototype.toString.call(e2.get);
        return t3.includes(`__webpack_require__`) || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(t3);
      }, ge = function() {
        return {
          name: `vite-share-pin-lifecycle-plugin`,
          resolveShare(e2) {
            var _a3;
            let t3 = (_a3 = e2.shareInfo) == null ? void 0 : _a3[U], n3 = t3 === void 0 ? void 0 : G.get(t3);
            if (!n3) return e2;
            let r4 = e2.resolver;
            return e2.resolver = (...e3) => (n3.pinned.reapply(), r4(...e3)), n3.pinned.reveal(), e2;
          }
        };
      }, _e2 = function() {
        return {
          name: `vite-real-name-snapshot-plugin`,
          afterLoadSnapshot(e2) {
            let t3 = e2 && e2.remoteSnapshot, n3 = t3 && t3.globalName, r4 = t3 && t3.version;
            if (!n3 || !r4 || !t3.remoteEntry) return e2;
            let i3 = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo, a3 = n3 + `:` + r4;
            return i3 && !i3[a3] && (i3[a3] = t3), e2;
          }
        };
      };
      let r3 = function(e2, t3, n3, r4) {
        let i3 = (Array.isArray(r4) ? r4[0] : r4) || `default`, a3 = t3 || !n3 ? e2 : e2 + `@` + n3, o3 = {
          canonical: i3 + `:` + a3
        };
        return i3 === "default" && (o3.aliases = [
          a3
        ]), o3;
      }, s2 = (e2, t3) => {
        let n3 = e2[t3.canonical];
        if (n3 !== void 0) return n3;
        let r4 = t3.aliases || [];
        for (let n4 of r4) {
          if (!Object.prototype.hasOwnProperty.call(e2, n4)) continue;
          let r5 = e2[n4];
          if (r5 !== void 0) return e2[t3.canonical] = r5, r5;
        }
      }, c2 = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-listeners`), l2 = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-owners`), f2 = (e2) => {
        let t3 = e2[l2];
        return t3 === void 0 && (t3 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, l2, {
          value: t3,
          enumerable: false,
          configurable: false,
          writable: false
        })), t3;
      }, m2 = (e2, t3) => {
        var _a3;
        return (_a3 = e2[l2]) == null ? void 0 : _a3[t3.canonical];
      }, x2 = (e2) => {
        let t3 = [
          e2,
          e2 == null ? void 0 : e2.default
        ];
        for (let e3 of t3) if (e3 && typeof e3 == `object`) {
          for (let t4 of [
            `__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE`,
            `__TEST_INTERNALS`,
            `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`
          ]) {
            let n3 = e3[t4];
            if (n3 && typeof n3 == `object`) return {
              internals: n3
            };
          }
          if (typeof e3.useState == `function`) return {
            hook: e3.useState
          };
        }
      }, w2 = (e2, t3) => {
        if (e2 === t3) return true;
        let n3 = x2(e2), r4 = x2(t3);
        if (!n3 || !r4) return false;
        let i3 = n3.internals, a3 = r4.internals;
        return i3 !== void 0 || a3 !== void 0 ? i3 !== void 0 && i3 === a3 : typeof n3.hook == `function` && n3.hook === r4.hook;
      }, T2 = (e2, t3, n3, r4) => {
        var _a3;
        let i3 = s2(e2, t3);
        if (i3 !== void 0 && w2(i3, n3)) return n3;
        e2[t3.canonical] = n3;
        let a3 = t3.aliases || [];
        for (let t4 of a3) Object.defineProperty(e2, t4, {
          value: n3,
          enumerable: true,
          configurable: true,
          writable: true
        });
        let o3 = e2[l2];
        r4 === void 0 ? o3 && delete o3[t3.canonical] : f2(e2)[t3.canonical] = r4;
        let u2 = (_a3 = e2[c2]) == null ? void 0 : _a3[t3.canonical];
        if (u2) for (let e3 of u2) e3(n3);
        return n3;
      }, E2 = /* @__PURE__ */ Symbol.for(`module-federation.tree-shaking-shared-cache`), D2 = (e2) => {
        let t3 = e2[E2];
        return t3 === void 0 && (t3 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, E2, {
          value: t3,
          enumerable: false,
          configurable: false,
          writable: false
        })), t3;
      }, M2 = (e2, t3, n3, r4) => {
        var _a3;
        if (!Array.isArray(n3)) return r4;
        let i3 = [
          ...new Set(n3)
        ].sort(), a3 = D2(e2), o3 = a3[_a3 = t3.canonical] || (a3[_a3] = []), s3 = o3.find((e3) => e3.providedExports.length === i3.length && e3.providedExports.every((e4, t4) => e4 === i3[t4]));
        return s3 ? s3.value = r4 : o3.push({
          providedExports: i3,
          value: r4
        }), r4;
      }, P2 = /* @__PURE__ */ Symbol.for(`module-federation.tree-shaking-shared-selection-cache`), F2 = (e2) => {
        let t3 = e2[P2];
        return t3 === void 0 && (t3 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, P2, {
          value: t3,
          enumerable: false,
          configurable: false,
          writable: false
        })), t3;
      }, I2 = (e2, t3, n3) => {
        var _a3, _b3;
        let r4 = s2(e2, t3);
        return r4 === void 0 ? (_b3 = (_a3 = e2[P2]) == null ? void 0 : _a3[t3.canonical]) == null ? void 0 : _b3[n3] : r4;
      }, L2 = (e2, t3, n3, r4) => {
        var _a3;
        let i3 = F2(e2), a3 = i3[_a3 = t3.canonical] || (i3[_a3] = /* @__PURE__ */ Object.create(null));
        return a3[n3] = r4, r4;
      }, R2 = ((_a2 = globalThis.__FEDERATION__) == null ? void 0 : _a2.__INSTANCES__) || [], te2 = (_b2 = n2.find((e2) => e2 == null ? void 0 : e2.from)) == null ? void 0 : _b2.from, ne = R2.find((e2) => {
        var _a3, _b3;
        return ((_a3 = e2 == null ? void 0 : e2.options) == null ? void 0 : _a3.name) === te2 && ((_b3 = e2 == null ? void 0 : e2.shareScopeMap) == null ? void 0 : _b3.default) === t2;
      }) || R2.find((e2) => {
        var _a3, _b3;
        return ((_a3 = e2 == null ? void 0 : e2.options) == null ? void 0 : _a3.name) !== y && ((_b3 = e2 == null ? void 0 : e2.shareScopeMap) == null ? void 0 : _b3.default) === t2;
      }), re = /* @__PURE__ */ Object.create(null), ie = (e2) => {
        let t3 = /* @__PURE__ */ Object.create(null);
        for (let [n3, r4] of Object.entries(e2 || {})) t3[n3] = Object.assign(/* @__PURE__ */ Object.create(null), r4);
        return t3;
      }, ae = (e2, t3) => {
        var _a3, _b3;
        for (let [n3, r4] of Object.entries(((_a3 = K.shareScopeMap) == null ? void 0 : _a3[e2]) || {})) for (let [e3, i3] of Object.entries(r4 || {})) {
          if (!i3 || i3.get === ((_b3 = B[n3]) == null ? void 0 : _b3.get)) continue;
          let r5 = t3[n3] || (t3[n3] = {});
          r5[e3] === void 0 && (r5[e3] = i3);
        }
      }, oe = (e2, t3) => {
        ae(e2, t3);
        let n3 = !ne && Object.values(t3 || {}).some((e3) => Object.values(e3 || {}).some(V)), r4 = n3 ? ie(t3) : t3;
        return re[e2] = {
          host: t3,
          runtime: r4,
          isWebpackScope: n3
        }, r4;
      }, se = () => {
        let e2 = Object.values(re).filter(({ isWebpackScope: e3 }) => e3);
        if (e2.length !== 0) for (let { host: t3, runtime: n3 } of e2) for (let [e3, r4] of Object.entries(t3 || {})) {
          let t4 = n3[e3] || (n3[e3] = /* @__PURE__ */ Object.create(null));
          for (let [e4, n4] of Object.entries(r4 || {})) t4[e4] = n4;
        }
      }, z = /* @__PURE__ */ Object.create(null);
      for (let [e2, n3] of Object.entries(t2)) {
        let t3 = z[e2] = /* @__PURE__ */ Object.create(null);
        for (let [e3, r4] of Object.entries(n3)) t3[e3] = Object.assign({}, r4);
      }
      let { usedShared: B, usedRemotes: ce } = await N();
      let le = Object.values(z).some((e2) => Object.values(e2 || {}).some(V)), ue = (e2) => {
        let t3 = e2.split(`/`);
        return e2.startsWith(`@`) ? t3.slice(0, 2).join(`/`) : t3[0];
      }, H = (e2, n3, r4, i3) => {
        if (typeof A != `function`) return;
        let a3 = ue(e2), o3 = !i3 || a3 === e2 ? [
          [
            e2,
            n3
          ]
        ] : [
          [
            e2,
            n3
          ],
          [
            a3,
            B[a3]
          ]
        ];
        for (let [n4, i4] of o3) {
          if (!i4) continue;
          let a4 = A(r4 ? n4 === e2 ? r4 : z[n4] : z[n4] ?? t2[n4], n4, i4, `version-first`);
          if (a4) return a4;
        }
      }, de = (e2, t3, n3) => {
        let r4 = H(e2, t3, n3, true);
        return r4 && V(r4) && !r4.lib && !r4.loaded ? r4 : void 0;
      };
      var i2 = g[v];
      if (i2 || (i2 = g[v] = {
        from: y
      }), n2.indexOf(i2) >= 0) return;
      n2.push(i2);
      let fe = (e2) => {
        let t3 = e2;
        for (let e3 = 0; e3 < 5; e3++) {
          let e4 = t3 == null ? void 0 : t3.default;
          if (!e4 || typeof e4 != `object` || Object.keys(e4).length === 0) break;
          let n3 = Object.getPrototypeOf(e4);
          if (n3 !== null && n3 !== Object.prototype) break;
          let r4 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
          if (r4.length > 0 && r4.some((e5) => e5 !== void 0)) break;
          t3 = e4;
        }
        return t3;
      }, pe = [], me = globalThis.window === void 0 ? await Promise.all([]) : [], U = `__mf_vite_runtime_share_load_id__`, he = 0, W = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), K = e({
        name: y,
        remotes: ce,
        shared: B,
        plugins: [
          ge(),
          _e2(),
          ...pe,
          ...me
        ],
        shareStrategy: `version-first`
      });
      K.initShareScopeMap(`default`, oe(`default`, t2));
      let ve = K.sharedHandler.hooks.lifecycle.resolveShare;
      K.__mfKeepAdoptedProviders || (K.__mfKeepAdoptedProviders = true, (_g = (_f = (_e = (_d = (_c = K.sharedHandler) == null ? void 0 : _c.hooks) == null ? void 0 : _d.lifecycle) == null ? void 0 : _e.afterRegisterShare) == null ? void 0 : _f.on) == null ? void 0 : _g.call(_f, (e2) => {
        var _a3, _b3, _c2, _d2, _e3;
        let { shared: t3, previousShared: n3, registeredShared: r4 } = e2 || {}, i3 = (_b3 = (_a3 = K.shareScopeMap) == null ? void 0 : _a3[e2.scope]) == null ? void 0 : _b3[e2.pkgName];
        t3 && i3 && (((_c2 = t3.shareConfig) == null ? void 0 : _c2.import) === false ? r4 === t3 && n3 && ((_d2 = n3.shareConfig) == null ? void 0 : _d2.import) !== false && i3[t3.version] === t3 && (i3[t3.version] = n3) : r4 !== t3 && ((_e3 = r4 == null ? void 0 : r4.shareConfig) == null ? void 0 : _e3.import) === false && !r4.loaded && i3[t3.version] === r4 && (i3[t3.version] = t3));
      }));
      let q = /* @__PURE__ */ new WeakMap();
      ve.on((e2) => {
        var _a3;
        let t3 = (_a3 = e2.shareInfo) == null ? void 0 : _a3[U], n3 = e2.resolver;
        return typeof n3 == `function` && (e2.resolver = (...r4) => {
          var _a4, _b3, _c2, _d2, _e3;
          let i3 = n3(...r4);
          if (((_b3 = (_a4 = i3 == null ? void 0 : i3.shared) == null ? void 0 : _a4.shareConfig) == null ? void 0 : _b3.import) === false && typeof k == `function` && B[e2.pkgName]) {
            let t4 = k((_d2 = (_c2 = e2.shareScopeMap) == null ? void 0 : _c2[e2.scope]) == null ? void 0 : _d2[e2.pkgName], e2.pkgName, B[e2.pkgName], `version-first`);
            t4 && ((_e3 = t4.shareConfig) == null ? void 0 : _e3.import) !== false && (i3 = {
              shared: t4,
              useTreesShaking: i3.useTreesShaking
            });
          }
          let a3 = i3 == null ? void 0 : i3.shared;
          return a3 && (typeof a3 == `object` || typeof a3 == `function`) && !q.has(a3) && q.set(a3, {
            from: a3.from
          }), t3 !== void 0 && a3 && W.set(t3, a3), i3;
        }), e2;
      });
      let ye = (e2, t3, n3, r4) => {
        if (!e2 || e2[t3] !== n3) return;
        let i3 = Object.assign({}, r4, {
          version: r4.version ?? t3,
          scope: r4.scope ?? (n3 == null ? void 0 : n3.scope) ?? [
            `default`
          ],
          strategy: `loaded-first`
        }), a3 = r4.from;
        e2[t3] = i3;
        let o3 = () => n3 === void 0 ? e2[t3] === void 0 : e2[t3] === n3;
        return {
          provider: i3,
          reveal() {
            return e2[t3] === i3 && (n3 === void 0 ? delete e2[t3] : e2[t3] = n3, true);
          },
          reapply() {
            return o3() ? (e2[t3] = i3, true) : false;
          },
          release(s3, c3 = true) {
            return r4.from = a3, e2[t3] === i3 ? c3 ? s3 ? (i3.from = a3, s3 && i3.lib && (i3.loaded = true), r4.strategy === void 0 ? delete i3.strategy : i3.strategy = r4.strategy, true) : (n3 === void 0 ? delete e2[t3] : e2[t3] = n3, false) : (n3 === void 0 ? delete e2[t3] : e2[t3] = n3, true) : !c3 && o3();
          }
        };
      }, be = (e2) => Object.entries(e2 || {}).map(([e3, t3]) => ({
        provider: t3,
        version: e3,
        from: t3.from,
        registered: true
      })), xe = (e2, t3) => {
        if (t3 === void 0) return;
        let n3;
        for (let r4 of e2) {
          let e3 = r4.provider, i3 = e3.treeShaking || e3;
          if (r4.loadedFactory === t3 || e3.lib === t3 || i3.lib === t3) {
            if (n3) return;
            n3 = r4;
          }
        }
        return n3;
      }, Se = async (e2, t3, n3) => {
        let r4 = ++he;
        G.set(r4, {
          pinned: n3
        });
        try {
          let n4 = await K.loadShare(e2, {
            customShareInfo: {
              shareConfig: t3,
              [U]: r4
            }
          });
          return {
            factory: n4 === false ? void 0 : n4,
            selectedProvider: W.get(r4)
          };
        } finally {
          W.delete(r4), G.delete(r4);
        }
      }, Ce = async (e2, t3, n3, r4, i3, a3, o3 = true) => {
        let s3 = a3.from, c3 = ye(n3, r4, i3, a3);
        if (!c3) return;
        let l3;
        try {
          l3 = await Se(e2, t3, c3);
        } catch (e3) {
          throw c3.release(false), e3;
        }
        let u2 = l3 == null ? void 0 : l3.factory;
        if (u2 === void 0) {
          c3.release(false);
          return;
        }
        let d2 = be(n3), f3 = c3.provider.treeShaking || c3.provider, p2 = c3.provider.lib === u2 || f3.lib === u2;
        if (!o3 && p2) {
          let e3 = d2.findIndex((e4) => e4.provider === c3.provider);
          e3 !== -1 && d2.splice(e3, 1);
        }
        !o3 && !d2.some((e3) => e3.provider === a3) && d2.push({
          provider: a3,
          version: r4,
          from: s3,
          registered: false,
          loadedFactory: p2 ? u2 : void 0
        });
        let m3 = !o3 && l3.selectedProvider === c3.provider && p2 ? a3 : l3.selectedProvider;
        if (m3 && !d2.some((e3) => e3.provider === m3)) {
          let e3 = q.get(m3), t4 = typeof m3.version == `string` && m3.version ? m3.version : r4;
          d2.push({
            provider: m3,
            version: t4,
            from: e3 ? e3.from : m3.from,
            registered: (n3 == null ? void 0 : n3[t4]) === m3,
            loadedFactory: u2
          });
        }
        let h2 = d2.find((e3) => e3.provider === m3) ?? xe(d2, u2);
        if (!c3.release(true, (h2 == null ? void 0 : h2.provider) === c3.provider) || !h2) return;
        let g2 = q.get(h2.provider);
        h2.from = h2.provider === a3 ? s3 : g2 ? g2.from : h2.provider.from, g2 && (h2.provider.from = g2.from);
        let _2 = typeof u2 == `function` ? u2() : u2, v2 = await Promise.resolve(_2);
        if (!(h2.registered && (n3 == null ? void 0 : n3[h2.version]) !== h2.provider)) return {
          provider: h2.provider,
          selection: h2,
          resolved: v2
        };
      }, J = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), we = async (e2, n3, i3) => {
        var _a3, _b3, _c2;
        let a3 = !!((_a3 = n3.shareConfig) == null ? void 0 : _a3.singleton);
        if (!a3 && n3.canLiveRebind !== false) try {
          let o3 = A(i3, e2, n3, `version-first`), c3 = O(i3, o3);
          if (!c3 || ((_b3 = n3.shareConfig) == null ? void 0 : _b3.import) === false && j(o3, n3) || ((_c2 = o3 == null ? void 0 : o3.shareConfig) == null ? void 0 : _c2.import) === false) return;
          let { version: l3 } = c3;
          if (!a3 && l3 !== n3.version || !o3.lib && !o3.loading && !(o3.loaded && typeof o3.get == `function`)) return;
          let u2 = r3(e2, a3, n3.version, n3.scope);
          if (s2(h.share, u2) !== void 0) return;
          let d2 = t2[e2], f3 = d2 == null ? void 0 : d2[l3];
          if (c3.registered && !j(f3, o3)) return;
          let p2, m3 = o3.lib;
          if (!m3 && V(o3) || (!m3 && o3.loading && (m3 = await o3.loading), !m3 && o3.loaded && typeof o3.get == `function` && (m3 = await o3.get()), !m3)) return;
          let g2 = typeof m3 == `function` ? m3() : m3, _2 = await Promise.resolve(g2), v2 = c3.registered ? f3 : o3;
          p2 = {
            provider: v2,
            selection: {
              provider: v2,
              version: l3,
              from: o3.from,
              registered: c3.registered
            },
            resolved: _2
          };
          let y2 = p2 == null ? void 0 : p2.provider, b2 = p2 == null ? void 0 : p2.selection;
          if (!b2) return;
          let x3 = p2 == null ? void 0 : p2.resolved;
          if (x3 === void 0 || s2(h.share, u2) !== void 0 || b2.registered && (d2 == null ? void 0 : d2[b2.version]) !== y2) return;
          T2(h.share, u2, fe(x3), b2.from), J.add(y2);
        } catch (t3) {
          console.error(`[Module Federation] Failed to bridge materialized shared module "` + e2 + `"`, t3);
        }
      }, X = async (e2, n3, i3, a3, o3) => {
        var _a3, _b3, _c2, _d2;
        try {
          let c3 = r3(e2, (_a3 = n3.shareConfig) == null ? void 0 : _a3.singleton, n3.version, n3.scope), l3 = s2(h.share, c3), u2 = m2(h.share, c3), d2 = A(i3, e2, n3, `version-first`), f3 = d2 || k(i3, e2, n3, `version-first`) || n3, p2 = O(i3, f3);
          if (!p2) return;
          let g2 = j(f3, n3), { version: _2 } = p2;
          if (!((_b3 = n3.shareConfig) == null ? void 0 : _b3.singleton) && _2 !== n3.version) return;
          let v2 = a3 == null ? void 0 : a3[_2], b2 = ee(R2, ne, t2, `default`, e2, p2, d2, v2, `version-first`);
          if (!b2 && !g2) return;
          let { provider: x3, scopeRootProvider: S2 } = b2 || {
            provider: f3,
            scopeRootProvider: void 0
          };
          if (n3.canLiveRebind === false || ((_c2 = n3.shareConfig) == null ? void 0 : _c2.import) === false && j(x3, n3) || ((_d2 = x3 == null ? void 0 : x3.shareConfig) == null ? void 0 : _d2.import) === false || l3 !== void 0 && u2 !== y) return;
          let C2 = t2[e2], w3 = C2 == null ? void 0 : C2[_2];
          if (p2.registered && !S2 && !j(w3, x3)) return;
          let E3 = await Ce(e2, n3.shareConfig, C2, _2, w3, x3, p2.registered && !g2), D3 = E3 == null ? void 0 : E3.provider, M3 = E3 == null ? void 0 : E3.selection;
          if (!M3 || o3 && (o3.version !== M3.version || !j({
            from: M3.from
          }, o3.provider)) || J.has(D3)) return;
          let N2 = E3 == null ? void 0 : E3.resolved;
          if (N2 === void 0) return;
          let P3 = s2(h.share, c3), F3 = m2(h.share, c3);
          if (P3 !== void 0 && F3 !== y || M3.registered && (C2 == null ? void 0 : C2[M3.version]) !== D3) return;
          !o3 && !j(D3, n3) && Y.set(e2, {
            version: M3.version,
            provider: {
              from: M3.from
            }
          }), J.add(D3);
          let I3 = fe(N2);
          T2(h.share, c3, I3, M3.from);
        } catch (t3) {
          console.error(`[Module Federation] Failed to bridge external shared module "` + e2 + `"`, t3);
        }
      };
      for (let e2 of b) await Promise.all(e2.map(async (e3) => {
        let t3 = B[e3];
        t3 && t3.materialize !== false && !t3.treeShaking && await we(e3, t3, z[e3]);
      }));
      for (let [e2, t3] of Object.entries(B)) {
        if (t3.treeShaking) continue;
        let n3 = r3(e2, (_h = t3.shareConfig) == null ? void 0 : _h.singleton, t3.version, t3.scope);
        if (s2(h.share, n3) !== void 0) continue;
        let i3 = r3(e2, true, t3.version, t3.scope), a3 = s2(h.share, i3);
        a3 !== void 0 && T2(h.share, n3, a3, m2(h.share, i3));
      }
      let Te = [
        `react`,
        `react/jsx-dev-runtime`,
        `react/jsx-runtime`,
        `react-dom`,
        `@emotion/react`,
        `@mui/private-theming`,
        `react-dom/client`,
        `@mui/system`,
        `@mui/material`
      ], Ee = /* @__PURE__ */ new Set([]), De = [
        [
          `react`
        ],
        [
          `react/jsx-dev-runtime`,
          `react/jsx-runtime`,
          `react-dom`,
          `@emotion/react`,
          `@mui/private-theming`
        ],
        [
          `react-dom/client`,
          `@mui/system`
        ],
        [
          `@mui/material`
        ]
      ], Z = new Map(Te.map((e2, t3) => [
        e2,
        t3
      ])), Oe = {
        1: [
          0
        ],
        2: [
          0
        ],
        3: [
          0
        ],
        4: [
          0
        ],
        5: [
          0
        ],
        6: [
          0,
          3
        ],
        7: [
          5,
          4,
          0
        ],
        8: [
          7,
          4,
          0,
          3
        ]
      }, Q = Te.filter((e2) => {
        var _a3;
        return B[e2] && (B[e2].materialize !== false || ((_a3 = B[e2].shareConfig) == null ? void 0 : _a3.import) === false && !B[e2].lazy);
      });
      h.providerInit || (h.providerInit = /* @__PURE__ */ new Map());
      let ke = (e2, t3) => {
        let n3 = h.providerInit.get(e2);
        if (n3) return n3;
        let r4 = Promise.resolve().then(t3);
        return h.providerInit.set(e2, r4), r4.catch(() => h.providerInit.delete(e2)), r4;
      };
      var a2 = async (e2) => {
        let t3 = new Set(e2), n3 = /* @__PURE__ */ new Set();
        for (let e3 of De) await Promise.all(e3.filter((e4) => t3.has(e4)).map(async (e4) => {
          var _a3, _b3, _c2, _d2, _e3, _f2;
          let t4 = B[e4], i3 = Z.get(e4);
          if ((Oe[i3] || []).some((e5) => n3.has(e5))) {
            n3.add(i3);
            return;
          }
          let a3 = r3(e4, (_a3 = t4.shareConfig) == null ? void 0 : _a3.singleton, t4.version, t4.scope);
          if (((_b3 = t4.shareConfig) == null ? void 0 : _b3.import) === false || t4.treeShaking || s2(h.share, a3) !== void 0) return;
          let o3 = r3(e4, true, t4.version, t4.scope), c3 = s2(h.share, o3);
          if (c3 !== void 0) {
            T2(h.share, a3, c3, m2(h.share, o3));
            return;
          }
          let l3 = typeof H == `function` ? H(e4, t4) : void 0;
          if (l3) {
            let o4 = l3.lib;
            if (!o4 && l3.loading && (o4 = await l3.loading), !o4 && l3.loaded && typeof l3.get == `function` && (o4 = await l3.get()), o4) {
              let e5 = typeof o4 == `function` ? o4() : o4, t5 = await Promise.resolve(e5);
              T2(h.share, a3, ((e6) => {
                let t6 = e6;
                for (let e7 = 0; e7 < 5; e7++) {
                  let e8 = t6 == null ? void 0 : t6.default;
                  if (!e8 || typeof e8 != `object` || Object.keys(e8).length === 0) break;
                  let n4 = Object.getPrototypeOf(e8);
                  if (n4 !== null && n4 !== Object.prototype) break;
                  let r4 = Object.keys(t6).filter((e9) => e9 !== "default").map((e9) => t6[e9]);
                  if (r4.length > 0 && r4.some((e9) => e9 !== void 0)) break;
                  t6 = e8;
                }
                return t6;
              })(t5), l3.from);
              return;
            }
            if (!((_c2 = t4.shareConfig) == null ? void 0 : _c2.singleton) && typeof l3.version == `string`) {
              let n4 = s2(h.share, r3(e4, false, l3.version, t4.scope));
              if (n4 !== void 0) {
                T2(h.share, a3, n4, l3.from);
                return;
              }
            }
            if (typeof V == `function` && V(l3) && (((_d2 = t4.shareConfig) == null ? void 0 : _d2.singleton) || ((_e3 = O(z[e4], l3)) == null ? void 0 : _e3.version) === t4.version)) {
              n3.add(i3);
              return;
            }
          }
          let u2 = a3.canonical, d2 = await ke(u2, async () => {
            let e5 = await t4.get(), n4 = typeof e5 == `function` ? e5() : e5;
            return Promise.resolve(n4);
          });
          for (let n4 of ((_f2 = K.options.shared) == null ? void 0 : _f2[e4]) || []) n4.get === t4.get && (n4.eager = true);
          let f3 = ((e5) => {
            let t5 = e5;
            for (let e6 = 0; e6 < 5; e6++) {
              let e7 = t5 == null ? void 0 : t5.default;
              if (!e7 || typeof e7 != `object` || Object.keys(e7).length === 0) break;
              let n4 = Object.getPrototypeOf(e7);
              if (n4 !== null && n4 !== Object.prototype) break;
              let r4 = Object.keys(t5).filter((e8) => e8 !== "default").map((e8) => t5[e8]);
              if (r4.length > 0 && r4.some((e8) => e8 !== void 0)) break;
              t5 = e7;
            }
            return t5;
          })(d2), p2 = f3 === d2 ? {
            ...d2
          } : f3;
          p2.__esModule !== true && Object.defineProperty(p2, "__esModule", {
            value: true,
            enumerable: false
          }), s2(h.share, a3) === void 0 && T2(h.share, a3, p2, y);
        }));
      };
      let $ = (e2) => {
        var _a3, _b3;
        let t3 = B[e2];
        if (!t3.treeShaking && ((_a3 = t3.shareConfig) == null ? void 0 : _a3.import) !== false) return false;
        let n3 = r3(e2, (_b3 = t3.shareConfig) == null ? void 0 : _b3.singleton, t3.version, t3.scope);
        return t3.treeShaking ? I2(h.share, n3, y) === void 0 && s2(h.share, n3) === void 0 : s2(h.share, n3) === void 0;
      }, Ae = (e2) => {
        var _a3, _b3, _c2;
        let t3 = B[e2], n3 = r3(e2, (_a3 = t3.shareConfig) == null ? void 0 : _a3.singleton, t3.version, t3.scope);
        return (t3.treeShaking ? I2(h.share, n3, y) ?? s2(h.share, n3) : s2(h.share, n3)) === void 0 ? t3.treeShaking || ((_b3 = t3.shareConfig) == null ? void 0 : _b3.import) === false || Ee.has(e2) && ((_c2 = t3.shareConfig) == null ? void 0 : _c2.singleton) ? true : typeof A == `function` && !!A(z[e2], e2, t3, `version-first`) : false;
      }, je = (e2) => {
        let t3 = true;
        for (; t3; ) {
          t3 = false;
          for (let n3 of Q) {
            let r4 = Z.get(n3);
            e2.has(r4) || (Oe[r4] || []).some((t4) => e2.has(t4)) && (e2.add(r4), t3 = true);
          }
        }
        return e2;
      }, Me = je(new Set(Q.filter(Ae).map((e2) => Z.get(e2)))), Ne = Q.filter((e2) => !Me.has(Z.get(e2)));
      var o2 = Q.filter((e2) => Me.has(Z.get(e2)));
      await a2(Ne).catch(p);
      try {
        await C(async () => {
          await Promise.all(await K.initializeSharing(`default`, {
            strategy: `version-first`,
            from: `build`,
            initScope: n2
          }));
        });
      } catch (e2) {
        console.error(`[Module Federation]`, e2);
      }
      se();
      let Pe = async () => {
        for (let e2 of b) await Promise.all(e2.map(async (e3) => {
          let n3 = B[e3];
          n3 && n3.materialize !== false && !n3.treeShaking && await X(e3, n3, t2[e3], z[e3], void 0);
        }));
      };
      le ? S = Pe : await Pe();
      try {
        let e2 = (_i = globalThis.__FEDERATION__) == null ? void 0 : _i.__SHARE__, t3 = /* @__PURE__ */ Object.create(null);
        if (e2) for (let [, n3] of Object.entries(e2)) for (let e3 of _) {
          let r4 = n3 == null ? void 0 : n3[e3];
          if (r4) for (let [e4, n4] of Object.entries(r4)) {
            let r5 = B == null ? void 0 : B[e4], i3 = z[e4], a3 = Y.get(e4);
            if (!r5 || !i3 || !a3 || r5.treeShaking) continue;
            let o3 = t3[e4] || (t3[e4] = /* @__PURE__ */ Object.create(null));
            for (let [e5, t4] of Object.entries(n4)) {
              if (!t4.lib || a3.version !== e5 || !j(t4, a3.provider)) continue;
              let n5 = i3[e5];
              (t4 === n5 || (n5 == null ? void 0 : n5.from) && t4.from === n5.from) && (t4 === r5 || r5.from && t4.from === r5.from || o3[e5] === void 0 && (o3[e5] = t4));
            }
          }
        }
        for (let e3 of b) await Promise.all(e3.map(async (e4) => {
          let n3 = t3[e4];
          n3 && await X(e4, B[e4], n3, z[e4], Y.get(e4));
        }));
      } catch (e2) {
        console.error(`[Module Federation] Failed to bridge external shared modules`, e2);
      }
      let Fe = async () => {
      }, Ie = async (e2, n3) => {
        var _a3, _b3;
        let i3 = r3(e2, (_a3 = n3.shareConfig) == null ? void 0 : _a3.singleton, n3.version, n3.scope), a3 = n3.treeShaking ? I2(h.share, i3, y) : s2(h.share, i3);
        if (((_b3 = n3.shareConfig) == null ? void 0 : _b3.import) !== false || a3 !== void 0 || de(e2, n3, z[e2])) return;
        let o3 = (e3) => {
          let t3 = e3;
          for (let e4 = 0; e4 < 5; e4++) {
            let e5 = t3 == null ? void 0 : t3.default;
            if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0) break;
            let n4 = Object.getPrototypeOf(e5);
            if (n4 !== null && n4 !== Object.prototype) break;
            let r4 = Object.keys(t3).filter((e6) => e6 !== "default").map((e6) => t3[e6]);
            if (r4.length > 0 && r4.some((e6) => e6 !== void 0)) break;
            t3 = e5;
          }
          return t3;
        }, c3 = t2 == null ? void 0 : t2[e2], l3 = k(c3, e2, n3, `version-first`) || n3, u2 = O(c3, l3);
        if (!u2) return;
        let d2 = (e3) => {
          var _a4;
          return e3 === n3 || ((_a4 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a4.import) === false;
        };
        if (d2(l3)) return;
        let { version: f3 } = u2, p2 = c3 == null ? void 0 : c3[f3], m3 = await Ce(e2, n3.shareConfig, c3, f3, p2, l3, u2.registered), g2 = m3 == null ? void 0 : m3.selection, _2 = m3 == null ? void 0 : m3.provider, v2 = m3 == null ? void 0 : m3.resolved;
        if (!g2 || d2(_2) || v2 === void 0 || (n3.treeShaking ? I2(h.share, i3, y) : s2(h.share, i3)) !== void 0 || g2.registered && (c3 == null ? void 0 : c3[g2.version]) !== _2) return;
        let b2 = o3(v2);
        if (n3.treeShaking) {
          let e3 = n3.treeShaking.providedExports ?? n3.treeShaking.usedExports ?? [];
          M2(h.share, i3, e3, b2), L2(h.share, i3, y, b2);
        } else T2(h.share, i3, b2, g2.from);
      }, Le = [], Re = /* @__PURE__ */ new Set();
      for (let e2 of o2) {
        let t3 = B[e2], n3 = Z.get(e2);
        if ($(e2)) try {
          t3.treeShaking ? await Fe(e2, t3) : ((_j = t3.shareConfig) == null ? void 0 : _j.import) === false && await Ie(e2, t3);
        } catch (t4) {
          console.error(`[Module Federation] Failed to resolve runtime-only shared module "${e2}"`, t4);
        }
        $(e2) && Re.add(n3);
      }
      je(Re), Le.push(...o2.filter((e2) => !Re.has(Z.get(e2)))), await a2(Le).catch(p);
      let ze = /* @__PURE__ */ new Map();
      return u.loadLazyShares = async (e2) => {
        let n3 = new Set(e2);
        for (let e3 of b) await Promise.all(e3.filter((e4) => n3.has(e4)).map((e4) => {
          let n4 = B[e4];
          if (!n4 || !n4.lazy || !$(e4)) return;
          let r4 = ze.get(e4);
          return r4 || (r4 = X(e4, n4, t2[e4], z[e4], void 0).then(() => $(e4) ? Ie(e4, n4) : void 0), r4.catch(() => ze.delete(e4)), ze.set(e4, r4)), r4;
        }));
      }, d(K), K;
    } finally {
      --F === 0 && L();
    }
  };
  te = async function(e2) {
    F && await I;
    let t2 = await P();
    if (!(e2 in t2)) throw Error(`[Module Federation] Module ${e2} does not exist in container.`);
    S && await S(), h.pendingShareLoads && await Promise.all(h.pendingShareLoads);
    let n2 = await t2[e2]();
    return h.pendingShareLoads && await Promise.all(h.pendingShareLoads), () => n2;
  };
  if (typeof document !== "undefined" && document.head) {
    try {
      for (const __mfWarmupPath of [
        "assets/_virtual_mf-localSharedImportMap___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__1-CP1i8pmX.js",
        "assets/dist-B4My1YVh.js",
        "assets/vite-preload-helper-DclECHGd.js",
        "assets/utils-BesU7hIa.js"
      ]) {
        const __mfWarmupLink = document.createElement("link");
        __mfWarmupLink.rel = "modulepreload";
        __mfWarmupLink.crossOrigin = "";
        __mfWarmupLink.href = new URL(__mfWarmupPath, import.meta.url).href;
        document.head.appendChild(__mfWarmupLink);
      }
    } catch (__mfWarmupError) {
    }
  }
})();
export {
  __tla,
  te as get,
  R as init
};
