const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../customWidgets.js","./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js","./virtualExposes-DttESYOh.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import { _ as i } from "./preload-helper-PPVm8Dsz.js";
(async () => {
  const r = i(() => import("../customWidgets.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([0,1,2,3]), import.meta.url);
  Promise.resolve(r).then((e) => Promise.resolve(e.__tla).then(e.init).catch(e.init));
})();
