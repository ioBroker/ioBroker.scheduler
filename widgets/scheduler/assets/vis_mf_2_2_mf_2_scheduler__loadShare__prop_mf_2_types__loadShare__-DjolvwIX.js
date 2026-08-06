import { g as e } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as r, a as o, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const { loadShare: s } = o, { initPromise: t } = r, a = t.then((_) => s("prop-types", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), i = await a.then((_) => _());
  var n = i;
  p = e(n);
});
export {
  p as P,
  __tla
};
