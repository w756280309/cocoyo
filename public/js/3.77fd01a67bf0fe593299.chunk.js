webpackJsonp([3],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(577)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(579)
/* template */
var __vue_template__ = __webpack_require__(590)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bb3e6fc"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\users\\notifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bb3e6fc", Component.options)
  } else {
    hotAPI.reload("data-v-7bb3e6fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(578);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("36eedd3e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bb3e6fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./notifications.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bb3e6fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./notifications.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.section__3bS4[data-v-7bb3e6fc] {\n    padding: 10px 15px;\n    border: none;\n    margin-bottom: 0px;\n    border-bottom: 1px solid #f2f2f2;\n}\n.section__3bS4 a[data-v-7bb3e6fc] {\n    color: #15b982;\n}\n", ""]);

// exports


/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__followed_user__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__followed_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__followed_user__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__received_comment__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__received_comment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__received_comment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        FollowedUser: __WEBPACK_IMPORTED_MODULE_0__followed_user___default.a,
        ReceivedComment: __WEBPACK_IMPORTED_MODULE_1__received_comment___default.a
    },
    data: function data() {
        return {
            notifications: []
        };
    },
    created: function created() {
        var _this = this;

        this.$http.get('notifications').then(function (response) {
            _this.notifications = response.data;
        });
    }
});

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(581)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(583)
/* template */
var __vue_template__ = __webpack_require__(584)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b3b37ae"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\users\\followed_user.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b3b37ae", Component.options)
  } else {
    hotAPI.reload("data-v-1b3b37ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(582);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("38881851", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b3b37ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./followed_user.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b3b37ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./followed_user.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.meta[data-v-1b3b37ae], .operate[data-v-1b3b37ae] {\n    color: #a9a7a7;\n    font-size: 12px;\n}\n.section__3bS4 a[data-v-1b3b37ae] {\n    color: #15b982;\n}\n.not_read_at[data-v-1b3b37ae]{\n    background-color:#f5f5f1;\n    border-bottom: 1px solid #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ 583:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['avatar', 'name', 'created_diff', 'read_at']
});

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "section__3bS4", class: _vm.read_at ? "" : "not_read_at" },
    [
      _c("router-link", { attrs: { to: "/users/" + _vm.name } }, [
        _c("img", {
          staticClass: "avatar img-circle",
          staticStyle: {
            width: "40px",
            height: "40px",
            background: "rgb(255, 255, 255)",
            padding: "3px",
            border: "1px solid rgb(197, 197, 197)"
          },
          attrs: { src: _vm.avatar }
        })
      ]),
      _vm._v(" "),
      _c("router-link", { attrs: { to: "/users/" + _vm.name } }, [
        _vm._v("\n        " + _vm._s(_vm.name) + "\n    ")
      ]),
      _vm._v("\n    •\n    关注了你\n    "),
      _c("span", { staticClass: "meta" }, [
        _vm._v("\n        • " + _vm._s(_vm.created_diff) + "\n    ")
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
    require("vue-hot-reload-api")      .rerender("data-v-1b3b37ae", module.exports)
  }
}

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(586)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(588)
/* template */
var __vue_template__ = __webpack_require__(589)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b977f9c6"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\users\\received_comment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b977f9c6", Component.options)
  } else {
    hotAPI.reload("data-v-b977f9c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a846ec86", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b977f9c6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./received_comment.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b977f9c6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./received_comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports
exports.i(__webpack_require__(407), "");

// module
exports.push([module.i, "\n.meta[data-v-b977f9c6], .operate[data-v-b977f9c6] {\n    color: #a9a7a7;\n    font-size: 12px;\n}\n.section__3bS4 a[data-v-b977f9c6] {\n    color: #15b982;\n}\n.section__3bS4 .tip[data-v-b977f9c6]{\n    margin-bottom: 10px;\n}\n.not_read_at[data-v-b977f9c6]{\n    background-color:#f5f5f1;\n     border-bottom: 1px solid #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ 588:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['title', 'name', 'created_diff', 'body', 'read_at', 'slug'],
    created: function created() {
        console.log(this.read_at);
    }
});

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "section__3bS4", class: _vm.read_at ? "" : "not_read_at" },
    [
      _c(
        "div",
        { staticClass: "tip" },
        [
          _c("router-link", { attrs: { to: "/users/" + _vm.name } }, [
            _vm._v("\n            " + _vm._s(_vm.name) + "\n        ")
          ]),
          _vm._v("\n        •\n        在\n        "),
          _c("router-link", { attrs: { to: "/articles/" + _vm.slug } }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v("\n        的评论提及了你\n        "),
          _c("span", { staticClass: "meta" }, [
            _vm._v(" • " + _vm._s(_vm.created_diff))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        directives: [{ name: "highlight", rawName: "v-highlight" }],
        staticClass: "markdown",
        domProps: { innerHTML: _vm._s(_vm.body) }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b977f9c6", module.exports)
  }
}

/***/ }),

/***/ 590:
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
        [
          _c("Icon", { attrs: { type: "android-notifications" } }),
          _vm._v(" 我的提醒")
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._l(_vm.notifications, function(notification) {
        return _c("div", [
          notification.type == "followed-user-notification"
            ? _c(
                "div",
                [
                  _c("followed-user", {
                    attrs: {
                      name: notification.data.name,
                      avatar: notification.data.avatar,
                      created_diff: notification.created_diff,
                      read_at: notification.read_at
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          notification.type == "received-comment-notification"
            ? _c(
                "div",
                [
                  _c("received-comment", {
                    attrs: {
                      name: notification.data.reply_user.name,
                      created_diff: notification.created_diff,
                      body: notification.data.content.html,
                      title: notification.data.commentable.title,
                      read_at: notification.read_at,
                      slug: notification.data.commentable.slug
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ])
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-7bb3e6fc", module.exports)
  }
}

/***/ })

});