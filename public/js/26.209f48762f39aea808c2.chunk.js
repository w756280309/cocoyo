webpackJsonp([26],{

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(531)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(533)
/* template */
var __vue_template__ = __webpack_require__(534)
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
Component.options.__file = "resources\\assets\\js\\views\\app\\auth\\socialite.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a7f0ebe", Component.options)
  } else {
    hotAPI.reload("data-v-1a7f0ebe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("92388558", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a7f0ebe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./socialite.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a7f0ebe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./socialite.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes error404animation {\n0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n20% {\n    -webkit-transform: rotateZ(-60deg);\n            transform: rotateZ(-60deg);\n}\n40% {\n    -webkit-transform: rotateZ(-10deg);\n            transform: rotateZ(-10deg);\n}\n60% {\n    -webkit-transform: rotateZ(50deg);\n            transform: rotateZ(50deg);\n}\n80% {\n    -webkit-transform: rotateZ(-20deg);\n            transform: rotateZ(-20deg);\n}\n100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n}\n@keyframes error404animation {\n0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n20% {\n    -webkit-transform: rotateZ(-60deg);\n            transform: rotateZ(-60deg);\n}\n40% {\n    -webkit-transform: rotateZ(-10deg);\n            transform: rotateZ(-10deg);\n}\n60% {\n    -webkit-transform: rotateZ(50deg);\n            transform: rotateZ(50deg);\n}\n80% {\n    -webkit-transform: rotateZ(-20deg);\n            transform: rotateZ(-20deg);\n}\n100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n}\n.error404-body-con {\n  width: 700px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.error404-body-con-title {\n  text-align: center;\n  font-size: 240px;\n  font-weight: 700;\n  color: #2d8cf0;\n  height: 260px;\n  line-height: 260px;\n}\n.error404-body-con-title span {\n  display: inline-block;\n  font-size: 230px;\n  -webkit-animation: error404animation 3s ease 0s infinite alternate;\n          animation: error404animation 3s ease 0s infinite alternate;\n}\n.error404-body-con-message {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  /* font-weight: 500; */\n  letter-spacing: 3px;\n  color: #dddde2;\n}\n.error404-btn-con {\n  text-align: center;\n  padding: 20px 0 0 0;\n}\n.avatar-base__19M6 {\n  text-align: center;\n}\n.avatar__2sMj {\n  cursor: pointer;\n  height: 140px;\n  width: 140px;\n  border: 5px solid #fff;\n  border-radius: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_auth__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        return {
            code: '',
            valid: true,
            form: {
                avatar: '',
                name: '',
                password: '',
                password_confirmation: ''
            },
            nameRules: [function (v) {
                return !!v || '请输入昵称';
            }, function (v) {
                return v.length <= 10 || '名称必须少于8个字符';
            }, function (v) {
                return v.length >= 3 || '名称必须大于3个字符';
            }],
            emailRule: [function (v) {
                return !!v || '请输入邮箱';
            }, function (v) {
                return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                );
            }],
            passwordRule: [function (v) {
                return !!v || '请输入密码';
            }, function (v) {
                return v.length <= 16 || '密码必须少于16个字符';
            }, function (v) {
                return v.length >= 6 || '密码必须大于6个字符';
            }],
            passwordConfirmationRule: [function (v) {
                return !!v || '请输入确认密码';
            }, function (v) {
                return v == _this.form.password || '两次密码不一致';
            }]
        };
    },
    created: function created() {
        var _this2 = this;

        this.$http.post('socials/' + this.$route.params.driver + '/authorizations', { code: this.$route.query.code }).then(function (response) {
            _this2.code = response.data.code;

            if (_this2.code == '1001') {
                _this2.form = response.data.social_user;
            }
            if (_this2.code == '1002') {
                _this2.$router.push({
                    path: '/register_success',
                    query: { email: response.data.user.email }
                });
            }
            if (_this2.code == '1003') {
                _this2.$store.commit('SET_USERINFO', response.data.user);
                _this2.$store.commit('SET_TOKEN', response.data.token);
            }
        });
    },

    methods: {
        goHome: function goHome() {
            this.$router.push('/');
        },
        submit: function submit() {
            var _this3 = this;

            if (this.$refs.form.validate()) {
                this.$http.post('register', this.form).then(function (response) {
                    _this3.$router.push({
                        path: '/register_success',
                        query: { email: _this3.form.email }
                    });
                });
            }
        }
    }
});

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.code == "1003"
      ? _c("div", [
          _c("div", { staticClass: "error404-body-con-title" }, [
            _c(
              "span",
              [_c("Icon", { attrs: { type: "checkmark-circled" } })],
              1
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "error404-body-con-message" }, [
            _vm._v("授权登录成功")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "error404-btn-con" },
            [
              _c(
                "Button",
                {
                  staticStyle: { width: "200px" },
                  attrs: { size: "large", type: "primary" },
                  on: { click: _vm.goHome }
                },
                [_vm._v("返回首页")]
              )
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.code == "1001"
      ? _c(
          "div",
          { staticClass: "main" },
          [
            _c(
              "v-form",
              {
                ref: "form",
                attrs: { "lazy-validation": "" },
                model: {
                  value: _vm.valid,
                  callback: function($$v) {
                    _vm.valid = $$v
                  },
                  expression: "valid"
                }
              },
              [
                _c("div", { staticClass: "avatar-base__19M6" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "avatar__2sMj",
                      attrs: { alt: "Avatar", src: _vm.form.avatar }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    label: "用户名",
                    rules: _vm.nameRules,
                    required: ""
                  },
                  model: {
                    value: _vm.form.name,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "name", $$v)
                    },
                    expression: "form.name"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "邮箱", rules: _vm.emailRule, required: "" },
                  model: {
                    value: _vm.form.email,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "email", $$v)
                    },
                    expression: "form.email"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    label: "密码",
                    rules: _vm.passwordRule,
                    required: "",
                    type: "password"
                  },
                  model: {
                    value: _vm.form.password,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "password", $$v)
                    },
                    expression: "form.password"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    label: "确认密码",
                    rules: _vm.passwordConfirmationRule,
                    required: "",
                    type: "password"
                  },
                  model: {
                    value: _vm.form.password_confirmation,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "password_confirmation", $$v)
                    },
                    expression: "form.password_confirmation"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { block: "", color: "primary", dark: "" },
                    on: { click: _vm.submit }
                  },
                  [_vm._v("注册")]
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a7f0ebe", module.exports)
  }
}

/***/ })

});