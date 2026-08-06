import { v as e, a as r, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
let h, c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const { loadShare: a } = r, { initPromise: i } = e, s = i.then((_) => a("@mui/material", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), o = await s.then((_) => _());
  c = o;
  const { loadShare: t } = r, { initPromise: n } = e, m = n.then((_) => t("@mui/icons-material", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), f = await m.then((_) => _());
  h = f;
});
export {
  __tla,
  h as a,
  c as v
};
