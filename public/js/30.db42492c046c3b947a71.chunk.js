webpackJsonp([30],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(464)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(466)
/* template */
var __vue_template__ = __webpack_require__(467)
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
Component.options.__file = "resources\\assets\\js\\views\\app\\user\\replies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-691b06bf", Component.options)
  } else {
    hotAPI.reload("data-v-691b06bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(465);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("8586a45c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-691b06bf\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./replies.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-691b06bf\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./replies.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.comment-page {\n  padding: 20px;\n  text-align: right;\n  color: #5a5a5a;\n}\n", ""]);

// exports


/***/ }),

/***/ 466:
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
    created: function created() {
        this.$emit('active', 'asd');
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
                _this.meta = response.meta;
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

/***/ 467:
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
                        attrs: { to: "/articles/" + comment.commentable_link }
                      },
                      [_vm._v(_vm._s(comment.commentable))]
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
                          _vm._v(_vm._s(comment.create_diff))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "markdown",
                  domProps: { innerHTML: _vm._s(comment.content_html) }
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
    require("vue-hot-reload-api")      .rerender("data-v-691b06bf", module.exports)
  }
}

/***/ })

});