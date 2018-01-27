webpackJsonp([5],{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(263)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d5057da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\users\\edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d5057da", Component.options)
  } else {
    hotAPI.reload("data-v-3d5057da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("9ed4b2bc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d5057da\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d5057da\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Avatar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Avatar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        FormNavbar: __WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar___default.a
    },
    data: function data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },

    methods: {
        onSubmit: function onSubmit() {
            console.log('submit!');
        }
    }
});

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("form-navbar", {
        attrs: { page_name: "编辑用户", menu: "用户列表", back: "/users" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "list_box" }, [
        _c("div", { staticClass: "list_box_content" }, [
          _c("div", { staticClass: "list_box_big" }, [
            _c(
              "div",
              { staticClass: "box_body" },
              [
                _c(
                  "el-row",
                  [
                    _c("el-col", { attrs: { span: 4 } }, [
                      _c("div", { staticClass: "form-group text-center" }, [
                        _c("img", {
                          staticClass: "img-circle",
                          attrs: {
                            src: "https://image.cocoyo.xin/IMG_0347.PNG",
                            id: "avatar",
                            width: "100",
                            alt: "123"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 14 } },
                      [
                        _c(
                          "el-form",
                          {
                            ref: "form",
                            attrs: { model: _vm.form, "label-width": "80px" }
                          },
                          [
                            _c(
                              "el-form-item",
                              { attrs: { label: "用户名" } },
                              [
                                _c("el-input", {
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "邮箱" } },
                              [
                                _c("el-input", {
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "昵称" } },
                              [
                                _c("el-input", {
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "个人网站" } },
                              [
                                _c("el-input", {
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "活动形式", prop: "desc" } },
                              [_c("el-input", { attrs: { type: "textarea" } })],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { type: "primary" },
                                    on: { click: _vm.onSubmit }
                                  },
                                  [_vm._v("立即创建")]
                                ),
                                _vm._v(" "),
                                _c("el-button", [_vm._v("取消")])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d5057da", module.exports)
  }
}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(265)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(267)
/* template */
var __vue_template__ = __webpack_require__(268)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bdd4219"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\form\\navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bdd4219", Component.options)
  } else {
    hotAPI.reload("data-v-3bdd4219", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("59b48d74", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bdd4219\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bdd4219\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['back', 'page_name', 'menu']
});

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "switch_top" }, [
    _c("div", { staticClass: "switch_return" }, [
      _c(
        "div",
        { staticClass: "back-but" },
        [
          _c("router-link", { attrs: { to: _vm.back } }, [
            _c("span", { staticClass: "page-name" }, [
              _c("i", { staticClass: "el-icon-back" })
            ])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "page-name" }, [_vm._v(_vm._s(_vm.menu))])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("h2", [
      _c("div", { staticClass: "team_name_show" }, [
        _vm._v(_vm._s(_vm.page_name))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "team_invite" })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3bdd4219", module.exports)
  }
}

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var r in a)("object"==typeof exports?exports:t)[r]=a[r]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"number"==typeof t};e.default={init:function(t,e){var a=this,r=this._createImage(t);r.onload=function(){var t=a._getImageType(r.src),o=a._getCanvas(r.naturalWidth,r.naturalHeight);o.getContext("2d").drawImage(r,0,0);var n=o.toDataURL(t,100);e(n)}},_getImageType:function(t){var e="image/jpeg",a=t.match(/(image\/[\w]+)\.*/)[0];return void 0!==a&&(e=a),e},compress:function(t,e,a){var r=new FileReader,o=this;r.onload=function(r){var n=new Image;n.src=r.target.result,n.onload=function(){var r=o._getImageType(t.type),i=o._getCanvas(n.naturalWidth,n.naturalHeight),g=i.toDataURL(r,e/100);a(g)}},r.readAsDataURL(t)},crop:function(t,e,a){if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW,n=e.toCropImgH;e.maxWidth&&e.maxWidth<o&&(o=e.maxWidth,n=e.toCropImgH*o/e.toCropImgW),e.maxHeight&&e.maxHeight<n&&(n=e.maxHeight);var i=this._getCanvas(o,n),g=this._getImageType(t.src);a(i.toDataURL(g,e.compress/100))}},resize:function(t,e,a){if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW*e.imgChangeRatio,n=e.toCropImgH*e.imgChangeRatio,i=this._getCanvas(o,n),g=this._getImageType(t.src);a(i.toDataURL(g,e.compress/100))}},rotate:function(t,e,a){var r=this;this._loadImage(t,function(o){var n=o.naturalWidth,i=o.naturalHeight,g=Math.max(n,i),u=r._getCanvas(g,g),s=u.getContext("2d");s.save(),s.translate(g/2,g/2),s.rotate(e*(Math.PI/180));var c=0,m=0;if(0===(e%=360))return a(t,n,i);if(e%180!=0){-90===e||270===e?c=g/2-n:m=g/2-i;var f=n;n=i,i=f}else c=g/2-n,m=g/2-i;s.drawImage(o,c,m),r._getCanvas(n,i).getContext("2d").drawImage(u,0,0,n,i,0,0,n,i);var p=r._getImageType(o.src),l=u.toDataURL(p,1);a(l,n,i),u=null,s=null})},_loadImage:function(t,e){var a=this._createImage(t);a.onload=function(){e(a)}},_getCanvas:function(t,e){var a=document.createElement("canvas");return a.width=t,a.height=e,a},_createImage:function(t){var e=new Image;return e.src=t,e}}}])});

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoreImageUpload"] = factory();
	else
		root["VueCoreImageUpload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GIF_LOADING_SRC = 'data:image/gif;base64,R0lGODlhGAAYAPQAAP///3FxcePj4/v7++3t7dLS0vHx8b+/v+Dg4MfHx+jo6M7Oztvb2/f397Kysru7u9fX16qqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==';

exports.default = GIF_LOADING_SRC;

/***/ })

/******/ });
});

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoreImageUpload"] = factory();
	else
		root["VueCoreImageUpload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

  /**
   * transform object to css text
  */
  setCssText: function setCssText(obj) {
    var cssArr = [];
    Object.keys(obj).forEach(function (key) {
      var val = obj[key];
      if (typeof val === 'number') {
        val = '' + val + 'px';
      }
      cssArr.push(key + ': ' + val + ';');
    });
    return cssArr.join('');
  },
  isFunction: function isFunction(fn) {
    return typeof fn === 'function';
  }
};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drag;

var _helper = __webpack_require__(0);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = _helper2.default.isMobile; /**
                                           * return drag element coordinate
                                          */
function drag(e, el, coor) {
  if (!el) {
    return;
  }
  var currentX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  var currentY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;

  var left = currentX - coor.x;
  var top = currentY - coor.y;
  if (left <= coor.minLeft) {
    left = coor.minLeft;
  }
  if (left >= coor.maxLeft) {
    left = coor.maxLeft;
  }
  if (top <= coor.minTop) {
    top = coor.minTop;
  }
  if (top >= coor.maxTop) {
    top = coor.maxTop;
  }
  return {
    left: left,
    top: top
  };
};

/***/ })

/******/ });
});

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoreImageUpload"] = factory();
	else
		root["VueCoreImageUpload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

  /**
   * transform object to css text
  */
  setCssText: function setCssText(obj) {
    var cssArr = [];
    Object.keys(obj).forEach(function (key) {
      var val = obj[key];
      if (typeof val === 'number') {
        val = '' + val + 'px';
      }
      cssArr.push(key + ': ' + val + ';');
    });
    return cssArr.join('');
  },
  isFunction: function isFunction(fn) {
    return typeof fn === 'function';
  }
};

/***/ })
/******/ ]);
});

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(285)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(287)
/* template */
var __vue_template__ = __webpack_require__(288)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d42652a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-core-image-upload\\dist\\resize-bar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d42652a", Component.options)
  } else {
    hotAPI.reload("data-v-5d42652a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(275)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(296)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e44c01e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Avatar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e44c01e0", Component.options)
  } else {
    hotAPI.reload("data-v-e44c01e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("569f2e1c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e44c01e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Avatar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e44c01e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Avatar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.file[data-v-e44c01e0] {\n    position: relative;\n    margin: 0 auto;\n    display: block;\n    width: 100px;\n    height: 30px;\n    font-size: 10px;\nspan {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n}\ninput {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        width: 100px;\n        height: 30px;\n        opacity: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-polyfill\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_core_image_upload__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_core_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_core_image_upload__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // es6 shim


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['avatar'],
    data: function data() {
        return {
            show: false,
            params: {
                _token: '',
                name: 'avatar'
            },
            headers: {
                'X-CSRF-TOKEN': ''
            },
            imgDataUrl: this.avatar
        };
    },

    components: {
        'my-upload': __WEBPACK_IMPORTED_MODULE_1_vue_core_image_upload___default.a
    },
    methods: {
        toggleShow: function toggleShow() {
            this.show = !this.show;
        },

        /**
         * crop success
         *
         * [param] imgDataUrl
         * [param] field
         */
        cropSuccess: function cropSuccess(imgDataUrl, field) {
            this.imgDataUrl = imgDataUrl;
        },

        /**
         * upload success
         *
         * [param] jsonData  server api return data, already json encode
         * [param] field
         */
        cropUploadSuccess: function cropUploadSuccess(response, field) {
            this.imgDataUrl = response.url;
            this.toggleShow();
            //                swal("Here's a message!", "It's pretty, isn't it?")
            toastr.success('头像修改成功');
        },

        /**
         * upload fail
         *
         * [param] status    server api return error status, like 500
         * [param] field
         */
        cropUploadFail: function cropUploadFail(status, field) {
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
        }
    }
});

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!../../vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-8eeadfcc\",\"scoped\":false,\"hasInlineConfig\":true}!./style/style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(279)
/* template */
var __vue_template__ = __webpack_require__(295)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-core-image-upload\\dist\\vue-core-image-upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8eeadfcc", Component.options)
  } else {
    hotAPI.reload("data-v-8eeadfcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_image_xhr__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_image_xhr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_image_xhr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_daycaca__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_daycaca___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_daycaca__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loading_gif__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loading_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_loading_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__props__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crop_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__crop_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resize_bar_vue__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resize_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__resize_bar_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var overflowVal = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Crop: __WEBPACK_IMPORTED_MODULE_4__crop_vue___default.a,
    ResizeBar: __WEBPACK_IMPORTED_MODULE_5__resize_bar_vue___default.a
  },
  props: __WEBPACK_IMPORTED_MODULE_3__props___default.a,
  data: function data() {
    return {
      files: [],
      hasImage: false,
      options: this.props,
      uploading: false,
      formID: (Math.random() * 10000 + '').split('.')[0],
      image: {
        src: __WEBPACK_IMPORTED_MODULE_2__lib_loading_gif___default.a,
        width: 24,
        height: 24,
        minProgress: 0.05
      }
    };
  },


  computed: {
    name: function name() {
      if (this.multiple) {
        return this.inputOfFile + '[]';
      }
      return this.inputOfFile;
    }
  },

  methods: {
    __dispatch: function __dispatch(name, res, data) {
      this.$emit && this.$emit(name, res, data);
    },
    __find: function __find(str) {
      var dq = document.querySelector('#vciu-modal-' + this.formID);
      return dq.querySelector(str);
    },
    dragover: function dragover() {
      var element = this.$refs.container;
      element.classList.add('is-dragover');
    },
    dragleave: function dragleave() {
      var element = this.$refs.container;
      element.classList.remove('is-dragover');
    },
    change: function change(e) {
      var _this = this;

      var fileVal = document.querySelector('#g-core-upload-input-' + this.formID).value.replace(/C:\\fakepath\\/i, "");
      var fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
      var extensionsArr = this.extensions.split(',');
      if (extensionsArr.length > 1) {
        var reg = new RegExp('^[' + extensionsArr.join('|') + ']+$', 'i');
        if (!reg.test(fileExt)) {
          return this.__dispatch('errorhandle', 'TYPE ERROR');
        }
      }
      if (e.target.files[0].size > this.maxFileSize) {
        var formatSize;
        if (parseInt(this.maxFileSize / 1024 / 1024) > 0) {
          formatSize = (this.maxFileSize / 1024 / 1024).toFixed(2) + 'MB';
        } else if (parseInt(this.maxFileSize / 1024) > 0) {
          formatSize = (this.maxFileSize / 1024).toFixed(2) + 'kB';
        } else {
          formatSize = options.maxFileSize.toFixed(2) + 'Byte';
        }
        console.warn('FILE IS TOO LARGER MAX FILE IS ' + formatSize);
        return this.__dispatch('errorhandle', 'FILE IS TOO LARGER MAX FILE IS ' + formatSize);
      }

      if (this.multipleSize > 0 && e.target.files.length > this.multipleSize) {
        console.warn('FILE NUM IS LARGER THAN ' + this.multipleSize);
        return this.__dispatch('errorhandle', 'FILE NUM OVERLOAD');
      }

      this.files = e.target.files;
      if (this.crop || this.resize) {
        this.__showImage();
        return;
      }
      this.__dispatch('imagechanged', this.files.length > 1 ? this.files : this.files[0]);
      if (this.compress && this.files[0]['type'] !== 'image/png' && this.files[0]['type'] !== 'image/gif') {
        __WEBPACK_IMPORTED_MODULE_1_daycaca___default.a.compress(this.files[0], 100 - this.compress, function (code) {
          _this.tryAjaxUpload('', true, code);
        });
      } else {
        this.tryAjaxUpload();
      }
    },
    __showImage: function __showImage() {
      this.hasImage = true;
      this.__readFiles();
    },
    __readFiles: function __readFiles() {
      var reader = new FileReader();
      var self = this;
      reader.onload = function (e) {
        var src = e.target.result;
        overflowVal = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        self.__initImage(src);
      };
      reader.readAsDataURL(this.files[0]);
    },


    // set the image size
    __initImage: function __initImage(src) {
      var pic = new Image();
      var self = this;
      pic.src = src;
      var cropBox = this.$refs.cropBox;
      pic.onload = function () {
        self.image.minProgress = self.minWidth / pic.naturalWidth;
        __WEBPACK_IMPORTED_MODULE_1_daycaca___default.a.init(src, function (src) {
          self.imgChangeRatio = cropBox.setImage(src, pic.naturalWidth, pic.naturalHeight);
        });
      };
    },
    resizeImage: function resizeImage(progress) {
      var cropBox = this.$refs.cropBox;
      cropBox.resizeImage(progress);
    },
    doRotate: function doRotate(e) {
      var self = this;
      var cropBox = this.$refs.cropBox;
      var targetImage = cropBox.getCropImage();
      this.data.compress = 100 - this.compress;
      return __WEBPACK_IMPORTED_MODULE_1_daycaca___default.a.rotate(targetImage, 1, function (src) {
        self.__initImage(src);
      });
    },
    doReverseRotate: function doReverseRotate(e) {
      var self = this;
      var cropBox = this.$refs.cropBox;
      var targetImage = cropBox.getCropImage();
      this.data.compress = 100 - this.compress;
      return __WEBPACK_IMPORTED_MODULE_1_daycaca___default.a.rotate(targetImage, -1, function (src) {
        self.__initImage(src);
      });
    },
    doCrop: function doCrop(e) {
      var _this2 = this;

      this.__setData('crop');
      var cropBox = this.$refs.cropBox;
      var upload = this.__setUpload(e.target);
      if (this.crop === 'local') {
        var targetImage = cropBox.getCropImage();
        this.data.compress = 100 - this.compress;
        return __WEBPACK_IMPORTED_MODULE_1_daycaca___default.a.crop(targetImage, this.data, function (code) {
          upload(code);
          _this2.__dispatch('imagechanged', code);
        });
      }
      upload();
    },
    doResize: function doResize(e) {
      var _this3 = this;

      this.__setData('resize');
      var cropBox = this.$refs.cropBox;
      var upload = this.__setUpload(e.target);
      if (this.resize === 'local') {
        var targetImage = cropBox.getCropImage();
        this.data.compress = 100 - this.compress;
        return __WEBPACK_IMPORTED_MODULE_1_daycaca___default.a.resize(targetImage, this.data, function (code) {
          upload(code);
          _this3.__dispatch('imagechanged', code);
        });
      }
      upload();
    },
    __setData: function __setData(type) {
      if (_typeof(this.data) !== 'object') {
        this.data = {};
      }
      this.data["request"] = type;
      var cropBox = this.$refs.cropBox;
      var newCSSObj = cropBox.getCropData();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(newCSSObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var k = _step.value;

          this.data[k] = newCSSObj[k];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.maxWidth) {
        this.data['maxWidth'] = this.maxWidth;
      }
      if (this.maxHeight) {
        this.data['maxHeight'] = this.maxHeight;
      }
      if (this.minWidth) {
        this.data['minWidth'] = this.minWidth;
      }
    },
    __setUpload: function __setUpload(btn) {
      var _this4 = this;

      btn.value = btn.value + '...';
      btn.disabled = true;
      var upload = function upload(code) {
        _this4.tryAjaxUpload(function () {
          btn.value = btn.value.replace('...', '');
          btn.disabled = false;
        }, code ? true : false, code);
      };
      return upload;
    },
    cancel: function cancel() {
      this.hasImage = false;
      document.body.style.overflow = overflowVal;
      this.files = '';
      var cropBox = this.$refs.cropBox;
      cropBox.setOriginalSrc(null);
      document.querySelector('#g-core-upload-input-' + this.formID).value = '';
    },


    // use ajax upload  IE10+
    tryAjaxUpload: function tryAjaxUpload(callback, isBinary, base64Code) {
      var self = this;
      this.__dispatch('imageuploading', this.files[0]);
      var done = function done(res) {
        if (typeof callback === 'function') {
          callback();
        }
        self.uploading = false;
        self.cancel();
        self.__dispatch('imageuploaded', res, self.data);
      };
      var errorUpload = function errorUpload(err) {
        self.__dispatch('errorhandle', err);
      };
      if (!this.isXhr) {
        if (this.crop) {
          this.hasImage = false;
        }
        return typeof callback === 'function' && callback();
      }
      var data = void 0;
      if (isBinary) {
        data = {
          type: this.files[0]['type'],
          filename: this.files[0]['name'],
          filed: this.inputOfFile,
          base64Code: base64Code
        };
        if (_typeof(this.data) === 'object') {
          data = Object.assign(this.data, data);
        }
      } else {
        data = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          data.append(this.name, this.files[i]);
        }
        if (_typeof(this.data) === 'object') {
          for (var k in this.data) {
            if (this.data[k] !== undefined) {
              data.append(k, this.data[k]);
            }
          }
        }
      }
      __WEBPACK_IMPORTED_MODULE_0_core_image_xhr___default()('POST', this.url, this.headers, data, done, errorUpload, isBinary, this.credentials);
    }
  }

});

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * simple ajax handler
 **/

