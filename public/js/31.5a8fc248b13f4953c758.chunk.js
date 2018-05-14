webpackJsonp([31],{

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(528)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(530)
/* template */
var __vue_template__ = __webpack_require__(531)
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

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(529);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3b1bdcac", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ee414f3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./confirmed.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ee414f3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./confirmed.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes error404animation {\n0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n20% {\n    -webkit-transform: rotateZ(-60deg);\n            transform: rotateZ(-60deg);\n}\n40% {\n    -webkit-transform: rotateZ(-10deg);\n            transform: rotateZ(-10deg);\n}\n60% {\n    -webkit-transform: rotateZ(50deg);\n            transform: rotateZ(50deg);\n}\n80% {\n    -webkit-transform: rotateZ(-20deg);\n            transform: rotateZ(-20deg);\n}\n100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n}\n@keyframes error404animation {\n0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n20% {\n    -webkit-transform: rotateZ(-60deg);\n            transform: rotateZ(-60deg);\n}\n40% {\n    -webkit-transform: rotateZ(-10deg);\n            transform: rotateZ(-10deg);\n}\n60% {\n    -webkit-transform: rotateZ(50deg);\n            transform: rotateZ(50deg);\n}\n80% {\n    -webkit-transform: rotateZ(-20deg);\n            transform: rotateZ(-20deg);\n}\n100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n}\n}\n.error404-body-con {\n  width: 700px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.error404-body-con-title {\n  text-align: center;\n  font-size: 240px;\n  font-weight: 700;\n  color: #2d8cf0;\n  height: 260px;\n  line-height: 260px;\n}\n.error404-body-con-title span {\n  display: inline-block;\n  font-size: 230px;\n  -webkit-animation: error404animation 3s ease 0s infinite alternate;\n          animation: error404animation 3s ease 0s infinite alternate;\n}\n.error404-body-con-message {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  /* font-weight: 500; */\n  letter-spacing: 3px;\n  color: #dddde2;\n}\n.error404-btn-con {\n  text-align: center;\n  padding: 20px 0 0 0;\n}\n.back {\n  font-size: 14px;\n  text-align: center;\n  margin-top: 26px;\n  line-height: 20px;\n  color: #2878FF;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 530:
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

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "error404-body-con-title" }, [
      _vm.confirmed
        ? _c("span", [_c("Icon", { attrs: { type: "checkmark-circled" } })], 1)
        : _c("span", [_c("Icon", { attrs: { type: "close-circled" } })], 1)
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "error404-body-con-message" }, [
      _vm._v("\n        您的邮箱 "),
      _c("strong", [_vm._v(_vm._s(_vm.email))]),
      _vm._v(" "),
      _vm.confirmed
        ? _c("span", [_vm._v("已经验证成功,开启愉快之旅吧")])
        : _c("span", [
            _vm._v(
              "\n            验证失败," + _vm._s(_vm.message) + "。\n        "
            )
          ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "error404-btn-con" }, [
      _vm.confirmed
        ? _c(
            "div",
            [
              _c("v-btn", { attrs: { block: "", color: "success", to: "/" } }, [
                _vm._v("返回主页")
              ])
            ],
            1
          )
        : _c(
            "div",
            [
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
                  staticStyle: { "background-color": "#F96854 !important" },
                  attrs: { block: "", color: "success" },
                  on: { click: _vm.getCode }
                },
                [_vm._v("重新发送验证链接")]
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