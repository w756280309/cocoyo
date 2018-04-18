webpackJsonp([17],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(246)
/* template */
var __vue_template__ = __webpack_require__(247)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26d9658a"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\articles\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26d9658a", Component.options)
  } else {
    hotAPI.reload("data-v-26d9658a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("9c3bba40", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26d9658a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26d9658a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iview__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iview__);
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
        Page: __WEBPACK_IMPORTED_MODULE_0_iview__["Page"],
        Spin: __WEBPACK_IMPORTED_MODULE_0_iview__["Spin"]
    },
    data: function data() {
        return {
            articles: [],
            page: 1,
            loading: false,
            meta: {
                total: 0,
                current_page: 1,
                per_page: 0
            }
        };
    },
    created: function created() {
        this.loadData();
    },

    methods: {
        loadData: function loadData() {
            var _this = this;

            var url = 'articles';
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
                _this.articles = response.data;
                _this.meta = response.meta;
            });
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.meta.current_page = val;
            this.loadData();
        }
    }
});

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { id: "article" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        _vm._l(_vm.articles, function(article) {
          return _c(
            "v-flex",
            { key: article.id, staticClass: "px-2 py-2", attrs: { md4: "" } },
            [
              _c(
                "router-link",
                { attrs: { to: "/articles/" + article.slug } },
                [
                  _c(
                    "v-card",
                    { staticClass: "article-list" },
                    [
                      _c(
                        "v-card-media",
                        {
                          staticClass: "white--text",
                          attrs: { height: "200px", src: article.page_image }
                        },
                        [
                          _c(
                            "v-container",
                            { attrs: { "fill-height": "", fluid: "" } },
                            [
                              _c(
                                "v-layout",
                                { attrs: { "fill-height": "" } },
                                [
                                  _c(
                                    "v-flex",
                                    {
                                      attrs: {
                                        xs12: "",
                                        "align-end": "",
                                        flexbox: ""
                                      }
                                    },
                                    [
                                      _c("span", { staticClass: "headline" }, [
                                        _vm._v(_vm._s(article.title))
                                      ])
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
                      ),
                      _vm._v(" "),
                      _c("v-card-title", [
                        _c(
                          "p",
                          {
                            staticClass: "grey--text text-sm-left",
                            staticStyle: { width: "100%" }
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(article.published_time))
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  float: "right",
                                  "margin-left": "10px"
                                }
                              },
                              [
                                _c("v-icon", { attrs: { size: "10px" } }, [
                                  _vm._v("fas fa-eye")
                                ]),
                                _vm._v("  " + _vm._s(article.visitors))
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticStyle: { float: "right" } },
                              [
                                _c("v-icon", { attrs: { size: "10px" } }, [
                                  _vm._v("fas fa-user")
                                ]),
                                _vm._v(
                                  "  " +
                                    _vm._s(
                                      article.user.nickname
                                        ? article.user.nickname
                                        : article.user.name
                                    )
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "extra content" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(article.meta_description) +
                            "\n                    "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "text-xs-center",
          staticStyle: { "padding-top": "10px" }
        },
        [
          _c("Page", {
            staticClass: "article-pagination",
            attrs: {
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
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26d9658a", module.exports)
  }
}

/***/ })

});