//ADD sendAsBinary compatibilty to older browsers
if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
  XMLHttpRequest.prototype.sendAsBinary = function (string) {
    var bytes = Array.prototype.map.call(string, function (c) {
      return c.charCodeAt(0) & 0xff;
    });
    this.send(new Uint8Array(bytes).buffer);
  };
}

module.exports = function (method, url, headers, data, callback, err, isBinary, withCredentials) {

  var r = new XMLHttpRequest();
  var error = err || function () {
    console.error('AJAX ERROR!');
  };
  var boundary = 'webcodeimageupload';
  // Binary?
  var binary = false;
  if (method === 'blob') {
    binary = method;
    method = 'GET';
  }
  method = method.toUpperCase();
  // Xhr.responseType 'json' is not supported in any of the vendors yet.
  r.onload = function () {
    var json = r.response;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      if (r.status === 401) {
        json = error('access_denied', r.statusText);
      }
    }
    var headers = headersToJSON(r.getAllResponseHeaders());
    headers.statusCode = r.status;
    callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
  };
  r.onerror = function () {
    var json = r.responseText;
    try {
      json = JSON.parse(r.responseText);
    } catch (_e) {
      console.error(_e);
    }
    callback(json || error('access_denied', 'Could not get resource'));
  };
  var x = void 0;
  // Should we add the query to the URL?
  if (method === 'GET' || method === 'DELETE') {
    data = null;
  } else if (isBinary) {
    var keyData = data;
    var code = data.base64Code.replace('data:' + data.type + ';base64,', '');
    data = ['--' + boundary, 'Content-Disposition: form-data; name="' + data.filed + '"; filename="' + data.filename + '"', 'Content-Type: ' + data.type, '', window.atob(code), ''].join('\r\n');
    var keyArr = Object.keys(keyData);
    if (keyArr.length > 4) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keyArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var k = _step.value;

          if (['filed', 'filename', 'type', 'base64Code'].indexOf(k) == -1) {
            data += ['--' + boundary, 'Content-Disposition: form-data; name="' + k + '";', '', ''].join('\r\n');
            data += [_typeof(keyData[k]) === 'object' ? JSON.stringify(keyData[k]) : encodeURI(keyData[k]), ''].join('\r\n');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    data += '--' + boundary + '--';
  }
  // Open the path, async
  r.open(method, url, true);
  if (binary) {
    if ('responseType' in r) {
      r.responseType = binary;
    } else {
      r.overrideMimeType('text/plain; charset=x-user-defined');
    }
  }
  // Set any bespoke headers
  if (headers) {
    for (x in headers) {
      r.setRequestHeader(x, headers[x]);
    }
  }
  r.withCredentials = typeof withCredentials === 'undefined' ? true : withCredentials;
  if (isBinary) {
    r.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    return r.sendAsBinary(data);
  }

  r.send(data);
  return r;
  // Headers are returned as a string
  function headersToJSON(s) {
    var o = {};
    var reg = /([a-z\-]+):\s?(.*);?/gi;
    var m = void 0;
    while (m = reg.exec(s)) {
      o[m[1]] = m[2];
    }
    return o;
  }
};


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoreImageUpload"] = factory();
	else
		root["VueCoreImageUpload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  url: {
    type: String
  },
  text: {
    type: String,
    default: 'Upload Image'
  },
  extensions: {
    type: String,
    default: 'png,jpg,jpeg,gif,svg,webp'
  },
  inputOfFile: {
    type: String,
    default: 'files'
  },
  crop: {
    type: [String, Boolean],
    default: ''
  },
  cropBtn: {
    type: Object,
    default: function _default() {
      return {
        ok: 'Ok',
        cancel: 'Cancel'
      };
    }
  },
  cropRatio: {
    type: String,
    default: '1:1'
  },
  resize: {
    type: [String, Boolean],
    default: false
  },
  rotate: {
    type: Boolean,
    default: false
  },
  ResizeBtn: {
    type: Object,
    default: function _default() {
      return {
        ok: 'Ok',
        cancel: 'Cancel'
      };
    }
  },
  maxFileSize: {
    type: Number,
    default: 1024 * 1024 * 100
  },
  maxWidth: {
    type: Number
  },
  maxHeight: {
    type: Number
  },
  inputAccept: {
    type: String,
    default: 'image/jpg,image/jpeg,image/png,image/gif'
  },
  isXhr: {
    type: Boolean,
    default: true
  },
  headers: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  data: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  multiple: {
    type: Boolean,
    default: false
  },
  multipleSize: {
    type: Number,
    default: 0
  },
  minWidth: {
    type: Number,
    default: 50
  },
  compress: {
    type: [Number, String],
    default: 0
  },
  credentials: {
    type: [String, Boolean],
    default: true
  }
};

