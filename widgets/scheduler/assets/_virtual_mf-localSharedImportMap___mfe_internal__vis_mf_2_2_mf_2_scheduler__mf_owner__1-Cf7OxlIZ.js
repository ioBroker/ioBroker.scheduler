import { t as e } from "./vite-preload-helper-uBIymjUX.js";
import "./dist-BK97MX24.js";
let a, i;
let __tla = (async () => {
  let t, n, r;
  t = (e2) => {
    let t2 = e2;
    for (let e3 = 0; e3 < 5; e3++) {
      let e4 = t2 == null ? void 0 : t2.default;
      if (!e4 || typeof e4 != `object` || Object.keys(e4).length === 0) break;
      let n2 = Object.keys(t2).filter((e5) => e5 !== "default").map((e5) => t2[e5]);
      if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
      t2 = e4;
    }
    return t2;
  };
  n = (e2, t2, n2, r2) => {
    var _a, _b, _c;
    let i2 = (_a = globalThis.__mf_module_cache__) == null ? void 0 : _a.share, a2 = t2.map((e3) => i2 == null ? void 0 : i2[e3]).find((e3) => e3 !== void 0), o = (a2 == null ? void 0 : a2.version) ?? ((_b = a2 == null ? void 0 : a2.default) == null ? void 0 : _b.version), s = String(o || ``).split(/[^0-9]+/).map(Number), c = String(n2 || ``).split(/[^0-9]+/).map(Number);
    for (let e3 = 0; e3 < Math.max(s.length, c.length); e3++) {
      if ((s[e3] || 0) < (c[e3] || 0)) return;
      if ((s[e3] || 0) > (c[e3] || 0)) break;
    }
    for (let t3 of e2) {
      let e3 = i2 == null ? void 0 : i2[t3];
      if (e3 !== void 0 && (!r2 || typeof (e3 == null ? void 0 : e3[r2]) == `function` || typeof ((_c = e3 == null ? void 0 : e3.default) == null ? void 0 : _c[r2]) == `function`)) return e3;
    }
  };
  r = {
    react: async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild__react__prebuild__-DMwD2vWI.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react/jsx-dev-runtime": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-Cbwz_BNS.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react/jsx-runtime": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-ls7Ro8xU.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react-dom": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild__react_mf_2_dom__prebuild__-CwDi_M7l.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react-dom/client": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild__react_mf_2_dom_mf_1_client__prebuild__-8_65ovBr.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@emotion/react": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild___mf_0_emotion_mf_1_react__prebuild__-B7JyfeT8.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/private-theming": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild___mf_0_mui_mf_1_private_mf_2_theming__prebuild__-B66vmzvg.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/system": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild___mf_0_mui_mf_1_system__prebuild__-Bj-QI9RK.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/material": async () => await e(() => import("./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__195610562247234__prebuild___mf_0_mui_mf_1_material__prebuild__-BU3NoBV9.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)
  };
  i = {
    react: {
      name: `react`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i.react;
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let { react: n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react/jsx-dev-runtime": {
      name: `react/jsx-dev-runtime`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react/jsx-dev-runtime`];
        if (e2.lib) return e2.lib;
        if (e2.loading) return e2.loading;
        let a2 = n([
          `default:react/jsx-dev-runtime`,
          `react/jsx-dev-runtime`
        ], [
          `default:react`,
          `react`
        ], `19.3.0`, void 0);
        return a2 === void 0 ? (e2.loading = (async () => {
          try {
            let { "react/jsx-dev-runtime": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })(), e2.loading) : (e2.lib = function() {
          return a2;
        }, e2.loaded = true, e2.lib);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react/jsx-runtime": {
      name: `react/jsx-runtime`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react/jsx-runtime`];
        if (e2.lib) return e2.lib;
        if (e2.loading) return e2.loading;
        let a2 = n([
          `default:react/jsx-runtime`,
          `react/jsx-runtime`
        ], [
          `default:react`,
          `react`
        ], `19.3.0`, void 0);
        return a2 === void 0 ? (e2.loading = (async () => {
          try {
            let { "react/jsx-runtime": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })(), e2.loading) : (e2.lib = function() {
          return a2;
        }, e2.loaded = true, e2.lib);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react-dom": {
      name: `react-dom`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react-dom`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let { "react-dom": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react-dom/client": {
      name: `react-dom/client`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react-dom/client`];
        if (e2.lib) return e2.lib;
        if (e2.loading) return e2.loading;
        let a2 = n([
          `default:react-dom/client`,
          `react-dom/client`,
          `default:react-dom`,
          `react-dom`
        ], [
          `default:react`,
          `react`
        ], `19.3.0`, `createRoot`);
        return a2 === void 0 ? (e2.loading = (async () => {
          try {
            let { "react-dom/client": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })(), e2.loading) : (e2.lib = function() {
          return a2;
        }, e2.loaded = true, e2.lib);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@emotion/react": {
      name: `@emotion/react`,
      version: `11.14.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@emotion/react`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let { "@emotion/react": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@mui/private-theming": {
      name: `@mui/private-theming`,
      version: `9.4.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@mui/private-theming`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let { "@mui/private-theming": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@mui/system": {
      name: `@mui/system`,
      version: `9.4.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@mui/system`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let { "@mui/system": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@mui/material": {
      name: `@mui/material`,
      version: `9.4.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `vis-2-scheduler`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@mui/material`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let { "@mui/material": n2 } = r, i2 = t({
              ...await n2()
            });
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    }
  };
  a = [];
})();
export {
  __tla,
  a as usedRemotes,
  i as usedShared
};
