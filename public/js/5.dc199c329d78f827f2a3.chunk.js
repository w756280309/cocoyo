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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

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




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        FormNavbar: __WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar___default.a,
        Avatar: __WEBPACK_IMPORTED_MODULE_1__components_Avatar___default.a
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
                    _c("el-col", { attrs: { span: 4 } }, [_c("avatar")], 1),
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

!function(A,Q){ true?module.exports=Q():"function"==typeof define&&define.amd?define([],Q):"object"==typeof exports?exports.VueCoreImageUpload=Q():A.VueCoreImageUpload=Q()}(this,function(){return function(A){function Q(C){if(o[C])return o[C].exports;var g=o[C]={i:C,l:!1,exports:{}};return A[C].call(g.exports,g,g.exports,Q),g.l=!0,g.exports}var o={};return Q.m=A,Q.c=o,Q.i=function(A){return A},Q.d=function(A,o,C){Q.o(A,o)||Object.defineProperty(A,o,{configurable:!1,enumerable:!0,get:C})},Q.n=function(A){var o=A&&A.__esModule?function(){return A.default}:function(){return A};return Q.d(o,"a",o),o},Q.o=function(A,Q){return Object.prototype.hasOwnProperty.call(A,Q)},Q.p="",Q(Q.s=14)}({14:function(A,Q,o){"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.default="data:image/gif;base64,R0lGODlhGAAYAPQAAP///3FxcePj4/v7++3t7dLS0vHx8b+/v+Dg4MfHx+jo6M7Oztvb2/f397Kysru7u9fX16qqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA=="}})});

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}({0:function(e,t,n){"use strict";e.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(e){var t=[];for(var n in e){var o=e[n];"number"==typeof o&&(o+="px"),t.push(n+": "+o+";")}return t.join("")}}},13:function(e,t,n){"use strict";function o(e,t,n){if(t){var o=u?e.changedTouches[0].clientX:e.clientX,r=u?e.changedTouches[0].clientY:e.clientY,i=o-n.x,f=r-n.y;return i<=n.minLeft&&(i=n.minLeft),i>=n.maxLeft&&(i=n.maxLeft),f<=n.minTop&&(f=n.minTop),f>=n.maxTop&&(f=n.maxTop),{left:i,top:f}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),u=i.default.isMobile}})});

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";e.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(e){var t=[];for(var r in e){var o=e[r];"number"==typeof o&&(o+="px"),t.push(r+": "+o+";")}return t.join("")}}}])});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_core_image_upload__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_core_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_core_image_upload__);
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
        'vue-core-image-upload': __WEBPACK_IMPORTED_MODULE_0_vue_core_image_upload___default.a
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
  __webpack_require__(298)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_loading_gif__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_loading_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_loading_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper__);
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
        src: __WEBPACK_IMPORTED_MODULE_1__lib_loading_gif___default.a,
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

      this.files = e.target.files;
      if (this.crop || this.resize) {
        this.__showImage();
        return;
      }
      this.__dispatch('imagechanged', this.files.length > 1 ? this.files : this.files[0]);
      if (this.compress && this.files[0]['type'] !== 'image/png' && this.files[0]['type'] !== 'image/gif') {
        __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default.a.compress(this.files[0], 100 - this.compress, function (code) {
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
        __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default.a.init(src, function (src) {
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
      return __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default.a.rotate(targetImage, 1, function (src) {
        self.__initImage(src);
      });
    },
    doReverseRotate: function doReverseRotate(e) {
      var self = this;
      var cropBox = this.$refs.cropBox;
      var targetImage = cropBox.getCropImage();
      this.data.compress = 100 - this.compress;
      return __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default.a.rotate(targetImage, -1, function (src) {
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
        return __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default.a.crop(targetImage, this.data, function (code) {
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
        return __WEBPACK_IMPORTED_MODULE_2__lib_canvas_helper___default.a.resize(targetImage, this.data, function (code) {
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

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=24)}({24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:{type:String},text:{type:String,default:"Upload Image"},extensions:{type:String,default:"png,jpg,jpeg,gif,svg,webp"},inputOfFile:{type:String,default:"files"},crop:{type:[String,Boolean],default:""},cropBtn:{type:Object,default:function(){return{ok:"Ok",cancel:"Cancel"}}},cropRatio:{type:String,default:"1:1"},resize:{type:[String,Boolean],default:!1},rotate:{type:Boolean,default:!1},ResizeBtn:{type:Object,default:function(){return{ok:"Ok",cancel:"Cancel"}}},maxFileSize:{type:Number,default:104857600},maxWidth:{type:Number},maxHeight:{type:Number},inputAccept:{type:String,default:"image/jpg,image/jpeg,image/png,image/gif"},isXhr:{type:Boolean,default:!0},headers:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},multipleSize:{type:Number,default:0},minWidth:{type:Number,default:50},compress:{type:[Number,String],default:0},credentials:{type:[String,Boolean],default:!0}}}})});

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(300)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_drag__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_drag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_drag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_resize__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_resize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_resize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loading_gif__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loading_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_loading_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_helper__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_canvas_helper__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_canvas_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_canvas_helper__);
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
//
//








// set cropbox size in image
var CROPBOX_PERCENT = 75;
var isMobile = __WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.isMobile;
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
      src: __WEBPACK_IMPORTED_MODULE_2__lib_loading_gif___default.a,
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

      var data = __WEBPACK_IMPORTED_MODULE_4__lib_canvas_helper___default.a.rotate2(this.originSrc, degress, function (data, w, h) {
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
      $selectCropBox.style.cssText = __WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.setCssText(CSSObj);
      if (CSSObj.height > imageHeight) {
        var baseCropHeight = imageHeight / 100 * CROPBOX_PERCENT;
        CSSObj.height = baseCropHeight;
        CSSObj.width = CSSObj.height * ratioW / ratioH;
        CSSObj.left = (imageWidth - CSSObj.width) / 2, CSSObj.top = (imageHeight - CSSObj.height) / 2, $selectCropBox.style.cssText = __WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.setCssText(CSSObj);
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
        x: __WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.isMobile ? e.touches[0].clientX : e.clientX,
        y: __WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.isMobile ? e.touches[0].clientY : e.clientY,
        w: $el.offsetWidth,
        h: $el.offsetHeight
      };
      this.el = $el;
      this.container = $container;
      var maxCoor = this._getMaxCropAreaWidth();
      var move = function move(ev) {
        var newCropStyle = __WEBPACK_IMPORTED_MODULE_1__lib_resize___default()(ev, self.el, $container, coor, self.ratioVal);
        if (newCropStyle && (newCropStyle.width <= maxCoor.maxWidth || newCropStyle.height <= maxCoor.maxHeight)) {
          self.cropCSS.width = newCropStyle.width;
          self.cropCSS.height = newCropStyle.height;
        }
      };
      var end = function end(ev) {
        this.el = null;
        if (__WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.isMobile) {
          document.removeEventListener('touchmove', move, false);
          document.removeEventListener('touchend', end, false);
        }
        document.removeEventListener('mousemove', move, false);
        document.removeEventListener('mouseup', end, false);
      };
      if (__WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.isMobile) {
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
      var isMobile = __WEBPACK_IMPORTED_MODULE_3__lib_helper___default.a.isMobile;
      var coor = {
        x: (isMobile ? e.touches[0]['clientX'] : e.clientX) - $el.offsetLeft,
        y: (isMobile ? e.touches[0]['clientY'] : e.clientY) - $el.offsetTop,
        maxLeft: $cropBox.offsetLeft,
        maxTop: $cropBox.offsetTop,
        minLeft: $cropBox.offsetWidth + $cropBox.offsetLeft - $el.offsetWidth,
        minTop: $cropBox.offsetHeight + $cropBox.offsetTop - $el.offsetHeight
      };
      var move = function move(ev) {
        var newCropStyle = __WEBPACK_IMPORTED_MODULE_0__lib_drag___default()(ev, self.el, coor);
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

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(this,function(){return function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)}({0:function(e,t,i){"use strict";e.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(e){var t=[];for(var i in e){var o=e[i];"number"==typeof o&&(o+="px"),t.push(i+": "+o+";")}return t.join("")}}},23:function(e,t,i){"use strict";function o(e,t,i,o,n){if(t){var r=document.body.offsetHeight,d=1/n,f=parseFloat(window.getComputedStyle(i).width),c=parseFloat(window.getComputedStyle(i).height),s=document.querySelector(".info-aside"),a=(u-f)/2,l=parseFloat(window.getComputedStyle(s).height),p=(r-c-l)/2,g=h?e.changedTouches[0].clientX:e.clientX,w=h?e.changedTouches[0].clientY:e.clientY,y=t.offsetWidth,b=t.offsetHeight,x={};return n>=1&&g<=a+f?(y>=f&&(x.width=f),x.width=o.w+g-o.x,x.height=y*d,f>c?y>c&&(x.height=c,x.width=c*n):f<c?y>f&&(x.width=f,x.height=f*d):y>=f&&(x.width=f,x.height=f*d)):n<1&&w<p+c+l?(x.height=o.h+w-o.y,x.width=b*n,f>c?b>c&&(x.height=c,x.width=c*n):y>f&&(x.width=f,x.height=f*d)):"auto"==n&&w<=p+c+l&&g<=p+f?(x.height=o.h+w-o.y,x.width=o.w+g-o.x):g<=a+f&&(x.width=o.w+g-o.x,x.height=t.style.width,f>c?b>c&&(x.height=c,x.width=c):f<c?y>f&&(x.width=f,x.height=f):y>f&&(x.width=t.style.height=f)),x}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=i(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),h=r.default.isMobile,u=document.body.offsetWidth}})});

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
            on: { touchstart: _vm.drag, mousedown: _vm.drag }
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
          staticStyle: {
            display: "block",
            cursor: "pointer",
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "1242px",
            height: "61px",
            opacity: "0",
            margin: "0px",
            padding: "0px",
            overflow: "hidden"
          },
          attrs: {
            method: "post",
            enctype: "multipart/form-data",
            action: "/api2/common_user/cropHeadUrl"
          }
        },
        [
          _c("input", {
            staticStyle: { width: "100%", height: "100%" },
            attrs: {
              disabled: _vm.uploading,
              id: "g-core-upload-input-" + _vm.formID,
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
          staticClass: "g-core-image-corp-container",
          attrs: { id: "vciu-modal-" + _vm.formID }
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
        staticClass: "btn btn-primary",
        attrs: {
          crop: false,
          data: _vm.data,
          "max-file-size": 5242880,
          url: "http://101.198.151.190/api/upload.php"
        },
        on: { imageuploaded: _vm.imageuploaded }
      })
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

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueCoreImageUpload=e():t.VueCoreImageUpload=e()}(this,function(){return function(t){function e(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}({12:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={_getImageType:function(t){var e="image/jpeg",a=t.match(/(image\/[\w]+)\.*/)[0];return void 0!==a&&(e=a),e},compress:function(t,e,a){var r=new FileReader,o=this;r.onload=function(r){var n=new Image;n.src=r.target.result,n.onload=function(){var r=o._getImageType(t.type),g=o._getCanvas(n.naturalWidth,n.naturalHeight),i=(g.getContext("2d").drawImage(n,0,0),g.toDataURL(r,e/100));a(i)}},r.readAsDataURL(t)},crop:function(t,e,a){var r=function(t){return"number"==typeof t};if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW,n=e.toCropImgH;e.maxWidth&&e.maxWidth<o&&(o=e.maxWidth,n=e.toCropImgH*o/e.toCropImgW),e.maxHeight&&e.maxHeight<n&&(n=e.maxHeight);var g=this._getCanvas(o,n),i=(g.getContext("2d").drawImage(t,e.toCropImgX,e.toCropImgY,e.toCropImgW,e.toCropImgH,0,0,o,n),this._getImageType(t.src));a(g.toDataURL(i,e.compress/100))}},init:function(t,e){var a=new Image;a.src=t;var r=this;a.onload=function(){var t=r._getImageType(a.src),o=r._getCanvas(a.naturalWidth,a.naturalHeight);o.getContext("2d").drawImage(a,0,0);var n=o.toDataURL(t,100);e(n)}},rotate:function(t,e,a){var r=new Image;r.src=t.src;var o=this;r.onload=function(){var t=o._getImageType(r.src),n=o._getCanvas(r.naturalHeight,r.naturalWidth),g=n.getContext("2d");1==e?(g.rotate(90*Math.PI/180),g.translate(0,-n.width)):(g.rotate(-90*Math.PI/180),g.translate(-n.height,0)),g.drawImage(r,0,0);var i=n.toDataURL(t,100);a(i)}},resize:function(t,e,a){var r=function(t){return"number"==typeof t};if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW*e.imgChangeRatio,n=e.toCropImgH*e.imgChangeRatio,g=this._getCanvas(o,n),i=(g.getContext("2d").drawImage(t,0,0,e.toCropImgW,e.toCropImgH,0,0,o,n),this._getImageType(t.src));a(g.toDataURL(i,e.compress/100))}},rotate2:function(t,e,a){var r=this;this._loadImage(t,function(o){var n=o.naturalWidth,g=o.naturalHeight,i=Math.max(n,g),u=r._getCanvas(i,i),m=u.getContext("2d");m.save(),m.translate(i/2,i/2),m.rotate(e*(Math.PI/180));var c=-i/2,s=-i/2;if(0===(e%=360))return a(t,n,g);if(e%180!=0){-90===e||270===e?c=i/2-n:s=i/2-g;var p=n;n=g,g=p}else c=i/2-n,s=i/2-g;m.drawImage(o,c,s),r._getCanvas(n,g).getContext("2d").drawImage(u,0,0,n,g,0,0,n,g);var d=r._getImageType(o.src),f=u.toDataURL(d,1);a(f,n,g)})},_loadImage:function(t,e){var a=new Image;a.src=t,a.onload=function(){e(a)},a.onerror=function(){console.log("Error: image error!")}},_getCanvas:function(t,e){var a=document.createElement("canvas");return a.width=t,a.height=e,a}}}})});

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("f42b2b1a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8eeadfcc\",\"scoped\":false,\"hasInlineConfig\":true}!./style.css", function() {
     var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8eeadfcc\",\"scoped\":false,\"hasInlineConfig\":true}!./style.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.g-core-image-upload-btn{\n  position: relative;\n  overflow: hidden;\n}\n.g-core-image-upload-form{\n  position: absolute;\n  left:0;\n  right: 0;\n  top:0;\n  bottom:0;\n  opacity: 0;\n}\n.g-core-image-upload-container{\n  position: absolute;\n  background: #111;\n  z-index: 900;\n}\n.g-core-image-upload-modal{\n  position: absolute;\n  left:0;\n  right:0;\n  width: 100%;\n  height: 100%;\n  border:1px solid #ccc;\n  z-index: 899;\n}\n.dropped{\n  border:4px solid #ea6153;\n}\n.g-core-image-corp-container{\n  z-index: 1900;\n  position:fixed;\n  left:0;\n  right:0;\n  top:0;\n  bottom: 0;\n  background: rgba(0,0,0,.9);\n  color:#f1f1f1;\n}\n.g-core-image-corp-container .image-aside{\n  position: absolute;\n  right: 30px;\n  left:30px;\n  top:60px;\n  bottom:20px;\n  text-align: center;\n}\n.g-core-image-corp-container .image-aside img{\n  max-width: 100%;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.g-core-image-corp-container .info-aside{\n  position: absolute;\n  left:0;\n  right: 0;\n  top:0;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #fefefe;\n  color:#777;\n}\n.g-core-image-corp-container .btn-groups{\n  text-align: right;\n  margin: 5px 0 0;\n}\n.g-core-image-corp-container .btn{\n  display: inline-block;\n  padding: 0 15px;\n  height: 32px;\n  margin-left: 15px;\n  background: #fff;\n  border:1px solid #ccc;\n  border-radius: 2px;\n  font-size: 13px;\n  color:#222;\n  line-height: 32px;\n  -webkit-transition: all .1s ease-in;\n  transition: all .1s ease-in;\n}\n.g-core-image-corp-container .btn:hover{\n  border:1px solid #777;\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.05);\n          box-shadow: 0 1px 3px rgba(0,0,0,.05);\n}\n.g-core-image-corp-container .btn:active{\n  background: #ddd;\n}\n.g-core-image-corp-container .btn:disabled{\n  background: #eee !important;\n  border-color:#ccc;\n  cursor: not-allowed;\n}\n.g-core-image-corp-container .btn-upload{\n  background: #27ae60;\n  border-color:#27ae60;\n  color:#fff;\n}\n.g-core-image-corp-container .btn-upload:hover{\n  background: #2dc26c;\n  border-color:#27ae60;\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.05);\n          box-shadow: 0 1px 3px rgba(0,0,0,.05);\n}\n", ""]);

// exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(301);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("041e240a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68e68340\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./crop.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68e68340\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./crop.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n.g-crop-image-principal[data-v-68e68340]{\n  overflow: hidden;\n  position: relative;\n  background-color: #fff;\n  background-image: -webkit-gradient(linear, left bottom, right top, color-stop(25%, #efefef), color-stop(25%, transparent), color-stop(75%, transparent), color-stop(75%, #efefef), to(#efefef)),-webkit-gradient(linear, left bottom, right top, color-stop(25%, #efefef), color-stop(25%, transparent), color-stop(75%, transparent), color-stop(75%, #efefef), to(#efefef));\n  background-image: linear-gradient(to top right, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),linear-gradient(to top right, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);\n  background-position: 0 0,10px 10px;\n  background-size: 21px 21px;\n}\n.image-aside[data-v-68e68340]{\n  overflow: hidden;\n  position: absolute;\n  right: 30px;\n  left:30px;\n  top:70px;\n  bottom:40px;\n  text-align: center;\n}\n.image-aside .image-wrap[data-v-68e68340]{\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-box-shadow: 0 3px 5px -2px rgba(0,0,0,.25);\n          box-shadow: 0 3px 5px -2px rgba(0,0,0,.25);\n  background-size: cover;\n}\n.image-mask[data-v-68e68340]{\n  position: absolute;\n  left: 0;\n  top: 0;\n  width:100%;\n  height: 100%;\n}\n.image-mask .mask[data-v-68e68340] {\n  position: absolute;\n  background-color: rgba(255,255,255,.6);\n}\n.crop-box[data-v-68e68340]{\n  z-index: 2000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  background: none;\n  cursor: move;\n  width:100px;\n  height: 100px;\n  border:1px solid rgba(255,255,255, .95);\n}\n.crop-box[data-v-68e68340]:after,\n.crop-box[data-v-68e68340]:before{\n  content: '';\n  display: block;\n  opacity: 0;\n  position: absolute;\n  left: 33.3333%;\n  top: 0;\n  width: 33.334%;\n  height: 100%;\n  background-color: transparent;\n  border-color: rgba(255,255,255,.7);\n  border-style: solid;\n  border-width: 0;\n}\n.crop-box[data-v-68e68340]:active::before,\n.crop-box[data-v-68e68340]:active::after{\n  opacity: 1;\n}\n.crop-box[data-v-68e68340]:before{\n  border-left-width: 1px;\n  border-right-width: 1px;\n}\n.crop-box[data-v-68e68340]:after{\n  top: 33.3333%;\n  left: 0;\n  height: 33.3334%;\n  width: 100%;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.crop-box .g-resize[data-v-68e68340]{\n  display: inline-block;\n  z-index: 1910;\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  width: 16px;\n  height: 16px;\n  cursor: se-resize;\n  border-radius: 10px;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 4px -2px rgba(0,0,0,.25);\n          box-shadow: 0 2px 4px -2px rgba(0,0,0,.25);\n}\n", ""]);

// exports


/***/ })

});