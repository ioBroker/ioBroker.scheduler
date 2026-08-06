import { g as n } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as i, a as c, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
let g, v, s;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function f(e, a) {
    for (var o = 0; o < a.length; o++) {
      const t = a[o];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const _ = Object.getOwnPropertyDescriptor(t, r);
          _ && Object.defineProperty(e, r, _.get ? _ : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const { loadShare: l } = c, { initPromise: m } = i, u = m.then((e) => l("react", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), d = await u.then((e) => e());
  s = d;
  g = n(s);
  v = f({
    __proto__: null,
    default: g
  }, [
    s
  ]);
});
export {
  g as R,
  __tla,
  v as a,
  s as v
};
