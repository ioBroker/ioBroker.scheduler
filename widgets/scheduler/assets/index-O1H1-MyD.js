import { a as qe, v as p, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import { __tla as __tla_1 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
let Nc, nl, xi, il, La, ll, Rc, Wa, Mi, Ri, Ni, Ta, ai, ii, Uc, Gs, Fs, Us, Ds, zs, Hs, At, Bs, Vs, Ws, Ks, Z, Gn, Ki, mi, Oc, si, wa, Rt, ye, sl, sa, ws, ec, yc, Ns, Ec, fa, ze, yr, Fe, is, Es, eo, oe, zn, Ea, dl, ji, Pi, ki, Li, Ii, Ai, Dn, Ui, Hi, Yi, Qi, _t, ol, Fc, al, tr, Pt, ul, Ls, Ze, Jn, be, Wn, oi, Zs, Js, ei, cl, qs, Xs, ni, ti, ri, ne, ui, va, $a, _i, Gi, Wi, _c, Vi, qi, to, Ji, Zc, j, pr, fi, br, As, di, li, el, Oi, Ys, Qs, L, hr, Bn, $e, tl, Bi, Kn, rl, zc, Wc, Dc, Vc, Kc, De, Mc, Bc, Di, Mt, Vn, Ps, Vt, Lc, jc, Fn, Q, kt, fl, g, vr, ca, Zi, Xi, zi, Un, ea, Qc, Xc, qc, yi, Ht, Sr, xr, fc, lc, uc, Ic, Yc, Ya, Dt, Ne, ke, Gc, Hc, jt, Cr, Ot, Jc, ci, Fi;
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
  function Xe(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  }
  function Yt() {
    return Yt = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Yt.apply(null, arguments);
  }
  function fo(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function mo(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  var un = (function() {
    function e(r) {
      var n = this;
      this._insertTag = function(o) {
        var s;
        n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
      }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function(n) {
      n.forEach(this._insertTag);
    }, t.insert = function(n) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mo(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var s = fo(o);
        try {
          s.insertRule(n, s.cssRules.length);
        } catch {
        }
      } else o.appendChild(document.createTextNode(n));
      this.ctr++;
    }, t.flush = function() {
      this.tags.forEach(function(n) {
        var o;
        return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
      }), this.tags = [], this.ctr = 0;
    }, e;
  })(), z = "-ms-", Je = "-moz-", _ = "-webkit-", fn = "comm", rr = "rule", nr = "decl", po = "@import", dn = "@keyframes", ho = "@layer", yo = Math.abs, tt = String.fromCharCode, go = Object.assign;
  function bo(e, t) {
    return B(e, 0) ^ 45 ? (((t << 2 ^ B(e, 0)) << 2 ^ B(e, 1)) << 2 ^ B(e, 2)) << 2 ^ B(e, 3) : 0;
  }
  function mn(e) {
    return e.trim();
  }
  function So(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function R(e, t, r) {
    return e.replace(t, r);
  }
  function Qt(e, t) {
    return e.indexOf(t);
  }
  function B(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function je(e, t, r) {
    return e.slice(t, r);
  }
  function ie(e) {
    return e.length;
  }
  function or(e) {
    return e.length;
  }
  function Ve(e, t) {
    return t.push(e), e;
  }
  function xo(e, t) {
    return e.map(t).join("");
  }
  var rt = 1, Ee = 1, pn = 0, U = 0, I = 0, Pe = "";
  function nt(e, t, r, n, o, s, i) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: o,
      children: s,
      line: rt,
      column: Ee,
      length: i,
      return: ""
    };
  }
  function Me(e, t) {
    return go(nt("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function vo() {
    return I;
  }
  function Co() {
    return I = U > 0 ? B(Pe, --U) : 0, Ee--, I === 10 && (Ee = 1, rt--), I;
  }
  function q() {
    return I = U < pn ? B(Pe, U++) : 0, Ee++, I === 10 && (Ee = 1, rt++), I;
  }
  function ce() {
    return B(Pe, U);
  }
  function Ue() {
    return U;
  }
  function Ge(e, t) {
    return je(Pe, e, t);
  }
  function Le(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function hn(e) {
    return rt = Ee = 1, pn = ie(Pe = e), U = 0, [];
  }
  function yn(e) {
    return Pe = "", e;
  }
  function He(e) {
    return mn(Ge(U - 1, qt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function wo(e) {
    for (; (I = ce()) && I < 33; ) q();
    return Le(e) > 2 || Le(I) > 3 ? "" : " ";
  }
  function $o(e, t) {
    for (; --t && q() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); ) ;
    return Ge(e, Ue() + (t < 6 && ce() == 32 && q() == 32));
  }
  function qt(e) {
    for (; q(); ) switch (I) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qt(I);
        break;
      case 40:
        e === 41 && qt(e);
        break;
      case 92:
        q();
        break;
    }
    return U;
  }
  function To(e, t) {
    for (; q() && e + I !== 57; ) if (e + I === 84 && ce() === 47) break;
    return "/*" + Ge(t, U - 1) + "*" + tt(e === 47 ? e : q());
  }
  function Eo(e) {
    for (; !Le(ce()); ) q();
    return Ge(e, U);
  }
  function Po(e) {
    return yn(Ye("", null, null, null, [
      ""
    ], e = hn(e), 0, [
      0
    ], e));
  }
  function Ye(e, t, r, n, o, s, i, a, c) {
    for (var l = 0, u = 0, d = i, f = 0, h = 0, m = 0, y = 1, v = 1, C = 1, k = 0, w = "", A = o, E = s, T = n, x = w; v; ) switch (m = k, k = q()) {
      case 40:
        if (m != 108 && B(x, d - 1) == 58) {
          Qt(x += R(He(k), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += He(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += wo(m);
        break;
      case 92:
        x += $o(Ue() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Ve(ko(To(q(), Ue()), t, r), c);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * y:
        a[l++] = ie(x) * C;
      case 125 * y:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            C == -1 && (x = R(x, /\f/g, "")), h > 0 && ie(x) - d && Ve(h > 32 ? Fr(x + ";", n, r, d - 1) : Fr(R(x, " ", "") + ";", n, r, d - 2), c);
            break;
          case 59:
            x += ";";
          default:
            if (Ve(T = Br(x, t, r, l, u, o, a, w, A = [], E = [], d), s), k === 123) if (u === 0) Ye(x, t, T, T, A, s, d, a, E);
            else switch (f === 99 && B(x, 3) === 110 ? 100 : f) {
              case 100:
              case 108:
              case 109:
              case 115:
                Ye(e, T, T, n && Ve(Br(e, T, T, 0, 0, o, a, w, o, A = [], d), E), o, E, d, a, n ? A : E);
                break;
              default:
                Ye(x, T, T, T, [
                  ""
                ], E, 0, a, E);
            }
        }
        l = u = h = 0, y = C = 1, w = x = "", d = i;
        break;
      case 58:
        d = 1 + ie(x), h = m;
      default:
        if (y < 1) {
          if (k == 123) --y;
          else if (k == 125 && y++ == 0 && Co() == 125) continue;
        }
        switch (x += tt(k), k * y) {
          case 38:
            C = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[l++] = (ie(x) - 1) * C, C = 1;
            break;
          case 64:
            ce() === 45 && (x += He(q())), f = ce(), u = d = ie(w = x += Eo(Ue())), k++;
            break;
          case 45:
            m === 45 && ie(x) == 2 && (y = 0);
        }
    }
    return s;
  }
  function Br(e, t, r, n, o, s, i, a, c, l, u) {
    for (var d = o - 1, f = o === 0 ? s : [
      ""
    ], h = or(f), m = 0, y = 0, v = 0; m < n; ++m) for (var C = 0, k = je(e, d + 1, d = yo(y = i[m])), w = e; C < h; ++C) (w = mn(y > 0 ? f[C] + " " + k : R(k, /&\f/g, f[C]))) && (c[v++] = w);
    return nt(e, t, r, o === 0 ? rr : a, c, l, u);
  }
  function ko(e, t, r) {
    return nt(e, t, r, fn, tt(vo()), je(e, 2, -2), 0);
  }
  function Fr(e, t, r, n) {
    return nt(e, t, r, nr, je(e, 0, n), je(e, n + 1, -1), n);
  }
  function Ce(e, t) {
    for (var r = "", n = or(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
    return r;
  }
  function Ao(e, t, r, n) {
    switch (e.type) {
      case ho:
        if (e.children.length) break;
      case po:
      case nr:
        return e.return = e.return || e.value;
      case fn:
        return "";
      case dn:
        return e.return = e.value + "{" + Ce(e.children, n) + "}";
      case rr:
        e.value = e.props.join(",");
    }
    return ie(r = Ce(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function _o(e) {
    var t = or(e);
    return function(r, n, o, s) {
      for (var i = "", a = 0; a < t; a++) i += e[a](r, n, o, s) || "";
      return i;
    };
  }
  function Ro(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  function gn(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var Mo = function(t, r, n) {
    for (var o = 0, s = 0; o = s, s = ce(), o === 38 && s === 12 && (r[n] = 1), !Le(s); ) q();
    return Ge(t, U);
  }, Oo = function(t, r) {
    var n = -1, o = 44;
    do
      switch (Le(o)) {
        case 0:
          o === 38 && ce() === 12 && (r[n] = 1), t[n] += Mo(U - 1, r, n);
          break;
        case 2:
          t[n] += He(o);
          break;
        case 4:
          if (o === 44) {
            t[++n] = ce() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += tt(o);
      }
    while (o = q());
    return t;
  }, jo = function(t, r) {
    return yn(Oo(hn(t), r));
  }, zr = /* @__PURE__ */ new WeakMap(), Lo = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !zr.get(n)) && !o) {
        zr.set(t, true);
        for (var s = [], i = jo(r, s), a = n.props, c = 0, l = 0; c < i.length; c++) for (var u = 0; u < a.length; u++, l++) t.props[l] = s[c] ? i[c].replace(/&\f/g, a[u]) : a[u] + " " + i[c];
      }
    }
  }, Io = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function bn(e, t) {
    switch (bo(e, t)) {
      case 5103:
        return _ + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return _ + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return _ + e + Je + e + z + e + e;
      case 6828:
      case 4268:
        return _ + e + z + e + e;
      case 6165:
        return _ + e + z + "flex-" + e + e;
      case 5187:
        return _ + e + R(e, /(\w+).+(:[^]+)/, _ + "box-$1$2" + z + "flex-$1$2") + e;
      case 5443:
        return _ + e + z + "flex-item-" + R(e, /flex-|-self/, "") + e;
      case 4675:
        return _ + e + z + "flex-line-pack" + R(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return _ + e + z + R(e, "shrink", "negative") + e;
      case 5292:
        return _ + e + z + R(e, "basis", "preferred-size") + e;
      case 6060:
        return _ + "box-" + R(e, "-grow", "") + _ + e + z + R(e, "grow", "positive") + e;
      case 4554:
        return _ + R(e, /([^-])(transform)/g, "$1" + _ + "$2") + e;
      case 6187:
        return R(R(R(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return R(e, /(image-set\([^]*)/, _ + "$1$`$1");
      case 4968:
        return R(R(e, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return R(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (ie(e) - 1 - t > 6) switch (B(e, t + 1)) {
          case 109:
            if (B(e, t + 4) !== 45) break;
          case 102:
            return R(e, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + Je + (B(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Qt(e, "stretch") ? bn(R(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (B(e, t + 1) !== 115) break;
      case 6444:
        switch (B(e, ie(e) - 3 - (~Qt(e, "!important") && 10))) {
          case 107:
            return R(e, ":", ":" + _) + e;
          case 101:
            return R(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + _ + (B(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + z + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (B(e, t + 11)) {
          case 114:
            return _ + e + z + R(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return _ + e + z + R(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return _ + e + z + R(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return _ + e + z + e + e;
    }
    return e;
  }
  var No = function(t, r, n, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case nr:
        t.return = bn(t.value, t.length);
        break;
      case dn:
        return Ce([
          Me(t, {
            value: R(t.value, "@", "@" + _)
          })
        ], o);
      case rr:
        if (t.length) return xo(t.props, function(s) {
          switch (So(s, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return Ce([
                Me(t, {
                  props: [
                    R(s, /:(read-\w+)/, ":" + Je + "$1")
                  ]
                })
              ], o);
            case "::placeholder":
              return Ce([
                Me(t, {
                  props: [
                    R(s, /:(plac\w+)/, ":" + _ + "input-$1")
                  ]
                }),
                Me(t, {
                  props: [
                    R(s, /:(plac\w+)/, ":" + Je + "$1")
                  ]
                }),
                Me(t, {
                  props: [
                    R(s, /:(plac\w+)/, z + "input-$1")
                  ]
                })
              ], o);
          }
          return "";
        });
    }
  }, Go = [
    No
  ], Sn = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(y) {
        var v = y.getAttribute("data-emotion");
        v.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Go, s = {}, i, a = [];
    i = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(y) {
      for (var v = y.getAttribute("data-emotion").split(" "), C = 1; C < v.length; C++) s[v[C]] = true;
      a.push(y);
    });
    var c, l = [
      Lo,
      Io
    ];
    {
      var u, d = [
        Ao,
        Ro(function(y) {
          u.insert(y);
        })
      ], f = _o(l.concat(o, d)), h = function(v) {
        return Ce(Po(v), f);
      };
      c = function(v, C, k, w) {
        u = k, h(v ? v + "{" + C.styles + "}" : C.styles), w && (m.inserted[C.name] = true);
      };
    }
    var m = {
      key: r,
      sheet: new un({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: s,
      registered: {},
      insert: c
    };
    return m.sheet.hydrate(a), m;
  }, xn = {
    exports: {}
  }, M = {};
  var W = typeof Symbol == "function" && Symbol.for, sr = W ? /* @__PURE__ */ Symbol.for("react.element") : 60103, ir = W ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, ot = W ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, st = W ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, it = W ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, at = W ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, ct = W ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ar = W ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, lt = W ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, ut = W ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, ft = W ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Wo = W ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, dt = W ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, mt = W ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Bo = W ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Fo = W ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, zo = W ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Do = W ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function X(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case sr:
          switch (e = e.type, e) {
            case ar:
            case lt:
            case ot:
            case it:
            case st:
            case ft:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case ct:
                case ut:
                case mt:
                case dt:
                case at:
                  return e;
                default:
                  return t;
              }
          }
        case ir:
          return t;
      }
    }
  }
  function vn(e) {
    return X(e) === lt;
  }
  M.AsyncMode = ar;
  M.ConcurrentMode = lt;
  M.ContextConsumer = ct;
  M.ContextProvider = at;
  M.Element = sr;
  M.ForwardRef = ut;
  M.Fragment = ot;
  M.Lazy = mt;
  M.Memo = dt;
  M.Portal = ir;
  M.Profiler = it;
  M.StrictMode = st;
  M.Suspense = ft;
  M.isAsyncMode = function(e) {
    return vn(e) || X(e) === ar;
  };
  M.isConcurrentMode = vn;
  M.isContextConsumer = function(e) {
    return X(e) === ct;
  };
  M.isContextProvider = function(e) {
    return X(e) === at;
  };
  M.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sr;
  };
  M.isForwardRef = function(e) {
    return X(e) === ut;
  };
  M.isFragment = function(e) {
    return X(e) === ot;
  };
  M.isLazy = function(e) {
    return X(e) === mt;
  };
  M.isMemo = function(e) {
    return X(e) === dt;
  };
  M.isPortal = function(e) {
    return X(e) === ir;
  };
  M.isProfiler = function(e) {
    return X(e) === it;
  };
  M.isStrictMode = function(e) {
    return X(e) === st;
  };
  M.isSuspense = function(e) {
    return X(e) === ft;
  };
  M.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ot || e === lt || e === it || e === st || e === ft || e === Wo || typeof e == "object" && e !== null && (e.$$typeof === mt || e.$$typeof === dt || e.$$typeof === at || e.$$typeof === ct || e.$$typeof === ut || e.$$typeof === Fo || e.$$typeof === zo || e.$$typeof === Do || e.$$typeof === Bo);
  };
  M.typeOf = X;
  xn.exports = M;
  var Ko = xn.exports, Cn = Ko, Vo = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, Uo = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, wn = {};
  wn[Cn.ForwardRef] = Vo;
  wn[Cn.Memo] = Uo;
  var Ho = true;
  function $n(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
    }), n;
  }
  var cr = function(t, r, n) {
    var o = t.key + "-" + r.name;
    (n === false || Ho === false) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
  }, lr = function(t, r, n) {
    cr(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var s = r;
      do
        t.insert(r === s ? "." + o : "", s, t.sheet, true), s = s.next;
      while (s !== void 0);
    }
  };
  function Yo(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4) r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }
  var Qo = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, qo = /[A-Z]|^ms/g, Xo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Tn = function(t) {
    return t.charCodeAt(1) === 45;
  }, Dr = function(t) {
    return t != null && typeof t != "boolean";
  }, Ft = gn(function(e) {
    return Tn(e) ? e : e.replace(qo, "-$&").toLowerCase();
  }), Kr = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(Xo, function(n, o, s) {
          return ae = {
            name: o,
            styles: s,
            next: ae
          }, o;
        });
    }
    return Qo[t] !== 1 && !Tn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
  function Ie(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var o = r;
        if (o.anim === 1) return ae = {
          name: o.name,
          styles: o.styles,
          next: ae
        }, o.name;
        var s = r;
        if (s.styles !== void 0) {
          var i = s.next;
          if (i !== void 0) for (; i !== void 0; ) ae = {
            name: i.name,
            styles: i.styles,
            next: ae
          }, i = i.next;
          var a = s.styles + ";";
          return a;
        }
        return Jo(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var c = ae, l = r(e);
          return ae = c, Ie(e, t, l);
        }
        break;
      }
    }
    var u = r;
    if (t == null) return u;
    var d = t[u];
    return d !== void 0 ? d : u;
  }
  function Jo(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Ie(e, t, r[o]) + ";";
    else for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : Dr(a) && (n += Ft(s) + ":" + Kr(s, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0)) for (var c = 0; c < i.length; c++) Dr(i[c]) && (n += Ft(s) + ":" + Kr(s, i[c]) + ";");
      else {
        var l = Ie(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            n += Ft(s) + ":" + l + ";";
            break;
          }
          default:
            n += s + "{" + l + "}";
        }
      }
    }
    return n;
  }
  var Vr = /label:\s*([^\s;{]+)\s*(;|$)/g, ae;
  function We(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, o = "";
    ae = void 0;
    var s = e[0];
    if (s == null || s.raw === void 0) n = false, o += Ie(r, t, s);
    else {
      var i = s;
      o += i[0];
    }
    for (var a = 1; a < e.length; a++) if (o += Ie(r, t, e[a]), n) {
      var c = s;
      o += c[a];
    }
    Vr.lastIndex = 0;
    for (var l = "", u; (u = Vr.exec(o)) !== null; ) l += "-" + u[1];
    var d = Yo(o) + l;
    return {
      name: d,
      styles: o,
      next: ae
    };
  }
  var Zo = function(t) {
    return t();
  }, En = qe.useInsertionEffect ? qe.useInsertionEffect : false, Pn = En || Zo, Ur = En || p.useLayoutEffect, kn = p.createContext(typeof HTMLElement < "u" ? Sn({
    key: "css"
  }) : null), es = kn.Provider, ur = function(t) {
    return p.forwardRef(function(r, n) {
      var o = p.useContext(kn);
      return t(r, o, n);
    });
  }, Be = p.createContext({}), fr = {}.hasOwnProperty, Xt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ts = function(t, r) {
    var n = {};
    for (var o in r) fr.call(r, o) && (n[o] = r[o]);
    return n[Xt] = t, n;
  }, rs = function(t) {
    var r = t.cache, n = t.serialized, o = t.isStringTag;
    return cr(r, n, o), Pn(function() {
      return lr(r, n, o);
    }), null;
  }, ns = ur(function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[Xt], s = [
      n
    ], i = "";
    typeof e.className == "string" ? i = $n(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
    var a = We(s, void 0, p.useContext(Be));
    i += t.key + "-" + a.name;
    var c = {};
    for (var l in e) fr.call(e, l) && l !== "css" && l !== Xt && (c[l] = e[l]);
    return c.className = i, r && (c.ref = r), p.createElement(p.Fragment, null, p.createElement(rs, {
      cache: t,
      serialized: a,
      isStringTag: typeof o == "string"
    }), p.createElement(o, c));
  }), os = ns, Hr = function(t, r) {
    var n = arguments;
    if (r == null || !fr.call(r, "css")) return p.createElement.apply(void 0, n);
    var o = n.length, s = new Array(o);
    s[0] = os, s[1] = ts(t, r);
    for (var i = 2; i < o; i++) s[i] = n[i];
    return p.createElement.apply(null, s);
  };
  (function(e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}));
  })(Hr || (Hr = {}));
  var ss = ur(function(e, t) {
    var r = e.styles, n = We([
      r
    ], void 0, p.useContext(Be)), o = p.useRef();
    return Ur(function() {
      var s = t.key + "-global", i = new t.sheet.constructor({
        key: s,
        nonce: t.sheet.nonce,
        container: t.sheet.container,
        speedy: t.sheet.isSpeedy
      }), a = false, c = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
      return t.sheet.tags.length && (i.before = t.sheet.tags[0]), c !== null && (a = true, c.setAttribute("data-emotion", s), i.hydrate([
        c
      ])), o.current = [
        i,
        a
      ], function() {
        i.flush();
      };
    }, [
      t
    ]), Ur(function() {
      var s = o.current, i = s[0], a = s[1];
      if (a) {
        s[1] = false;
        return;
      }
      if (n.next !== void 0 && lr(t, n.next, true), i.tags.length) {
        var c = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = c, i.flush();
      }
      t.insert("", n, i, false);
    }, [
      t,
      n.name
    ]), null;
  });
  is = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return We(t);
  };
  _c = function() {
    var e = is.apply(void 0, arguments), t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var as = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cs = gn(function(e) {
    return as.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }), ls = cs, us = function(t) {
    return t !== "theme";
  }, Yr = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? ls : us;
  }, Qr = function(t, r, n) {
    var o;
    if (r) {
      var s = r.shouldForwardProp;
      o = t.__emotion_forwardProp && s ? function(i) {
        return t.__emotion_forwardProp(i) && s(i);
      } : s;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  }, fs = function(t) {
    var r = t.cache, n = t.serialized, o = t.isStringTag;
    return cr(r, n, o), Pn(function() {
      return lr(r, n, o);
    }), null;
  }, ds = function e(t, r) {
    var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, i;
    r !== void 0 && (s = r.label, i = r.target);
    var a = Qr(t, r, n), c = a || Yr(o), l = !c("as");
    return function() {
      var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (s !== void 0 && d.push("label:" + s + ";"), u[0] == null || u[0].raw === void 0) d.push.apply(d, u);
      else {
        var f = u[0];
        d.push(f[0]);
        for (var h = u.length, m = 1; m < h; m++) d.push(u[m], f[m]);
      }
      var y = ur(function(v, C, k) {
        var w = l && v.as || o, A = "", E = [], T = v;
        if (v.theme == null) {
          T = {};
          for (var x in v) T[x] = v[x];
          T.theme = p.useContext(Be);
        }
        typeof v.className == "string" ? A = $n(C.registered, E, v.className) : v.className != null && (A = v.className + " ");
        var b = We(d.concat(E), C.registered, T);
        A += C.key + "-" + b.name, i !== void 0 && (A += " " + i);
        var S = l && a === void 0 ? Yr(w) : c, $ = {};
        for (var P in v) l && P === "as" || S(P) && ($[P] = v[P]);
        return $.className = A, k && ($.ref = k), p.createElement(p.Fragment, null, p.createElement(fs, {
          cache: C,
          serialized: b,
          isStringTag: typeof w == "string"
        }), p.createElement(w, $));
      });
      return y.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = a, Object.defineProperty(y, "toString", {
        value: function() {
          return "." + i;
        }
      }), y.withComponent = function(v, C) {
        var k = e(v, Yt({}, r, C, {
          shouldForwardProp: Qr(y, C, true)
        }));
        return k.apply(void 0, d);
      }, y;
    };
  }, ms = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ], Jt = ds.bind(null);
  ms.forEach(function(e) {
    Jt[e] = Jt(e);
  });
  var An = {
    exports: {}
  }, pt = {};
  var ps = /* @__PURE__ */ Symbol.for("react.transitional.element"), hs = /* @__PURE__ */ Symbol.for("react.fragment");
  function _n(e, t, r) {
    var n = null;
    if (r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), "key" in t) {
      r = {};
      for (var o in t) o !== "key" && (r[o] = t[o]);
    } else r = t;
    return t = r.ref, {
      $$typeof: ps,
      type: e,
      key: n,
      ref: t !== void 0 ? t : null,
      props: r
    };
  }
  pt.Fragment = hs;
  pt.jsx = _n;
  pt.jsxs = _n;
  An.exports = pt;
  var N = An.exports;
  const zt = /* @__PURE__ */ new Map(), ys = (e, t) => {
    const r = Sn(e);
    return r.sheet = new t({
      key: r.key,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy,
      prepend: r.sheet.prepend,
      insertionPoint: r.sheet.insertionPoint
    }), r;
  };
  let me;
  if (typeof document == "object" && (me = document.querySelector('[name="emotion-insertion-point"]'), !me)) {
    me = document.createElement("meta"), me.setAttribute("name", "emotion-insertion-point"), me.setAttribute("content", "");
    const e = document.querySelector("head");
    e && e.prepend(me);
  }
  function gs(e, t) {
    if (e || t) {
      class r extends un {
        insert(s, i) {
          return this.key && this.key.endsWith("global") && (this.before = me), super.insert(s, i);
        }
      }
      const n = ys({
        key: "css",
        insertionPoint: e ? me : void 0
      }, r);
      if (t) {
        const o = n.insert;
        n.insert = (...s) => (s[1].styles.match(/^@layer\s+[^{]*$/) || (s[1].styles = `@layer mui {${s[1].styles}}`), o(...s));
      }
      return n;
    }
  }
  Rc = function(e) {
    const { injectFirst: t, enableCssLayer: r, children: n } = e, o = p.useMemo(() => {
      const s = `${t}-${r}`;
      if (typeof document == "object" && zt.has(s)) return zt.get(s);
      const i = gs(t, r);
      return zt.set(s, i), i;
    }, [
      t,
      r
    ]);
    return o ? N.jsx(es, {
      value: o,
      children: n
    }) : n;
  };
  function bs(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function Rn(e) {
    const { styles: t, defaultTheme: r = {} } = e, n = typeof t == "function" ? (o) => t(bs(o) ? r : o) : t;
    return N.jsx(ss, {
      styles: n
    });
  }
  function Mn(e, t) {
    return Jt(e, t);
  }
  function Ss(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  }
  const qr = [];
  function he(e) {
    return qr[0] = e, We(qr);
  }
  var On = {
    exports: {}
  }, O = {};
  var dr = /* @__PURE__ */ Symbol.for("react.transitional.element"), mr = /* @__PURE__ */ Symbol.for("react.portal"), ht = /* @__PURE__ */ Symbol.for("react.fragment"), yt = /* @__PURE__ */ Symbol.for("react.strict_mode"), gt = /* @__PURE__ */ Symbol.for("react.profiler"), bt = /* @__PURE__ */ Symbol.for("react.consumer"), St = /* @__PURE__ */ Symbol.for("react.context"), xt = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), Ct = /* @__PURE__ */ Symbol.for("react.suspense_list"), wt = /* @__PURE__ */ Symbol.for("react.memo"), $t = /* @__PURE__ */ Symbol.for("react.lazy"), xs = /* @__PURE__ */ Symbol.for("react.view_transition"), vs = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ee(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case dr:
          switch (e = e.type, e) {
            case ht:
            case gt:
            case yt:
            case vt:
            case Ct:
            case xs:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case St:
                case xt:
                case $t:
                case wt:
                  return e;
                case bt:
                  return e;
                default:
                  return t;
              }
          }
        case mr:
          return t;
      }
    }
  }
  O.ContextConsumer = bt;
  O.ContextProvider = St;
  O.Element = dr;
  O.ForwardRef = xt;
  O.Fragment = ht;
  O.Lazy = $t;
  O.Memo = wt;
  O.Portal = mr;
  O.Profiler = gt;
  O.StrictMode = yt;
  O.Suspense = vt;
  O.SuspenseList = Ct;
  O.isContextConsumer = function(e) {
    return ee(e) === bt;
  };
  O.isContextProvider = function(e) {
    return ee(e) === St;
  };
  O.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === dr;
  };
  O.isForwardRef = function(e) {
    return ee(e) === xt;
  };
  O.isFragment = function(e) {
    return ee(e) === ht;
  };
  O.isLazy = function(e) {
    return ee(e) === $t;
  };
  O.isMemo = function(e) {
    return ee(e) === wt;
  };
  O.isPortal = function(e) {
    return ee(e) === mr;
  };
  O.isProfiler = function(e) {
    return ee(e) === gt;
  };
  O.isStrictMode = function(e) {
    return ee(e) === yt;
  };
  O.isSuspense = function(e) {
    return ee(e) === vt;
  };
  O.isSuspenseList = function(e) {
    return ee(e) === Ct;
  };
  O.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ht || e === gt || e === yt || e === vt || e === Ct || typeof e == "object" && e !== null && (e.$$typeof === $t || e.$$typeof === wt || e.$$typeof === St || e.$$typeof === bt || e.$$typeof === xt || e.$$typeof === vs || e.getModuleId !== void 0);
  };
  O.typeOf = ee;
  On.exports = O;
  var jn = On.exports;
  function pe(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function Ln(e) {
    if (p.isValidElement(e) || jn.isValidElementType(e) || !pe(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = Ln(e[r]);
    }), t;
  }
  function le(e, t, r = {
    clone: true
  }) {
    const n = r.clone ? {
      ...e
    } : e;
    return pe(e) && pe(t) && Object.keys(t).forEach((o) => {
      p.isValidElement(t[o]) || jn.isValidElementType(t[o]) ? n[o] = t[o] : pe(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && pe(e[o]) ? n[o] = le(e[o], t[o], r) : r.clone ? n[o] = pe(t[o]) ? Ln(t[o]) : t[o] : n[o] = t[o];
    }), n;
  }
  const Cs = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
      ...r,
      [n.key]: n.val
    }), {});
  };
  ws = function(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: n = 5, ...o } = e, s = Cs(t), i = Object.keys(s);
    function a(f) {
      return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r})`;
    }
    function c(f) {
      return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - n / 100}${r})`;
    }
    function l(f, h) {
      const m = i.indexOf(h);
      return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r}) and (max-width:${(m !== -1 && typeof t[i[m]] == "number" ? t[i[m]] : h) - n / 100}${r})`;
    }
    function u(f) {
      return i.indexOf(f) + 1 < i.length ? l(f, i[i.indexOf(f) + 1]) : a(f);
    }
    function d(f) {
      const h = i.indexOf(f);
      return h === 0 ? a(i[1]) : h === i.length - 1 ? c(i[h]) : l(f, i[i.indexOf(f) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: s,
      up: a,
      down: c,
      between: l,
      only: u,
      not: d,
      unit: r,
      ...o
    };
  };
  function Xr(e, t) {
    if (!e.containerQueries) return t;
    const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
      var _a2, _b;
      const s = /min-width:\s*([0-9.]+)/;
      return +(((_a2 = n.match(s)) == null ? void 0 : _a2[1]) || 0) - +(((_b = o.match(s)) == null ? void 0 : _b[1]) || 0);
    });
    return r.length ? r.reduce((n, o) => {
      const s = t[o];
      return delete n[o], n[o] = s, n;
    }, {
      ...t
    }) : t;
  }
  function $s(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function Ts(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
    return e.containerQueries(o).up(s);
  }
  Es = function(e) {
    const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
    function r(s, i) {
      s.up = (...a) => t(e.breakpoints.up(...a), i), s.down = (...a) => t(e.breakpoints.down(...a), i), s.between = (...a) => t(e.breakpoints.between(...a), i), s.only = (...a) => t(e.breakpoints.only(...a), i), s.not = (...a) => {
        const c = t(e.breakpoints.not(...a), i);
        return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
      };
    }
    const n = {}, o = (s) => (r(n, s), n);
    return r(o), {
      ...e,
      containerQueries: o
    };
  };
  Ps = {
    borderRadius: 4
  };
  Mc = {};
  function we(e, t) {
    return t ? le(e, t, {
      clone: false
    }) : e;
  }
  const Tt = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Zt = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (e) => `@media (min-width:${Tt[e]}px)`
  }, ks = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : Tt[t] || t;
        return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
      }
    })
  };
  ne = function(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const s = n.breakpoints || Zt;
      return t.reduce((i, a, c) => (i[s.up(s.keys[c])] = r(t[c]), i), {});
    }
    if (typeof t == "object") {
      const s = n.breakpoints || Zt;
      return Object.keys(t).reduce((i, a) => {
        if ($s(s.keys, a)) {
          const c = Ts(n.containerQueries ? n : ks, a);
          c && (i[c] = r(t[a], a));
        } else if (Object.keys(s.values || Tt).includes(a)) {
          const c = s.up(a);
          i[c] = r(t[a], a);
        } else {
          const c = a;
          i[c] = t[c];
        }
        return i;
      }, {});
    }
    return r(t);
  };
  Oc = function(e) {
    const t = (r) => {
      const n = r.theme || {}, o = e(r), s = n.breakpoints || Zt, i = s.keys.reduce((a, c) => (r[c] && (a = a || {}, a[s.up(c)] = e({
        theme: n,
        ...r[c]
      })), a), null);
      return we(o, i);
    };
    return t.propTypes = {}, t.filterProps = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      ...e.filterProps
    ], t;
  };
  function In(e = {}) {
    var _a2;
    return ((_a2 = e.keys) == null ? void 0 : _a2.reduce((r, n) => {
      const o = e.up(n);
      return r[o] = {}, r;
    }, {})) || {};
  }
  function er(e, t) {
    return e.reduce((r, n) => {
      const o = r[n];
      return (!o || Object.keys(o).length === 0) && delete r[n], r;
    }, t);
  }
  As = function(e, ...t) {
    const r = In(e), n = [
      r,
      ...t
    ].reduce((o, s) => le(o, s), {});
    return er(Object.keys(r), n);
  };
  function _s(e, t) {
    if (typeof e != "object") return {};
    const r = {}, n = Object.keys(t);
    return Array.isArray(e) ? n.forEach((o, s) => {
      s < e.length && (r[o] = true);
    }) : n.forEach((o) => {
      e[o] != null && (r[o] = true);
    }), r;
  }
  Dt = function({ values: e, breakpoints: t, base: r }) {
    const n = r || _s(e, t), o = Object.keys(n);
    if (o.length === 0) return e;
    let s;
    return o.reduce((i, a, c) => (Array.isArray(e) ? (i[a] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
  };
  function Et(e) {
    if (typeof e != "string") throw new Error(Xe(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  Pt = function(e, t, r = true) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
      if (n != null) return n;
    }
    return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
  };
  Ze = function(e, t, r, n = r) {
    let o;
    return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Pt(e, r) || n, t && (o = t(o, n, e)), o;
  };
  g = function(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e, s = (i) => {
      if (i[t] == null) return null;
      const a = i[t], c = i.theme, l = Pt(c, n) || {};
      return ne(i, a, (d) => {
        let f = Ze(l, o, d);
        return d === f && typeof d == "string" && (f = Ze(l, o, `${t}${d === "default" ? "" : Et(d)}`, d)), r === false ? f : {
          [r]: f
        };
      });
    };
    return s.propTypes = {}, s.filterProps = [
      t
    ], s;
  };
  function Rs(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  let Ms, Os, Jr, js, Nn;
  Ms = {
    m: "margin",
    p: "padding"
  };
  Os = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: [
      "Left",
      "Right"
    ],
    y: [
      "Top",
      "Bottom"
    ]
  };
  Jr = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  js = Rs((e) => {
    if (e.length > 2) if (Jr[e]) e = Jr[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), n = Ms[t], o = Os[r] || "";
    return Array.isArray(o) ? o.map((s) => n + s) : [
      n + o
    ];
  });
  pr = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd"
  ];
  hr = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd"
  ];
  Nn = [
    ...pr,
    ...hr
  ];
  Fe = function(e, t, r, n) {
    const o = Pt(e, t, true) ?? r;
    return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : typeof o == "string" ? `calc(${s} * ${o})` : o * s : Array.isArray(o) ? (s) => {
      if (typeof s == "string") return s;
      const i = Math.abs(s), a = o[i];
      return s >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof o == "function" ? o : () => {
    };
  };
  yr = function(e) {
    return Fe(e, "spacing", 8);
  };
  be = function(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  };
  Ls = function(e, t) {
    return (r) => e.reduce((n, o) => (n[o] = be(t, r), n), {});
  };
  function Is(e, t, r, n) {
    if (!t.includes(r)) return null;
    const o = js(r), s = Ls(o, n), i = e[r];
    return ne(e, i, s);
  }
  function gr(e, t) {
    const r = yr(e.theme);
    return Object.keys(e).map((n) => Is(e, t, n, r)).reduce(we, {});
  }
  j = function(e) {
    return gr(e, pr);
  };
  j.propTypes = {};
  j.filterProps = pr;
  L = function(e) {
    return gr(e, hr);
  };
  L.propTypes = {};
  L.filterProps = hr;
  kt = function(e) {
    return gr(e, Nn);
  };
  kt.propTypes = {};
  kt.filterProps = Nn;
  Ns = function(e = 8, t = yr({
    spacing: e
  })) {
    if (e.mui) return e;
    const r = (...n) => (n.length === 0 ? [
      1
    ] : n).map((s) => {
      const i = t(s);
      return typeof i == "number" ? `${i}px` : i;
    }).join(" ");
    return r.mui = true, r;
  };
  ye = function(...e) {
    const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
      n[s] = o;
    }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? we(o, t[s](n)) : o, {});
    return r.propTypes = {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
  };
  Z = function(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  };
  function te(e, t) {
    return g({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  Gs = te("border", Z);
  Ws = te("borderTop", Z);
  Bs = te("borderRight", Z);
  Fs = te("borderBottom", Z);
  zs = te("borderLeft", Z);
  Ds = te("borderColor");
  Ks = te("borderTopColor");
  Vs = te("borderRightColor");
  Us = te("borderBottomColor");
  Hs = te("borderLeftColor");
  Ys = te("outline", Z);
  Qs = te("outlineColor");
  At = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Fe(e.theme, "shape.borderRadius", 4), r = (n) => ({
        borderRadius: be(t, n)
      });
      return ne(e, e.borderRadius, r);
    }
    return null;
  };
  At.propTypes = {};
  At.filterProps = [
    "borderRadius"
  ];
  Gn = ye(Gs, Ws, Bs, Fs, zs, Ds, Ks, Vs, Us, Hs, At, Ys, Qs);
  _t = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = Fe(e.theme, "spacing", 8), r = (n) => ({
        gap: be(t, n)
      });
      return ne(e, e.gap, r);
    }
    return null;
  };
  _t.propTypes = {};
  _t.filterProps = [
    "gap"
  ];
  Rt = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Fe(e.theme, "spacing", 8), r = (n) => ({
        columnGap: be(t, n)
      });
      return ne(e, e.columnGap, r);
    }
    return null;
  };
  Rt.propTypes = {};
  Rt.filterProps = [
    "columnGap"
  ];
  Mt = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Fe(e.theme, "spacing", 8), r = (n) => ({
        rowGap: be(t, n)
      });
      return ne(e, e.rowGap, r);
    }
    return null;
  };
  Mt.propTypes = {};
  Mt.filterProps = [
    "rowGap"
  ];
  qs = g({
    prop: "gridColumn"
  });
  Xs = g({
    prop: "gridRow"
  });
  Js = g({
    prop: "gridAutoFlow"
  });
  Zs = g({
    prop: "gridAutoColumns"
  });
  ei = g({
    prop: "gridAutoRows"
  });
  ti = g({
    prop: "gridTemplateColumns"
  });
  ri = g({
    prop: "gridTemplateRows"
  });
  ni = g({
    prop: "gridTemplateAreas"
  });
  oi = g({
    prop: "gridArea"
  });
  Wn = ye(_t, Rt, Mt, qs, Xs, Js, Zs, ei, ti, ri, ni, oi);
  $e = function(e, t) {
    return t === "grey" ? t : e;
  };
  si = g({
    prop: "color",
    themeKey: "palette",
    transform: $e
  });
  ii = g({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: $e
  });
  ai = g({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: $e
  });
  Bn = ye(si, ii, ai);
  Q = function(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  };
  ci = g({
    prop: "width",
    transform: Q
  });
  br = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var _a2, _b, _c2, _d, _e;
        const n = ((_c2 = (_b = (_a2 = e.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c2[r]) || Tt[r];
        return n ? ((_e = (_d = e.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? {
          maxWidth: `${n}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: n
        } : {
          maxWidth: Q(r)
        };
      };
      return ne(e, e.maxWidth, t);
    }
    return null;
  };
  br.filterProps = [
    "maxWidth"
  ];
  li = g({
    prop: "minWidth",
    transform: Q
  });
  ui = g({
    prop: "height",
    transform: Q
  });
  fi = g({
    prop: "maxHeight",
    transform: Q
  });
  di = g({
    prop: "minHeight",
    transform: Q
  });
  jc = g({
    prop: "size",
    cssProperty: "width",
    transform: Q
  });
  Lc = g({
    prop: "size",
    cssProperty: "height",
    transform: Q
  });
  mi = g({
    prop: "boxSizing"
  });
  Fn = ye(ci, br, li, ui, fi, di, mi);
  Sr = {
    border: {
      themeKey: "borders",
      transform: Z
    },
    borderTop: {
      themeKey: "borders",
      transform: Z
    },
    borderRight: {
      themeKey: "borders",
      transform: Z
    },
    borderBottom: {
      themeKey: "borders",
      transform: Z
    },
    borderLeft: {
      themeKey: "borders",
      transform: Z
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: Z
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: At
    },
    color: {
      themeKey: "palette",
      transform: $e
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: $e
    },
    backgroundColor: {
      themeKey: "palette",
      transform: $e
    },
    p: {
      style: L
    },
    pt: {
      style: L
    },
    pr: {
      style: L
    },
    pb: {
      style: L
    },
    pl: {
      style: L
    },
    px: {
      style: L
    },
    py: {
      style: L
    },
    padding: {
      style: L
    },
    paddingTop: {
      style: L
    },
    paddingRight: {
      style: L
    },
    paddingBottom: {
      style: L
    },
    paddingLeft: {
      style: L
    },
    paddingX: {
      style: L
    },
    paddingY: {
      style: L
    },
    paddingInline: {
      style: L
    },
    paddingInlineStart: {
      style: L
    },
    paddingInlineEnd: {
      style: L
    },
    paddingBlock: {
      style: L
    },
    paddingBlockStart: {
      style: L
    },
    paddingBlockEnd: {
      style: L
    },
    m: {
      style: j
    },
    mt: {
      style: j
    },
    mr: {
      style: j
    },
    mb: {
      style: j
    },
    ml: {
      style: j
    },
    mx: {
      style: j
    },
    my: {
      style: j
    },
    margin: {
      style: j
    },
    marginTop: {
      style: j
    },
    marginRight: {
      style: j
    },
    marginBottom: {
      style: j
    },
    marginLeft: {
      style: j
    },
    marginX: {
      style: j
    },
    marginY: {
      style: j
    },
    marginInline: {
      style: j
    },
    marginInlineStart: {
      style: j
    },
    marginInlineEnd: {
      style: j
    },
    marginBlock: {
      style: j
    },
    marginBlockStart: {
      style: j
    },
    marginBlockEnd: {
      style: j
    },
    displayPrint: {
      cssProperty: false,
      transform: (e) => ({
        "@media print": {
          display: e
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: _t
    },
    rowGap: {
      style: Mt
    },
    columnGap: {
      style: Rt
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: Q
    },
    maxWidth: {
      style: br
    },
    minWidth: {
      transform: Q
    },
    height: {
      transform: Q
    },
    maxHeight: {
      transform: Q
    },
    minHeight: {
      transform: Q
    },
    boxSizing: {},
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function pi(...e) {
    const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
    return e.every((n) => r.size === Object.keys(n).length);
  }
  function hi(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  yi = function() {
    function e(r, n, o, s) {
      const i = {
        [r]: n,
        theme: o
      }, a = s[r];
      if (!a) return {
        [r]: n
      };
      const { cssProperty: c = r, themeKey: l, transform: u, style: d } = a;
      if (n == null) return null;
      if (l === "typography" && n === "inherit") return {
        [r]: n
      };
      const f = Pt(o, l) || {};
      return d ? d(i) : ne(i, n, (m) => {
        let y = Ze(f, u, m);
        return m === y && typeof m == "string" && (y = Ze(f, u, `${r}${m === "default" ? "" : Et(m)}`, m)), c === false ? y : {
          [c]: y
        };
      });
    }
    function t(r) {
      const { sx: n, theme: o = {}, nested: s } = r || {};
      if (!n) return null;
      const i = o.unstable_sxConfig ?? Sr;
      function a(c) {
        let l = c;
        if (typeof c == "function") l = c(o);
        else if (typeof c != "object") return c;
        if (!l) return null;
        const u = In(o.breakpoints), d = Object.keys(u);
        let f = u;
        return Object.keys(l).forEach((h) => {
          const m = hi(l[h], o);
          if (m != null) if (typeof m == "object") if (i[h]) f = we(f, e(h, m, o, i));
          else {
            const y = ne({
              theme: o
            }, m, (v) => ({
              [h]: v
            }));
            pi(y, m) ? f[h] = t({
              sx: m,
              theme: o,
              nested: true
            }) : f = we(f, y);
          }
          else f = we(f, e(h, m, o, i));
        }), !s && o.modularCssLayers ? {
          "@layer sx": Xr(o, er(d, f))
        } : Xr(o, er(d, f));
      }
      return Array.isArray(n) ? n.map(a) : a(n);
    }
    return t;
  };
  Ne = yi();
  Ne.filterProps = [
    "sx"
  ];
  function gi(e, t) {
    var _a2;
    const r = this;
    if (r.vars) {
      if (!((_a2 = r.colorSchemes) == null ? void 0 : _a2[e]) || typeof r.getColorSchemeSelector != "function") return {};
      let n = r.getColorSchemeSelector(e);
      return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
        [n]: t
      });
    }
    return r.palette.mode === e ? t : {};
  }
  ze = function(e = {}, ...t) {
    const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: s = {}, ...i } = e, a = ws(r), c = Ns(o);
    let l = le({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...n
      },
      spacing: c,
      shape: {
        ...Ps,
        ...s
      }
    }, i);
    return l = Es(l), l.applyStyles = gi, l = t.reduce((u, d) => le(u, d), l), l.unstable_sxConfig = {
      ...Sr,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(d) {
      return Ne({
        sx: d,
        theme: this
      });
    }, l;
  };
  function bi(e) {
    return Object.keys(e).length === 0;
  }
  Ot = function(e = null) {
    const t = p.useContext(Be);
    return !t || bi(t) ? e : t;
  };
  const Si = ze();
  jt = function(e = Si) {
    return Ot(e);
  };
  function Kt(e) {
    const t = he(e);
    return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
  }
  xi = function({ styles: e, themeId: t, defaultTheme: r = {} }) {
    const n = jt(r), o = t && n[t] || n;
    let s = typeof e == "function" ? e(o) : e;
    return o.modularCssLayers && (Array.isArray(s) ? s = s.map((i) => Kt(typeof i == "function" ? i(o) : i)) : s = Kt(s)), N.jsx(Rn, {
      styles: s
    });
  };
  let vi, Ci, wi, $i, Ti, Ei, ta;
  vi = g({
    prop: "displayPrint",
    cssProperty: false,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  });
  Ci = g({
    prop: "display"
  });
  wi = g({
    prop: "overflow"
  });
  $i = g({
    prop: "textOverflow"
  });
  Ti = g({
    prop: "visibility"
  });
  Ei = g({
    prop: "whiteSpace"
  });
  zn = ye(vi, Ci, wi, $i, Ti, Ei);
  Pi = g({
    prop: "flexBasis"
  });
  ki = g({
    prop: "flexDirection"
  });
  Ai = g({
    prop: "flexWrap"
  });
  _i = g({
    prop: "justifyContent"
  });
  Ri = g({
    prop: "alignItems"
  });
  Mi = g({
    prop: "alignContent"
  });
  Oi = g({
    prop: "order"
  });
  ji = g({
    prop: "flex"
  });
  Li = g({
    prop: "flexGrow"
  });
  Ii = g({
    prop: "flexShrink"
  });
  Ni = g({
    prop: "alignSelf"
  });
  Gi = g({
    prop: "justifyItems"
  });
  Wi = g({
    prop: "justifySelf"
  });
  Dn = ye(Pi, ki, Ai, _i, Ri, Mi, Oi, ji, Li, Ii, Ni, Gi, Wi);
  Bi = g({
    prop: "position"
  });
  Fi = g({
    prop: "zIndex",
    themeKey: "zIndex"
  });
  zi = g({
    prop: "top"
  });
  Di = g({
    prop: "right"
  });
  Ki = g({
    prop: "bottom"
  });
  Vi = g({
    prop: "left"
  });
  Kn = ye(Bi, Fi, zi, Di, Ki, Vi);
  Vn = g({
    prop: "boxShadow",
    themeKey: "shadows"
  });
  Ui = g({
    prop: "fontFamily",
    themeKey: "typography"
  });
  Hi = g({
    prop: "fontSize",
    themeKey: "typography"
  });
  Yi = g({
    prop: "fontStyle",
    themeKey: "typography"
  });
  Qi = g({
    prop: "fontWeight",
    themeKey: "typography"
  });
  qi = g({
    prop: "letterSpacing"
  });
  Xi = g({
    prop: "textTransform"
  });
  Ji = g({
    prop: "lineHeight"
  });
  Zi = g({
    prop: "textAlign"
  });
  ea = g({
    prop: "typography",
    cssProperty: false,
    themeKey: "typography"
  });
  Un = ye(ea, Ui, Hi, Yi, Qi, qi, Ji, Zi, Xi);
  ta = (e) => {
    var _a2;
    const t = {
      systemProps: {},
      otherProps: {}
    }, r = ((_a2 = e == null ? void 0 : e.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Sr;
    return Object.keys(e).forEach((n) => {
      r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
    }), t;
  };
  xr = function(e) {
    const { sx: t, ...r } = e, { systemProps: n, otherProps: o } = ta(r);
    let s;
    return Array.isArray(t) ? s = [
      n,
      ...t
    ] : typeof t == "function" ? s = (...i) => {
      const a = t(...i);
      return pe(a) ? {
        ...n,
        ...a
      } : n;
    } : s = {
      ...n,
      ...t
    }, {
      ...o,
      sx: s
    };
  };
  const Zr = {
    borders: Gn.filterProps,
    display: zn.filterProps,
    flexbox: Dn.filterProps,
    grid: Wn.filterProps,
    positions: Kn.filterProps,
    palette: Bn.filterProps,
    shadows: Vn.filterProps,
    sizing: Fn.filterProps,
    spacing: kt.filterProps,
    typography: Un.filterProps
  }, ra = {
    borders: Gn,
    display: zn,
    flexbox: Dn,
    grid: Wn,
    positions: Kn,
    palette: Bn,
    shadows: Vn,
    sizing: Fn,
    spacing: kt,
    typography: Un
  }, na = Object.keys(Zr).reduce((e, t) => (Zr[t].forEach((r) => {
    e[r] = ra[t];
  }), e), {});
  Ic = function(e, t, r) {
    const n = {
      [e]: t,
      theme: r
    }, o = na[e];
    return o ? o(n) : {
      [e]: t
    };
  };
  const en = (e) => e, oa = () => {
    let e = en;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = en;
      }
    };
  }, Hn = oa();
  function Yn(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (r = Yn(e[t])) && (n && (n += " "), n += r);
    } else for (r in e) e[r] && (n && (n += " "), n += r);
    return n;
  }
  function Lt() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Yn(e)) && (n && (n += " "), n += t);
    return n;
  }
  sa = function(e = {}) {
    const { themeId: t, defaultTheme: r, defaultClassName: n = "MuiBox-root", generateClassName: o } = e, s = Mn("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Ne);
    return p.forwardRef(function(c, l) {
      const u = jt(r), { className: d, component: f = "div", ...h } = xr(c);
      return N.jsx(s, {
        as: f,
        ref: l,
        className: Lt(d, o ? o(n) : n),
        theme: t && u[t] || u,
        ...h
      });
    });
  };
  const ia = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  function Se(e, t, r = "Mui") {
    const n = ia[t];
    return n ? `${r}-${n}` : `${Hn.generate(e)}-${t}`;
  }
  function It(e, t, r = "Mui") {
    const n = {};
    return t.forEach((o) => {
      n[o] = Se(e, o, r);
    }), n;
  }
  let aa;
  aa = It("MuiBox", [
    "root"
  ]);
  Nc = sa({
    defaultClassName: aa.root,
    generateClassName: Hn.generate
  });
  function Qn(e) {
    const { variants: t, ...r } = e, n = {
      variants: t,
      style: he(r),
      isProcessed: true
    };
    return n.style === r || t && t.forEach((o) => {
      typeof o.style != "function" && (o.style = he(o.style));
    }), n;
  }
  ca = ze();
  Vt = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  function ge(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
  }
  function la(e) {
    return e ? (t, r) => r[e] : null;
  }
  function ua(e, t, r) {
    e.theme = ma(e.theme) ? r : e.theme[t] || e.theme;
  }
  function Qe(e, t, r) {
    const n = typeof t == "function" ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((o) => Qe(e, o, r));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
      let o;
      if (n.isProcessed) o = r ? ge(n.style, r) : n.style;
      else {
        const { variants: s, ...i } = n;
        o = r ? ge(he(i), r) : i;
      }
      return qn(e, n.variants, [
        o
      ], r);
    }
    return (n == null ? void 0 : n.isProcessed) ? r ? ge(he(n.style), r) : n.style : r ? ge(he(n), r) : n;
  }
  function qn(e, t, r = [], n = void 0) {
    var _a2;
    let o;
    e: for (let s = 0; s < t.length; s += 1) {
      const i = t[s];
      if (typeof i.props == "function") {
        if (o ?? (o = {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }), !i.props(o)) continue;
      } else for (const a in i.props) if (e[a] !== i.props[a] && ((_a2 = e.ownerState) == null ? void 0 : _a2[a]) !== i.props[a]) continue e;
      typeof i.style == "function" ? (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), r.push(n ? ge(he(i.style(o)), n) : i.style(o))) : r.push(n ? ge(he(i.style), n) : i.style);
    }
    return r;
  }
  fa = function(e = {}) {
    const { themeId: t, defaultTheme: r = ca, rootShouldForwardProp: n = Vt, slotShouldForwardProp: o = Vt } = e;
    function s(a) {
      ua(a, t, r);
    }
    return (a, c = {}) => {
      Ss(a, (T) => T.filter((x) => x !== Ne));
      const { name: l, slot: u, skipVariantsResolver: d, skipSx: f, overridesResolver: h = la(ha(u)), ...m } = c, y = l && l.startsWith("Mui") || u ? "components" : "custom", v = d !== void 0 ? d : u && u !== "Root" && u !== "root" || false, C = f || false;
      let k = Vt;
      u === "Root" || u === "root" ? k = n : u ? k = o : pa(a) && (k = void 0);
      const w = Mn(a, {
        shouldForwardProp: k,
        label: da(),
        ...m
      }), A = (T) => {
        if (T.__emotion_real === T) return T;
        if (typeof T == "function") return function(b) {
          return Qe(b, T, b.theme.modularCssLayers ? y : void 0);
        };
        if (pe(T)) {
          const x = Qn(T);
          return function(S) {
            return x.variants ? Qe(S, x, S.theme.modularCssLayers ? y : void 0) : S.theme.modularCssLayers ? ge(x.style, y) : x.style;
          };
        }
        return T;
      }, E = (...T) => {
        const x = [], b = T.map(A), S = [];
        if (x.push(s), l && h && S.push(function(D) {
          var _a2, _b;
          const F = (_b = (_a2 = D.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b.styleOverrides;
          if (!F) return null;
          const xe = {};
          for (const fe in F) xe[fe] = Qe(D, F[fe], D.theme.modularCssLayers ? "theme" : void 0);
          return h(D, xe);
        }), l && !v && S.push(function(D) {
          var _a2, _b, _c2;
          const F = (_c2 = (_b = (_a2 = D.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[l]) == null ? void 0 : _c2.variants;
          return F ? qn(D, F, [], D.theme.modularCssLayers ? "theme" : void 0) : null;
        }), C || S.push(Ne), Array.isArray(b[0])) {
          const K = b.shift(), D = new Array(x.length).fill(""), ue = new Array(S.length).fill("");
          let F;
          F = [
            ...D,
            ...K,
            ...ue
          ], F.raw = [
            ...D,
            ...K.raw,
            ...ue
          ], x.unshift(F);
        }
        const $ = [
          ...x,
          ...b,
          ...S
        ], P = w(...$);
        return a.muiName && (P.muiName = a.muiName), P;
      };
      return w.withConfig && (E.withConfig = w.withConfig), E;
    };
  };
  function da(e, t) {
    return void 0;
  }
  function ma(e) {
    for (const t in e) return false;
    return true;
  }
  function pa(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function ha(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
  vr = fa();
  function Xn(e, t) {
    const r = {
      ...t
    };
    for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots") r[o] = {
        ...e[o],
        ...r[o]
      };
      else if (o === "componentsProps" || o === "slotProps") {
        const s = e[o], i = t[o];
        if (!i) r[o] = s || {};
        else if (!s) r[o] = i;
        else {
          r[o] = {
            ...i
          };
          for (const a in s) if (Object.prototype.hasOwnProperty.call(s, a)) {
            const c = a;
            r[o][c] = Xn(s[c], i[c]);
          }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
    return r;
  }
  Jn = function(e) {
    const { theme: t, name: r, props: n } = e;
    return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Xn(t.components[r].defaultProps, n);
  };
  Cr = function({ props: e, name: t, defaultTheme: r, themeId: n }) {
    let o = jt(r);
    return n && (o = o[n] || o), Jn({
      theme: o,
      name: t,
      props: e
    });
  };
  const wr = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
  function ya(e, t, r, n, o) {
    const [s, i] = p.useState(() => o && r ? r(e).matches : n ? n(e).matches : t);
    return wr(() => {
      if (!r) return;
      const a = r(e), c = () => {
        i(a.matches);
      };
      return c(), a.addEventListener("change", c), () => {
        a.removeEventListener("change", c);
      };
    }, [
      e,
      r
    ]), s;
  }
  const ga = {
    ...qe
  }, Zn = ga.useSyncExternalStore;
  function ba(e, t, r, n, o) {
    const s = p.useCallback(() => t, [
      t
    ]), i = p.useMemo(() => {
      if (o && r) return () => r(e).matches;
      if (n !== null) {
        const { matches: u } = n(e);
        return () => u;
      }
      return s;
    }, [
      s,
      e,
      n,
      o,
      r
    ]), [a, c] = p.useMemo(() => {
      if (r === null) return [
        s,
        () => () => {
        }
      ];
      const u = r(e);
      return [
        () => u.matches,
        (d) => (u.addEventListener("change", d), () => {
          u.removeEventListener("change", d);
        })
      ];
    }, [
      s,
      r,
      e
    ]);
    return Zn(c, a, i);
  }
  function Sa(e = {}) {
    const { themeId: t } = e;
    return function(n, o = {}) {
      let s = Ot();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: a = false, matchMedia: c = i ? window.matchMedia : null, ssrMatchMedia: l = null, noSsr: u = false } = Jn({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let d = typeof n == "function" ? n(s) : n;
      return d = d.replace(/^@media( ?)/m, ""), d.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (Zn !== void 0 ? ba : ya)(d, a, c, l, u);
    };
  }
  Gc = Sa();
  function xa(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  }
  function $r(e, t = 0, r = 1) {
    return xa(e, t, r);
  }
  va = function(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  };
  function Ca(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
  oe = function(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return oe(va(e));
    const t = e.indexOf("("), r = e.substring(0, t);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(r)) throw new Error(Xe(9, e));
    let n = e.substring(t + 1, e.length - 1), o;
    if (r === "color") {
      if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(o)) throw new Error(Xe(10, o));
    } else n = n.split(",");
    return n = n.map((s) => parseFloat(s)), {
      type: r,
      values: n,
      colorSpace: o
    };
  };
  wa = (e) => {
    const t = oe(e);
    return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
  };
  Wc = (e, t) => {
    try {
      return wa(e);
    } catch {
      return e;
    }
  };
  De = function(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
  };
  Bc = function(e) {
    if (e.startsWith("#")) return e;
    const { values: t } = oe(e);
    return `#${t.map((r, n) => Ca(n === 3 ? Math.round(255 * r) : r)).join("")}`;
  };
  $a = function(e) {
    e = oe(e);
    const { values: t } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (l, u = (l + r / 30) % 12) => o - s * Math.max(Math.min(u - 3, 9 - u, 1), -1);
    let a = "rgb";
    const c = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return e.type === "hsla" && (a += "a", c.push(t[3])), De({
      type: a,
      values: c
    });
  };
  tr = function(e) {
    e = oe(e);
    let t = e.type === "hsl" || e.type === "hsla" ? oe($a(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  };
  Fc = function(e, t) {
    const r = tr(e), n = tr(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  };
  Ta = function(e, t) {
    return e = oe(e), t = $r(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, De(e);
  };
  zc = function(e, t, r) {
    try {
      return Ta(e, t);
    } catch {
      return e;
    }
  };
  eo = function(e, t) {
    if (e = oe(e), t = $r(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return De(e);
  };
  Dc = function(e, t, r) {
    try {
      return eo(e, t);
    } catch {
      return e;
    }
  };
  to = function(e, t) {
    if (e = oe(e), t = $r(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return De(e);
  };
  Kc = function(e, t, r) {
    try {
      return to(e, t);
    } catch {
      return e;
    }
  };
  Ea = function(e, t = 0.15) {
    return tr(e) > 0.5 ? eo(e, t) : to(e, t);
  };
  Vc = function(e, t, r) {
    try {
      return Ea(e, t);
    } catch {
      return e;
    }
  };
  Uc = function(e, t, r, n = 1) {
    const o = (c, l) => Math.round((c ** (1 / n) * (1 - r) + l ** (1 / n) * r) ** n), s = oe(e), i = oe(t), a = [
      o(s.values[0], i.values[0]),
      o(s.values[1], i.values[1]),
      o(s.values[2], i.values[2])
    ];
    return De({
      type: "rgb",
      values: a
    });
  };
  function Pa(e, t) {
    var _a2, _b, _c2;
    return p.isValidElement(e) && t.indexOf(e.type.muiName ?? ((_c2 = (_b = (_a2 = e.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b.value) == null ? void 0 : _c2.muiName)) !== -1;
  }
  let tn = 0;
  function ka(e) {
    const [t, r] = p.useState(e), n = e || t;
    return p.useEffect(() => {
      t == null && (tn += 1, r(`mui-${tn}`));
    }, [
      t
    ]), n;
  }
  const Aa = {
    ...qe
  }, rn = Aa.useId;
  function _a(e) {
    return rn !== void 0 ? rn() : ka(e);
  }
  function Tr(e, t, r = void 0) {
    const n = {};
    for (const o in e) {
      const s = e[o];
      let i = "", a = true;
      for (let c = 0; c < s.length; c += 1) {
        const l = s[c];
        l && (i += (a === true ? "" : " ") + t(l), a = false, r && r[l] && (i += " " + r[l]));
      }
      n[o] = i;
    }
    return n;
  }
  const ro = p.createContext(null);
  function Er() {
    return p.useContext(ro);
  }
  const Ra = typeof Symbol == "function" && Symbol.for, Ma = Ra ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function Oa(e, t) {
    return typeof t == "function" ? t(e) : {
      ...e,
      ...t
    };
  }
  function ja(e) {
    const { children: t, theme: r } = e, n = Er(), o = p.useMemo(() => {
      const s = n === null ? {
        ...r
      } : Oa(n, r);
      return s != null && (s[Ma] = n !== null), s;
    }, [
      r,
      n
    ]);
    return N.jsx(ro.Provider, {
      value: o,
      children: t
    });
  }
  const no = p.createContext();
  La = function({ value: e, ...t }) {
    return N.jsx(no.Provider, {
      value: e ?? true,
      ...t
    });
  };
  let Ia;
  Hc = () => p.useContext(no) ?? false;
  Ia = p.createContext(void 0);
  function Na({ value: e, children: t }) {
    return N.jsx(Ia.Provider, {
      value: e,
      children: t
    });
  }
  function Ga(e) {
    const t = Ot(), r = _a() || "", { modularCssLayers: n } = e;
    let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, wr(() => {
      var _a2, _b;
      const s = document.querySelector("head");
      if (!s) return;
      const i = s.firstChild;
      if (o) {
        if (i && ((_a2 = i.hasAttribute) == null ? void 0 : _a2.call(i, "data-mui-layer-order")) && i.getAttribute("data-mui-layer-order") === r) return;
        const a = document.createElement("style");
        a.setAttribute("data-mui-layer-order", r), a.textContent = o, s.prepend(a);
      } else (_b = s.querySelector(`style[data-mui-layer-order="${r}"]`)) == null ? void 0 : _b.remove();
    }, [
      o,
      r
    ]), o ? N.jsx(xi, {
      styles: o
    }) : null;
  }
  const nn = {};
  function on(e, t, r, n = false) {
    return p.useMemo(() => {
      const o = e && t[e] || t;
      if (typeof r == "function") {
        const s = r(o), i = e ? {
          ...t,
          [e]: s
        } : s;
        return n ? () => i : i;
      }
      return e ? {
        ...t,
        [e]: r
      } : {
        ...t,
        ...r
      };
    }, [
      e,
      t,
      r,
      n
    ]);
  }
  Wa = function(e) {
    const { children: t, theme: r, themeId: n } = e, o = Ot(nn), s = Er() || nn, i = on(n, o, r), a = on(n, s, r, true), c = (n ? i[n] : i).direction === "rtl", l = Ga(i);
    return N.jsx(ja, {
      theme: a,
      children: N.jsx(Be.Provider, {
        value: i,
        children: N.jsx(La, {
          value: c,
          children: N.jsxs(Na, {
            value: n ? i[n].components : i.components,
            children: [
              l,
              t
            ]
          })
        })
      })
    });
  };
  const sn = {
    theme: void 0
  };
  Yc = function(e) {
    let t, r;
    return function(o) {
      let s = t;
      return (s === void 0 || o.theme !== r) && (sn.theme = o.theme, s = Qn(e(sn)), t = s, r = o.theme), s;
    };
  };
  const Pr = "mode", kr = "color-scheme", oo = "data-color-scheme";
  function Ba(e) {
    const { defaultMode: t = "system", defaultLightColorScheme: r = "light", defaultDarkColorScheme: n = "dark", modeStorageKey: o = Pr, colorSchemeStorageKey: s = kr, attribute: i = oo, colorSchemeNode: a = "document.documentElement", nonce: c } = e || {};
    let l = "", u = i;
    if (i === "class" && (u = ".%s"), i === "data" && (u = "[data-%s]"), u.startsWith(".")) {
      const f = u.substring(1);
      l += `${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`;
    }
    const d = u.match(/\[([^\]]+)\]/);
    if (d) {
      const [f, h] = d[1].split("=");
      h || (l += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`), l += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${h ? `${h}.replace('%s', colorScheme)` : '""'});`;
    } else l += `${a}.setAttribute('${u}', colorScheme);`;
    return N.jsx("script", {
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? c : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${n}';
  const light = localStorage.getItem('${s}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`
      }
    }, "mui-color-scheme-init");
  }
  function Fa() {
  }
  const za = ({ key: e, storageWindow: t }) => (!t && typeof window < "u" && (t = window), {
    get(r) {
      if (typeof window > "u") return;
      if (!t) return r;
      let n;
      try {
        n = t.localStorage.getItem(e);
      } catch {
      }
      return n || r;
    },
    set: (r) => {
      if (t) try {
        t.localStorage.setItem(e, r);
      } catch {
      }
    },
    subscribe: (r) => {
      if (!t) return Fa;
      const n = (o) => {
        const s = o.newValue;
        o.key === e && r(s);
      };
      return t.addEventListener("storage", n), () => {
        t.removeEventListener("storage", n);
      };
    }
  });
  function Ut() {
  }
  function an(e) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function so(e, t) {
    if (e.mode === "light" || e.mode === "system" && e.systemMode === "light") return t("light");
    if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark") return t("dark");
  }
  function Da(e) {
    return so(e, (t) => {
      if (t === "light") return e.lightColorScheme;
      if (t === "dark") return e.darkColorScheme;
    });
  }
  function Ka(e) {
    const { defaultMode: t = "light", defaultLightColorScheme: r, defaultDarkColorScheme: n, supportedColorSchemes: o = [], modeStorageKey: s = Pr, colorSchemeStorageKey: i = kr, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: c = za, noSsr: l = false } = e, u = o.join(","), d = o.length > 1, f = p.useMemo(() => c == null ? void 0 : c({
      key: s,
      storageWindow: a
    }), [
      c,
      s,
      a
    ]), h = p.useMemo(() => c == null ? void 0 : c({
      key: `${i}-light`,
      storageWindow: a
    }), [
      c,
      i,
      a
    ]), m = p.useMemo(() => c == null ? void 0 : c({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      c,
      i,
      a
    ]), [y, v] = p.useState(() => {
      const b = (f == null ? void 0 : f.get(t)) || t, S = (h == null ? void 0 : h.get(r)) || r, $ = (m == null ? void 0 : m.get(n)) || n;
      return {
        mode: b,
        systemMode: an(b),
        lightColorScheme: S,
        darkColorScheme: $
      };
    }), [C, k] = p.useState(l || !d);
    p.useEffect(() => {
      k(true);
    }, []);
    const w = Da(y), A = p.useCallback((b) => {
      v((S) => {
        if (b === S.mode) return S;
        const $ = b ?? t;
        return f == null ? void 0 : f.set($), {
          ...S,
          mode: $,
          systemMode: an($)
        };
      });
    }, [
      f,
      t
    ]), E = p.useCallback((b) => {
      b ? typeof b == "string" ? b && !u.includes(b) ? console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`) : v((S) => {
        const $ = {
          ...S
        };
        return so(S, (P) => {
          P === "light" && (h == null ? void 0 : h.set(b), $.lightColorScheme = b), P === "dark" && (m == null ? void 0 : m.set(b), $.darkColorScheme = b);
        }), $;
      }) : v((S) => {
        const $ = {
          ...S
        }, P = b.light === null ? r : b.light, K = b.dark === null ? n : b.dark;
        return P && (u.includes(P) ? ($.lightColorScheme = P, h == null ? void 0 : h.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), K && (u.includes(K) ? ($.darkColorScheme = K, m == null ? void 0 : m.set(K)) : console.error(`\`${K}\` does not exist in \`theme.colorSchemes\`.`)), $;
      }) : v((S) => (h == null ? void 0 : h.set(r), m == null ? void 0 : m.set(n), {
        ...S,
        lightColorScheme: r,
        darkColorScheme: n
      }));
    }, [
      u,
      h,
      m,
      r,
      n
    ]), T = p.useCallback((b) => {
      y.mode === "system" && v((S) => {
        const $ = (b == null ? void 0 : b.matches) ? "dark" : "light";
        return S.systemMode === $ ? S : {
          ...S,
          systemMode: $
        };
      });
    }, [
      y.mode
    ]), x = p.useRef(T);
    return x.current = T, p.useEffect(() => {
      if (typeof window.matchMedia != "function" || !d) return;
      const b = (...$) => x.current(...$), S = window.matchMedia("(prefers-color-scheme: dark)");
      return S.addListener(b), b(S), () => {
        S.removeListener(b);
      };
    }, [
      d
    ]), p.useEffect(() => {
      if (d) {
        const b = (f == null ? void 0 : f.subscribe((P) => {
          (!P || [
            "light",
            "dark",
            "system"
          ].includes(P)) && A(P || t);
        })) || Ut, S = (h == null ? void 0 : h.subscribe((P) => {
          (!P || u.match(P)) && E({
            light: P
          });
        })) || Ut, $ = (m == null ? void 0 : m.subscribe((P) => {
          (!P || u.match(P)) && E({
            dark: P
          });
        })) || Ut;
        return () => {
          b(), S(), $();
        };
      }
    }, [
      E,
      A,
      u,
      t,
      a,
      d,
      f,
      h,
      m
    ]), {
      ...y,
      mode: C ? y.mode : void 0,
      systemMode: C ? y.systemMode : void 0,
      colorScheme: C ? w : void 0,
      setMode: A,
      setColorScheme: E
    };
  }
  const Va = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  Qc = function(e) {
    const { themeId: t, theme: r = {}, modeStorageKey: n = Pr, colorSchemeStorageKey: o = kr, disableTransitionOnChange: s = false, defaultColorScheme: i, resolveTheme: a } = e, c = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {
      },
      setMode: () => {
      },
      systemMode: void 0
    }, l = p.createContext(void 0), u = () => p.useContext(l) || c, d = {}, f = {};
    function h(C) {
      var _a2, _b, _c2, _d;
      const { children: k, theme: w, modeStorageKey: A = n, colorSchemeStorageKey: E = o, disableTransitionOnChange: T = s, storageManager: x, storageWindow: b = typeof window > "u" ? void 0 : window, documentNode: S = typeof document > "u" ? void 0 : document, colorSchemeNode: $ = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: P = false, disableStyleSheetGeneration: K = false, defaultMode: D = "system", noSsr: ue } = C, F = p.useRef(false), xe = Er(), fe = p.useContext(l), Ae = !!fe && !P, _e = p.useMemo(() => w || (typeof r == "function" ? r() : r), [
        w
      ]), Ke = _e[t], G = Ke || _e, { colorSchemes: de = d, components: Ar = f, cssVarPrefix: Gt } = G, _r = Object.keys(de).filter((H) => !!de[H]).join(","), ve = p.useMemo(() => _r.split(","), [
        _r
      ]), Rr = typeof i == "string" ? i : i.light, Mr = typeof i == "string" ? i : i.dark, io = de[Rr] && de[Mr] ? D : ((_b = (_a2 = de[G.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c2 = G.palette) == null ? void 0 : _c2.mode), { mode: ao, setMode: Or, systemMode: jr, lightColorScheme: Lr, darkColorScheme: Ir, colorScheme: co, setColorScheme: Nr } = Ka({
        supportedColorSchemes: ve,
        defaultLightColorScheme: Rr,
        defaultDarkColorScheme: Mr,
        modeStorageKey: A,
        colorSchemeStorageKey: E,
        defaultMode: io,
        storageManager: x,
        storageWindow: b,
        noSsr: ue
      });
      let Wt = ao, J = co;
      Ae && (Wt = fe.mode, J = fe.colorScheme);
      const Bt = p.useMemo(() => {
        var _a3;
        const H = J || G.defaultColorScheme, V = ((_a3 = G.generateThemeVars) == null ? void 0 : _a3.call(G)) || G.vars, Y = {
          ...G,
          components: Ar,
          colorSchemes: de,
          cssVarPrefix: Gt,
          vars: V
        };
        if (typeof Y.generateSpacing == "function" && (Y.spacing = Y.generateSpacing()), H) {
          const se = de[H];
          se && typeof se == "object" && Object.keys(se).forEach((re) => {
            se[re] && typeof se[re] == "object" ? Y[re] = {
              ...Y[re],
              ...se[re]
            } : Y[re] = se[re];
          });
        }
        return a ? a(Y) : Y;
      }, [
        G,
        J,
        Ar,
        de,
        Gt
      ]), Re = G.colorSchemeSelector;
      wr(() => {
        if (J && $ && Re && Re !== "media") {
          const H = Re;
          let V = Re;
          if (H === "class" && (V = ".%s"), H === "data" && (V = "[data-%s]"), (H == null ? void 0 : H.startsWith("data-")) && !H.includes("%s") && (V = `[${H}="%s"]`), V.startsWith(".")) $.classList.remove(...ve.map((Y) => V.substring(1).replace("%s", Y))), $.classList.add(V.substring(1).replace("%s", J));
          else {
            const Y = V.replace("%s", J).match(/\[([^\]]+)\]/);
            if (Y) {
              const [se, re] = Y[1].split("=");
              re || ve.forEach((uo) => {
                $.removeAttribute(se.replace(J, uo));
              }), $.setAttribute(se, re ? re.replace(/"|'/g, "") : "");
            } else $.setAttribute(V, J);
          }
        }
      }, [
        J,
        Re,
        $,
        ve
      ]), p.useEffect(() => {
        let H;
        if (T && F.current && S) {
          const V = S.createElement("style");
          V.appendChild(S.createTextNode(Va)), S.head.appendChild(V), window.getComputedStyle(S.body), H = setTimeout(() => {
            S.head.removeChild(V);
          }, 1);
        }
        return () => {
          clearTimeout(H);
        };
      }, [
        J,
        T,
        S
      ]), p.useEffect(() => (F.current = true, () => {
        F.current = false;
      }), []);
      const lo = p.useMemo(() => ({
        allColorSchemes: ve,
        colorScheme: J,
        darkColorScheme: Ir,
        lightColorScheme: Lr,
        mode: Wt,
        setColorScheme: Nr,
        setMode: Or,
        systemMode: jr
      }), [
        ve,
        J,
        Ir,
        Lr,
        Wt,
        Nr,
        Or,
        jr,
        Bt.colorSchemeSelector
      ]);
      let Gr = true;
      (K || G.cssVariables === false || Ae && (xe == null ? void 0 : xe.cssVarPrefix) === Gt) && (Gr = false);
      const Wr = N.jsxs(p.Fragment, {
        children: [
          N.jsx(Wa, {
            themeId: Ke ? t : void 0,
            theme: Bt,
            children: k
          }),
          Gr && N.jsx(Rn, {
            styles: ((_d = Bt.generateStyleSheets) == null ? void 0 : _d.call(Bt)) || []
          })
        ]
      });
      return Ae ? Wr : N.jsx(l.Provider, {
        value: lo,
        children: Wr
      });
    }
    const m = typeof i == "string" ? i : i.light, y = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: h,
      useColorScheme: u,
      getInitColorSchemeScript: (C) => Ba({
        colorSchemeStorageKey: o,
        defaultLightColorScheme: m,
        defaultDarkColorScheme: y,
        modeStorageKey: n,
        ...C
      })
    };
  };
  qc = function(e = "") {
    function t(...n) {
      if (!n.length) return "";
      const o = n[0];
      return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
    }
    return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
  };
  const cn = (e, t, r, n = []) => {
    let o = e;
    t.forEach((s, i) => {
      i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
    });
  }, Ua = (e, t, r) => {
    function n(o, s = [], i = []) {
      Object.entries(o).forEach(([a, c]) => {
        (!r || r && !r([
          ...s,
          a
        ])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [
          ...s,
          a
        ], Array.isArray(c) ? [
          ...i,
          a
        ] : i) : t([
          ...s,
          a
        ], c, i));
      });
    }
    n(e);
  }, Ha = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  Ht = function(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, o = {}, s = {}, i = {};
    return Ua(e, (a, c, l) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(a, c))) {
        const u = `--${r ? `${r}-` : ""}${a.join("-")}`, d = Ha(a, c);
        Object.assign(o, {
          [u]: d
        }), cn(s, a, `var(${u})`, l), cn(i, a, `var(${u}, ${d})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: o,
      vars: s,
      varsWithDefaults: i
    };
  };
  Ya = function(e, t = {}) {
    const { getSelector: r = v, disableCssColorScheme: n, colorSchemeSelector: o } = t, { colorSchemes: s = {}, components: i, defaultColorScheme: a = "light", ...c } = e, { vars: l, css: u, varsWithDefaults: d } = Ht(c, t);
    let f = d;
    const h = {}, { [a]: m, ...y } = s;
    if (Object.entries(y || {}).forEach(([w, A]) => {
      const { vars: E, css: T, varsWithDefaults: x } = Ht(A, t);
      f = le(f, x), h[w] = {
        css: T,
        vars: E
      };
    }), m) {
      const { css: w, vars: A, varsWithDefaults: E } = Ht(m, t);
      f = le(f, E), h[a] = {
        css: w,
        vars: A
      };
    }
    function v(w, A) {
      var _a2, _b;
      let E = o;
      if (o === "class" && (E = ".%s"), o === "data" && (E = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (E = `[${o}="%s"]`), w) {
        if (E === "media") return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a2 = s[w]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || w})`]: {
            ":root": A
          }
        };
        if (E) return e.defaultColorScheme === w ? `:root, ${E.replace("%s", String(w))}` : E.replace("%s", String(w));
      }
      return ":root";
    }
    return {
      vars: f,
      generateThemeVars: () => {
        let w = {
          ...l
        };
        return Object.entries(h).forEach(([, { vars: A }]) => {
          w = le(w, A);
        }), w;
      },
      generateStyleSheets: () => {
        var _a2, _b;
        const w = [], A = e.defaultColorScheme || "light";
        function E(b, S) {
          Object.keys(S).length && w.push(typeof b == "string" ? {
            [b]: {
              ...S
            }
          } : b);
        }
        E(r(void 0, {
          ...u
        }), u);
        const { [A]: T, ...x } = h;
        if (T) {
          const { css: b } = T, S = (_b = (_a2 = s[A]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, $ = !n && S ? {
            colorScheme: S,
            ...b
          } : {
            ...b
          };
          E(r(A, {
            ...$
          }), $);
        }
        return Object.entries(x).forEach(([b, { css: S }]) => {
          var _a3, _b2;
          const $ = (_b2 = (_a3 = s[b]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, P = !n && $ ? {
            colorScheme: $,
            ...S
          } : {
            ...S
          };
          E(r(b, {
            ...P
          }), P);
        }), w;
      }
    };
  };
  function Qa(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  }
  Xc = function({ colorSchemeSelector: e = `[${oo}="%s"]`, ...t }) {
    const r = t, n = Ya(r, {
      ...t,
      prefix: t.cssVarPrefix,
      colorSchemeSelector: e
    });
    return r.vars = n.vars, r.generateThemeVars = n.generateThemeVars, r.generateStyleSheets = n.generateStyleSheets, r.colorSchemeSelector = e, r.getColorSchemeSelector = Qa(e), r;
  };
  let qa, Xa, Ja, Za;
  Jc = "6.5.0";
  Zc = 6;
  el = 5;
  tl = 0;
  rl = void 0;
  qa = ze();
  Xa = vr("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`maxWidth${Et(String(r.maxWidth))}`],
        r.fixed && t.fixed,
        r.disableGutters && t.disableGutters
      ];
    }
  });
  Ja = (e) => Cr({
    props: e,
    name: "MuiContainer",
    defaultTheme: qa
  });
  Za = (e, t) => {
    const r = (c) => Se(t, c), { classes: n, fixed: o, disableGutters: s, maxWidth: i } = e, a = {
      root: [
        "root",
        i && `maxWidth${Et(String(i))}`,
        o && "fixed",
        s && "disableGutters"
      ]
    };
    return Tr(a, r, n);
  };
  ec = function(e = {}) {
    const { createStyledComponent: t = Xa, useThemeProps: r = Ja, componentName: n = "MuiContainer" } = e, o = t(({ theme: i, ownerState: a }) => ({
      width: "100%",
      marginLeft: "auto",
      boxSizing: "border-box",
      marginRight: "auto",
      ...!a.disableGutters && {
        paddingLeft: i.spacing(2),
        paddingRight: i.spacing(2),
        [i.breakpoints.up("sm")]: {
          paddingLeft: i.spacing(3),
          paddingRight: i.spacing(3)
        }
      }
    }), ({ theme: i, ownerState: a }) => a.fixed && Object.keys(i.breakpoints.values).reduce((c, l) => {
      const u = l, d = i.breakpoints.values[u];
      return d !== 0 && (c[i.breakpoints.up(u)] = {
        maxWidth: `${d}${i.breakpoints.unit}`
      }), c;
    }, {}), ({ theme: i, ownerState: a }) => ({
      ...a.maxWidth === "xs" && {
        [i.breakpoints.up("xs")]: {
          maxWidth: Math.max(i.breakpoints.values.xs, 444)
        }
      },
      ...a.maxWidth && a.maxWidth !== "xs" && {
        [i.breakpoints.up(a.maxWidth)]: {
          maxWidth: `${i.breakpoints.values[a.maxWidth]}${i.breakpoints.unit}`
        }
      }
    }));
    return p.forwardRef(function(a, c) {
      const l = r(a), { className: u, component: d = "div", disableGutters: f = false, fixed: h = false, maxWidth: m = "lg", classes: y, ...v } = l, C = {
        ...l,
        component: d,
        disableGutters: f,
        fixed: h,
        maxWidth: m
      }, k = Za(C, n);
      return N.jsx(o, {
        as: d,
        ownerState: C,
        className: Lt(k.root, u),
        ref: c,
        ...v
      });
    });
  };
  nl = ec();
  ol = function(e) {
    return Se("MuiContainer", e);
  };
  let tc;
  sl = It("MuiContainer", [
    "root",
    "disableGutters",
    "fixed",
    "maxWidthXs",
    "maxWidthSm",
    "maxWidthMd",
    "maxWidthLg",
    "maxWidthXl"
  ]);
  tc = (e, t) => e.filter((r) => t.includes(r));
  ke = (e, t, r) => {
    const n = e.keys[0];
    Array.isArray(t) ? t.forEach((o, s) => {
      r((i, a) => {
        s <= e.keys.length - 1 && (s === 0 ? Object.assign(i, a) : i[e.up(e.keys[s])] = a);
      }, o);
    }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : tc(e.keys, Object.keys(t))).forEach((s) => {
      if (e.keys.includes(s)) {
        const i = t[s];
        i !== void 0 && r((a, c) => {
          n === s ? Object.assign(a, c) : a[e.up(s)] = c;
        }, i);
      }
    }) : (typeof t == "number" || typeof t == "string") && r((o, s) => {
      Object.assign(o, s);
    }, t);
  };
  function et(e) {
    return `--Grid-${e}Spacing`;
  }
  function Nt(e) {
    return `--Grid-parent-${e}Spacing`;
  }
  let ln, Te, rc, nc, oc, sc, ic, ac, cc;
  ln = "--Grid-columns";
  Te = "--Grid-parent-columns";
  rc = ({ theme: e, ownerState: t }) => {
    const r = {};
    return ke(e.breakpoints, t.size, (n, o) => {
      let s = {};
      o === "grow" && (s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      }), o === "auto" && (s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      }), typeof o == "number" && (s = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${o} / var(${Te}) - (var(${Te}) - ${o}) * (var(${Nt("column")}) / var(${Te})))`
      }), n(r, s);
    }), r;
  };
  nc = ({ theme: e, ownerState: t }) => {
    const r = {};
    return ke(e.breakpoints, t.offset, (n, o) => {
      let s = {};
      o === "auto" && (s = {
        marginLeft: "auto"
      }), typeof o == "number" && (s = {
        marginLeft: o === 0 ? "0px" : `calc(100% * ${o} / var(${Te}) + var(${Nt("column")}) * ${o} / var(${Te}))`
      }), n(r, s);
    }), r;
  };
  oc = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {
      [ln]: 12
    };
    return ke(e.breakpoints, t.columns, (n, o) => {
      const s = o ?? 12;
      n(r, {
        [ln]: s,
        "> *": {
          [Te]: s
        }
      });
    }), r;
  };
  sc = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return ke(e.breakpoints, t.rowSpacing, (n, o) => {
      var _a2;
      const s = typeof o == "string" ? o : (_a2 = e.spacing) == null ? void 0 : _a2.call(e, o);
      n(r, {
        [et("row")]: s,
        "> *": {
          [Nt("row")]: s
        }
      });
    }), r;
  };
  ic = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return ke(e.breakpoints, t.columnSpacing, (n, o) => {
      var _a2;
      const s = typeof o == "string" ? o : (_a2 = e.spacing) == null ? void 0 : _a2.call(e, o);
      n(r, {
        [et("column")]: s,
        "> *": {
          [Nt("column")]: s
        }
      });
    }), r;
  };
  ac = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return ke(e.breakpoints, t.direction, (n, o) => {
      n(r, {
        flexDirection: o
      });
    }), r;
  };
  cc = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...e.wrap && e.wrap !== "wrap" && {
        flexWrap: e.wrap
      },
      gap: `var(${et("row")}) var(${et("column")})`
    }
  });
  lc = (e) => {
    const t = [];
    return Object.entries(e).forEach(([r, n]) => {
      n !== false && n !== void 0 && t.push(`grid-${r}-${String(n)}`);
    }), t;
  };
  uc = (e, t = "xs") => {
    function r(n) {
      return n === void 0 ? false : typeof n == "string" && !Number.isNaN(Number(n)) || typeof n == "number" && n > 0;
    }
    if (r(e)) return [
      `spacing-${t}-${String(e)}`
    ];
    if (typeof e == "object" && !Array.isArray(e)) {
      const n = [];
      return Object.entries(e).forEach(([o, s]) => {
        r(s) && n.push(`spacing-${o}-${String(s)}`);
      }), n;
    }
    return [];
  };
  fc = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, r]) => `direction-${t}-${r}`) : [
    `direction-xs-${String(e)}`
  ];
  function dc(e, t) {
    e.item !== void 0 && delete e.item, e.zeroMinWidth !== void 0 && delete e.zeroMinWidth, t.keys.forEach((r) => {
      e[r] !== void 0 && delete e[r];
    });
  }
  const mc = ze(), pc = vr("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function hc(e) {
    return Cr({
      props: e,
      name: "MuiGrid",
      defaultTheme: mc
    });
  }
  yc = function(e = {}) {
    const { createStyledComponent: t = pc, useThemeProps: r = hc, useTheme: n = jt, componentName: o = "MuiGrid" } = e, s = (l, u) => {
      const { container: d, direction: f, spacing: h, wrap: m, size: y } = l, v = {
        root: [
          "root",
          d && "container",
          m !== "wrap" && `wrap-xs-${String(m)}`,
          ...fc(f),
          ...lc(y),
          ...d ? uc(h, u.breakpoints.keys[0]) : []
        ]
      };
      return Tr(v, (C) => Se(o, C), {});
    };
    function i(l, u, d = () => true) {
      const f = {};
      return l === null || (Array.isArray(l) ? l.forEach((h, m) => {
        h !== null && d(h) && u.keys[m] && (f[u.keys[m]] = h);
      }) : typeof l == "object" ? Object.keys(l).forEach((h) => {
        const m = l[h];
        m != null && d(m) && (f[h] = m);
      }) : f[u.keys[0]] = l), f;
    }
    const a = t(oc, ic, sc, rc, ac, cc, nc), c = p.forwardRef(function(u, d) {
      const f = n(), h = r(u), m = xr(h);
      dc(m, f.breakpoints);
      const { className: y, children: v, columns: C = 12, container: k = false, component: w = "div", direction: A = "row", wrap: E = "wrap", size: T = {}, offset: x = {}, spacing: b = 0, rowSpacing: S = b, columnSpacing: $ = b, unstable_level: P = 0, ...K } = m, D = i(T, f.breakpoints, (G) => G !== false), ue = i(x, f.breakpoints), F = u.columns ?? (P ? void 0 : C), xe = u.spacing ?? (P ? void 0 : b), fe = u.rowSpacing ?? u.spacing ?? (P ? void 0 : S), Ae = u.columnSpacing ?? u.spacing ?? (P ? void 0 : $), _e = {
        ...m,
        level: P,
        columns: F,
        container: k,
        direction: A,
        wrap: E,
        spacing: xe,
        rowSpacing: fe,
        columnSpacing: Ae,
        size: D,
        offset: ue
      }, Ke = s(_e, f);
      return N.jsx(a, {
        ref: d,
        as: w,
        ownerState: _e,
        className: Lt(Ke.root, y),
        ...K,
        children: p.Children.map(v, (G) => {
          var _a2;
          return p.isValidElement(G) && Pa(G, [
            "Grid"
          ]) && k && G.props.container ? p.cloneElement(G, {
            unstable_level: ((_a2 = G.props) == null ? void 0 : _a2.unstable_level) ?? P + 1
          }) : G;
        })
      });
    });
    return c.muiName = "Grid", c;
  };
  il = yc();
  al = function(e) {
    return Se("MuiGrid", e);
  };
  let gc, bc, Sc, Oe, xc, vc;
  gc = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ];
  bc = [
    "column-reverse",
    "column",
    "row-reverse",
    "row"
  ];
  Sc = [
    "nowrap",
    "wrap-reverse",
    "wrap"
  ];
  Oe = [
    "auto",
    "grow",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ];
  cl = It("MuiGrid", [
    "root",
    "container",
    "item",
    ...gc.map((e) => `spacing-xs-${e}`),
    ...bc.map((e) => `direction-xs-${e}`),
    ...Sc.map((e) => `wrap-xs-${e}`),
    ...Oe.map((e) => `grid-xs-${e}`),
    ...Oe.map((e) => `grid-sm-${e}`),
    ...Oe.map((e) => `grid-md-${e}`),
    ...Oe.map((e) => `grid-lg-${e}`),
    ...Oe.map((e) => `grid-xl-${e}`)
  ]);
  xc = ze();
  vc = vr("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function Cc(e) {
    return Cr({
      props: e,
      name: "MuiStack",
      defaultTheme: xc
    });
  }
  function wc(e, t) {
    const r = p.Children.toArray(e).filter(Boolean);
    return r.reduce((n, o, s) => (n.push(o), s < r.length - 1 && n.push(p.cloneElement(t, {
      key: `separator-${s}`
    })), n), []);
  }
  const $c = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], Tc = ({ ownerState: e, theme: t }) => {
    let r = {
      display: "flex",
      flexDirection: "column",
      ...ne({
        theme: t
      }, Dt({
        values: e.direction,
        breakpoints: t.breakpoints.values
      }), (n) => ({
        flexDirection: n
      }))
    };
    if (e.spacing) {
      const n = yr(t), o = Object.keys(t.breakpoints.values).reduce((c, l) => ((typeof e.spacing == "object" && e.spacing[l] != null || typeof e.direction == "object" && e.direction[l] != null) && (c[l] = true), c), {}), s = Dt({
        values: e.direction,
        base: o
      }), i = Dt({
        values: e.spacing,
        base: o
      });
      typeof s == "object" && Object.keys(s).forEach((c, l, u) => {
        if (!s[c]) {
          const f = l > 0 ? s[u[l - 1]] : "column";
          s[c] = f;
        }
      }), r = le(r, ne({
        theme: t
      }, i, (c, l) => e.useFlexGap ? {
        gap: be(n, c)
      } : {
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${$c(l ? s[l] : e.direction)}`]: be(n, c)
        }
      }));
    }
    return r = As(t.breakpoints, r), r;
  };
  Ec = function(e = {}) {
    const { createStyledComponent: t = vc, useThemeProps: r = Cc, componentName: n = "MuiStack" } = e, o = () => Tr({
      root: [
        "root"
      ]
    }, (c) => Se(n, c), {}), s = t(Tc);
    return p.forwardRef(function(c, l) {
      const u = r(c), d = xr(u), { component: f = "div", direction: h = "column", spacing: m = 0, divider: y, children: v, className: C, useFlexGap: k = false, ...w } = d, A = {
        direction: h,
        spacing: m,
        useFlexGap: k
      }, E = o();
      return N.jsx(s, {
        as: f,
        ownerState: A,
        ref: l,
        className: Lt(E.root, C),
        ...w,
        children: y ? wc(v, y) : v
      });
    });
  };
  ll = Ec();
  ul = function(e) {
    return Se("MuiStack", e);
  };
  fl = It("MuiStack", [
    "root"
  ]);
  dl = function() {
    throw new Error(Xe(19));
  };
});
export {
  Nc as Box,
  nl as Container,
  xi as GlobalStyles,
  il as Grid,
  La as RtlProvider,
  ll as Stack,
  Rc as StyledEngineProvider,
  Wa as ThemeProvider,
  __tla,
  Mi as alignContent,
  Ri as alignItems,
  Ni as alignSelf,
  Ta as alpha,
  ai as backgroundColor,
  ii as bgcolor,
  Uc as blend,
  Gs as border,
  Fs as borderBottom,
  Us as borderBottomColor,
  Ds as borderColor,
  zs as borderLeft,
  Hs as borderLeftColor,
  At as borderRadius,
  Bs as borderRight,
  Vs as borderRightColor,
  Ws as borderTop,
  Ks as borderTopColor,
  Z as borderTransform,
  Gn as borders,
  Ki as bottom,
  mi as boxSizing,
  Oc as breakpoints,
  si as color,
  wa as colorChannel,
  Rt as columnGap,
  ye as compose,
  sl as containerClasses,
  sa as createBox,
  ws as createBreakpoints,
  ec as createContainer,
  yc as createGrid,
  Ns as createSpacing,
  Ec as createStack,
  fa as createStyled,
  ze as createTheme,
  yr as createUnarySpacing,
  Fe as createUnaryUnit,
  is as css,
  Es as cssContainerQueries,
  eo as darken,
  oe as decomposeColor,
  zn as display,
  Ea as emphasize,
  dl as experimental_sx,
  ji as flex,
  Pi as flexBasis,
  ki as flexDirection,
  Li as flexGrow,
  Ii as flexShrink,
  Ai as flexWrap,
  Dn as flexbox,
  Ui as fontFamily,
  Hi as fontSize,
  Yi as fontStyle,
  Qi as fontWeight,
  _t as gap,
  ol as getContainerUtilityClass,
  Fc as getContrastRatio,
  al as getGridUtilityClass,
  tr as getLuminance,
  Pt as getPath,
  ul as getStackUtilityClass,
  Ls as getStyleFromPropValue,
  Ze as getStyleValue,
  Jn as getThemeProps,
  be as getValue,
  Wn as grid,
  oi as gridArea,
  Zs as gridAutoColumns,
  Js as gridAutoFlow,
  ei as gridAutoRows,
  cl as gridClasses,
  qs as gridColumn,
  Xs as gridRow,
  ni as gridTemplateAreas,
  ti as gridTemplateColumns,
  ri as gridTemplateRows,
  ne as handleBreakpoints,
  ui as height,
  va as hexToRgb,
  $a as hslToRgb,
  _i as justifyContent,
  Gi as justifyItems,
  Wi as justifySelf,
  _c as keyframes,
  Vi as left,
  qi as letterSpacing,
  to as lighten,
  Ji as lineHeight,
  Zc as major,
  j as margin,
  pr as marginKeys,
  fi as maxHeight,
  br as maxWidth,
  As as mergeBreakpointsInOrder,
  di as minHeight,
  li as minWidth,
  el as minor,
  Oi as order,
  Ys as outline,
  Qs as outlineColor,
  L as padding,
  hr as paddingKeys,
  Bn as palette,
  $e as paletteTransform,
  tl as patch,
  Bi as position,
  Kn as positions,
  rl as prerelease,
  zc as private_safeAlpha,
  Wc as private_safeColorChannel,
  Dc as private_safeDarken,
  Vc as private_safeEmphasize,
  Kc as private_safeLighten,
  De as recomposeColor,
  Mc as responsivePropType,
  Bc as rgbToHex,
  Di as right,
  Mt as rowGap,
  Vn as shadows,
  Ps as shape,
  Vt as shouldForwardProp,
  Lc as sizeHeight,
  jc as sizeWidth,
  Fn as sizing,
  Q as sizingTransform,
  kt as spacing,
  fl as stackClasses,
  g as style,
  vr as styled,
  ca as systemDefaultTheme,
  Zi as textAlign,
  Xi as textTransform,
  zi as top,
  Un as typography,
  ea as typographyVariant,
  Qc as unstable_createCssVarsProvider,
  Xc as unstable_createCssVarsTheme,
  qc as unstable_createGetCssVar,
  yi as unstable_createStyleFunctionSx,
  Ht as unstable_cssVarsParser,
  Sr as unstable_defaultSxConfig,
  xr as unstable_extendSxProp,
  fc as unstable_generateDirectionClasses,
  lc as unstable_generateSizeClassNames,
  uc as unstable_generateSpacingClassNames,
  Ic as unstable_getThemeValue,
  Yc as unstable_memoTheme,
  Ya as unstable_prepareCssVars,
  Dt as unstable_resolveBreakpointValues,
  Ne as unstable_styleFunctionSx,
  ke as unstable_traverseBreakpoints,
  Gc as useMediaQuery,
  Hc as useRtl,
  jt as useTheme,
  Cr as useThemeProps,
  Ot as useThemeWithoutDefault,
  Jc as version,
  ci as width,
  Fi as zIndex
};
