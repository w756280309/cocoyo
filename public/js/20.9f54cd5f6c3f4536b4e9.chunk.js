webpackJsonp([20],{

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(544)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(546)
/* template */
var __vue_template__ = __webpack_require__(547)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bf78d178"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\users\\edit_password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf78d178", Component.options)
  } else {
    hotAPI.reload("data-v-bf78d178", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(545);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f6837aa0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bf78d178\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_password.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bf78d178\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_password.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 546:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        var validatePass = function validatePass(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (_this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    _this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        var validatePassCheck = function validatePassCheck(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入确认密码'));
            } else if (value !== _this.formCustom.passwd) {
                callback(new Error('两次密码不一致'));
            } else {
                callback();
            }
        };

        return {
            formCustom: {
                passwd: '',
                passwdCheck: ''
            },
            ruleCustom: {
                passwd: [{ validator: validatePass, trigger: 'change' }, { min: 8, message: '不少于8个字符', trigger: 'change' }, { max: 16, message: '不大于16个字符', trigger: 'change' }],
                passwdCheck: [{ validator: validatePassCheck, trigger: 'blur' }, { min: 8, message: '不少于8个字符', trigger: 'change' }, { max: 16, message: '不大于16个字符', trigger: 'change' }]
            },
            loading: false,
            email: ''
        };
    },
    created: function created() {
        this.email = this.$store.state.user.userinfo.email;
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            var _this2 = this;

            this.loading = true;
            this.$refs[name].validate(function (valid) {
                if (valid) {
                    var data = {
                        password: _this2.formCustom.passwd,
                        password_confirmation: _this2.formCustom.passwdCheck
                    };
                    _this2.$http.put('users/' + _this2.$route.params.name + '/edit_password', data).then(function (response) {
                        _this2.$Message.success('修改成功');
                        _this2.loading = false;
                        _this2.$refs[name].resetFields();
                    });
                } else {
                    _this2.loading = false;
                    _this2.$Message.error('表单信息验证错误!');
                }
            });
        }
    }
});

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h2",
        [_c("Icon", { attrs: { type: "locked" } }), _vm._v(" 修改密码")],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "Form",
        {
          ref: "formCustom",
          attrs: {
            model: _vm.formCustom,
            rules: _vm.ruleCustom,
            "label-width": 150
          }
        },
        [
          _c(
            "FormItem",
            { attrs: { label: "邮箱" } },
            [
              _c("Input", {
                attrs: { disabled: "" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "密码", prop: "passwd" } },
            [
              _c("Input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.formCustom.passwd,
                  callback: function($$v) {
                    _vm.$set(_vm.formCustom, "passwd", $$v)
                  },
                  expression: "formCustom.passwd"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "确认密码", prop: "passwdCheck" } },
            [
              _c("Input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.formCustom.passwdCheck,
                  callback: function($$v) {
                    _vm.$set(_vm.formCustom, "passwdCheck", $$v)
                  },
                  expression: "formCustom.passwdCheck"
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
                  staticStyle: {
                    color: "#fff",
                    "background-color": "#1abc9c",
                    "border-color": "#1abc9c"
                  },
                  attrs: { loading: _vm.loading },
                  on: {
                    click: function($event) {
                      _vm.handleSubmit("formCustom")
                    }
                  }
                },
                [
                  !_vm.loading
                    ? _c("span", [_vm._v("应用修改")])
                    : _c("span", [_vm._v("Loading...")])
                ]
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
    require("vue-hot-reload-api")      .rerender("data-v-bf78d178", module.exports)
  }
}

/***/ })

});