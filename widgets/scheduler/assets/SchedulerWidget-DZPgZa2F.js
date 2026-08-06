import { j as n, __tla as __tla_0 } from "./jsx-runtime-DWrJB0x-.js";
import { v as g, R as k, __tla as __tla_1 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
import { P as o, __tla as __tla_2 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__prop_mf_2_types__loadShare__-DjolvwIX.js";
import { v as c, a as N, __tla as __tla_3 } from "./vis_mf_2_2_mf_2_scheduler__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-D1EBM7Yy.js";
import { v as P, a as $, __tla as __tla_4 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
let x;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })()
]).then(async () => {
  const { loadShare: F } = $, { initPromise: H } = P, q = H.then((a) => F("@iobroker/adapter-react-v5", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), J = await q.then((a) => a());
  var D = J;
  const U = "" + new URL("day-night-CJgz3NQ1.jpg", import.meta.url).href, C = {
    dayNightCont: {
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      transition: "height 300ms ease-out",
      "&>div": {
        position: "relative"
      },
      "&>div>.day_night": {
        width: "100%",
        maxWidth: 550,
        maxHeight: 90
      },
      "&>div>img": {
        width: "100%",
        maxWidth: 550,
        height: "auto",
        maxHeight: 90
      }
    },
    dayNightQuarter: {
      display: "flex",
      width: "100%"
    },
    dayNightSlide: {
      display: "flex",
      width: "100%",
      height: "calc(100% - 9px)",
      position: "absolute",
      border: "6px solid #FFF",
      mt: "-3px",
      transition: "all 400ms ease-out",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "calc(-200% - 5px)",
        top: -5,
        height: "calc(100% + 12px)",
        width: "200%",
        pointerEvents: "none",
        background: "linear-gradient(to left,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 99%,rgba(255,255,255,0) 100%)",
        filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0)"
      },
      "&::after": {
        content: '""',
        position: "absolute",
        right: "calc(-200% - 5px)",
        top: -5,
        height: "calc(100% + 12px)",
        width: "200%",
        pointerEvents: "none",
        background: "linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 99%,rgba(255,255,255,0) 100%)",
        filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0)"
      }
    },
    dn: {
      width: "100%",
      maxWidth: 550,
      maxHeight: 90,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex"
    }
  };
  class T extends g.Component {
    onSlide = (t) => {
      this.props.onChange && this.props.onChange(t);
    };
    render() {
      const { sections: t } = this.props, e = t === 1 ? 0 : 78, i = 100 / t, s = Array(t).fill().map((r, l) => n.jsx("div", {
        style: C.dayNightQuarter,
        onClick: () => this.onSlide(l)
      }, l));
      return n.jsx(c.Box, {
        sx: C.dayNightCont,
        style: {
          height: e
        },
        children: n.jsxs("div", {
          children: [
            n.jsx("img", {
              src: U,
              alt: "day-night",
              id: `${this.props.id}-day-night`
            }),
            n.jsxs("div", {
              style: C.dn,
              children: [
                s,
                n.jsx(c.Box, {
                  sx: C.dayNightSlide,
                  style: {
                    maxWidth: `${i}%`,
                    width: `${i}%`,
                    left: `calc(${this.props.quarterId * i}% - 5px)`
                  }
                })
              ]
            })
          ]
        })
      });
    }
  }
  T.propTypes = {
    onChange: o.func,
    quarterId: o.number,
    sections: o.number,
    id: o.string.isRequired
  };
  const E = {
    min: 0,
    max: 28,
    step: 0.5,
    unit: "\xB0"
  }, z = {
    min: 0,
    max: 100,
    unit: "%"
  }, A = {
    min: 0,
    max: 1
  }, u = {
    temperature: E,
    percent: z,
    onoff: A
  }, v = {
    pretty: (a) => ({
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      width: a
    }),
    prettyLabel: {
      color: "#6c7a93",
      fontWeight: 700,
      fontSize: ".9rem",
      height: 30,
      width: "calc(100% - 5px)",
      textAlign: "center"
    },
    prettyTime: {
      position: "absolute",
      fontSize: "0.9rem",
      fontWeight: 700,
      bottom: 27,
      width: "calc(100% - 5px)",
      borderRadius: "4px",
      height: 28,
      maxHeight: 28,
      minHeight: 28,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer"
    },
    active: (a) => ({
      backgroundColor: a.palette.primary.light,
      color: "#FFF"
    }),
    prettySecs: (a) => ({
      fontSize: "0.6rem",
      fontWeight: 100,
      color: a.palette.text.primary
    }),
    tooltip: {
      pointerEvents: "none"
    }
  }, f = {
    root: (a, t) => ({
      color: a.palette.primary.light,
      borderRadius: 0,
      transition: "all 100ms ease-out",
      position: "relative",
      width: `${t}px`,
      p: 0,
      height: "calc(100% - 90px)"
    }),
    thumb: (a) => ({
      left: "50%",
      width: 0,
      height: 0,
      display: a === "onoff" ? "none" : "flex"
    }),
    active: {
      backgroundColor: "transparent",
      width: 0,
      height: 0
    },
    valueLabel: (a, t) => ({
      position: "relative",
      left: "unset",
      right: "unset",
      textAlign: "center",
      transform: "none !important",
      background: "transparent",
      userSelect: "none",
      "& *": {
        userSelect: "none",
        background: "transparent",
        fontWeight: 100,
        color: a.palette.text.primary,
        fontSize: t ? `${t}px` : "1.0rem",
        transition: "all 100ms ease-out"
      }
    }),
    valueLabelCircle: {
      background: "transparent"
    },
    track: {
      transition: "all 100ms ease-out",
      borderRadius: "4px",
      width: "calc(100% - 8px)"
    },
    rail: (a) => ({
      transition: "all 100ms ease-out",
      borderRadius: "4px",
      height: "calc(100% + 5px)",
      mt: "-5px",
      backgroundColor: a.palette.primary.light,
      width: "calc(100% - 5px)",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    })
  };
  function W(a) {
    const e = (W.canvas || (W.canvas = document.createElement("canvas"))).getContext("2d");
    return e.font = "normal 1rem Roboto, Helvetica, Arial, sans-serif", e.measureText(a).width;
  }
  const V = (a) => {
    const t = {
      ...a
    }, e = t.intervalsWidth;
    delete t.intervalsWidth, delete t.type, delete t.theme;
    const i = W(a.valueLabelFormat);
    let s;
    return i > e && (s = Math.floor(e / i * 13)), n.jsx(c.Slider, {
      id: a.id,
      sx: {
        "&.MuiSlider-root": f.root(a.theme, e),
        "& .MuiSlider-thumb": f.thumb(a.type),
        "& .MuiSlider-active": f.active,
        "& .MuiSlider-valueLabel": f.valueLabel(a.theme, s),
        "& .MuiSlider-valueLabelCircle": f.valueLabelCircle,
        "& .MuiSlider-track": f.track,
        "& .MuiSlider-rail": f.rail(a.theme)
      },
      ...t
    });
  };
  class R extends g.Component {
    constructor(t) {
      super(t), this.state = {
        intervalsWidth: t.intervalsWidth
      }, this.installed = false;
    }
    componentDidMount() {
      this.installHandlers();
    }
    componentWillUnmount() {
      const t = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
      t && (t.onmousemove = null);
    }
    installHandlers() {
      const t = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
      t && !this.installed && (this.installed = true, t._interval = this, t.onmousemove = function(e) {
        var _a, _b;
        if ((e.buttons || ((_a = e.touches) == null ? void 0 : _a.length)) && e.shiftKey) {
          const i = this._interval, s = this.getBoundingClientRect().height;
          let r;
          ((_b = e.touches) == null ? void 0 : _b.length) ? r = e.touches[0].clientY - this.getBoundingClientRect().top : r = e.clientY - this.getBoundingClientRect().top;
          const { min: l, max: h } = i.getMinMax();
          let d;
          switch (i.props.type) {
            case "temperature":
              d = r / s, d = l + Math.round((h - l) * (1 - d) * 2) / 2, d = Math.min(h, Math.max(l, d));
              break;
            case "onoff":
              d = Math.round(r / s * 100) < 50;
              break;
            case "custom":
              d = r / s, d = l + Math.round((h - l) * (1 - d)), d = Math.min(h, Math.max(l, d));
              break;
            default:
              d = Math.round(r / s * 100), d = 100 - d, d = Math.min(100, Math.max(0, d));
              break;
          }
          i.props.on("data", d, i.props.i);
        }
      });
    }
    componentDidUpdate(t) {
      this.installHandlers(), t.intervalsWidth !== this.props.intervalsWidth && this.setState({
        intervalsWidth: this.props.intervalsWidth
      });
    }
    handleSliderChange = (t, e) => {
      t.shiftKey || this.on("data", e);
    };
    handleSelected = (t) => {
      t.shiftKey || this.on("selected", !this.props.selected);
    };
    on = (t, e) => this.props.on && this.props.on(t, e, this.props.i);
    getPostfix(t) {
      switch (this.props.type) {
        case "onoff":
          return t ? n.jsx("span", {
            style: this.props.theme.palette.text.success,
            children: this.props.onText
          }) : n.jsx("span", {
            style: this.props.theme.palette.text.danger,
            children: this.props.offText
          });
        case "custom":
          return this.props.minMax.marks && this.props.minMax.marks[t] !== void 0 ? this.props.minMax.marks[t].toString() : this.props.minMax.unit ? t.toString() + this.props.minMax.unit : t.toString();
        default:
          return t.toString() + this.props.minMax.unit;
      }
    }
    getMinMax() {
      return this.props.type === "custom" ? this.props.minMax : u[this.props.type] || {
        min: 0,
        max: 100
      };
    }
    getLabel = () => {
      const { step: t, i: e } = this.props, i = e * t, s = parseInt(i), r = `0${i % 1 * 60}`.slice(-2);
      return [
        s,
        r
      ];
    };
    render() {
      const { value: t, i: e, selected: i, theme: s, type: r } = this.props, { intervalsWidth: l } = this.state;
      if (e < 0) return "";
      const { min: h, max: d, step: p } = this.getMinMax();
      console.log("min", h, "max", d, "step", p);
      const m = this.getLabel(), w = t || 0, S = r === "onoff" ? this.getPostfix(w || 0) : "", j = r !== "onoff" ? this.getPostfix(w || 0) : "";
      return n.jsx(c.Tooltip, {
        title: this.props.t('Press "shift" and move mouse to change more than one slider'),
        componentsProps: {
          popper: {
            sx: v.tooltip
          }
        },
        children: n.jsxs("span", {
          style: v.pretty(l),
          children: [
            n.jsx("span", {
              style: v.prettyLabel,
              children: S
            }),
            n.jsx(V, {
              ref: this.ref,
              theme: s,
              intervalsWidth: l,
              type: r,
              orientation: "vertical",
              "aria-label": "pretty slider",
              value: w,
              valueLabelFormat: j,
              min: h,
              max: d,
              step: p || 1,
              selected: i,
              onChange: this.handleSliderChange,
              valueLabelDisplay: "on",
              id: `slider_${this.props.i}_${this.props.id}`
            }, e),
            n.jsxs(c.Box, {
              sx: i ? v.active : void 0,
              onClick: this.handleSelected,
              onMouseMove: (y) => {
                y.shiftKey && y.buttons && this.on("selected", window.myselectMode);
              },
              onMouseDown: (y) => {
                y.shiftKey && (window.myselectMode = !this.props.selected, this.on("selected", !this.props.selected));
              },
              style: {
                ...v.prettyTime,
                userSelect: "none"
              },
              children: [
                n.jsx("span", {
                  style: {
                    color: this.props.theme.palette.text.primary
                  },
                  children: m[0]
                }),
                n.jsx(c.Box, {
                  component: "span",
                  sx: v.prettySecs,
                  children: m[1]
                })
              ]
            })
          ]
        })
      });
    }
  }
  R.propTypes = {
    i: o.number,
    intervalsWidth: o.number,
    on: o.func,
    selected: o.bool,
    step: o.number,
    theme: o.object,
    type: o.string,
    value: o.oneOfType([
      o.number,
      o.bool
    ]),
    id: o.string.isRequired,
    minMax: o.object,
    offText: o.string,
    onText: o.string,
    t: o.func.isRequired
  };
  const I = {
    swiperContent: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width:570px)": {
        justifyContent: "center"
      }
    },
    swiper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      marginTop: 15,
      position: "relative"
    },
    timeLineContainer: {
      position: "absolute",
      height: "100%"
    },
    timeLine: (a) => ({
      zIndex: 100,
      borderWidth: 2,
      borderColor: a.palette.text.primary,
      borderLeftStyle: "dashed",
      width: 4,
      height: "calc(100% - 20px)",
      position: "relative"
    })
  };
  class _ extends g.Component {
    timeInterval = null;
    setSlideInterval = null;
    constructor(t) {
      super(t), this.state = {
        slideId: 0,
        selected: [],
        intervalsWidth: t.intervalsWidth,
        key: parseInt(Date.now() + Math.random() * 1e3),
        currentTime: /* @__PURE__ */ new Date()
      }, this.onText = t.t("on"), this.offText = t.t("off");
    }
    componentDidMount() {
      this.setSlideOfTime(), this.timeInterval = setInterval(() => this.setState({
        currentTime: /* @__PURE__ */ new Date()
      }), 1e3 * 120), this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 1e3 * 120);
    }
    componentWillUnmount() {
      clearInterval(this.timeInterval), this.timeInterval = null, clearInterval(this.setSlideInterval), this.setSlideInterval = null;
    }
    componentDidUpdate(t) {
      t.range !== this.props.range && (this.setState({
        slideId: 0
      }), this.setSlideOfTime()), this.props.intervalsWidth && t.intervalsWidth !== this.props.intervalsWidth && this.setState({
        intervalsWidth: this.props.intervalsWidth,
        key: parseInt(Date.now() + Math.random() * 1e3),
        slideId: this.getSlideOfTime(t.intervalsWidth)
      });
    }
    getNumberOfSectionsByRange = (t) => {
      if (this.state.intervalsWidth >= 720) return t === 0.25 ? 4 : t === 0.5 ? 2 : 1;
      switch (t) {
        case 0.25:
          return 16;
        case 0.5:
          return 8;
        case 1:
          return 4;
        case 2:
          return 3;
        case 4:
          return 1;
        default:
          return 2;
      }
    };
    getCountByRange = (t, e) => {
      if (e = e || this.state.intervalsWidth, e >= 720) return t === 0.5 || t === 0.25 ? 24 : _.getMaxByRange(t);
      switch (t) {
        case 0.25:
          return 6;
        case 0.5:
          return 6;
        case 1:
          return 6;
        case 2:
          return 4;
        case 4:
          return 6;
        default:
          return 4;
      }
    };
    static getMaxByRange = (t) => 24 / t;
    setSlideId = (t) => {
      this.setState({
        slideId: parseInt(t)
      });
    };
    onChange = (t, e, i) => {
      const { selected: s } = this.state, r = JSON.parse(JSON.stringify(this.state));
      if (t === "selected") r[t][i] = e, this.setState(r);
      else if (t === "data") {
        const l = JSON.parse(JSON.stringify(this.props.data)), h = s[i];
        h || this.setState({
          selected: []
        }), !h || s.filter((d) => d).length === 0 ? l[i] = e : l.forEach((d, p) => {
          s[p] && (l[p] = e);
        }), this.props.onChange(l);
      }
    };
    getSlide() {
      const { intervalsWidth: t, slideId: e, selected: i, key: s } = this.state, { type: r, theme: l, range: h, data: d, minMax: p } = this.props, m = this.getCountByRange(h), w = _.getMaxByRange(h);
      if (e * m >= w) return setTimeout(() => {
        this.setSlideOfTime();
      }, 50), null;
      const S = [];
      for (let b = e * m; b < (e + 1) * m; b++) S.push(n.jsx(R, {
        value: d[b],
        selected: i[b],
        label: "",
        i: b,
        id: this.props.id,
        step: h,
        on: this.onChange,
        type: r,
        theme: l,
        intervalsWidth: t / m,
        minMax: p,
        onText: this.onText,
        offText: this.offText,
        t: this.props.t
      }, `${b}step${h}${s}`));
      const j = new Date(this.state.currentTime), y = Math.round(((j.getHours() + j.getMinutes() / 60) / h - m * e) / m * t);
      return n.jsxs(n.Fragment, {
        children: [
          n.jsx("div", {
            style: I.timeLineContainer,
            title: this.props.t("Now"),
            children: n.jsx(c.Box, {
              sx: I.timeLine,
              style: {
                left: y
              }
            })
          }),
          S
        ]
      });
    }
    getSlideOfTime(t) {
      const { range: e } = this.props;
      if (t = t || this.state.intervalsWidth, t) {
        const i = (/* @__PURE__ */ new Date()).getHours(), s = this.getCountByRange(e, t) * e;
        return Math.floor(i / s);
      }
      return 0;
    }
    setSlideOfTime() {
      this.state.intervalsWidth && this.setState({
        slideId: this.getSlideOfTime()
      });
    }
    render() {
      if (!this.state.intervalsWidth) return null;
      const { slideId: t } = this.state, { range: e } = this.props, i = this.getNumberOfSectionsByRange(e);
      return n.jsxs(n.Fragment, {
        children: [
          n.jsx(c.Box, {
            sx: I.swiperContent,
            children: n.jsx("div", {
              style: I.swiper,
              children: this.getSlide()
            })
          }),
          n.jsx(T, {
            id: this.props.id,
            sections: i,
            quarterId: parseInt(t),
            onChange: (s) => {
              this.setSlideId(s), clearInterval(this.setSlideInterval), this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 1e3 * 120);
            }
          })
        ]
      });
    }
  }
  _.propTypes = {
    data: o.array,
    intervalsWidth: o.number,
    onChange: o.func,
    range: o.number,
    theme: o.object,
    type: o.string,
    id: o.string.isRequired,
    minMax: o.object,
    t: o.func.isRequired
  };
  const O = {
    tapperGrid: {
      margin: 0,
      boxShadow: "none",
      borderRadius: 0,
      alignItems: "center",
      p: "10px",
      "@media (max-width:570px)": {
        margin: 0,
        boxShadow: "none",
        borderRadius: 0,
        alignItems: "center",
        padding: "0px 10px 0 60px"
      }
    },
    tapperInside: {
      overflow: "hidden",
      height: "100%",
      flexGrow: 1,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  };
  class L extends g.Component {
    constructor(t) {
      super(t), this.tapperRef = k.createRef(), this.state = {
        intervalsWidth: 0
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions), this.updateWindowDimensions();
    }
    componentDidUpdate(t) {
      t.range !== this.props.range && this.updateWindowDimensions(), t.windowWidth !== this.props.windowWidth && this.updateWindowDimensions();
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
      var _a;
      const t = (_a = this.tapperRef.current) == null ? void 0 : _a.getBoundingClientRect().width;
      this.setState({
        intervalsWidth: t || 30
      });
    };
    render() {
      var _a;
      const { type: t, theme: e, range: i, intervals: s, minMax: r } = this.props, l = (_a = this.tapperRef.current) == null ? void 0 : _a.getBoundingClientRect().width;
      return l && l !== this.state.intervalsWidth && (this.updateWidth = this.updateWidth || setTimeout(() => {
        this.updateWidth = null, this.updateWindowDimensions();
      }, 100)), n.jsx(c.Box, {
        className: "m-1 h-100",
        sx: O.tapperGrid,
        style: {
          backgroundColor: e.palette.background.default,
          padding: 0
        },
        children: n.jsx("div", {
          id: `${this.props.id}-tapper-inside`,
          ref: this.tapperRef,
          style: {
            ...O.tapperInside,
            padding: 0,
            width: "100%"
          },
          children: this.props.intervalsWidth || this.state.intervalsWidth ? n.jsx(_, {
            id: this.props.id,
            data: s,
            onChange: this.props.onChange,
            theme: e,
            type: t,
            range: i,
            intervalsWidth: this.props.intervalsWidth || this.state.intervalsWidth,
            minMax: r,
            t: this.props.t
          }) : null
        })
      });
    }
  }
  L.propTypes = {
    intervals: o.array,
    onChange: o.func,
    range: o.number,
    theme: o.object,
    type: o.string,
    intervalsWidth: o.number,
    id: o.string.isRequired,
    minMax: o.object,
    t: o.func.isRequired
  };
  const G = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa"
  ], K = [
    1,
    2,
    3,
    4,
    5,
    6,
    0
  ], Q = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ], M = {
    flow: {
      width: 26,
      height: 28,
      maxHeight: 28,
      minHeight: 28,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      position: "relative"
    },
    label: (a) => ({
      color: a.palette.text.primary,
      ml: 0,
      mr: "12px"
    })
  };
  class B extends g.Component {
    render() {
      const t = this.props.firstDayOfWeek === "monday" ? K : Q;
      return n.jsxs(c.FormControl, {
        component: "fieldset",
        style: {
          marginRight: 12
        },
        children: [
          t.map((e) => n.jsx(c.FormControlLabel, {
            style: {
              marginLeft: 6
            },
            control: n.jsx(c.Checkbox, {
              checked: this.props.dow.includes(e),
              color: "primary",
              style: M.flow,
              onChange: (i) => this.props.onChange(e, i.target.checked)
            }),
            label: this.props.t(G[e]),
            sx: M.label
          }, e)),
          this.props.holidayVisible ? n.jsx(c.FormControlLabel, {
            style: {
              marginLeft: 6
            },
            control: n.jsx(c.Checkbox, {
              checked: !!this.props.holiday,
              color: "primary",
              style: M.flow,
              onChange: (e) => this.props.onChange("holiday", e.target.checked)
            }),
            label: this.props.t("Holiday"),
            sx: M.label
          }) : null
        ]
      });
    }
  }
  B.propTypes = {
    dow: o.array,
    holiday: o.bool,
    holidayVisible: o.bool,
    onChange: o.func,
    firstDayOfWeek: o.string,
    t: o.func.isRequired
  };
  const X = {
    content: {
      display: "flex",
      width: "100%",
      height: "100%",
      position: "relative"
    }
  }, Y = (a) => {
    const [t, e] = g.useState(null);
    if (g.useEffect(() => {
      a.context.socket.getObject(`system.adapter.scheduler.${a.data.instance}`).then((r) => e(r));
    }, []), !t) return null;
    const i = [], s = (r, l) => {
      r.forEach((h) => {
        i.push({
          profile: h,
          level: l
        }), t.native.profiles.filter((d) => d.parent === h.id).length && s(t.native.profiles.filter((d) => d.parent === h.id), l + 1);
      });
    };
    return s(t.native.profiles.filter((r) => !r.parent), 0), console.log(i), n.jsx(c.Select, {
      style: {
        width: "100%"
      },
      value: a.data[a.field.name],
      onChange: (r) => {
        const l = {
          ...a.data,
          [a.field.name]: r.target.value
        }, h = i.find((p) => p.profile.id === a.data[a.field.name]), d = i.find((p) => p.profile.id === r.target.value);
        d && (!l.name || h && a.data.name === h.profile.title) && (l.name = d.profile.title), a.setData(l);
      },
      variant: "standard",
      renderValue: (r) => {
        const l = i.find((h) => h.profile.id === r);
        return n.jsx("div", {
          children: l ? l.profile.title : ""
        });
      },
      children: i.map((r) => n.jsx(c.MenuItem, {
        value: r.profile.id,
        disabled: r.profile.type === "folder",
        children: n.jsxs("div", {
          style: {
            paddingLeft: r.level * 20,
            display: "flex"
          },
          children: [
            n.jsx("span", {
              style: {
                paddingRight: 4
              },
              children: r.profile.type === "folder" ? n.jsx(D.IconClosed, {}) : n.jsx(N.Schedule, {})
            }),
            r.profile.title
          ]
        })
      }, r.profile.id))
    });
  };
  x = class extends window.visRxWidget {
    static getWidgetInfo() {
      return {
        id: "tplScheduler",
        visSet: "scheduler",
        visWidgetLabel: "scheduler",
        visSetLabel: "set_label",
        visSetColor: "#70BBF7",
        visName: "Scheduler",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                label: "instance",
                name: "instance",
                type: "instance",
                adapter: "scheduler",
                isShort: true
              },
              {
                label: "profile",
                name: "profile",
                type: "custom",
                hidden: (t) => !t.instance && t.instance !== 0,
                component: (t, e, i, s) => n.jsx(Y, {
                  field: t,
                  data: e,
                  setData: i,
                  context: s.context,
                  selectedWidgets: s.selectedWidgets,
                  selectedView: s.selectedView
                })
              },
              {
                label: "read_only",
                name: "readOnly",
                type: "checkbox",
                default: false
              },
              {
                label: "hide_days_of_week",
                name: "hideDow",
                type: "checkbox",
                default: false
              },
              {
                name: "noCard",
                label: "without_card",
                type: "checkbox",
                hidden: "!!data.externalDialog"
              },
              {
                name: "widgetTitle",
                label: "name",
                hidden: "!!data.noCard"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 355,
          position: "relative"
        },
        visPrev: "widgets/scheduler/img/prev_scheduler.png"
      };
    }
    static t(t, ...e) {
      return D.I18n.t(`scheduler_${t}`, ...e);
    }
    constructor(t) {
      super(t), this.widgetRef = k.createRef();
    }
    async propertiesUpdate() {
      const t = this.state.rxData.instance || this.state.rxData.instance === 0 ? `system.adapter.scheduler.${this.state.rxData.instance}` : "";
      if (this.subscribedId !== t) if (this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged), this.subscribedId = t, this.subscribedId) {
        const e = await this.props.context.socket.getObject(this.subscribedId), i = e.native.profiles.find((r) => r.id === this.state.rxData.profile), s = {
          object: e
        };
        if (i) {
          const r = i.data.type === "custom" ? i.data.members[0] : "";
          if (r !== this.minMaxObjectId) {
            this.minMaxObjectId = r;
            let l;
            this.minMaxObjectId ? l = await this.props.context.socket.getObject(this.minMaxObjectId) : l = null, s.minMaxObject = l;
          }
        }
        await this.props.context.socket.subscribeObject(this.subscribedId, this.onProfileChanged), this.setState(s);
      } else this.setState({
        object: null
      });
      else if (this.state.object && this.state.rxData.profile) {
        const e = this.state.object.native.profiles.find((s) => s.id === this.state.rxData.profile), i = e.data.type === "custom" || e.data.type === "temperature" ? e.data.members[0] : "";
        if (i !== this.minMaxObjectId) {
          this.minMaxObjectId = i;
          let s;
          this.minMaxObjectId ? s = await this.props.context.socket.getObject(this.minMaxObjectId) : s = null, this.setState({
            minMaxObject: s
          });
        }
      }
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged);
    }
    onProfileChanged = (t, e) => {
      var _a, _b;
      if (t === this.state.object._id) {
        const i = this.state.object.native.profiles.find((r) => r.id === this.state.rxData.profile), s = (_b = (_a = e.native) == null ? void 0 : _a.profiles) == null ? void 0 : _b.find((r) => r.id === this.state.rxData.profile);
        JSON.stringify(i) !== JSON.stringify(s) && this.setState({
          object: e
        });
      }
    };
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    getWidgetInfo() {
      return x.getWidgetInfo();
    }
    onDow = (t, e) => {
      const i = JSON.parse(JSON.stringify(this.currentProfile()));
      t === "holiday" ? i.holiday = e : e && !i.dow.includes(t) ? i.dow.push(t) : !e && i.dow.includes(t) && i.dow.splice(i.dow.indexOf(t), 1), this.changeProfile(i);
    };
    onIntervals = (t) => {
      const e = JSON.parse(JSON.stringify(this.currentProfile()));
      e.intervals = t, this.changeProfile(e);
    };
    changeProfile = (t) => {
      if (this.state.rxData.readOnly) return;
      const e = JSON.parse(JSON.stringify(this.state.object)), i = this.state.object.native.profiles.findIndex((s) => s.id === this.state.rxData.profile);
      e.native.profiles[i].data = t, this.setState({
        object: e
      }), this.writeTimeout ? clearTimeout(this.writeTimeout) : this.setState({
        writing: true
      }), this.writeTimeout = setTimeout(async (s) => {
        this.writeTimeout = null, await this.props.context.socket.setObject(s._id, s), this.setState({
          writing: false
        });
      }, 2e3, e);
    };
    currentProfile = () => {
      const t = this.state.object.native.profiles.find((e) => e.id === this.state.rxData.profile);
      return t ? t.type === "profile" && t.data : null;
    };
    getProfileMinMax(t) {
      var _a, _b;
      if (t.type === "custom") {
        const e = this.state.minMaxObject;
        if (((_a = e == null ? void 0 : e.common) == null ? void 0 : _a.type) === "number") {
          if (e.common.states && !Array.isArray(e.common.states)) {
            const i = Object.keys(e.common.states).map((s) => parseFloat(s)).sort();
            return {
              min: i[0],
              max: i[i.length - 1],
              unit: e.common.unit,
              marks: e.common.states
            };
          }
          if (e.common.min !== void 0 || e.common.max !== void 0) return {
            min: e.common.min !== void 0 ? e.common.min : 0,
            max: e.common.max !== void 0 ? e.common.max : 100,
            unit: e.common.unit,
            marks: null
          };
        }
        return {
          min: 0,
          max: 100,
          marks: null,
          unit: (_b = e == null ? void 0 : e.common) == null ? void 0 : _b.unit
        };
      }
      if (t.type === "temperature") {
        const e = this.state.minMaxObject;
        if ((e == null ? void 0 : e.common) && (e.common.min !== void 0 || e.common.max !== void 0)) return {
          min: e.common.min !== void 0 ? e.common.min : u.temperature.min,
          max: e.common.max !== void 0 ? e.common.max : u.temperature.max,
          unit: e.common.unit || u[t.type].unit,
          marks: null
        };
      }
      return {
        min: u[t.type].min,
        max: u[t.type].max,
        step: u[t.type].step,
        marks: null,
        unit: u[t.type].unit
      };
    }
    renderWidgetBody(t) {
      var _a, _b;
      if (super.renderWidgetBody(t), !this.state.rxData.instance) return n.jsx("div", {
        children: x.t("instance_not_selected")
      });
      if (!this.state.object) return null;
      console.log(this.state.object);
      const e = this.currentProfile();
      if (!e) return n.jsx("div", {
        children: x.t("profile_not_selected")
      });
      ((_a = this.widgetRef.current) == null ? void 0 : _a.offsetWidth) || setTimeout(() => this.forceUpdate(), 100);
      let i = (((_b = this.widgetRef.current) == null ? void 0 : _b.offsetWidth) || 0) - (this.state.rxData.hideDow ? 0 : 80);
      i < 0 && (i = 0);
      const s = n.jsxs("div", {
        style: X.content,
        ref: this.widgetRef,
        children: [
          this.state.writing ? n.jsx(c.LinearProgress, {
            style: {
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              width: "100%"
            }
          }) : null,
          i ? n.jsx(L, {
            id: this.props.id,
            onChange: this.onIntervals,
            theme: this.props.context.theme,
            intervals: e.intervals,
            range: e.intervalDuration,
            type: e.type,
            socket: this.props.context.socket,
            windowWidth: i,
            readOnly: this.state.rxData.readOnly,
            intervalsWidth: i,
            minMax: this.getProfileMinMax(e),
            t: x.t
          }) : null,
          this.state.rxData.hideDow && i ? null : n.jsx(B, {
            firstDayOfWeek: this.props.context.socket.systemConfig.common.firstDayOfWeek || "monday",
            readOnly: this.state.rxData.readOnly,
            dow: e.dow,
            holiday: e.holiday,
            holidayVisible: !!this.state.object.native.holidayId,
            onChange: this.onDow,
            theme: this.props.context.theme,
            t: x.t
          })
        ]
      });
      return this.state.rxData.noCard || t.widget.usedInWidget ? s : this.wrapContent(s, null, {
        height: "calc(100% - 24px)",
        width: "calc(100% - 50px)"
      });
    }
  };
  x.propTypes = {
    context: o.object,
    themeType: o.string,
    style: o.object,
    data: o.object
  };
});
export {
  __tla,
  x as default
};
