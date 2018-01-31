webpackJsonp([4],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(302)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(304)
/* template */
var __vue_template__ = __webpack_require__(305)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b292cfc"
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\links\\edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b292cfc", Component.options)
  } else {
    hotAPI.reload("data-v-5b292cfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(233)
/* template */
var __vue_template__ = __webpack_require__(234)
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("59b48d74", content, false);
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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 233:
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

/***/ 234:
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("1bffa699", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b292cfc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b292cfc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_dashboard_form_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_auth_auth__ = __webpack_require__(49);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    created: function created() {
        var _this = this;

        this.$http.get('links/' + this.$route.params.id + '/edit').then(function (response) {
            _this.form = response.data;
            _this.fileLists = [{ name: '图片', url: _this.form.image }];
        });
    },
    data: function data() {
        return {
            headers: {
                Authorization: Object(__WEBPACK_IMPORTED_MODULE_1__plugins_auth_auth__["a" /* getToken */])().token_type + ' ' + Object(__WEBPACK_IMPORTED_MODULE_1__plugins_auth_auth__["a" /* getToken */])().access_token
            },
            limit: 1,
            fileLists: [],
            form: {
                name: '',
                link: '',
                image: '',
                status: true
            },
            rules: {
                name: [{ required: true, message: '请输入链接名', trigger: 'change' }, { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'change' }],
                link: [{ required: true, message: '请输入链接', trigger: 'change' }],
                image: [{ required: true, message: '请上传图片', trigger: 'change' }]
            }
        };
    },

    methods: {
        onSubmit: function onSubmit(formName) {
            var _this2 = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this2.$http.put('links/' + _this2.$route.params.id, _this2.form).then(function (response) {
                        _this2.$notify({
                            title: 'success',
                            message: '编辑成功',
                            type: 'success'
                        });
                        _this2.$router.push('/links');
                    });
                } else {
                    return false;
                }
            });
        },
        handleBack: function handleBack() {
            this.$router.push('/links');
        },
        handleImageSuccess: function handleImageSuccess(res, file) {
            this.form.image = res.relative_url;
        },
        handleImagePreview: function handleImagePreview(file) {
            console.log(file);
            this.$alert('<img src="' + file.response.relative_url + '">', '', {
                dangerouslyUseHTMLString: true,
                showConfirmButton: false,
                customClass: 'alert-preview'
            });
        }
    }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("form-navbar", {
        attrs: { page_name: "编辑友链", menu: "友链列表", back: "/links" }
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
                    _c(
                      "el-col",
                      [
                        _c(
                          "el-form",
                          {
                            ref: "form",
                            attrs: {
                              "status-icon": "",
                              rules: _vm.rules,
                              model: _vm.form,
                              "label-width": "80px"
                            }
                          },
                          [
                            _c(
                              "el-form-item",
                              { attrs: { label: "链接名", prop: "name" } },
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
                              { attrs: { label: "链 接", prop: "link" } },
                              [
                                _c("el-input", {
                                  model: {
                                    value: _vm.form.link,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "link", $$v)
                                    },
                                    expression: "form.link"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "图片", prop: "image" } },
                              [
                                _c(
                                  "el-upload",
                                  {
                                    attrs: {
                                      headers: _vm.headers,
                                      name: "image",
                                      action: "/api/dashboard/links/upload",
                                      "on-success": _vm.handleImageSuccess,
                                      "on-preview": _vm.handleImagePreview,
                                      "file-list": _vm.fileLists,
                                      limit: _vm.limit,
                                      "list-type": "picture"
                                    }
                                  },
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: {
                                          size: "small",
                                          type: "primary"
                                        }
                                      },
                                      [_vm._v("点击上传")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "el-upload__tip",
                                        attrs: { slot: "tip" },
                                        slot: "tip"
                                      },
                                      [
                                        _vm._v(
                                          "只能上传jpg/png文件，且不超过500kb"
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              { attrs: { label: "是否开启", prop: "status" } },
                              [
                                _c("el-switch", {
                                  attrs: {
                                    "active-color": "#13ce66",
                                    "inactive-color": "#ff4949"
                                  },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                })
                              ],
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
                                    on: {
                                      click: function($event) {
                                        _vm.onSubmit("form")
                                      }
                                    }
                                  },
                                  [_vm._v("编辑")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-button",
                                  { on: { click: _vm.handleBack } },
                                  [_vm._v("取消")]
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
    require("vue-hot-reload-api")      .rerender("data-v-5b292cfc", module.exports)
  }
}

/***/ })

});