/***/ })

/******/ });
});

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!../../vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-68e68340\",\"scoped\":true,\"hasInlineConfig\":true}!./style/crop.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(283)
/* template */
var __vue_template__ = __webpack_require__(294)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68e68340"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-core-image-upload\\dist\\crop.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68e68340", Component.options)
  } else {
    hotAPI.reload("data-v-68e68340", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_daycaca__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_daycaca___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_daycaca__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_drag__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_drag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_drag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_resize__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_resize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_resize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_loading_gif__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_loading_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_loading_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_helper__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resize_bar_vue__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resize_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__resize_bar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotate_bar_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotate_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rotate_bar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








// set cropbox size in image
var CROPBOX_PERCENT = 75;
var isMobile = __WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.isMobile;
var areaWidth = window.innerWidth - 60;
var areaHeight = window.innerHeight - 110;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ResizeBar: __WEBPACK_IMPORTED_MODULE_5__resize_bar_vue___default.a,
    RotateBar: __WEBPACK_IMPORTED_MODULE_6__rotate_bar_vue___default.a
  },
  props: {
    ratio: {
      type: String,
      default: '1:1'
    },
    minWidth: {
      type: Number,
      default: 50
    },
    minHeight: {
      type: Number,
      default: 50
    },
    isResize: {
      type: [Boolean],
      default: false
    },
    isRotate: {
      type: [Boolean],
      default: true
    }
  },

  data: function data() {
    return {
      src: __WEBPACK_IMPORTED_MODULE_3__lib_loading_gif___default.a,
      width: 24,
      height: 24,
      initWidth: 24,
      initHeight: 24,
      left: 0,
      top: 0,
      cropCSS: {}
    };
  },


  methods: {
    setImage: function setImage(src, w, h) {
      this.src = src;
      if (!this.originSrc) {
        this.setOriginalSrc(this.src);
      }
      if (this.ratio.indexOf(':') > 0) {
        this.ratioW = this.ratio.split(':')[0];
        this.ratioH = this.ratio.split(':')[1];
        this.ratioVal = this.ratioW / this.ratioH;
      } else {
        this.ratioW = 1;
        this.ratioH = 1;
        this.ratioVal = this.ratio;
      }
      this.natrualWidth = w;
      this.natrualHeight = h;
      this.setLayout(w, h);
      var resizeBar = this.$refs.resizeBar;
      if (this.isResize) {
        resizeBar.setProgress(100);
      } else {
        resizeBar.setProgress(50);
      }
      return this.imgChangeRatio;
    },
    setOriginalSrc: function setOriginalSrc(src) {
      this.originSrc = src;
    },
    resizeImage: function resizeImage(progress) {
      var w = void 0,
          h = void 0;
      if (this.isResize) {
        w = this.natrualWidth * this.imgChangeRatio * progress;
        h = this.natrualHeight * this.imgChangeRatio * progress;
      } else {
        w = this.initWidth + progress * (this.natrualWidth - this.initWidth);
        h = this.initHeight + progress * (this.natrualHeight - this.initHeight);
      }
      if (w <= this.minWidth || h < this.minHeight) {
        return;
      }
      this.left += (this.width - w) / 2;
      this.top += (this.height - h) / 2;
      this.width = w;
      this.height = h;
      this.imgChangeRatio = this.width / this.natrualWidth;
    },
    rotateImage: function rotateImage(degress) {
      var _this = this;

      var data = __WEBPACK_IMPORTED_MODULE_0_daycaca___default.a.rotate2(this.originSrc, degress, function (data, w, h) {
        _this.setImage(data, w, h);
      });
      //this.src = src;
    },
    setLayout: function setLayout(w, h) {
      var H = areaHeight,
          W = areaWidth,
          width = w,
          height = h,
          marginLeft = 0,
          marginTop = 0;
      // caculate the image ratio
      var R = width / height;
      var Rs = W / H;
      if (R > Rs) {
        height = H;
        width = H * R;
        marginLeft = (W - H * R) / 2;
      } else {
        width = H * R, height = H;
        marginLeft = (W - H * R) / 2;
      }
      this._setStyle(width, height, marginLeft, marginTop, R, true);
    },
    _setStyle: function _setStyle(w, h, ml, mt, r, isInit) {
      var $container = this.$el.querySelector('.g-crop-image-principal');
      if (!isInit) {
        this.marginLeft = this.marginLeft + (this.width - w) / 2;
        this.marginTop = this.marginTop + (this.height - h) / 2;
      }
      $container.style.cssText = 'width:' + w + 'px;height:' + h + 'px;margin-left:' + ml + 'px;' + 'margin-top:' + mt + 'px';
      this.setCropBox(w, h);
      if (this.isResize) {
        this.width = w;
        this.height = h;
      } else {
        if (r >= this.cropCSS.width / this.cropCSS.height) {
          this.height = this.cropCSS.height;
          this.width = this.height * r;
        } else {
          this.width = this.cropCSS.width;
          this.height = this.width / r;
        }
        this.initWidth = this.width;
        this.initHeight = this.height;
        this.left = (w - this.width) / 2;
        this.top = (h - this.height) / 2;
      }
      this.imgChangeRatio = this.width / this.natrualWidth;
    },
    setCropBox: function setCropBox(w, h, r) {
      if (this.isResize) {
        return;
      }
      var $selectCropBox = this.__find('.crop-box');
      var $wrap = this.$el;
      var imageWidth = w,
          imageHeight = h,
          ratioW = this.ratioW,
          ratioH = this.ratioH;
      var cropWidth = imageWidth;
      if (areaWidth < w) {
        cropWidth = areaWidth;
      }
      var baseCropWidth = cropWidth / 100 * CROPBOX_PERCENT;
      var CSSObj = {
        width: baseCropWidth,
        height: baseCropWidth / ratioW * ratioH
      };
      CSSObj.left = (imageWidth - baseCropWidth) / 2;
      CSSObj.top = (imageHeight - CSSObj.height) / 2;
      $selectCropBox.style.cssText = __WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.setCssText(CSSObj);
      if (CSSObj.height > imageHeight) {
        var baseCropHeight = imageHeight / 100 * CROPBOX_PERCENT;
        CSSObj.height = baseCropHeight;
        CSSObj.width = CSSObj.height * ratioW / ratioH;
        CSSObj.left = (imageWidth - CSSObj.width) / 2, CSSObj.top = (imageHeight - CSSObj.height) / 2, $selectCropBox.style.cssText = __WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.setCssText(CSSObj);
      };
      this.cropCSS = CSSObj;
    },
    getCropData: function getCropData() {
      // keep compatible with old api
      if (this.isResize) {
        return {
          imgChangeRatio: this.imgChangeRatio,
          toCropImgX: 0,
          toCropImgY: 0,
          toCropImgW: this.natrualWidth,
          toCropImgH: this.natrualHeight
        };
      }
      return {
        toCropImgX: (this.cropCSS.left - this.left) / this.imgChangeRatio,
        toCropImgY: (this.cropCSS.top - this.top) / this.imgChangeRatio,
        toCropImgW: this.cropCSS.width / this.imgChangeRatio,
        toCropImgH: this.cropCSS.height / this.imgChangeRatio
      };
    },
    getCropImage: function getCropImage() {
      return this.$refs['crop-image'];
    },
    __find: function __find(str) {
      var dq = this.$el;
      return dq.querySelector(str);
    },

    // resize and drag move
    resize: function resize(e) {
      e.stopPropagation();
      if (!this.ratio.indexOf(':')) {
        return;
      }
      var $el = e.target.parentElement;
      var $container = this.__find('.g-crop-image-principal');
      if (this._$container) {
        this._$container = container;
      }
      var self = this;
      var coor = {
        x: __WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.isMobile ? e.touches[0].clientX : e.clientX,
        y: __WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.isMobile ? e.touches[0].clientY : e.clientY,
        w: $el.offsetWidth,
        h: $el.offsetHeight
      };
      this.el = $el;
      this.container = $container;
      var maxCoor = this._getMaxCropAreaWidth();
      var move = function move(ev) {
        var newCropStyle = __WEBPACK_IMPORTED_MODULE_2__lib_resize___default()(ev, self.el, $container, coor, self.ratioVal);
        if (newCropStyle && (newCropStyle.width <= maxCoor.maxWidth || newCropStyle.height <= maxCoor.maxHeight)) {
          self.cropCSS.width = newCropStyle.width;
          self.cropCSS.height = newCropStyle.height;
        }
      };
      var end = function end(ev) {
        this.el = null;
        if (__WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', end, false);
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', end, false);
      };
      if (__WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', end, false);
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', end, false);
    },
    _getMaxCropAreaWidth: function _getMaxCropAreaWidth() {
      var $cropBox = this.__find('.crop-box');
      if (this.width > this.height) {
        return {
          maxWidth: this.height * this.ratioW / this.ratioH,
          maxHeight: this.height
        };
      }
      return {
        maxWidth: this.width,
        maxHeight: this.width * this.ratioH / this.ratioW
      };
    },
    drag: function drag(e) {
      e.preventDefault();
      var $el = this.__find('.image-wrap');
      this.el = $el;
      var $cropBox = this.__find('.crop-box');
      var $container = e.currentTarget;
      var self = this;
      var isMobile = __WEBPACK_IMPORTED_MODULE_4__lib_helper___default.a.isMobile;
      var coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop,
        maxLeft: $cropBox.offsetLeft,
        maxTop: $cropBox.offsetTop,
        minLeft: $cropBox.offsetWidth + $cropBox.offsetLeft - $el.offsetWidth,
        minTop: $cropBox.offsetHeight + $cropBox.offsetTop - $el.offsetHeight
      };
      var move = function move(ev) {
        var newCropStyle = __WEBPACK_IMPORTED_MODULE_1__lib_drag___default()(ev, self.el, coor);
        if (newCropStyle) {
          self.left = newCropStyle.left;
          self.top = newCropStyle.top;
        }
      };
      var stopMove = function stopMove(ev) {
        self.el = null;
        if (isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };
      if (isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    }
  }

});

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoreImageUpload"] = factory();
	else
		root["VueCoreImageUpload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

  /**
   * transform object to css text
  */
  setCssText: function setCssText(obj) {
    var cssArr = [];
    Object.keys(obj).forEach(function (key) {
      var val = obj[key];
      if (typeof val === 'number') {
        val = '' + val + 'px';
      }
      cssArr.push(key + ': ' + val + ';');
    });
    return cssArr.join('');
  },
  isFunction: function isFunction(fn) {
    return typeof fn === 'function';
  }
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resize;

var _helper = __webpack_require__(0);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = _helper2.default.isMobile; /** Reszie an element
                                           * @el  dom
                                           * @container  dom
                                           * @ratio  string '1:1' like this
                                           * e events
                                           **/

var W = document.body.offsetWidth;

function resize(e, el, container, coor, ratio) {
  if (!el) {
    return null;
  }
  var H = document.body.offsetHeight;
  var ratioRemainder = 1 / ratio;
  var dotBoxW = parseFloat(window.getComputedStyle(container).width);
  var dotBoxH = parseFloat(window.getComputedStyle(container).height);
  var $topH = document.querySelector('.info-aside');
  var halfX = (W - dotBoxW) / 2;
  var topH = parseFloat(window.getComputedStyle($topH).height);
  var halfY = (H - dotBoxH - topH) / 2;
  var resetX = isMobile ? e.changedTouches[0]['clientX'] : e.clientX;
  var resetY = isMobile ? e.changedTouches[0]['clientY'] : e.clientY;
  var elOffsetWidth = el.offsetWidth;
  var elOffsetHeight = el.offsetHeight;
  var CSSObj = {};
  if (ratio >= 1 && resetX <= halfX + dotBoxW) {
    if (elOffsetWidth >= dotBoxW) {
      CSSObj.width = dotBoxW;
    }
    CSSObj.width = coor.w + resetX - coor.x;
    CSSObj.height = elOffsetWidth * ratioRemainder;
    if (dotBoxW > dotBoxH) {
      if (elOffsetWidth > dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH * ratio;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth > dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW * ratioRemainder;
      }
    } else if (elOffsetWidth >= dotBoxW) {
      CSSObj.width = dotBoxW;
      CSSObj.height = dotBoxW * ratioRemainder;
    }
  } else if (ratio < 1 && resetY < halfY + dotBoxH + topH) {
    CSSObj.height = coor.h + resetY - coor.y;
    CSSObj.width = elOffsetHeight * ratio;
    // 限制拖拉的范围在图片内
    if (dotBoxW > dotBoxH) {
      if (elOffsetHeight > dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH * ratio;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth > dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW * ratioRemainder;
      }
    } else if (elOffsetWidth > dotBoxW) {
      CSSObj.width = dotBoxW;
      CSSObj.height = dotBoxW * ratioRemainder;
    }
  } else if (ratio === 'auto' && resetY <= halfY + dotBoxH + topH && resetX <= halfY + dotBoxW) {
    CSSObj.height = coor.h + resetY - coor.y;
    CSSObj.width = coor.w + resetX - coor.x;
  } else if (resetX <= halfX + dotBoxW) {
    CSSObj.width = coor.w + resetX - coor.x;
    CSSObj.height = el.style.width;
    // limit the crop box area
    if (dotBoxW > dotBoxH) {
      if (elOffsetHeight > dotBoxH) {
        CSSObj.height = dotBoxH;
        CSSObj.width = dotBoxH;
      }
    } else if (dotBoxW < dotBoxH) {
      if (elOffsetWidth > dotBoxW) {
        CSSObj.width = dotBoxW;
        CSSObj.height = dotBoxW;
      }
    } else if (elOffsetWidth > dotBoxW) {
      CSSObj.width = dotBoxW;
      el.style.height = dotBoxW;
    }
  }
  return CSSObj;
};

/***/ })

/******/ });
});

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("0f702d2f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d42652a\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./resize-bar.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d42652a\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./resize-bar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.g-resize-bar[data-v-5d42652a]{\n  position: absolute;\n  bottom: 0px;\n  margin: 17px auto;\n  height: 6px;\n  border-radius: 3px;\n  width:200px;\n  margin-left: -100px;\n  left: 50%;\n  background-color: #a8f9ca;\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0,0,0,.3);\n          box-shadow: 0 2px 3px -1px rgba(0,0,0,.3);\n}\n.g-resize-highlight[data-v-5d42652a]{\n  position: absolute;\n  left: 0;\n  top:0;\n  height: 6px;\n  background-color: #27ae60;\n  border-radius: 3px;\n}\n.circle-btn[data-v-5d42652a]{\n  display: block;\n  position: absolute;\n  left:0;\n  top: -5px;\n  width: 14px;\n  height: 14px;\n  margin-left: -7px;\n  background-color: #fff;\n  border-radius: 7px;\n  -webkit-box-shadow: 0 2px 3px -2px rgba(0,0,0,.6), 0 -2px 3px -2px rgba(0,0,0,.55);\n          box-shadow: 0 2px 3px -2px rgba(0,0,0,.6), 0 -2px 3px -2px rgba(0,0,0,.55);\n  border-width: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_helper__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_drag__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_drag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_drag__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    minProgress: {
      type: [Number, String],
      default: 0
    }

  },
  data: function data() {
    return {
      progress: 100,
      left: 100
    };
  },


  methods: {
    setProgress: function setProgress(num) {
      this.left = num;
    },
    drag: function drag(e) {
      e.preventDefault();
      e.stopPropagation();
      var $el = e.target;
      this.el = $el;
      var $container = this.$el.parentElement;
      var self = this;
      var isMobile = __WEBPACK_IMPORTED_MODULE_0__lib_helper___default.a.isMobile;
      var width = 200;
      var coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop,
        maxLeft: width,
        maxTop: parseInt($container.style.height) - parseInt($el.style.height),
        minLeft: 0,
        minTop: 0
      };
      var move = function move(ev) {
        var newCoor = __WEBPACK_IMPORTED_MODULE_1__lib_drag___default()(ev, self.el, coor);
        if (newCoor) {
          if (newCoor.left / width < self.minProgress) {
            return;
          }
          self.progress = (newCoor.left - width / 2) / width;
          self.left = newCoor.left / width * 100;

          self.$emit('resize', self.progress);
        }
      };
      var stopMove = function stopMove(ev) {
        self.el = null;
        if (isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', stopMove, false);
          return;
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', stopMove, false);
      };
      if (isMobile) {
        document.addEventListener('touchmove', move, false);
        document.addEventListener('touchend', stopMove, false);
        return;
      }
      document.addEventListener('mousemove', move, false);
      document.addEventListener('mouseup', stopMove, false);
    }
  }

});

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "g-resize-bar" }, [
    _c("div", {
      staticClass: "g-resize-highlight",
      style: { width: _vm.left + "%" }
    }),
    _vm._v(" "),
    _c("button", {
      staticClass: "circle-btn",
      style: { left: _vm.left + "%" },
      on: {
        touchstart: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          _vm.drag($event)
        },
        mousedown: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          _vm.drag($event)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d42652a", module.exports)
  }
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(293)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-core-image-upload\\dist\\rotate-bar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55340ed1", Component.options)
  } else {
    hotAPI.reload("data-v-55340ed1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("03251f9f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55340ed1\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./rotate-bar.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55340ed1\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./rotate-bar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.g-rotate-bar{\n    position: absolute;\n    bottom: 30px;\n    left: 0;\n    right: 0;\n    text-align: center;\n}\n.g-rotate-bar .svg-icon{\n  display: inline-block;\n  width: 1.2em;\n  height: 1.2em;\n  margin: 0 2em;\n}\n", ""]);

// exports


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rotateDegree: 0
    };
  },


  methods: {
    rotateRight: function rotateRight() {
      this.rotateDegree += 90;
      this.$emit('rotate', this.rotateDegree);
    },
    rotateLeft: function rotateLeft() {
      this.rotateDegree -= 90;
      this.$emit('rotate', this.rotateDegree);
    }
  }
});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "g-rotate-bar" }, [
    _c(
      "a",
      { attrs: { href: "javascript:;" }, on: { click: _vm.rotateLeft } },
      [
        _c(
          "svg",
          { staticClass: "svg-icon", attrs: { viewBox: "0 0 481.95 481.95" } },
          [
            _c("path", {
              attrs: {
                d:
                  "M281.7,243.8V138.2c75.9,13.5,135.4,78.6,135.4,159.8s-59.6,146.3-135.4,159.8V512\n        c105.7-13.5,189.6-102.9,189.6-214s-84-200.5-189.6-214V0L159.8,121.9L281.7,243.8z M94.8,270.9c2.7-24.4,13.5-46.1,27.1-67.7\n        L84,165.2C59.6,197.8,46.1,233,40.6,270.9H94.8z M159.8,430.7l-37.9,37.9c32.5,24.4,67.7,37.9,105.7,43.3v-54.2\n        C203.2,455.1,181.5,444.3,159.8,430.7z M94.8,325.1H40.6c2.7,37.9,19,73.1,43.3,105.7l37.9-37.9\n        C108.4,371.1,97.5,349.5,94.8,325.1z",
                fill: "#27ae60"
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "a",
      { attrs: { href: "javascript:;" }, on: { click: _vm.rotateRight } },
      [
        _c(
          "svg",
          { staticClass: "svg-icon", attrs: { viewBox: "0 0 481.95 481.95" } },
          [
            _c("path", {
              attrs: {
                d:
                  "M331.5,114.75L216.75,0v79.05C117.3,91.8,38.25,175.95,38.25,280.5s79.05,188.7,178.5,201.45v-51    C145.35,418.2,89.25,357,89.25,280.5s56.1-137.7,127.5-150.45v99.45L331.5,114.75z M443.7,255    c-5.101-35.7-17.851-68.85-40.8-99.45l-35.7,35.7c12.75,20.4,22.95,40.8,25.5,63.75H443.7z M267.75,430.95v51    c35.7-5.101,68.85-17.851,99.45-40.8l-35.7-35.7C311.1,418.2,290.7,428.4,267.75,430.95z M367.2,369.75l35.7,35.7    c22.949-30.601,38.25-63.75,40.8-99.45h-51C390.15,328.95,379.95,349.35,367.2,369.75z",
                fill: "#27ae60"
              }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-55340ed1", module.exports)
  }
}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "image-aside" }, [
    _c(
      "div",
      { staticClass: "g-crop-image-box" },
      [
        _c(
          "div",
          {
            staticClass: "g-crop-image-principal",
            on: { touchstart: _vm.drag, ":mousedown": _vm.drag }
          },
          [
            _c(
              "div",
              {
                staticClass: "image-wrap",
                style: {
                  width: _vm.width + "px",
                  height: _vm.height + "px",
                  left: _vm.left + "px",
                  top: _vm.top + "px",
                  backgroundImage: "url(" + _vm.src + ")",
                  cursor: _vm.isResize ? "default" : "move"
                }
              },
              [
                _c("img", {
                  ref: "crop-image",
                  staticStyle: { width: "0", height: "0" },
                  attrs: { src: _vm.src }
                })
              ]
            ),
            _vm._v(" "),
            !_vm.isResize
              ? _c("div", { staticClass: "image-mask" }, [
                  _c("div", {
                    staticClass: "mask top",
                    style: {
                      top: 0,
                      height: _vm.cropCSS.top + "px",
                      left: 0,
                      width: "100%"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mask bottom",
                    style: {
                      bottom: 0,
                      top: _vm.cropCSS.top + _vm.cropCSS.height + "px",
                      left: 0,
                      width: "100%"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mask left",
                    style: {
                      top: _vm.cropCSS.top + "px",
                      height: _vm.cropCSS.height + "px",
                      left: 0,
                      width: _vm.cropCSS.left + "px"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mask right",
                    style: {
                      top: _vm.cropCSS.top + "px",
                      height: _vm.cropCSS.height + "px",
                      left: _vm.cropCSS.left + _vm.cropCSS.width + "px",
                      right: 0
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.isResize
              ? _c(
                  "div",
                  {
                    staticClass: "crop-box",
                    style: {
                      top: _vm.cropCSS.top + "px",
                      left: _vm.cropCSS.left + "px",
                      height: _vm.cropCSS.height + "px",
                      width: _vm.cropCSS.width + "px"
                    }
                  },
                  [
                    _c("div", { staticClass: "reference-line v" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "reference-line h" }),
                    _vm._v(" "),
                    _c("a", {
                      staticClass: "g-resize",
                      on: {
                        touchstart: function($event) {
                          if ($event.target !== $event.currentTarget) {
                            return null
                          }
                          _vm.resize($event)
                        },
                        mousedown: function($event) {
                          if ($event.target !== $event.currentTarget) {
                            return null
                          }
                          _vm.resize($event)
                        }
                      }
                    })
                  ]
                )
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _vm.resize
          ? _c("resize-bar", {
              ref: "resizeBar",
              on: { resize: _vm.resizeImage }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.isRotate
          ? _c("rotate-bar", { on: { rotate: _vm.rotateImage } })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68e68340", module.exports)
  }
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "container", staticClass: "g-core-image-upload-btn" },
    [
      _vm._t("default", [_vm._v(_vm._s(_vm.text))]),
      _vm._v(" "),
      _c(
        "form",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.hasImage,
              expression: "!hasImage"
            }
          ],
          staticClass: "g-core-image-upload-form",
          attrs: { method: "post", enctype: "multipart/form-data", action: "" }
        },
        [
          _c("input", {
            attrs: {
              disabled: _vm.uploading,
              name: _vm.name,
              multiple: _vm.multiple,
              type: "file",
              accept: _vm.inputAccept
            },
            on: {
              change: _vm.change,
              dragover: _vm.dragover,
              dragenter: _vm.dragover,
              dragleave: _vm.dragleave,
              dragend: _vm.dragleave,
              drop: _vm.dragleave
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.hasImage,
              expression: "hasImage"
            }
          ],
          staticClass: "g-core-image-corp-container"
        },
        [
          _c("crop", {
            ref: "cropBox",
            attrs: {
              "is-resize": _vm.resize && !_vm.crop,
              ratio: _vm.cropRatio,
              "is-rotate": _vm.rotate
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "info-aside" }, [
            _c(
              "p",
              {
                staticClass: "btn-groups rotate-groups",
                staticStyle: { display: "none" }
              },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-rotate",
                    attrs: { type: "button" },
                    on: { click: _vm.doRotate }
                  },
                  [_vm._v("↺")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-reverserotate",
                    attrs: { type: "button" },
                    on: { click: _vm.doReverseRotate }
                  },
                  [_vm._v("↻")]
                )
              ]
            ),
            _vm._v(" "),
            _vm.crop
              ? _c("p", { staticClass: "btn-groups" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-upload",
                      attrs: { type: "button" },
                      on: { click: _vm.doCrop }
                    },
                    [_vm._v(_vm._s(_vm.cropBtn.ok))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-cancel",
                      attrs: { type: "button" },
                      on: { click: _vm.cancel }
                    },
                    [_vm._v(_vm._s(_vm.cropBtn.cancel))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.resize && !_vm.crop
              ? _c("p", { staticClass: "btn-groups" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-upload",
                      attrs: { type: "button" },
                      on: { click: _vm.doResize }
                    },
                    [_vm._v(_vm._s(_vm.ResizeBtn.ok))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-cancel",
                      attrs: { type: "button" },
                      on: { click: _vm.cancel }
                    },
                    [_vm._v(_vm._s(_vm.ResizeBtn.cancel))]
                  )
                ])
              : _vm._e()
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8eeadfcc", module.exports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cover-avatar text-center" },
    [
      _c("vue-core-image-upload", {
        attrs: {
          field: "avatar",
          url: "/api/user/avatar",
          params: _vm.params,
          headers: _vm.headers,
          "img-format": "png"
        },
        on: {
          "crop-success": _vm.cropSuccess,
          "crop-upload-success": _vm.cropUploadSuccess,
          "crop-upload-fail": _vm.cropUploadFail
        },
        model: {
          value: _vm.show,
          callback: function($$v) {
            _vm.show = $$v
          },
          expression: "show"
        }
      }),
      _vm._v(" "),
      _c("img", { staticClass: "avatar", attrs: { src: _vm.imgDataUrl } }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-success file", on: { click: _vm.toggleShow } },
        [_c("span", [_vm._v("修改头像")])]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e44c01e0", module.exports)
  }
}

/***/ })

});