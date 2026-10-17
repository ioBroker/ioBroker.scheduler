import { A as e, _ as t, a as n, ct as r, dt as i, ft as a, lt as o, m as s, o as c, pt as l, s as u, st as d, ut as f } from "./_virtual_mf___mfe_internal__vis_mf_2_2_mf_2_scheduler__mf_owner__108432574651544__loadShare__shared-TMCjcIVW.js";
import { t as p } from "./createSvgIcon-kQ0CCrO0.js";
var m = p([c(`path`, { d: `M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8` }, `0`), c(`path`, { d: `M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z` }, `1`)], `Schedule`);
window.i18nTranslations || (window.i18nTranslations = {}), window.sysLang || (window.sysLang = `en`);
var h = class e2 {
  static unknownTranslations = [];
  static _disableWarning = false;
  static setLanguage(e4) {
    e4 && (window.sysLang = e4);
  }
  static extendTranslations(e4, t3) {
    var _a;
    if (e4.prefix) {
      let t4 = e4;
      if (typeof t4.prefix == `string`) {
        let n2 = t4.prefix;
        delete t4.prefix, Object.keys(t4).forEach((r2) => {
          let i2 = r2, a2 = {}, o2 = t4[i2];
          Object.keys(o2).forEach((e5) => {
            e5 && o2 && (e5.startsWith(n2) ? a2[e5] = o2[e5] : a2[`${n2}${e5}`] = o2[e5]);
          }), e4[i2] = a2;
        });
      } else console.warn(`Found prefix in translations, but it is not a string`);
    }
    try {
      if (!t3) e4.en && e4.de && e4.ru ? Object.keys(e4).forEach((t4) => {
        var _a2;
        let n2 = t4;
        (_a2 = window.i18nTranslations)[n2] || (_a2[n2] = {}), Object.assign(window.i18nTranslations[n2], e4[n2]);
      }) : Object.keys(e4).forEach((t4) => {
        let n2 = e4[t4];
        Object.keys(n2).forEach((e5) => {
          let r2 = e5, i2 = window.i18nTranslations[r2];
          i2 ? i2[t4] ? i2[t4] !== n2[r2] && console.warn(`Translation for word "${t4}" in "${r2}" was ignored: existing = "${i2[t4]}", new = ${n2[r2]}`) : i2[t4] = n2[r2] : console.warn(`Used unknown language: ${r2}`);
        });
      });
      else {
        window.i18nTranslations[t3] || console.warn(`Used unknown language: ${t3}`), (_a = window.i18nTranslations)[t3] || (_a[t3] = {});
        let n2 = window.i18nTranslations[t3];
        Object.keys(e4).forEach((r2) => {
          n2[r2] ? n2[r2] !== e4[r2] && console.warn(`Translation for word "${r2}" in "${t3}" was ignored: existing = "${n2[r2]}", new = ${e4[r2]}`) : n2[r2] = e4[r2];
        });
      }
    } catch (e5) {
      console.error(`Cannot apply translations: ${e5}`);
    }
  }
  static setTranslations(t3) {
    t3 && e2.extendTranslations(t3);
  }
  static getLanguage() {
    return window.sysLang;
  }
  static t(t3, ...n2) {
    let r2 = window.i18nTranslations[window.sysLang];
    if (r2) {
      let n3 = r2[t3];
      if (n3) t3 = n3;
      else if (e2.unknownTranslations.includes(t3) || (e2.unknownTranslations.push(t3), !e2._disableWarning && console.log(`Translate: ${t3}`)), window.sysLang !== `en` && window.i18nTranslations.en) {
        let e4 = window.i18nTranslations.en[t3];
        e4 && (t3 = e4);
      }
    }
    for (let e4 of n2) t3 = t3.replace(`%s`, e4);
    return t3;
  }
  static i18nShow(t3) {
    let n2 = {};
    t3 ? typeof t3 == `string` ? (e2.unknownTranslations.forEach((e4) => {
      e4.startsWith(t3) && (n2[e4] = e4.replace(t3, ``));
    }), console.log(JSON.stringify(n2, null, 2))) : t3 && typeof t3 == `object` && (e2.unknownTranslations.forEach((e4) => {
      t3.test(e4) && (n2[e4] = e4);
    }), console.log(JSON.stringify(n2, null, 2))) : (e2.unknownTranslations.forEach((e4) => n2[e4] = e4), console.log(JSON.stringify(n2, null, 2)));
  }
  static disableWarning(t3) {
    e2._disableWarning = !!t3;
  }
};
window.i18nShow = h.i18nShow, window.i18nDisableWarning = h.disableWarning;
function g(t3) {
  return e.createElement(`svg`, { xmlns: `http://www.w3.org/2000/svg`, onClick: (e4) => t3.onClick && t3.onClick(e4), viewBox: `0 0 650 512`, width: t3.width || (t3.fontSize === `small` ? 16 : 20), height: t3.height || t3.width || (t3.fontSize === `small` ? 16 : 20), className: t3.className, style: t3.style }, e.createElement(`path`, { fill: `currentColor`, d: `m524,128l-192,0l-64,-64l-160,0c-26.51,0 -48,21.49 -48,48l0,288c0,26.51 21.49,48 48,48l416,0c26.51,0 48,-21.49 48,-48l0,-224c0,-26.51 -21.49,-48 -48,-48z` }));
}
var _ = new URL(`day-night-CJgz3NQ1.jpg`, import.meta.url).href, v = { dayNightCont: { position: `relative`, width: `100%`, display: `flex`, justifyContent: `center`, overflow: `hidden`, transition: `height 300ms ease-out`, "&>div": { position: `relative` }, "&>div>.day_night": { width: `100%`, maxWidth: 550, maxHeight: 90 }, "&>div>img": { width: `100%`, maxWidth: 550, height: `auto`, maxHeight: 90 } }, dayNightQuarter: { display: `flex`, width: `100%` }, dayNightSlide: { display: `flex`, width: `100%`, height: `calc(100% - 9px)`, position: `absolute`, border: `6px solid #FFF`, mt: `-3px`, transition: `all 400ms ease-out`, "&::before": { content: `""`, position: `absolute`, left: `calc(-200% - 5px)`, top: -5, height: `calc(100% + 12px)`, width: `200%`, pointerEvents: `none`, background: `linear-gradient(to left,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 99%,rgba(255,255,255,0) 100%)`, filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0)` }, "&::after": { content: `""`, position: `absolute`, right: `calc(-200% - 5px)`, top: -5, height: `calc(100% + 12px)`, width: `200%`, pointerEvents: `none`, background: `linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 99%,rgba(255,255,255,0) 100%)`, filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0)` } }, dn: { width: `100%`, maxWidth: 550, maxHeight: 90, height: `100%`, position: `absolute`, top: 0, left: 0, display: `flex` } }, y = class extends t {
  onSlide = (e4) => {
    this.props.onChange && this.props.onChange(e4);
  };
  render() {
    let { sections: e4 } = this.props, t3 = e4 === 1 ? 0 : 78, n2 = 100 / e4, r2 = Array(e4).fill(0).map((e5, t4) => c(`div`, { style: v.dayNightQuarter, onClick: () => this.onSlide(t4) }, t4));
    return c(o, { sx: v.dayNightCont, style: { height: t3 }, children: u(`div`, { children: [c(`img`, { src: _, alt: `day-night`, id: `${this.props.id}-day-night` }), u(`div`, { style: v.dn, children: [r2, c(o, { sx: v.dayNightSlide, style: { maxWidth: `${n2}%`, width: `${n2}%`, left: `calc(${this.props.quarterId * n2}% - 5px)` } })] })] }) });
  }
}, b = { temperature: { min: 0, max: 28, step: 0.5, unit: `\xB0` }, percent: { min: 0, max: 100, unit: `%` }, onoff: { min: 0, max: 1 } }, x = b, S = { pretty: (e4) => ({ position: `relative`, height: `100%`, display: `flex`, flexDirection: `column`, width: e4 }), prettyLabel: { color: `#6c7a93`, fontWeight: 700, fontSize: `.9rem`, height: 30, width: `calc(100% - 5px)`, textAlign: `center` }, prettyTime: { position: `absolute`, fontSize: `0.9rem`, fontWeight: 700, bottom: 27, width: `calc(100% - 5px)`, borderRadius: `4px`, height: 28, maxHeight: 28, minHeight: 28, display: `flex`, justifyContent: `center`, alignItems: `center`, cursor: `pointer` }, active: (e4) => ({ backgroundColor: e4.palette.primary.light, color: `#FFF` }), prettySecs: (e4) => ({ fontSize: `0.6rem`, fontWeight: 100, color: e4.palette.text.primary }), tooltip: { pointerEvents: `none` } }, C = { root: (e4, t3) => ({ color: e4.palette.primary.light, borderRadius: 0, transition: `all 100ms ease-out`, position: `relative`, width: `${t3}px`, p: 0, height: `calc(100% - 90px)` }), thumb: (e4) => ({ left: `50%`, width: 0, height: 0, display: e4 === `onoff` ? `none` : `flex` }), active: { backgroundColor: `transparent`, width: 0, height: 0 }, valueLabel: (e4, t3) => ({ position: `relative`, left: `unset`, right: `unset`, textAlign: `center`, transform: `none !important`, background: `transparent`, userSelect: `none`, "& *": { userSelect: `none`, background: `transparent`, fontWeight: 100, color: e4.palette.text.primary, fontSize: t3 ? `${t3}px` : `1.0rem`, transition: `all 100ms ease-out` } }), valueLabelCircle: { background: `transparent` }, track: { transition: `all 100ms ease-out`, borderRadius: `4px`, width: `calc(100% - 8px)` }, rail: (e4) => ({ transition: `all 100ms ease-out`, borderRadius: `4px`, height: `calc(100% + 5px)`, mt: `-5px`, backgroundColor: e4.palette.primary.light, width: `calc(100% - 5px)`, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }) }, w = null;
function T(e4) {
  w || (w = document.createElement(`canvas`));
  let t3 = w.getContext(`2d`);
  return t3 ? (t3.font = `normal 1rem Roboto, Helvetica, Arial, sans-serif`, t3.measureText(e4).width) : 0;
}
function E(e4) {
  let { id: t3, theme: n2, intervalsWidth: r2, type: i2, value: a2, valueLabelFormat: o2, min: s2, max: u2, step: d2, disabled: f2, onChange: p2 } = e4, m2 = T(o2), h2;
  return m2 > r2 && (h2 = Math.floor(r2 / m2 * 13)), c(l, { id: t3, sx: { "&.MuiSlider-root": C.root(n2, r2), "& .MuiSlider-thumb": C.thumb(i2), "& .MuiSlider-active": C.active, "& .MuiSlider-valueLabel": C.valueLabel(n2, h2), "& .MuiSlider-valueLabelCircle": C.valueLabelCircle, "& .MuiSlider-track": C.track, "& .MuiSlider-rail": C.rail(n2) }, orientation: `vertical`, "aria-label": `pretty slider`, valueLabelDisplay: `on`, value: a2, valueLabelFormat: o2, min: s2, max: u2, step: d2, disabled: f2, onChange: p2 });
}
var D = class extends t {
  installed = false;
  constructor(e4) {
    super(e4), this.state = { intervalsWidth: e4.intervalsWidth };
  }
  componentDidMount() {
    this.installHandlers();
  }
  componentWillUnmount() {
    let e4 = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
    e4 && (e4.onmousemove = null, delete e4._interval);
  }
  installHandlers() {
    if (this.props.readOnly) return;
    let e4 = window.document.getElementById(`slider_${this.props.i}_${this.props.id}`);
    e4 && !this.installed && (this.installed = true, e4._interval = this, e4.onmousemove = function(e5) {
      let t3 = this, n2 = e5.touches;
      if ((e5.buttons || (n2 == null ? void 0 : n2.length)) && e5.shiftKey) {
        let r2 = t3._interval;
        if (!r2) return;
        let i2 = t3.getBoundingClientRect().height, a2;
        a2 = (n2 == null ? void 0 : n2.length) ? n2[0].clientY - t3.getBoundingClientRect().top : e5.clientY - t3.getBoundingClientRect().top;
        let { min: o2, max: s2 } = r2.getMinMax(), c2;
        switch (r2.props.type) {
          case `temperature`:
            c2 = a2 / i2, c2 = o2 + Math.round((s2 - o2) * (1 - c2) * 2) / 2, c2 = Math.min(s2, Math.max(o2, c2));
            break;
          case `onoff`:
            c2 = +(Math.round(a2 / i2 * 100) < 50);
            break;
          case `custom`:
            c2 = a2 / i2, c2 = o2 + Math.round((s2 - o2) * (1 - c2)), c2 = Math.min(s2, Math.max(o2, c2));
            break;
          default:
            c2 = Math.round(a2 / i2 * 100), c2 = 100 - c2, c2 = Math.min(100, Math.max(0, c2));
        }
        r2.props.on(`data`, c2, r2.props.i);
      }
    });
  }
  componentDidUpdate(e4) {
    this.installHandlers(), e4.intervalsWidth !== this.props.intervalsWidth && this.setState({ intervalsWidth: this.props.intervalsWidth });
  }
  handleSliderChange = (e4, t3) => {
    e4.shiftKey || this.on(`data`, Array.isArray(t3) ? t3[0] : t3);
  };
  handleSelected = (e4) => {
    !e4.shiftKey && !this.props.readOnly && this.on(`selected`, !this.props.selected);
  };
  on = (e4, t3) => {
    var _a, _b;
    return (_b = (_a = this.props).on) == null ? void 0 : _b.call(_a, e4, t3, this.props.i);
  };
  getPostfix(e4) {
    switch (this.props.type) {
      case `onoff`:
        return e4 ? c(`span`, { style: this.props.theme.palette.text.success, children: this.props.onText }) : c(`span`, { style: this.props.theme.palette.text.danger, children: this.props.offText });
      case `custom`:
        return this.props.minMax.marks && this.props.minMax.marks[e4] !== void 0 ? this.props.minMax.marks[e4].toString() : this.props.minMax.unit ? e4.toString() + this.props.minMax.unit : e4.toString();
      default:
        return e4.toString() + (this.props.minMax.unit || ``);
    }
  }
  getMinMax() {
    return this.props.type === `custom` ? this.props.minMax : x[this.props.type] || { min: 0, max: 100 };
  }
  getLabel = () => {
    let { step: e4, i: t3 } = this.props, n2 = t3 * e4;
    return [Math.floor(n2), `0${n2 % 1 * 60}`.slice(-2)];
  };
  render() {
    let { value: e4, i: t3, selected: n2, theme: i2, type: a2 } = this.props, { intervalsWidth: s2 } = this.state;
    if (t3 < 0) return null;
    let { min: l2, max: d2, step: f2 } = this.getMinMax(), p2 = this.getLabel(), m2 = e4 || 0, h2 = a2 === `onoff` ? this.getPostfix(m2) : ``, g2 = a2 === `onoff` ? `` : this.getPostfix(m2);
    return c(r, { title: this.props.t(`Press "shift" and move mouse to change more than one slider`), slotProps: { popper: { sx: S.tooltip } }, children: u(`span`, { style: S.pretty(s2), children: [c(`span`, { style: S.prettyLabel, children: h2 }), c(E, { theme: i2, intervalsWidth: s2, type: a2, value: m2, valueLabelFormat: g2, min: l2, max: d2, step: f2 || 1, disabled: this.props.readOnly, onChange: this.handleSliderChange, id: `slider_${this.props.i}_${this.props.id}` }, t3), u(o, { sx: n2 ? S.active : void 0, onClick: this.handleSelected, onMouseMove: (e5) => {
      e5.shiftKey && e5.buttons && this.on(`selected`, window.myselectMode);
    }, onMouseDown: (e5) => {
      e5.shiftKey && (window.myselectMode = !this.props.selected, this.on(`selected`, !this.props.selected));
    }, style: { ...S.prettyTime, userSelect: `none` }, children: [c(`span`, { style: { color: this.props.theme.palette.text.primary }, children: p2[0] }), c(o, { component: `span`, sx: S.prettySecs, children: p2[1] })] })] }) });
  }
}, O = { swiperContent: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `space-between`, "@media (max-width:570px)": { justifyContent: `center` } }, swiper: { width: `100%`, height: `100%`, display: `flex`, alignItems: `center`, marginTop: 15, position: `relative` }, timeLineContainer: { position: `absolute`, height: `100%` }, timeLine: (e4) => ({ zIndex: 100, borderWidth: 2, borderColor: e4.palette.text.primary, borderLeftStyle: `dashed`, width: 4, height: `calc(100% - 20px)`, position: `relative` }) }, k = class e3 extends t {
  timeInterval = null;
  setSlideInterval = null;
  onText;
  offText;
  constructor(e4) {
    super(e4), this.state = { slideId: 0, selected: [], intervalsWidth: e4.intervalsWidth, key: Math.round(Date.now() + Math.random() * 1e3), currentTime: /* @__PURE__ */ new Date() }, this.onText = e4.t(`on`), this.offText = e4.t(`off`);
  }
  componentDidMount() {
    this.setSlideOfTime(), this.timeInterval = setInterval(() => this.setState({ currentTime: /* @__PURE__ */ new Date() }), 12e4), this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 12e4);
  }
  componentWillUnmount() {
    this.timeInterval && (this.timeInterval = (clearInterval(this.timeInterval), null)), this.setSlideInterval && (this.setSlideInterval = (clearInterval(this.setSlideInterval), null));
  }
  componentDidUpdate(e4) {
    e4.range !== this.props.range && (this.setState({ slideId: 0 }), this.setSlideOfTime()), this.props.intervalsWidth && e4.intervalsWidth !== this.props.intervalsWidth && this.setState({ intervalsWidth: this.props.intervalsWidth, key: Math.round(Date.now() + Math.random() * 1e3), slideId: this.getSlideOfTime(e4.intervalsWidth) });
  }
  getNumberOfSectionsByRange = (e4) => {
    if (this.state.intervalsWidth >= 720) return e4 === 0.25 ? 4 : e4 === 0.5 ? 2 : 1;
    switch (e4) {
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
  getCountByRange = (t3, n2) => {
    if (n2 || (n2 = this.state.intervalsWidth), n2 >= 720) return t3 === 0.5 || t3 === 0.25 ? 24 : e3.getMaxByRange(t3);
    switch (t3) {
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
  static getMaxByRange = (e4) => 24 / e4;
  setSlideId = (e4) => {
    this.setState({ slideId: e4 });
  };
  onChange = (e4, t3, n2) => {
    let { selected: r2 } = this.state;
    if (e4 === `selected`) {
      let e5 = [...r2];
      e5[n2] = !!t3, this.setState({ selected: e5 });
    } else {
      let e5 = JSON.parse(JSON.stringify(this.props.data)), i2 = r2[n2];
      i2 || this.setState({ selected: [] }), !i2 || r2.filter((e6) => e6).length === 0 ? e5[n2] = t3 : e5.forEach((n3, i3) => {
        r2[i3] && (e5[i3] = t3);
      }), this.props.onChange(e5);
    }
  };
  getSlide() {
    let { intervalsWidth: t3, slideId: r2, selected: i2, key: a2 } = this.state, { type: s2, theme: l2, range: d2, data: f2, minMax: p2 } = this.props, m2 = this.getCountByRange(d2), h2 = e3.getMaxByRange(d2);
    if (r2 * m2 >= h2) return setTimeout(() => {
      this.setSlideOfTime();
    }, 50), null;
    let g2 = [];
    for (let e4 = r2 * m2; e4 < (r2 + 1) * m2; e4++) g2.push(c(D, { value: f2[e4], selected: i2[e4], i: e4, id: this.props.id, step: d2, on: this.onChange, type: s2, theme: l2, intervalsWidth: t3 / m2, minMax: p2, onText: this.onText, offText: this.offText, readOnly: this.props.readOnly, t: this.props.t }, `${e4}step${d2}${a2}`));
    let _2 = new Date(this.state.currentTime), v2 = Math.round(((_2.getHours() + _2.getMinutes() / 60) / d2 - m2 * r2) / m2 * t3);
    return u(n, { children: [c(`div`, { style: O.timeLineContainer, title: this.props.t(`Now`), children: c(o, { sx: O.timeLine, style: { left: v2 } }) }), g2] });
  }
  getSlideOfTime(e4) {
    let { range: t3 } = this.props;
    if (e4 || (e4 = this.state.intervalsWidth), e4) {
      let n2 = (/* @__PURE__ */ new Date()).getHours(), r2 = this.getCountByRange(t3, e4) * t3;
      return Math.floor(n2 / r2);
    }
    return 0;
  }
  setSlideOfTime() {
    this.state.intervalsWidth && this.setState({ slideId: this.getSlideOfTime() });
  }
  render() {
    if (!this.state.intervalsWidth) return null;
    let { slideId: e4 } = this.state, { range: t3 } = this.props, r2 = this.getNumberOfSectionsByRange(t3);
    return u(n, { children: [c(o, { sx: O.swiperContent, children: c(`div`, { style: O.swiper, children: this.getSlide() }) }), c(y, { id: this.props.id, sections: r2, quarterId: e4, onChange: (e5) => {
      this.setSlideId(e5), this.setSlideInterval && clearInterval(this.setSlideInterval), this.setSlideInterval = setInterval(() => this.setSlideOfTime(), 12e4);
    } })] });
  }
}, A = { tapperGrid: { display: `flex`, flexDirection: `column`, width: `100%`, height: `100%`, minHeight: 0, overflow: `hidden`, borderRadius: `8px` }, tapperInside: { overflow: `hidden`, flexGrow: 1, minHeight: 0, position: `relative`, display: `flex`, flexDirection: `column`, justifyContent: `center`, width: `100%` } }, j = class extends t {
  tapperRef;
  updateWidth = null;
  constructor(e4) {
    super(e4), this.tapperRef = s(), this.state = { intervalsWidth: 0 };
  }
  componentDidMount() {
    window.addEventListener(`resize`, this.updateWindowDimensions), this.updateWindowDimensions();
  }
  componentDidUpdate(e4) {
    e4.range !== this.props.range && this.updateWindowDimensions(), e4.intervalsWidth !== this.props.intervalsWidth && this.updateWindowDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener(`resize`, this.updateWindowDimensions), this.updateWidth && (this.updateWidth = (clearTimeout(this.updateWidth), null));
  }
  updateWindowDimensions = () => {
    var _a;
    let e4 = (_a = this.tapperRef.current) == null ? void 0 : _a.getBoundingClientRect().width;
    this.setState({ intervalsWidth: e4 || 30 });
  };
  render() {
    var _a;
    let { type: e4, theme: t3, range: n2, intervals: r2, minMax: i2 } = this.props, a2 = (_a = this.tapperRef.current) == null ? void 0 : _a.getBoundingClientRect().width;
    return a2 && a2 !== this.state.intervalsWidth && (this.updateWidth = this.updateWidth || setTimeout(() => {
      this.updateWidth = null, this.updateWindowDimensions();
    }, 100)), c(o, { sx: A.tapperGrid, style: { backgroundColor: t3.palette.background.default }, children: c(`div`, { id: `${this.props.id}-tapper-inside`, ref: this.tapperRef, style: A.tapperInside, children: this.props.intervalsWidth || this.state.intervalsWidth ? c(k, { id: this.props.id, data: r2, onChange: this.props.onChange, theme: t3, type: e4, range: n2, intervalsWidth: this.props.intervalsWidth || this.state.intervalsWidth, minMax: i2, readOnly: this.props.readOnly, t: this.props.t }) : null }) });
  }
}, M = [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`], N = [1, 2, 3, 4, 5, 6, 0], P = [0, 1, 2, 3, 4, 5, 6], F = { grid: { display: `grid`, gap: `4px`, width: `100%` }, button: { borderRadius: `8px`, p: `4px 0`, minWidth: 0, lineHeight: 1.2, fontSize: `0.8rem`, fontWeight: 600, textTransform: `none`, border: `1px solid`, borderColor: `divider`, "&.Mui-selected": { backgroundColor: `primary.main`, color: `primary.contrastText`, borderColor: `primary.main`, "&:hover": { backgroundColor: `primary.dark` } } } }, I = class extends t {
  renderButton(e4, t3, n2, i2, a2) {
    return c(r, { title: n2, slotProps: { popper: { sx: { pointerEvents: `none` } } }, children: c(`span`, { children: c(d, { value: e4, size: `small`, fullWidth: true, disabled: this.props.readOnly, selected: i2, onChange: a2, sx: F.button, children: t3 }) }) }, e4);
  }
  render() {
    let e4 = this.props.firstDayOfWeek === `monday` ? N : P, t3 = this.props.columns || 1, n2 = e4.map((e5) => this.renderButton(`dow${e5}`, this.props.t(M[e5]), this.props.t(M[e5]), this.props.dow.includes(e5), () => this.props.onChange(e5, !this.props.dow.includes(e5))));
    return this.props.holidayVisible && n2.push(this.renderButton(`holiday`, this.props.t(`Holiday`), this.props.t(`Holiday`), !!this.props.holiday, () => this.props.onChange(`holiday`, !this.props.holiday))), c(o, { sx: F.grid, style: { gridTemplateColumns: `repeat(${t3}, minmax(0, 1fr))` }, children: n2 });
  }
}, L = b, R = { content: { display: `flex`, gap: 8, width: `100%`, height: `100%`, minHeight: 0, position: `relative`, boxSizing: `border-box` }, intervals: { flex: 1, minWidth: 0, minHeight: 0, display: `flex`, flexDirection: `column` }, days: { width: 68, flexShrink: 0, display: `flex`, alignItems: `center` } };
function z(t3) {
  let [n2, r2] = e.useState(null);
  if (e.useEffect(() => {
    t3.context.socket.getObject(`system.adapter.scheduler.${t3.data.instance}`).then((e4) => r2(e4 || null));
  }, []), !n2) return null;
  let o2 = [], s2 = (e4, t4) => {
    e4.forEach((e5) => {
      o2.push({ profile: e5, level: t4 });
      let r3 = n2.native.profiles.filter((t5) => t5.parent === e5.id);
      r3.length && s2(r3, t4 + 1);
    });
  };
  s2(n2.native.profiles.filter((e4) => !e4.parent), 0);
  let l2 = t3.field.name;
  return c(a, { style: { width: `100%` }, value: t3.data[l2] || ``, onChange: (e4) => {
    let n3 = { ...t3.data, [l2]: e4.target.value }, r3 = o2.find((e5) => e5.profile.id === t3.data[l2]), i2 = o2.find((t4) => t4.profile.id === e4.target.value);
    i2 && (!n3.name || r3 && t3.data.name === r3.profile.title) && (n3.name = i2.profile.title), t3.setData(n3);
  }, variant: `standard`, renderValue: (e4) => {
    let t4 = o2.find((t5) => t5.profile.id === e4);
    return c(`div`, { children: t4 ? t4.profile.title : `` });
  }, children: o2.map((e4) => c(i, { value: e4.profile.id, disabled: e4.profile.type === `folder`, children: u(`div`, { style: { paddingLeft: e4.level * 20, display: `flex` }, children: [c(`span`, { style: { paddingRight: 4 }, children: e4.profile.type === `folder` ? c(g, {}) : c(m, {}) }), e4.profile.title] }) }, e4.profile.id)) });
}
var B = class t2 extends window.visRxWidget {
  widgetRef = e.createRef();
  subscribedId = ``;
  minMaxObjectId = ``;
  writeTimeout = null;
  static getWidgetInfo() {
    return { id: `tplScheduler`, visSet: `scheduler`, visWidgetLabel: `scheduler`, visSetLabel: `set_label`, visSetColor: `#70BBF7`, visName: `Scheduler`, visAttrs: [{ name: `common`, fields: [{ label: `instance`, name: `instance`, type: `instance`, adapter: `scheduler`, isShort: true }, { label: `profile`, name: `profile`, type: `custom`, hidden: (e4) => !e4.instance && e4.instance !== 0, component: (e4, t3, n2, r2) => c(z, { field: e4, data: t3, setData: n2, context: r2.context }) }, { label: `read_only`, name: `readOnly`, type: `checkbox`, default: false }, { label: `hide_days_of_week`, name: `hideDow`, type: `checkbox`, default: false }, { name: `noCard`, label: `without_card`, type: `checkbox`, hidden: `!!data.externalDialog` }, { name: `widgetTitle`, label: `name`, hidden: `!!data.noCard` }] }], visDefaultStyle: { width: `100%`, height: 355, position: `relative` }, visPrev: `widgets/scheduler/img/prev_scheduler.png` };
  }
  static t(e4, ...t3) {
    return h.t(`scheduler_${e4}`, ...t3);
  }
  async propertiesUpdate() {
    let e4 = this.state.rxData.instance || this.state.rxData.instance === 0 ? `system.adapter.scheduler.${this.state.rxData.instance}` : ``;
    if (this.subscribedId !== e4) {
      if (this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged), this.subscribedId = e4, this.subscribedId) {
        let e5 = await this.getInstanceObject(this.subscribedId);
        if (!e5) {
          this.setState({ object: null });
          return;
        }
        let t3 = e5.native.profiles.find((e6) => e6.id === this.state.rxData.profile), n2 = { object: e5 };
        if (t3) {
          let e6 = t3.data.type === `custom` ? t3.data.members[0] : ``;
          e6 !== this.minMaxObjectId && (this.minMaxObjectId = e6, n2.minMaxObject = await this.getStateObject(this.minMaxObjectId));
        }
        await this.props.context.socket.subscribeObject(this.subscribedId, this.onProfileChanged), this.setState(n2);
      } else this.setState({ object: null });
    } else if (this.state.object && this.state.rxData.profile) {
      let e5 = this.state.object.native.profiles.find((e6) => e6.id === this.state.rxData.profile);
      if (!e5) return;
      let t3 = e5.data.type === `custom` || e5.data.type === `temperature` ? e5.data.members[0] : ``;
      t3 !== this.minMaxObjectId && (this.minMaxObjectId = t3, this.setState({ minMaxObject: await this.getStateObject(this.minMaxObjectId) }));
    }
  }
  async getInstanceObject(e4) {
    return await this.props.context.socket.getObject(e4) || null;
  }
  async getStateObject(e4) {
    return e4 && await this.props.context.socket.getObject(e4) || null;
  }
  componentDidMount() {
    super.componentDidMount(), this.propertiesUpdate();
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged), this.writeTimeout && (this.writeTimeout = (clearTimeout(this.writeTimeout), null));
  }
  onProfileChanged = (e4, t3) => {
    var _a, _b;
    if (this.state.object && e4 === this.state.object._id) {
      let e5 = this.state.object.native.profiles.find((e6) => e6.id === this.state.rxData.profile), n2 = t3, r2 = (_b = (_a = n2 == null ? void 0 : n2.native) == null ? void 0 : _a.profiles) == null ? void 0 : _b.find((e6) => e6.id === this.state.rxData.profile);
      JSON.stringify(e5) !== JSON.stringify(r2) && n2 && this.setState({ object: n2 });
    }
  };
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  getWidgetInfo() {
    return t2.getWidgetInfo();
  }
  onDow = (e4, t3) => {
    let n2 = this.currentProfile();
    if (!n2) return;
    let r2 = JSON.parse(JSON.stringify(n2));
    e4 === `holiday` ? r2.holiday = t3 : t3 && !r2.dow.includes(e4) ? r2.dow.push(e4) : !t3 && r2.dow.includes(e4) && r2.dow.splice(r2.dow.indexOf(e4), 1), this.changeProfile(r2);
  };
  onIntervals = (e4) => {
    let t3 = this.currentProfile();
    if (!t3) return;
    let n2 = JSON.parse(JSON.stringify(t3));
    n2.intervals = e4, this.changeProfile(n2);
  };
  changeProfile = (e4) => {
    if (this.state.rxData.readOnly || !this.state.object) return;
    let t3 = JSON.parse(JSON.stringify(this.state.object)), n2 = this.state.object.native.profiles.findIndex((e5) => e5.id === this.state.rxData.profile);
    t3.native.profiles[n2].data = e4, this.setState({ object: t3 }), this.writeTimeout ? clearTimeout(this.writeTimeout) : this.setState({ writing: true }), this.writeTimeout = setTimeout(() => {
      this.writeTimeout = null, this.props.context.socket.setObject(t3._id, t3).then(() => this.setState({ writing: false })).catch((e5) => {
        this.setState({ writing: false }), console.error(`Cannot write profile: ${e5}`);
      });
    }, 2e3);
  };
  currentProfile = () => {
    var _a;
    let e4 = (_a = this.state.object) == null ? void 0 : _a.native.profiles.find((e5) => e5.id === this.state.rxData.profile);
    return e4 && e4.type === `profile` ? e4.data : null;
  };
  getProfileMinMax(e4) {
    var _a, _b;
    if (e4.type === `custom`) {
      let e5 = (_a = this.state.minMaxObject) == null ? void 0 : _a.common;
      if ((e5 == null ? void 0 : e5.type) === `number`) {
        if (e5.states && !Array.isArray(e5.states)) {
          let t3 = Object.keys(e5.states).map((e6) => parseFloat(e6)).sort();
          return { min: t3[0], max: t3[t3.length - 1], unit: e5.unit, marks: e5.states };
        }
        if (e5.min !== void 0 || e5.max !== void 0) return { min: e5.min === void 0 ? 0 : e5.min, max: e5.max === void 0 ? 100 : e5.max, unit: e5.unit, marks: null };
      }
      return { min: 0, max: 100, marks: null, unit: e5 == null ? void 0 : e5.unit };
    }
    if (e4.type === `temperature`) {
      let t3 = (_b = this.state.minMaxObject) == null ? void 0 : _b.common;
      if (t3 && (t3.min !== void 0 || t3.max !== void 0)) return { min: t3.min === void 0 ? L.temperature.min : t3.min, max: t3.max === void 0 ? L.temperature.max : t3.max, unit: t3.unit || L[e4.type].unit, marks: null };
    }
    return { min: L[e4.type].min, max: L[e4.type].max, step: L[e4.type].step, marks: null, unit: L[e4.type].unit };
  }
  renderWidgetBody(e4) {
    var _a, _b, _c, _d;
    if (super.renderWidgetBody(e4), !this.state.rxData.instance && this.state.rxData.instance !== 0) return c(`div`, { children: t2.t(`instance_not_selected`) });
    if (!this.state.object) return null;
    let n2 = this.currentProfile();
    if (!n2) return c(`div`, { children: t2.t(`profile_not_selected`) });
    ((_a = this.widgetRef.current) == null ? void 0 : _a.offsetWidth) || setTimeout(() => this.forceUpdate(), 100);
    let r2 = !this.state.rxData.hideDow, i2 = (((_b = this.widgetRef.current) == null ? void 0 : _b.offsetWidth) || 0) - (r2 ? 76 : 0);
    i2 < 0 && (i2 = 0);
    let a2 = u(`div`, { style: R.content, ref: this.widgetRef, children: [this.state.writing ? c(f, { style: { position: `absolute`, zIndex: 1, top: 0, left: 0, width: `100%` } }) : null, i2 ? c(`div`, { style: R.intervals, children: c(j, { id: this.props.id, onChange: this.onIntervals, theme: this.props.context.theme, intervals: n2.intervals, range: n2.intervalDuration, type: n2.type, readOnly: this.state.rxData.readOnly, intervalsWidth: i2, minMax: this.getProfileMinMax(n2), t: t2.t }) }) : null, r2 && i2 ? c(`div`, { style: R.days, children: c(I, { firstDayOfWeek: ((_d = (_c = this.props.context.socket.systemConfig) == null ? void 0 : _c.common) == null ? void 0 : _d.firstDayOfWeek) || `monday`, readOnly: this.state.rxData.readOnly, dow: n2.dow, holiday: n2.holiday, holidayVisible: !!this.state.object.native.holidayId, onChange: this.onDow, columns: 1, t: t2.t }) }) : null] });
    return this.state.rxData.noCard || e4.widget.usedInWidget ? a2 : this.wrapContent(a2, null, { height: `calc(100% - 24px)`, width: `calc(100% - 24px)` });
  }
};
export {
  B as default
};
