import { a as fe, v as C, __tla as __tla_0 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
let $r, Nr, He, Me, ee, Oe, Ir, Mr, hr, Fe, _e, ve, Rr, Ne;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  ee = function() {
    return ee = Object.assign ? Object.assign.bind() : function(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }, ee.apply(null, arguments);
  };
  function We(e) {
    if (e.sheet) return e.sheet;
    for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
  }
  function De(e) {
    var r = document.createElement("style");
    return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
  }
  let k, X, l, be, ae, ie, Ue, xe, qe, Ge, K, Ve;
  He = (function() {
    function e(t) {
      var n = this;
      this._insertTag = function(a) {
        var i;
        n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
      }, this.isSpeedy = t.speedy === void 0 ? true : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
    }
    var r = e.prototype;
    return r.hydrate = function(n) {
      n.forEach(this._insertTag);
    }, r.insert = function(n) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(De(this));
      var a = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var i = We(a);
        try {
          i.insertRule(n, i.cssRules.length);
        } catch {
        }
      } else a.appendChild(document.createTextNode(n));
      this.ctr++;
    }, r.flush = function() {
      this.tags.forEach(function(n) {
        var a;
        return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
      }), this.tags = [], this.ctr = 0;
    }, e;
  })();
  k = "-ms-";
  X = "-moz-";
  l = "-webkit-";
  be = "comm";
  ae = "rule";
  ie = "decl";
  Ue = "@import";
  xe = "@keyframes";
  qe = "@layer";
  Ge = Math.abs;
  K = String.fromCharCode;
  Ve = Object.assign;
  function je(e, r) {
    return w(e, 0) ^ 45 ? (((r << 2 ^ w(e, 0)) << 2 ^ w(e, 1)) << 2 ^ w(e, 2)) << 2 ^ w(e, 3) : 0;
  }
  function we(e) {
    return e.trim();
  }
  function Be(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
  }
  function u(e, r, t) {
    return e.replace(r, t);
  }
  function re(e, r) {
    return e.indexOf(r);
  }
  function w(e, r) {
    return e.charCodeAt(r) | 0;
  }
  function W(e, r, t) {
    return e.slice(r, t);
  }
  function $(e) {
    return e.length;
  }
  function se(e) {
    return e.length;
  }
  function V(e, r) {
    return r.push(e), e;
  }
  function Ye(e, r) {
    return e.map(r).join("");
  }
  var Z = 1, F = 1, ke = 0, A = 0, b = 0, L = "";
  function J(e, r, t, n, a, i, s) {
    return {
      value: e,
      root: r,
      parent: t,
      type: n,
      props: a,
      children: i,
      line: Z,
      column: F,
      length: s,
      return: ""
    };
  }
  function z(e, r) {
    return Ve(J("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, r);
  }
  function Xe() {
    return b;
  }
  function Ke() {
    return b = A > 0 ? w(L, --A) : 0, F--, b === 10 && (F = 1, Z--), b;
  }
  function E() {
    return b = A < ke ? w(L, A++) : 0, F++, b === 10 && (F = 1, Z++), b;
  }
  function N() {
    return w(L, A);
  }
  function j() {
    return A;
  }
  function U(e, r) {
    return W(L, e, r);
  }
  function D(e) {
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
  function Se(e) {
    return Z = F = 1, ke = $(L = e), A = 0, [];
  }
  function Ce(e) {
    return L = "", e;
  }
  function B(e) {
    return we(U(A - 1, te(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Ze(e) {
    for (; (b = N()) && b < 33; ) E();
    return D(e) > 2 || D(b) > 3 ? "" : " ";
  }
  function Je(e, r) {
    for (; --r && E() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); ) ;
    return U(e, j() + (r < 6 && N() == 32 && E() == 32));
  }
  function te(e) {
    for (; E(); ) switch (b) {
      case e:
        return A;
      case 34:
      case 39:
        e !== 34 && e !== 39 && te(b);
        break;
      case 40:
        e === 41 && te(e);
        break;
      case 92:
        E();
        break;
    }
    return A;
  }
  function Qe(e, r) {
    for (; E() && e + b !== 57; ) if (e + b === 84 && N() === 47) break;
    return "/*" + U(r, A - 1) + "*" + K(e === 47 ? e : E());
  }
  function er(e) {
    for (; !D(N()); ) E();
    return U(e, A);
  }
  function rr(e) {
    return Ce(Y("", null, null, null, [
      ""
    ], e = Se(e), 0, [
      0
    ], e));
  }
  function Y(e, r, t, n, a, i, s, o, f) {
    for (var p = 0, d = 0, h = s, _ = 0, T = 0, x = 0, c = 1, m = 1, g = 1, v = 0, P = "", O = a, R = i, S = n, y = P; m; ) switch (x = v, v = E()) {
      case 40:
        if (x != 108 && w(y, h - 1) == 58) {
          re(y += u(B(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += B(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Ze(x);
        break;
      case 92:
        y += Je(j() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            V(tr(Qe(E(), j()), r, t), f);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * c:
        o[p++] = $(y) * g;
      case 125 * c:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            g == -1 && (y = u(y, /\f/g, "")), T > 0 && $(y) - h && V(T > 32 ? ue(y + ";", n, t, h - 1) : ue(u(y, " ", "") + ";", n, t, h - 2), f);
            break;
          case 59:
            y += ";";
          default:
            if (V(S = le(y, r, t, p, d, a, o, P, O = [], R = [], h), i), v === 123) if (d === 0) Y(y, r, S, S, O, i, h, o, R);
            else switch (_ === 99 && w(y, 3) === 110 ? 100 : _) {
              case 100:
              case 108:
              case 109:
              case 115:
                Y(e, S, S, n && V(le(e, S, S, 0, 0, a, o, P, a, O = [], h), R), a, R, h, o, n ? O : R);
                break;
              default:
                Y(y, S, S, S, [
                  ""
                ], R, 0, o, R);
            }
        }
        p = d = T = 0, c = g = 1, P = y = "", h = s;
        break;
      case 58:
        h = 1 + $(y), T = x;
      default:
        if (c < 1) {
          if (v == 123) --c;
          else if (v == 125 && c++ == 0 && Ke() == 125) continue;
        }
        switch (y += K(v), v * c) {
          case 38:
            g = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            o[p++] = ($(y) - 1) * g, g = 1;
            break;
          case 64:
            N() === 45 && (y += B(E())), _ = N(), d = h = $(P = y += er(j())), v++;
            break;
          case 45:
            x === 45 && $(y) == 2 && (c = 0);
        }
    }
    return i;
  }
  function le(e, r, t, n, a, i, s, o, f, p, d) {
    for (var h = a - 1, _ = a === 0 ? i : [
      ""
    ], T = se(_), x = 0, c = 0, m = 0; x < n; ++x) for (var g = 0, v = W(e, h + 1, h = Ge(c = s[x])), P = e; g < T; ++g) (P = we(c > 0 ? _[g] + " " + v : u(v, /&\f/g, _[g]))) && (f[m++] = P);
    return J(e, r, t, a === 0 ? ae : o, f, p, d);
  }
  function tr(e, r, t) {
    return J(e, r, t, be, K(Xe()), W(e, 2, -2), 0);
  }
  function ue(e, r, t, n) {
    return J(e, r, t, ie, W(e, 0, n), W(e, n + 1, -1), n);
  }
  function M(e, r) {
    for (var t = "", n = se(e), a = 0; a < n; a++) t += r(e[a], a, e, r) || "";
    return t;
  }
  function nr(e, r, t, n) {
    switch (e.type) {
      case qe:
        if (e.children.length) break;
      case Ue:
      case ie:
        return e.return = e.return || e.value;
      case be:
        return "";
      case xe:
        return e.return = e.value + "{" + M(e.children, n) + "}";
      case ae:
        e.value = e.props.join(",");
    }
    return $(t = M(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
  }
  function ar(e) {
    var r = se(e);
    return function(t, n, a, i) {
      for (var s = "", o = 0; o < r; o++) s += e[o](t, n, a, i) || "";
      return s;
    };
  }
  function ir(e) {
    return function(r) {
      r.root || (r = r.return) && e(r);
    };
  }
  function Pe(e) {
    var r = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return r[t] === void 0 && (r[t] = e(t)), r[t];
    };
  }
  var sr = function(r, t, n) {
    for (var a = 0, i = 0; a = i, i = N(), a === 38 && i === 12 && (t[n] = 1), !D(i); ) E();
    return U(r, A);
  }, or = function(r, t) {
    var n = -1, a = 44;
    do
      switch (D(a)) {
        case 0:
          a === 38 && N() === 12 && (t[n] = 1), r[n] += sr(A - 1, t, n);
          break;
        case 2:
          r[n] += B(a);
          break;
        case 4:
          if (a === 44) {
            r[++n] = N() === 58 ? "&\f" : "", t[n] = r[n].length;
            break;
          }
        default:
          r[n] += K(a);
      }
    while (a = E());
    return r;
  }, cr = function(r, t) {
    return Ce(or(Se(r), t));
  }, de = /* @__PURE__ */ new WeakMap(), fr = function(r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !de.get(n)) && !a) {
        de.set(r, true);
        for (var i = [], s = cr(t, i), o = n.props, f = 0, p = 0; f < s.length; f++) for (var d = 0; d < o.length; d++, p++) r.props[p] = i[f] ? s[f].replace(/&\f/g, o[d]) : o[d] + " " + s[f];
      }
    }
  }, lr = function(r) {
    if (r.type === "decl") {
      var t = r.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
    }
  };
  function Ae(e, r) {
    switch (je(e, r)) {
      case 5103:
        return l + "print-" + e + e;
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
        return l + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return l + e + X + e + k + e + e;
      case 6828:
      case 4268:
        return l + e + k + e + e;
      case 6165:
        return l + e + k + "flex-" + e + e;
      case 5187:
        return l + e + u(e, /(\w+).+(:[^]+)/, l + "box-$1$2" + k + "flex-$1$2") + e;
      case 5443:
        return l + e + k + "flex-item-" + u(e, /flex-|-self/, "") + e;
      case 4675:
        return l + e + k + "flex-line-pack" + u(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return l + e + k + u(e, "shrink", "negative") + e;
      case 5292:
        return l + e + k + u(e, "basis", "preferred-size") + e;
      case 6060:
        return l + "box-" + u(e, "-grow", "") + l + e + k + u(e, "grow", "positive") + e;
      case 4554:
        return l + u(e, /([^-])(transform)/g, "$1" + l + "$2") + e;
      case 6187:
        return u(u(u(e, /(zoom-|grab)/, l + "$1"), /(image-set)/, l + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return u(e, /(image-set\([^]*)/, l + "$1$`$1");
      case 4968:
        return u(u(e, /(.+:)(flex-)?(.*)/, l + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + l + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return u(e, /(.+)-inline(.+)/, l + "$1$2") + e;
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
        if ($(e) - 1 - r > 6) switch (w(e, r + 1)) {
          case 109:
            if (w(e, r + 4) !== 45) break;
          case 102:
            return u(e, /(.+:)(.+)-([^]+)/, "$1" + l + "$2-$3$1" + X + (w(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~re(e, "stretch") ? Ae(u(e, "stretch", "fill-available"), r) + e : e;
        }
        break;
      case 4949:
        if (w(e, r + 1) !== 115) break;
      case 6444:
        switch (w(e, $(e) - 3 - (~re(e, "!important") && 10))) {
          case 107:
            return u(e, ":", ":" + l) + e;
          case 101:
            return u(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + l + (w(e, 14) === 45 ? "inline-" : "") + "box$3$1" + l + "$2$3$1" + k + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (w(e, r + 11)) {
          case 114:
            return l + e + k + u(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return l + e + k + u(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return l + e + k + u(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return l + e + k + e + e;
    }
    return e;
  }
  let ur, dr, pr;
  ur = function(r, t, n, a) {
    if (r.length > -1 && !r.return) switch (r.type) {
      case ie:
        r.return = Ae(r.value, r.length);
        break;
      case xe:
        return M([
          z(r, {
            value: u(r.value, "@", "@" + l)
          })
        ], a);
      case ae:
        if (r.length) return Ye(r.props, function(i) {
          switch (Be(i, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return M([
                z(r, {
                  props: [
                    u(i, /:(read-\w+)/, ":" + X + "$1")
                  ]
                })
              ], a);
            case "::placeholder":
              return M([
                z(r, {
                  props: [
                    u(i, /:(plac\w+)/, ":" + l + "input-$1")
                  ]
                }),
                z(r, {
                  props: [
                    u(i, /:(plac\w+)/, ":" + X + "$1")
                  ]
                }),
                z(r, {
                  props: [
                    u(i, /:(plac\w+)/, k + "input-$1")
                  ]
                })
              ], a);
          }
          return "";
        });
    }
  };
  dr = [
    ur
  ];
  hr = function(r) {
    var t = r.key;
    if (t === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(c) {
        var m = c.getAttribute("data-emotion");
        m.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
      });
    }
    var a = r.stylisPlugins || dr, i = {}, s, o = [];
    s = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(c) {
      for (var m = c.getAttribute("data-emotion").split(" "), g = 1; g < m.length; g++) i[m[g]] = true;
      o.push(c);
    });
    var f, p = [
      fr,
      lr
    ];
    {
      var d, h = [
        nr,
        ir(function(c) {
          d.insert(c);
        })
      ], _ = ar(p.concat(a, h)), T = function(m) {
        return M(rr(m), _);
      };
      f = function(m, g, v, P) {
        d = v, T(m ? m + "{" + g.styles + "}" : g.styles), P && (x.inserted[g.name] = true);
      };
    }
    var x = {
      key: t,
      sheet: new He({
        key: t,
        container: s,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint
      }),
      nonce: r.nonce,
      inserted: i,
      registered: {},
      insert: f
    };
    return x.sheet.hydrate(o), x;
  };
  pr = true;
  function Ee(e, r, t) {
    var n = "";
    return t.split(" ").forEach(function(a) {
      e[a] !== void 0 ? r.push(e[a] + ";") : a && (n += a + " ");
    }), n;
  }
  let oe;
  oe = function(r, t, n) {
    var a = r.key + "-" + t.name;
    (n === false || pr === false) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
  };
  _e = function(r, t, n) {
    oe(r, t, n);
    var a = r.key + "-" + t.name;
    if (r.inserted[t.name] === void 0) {
      var i = t;
      do
        r.insert(t === i ? "." + a : "", i, r.sheet, true), i = i.next;
      while (i !== void 0);
    }
  };
  function mr(e) {
    for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4) t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, r = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
    switch (a) {
      case 3:
        r ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        r ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        r ^= e.charCodeAt(n) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
    }
    return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
  }
  var gr = {
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
  }, yr = /[A-Z]|^ms/g, vr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Te = function(r) {
    return r.charCodeAt(1) === 45;
  }, he = function(r) {
    return r != null && typeof r != "boolean";
  }, Q = Pe(function(e) {
    return Te(e) ? e : e.replace(yr, "-$&").toLowerCase();
  }), pe = function(r, t) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(vr, function(n, a, i) {
          return I = {
            name: a,
            styles: i,
            next: I
          }, a;
        });
    }
    return gr[r] !== 1 && !Te(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function H(e, r, t) {
    if (t == null) return "";
    var n = t;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var a = t;
        if (a.anim === 1) return I = {
          name: a.name,
          styles: a.styles,
          next: I
        }, a.name;
        var i = t;
        if (i.styles !== void 0) {
          var s = i.next;
          if (s !== void 0) for (; s !== void 0; ) I = {
            name: s.name,
            styles: s.styles,
            next: I
          }, s = s.next;
          var o = i.styles + ";";
          return o;
        }
        return br(e, r, t);
      }
      case "function": {
        if (e !== void 0) {
          var f = I, p = t(e);
          return I = f, H(e, r, p);
        }
        break;
      }
    }
    var d = t;
    if (r == null) return d;
    var h = r[d];
    return h !== void 0 ? h : d;
  }
  function br(e, r, t) {
    var n = "";
    if (Array.isArray(t)) for (var a = 0; a < t.length; a++) n += H(e, r, t[a]) + ";";
    else for (var i in t) {
      var s = t[i];
      if (typeof s != "object") {
        var o = s;
        r != null && r[o] !== void 0 ? n += i + "{" + r[o] + "}" : he(o) && (n += Q(i) + ":" + pe(i, o) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0)) for (var f = 0; f < s.length; f++) he(s[f]) && (n += Q(i) + ":" + pe(i, s[f]) + ";");
      else {
        var p = H(e, r, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Q(i) + ":" + p + ";";
            break;
          }
          default:
            n += i + "{" + p + "}";
        }
      }
    }
    return n;
  }
  var me = /label:\s*([^\s;{]+)\s*(;|$)/g, I;
  Oe = function(e, r, t) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, a = "";
    I = void 0;
    var i = e[0];
    if (i == null || i.raw === void 0) n = false, a += H(t, r, i);
    else {
      var s = i;
      a += s[0];
    }
    for (var o = 1; o < e.length; o++) if (a += H(t, r, e[o]), n) {
      var f = i;
      a += f[o];
    }
    me.lastIndex = 0;
    for (var p = "", d; (d = me.exec(a)) !== null; ) p += "-" + d[1];
    var h = mr(a) + p;
    return {
      name: h,
      styles: a,
      next: I
    };
  };
  let xr, Re, $e, Ie, ne, wr, kr, Sr, Cr, Pr, Ar, ge, ye, Er, _r, Tr;
  xr = function(r) {
    return r();
  };
  Re = fe.useInsertionEffect ? fe.useInsertionEffect : false;
  $e = Re || xr;
  Rr = Re || C.useLayoutEffect;
  Ie = C.createContext(typeof HTMLElement < "u" ? hr({
    key: "css"
  }) : null);
  $r = Ie.Provider;
  Ne = function(r) {
    return C.forwardRef(function(t, n) {
      var a = C.useContext(Ie);
      return r(t, a, n);
    });
  };
  Me = C.createContext({});
  Fe = {}.hasOwnProperty;
  ne = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  Ir = function(r, t) {
    var n = {};
    for (var a in t) Fe.call(t, a) && (n[a] = t[a]);
    return n[ne] = r, n;
  };
  wr = function(r) {
    var t = r.cache, n = r.serialized, a = r.isStringTag;
    return oe(t, n, a), $e(function() {
      return _e(t, n, a);
    }), null;
  };
  kr = Ne(function(e, r, t) {
    var n = e.css;
    typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
    var a = e[ne], i = [
      n
    ], s = "";
    typeof e.className == "string" ? s = Ee(r.registered, i, e.className) : e.className != null && (s = e.className + " ");
    var o = Oe(i, void 0, C.useContext(Me));
    s += r.key + "-" + o.name;
    var f = {};
    for (var p in e) Fe.call(e, p) && p !== "css" && p !== ne && (f[p] = e[p]);
    return f.className = s, t && (f.ref = t), C.createElement(C.Fragment, null, C.createElement(wr, {
      cache: r,
      serialized: o,
      isStringTag: typeof a == "string"
    }), C.createElement(a, f));
  });
  Nr = kr;
  Sr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  Cr = Pe(function(e) {
    return Sr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  });
  Pr = Cr;
  Ar = function(r) {
    return r !== "theme";
  };
  ge = function(r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? Pr : Ar;
  };
  ye = function(r, t, n) {
    var a;
    if (t) {
      var i = t.shouldForwardProp;
      a = r.__emotion_forwardProp && i ? function(s) {
        return r.__emotion_forwardProp(s) && i(s);
      } : i;
    }
    return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
  };
  Er = function(r) {
    var t = r.cache, n = r.serialized, a = r.isStringTag;
    return oe(t, n, a), $e(function() {
      return _e(t, n, a);
    }), null;
  };
  _r = function e(r, t) {
    var n = r.__emotion_real === r, a = n && r.__emotion_base || r, i, s;
    t !== void 0 && (i = t.label, s = t.target);
    var o = ye(r, t, n), f = o || ge(a), p = !f("as");
    return function() {
      var d = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0) h.push.apply(h, d);
      else {
        var _ = d[0];
        h.push(_[0]);
        for (var T = d.length, x = 1; x < T; x++) h.push(d[x], _[x]);
      }
      var c = Ne(function(m, g, v) {
        var P = p && m.as || a, O = "", R = [], S = m;
        if (m.theme == null) {
          S = {};
          for (var y in m) S[y] = m[y];
          S.theme = C.useContext(Me);
        }
        typeof m.className == "string" ? O = Ee(g.registered, R, m.className) : m.className != null && (O = m.className + " ");
        var ce = Oe(h.concat(R), g.registered, S);
        O += g.key + "-" + ce.name, s !== void 0 && (O += " " + s);
        var ze = p && o === void 0 ? ge(P) : f, q = {};
        for (var G in m) p && G === "as" || ze(G) && (q[G] = m[G]);
        return q.className = O, v && (q.ref = v), C.createElement(C.Fragment, null, C.createElement(Er, {
          cache: g,
          serialized: ce,
          isStringTag: typeof P == "string"
        }), C.createElement(P, q));
      });
      return c.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", c.defaultProps = r.defaultProps, c.__emotion_real = c, c.__emotion_base = a, c.__emotion_styles = h, c.__emotion_forwardProp = o, Object.defineProperty(c, "toString", {
        value: function() {
          return "." + s;
        }
      }), c.withComponent = function(m, g) {
        var v = e(m, ee({}, t, g, {
          shouldForwardProp: ye(c, g, true)
        }));
        return v.apply(void 0, h);
      }, c;
    };
  };
  Tr = [
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
  ];
  ve = _r.bind(null);
  Tr.forEach(function(e) {
    ve[e] = ve(e);
  });
  function Le(e) {
    var r, t, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var a = e.length;
      for (r = 0; r < a; r++) e[r] && (t = Le(e[r])) && (n && (n += " "), n += t);
    } else for (t in e) e[t] && (n && (n += " "), n += t);
    return n;
  }
  Mr = function() {
    for (var e, r, t = 0, n = "", a = arguments.length; t < a; t++) (e = arguments[t]) && (r = Le(e)) && (n && (n += " "), n += r);
    return n;
  };
});
export {
  $r as C,
  Nr as E,
  He as S,
  Me as T,
  ee as _,
  __tla,
  Oe as a,
  Ir as b,
  Mr as c,
  hr as d,
  Fe as h,
  _e as i,
  ve as s,
  Rr as u,
  Ne as w
};
