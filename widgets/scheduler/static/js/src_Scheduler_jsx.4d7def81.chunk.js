"use strict";
(self.webpackChunkiobroker_vis_2_widgets_scheduler = self.webpackChunkiobroker_vis_2_widgets_scheduler || []).push([["src_Scheduler_jsx"], {
    44028: function (e, t, n) {
        n.r(t);
        var i = n(74165), r = n(15861), s = n(15671), a = n(43144), o = n(11752), l = n(61120), c = n(60136),
            d = n(27277), u = n(4942), f = n(1413), h = n(29439), p = n(4819), v = n.n(p), b = n(15854), g = n.n(b),
            x = n(12181), y = n(94427), m = n(59665), w = n(75606), j = n(88411), k = n(49744), D = n(69438),
            S = n(80184), _ = function (e) {
                var t = (0, p.useState)(null), n = (0, h.Z)(t, 2), i = n[0], r = n[1];
                if ((0, p.useEffect)((function () {
                    e.context.socket.getObject("system.adapter.scheduler.".concat(e.data.instance)).then((function (e) {
                        return r(e)
                    }))
                }), []), !i) return null;
                var s = [];
                return function e(t, n) {
                    t.forEach((function (t) {
                        s.push({profile: t, level: n}), i.native.profiles.filter((function (e) {
                            return e.parent === t.id
                        })).length && e(i.native.profiles.filter((function (e) {
                            return e.parent === t.id
                        })), n + 1)
                    }))
                }(i.native.profiles.filter((function (e) {
                    return !e.parent
                })), 0), console.log(s), (0, S.jsx)(y.Select, {
                    style: {width: "100%"},
                    value: e.data[e.field.name],
                    onChange: function (t) {
                        var n = (0, f.Z)((0, f.Z)({}, e.data), {}, (0, u.Z)({}, e.field.name, t.target.value)),
                            i = s.find((function (t) {
                                return t.profile.id === e.data[e.field.name]
                            })), r = s.find((function (e) {
                                return e.profile.id === t.target.value
                            }));
                        r && (!n.name || i && e.data.name === i.profile.title) && (n.name = r.profile.title), e.setData(n)
                    },
                    variant: "standard",
                    renderValue: function (e) {
                        var t = s.find((function (t) {
                            return t.profile.id === e
                        }));
                        return (0, S.jsx)("div", {children: t ? t.profile.title : ""})
                    },
                    children: s.map((function (e) {
                        return (0, S.jsx)(y.MenuItem, {
                            value: e.profile.id,
                            disabled: "folder" === e.profile.type,
                            children: (0, S.jsxs)("div", {
                                style: {paddingLeft: 20 * e.level, display: "flex"},
                                children: [(0, S.jsx)("span", {
                                    style: {paddingRight: 4},
                                    children: "folder" === e.profile.type ? (0, S.jsx)(w.IconClosed, {}) : (0, S.jsx)(m.Schedule, {})
                                }), e.profile.title]
                            })
                        }, e.profile.id)
                    }))
                })
            }, O = function (e) {
                (0, c.Z)(n, e);
                var t = (0, d.Z)(n);

                function n(e) {
                    var i;
                    return (0, s.Z)(this, n), (i = t.call(this, e)).onProfileChanged = function (e, t) {
                        if (e === i.state.object._id) {
                            var n, r, s = i.state.object.native.profiles.find((function (e) {
                                    return e.id === i.state.rxData.profile
                                })),
                                a = null === (n = t.native) || void 0 === n || null === (r = n.profiles) || void 0 === r ? void 0 : r.find((function (e) {
                                    return e.id === i.state.rxData.profile
                                }));
                            JSON.stringify(s) !== JSON.stringify(a) && i.setState({object: t})
                        }
                    }, i.onDow = function (e, t) {
                        var n = JSON.parse(JSON.stringify(i.currentProfile()));
                        t && !n.dow.includes(e) ? n.dow.push(e) : !t && n.dow.includes(e) && n.dow.splice(n.dow.indexOf(e), 1), i.changeProfile(n)
                    }, i.onIntervals = function (e) {
                        var t = JSON.parse(JSON.stringify(i.currentProfile()));
                        t.intervals = e, i.changeProfile(t)
                    }, i.changeProfile = function (e) {
                        if (!i.state.rxData.readOnly) {
                            var t = JSON.parse(JSON.stringify(i.state.object)),
                                n = i.state.object.native.profiles.findIndex((function (e) {
                                    return e.id === i.state.rxData.profile
                                }));
                            t.native.profiles[n].data = e, i.setState({object: t}), i.props.context.socket.setObject(t._id, t)
                        }
                    }, i.currentProfile = function () {
                        var e = i.state.object.native.profiles.find((function (e) {
                            return e.id === i.state.rxData.profile
                        }));
                        return e ? "profile" === e.type && e.data : null
                    }, i.widgetRef = v().createRef(), i
                }

                return (0, a.Z)(n, [{
                    key: "propertiesUpdate", value: function () {
                        var e = (0, r.Z)((0, i.Z)().mark((function e() {
                            var t, n, r = this;
                            return (0, i.Z)().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this.state.rxData.instance || 0 === this.state.rxData.instance ? "system.adapter.scheduler.".concat(this.state.rxData.instance) : "", this.subscribedId !== t && (this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged), this.subscribedId = null), !t) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 5, this.props.context.socket.getObject(t);
                                    case 5:
                                        n = e.sent, this.setState({object: n}, (function () {
                                            !r.subscribedId && n && t && (r.subscribedId = t, r.props.context.socket.subscribeObject(t, r.onProfileChanged))
                                        })), e.next = 10;
                                        break;
                                    case 9:
                                        this.setState({object: null});
                                    case 10:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "componentDidMount", value: function () {
                        (0, o.Z)((0, l.Z)(n.prototype), "componentDidMount", this).call(this), this.propertiesUpdate()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        (0, o.Z)((0, l.Z)(n.prototype), "componentWillUnmount", this).call(this), this.subscribedId && this.props.context.socket.unsubscribeObject(this.subscribedId, this.onProfileChanged)
                    }
                }, {
                    key: "onRxDataChanged", value: function () {
                        this.propertiesUpdate()
                    }
                }, {
                    key: "getWidgetInfo", value: function () {
                        return n.getWidgetInfo()
                    }
                }, {
                    key: "renderWidgetBody", value: function (e) {
                        var t, i, r = this;
                        if ((0, o.Z)((0, l.Z)(n.prototype), "renderWidgetBody", this).call(this, e), !this.state.rxData.instance) return (0, S.jsx)("div", {children: n.t("instance_not_selected")});
                        if (!this.state.object) return null;
                        console.log(this.state.object);
                        var s = this.currentProfile();
                        if (!s) return (0, S.jsx)("div", {children: n.t("profile_not_selected")});
                        null !== (t = this.widgetRef.current) && void 0 !== t && t.offsetWidth || setTimeout((function () {
                            return r.forceUpdate()
                        }), 100);
                        var a = ((null === (i = this.widgetRef.current) || void 0 === i ? void 0 : i.offsetWidth) || 0) - (this.state.rxData.hideDow ? 0 : 80);
                        a < 0 && (a = 0);
                        var c = (0, S.jsxs)("div", {
                            className: this.props.classes.content,
                            ref: this.widgetRef,
                            children: [(0, S.jsx)(k.Z, {
                                onChange: this.onIntervals,
                                theme: this.props.theme,
                                intervals: s.intervals,
                                range: s.intervalDuration,
                                type: s.type,
                                socket: this.props.context.socket,
                                windowWidth: a,
                                readOnly: this.state.rxData.readOnly,
                                intervalsWidth: a
                            }), this.state.rxData.hideDow && a ? null : (0, S.jsx)(D.Z, {
                                firstDayOfWeek: this.props.context.socket.systemConfig.common.firstDayOfWeek || "monday",
                                readOnly: this.state.rxData.readOnly,
                                dow: s.dow,
                                onChange: this.onDow,
                                theme: this.props.theme,
                                t: n.t
                            })]
                        });
                        return this.state.rxData.noCard || e.widget.usedInWidget ? c : this.wrapContent(c, null, {
                            height: "calc(100% - 24px)",
                            width: "calc(100% - 24px)"
                        })
                    }
                }], [{
                    key: "getWidgetInfo", value: function () {
                        return {
                            id: "tplScheduler",
                            visSet: "scheduler",
                            visWidgetLabel: "scheduler",
                            visSetLabel: "set_label",
                            visSetColor: "#70BBF7",
                            visName: "Scheduler",
                            visAttrs: [{
                                name: "common",
                                fields: [{
                                    label: "instance",
                                    name: "instance",
                                    type: "instance",
                                    adapter: "scheduler",
                                    isShort: !0
                                }, {
                                    label: "profile", name: "profile", type: "custom", hidden: function (e) {
                                        return !e.instance && 0 !== e.instance
                                    }, component: function (e, t, n, i) {
                                        return (0, S.jsx)(_, {
                                            field: e,
                                            data: t,
                                            setData: n,
                                            context: i.context,
                                            selectedWidgets: i.selectedWidgets,
                                            selectedView: i.selectedView
                                        })
                                    }
                                }, {
                                    label: "read_only",
                                    name: "readOnly",
                                    type: "checkbox",
                                    default: !1
                                }, {
                                    label: "hide_days_of_week",
                                    name: "hideDow",
                                    type: "checkbox",
                                    default: !1
                                }, {
                                    name: "noCard",
                                    label: "without_card",
                                    type: "checkbox",
                                    hidden: "!!data.externalDialog"
                                }, {name: "widgetTitle", label: "name", hidden: "!!data.noCard"}]
                            }],
                            visDefaultStyle: {width: "100%", height: 355, position: "relative"},
                            visPrev: "widgets/scheduler/img/prev_scheduler.png"
                        }
                    }
                }, {
                    key: "t", value: function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        return w.I18n.t.apply(w.I18n, ["scheduler_".concat(e)].concat(n))
                    }
                }]), n
            }(window.visRxWidget || j.VisRxWidget);
        O.propTypes = {
            context: g().object,
            themeType: g().string,
            style: g().object,
            data: g().object
        }, t.default = (0, x.withStyles)((function () {
            return {content: {display: "flex", width: "100%", height: "100%"}}
        }))((0, x.withTheme)(O))
    }
}]);
//# sourceMappingURL=src_Scheduler_jsx.4d7def81.chunk.js.map
