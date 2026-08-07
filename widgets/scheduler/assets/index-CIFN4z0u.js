import { a as yt, v as g, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import { __tla as __tla_1 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
let fl, _l, Ya, jl, uu, Nl, sl, mu, ic, sc, fc, Jc, Ia, ja, xl, da, pa, xa, ga, ya, va, tr, ha, Sa, ma, ba, ie, Ro, bc, Fa, al, Ma, Xc, nr, Ee, Ml, Mc, Xi, Pu, Ku, fa, el, Wc, ot, Yr, nt, Js, ea, Uo, fe, jo, eu, Bl, cc, tc, rc, uc, lc, nc, Io, xc, vc, Cc, $c, rr, Ol, pl, Il, Rr, Jt, Gl, ua, vt, Ko, Pe, _o, Oa, Ta, Ea, Pa, Ll, wa, ka, _a, Aa, Ra, le, Ga, qc, Zc, oc, dc, mc, ol, Sc, wc, Ho, Ec, Tl, L, Ur, Wa, Qr, na, Ba, Na, Pl, ac, Ca, $a, N, Hr, Oo, Ie, Al, hc, Lo, Rl, yl, ml, gl, Sl, bl, st, il, hl, gc, or, No, ta, br, ul, cl, Mo, te, er, Wl, v, Jr, Lc, Tc, kc, yc, Go, Pc, $l, kl, wl, Ka, xr, Xr, Zr, Wu, Nu, Gu, ll, Cl, Cu, yr, Je, Fe, dl, vl, ir, en, sr, El, La, pc;
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
  function gt(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  }
  function vr() {
    return vr = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, vr.apply(null, arguments);
  }
  function ns(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function os(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  var ss = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(os(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var s = ns(o);
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
  })(), U = "-ms-", bt = "-moz-", R = "-webkit-", Yn = "comm", _r = "rule", Or = "decl", is = "@import", qn = "@keyframes", as = "@layer", cs = Math.abs, $t = String.fromCharCode, us = Object.assign;
  function ls(e, t) {
    return D(e, 0) ^ 45 ? (((t << 2 ^ D(e, 0)) << 2 ^ D(e, 1)) << 2 ^ D(e, 2)) << 2 ^ D(e, 3) : 0;
  }
  function Qn(e) {
    return e.trim();
  }
  function fs(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function O(e, t, r) {
    return e.replace(t, r);
  }
  function Cr(e, t) {
    return e.indexOf(t);
  }
  function D(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Ye(e, t, r) {
    return e.slice(t, r);
  }
  function me(e) {
    return e.length;
  }
  function Mr(e) {
    return e.length;
  }
  function at(e, t) {
    return t.push(e), e;
  }
  function ds(e, t) {
    return e.map(t).join("");
  }
  var wt = 1, Ne = 1, Xn = 0, X = 0, G = 0, We = "";
  function kt(e, t, r, n, o, s, i) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: o,
      children: s,
      line: wt,
      column: Ne,
      length: i,
      return: ""
    };
  }
  function Ve(e, t) {
    return us(kt("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function ms() {
    return G;
  }
  function hs() {
    return G = X > 0 ? D(We, --X) : 0, Ne--, G === 10 && (Ne = 1, wt--), G;
  }
  function re() {
    return G = X < Xn ? D(We, X++) : 0, Ne++, G === 10 && (Ne = 1, wt++), G;
  }
  function ye() {
    return D(We, X);
  }
  function ut() {
    return X;
  }
  function et(e, t) {
    return Ye(We, e, t);
  }
  function qe(e) {
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
  function Zn(e) {
    return wt = Ne = 1, Xn = me(We = e), X = 0, [];
  }
  function Jn(e) {
    return We = "", e;
  }
  function lt(e) {
    return Qn(et(X - 1, $r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function ps(e) {
    for (; (G = ye()) && G < 33; ) re();
    return qe(e) > 2 || qe(G) > 3 ? "" : " ";
  }
  function ys(e, t) {
    for (; --t && re() && !(G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97); ) ;
    return et(e, ut() + (t < 6 && ye() == 32 && re() == 32));
  }
  function $r(e) {
    for (; re(); ) switch (G) {
      case e:
        return X;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $r(G);
        break;
      case 40:
        e === 41 && $r(e);
        break;
      case 92:
        re();
        break;
    }
    return X;
  }
  function gs(e, t) {
    for (; re() && e + G !== 57; ) if (e + G === 84 && ye() === 47) break;
    return "/*" + et(t, X - 1) + "*" + $t(e === 47 ? e : re());
  }
  function bs(e) {
    for (; !qe(ye()); ) re();
    return et(e, X);
  }
  function Ss(e) {
    return Jn(ft("", null, null, null, [
      ""
    ], e = Zn(e), 0, [
      0
    ], e));
  }
  function ft(e, t, r, n, o, s, i, a, c) {
    for (var u = 0, l = 0, f = i, d = 0, y = 0, h = 0, m = 1, S = 1, b = 1, C = 0, x = "", A = o, E = s, w = n, p = x; S; ) switch (h = C, C = re()) {
      case 40:
        if (h != 108 && D(p, f - 1) == 58) {
          Cr(p += O(lt(C), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        p += lt(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        p += ps(h);
        break;
      case 92:
        p += ys(ut() - 1, 7);
        continue;
      case 47:
        switch (ye()) {
          case 42:
          case 47:
            at(xs(gs(re(), ut()), t, r), c);
            break;
          default:
            p += "/";
        }
        break;
      case 123 * m:
        a[u++] = me(p) * b;
      case 125 * m:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            S = 0;
          case 59 + l:
            b == -1 && (p = O(p, /\f/g, "")), y > 0 && me(p) - f && at(y > 32 ? xn(p + ";", n, r, f - 1) : xn(O(p, " ", "") + ";", n, r, f - 2), c);
            break;
          case 59:
            p += ";";
          default:
            if (at(w = Sn(p, t, r, u, l, o, a, x, A = [], E = [], f), s), C === 123) if (l === 0) ft(p, t, w, w, A, s, f, a, E);
            else switch (d === 99 && D(p, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                ft(e, w, w, n && at(Sn(e, w, w, 0, 0, o, a, x, o, A = [], f), E), o, E, f, a, n ? A : E);
                break;
              default:
                ft(p, w, w, w, [
                  ""
                ], E, 0, a, E);
            }
        }
        u = l = y = 0, m = b = 1, x = p = "", f = i;
        break;
      case 58:
        f = 1 + me(p), y = h;
      default:
        if (m < 1) {
          if (C == 123) --m;
          else if (C == 125 && m++ == 0 && hs() == 125) continue;
        }
        switch (p += $t(C), C * m) {
          case 38:
            b = l > 0 ? 1 : (p += "\f", -1);
            break;
          case 44:
            a[u++] = (me(p) - 1) * b, b = 1;
            break;
          case 64:
            ye() === 45 && (p += lt(re())), d = ye(), l = f = me(x = p += bs(ut())), C++;
            break;
          case 45:
            h === 45 && me(p) == 2 && (m = 0);
        }
    }
    return s;
  }
  function Sn(e, t, r, n, o, s, i, a, c, u, l) {
    for (var f = o - 1, d = o === 0 ? s : [
      ""
    ], y = Mr(d), h = 0, m = 0, S = 0; h < n; ++h) for (var b = 0, C = Ye(e, f + 1, f = cs(m = i[h])), x = e; b < y; ++b) (x = Qn(m > 0 ? d[b] + " " + C : O(C, /&\f/g, d[b]))) && (c[S++] = x);
    return kt(e, t, r, o === 0 ? _r : a, c, u, l);
  }
  function xs(e, t, r) {
    return kt(e, t, r, Yn, $t(ms()), Ye(e, 2, -2), 0);
  }
  function xn(e, t, r, n) {
    return kt(e, t, r, Or, Ye(e, 0, n), Ye(e, n + 1, -1), n);
  }
  function Oe(e, t) {
    for (var r = "", n = Mr(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
    return r;
  }
  function vs(e, t, r, n) {
    switch (e.type) {
      case as:
        if (e.children.length) break;
      case is:
      case Or:
        return e.return = e.return || e.value;
      case Yn:
        return "";
      case qn:
        return e.return = e.value + "{" + Oe(e.children, n) + "}";
      case _r:
        e.value = e.props.join(",");
    }
    return me(r = Oe(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function Cs(e) {
    var t = Mr(e);
    return function(r, n, o, s) {
      for (var i = "", a = 0; a < t; a++) i += e[a](r, n, o, s) || "";
      return i;
    };
  }
  function $s(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  function eo(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var ws = function(t, r, n) {
    for (var o = 0, s = 0; o = s, s = ye(), o === 38 && s === 12 && (r[n] = 1), !qe(s); ) re();
    return et(t, X);
  }, ks = function(t, r) {
    var n = -1, o = 44;
    do
      switch (qe(o)) {
        case 0:
          o === 38 && ye() === 12 && (r[n] = 1), t[n] += ws(X - 1, r, n);
          break;
        case 2:
          t[n] += lt(o);
          break;
        case 4:
          if (o === 44) {
            t[++n] = ye() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += $t(o);
      }
    while (o = re());
    return t;
  }, Es = function(t, r) {
    return Jn(ks(Zn(t), r));
  }, vn = /* @__PURE__ */ new WeakMap(), Ts = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !vn.get(n)) && !o) {
        vn.set(t, true);
        for (var s = [], i = Es(r, s), a = n.props, c = 0, u = 0; c < i.length; c++) for (var l = 0; l < a.length; l++, u++) t.props[u] = s[c] ? i[c].replace(/&\f/g, a[l]) : a[l] + " " + i[c];
      }
    }
  }, Ps = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function to(e, t) {
    switch (ls(e, t)) {
      case 5103:
        return R + "print-" + e + e;
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
        return R + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return R + e + bt + e + U + e + e;
      case 6828:
      case 4268:
        return R + e + U + e + e;
      case 6165:
        return R + e + U + "flex-" + e + e;
      case 5187:
        return R + e + O(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + U + "flex-$1$2") + e;
      case 5443:
        return R + e + U + "flex-item-" + O(e, /flex-|-self/, "") + e;
      case 4675:
        return R + e + U + "flex-line-pack" + O(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return R + e + U + O(e, "shrink", "negative") + e;
      case 5292:
        return R + e + U + O(e, "basis", "preferred-size") + e;
      case 6060:
        return R + "box-" + O(e, "-grow", "") + R + e + U + O(e, "grow", "positive") + e;
      case 4554:
        return R + O(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
      case 6187:
        return O(O(O(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return O(e, /(image-set\([^]*)/, R + "$1$`$1");
      case 4968:
        return O(O(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + U + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return O(e, /(.+)-inline(.+)/, R + "$1$2") + e;
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
        if (me(e) - 1 - t > 6) switch (D(e, t + 1)) {
          case 109:
            if (D(e, t + 4) !== 45) break;
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + bt + (D(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Cr(e, "stretch") ? to(O(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (D(e, t + 1) !== 115) break;
      case 6444:
        switch (D(e, me(e) - 3 - (~Cr(e, "!important") && 10))) {
          case 107:
            return O(e, ":", ":" + R) + e;
          case 101:
            return O(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + R + (D(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + U + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (D(e, t + 11)) {
          case 114:
            return R + e + U + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return R + e + U + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return R + e + U + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return R + e + U + e + e;
    }
    return e;
  }
  var As = function(t, r, n, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case Or:
        t.return = to(t.value, t.length);
        break;
      case qn:
        return Oe([
          Ve(t, {
            value: O(t.value, "@", "@" + R)
          })
        ], o);
      case _r:
        if (t.length) return ds(t.props, function(s) {
          switch (fs(s, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return Oe([
                Ve(t, {
                  props: [
                    O(s, /:(read-\w+)/, ":" + bt + "$1")
                  ]
                })
              ], o);
            case "::placeholder":
              return Oe([
                Ve(t, {
                  props: [
                    O(s, /:(plac\w+)/, ":" + R + "input-$1")
                  ]
                }),
                Ve(t, {
                  props: [
                    O(s, /:(plac\w+)/, ":" + bt + "$1")
                  ]
                }),
                Ve(t, {
                  props: [
                    O(s, /:(plac\w+)/, U + "input-$1")
                  ]
                })
              ], o);
          }
          return "";
        });
    }
  }, Rs = [
    As
  ], _s = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(m) {
        var S = m.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Rs, s = {}, i, a = [];
    i = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(m) {
      for (var S = m.getAttribute("data-emotion").split(" "), b = 1; b < S.length; b++) s[S[b]] = true;
      a.push(m);
    });
    var c, u = [
      Ts,
      Ps
    ];
    {
      var l, f = [
        vs,
        $s(function(m) {
          l.insert(m);
        })
      ], d = Cs(u.concat(o, f)), y = function(S) {
        return Oe(Ss(S), d);
      };
      c = function(S, b, C, x) {
        l = C, y(S ? S + "{" + b.styles + "}" : b.styles), x && (h.inserted[b.name] = true);
      };
    }
    var h = {
      key: r,
      sheet: new ss({
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
    return h.sheet.hydrate(a), h;
  }, ro = {
    exports: {}
  }, j = {};
  var z = typeof Symbol == "function" && Symbol.for, jr = z ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ir = z ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Et = z ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Tt = z ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Pt = z ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, At = z ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Rt = z ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Lr = z ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, _t = z ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ot = z ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Mt = z ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Os = z ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, jt = z ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, It = z ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Ms = z ? /* @__PURE__ */ Symbol.for("react.block") : 60121, js = z ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Is = z ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Ls = z ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function oe(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case jr:
          switch (e = e.type, e) {
            case Lr:
            case _t:
            case Et:
            case Pt:
            case Tt:
            case Mt:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Rt:
                case Ot:
                case It:
                case jt:
                case At:
                  return e;
                default:
                  return t;
              }
          }
        case Ir:
          return t;
      }
    }
  }
  function no(e) {
    return oe(e) === _t;
  }
  j.AsyncMode = Lr;
  j.ConcurrentMode = _t;
  j.ContextConsumer = Rt;
  j.ContextProvider = At;
  j.Element = jr;
  j.ForwardRef = Ot;
  j.Fragment = Et;
  j.Lazy = It;
  j.Memo = jt;
  j.Portal = Ir;
  j.Profiler = Pt;
  j.StrictMode = Tt;
  j.Suspense = Mt;
  j.isAsyncMode = function(e) {
    return no(e) || oe(e) === Lr;
  };
  j.isConcurrentMode = no;
  j.isContextConsumer = function(e) {
    return oe(e) === Rt;
  };
  j.isContextProvider = function(e) {
    return oe(e) === At;
  };
  j.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jr;
  };
  j.isForwardRef = function(e) {
    return oe(e) === Ot;
  };
  j.isFragment = function(e) {
    return oe(e) === Et;
  };
  j.isLazy = function(e) {
    return oe(e) === It;
  };
  j.isMemo = function(e) {
    return oe(e) === jt;
  };
  j.isPortal = function(e) {
    return oe(e) === Ir;
  };
  j.isProfiler = function(e) {
    return oe(e) === Pt;
  };
  j.isStrictMode = function(e) {
    return oe(e) === Tt;
  };
  j.isSuspense = function(e) {
    return oe(e) === Mt;
  };
  j.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Et || e === _t || e === Pt || e === Tt || e === Mt || e === Os || typeof e == "object" && e !== null && (e.$$typeof === It || e.$$typeof === jt || e.$$typeof === At || e.$$typeof === Rt || e.$$typeof === Ot || e.$$typeof === js || e.$$typeof === Is || e.$$typeof === Ls || e.$$typeof === Ms);
  };
  j.typeOf = oe;
  ro.exports = j;
  var Ns = ro.exports, oo = Ns, Gs = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, Ws = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, so = {};
  so[oo.ForwardRef] = Gs;
  so[oo.Memo] = Ws;
  var Bs = true;
  function io(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
    }), n;
  }
  var Nr = function(t, r, n) {
    var o = t.key + "-" + r.name;
    (n === false || Bs === false) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
  }, Gr = function(t, r, n) {
    Nr(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var s = r;
      do
        t.insert(r === s ? "." + o : "", s, t.sheet, true), s = s.next;
      while (s !== void 0);
    }
  };
  function Fs(e) {
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
  var zs = {
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
  }, Ds = /[A-Z]|^ms/g, Ks = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ao = function(t) {
    return t.charCodeAt(1) === 45;
  }, Cn = function(t) {
    return t != null && typeof t != "boolean";
  }, mr = eo(function(e) {
    return ao(e) ? e : e.replace(Ds, "-$&").toLowerCase();
  }), $n = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(Ks, function(n, o, s) {
          return he = {
            name: o,
            styles: s,
            next: he
          }, o;
        });
    }
    return zs[t] !== 1 && !ao(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
  function Qe(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var o = r;
        if (o.anim === 1) return he = {
          name: o.name,
          styles: o.styles,
          next: he
        }, o.name;
        var s = r;
        if (s.styles !== void 0) {
          var i = s.next;
          if (i !== void 0) for (; i !== void 0; ) he = {
            name: i.name,
            styles: i.styles,
            next: he
          }, i = i.next;
          var a = s.styles + ";";
          return a;
        }
        return Vs(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var c = he, u = r(e);
          return he = c, Qe(e, t, u);
        }
        break;
      }
    }
    var l = r;
    if (t == null) return l;
    var f = t[l];
    return f !== void 0 ? f : l;
  }
  function Vs(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Qe(e, t, r[o]) + ";";
    else for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : Cn(a) && (n += mr(s) + ":" + $n(s, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0)) for (var c = 0; c < i.length; c++) Cn(i[c]) && (n += mr(s) + ":" + $n(s, i[c]) + ";");
      else {
        var u = Qe(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            n += mr(s) + ":" + u + ";";
            break;
          }
          default:
            n += s + "{" + u + "}";
        }
      }
    }
    return n;
  }
  var wn = /label:\s*([^\s;{]+)\s*(;|$)/g, he;
  function Lt(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, o = "";
    he = void 0;
    var s = e[0];
    if (s == null || s.raw === void 0) n = false, o += Qe(r, t, s);
    else {
      var i = s;
      o += i[0];
    }
    for (var a = 1; a < e.length; a++) if (o += Qe(r, t, e[a]), n) {
      var c = s;
      o += c[a];
    }
    wn.lastIndex = 0;
    for (var u = "", l; (l = wn.exec(o)) !== null; ) u += "-" + l[1];
    var f = Fs(o) + u;
    return {
      name: f,
      styles: o,
      next: he
    };
  }
  var Us = function(t) {
    return t();
  }, co = yt.useInsertionEffect ? yt.useInsertionEffect : false, uo = co || Us, kn = co || g.useLayoutEffect, lo = g.createContext(typeof HTMLElement < "u" ? _s({
    key: "css"
  }) : null), Hs = lo.Provider, Wr = function(t) {
    return g.forwardRef(function(r, n) {
      var o = g.useContext(lo);
      return t(r, o, n);
    });
  }, tt = g.createContext({}), Br = {}.hasOwnProperty, wr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ys = function(t, r) {
    var n = {};
    for (var o in r) Br.call(r, o) && (n[o] = r[o]);
    return n[wr] = t, n;
  }, qs = function(t) {
    var r = t.cache, n = t.serialized, o = t.isStringTag;
    return Nr(r, n, o), uo(function() {
      return Gr(r, n, o);
    }), null;
  }, Qs = Wr(function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[wr], s = [
      n
    ], i = "";
    typeof e.className == "string" ? i = io(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
    var a = Lt(s, void 0, g.useContext(tt));
    i += t.key + "-" + a.name;
    var c = {};
    for (var u in e) Br.call(e, u) && u !== "css" && u !== wr && (c[u] = e[u]);
    return c.className = i, r && (c.ref = r), g.createElement(g.Fragment, null, g.createElement(qs, {
      cache: t,
      serialized: a,
      isStringTag: typeof o == "string"
    }), g.createElement(o, c));
  }), Xs = Qs, En = function(t, r) {
    var n = arguments;
    if (r == null || !Br.call(r, "css")) return g.createElement.apply(void 0, n);
    var o = n.length, s = new Array(o);
    s[0] = Xs, s[1] = Ys(t, r);
    for (var i = 2; i < o; i++) s[i] = n[i];
    return g.createElement.apply(null, s);
  };
  (function(e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}));
  })(En || (En = {}));
  var Zs = Wr(function(e, t) {
    var r = e.styles, n = Lt([
      r
    ], void 0, g.useContext(tt)), o = g.useRef();
    return kn(function() {
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
    ]), kn(function() {
      var s = o.current, i = s[0], a = s[1];
      if (a) {
        s[1] = false;
        return;
      }
      if (n.next !== void 0 && Gr(t, n.next, true), i.tags.length) {
        var c = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = c, i.flush();
      }
      t.insert("", n, i, false);
    }, [
      t,
      n.name
    ]), null;
  });
  Js = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return Lt(t);
  };
  ol = function() {
    var e = Js.apply(void 0, arguments), t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var ei = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ti = eo(function(e) {
    return ei.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }), ri = ti, ni = function(t) {
    return t !== "theme";
  }, Tn = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? ri : ni;
  }, Pn = function(t, r, n) {
    var o;
    if (r) {
      var s = r.shouldForwardProp;
      o = t.__emotion_forwardProp && s ? function(i) {
        return t.__emotion_forwardProp(i) && s(i);
      } : s;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  }, oi = function(t) {
    var r = t.cache, n = t.serialized, o = t.isStringTag;
    return Nr(r, n, o), uo(function() {
      return Gr(r, n, o);
    }), null;
  }, si = function e(t, r) {
    var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, i;
    r !== void 0 && (s = r.label, i = r.target);
    var a = Pn(t, r, n), c = a || Tn(o), u = !c("as");
    return function() {
      var l = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (s !== void 0 && f.push("label:" + s + ";"), l[0] == null || l[0].raw === void 0) f.push.apply(f, l);
      else {
        var d = l[0];
        f.push(d[0]);
        for (var y = l.length, h = 1; h < y; h++) f.push(l[h], d[h]);
      }
      var m = Wr(function(S, b, C) {
        var x = u && S.as || o, A = "", E = [], w = S;
        if (S.theme == null) {
          w = {};
          for (var p in S) w[p] = S[p];
          w.theme = g.useContext(tt);
        }
        typeof S.className == "string" ? A = io(b.registered, E, S.className) : S.className != null && (A = S.className + " ");
        var $ = Lt(f.concat(E), b.registered, w);
        A += b.key + "-" + $.name, i !== void 0 && (A += " " + i);
        var k = u && a === void 0 ? Tn(x) : c, T = {};
        for (var P in S) u && P === "as" || k(P) && (T[P] = S[P]);
        return T.className = A, C && (T.ref = C), g.createElement(g.Fragment, null, g.createElement(oi, {
          cache: b,
          serialized: $,
          isStringTag: typeof x == "string"
        }), g.createElement(x, T));
      });
      return m.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = f, m.__emotion_forwardProp = a, Object.defineProperty(m, "toString", {
        value: function() {
          return "." + i;
        }
      }), m.withComponent = function(S, b) {
        var C = e(S, vr({}, r, b, {
          shouldForwardProp: Pn(m, b, true)
        }));
        return C.apply(void 0, f);
      }, m;
    };
  }, ii = [
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
  ], kr = si.bind(null);
  ii.forEach(function(e) {
    kr[e] = kr(e);
  });
  function ai(e) {
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
  var ci = {
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
  };
  function ui(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var li = /[A-Z]|^ms/g, fi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fo = function(t) {
    return t.charCodeAt(1) === 45;
  }, An = function(t) {
    return t != null && typeof t != "boolean";
  }, hr = ui(function(e) {
    return fo(e) ? e : e.replace(li, "-$&").toLowerCase();
  }), Rn = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(fi, function(n, o, s) {
          return we = {
            name: o,
            styles: s,
            next: we
          }, o;
        });
    }
    return ci[t] !== 1 && !fo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
  function St(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var o = r;
        if (o.anim === 1) return we = {
          name: o.name,
          styles: o.styles,
          next: we
        }, o.name;
        var s = r;
        if (s.styles !== void 0) {
          var i = s.next;
          if (i !== void 0) for (; i !== void 0; ) we = {
            name: i.name,
            styles: i.styles,
            next: we
          }, i = i.next;
          var a = s.styles + ";";
          return a;
        }
        return di(e, t, r);
      }
    }
    var c = r;
    return c;
  }
  function di(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += St(e, t, r[o]) + ";";
    else for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        An(a) && (n += hr(s) + ":" + Rn(s, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && t == null) for (var c = 0; c < i.length; c++) An(i[c]) && (n += hr(s) + ":" + Rn(s, i[c]) + ";");
      else {
        var u = St(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            n += hr(s) + ":" + u + ";";
            break;
          }
          default:
            n += s + "{" + u + "}";
        }
      }
    }
    return n;
  }
  var _n = /label:\s*([^\s;{]+)\s*(;|$)/g, we;
  function mi(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, o = "";
    we = void 0;
    var s = e[0];
    if (s == null || s.raw === void 0) n = false, o += St(r, t, s);
    else {
      var i = s;
      o += i[0];
    }
    for (var a = 1; a < e.length; a++) if (o += St(r, t, e[a]), n) {
      var c = s;
      o += c[a];
    }
    _n.lastIndex = 0;
    for (var u = "", l; (l = _n.exec(o)) !== null; ) u += "-" + l[1];
    var f = ai(o) + u;
    return {
      name: f,
      styles: o,
      next: we
    };
  }
  function hi(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function pi(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  var mo = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(pi(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var s = hi(o);
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
  })(), H = "-ms-", xt = "-moz-", _ = "-webkit-", ho = "comm", Fr = "rule", zr = "decl", yi = "@import", po = "@keyframes", gi = "@layer", bi = Math.abs, Nt = String.fromCharCode, Si = Object.assign;
  function xi(e, t) {
    return K(e, 0) ^ 45 ? (((t << 2 ^ K(e, 0)) << 2 ^ K(e, 1)) << 2 ^ K(e, 2)) << 2 ^ K(e, 3) : 0;
  }
  function yo(e) {
    return e.trim();
  }
  function vi(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function M(e, t, r) {
    return e.replace(t, r);
  }
  function Er(e, t) {
    return e.indexOf(t);
  }
  function K(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Xe(e, t, r) {
    return e.slice(t, r);
  }
  function pe(e) {
    return e.length;
  }
  function Dr(e) {
    return e.length;
  }
  function ct(e, t) {
    return t.push(e), e;
  }
  function Ci(e, t) {
    return e.map(t).join("");
  }
  var Gt = 1, Ge = 1, go = 0, Z = 0, W = 0, Be = "";
  function Wt(e, t, r, n, o, s, i) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: o,
      children: s,
      line: Gt,
      column: Ge,
      length: i,
      return: ""
    };
  }
  function Ue(e, t) {
    return Si(Wt("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function $i() {
    return W;
  }
  function wi() {
    return W = Z > 0 ? K(Be, --Z) : 0, Ge--, W === 10 && (Ge = 1, Gt--), W;
  }
  function ne() {
    return W = Z < go ? K(Be, Z++) : 0, Ge++, W === 10 && (Ge = 1, Gt++), W;
  }
  function ge() {
    return K(Be, Z);
  }
  function dt() {
    return Z;
  }
  function rt(e, t) {
    return Xe(Be, e, t);
  }
  function Ze(e) {
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
  function bo(e) {
    return Gt = Ge = 1, go = pe(Be = e), Z = 0, [];
  }
  function So(e) {
    return Be = "", e;
  }
  function mt(e) {
    return yo(rt(Z - 1, Tr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function ki(e) {
    for (; (W = ge()) && W < 33; ) ne();
    return Ze(e) > 2 || Ze(W) > 3 ? "" : " ";
  }
  function Ei(e, t) {
    for (; --t && ne() && !(W < 48 || W > 102 || W > 57 && W < 65 || W > 70 && W < 97); ) ;
    return rt(e, dt() + (t < 6 && ge() == 32 && ne() == 32));
  }
  function Tr(e) {
    for (; ne(); ) switch (W) {
      case e:
        return Z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Tr(W);
        break;
      case 40:
        e === 41 && Tr(e);
        break;
      case 92:
        ne();
        break;
    }
    return Z;
  }
  function Ti(e, t) {
    for (; ne() && e + W !== 57; ) if (e + W === 84 && ge() === 47) break;
    return "/*" + rt(t, Z - 1) + "*" + Nt(e === 47 ? e : ne());
  }
  function Pi(e) {
    for (; !Ze(ge()); ) ne();
    return rt(e, Z);
  }
  function Ai(e) {
    return So(ht("", null, null, null, [
      ""
    ], e = bo(e), 0, [
      0
    ], e));
  }
  function ht(e, t, r, n, o, s, i, a, c) {
    for (var u = 0, l = 0, f = i, d = 0, y = 0, h = 0, m = 1, S = 1, b = 1, C = 0, x = "", A = o, E = s, w = n, p = x; S; ) switch (h = C, C = ne()) {
      case 40:
        if (h != 108 && K(p, f - 1) == 58) {
          Er(p += M(mt(C), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        p += mt(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        p += ki(h);
        break;
      case 92:
        p += Ei(dt() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            ct(Ri(Ti(ne(), dt()), t, r), c);
            break;
          default:
            p += "/";
        }
        break;
      case 123 * m:
        a[u++] = pe(p) * b;
      case 125 * m:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            S = 0;
          case 59 + l:
            b == -1 && (p = M(p, /\f/g, "")), y > 0 && pe(p) - f && ct(y > 32 ? Mn(p + ";", n, r, f - 1) : Mn(M(p, " ", "") + ";", n, r, f - 2), c);
            break;
          case 59:
            p += ";";
          default:
            if (ct(w = On(p, t, r, u, l, o, a, x, A = [], E = [], f), s), C === 123) if (l === 0) ht(p, t, w, w, A, s, f, a, E);
            else switch (d === 99 && K(p, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                ht(e, w, w, n && ct(On(e, w, w, 0, 0, o, a, x, o, A = [], f), E), o, E, f, a, n ? A : E);
                break;
              default:
                ht(p, w, w, w, [
                  ""
                ], E, 0, a, E);
            }
        }
        u = l = y = 0, m = b = 1, x = p = "", f = i;
        break;
      case 58:
        f = 1 + pe(p), y = h;
      default:
        if (m < 1) {
          if (C == 123) --m;
          else if (C == 125 && m++ == 0 && wi() == 125) continue;
        }
        switch (p += Nt(C), C * m) {
          case 38:
            b = l > 0 ? 1 : (p += "\f", -1);
            break;
          case 44:
            a[u++] = (pe(p) - 1) * b, b = 1;
            break;
          case 64:
            ge() === 45 && (p += mt(ne())), d = ge(), l = f = pe(x = p += Pi(dt())), C++;
            break;
          case 45:
            h === 45 && pe(p) == 2 && (m = 0);
        }
    }
    return s;
  }
  function On(e, t, r, n, o, s, i, a, c, u, l) {
    for (var f = o - 1, d = o === 0 ? s : [
      ""
    ], y = Dr(d), h = 0, m = 0, S = 0; h < n; ++h) for (var b = 0, C = Xe(e, f + 1, f = bi(m = i[h])), x = e; b < y; ++b) (x = yo(m > 0 ? d[b] + " " + C : M(C, /&\f/g, d[b]))) && (c[S++] = x);
    return Wt(e, t, r, o === 0 ? Fr : a, c, u, l);
  }
  function Ri(e, t, r) {
    return Wt(e, t, r, ho, Nt($i()), Xe(e, 2, -2), 0);
  }
  function Mn(e, t, r, n) {
    return Wt(e, t, r, zr, Xe(e, 0, n), Xe(e, n + 1, -1), n);
  }
  function Me(e, t) {
    for (var r = "", n = Dr(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
    return r;
  }
  function _i(e, t, r, n) {
    switch (e.type) {
      case gi:
        if (e.children.length) break;
      case yi:
      case zr:
        return e.return = e.return || e.value;
      case ho:
        return "";
      case po:
        return e.return = e.value + "{" + Me(e.children, n) + "}";
      case Fr:
        e.value = e.props.join(",");
    }
    return pe(r = Me(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function Oi(e) {
    var t = Dr(e);
    return function(r, n, o, s) {
      for (var i = "", a = 0; a < t; a++) i += e[a](r, n, o, s) || "";
      return i;
    };
  }
  function Mi(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  var ji = function(t, r, n) {
    for (var o = 0, s = 0; o = s, s = ge(), o === 38 && s === 12 && (r[n] = 1), !Ze(s); ) ne();
    return rt(t, Z);
  }, Ii = function(t, r) {
    var n = -1, o = 44;
    do
      switch (Ze(o)) {
        case 0:
          o === 38 && ge() === 12 && (r[n] = 1), t[n] += ji(Z - 1, r, n);
          break;
        case 2:
          t[n] += mt(o);
          break;
        case 4:
          if (o === 44) {
            t[++n] = ge() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += Nt(o);
      }
    while (o = ne());
    return t;
  }, Li = function(t, r) {
    return So(Ii(bo(t), r));
  }, jn = /* @__PURE__ */ new WeakMap(), Ni = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jn.get(n)) && !o) {
        jn.set(t, true);
        for (var s = [], i = Li(r, s), a = n.props, c = 0, u = 0; c < i.length; c++) for (var l = 0; l < a.length; l++, u++) t.props[u] = s[c] ? i[c].replace(/&\f/g, a[l]) : a[l] + " " + i[c];
      }
    }
  }, Gi = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function xo(e, t) {
    switch (xi(e, t)) {
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
        return _ + e + xt + e + H + e + e;
      case 6828:
      case 4268:
        return _ + e + H + e + e;
      case 6165:
        return _ + e + H + "flex-" + e + e;
      case 5187:
        return _ + e + M(e, /(\w+).+(:[^]+)/, _ + "box-$1$2" + H + "flex-$1$2") + e;
      case 5443:
        return _ + e + H + "flex-item-" + M(e, /flex-|-self/, "") + e;
      case 4675:
        return _ + e + H + "flex-line-pack" + M(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return _ + e + H + M(e, "shrink", "negative") + e;
      case 5292:
        return _ + e + H + M(e, "basis", "preferred-size") + e;
      case 6060:
        return _ + "box-" + M(e, "-grow", "") + _ + e + H + M(e, "grow", "positive") + e;
      case 4554:
        return _ + M(e, /([^-])(transform)/g, "$1" + _ + "$2") + e;
      case 6187:
        return M(M(M(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return M(e, /(image-set\([^]*)/, _ + "$1$`$1");
      case 4968:
        return M(M(e, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return M(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
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
        if (pe(e) - 1 - t > 6) switch (K(e, t + 1)) {
          case 109:
            if (K(e, t + 4) !== 45) break;
          case 102:
            return M(e, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + xt + (K(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Er(e, "stretch") ? xo(M(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (K(e, t + 1) !== 115) break;
      case 6444:
        switch (K(e, pe(e) - 3 - (~Er(e, "!important") && 10))) {
          case 107:
            return M(e, ":", ":" + _) + e;
          case 101:
            return M(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + _ + (K(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + H + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (K(e, t + 11)) {
          case 114:
            return _ + e + H + M(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return _ + e + H + M(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return _ + e + H + M(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return _ + e + H + e + e;
    }
    return e;
  }
  var Wi = function(t, r, n, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case zr:
        t.return = xo(t.value, t.length);
        break;
      case po:
        return Me([
          Ue(t, {
            value: M(t.value, "@", "@" + _)
          })
        ], o);
      case Fr:
        if (t.length) return Ci(t.props, function(s) {
          switch (vi(s, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return Me([
                Ue(t, {
                  props: [
                    M(s, /:(read-\w+)/, ":" + xt + "$1")
                  ]
                })
              ], o);
            case "::placeholder":
              return Me([
                Ue(t, {
                  props: [
                    M(s, /:(plac\w+)/, ":" + _ + "input-$1")
                  ]
                }),
                Ue(t, {
                  props: [
                    M(s, /:(plac\w+)/, ":" + xt + "$1")
                  ]
                }),
                Ue(t, {
                  props: [
                    M(s, /:(plac\w+)/, H + "input-$1")
                  ]
                })
              ], o);
          }
          return "";
        });
    }
  }, Bi = [
    Wi
  ], Fi = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(m) {
        var S = m.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Bi, s = {}, i, a = [];
    i = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(m) {
      for (var S = m.getAttribute("data-emotion").split(" "), b = 1; b < S.length; b++) s[S[b]] = true;
      a.push(m);
    });
    var c, u = [
      Ni,
      Gi
    ];
    {
      var l, f = [
        _i,
        Mi(function(m) {
          l.insert(m);
        })
      ], d = Oi(u.concat(o, f)), y = function(S) {
        return Me(Ai(S), d);
      };
      c = function(S, b, C, x) {
        l = C, y(S ? S + "{" + b.styles + "}" : b.styles), x && (h.inserted[b.name] = true);
      };
    }
    var h = {
      key: r,
      sheet: new mo({
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
    return h.sheet.hydrate(a), h;
  }, vo = {
    exports: {}
  }, Bt = {};
  var zi = /* @__PURE__ */ Symbol.for("react.transitional.element"), Di = /* @__PURE__ */ Symbol.for("react.fragment");
  function Co(e, t, r) {
    var n = null;
    if (r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), "key" in t) {
      r = {};
      for (var o in t) o !== "key" && (r[o] = t[o]);
    } else r = t;
    return t = r.ref, {
      $$typeof: zi,
      type: e,
      key: n,
      ref: t !== void 0 ? t : null,
      props: r
    };
  }
  Bt.Fragment = Di;
  Bt.jsx = Co;
  Bt.jsxs = Co;
  vo.exports = Bt;
  var B = vo.exports;
  const pr = /* @__PURE__ */ new Map(), Ki = (e, t) => {
    const r = Fi(e);
    return r.sheet = new t({
      key: r.key,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy,
      prepend: r.sheet.prepend,
      insertionPoint: r.sheet.insertionPoint
    }), r;
  };
  let Ce;
  if (typeof document == "object" && (Ce = document.querySelector('[name="emotion-insertion-point"]'), !Ce)) {
    Ce = document.createElement("meta"), Ce.setAttribute("name", "emotion-insertion-point"), Ce.setAttribute("content", "");
    const e = document.querySelector("head");
    e && e.prepend(Ce);
  }
  function Vi(e, t) {
    if (e || t) {
      class r extends mo {
        insert(s, i) {
          return this.key && this.key.endsWith("global") && (this.before = Ce), super.insert(s, i);
        }
      }
      const n = Ki({
        key: "css",
        insertionPoint: e ? Ce : void 0
      }, r);
      if (t) {
        const o = n.insert;
        n.insert = (...s) => (s[1].styles.match(/^@layer\s+[^{]*$/) || (s[1].styles = `@layer mui {${s[1].styles}}`), o(...s));
      }
      return n;
    }
  }
  sl = function(e) {
    const { injectFirst: t, enableCssLayer: r, children: n } = e, o = g.useMemo(() => {
      const s = `${t}-${r}`;
      if (typeof document == "object" && pr.has(s)) return pr.get(s);
      const i = Vi(t, r);
      return pr.set(s, i), i;
    }, [
      t,
      r
    ]);
    return o ? B.jsx(Hs, {
      value: o,
      children: n
    }) : n;
  };
  function Ui(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function $o(e) {
    const { styles: t, defaultTheme: r = {} } = e, n = typeof t == "function" ? (o) => t(Ui(o) ? r : o) : t;
    return B.jsx(Zs, {
      styles: n
    });
  }
  function wo(e, t) {
    return kr(e, t);
  }
  function Hi(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  }
  const In = [];
  function ke(e) {
    return In[0] = e, mi(In);
  }
  var ko = {
    exports: {}
  }, I = {};
  var Kr = /* @__PURE__ */ Symbol.for("react.transitional.element"), Vr = /* @__PURE__ */ Symbol.for("react.portal"), Ft = /* @__PURE__ */ Symbol.for("react.fragment"), zt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Dt = /* @__PURE__ */ Symbol.for("react.profiler"), Kt = /* @__PURE__ */ Symbol.for("react.consumer"), Vt = /* @__PURE__ */ Symbol.for("react.context"), Ut = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ht = /* @__PURE__ */ Symbol.for("react.suspense"), Yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), qt = /* @__PURE__ */ Symbol.for("react.memo"), Qt = /* @__PURE__ */ Symbol.for("react.lazy"), Yi = /* @__PURE__ */ Symbol.for("react.view_transition"), qi = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ae(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Kr:
          switch (e = e.type, e) {
            case Ft:
            case Dt:
            case zt:
            case Ht:
            case Yt:
            case Yi:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Vt:
                case Ut:
                case Qt:
                case qt:
                  return e;
                case Kt:
                  return e;
                default:
                  return t;
              }
          }
        case Vr:
          return t;
      }
    }
  }
  I.ContextConsumer = Kt;
  I.ContextProvider = Vt;
  I.Element = Kr;
  I.ForwardRef = Ut;
  I.Fragment = Ft;
  I.Lazy = Qt;
  I.Memo = qt;
  I.Portal = Vr;
  I.Profiler = Dt;
  I.StrictMode = zt;
  I.Suspense = Ht;
  I.SuspenseList = Yt;
  I.isContextConsumer = function(e) {
    return ae(e) === Kt;
  };
  I.isContextProvider = function(e) {
    return ae(e) === Vt;
  };
  I.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kr;
  };
  I.isForwardRef = function(e) {
    return ae(e) === Ut;
  };
  I.isFragment = function(e) {
    return ae(e) === Ft;
  };
  I.isLazy = function(e) {
    return ae(e) === Qt;
  };
  I.isMemo = function(e) {
    return ae(e) === qt;
  };
  I.isPortal = function(e) {
    return ae(e) === Vr;
  };
  I.isProfiler = function(e) {
    return ae(e) === Dt;
  };
  I.isStrictMode = function(e) {
    return ae(e) === zt;
  };
  I.isSuspense = function(e) {
    return ae(e) === Ht;
  };
  I.isSuspenseList = function(e) {
    return ae(e) === Yt;
  };
  I.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ft || e === Dt || e === zt || e === Ht || e === Yt || typeof e == "object" && e !== null && (e.$$typeof === Qt || e.$$typeof === qt || e.$$typeof === Vt || e.$$typeof === Kt || e.$$typeof === Ut || e.$$typeof === qi || e.getModuleId !== void 0);
  };
  I.typeOf = ae;
  ko.exports = I;
  var Eo = ko.exports;
  function $e(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function To(e) {
    if (g.isValidElement(e) || Eo.isValidElementType(e) || !$e(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = To(e[r]);
    }), t;
  }
  function be(e, t, r = {
    clone: true
  }) {
    const n = r.clone ? {
      ...e
    } : e;
    return $e(e) && $e(t) && Object.keys(t).forEach((o) => {
      g.isValidElement(t[o]) || Eo.isValidElementType(t[o]) ? n[o] = t[o] : $e(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && $e(e[o]) ? n[o] = be(e[o], t[o], r) : r.clone ? n[o] = $e(t[o]) ? To(t[o]) : t[o] : n[o] = t[o];
    }), n;
  }
  const Qi = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
      ...r,
      [n.key]: n.val
    }), {});
  };
  Xi = function(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: n = 5, ...o } = e, s = Qi(t), i = Object.keys(s);
    function a(d) {
      return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
    }
    function c(d) {
      return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
    }
    function u(d, y) {
      const h = i.indexOf(y);
      return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(h !== -1 && typeof t[i[h]] == "number" ? t[i[h]] : y) - n / 100}${r})`;
    }
    function l(d) {
      return i.indexOf(d) + 1 < i.length ? u(d, i[i.indexOf(d) + 1]) : a(d);
    }
    function f(d) {
      const y = i.indexOf(d);
      return y === 0 ? a(i[1]) : y === i.length - 1 ? c(i[y]) : u(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: s,
      up: a,
      down: c,
      between: u,
      only: l,
      not: f,
      unit: r,
      ...o
    };
  };
  function Ln(e, t) {
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
  function Zi(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function Ji(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
    return e.containerQueries(o).up(s);
  }
  ea = function(e) {
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
  ta = {
    borderRadius: 4
  };
  il = {};
  function je(e, t) {
    return t ? be(e, t, {
      clone: false
    }) : e;
  }
  const Xt = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Pr = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (e) => `@media (min-width:${Xt[e]}px)`
  }, ra = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : Xt[t] || t;
        return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
      }
    })
  };
  le = function(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const s = n.breakpoints || Pr;
      return t.reduce((i, a, c) => (i[s.up(s.keys[c])] = r(t[c]), i), {});
    }
    if (typeof t == "object") {
      const s = n.breakpoints || Pr;
      return Object.keys(t).reduce((i, a) => {
        if (Zi(s.keys, a)) {
          const c = Ji(n.containerQueries ? n : ra, a);
          c && (i[c] = r(t[a], a));
        } else if (Object.keys(s.values || Xt).includes(a)) {
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
  al = function(e) {
    const t = (r) => {
      const n = r.theme || {}, o = e(r), s = n.breakpoints || Pr, i = s.keys.reduce((a, c) => (r[c] && (a = a || {}, a[s.up(c)] = e({
        theme: n,
        ...r[c]
      })), a), null);
      return je(o, i);
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
  function Po(e = {}) {
    var _a2;
    return ((_a2 = e.keys) == null ? void 0 : _a2.reduce((r, n) => {
      const o = e.up(n);
      return r[o] = {}, r;
    }, {})) || {};
  }
  function Ar(e, t) {
    return e.reduce((r, n) => {
      const o = r[n];
      return (!o || Object.keys(o).length === 0) && delete r[n], r;
    }, t);
  }
  na = function(e, ...t) {
    const r = Po(e), n = [
      r,
      ...t
    ].reduce((o, s) => be(o, s), {});
    return Ar(Object.keys(r), n);
  };
  function oa(e, t) {
    if (typeof e != "object") return {};
    const r = {}, n = Object.keys(t);
    return Array.isArray(e) ? n.forEach((o, s) => {
      s < e.length && (r[o] = true);
    }) : n.forEach((o) => {
      e[o] != null && (r[o] = true);
    }), r;
  }
  yr = function({ values: e, breakpoints: t, base: r }) {
    const n = r || oa(e, t), o = Object.keys(n);
    if (o.length === 0) return e;
    let s;
    return o.reduce((i, a, c) => (Array.isArray(e) ? (i[a] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
  };
  function Zt(e) {
    if (typeof e != "string") throw new Error(gt(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  Jt = function(e, t, r = true) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
      if (n != null) return n;
    }
    return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
  };
  vt = function(e, t, r, n = r) {
    let o;
    return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Jt(e, r) || n, t && (o = t(o, n, e)), o;
  };
  v = function(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e, s = (i) => {
      if (i[t] == null) return null;
      const a = i[t], c = i.theme, u = Jt(c, n) || {};
      return le(i, a, (f) => {
        let d = vt(u, o, f);
        return f === d && typeof f == "string" && (d = vt(u, o, `${t}${f === "default" ? "" : Zt(f)}`, f)), r === false ? d : {
          [r]: d
        };
      });
    };
    return s.propTypes = {}, s.filterProps = [
      t
    ], s;
  };
  function sa(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  let ia, aa, Nn, ca, Ao;
  ia = {
    m: "margin",
    p: "padding"
  };
  aa = {
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
  Nn = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  ca = sa((e) => {
    if (e.length > 2) if (Nn[e]) e = Nn[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), n = ia[t], o = aa[r] || "";
    return Array.isArray(o) ? o.map((s) => n + s) : [
      n + o
    ];
  });
  Ur = [
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
  Hr = [
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
  Ao = [
    ...Ur,
    ...Hr
  ];
  nt = function(e, t, r, n) {
    const o = Jt(e, t, true) ?? r;
    return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : typeof o == "string" ? `calc(${s} * ${o})` : o * s : Array.isArray(o) ? (s) => {
      if (typeof s == "string") return s;
      const i = Math.abs(s), a = o[i];
      return s >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof o == "function" ? o : () => {
    };
  };
  Yr = function(e) {
    return nt(e, "spacing", 8);
  };
  Pe = function(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  };
  ua = function(e, t) {
    return (r) => e.reduce((n, o) => (n[o] = Pe(t, r), n), {});
  };
  function la(e, t, r, n) {
    if (!t.includes(r)) return null;
    const o = ca(r), s = ua(o, n), i = e[r];
    return le(e, i, s);
  }
  function qr(e, t) {
    const r = Yr(e.theme);
    return Object.keys(e).map((n) => la(e, t, n, r)).reduce(je, {});
  }
  L = function(e) {
    return qr(e, Ur);
  };
  L.propTypes = {};
  L.filterProps = Ur;
  N = function(e) {
    return qr(e, Hr);
  };
  N.propTypes = {};
  N.filterProps = Hr;
  er = function(e) {
    return qr(e, Ao);
  };
  er.propTypes = {};
  er.filterProps = Ao;
  fa = function(e = 8, t = Yr({
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
  Ee = function(...e) {
    const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
      n[s] = o;
    }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? je(o, t[s](n)) : o, {});
    return r.propTypes = {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
  };
  ie = function(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  };
  function ce(e, t) {
    return v({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  da = ce("border", ie);
  ma = ce("borderTop", ie);
  ha = ce("borderRight", ie);
  pa = ce("borderBottom", ie);
  ya = ce("borderLeft", ie);
  ga = ce("borderColor");
  ba = ce("borderTopColor");
  Sa = ce("borderRightColor");
  xa = ce("borderBottomColor");
  va = ce("borderLeftColor");
  Ca = ce("outline", ie);
  $a = ce("outlineColor");
  tr = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = nt(e.theme, "shape.borderRadius", 4), r = (n) => ({
        borderRadius: Pe(t, n)
      });
      return le(e, e.borderRadius, r);
    }
    return null;
  };
  tr.propTypes = {};
  tr.filterProps = [
    "borderRadius"
  ];
  Ro = Ee(da, ma, ha, pa, ya, ga, ba, Sa, xa, va, tr, Ca, $a);
  rr = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = nt(e.theme, "spacing", 8), r = (n) => ({
        gap: Pe(t, n)
      });
      return le(e, e.gap, r);
    }
    return null;
  };
  rr.propTypes = {};
  rr.filterProps = [
    "gap"
  ];
  nr = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = nt(e.theme, "spacing", 8), r = (n) => ({
        columnGap: Pe(t, n)
      });
      return le(e, e.columnGap, r);
    }
    return null;
  };
  nr.propTypes = {};
  nr.filterProps = [
    "columnGap"
  ];
  or = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = nt(e.theme, "spacing", 8), r = (n) => ({
        rowGap: Pe(t, n)
      });
      return le(e, e.rowGap, r);
    }
    return null;
  };
  or.propTypes = {};
  or.filterProps = [
    "rowGap"
  ];
  wa = v({
    prop: "gridColumn"
  });
  ka = v({
    prop: "gridRow"
  });
  Ea = v({
    prop: "gridAutoFlow"
  });
  Ta = v({
    prop: "gridAutoColumns"
  });
  Pa = v({
    prop: "gridAutoRows"
  });
  Aa = v({
    prop: "gridTemplateColumns"
  });
  Ra = v({
    prop: "gridTemplateRows"
  });
  _a = v({
    prop: "gridTemplateAreas"
  });
  Oa = v({
    prop: "gridArea"
  });
  _o = Ee(rr, nr, or, wa, ka, Ea, Ta, Pa, Aa, Ra, _a, Oa);
  Ie = function(e, t) {
    return t === "grey" ? t : e;
  };
  Ma = v({
    prop: "color",
    themeKey: "palette",
    transform: Ie
  });
  ja = v({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Ie
  });
  Ia = v({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: Ie
  });
  Oo = Ee(Ma, ja, Ia);
  te = function(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  };
  La = v({
    prop: "width",
    transform: te
  });
  Qr = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var _a2, _b, _c2, _d, _e;
        const n = ((_c2 = (_b = (_a2 = e.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c2[r]) || Xt[r];
        return n ? ((_e = (_d = e.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? {
          maxWidth: `${n}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: n
        } : {
          maxWidth: te(r)
        };
      };
      return le(e, e.maxWidth, t);
    }
    return null;
  };
  Qr.filterProps = [
    "maxWidth"
  ];
  Na = v({
    prop: "minWidth",
    transform: te
  });
  Ga = v({
    prop: "height",
    transform: te
  });
  Wa = v({
    prop: "maxHeight",
    transform: te
  });
  Ba = v({
    prop: "minHeight",
    transform: te
  });
  cl = v({
    prop: "size",
    cssProperty: "width",
    transform: te
  });
  ul = v({
    prop: "size",
    cssProperty: "height",
    transform: te
  });
  Fa = v({
    prop: "boxSizing"
  });
  Mo = Ee(La, Qr, Na, Ga, Wa, Ba, Fa);
  Xr = {
    border: {
      themeKey: "borders",
      transform: ie
    },
    borderTop: {
      themeKey: "borders",
      transform: ie
    },
    borderRight: {
      themeKey: "borders",
      transform: ie
    },
    borderBottom: {
      themeKey: "borders",
      transform: ie
    },
    borderLeft: {
      themeKey: "borders",
      transform: ie
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
      transform: ie
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: tr
    },
    color: {
      themeKey: "palette",
      transform: Ie
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Ie
    },
    backgroundColor: {
      themeKey: "palette",
      transform: Ie
    },
    p: {
      style: N
    },
    pt: {
      style: N
    },
    pr: {
      style: N
    },
    pb: {
      style: N
    },
    pl: {
      style: N
    },
    px: {
      style: N
    },
    py: {
      style: N
    },
    padding: {
      style: N
    },
    paddingTop: {
      style: N
    },
    paddingRight: {
      style: N
    },
    paddingBottom: {
      style: N
    },
    paddingLeft: {
      style: N
    },
    paddingX: {
      style: N
    },
    paddingY: {
      style: N
    },
    paddingInline: {
      style: N
    },
    paddingInlineStart: {
      style: N
    },
    paddingInlineEnd: {
      style: N
    },
    paddingBlock: {
      style: N
    },
    paddingBlockStart: {
      style: N
    },
    paddingBlockEnd: {
      style: N
    },
    m: {
      style: L
    },
    mt: {
      style: L
    },
    mr: {
      style: L
    },
    mb: {
      style: L
    },
    ml: {
      style: L
    },
    mx: {
      style: L
    },
    my: {
      style: L
    },
    margin: {
      style: L
    },
    marginTop: {
      style: L
    },
    marginRight: {
      style: L
    },
    marginBottom: {
      style: L
    },
    marginLeft: {
      style: L
    },
    marginX: {
      style: L
    },
    marginY: {
      style: L
    },
    marginInline: {
      style: L
    },
    marginInlineStart: {
      style: L
    },
    marginInlineEnd: {
      style: L
    },
    marginBlock: {
      style: L
    },
    marginBlockStart: {
      style: L
    },
    marginBlockEnd: {
      style: L
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
      style: rr
    },
    rowGap: {
      style: or
    },
    columnGap: {
      style: nr
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
      transform: te
    },
    maxWidth: {
      style: Qr
    },
    minWidth: {
      transform: te
    },
    height: {
      transform: te
    },
    maxHeight: {
      transform: te
    },
    minHeight: {
      transform: te
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
  function za(...e) {
    const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
    return e.every((n) => r.size === Object.keys(n).length);
  }
  function Da(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  Ka = function() {
    function e(r, n, o, s) {
      const i = {
        [r]: n,
        theme: o
      }, a = s[r];
      if (!a) return {
        [r]: n
      };
      const { cssProperty: c = r, themeKey: u, transform: l, style: f } = a;
      if (n == null) return null;
      if (u === "typography" && n === "inherit") return {
        [r]: n
      };
      const d = Jt(o, u) || {};
      return f ? f(i) : le(i, n, (h) => {
        let m = vt(d, l, h);
        return h === m && typeof h == "string" && (m = vt(d, l, `${r}${h === "default" ? "" : Zt(h)}`, h)), c === false ? m : {
          [c]: m
        };
      });
    }
    function t(r) {
      const { sx: n, theme: o = {}, nested: s } = r || {};
      if (!n) return null;
      const i = o.unstable_sxConfig ?? Xr;
      function a(c) {
        let u = c;
        if (typeof c == "function") u = c(o);
        else if (typeof c != "object") return c;
        if (!u) return null;
        const l = Po(o.breakpoints), f = Object.keys(l);
        let d = l;
        return Object.keys(u).forEach((y) => {
          const h = Da(u[y], o);
          if (h != null) if (typeof h == "object") if (i[y]) d = je(d, e(y, h, o, i));
          else {
            const m = le({
              theme: o
            }, h, (S) => ({
              [y]: S
            }));
            za(m, h) ? d[y] = t({
              sx: h,
              theme: o,
              nested: true
            }) : d = je(d, m);
          }
          else d = je(d, e(y, h, o, i));
        }), !s && o.modularCssLayers ? {
          "@layer sx": Ln(o, Ar(f, d))
        } : Ln(o, Ar(f, d));
      }
      return Array.isArray(n) ? n.map(a) : a(n);
    }
    return t;
  };
  Je = Ka();
  Je.filterProps = [
    "sx"
  ];
  function Va(e, t) {
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
  ot = function(e = {}, ...t) {
    const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: s = {}, ...i } = e, a = Xi(r), c = fa(o);
    let u = be({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...n
      },
      spacing: c,
      shape: {
        ...ta,
        ...s
      }
    }, i);
    return u = ea(u), u.applyStyles = Va, u = t.reduce((l, f) => be(l, f), u), u.unstable_sxConfig = {
      ...Xr,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, u.unstable_sx = function(f) {
      return Je({
        sx: f,
        theme: this
      });
    }, u;
  };
  function Ua(e) {
    return Object.keys(e).length === 0;
  }
  sr = function(e = null) {
    const t = g.useContext(tt);
    return !t || Ua(t) ? e : t;
  };
  const Ha = ot();
  ir = function(e = Ha) {
    return sr(e);
  };
  function gr(e) {
    const t = ke(e);
    return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
  }
  Ya = function({ styles: e, themeId: t, defaultTheme: r = {} }) {
    const n = ir(r), o = t && n[t] || n;
    let s = typeof e == "function" ? e(o) : e;
    return o.modularCssLayers && (Array.isArray(s) ? s = s.map((i) => gr(typeof i == "function" ? i(o) : i)) : s = gr(s)), B.jsx($o, {
      styles: s
    });
  };
  let qa, Qa, Xa, Za, Ja, ec, Ac;
  qa = v({
    prop: "displayPrint",
    cssProperty: false,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  });
  Qa = v({
    prop: "display"
  });
  Xa = v({
    prop: "overflow"
  });
  Za = v({
    prop: "textOverflow"
  });
  Ja = v({
    prop: "visibility"
  });
  ec = v({
    prop: "whiteSpace"
  });
  jo = Ee(qa, Qa, Xa, Za, Ja, ec);
  tc = v({
    prop: "flexBasis"
  });
  rc = v({
    prop: "flexDirection"
  });
  nc = v({
    prop: "flexWrap"
  });
  oc = v({
    prop: "justifyContent"
  });
  sc = v({
    prop: "alignItems"
  });
  ic = v({
    prop: "alignContent"
  });
  ac = v({
    prop: "order"
  });
  cc = v({
    prop: "flex"
  });
  uc = v({
    prop: "flexGrow"
  });
  lc = v({
    prop: "flexShrink"
  });
  fc = v({
    prop: "alignSelf"
  });
  dc = v({
    prop: "justifyItems"
  });
  mc = v({
    prop: "justifySelf"
  });
  Io = Ee(tc, rc, nc, oc, sc, ic, ac, cc, uc, lc, fc, dc, mc);
  hc = v({
    prop: "position"
  });
  pc = v({
    prop: "zIndex",
    themeKey: "zIndex"
  });
  yc = v({
    prop: "top"
  });
  gc = v({
    prop: "right"
  });
  bc = v({
    prop: "bottom"
  });
  Sc = v({
    prop: "left"
  });
  Lo = Ee(hc, pc, yc, gc, bc, Sc);
  No = v({
    prop: "boxShadow",
    themeKey: "shadows"
  });
  xc = v({
    prop: "fontFamily",
    themeKey: "typography"
  });
  vc = v({
    prop: "fontSize",
    themeKey: "typography"
  });
  Cc = v({
    prop: "fontStyle",
    themeKey: "typography"
  });
  $c = v({
    prop: "fontWeight",
    themeKey: "typography"
  });
  wc = v({
    prop: "letterSpacing"
  });
  kc = v({
    prop: "textTransform"
  });
  Ec = v({
    prop: "lineHeight"
  });
  Tc = v({
    prop: "textAlign"
  });
  Pc = v({
    prop: "typography",
    cssProperty: false,
    themeKey: "typography"
  });
  Go = Ee(Pc, xc, vc, Cc, $c, wc, Ec, Tc, kc);
  Ac = (e) => {
    var _a2;
    const t = {
      systemProps: {},
      otherProps: {}
    }, r = ((_a2 = e == null ? void 0 : e.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Xr;
    return Object.keys(e).forEach((n) => {
      r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
    }), t;
  };
  Zr = function(e) {
    const { sx: t, ...r } = e, { systemProps: n, otherProps: o } = Ac(r);
    let s;
    return Array.isArray(t) ? s = [
      n,
      ...t
    ] : typeof t == "function" ? s = (...i) => {
      const a = t(...i);
      return $e(a) ? {
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
  const Gn = {
    borders: Ro.filterProps,
    display: jo.filterProps,
    flexbox: Io.filterProps,
    grid: _o.filterProps,
    positions: Lo.filterProps,
    palette: Oo.filterProps,
    shadows: No.filterProps,
    sizing: Mo.filterProps,
    spacing: er.filterProps,
    typography: Go.filterProps
  }, Rc = {
    borders: Ro,
    display: jo,
    flexbox: Io,
    grid: _o,
    positions: Lo,
    palette: Oo,
    shadows: No,
    sizing: Mo,
    spacing: er,
    typography: Go
  }, _c = Object.keys(Gn).reduce((e, t) => (Gn[t].forEach((r) => {
    e[r] = Rc[t];
  }), e), {});
  ll = function(e, t, r) {
    const n = {
      [e]: t,
      theme: r
    }, o = _c[e];
    return o ? o(n) : {
      [e]: t
    };
  };
  const Wn = (e) => e, Oc = () => {
    let e = Wn;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Wn;
      }
    };
  }, Wo = Oc();
  function Bo(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (r = Bo(e[t])) && (n && (n += " "), n += r);
    } else for (r in e) e[r] && (n && (n += " "), n += r);
    return n;
  }
  function ar() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Bo(e)) && (n && (n += " "), n += t);
    return n;
  }
  Mc = function(e = {}) {
    const { themeId: t, defaultTheme: r, defaultClassName: n = "MuiBox-root", generateClassName: o } = e, s = wo("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Je);
    return g.forwardRef(function(c, u) {
      const l = ir(r), { className: f, component: d = "div", ...y } = Zr(c);
      return B.jsx(s, {
        as: d,
        ref: u,
        className: ar(f, o ? o(n) : n),
        theme: t && l[t] || l,
        ...y
      });
    });
  };
  const jc = {
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
  function Ae(e, t, r = "Mui") {
    const n = jc[t];
    return n ? `${r}-${n}` : `${Wo.generate(e)}-${t}`;
  }
  function cr(e, t, r = "Mui") {
    const n = {};
    return t.forEach((o) => {
      n[o] = Ae(e, o, r);
    }), n;
  }
  let Ic;
  Ic = cr("MuiBox", [
    "root"
  ]);
  fl = Mc({
    defaultClassName: Ic.root,
    generateClassName: Wo.generate
  });
  function Fo(e) {
    const { variants: t, ...r } = e, n = {
      variants: t,
      style: ke(r),
      isProcessed: true
    };
    return n.style === r || t && t.forEach((o) => {
      typeof o.style != "function" && (o.style = ke(o.style));
    }), n;
  }
  Lc = ot();
  br = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  function Te(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
  }
  function Nc(e) {
    return e ? (t, r) => r[e] : null;
  }
  function Gc(e, t, r) {
    e.theme = Fc(e.theme) ? r : e.theme[t] || e.theme;
  }
  function pt(e, t, r) {
    const n = typeof t == "function" ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((o) => pt(e, o, r));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
      let o;
      if (n.isProcessed) o = r ? Te(n.style, r) : n.style;
      else {
        const { variants: s, ...i } = n;
        o = r ? Te(ke(i), r) : i;
      }
      return zo(e, n.variants, [
        o
      ], r);
    }
    return (n == null ? void 0 : n.isProcessed) ? r ? Te(ke(n.style), r) : n.style : r ? Te(ke(n), r) : n;
  }
  function zo(e, t, r = [], n = void 0) {
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
      }), r.push(n ? Te(ke(i.style(o)), n) : i.style(o))) : r.push(n ? Te(ke(i.style), n) : i.style);
    }
    return r;
  }
  Wc = function(e = {}) {
    const { themeId: t, defaultTheme: r = Lc, rootShouldForwardProp: n = br, slotShouldForwardProp: o = br } = e;
    function s(a) {
      Gc(a, t, r);
    }
    return (a, c = {}) => {
      Hi(a, (w) => w.filter((p) => p !== Je));
      const { name: u, slot: l, skipVariantsResolver: f, skipSx: d, overridesResolver: y = Nc(Dc(l)), ...h } = c, m = u && u.startsWith("Mui") || l ? "components" : "custom", S = f !== void 0 ? f : l && l !== "Root" && l !== "root" || false, b = d || false;
      let C = br;
      l === "Root" || l === "root" ? C = n : l ? C = o : zc(a) && (C = void 0);
      const x = wo(a, {
        shouldForwardProp: C,
        label: Bc(),
        ...h
      }), A = (w) => {
        if (w.__emotion_real === w) return w;
        if (typeof w == "function") return function($) {
          return pt($, w, $.theme.modularCssLayers ? m : void 0);
        };
        if ($e(w)) {
          const p = Fo(w);
          return function(k) {
            return p.variants ? pt(k, p, k.theme.modularCssLayers ? m : void 0) : k.theme.modularCssLayers ? Te(p.style, m) : p.style;
          };
        }
        return w;
      }, E = (...w) => {
        const p = [], $ = w.map(A), k = [];
        if (p.push(s), u && y && k.push(function(Y) {
          var _a2, _b;
          const V = (_b = (_a2 = Y.theme.components) == null ? void 0 : _a2[u]) == null ? void 0 : _b.styleOverrides;
          if (!V) return null;
          const Re = {};
          for (const xe in V) Re[xe] = pt(Y, V[xe], Y.theme.modularCssLayers ? "theme" : void 0);
          return y(Y, Re);
        }), u && !S && k.push(function(Y) {
          var _a2, _b, _c2;
          const V = (_c2 = (_b = (_a2 = Y.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b[u]) == null ? void 0 : _c2.variants;
          return V ? zo(Y, V, [], Y.theme.modularCssLayers ? "theme" : void 0) : null;
        }), b || k.push(Je), Array.isArray($[0])) {
          const q = $.shift(), Y = new Array(p.length).fill(""), Se = new Array(k.length).fill("");
          let V;
          V = [
            ...Y,
            ...q,
            ...Se
          ], V.raw = [
            ...Y,
            ...q.raw,
            ...Se
          ], p.unshift(V);
        }
        const T = [
          ...p,
          ...$,
          ...k
        ], P = x(...T);
        return a.muiName && (P.muiName = a.muiName), P;
      };
      return x.withConfig && (E.withConfig = x.withConfig), E;
    };
  };
  function Bc(e, t) {
    return void 0;
  }
  function Fc(e) {
    for (const t in e) return false;
    return true;
  }
  function zc(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function Dc(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
  Jr = Wc();
  function Do(e, t) {
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
            r[o][c] = Do(s[c], i[c]);
          }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
    return r;
  }
  Ko = function(e) {
    const { theme: t, name: r, props: n } = e;
    return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Do(t.components[r].defaultProps, n);
  };
  en = function({ props: e, name: t, defaultTheme: r, themeId: n }) {
    let o = ir(r);
    return n && (o = o[n] || o), Ko({
      theme: o,
      name: t,
      props: e
    });
  };
  const tn = typeof window < "u" ? g.useLayoutEffect : g.useEffect;
  function Kc(e, t, r, n, o) {
    const [s, i] = g.useState(() => o && r ? r(e).matches : n ? n(e).matches : t);
    return tn(() => {
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
  const Vc = {
    ...yt
  }, Vo = Vc.useSyncExternalStore;
  function Uc(e, t, r, n, o) {
    const s = g.useCallback(() => t, [
      t
    ]), i = g.useMemo(() => {
      if (o && r) return () => r(e).matches;
      if (n !== null) {
        const { matches: l } = n(e);
        return () => l;
      }
      return s;
    }, [
      s,
      e,
      n,
      o,
      r
    ]), [a, c] = g.useMemo(() => {
      if (r === null) return [
        s,
        () => () => {
        }
      ];
      const l = r(e);
      return [
        () => l.matches,
        (f) => (l.addEventListener("change", f), () => {
          l.removeEventListener("change", f);
        })
      ];
    }, [
      s,
      r,
      e
    ]);
    return Vo(c, a, i);
  }
  function Hc(e = {}) {
    const { themeId: t } = e;
    return function(n, o = {}) {
      let s = sr();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: a = false, matchMedia: c = i ? window.matchMedia : null, ssrMatchMedia: u = null, noSsr: l = false } = Ko({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let f = typeof n == "function" ? n(s) : n;
      return f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (Vo !== void 0 ? Uc : Kc)(f, a, c, u, l);
    };
  }
  dl = Hc();
  function Yc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  }
  function rn(e, t = 0, r = 1) {
    return Yc(e, t, r);
  }
  qc = function(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  };
  function Qc(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
  fe = function(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return fe(qc(e));
    const t = e.indexOf("("), r = e.substring(0, t);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(r)) throw new Error(gt(9, e));
    let n = e.substring(t + 1, e.length - 1), o;
    if (r === "color") {
      if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(o)) throw new Error(gt(10, o));
    } else n = n.split(",");
    return n = n.map((s) => parseFloat(s)), {
      type: r,
      values: n,
      colorSpace: o
    };
  };
  Xc = (e) => {
    const t = fe(e);
    return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
  };
  ml = (e, t) => {
    try {
      return Xc(e);
    } catch {
      return e;
    }
  };
  st = function(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
  };
  hl = function(e) {
    if (e.startsWith("#")) return e;
    const { values: t } = fe(e);
    return `#${t.map((r, n) => Qc(n === 3 ? Math.round(255 * r) : r)).join("")}`;
  };
  Zc = function(e) {
    e = fe(e);
    const { values: t } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (u, l = (u + r / 30) % 12) => o - s * Math.max(Math.min(l - 3, 9 - l, 1), -1);
    let a = "rgb";
    const c = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return e.type === "hsla" && (a += "a", c.push(t[3])), st({
      type: a,
      values: c
    });
  };
  Rr = function(e) {
    e = fe(e);
    let t = e.type === "hsl" || e.type === "hsla" ? fe(Zc(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  };
  pl = function(e, t) {
    const r = Rr(e), n = Rr(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  };
  Jc = function(e, t) {
    return e = fe(e), t = rn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, st(e);
  };
  yl = function(e, t, r) {
    try {
      return Jc(e, t);
    } catch {
      return e;
    }
  };
  Uo = function(e, t) {
    if (e = fe(e), t = rn(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return st(e);
  };
  gl = function(e, t, r) {
    try {
      return Uo(e, t);
    } catch {
      return e;
    }
  };
  Ho = function(e, t) {
    if (e = fe(e), t = rn(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return st(e);
  };
  bl = function(e, t, r) {
    try {
      return Ho(e, t);
    } catch {
      return e;
    }
  };
  eu = function(e, t = 0.15) {
    return Rr(e) > 0.5 ? Uo(e, t) : Ho(e, t);
  };
  Sl = function(e, t, r) {
    try {
      return eu(e, t);
    } catch {
      return e;
    }
  };
  xl = function(e, t, r, n = 1) {
    const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), s = fe(e), i = fe(t), a = [
      o(s.values[0], i.values[0]),
      o(s.values[1], i.values[1]),
      o(s.values[2], i.values[2])
    ];
    return st({
      type: "rgb",
      values: a
    });
  };
  function tu(e, t) {
    var _a2, _b, _c2;
    return g.isValidElement(e) && t.indexOf(e.type.muiName ?? ((_c2 = (_b = (_a2 = e.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b.value) == null ? void 0 : _c2.muiName)) !== -1;
  }
  let Bn = 0;
  function ru(e) {
    const [t, r] = g.useState(e), n = e || t;
    return g.useEffect(() => {
      t == null && (Bn += 1, r(`mui-${Bn}`));
    }, [
      t
    ]), n;
  }
  const nu = {
    ...yt
  }, Fn = nu.useId;
  function ou(e) {
    return Fn !== void 0 ? Fn() : ru(e);
  }
  function nn(e, t, r = void 0) {
    const n = {};
    for (const o in e) {
      const s = e[o];
      let i = "", a = true;
      for (let c = 0; c < s.length; c += 1) {
        const u = s[c];
        u && (i += (a === true ? "" : " ") + t(u), a = false, r && r[u] && (i += " " + r[u]));
      }
      n[o] = i;
    }
    return n;
  }
  const Yo = g.createContext(null);
  function on() {
    return g.useContext(Yo);
  }
  const su = typeof Symbol == "function" && Symbol.for, iu = su ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function au(e, t) {
    return typeof t == "function" ? t(e) : {
      ...e,
      ...t
    };
  }
  function cu(e) {
    const { children: t, theme: r } = e, n = on(), o = g.useMemo(() => {
      const s = n === null ? {
        ...r
      } : au(n, r);
      return s != null && (s[iu] = n !== null), s;
    }, [
      r,
      n
    ]);
    return B.jsx(Yo.Provider, {
      value: o,
      children: t
    });
  }
  const qo = g.createContext();
  uu = function({ value: e, ...t }) {
    return B.jsx(qo.Provider, {
      value: e ?? true,
      ...t
    });
  };
  let lu;
  vl = () => g.useContext(qo) ?? false;
  lu = g.createContext(void 0);
  function fu({ value: e, children: t }) {
    return B.jsx(lu.Provider, {
      value: e,
      children: t
    });
  }
  function du(e) {
    const t = sr(), r = ou() || "", { modularCssLayers: n } = e;
    let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, tn(() => {
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
    ]), o ? B.jsx(Ya, {
      styles: o
    }) : null;
  }
  const zn = {};
  function Dn(e, t, r, n = false) {
    return g.useMemo(() => {
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
  mu = function(e) {
    const { children: t, theme: r, themeId: n } = e, o = sr(zn), s = on() || zn, i = Dn(n, o, r), a = Dn(n, s, r, true), c = (n ? i[n] : i).direction === "rtl", u = du(i);
    return B.jsx(cu, {
      theme: a,
      children: B.jsx(tt.Provider, {
        value: i,
        children: B.jsx(uu, {
          value: c,
          children: B.jsxs(fu, {
            value: n ? i[n].components : i.components,
            children: [
              u,
              t
            ]
          })
        })
      })
    });
  };
  const Kn = {
    theme: void 0
  };
  Cl = function(e) {
    let t, r;
    return function(o) {
      let s = t;
      return (s === void 0 || o.theme !== r) && (Kn.theme = o.theme, s = Fo(e(Kn)), t = s, r = o.theme), s;
    };
  };
  const sn = "mode", an = "color-scheme", Qo = "data-color-scheme";
  function hu(e) {
    const { defaultMode: t = "system", defaultLightColorScheme: r = "light", defaultDarkColorScheme: n = "dark", modeStorageKey: o = sn, colorSchemeStorageKey: s = an, attribute: i = Qo, colorSchemeNode: a = "document.documentElement", nonce: c } = e || {};
    let u = "", l = i;
    if (i === "class" && (l = ".%s"), i === "data" && (l = "[data-%s]"), l.startsWith(".")) {
      const d = l.substring(1);
      u += `${a}.classList.remove('${d}'.replace('%s', light), '${d}'.replace('%s', dark));
      ${a}.classList.add('${d}'.replace('%s', colorScheme));`;
    }
    const f = l.match(/\[([^\]]+)\]/);
    if (f) {
      const [d, y] = f[1].split("=");
      y || (u += `${a}.removeAttribute('${d}'.replace('%s', light));
      ${a}.removeAttribute('${d}'.replace('%s', dark));`), u += `
      ${a}.setAttribute('${d}'.replace('%s', colorScheme), ${y ? `${y}.replace('%s', colorScheme)` : '""'});`;
    } else u += `${a}.setAttribute('${l}', colorScheme);`;
    return B.jsx("script", {
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
    ${u}
  }
} catch(e){}})();`
      }
    }, "mui-color-scheme-init");
  }
  function pu() {
  }
  const yu = ({ key: e, storageWindow: t }) => (!t && typeof window < "u" && (t = window), {
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
      if (!t) return pu;
      const n = (o) => {
        const s = o.newValue;
        o.key === e && r(s);
      };
      return t.addEventListener("storage", n), () => {
        t.removeEventListener("storage", n);
      };
    }
  });
  function Sr() {
  }
  function Vn(e) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function Xo(e, t) {
    if (e.mode === "light" || e.mode === "system" && e.systemMode === "light") return t("light");
    if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark") return t("dark");
  }
  function gu(e) {
    return Xo(e, (t) => {
      if (t === "light") return e.lightColorScheme;
      if (t === "dark") return e.darkColorScheme;
    });
  }
  function bu(e) {
    const { defaultMode: t = "light", defaultLightColorScheme: r, defaultDarkColorScheme: n, supportedColorSchemes: o = [], modeStorageKey: s = sn, colorSchemeStorageKey: i = an, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: c = yu, noSsr: u = false } = e, l = o.join(","), f = o.length > 1, d = g.useMemo(() => c == null ? void 0 : c({
      key: s,
      storageWindow: a
    }), [
      c,
      s,
      a
    ]), y = g.useMemo(() => c == null ? void 0 : c({
      key: `${i}-light`,
      storageWindow: a
    }), [
      c,
      i,
      a
    ]), h = g.useMemo(() => c == null ? void 0 : c({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      c,
      i,
      a
    ]), [m, S] = g.useState(() => {
      const $ = (d == null ? void 0 : d.get(t)) || t, k = (y == null ? void 0 : y.get(r)) || r, T = (h == null ? void 0 : h.get(n)) || n;
      return {
        mode: $,
        systemMode: Vn($),
        lightColorScheme: k,
        darkColorScheme: T
      };
    }), [b, C] = g.useState(u || !f);
    g.useEffect(() => {
      C(true);
    }, []);
    const x = gu(m), A = g.useCallback(($) => {
      S((k) => {
        if ($ === k.mode) return k;
        const T = $ ?? t;
        return d == null ? void 0 : d.set(T), {
          ...k,
          mode: T,
          systemMode: Vn(T)
        };
      });
    }, [
      d,
      t
    ]), E = g.useCallback(($) => {
      $ ? typeof $ == "string" ? $ && !l.includes($) ? console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`) : S((k) => {
        const T = {
          ...k
        };
        return Xo(k, (P) => {
          P === "light" && (y == null ? void 0 : y.set($), T.lightColorScheme = $), P === "dark" && (h == null ? void 0 : h.set($), T.darkColorScheme = $);
        }), T;
      }) : S((k) => {
        const T = {
          ...k
        }, P = $.light === null ? r : $.light, q = $.dark === null ? n : $.dark;
        return P && (l.includes(P) ? (T.lightColorScheme = P, y == null ? void 0 : y.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), q && (l.includes(q) ? (T.darkColorScheme = q, h == null ? void 0 : h.set(q)) : console.error(`\`${q}\` does not exist in \`theme.colorSchemes\`.`)), T;
      }) : S((k) => (y == null ? void 0 : y.set(r), h == null ? void 0 : h.set(n), {
        ...k,
        lightColorScheme: r,
        darkColorScheme: n
      }));
    }, [
      l,
      y,
      h,
      r,
      n
    ]), w = g.useCallback(($) => {
      m.mode === "system" && S((k) => {
        const T = ($ == null ? void 0 : $.matches) ? "dark" : "light";
        return k.systemMode === T ? k : {
          ...k,
          systemMode: T
        };
      });
    }, [
      m.mode
    ]), p = g.useRef(w);
    return p.current = w, g.useEffect(() => {
      if (typeof window.matchMedia != "function" || !f) return;
      const $ = (...T) => p.current(...T), k = window.matchMedia("(prefers-color-scheme: dark)");
      return k.addListener($), $(k), () => {
        k.removeListener($);
      };
    }, [
      f
    ]), g.useEffect(() => {
      if (f) {
        const $ = (d == null ? void 0 : d.subscribe((P) => {
          (!P || [
            "light",
            "dark",
            "system"
          ].includes(P)) && A(P || t);
        })) || Sr, k = (y == null ? void 0 : y.subscribe((P) => {
          (!P || l.match(P)) && E({
            light: P
          });
        })) || Sr, T = (h == null ? void 0 : h.subscribe((P) => {
          (!P || l.match(P)) && E({
            dark: P
          });
        })) || Sr;
        return () => {
          $(), k(), T();
        };
      }
    }, [
      E,
      A,
      l,
      t,
      a,
      f,
      d,
      y,
      h
    ]), {
      ...m,
      mode: b ? m.mode : void 0,
      systemMode: b ? m.systemMode : void 0,
      colorScheme: b ? x : void 0,
      setMode: A,
      setColorScheme: E
    };
  }
  const Su = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  $l = function(e) {
    const { themeId: t, theme: r = {}, modeStorageKey: n = sn, colorSchemeStorageKey: o = an, disableTransitionOnChange: s = false, defaultColorScheme: i, resolveTheme: a } = e, c = {
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
    }, u = g.createContext(void 0), l = () => g.useContext(u) || c, f = {}, d = {};
    function y(b) {
      var _a2, _b, _c2, _d;
      const { children: C, theme: x, modeStorageKey: A = n, colorSchemeStorageKey: E = o, disableTransitionOnChange: w = s, storageManager: p, storageWindow: $ = typeof window > "u" ? void 0 : window, documentNode: k = typeof document > "u" ? void 0 : document, colorSchemeNode: T = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: P = false, disableStyleSheetGeneration: q = false, defaultMode: Y = "system", noSsr: Se } = b, V = g.useRef(false), Re = on(), xe = g.useContext(u), ze = !!xe && !P, De = g.useMemo(() => x || (typeof r == "function" ? r() : r), [
        x
      ]), it = De[t], F = it || De, { colorSchemes: ve = f, components: cn = d, cssVarPrefix: lr } = F, un = Object.keys(ve).filter((J) => !!ve[J]).join(","), _e = g.useMemo(() => un.split(","), [
        un
      ]), ln = typeof i == "string" ? i : i.light, fn = typeof i == "string" ? i : i.dark, Zo = ve[ln] && ve[fn] ? Y : ((_b = (_a2 = ve[F.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || ((_c2 = F.palette) == null ? void 0 : _c2.mode), { mode: Jo, setMode: dn, systemMode: mn, lightColorScheme: hn, darkColorScheme: pn, colorScheme: es, setColorScheme: yn } = bu({
        supportedColorSchemes: _e,
        defaultLightColorScheme: ln,
        defaultDarkColorScheme: fn,
        modeStorageKey: A,
        colorSchemeStorageKey: E,
        defaultMode: Zo,
        storageManager: p,
        storageWindow: $,
        noSsr: Se
      });
      let fr = Jo, se = es;
      ze && (fr = xe.mode, se = xe.colorScheme);
      const dr = g.useMemo(() => {
        var _a3;
        const J = se || F.defaultColorScheme, Q = ((_a3 = F.generateThemeVars) == null ? void 0 : _a3.call(F)) || F.vars, ee = {
          ...F,
          components: cn,
          colorSchemes: ve,
          cssVarPrefix: lr,
          vars: Q
        };
        if (typeof ee.generateSpacing == "function" && (ee.spacing = ee.generateSpacing()), J) {
          const de = ve[J];
          de && typeof de == "object" && Object.keys(de).forEach((ue) => {
            de[ue] && typeof de[ue] == "object" ? ee[ue] = {
              ...ee[ue],
              ...de[ue]
            } : ee[ue] = de[ue];
          });
        }
        return a ? a(ee) : ee;
      }, [
        F,
        se,
        cn,
        ve,
        lr
      ]), Ke = F.colorSchemeSelector;
      tn(() => {
        if (se && T && Ke && Ke !== "media") {
          const J = Ke;
          let Q = Ke;
          if (J === "class" && (Q = ".%s"), J === "data" && (Q = "[data-%s]"), (J == null ? void 0 : J.startsWith("data-")) && !J.includes("%s") && (Q = `[${J}="%s"]`), Q.startsWith(".")) T.classList.remove(..._e.map((ee) => Q.substring(1).replace("%s", ee))), T.classList.add(Q.substring(1).replace("%s", se));
          else {
            const ee = Q.replace("%s", se).match(/\[([^\]]+)\]/);
            if (ee) {
              const [de, ue] = ee[1].split("=");
              ue || _e.forEach((rs) => {
                T.removeAttribute(de.replace(se, rs));
              }), T.setAttribute(de, ue ? ue.replace(/"|'/g, "") : "");
            } else T.setAttribute(Q, se);
          }
        }
      }, [
        se,
        Ke,
        T,
        _e
      ]), g.useEffect(() => {
        let J;
        if (w && V.current && k) {
          const Q = k.createElement("style");
          Q.appendChild(k.createTextNode(Su)), k.head.appendChild(Q), window.getComputedStyle(k.body), J = setTimeout(() => {
            k.head.removeChild(Q);
          }, 1);
        }
        return () => {
          clearTimeout(J);
        };
      }, [
        se,
        w,
        k
      ]), g.useEffect(() => (V.current = true, () => {
        V.current = false;
      }), []);
      const ts = g.useMemo(() => ({
        allColorSchemes: _e,
        colorScheme: se,
        darkColorScheme: pn,
        lightColorScheme: hn,
        mode: fr,
        setColorScheme: yn,
        setMode: dn,
        systemMode: mn
      }), [
        _e,
        se,
        pn,
        hn,
        fr,
        yn,
        dn,
        mn,
        dr.colorSchemeSelector
      ]);
      let gn = true;
      (q || F.cssVariables === false || ze && (Re == null ? void 0 : Re.cssVarPrefix) === lr) && (gn = false);
      const bn = B.jsxs(g.Fragment, {
        children: [
          B.jsx(mu, {
            themeId: it ? t : void 0,
            theme: dr,
            children: C
          }),
          gn && B.jsx($o, {
            styles: ((_d = dr.generateStyleSheets) == null ? void 0 : _d.call(dr)) || []
          })
        ]
      });
      return ze ? bn : B.jsx(u.Provider, {
        value: ts,
        children: bn
      });
    }
    const h = typeof i == "string" ? i : i.light, m = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: y,
      useColorScheme: l,
      getInitColorSchemeScript: (b) => hu({
        colorSchemeStorageKey: o,
        defaultLightColorScheme: h,
        defaultDarkColorScheme: m,
        modeStorageKey: n,
        ...b
      })
    };
  };
  wl = function(e = "") {
    function t(...n) {
      if (!n.length) return "";
      const o = n[0];
      return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
    }
    return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
  };
  const Un = (e, t, r, n = []) => {
    let o = e;
    t.forEach((s, i) => {
      i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
    });
  }, xu = (e, t, r) => {
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
  }, vu = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  xr = function(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, o = {}, s = {}, i = {};
    return xu(e, (a, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(a, c))) {
        const l = `--${r ? `${r}-` : ""}${a.join("-")}`, f = vu(a, c);
        Object.assign(o, {
          [l]: f
        }), Un(s, a, `var(${l})`, u), Un(i, a, `var(${l}, ${f})`, u);
      }
    }, (a) => a[0] === "vars"), {
      css: o,
      vars: s,
      varsWithDefaults: i
    };
  };
  Cu = function(e, t = {}) {
    const { getSelector: r = S, disableCssColorScheme: n, colorSchemeSelector: o } = t, { colorSchemes: s = {}, components: i, defaultColorScheme: a = "light", ...c } = e, { vars: u, css: l, varsWithDefaults: f } = xr(c, t);
    let d = f;
    const y = {}, { [a]: h, ...m } = s;
    if (Object.entries(m || {}).forEach(([x, A]) => {
      const { vars: E, css: w, varsWithDefaults: p } = xr(A, t);
      d = be(d, p), y[x] = {
        css: w,
        vars: E
      };
    }), h) {
      const { css: x, vars: A, varsWithDefaults: E } = xr(h, t);
      d = be(d, E), y[a] = {
        css: x,
        vars: A
      };
    }
    function S(x, A) {
      var _a2, _b;
      let E = o;
      if (o === "class" && (E = ".%s"), o === "data" && (E = "[data-%s]"), (o == null ? void 0 : o.startsWith("data-")) && !o.includes("%s") && (E = `[${o}="%s"]`), x) {
        if (E === "media") return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a2 = s[x]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || x})`]: {
            ":root": A
          }
        };
        if (E) return e.defaultColorScheme === x ? `:root, ${E.replace("%s", String(x))}` : E.replace("%s", String(x));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let x = {
          ...u
        };
        return Object.entries(y).forEach(([, { vars: A }]) => {
          x = be(x, A);
        }), x;
      },
      generateStyleSheets: () => {
        var _a2, _b;
        const x = [], A = e.defaultColorScheme || "light";
        function E($, k) {
          Object.keys(k).length && x.push(typeof $ == "string" ? {
            [$]: {
              ...k
            }
          } : $);
        }
        E(r(void 0, {
          ...l
        }), l);
        const { [A]: w, ...p } = y;
        if (w) {
          const { css: $ } = w, k = (_b = (_a2 = s[A]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, T = !n && k ? {
            colorScheme: k,
            ...$
          } : {
            ...$
          };
          E(r(A, {
            ...T
          }), T);
        }
        return Object.entries(p).forEach(([$, { css: k }]) => {
          var _a3, _b2;
          const T = (_b2 = (_a3 = s[$]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, P = !n && T ? {
            colorScheme: T,
            ...k
          } : {
            ...k
          };
          E(r($, {
            ...P
          }), P);
        }), x;
      }
    };
  };
  function $u(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  }
  kl = function({ colorSchemeSelector: e = `[${Qo}="%s"]`, ...t }) {
    const r = t, n = Cu(r, {
      ...t,
      prefix: t.cssVarPrefix,
      colorSchemeSelector: e
    });
    return r.vars = n.vars, r.generateThemeVars = n.generateThemeVars, r.generateStyleSheets = n.generateStyleSheets, r.colorSchemeSelector = e, r.getColorSchemeSelector = $u(e), r;
  };
  let wu, ku, Eu, Tu;
  El = "6.5.0";
  Tl = 6;
  Pl = 5;
  Al = 0;
  Rl = void 0;
  wu = ot();
  ku = Jr("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`maxWidth${Zt(String(r.maxWidth))}`],
        r.fixed && t.fixed,
        r.disableGutters && t.disableGutters
      ];
    }
  });
  Eu = (e) => en({
    props: e,
    name: "MuiContainer",
    defaultTheme: wu
  });
  Tu = (e, t) => {
    const r = (c) => Ae(t, c), { classes: n, fixed: o, disableGutters: s, maxWidth: i } = e, a = {
      root: [
        "root",
        i && `maxWidth${Zt(String(i))}`,
        o && "fixed",
        s && "disableGutters"
      ]
    };
    return nn(a, r, n);
  };
  Pu = function(e = {}) {
    const { createStyledComponent: t = ku, useThemeProps: r = Eu, componentName: n = "MuiContainer" } = e, o = t(({ theme: i, ownerState: a }) => ({
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
    }), ({ theme: i, ownerState: a }) => a.fixed && Object.keys(i.breakpoints.values).reduce((c, u) => {
      const l = u, f = i.breakpoints.values[l];
      return f !== 0 && (c[i.breakpoints.up(l)] = {
        maxWidth: `${f}${i.breakpoints.unit}`
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
    return g.forwardRef(function(a, c) {
      const u = r(a), { className: l, component: f = "div", disableGutters: d = false, fixed: y = false, maxWidth: h = "lg", classes: m, ...S } = u, b = {
        ...u,
        component: f,
        disableGutters: d,
        fixed: y,
        maxWidth: h
      }, C = Tu(b, n);
      return B.jsx(o, {
        as: f,
        ownerState: b,
        className: ar(C.root, l),
        ref: c,
        ...S
      });
    });
  };
  _l = Pu();
  Ol = function(e) {
    return Ae("MuiContainer", e);
  };
  let Au;
  Ml = cr("MuiContainer", [
    "root",
    "disableGutters",
    "fixed",
    "maxWidthXs",
    "maxWidthSm",
    "maxWidthMd",
    "maxWidthLg",
    "maxWidthXl"
  ]);
  Au = (e, t) => e.filter((r) => t.includes(r));
  Fe = (e, t, r) => {
    const n = e.keys[0];
    Array.isArray(t) ? t.forEach((o, s) => {
      r((i, a) => {
        s <= e.keys.length - 1 && (s === 0 ? Object.assign(i, a) : i[e.up(e.keys[s])] = a);
      }, o);
    }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : Au(e.keys, Object.keys(t))).forEach((s) => {
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
  function Ct(e) {
    return `--Grid-${e}Spacing`;
  }
  function ur(e) {
    return `--Grid-parent-${e}Spacing`;
  }
  let Hn, Le, Ru, _u, Ou, Mu, ju, Iu, Lu;
  Hn = "--Grid-columns";
  Le = "--Grid-parent-columns";
  Ru = ({ theme: e, ownerState: t }) => {
    const r = {};
    return Fe(e.breakpoints, t.size, (n, o) => {
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
        width: `calc(100% * ${o} / var(${Le}) - (var(${Le}) - ${o}) * (var(${ur("column")}) / var(${Le})))`
      }), n(r, s);
    }), r;
  };
  _u = ({ theme: e, ownerState: t }) => {
    const r = {};
    return Fe(e.breakpoints, t.offset, (n, o) => {
      let s = {};
      o === "auto" && (s = {
        marginLeft: "auto"
      }), typeof o == "number" && (s = {
        marginLeft: o === 0 ? "0px" : `calc(100% * ${o} / var(${Le}) + var(${ur("column")}) * ${o} / var(${Le}))`
      }), n(r, s);
    }), r;
  };
  Ou = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {
      [Hn]: 12
    };
    return Fe(e.breakpoints, t.columns, (n, o) => {
      const s = o ?? 12;
      n(r, {
        [Hn]: s,
        "> *": {
          [Le]: s
        }
      });
    }), r;
  };
  Mu = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return Fe(e.breakpoints, t.rowSpacing, (n, o) => {
      var _a2;
      const s = typeof o == "string" ? o : (_a2 = e.spacing) == null ? void 0 : _a2.call(e, o);
      n(r, {
        [Ct("row")]: s,
        "> *": {
          [ur("row")]: s
        }
      });
    }), r;
  };
  ju = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return Fe(e.breakpoints, t.columnSpacing, (n, o) => {
      var _a2;
      const s = typeof o == "string" ? o : (_a2 = e.spacing) == null ? void 0 : _a2.call(e, o);
      n(r, {
        [Ct("column")]: s,
        "> *": {
          [ur("column")]: s
        }
      });
    }), r;
  };
  Iu = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return Fe(e.breakpoints, t.direction, (n, o) => {
      n(r, {
        flexDirection: o
      });
    }), r;
  };
  Lu = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...e.wrap && e.wrap !== "wrap" && {
        flexWrap: e.wrap
      },
      gap: `var(${Ct("row")}) var(${Ct("column")})`
    }
  });
  Nu = (e) => {
    const t = [];
    return Object.entries(e).forEach(([r, n]) => {
      n !== false && n !== void 0 && t.push(`grid-${r}-${String(n)}`);
    }), t;
  };
  Gu = (e, t = "xs") => {
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
  Wu = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, r]) => `direction-${t}-${r}`) : [
    `direction-xs-${String(e)}`
  ];
  function Bu(e, t) {
    e.item !== void 0 && delete e.item, e.zeroMinWidth !== void 0 && delete e.zeroMinWidth, t.keys.forEach((r) => {
      e[r] !== void 0 && delete e[r];
    });
  }
  const Fu = ot(), zu = Jr("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function Du(e) {
    return en({
      props: e,
      name: "MuiGrid",
      defaultTheme: Fu
    });
  }
  Ku = function(e = {}) {
    const { createStyledComponent: t = zu, useThemeProps: r = Du, useTheme: n = ir, componentName: o = "MuiGrid" } = e, s = (u, l) => {
      const { container: f, direction: d, spacing: y, wrap: h, size: m } = u, S = {
        root: [
          "root",
          f && "container",
          h !== "wrap" && `wrap-xs-${String(h)}`,
          ...Wu(d),
          ...Nu(m),
          ...f ? Gu(y, l.breakpoints.keys[0]) : []
        ]
      };
      return nn(S, (b) => Ae(o, b), {});
    };
    function i(u, l, f = () => true) {
      const d = {};
      return u === null || (Array.isArray(u) ? u.forEach((y, h) => {
        y !== null && f(y) && l.keys[h] && (d[l.keys[h]] = y);
      }) : typeof u == "object" ? Object.keys(u).forEach((y) => {
        const h = u[y];
        h != null && f(h) && (d[y] = h);
      }) : d[l.keys[0]] = u), d;
    }
    const a = t(Ou, ju, Mu, Ru, Iu, Lu, _u), c = g.forwardRef(function(l, f) {
      const d = n(), y = r(l), h = Zr(y);
      Bu(h, d.breakpoints);
      const { className: m, children: S, columns: b = 12, container: C = false, component: x = "div", direction: A = "row", wrap: E = "wrap", size: w = {}, offset: p = {}, spacing: $ = 0, rowSpacing: k = $, columnSpacing: T = $, unstable_level: P = 0, ...q } = h, Y = i(w, d.breakpoints, (F) => F !== false), Se = i(p, d.breakpoints), V = l.columns ?? (P ? void 0 : b), Re = l.spacing ?? (P ? void 0 : $), xe = l.rowSpacing ?? l.spacing ?? (P ? void 0 : k), ze = l.columnSpacing ?? l.spacing ?? (P ? void 0 : T), De = {
        ...h,
        level: P,
        columns: V,
        container: C,
        direction: A,
        wrap: E,
        spacing: Re,
        rowSpacing: xe,
        columnSpacing: ze,
        size: Y,
        offset: Se
      }, it = s(De, d);
      return B.jsx(a, {
        ref: f,
        as: x,
        ownerState: De,
        className: ar(it.root, m),
        ...q,
        children: g.Children.map(S, (F) => {
          var _a2;
          return g.isValidElement(F) && tu(F, [
            "Grid"
          ]) && C && F.props.container ? g.cloneElement(F, {
            unstable_level: ((_a2 = F.props) == null ? void 0 : _a2.unstable_level) ?? P + 1
          }) : F;
        })
      });
    });
    return c.muiName = "Grid", c;
  };
  jl = Ku();
  Il = function(e) {
    return Ae("MuiGrid", e);
  };
  let Vu, Uu, Hu, He, Yu, qu;
  Vu = [
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
  Uu = [
    "column-reverse",
    "column",
    "row-reverse",
    "row"
  ];
  Hu = [
    "nowrap",
    "wrap-reverse",
    "wrap"
  ];
  He = [
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
  Ll = cr("MuiGrid", [
    "root",
    "container",
    "item",
    ...Vu.map((e) => `spacing-xs-${e}`),
    ...Uu.map((e) => `direction-xs-${e}`),
    ...Hu.map((e) => `wrap-xs-${e}`),
    ...He.map((e) => `grid-xs-${e}`),
    ...He.map((e) => `grid-sm-${e}`),
    ...He.map((e) => `grid-md-${e}`),
    ...He.map((e) => `grid-lg-${e}`),
    ...He.map((e) => `grid-xl-${e}`)
  ]);
  Yu = ot();
  qu = Jr("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function Qu(e) {
    return en({
      props: e,
      name: "MuiStack",
      defaultTheme: Yu
    });
  }
  function Xu(e, t) {
    const r = g.Children.toArray(e).filter(Boolean);
    return r.reduce((n, o, s) => (n.push(o), s < r.length - 1 && n.push(g.cloneElement(t, {
      key: `separator-${s}`
    })), n), []);
  }
  const Zu = (e) => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  })[e], Ju = ({ ownerState: e, theme: t }) => {
    let r = {
      display: "flex",
      flexDirection: "column",
      ...le({
        theme: t
      }, yr({
        values: e.direction,
        breakpoints: t.breakpoints.values
      }), (n) => ({
        flexDirection: n
      }))
    };
    if (e.spacing) {
      const n = Yr(t), o = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = true), c), {}), s = yr({
        values: e.direction,
        base: o
      }), i = yr({
        values: e.spacing,
        base: o
      });
      typeof s == "object" && Object.keys(s).forEach((c, u, l) => {
        if (!s[c]) {
          const d = u > 0 ? s[l[u - 1]] : "column";
          s[c] = d;
        }
      }), r = be(r, le({
        theme: t
      }, i, (c, u) => e.useFlexGap ? {
        gap: Pe(n, c)
      } : {
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${Zu(u ? s[u] : e.direction)}`]: Pe(n, c)
        }
      }));
    }
    return r = na(t.breakpoints, r), r;
  };
  el = function(e = {}) {
    const { createStyledComponent: t = qu, useThemeProps: r = Qu, componentName: n = "MuiStack" } = e, o = () => nn({
      root: [
        "root"
      ]
    }, (c) => Ae(n, c), {}), s = t(Ju);
    return g.forwardRef(function(c, u) {
      const l = r(c), f = Zr(l), { component: d = "div", direction: y = "column", spacing: h = 0, divider: m, children: S, className: b, useFlexGap: C = false, ...x } = f, A = {
        direction: y,
        spacing: h,
        useFlexGap: C
      }, E = o();
      return B.jsx(s, {
        as: d,
        ownerState: A,
        ref: u,
        className: ar(E.root, b),
        ...x,
        children: m ? Xu(S, m) : S
      });
    });
  };
  Nl = el();
  Gl = function(e) {
    return Ae("MuiStack", e);
  };
  Wl = cr("MuiStack", [
    "root"
  ]);
  Bl = function() {
    throw new Error(gt(19));
  };
});
export {
  fl as Box,
  _l as Container,
  Ya as GlobalStyles,
  jl as Grid,
  uu as RtlProvider,
  Nl as Stack,
  sl as StyledEngineProvider,
  mu as ThemeProvider,
  __tla,
  ic as alignContent,
  sc as alignItems,
  fc as alignSelf,
  Jc as alpha,
  Ia as backgroundColor,
  ja as bgcolor,
  xl as blend,
  da as border,
  pa as borderBottom,
  xa as borderBottomColor,
  ga as borderColor,
  ya as borderLeft,
  va as borderLeftColor,
  tr as borderRadius,
  ha as borderRight,
  Sa as borderRightColor,
  ma as borderTop,
  ba as borderTopColor,
  ie as borderTransform,
  Ro as borders,
  bc as bottom,
  Fa as boxSizing,
  al as breakpoints,
  Ma as color,
  Xc as colorChannel,
  nr as columnGap,
  Ee as compose,
  Ml as containerClasses,
  Mc as createBox,
  Xi as createBreakpoints,
  Pu as createContainer,
  Ku as createGrid,
  fa as createSpacing,
  el as createStack,
  Wc as createStyled,
  ot as createTheme,
  Yr as createUnarySpacing,
  nt as createUnaryUnit,
  Js as css,
  ea as cssContainerQueries,
  Uo as darken,
  fe as decomposeColor,
  jo as display,
  eu as emphasize,
  Bl as experimental_sx,
  cc as flex,
  tc as flexBasis,
  rc as flexDirection,
  uc as flexGrow,
  lc as flexShrink,
  nc as flexWrap,
  Io as flexbox,
  xc as fontFamily,
  vc as fontSize,
  Cc as fontStyle,
  $c as fontWeight,
  rr as gap,
  Ol as getContainerUtilityClass,
  pl as getContrastRatio,
  Il as getGridUtilityClass,
  Rr as getLuminance,
  Jt as getPath,
  Gl as getStackUtilityClass,
  ua as getStyleFromPropValue,
  vt as getStyleValue,
  Ko as getThemeProps,
  Pe as getValue,
  _o as grid,
  Oa as gridArea,
  Ta as gridAutoColumns,
  Ea as gridAutoFlow,
  Pa as gridAutoRows,
  Ll as gridClasses,
  wa as gridColumn,
  ka as gridRow,
  _a as gridTemplateAreas,
  Aa as gridTemplateColumns,
  Ra as gridTemplateRows,
  le as handleBreakpoints,
  Ga as height,
  qc as hexToRgb,
  Zc as hslToRgb,
  oc as justifyContent,
  dc as justifyItems,
  mc as justifySelf,
  ol as keyframes,
  Sc as left,
  wc as letterSpacing,
  Ho as lighten,
  Ec as lineHeight,
  Tl as major,
  L as margin,
  Ur as marginKeys,
  Wa as maxHeight,
  Qr as maxWidth,
  na as mergeBreakpointsInOrder,
  Ba as minHeight,
  Na as minWidth,
  Pl as minor,
  ac as order,
  Ca as outline,
  $a as outlineColor,
  N as padding,
  Hr as paddingKeys,
  Oo as palette,
  Ie as paletteTransform,
  Al as patch,
  hc as position,
  Lo as positions,
  Rl as prerelease,
  yl as private_safeAlpha,
  ml as private_safeColorChannel,
  gl as private_safeDarken,
  Sl as private_safeEmphasize,
  bl as private_safeLighten,
  st as recomposeColor,
  il as responsivePropType,
  hl as rgbToHex,
  gc as right,
  or as rowGap,
  No as shadows,
  ta as shape,
  br as shouldForwardProp,
  ul as sizeHeight,
  cl as sizeWidth,
  Mo as sizing,
  te as sizingTransform,
  er as spacing,
  Wl as stackClasses,
  v as style,
  Jr as styled,
  Lc as systemDefaultTheme,
  Tc as textAlign,
  kc as textTransform,
  yc as top,
  Go as typography,
  Pc as typographyVariant,
  $l as unstable_createCssVarsProvider,
  kl as unstable_createCssVarsTheme,
  wl as unstable_createGetCssVar,
  Ka as unstable_createStyleFunctionSx,
  xr as unstable_cssVarsParser,
  Xr as unstable_defaultSxConfig,
  Zr as unstable_extendSxProp,
  Wu as unstable_generateDirectionClasses,
  Nu as unstable_generateSizeClassNames,
  Gu as unstable_generateSpacingClassNames,
  ll as unstable_getThemeValue,
  Cl as unstable_memoTheme,
  Cu as unstable_prepareCssVars,
  yr as unstable_resolveBreakpointValues,
  Je as unstable_styleFunctionSx,
  Fe as unstable_traverseBreakpoints,
  dl as useMediaQuery,
  vl as useRtl,
  ir as useTheme,
  en as useThemeProps,
  sr as useThemeWithoutDefault,
  El as version,
  La as width,
  pc as zIndex
};
