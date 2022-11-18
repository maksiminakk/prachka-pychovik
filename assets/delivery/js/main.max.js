!(function (e) {
    function t(t) {
        for (var n, r, l = t[0], i = t[1], d = t[2], u = 0, c = []; u < l.length; u++) (r = l[u]), Object.prototype.hasOwnProperty.call(a, r) && a[r] && c.push(a[r][0]), (a[r] = 0);
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (m && m(t); c.length; ) c.shift()();
        return s.push.apply(s, d || []), o();
    }
    function o() {
        for (var e, t = 0; t < s.length; t++) {
            for (var o = s[t], n = !0, l = 1; l < o.length; l++) {
                var i = o[l];
                0 !== a[i] && (n = !1);
            }
            n && (s.splice(t--, 1), (e = r((r.s = o[0]))));
        }
        return e;
    }
    var n = {},
        a = { main: 0 },
        s = [];
    function r(t) {
        if (n[t]) return n[t].exports;
        var o = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    (r.m = e),
        (r.c = n),
        (r.d = function (e, t, o) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if ((r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    r.d(
                        o,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return o;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = "");
    var l = (window.webpackJsonp = window.webpackJsonp || []),
        i = l.push.bind(l);
    (l.push = t), (l = l.slice());
    for (var d = 0; d < l.length; d++) t(l[d]);
    var m = i;
    s.push(["./src/js/main.js", "vendor"]), o();
})({
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function (e, t, o) {
        var n = {
            "./af": "./node_modules/moment/locale/af.js",
            "./af.js": "./node_modules/moment/locale/af.js",
            "./ar": "./node_modules/moment/locale/ar.js",
            "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
            "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
            "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
            "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
            "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
            "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
            "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
            "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
            "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
            "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
            "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
            "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
            "./ar.js": "./node_modules/moment/locale/ar.js",
            "./az": "./node_modules/moment/locale/az.js",
            "./az.js": "./node_modules/moment/locale/az.js",
            "./be": "./node_modules/moment/locale/be.js",
            "./be.js": "./node_modules/moment/locale/be.js",
            "./bg": "./node_modules/moment/locale/bg.js",
            "./bg.js": "./node_modules/moment/locale/bg.js",
            "./bm": "./node_modules/moment/locale/bm.js",
            "./bm.js": "./node_modules/moment/locale/bm.js",
            "./bn": "./node_modules/moment/locale/bn.js",
            "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
            "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
            "./bn.js": "./node_modules/moment/locale/bn.js",
            "./bo": "./node_modules/moment/locale/bo.js",
            "./bo.js": "./node_modules/moment/locale/bo.js",
            "./br": "./node_modules/moment/locale/br.js",
            "./br.js": "./node_modules/moment/locale/br.js",
            "./bs": "./node_modules/moment/locale/bs.js",
            "./bs.js": "./node_modules/moment/locale/bs.js",
            "./ca": "./node_modules/moment/locale/ca.js",
            "./ca.js": "./node_modules/moment/locale/ca.js",
            "./cs": "./node_modules/moment/locale/cs.js",
            "./cs.js": "./node_modules/moment/locale/cs.js",
            "./cv": "./node_modules/moment/locale/cv.js",
            "./cv.js": "./node_modules/moment/locale/cv.js",
            "./cy": "./node_modules/moment/locale/cy.js",
            "./cy.js": "./node_modules/moment/locale/cy.js",
            "./da": "./node_modules/moment/locale/da.js",
            "./da.js": "./node_modules/moment/locale/da.js",
            "./de": "./node_modules/moment/locale/de.js",
            "./de-at": "./node_modules/moment/locale/de-at.js",
            "./de-at.js": "./node_modules/moment/locale/de-at.js",
            "./de-ch": "./node_modules/moment/locale/de-ch.js",
            "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
            "./de.js": "./node_modules/moment/locale/de.js",
            "./dv": "./node_modules/moment/locale/dv.js",
            "./dv.js": "./node_modules/moment/locale/dv.js",
            "./el": "./node_modules/moment/locale/el.js",
            "./el.js": "./node_modules/moment/locale/el.js",
            "./en-au": "./node_modules/moment/locale/en-au.js",
            "./en-au.js": "./node_modules/moment/locale/en-au.js",
            "./en-ca": "./node_modules/moment/locale/en-ca.js",
            "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
            "./en-gb": "./node_modules/moment/locale/en-gb.js",
            "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
            "./en-ie": "./node_modules/moment/locale/en-ie.js",
            "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
            "./en-il": "./node_modules/moment/locale/en-il.js",
            "./en-il.js": "./node_modules/moment/locale/en-il.js",
            "./en-in": "./node_modules/moment/locale/en-in.js",
            "./en-in.js": "./node_modules/moment/locale/en-in.js",
            "./en-nz": "./node_modules/moment/locale/en-nz.js",
            "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
            "./en-sg": "./node_modules/moment/locale/en-sg.js",
            "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
            "./eo": "./node_modules/moment/locale/eo.js",
            "./eo.js": "./node_modules/moment/locale/eo.js",
            "./es": "./node_modules/moment/locale/es.js",
            "./es-do": "./node_modules/moment/locale/es-do.js",
            "./es-do.js": "./node_modules/moment/locale/es-do.js",
            "./es-mx": "./node_modules/moment/locale/es-mx.js",
            "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
            "./es-us": "./node_modules/moment/locale/es-us.js",
            "./es-us.js": "./node_modules/moment/locale/es-us.js",
            "./es.js": "./node_modules/moment/locale/es.js",
            "./et": "./node_modules/moment/locale/et.js",
            "./et.js": "./node_modules/moment/locale/et.js",
            "./eu": "./node_modules/moment/locale/eu.js",
            "./eu.js": "./node_modules/moment/locale/eu.js",
            "./fa": "./node_modules/moment/locale/fa.js",
            "./fa.js": "./node_modules/moment/locale/fa.js",
            "./fi": "./node_modules/moment/locale/fi.js",
            "./fi.js": "./node_modules/moment/locale/fi.js",
            "./fil": "./node_modules/moment/locale/fil.js",
            "./fil.js": "./node_modules/moment/locale/fil.js",
            "./fo": "./node_modules/moment/locale/fo.js",
            "./fo.js": "./node_modules/moment/locale/fo.js",
            "./fr": "./node_modules/moment/locale/fr.js",
            "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
            "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
            "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
            "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
            "./fr.js": "./node_modules/moment/locale/fr.js",
            "./fy": "./node_modules/moment/locale/fy.js",
            "./fy.js": "./node_modules/moment/locale/fy.js",
            "./ga": "./node_modules/moment/locale/ga.js",
            "./ga.js": "./node_modules/moment/locale/ga.js",
            "./gd": "./node_modules/moment/locale/gd.js",
            "./gd.js": "./node_modules/moment/locale/gd.js",
            "./gl": "./node_modules/moment/locale/gl.js",
            "./gl.js": "./node_modules/moment/locale/gl.js",
            "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
            "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
            "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
            "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
            "./gu": "./node_modules/moment/locale/gu.js",
            "./gu.js": "./node_modules/moment/locale/gu.js",
            "./he": "./node_modules/moment/locale/he.js",
            "./he.js": "./node_modules/moment/locale/he.js",
            "./hi": "./node_modules/moment/locale/hi.js",
            "./hi.js": "./node_modules/moment/locale/hi.js",
            "./hr": "./node_modules/moment/locale/hr.js",
            "./hr.js": "./node_modules/moment/locale/hr.js",
            "./hu": "./node_modules/moment/locale/hu.js",
            "./hu.js": "./node_modules/moment/locale/hu.js",
            "./hy-am": "./node_modules/moment/locale/hy-am.js",
            "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
            "./id": "./node_modules/moment/locale/id.js",
            "./id.js": "./node_modules/moment/locale/id.js",
            "./is": "./node_modules/moment/locale/is.js",
            "./is.js": "./node_modules/moment/locale/is.js",
            "./it": "./node_modules/moment/locale/it.js",
            "./it-ch": "./node_modules/moment/locale/it-ch.js",
            "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
            "./it.js": "./node_modules/moment/locale/it.js",
            "./ja": "./node_modules/moment/locale/ja.js",
            "./ja.js": "./node_modules/moment/locale/ja.js",
            "./jv": "./node_modules/moment/locale/jv.js",
            "./jv.js": "./node_modules/moment/locale/jv.js",
            "./ka": "./node_modules/moment/locale/ka.js",
            "./ka.js": "./node_modules/moment/locale/ka.js",
            "./kk": "./node_modules/moment/locale/kk.js",
            "./kk.js": "./node_modules/moment/locale/kk.js",
            "./km": "./node_modules/moment/locale/km.js",
            "./km.js": "./node_modules/moment/locale/km.js",
            "./kn": "./node_modules/moment/locale/kn.js",
            "./kn.js": "./node_modules/moment/locale/kn.js",
            "./ko": "./node_modules/moment/locale/ko.js",
            "./ko.js": "./node_modules/moment/locale/ko.js",
            "./ku": "./node_modules/moment/locale/ku.js",
            "./ku.js": "./node_modules/moment/locale/ku.js",
            "./ky": "./node_modules/moment/locale/ky.js",
            "./ky.js": "./node_modules/moment/locale/ky.js",
            "./lb": "./node_modules/moment/locale/lb.js",
            "./lb.js": "./node_modules/moment/locale/lb.js",
            "./lo": "./node_modules/moment/locale/lo.js",
            "./lo.js": "./node_modules/moment/locale/lo.js",
            "./lt": "./node_modules/moment/locale/lt.js",
            "./lt.js": "./node_modules/moment/locale/lt.js",
            "./lv": "./node_modules/moment/locale/lv.js",
            "./lv.js": "./node_modules/moment/locale/lv.js",
            "./me": "./node_modules/moment/locale/me.js",
            "./me.js": "./node_modules/moment/locale/me.js",
            "./mi": "./node_modules/moment/locale/mi.js",
            "./mi.js": "./node_modules/moment/locale/mi.js",
            "./mk": "./node_modules/moment/locale/mk.js",
            "./mk.js": "./node_modules/moment/locale/mk.js",
            "./ml": "./node_modules/moment/locale/ml.js",
            "./ml.js": "./node_modules/moment/locale/ml.js",
            "./mn": "./node_modules/moment/locale/mn.js",
            "./mn.js": "./node_modules/moment/locale/mn.js",
            "./mr": "./node_modules/moment/locale/mr.js",
            "./mr.js": "./node_modules/moment/locale/mr.js",
            "./ms": "./node_modules/moment/locale/ms.js",
            "./ms-my": "./node_modules/moment/locale/ms-my.js",
            "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
            "./ms.js": "./node_modules/moment/locale/ms.js",
            "./mt": "./node_modules/moment/locale/mt.js",
            "./mt.js": "./node_modules/moment/locale/mt.js",
            "./my": "./node_modules/moment/locale/my.js",
            "./my.js": "./node_modules/moment/locale/my.js",
            "./nb": "./node_modules/moment/locale/nb.js",
            "./nb.js": "./node_modules/moment/locale/nb.js",
            "./ne": "./node_modules/moment/locale/ne.js",
            "./ne.js": "./node_modules/moment/locale/ne.js",
            "./nl": "./node_modules/moment/locale/nl.js",
            "./nl-be": "./node_modules/moment/locale/nl-be.js",
            "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
            "./nl.js": "./node_modules/moment/locale/nl.js",
            "./nn": "./node_modules/moment/locale/nn.js",
            "./nn.js": "./node_modules/moment/locale/nn.js",
            "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
            "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
            "./pa-in": "./node_modules/moment/locale/pa-in.js",
            "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
            "./pl": "./node_modules/moment/locale/pl.js",
            "./pl.js": "./node_modules/moment/locale/pl.js",
            "./pt": "./node_modules/moment/locale/pt.js",
            "./pt-br": "./node_modules/moment/locale/pt-br.js",
            "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
            "./pt.js": "./node_modules/moment/locale/pt.js",
            "./ro": "./node_modules/moment/locale/ro.js",
            "./ro.js": "./node_modules/moment/locale/ro.js",
            "./ru": "./node_modules/moment/locale/ru.js",
            "./ru.js": "./node_modules/moment/locale/ru.js",
            "./sd": "./node_modules/moment/locale/sd.js",
            "./sd.js": "./node_modules/moment/locale/sd.js",
            "./se": "./node_modules/moment/locale/se.js",
            "./se.js": "./node_modules/moment/locale/se.js",
            "./si": "./node_modules/moment/locale/si.js",
            "./si.js": "./node_modules/moment/locale/si.js",
            "./sk": "./node_modules/moment/locale/sk.js",
            "./sk.js": "./node_modules/moment/locale/sk.js",
            "./sl": "./node_modules/moment/locale/sl.js",
            "./sl.js": "./node_modules/moment/locale/sl.js",
            "./sq": "./node_modules/moment/locale/sq.js",
            "./sq.js": "./node_modules/moment/locale/sq.js",
            "./sr": "./node_modules/moment/locale/sr.js",
            "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
            "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
            "./sr.js": "./node_modules/moment/locale/sr.js",
            "./ss": "./node_modules/moment/locale/ss.js",
            "./ss.js": "./node_modules/moment/locale/ss.js",
            "./sv": "./node_modules/moment/locale/sv.js",
            "./sv.js": "./node_modules/moment/locale/sv.js",
            "./sw": "./node_modules/moment/locale/sw.js",
            "./sw.js": "./node_modules/moment/locale/sw.js",
            "./ta": "./node_modules/moment/locale/ta.js",
            "./ta.js": "./node_modules/moment/locale/ta.js",
            "./te": "./node_modules/moment/locale/te.js",
            "./te.js": "./node_modules/moment/locale/te.js",
            "./tet": "./node_modules/moment/locale/tet.js",
            "./tet.js": "./node_modules/moment/locale/tet.js",
            "./tg": "./node_modules/moment/locale/tg.js",
            "./tg.js": "./node_modules/moment/locale/tg.js",
            "./th": "./node_modules/moment/locale/th.js",
            "./th.js": "./node_modules/moment/locale/th.js",
            "./tk": "./node_modules/moment/locale/tk.js",
            "./tk.js": "./node_modules/moment/locale/tk.js",
            "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
            "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
            "./tlh": "./node_modules/moment/locale/tlh.js",
            "./tlh.js": "./node_modules/moment/locale/tlh.js",
            "./tr": "./node_modules/moment/locale/tr.js",
            "./tr.js": "./node_modules/moment/locale/tr.js",
            "./tzl": "./node_modules/moment/locale/tzl.js",
            "./tzl.js": "./node_modules/moment/locale/tzl.js",
            "./tzm": "./node_modules/moment/locale/tzm.js",
            "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
            "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
            "./tzm.js": "./node_modules/moment/locale/tzm.js",
            "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
            "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
            "./uk": "./node_modules/moment/locale/uk.js",
            "./uk.js": "./node_modules/moment/locale/uk.js",
            "./ur": "./node_modules/moment/locale/ur.js",
            "./ur.js": "./node_modules/moment/locale/ur.js",
            "./uz": "./node_modules/moment/locale/uz.js",
            "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
            "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
            "./uz.js": "./node_modules/moment/locale/uz.js",
            "./vi": "./node_modules/moment/locale/vi.js",
            "./vi.js": "./node_modules/moment/locale/vi.js",
            "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
            "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
            "./yo": "./node_modules/moment/locale/yo.js",
            "./yo.js": "./node_modules/moment/locale/yo.js",
            "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
            "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
            "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
            "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
            "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
            "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
            "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
            "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js",
        };
        function a(e) {
            var t = s(e);
            return o(t);
        }
        function s(e) {
            if (!o.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return n[e];
        }
        (a.keys = function () {
            return Object.keys(n);
        }),
            (a.resolve = s),
            (e.exports = a),
            (a.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$");
    },
    "./src/js/components/counter.js": function (e, t) {
        var o = $(".minus"),
            n = $(".plus"),
            a = 0;
        function s() {
            var e = $(".total");
            isNaN(a) || (a < 1500 ? e.html(a + "&#8381;&nbsp;+&nbsp;390&#8381;&nbsp;доставка") : e.html(a + "&#8381;"), 0 == a && e.html(""));
            var e__order_price = $(".order_price");
            isNaN(a) || (a < 1500 ? e__order_price.val(a + "₽ + 390₽ доставка") : e__order_price.val(a + "₽"), 0 == a && e__order_price.val(""));

            let price_val_only = a;
            if(isNaN(price_val_only)){
                price_val_only = 0;
            }else{
                if(price_val_only<1500){price_val_only+=390};
            }
            console.log(price_val_only);
            $('.order_price_val_only').val(price_val_only);

            var basket = '';
            $('.cartList__list .value').each(function(i,elem) {
                if ($(this).html() != '0') {
                    basket += $(this).parents('.cartList__list').children('.cartList__txt').html() + ' — ' + $(this).parent().children('.minus').data('price') + '₽ x ' + $(this).html() + 'шт.\r\n';
                }
            });
            $('.carts__item .value').each(function(i,elem) {
                if ($(this).html() != '0') {
                    basket += $(this).parents('.carts__block').children('.carts__title').html() + ' (' + $(this).parents('.carts__block').children('.carts__desc').html() + ') — ' + $(this).parent().children('.minus').data('price') + '₽ x ' + $(this).html() + 'шт.\r\n';
                }
            });
            $('.order_basket').val(basket);
        }
        n.on("click", function (e) {
            var t = $(e.currentTarget),
                o = t.prev(".value"),
                n = parseInt(o.text());
            if ((o.text(n + 1), n >= 0)) {
                var r = parseFloat(t.data("price"));
                a += r;
            }
            s();
        }),
            o.on("click", function (e) {
                var t = $(e.currentTarget),
                    o = t.next(".value"),
                    n = parseInt(o.text());
                if (n > 0) {
                    o.text(n - 1);
                    var r = parseFloat(t.data("price"));
                    a -= r;
                }
                s();
            });
    },
    "./src/js/components/toggle.js": function (e, t) {
        $(".js-toggle--click").on("click", function (e) {
            $(e.currentTarget).parent().find(".js-toggle--block").slideToggle();
        });
    },
    "./src/js/helpers.js": function (e, t, o) {
        "use strict";
        o.r(t),
            function (e) {
                var n,
                    a,
                    s = o("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"),
                    r = {};
                function l() {
                    return (
                        !(!r.isIE || !r.getScrollbarWidth()) ||
                        (!r.isMobile() && (!(!window.matchMedia("(any-hover: hover)").matches && !window.matchMedia("(hover: hover)").matches) || (!window.matchMedia("(hover: none)").matches && void 0 === r.$html.ontouchstart)))
                    );
                }
                (r.$document = $(document)),
                    (r.$window = $(window)),
                    (r.$body = $(document.body)),
                    (r.$html = $(document.documentElement)),
                    (r.isMobile = function () {
                        return innerWidth <= 1024;
                    }),
                    (r.isIE = function () {
                        return r.$html.hasClass("is-browser-ie");
                    }),
                    (r.isIOS = function () {
                        return r.$html.hasClass("is-os-ios");
                    }),
                    (r.winWidth = window.innerWidth),
                    (r.clearText = function (e) {
                        return e.trim().replace(/\s+/g, " ");
                    }),
                    (r.setCookie = function (e, t, o) {
                        var n = "";
                        if (o) {
                            var a = new Date();
                            a.setTime(a.getTime() + 24 * o * 60 * 60 * 1e3), (n = "; expires=".concat(a.toUTCString()));
                        }
                        document.cookie = ""
                            .concat(e, "=")
                            .concat(t || "")
                            .concat(n, "; path=/");
                    }),
                    (r.getCookie = function (e) {
                        for (var t = "".concat(e, "="), o = document.cookie.split(";"), n = 0; n < o.length; n++) {
                            for (var a = o[n]; " " === a.charAt(0); ) a = a.substring(1, a.length);
                            if (0 === a.indexOf(t)) return a.substring(t.length, a.length);
                        }
                        return null;
                    }),
                    (r.eraseCookie = function (e) {
                        document.cookie = "".concat(e, "=; Max-Age=-99999999;");
                    }),
                    (r.lockScroll = function (t, o, a) {
                        var l = o.get(0) ? o.get(0) : o;
                        void 0 === n && (n = new Set());
                        var i = n;
                        t
                            ? ("string" == typeof a && i.add(a),
                              s.disableBodyScroll(l, { reserveScrollBarGap: !0 }),
                              e(function () {
                                  r.$html.addClass("is-lock-scroll");
                              }))
                            : ("string" == typeof a && i.delete(a), s.enableBodyScroll(l), i.size || (s.clearAllBodyScrollLocks(), r.$html.removeClass("is-lock-scroll")));
                    }),
                    (r.scrollTo = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        r.$html.css("scroll-behavior", "initial"),
                            $("html, body")
                                .stop()
                                .animate({ scrollTop: "".concat(e.offset().top + parseInt(o, 10)) }, parseInt(t, 10)),
                            setTimeout(function () {
                                r.$html.css("scroll-behavior", "");
                            }, parseInt(t, 10) + 100);
                    }),
                    (r.getScrollbarWidth = function () {
                        var e = window.innerWidth - r.$html.get(0).clientWidth;
                        return e || document.documentElement.clientHeight >= document.documentElement.offsetHeight
                            ? e
                            : (a || (((a = document.createElement("div")).style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px"), document.body.appendChild(a)), a.offsetWidth - a.clientWidth);
                    }),
                    l() ? r.$html.removeClass("no-hover").addClass("has-hover") : r.$html.removeClass("has-hover").addClass("no-hover"),
                    r.$window.on("resize", function () {
                        setTimeout(function () {
                            r.winWidth !== window.innerWidth && (l() ? r.$html.removeClass("no-hover").addClass("has-hover") : r.$html.removeClass("has-hover").addClass("no-hover"), (r.winWidth = window.innerWidth));
                        }, 300);
                    }),
                    (t.default = r);
            }.call(this, o("./node_modules/timers-browserify/main.js").setImmediate);
    },
    "./src/js/main.js": function (e, t, o) {
        "use strict";
        o.r(t);
        o("./src/js/vendor.js"), o("./src/js/helpers.js"), o("./src/js/components/toggle.js"), o("./src/js/components/counter.js");
        var n = o("./src/js/vendor/ie-fix.js"),
            a = o("./src/js/vendor/vh-fix.js"),
            s = (o("./src/js/vendor/jquery.datetimepicker.js"), o("./node_modules/moment/moment.js")),
            r = o("./node_modules/imask/esm/index.js");
        Object(n.ieFix)(),
            Object(a.vhFix)(),
            $(document).ready(function () {
                s().format("DD-MM-YYYY HH:mm"),
                    s.locale("ru"),
                    s.locale("ru", {
                        calendar: {
                            lastDay: "[Вчера,]DD MMMM [в] HH:mm",
                            sameDay: "[Сегодня,]DD MMMM [в] HH:mm",
                            nextDay: "[Завтра,]DD MMMM [в] 09:00",
                            nextWeek: "ddd[,] DD MMMM [в] HH:mm",
                            lastWeek: "ddd[,] DD MMMM [в] HH:mm",
                            sameElse: "ddd[,] DD MMMM [в] HH:mm",
                        },
                    });
                var e = new Date(),
                    t = e.setDate(e.getDate() + 1);
                $(".day").html(s(t).calendar()),
                $(".day_hidden").val(s(t).calendar()),
                    $.datetimepicker.setLocale("ru"),
                    $(".date-time").datetimepicker({
                        ownerDocument: document,
                        contentWindow: window,
                        format: "d-m-Y H:i",
                        formatDate: "d-m-Y",
                        dayOfWeekStart: 1,
                        startDate: t,
                        closeOnDateSelect: !1,
                        closeOnTimeSelect: !0,
                        closeOnWithoutClick: !0,
                        closeOnInputClick: !0,
                        openOnFocus: !0,
                        minDate: t,
                        minTime: "09:00",
                        maxTime: "20:00",
                        defaultTime: "09:00",
                        allowTimes: ["09:00", "14:00"],
                        lang: "ru",
                        onChangeDateTime: function (e) {
                            !(function (e) {
                                if (e) {
                                    var o = s(e).calendar();
                                    $(".day").html(o);
                                } else $(".day").html(s(t).calendar());
                            })(e);
                        },
                        onGenerate: function () {
                            var e = ["09:00-14:00", "14:00-19:00", "09:00-14:00", "14:00-19:00"];
                            $(".xdsoft_time").each(function (t) {
                                $(this).text(e[t]);
                            });
                        },
                    });
                var o = document.getElementsByClassName("phone-mask");
                Array.prototype.forEach.call(o, function (e) {
                    new r.default(e, { mask: "+{7}(000)000-00-00", placeholder: { show: "always" } });
                });
            });
    },
    "./src/js/vendor.js": function (e, t, o) {
        "use strict";
        o.r(t);
        var n = o("./node_modules/svg4everybody/dist/svg4everybody.js"),
            a = o.n(n),
            s = o("./node_modules/jquery/dist/jquery.js"),
            r = o.n(s);
        a()(), (window.$ = r.a), (window.jQuery = r.a), o("./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");
    },
    "./src/js/vendor/ie-fix.js": function (e, t, o) {
        "use strict";
        o.r(t),
            o.d(t, "ieFix", function () {
                return n;
            });
        var n = function () {
            !(function () {
                if (
                    ("performance" in window == 0 && (window.performance = {}),
                    (Date.now =
                        Date.now ||
                        function () {
                            return new Date().getTime();
                        }),
                    "now" in window.performance == 0)
                ) {
                    var e = Date.now();
                    performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart),
                        (window.performance.now = function () {
                            return Date.now() - e;
                        });
                }
            })(),
                window.NodeList &&
                    !NodeList.prototype.forEach &&
                    (NodeList.prototype.forEach = function (e, t) {
                        t = t || window;
                        for (var o = 0; o < this.length; o++) e.call(t, this[o], o, this);
                    }),
                (function () {
                    if ("function" == typeof window.CustomEvent) return !1;
                    function e(e, t) {
                        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                        var o = document.createEvent("CustomEvent");
                        return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o;
                    }
                    (e.prototype = window.Event.prototype), (window.CustomEvent = e);
                })(),
                Array.prototype.includes ||
                    Object.defineProperty(Array.prototype, "includes", {
                        value: function (e, t) {
                            if (null == this) throw new TypeError('"this" is null or not defined');
                            var o = Object(this),
                                n = o.length >>> 0;
                            if (0 === n) return !1;
                            var a,
                                s,
                                r = 0 | t,
                                l = Math.max(r >= 0 ? r : n - Math.abs(r), 0);
                            for (; l < n; ) {
                                if ((a = o[l]) === (s = e) || ("number" == typeof a && "number" == typeof s && isNaN(a) && isNaN(s))) return !0;
                                l++;
                            }
                            return !1;
                        },
                    }),
                Element.prototype.matches ||
                    (Element.prototype.matches =
                        Element.prototype.matchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.oMatchesSelector ||
                        Element.prototype.webkitMatchesSelector ||
                        function (e) {
                            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), o = t.length; --o >= 0 && t.item(o) !== this; );
                            return o > -1;
                        }),
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
                Element.prototype.closest ||
                    (Element.prototype.closest = function (e) {
                        var t = this;
                        do {
                            if (t.matches(e)) return t;
                            t = t.parentElement || t.parentNode;
                        } while (null !== t && 1 === t.nodeType);
                        return null;
                    }),
                [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
                    e.hasOwnProperty("prepend") ||
                        Object.defineProperty(e, "prepend", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function () {
                                var e = Array.prototype.slice.call(arguments),
                                    t = document.createDocumentFragment();
                                e.forEach(function (e) {
                                    var o = e instanceof Node;
                                    t.appendChild(o ? e : document.createTextNode(String(e)));
                                }),
                                    this.insertBefore(t, this.firstChild);
                            },
                        });
                }),
                [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
                    e.hasOwnProperty("append") ||
                        Object.defineProperty(e, "append", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function () {
                                var e = Array.prototype.slice.call(arguments),
                                    t = document.createDocumentFragment();
                                e.forEach(function (e) {
                                    var o = e instanceof Node;
                                    t.appendChild(o ? e : document.createTextNode(String(e)));
                                }),
                                    this.appendChild(t);
                            },
                        });
                }),
                [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
                    e.hasOwnProperty("before") ||
                        Object.defineProperty(e, "before", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function () {
                                var e = Array.prototype.slice.call(arguments),
                                    t = document.createDocumentFragment();
                                e.forEach(function (e) {
                                    var o = e instanceof Node;
                                    t.appendChild(o ? e : document.createTextNode(String(e)));
                                }),
                                    this.parentNode.insertBefore(t, this);
                            },
                        });
                }),
                [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
                    e.hasOwnProperty("remove") ||
                        Object.defineProperty(e, "remove", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function () {
                                null !== this.parentNode && this.parentNode.removeChild(this);
                            },
                        });
                }),
                String.prototype.startsWith ||
                    Object.defineProperty(String.prototype, "startsWith", {
                        value: function (e, t) {
                            var o = t > 0 ? 0 | t : 0;
                            return this.substring(o, o + e.length) === e;
                        },
                    });
            if (window.navigator.msSaveBlob) {
                var e = document.querySelectorAll("a[download]");
                e.length &&
                    e.forEach(function (e) {
                        !(function (e) {
                            if ("" === e.href) throw Error("The element has no href value.");
                            var t = e.getAttribute("download");
                            if (null === t || "" === t) {
                                var o = e.href.split("/");
                                t = o[o.length - 1];
                            }
                            e.addEventListener("click", function (o) {
                                o.preventDefault();
                                var n = new XMLHttpRequest();
                                (n.onloadstart = function () {
                                    n.responseType = "blob";
                                }),
                                    (n.onload = function () {
                                        navigator.msSaveOrOpenBlob(n.response, t);
                                    }),
                                    n.open("GET", e.href, !0),
                                    n.send();
                            });
                        })(e);
                    });
            }
            window.MSInputMethodContext &&
                document.documentMode &&
                document.querySelectorAll("svg").forEach(function (e) {
                    e.setAttribute("focusable", "false");
                });
            !(function () {
                var e,
                    t,
                    o,
                    n = document.querySelector("main"),
                    a = document.querySelector(".header"),
                    s = document.querySelector(".footer");
                if (n && window.MSInputMethodContext && document.documentMode) {
                    var r = function () {
                        (e = a ? a.getBoundingClientRect().height : 0), (t = s ? s.getBoundingClientRect().height : 0), (o = window.innerHeight), (n.style.minHeight = o - (e + t) + "px");
                    };
                    document.addEventListener("loadDOMContentLoaded", r()), window.addEventListener("resize", r);
                }
            })();
        };
    },
    "./src/js/vendor/jquery.datetimepicker.js": function (e, t, o) {
        "use strict";
        o.r(t),
            function (e) {
                var t,
                    n,
                    a,
                    s,
                    r,
                    l,
                    i = o("./node_modules/@babel/runtime/helpers/typeof.js"),
                    d = o.n(i);
                (n = function (e, t) {
                    return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase();
                }),
                    (a = function (e, t, o) {
                        var n = o || "0",
                            s = e.toString();
                        return s.length < t ? a(n + s, t) : s;
                    }),
                    (s = function (e) {
                        var t, o;
                        for (e = e || {}, t = 1; t < arguments.length; t++) if ((o = arguments[t])) for (var n in o) o.hasOwnProperty(n) && ("object" == d()(o[n]) ? s(e[n], o[n]) : (e[n] = o[n]));
                        return e;
                    }),
                    (r = function (e, t) {
                        for (var o = 0; o < t.length; o++) if (t[o].toLowerCase() === e.toLowerCase()) return o;
                        return -1;
                    }),
                    (l = {
                        dateSettings: {
                            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            meridiem: ["AM", "PM"],
                            ordinal: function (e) {
                                var t = e % 10,
                                    o = { 1: "st", 2: "nd", 3: "rd" };
                                return 1 !== Math.floor((e % 100) / 10) && o[t] ? o[t] : "th";
                            },
                        },
                        separators: /[ \-+\/\.T:@]/g,
                        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
                        intParts: /[djwNzmnyYhHgGis]/g,
                        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                        tzClip: /[^-+\dA-Z]/g,
                    }),
                    ((t = function (e) {
                        var t = this,
                            o = s(l, e);
                        (t.dateSettings = o.dateSettings), (t.separators = o.separators), (t.validParts = o.validParts), (t.intParts = o.intParts), (t.tzParts = o.tzParts), (t.tzClip = o.tzClip);
                    }).prototype = {
                        constructor: t,
                        getMonth: function (e) {
                            var t;
                            return 0 === (t = r(e, this.dateSettings.monthsShort) + 1) && (t = r(e, this.dateSettings.months) + 1), t;
                        },
                        parseDate: function (e, t) {
                            var o,
                                a,
                                s,
                                r,
                                l,
                                i,
                                m,
                                u,
                                c,
                                f,
                                h = this,
                                g = !1,
                                p = !1,
                                j = h.dateSettings,
                                v = { date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0 };
                            if (!e) return null;
                            if (e instanceof Date) return e;
                            if ("U" === t) return (s = parseInt(e)) ? new Date(1e3 * s) : e;
                            switch (d()(e)) {
                                case "number":
                                    return new Date(e);
                                case "string":
                                    break;
                                default:
                                    return null;
                            }
                            if (!(o = t.match(h.validParts)) || 0 === o.length) throw new Error("Invalid date format definition.");
                            for (a = e.replace(h.separators, "\0").split("\0"), s = 0; s < a.length; s++)
                                switch (((r = a[s]), (l = parseInt(r)), o[s])) {
                                    case "y":
                                    case "Y":
                                        if (!l) return null;
                                        (c = r.length), (v.year = 2 === c ? parseInt((70 > l ? "20" : "19") + r) : l), (g = !0);
                                        break;
                                    case "m":
                                    case "n":
                                    case "M":
                                    case "F":
                                        if (isNaN(l)) {
                                            if (!((i = h.getMonth(r)) > 0)) return null;
                                            v.month = i;
                                        } else {
                                            if (!(l >= 1 && 12 >= l)) return null;
                                            v.month = l;
                                        }
                                        g = !0;
                                        break;
                                    case "d":
                                    case "j":
                                        if (!(l >= 1 && 31 >= l)) return null;
                                        (v.day = l), (g = !0);
                                        break;
                                    case "g":
                                    case "h":
                                        if (((f = a[(m = o.indexOf("a") > -1 ? o.indexOf("a") : o.indexOf("A") > -1 ? o.indexOf("A") : -1)]), m > -1))
                                            (u = n(f, j.meridiem[0]) ? 0 : n(f, j.meridiem[1]) ? 12 : -1), l >= 1 && 12 >= l && u > -1 ? (v.hour = l + u - 1) : l >= 0 && 23 >= l && (v.hour = l);
                                        else {
                                            if (!(l >= 0 && 23 >= l)) return null;
                                            v.hour = l;
                                        }
                                        p = !0;
                                        break;
                                    case "G":
                                    case "H":
                                        if (!(l >= 0 && 23 >= l)) return null;
                                        (v.hour = l), (p = !0);
                                        break;
                                    case "i":
                                        if (!(l >= 0 && 59 >= l)) return null;
                                        (v.min = l), (p = !0);
                                        break;
                                    case "s":
                                        if (!(l >= 0 && 59 >= l)) return null;
                                        (v.sec = l), (p = !0);
                                }
                            if (!0 === g && v.year && v.month && v.day) v.date = new Date(v.year, v.month - 1, v.day, v.hour, v.min, v.sec, 0);
                            else {
                                if (!0 !== p) return null;
                                v.date = new Date(0, 0, 0, v.hour, v.min, v.sec, 0);
                            }
                            return v.date;
                        },
                        guessDate: function (e, t) {
                            if ("string" != typeof e) return e;
                            var o,
                                n,
                                a,
                                s,
                                r,
                                l,
                                i = e.replace(this.separators, "\0").split("\0"),
                                d = t.match(this.validParts),
                                m = new Date(),
                                u = 0;
                            if (!/^[djmn]/g.test(d[0])) return e;
                            for (a = 0; a < i.length; a++) {
                                if (((u = 2), (r = i[a]), (l = parseInt(r.substr(0, 2))), isNaN(l))) return null;
                                switch (a) {
                                    case 0:
                                        "m" === d[0] || "n" === d[0] ? m.setMonth(l - 1) : m.setDate(l);
                                        break;
                                    case 1:
                                        "m" === d[0] || "n" === d[0] ? m.setDate(l) : m.setMonth(l - 1);
                                        break;
                                    case 2:
                                        if (((n = m.getFullYear()), (u = 4 > (o = r.length) ? o : 4), !(n = parseInt(4 > o ? n.toString().substr(0, 4 - o) + r : r.substr(0, 4))))) return null;
                                        m.setFullYear(n);
                                        break;
                                    case 3:
                                        m.setHours(l);
                                        break;
                                    case 4:
                                        m.setMinutes(l);
                                        break;
                                    case 5:
                                        m.setSeconds(l);
                                }
                                (s = r.substr(u)).length > 0 && i.splice(a + 1, 0, s);
                            }
                            return m;
                        },
                        parseFormat: function (e, t) {
                            var o,
                                n = this,
                                s = n.dateSettings,
                                r = /\\?(.?)/gi,
                                l = function (e, t) {
                                    return o[e] ? o[e]() : t;
                                };
                            return (
                                (o = {
                                    d: function () {
                                        return a(o.j(), 2);
                                    },
                                    D: function () {
                                        return s.daysShort[o.w()];
                                    },
                                    j: function () {
                                        return t.getDate();
                                    },
                                    l: function () {
                                        return s.days[o.w()];
                                    },
                                    N: function () {
                                        return o.w() || 7;
                                    },
                                    w: function () {
                                        return t.getDay();
                                    },
                                    z: function () {
                                        var e = new Date(o.Y(), o.n() - 1, o.j()),
                                            t = new Date(o.Y(), 0, 1);
                                        return Math.round((e - t) / 864e5);
                                    },
                                    W: function () {
                                        var e = new Date(o.Y(), o.n() - 1, o.j() - o.N() + 3),
                                            t = new Date(e.getFullYear(), 0, 4);
                                        return a(1 + Math.round((e - t) / 864e5 / 7), 2);
                                    },
                                    F: function () {
                                        return s.months[t.getMonth()];
                                    },
                                    m: function () {
                                        return a(o.n(), 2);
                                    },
                                    M: function () {
                                        return s.monthsShort[t.getMonth()];
                                    },
                                    n: function () {
                                        return t.getMonth() + 1;
                                    },
                                    t: function () {
                                        return new Date(o.Y(), o.n(), 0).getDate();
                                    },
                                    L: function () {
                                        var e = o.Y();
                                        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 1 : 0;
                                    },
                                    o: function () {
                                        var e = o.n(),
                                            t = o.W();
                                        return o.Y() + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0);
                                    },
                                    Y: function () {
                                        return t.getFullYear();
                                    },
                                    y: function () {
                                        return o.Y().toString().slice(-2);
                                    },
                                    a: function () {
                                        return o.A().toLowerCase();
                                    },
                                    A: function () {
                                        var e = o.G() < 12 ? 0 : 1;
                                        return s.meridiem[e];
                                    },
                                    B: function () {
                                        var e = 3600 * t.getUTCHours(),
                                            o = 60 * t.getUTCMinutes(),
                                            n = t.getUTCSeconds();
                                        return a(Math.floor((e + o + n + 3600) / 86.4) % 1e3, 3);
                                    },
                                    g: function () {
                                        return o.G() % 12 || 12;
                                    },
                                    G: function () {
                                        return t.getHours();
                                    },
                                    h: function () {
                                        return a(o.g(), 2);
                                    },
                                    H: function () {
                                        return a(o.G(), 2);
                                    },
                                    i: function () {
                                        return a(t.getMinutes(), 2);
                                    },
                                    s: function () {
                                        return a(t.getSeconds(), 2);
                                    },
                                    u: function () {
                                        return a(1e3 * t.getMilliseconds(), 6);
                                    },
                                    e: function () {
                                        return /\((.*)\)/.exec(String(t))[1] || "Coordinated Universal Time";
                                    },
                                    I: function () {
                                        return new Date(o.Y(), 0) - Date.UTC(o.Y(), 0) != new Date(o.Y(), 6) - Date.UTC(o.Y(), 6) ? 1 : 0;
                                    },
                                    O: function () {
                                        var e = t.getTimezoneOffset(),
                                            o = Math.abs(e);
                                        return (e > 0 ? "-" : "+") + a(100 * Math.floor(o / 60) + (o % 60), 4);
                                    },
                                    P: function () {
                                        var e = o.O();
                                        return e.substr(0, 3) + ":" + e.substr(3, 2);
                                    },
                                    T: function () {
                                        return (String(t).match(n.tzParts) || [""]).pop().replace(n.tzClip, "") || "UTC";
                                    },
                                    Z: function () {
                                        return 60 * -t.getTimezoneOffset();
                                    },
                                    c: function () {
                                        return "Y-m-d\\TH:i:sP".replace(r, l);
                                    },
                                    r: function () {
                                        return "D, d M Y H:i:s O".replace(r, l);
                                    },
                                    U: function () {
                                        return t.getTime() / 1e3 || 0;
                                    },
                                }),
                                l(e, e)
                            );
                        },
                        formatDate: function (e, t) {
                            var o,
                                n,
                                a,
                                s,
                                r,
                                l = this,
                                i = "";
                            if ("string" == typeof e && !(e = l.parseDate(e, t))) return null;
                            if (e instanceof Date) {
                                for (a = t.length, o = 0; a > o; o++)
                                    "S" !== (r = t.charAt(o)) &&
                                        "\\" !== r &&
                                        (o > 0 && "\\" === t.charAt(o - 1)
                                            ? (i += r)
                                            : ((s = l.parseFormat(r, e)), o !== a - 1 && l.intParts.test(r) && "S" === t.charAt(o + 1) && ((n = parseInt(s) || 0), (s += l.dateSettings.ordinal(n))), (i += s)));
                                return i;
                            }
                            return "";
                        },
                    });
                var m;
                (m = function (e) {
                    var o = {
                            i18n: {
                                ar: {
                                    months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                                    dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
                                    dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
                                },
                                ro: {
                                    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                                    dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
                                    dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
                                },
                                id: {
                                    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                                    dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                                    dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
                                },
                                is: {
                                    months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                                    dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
                                    dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
                                },
                                bg: {
                                    months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                                    dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                                    dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
                                },
                                fa: {
                                    months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                                    dayOfWeekShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
                                    dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"],
                                },
                                ru: {
                                    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                                    dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                                    dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                                },
                                uk: {
                                    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                                    dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                                    dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
                                },
                                en: {
                                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                },
                                el: {
                                    months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                                    dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                                    dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
                                },
                                de: {
                                    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                                    dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                                    dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                                },
                                nl: {
                                    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                                    dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                                    dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                                },
                                tr: {
                                    months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                                    dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
                                    dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                                },
                                fr: {
                                    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                                    dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                                    dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                                },
                                es: {
                                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                                    dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                                },
                                th: {
                                    months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
                                    dayOfWeekShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                                    dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
                                },
                                pl: {
                                    months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                                    dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
                                    dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
                                },
                                pt: {
                                    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                                    dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                                },
                                ch: { months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"] },
                                se: { months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"] },
                                km: {
                                    months: ["មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"],
                                    dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
                                    dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"],
                                },
                                kr: {
                                    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                                    dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                                    dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                                },
                                it: {
                                    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                                    dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                                },
                                da: {
                                    months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                                    dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                                    dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
                                },
                                no: {
                                    months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                                    dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                                    dayOfWeek: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                                },
                                ja: {
                                    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                                    dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
                                    dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
                                },
                                vi: {
                                    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                                    dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                                    dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
                                },
                                sl: {
                                    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                                    dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                                    dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
                                },
                                cs: { months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"] },
                                hu: {
                                    months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                                    dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
                                    dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
                                },
                                az: {
                                    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                                    dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
                                    dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
                                },
                                bs: {
                                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
                                },
                                ca: {
                                    months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                                    dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                                    dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
                                },
                                "en-GB": {
                                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                },
                                et: {
                                    months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                                    dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                                    dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
                                },
                                eu: {
                                    months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                                    dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                                    dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"],
                                },
                                fi: {
                                    months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                                    dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                                    dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
                                },
                                gl: {
                                    months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                                    dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
                                },
                                hr: {
                                    months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
                                },
                                ko: {
                                    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                                    dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                                    dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                                },
                                lt: {
                                    months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
                                    dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
                                    dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
                                },
                                lv: {
                                    months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                                    dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                                    dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
                                },
                                mk: {
                                    months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                                    dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                                    dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
                                },
                                mn: {
                                    months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                                    dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
                                    dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"],
                                },
                                "pt-BR": {
                                    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                                    dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                                },
                                sk: {
                                    months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                                    dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
                                    dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
                                },
                                sq: {
                                    months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
                                    dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
                                    dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
                                },
                                "sr-YU": {
                                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
                                    dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
                                },
                                sr: {
                                    months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                                    dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
                                    dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
                                },
                                sv: {
                                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                                    dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                                    dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                                },
                                "zh-TW": {
                                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                                    dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                                    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                                },
                                zh: {
                                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                                    dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                                    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                                },
                                ug: {
                                    months: ["1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"],
                                    dayOfWeek: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"],
                                },
                                he: {
                                    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                                    dayOfWeekShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
                                    dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"],
                                },
                                hy: {
                                    months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
                                    dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
                                    dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"],
                                },
                                kg: {
                                    months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"],
                                    dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
                                    dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"],
                                },
                                rm: {
                                    months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                                    dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                                    dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"],
                                },
                                ka: {
                                    months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
                                    dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                                    dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
                                },
                            },
                            ownerDocument: document,
                            contentWindow: window,
                            value: "",
                            rtl: !1,
                            format: "Y/m/d H:i",
                            formatTime: "H:i",
                            formatDate: "Y/m/d",
                            startDate: !1,
                            step: 60,
                            monthChangeSpinner: !0,
                            closeOnDateSelect: !1,
                            closeOnTimeSelect: !0,
                            closeOnWithoutClick: !0,
                            closeOnInputClick: !0,
                            openOnFocus: !0,
                            timepicker: !0,
                            datepicker: !0,
                            weeks: !1,
                            defaultTime: !1,
                            defaultDate: !1,
                            minDate: !1,
                            maxDate: !1,
                            minTime: !1,
                            maxTime: !1,
                            minDateTime: !1,
                            maxDateTime: !1,
                            allowTimes: [],
                            opened: !1,
                            initTime: !0,
                            inline: !1,
                            theme: "",
                            touchMovedThreshold: 5,
                            onSelectDate: function () {},
                            onSelectTime: function () {},
                            onChangeMonth: function () {},
                            onGetWeekOfYear: function () {},
                            onChangeYear: function () {},
                            onChangeDateTime: function () {},
                            onShow: function () {},
                            onClose: function () {},
                            onGenerate: function () {},
                            withoutCopyright: !0,
                            inverseButton: !1,
                            hours12: !1,
                            next: "xdsoft_next",
                            prev: "xdsoft_prev",
                            dayOfWeekStart: 0,
                            parentID: "body",
                            timeHeightInTimePicker: 25,
                            timepickerScrollbar: !0,
                            todayButton: !0,
                            prevButton: !0,
                            nextButton: !0,
                            defaultSelect: !0,
                            scrollMonth: !0,
                            scrollTime: !0,
                            scrollInput: !0,
                            lazyInit: !1,
                            mask: !1,
                            validateOnBlur: !0,
                            allowBlank: !0,
                            yearStart: 1950,
                            yearEnd: 2050,
                            monthStart: 0,
                            monthEnd: 11,
                            style: "",
                            id: "",
                            fixed: !1,
                            roundTime: "round",
                            className: "",
                            weekends: [],
                            highlightedDates: [],
                            highlightedPeriods: [],
                            allowDates: [],
                            allowDateRe: null,
                            disabledDates: [],
                            disabledWeekDays: [],
                            yearOffset: 0,
                            beforeShowDay: null,
                            enterLikeTab: !0,
                            showApplyButton: !1,
                            insideParent: !1,
                        },
                        n = null,
                        a = null,
                        s = "en",
                        r = { meridiem: ["AM", "PM"] },
                        l = function () {
                            var l = o.i18n[s],
                                i = {
                                    days: l.dayOfWeek,
                                    daysShort: l.dayOfWeekShort,
                                    months: l.months,
                                    monthsShort: e.map(l.months, function (e) {
                                        return e.substring(0, 3);
                                    }),
                                };
                            "function" == typeof t && (n = a = new t({ dateSettings: e.extend({}, r, i) }));
                        },
                        i = {
                            moment: {
                                default_options: { format: "YYYY/MM/DD HH:mm", formatDate: "YYYY/MM/DD", formatTime: "HH:mm" },
                                formatter: {
                                    parseDate: function (e, t) {
                                        if (m(t)) return a.parseDate(e, t);
                                        var o = moment(e, t);
                                        return !!o.isValid() && o.toDate();
                                    },
                                    formatDate: function (e, t) {
                                        return m(t) ? a.formatDate(e, t) : moment(e).format(t);
                                    },
                                    formatMask: function (e) {
                                        return e.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59");
                                    },
                                },
                            },
                        };
                    e.datetimepicker = {
                        setLocale: function (e) {
                            var t = o.i18n[e] ? e : "en";
                            s !== t && ((s = t), l());
                        },
                        setDateFormatter: function (t) {
                            if ("string" == typeof t && i.hasOwnProperty(t)) {
                                var a = i[t];
                                e.extend(o, a.default_options), (n = a.formatter);
                            } else n = t;
                        },
                    };
                    var d = {
                            RFC_2822: "D, d M Y H:i:s O",
                            ATOM: "Y-m-dTH:i:sP",
                            ISO_8601: "Y-m-dTH:i:sO",
                            RFC_822: "D, d M y H:i:s O",
                            RFC_850: "l, d-M-y H:i:s T",
                            RFC_1036: "D, d M y H:i:s O",
                            RFC_1123: "D, d M Y H:i:s O",
                            RSS: "D, d M Y H:i:s O",
                            W3C: "Y-m-dTH:i:sP",
                        },
                        m = function (e) {
                            return -1 !== Object.values(d).indexOf(e);
                        };
                    function u(e, t, o) {
                        (this.date = e), (this.desc = t), (this.style = o);
                    }
                    e.extend(e.datetimepicker, d),
                        l(),
                        window.getComputedStyle ||
                            (window.getComputedStyle = function (e) {
                                return (
                                    (this.el = e),
                                    (this.getPropertyValue = function (t) {
                                        var o = /(-([a-z]))/g;
                                        return (
                                            "float" === t && (t = "styleFloat"),
                                            o.test(t) &&
                                                (t = t.replace(o, function (e, t, o) {
                                                    return o.toUpperCase();
                                                })),
                                            e.currentStyle[t] || null
                                        );
                                    }),
                                    this
                                );
                            }),
                        Array.prototype.indexOf ||
                            (Array.prototype.indexOf = function (e, t) {
                                var o, n;
                                for (o = t || 0, n = this.length; o < n; o += 1) if (this[o] === e) return o;
                                return -1;
                            }),
                        (Date.prototype.countDaysInMonth = function () {
                            return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
                        }),
                        (e.fn.xdsoftScroller = function (t, o) {
                            return this.each(function () {
                                var n,
                                    a,
                                    s,
                                    r,
                                    l,
                                    i = e(this),
                                    d = function (e) {
                                        var t,
                                            o = { x: 0, y: 0 };
                                        return (
                                            "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type
                                                ? ((t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]), (o.x = t.clientX), (o.y = t.clientY))
                                                : ("mousedown" !== e.type && "mouseup" !== e.type && "mousemove" !== e.type && "mouseover" !== e.type && "mouseout" !== e.type && "mouseenter" !== e.type && "mouseleave" !== e.type) ||
                                                  ((o.x = e.clientX), (o.y = e.clientY)),
                                            o
                                        );
                                    },
                                    m = 100,
                                    u = !1,
                                    c = 0,
                                    f = 0,
                                    h = 0,
                                    g = !1,
                                    p = 0,
                                    j = function () {};
                                "hide" !== o
                                    ? (e(this).hasClass("xdsoft_scroller_box") ||
                                          ((n = i.children().eq(0)),
                                          (a = i[0].clientHeight),
                                          (s = n[0].offsetHeight),
                                          (r = e('<div class="xdsoft_scrollbar"></div>')),
                                          (l = e('<div class="xdsoft_scroller"></div>')),
                                          r.append(l),
                                          i.addClass("xdsoft_scroller_box").append(r),
                                          (j = function (e) {
                                              var t = d(e).y - c + p;
                                              t < 0 && (t = 0), t + l[0].offsetHeight > h && (t = h - l[0].offsetHeight), i.trigger("scroll_element.xdsoft_scroller", [m ? t / m : 0]);
                                          }),
                                          l
                                              .on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function (n) {
                                                  a || i.trigger("resize_scroll.xdsoft_scroller", [o]),
                                                      (c = d(n).y),
                                                      (p = parseInt(l.css("margin-top"), 10)),
                                                      (h = r[0].offsetHeight),
                                                      "mousedown" === n.type || "touchstart" === n.type
                                                          ? (t.ownerDocument && e(t.ownerDocument.body).addClass("xdsoft_noselect"),
                                                            e([t.ownerDocument.body, t.contentWindow]).on("touchend mouseup.xdsoft_scroller", function o() {
                                                                e([t.ownerDocument.body, t.contentWindow]).off("touchend mouseup.xdsoft_scroller", o).off("mousemove.xdsoft_scroller", j).removeClass("xdsoft_noselect");
                                                            }),
                                                            e(t.ownerDocument.body).on("mousemove.xdsoft_scroller", j))
                                                          : ((g = !0), n.stopPropagation(), n.preventDefault());
                                              })
                                              .on("touchmove", function (e) {
                                                  g && (e.preventDefault(), j(e));
                                              })
                                              .on("touchend touchcancel", function () {
                                                  (g = !1), (p = 0);
                                              }),
                                          i
                                              .on("scroll_element.xdsoft_scroller", function (e, t) {
                                                  a || i.trigger("resize_scroll.xdsoft_scroller", [t, !0]),
                                                      (t = t > 1 ? 1 : t < 0 || isNaN(t) ? 0 : t),
                                                      l.css("margin-top", m * t),
                                                      setTimeout(function () {
                                                          n.css("marginTop", -parseInt((n[0].offsetHeight - a) * t, 10));
                                                      }, 10);
                                              })
                                              .on("resize_scroll.xdsoft_scroller", function (e, t, o) {
                                                  var d, u;
                                                  (a = i[0].clientHeight),
                                                      (s = n[0].offsetHeight),
                                                      (u = (d = a / s) * r[0].offsetHeight),
                                                      d > 1
                                                          ? l.hide()
                                                          : (l.show(),
                                                            l.css("height", parseInt(u > 10 ? u : 10, 10)),
                                                            (m = r[0].offsetHeight - l[0].offsetHeight),
                                                            !0 !== o && i.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(n.css("marginTop"), 10)) / (s - a)]));
                                              }),
                                          i.on("mousewheel", function (e) {
                                              var t = Math.abs(parseInt(n.css("marginTop"), 10));
                                              return (t -= 20 * e.deltaY) < 0 && (t = 0), i.trigger("scroll_element.xdsoft_scroller", [t / (s - a)]), e.stopPropagation(), !1;
                                          }),
                                          i.on("touchstart", function (e) {
                                              (u = d(e)), (f = Math.abs(parseInt(n.css("marginTop"), 10)));
                                          }),
                                          i.on("touchmove", function (e) {
                                              if (u) {
                                                  e.preventDefault();
                                                  var t = d(e);
                                                  i.trigger("scroll_element.xdsoft_scroller", [(f - (t.y - u.y)) / (s - a)]);
                                              }
                                          }),
                                          i.on("touchend touchcancel", function () {
                                              (u = !1), (f = 0);
                                          })),
                                      i.trigger("resize_scroll.xdsoft_scroller", [o]))
                                    : i.find(".xdsoft_scrollbar").hide();
                            });
                        }),
                        (e.fn.datetimepicker = function (t, a) {
                            var r,
                                l,
                                i = this,
                                d = 48,
                                m = 57,
                                c = 96,
                                f = 105,
                                h = 17,
                                g = 46,
                                p = 13,
                                j = 27,
                                v = 8,
                                y = 37,
                                b = 38,
                                _ = 39,
                                k = 40,
                                D = 9,
                                x = 116,
                                w = 65,
                                S = 67,
                                T = 86,
                                M = 90,
                                O = 89,
                                W = !1,
                                C = e.isPlainObject(t) || !t ? e.extend(!0, {}, o, t) : e.extend(!0, {}, o),
                                P = 0;
                            return (
                                (r = function (o) {
                                    var a,
                                        r,
                                        l,
                                        i,
                                        P,
                                        F,
                                        z = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                                        A = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                                        Y = e('<div class="xdsoft_datepicker active"></div>'),
                                        H = e(
                                            '<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'
                                        ),
                                        E = e('<div class="xdsoft_calendar"></div>'),
                                        N = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                                        J = N.find(".xdsoft_time_box").eq(0),
                                        I = e('<div class="xdsoft_time_variant"></div>'),
                                        L = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                                        $ = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                                        B = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                                        q = !1,
                                        R = 0;
                                    C.id && z.attr("id", C.id),
                                        C.style && z.attr("style", C.style),
                                        C.weeks && z.addClass("xdsoft_showweeks"),
                                        C.rtl && z.addClass("xdsoft_rtl"),
                                        z.addClass("xdsoft_" + C.theme),
                                        z.addClass(C.className),
                                        H.find(".xdsoft_month span").after($),
                                        H.find(".xdsoft_year span").after(B),
                                        H.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function (t) {
                                            var o,
                                                n,
                                                a = e(this).find(".xdsoft_select").eq(0),
                                                s = 0,
                                                r = 0,
                                                l = a.is(":visible");
                                            for (
                                                H.find(".xdsoft_select").hide(),
                                                    P.currentTime && (s = P.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()),
                                                    a[l ? "hide" : "show"](),
                                                    o = a.find("div.xdsoft_option"),
                                                    n = 0;
                                                n < o.length && o.eq(n).data("value") !== s;
                                                n += 1
                                            )
                                                r += o[0].offsetHeight;
                                            return a.xdsoftScroller(C, r / (a.children()[0].offsetHeight - a[0].clientHeight)), t.stopPropagation(), !1;
                                        });
                                    var G = function (e) {
                                        var t = e.originalEvent,
                                            o = t.touches ? t.touches[0] : t;
                                        this.touchStartPosition = this.touchStartPosition || o;
                                        var n = Math.abs(this.touchStartPosition.clientX - o.clientX),
                                            a = Math.abs(this.touchStartPosition.clientY - o.clientY);
                                        Math.sqrt(n * n + a * a) > C.touchMovedThreshold && (this.touchMoved = !0);
                                    };
                                    function V() {
                                        var e,
                                            t = !1;
                                        return (
                                            C.startDate
                                                ? (t = P.strToDate(C.startDate))
                                                : (t = C.value || (o && o.val && o.val() ? o.val() : ""))
                                                ? ((t = P.strToDateTime(t)), C.yearOffset && (t = new Date(t.getFullYear() - C.yearOffset, t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())))
                                                : C.defaultDate && ((t = P.strToDateTime(C.defaultDate)), C.defaultTime && ((e = P.strtotime(C.defaultTime)), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))),
                                            t && P.isValidDate(t) ? z.data("changed", !0) : (t = ""),
                                            t || 0
                                        );
                                    }
                                    function U(t) {
                                        var a = function (e, t) {
                                                var o = e
                                                    .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1")
                                                    .replace(/_/g, "{digit+}")
                                                    .replace(/([0-9]{1})/g, "{digit$1}")
                                                    .replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}")
                                                    .replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                                                return new RegExp(o).test(t);
                                            },
                                            s = function (e, o) {
                                                if (!(e = "string" == typeof e || e instanceof String ? t.ownerDocument.getElementById(e) : e)) return !1;
                                                if (e.createTextRange) {
                                                    var n = e.createTextRange();
                                                    return n.collapse(!0), n.moveEnd("character", o), n.moveStart("character", o), n.select(), !0;
                                                }
                                                return !!e.setSelectionRange && (e.setSelectionRange(o, o), !0);
                                            };
                                        t.mask && o.off("keydown.xdsoft"),
                                            !0 === t.mask &&
                                                (n.formatMask
                                                    ? (t.mask = n.formatMask(t.format))
                                                    : (t.mask = t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59"))),
                                            "string" === e.type(t.mask) &&
                                                (a(t.mask, o.val()) || (o.val(t.mask.replace(/[0-9]/g, "_")), s(o[0], 0)),
                                                o.on("paste.xdsoft", function (n) {
                                                    var r = (n.clipboardData || n.originalEvent.clipboardData || window.clipboardData).getData("text"),
                                                        l = this.value,
                                                        i = this.selectionStart,
                                                        d = l.substr(0, i),
                                                        m = l.substr(i + r.length);
                                                    return (
                                                        (l = d + r + m),
                                                        (i += r.length),
                                                        a(t.mask, l) ? ((this.value = l), s(this, i)) : "" === e.trim(l) ? (this.value = t.mask.replace(/[0-9]/g, "_")) : o.trigger("error_input.xdsoft"),
                                                        n.preventDefault(),
                                                        !1
                                                    );
                                                }),
                                                o.on("keydown.xdsoft", function (n) {
                                                    var r,
                                                        l = this.value,
                                                        i = n.which,
                                                        u = this.selectionStart,
                                                        C = this.selectionEnd,
                                                        P = u !== C;
                                                    if ((i >= d && i <= m) || (i >= c && i <= f) || i === v || i === g) {
                                                        for (r = i === v || i === g ? "_" : String.fromCharCode(c <= i && i <= f ? i - d : i), i === v && u && !P && (u -= 1); ; ) {
                                                            var F = t.mask.substr(u, 1),
                                                                z = u < t.mask.length,
                                                                A = u > 0;
                                                            if (!(/[^0-9_]/.test(F) && z && A)) break;
                                                            u += i !== v || P ? 1 : -1;
                                                        }
                                                        if ((n.metaKey && ((u = 0), (P = !0)), P)) {
                                                            var Y = C - u,
                                                                H = t.mask.replace(/[0-9]/g, "_"),
                                                                E = H.substr(u, Y).substr(1),
                                                                N = l.substr(0, u),
                                                                J = r + E,
                                                                I = l.substr(u + Y);
                                                            l = N + J + I;
                                                        } else {
                                                            var L = l.substr(0, u),
                                                                $ = r,
                                                                B = l.substr(u + 1);
                                                            l = L + $ + B;
                                                        }
                                                        if ("" === e.trim(l)) l = H;
                                                        else if (u === t.mask.length) return n.preventDefault(), !1;
                                                        for (u += i === v ? 0 : 1; /[^0-9_]/.test(t.mask.substr(u, 1)) && u < t.mask.length && u > 0; ) u += i === v ? 0 : 1;
                                                        a(t.mask, l) ? ((this.value = l), s(this, u)) : "" === e.trim(l) ? (this.value = t.mask.replace(/[0-9]/g, "_")) : o.trigger("error_input.xdsoft");
                                                    } else if ((-1 !== [w, S, T, M, O].indexOf(i) && W) || -1 !== [j, b, k, y, _, x, h, D, p].indexOf(i)) return !0;
                                                    return n.preventDefault(), !1;
                                                }));
                                    }
                                    H.find(".xdsoft_select")
                                        .xdsoftScroller(C)
                                        .on("touchstart mousedown.xdsoft", function (e) {
                                            var t = e.originalEvent;
                                            (this.touchMoved = !1), (this.touchStartPosition = t.touches ? t.touches[0] : t), e.stopPropagation(), e.preventDefault();
                                        })
                                        .on("touchmove", ".xdsoft_option", G)
                                        .on("touchend mousedown.xdsoft", ".xdsoft_option", function () {
                                            if (!this.touchMoved) {
                                                (void 0 !== P.currentTime && null !== P.currentTime) || (P.currentTime = P.now());
                                                var t = P.currentTime.getFullYear();
                                                P && P.currentTime && P.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")),
                                                    e(this).parent().parent().hide(),
                                                    z.trigger("xchange.xdsoft"),
                                                    C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(z, P.currentTime, z.data("input")),
                                                    t !== P.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(z, P.currentTime, z.data("input"));
                                            }
                                        }),
                                        (z.getValue = function () {
                                            return P.getCurrentTime();
                                        }),
                                        (z.setOptions = function (t) {
                                            var a = {};
                                            (C = e.extend(!0, {}, C, t)),
                                                t.allowTimes && e.isArray(t.allowTimes) && t.allowTimes.length && (C.allowTimes = e.extend(!0, [], t.allowTimes)),
                                                t.weekends && e.isArray(t.weekends) && t.weekends.length && (C.weekends = e.extend(!0, [], t.weekends)),
                                                t.allowDates && e.isArray(t.allowDates) && t.allowDates.length && (C.allowDates = e.extend(!0, [], t.allowDates)),
                                                t.allowDateRe && "[object String]" === Object.prototype.toString.call(t.allowDateRe) && (C.allowDateRe = new RegExp(t.allowDateRe)),
                                                t.highlightedDates &&
                                                    e.isArray(t.highlightedDates) &&
                                                    t.highlightedDates.length &&
                                                    (e.each(t.highlightedDates, function (t, o) {
                                                        var s,
                                                            r = e.map(o.split(","), e.trim),
                                                            l = new u(n.parseDate(r[0], C.formatDate), r[1], r[2]),
                                                            i = n.formatDate(l.date, C.formatDate);
                                                        void 0 !== a[i] ? (s = a[i].desc) && s.length && l.desc && l.desc.length && (a[i].desc = s + "\n" + l.desc) : (a[i] = l);
                                                    }),
                                                    (C.highlightedDates = e.extend(!0, [], a))),
                                                t.highlightedPeriods &&
                                                    e.isArray(t.highlightedPeriods) &&
                                                    t.highlightedPeriods.length &&
                                                    ((a = e.extend(!0, [], C.highlightedDates)),
                                                    e.each(t.highlightedPeriods, function (t, o) {
                                                        var s, r, l, i, d, m, c;
                                                        if (e.isArray(o)) (s = o[0]), (r = o[1]), (l = o[2]), (c = o[3]);
                                                        else {
                                                            var f = e.map(o.split(","), e.trim);
                                                            (s = n.parseDate(f[0], C.formatDate)), (r = n.parseDate(f[1], C.formatDate)), (l = f[2]), (c = f[3]);
                                                        }
                                                        for (; s <= r; )
                                                            (i = new u(s, l, c)),
                                                                (d = n.formatDate(s, C.formatDate)),
                                                                s.setDate(s.getDate() + 1),
                                                                void 0 !== a[d] ? (m = a[d].desc) && m.length && i.desc && i.desc.length && (a[d].desc = m + "\n" + i.desc) : (a[d] = i);
                                                    }),
                                                    (C.highlightedDates = e.extend(!0, [], a))),
                                                t.disabledDates && e.isArray(t.disabledDates) && t.disabledDates.length && (C.disabledDates = e.extend(!0, [], t.disabledDates)),
                                                t.disabledWeekDays && e.isArray(t.disabledWeekDays) && t.disabledWeekDays.length && (C.disabledWeekDays = e.extend(!0, [], t.disabledWeekDays)),
                                                (!C.open && !C.opened) || C.inline || o.trigger("open.xdsoft"),
                                                C.inline && ((q = !0), z.addClass("xdsoft_inline"), o.after(z).hide()),
                                                C.inverseButton && ((C.next = "xdsoft_prev"), (C.prev = "xdsoft_next")),
                                                C.datepicker ? Y.addClass("active") : Y.removeClass("active"),
                                                C.timepicker ? N.addClass("active") : N.removeClass("active"),
                                                C.value && (P.setCurrentTime(C.value), o && o.val && o.val(P.str)),
                                                isNaN(C.dayOfWeekStart) ? (C.dayOfWeekStart = 0) : (C.dayOfWeekStart = parseInt(C.dayOfWeekStart, 10) % 7),
                                                C.timepickerScrollbar || J.xdsoftScroller(C, "hide"),
                                                C.minDate && /^[\+\-](.*)$/.test(C.minDate) && (C.minDate = n.formatDate(P.strToDateTime(C.minDate), C.formatDate)),
                                                C.maxDate && /^[\+\-](.*)$/.test(C.maxDate) && (C.maxDate = n.formatDate(P.strToDateTime(C.maxDate), C.formatDate)),
                                                C.minDateTime && /^\+(.*)$/.test(C.minDateTime) && (C.minDateTime = P.strToDateTime(C.minDateTime).dateFormat(C.formatDate)),
                                                C.maxDateTime && /^\+(.*)$/.test(C.maxDateTime) && (C.maxDateTime = P.strToDateTime(C.maxDateTime).dateFormat(C.formatDate)),
                                                L.toggle(C.showApplyButton),
                                                H.find(".xdsoft_today_button").css("visibility", C.todayButton ? "visible" : "hidden"),
                                                H.find("." + C.prev).css("visibility", C.prevButton ? "visible" : "hidden"),
                                                H.find("." + C.next).css("visibility", C.nextButton ? "visible" : "hidden"),
                                                U(C),
                                                C.validateOnBlur &&
                                                    o.off("blur.xdsoft").on("blur.xdsoft", function () {
                                                        if (C.allowBlank && (!e.trim(e(this).val()).length || ("string" == typeof C.mask && e.trim(e(this).val()) === C.mask.replace(/[0-9]/g, "_"))))
                                                            e(this).val(null), z.data("xdsoft_datetime").empty();
                                                        else {
                                                            var t = n.parseDate(e(this).val(), C.format);
                                                            if (t) e(this).val(n.formatDate(t, C.format));
                                                            else {
                                                                var o = +[e(this).val()[0], e(this).val()[1]].join(""),
                                                                    a = +[e(this).val()[2], e(this).val()[3]].join("");
                                                                !C.datepicker && C.timepicker && o >= 0 && o < 24 && a >= 0 && a < 60
                                                                    ? e(this).val(
                                                                          [o, a]
                                                                              .map(function (e) {
                                                                                  return e > 9 ? e : "0" + e;
                                                                              })
                                                                              .join(":")
                                                                      )
                                                                    : e(this).val(n.formatDate(P.now(), C.format));
                                                            }
                                                            z.data("xdsoft_datetime").setCurrentTime(e(this).val());
                                                        }
                                                        z.trigger("changedatetime.xdsoft"), z.trigger("close.xdsoft");
                                                    }),
                                                (C.dayOfWeekStartPrev = 0 === C.dayOfWeekStart ? 6 : C.dayOfWeekStart - 1),
                                                z.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft");
                                        }),
                                        z.data("options", C).on("touchstart mousedown.xdsoft", function (e) {
                                            return e.stopPropagation(), e.preventDefault(), B.hide(), $.hide(), !1;
                                        }),
                                        J.append(I),
                                        J.xdsoftScroller(C),
                                        z.on("afterOpen.xdsoft", function () {
                                            J.xdsoftScroller(C);
                                        }),
                                        z.append(Y).append(N),
                                        !0 !== C.withoutCopyright && z.append(A),
                                        Y.append(H).append(E).append(L),
                                        C.insideParent ? e(o).parent().append(z) : e(C.parentID).append(z),
                                        (P = new (function () {
                                            var t = this;
                                            (t.now = function (e) {
                                                var o,
                                                    n,
                                                    a = new Date();
                                                return (
                                                    !e && C.defaultDate && ((o = t.strToDateTime(C.defaultDate)), a.setFullYear(o.getFullYear()), a.setMonth(o.getMonth()), a.setDate(o.getDate())),
                                                    a.setFullYear(a.getFullYear()),
                                                    !e && C.defaultTime && ((n = t.strtotime(C.defaultTime)), a.setHours(n.getHours()), a.setMinutes(n.getMinutes()), a.setSeconds(n.getSeconds()), a.setMilliseconds(n.getMilliseconds())),
                                                    a
                                                );
                                            }),
                                                (t.isValidDate = function (e) {
                                                    return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime());
                                                }),
                                                (t.setCurrentTime = function (e, o) {
                                                    "string" == typeof e
                                                        ? (t.currentTime = t.strToDateTime(e))
                                                        : t.isValidDate(e)
                                                        ? (t.currentTime = e)
                                                        : e || o || !C.allowBlank || C.inline
                                                        ? (t.currentTime = t.now())
                                                        : (t.currentTime = null),
                                                        z.trigger("xchange.xdsoft");
                                                }),
                                                (t.empty = function () {
                                                    t.currentTime = null;
                                                }),
                                                (t.getCurrentTime = function () {
                                                    return t.currentTime;
                                                }),
                                                (t.nextMonth = function () {
                                                    (void 0 !== t.currentTime && null !== t.currentTime) || (t.currentTime = t.now());
                                                    var o,
                                                        n = t.currentTime.getMonth() + 1;
                                                    return (
                                                        12 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), (n = 0)),
                                                        (o = t.currentTime.getFullYear()),
                                                        t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())),
                                                        t.currentTime.setMonth(n),
                                                        C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(z, P.currentTime, z.data("input")),
                                                        o !== t.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(z, P.currentTime, z.data("input")),
                                                        z.trigger("xchange.xdsoft"),
                                                        n
                                                    );
                                                }),
                                                (t.prevMonth = function () {
                                                    (void 0 !== t.currentTime && null !== t.currentTime) || (t.currentTime = t.now());
                                                    var o = t.currentTime.getMonth() - 1;
                                                    return (
                                                        -1 === o && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), (o = 11)),
                                                        t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), o + 1, 0).getDate(), t.currentTime.getDate())),
                                                        t.currentTime.setMonth(o),
                                                        C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(z, P.currentTime, z.data("input")),
                                                        z.trigger("xchange.xdsoft"),
                                                        o
                                                    );
                                                }),
                                                (t.getWeekOfYear = function (t) {
                                                    if (C.onGetWeekOfYear && e.isFunction(C.onGetWeekOfYear)) {
                                                        var o = C.onGetWeekOfYear.call(z, t);
                                                        if (void 0 !== o) return o;
                                                    }
                                                    var n = new Date(t.getFullYear(), 0, 1);
                                                    return 4 !== n.getDay() && n.setMonth(0, 1 + ((4 - n.getDay() + 7) % 7)), Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7);
                                                }),
                                                (t.strToDateTime = function (e) {
                                                    var o,
                                                        a,
                                                        s = [];
                                                    return e && e instanceof Date && t.isValidDate(e)
                                                        ? e
                                                        : ((s = /^([+-]{1})(.*)$/.exec(e)) && (s[2] = n.parseDate(s[2], C.formatDate)),
                                                          s && s[2]
                                                              ? ((o = s[2].getTime() - 6e4 * s[2].getTimezoneOffset()), (a = new Date(t.now(!0).getTime() + parseInt(s[1] + "1", 10) * o)))
                                                              : (a = e ? n.parseDate(e, C.format) : t.now()),
                                                          t.isValidDate(a) || (a = t.now()),
                                                          a);
                                                }),
                                                (t.strToDate = function (e) {
                                                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                                                    var o = e ? n.parseDate(e, C.formatDate) : t.now(!0);
                                                    return t.isValidDate(o) || (o = t.now(!0)), o;
                                                }),
                                                (t.strtotime = function (e) {
                                                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                                                    var o = e ? n.parseDate(e, C.formatTime) : t.now(!0);
                                                    return t.isValidDate(o) || (o = t.now(!0)), o;
                                                }),
                                                (t.str = function () {
                                                    var e = C.format;
                                                    return (
                                                        C.yearOffset && (e = (e = e.replace("Y", t.currentTime.getFullYear() + C.yearOffset)).replace("y", String(t.currentTime.getFullYear() + C.yearOffset).substring(2, 4))),
                                                        n.formatDate(t.currentTime, e)
                                                    );
                                                }),
                                                (t.currentTime = this.now());
                                        })()),
                                        L.on("touchend click", function (e) {
                                            e.preventDefault(), z.data("changed", !0), P.setCurrentTime(V()), o.val(P.str()), z.trigger("close.xdsoft");
                                        }),
                                        H.find(".xdsoft_today_button")
                                            .on("touchend mousedown.xdsoft", function () {
                                                z.data("changed", !0), P.setCurrentTime(0, !0), z.trigger("afterOpen.xdsoft");
                                            })
                                            .on("dblclick.xdsoft", function () {
                                                var e,
                                                    t,
                                                    n = P.getCurrentTime();
                                                (n = new Date(n.getFullYear(), n.getMonth(), n.getDate())),
                                                    (e = P.strToDate(C.minDate)),
                                                    n < (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) ||
                                                        ((t = P.strToDate(C.maxDate)), n > (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) || (o.val(P.str()), o.trigger("change"), z.trigger("close.xdsoft")));
                                            }),
                                        H.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function () {
                                            var t = e(this),
                                                o = 0,
                                                n = !1;
                                            !(function e(a) {
                                                t.hasClass(C.next) ? P.nextMonth() : t.hasClass(C.prev) && P.prevMonth(), C.monthChangeSpinner && (n || (o = setTimeout(e, a || 100)));
                                            })(500),
                                                e([C.ownerDocument.body, C.contentWindow]).on("touchend mouseup.xdsoft", function t() {
                                                    clearTimeout(o), (n = !0), e([C.ownerDocument.body, C.contentWindow]).off("touchend mouseup.xdsoft", t);
                                                });
                                        }),
                                        N.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function () {
                                            var t = e(this),
                                                o = 0,
                                                n = !1,
                                                a = 110;
                                            !(function e(s) {
                                                var r = J[0].clientHeight,
                                                    l = I[0].offsetHeight,
                                                    i = Math.abs(parseInt(I.css("marginTop"), 10));
                                                t.hasClass(C.next) && l - r - C.timeHeightInTimePicker >= i
                                                    ? I.css("marginTop", "-" + (i + C.timeHeightInTimePicker) + "px")
                                                    : t.hasClass(C.prev) && i - C.timeHeightInTimePicker >= 0 && I.css("marginTop", "-" + (i - C.timeHeightInTimePicker) + "px"),
                                                    J.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(I[0].style.marginTop, 10) / (l - r))]),
                                                    (a = a > 10 ? 10 : a - 10),
                                                    n || (o = setTimeout(e, s || a));
                                            })(500),
                                                e([C.ownerDocument.body, C.contentWindow]).on("touchend mouseup.xdsoft", function t() {
                                                    clearTimeout(o), (n = !0), e([C.ownerDocument.body, C.contentWindow]).off("touchend mouseup.xdsoft", t);
                                                });
                                        }),
                                        (a = 0),
                                        z
                                            .on("xchange.xdsoft", function (r) {
                                                clearTimeout(a),
                                                    (a = setTimeout(function () {
                                                        (void 0 !== P.currentTime && null !== P.currentTime) || (P.currentTime = P.now());
                                                        for (
                                                            var a,
                                                                r,
                                                                l,
                                                                i,
                                                                d,
                                                                m,
                                                                u,
                                                                c,
                                                                f,
                                                                h,
                                                                g = "",
                                                                p = new Date(P.currentTime.getFullYear(), P.currentTime.getMonth(), 1, 12, 0, 0),
                                                                j = 0,
                                                                v = P.now(),
                                                                y = !1,
                                                                b = !1,
                                                                _ = !1,
                                                                k = !1,
                                                                D = [],
                                                                x = !0,
                                                                w = "";
                                                            p.getDay() !== C.dayOfWeekStart;

                                                        )
                                                            p.setDate(p.getDate() - 1);
                                                        for (g += "<table><thead><tr>", C.weeks && (g += "<th></th>"), a = 0; a < 7; a += 1) g += "<th>" + C.i18n[s].dayOfWeekShort[(a + C.dayOfWeekStart) % 7] + "</th>";
                                                        for (
                                                            g += "</tr></thead>",
                                                                g += "<tbody>",
                                                                !1 !== C.maxDate && ((y = P.strToDate(C.maxDate)), (y = new Date(y.getFullYear(), y.getMonth(), y.getDate(), 23, 59, 59, 999))),
                                                                !1 !== C.minDate && ((b = P.strToDate(C.minDate)), (b = new Date(b.getFullYear(), b.getMonth(), b.getDate()))),
                                                                !1 !== C.minDateTime && ((_ = P.strToDate(C.minDateTime)), (_ = new Date(_.getFullYear(), _.getMonth(), _.getDate(), _.getHours(), _.getMinutes(), _.getSeconds()))),
                                                                !1 !== C.maxDateTime && ((k = P.strToDate(C.maxDateTime)), (k = new Date(k.getFullYear(), k.getMonth(), k.getDate(), k.getHours(), k.getMinutes(), k.getSeconds()))),
                                                                !1 !== k && (h = 31 * (12 * k.getFullYear() + k.getMonth()) + k.getDate());
                                                            j < P.currentTime.countDaysInMonth() || p.getDay() !== C.dayOfWeekStart || P.currentTime.getMonth() === p.getMonth();

                                                        ) {
                                                            (D = []),
                                                                (j += 1),
                                                                (l = p.getDay()),
                                                                (i = p.getDate()),
                                                                (d = p.getFullYear()),
                                                                (O = p.getMonth()),
                                                                (m = P.getWeekOfYear(p)),
                                                                (f = ""),
                                                                D.push("xdsoft_date"),
                                                                (u = C.beforeShowDay && e.isFunction(C.beforeShowDay.call) ? C.beforeShowDay.call(z, p) : null),
                                                                C.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(C.allowDateRe) && (C.allowDateRe.test(n.formatDate(p, C.formatDate)) || D.push("xdsoft_disabled")),
                                                                C.allowDates && C.allowDates.length > 0 && -1 === C.allowDates.indexOf(n.formatDate(p, C.formatDate)) && D.push("xdsoft_disabled");
                                                            var S = 31 * (12 * p.getFullYear() + p.getMonth()) + p.getDate();
                                                            ((!1 !== y && p > y) || (!1 !== _ && p < _) || (!1 !== b && p < b) || (!1 !== k && S > h) || (u && !1 === u[0])) && D.push("xdsoft_disabled"),
                                                                -1 !== C.disabledDates.indexOf(n.formatDate(p, C.formatDate)) && D.push("xdsoft_disabled"),
                                                                -1 !== C.disabledWeekDays.indexOf(l) && D.push("xdsoft_disabled"),
                                                                o.is("[disabled]") && D.push("xdsoft_disabled"),
                                                                u && "" !== u[1] && D.push(u[1]),
                                                                P.currentTime.getMonth() !== O && D.push("xdsoft_other_month"),
                                                                (C.defaultSelect || z.data("changed")) && n.formatDate(P.currentTime, C.formatDate) === n.formatDate(p, C.formatDate) && D.push("xdsoft_current"),
                                                                n.formatDate(v, C.formatDate) === n.formatDate(p, C.formatDate) && D.push("xdsoft_today"),
                                                                (0 !== p.getDay() && 6 !== p.getDay() && -1 === C.weekends.indexOf(n.formatDate(p, C.formatDate))) || D.push("xdsoft_weekend"),
                                                                void 0 !== C.highlightedDates[n.formatDate(p, C.formatDate)] &&
                                                                    ((r = C.highlightedDates[n.formatDate(p, C.formatDate)]), D.push(void 0 === r.style ? "xdsoft_highlighted_default" : r.style), (f = void 0 === r.desc ? "" : r.desc)),
                                                                C.beforeShowDay && e.isFunction(C.beforeShowDay) && D.push(C.beforeShowDay(p)),
                                                                x && ((g += "<tr>"), (x = !1), C.weeks && (g += "<th>" + m + "</th>")),
                                                                (g +=
                                                                    '<td data-date="' +
                                                                    i +
                                                                    '" data-month="' +
                                                                    O +
                                                                    '" data-year="' +
                                                                    d +
                                                                    '" class="xdsoft_date xdsoft_day_of_week' +
                                                                    p.getDay() +
                                                                    " " +
                                                                    D.join(" ") +
                                                                    '" title="' +
                                                                    f +
                                                                    '"><div>' +
                                                                    i +
                                                                    "</div></td>"),
                                                                p.getDay() === C.dayOfWeekStartPrev && ((g += "</tr>"), (x = !0)),
                                                                p.setDate(i + 1);
                                                        }
                                                        (g += "</tbody></table>"),
                                                            E.html(g),
                                                            H.find(".xdsoft_label span").eq(0).text(C.i18n[s].months[P.currentTime.getMonth()]),
                                                            H.find(".xdsoft_label span")
                                                                .eq(1)
                                                                .text(P.currentTime.getFullYear() + C.yearOffset),
                                                            (w = ""),
                                                            (O = "");
                                                        var T = 0;
                                                        if (!1 !== C.minTime) {
                                                            var M = P.strtotime(C.minTime);
                                                            T = 60 * M.getHours() + M.getMinutes();
                                                        }
                                                        var O,
                                                            W = 1440;
                                                        (!1 !== C.maxTime && ((M = P.strtotime(C.maxTime)), (W = 60 * M.getHours() + M.getMinutes())),
                                                        !1 !== C.minDateTime &&
                                                            ((M = P.strToDateTime(C.minDateTime)), n.formatDate(P.currentTime, C.formatDate) === n.formatDate(M, C.formatDate) && (O = 60 * M.getHours() + M.getMinutes()) > T && (T = O)),
                                                        !1 !== C.maxDateTime) &&
                                                            ((M = P.strToDateTime(C.maxDateTime)), n.formatDate(P.currentTime, C.formatDate) === n.formatDate(M, C.formatDate) && (O = 60 * M.getHours() + M.getMinutes()) < W && (W = O));
                                                        if (
                                                            ((c = function (t, a) {
                                                                var s,
                                                                    r = P.now(),
                                                                    l = C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length;
                                                                r.setHours(t), (t = parseInt(r.getHours(), 10)), r.setMinutes(a), (a = parseInt(r.getMinutes(), 10)), (D = []);
                                                                var i = 60 * t + a;
                                                                (o.is("[disabled]") || i >= W || i < T) && D.push("xdsoft_disabled"),
                                                                    (s = new Date(P.currentTime)).setHours(parseInt(P.currentTime.getHours(), 10)),
                                                                    l || s.setMinutes(Math[C.roundTime](P.currentTime.getMinutes() / C.step) * C.step),
                                                                    (C.initTime || C.defaultSelect || z.data("changed")) &&
                                                                        s.getHours() === parseInt(t, 10) &&
                                                                        ((!l && C.step > 59) || s.getMinutes() === parseInt(a, 10)) &&
                                                                        (C.defaultSelect || z.data("changed") ? D.push("xdsoft_current") : C.initTime && D.push("xdsoft_init_time")),
                                                                    parseInt(v.getHours(), 10) === parseInt(t, 10) && parseInt(v.getMinutes(), 10) === parseInt(a, 10) && D.push("xdsoft_today"),
                                                                    (w += '<div class="xdsoft_time ' + D.join(" ") + '" data-hour="' + t + '" data-minute="' + a + '">' + n.formatDate(r, C.formatTime) + "</div>");
                                                            }),
                                                            C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length)
                                                        )
                                                            for (j = 0; j < C.allowTimes.length; j += 1) c(P.strtotime(C.allowTimes[j]).getHours(), (O = P.strtotime(C.allowTimes[j]).getMinutes()));
                                                        else
                                                            for (j = 0, a = 0; j < (C.hours12 ? 12 : 24); j += 1)
                                                                for (a = 0; a < 60; a += C.step) {
                                                                    var F = 60 * j + a;
                                                                    F < T || F >= W || c((j < 10 ? "0" : "") + j, (O = (a < 10 ? "0" : "") + a));
                                                                }
                                                        for (I.html(w), t = "", j = parseInt(C.yearStart, 10); j <= parseInt(C.yearEnd, 10); j += 1)
                                                            t += '<div class="xdsoft_option ' + (P.currentTime.getFullYear() === j ? "xdsoft_current" : "") + '" data-value="' + j + '">' + (j + C.yearOffset) + "</div>";
                                                        for (B.children().eq(0).html(t), j = parseInt(C.monthStart, 10), t = ""; j <= parseInt(C.monthEnd, 10); j += 1)
                                                            t += '<div class="xdsoft_option ' + (P.currentTime.getMonth() === j ? "xdsoft_current" : "") + '" data-value="' + j + '">' + C.i18n[s].months[j] + "</div>";
                                                        $.children().eq(0).html(t), e(z).trigger("generate.xdsoft");
                                                    }, 10)),
                                                    r.stopPropagation();
                                            })
                                            .on("afterOpen.xdsoft", function () {
                                                var e, t, o, n;
                                                C.timepicker &&
                                                    (I.find(".xdsoft_current").length ? (e = ".xdsoft_current") : I.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"),
                                                    e
                                                        ? ((t = J[0].clientHeight),
                                                          (o = I[0].offsetHeight) - t < (n = I.find(e).index() * C.timeHeightInTimePicker + 1) && (n = o - t),
                                                          J.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (o - t)]))
                                                        : J.trigger("scroll_element.xdsoft_scroller", [0]));
                                            }),
                                        (r = 0),
                                        E.on("touchend click.xdsoft", "td", function (t) {
                                            t.stopPropagation(), (r += 1);
                                            var n = e(this),
                                                a = P.currentTime;
                                            if ((null == a && ((P.currentTime = P.now()), (a = P.currentTime)), n.hasClass("xdsoft_disabled"))) return !1;
                                            a.setDate(1),
                                                a.setFullYear(n.data("year")),
                                                a.setMonth(n.data("month")),
                                                a.setDate(n.data("date")),
                                                z.trigger("select.xdsoft", [a]),
                                                o.val(P.str()),
                                                C.onSelectDate && e.isFunction(C.onSelectDate) && C.onSelectDate.call(z, P.currentTime, z.data("input"), t),
                                                z.data("changed", !0),
                                                z.trigger("xchange.xdsoft"),
                                                z.trigger("changedatetime.xdsoft"),
                                                (r > 1 || !0 === C.closeOnDateSelect || (!1 === C.closeOnDateSelect && !C.timepicker)) && !C.inline && z.trigger("close.xdsoft"),
                                                setTimeout(function () {
                                                    r = 0;
                                                }, 200);
                                        }),
                                        I.on("touchstart", "div", function (e) {
                                            this.touchMoved = !1;
                                        })
                                            .on("touchmove", "div", G)
                                            .on("touchend click.xdsoft", "div", function (t) {
                                                if (!this.touchMoved) {
                                                    t.stopPropagation();
                                                    var o = e(this),
                                                        n = P.currentTime;
                                                    if ((null == n && ((P.currentTime = P.now()), (n = P.currentTime)), o.hasClass("xdsoft_disabled"))) return !1;
                                                    n.setHours(o.data("hour")),
                                                        n.setMinutes(o.data("minute")),
                                                        z.trigger("select.xdsoft", [n]),
                                                        z.data("input").val(P.str()),
                                                        C.onSelectTime && e.isFunction(C.onSelectTime) && C.onSelectTime.call(z, P.currentTime, z.data("input"), t),
                                                        z.data("changed", !0),
                                                        z.trigger("xchange.xdsoft"),
                                                        z.trigger("changedatetime.xdsoft"),
                                                        !0 !== C.inline && !0 === C.closeOnTimeSelect && z.trigger("close.xdsoft");
                                                }
                                            }),
                                        Y.on("mousewheel.xdsoft", function (e) {
                                            return !C.scrollMonth || (e.deltaY < 0 ? P.nextMonth() : P.prevMonth(), !1);
                                        }),
                                        o.on("mousewheel.xdsoft", function (e) {
                                            return (
                                                !C.scrollInput ||
                                                (!C.datepicker && C.timepicker
                                                    ? ((l = I.find(".xdsoft_current").length ? I.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY >= 0 && l + e.deltaY < I.children().length && (l += e.deltaY),
                                                      I.children().eq(l).length && I.children().eq(l).trigger("mousedown"),
                                                      !1)
                                                    : C.datepicker && !C.timepicker
                                                    ? (Y.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), o.val && o.val(P.str()), z.trigger("changedatetime.xdsoft"), !1)
                                                    : void 0)
                                            );
                                        }),
                                        z
                                            .on("changedatetime.xdsoft", function (t) {
                                                if (C.onChangeDateTime && e.isFunction(C.onChangeDateTime)) {
                                                    var o = z.data("input");
                                                    C.onChangeDateTime.call(z, P.currentTime, o, t), delete C.value, o.trigger("change");
                                                }
                                            })
                                            .on("generate.xdsoft", function () {
                                                C.onGenerate && e.isFunction(C.onGenerate) && C.onGenerate.call(z, P.currentTime, z.data("input")), q && (z.trigger("afterOpen.xdsoft"), (q = !1));
                                            })
                                            .on("click.xdsoft", function (e) {
                                                e.stopPropagation();
                                            }),
                                        (l = 0),
                                        (F = function (e, t) {
                                            do {
                                                if (!(e = e.parentNode) || !1 === t(e)) break;
                                            } while ("HTML" !== e.nodeName);
                                        }),
                                        (i = function () {
                                            var t, o, n, a, s, r, l, i, d, m, u, c, f;
                                            if (
                                                ((t = (i = z.data("input")).offset()),
                                                (o = i[0]),
                                                (m = "top"),
                                                (n = t.top + o.offsetHeight - 1),
                                                (a = t.left),
                                                (s = "absolute"),
                                                (d = e(C.contentWindow).width()),
                                                (c = e(C.contentWindow).height()),
                                                (f = e(C.contentWindow).scrollTop()),
                                                C.ownerDocument.documentElement.clientWidth - t.left < Y.parent().outerWidth(!0))
                                            ) {
                                                var h = Y.parent().outerWidth(!0) - o.offsetWidth;
                                                a -= h;
                                            }
                                            "rtl" === i.parent().css("direction") && (a -= z.outerWidth() - i.outerWidth()),
                                                C.fixed
                                                    ? ((n -= f), (a -= e(C.contentWindow).scrollLeft()), (s = "fixed"))
                                                    : ((l = !1),
                                                      F(o, function (e) {
                                                          return null !== e && ("fixed" === C.contentWindow.getComputedStyle(e).getPropertyValue("position") ? ((l = !0), !1) : void 0);
                                                      }),
                                                      l && !C.insideParent
                                                          ? ((s = "fixed"), n + z.outerHeight() > c + f ? ((m = "bottom"), (n = c + f - t.top)) : (n -= f))
                                                          : n + z[0].offsetHeight > c + f && (n = t.top - z[0].offsetHeight + 1),
                                                      n < 0 && (n = 0),
                                                      a + o.offsetWidth > d && (a = d - o.offsetWidth)),
                                                (r = z[0]),
                                                F(r, function (e) {
                                                    if ("relative" === C.contentWindow.getComputedStyle(e).getPropertyValue("position") && d >= e.offsetWidth) return (a -= (d - e.offsetWidth) / 2), !1;
                                                }),
                                                (u = { position: s, left: C.insideParent ? o.offsetLeft : a, top: "", bottom: "" }),
                                                C.insideParent ? (u[m] = o.offsetTop + o.offsetHeight) : (u[m] = n),
                                                z.css(u);
                                        }),
                                        z
                                            .on("open.xdsoft", function (t) {
                                                var o = !0;
                                                C.onShow && e.isFunction(C.onShow) && (o = C.onShow.call(z, P.currentTime, z.data("input"), t)),
                                                    !1 !== o &&
                                                        (z.show(),
                                                        i(),
                                                        e(C.contentWindow).off("resize.xdsoft", i).on("resize.xdsoft", i),
                                                        C.closeOnWithoutClick &&
                                                            e([C.ownerDocument.body, C.contentWindow]).on("touchstart mousedown.xdsoft", function t() {
                                                                z.trigger("close.xdsoft"), e([C.ownerDocument.body, C.contentWindow]).off("touchstart mousedown.xdsoft", t);
                                                            }));
                                            })
                                            .on("close.xdsoft", function (t) {
                                                var o = !0;
                                                H.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(),
                                                    C.onClose && e.isFunction(C.onClose) && (o = C.onClose.call(z, P.currentTime, z.data("input"), t)),
                                                    !1 === o || C.opened || C.inline || z.hide(),
                                                    t.stopPropagation();
                                            })
                                            .on("toggle.xdsoft", function () {
                                                z.is(":visible") ? z.trigger("close.xdsoft") : z.trigger("open.xdsoft");
                                            })
                                            .data("input", o),
                                        (R = 0),
                                        z.data("xdsoft_datetime", P),
                                        z.setOptions(C),
                                        P.setCurrentTime(V()),
                                        o
                                            .data("xdsoft_datetimepicker", z)
                                            .on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function () {
                                                o.is(":disabled") ||
                                                    (o.data("xdsoft_datetimepicker").is(":visible") && C.closeOnInputClick) ||
                                                    (C.openOnFocus &&
                                                        (clearTimeout(R),
                                                        (R = setTimeout(function () {
                                                            o.is(":disabled") || ((q = !0), P.setCurrentTime(V(), !0), C.mask && U(C), z.trigger("open.xdsoft"));
                                                        }, 100))));
                                            })
                                            .on("keydown.xdsoft", function (t) {
                                                var o,
                                                    n = t.which;
                                                return -1 !== [p].indexOf(n) && C.enterLikeTab
                                                    ? ((o = e("input:visible,textarea:visible,button:visible,a:visible")), z.trigger("close.xdsoft"), o.eq(o.index(this) + 1).focus(), !1)
                                                    : -1 !== [D].indexOf(n)
                                                    ? (z.trigger("close.xdsoft"), !0)
                                                    : void 0;
                                            })
                                            .on("blur.xdsoft", function () {
                                                z.trigger("close.xdsoft");
                                            });
                                }),
                                (l = function (t) {
                                    var o = t.data("xdsoft_datetimepicker");
                                    o &&
                                        (o.data("xdsoft_datetime", null),
                                        o.remove(),
                                        t.data("xdsoft_datetimepicker", null).off(".xdsoft"),
                                        e(C.contentWindow).off("resize.xdsoft"),
                                        e([C.contentWindow, C.ownerDocument.body]).off("mousedown.xdsoft touchstart"),
                                        t.unmousewheel && t.unmousewheel());
                                }),
                                e(C.ownerDocument)
                                    .off("keydown.xdsoftctrl keyup.xdsoftctrl")
                                    .off("keydown.xdsoftcmd keyup.xdsoftcmd")
                                    .on("keydown.xdsoftctrl", function (e) {
                                        e.keyCode === h && (W = !0);
                                    })
                                    .on("keyup.xdsoftctrl", function (e) {
                                        e.keyCode === h && (W = !1);
                                    })
                                    .on("keydown.xdsoftcmd", function (e) {
                                        e.keyCode;
                                    })
                                    .on("keyup.xdsoftcmd", function (e) {
                                        e.keyCode;
                                    }),
                                this.each(function () {
                                    var o,
                                        s = e(this).data("xdsoft_datetimepicker");
                                    if (s) {
                                        if ("string" === e.type(t))
                                            switch (t) {
                                                case "show":
                                                    e(this).select().focus(), s.trigger("open.xdsoft");
                                                    break;
                                                case "hide":
                                                    s.trigger("close.xdsoft");
                                                    break;
                                                case "toggle":
                                                    s.trigger("toggle.xdsoft");
                                                    break;
                                                case "destroy":
                                                    l(e(this));
                                                    break;
                                                case "reset":
                                                    (this.value = this.defaultValue),
                                                        (this.value && s.data("xdsoft_datetime").isValidDate(n.parseDate(this.value, C.format))) || s.data("changed", !1),
                                                        s.data("xdsoft_datetime").setCurrentTime(this.value);
                                                    break;
                                                case "validate":
                                                    s.data("input").trigger("blur.xdsoft");
                                                    break;
                                                default:
                                                    s[t] && e.isFunction(s[t]) && (i = s[t](a));
                                            }
                                        else s.setOptions(t);
                                        return 0;
                                    }
                                    "string" !== e.type(t) &&
                                        (!C.lazyInit || C.open || C.inline
                                            ? r(e(this))
                                            : (o = e(this)).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function e() {
                                                  o.is(":disabled") ||
                                                      o.data("xdsoft_datetimepicker") ||
                                                      (clearTimeout(P),
                                                      (P = setTimeout(function () {
                                                          o.data("xdsoft_datetimepicker") || r(o), o.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", e).trigger("open.xdsoft");
                                                      }, 100)));
                                              }));
                                }),
                                i
                            );
                        }),
                        (e.fn.datetimepicker.defaults = o);
                }),
                    "function" == typeof define && o("./node_modules/webpack-stream/node_modules/webpack/buildin/amd-options.js")
                        ? define(["jquery", "jquery-mousewheel"], m)
                        : "object" === ("undefined" == typeof exports ? "undefined" : d()(exports))
                        ? (e.exports = m(o("./node_modules/jquery/dist/jquery.js")))
                        : m(jQuery),
                    (function (t) {
                        "function" == typeof define && o("./node_modules/webpack-stream/node_modules/webpack/buildin/amd-options.js")
                            ? define(["jquery"], t)
                            : "object" === ("undefined" == typeof exports ? "undefined" : d()(exports))
                            ? (e.exports = t)
                            : t(jQuery);
                    })(function (e) {
                        var t,
                            o,
                            n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            s = Array.prototype.slice;
                        if (e.event.fixHooks) for (var r = n.length; r; ) e.event.fixHooks[n[--r]] = e.event.mouseHooks;
                        var l = (e.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function () {
                                if (this.addEventListener) for (var t = a.length; t; ) this.addEventListener(a[--t], i, !1);
                                else this.onmousewheel = i;
                                e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this));
                            },
                            teardown: function () {
                                if (this.removeEventListener) for (var t = a.length; t; ) this.removeEventListener(a[--t], i, !1);
                                else this.onmousewheel = null;
                                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height");
                            },
                            getLineHeight: function (t) {
                                var o = e(t),
                                    n = o["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                                return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(o.css("fontSize"), 10) || 16;
                            },
                            getPageHeight: function (t) {
                                return e(t).height();
                            },
                            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
                        });
                        function i(n) {
                            var a,
                                r = n || window.event,
                                i = s.call(arguments, 1),
                                u = 0,
                                c = 0,
                                f = 0,
                                h = 0,
                                g = 0;
                            if (
                                (((n = e.event.fix(r)).type = "mousewheel"),
                                "detail" in r && (f = -1 * r.detail),
                                "wheelDelta" in r && (f = r.wheelDelta),
                                "wheelDeltaY" in r && (f = r.wheelDeltaY),
                                "wheelDeltaX" in r && (c = -1 * r.wheelDeltaX),
                                "axis" in r && r.axis === r.HORIZONTAL_AXIS && ((c = -1 * f), (f = 0)),
                                (u = 0 === f ? c : f),
                                "deltaY" in r && (u = f = -1 * r.deltaY),
                                "deltaX" in r && ((c = r.deltaX), 0 === f && (u = -1 * c)),
                                0 !== f || 0 !== c)
                            ) {
                                if (1 === r.deltaMode) {
                                    var p = e.data(this, "mousewheel-line-height");
                                    (u *= p), (f *= p), (c *= p);
                                } else if (2 === r.deltaMode) {
                                    var j = e.data(this, "mousewheel-page-height");
                                    (u *= j), (f *= j), (c *= j);
                                }
                                if (
                                    ((a = Math.max(Math.abs(f), Math.abs(c))),
                                    (!o || a < o) && ((o = a), m(r, a) && (o /= 40)),
                                    m(r, a) && ((u /= 40), (c /= 40), (f /= 40)),
                                    (u = Math[u >= 1 ? "floor" : "ceil"](u / o)),
                                    (c = Math[c >= 1 ? "floor" : "ceil"](c / o)),
                                    (f = Math[f >= 1 ? "floor" : "ceil"](f / o)),
                                    l.settings.normalizeOffset && this.getBoundingClientRect)
                                ) {
                                    var v = this.getBoundingClientRect();
                                    (h = n.clientX - v.left), (g = n.clientY - v.top);
                                }
                                return (
                                    (n.deltaX = c),
                                    (n.deltaY = f),
                                    (n.deltaFactor = o),
                                    (n.offsetX = h),
                                    (n.offsetY = g),
                                    (n.deltaMode = 0),
                                    i.unshift(n, u, c, f),
                                    t && clearTimeout(t),
                                    (t = setTimeout(d, 200)),
                                    (e.event.dispatch || e.event.handle).apply(this, i)
                                );
                            }
                        }
                        function d() {
                            o = null;
                        }
                        function m(e, t) {
                            return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
                        }
                        e.fn.extend({
                            mousewheel: function (e) {
                                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
                            },
                            unmousewheel: function (e) {
                                return this.unbind("mousewheel", e);
                            },
                        });
                    });
            }.call(this, o("./node_modules/webpack-stream/node_modules/webpack/buildin/harmony-module.js")(e));
    },
    "./src/js/vendor/vh-fix.js": function (e, t, o) {
        "use strict";
        o.r(t),
            o.d(t, "vhFix", function () {
                return n;
            });
        var n = function () {
            if (!window.MSInputMethodContext || !document.documentMode) {
                var e = window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(e, "px")),
                    window.addEventListener("resize", function () {
                        (e = window.innerHeight), document.documentElement.style.setProperty("--vh", "".concat(e, "px"));
                    });
            }
        };
    },
});
