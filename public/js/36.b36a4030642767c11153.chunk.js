webpackJsonp([36],{

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(528)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(531)
/* template */
var __vue_template__ = __webpack_require__(532)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cf042fca"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\auth\\register_tip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cf042fca", Component.options)
  } else {
    hotAPI.reload("data-v-cf042fca", Component.options)
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
var update = __webpack_require__(4)("0832acbb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cf042fca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register_tip.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cf042fca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register_tip.vue");
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
exports.i(__webpack_require__(530), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "@keyframes error404animation {\r\n  0% {\r\n    transform: rotateZ(0deg);\r\n  }\r\n  20% {\r\n    transform: rotateZ(-60deg);\r\n  }\r\n  40% {\r\n    transform: rotateZ(-10deg);\r\n  }\r\n  60% {\r\n    transform: rotateZ(50deg);\r\n  }\r\n  80% {\r\n    transform: rotateZ(-20deg);\r\n  }\r\n  100% {\r\n    transform: rotateZ(0deg);\r\n  }\r\n}\r\n.error404{\r\n  &-body-con{\r\n    width: 700px;\r\n    height: 500px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%,-50%);\r\n    &-title{\r\n      text-align: center;\r\n      font-size: 240px;\r\n      font-weight: 700;\r\n      color: #2d8cf0;\r\n      height: 260px;\r\n      line-height: 260px;\r\n      span{\r\n        display: inline-block;\r\n        font-size: 230px;\r\n        animation: error404animation 3s ease 0s infinite alternate;\r\n      }\r\n    }\r\n    &-message{\r\n      display: block;\r\n      text-align: center;\r\n      font-size: 20px;\r\n      font-weight: 500;\r\n      letter-spacing: 12px;\r\n      color: #dddde2;\r\n    }\r\n  }\r\n  &-btn-con{\r\n    text-align: center;\r\n    padding: 20px 0 0 0;\r\n  }\r\n}", ""]);

// exports


/***/ }),

/***/ 531:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "register_tip",
    methods: {
        goHome: function goHome() {
            this.$router.push('/');
        }
    }
});

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "error404-body-con-title" }, [
        _c("span", [_c("Icon", { attrs: { type: "checkmark-circled" } })], 1)
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "error404-body-con-message" }, [
        _vm._v("邮箱链接已发送!请验证您的邮箱")
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cf042fca", module.exports)
  }
}

/***/ })

});