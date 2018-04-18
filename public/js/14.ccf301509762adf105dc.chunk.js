webpackJsonp([14],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(198)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(200)
/* template */
var __vue_template__ = __webpack_require__(201)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e8dcf96"
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\categories\\add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e8dcf96", Component.options)
  } else {
    hotAPI.reload("data-v-6e8dcf96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("30508657", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e8dcf96\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e8dcf96\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 200:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {},
            ruleValidate: {
                name: [{ required: true, message: '分类名不能为空' }],
                path: [{ required: true, message: '路径不能为空' }],
                description: [{ required: true, message: '分类描述不能为空' }]
            }
        };
    },

    methods: {
        onSubmit: function onSubmit(name) {
            var _this = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this.$http.post('categories', _this.form).then(function (response) {
                        _this.$Notice.success({
                            title: '添加分类成功'
                        });
                        _this.$router.push('/categories');
                    });
                } else {
                    _this.$Message.error('请完善表单信息!');
                }
            });
        }
    }
});

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Row",
        [
          _c(
            "Col",
            { attrs: { span: 24 } },
            [
              _c(
                "Card",
                [
                  _c(
                    "Form",
                    {
                      ref: "form",
                      attrs: {
                        model: _vm.form,
                        rules: _vm.ruleValidate,
                        "label-position": "right",
                        "label-width": 100
                      }
                    },
                    [
                      _c(
                        "FormItem",
                        { attrs: { label: "分类名", prop: "name" } },
                        [
                          _c("Input", {
                            attrs: {
                              size: "large",
                              placeholder: "Enter something..."
                            },
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
                        "FormItem",
                        { attrs: { label: "路径", prop: "path" } },
                        [
                          _c("Input", {
                            attrs: {
                              size: "large",
                              placeholder: "Enter something..."
                            },
                            model: {
                              value: _vm.form.path,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "path", $$v)
                              },
                              expression: "form.path"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "FormItem",
                        { attrs: { label: "描述", prop: "description" } },
                        [
                          _c("Input", {
                            attrs: {
                              size: "large",
                              placeholder: "Enter something...",
                              type: "textarea",
                              autosize: { minRows: 2, maxRows: 5 }
                            },
                            model: {
                              value: _vm.form.description,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "description", $$v)
                              },
                              expression: "form.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "FormItem",
                        [
                          _c(
                            "Button",
                            {
                              attrs: { type: "success", long: "" },
                              on: {
                                click: function($event) {
                                  _vm.onSubmit("form")
                                }
                              }
                            },
                            [_vm._v("添加分类")]
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
    require("vue-hot-reload-api")      .rerender("data-v-6e8dcf96", module.exports)
  }
}

/***/ })

});