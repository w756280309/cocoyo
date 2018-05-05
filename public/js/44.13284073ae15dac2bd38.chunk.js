webpackJsonp([44],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(486)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(488)
/* template */
var __vue_template__ = __webpack_require__(489)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ee414f3"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\auth\\confirmed.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ee414f3", Component.options)
  } else {
    hotAPI.reload("data-v-5ee414f3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(487);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8b2be576", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ee414f3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./confirmed.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ee414f3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./confirmed.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.login .main .send_suc_box[data-v-5ee414f3]{\n    width: 310px;\n    margin: 0 auto;\n}\n.login .main .send_suc_box .text[data-v-5ee414f3]{\n    color: #797D85;\n    font-size: 14px;\n    line-height: 23px;\n    padding-top: 50px;\n}\n.login .main .send_suc_box .back[data-v-5ee414f3]{\n    font-size: 14px;\n    text-align: center;\n    margin-top: 26px;\n    line-height: 20px;\n    color: #2878FF;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 488:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            confirmed: true,
            email: '',
            message: '验证链接已过期',
            show: true,
            count: '',
            timer: null
        };
    },
    created: function created() {
        var _this = this;

        this.email = this.$route.query.from_user;
        var data = {
            code: this.$route.query.token,
            email: this.$route.query.from_user
        };

        var vm = this;
        this.$http.put('register/confirmed', data).then(function (response) {
            _this.$store.commit('SET_USERINFO', response.data.user);
            _this.$store.commit('SET_TOKEN', response.data.token);
        }).catch(function (err) {
            vm.confirmed = false;
            vm.message = '验证链接已失效';
        });
    },

    methods: {
        getCode: function getCode() {
            var _this2 = this;

            this.$http.put('register/send-register-email', { email: this.email }).then(function (response) {
                _this2.$Message.success('发送成功');
                var TIME_COUNT = 60;
                if (!_this2.timer) {
                    _this2.count = TIME_COUNT;
                    _this2.show = false;
                    _this2.timer = setInterval(function () {
                        if (_this2.count > 0 && _this2.count <= TIME_COUNT) {
                            _this2.count--;
                        } else {
                            _this2.show = true;
                            clearInterval(_this2.timer);
                            _this2.timer = null;
                        }
                    }, 1000);
                }
            });
        }
    }
});

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.confirmed
      ? _c("div", { staticClass: "main" }, [
          _c("h3", [_vm._v("邮箱验证成功")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "send_suc_box" },
            [
              _c("p", { staticClass: "text" }, [
                _vm._v("您的邮箱 "),
                _c("strong", [_vm._v(_vm._s(_vm.email))]),
                _vm._v(" 已经验证成功,开启愉快之旅吧。")
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { block: "", color: "error" } },
                [
                  _vm._v("邮箱验证成功  "),
                  _c("Icon", { attrs: { type: "checkmark-round" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "back" },
                [
                  _c("router-link", { attrs: { to: "/" } }, [
                    _vm._v("返回主页")
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      : _c("div", { staticClass: "main" }, [
          _c("h3", [_vm._v("邮箱验证失败")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "send_suc_box" },
            [
              _c("p", { staticClass: "text" }, [
                _vm._v("您的邮箱 "),
                _c("strong", [_vm._v(_vm._s(_vm.email))]),
                _vm._v("验证失败," + _vm._s(_vm.message) + "。")
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.show,
                      expression: "show"
                    }
                  ],
                  attrs: { block: "", color: "error" },
                  on: { click: _vm.getCode }
                },
                [_vm._v("点击重新发送验证链接")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.show,
                      expression: "!show"
                    }
                  ],
                  attrs: { block: "", depressed: "" }
                },
                [_vm._v(_vm._s(_vm.count) + "秒后重新发送")]
              )
            ],
            1
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ee414f3", module.exports)
  }
}

/***/ })

});