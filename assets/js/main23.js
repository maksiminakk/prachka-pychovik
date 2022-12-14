/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
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
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/js/components/counter.js":
/*!**************************************!*\
  !*** ./src/js/components/counter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var minus = $('.minus');
var plus = $('.plus');
var cart = $('.js-price--add');
var sum = 0;

function counterUp(e) {
  var target = $(e.currentTarget);
  var targetCounter = target.prev('.value');
  var targetVal = parseInt(targetCounter.text());
  targetCounter.text(targetVal + 1);

  if (targetVal >= 0) {
    var price = parseFloat(target.data('price'));
    sum += price;
  }

  totalView();
}

function counterDown(e) {
  var target = $(e.currentTarget);
  var targetCounter = target.next('.value');
  var targetVal = parseInt(targetCounter.text());

  if (targetVal > 0) {
    targetCounter.text(targetVal - 1);
    var price = parseFloat(target.data('price'));
    sum -= price;
  }

  totalView();
}

function totalView() {
  var total = $('.total');
  $('.prices').fadeIn();

  if (!isNaN(sum)) {
    if (sum < 1500) {
      total.html(sum + '&#8381;&nbsp;+&nbsp;390&#8381;&nbsp;????????????????');

      if (cart) {
        cart.html(sum + '&#8381;&nbsp;+&nbsp;390&#8381;&nbsp;????????????????');
      }
    } else {
      total.html(sum + '&#8381;');

      if (cart) {
        cart.html(sum + '&#8381;');
      }
    }

    if (sum == 0) {
      total.html('');
      $('.prices').fadeOut();
    }
  }
}

plus.on('click', counterUp);
minus.on('click', counterDown);

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

$('.js-modal--open').on('click', function () {
  $('.modal').show();

  if ($(window).width() > 1023) {
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.find('.modal'), 'modal');
  }
});
$('.js-modal--close').on('click', function () {
  $('.modal').hide();

  if ($(window).width() > 1023) {
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.find('.modal'), 'modal');
  }
});

/***/ }),

/***/ "./src/js/components/priceadd.js":
/*!***************************************!*\
  !*** ./src/js/components/priceadd.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init = function init() {
  var sum = 0;
  var cart = $('.js-price--add');

  function addPrice(e) {
    var $this = $(e.currentTarget);
    var $price = parseFloat($this.data('price'));
    var total = sum += $price;
    $('.prices').fadeIn();

    if (!isNaN(sum)) {
      if (sum < 1500) {
        cart.html(sum + '&#8381;&nbsp;+&nbsp;390&#8381;&nbsp;????????????????');
      } else {
        cart.html(sum + '&#8381;');
      }

      if (sum == 0) {
        cart.html('');
      }
    }
  }

  function closePrice() {
    $('.prices').fadeOut();
  }

  $('.js-cart-price').on('click', addPrice);
  $('.prices__close').on('click', closePrice);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function toggleBlock(event) {
  var target = $(event.currentTarget);
  var targetBody = target.parent().find('.js-toggle--block');
  targetBody.slideToggle();
}

$('.js-toggle--click').on('click', toggleBlock);

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);

vars.isMobile = function () {
  return innerWidth <= 1024;
};

vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};

vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};

vars.winWidth = window.innerWidth;
/**
* ???????????????? ?????????? ???? ????????????????????????
* @param {string} text ????????????????????????, ???????????? ?????? ??????????????
* @returns {string} ?????????????????? ????????????
*/

vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};
/**
* ?????????????? ???????? ????????????
* @param {string} name ????????????????????????, ???????????????? ????????????
* @param {string} value ????????????????????????, ???????????????? ????????????
* @param {string} days ????????????????????????, ?????????? ?????? ??????????
*/


vars.setCookie = function (name, value, days) {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }

  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};
/**
* ???????????????? ???????? ????????????
* @param {string} name ????????????????????????, ???????????????? ????????????
*/


vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};
/**
* ?????????????? ???????? ????????????
* @param {string} name ????????????????????????, ???????????????? ????????????
*/


vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};

var dataScrollLocks;
/**
* ?????????????????? ???????????? ????????????????
* ?????????????????? ?????? ?????????????????????????? ?????????????????? ????????
* @param {boolean} state ????????????????????????
* @param {string} element ????????????????????????, ?????????????? ???????????????? ?????????? ?????????????????? ????????????
* @param {string} name ????????????????????????????, ????????,
* ?????????? ???????? ?????????????????????? ?????????????????? ???????? ???????????? ?????????????? ????????
*/

vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;

  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }

  var scrollLocks = dataScrollLocks;

  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);

    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};
/**
* ???????????? ???? ????????????????
* @param {string} $container ????????????????????????, ?????????????? ?? ???????????????? ?????????? ??????????????????
* @param {string|number} time ????????????????????????????, ?????????? ??????????????
* @param {string|number} offset ????????????????????????????, ???????????????? ?????????????? ?????????? ???????? + ?????? -
*/


vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};

var scrollDiv;
/**
* ???????????????? ???????????? ???????????????????? ???????? ???? ????????
* @returns {number} ???????????? ????????????????????
*/

vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;

  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
/**
* ???????????? ???????? ???????????????? ???? ??????????
* @returns {boolean}
*/


function hasHoverSupport() {
  var hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}
/**
* ?????????????????????????????? ?????????????????????? ????????????
*/


function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_toggle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/counter */ "./src/js/components/counter.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_counter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popup */ "./src/js/components/popup.js");
/* harmony import */ var _components_priceadd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/priceadd */ "./src/js/components/priceadd.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _vendor_jquery_datetimepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/jquery.datetimepicker */ "./src/js/vendor/jquery.datetimepicker.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");






 // import './components/social';



 // import {actualYear} from './modules/actualYear';
// import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
// import scrollToAnchor from './modules/scrollToAnchor';



Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_6__["ieFix"])();
Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_7__["vhFix"])(); // actualYear();
// scrollToAnchor.init();

_components_priceadd__WEBPACK_IMPORTED_MODULE_5__["default"].init(); // header.init();
// lazyLoading.init();

$(document).ready(function () {
  moment__WEBPACK_IMPORTED_MODULE_9__().format('DD-MM-YYYY HH:mm');
  moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('ru');
  moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('ru', {
    calendar: {
      lastDay: '[??????????,]DD MMMM [??] HH:mm',
      // The day before ( Yesterday at 2:30 AM )
      sameDay: '[??????????????,]DD MMMM [??] HH:mm',
      nextDay: '[????????????,]DD MMMM [??] 09:00',
      nextWeek: 'ddd[,] DD MMMM [??] HH:mm',
      lastWeek: 'ddd[,] DD MMMM [??] HH:mm',
      sameElse: 'ddd[,] DD MMMM [??] HH:mm'
    }
  });
  var tomorrow = new Date();
  var nextDay = tomorrow.setDate(tomorrow.getDate() + 1);

  function setToday(current_time) {
    if (current_time) {
      var day = moment__WEBPACK_IMPORTED_MODULE_9__(current_time).calendar();
      $('.day').html(day);
    } else {
      $('.day').html(moment__WEBPACK_IMPORTED_MODULE_9__(nextDay).calendar());
    }
  }

  $('.day').html(moment__WEBPACK_IMPORTED_MODULE_9__(nextDay).calendar());
  $.datetimepicker.setLocale('ru');
  $('.date-time').datetimepicker({
    ownerDocument: document,
    contentWindow: window,
    format: 'd-m-Y H:i',
    formatDate: 'd-m-Y',
    dayOfWeekStart: 1,
    startDate: nextDay,
    closeOnDateSelect: false,
    closeOnTimeSelect: true,
    closeOnWithoutClick: true,
    closeOnInputClick: true,
    openOnFocus: true,
    minDate: nextDay,
    minTime: '09:00',
    maxTime: '20:00',
    defaultTime: '09:00',
    allowTimes: ['09:00', '14:00'],
    lang: 'ru',
    onChangeDateTime: function onChangeDateTime(current_time) {
      setToday(current_time);
    },
    onGenerate: function onGenerate() {
      var times = ['09:00-14:00', '14:00-19:00', '09:00-14:00', '14:00-19:00'];
      var timer = $('.xdsoft_time');
      timer.each(function (i) {
        $(this).text(times[i]);
      }); // $('.date-time').val(moment(nextDay))
    }
  });
  var items = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(items, function (element) {
    var phoneMask = new imask__WEBPACK_IMPORTED_MODULE_10__["default"](element, {
      mask: '+{7}(000)000-00-00',
      placeholder: {
        show: 'always'
      }
    });
  }); // footer dropdown

  $('.js-dropdown').on('click', function (e) {
    var $target = $(e.currentTarget);
    $target.next('.footer__submenu').slideToggle();
  });
  $(function () {
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && lastScrollTop > 0) {
        // downscroll code
        $(".nav").addClass('nav--show');
      } else {
        // upscroll code
        $(".nav").removeClass('nav--show');
      }

      lastScrollTop = st;
    });
  });
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

 // import objectFitImages from 'object-fit-images';
// import objectFitVideos from 'object-fit-videos';


svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()(); // objectFitImages();
// objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a; // window.objectFitImages = objectFitImages;
// window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */

