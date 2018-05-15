webpackJsonp([9],{

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(540)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(542)
/* template */
var __vue_template__ = __webpack_require__(543)
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
Component.options.__file = "resources\\assets\\js\\views\\app\\users\\replies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-515b3fc8", Component.options)
  } else {
    hotAPI.reload("data-v-515b3fc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(541);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("71a1b942", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-515b3fc8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./replies.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-515b3fc8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./replies.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports
exports.i(__webpack_require__(403), "");

// module
exports.push([module.i, "\n.comment-page {\n  padding: 20px;\n  text-align: right;\n  color: #5a5a5a;\n}\n", ""]);

// exports


/***/ }),

/***/ 542:
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
            comments: [],
            meta: {
                total: 0,
                current_page: 1,
                per_page: 0
            }
        };
    },

    watch: {
        '$route': function $route(to, from) {
            this.loadData();
        }
    },
    created: function created() {
        this.loadData();
    },

    methods: {
        loadData: function loadData() {
            var _this = this;

            var url = 'users/' + this.$route.params.name + '/replies';
            if (this.meta.current_page > 1) {
                var page = '';
                if (url.indexOf('?') != -1) {
                    page = '&page=';
                } else {
                    page = '?page=';
                }
                url = url + page + this.meta.current_page;
                this.$router.push(page + this.meta.current_page);
            }
            this.$http.get(url).then(function (response) {
                _this.comments = response.data;
                _this.meta = response;
            });
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.meta.current_page = val;
            this.loadData();
        },
        settingActive: function settingActive() {
            this.$emit('active', this.$route.name);
        }
    }
});

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.comments.length
      ? _c(
          "div",
          [
            _vm._l(_vm.comments, function(comment, index) {
              return _c("div", { staticClass: "section__3bS4" }, [
                _c(
                  "div",
                  { staticStyle: { padding: "10px 0" } },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: "/articles/" + comment.commentable.slug }
                      },
                      [_vm._v(_vm._s(comment.commentable.title))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "meta",
                        staticStyle: { color: "#a9a7a7", "font-size": "12px" }
                      },
                      [
                        _vm._v("at "),
                        _c("span", { staticClass: "timeago" }, [
                          _vm._v(_vm._s(comment.created_at.created_diff))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                comment.reply_user
                  ? _c(
                      "div",
                      { staticStyle: { padding: "10px 0" } },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "meta",
                            staticStyle: {
                              color: "#a9a7a7",
                              "font-size": "12px"
                            }
                          },
                          [_vm._v("回复")]
                        ),
                        _c(
                          "router-link",
                          { attrs: { to: "/users/" + comment.user.name } },
                          [_vm._v(_vm._s(comment.user.name))]
                        ),
                        _vm._v(" :\n            ")
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", {
                  directives: [{ name: "highlight", rawName: "v-highlight" }],
                  staticClass: "markdown",
                  domProps: { innerHTML: _vm._s(comment.content.html) }
                })
              ])
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "comment-page" },
              [
                _c("Page", {
                  attrs: {
                    size: "small",
                    "show-total": "",
                    total: _vm.meta.total,
                    current: _vm.meta.current_page,
                    "page-size": _vm.meta.per_page
                  },
                  on: { "on-change": _vm.handleCurrentChange }
                })
              ],
              1
            )
          ],
          2
        )
      : _c("div", { staticStyle: { "text-align": "center" } }, [
          _c("img", { attrs: { src: "/images/comment.png" } })
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-515b3fc8", module.exports)
  }
}

/***/ })

});