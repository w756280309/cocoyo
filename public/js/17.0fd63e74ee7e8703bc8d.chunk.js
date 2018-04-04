webpackJsonp([17],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(243)
/* template */
var __vue_template__ = __webpack_require__(245)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\views\\app\\articles\\show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-790d7e24", Component.options)
  } else {
    hotAPI.reload("data-v-790d7e24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 243:
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "grid-list-xl": "", id: "article" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs8: "", "offset-xs2": "" } },
            [
              _c("h1", { staticClass: "article-title" }, [
                _vm._v("Browsersync的使用")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "meta",
                  staticStyle: { "text-align": "center" }
                },
                [
                  _c("div", { staticClass: "user-card size60" }, [
                    _c(
                      "a",
                      {
                        staticClass: "avatar",
                        attrs: { href: "https://www.cocoyo.xin/user/cocoyo" }
                      },
                      [
                        _c("img", {
                          staticClass: "img-circle",
                          staticStyle: { width: "30px", height: "30px" },
                          attrs: {
                            alt: " cocoyo",
                            src: "https://image.cocoyo.xin/IMG_0347.PNG"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("h4", [
                      _c(
                        "a",
                        {
                          attrs: { href: "https://www.cocoyo.xin/user/cocoyo" }
                        },
                        [_vm._v("cocoyo")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("time", [_vm._v("发表于 2个月前")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "actions" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn-comment",
                        attrs: { href: "javascript:;" }
                      },
                      [_c("i", { staticClass: "ion-pricetag" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { attrs: { href: "https://www.cocoyo.xin/tag/windows" } },
                      [_vm._v("windows")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-text", { staticClass: "markdown elevation-8" }, [
                    _c("h3", { attrs: { id: "-" } }, [_vm._v("前言")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("学前端页面时难免每次修改代码都需要"),
                      _c("code", [_vm._v("F5")]),
                      _vm._v(
                        "刷新一下，作为一名极客怎么可能忍受得了，搜索了一下发现"
                      ),
                      _c("code", [_vm._v("Browsersync")]),
                      _vm._v("这个好东西，使用起来真的很方便。")
                    ]),
                    _vm._v(" "),
                    _c("h3", { attrs: { id: "-" } }, [_vm._v("安装")]),
                    _vm._v(" "),
                    _c("h4", { attrs: { id: "1-node-js" } }, [
                      _vm._v("1. 安装 Node.js")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "BrowserSync是基于Node.js的, 是一个Node模块， 如果您想要快速使用它，也许您需要先安装一下Node.js 。"
                      )
                    ]),
                    _vm._v(" "),
                    _c("h4", { attrs: { id: "2-browsersync" } }, [
                      _vm._v("2安装 BrowserSync")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("全局安装")]),
                    _vm._v(" "),
                    _c("pre", [
                      _c("code", { staticClass: "hljs sql" }, [
                        _vm._v("npm "),
                        _c("span", { staticClass: "hljs-keyword" }, [
                          _vm._v("install")
                        ]),
                        _vm._v(" -g browser-"),
                        _c("span", { staticClass: "hljs-keyword" }, [
                          _vm._v("sync")
                        ]),
                        _vm._v("\n")
                      ])
                    ]),
                    _c("h3", { attrs: { id: "-" } }, [_vm._v("使用")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "具体的使用和命令我这里就不说那么多了，可以看官方文档"
                      ),
                      _c(
                        "a",
                        { attrs: { href: "http://www.browsersync.cn/" } },
                        [_vm._v("http://www.browsersync.cn/")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("我这里使用的是动态网站，进入所需监听的目录")
                    ]),
                    _vm._v(" "),
                    _c("pre", [
                      _c("code", { staticClass: "hljs apache" }, [
                        _vm._v("\n"),
                        _c("span", { staticClass: "hljs-attribute" }, [
                          _vm._v("browser")
                        ]),
                        _vm._v("-sync start --proxy "),
                        _c("span", { staticClass: "hljs-string" }, [
                          _vm._v('"seekers.test"')
                        ]),
                        _vm._v(" --files "),
                        _c("span", { staticClass: "hljs-string" }, [
                          _vm._v(
                            '"public/css/*.css,app/Http/controllers/,resources/views/ "'
                          )
                        ]),
                        _vm._v("\n")
                      ])
                    ]),
                    _c("p", [_vm._v("可以看到如下界面")]),
                    _vm._v(" "),
                    _c("p", [
                      _c("img", {
                        attrs: {
                          src:
                            "https://image.cocoyo.xin/article/201801/25/6ae71f2c551348abf8148d3189179e02.png",
                          alt: "V]NL9{T8YB9220R8KG~A%I0.png"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("每次文件改变都会自动帮你刷新。")])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs8: "", "offset-xs2": "" } },
            [
              _c(
                "v-btn",
                {
                  staticStyle: { "background-color": "#F96854 !important" },
                  attrs: { block: "", dark: "" }
                },
                [_vm._v("登陆发表评论")]
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs8: "", "offset-xs2": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs2: "" } },
                        [
                          _c("v-avatar", { staticClass: "grey lighten-4" }, [
                            _c("img", {
                              attrs: {
                                src: "https://image.cocoyo.xin/IMG_0347.PNG",
                                alt: "avatar"
                              }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("v-text-field", {
                            staticClass: "comment-textarea",
                            attrs: {
                              name: "input-1",
                              label: "Markdown",
                              textarea: ""
                            }
                          })
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
    require("vue-hot-reload-api")      .rerender("data-v-790d7e24", module.exports)
  }
}

/***/ })

});