/**
* ?????????? ???????????? ???????????? ?????? ie,
* ?????????? ???? ???????? ???????????? ??????????????
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/
var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    } // thanks IE8


    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    if ("now" in window.performance == false) {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })(); // forEach


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // closest


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./src/js/vendor/jquery.datetimepicker.js":
/*!************************************************!*\
  !*** ./src/js/vendor/jquery.datetimepicker.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2016
 * @version 1.3.4
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
var DateFormatter;
!function () {
  "use strict";

  var t, _e, _r, n, a, u, i;

  u = 864e5, i = 3600, t = function t(_t, e) {
    return "string" == typeof _t && "string" == typeof e && _t.toLowerCase() === e.toLowerCase();
  }, _e = function e(t, r, n) {
    var a = n || "0",
        u = t.toString();
    return u.length < r ? _e(a + u, r) : u;
  }, _r = function r(t) {
    var e, n;

    for (t = t || {}, e = 1; e < arguments.length; e++) {
      if (n = arguments[e]) for (var a in n) {
        n.hasOwnProperty(a) && ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(n[a]) ? _r(t[a], n[a]) : t[a] = n[a]);
      }
    }

    return t;
  }, n = function n(t, e) {
    for (var r = 0; r < e.length; r++) {
      if (e[r].toLowerCase() === t.toLowerCase()) return r;
    }

    return -1;
  }, a = {
    dateSettings: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      meridiem: ["AM", "PM"],
      ordinal: function ordinal(t) {
        var e = t % 10,
            r = {
          1: "st",
          2: "nd",
          3: "rd"
        };
        return 1 !== Math.floor(t % 100 / 10) && r[e] ? r[e] : "th";
      }
    },
    separators: /[ \-+\/\.T:@]/g,
    validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
    intParts: /[djwNzmnyYhHgGis]/g,
    tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    tzClip: /[^-+\dA-Z]/g
  }, DateFormatter = function DateFormatter(t) {
    var e = this,
        n = _r(a, t);

    e.dateSettings = n.dateSettings, e.separators = n.separators, e.validParts = n.validParts, e.intParts = n.intParts, e.tzParts = n.tzParts, e.tzClip = n.tzClip;
  }, DateFormatter.prototype = {
    constructor: DateFormatter,
    getMonth: function getMonth(t) {
      var e,
          r = this;
      return e = n(t, r.dateSettings.monthsShort) + 1, 0 === e && (e = n(t, r.dateSettings.months) + 1), e;
    },
    parseDate: function parseDate(e, r) {
      var n,
          a,
          u,
          i,
          s,
          o,
          c,
          f,
          l,
          h,
          d = this,
          g = !1,
          m = !1,
          p = d.dateSettings,
          y = {
        date: null,
        year: null,
        month: null,
        day: null,
        hour: 0,
        min: 0,
        sec: 0
      };
      if (!e) return null;
      if (e instanceof Date) return e;
      if ("U" === r) return u = parseInt(e), u ? new Date(1e3 * u) : e;

      switch (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)) {
        case "number":
          return new Date(e);

        case "string":
          break;

        default:
          return null;
      }

      if (n = r.match(d.validParts), !n || 0 === n.length) throw new Error("Invalid date format definition.");

      for (a = e.replace(d.separators, "\x00").split("\x00"), u = 0; u < a.length; u++) {
        switch (i = a[u], s = parseInt(i), n[u]) {
          case "y":
          case "Y":
            if (!s) return null;
            l = i.length, y.year = 2 === l ? parseInt((70 > s ? "20" : "19") + i) : s, g = !0;
            break;

          case "m":
          case "n":
          case "M":
          case "F":
            if (isNaN(s)) {
              if (o = d.getMonth(i), !(o > 0)) return null;
              y.month = o;
            } else {
              if (!(s >= 1 && 12 >= s)) return null;
              y.month = s;
            }

            g = !0;
            break;

          case "d":
          case "j":
            if (!(s >= 1 && 31 >= s)) return null;
            y.day = s, g = !0;
            break;

          case "g":
          case "h":
            if (c = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, h = a[c], c > -1) f = t(h, p.meridiem[0]) ? 0 : t(h, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && f > -1 ? y.hour = s + f - 1 : s >= 0 && 23 >= s && (y.hour = s);else {
              if (!(s >= 0 && 23 >= s)) return null;
              y.hour = s;
            }
            m = !0;
            break;

          case "G":
          case "H":
            if (!(s >= 0 && 23 >= s)) return null;
            y.hour = s, m = !0;
            break;

          case "i":
            if (!(s >= 0 && 59 >= s)) return null;
            y.min = s, m = !0;
            break;

          case "s":
            if (!(s >= 0 && 59 >= s)) return null;
            y.sec = s, m = !0;
        }
      }

      if (g === !0 && y.year && y.month && y.day) y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0);else {
        if (m !== !0) return null;
        y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0);
      }
      return y.date;
    },
    guessDate: function guessDate(t, e) {
      if ("string" != typeof t) return t;
      var r,
          n,
          a,
          u,
          i,
          s,
          o = this,
          c = t.replace(o.separators, "\x00").split("\x00"),
          f = /^[djmn]/g,
          l = e.match(o.validParts),
          h = new Date(),
          d = 0;
      if (!f.test(l[0])) return t;

      for (a = 0; a < c.length; a++) {
        if (d = 2, i = c[a], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;

        switch (a) {
          case 0:
            "m" === l[0] || "n" === l[0] ? h.setMonth(s - 1) : h.setDate(s);
            break;

          case 1:
            "m" === l[0] || "n" === l[0] ? h.setDate(s) : h.setMonth(s - 1);
            break;

          case 2:
            if (n = h.getFullYear(), r = i.length, d = 4 > r ? r : 4, n = parseInt(4 > r ? n.toString().substr(0, 4 - r) + i : i.substr(0, 4)), !n) return null;
            h.setFullYear(n);
            break;

          case 3:
            h.setHours(s);
            break;

          case 4:
            h.setMinutes(s);
            break;

          case 5:
            h.setSeconds(s);
        }

        u = i.substr(d), u.length > 0 && c.splice(a + 1, 0, u);
      }

      return h;
    },
    parseFormat: function parseFormat(t, r) {
      var n,
          a = this,
          s = a.dateSettings,
          o = /\\?(.?)/gi,
          _c = function c(t, e) {
        return n[t] ? n[t]() : e;
      };

      return n = {
        d: function d() {
          return _e(n.j(), 2);
        },
        D: function D() {
          return s.daysShort[n.w()];
        },
        j: function j() {
          return r.getDate();
        },
        l: function l() {
          return s.days[n.w()];
        },
        N: function N() {
          return n.w() || 7;
        },
        w: function w() {
          return r.getDay();
        },
        z: function z() {
          var t = new Date(n.Y(), n.n() - 1, n.j()),
              e = new Date(n.Y(), 0, 1);
          return Math.round((t - e) / u);
        },
        W: function W() {
          var t = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
              r = new Date(t.getFullYear(), 0, 4);
          return _e(1 + Math.round((t - r) / u / 7), 2);
        },
        F: function F() {
          return s.months[r.getMonth()];
        },
        m: function m() {
          return _e(n.n(), 2);
        },
        M: function M() {
          return s.monthsShort[r.getMonth()];
        },
        n: function n() {
          return r.getMonth() + 1;
        },
        t: function t() {
          return new Date(n.Y(), n.n(), 0).getDate();
        },
        L: function L() {
          var t = n.Y();
          return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 1 : 0;
        },
        o: function o() {
          var t = n.n(),
              e = n.W(),
              r = n.Y();
          return r + (12 === t && 9 > e ? 1 : 1 === t && e > 9 ? -1 : 0);
        },
        Y: function Y() {
          return r.getFullYear();
        },
        y: function y() {
          return n.Y().toString().slice(-2);
        },
        a: function a() {
          return n.A().toLowerCase();
        },
        A: function A() {
          var t = n.G() < 12 ? 0 : 1;
          return s.meridiem[t];
        },
        B: function B() {
          var t = r.getUTCHours() * i,
              n = 60 * r.getUTCMinutes(),
              a = r.getUTCSeconds();
          return _e(Math.floor((t + n + a + i) / 86.4) % 1e3, 3);
        },
        g: function g() {
          return n.G() % 12 || 12;
        },
        G: function G() {
          return r.getHours();
        },
        h: function h() {
          return _e(n.g(), 2);
        },
        H: function H() {
          return _e(n.G(), 2);
        },
        i: function i() {
          return _e(r.getMinutes(), 2);
        },
        s: function s() {
          return _e(r.getSeconds(), 2);
        },
        u: function u() {
          return _e(1e3 * r.getMilliseconds(), 6);
        },
        e: function e() {
          var t = /\((.*)\)/.exec(String(r))[1];
          return t || "Coordinated Universal Time";
        },
        I: function I() {
          var t = new Date(n.Y(), 0),
              e = Date.UTC(n.Y(), 0),
              r = new Date(n.Y(), 6),
              a = Date.UTC(n.Y(), 6);
          return t - e !== r - a ? 1 : 0;
        },
        O: function O() {
          var t = r.getTimezoneOffset(),
              n = Math.abs(t);
          return (t > 0 ? "-" : "+") + _e(100 * Math.floor(n / 60) + n % 60, 4);
        },
        P: function P() {
          var t = n.O();
          return t.substr(0, 3) + ":" + t.substr(3, 2);
        },
        T: function T() {
          var t = (String(r).match(a.tzParts) || [""]).pop().replace(a.tzClip, "");
          return t || "UTC";
        },
        Z: function Z() {
          return 60 * -r.getTimezoneOffset();
        },
        c: function c() {
          return "Y-m-d\\TH:i:sP".replace(o, _c);
        },
        r: function r() {
          return "D, d M Y H:i:s O".replace(o, _c);
        },
        U: function U() {
          return r.getTime() / 1e3 || 0;
        }
      }, _c(t, t);
    },
    formatDate: function formatDate(t, e) {
      var r,
          n,
          a,
          u,
          i,
          s = this,
          o = "",
          c = "\\";
      if ("string" == typeof t && (t = s.parseDate(t, e), !t)) return null;

      if (t instanceof Date) {
        for (a = e.length, r = 0; a > r; r++) {
          i = e.charAt(r), "S" !== i && i !== c && (r > 0 && e.charAt(r - 1) === c ? o += i : (u = s.parseFormat(i, t), r !== a - 1 && s.intParts.test(i) && "S" === e.charAt(r + 1) && (n = parseInt(u) || 0, u += s.dateSettings.ordinal(n)), o += u));
        }

        return o;
      }

      return "";
    }
  };
}();
/**
* @preserve jQuery DateTimePicker
* @homepage http://xdsoft.net/jqplugins/datetimepicker/
* @author Chupurnov Valeriy (<chupurnov@gmail.com>)
*/

/**
 * @param {jQuery} $
 */

