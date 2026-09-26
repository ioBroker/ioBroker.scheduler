var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e2, t2) => () => (t2 || (e2((t2 = { exports: {} }).exports, t2), e2 = null), t2.exports), s = (e2, n2) => {
  let r2 = {};
  for (var i2 in e2) t(r2, i2, { get: e2[i2], enumerable: true });
  return n2 || t(r2, Symbol.toStringTag, { value: `Module` }), r2;
}, c = (e2, i2, o2, s2) => {
  if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u = c2.length, d; l2 < u; l2++) d = c2[l2], !a.call(e2, d) && d !== o2 && t(e2, d, { get: ((e3) => i2[e3]).bind(null, d), enumerable: !(s2 = n(i2, d)) || s2.enumerable });
  return e2;
}, l = (n2, r2, o2) => (o2 = n2 == null ? {} : e(i(n2)), c(r2 || !n2 || !n2.__esModule || !a.call(n2, `default`) ? t(o2, `default`, { value: n2, enumerable: true }) : o2, n2));
export {
  s as n,
  l as r,
  o as t
};
