import { j as n, __tla as __tla_0 } from "./jsx-runtime-DWrJB0x-.js";
import { v as _, R as W, __tla as __tla_1 } from "./vis_mf_2_2_mf_2_scheduler__loadShare__react__loadShare__-CW7phi3m.js";
import { v as p, a as B, __tla as __tla_2 } from "./vis_mf_2_2_mf_2_scheduler__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__-D1EBM7Yy.js";
import { v as $, a as L, __tla as __tla_3 } from "./vis_mf_2_2_mf_2_scheduler__mf_v__runtimeInit__mf_v__-BYoRdOOk.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
let w;
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
  })()
]).then(async () => {
  const { loadShare: N } = L, { initPromise: P } = $, H = P.then((a) => N("@iobroker/adapter-react-v5", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), E = await H.then((a) => a());
  var k = E;
  const F = "" + new URL("day-night-CJgz3NQ1.jpg", import.meta.url).href, S = {
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
  class U extends _.Component {
    onSlide = (t) => {
      this.props.onChange && this.props.onChange(t);
    };
    render() {
      const { sections: t } = this.props, e = t === 1 ? 0 : 78, i = 100 / t, s = Array(t).fill(0).map((r, o) => n.jsx("div", {
        style: S.dayNightQuarter,
        onClick: () => this.onSlide(o)
      }, o));
      return n.jsx(p.Box, {
        sx: S.dayNightCont,
        style: {
          height: e
        },
        children: n.jsxs("div", {
          children: [
            n.jsx("img", {
              src: F,
              alt: "day-night",
              id: `${this.props.id}-day-night`
            }),
            n.jsxs("div", {
              style: S.dn,
              children: [
                s,
                n.jsx(p.Box, {
                  sx: S.dayNightSlide,
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
  const z = {
    min: 0,
    max: 28,
    step: 0.5,
    unit: "\xB0"
  }, J = {
    min: 0,
    max: 100,
    unit: "%"
  }, A = {
    min: 0,
    max: 1
  }, R = {
    temperature: z,
    percent: J,
    onoff: A
  }, G = R, b = {
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
  }, x = {
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
  let C = null;
  function K(a) {
    C = C || document.createElement("canvas");
    const t = C.getContext("2d");
    return t ? (t.font = "normal 1rem Roboto, Helvetica, Arial, sans-serif", t.measureText(a).width) : 0;
  }
  function V(a) {
    const { id: t, theme: e, intervalsWidth: i, type: s, value: r, valueLabelFormat: o, min: d, max: h, step: c, disabled: l, onChange: u } = a, f = K(o);
    let m;
    return f > i && (m = Math.floor(i / f * 13)), n.jsx(p.Slider, {
      id: t,
      sx: {
        "&.MuiSlider-root": x.root(e, i),
        "& .MuiSlider-thumb": x.thumb(s),
        "& .MuiSlider-active": x.active,
        "& .MuiSlider-valueLabel": x.valueLabel(e, m),
        "& .MuiSlider-valueLabelCircle": x.valueLabelCircle,
        "& .MuiSlider-track": x.track,
        "& .MuiSlider-rail": x.rail(e)
      },
      orientation: "vertical",
      "aria-label": "pretty slider",
      valueLabelDisplay: "on",
      value: r,
      valueLabelFormat: o,
      min: d,
      max: h,
      step: c,
      disabled: l,
      onChange: u
    });
  }
  class q extends _.Component {
    installed = false;
    constructor(t) {
      super(t), this.state = {
        intervalsWidth: t.intervalsWidth
      };
    }
    componentDidMount() {
      this.installHandlers();
    }
    componentWillUnmount() {
      const t = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
      t && (t.onmousemove = null, delete t._interval);
    }
    installHandlers() {
      if (this.props.readOnly) return;
      const t = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
      t && !this.installed && (this.installed = true, t._interval = this, t.onmousemove = function(e) {
        const i = this, s = e.touches;
        if ((e.buttons || (s == null ? void 0 : s.length)) && e.shiftKey) {
          const r = i._interval;
          if (!r) return;
          const o = i.getBoundingClientRect().height;
          let d;
          (s == null ? void 0 : s.length) ? d = s[0].clientY - i.getBoundingClientRect().top : d = e.clientY - i.getBoundingClientRect().top;
          const { min: h, max: c } = r.getMinMax();
          let l;
          switch (r.props.type) {
            case "temperature":
              l = d / o, l = h + Math.round((c - h) * (1 - l) * 2) / 2, l = Math.min(c, Math.max(h, l));
              break;
            case "onoff":
              l = Math.round(d / o * 100) < 50 ? 1 : 0;
              break;
            case "custom":
              l = d / o, l = h + Math.round((c - h) * (1 - l)), l = Math.min(c, Math.max(h, l));
              break;
            default:
              l = Math.round(d / o * 100), l = 100 - l, l = Math.min(100, Math.max(0, l));
              break;
          }
          r.props.on("data", l, r.props.i);
        }
      });
    }
    componentDidUpdate(t) {
      this.installHandlers(), t.intervalsWidth !== this.props.intervalsWidth && this.setState({
        intervalsWidth: this.props.intervalsWidth
      });
    }
    handleSliderChange = (t, e) => {
      t.shiftKey || this.on("data", Array.isArray(e) ? e[0] : e);
    };
    handleSelected = (t) => {
      !t.shiftKey && !this.props.readOnly && this.on("selected", !this.props.selected);
    };
    on = (t, e) => {
      var _a, _b;
      return (_b = (_a = this.props).on) == null ? void 0 : _b.call(_a, t, e, this.props.i);
    };
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
          return t.toString() + (this.props.minMax.unit || "");
      }
    }
    getMinMax() {
      return this.props.type === "custom" ? this.props.minMax : G[this.props.type] || {
        min: 0,
        max: 100
      };
    }
    getLabel = () => {
      const { step: t, i: e } = this.props, i = e * t, s = Math.floor(i), r = `0${i % 1 * 60}`.slice(-2);
      return [
        s,
        r
      ];
    };
    render() {
      const { value: t, i: e, selected: i, theme: s, type: r } = this.props, { intervalsWidth: o } = this.state;
      if (e < 0) return null;
      const { min: d, max: h, step: c } = this.getMinMax(), l = this.getLabel(), u = t || 0, f = r === "onoff" ? this.getPostfix(u) : "", m = r !== "onoff" ? this.getPostfix(u) : "";
      return n.jsx(p.Tooltip, {
        title: this.props.t('Press "shift" and move mouse to change more than one slider'),
        slotProps: {
          popper: {
            sx: b.tooltip
          }
        },
        children: n.jsxs("span", {
          style: b.pretty(o),
          children: [
            n.jsx("span", {
              style: b.prettyLabel,
              children: f
            }),
            n.jsx(V, {
              theme: s,
              intervalsWidth: o,
              type: r,
              value: u,
              valueLabelFormat: m,
              min: d,
              max: h,
              step: c || 1,
              disabled: this.props.readOnly,
              onChange: this.handleSliderChange,
              id: `slider_${this.props.i}_${this.props.id}`
            }, e),
            n.jsxs(p.Box, {
              sx: i ? b.active : void 0,
              onClick: this.handleSelected,
              onMouseMove: (y) => {
                y.shiftKey && y.buttons && this.on("selected", window.myselectMode);
              },
              onMouseDown: (y) => {
                y.shiftKey && (window.myselectMode = !this.props.selected, this.on("selected", !this.props.selected));
              },
              style: {
                ...b.prettyTime,
                userSelect: "none"
              },
              children: [
                n.jsx("span", {
                  style: {
                    color: this.props.theme.palette.text.primary
                  },
                  children: l[0]
                }),
                n.jsx(p.Box, {
                  component: "span",
                  sx: b.prettySecs,
                  children: l[1]
                })
              ]
            })
          ]
        })
      });
    }
  }
  const j = {
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
  class M extends _.Component {
    timeInterval = null;
    setSlideInterval = null;
    onText;
    offText;
    constructor(t) {
      super(t), this.state = {
        slideId: 0,
        selected: [],
        intervalsWidth: t.intervalsWidth,
        key: Math.round(Date.now() + Math.random() * 1e3),
        currentTime: /* @__PURE__ */ new Date()
      }, this.onText = t.t("on"), this.offText = t.t("off");
    }
    componentDidMount() {
      this.setSlideOfTime(), this.timeInterval = setInterval(() => this.setState({
        currentTime: /* @__PURE__ */ new Date()
      }), 1e3 * 120), this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 1e3 * 120);
    }
    componentWillUnmount() {
      this.timeInterval && (clearInterval(this.timeInterval), this.timeInterval = null), this.setSlideInterval && (clearInterval(this.setSlideInterval), this.setSlideInterval = null);
    }
    componentDidUpdate(t) {
      t.range !== this.props.range && (this.setState({
        slideId: 0
      }), this.setSlideOfTime()), this.props.intervalsWidth && t.intervalsWidth !== this.props.intervalsWidth && this.setState({
        intervalsWidth: this.props.intervalsWidth,
        key: Math.round(Date.now() + Math.random() * 1e3),
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
      if (e = e || this.state.intervalsWidth, e >= 720) return t === 0.5 || t === 0.25 ? 24 : M.getMaxByRange(t);
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
        slideId: t
      });
    };
    onChange = (t, e, i) => {
      const { selected: s } = this.state;
      if (t === "selected") {
        const r = [
          ...s
        ];
        r[i] = !!e, this.setState({
          selected: r
        });
      } else {
        const r = JSON.parse(JSON.stringify(this.props.data)), o = s[i];
        o || this.setState({
          selected: []
        }), !o || s.filter((d) => d).length === 0 ? r[i] = e : r.forEach((d, h) => {
          s[h] && (r[h] = e);
        }), this.props.onChange(r);
      }
    };
    getSlide() {
      const { intervalsWidth: t, slideId: e, selected: i, key: s } = this.state, { type: r, theme: o, range: d, data: h, minMax: c } = this.props, l = this.getCountByRange(d), u = M.getMaxByRange(d);
      if (e * l >= u) return setTimeout(() => {
        this.setSlideOfTime();
      }, 50), null;
      const f = [];
      for (let v = e * l; v < (e + 1) * l; v++) f.push(n.jsx(q, {
        value: h[v],
        selected: i[v],
        i: v,
        id: this.props.id,
        step: d,
        on: this.onChange,
        type: r,
        theme: o,
        intervalsWidth: t / l,
        minMax: c,
        onText: this.onText,
        offText: this.offText,
        readOnly: this.props.readOnly,
        t: this.props.t
      }, `${v}step${d}${s}`));
      const m = new Date(this.state.currentTime), y = Math.round(((m.getHours() + m.getMinutes() / 60) / d - l * e) / l * t);
      return n.jsxs(n.Fragment, {
        children: [
          n.jsx("div", {
            style: j.timeLineContainer,
            title: this.props.t("Now"),
            children: n.jsx(p.Box, {
              sx: j.timeLine,
              style: {
                left: y
              }
            })
          }),
          f
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
          n.jsx(p.Box, {
            sx: j.swiperContent,
            children: n.jsx("div", {
              style: j.swiper,
              children: this.getSlide()
            })
          }),
          n.jsx(U, {
            id: this.props.id,
            sections: i,
            quarterId: t,
            onChange: (s) => {
              this.setSlideId(s), this.setSlideInterval && clearInterval(this.setSlideInterval), this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 1e3 * 120);
            }
          })
        ]
      });
    }
  }
  const O = {
    tapperGrid: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      minHeight: 0,
      overflow: "hidden",
      borderRadius: "8px"
    },
    tapperInside: {
      overflow: "hidden",
      flexGrow: 1,
      minHeight: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%"
    }
  };
  class Q extends _.Component {
    tapperRef;
    updateWidth = null;
    constructor(t) {
      super(t), this.tapperRef = _.createRef(), this.state = {
        intervalsWidth: 0
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions), this.updateWindowDimensions();
    }
    componentDidUpdate(t) {
      t.range !== this.props.range && this.updateWindowDimensions(), t.intervalsWidth !== this.props.intervalsWidth && this.updateWindowDimensions();
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions), this.updateWidth && (clearTimeout(this.updateWidth), this.updateWidth = null);
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
      const { type: t, theme: e, range: i, intervals: s, minMax: r } = this.props, o = (_a = this.tapperRef.current) == null ? void 0 : _a.getBoundingClientRect().width;
      return o && o !== this.state.intervalsWidth && (this.updateWidth = this.updateWidth || setTimeout(() => {
        this.updateWidth = null, this.updateWindowDimensions();
      }, 100)), n.jsx(p.Box, {
        sx: O.tapperGrid,
        style: {
          backgroundColor: e.palette.background.default
        },
        children: n.jsx("div", {
          id: `${this.props.id}-tapper-inside`,
          ref: this.tapperRef,
          style: O.tapperInside,
          children: this.props.intervalsWidth || this.state.intervalsWidth ? n.jsx(M, {
            id: this.props.id,
            data: s,
            onChange: this.props.onChange,
            theme: e,
            type: t,
            range: i,
            intervalsWidth: this.props.intervalsWidth || this.state.intervalsWidth,
            minMax: r,
            readOnly: this.props.readOnly,
            t: this.props.t
          }) : null
        })
      });
    }
  }
  const D = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa"
  ], X = [
    1,
    2,
    3,
    4,
    5,
    6,
    0
  ], Y = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ], T = {
    grid: {
      display: "grid",
      gap: "4px",
      width: "100%"
    },
    button: {
      borderRadius: "8px",
      p: "4px 0",
      minWidth: 0,
      lineHeight: 1.2,
      fontSize: "0.8rem",
      fontWeight: 600,
      textTransform: "none",
      border: "1px solid",
      borderColor: "divider",
      "&.Mui-selected": {
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        borderColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.dark"
        }
      }
    }
  };
  class Z extends _.Component {
    renderButton(t, e, i, s, r) {
      return n.jsx(p.Tooltip, {
        title: i,
        slotProps: {
          popper: {
            sx: {
              pointerEvents: "none"
            }
          }
        },
        children: n.jsx("span", {
          children: n.jsx(p.ToggleButton, {
            value: t,
            size: "small",
            fullWidth: true,
            disabled: this.props.readOnly,
            selected: s,
            onChange: r,
            sx: T.button,
            children: e
          })
        })
      }, t);
    }
    render() {
      const t = this.props.firstDayOfWeek === "monday" ? X : Y, e = this.props.columns || 1, i = t.map((s) => this.renderButton(`dow${s}`, this.props.t(D[s]), this.props.t(D[s]), this.props.dow.includes(s), () => this.props.onChange(s, !this.props.dow.includes(s))));
      return this.props.holidayVisible && i.push(this.renderButton("holiday", this.props.t("Holiday"), this.props.t("Holiday"), !!this.props.holiday, () => this.props.onChange("holiday", !this.props.holiday))), n.jsx(p.Box, {
        sx: T.grid,
        style: {
          gridTemplateColumns: `repeat(${e}, minmax(0, 1fr))`
        },
        children: i
      });
    }
  }
  const g = R, I = {
    content: {
      display: "flex",
      gap: 8,
      width: "100%",
      height: "100%",
      minHeight: 0,
      position: "relative",
      boxSizing: "border-box"
    },
    intervals: {
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      display: "flex",
      flexDirection: "column"
    },
    days: {
      width: 68,
      flexShrink: 0,
      display: "flex",
      alignItems: "center"
    }
  };
  function tt(a) {
    const [t, e] = W.useState(null);
    if (W.useEffect(() => {
      a.context.socket.getObject(`system.adapter.scheduler.${a.data.instance}`).then((o) => e(o || null));
    }, []), !t) return null;
    const i = [], s = (o, d) => {
      o.forEach((h) => {
        i.push({
          profile: h,
          level: d
        });
        const c = t.native.profiles.filter((l) => l.parent === h.id);
        c.length && s(c, d + 1);
      });
    };
    s(t.native.profiles.filter((o) => !o.parent), 0);
    const r = a.field.name;
    return n.jsx(p.Select, {
      style: {
        width: "100%"
      },
      value: a.data[r] || "",
      onChange: (o) => {
        const d = {
          ...a.data,
          [r]: o.target.value
        }, h = i.find((l) => l.profile.id === a.data[r]), c = i.find((l) => l.profile.id === o.target.value);
        c && (!d.name || h && a.data.name === h.profile.title) && (d.name = c.profile.title), a.setData(d);
      },
      variant: "standard",
      renderValue: (o) => {
        const d = i.find((h) => h.profile.id === o);
        return n.jsx("div", {
          children: d ? d.profile.title : ""
        });
      },
      children: i.map((o) => n.jsx(p.MenuItem, {
        value: o.profile.id,
        disabled: o.profile.type === "folder",
        children: n.jsxs("div", {
          style: {
            paddingLeft: o.level * 20,
            display: "flex"
          },
          children: [
            n.jsx("span", {
              style: {
                paddingRight: 4
              },
              children: o.profile.type === "folder" ? n.jsx(k.IconClosed, {}) : n.jsx(B.Schedule, {})
            }),
            o.profile.title
          ]
        })
      }, o.profile.id))
    });
  }
  w = class extends window.visRxWidget {
    widgetRef = W.createRef();
    subscribedId = "";
    minMaxObjectId = "";
    writeTimeout = null;
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
                component: (t, e, i, s) => n.jsx(tt, {
                  field: t,
                  data: e,
                  setData: i,
                  context: s.context
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
      return k.I18n.t(`scheduler_${t}`, ...e);
    }
    async propertiesUpdate() {
      const t = this.state.rxData.instance || this.state.rxData.instance === 0 ? `system.adapter.scheduler.${this.state.rxData.instance}` : "";
      if (this.subscribedId !== t) if (this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged), this.subscribedId = t, this.subscribedId) {
        const e = await this.getInstanceObject(this.subscribedId);
        if (!e) {
          this.setState({
            object: null
          });
          return;
        }
        const i = e.native.profiles.find((r) => r.id === this.state.rxData.profile), s = {
          object: e
        };
        if (i) {
          const r = i.data.type === "custom" ? i.data.members[0] : "";
          r !== this.minMaxObjectId && (this.minMaxObjectId = r, s.minMaxObject = await this.getStateObject(this.minMaxObjectId));
        }
        await this.props.context.socket.subscribeObject(this.subscribedId, this.onProfileChanged), this.setState(s);
      } else this.setState({
        object: null
      });
      else if (this.state.object && this.state.rxData.profile) {
        const e = this.state.object.native.profiles.find((s) => s.id === this.state.rxData.profile);
        if (!e) return;
        const i = e.data.type === "custom" || e.data.type === "temperature" ? e.data.members[0] : "";
        i !== this.minMaxObjectId && (this.minMaxObjectId = i, this.setState({
          minMaxObject: await this.getStateObject(this.minMaxObjectId)
        }));
      }
    }
    async getInstanceObject(t) {
      const e = await this.props.context.socket.getObject(t);
      return e || null;
    }
    async getStateObject(t) {
      if (!t) return null;
      const e = await this.props.context.socket.getObject(t);
      return e || null;
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged), this.writeTimeout && (clearTimeout(this.writeTimeout), this.writeTimeout = null);
    }
    onProfileChanged = (t, e) => {
      var _a, _b;
      if (this.state.object && t === this.state.object._id) {
        const i = this.state.object.native.profiles.find((o) => o.id === this.state.rxData.profile), s = e, r = (_b = (_a = s == null ? void 0 : s.native) == null ? void 0 : _a.profiles) == null ? void 0 : _b.find((o) => o.id === this.state.rxData.profile);
        JSON.stringify(i) !== JSON.stringify(r) && s && this.setState({
          object: s
        });
      }
    };
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    getWidgetInfo() {
      return w.getWidgetInfo();
    }
    onDow = (t, e) => {
      const i = this.currentProfile();
      if (!i) return;
      const s = JSON.parse(JSON.stringify(i));
      t === "holiday" ? s.holiday = e : e && !s.dow.includes(t) ? s.dow.push(t) : !e && s.dow.includes(t) && s.dow.splice(s.dow.indexOf(t), 1), this.changeProfile(s);
    };
    onIntervals = (t) => {
      const e = this.currentProfile();
      if (!e) return;
      const i = JSON.parse(JSON.stringify(e));
      i.intervals = t, this.changeProfile(i);
    };
    changeProfile = (t) => {
      if (this.state.rxData.readOnly || !this.state.object) return;
      const e = JSON.parse(JSON.stringify(this.state.object)), i = this.state.object.native.profiles.findIndex((s) => s.id === this.state.rxData.profile);
      e.native.profiles[i].data = t, this.setState({
        object: e
      }), this.writeTimeout ? clearTimeout(this.writeTimeout) : this.setState({
        writing: true
      }), this.writeTimeout = setTimeout(() => {
        this.writeTimeout = null, this.props.context.socket.setObject(e._id, e).then(() => this.setState({
          writing: false
        })).catch((s) => {
          this.setState({
            writing: false
          }), console.error(`Cannot write profile: ${s}`);
        });
      }, 2e3);
    };
    currentProfile = () => {
      var _a;
      const t = (_a = this.state.object) == null ? void 0 : _a.native.profiles.find((e) => e.id === this.state.rxData.profile);
      return t && t.type === "profile" ? t.data : null;
    };
    getProfileMinMax(t) {
      var _a, _b;
      if (t.type === "custom") {
        const i = (_a = this.state.minMaxObject) == null ? void 0 : _a.common;
        if ((i == null ? void 0 : i.type) === "number") {
          if (i.states && !Array.isArray(i.states)) {
            const s = Object.keys(i.states).map((r) => parseFloat(r)).sort();
            return {
              min: s[0],
              max: s[s.length - 1],
              unit: i.unit,
              marks: i.states
            };
          }
          if (i.min !== void 0 || i.max !== void 0) return {
            min: i.min !== void 0 ? i.min : 0,
            max: i.max !== void 0 ? i.max : 100,
            unit: i.unit,
            marks: null
          };
        }
        return {
          min: 0,
          max: 100,
          marks: null,
          unit: i == null ? void 0 : i.unit
        };
      }
      if (t.type === "temperature") {
        const e = (_b = this.state.minMaxObject) == null ? void 0 : _b.common;
        if (e && (e.min !== void 0 || e.max !== void 0)) return {
          min: e.min !== void 0 ? e.min : g.temperature.min,
          max: e.max !== void 0 ? e.max : g.temperature.max,
          unit: e.unit || g[t.type].unit,
          marks: null
        };
      }
      return {
        min: g[t.type].min,
        max: g[t.type].max,
        step: g[t.type].step,
        marks: null,
        unit: g[t.type].unit
      };
    }
    renderWidgetBody(t) {
      var _a, _b, _c, _d;
      if (super.renderWidgetBody(t), !this.state.rxData.instance && this.state.rxData.instance !== 0) return n.jsx("div", {
        children: w.t("instance_not_selected")
      });
      if (!this.state.object) return null;
      const e = this.currentProfile();
      if (!e) return n.jsx("div", {
        children: w.t("profile_not_selected")
      });
      ((_a = this.widgetRef.current) == null ? void 0 : _a.offsetWidth) || setTimeout(() => this.forceUpdate(), 100);
      const i = !this.state.rxData.hideDow;
      let s = (((_b = this.widgetRef.current) == null ? void 0 : _b.offsetWidth) || 0) - (i ? 76 : 0);
      s < 0 && (s = 0);
      const r = n.jsxs("div", {
        style: I.content,
        ref: this.widgetRef,
        children: [
          this.state.writing ? n.jsx(p.LinearProgress, {
            style: {
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              width: "100%"
            }
          }) : null,
          s ? n.jsx("div", {
            style: I.intervals,
            children: n.jsx(Q, {
              id: this.props.id,
              onChange: this.onIntervals,
              theme: this.props.context.theme,
              intervals: e.intervals,
              range: e.intervalDuration,
              type: e.type,
              readOnly: this.state.rxData.readOnly,
              intervalsWidth: s,
              minMax: this.getProfileMinMax(e),
              t: w.t
            })
          }) : null,
          i && s ? n.jsx("div", {
            style: I.days,
            children: n.jsx(Z, {
              firstDayOfWeek: ((_d = (_c = this.props.context.socket.systemConfig) == null ? void 0 : _c.common) == null ? void 0 : _d.firstDayOfWeek) || "monday",
              readOnly: this.state.rxData.readOnly,
              dow: e.dow,
              holiday: e.holiday,
              holidayVisible: !!this.state.object.native.holidayId,
              onChange: this.onDow,
              columns: 1,
              t: w.t
            })
          }) : null
        ]
      });
      return this.state.rxData.noCard || t.widget.usedInWidget ? r : this.wrapContent(r, null, {
        height: "calc(100% - 24px)",
        width: "calc(100% - 24px)"
      });
    }
  };
});
export {
  __tla,
  w as default
};