var datetimepickerFactory = function datetimepickerFactory($) {
  'use strict';

  var default_options = {
    i18n: {
      ar: {
        // Arabic
        months: ["?????????? ????????????", "????????", "????????", "??????????", "????????", "????????????", "????????", "????", "??????????", "?????????? ??????????", "?????????? ????????????", "?????????? ??????????"],
        dayOfWeekShort: ["??", "??", "??", "??", "??", "??", "??"],
        dayOfWeek: ["??????????", "??????????????", "????????????????", "????????????????", "????????????", "????????????", "??????????", "??????????"]
      },
      ro: {
        // Romanian
        months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S??"],
        dayOfWeek: ["Duminic??", "Luni", "Mar??i", "Miercuri", "Joi", "Vineri", "S??mb??t??"]
      },
      id: {
        // Indonesian
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
      },
      is: {
        // Icelandic
        months: ["Jan??ar", "Febr??ar", "Mars", "Apr??l", "Ma??", "J??n??", "J??l??", "??g??st", "September", "Okt??ber", "N??vember", "Desember"],
        dayOfWeekShort: ["Sun", "M??n", "??ri??", "Mi??", "Fim", "F??s", "Lau"],
        dayOfWeek: ["Sunnudagur", "M??nudagur", "??ri??judagur", "Mi??vikudagur", "Fimmtudagur", "F??studagur", "Laugardagur"]
      },
      bg: {
        // Bulgarian
        months: ["????????????", "????????????????", "????????", "??????????", "??????", "??????", "??????", "????????????", "??????????????????", "????????????????", "??????????????", "????????????????"],
        dayOfWeekShort: ["????", "????", "????", "????", "????", "????", "????"],
        dayOfWeek: ["????????????", "????????????????????", "??????????????", "??????????", "??????????????????", "??????????", "????????????"]
      },
      fa: {
        // Persian/Farsi
        months: ['??????????????', '????????????????', '??????????', '??????', '??????????', '????????????', '??????', '????????', '??????', '????', '????????', '??????????'],
        dayOfWeekShort: ['????????????', '????????????', '???? ????????', '????????????????', '??????????????', '????????', '????????'],
        dayOfWeek: ["???????????????", "????????????", "???????????????", "????????????????", "?????????????????", "????????", "????????", "???????????????"]
      },
      ru: {
        // Russian
        months: ['????????????', '??????????????', '????????', '????????????', '??????', '????????', '????????', '????????????', '????????????????', '??????????????', '????????????', '??????????????'],
        dayOfWeekShort: ["????", "????", "????", "????", "????", "????", "????"],
        dayOfWeek: ["??????????????????????", "??????????????????????", "??????????????", "??????????", "??????????????", "??????????????", "??????????????"]
      },
      uk: {
        // Ukrainian
        months: ['????????????', '??????????', '????????????????', '??????????????', '??????????????', '??????????????', '????????????', '??????????????', '????????????????', '??????????????', '????????????????', '??????????????'],
        dayOfWeekShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
        dayOfWeek: ["????????????", "??????????????????", "????????????????", "????????????", "????????????", "??'????????????", "????????????"]
      },
      en: {
        // English
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      el: {
        // ????????????????
        months: ["????????????????????", "??????????????????????", "??????????????", "????????????????", "??????????", "??????????????", "??????????????", "??????????????????", "??????????????????????", "??????????????????", "??????????????????", "????????????????????"],
        dayOfWeekShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
        dayOfWeek: ["??????????????", "??????????????", "??????????", "??????????????", "????????????", "??????????????????", "??????????????"]
      },
      de: {
        // German
        months: ['Januar', 'Februar', 'M??rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
      },
      nl: {
        // Dutch
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
      },
      tr: {
        // Turkish
        months: ["Ocak", "??ubat", "Mart", "Nisan", "May??s", "Haziran", "Temmuz", "A??ustos", "Eyl??l", "Ekim", "Kas??m", "Aral??k"],
        dayOfWeekShort: ["Paz", "Pts", "Sal", "??ar", "Per", "Cum", "Cts"],
        dayOfWeek: ["Pazar", "Pazartesi", "Sal??", "??ar??amba", "Per??embe", "Cuma", "Cumartesi"]
      },
      fr: {
        //French
        months: ["Janvier", "F??vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao??t", "Septembre", "Octobre", "Novembre", "D??cembre"],
        dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
      },
      es: {
        // Spanish
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        dayOfWeekShort: ["Dom", "Lun", "Mar", "Mi??", "Jue", "Vie", "S??b"],
        dayOfWeek: ["Domingo", "Lunes", "Martes", "Mi??rcoles", "Jueves", "Viernes", "S??bado"]
      },
      th: {
        // Thai
        months: ['??????????????????', '??????????????????????????????', '??????????????????', '??????????????????', '?????????????????????', '????????????????????????', '?????????????????????', '?????????????????????', '?????????????????????', '??????????????????', '???????????????????????????', '?????????????????????'],
        dayOfWeekShort: ['??????.', '???.', '???.', '???.', '??????.', '???.', '???.'],
        dayOfWeek: ["?????????????????????", "??????????????????", "??????????????????", "?????????", "???????????????", "???????????????", "???????????????", "?????????????????????"]
      },
      pl: {
        // Polish
        months: ["stycze??", "luty", "marzec", "kwiecie??", "maj", "czerwiec", "lipiec", "sierpie??", "wrzesie??", "pa??dziernik", "listopad", "grudzie??"],
        dayOfWeekShort: ["nd", "pn", "wt", "??r", "cz", "pt", "sb"],
        dayOfWeek: ["niedziela", "poniedzia??ek", "wtorek", "??roda", "czwartek", "pi??tek", "sobota"]
      },
      pt: {
        // Portuguese
        months: ["Janeiro", "Fevereiro", "Mar??o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        dayOfWeek: ["Domingo", "Segunda", "Ter??a", "Quarta", "Quinta", "Sexta", "S??bado"]
      },
      ch: {
        // Simplified Chinese
        months: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
        dayOfWeekShort: ["???", "???", "???", "???", "???", "???", "???"]
      },
      se: {
        // Swedish
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["S??n", "M??n", "Tis", "Ons", "Tor", "Fre", "L??r"]
      },
      km: {
        // Khmer (???????????????????????????)
        months: ["???????????????", "??????????????????", "???????????????", "???????????????", "???????????????", "?????????????????????", "?????????????????????", "???????????????", "??????????????????", "???????????????", "????????????????????????", "???????????????"],
        dayOfWeekShort: ["???????????????", "??????????????????", "?????????????????????", "????????????", "??????????????????", "??????????????????", "????????????"],
        dayOfWeek: ["????????????????????????", "??????????????????", "?????????????????????", "????????????", "?????????????????????????????????", "??????????????????", "????????????"]
      },
      kr: {
        // Korean
        months: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
        dayOfWeekShort: ["???", "???", "???", "???", "???", "???", "???"],
        dayOfWeek: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"]
      },
      it: {
        // Italian
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        dayOfWeek: ["Domenica", "Luned??", "Marted??", "Mercoled??", "Gioved??", "Venerd??", "Sabato"]
      },
      da: {
        // Dansk
        months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["S??n", "Man", "Tir", "Ons", "Tor", "Fre", "L??r"],
        dayOfWeek: ["s??ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l??rdag"]
      },
      no: {
        // Norwegian
        months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        dayOfWeekShort: ["S??n", "Man", "Tir", "Ons", "Tor", "Fre", "L??r"],
        dayOfWeek: ['S??ndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'L??rdag']
      },
      ja: {
        // Japanese
        months: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
        dayOfWeekShort: ["???", "???", "???", "???", "???", "???", "???"],
        dayOfWeek: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"]
      },
      vi: {
        // Vietnamese
        months: ["Th??ng 1", "Th??ng 2", "Th??ng 3", "Th??ng 4", "Th??ng 5", "Th??ng 6", "Th??ng 7", "Th??ng 8", "Th??ng 9", "Th??ng 10", "Th??ng 11", "Th??ng 12"],
        dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayOfWeek: ["Ch??? nh???t", "Th??? hai", "Th??? ba", "Th??? t??", "Th??? n??m", "Th??? s??u", "Th??? b???y"]
      },
      sl: {
        // Sloven????ina
        months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "??et", "Pet", "Sob"],
        dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "??etrtek", "Petek", "Sobota"]
      },
      cs: {
        // ??e??tina
        months: ["Leden", "??nor", "B??ezen", "Duben", "Kv??ten", "??erven", "??ervenec", "Srpen", "Z??????", "????jen", "Listopad", "Prosinec"],
        dayOfWeekShort: ["Ne", "Po", "??t", "St", "??t", "P??", "So"]
      },
      hu: {
        // Hungarian
        months: ["Janu??r", "Febru??r", "M??rcius", "??prilis", "M??jus", "J??nius", "J??lius", "Augusztus", "Szeptember", "Okt??ber", "November", "December"],
        dayOfWeekShort: ["Va", "H??", "Ke", "Sze", "Cs", "P??", "Szo"],
        dayOfWeek: ["vas??rnap", "h??tf??", "kedd", "szerda", "cs??t??rt??k", "p??ntek", "szombat"]
      },
      az: {
        //Azerbaijanian (Azeri)
        months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
        dayOfWeekShort: ["B", "Be", "??a", "??", "Ca", "C", "??"],
        dayOfWeek: ["Bazar", "Bazar ert??si", "????r????nb?? ax??am??", "????r????nb??", "C??m?? ax??am??", "C??m??", "????nb??"]
      },
      bs: {
        //Bosanski
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "??et", "Pet", "Sub"],
        dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "??etvrtak", "Petak", "Subota"]
      },
      ca: {
        //Catal??
        months: ["Gener", "Febrer", "Mar??", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
      },
      'en-GB': {
        //English (British)
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      et: {
        //"Eesti"
        months: ["Jaanuar", "Veebruar", "M??rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
        dayOfWeek: ["P??hap??ev", "Esmasp??ev", "Teisip??ev", "Kolmap??ev", "Neljap??ev", "Reede", "Laup??ev"]
      },
      eu: {
        //Euskara
        months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
        dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
        dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
      },
      fi: {
        //Finnish (Suomi)
        months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes??kuu", "Hein??kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
      },
      gl: {
        //Galego
        months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
        dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
        dayOfWeek: ["Domingo", "Luns", "Martes", "M??rcores", "Xoves", "Venres", "S??bado"]
      },
      hr: {
        //Hrvatski
        months: ["Sije??anj", "Velja??a", "O??ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "??et", "Pet", "Sub"],
        dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "??etvrtak", "Petak", "Subota"]
      },
      ko: {
        //Korean (?????????)
        months: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
        dayOfWeekShort: ["???", "???", "???", "???", "???", "???", "???"],
        dayOfWeek: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"]
      },
      lt: {
        //Lithuanian (lietuvi??)
        months: ["Sausio", "Vasario", "Kovo", "Baland??io", "Gegu????s", "Bir??elio", "Liepos", "Rugpj????io", "Rugs??jo", "Spalio", "Lapkri??io", "Gruod??io"],
        dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "??e??"],
        dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre??iadienis", "Ketvirtadienis", "Penktadienis", "??e??tadienis"]
      },
      lv: {
        //Latvian (Latvie??u)
        months: ["Janv??ris", "Febru??ris", "Marts", "Apr??lis ", "Maijs", "J??nijs", "J??lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
        dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
        dayOfWeek: ["Sv??tdiena", "Pirmdiena", "Otrdiena", "Tre??diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
      },
      mk: {
        //Macedonian (????????????????????)
        months: ["??????????????", "????????????????", "????????", "??????????", "??????", "????????", "????????", "????????????", "??????????????????", "????????????????", "??????????????", "????????????????"],
        dayOfWeekShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
        dayOfWeek: ["????????????", "????????????????????", "??????????????", "??????????", "????????????????", "??????????", "????????????"]
      },
      mn: {
        //Mongolian (????????????)
        months: ["1-?? ??????", "2-?? ??????", "3-?? ??????", "4-?? ??????", "5-?? ??????", "6-?? ??????", "7-?? ??????", "8-?? ??????", "9-?? ??????", "10-?? ??????", "11-?? ??????", "12-?? ??????"],
        dayOfWeekShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
        dayOfWeek: ["??????????", "????????????", "????????????", "??????????", "????????????", "??????????", "??????"]
      },
      'pt-BR': {
        //Portugu??s(Brasil)
        months: ["Janeiro", "Fevereiro", "Mar??o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S??b"],
        dayOfWeek: ["Domingo", "Segunda", "Ter??a", "Quarta", "Quinta", "Sexta", "S??bado"]
      },
      sk: {
        //Sloven??ina
        months: ["Janu??r", "Febru??r", "Marec", "Apr??l", "M??j", "J??n", "J??l", "August", "September", "Okt??ber", "November", "December"],
        dayOfWeekShort: ["Ne", "Po", "Ut", "St", "??t", "Pi", "So"],
        dayOfWeek: ["Nede??a", "Pondelok", "Utorok", "Streda", "??tvrtok", "Piatok", "Sobota"]
      },
      sq: {
        //Albanian (Shqip)
        months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N??ntor", "Dhjetor"],
        dayOfWeekShort: ["Die", "H??n", "Mar", "M??r", "Enj", "Pre", "Shtu"],
        dayOfWeek: ["E Diel", "E H??n??", "E Mart??", "E M??rkur??", "E Enjte", "E Premte", "E Shtun??"]
      },
      'sr-YU': {
        //Serbian (Srpski)
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "??et", "Pet", "Sub"],
        dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "??etvrtak", "Petak", "Subota"]
      },
      sr: {
        //Serbian Cyrillic (????????????)
        months: ["????????????", "??????????????", "????????", "??????????", "??????", "??????", "??????", "????????????", "??????????????????", "??????????????", "????????????????", "????????????????"],
        dayOfWeekShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
        dayOfWeek: ["????????????", "??????????????????", "????????????", "??????????", "????????????????", "??????????", "????????????"]
      },
      sv: {
        //Svenska
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["S??n", "M??n", "Tis", "Ons", "Tor", "Fre", "L??r"],
        dayOfWeek: ["S??ndag", "M??ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L??rdag"]
      },
      'zh-TW': {
        //Traditional Chinese (????????????)
        months: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
        dayOfWeekShort: ["???", "???", "???", "???", "???", "???", "???"],
        dayOfWeek: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"]
      },
      zh: {
        //Simplified Chinese (????????????)
        months: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
        dayOfWeekShort: ["???", "???", "???", "???", "???", "???", "???"],
        dayOfWeek: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"]
      },
      ug: {
        // Uyghur(????????????????)
        months: ["1-??????", "2-??????", "3-??????", "4-??????", "5-??????", "6-??????", "7-??????", "8-??????", "9-??????", "10-??????", "11-??????", "12-??????"],
        dayOfWeek: ["????????????????", "??????????????", "????????????????", "????????????????", "????????????????", "????????", "??????????"]
      },
      he: {
        //Hebrew (??????????)
        months: ['??????????', '????????????', '??????', '??????????', '??????', '????????', '????????', '????????????', '????????????', '??????????????', '????????????', '??????????'],
        dayOfWeekShort: ['??\'', '??\'', '??\'', '??\'', '??\'', '??\'', '??????'],
        dayOfWeek: ["??????????", "??????", "??????????", "??????????", "??????????", "????????", "??????", "??????????"]
      },
      hy: {
        // Armenian
        months: ["??????????????", "??????????????", "????????", "??????????", "??????????", "????????????", "????????????", "??????????????", "??????????????????", "??????????????????", "????????????????", "??????????????????"],
        dayOfWeekShort: ["????", "??????", "??????", "??????", "??????", "????????", "??????"],
        dayOfWeek: ["????????????", "????????????????????", "??????????????????", "????????????????????", "??????????????????", "????????????", "??????????"]
      },
      kg: {
        // Kyrgyz
        months: ['?????????? ??????', '???????????? ??????', '???????????? ??????????', '?????? ??????????', '????????', '??????????', '????????', '?????? ????????', '?????? ????????', '???????????????? ??????', '?????????????? ??????', '???????????? ??????'],
        dayOfWeekShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
        dayOfWeek: ["??????????????", "??????????????", "??????????????", "??????????????", "????????????????", "????????", "??????????"]
      },
      rm: {
        // Romansh
        months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
        dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
        dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
      },
      ka: {
        // Georgian
        months: ['?????????????????????', '???????????????????????????', '???????????????', '??????????????????', '???????????????', '??????????????????', '??????????????????', '?????????????????????', '??????????????????????????????', '???????????????????????????', '????????????????????????', '???????????????????????????'],
        dayOfWeekShort: ["??????", "?????????", "????????????", "?????????", "?????????", "?????????", "?????????"],
        dayOfWeek: ["???????????????", "????????????????????????", "???????????????????????????", "???????????????????????????", "???????????????????????????", "???????????????????????????", "??????????????????"]
      }
    },
    ownerDocument: document,
    contentWindow: window,
    value: '',
    rtl: false,
    format: 'Y/m/d H:i',
    formatTime: 'H:i',
    formatDate: 'Y/m/d',
    startDate: false,
    // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
    step: 60,
    monthChangeSpinner: true,
    closeOnDateSelect: false,
    closeOnTimeSelect: true,
    closeOnWithoutClick: true,
    closeOnInputClick: true,
    openOnFocus: true,
    timepicker: true,
    datepicker: true,
    weeks: false,
    defaultTime: false,
    // use formatTime format (ex. '10:00' for formatTime:	'H:i')
    defaultDate: false,
    // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')
    minDate: false,
    maxDate: false,
    minTime: false,
    maxTime: false,
    minDateTime: false,
    maxDateTime: false,
    allowTimes: [],
    opened: false,
    initTime: true,
    inline: false,
    theme: '',
    touchMovedThreshold: 5,
    onSelectDate: function onSelectDate() {},
    onSelectTime: function onSelectTime() {},
    onChangeMonth: function onChangeMonth() {},
    onGetWeekOfYear: function onGetWeekOfYear() {},
    onChangeYear: function onChangeYear() {},
    onChangeDateTime: function onChangeDateTime() {},
    onShow: function onShow() {},
    onClose: function onClose() {},
    onGenerate: function onGenerate() {},
    withoutCopyright: true,
    inverseButton: false,
    hours12: false,
    next: 'xdsoft_next',
    prev: 'xdsoft_prev',
    dayOfWeekStart: 0,
    parentID: 'body',
    timeHeightInTimePicker: 25,
    timepickerScrollbar: true,
    todayButton: true,
    prevButton: true,
    nextButton: true,
    defaultSelect: true,
    scrollMonth: true,
    scrollTime: true,
    scrollInput: true,
    lazyInit: false,
    mask: false,
    validateOnBlur: true,
    allowBlank: true,
    yearStart: 1950,
    yearEnd: 2050,
    monthStart: 0,
    monthEnd: 11,
    style: '',
    id: '',
    fixed: false,
    roundTime: 'round',
    // ceil, floor
    className: '',
    weekends: [],
    highlightedDates: [],
    highlightedPeriods: [],
    allowDates: [],
    allowDateRe: null,
    disabledDates: [],
    disabledWeekDays: [],
    yearOffset: 0,
    beforeShowDay: null,
    enterLikeTab: true,
    showApplyButton: false,
    insideParent: false
  };
  var dateHelper = null,
      defaultDateHelper = null,
      globalLocaleDefault = 'en',
      globalLocale = 'en';
  var dateFormatterOptionsDefault = {
    meridiem: ['AM', 'PM']
  };

  var initDateFormatter = function initDateFormatter() {
    var locale = default_options.i18n[globalLocale],
        opts = {
      days: locale.dayOfWeek,
      daysShort: locale.dayOfWeekShort,
      months: locale.months,
      monthsShort: $.map(locale.months, function (n) {
        return n.substring(0, 3);
      })
    };

    if (typeof DateFormatter === 'function') {
      dateHelper = defaultDateHelper = new DateFormatter({
        dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
      });
    }
  };

  var dateFormatters = {
    moment: {
      default_options: {
        format: 'YYYY/MM/DD HH:mm',
        formatDate: 'YYYY/MM/DD',
        formatTime: 'HH:mm'
      },
      formatter: {
        parseDate: function parseDate(date, format) {
          if (isFormatStandard(format)) {
            return defaultDateHelper.parseDate(date, format);
          }

          var d = moment(date, format);
          return d.isValid() ? d.toDate() : false;
        },
        formatDate: function formatDate(date, format) {
          if (isFormatStandard(format)) {
            return defaultDateHelper.formatDate(date, format);
          }

          return moment(date).format(format);
        },
        formatMask: function formatMask(format) {
          return format.replace(/Y{4}/g, '9999').replace(/Y{2}/g, '99').replace(/M{2}/g, '19').replace(/D{2}/g, '39').replace(/H{2}/g, '29').replace(/m{2}/g, '59').replace(/s{2}/g, '59');
        }
      }
    }
  }; // for locale settings

  $.datetimepicker = {
    setLocale: function setLocale(locale) {
      var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;

      if (globalLocale !== newLocale) {
        globalLocale = newLocale; // reinit date formatter

        initDateFormatter();
      }
    },
    setDateFormatter: function setDateFormatter(dateFormatter) {
      if (typeof dateFormatter === 'string' && dateFormatters.hasOwnProperty(dateFormatter)) {
        var df = dateFormatters[dateFormatter];
        $.extend(default_options, df.default_options);
        dateHelper = df.formatter;
      } else {
        dateHelper = dateFormatter;
      }
    }
  };
  var standardFormats = {
    RFC_2822: 'D, d M Y H:i:s O',
    ATOM: 'Y-m-d\TH:i:sP',
    ISO_8601: 'Y-m-d\TH:i:sO',
    RFC_822: 'D, d M y H:i:s O',
    RFC_850: 'l, d-M-y H:i:s T',
    RFC_1036: 'D, d M y H:i:s O',
    RFC_1123: 'D, d M Y H:i:s O',
    RSS: 'D, d M Y H:i:s O',
    W3C: 'Y-m-d\TH:i:sP'
  };

  var isFormatStandard = function isFormatStandard(format) {
    return Object.values(standardFormats).indexOf(format) === -1 ? false : true;
  };

  $.extend($.datetimepicker, standardFormats); // first init date formatter

  initDateFormatter(); // fix for ie8

  if (!window.getComputedStyle) {
    window.getComputedStyle = function (el) {
      this.el = el;

      this.getPropertyValue = function (prop) {
        var re = /(-([a-z]))/g;

        if (prop === 'float') {
          prop = 'styleFloat';
        }

        if (re.test(prop)) {
          prop = prop.replace(re, function (a, b, c) {
            return c.toUpperCase();
          });
        }

        return el.currentStyle[prop] || null;
      };

      return this;
    };
  }

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
      var i, j;

      for (i = start || 0, j = this.length; i < j; i += 1) {
        if (this[i] === obj) {
          return i;
        }
      }

      return -1;
    };
  }

  Date.prototype.countDaysInMonth = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  };

  $.fn.xdsoftScroller = function (options, percent) {
    return this.each(function () {
      var timeboxparent = $(this),
          pointerEventToXY = function pointerEventToXY(e) {
        var out = {
          x: 0,
          y: 0
        },
            touch;

        if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
          touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
          out.x = touch.clientX;
          out.y = touch.clientY;
        } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
          out.x = e.clientX;
          out.y = e.clientY;
        }

        return out;
      },
          timebox,
          parentHeight,
          height,
          scrollbar,
          scroller,
          maximumOffset = 100,
          start = false,
          startY = 0,
          startTop = 0,
          h1 = 0,
          touchStart = false,
          startTopScroll = 0,
          calcOffset = function calcOffset() {};

      if (percent === 'hide') {
        timeboxparent.find('.xdsoft_scrollbar').hide();
        return;
      }

      if (!$(this).hasClass('xdsoft_scroller_box')) {
        timebox = timeboxparent.children().eq(0);
        parentHeight = timeboxparent[0].clientHeight;
        height = timebox[0].offsetHeight;
        scrollbar = $('<div class="xdsoft_scrollbar"></div>');
        scroller = $('<div class="xdsoft_scroller"></div>');
        scrollbar.append(scroller);
        timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);

        calcOffset = function calcOffset(event) {
          var offset = pointerEventToXY(event).y - startY + startTopScroll;

          if (offset < 0) {
            offset = 0;
          }

          if (offset + scroller[0].offsetHeight > h1) {
            offset = h1 - scroller[0].offsetHeight;
          }

          timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
        };

        scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
          if (!parentHeight) {
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
          }

          startY = pointerEventToXY(event).y;
          startTopScroll = parseInt(scroller.css('margin-top'), 10);
          h1 = scrollbar[0].offsetHeight;

          if (event.type === 'mousedown' || event.type === 'touchstart') {
            if (options.ownerDocument) {
              $(options.ownerDocument.body).addClass('xdsoft_noselect');
            }

            $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
              $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee).off('mousemove.xdsoft_scroller', calcOffset).removeClass('xdsoft_noselect');
            });
            $(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
          } else {
            touchStart = true;
            event.stopPropagation();
            event.preventDefault();
          }
        }).on('touchmove', function (event) {
          if (touchStart) {
            event.preventDefault();
            calcOffset(event);
          }
        }).on('touchend touchcancel', function () {
          touchStart = false;
          startTopScroll = 0;
        });
        timeboxparent.on('scroll_element.xdsoft_scroller', function (event, percentage) {
          if (!parentHeight) {
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
          }

          percentage = percentage > 1 ? 1 : percentage < 0 || isNaN(percentage) ? 0 : percentage;
          scroller.css('margin-top', maximumOffset * percentage);
          setTimeout(function () {
            timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
          }, 10);
        }).on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
          var percent, sh;
          parentHeight = timeboxparent[0].clientHeight;
          height = timebox[0].offsetHeight;
          percent = parentHeight / height;
          sh = percent * scrollbar[0].offsetHeight;

          if (percent > 1) {
            scroller.hide();
          } else {
            scroller.show();
            scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
            maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;

            if (noTriggerScroll !== true) {
              timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
            }
          }
        });
        timeboxparent.on('mousewheel', function (event) {
          var top = Math.abs(parseInt(timebox.css('marginTop'), 10));
          top = top - event.deltaY * 20;

          if (top < 0) {
            top = 0;
          }

          timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
          event.stopPropagation();
          return false;
        });
        timeboxparent.on('touchstart', function (event) {
          start = pointerEventToXY(event);
          startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
        });
        timeboxparent.on('touchmove', function (event) {
          if (start) {
            event.preventDefault();
            var coord = pointerEventToXY(event);
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
          }
        });
        timeboxparent.on('touchend touchcancel', function () {
          start = false;
          startTop = 0;
        });
      }

      timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
    });
  };

  $.fn.datetimepicker = function (opt, opt2) {
    var result = this,
        KEY0 = 48,
        KEY9 = 57,
        _KEY0 = 96,
        _KEY9 = 105,
        CTRLKEY = 17,
        CMDKEY = 91,
        DEL = 46,
        ENTER = 13,
        ESC = 27,
        BACKSPACE = 8,
        ARROWLEFT = 37,
        ARROWUP = 38,
        ARROWRIGHT = 39,
        ARROWDOWN = 40,
        TAB = 9,
        F5 = 116,
        AKEY = 65,
        CKEY = 67,
        VKEY = 86,
        ZKEY = 90,
        YKEY = 89,
        ctrlDown = false,
        cmdDown = false,
        options = $.isPlainObject(opt) || !opt ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),
        lazyInitTimer = 0,
        createDateTimePicker,
        destroyDateTimePicker,
        lazyInit = function lazyInit(input) {
      input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
        if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
          return;
        }

        clearTimeout(lazyInitTimer);
        lazyInitTimer = setTimeout(function () {
          if (!input.data('xdsoft_datetimepicker')) {
            createDateTimePicker(input);
          }

          input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback).trigger('open.xdsoft');
        }, 100);
      });
    };

    createDateTimePicker = function createDateTimePicker(input) {
      var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
          xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
          datepicker = $('<div class="xdsoft_datepicker active"></div>'),
          month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' + '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' + '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' + '<button type="button" class="xdsoft_next"></button></div>'),
          calendar = $('<div class="xdsoft_calendar"></div>'),
          timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
          timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
          timebox = $('<div class="xdsoft_time_variant"></div>'),
          applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
          monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
          yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
          triggerAfterOpen = false,
          XDSoft_datetime,
          xchangeTimer,
          timerclick,
          current_time_index,
          setPos,
          timer = 0,
          _xdsoft_datetime,
          forEachAncestorOf;

      if (options.id) {
        datetimepicker.attr('id', options.id);
      }

      if (options.style) {
        datetimepicker.attr('style', options.style);
      }

      if (options.weeks) {
        datetimepicker.addClass('xdsoft_showweeks');
      }

      if (options.rtl) {
        datetimepicker.addClass('xdsoft_rtl');
      }

      datetimepicker.addClass('xdsoft_' + options.theme);
      datetimepicker.addClass(options.className);
      month_picker.find('.xdsoft_month span').after(monthselect);
      month_picker.find('.xdsoft_year span').after(yearselect);
      month_picker.find('.xdsoft_month,.xdsoft_year').on('touchstart mousedown.xdsoft', function (event) {
        var select = $(this).find('.xdsoft_select').eq(0),
            val = 0,
            top = 0,
            visible = select.is(':visible'),
            items,
            i;
        month_picker.find('.xdsoft_select').hide();

        if (_xdsoft_datetime.currentTime) {
          val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
        }

        select[visible ? 'hide' : 'show']();

        for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
          if (items.eq(i).data('value') === val) {
            break;
          } else {
            top += items[0].offsetHeight;
          }
        }

        select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - select[0].clientHeight));
        event.stopPropagation();
        return false;
      });

      var handleTouchMoved = function handleTouchMoved(event) {
        var evt = event.originalEvent;
        var touchPosition = evt.touches ? evt.touches[0] : evt;
        this.touchStartPosition = this.touchStartPosition || touchPosition;
        var xMovement = Math.abs(this.touchStartPosition.clientX - touchPosition.clientX);
        var yMovement = Math.abs(this.touchStartPosition.clientY - touchPosition.clientY);
        var distance = Math.sqrt(xMovement * xMovement + yMovement * yMovement);

        if (distance > options.touchMovedThreshold) {
          this.touchMoved = true;
        }
      };

      month_picker.find('.xdsoft_select').xdsoftScroller(options).on('touchstart mousedown.xdsoft', function (event) {
        var evt = event.originalEvent;
        this.touchMoved = false;
        this.touchStartPosition = evt.touches ? evt.touches[0] : evt;
        event.stopPropagation();
        event.preventDefault();
      }).on('touchmove', '.xdsoft_option', handleTouchMoved).on('touchend mousedown.xdsoft', '.xdsoft_option', function () {
        if (!this.touchMoved) {
          if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          }

          var year = _xdsoft_datetime.currentTime.getFullYear();

          if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
            _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
          }

          $(this).parent().parent().hide();
          datetimepicker.trigger('xchange.xdsoft');

          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
        }
      });

      datetimepicker.getValue = function () {
        return _xdsoft_datetime.getCurrentTime();
      };

      datetimepicker.setOptions = function (_options) {
        var highlightedDates = {};
        options = $.extend(true, {}, options, _options);

        if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
          options.allowTimes = $.extend(true, [], _options.allowTimes);
        }

        if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
          options.weekends = $.extend(true, [], _options.weekends);
        }

        if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
          options.allowDates = $.extend(true, [], _options.allowDates);
        }

        if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
          options.allowDateRe = new RegExp(_options.allowDateRe);
        }

        if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
          $.each(_options.highlightedDates, function (index, value) {
            var splitData = $.map(value.split(','), $.trim),
                exDesc,
                hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]),
                // date, desc, style
            keyDate = dateHelper.formatDate(hDate.date, options.formatDate);

            if (highlightedDates[keyDate] !== undefined) {
              exDesc = highlightedDates[keyDate].desc;

              if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
              }
            } else {
              highlightedDates[keyDate] = hDate;
            }
          });
          options.highlightedDates = $.extend(true, [], highlightedDates);
        }

        if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
          highlightedDates = $.extend(true, [], options.highlightedDates);
          $.each(_options.highlightedPeriods, function (index, value) {
            var dateTest, // start date
            dateEnd, desc, hDate, keyDate, exDesc, style;

            if ($.isArray(value)) {
              dateTest = value[0];
              dateEnd = value[1];
              desc = value[2];
              style = value[3];
            } else {
              var splitData = $.map(value.split(','), $.trim);
              dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
              dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
              desc = splitData[2];
              style = splitData[3];
            }

            while (dateTest <= dateEnd) {
              hDate = new HighlightedDate(dateTest, desc, style);
              keyDate = dateHelper.formatDate(dateTest, options.formatDate);
              dateTest.setDate(dateTest.getDate() + 1);

              if (highlightedDates[keyDate] !== undefined) {
                exDesc = highlightedDates[keyDate].desc;

                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                  highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                }
              } else {
                highlightedDates[keyDate] = hDate;
              }
            }
          });
          options.highlightedDates = $.extend(true, [], highlightedDates);
        }

        if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
          options.disabledDates = $.extend(true, [], _options.disabledDates);
        }

        if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
          options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
        }

        if ((options.open || options.opened) && !options.inline) {
          input.trigger('open.xdsoft');
        }

        if (options.inline) {
          triggerAfterOpen = true;
          datetimepicker.addClass('xdsoft_inline');
          input.after(datetimepicker).hide();
        }

        if (options.inverseButton) {
          options.next = 'xdsoft_prev';
          options.prev = 'xdsoft_next';
        }

        if (options.datepicker) {
          datepicker.addClass('active');
        } else {
          datepicker.removeClass('active');
        }

        if (options.timepicker) {
          timepicker.addClass('active');
        } else {
          timepicker.removeClass('active');
        }

        if (options.value) {
          _xdsoft_datetime.setCurrentTime(options.value);

          if (input && input.val) {
            input.val(_xdsoft_datetime.str);
          }
        }

        if (isNaN(options.dayOfWeekStart)) {
          options.dayOfWeekStart = 0;
        } else {
          options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
        }

        if (!options.timepickerScrollbar) {
          timeboxparent.xdsoftScroller(options, 'hide');
        }

        if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
          options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
        }

        if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
          options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
        }

        if (options.minDateTime && /^\+(.*)$/.test(options.minDateTime)) {
          options.minDateTime = _xdsoft_datetime.strToDateTime(options.minDateTime).dateFormat(options.formatDate);
        }

        if (options.maxDateTime && /^\+(.*)$/.test(options.maxDateTime)) {
          options.maxDateTime = _xdsoft_datetime.strToDateTime(options.maxDateTime).dateFormat(options.formatDate);
        }

        applyButton.toggle(options.showApplyButton);
        month_picker.find('.xdsoft_today_button').css('visibility', !options.todayButton ? 'hidden' : 'visible');
        month_picker.find('.' + options.prev).css('visibility', !options.prevButton ? 'hidden' : 'visible');
        month_picker.find('.' + options.next).css('visibility', !options.nextButton ? 'hidden' : 'visible');
        setMask(options);

        if (options.validateOnBlur) {
          input.off('blur.xdsoft').on('blur.xdsoft', function () {
            if (options.allowBlank && (!$.trim($(this).val()).length || typeof options.mask === "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_'))) {
              $(this).val(null);
              datetimepicker.data('xdsoft_datetime').empty();
            } else {
              var d = dateHelper.parseDate($(this).val(), options.format);

              if (d) {
                // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
                $(this).val(dateHelper.formatDate(d, options.format));
              } else {
                var splittedHours = +[$(this).val()[0], $(this).val()[1]].join(''),
                    splittedMinutes = +[$(this).val()[2], $(this).val()[3]].join(''); // parse the numbers as 0312 => 03:12

                if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                  $(this).val([splittedHours, splittedMinutes].map(function (item) {
                    return item > 9 ? item : '0' + item;
                  }).join(':'));
                } else {
                  $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                }
              }

              datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
            }

            datetimepicker.trigger('changedatetime.xdsoft');
            datetimepicker.trigger('close.xdsoft');
          });
        }

        options.dayOfWeekStartPrev = options.dayOfWeekStart === 0 ? 6 : options.dayOfWeekStart - 1;
        datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');
      };

      datetimepicker.data('options', options).on('touchstart mousedown.xdsoft', function (event) {
        event.stopPropagation();
        event.preventDefault();
        yearselect.hide();
        monthselect.hide();
        return false;
      }); //scroll_element = timepicker.find('.xdsoft_time_box');

      timeboxparent.append(timebox);
      timeboxparent.xdsoftScroller(options);
      datetimepicker.on('afterOpen.xdsoft', function () {
        timeboxparent.xdsoftScroller(options);
      });
      datetimepicker.append(datepicker).append(timepicker);

      if (options.withoutCopyright !== true) {
        datetimepicker.append(xdsoft_copyright);
      }

      datepicker.append(month_picker).append(calendar).append(applyButton);

      if (options.insideParent) {
        $(input).parent().append(datetimepicker);
      } else {
        $(options.parentID).append(datetimepicker);
      }

      XDSoft_datetime = function XDSoft_datetime() {
        var _this = this;

        _this.now = function (norecursion) {
          var d = new Date(),
              date,
              time;

          if (!norecursion && options.defaultDate) {
            date = _this.strToDateTime(options.defaultDate);
            d.setFullYear(date.getFullYear());
            d.setMonth(date.getMonth());
            d.setDate(date.getDate());
          }

          d.setFullYear(d.getFullYear());

          if (!norecursion && options.defaultTime) {
            time = _this.strtotime(options.defaultTime);
            d.setHours(time.getHours());
            d.setMinutes(time.getMinutes());
            d.setSeconds(time.getSeconds());
            d.setMilliseconds(time.getMilliseconds());
          }

          return d;
        };

        _this.isValidDate = function (d) {
          if (Object.prototype.toString.call(d) !== "[object Date]") {
            return false;
          }

          return !isNaN(d.getTime());
        };

        _this.setCurrentTime = function (dTime, requireValidDate) {
          if (typeof dTime === 'string') {
            _this.currentTime = _this.strToDateTime(dTime);
          } else if (_this.isValidDate(dTime)) {
            _this.currentTime = dTime;
          } else if (!dTime && !requireValidDate && options.allowBlank && !options.inline) {
            _this.currentTime = null;
          } else {
            _this.currentTime = _this.now();
          }

          datetimepicker.trigger('xchange.xdsoft');
        };

        _this.empty = function () {
          _this.currentTime = null;
        };

        _this.getCurrentTime = function () {
          return _this.currentTime;
        };

        _this.nextMonth = function () {
          if (_this.currentTime === undefined || _this.currentTime === null) {
            _this.currentTime = _this.now();
          }

          var month = _this.currentTime.getMonth() + 1,
              year;

          if (month === 12) {
            _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);

            month = 0;
          }

          year = _this.currentTime.getFullYear();

          _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));

          _this.currentTime.setMonth(month);

          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          datetimepicker.trigger('xchange.xdsoft');
          return month;
        };

        _this.prevMonth = function () {
          if (_this.currentTime === undefined || _this.currentTime === null) {
            _this.currentTime = _this.now();
          }

          var month = _this.currentTime.getMonth() - 1;

          if (month === -1) {
            _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);

            month = 11;
          }

          _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));

          _this.currentTime.setMonth(month);

          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }

          datetimepicker.trigger('xchange.xdsoft');
          return month;
        };

        _this.getWeekOfYear = function (datetime) {
          if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
            var week = options.onGetWeekOfYear.call(datetimepicker, datetime);

            if (typeof week !== 'undefined') {
              return week;
            }
          }

          var onejan = new Date(datetime.getFullYear(), 0, 1); //First week of the year is th one with the first Thursday according to ISO8601

          if (onejan.getDay() !== 4) {
            onejan.setMonth(0, 1 + (4 - onejan.getDay() + 7) % 7);
          }

          return Math.ceil(((datetime - onejan) / 86400000 + onejan.getDay() + 1) / 7);
        };

        _this.strToDateTime = function (sDateTime) {
          var tmpDate = [],
              timeOffset,
              currentTime;

          if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
            return sDateTime;
          }

          tmpDate = /^([+-]{1})(.*)$/.exec(sDateTime);

          if (tmpDate) {
            tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
          }

          if (tmpDate && tmpDate[2]) {
            timeOffset = tmpDate[2].getTime() - tmpDate[2].getTimezoneOffset() * 60000;
            currentTime = new Date(_this.now(true).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
          } else {
            currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
          }

          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now();
          }

          return currentTime;
        };

        _this.strToDate = function (sDate) {
          if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
            return sDate;
          }

          var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);

          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now(true);
          }

          return currentTime;
        };

        _this.strtotime = function (sTime) {
          if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
            return sTime;
          }

          var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);

          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now(true);
          }

          return currentTime;
        };

        _this.str = function () {
          var format = options.format;

          if (options.yearOffset) {
            format = format.replace('Y', _this.currentTime.getFullYear() + options.yearOffset);
            format = format.replace('y', String(_this.currentTime.getFullYear() + options.yearOffset).substring(2, 4));
          }

          return dateHelper.formatDate(_this.currentTime, format);
        };

        _this.currentTime = this.now();
      };

      _xdsoft_datetime = new XDSoft_datetime();
      applyButton.on('touchend click', function (e) {
        //pathbrite
        e.preventDefault();
        datetimepicker.data('changed', true);

        _xdsoft_datetime.setCurrentTime(getCurrentValue());

        input.val(_xdsoft_datetime.str());
        datetimepicker.trigger('close.xdsoft');
      });
      month_picker.find('.xdsoft_today_button').on('touchend mousedown.xdsoft', function () {
        datetimepicker.data('changed', true);

        _xdsoft_datetime.setCurrentTime(0, true);

        datetimepicker.trigger('afterOpen.xdsoft');
      }).on('dblclick.xdsoft', function () {
        var currentDate = _xdsoft_datetime.getCurrentTime(),
            minDate,
            maxDate;

        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        minDate = _xdsoft_datetime.strToDate(options.minDate);
        minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());

        if (currentDate < minDate) {
          return;
        }

        maxDate = _xdsoft_datetime.strToDate(options.maxDate);
        maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());

        if (currentDate > maxDate) {
          return;
        }

        input.val(_xdsoft_datetime.str());
        input.trigger('change');
        datetimepicker.trigger('close.xdsoft');
      });
      month_picker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
        var $this = $(this),
            timer = 0,
            stop = false;

        (function arguments_callee1(v) {
          if ($this.hasClass(options.next)) {
            _xdsoft_datetime.nextMonth();
          } else if ($this.hasClass(options.prev)) {
            _xdsoft_datetime.prevMonth();
          }

          if (options.monthChangeSpinner) {
            if (!stop) {
              timer = setTimeout(arguments_callee1, v || 100);
            }
          }
        })(500);

        $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
          clearTimeout(timer);
          stop = true;
          $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
        });
      });
      timepicker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
        var $this = $(this),
            timer = 0,
            stop = false,
            period = 110;

        (function arguments_callee4(v) {
          var pheight = timeboxparent[0].clientHeight,
              height = timebox[0].offsetHeight,
              top = Math.abs(parseInt(timebox.css('marginTop'), 10));

          if ($this.hasClass(options.next) && height - pheight - options.timeHeightInTimePicker >= top) {
            timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
          } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
            timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
          }
          /**
           * Fixed bug:
           * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
           * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
           * would cause a bug when you use jquery.css method.
           * Let's say: * { transition: all .5s ease; }
           * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
           * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
           * next/prev button.
           *
           * What we should do:
           * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
           */


          timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
          period = period > 10 ? 10 : period - 10;

          if (!stop) {
            timer = setTimeout(arguments_callee4, v || period);
          }
        })(500);

        $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
          clearTimeout(timer);
          stop = true;
          $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee5);
        });
      });
      xchangeTimer = 0; // base handler - generating a calendar and timepicker

      datetimepicker.on('xchange.xdsoft', function (event) {
        clearTimeout(xchangeTimer);
        xchangeTimer = setTimeout(function () {
          if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          }

          var table = '',
              start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
              i = 0,
              j,
              today = _xdsoft_datetime.now(),
              maxDate = false,
              minDate = false,
              minDateTime = false,
              maxDateTime = false,
              hDate,
              day,
              d,
              y,
              m,
              w,
              classes = [],
              customDateSettings,
              newRow = true,
              time = '',
              h,
              line_time,
              description;

          while (start.getDay() !== options.dayOfWeekStart) {
            start.setDate(start.getDate() - 1);
          }

          table += '<table><thead><tr>';

          if (options.weeks) {
            table += '<th></th>';
          }

          for (j = 0; j < 7; j += 1) {
            table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
          }

          table += '</tr></thead>';
          table += '<tbody>';

          if (options.maxDate !== false) {
            maxDate = _xdsoft_datetime.strToDate(options.maxDate);
            maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
          }

          if (options.minDate !== false) {
            minDate = _xdsoft_datetime.strToDate(options.minDate);
            minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
          }

          if (options.minDateTime !== false) {
            minDateTime = _xdsoft_datetime.strToDate(options.minDateTime);
            minDateTime = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), minDateTime.getHours(), minDateTime.getMinutes(), minDateTime.getSeconds());
          }

          if (options.maxDateTime !== false) {
            maxDateTime = _xdsoft_datetime.strToDate(options.maxDateTime);
            maxDateTime = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), maxDateTime.getHours(), maxDateTime.getMinutes(), maxDateTime.getSeconds());
          }

          var maxDateTimeDay;

          if (maxDateTime !== false) {
            maxDateTimeDay = (maxDateTime.getFullYear() * 12 + maxDateTime.getMonth()) * 31 + maxDateTime.getDate();
          }

          while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
            classes = [];
            i += 1;
            day = start.getDay();
            d = start.getDate();
            y = start.getFullYear();
            m = start.getMonth();
            w = _xdsoft_datetime.getWeekOfYear(start);
            description = '';
            classes.push('xdsoft_date');

            if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
              customDateSettings = options.beforeShowDay.call(datetimepicker, start);
            } else {
              customDateSettings = null;
            }

            if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
              if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
                classes.push('xdsoft_disabled');
              }
            }

            if (options.allowDates && options.allowDates.length > 0) {
              if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
                classes.push('xdsoft_disabled');
              }
            }

            var currentDay = (start.getFullYear() * 12 + start.getMonth()) * 31 + start.getDate();

            if (maxDate !== false && start > maxDate || minDateTime !== false && start < minDateTime || minDate !== false && start < minDate || maxDateTime !== false && currentDay > maxDateTimeDay || customDateSettings && customDateSettings[0] === false) {
              classes.push('xdsoft_disabled');
            }

            if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
              classes.push('xdsoft_disabled');
            }

            if (options.disabledWeekDays.indexOf(day) !== -1) {
              classes.push('xdsoft_disabled');
            }

            if (input.is('[disabled]')) {
              classes.push('xdsoft_disabled');
            }

            if (customDateSettings && customDateSettings[1] !== "") {
              classes.push(customDateSettings[1]);
            }

            if (_xdsoft_datetime.currentTime.getMonth() !== m) {
              classes.push('xdsoft_other_month');
            }

            if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
              classes.push('xdsoft_current');
            }

            if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
              classes.push('xdsoft_today');
            }

            if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
              classes.push('xdsoft_weekend');
            }

            if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
              hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
              classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
              description = hDate.desc === undefined ? '' : hDate.desc;
            }

            if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
              classes.push(options.beforeShowDay(start));
            }

            if (newRow) {
              table += '<tr>';
              newRow = false;

              if (options.weeks) {
                table += '<th>' + w + '</th>';
              }
            }

            table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' + '<div>' + d + '</div>' + '</td>';

            if (start.getDay() === options.dayOfWeekStartPrev) {
              table += '</tr>';
              newRow = true;
            }

            start.setDate(d + 1);
          }

          table += '</tbody></table>';
          calendar.html(table);
          month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
          month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear() + options.yearOffset); // generate timebox

          time = '';
          h = '';
          m = '';
          var minTimeMinutesOfDay = 0;

          if (options.minTime !== false) {
            var t = _xdsoft_datetime.strtotime(options.minTime);

            minTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
          }

          var maxTimeMinutesOfDay = 24 * 60;

          if (options.maxTime !== false) {
            var t = _xdsoft_datetime.strtotime(options.maxTime);

            maxTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
          }

          if (options.minDateTime !== false) {
            var t = _xdsoft_datetime.strToDateTime(options.minDateTime);

            var currentDayIsMinDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);

            if (currentDayIsMinDateTimeDay) {
              var m = 60 * t.getHours() + t.getMinutes();
              if (m > minTimeMinutesOfDay) minTimeMinutesOfDay = m;
            }
          }

          if (options.maxDateTime !== false) {
            var t = _xdsoft_datetime.strToDateTime(options.maxDateTime);

            var currentDayIsMaxDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);

            if (currentDayIsMaxDateTimeDay) {
              var m = 60 * t.getHours() + t.getMinutes();
              if (m < maxTimeMinutesOfDay) maxTimeMinutesOfDay = m;
            }
          }

          line_time = function line_time(h, m) {
            var now = _xdsoft_datetime.now(),
                current_time,
                isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;

            now.setHours(h);
            h = parseInt(now.getHours(), 10);
            now.setMinutes(m);
            m = parseInt(now.getMinutes(), 10);
            classes = [];
            var currentMinutesOfDay = 60 * h + m;

            if (input.is('[disabled]') || currentMinutesOfDay >= maxTimeMinutesOfDay || currentMinutesOfDay < minTimeMinutesOfDay) {
              classes.push('xdsoft_disabled');
            }

            current_time = new Date(_xdsoft_datetime.currentTime);
            current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

            if (!isALlowTimesInit) {
              current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
            }

            if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (!isALlowTimesInit && options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
              if (options.defaultSelect || datetimepicker.data('changed')) {
                classes.push('xdsoft_current');
              } else if (options.initTime) {
                classes.push('xdsoft_init_time');
              }
            }

            if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
              classes.push('xdsoft_today');
            }

            time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
          };

          if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
            for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
              for (j = 0; j < 60; j += options.step) {
                var currentMinutesOfDay = i * 60 + j;
                if (currentMinutesOfDay < minTimeMinutesOfDay) continue;
                if (currentMinutesOfDay >= maxTimeMinutesOfDay) continue;
                h = (i < 10 ? '0' : '') + i;
                m = (j < 10 ? '0' : '') + j;
                line_time(h, m);
              }
            }
          } else {
            for (i = 0; i < options.allowTimes.length; i += 1) {
              h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
              m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
              line_time(h, m);
            }
          }

          timebox.html(time);
          opt = '';

          for (i = parseInt(options.yearStart, 10); i <= parseInt(options.yearEnd, 10); i += 1) {
            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + (i + options.yearOffset) + '</div>';
          }

          yearselect.children().eq(0).html(opt);

          for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
          }

          monthselect.children().eq(0).html(opt);
          $(datetimepicker).trigger('generate.xdsoft');
        }, 10);
        event.stopPropagation();
      }).on('afterOpen.xdsoft', function () {
        if (options.timepicker) {
          var classType, pheight, height, top;

          if (timebox.find('.xdsoft_current').length) {
            classType = '.xdsoft_current';
          } else if (timebox.find('.xdsoft_init_time').length) {
            classType = '.xdsoft_init_time';
          }

          if (classType) {
            pheight = timeboxparent[0].clientHeight;
            height = timebox[0].offsetHeight;
            top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;

            if (height - pheight < top) {
              top = height - pheight;
            }

            timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
          } else {
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
          }
        }
      });
      timerclick = 0;
      calendar.on('touchend click.xdsoft', 'td', function (xdevent) {
        xdevent.stopPropagation(); // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap

        timerclick += 1;
        var $this = $(this),
            currentTime = _xdsoft_datetime.currentTime;

        if (currentTime === undefined || currentTime === null) {
          _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          currentTime = _xdsoft_datetime.currentTime;
        }

        if ($this.hasClass('xdsoft_disabled')) {
          return false;
        }

        currentTime.setDate(1);
        currentTime.setFullYear($this.data('year'));
        currentTime.setMonth($this.data('month'));
        currentTime.setDate($this.data('date'));
        datetimepicker.trigger('select.xdsoft', [currentTime]);
        input.val(_xdsoft_datetime.str());

        if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
          options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
        }

        datetimepicker.data('changed', true);
        datetimepicker.trigger('xchange.xdsoft');
        datetimepicker.trigger('changedatetime.xdsoft');

        if ((timerclick > 1 || options.closeOnDateSelect === true || options.closeOnDateSelect === false && !options.timepicker) && !options.inline) {
          datetimepicker.trigger('close.xdsoft');
        }

        setTimeout(function () {
          timerclick = 0;
        }, 200);
      });
      timebox.on('touchstart', 'div', function (xdevent) {
        this.touchMoved = false;
      }).on('touchmove', 'div', handleTouchMoved).on('touchend click.xdsoft', 'div', function (xdevent) {
        if (!this.touchMoved) {
          xdevent.stopPropagation();
          var $this = $(this),
              currentTime = _xdsoft_datetime.currentTime;

          if (currentTime === undefined || currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
            currentTime = _xdsoft_datetime.currentTime;
          }

          if ($this.hasClass('xdsoft_disabled')) {
            return false;
          }

          currentTime.setHours($this.data('hour'));
          currentTime.setMinutes($this.data('minute'));
          datetimepicker.trigger('select.xdsoft', [currentTime]);
          datetimepicker.data('input').val(_xdsoft_datetime.str());

          if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
            options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
          }

          datetimepicker.data('changed', true);
          datetimepicker.trigger('xchange.xdsoft');
          datetimepicker.trigger('changedatetime.xdsoft');

          if (options.inline !== true && options.closeOnTimeSelect === true) {
            datetimepicker.trigger('close.xdsoft');
          }
        }
      });
      datepicker.on('mousewheel.xdsoft', function (event) {
        if (!options.scrollMonth) {
          return true;
        }

        if (event.deltaY < 0) {
          _xdsoft_datetime.nextMonth();
        } else {
          _xdsoft_datetime.prevMonth();
        }

        return false;
      });
      input.on('mousewheel.xdsoft', function (event) {
        if (!options.scrollInput) {
          return true;
        }

        if (!options.datepicker && options.timepicker) {
          current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;

          if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
            current_time_index += event.deltaY;
          }

          if (timebox.children().eq(current_time_index).length) {
            timebox.children().eq(current_time_index).trigger('mousedown');
          }

          return false;
        }

        if (options.datepicker && !options.timepicker) {
          datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);

          if (input.val) {
            input.val(_xdsoft_datetime.str());
          }

          datetimepicker.trigger('changedatetime.xdsoft');
          return false;
        }
      });
      datetimepicker.on('changedatetime.xdsoft', function (event) {
        if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
          var $input = datetimepicker.data('input');
          options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
          delete options.value;
          $input.trigger('change');
        }
      }).on('generate.xdsoft', function () {
        if (options.onGenerate && $.isFunction(options.onGenerate)) {
          options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
        }

        if (triggerAfterOpen) {
          datetimepicker.trigger('afterOpen.xdsoft');
          triggerAfterOpen = false;
        }
      }).on('click.xdsoft', function (xdevent) {
        xdevent.stopPropagation();
      });
      current_time_index = 0;
      /**
       * Runs the callback for each of the specified node's ancestors.
       *
       * Return FALSE from the callback to stop ascending.
       *
       * @param {DOMNode} node
       * @param {Function} callback
       * @returns {undefined}
       */

      forEachAncestorOf = function forEachAncestorOf(node, callback) {
        do {
          node = node.parentNode;

          if (!node || callback(node) === false) {
            break;
          }
        } while (node.nodeName !== 'HTML');
      };
      /**
       * Sets the position of the picker.
       *
       * @returns {undefined}
       */


      setPos = function setPos() {
        var dateInputOffset, dateInputElem, verticalPosition, left, position, datetimepickerElem, dateInputHasFixedAncestor, $dateInput, windowWidth, verticalAnchorEdge, datetimepickerCss, windowHeight, windowScrollTop;
        $dateInput = datetimepicker.data('input');
        dateInputOffset = $dateInput.offset();
        dateInputElem = $dateInput[0];
        verticalAnchorEdge = 'top';
        verticalPosition = dateInputOffset.top + dateInputElem.offsetHeight - 1;
        left = dateInputOffset.left;
        position = "absolute";
        windowWidth = $(options.contentWindow).width();
        windowHeight = $(options.contentWindow).height();
        windowScrollTop = $(options.contentWindow).scrollTop();

        if (options.ownerDocument.documentElement.clientWidth - dateInputOffset.left < datepicker.parent().outerWidth(true)) {
          var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
          left = left - diff;
        }

        if ($dateInput.parent().css('direction') === 'rtl') {
          left -= datetimepicker.outerWidth() - $dateInput.outerWidth();
        }

        if (options.fixed) {
          verticalPosition -= windowScrollTop;
          left -= $(options.contentWindow).scrollLeft();
          position = "fixed";
        } else {
          dateInputHasFixedAncestor = false;
          forEachAncestorOf(dateInputElem, function (ancestorNode) {
            if (ancestorNode === null) {
              return false;
            }

            if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
              dateInputHasFixedAncestor = true;
              return false;
            }
          });

          if (dateInputHasFixedAncestor && !options.insideParent) {
            position = 'fixed'; //If the picker won't fit entirely within the viewport then display it above the date input.

            if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
              verticalAnchorEdge = 'bottom';
              verticalPosition = windowHeight + windowScrollTop - dateInputOffset.top;
            } else {
              verticalPosition -= windowScrollTop;
            }
          } else {
            if (verticalPosition + datetimepicker[0].offsetHeight > windowHeight + windowScrollTop) {
              verticalPosition = dateInputOffset.top - datetimepicker[0].offsetHeight + 1;
            }
          }

          if (verticalPosition < 0) {
            verticalPosition = 0;
          }

          if (left + dateInputElem.offsetWidth > windowWidth) {
            left = windowWidth - dateInputElem.offsetWidth;
          }
        }

        datetimepickerElem = datetimepicker[0];
        forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
          var ancestorNodePosition;
          ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');

          if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
            left = left - (windowWidth - ancestorNode.offsetWidth) / 2;
            return false;
          }
        });
        datetimepickerCss = {
          position: position,
          left: options.insideParent ? dateInputElem.offsetLeft : left,
          top: '',
          //Initialize to prevent previous values interfering with new ones.
          bottom: '' //Initialize to prevent previous values interfering with new ones.

        };

        if (options.insideParent) {
          datetimepickerCss[verticalAnchorEdge] = dateInputElem.offsetTop + dateInputElem.offsetHeight;
        } else {
          datetimepickerCss[verticalAnchorEdge] = verticalPosition;
        }

        datetimepicker.css(datetimepickerCss);
      };

      datetimepicker.on('open.xdsoft', function (event) {
        var onShow = true;

        if (options.onShow && $.isFunction(options.onShow)) {
          onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
        }

        if (onShow !== false) {
          datetimepicker.show();
          setPos();
          $(options.contentWindow).off('resize.xdsoft', setPos).on('resize.xdsoft', setPos);

          if (options.closeOnWithoutClick) {
            $([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
              datetimepicker.trigger('close.xdsoft');
              $([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
            });
          }
        }
      }).on('close.xdsoft', function (event) {
        var onClose = true;
        month_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();

        if (options.onClose && $.isFunction(options.onClose)) {
          onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
        }

        if (onClose !== false && !options.opened && !options.inline) {
          datetimepicker.hide();
        }

        event.stopPropagation();
      }).on('toggle.xdsoft', function () {
        if (datetimepicker.is(':visible')) {
          datetimepicker.trigger('close.xdsoft');
        } else {
          datetimepicker.trigger('open.xdsoft');
        }
      }).data('input', input);
      timer = 0;
      datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
      datetimepicker.setOptions(options);

      function getCurrentValue() {
        var ct = false,
            time;

        if (options.startDate) {
          ct = _xdsoft_datetime.strToDate(options.startDate);
        } else {
          ct = options.value || (input && input.val && input.val() ? input.val() : '');

          if (ct) {
            ct = _xdsoft_datetime.strToDateTime(ct);

            if (options.yearOffset) {
              ct = new Date(ct.getFullYear() - options.yearOffset, ct.getMonth(), ct.getDate(), ct.getHours(), ct.getMinutes(), ct.getSeconds(), ct.getMilliseconds());
            }
          } else if (options.defaultDate) {
            ct = _xdsoft_datetime.strToDateTime(options.defaultDate);

            if (options.defaultTime) {
              time = _xdsoft_datetime.strtotime(options.defaultTime);
              ct.setHours(time.getHours());
              ct.setMinutes(time.getMinutes());
            }
          }
        }

        if (ct && _xdsoft_datetime.isValidDate(ct)) {
          datetimepicker.data('changed', true);
        } else {
          ct = '';
        }

        return ct || 0;
      }

      function setMask(options) {
        var isValidValue = function isValidValue(mask, value) {
          var reg = mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1').replace(/_/g, '{digit+}').replace(/([0-9]{1})/g, '{digit$1}').replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}').replace(/\{digit[\+]\}/g, '[0-9_]{1}');
          return new RegExp(reg).test(value);
        },
            getCaretPos = function getCaretPos(input) {
          try {
            if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
              var range = options.ownerDocument.selection.createRange();
              return range.getBookmark().charCodeAt(2) - 2;
            }

            if (input.setSelectionRange) {
              return input.selectionStart;
            }
          } catch (e) {
            return 0;
          }
        },
            setCaretPos = function setCaretPos(node, pos) {
          node = typeof node === "string" || node instanceof String ? options.ownerDocument.getElementById(node) : node;

          if (!node) {
            return false;
          }

          if (node.createTextRange) {
            var textRange = node.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd('character', pos);
            textRange.moveStart('character', pos);
            textRange.select();
            return true;
          }

          if (node.setSelectionRange) {
            node.setSelectionRange(pos, pos);
            return true;
          }

          return false;
        };

        if (options.mask) {
          input.off('keydown.xdsoft');
        }

        if (options.mask === true) {
          if (dateHelper.formatMask) {
            options.mask = dateHelper.formatMask(options.format);
          } else {
            options.mask = options.format.replace(/Y/g, '9999').replace(/F/g, '9999').replace(/m/g, '19').replace(/d/g, '39').replace(/H/g, '29').replace(/i/g, '59').replace(/s/g, '59');
          }
        }

        if ($.type(options.mask) === 'string') {
          if (!isValidValue(options.mask, input.val())) {
            input.val(options.mask.replace(/[0-9]/g, '_'));
            setCaretPos(input[0], 0);
          }

          input.on('paste.xdsoft', function (event) {
            // couple options here
            // 1. return false - tell them they can't paste
            // 2. insert over current characters - minimal validation
            // 3. full fledged parsing and validation
            // let's go option 2 for now
            // fires multiple times for some reason
            // https://stackoverflow.com/a/30496488/1366033
            var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData,
                pastedData = clipboardData.getData('text'),
                val = this.value,
                pos = this.selectionStart;
            var valueBeforeCursor = val.substr(0, pos);
            var valueAfterPaste = val.substr(pos + pastedData.length);
            val = valueBeforeCursor + pastedData + valueAfterPaste;
            pos += pastedData.length;

            if (isValidValue(options.mask, val)) {
              this.value = val;
              setCaretPos(this, pos);
            } else if ($.trim(val) === '') {
              this.value = options.mask.replace(/[0-9]/g, '_');
            } else {
              input.trigger('error_input.xdsoft');
            }

            event.preventDefault();
            return false;
          });
          input.on('keydown.xdsoft', function (event) {
            var val = this.value,
                key = event.which,
                pos = this.selectionStart,
                selEnd = this.selectionEnd,
                hasSel = pos !== selEnd,
                digit; // only alow these characters

            if (key >= KEY0 && key <= KEY9 || key >= _KEY0 && key <= _KEY9 || key === BACKSPACE || key === DEL) {
              // get char to insert which is new character or placeholder ('_')
              digit = key === BACKSPACE || key === DEL ? '_' : String.fromCharCode(_KEY0 <= key && key <= _KEY9 ? key - KEY0 : key); // we're deleting something, we're not at the start, and have normal cursor, move back one
              // if we have a selection length, cursor actually sits behind deletable char, not in front

              if (key === BACKSPACE && pos && !hasSel) {
                pos -= 1;
              } // don't stop on a separator, continue whatever direction you were going
              //   value char - keep incrementing position while on separator char and we still have room
              //   del char   - keep decrementing position while on separator char and we still have room


              while (true) {
                var maskValueAtCurPos = options.mask.substr(pos, 1);
                var posShorterThanMaskLength = pos < options.mask.length;
                var posGreaterThanZero = pos > 0;
                var notNumberOrPlaceholder = /[^0-9_]/;
                var curPosOnSep = notNumberOrPlaceholder.test(maskValueAtCurPos);
                var continueMovingPosition = curPosOnSep && posShorterThanMaskLength && posGreaterThanZero; // if we hit a real char, stay where we are

                if (!continueMovingPosition) break; // hitting backspace in a selection, you can possibly go back any further - go forward

                pos += key === BACKSPACE && !hasSel ? -1 : 1;
              }

              if (event.metaKey) {
                // cmd has been pressed
                pos = 0;
                hasSel = true;
              }

              if (hasSel) {
                // pos might have moved so re-calc length
                var selLength = selEnd - pos; // if we have a selection length we will wipe out entire selection and replace with default template for that range

                var defaultBlank = options.mask.replace(/[0-9]/g, '_');
                var defaultBlankSelectionReplacement = defaultBlank.substr(pos, selLength);
                var selReplacementRemainder = defaultBlankSelectionReplacement.substr(1); // might be empty

                var valueBeforeSel = val.substr(0, pos);
                var insertChars = digit + selReplacementRemainder;
                var charsAfterSelection = val.substr(pos + selLength);
                val = valueBeforeSel + insertChars + charsAfterSelection;
              } else {
                var valueBeforeCursor = val.substr(0, pos);
                var insertChar = digit;
                var valueAfterNextChar = val.substr(pos + 1);
                val = valueBeforeCursor + insertChar + valueAfterNextChar;
              }

              if ($.trim(val) === '') {
                // if empty, set to default
                val = defaultBlank;
              } else {
                // if at the last character don't need to do anything
                if (pos === options.mask.length) {
                  event.preventDefault();
                  return false;
                }
              } // resume cursor location


              pos += key === BACKSPACE ? 0 : 1; // don't stop on a separator, continue whatever direction you were going

              while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                pos += key === BACKSPACE ? 0 : 1;
              }

              if (isValidValue(options.mask, val)) {
                this.value = val;
                setCaretPos(this, pos);
              } else if ($.trim(val) === '') {
                this.value = options.mask.replace(/[0-9]/g, '_');
              } else {
                input.trigger('error_input.xdsoft');
              }
            } else {
              if ([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                return true;
              }
            }

            event.preventDefault();
            return false;
          });
        }
      }

      _xdsoft_datetime.setCurrentTime(getCurrentValue());

      input.data('xdsoft_datetimepicker', datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
        if (input.is(':disabled') || input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick) {
          return;
        }

        if (!options.openOnFocus) {
          return;
        }

        clearTimeout(timer);
        timer = setTimeout(function () {
          if (input.is(':disabled')) {
            return;
          }

          triggerAfterOpen = true;

          _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);

          if (options.mask) {
            setMask(options);
          }

          datetimepicker.trigger('open.xdsoft');
        }, 100);
      }).on('keydown.xdsoft', function (event) {
        var elementSelector,
            key = event.which;

        if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
          elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
          datetimepicker.trigger('close.xdsoft');
          elementSelector.eq(elementSelector.index(this) + 1).focus();
          return false;
        }

        if ([TAB].indexOf(key) !== -1) {
          datetimepicker.trigger('close.xdsoft');
          return true;
        }
      }).on('blur.xdsoft', function () {
        datetimepicker.trigger('close.xdsoft');
      });
    };

    destroyDateTimePicker = function destroyDateTimePicker(input) {
      var datetimepicker = input.data('xdsoft_datetimepicker');

      if (datetimepicker) {
        datetimepicker.data('xdsoft_datetime', null);
        datetimepicker.remove();
        input.data('xdsoft_datetimepicker', null).off('.xdsoft');
        $(options.contentWindow).off('resize.xdsoft');
        $([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');

        if (input.unmousewheel) {
          input.unmousewheel();
        }
      }
    };

    $(options.ownerDocument).off('keydown.xdsoftctrl keyup.xdsoftctrl').off('keydown.xdsoftcmd keyup.xdsoftcmd').on('keydown.xdsoftctrl', function (e) {
      if (e.keyCode === CTRLKEY) {
        ctrlDown = true;
      }
    }).on('keyup.xdsoftctrl', function (e) {
      if (e.keyCode === CTRLKEY) {
        ctrlDown = false;
      }
    }).on('keydown.xdsoftcmd', function (e) {
      if (e.keyCode === CMDKEY) {
        cmdDown = true;
      }
    }).on('keyup.xdsoftcmd', function (e) {
      if (e.keyCode === CMDKEY) {
        cmdDown = false;
      }
    });
    this.each(function () {
      var datetimepicker = $(this).data('xdsoft_datetimepicker'),
          $input;

      if (datetimepicker) {
        if ($.type(opt) === 'string') {
          switch (opt) {
            case 'show':
              $(this).select().focus();
              datetimepicker.trigger('open.xdsoft');
              break;

            case 'hide':
              datetimepicker.trigger('close.xdsoft');
              break;

            case 'toggle':
              datetimepicker.trigger('toggle.xdsoft');
              break;

            case 'destroy':
              destroyDateTimePicker($(this));
              break;

            case 'reset':
              this.value = this.defaultValue;

              if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                datetimepicker.data('changed', false);
              }

              datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
              break;

            case 'validate':
              $input = datetimepicker.data('input');
              $input.trigger('blur.xdsoft');
              break;

            default:
              if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
                result = datetimepicker[opt](opt2);
              }

          }
        } else {
          datetimepicker.setOptions(opt);
        }

        return 0;
      }

      if ($.type(opt) !== 'string') {
        if (!options.lazyInit || options.open || options.inline) {
          createDateTimePicker($(this));
        } else {
          lazyInit($(this));
        }
      }
    });
    return result;
  };

  $.fn.datetimepicker.defaults = default_options;

  function HighlightedDate(date, desc, style) {
    "use strict";

    this.date = date;
    this.desc = desc;
    this.style = style;
  }
};

