import { g as c } from "./_commonjsHelpers-Cpj98o6Y.js";
import { __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
import { v as i, k as m, T as _, __tla as __tla_1 } from "./defaultTheme-Bre6gJDy.js";
let O, b;
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
  var p = {
    exports: {}
  }, y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", u = y, f = u;
  function a() {
  }
  function n() {
  }
  n.resetWarningCache = a;
  var h = function() {
    function e(l, v, P, S, d, s) {
      if (s !== f) {
        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw o.name = "Invariant Violation", o;
      }
    }
    e.isRequired = e;
    function r() {
      return e;
    }
    var t = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: r,
      element: e,
      elementType: e,
      instanceOf: r,
      node: e,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: n,
      resetWarningCache: a
    };
    return t.PropTypes = t, t;
  };
  p.exports = h();
  var T = p.exports;
  O = c(T);
  b = function() {
    const e = i.useTheme(m);
    return e[_] || e;
  };
});
export {
  O as P,
  __tla,
  b as u
};
