var m = { exports: {} }, e = {};
var _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), i = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), c = /* @__PURE__ */ Symbol.for("react.memo"), l = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.view_transition"), C = /* @__PURE__ */ Symbol.for("react.client.reference");
function t(r) {
  if (typeof r == "object" && r !== null) {
    var T = r.$$typeof;
    switch (T) {
      case _:
        switch (r = r.type, r) {
          case n:
          case s:
          case o:
          case E:
          case u:
          case R:
            return r;
          default:
            switch (r = r && r.$$typeof, r) {
              case f:
              case i:
              case l:
              case c:
                return r;
              case a:
                return r;
              default:
                return T;
            }
        }
      case S:
        return T;
    }
  }
}
e.ContextConsumer = a;
e.ContextProvider = f;
e.Element = _;
e.ForwardRef = i;
e.Fragment = n;
e.Lazy = l;
e.Memo = c;
e.Portal = S;
e.Profiler = s;
e.StrictMode = o;
e.Suspense = E;
e.SuspenseList = u;
e.isContextConsumer = function(r) {
  return t(r) === a;
};
e.isContextProvider = function(r) {
  return t(r) === f;
};
e.isElement = function(r) {
  return typeof r == "object" && r !== null && r.$$typeof === _;
};
e.isForwardRef = function(r) {
  return t(r) === i;
};
e.isFragment = function(r) {
  return t(r) === n;
};
e.isLazy = function(r) {
  return t(r) === l;
};
e.isMemo = function(r) {
  return t(r) === c;
};
e.isPortal = function(r) {
  return t(r) === S;
};
e.isProfiler = function(r) {
  return t(r) === s;
};
e.isStrictMode = function(r) {
  return t(r) === o;
};
e.isSuspense = function(r) {
  return t(r) === E;
};
e.isSuspenseList = function(r) {
  return t(r) === u;
};
e.isValidElementType = function(r) {
  return typeof r == "string" || typeof r == "function" || r === n || r === s || r === o || r === E || r === u || typeof r == "object" && r !== null && (r.$$typeof === l || r.$$typeof === c || r.$$typeof === f || r.$$typeof === a || r.$$typeof === i || r.$$typeof === C || r.getModuleId !== void 0);
};
e.typeOf = t;
m.exports = e;
var P = m.exports;
export {
  P as r
};