;

(function (factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack-stream/node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'jquery-mousewheel'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') {
    // Node/CommonJS style for Browserify
    module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
    ;
  } else {
    // Browser globals
    factory(jQuery);
  }
})(datetimepickerFactory);
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */


(function (factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack-stream/node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') {
    // Node/CommonJS style for Browserify
    module.exports = factory;
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
      toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

  if ($.event.fixHooks) {
    for (var i = toFix.length; i;) {
      $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
    }
  }

  var special = $.event.special.mousewheel = {
    version: '3.1.12',
    setup: function setup() {
      if (this.addEventListener) {
        for (var i = toBind.length; i;) {
          this.addEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      } // Store the line height and page height for this particular element


      $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
      $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) {
        for (var i = toBind.length; i;) {
          this.removeEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      } // Clean up the data we added to the element


      $.removeData(this, 'mousewheel-line-height');
      $.removeData(this, 'mousewheel-page-height');
    },
    getLineHeight: function getLineHeight(elem) {
      var $elem = $(elem),
          $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();

      if (!$parent.length) {
        $parent = $('body');
      }

      return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
    },
    getPageHeight: function getPageHeight(elem) {
      return $(elem).height();
    },
    settings: {
      adjustOldDeltas: true,
      // see shouldAdjustOldDeltas() below
      normalizeOffset: true // calls getBoundingClientRect for each event

    }
  };
  $.fn.extend({
    mousewheel: function mousewheel(fn) {
      return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
    },
    unmousewheel: function unmousewheel(fn) {
      return this.unbind('mousewheel', fn);
    }
  });

  function handler(event) {
    var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0,
        offsetX = 0,
        offsetY = 0;
    event = $.event.fix(orgEvent);
    event.type = 'mousewheel'; // Old school scrollwheel delta

    if ('detail' in orgEvent) {
      deltaY = orgEvent.detail * -1;
    }

    if ('wheelDelta' in orgEvent) {
      deltaY = orgEvent.wheelDelta;
    }

    if ('wheelDeltaY' in orgEvent) {
      deltaY = orgEvent.wheelDeltaY;
    }

    if ('wheelDeltaX' in orgEvent) {
      deltaX = orgEvent.wheelDeltaX * -1;
    } // Firefox < 17 horizontal scrolling related to DOMMouseScroll event


    if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaX = deltaY * -1;
      deltaY = 0;
    } // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy


    delta = deltaY === 0 ? deltaX : deltaY; // New school wheel delta (wheel event)

    if ('deltaY' in orgEvent) {
      deltaY = orgEvent.deltaY * -1;
      delta = deltaY;
    }

    if ('deltaX' in orgEvent) {
      deltaX = orgEvent.deltaX;

      if (deltaY === 0) {
        delta = deltaX * -1;
      }
    } // No change actually happened, no reason to go any further


    if (deltaY === 0 && deltaX === 0) {
      return;
    } // Need to convert lines and pages to pixels if we aren't already in pixels
    // There are three delta modes:
    //   * deltaMode 0 is by pixels, nothing to do
    //   * deltaMode 1 is by lines
    //   * deltaMode 2 is by pages


    if (orgEvent.deltaMode === 1) {
      var lineHeight = $.data(this, 'mousewheel-line-height');
      delta *= lineHeight;
      deltaY *= lineHeight;
      deltaX *= lineHeight;
    } else if (orgEvent.deltaMode === 2) {
      var pageHeight = $.data(this, 'mousewheel-page-height');
      delta *= pageHeight;
      deltaY *= pageHeight;
      deltaX *= pageHeight;
    } // Store lowest absolute delta to normalize the delta values


    absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta; // Adjust older deltas if necessary

      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        lowestDelta /= 40;
      }
    } // Adjust older deltas if necessary


    if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
      // Divide all the things by 40!
      delta /= 40;
      deltaX /= 40;
      deltaY /= 40;
    } // Get a whole, normalized value for the deltas


    delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
    deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
    deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta); // Normalise offsetX and offsetY properties

    if (special.settings.normalizeOffset && this.getBoundingClientRect) {
      var boundingRect = this.getBoundingClientRect();
      offsetX = event.clientX - boundingRect.left;
      offsetY = event.clientY - boundingRect.top;
    } // Add information to the event object


    event.deltaX = deltaX;
    event.deltaY = deltaY;
    event.deltaFactor = lowestDelta;
    event.offsetX = offsetX;
    event.offsetY = offsetY; // Go ahead and set deltaMode to 0 since we converted to pixels
    // Although this is a little odd since we overwrite the deltaX/Y
    // properties with normalized deltas.

    event.deltaMode = 0; // Add event and delta to the front of the arguments

    args.unshift(event, delta, deltaX, deltaY); // Clearout lowestDelta after sometime to better
    // handle multiple device types that give different
    // a different lowestDelta
    // Ex: trackpad = 3 and mouse wheel = 120

    if (nullLowestDeltaTimeout) {
      clearTimeout(nullLowestDeltaTimeout);
    }

    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

  function nullLowestDelta() {
    lowestDelta = null;
  }

  function shouldAdjustOldDeltas(orgEvent, absDelta) {
    // If this is an older event and the delta is divisable by 120,
    // then we are assuming that the browser is treating this as an
    // older mouse wheel event and that we should divide the deltas
    // by 40 to try and get a more usable deltaFactor.
    // Side note, this actually impacts the reported scroll distance
    // in older browsers and can cause scrolling to be slower than native.
    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack-stream/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
/**
* ???????????? ?????????????????????? ?????????? ???? iOs ??????????????????????
* ???????????????????? ???????????? ???????????? ?? ?????? ?????????? ?????????????????? ???????????????????????????? ????
* ?? ???????????? ?????????????????????? ?????????????????? ?????????? var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};



/***/ })

/******/ });
