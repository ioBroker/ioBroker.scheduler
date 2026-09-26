import { t as e } from "./vite-preload-helper-uBIymjUX.js";
import { t } from "./helpers-Bizl8Raj.js";
let i, a;
let __tla = (async () => {
  var _a, _b;
  var n = `__mf_module_cache__`;
  globalThis[n] || (globalThis[n] = {
    share: {},
    remote: {}
  }), (_a = globalThis[n]).share || (_a.share = {}), (_b = globalThis[n]).remote || (_b.remote = {});
  var r = globalThis[n];
  for (let e2 of Object.keys(r.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    r.share[t2] === void 0 && (r.share[t2] = r.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    r.share[t2] === void 0 && (r.share[t2] = r.share[e2]);
  }
  a = async function() {
    return i || (i = (async () => {
      let n2 = (e2, t2, n3, r2) => {
        let i3 = (Array.isArray(r2) ? r2[0] : r2) || `default`, a3 = t2 || !n3 ? e2 : e2 + `@` + n3, o2 = {
          canonical: i3 + `:` + a3
        };
        return i3 === "default" && (o2.aliases = [
          a3
        ]), o2;
      }, i2 = (e2, t2) => {
        let n3 = e2[t2.canonical];
        if (n3 !== void 0) return n3;
        let r2 = t2.aliases || [];
        for (let n4 of r2) {
          if (!Object.prototype.hasOwnProperty.call(e2, n4)) continue;
          let r3 = e2[n4];
          if (r3 !== void 0) return e2[t2.canonical] = r3, r3;
        }
      }, a2 = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-listeners`), o = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-owners`), s = (e2) => {
        let t2 = e2[o];
        return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, o, {
          value: t2,
          enumerable: false,
          configurable: false,
          writable: false
        })), t2;
      }, c = (e2, t2) => {
        var _a2;
        return (_a2 = e2[o]) == null ? void 0 : _a2[t2.canonical];
      }, l = (e2, t2, n3, r2) => {
        var _a2;
        e2[t2.canonical] = n3;
        let i3 = t2.aliases || [];
        for (let t3 of i3) Object.defineProperty(e2, t3, {
          value: n3,
          enumerable: true,
          configurable: true,
          writable: true
        });
        let c2 = e2[o];
        r2 === void 0 ? c2 && delete c2[t2.canonical] : s(e2)[t2.canonical] = r2;
        let l2 = (_a2 = e2[a2]) == null ? void 0 : _a2[t2.canonical];
        if (l2) for (let e3 of l2) e3(n3);
        return n3;
      }, u = await (await e(() => import("../customWidgets.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url)).init(), { usedShared: d } = await e(async () => {
        let { usedShared: e2 } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__1-Cf7OxlIZ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        });
        return {
          usedShared: e2
        };
      }, [], import.meta.url), f = (e2) => {
        let t2 = e2;
        for (let e3 = 0; e3 < 5; e3++) {
          let e4 = t2 == null ? void 0 : t2.default;
          if (!e4 || typeof e4 != `object` || Object.keys(e4).length === 0) break;
          let n3 = Object.keys(t2).filter((e5) => e5 !== "default").map((e5) => t2[e5]);
          if (n3.length > 0 && n3.some((e5) => e5 !== void 0)) break;
          t2 = e4;
        }
        return t2;
      }, p = (e2, t2) => _(t2).some((n3) => {
        var _a2, _b2;
        return Object.keys(((_b2 = (_a2 = u.shareScopeMap) == null ? void 0 : _a2[n3]) == null ? void 0 : _b2[e2]) || {}).some((e3) => e3 !== t2.version);
      }), m = [
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
      ], h = /* @__PURE__ */ Symbol(`mf.originalSharedProvider`), g = {
        emit: (e2) => e2
      }, _ = (e2) => Array.isArray(e2.scope) ? e2.scope : [
        e2.scope || `default`
      ], v = (e2, t2) => {
        if (t2 !== `version-first`) return e2;
        let n3 = {};
        for (let [t3, r2] of Object.entries(e2)) n3[t3] = Object.assign({}, r2, {
          [h]: r2
        });
        return n3;
      }, y = (e2, n3, r2, i3) => {
        var _a2;
        if (!e2 || !r2) return;
        let a3 = Object.fromEntries(Object.entries(e2).filter(([, e3]) => {
          var _a3;
          return ((_a3 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a3.import) !== false;
        }));
        if (Object.keys(a3).length === 0) return;
        let o2 = _(r2), s2 = v(a3, i3), c2 = {};
        for (let e3 of o2) c2[e3 || `default`] = {
          [n3]: s2
        };
        let l2 = (_a2 = t.getRegisteredShare(c2, n3, {
          ...r2,
          scope: o2,
          strategy: i3
        }, g)) == null ? void 0 : _a2.shared;
        return (l2 == null ? void 0 : l2[h]) || l2;
      }, b = (e2, t2, n3, r2) => {
        var _a2;
        return ((_a2 = n3.shareConfig) == null ? void 0 : _a2.singleton) ? Object.values(e2 || {}).some((e3) => {
          var _a3;
          return ((_a3 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a3.import) !== false;
        }) : !!y(e2, t2, {
          ...n3,
          scope: [
            r2
          ]
        }, `version-first`);
      };
      for (let e2 of m) await Promise.all(e2.map(async (e3) => {
        var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
        let t2 = d[e3];
        if (!t2 || t2.materialize === false || t2.treeShaking) return;
        let a3 = n2(e3, (_a2 = t2.shareConfig) == null ? void 0 : _a2.singleton, t2.version, t2.scope);
        if (!(i2(r.share, a3) !== void 0 && (!((_b2 = t2.shareConfig) == null ? void 0 : _b2.singleton) && c(r.share, a3) === `vis-2-scheduler` || ((_c = t2.shareConfig) == null ? void 0 : _c.singleton) && !p(e3, t2)))) {
          if (((_d = t2.shareConfig) == null ? void 0 : _d.import) === false) {
            let n3 = _(t2), r2 = (n4) => {
              var _a3, _b3;
              return !b((_b3 = (_a3 = u.shareScopeMap) == null ? void 0 : _a3[n4]) == null ? void 0 : _b3[e3], e3, t2, n4);
            };
            if (n3.some(r2)) {
              u.__mfKeepAdoptedProviders || (u.__mfKeepAdoptedProviders = true, (_i = (_h = (_g = (_f = (_e = u.sharedHandler) == null ? void 0 : _e.hooks) == null ? void 0 : _f.lifecycle) == null ? void 0 : _g.afterRegisterShare) == null ? void 0 : _h.on) == null ? void 0 : _i.call(_h, (e4) => {
                var _a3, _b3, _c2, _d2;
                let { shared: t3, previousShared: n4, registeredShared: r3 } = e4 || {};
                if (((_a3 = t3 == null ? void 0 : t3.shareConfig) == null ? void 0 : _a3.import) !== false || r3 !== t3 || !n4 || ((_b3 = n4.shareConfig) == null ? void 0 : _b3.import) === false) return;
                let i3 = (_d2 = (_c2 = u.shareScopeMap) == null ? void 0 : _c2[e4.scope]) == null ? void 0 : _d2[e4.pkgName];
                i3 && i3[t3.version] === t3 && (i3[t3.version] = n4);
              }));
              for (let i3 of ((_j = globalThis.__FEDERATION__) == null ? void 0 : _j.__INSTANCES__) || []) for (let a4 of n3) {
                let n4 = (_l = (_k = i3 == null ? void 0 : i3.shareScopeMap) == null ? void 0 : _k[a4]) == null ? void 0 : _l[e3];
                if (!b(n4, e3, t2, a4) || !r2(a4)) continue;
                let o2 = (_n = (_m = u.shareScopeMap)[a4] || (_m[a4] = {}))[e3] || (_n[e3] = {});
                for (let [e4, t3] of Object.entries(n4)) ((_o = t3 == null ? void 0 : t3.shareConfig) == null ? void 0 : _o.import) !== false && (o2[e4] && ((_p = o2[e4].shareConfig) == null ? void 0 : _p.import) !== false || (o2[e4] = t3));
              }
            }
            if (n3.every(r2)) return;
          }
          await u.loadShare(e3, {
            customShareInfo: {
              shareConfig: t2.shareConfig
            }
          }).then(async (e4) => {
            if (e4 === false) return;
            let t3 = typeof e4 == `function` ? e4() : e4, n3 = f(await Promise.resolve(t3));
            l(r.share, a3, n3, `vis-2-scheduler`);
          });
        }
      }));
      return u;
    })()), i;
  };
  i = a();
})();
export {
  __tla,
  i as hostInitPromise,
  a as initHost
};
