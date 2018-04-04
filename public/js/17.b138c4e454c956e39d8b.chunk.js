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
    {
      staticClass: "container-show",
      attrs: { "grid-list-xl": "", id: "article" }
    },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { md10: "", "offset-md1": "" } },
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
                  _c(
                    "v-card-text",
                    {
                      staticClass: "markdown elevation-8",
                      staticStyle: { padding: "15px 20px 1px 30px" }
                    },
                    [
                      _c("h3", { attrs: { id: "-" } }, [_vm._v("使用")]),
                      _vm._v(" "),
                      _c("p", [
                        _c("code", [_vm._v("Passport")]),
                        _vm._v("预置了 Vue 组件作为示例以供使用")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(" 发布组件")]),
                      _vm._v(" "),
                      _c("pre", [
                        _c("code", { staticClass: "hljs nginx" }, [
                          _vm._v("\n "),
                          _c("span", { staticClass: "hljs-attribute" }, [
                            _vm._v("php")
                          ]),
                          _vm._v(
                            " artisan vendor:publish --tag=passport-components\n"
                          )
                        ])
                      ]),
                      _c("p", [
                        _vm._v(" 发布后的组件位于 "),
                        _c("code", [_vm._v("resources/assets/js/components")]),
                        _vm._v(" 目录下，组件发布之后，还需要将它们注册到"),
                        _c("code", [_vm._v("resources/assets/js/app.js")]),
                        _vm._v(" 文件：")
                      ]),
                      _vm._v(" "),
                      _c("pre", [
                        _c("code", { staticClass: "hljs coffeescript" }, [
                          _vm._v("\n Vue.component(\n    "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'passport-clients'")
                          ]),
                          _vm._v(",\n    "),
                          _c("span", { staticClass: "hljs-built_in" }, [
                            _vm._v("require")
                          ]),
                          _vm._v("("),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'./components/passport/Clients.vue'")
                          ]),
                          _vm._v(")\n);\n\nVue.component(\n    "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'passport-authorized-clients'")
                          ]),
                          _vm._v(",\n    "),
                          _c("span", { staticClass: "hljs-built_in" }, [
                            _vm._v("require")
                          ]),
                          _vm._v("("),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v(
                              "'./components/passport/AuthorizedClients.vue'"
                            )
                          ]),
                          _vm._v(")\n);\n\nVue.component(\n    "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'passport-personal-access-tokens'")
                          ]),
                          _vm._v(",\n    "),
                          _c("span", { staticClass: "hljs-built_in" }, [
                            _vm._v("require")
                          ]),
                          _vm._v("("),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v(
                              "'./components/passport/PersonalAccessTokens.vue'"
                            )
                          ]),
                          _vm._v(")\n);\n")
                        ])
                      ]),
                      _c("p", [
                        _vm._v(" 注册完成之后运行"),
                        _c("code", [_vm._v("npm run dev")]),
                        _vm._v(
                          "来重新编译前端资源,重新编译前端资源后，就可以将这些组件放到应用的某个模板中以便创建客户端和私人访问令牌"
                        )
                      ]),
                      _vm._v(" "),
                      _c("pre", [
                        _c("code", { staticClass: "hljs apache" }, [
                          _vm._v("\n"),
                          _c("span", { staticClass: "hljs-section" }, [
                            _vm._v("<passport-clients>")
                          ]),
                          _c("span", { staticClass: "hljs-section" }, [
                            _vm._v("</passport-clients>")
                          ]),
                          _vm._v("\n"),
                          _c("span", { staticClass: "hljs-section" }, [
                            _vm._v("<passport-authorized-clients>")
                          ]),
                          _c("span", { staticClass: "hljs-section" }, [
                            _vm._v("</passport-authorized-clients>")
                          ]),
                          _vm._v("\n"),
                          _c("span", { staticClass: "hljs-section" }, [
                            _vm._v("<passport-personal-access-tokens>")
                          ]),
                          _c("span", { staticClass: "hljs-section" }, [
                            _vm._v("</passport-personal-access-tokens>")
                          ]),
                          _vm._v("\n")
                        ])
                      ]),
                      _c("p", [_vm._v(" 访问文件我们会出现如下结果")]),
                      _vm._v(" "),
                      _c("p", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://image.cocoyo.xin/article/201801/06/b2601a5a5219c6a178037e6b532199ae.png",
                            alt: "QZR3U5P0{BK}]}~J(`LNXTH.png"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("当然那个客户端3是我点击"),
                        _c("code", [_vm._v("Create New Client")]),
                        _vm._v(
                          "生成的,你也可以自己点击生成,只需填写名称和重定向地址就好了。"
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("生成了"),
                        _c("code", [_vm._v("clent_id")]),
                        _vm._v("和"),
                        _c("code", [_vm._v("Secret")]),
                        _vm._v("之后我们就可以根据这个去获取"),
                        _c("code", [_vm._v("access_token")]),
                        _vm._v(",下面是我的代码:")
                      ]),
                      _vm._v(" "),
                      _c("pre", [
                        _c("code", { staticClass: "hljs php" }, [
                          _vm._v("Route::get("),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'test/oauth'")
                          ]),
                          _vm._v(", "),
                          _c("span", { staticClass: "hljs-function" }, [
                            _c("span", { staticClass: "hljs-keyword" }, [
                              _vm._v("function")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "hljs-params" }, [
                              _vm._v("()")
                            ]),
                            _vm._v(" ")
                          ]),
                          _vm._v(
                            "{\n    $query = http_build_query([\n        "
                          ),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'client_id'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-number" }, [
                            _vm._v("3")
                          ]),
                          _vm._v(",\n        "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'redirect_uri'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'http://cocoyo.test/callback'")
                          ]),
                          _vm._v(",\n        "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'response_type'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'code'")
                          ]),
                          _vm._v(",\n        "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'scope'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("''")
                          ]),
                          _vm._v(",\n    ]);\n\n    "),
                          _c("span", { staticClass: "hljs-keyword" }, [
                            _vm._v("return")
                          ]),
                          _vm._v(" redirect("),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'http://blog.test/oauth/authorize?'")
                          ]),
                          _vm._v(".$query);\n});\n\nRoute::get("),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'callback'")
                          ]),
                          _vm._v(", "),
                          _c("span", { staticClass: "hljs-function" }, [
                            _c("span", { staticClass: "hljs-keyword" }, [
                              _vm._v("function")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "hljs-params" }, [
                              _vm._v("(\\Illuminate\\Http\\Request $request)")
                            ]),
                            _vm._v(" ")
                          ]),
                          _vm._v("{\n    $http = "),
                          _c("span", { staticClass: "hljs-keyword" }, [
                            _vm._v("new")
                          ]),
                          _vm._v(
                            " GuzzleHttp\\Client;\n\n    $response = $http->post("
                          ),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'http://blog.test/oauth/token'")
                          ]),
                          _vm._v(", [\n        "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'form_params'")
                          ]),
                          _vm._v(" => [\n            "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'grant_type'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'authorization_code'")
                          ]),
                          _vm._v(",\n            "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'client_id'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-number" }, [
                            _vm._v("3")
                          ]),
                          _vm._v(",\n            "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'client_secret'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'JNtBjM2bBTqITnkmSksIPOIHV1GWJp2yDUTJdbMG'")
                          ]),
                          _vm._v(",\n            "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'redirect_uri'")
                          ]),
                          _vm._v(" => "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'http://cocoyo.test/callback'")
                          ]),
                          _vm._v(",\n            "),
                          _c("span", { staticClass: "hljs-string" }, [
                            _vm._v("'code'")
                          ]),
                          _vm._v(
                            " => $request->code,\n        ],\n    ]);\n\n    "
                          ),
                          _c("span", { staticClass: "hljs-keyword" }, [
                            _vm._v("return")
                          ]),
                          _vm._v(
                            " json_decode((string) $response->getBody(), "
                          ),
                          _c("span", { staticClass: "hljs-keyword" }, [
                            _vm._v("true")
                          ]),
                          _vm._v(");\n});\n")
                        ])
                      ]),
                      _c("p", [_vm._v("如何一切正常的话会返回如下结果:")]),
                      _vm._v(" "),
                      _c("p", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://image.cocoyo.xin/article/201801/06/c1ed2c3ea89dc2570aea636444e1efad.png",
                            alt: "SSNGSNV$R2NN~UYI$R}A_~L.png"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("其实在这一步的时候我试了好久总是返回401错误，"),
                        _c("code", [_vm._v("google")]),
                        _vm._v("了好久，最后发现执行")
                      ]),
                      _vm._v(" "),
                      _c("pre", [
                        _c("code", { staticClass: "hljs css" }, [
                          _vm._v("\n"),
                          _c("span", { staticClass: "hljs-selector-tag" }, [
                            _vm._v("php")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "hljs-selector-tag" }, [
                            _vm._v("artisan")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "hljs-selector-tag" }, [
                            _vm._v("config")
                          ]),
                          _c("span", { staticClass: "hljs-selector-pseudo" }, [
                            _vm._v(":cache")
                          ]),
                          _vm._v("\n")
                        ])
                      ]),
                      _c("p", [
                        _vm._v("便成功了。有了"),
                        _c("code", [_vm._v("access_token")]),
                        _vm._v("我们就可以去请求用户信息了，我们使用"),
                        _c("code", [_vm._v("postman")]),
                        _vm._v("来测试一下")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://image.cocoyo.xin/article/201801/06/f9979533c487222d587eda5e1b1421db.png",
                            alt: "@G)WWAYS$I3]TGIN)SOJMQV.png"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("完美！好了到这里就结束了。")])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { md10: "", "offset-md1": "" } },
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
                { attrs: { md8: "", "offset-md2": "" } },
                [
                  _c(
                    "v-form",
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { md2: "" } },
                            [
                              _c(
                                "v-subheader",
                                { staticStyle: { "padding-top": "60px" } },
                                [
                                  _c(
                                    "v-avatar",
                                    {
                                      staticClass: "grey lighten-4",
                                      attrs: { size: "60px" }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "https://image.cocoyo.xin/IMG_0347.PNG",
                                          alt: "avatar"
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md10: "" } },
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
                          ),
                          _vm._v(" "),
                          _c("v-btn", [_vm._v("提交")])
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