const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/index-DV6lj1W8.js","./assets/defaultTheme-Bre6gJDy.js","./assets/vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js","./assets/_commonjsHelpers-Cpj98o6Y.js","./assets/vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js","./assets/vis_mf_2_2_mf_2_scheduler__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-D1EBM7Yy.js","./assets/useTheme-Drv48unW.js","./assets/index-ClXuMIHL.js","./assets/jsx-runtime-DWrJB0x-.js","./assets/createSvgIcon-uwMkAX2s.js","./assets/index-J8M_k1pp.js","./assets/index-O1H1-MyD.js","./assets/index-BEpFHtMA.js","./assets/index-BTdRPs2C.js"])))=>i.map(i=>d[i]);
import { i as d, v as p, __tla as __tla_0 } from "./assets/vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
import s, { __tla as __tla_1 } from "./assets/virtualExposes-CtZ6e3UR.js";
import { _ as o } from "./assets/preload-helper-PPVm8Dsz.js";
let h, y;
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
  })()
]).then(async () => {
  const i = {
    "@iobroker/adapter-react-v5": async () => await o(() => import("./assets/index-DV6lj1W8.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
    "@mui/icons-material": async () => await o(() => import("./assets/index-ClXuMIHL.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([7,8,2,3,4,9,1]), import.meta.url),
    "@mui/material": async () => await o(() => import("./assets/index-J8M_k1pp.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([10,1,2,3,4,9,8,6]), import.meta.url),
    "@mui/system": async () => await o(() => import("./assets/index-O1H1-MyD.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([11,2,3,4]), import.meta.url),
    react: async () => await o(() => import("./assets/index-BEpFHtMA.js").then((t) => t.i), __vite__mapDeps([12,3]), import.meta.url),
    "react-dom": async () => await o(() => import("./assets/index-BTdRPs2C.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((t) => t.i), __vite__mapDeps([13,3,2,4]), import.meta.url)
  }, a = {
    "@iobroker/adapter-react-v5": {
      name: "@iobroker/adapter-react-v5",
      version: "8.3.2",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis-2-scheduler",
      async get() {
        a["@iobroker/adapter-react-v5"].loaded = true;
        const { "@iobroker/adapter-react-v5": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/icons-material": {
      name: "@mui/icons-material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis-2-scheduler",
      async get() {
        a["@mui/icons-material"].loaded = true;
        const { "@mui/icons-material": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/material": {
      name: "@mui/material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis-2-scheduler",
      async get() {
        a["@mui/material"].loaded = true;
        const { "@mui/material": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/system": {
      name: "@mui/system",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis-2-scheduler",
      async get() {
        a["@mui/system"].loaded = true;
        const { "@mui/system": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    react: {
      name: "react",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis-2-scheduler",
      async get() {
        a.react.loaded = true;
        const { react: e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis-2-scheduler",
      async get() {
        a["react-dom"].loaded = true;
        const { "react-dom": e } = i, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    }
  }, f = [], u = {}, l = "default", m = "vis-2-scheduler";
  y = async function(e = {}, t = []) {
    const r = d({
      name: m,
      remotes: f,
      shared: a,
      plugins: [],
      shareStrategy: "version-first"
    });
    var n = u[l];
    if (n || (n = u[l] = {
      from: m
    }), !(t.indexOf(n) >= 0)) {
      t.push(n), r.initShareScopeMap("default", e);
      try {
        await Promise.all(await r.initializeSharing("default", {
          strategy: "version-first",
          from: "build",
          initScope: t
        }));
      } catch (c) {
        console.error(c);
      }
      return p.initResolve(r), r;
    }
  };
  h = function(e) {
    if (!(e in s)) throw new Error(`Module ${e} does not exist in container.`);
    return s[e]().then((t) => () => t);
  };
});
export {
  __tla,
  h as get,
  y as init
};
