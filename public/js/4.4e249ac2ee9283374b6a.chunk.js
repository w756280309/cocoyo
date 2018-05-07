webpackJsonp([4],{

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(483)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(485)
/* template */
var __vue_template__ = __webpack_require__(496)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-790d7e24"
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

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(484);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d8124550", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-790d7e24\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-790d7e24\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports
exports.i(__webpack_require__(383), "");

// module
exports.push([module.i, "\n#article .article-list[data-v-790d7e24] {\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n#article .article-list[data-v-790d7e24]:hover {\n  -webkit-box-shadow: 8px 8px 8px -8px rgba(0, 0, 0, 0.5);\n          box-shadow: 8px 8px 8px -8px rgba(0, 0, 0, 0.5);\n  -webkit-transform: translateY(-2px);\n  transform: translateY(-2px);\n}\n#article .article-list .extra[data-v-790d7e24] {\n  max-width: 100%;\n  min-height: 0em !important;\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;\n  position: static;\n  background: none;\n  width: auto;\n  margin: 0em 0em;\n  padding: 16px;\n  top: 0em;\n  left: 0em;\n  color: rgba(0, 0, 0, 0.4);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: color 0.1s ease;\n  transition: color 0.1s ease;\n}\n#article .pagination .icon[data-v-790d7e24] {\n  font-size: 10px !important;\n}\n#article .article-title[data-v-790d7e24] {\n  font-size: 32px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 12px;\n}\n#article .meta[data-v-790d7e24] {\n  margin-bottom: 15px;\n  margin-top: 10px;\n  text-align: center;\n}\n#article .meta .user-card[data-v-790d7e24] {\n  display: inline-block;\n  margin-right: 15px;\n}\n#article .meta .user-card h4[data-v-790d7e24] {\n  display: inline;\n  vertical-align: middle;\n  margin-right: 8px;\n  font-weight: 400;\n  margin: 0 10px 0 0;\n  font-size: 14px;\n  line-height: 1.66666667;\n  margin-right: 20px;\n}\n#article .meta .user-card .time[data-v-790d7e24] {\n  vertical-align: middle;\n  font-size: 12px;\n  color: #9b9b9b;\n}\n#article .meta .avatar img[data-v-790d7e24] {\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border: 1px solid #fff;\n  background: #fff;\n  padding: 3px;\n  border: 1px solid #c5c5c5;\n  border-radius: 50%;\n}\n#article .meta .actions[data-v-790d7e24] {\n  display: inline-block;\n}\n#article .meta .actions a[data-v-790d7e24] {\n  font-size: 12px;\n  margin-right: 5px;\n  color: #9b9b9b;\n}\n@media (min-width: 768px) {\n.container-show[data-v-790d7e24] {\n    width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container-show[data-v-790d7e24] {\n    width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container-show[data-v-790d7e24] {\n    width: 1170px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_license__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_license___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_license__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Comments__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Comments___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Comments__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        license: __WEBPACK_IMPORTED_MODULE_0__components_license___default.a,
        Comments: __WEBPACK_IMPORTED_MODULE_1__components_Comments___default.a
    },
    data: function data() {
        return {
            article: {
                user: {}
            },
            is_original: false,
            commentable_id: 0,
            loading_comments: false
        };
    },

    computed: {
        username: function username() {
            if (this.$store.state.user.token) {
                return this.$store.state.user.userinfo.name;
            }
            return '';
        },
        avatar: function avatar() {
            if (this.$store.state.user.token) {
                console.log(this.$store.state.user.userinfo.avatar);
                return this.$store.state.user.userinfo.avatar;
            }
            return '';
        },
        user_id: function user_id() {
            if (this.$store.state.user.token) {
                return this.$store.state.user.userinfo.id;
            }
        },
        can_comment: function can_comment() {
            return this.$store.state.user.token ? true : false;
        }
    },
    created: function created() {
        var _this = this;

        this.$http.get('/articles/' + this.$route.params.slug).then(function (response) {
            _this.article = response.data;
            _this.is_original = response.data.is_original == 1 ? true : false;
            _this.commentable_id = _this.article.id;
            _this.loading_comments = true;
        });
    }
});

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(487)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(489)
/* template */
var __vue_template__ = __webpack_require__(490)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e28eca8c"
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
Component.options.__file = "resources\\assets\\js\\components\\license.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e28eca8c", Component.options)
  } else {
    hotAPI.reload("data-v-e28eca8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(488);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8213a162", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e28eca8c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e28eca8c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 489:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        name: {
            default: function _default() {
                return '';
            },

            type: String
        },
        is_original: {
            default: function _default() {
                return false;
            },

            type: Boolean
        }
    }
});

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-alert",
        {
          staticStyle: { "margin-bottom": "24px", "border-radius": "4px" },
          attrs: { outline: "", color: "error", value: true },
          model: {
            value: _vm.is_original,
            callback: function($$v) {
              _vm.is_original = $$v
            },
            expression: "is_original"
          }
        },
        [
          _vm._v("\n        由 " + _vm._s(_vm.name) + " 创作，采用\n        "),
          _c(
            "a",
            {
              attrs: {
                rel: "license",
                href: "http://creativecommons.org/licenses/by-nc/4.0/"
              }
            },
            [_vm._v("知识共享 署名-非商业性使用 4.0 国际 许可协议")]
          ),
          _vm._v("进行许可。\n        转载请注明出处.\n    ")
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-e28eca8c", module.exports)
  }
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(492)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(494)
/* template */
var __vue_template__ = __webpack_require__(495)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-251fea6b"
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
Component.options.__file = "resources\\assets\\js\\components\\Comments.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-251fea6b", Component.options)
  } else {
    hotAPI.reload("data-v-251fea6b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(493);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0c3af866", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-251fea6b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comments.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-251fea6b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comments.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports
exports.i(__webpack_require__(383), "");

// module
exports.push([module.i, "\n.comment[data-v-251fea6b]{\n    margin-top:20px;\n}\n.comment .media[data-v-251fea6b]{\n    padding-top: 20px;\n    zoom: 1;\n    overflow: hidden;\n}\n.comment .media .media-left[data-v-251fea6b]{\n    display: table-cell;\n    vertical-align: top;\n    padding-right: 10px;\n}\n.comment .box-body[data-v-251fea6b]{\n    border: 1px solid #ECF0F1;\n    border-radius: 5px;\n    background-color: #fff;\n    color: #7F8C8D;\n    display: table-cell;\n    vertical-align: top;\n    zoom: 1;\n    overflow: hidden;\n    width:100%;\n}\n.comment .heading[data-v-251fea6b]{\n    padding: 10px 20px;\n    background: #ECF0F1;\n}\n.comment .comment-body[data-v-251fea6b]{\n    padding: 30px 50px;\n    color: #34495e;\n}\n.comment .comment-textarea .input-group__input[data-v-251fea6b]{\n    background-color:#fff !important;\n    border:2px solid #ccc !important;\n}\n.comment .primary--text[data-v-251fea6b]{\n    color:#ccc !important;\n}\n.comment .icon[data-v-251fea6b]{\n    margin-right: 5px;\n}\n.comment .pull-right[data-v-251fea6b]{\n    float: right;\n}\n.comment .avatar img[data-v-251fea6b]{\n    -webkit-transition: -webkit-transform .6s ease-in;\n    transition: -webkit-transform .6s ease-in;\n    transition: transform .6s ease-in;\n    transition: transform .6s ease-in, -webkit-transform .6s ease-in;\n}\n.comment .avatar:hover img[data-v-251fea6b]{\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n}\ntextarea[data-v-251fea6b] {\n    -webkit-appearance: textarea;\n    background-color: white;\n    -webkit-rtl-ordering: logical;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    resize: auto;\n    cursor: text;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    border-width: 1px;\n    border-style: solid;\n    border-color: initial;\n    -o-border-image: initial;\n       border-image: initial;\n    padding: 2px;\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n.form-control[data-v-251fea6b] {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n", ""]);

// exports


/***/ }),

/***/ 494:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        commentableId: {
            type: Number
        },
        commentableType: {
            type: String,
            default: function _default() {
                return 'App\Models\Article';
            }
        },
        username: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        userAvatar: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        userId: {
            type: Number
        },
        canComment: {
            type: Boolean,
            default: function _default() {
                return false;
            }
        }
    },
    data: function data() {
        return {
            comments: [],
            form: {
                content: ''
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        var url = 'commentable/' + this.commentableId + '/comment';
        this.$http.get(url, {
            params: {
                commentable_type: this.commentableType
            }
        }).then(function (response) {
            _this.comments = response.data;
        });
    },

    methods: {
        submit: function submit() {
            var _this2 = this;

            if (!this.form.content) {
                this.$Message.error('请输入评论内容!');
                return false;
            }
            var data = {
                content: this.form.content,
                commentable_id: this.commentableId,
                commentable_type: this.commentableType
            };
            this.$http.post('comments', data).then(function (response) {
                _this2.comments.push(response.data);
                _this2.form.content = '';
            });
        },
        reply: function reply(name) {
            $('#reply_content').focus();
            this.form.content = '@' + name + ' ';
        },
        commentDelete: function commentDelete(index, id) {
            var _this3 = this;

            this.$http.delete('comments/' + id).then(function (response) {
                Message.success('删除成功');
                _this3.comments.splice(index, 1);
            });
        }
    }
});

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-flex",
        { staticClass: "comment", attrs: { md12: "" } },
        [
          !_vm.canComment
            ? _c(
                "v-btn",
                {
                  staticStyle: {
                    "background-color": "#F96854 !important",
                    color: "#fff !important"
                  },
                  attrs: { to: "/login", block: "", dark: "" }
                },
                [_vm._v("登陆发表评论")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { md9: "", "offset-md2": "" } },
            [
              _vm._l(_vm.comments, function(comment, index) {
                return _c("div", { staticClass: "media" }, [
                  _c(
                    "div",
                    { staticClass: "media-left" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/users/" + comment.user.name } },
                        [
                          _c(
                            "v-avatar",
                            {
                              staticClass: "grey lighten-4",
                              attrs: { size: "60px" }
                            },
                            [
                              _c("img", {
                                staticClass: "avatar",
                                attrs: {
                                  src: comment.user.avatar,
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
                  _c("div", { staticClass: "media-body box-body" }, [
                    _c(
                      "div",
                      { staticClass: "heading" },
                      [
                        _c("v-icon", { attrs: { size: "10px" } }, [
                          _vm._v("fas fa-user")
                        ]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              comment.user.nickname
                                ? comment.user.nickname
                                : comment.user.name
                            ) +
                            "\n                            \n                        "
                        ),
                        _c("v-icon", { attrs: { size: "10px" } }, [
                          _vm._v("fas fa-clock")
                        ]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(comment.created_at) +
                            "\n                        "
                        ),
                        _c("span", { staticClass: "pull-right operate" }, [
                          _vm.userId == comment.user.id
                            ? _c(
                                "a",
                                {
                                  attrs: {
                                    href: "javascript:;",
                                    title: "删除"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.commentDelete(index, comment.id)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { size: "10px" } }, [
                                    _vm._v("fas fa-trash")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:;", title: "回复" },
                              on: {
                                click: function($event) {
                                  _vm.reply(
                                    comment.user.nickname
                                      ? comment.user.nickname
                                      : comment.user.name
                                  )
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { size: "10px" } }, [
                                _vm._v("fas fa-reply")
                              ])
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", {
                      directives: [
                        { name: "highlight", rawName: "v-highlight" }
                      ],
                      staticClass: "comment-body markdown",
                      staticStyle: { "max-width": "584px" },
                      domProps: { innerHTML: _vm._s(comment.content_html) }
                    })
                  ])
                ])
              }),
              _vm._v(" "),
              _vm.canComment
                ? _c(
                    "v-form",
                    { staticStyle: { "margin-top": "20px" } },
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
                                          src: _vm.userAvatar,
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
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.content,
                                    expression: "form.content"
                                  }
                                ],
                                staticClass: "form-control",
                                staticStyle: {
                                  overflow: "hidden",
                                  "word-wrap": "break-word",
                                  resize: "horizontal",
                                  height: "164px"
                                },
                                attrs: {
                                  rows: "5",
                                  placeholder:
                                    "请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。",
                                  id: "reply_content",
                                  name: "body",
                                  cols: "50"
                                },
                                domProps: { value: _vm.form.content },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "content",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { md12: "" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            "background-color": "#15b982"
                                          },
                                          attrs: { dark: "", large: "" },
                                          on: { click: _vm.submit }
                                        },
                                        [_vm._v("发布评论")]
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
                : _vm._e()
            ],
            2
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
    require("vue-hot-reload-api")      .rerender("data-v-251fea6b", module.exports)
  }
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    { staticClass: "main-content" },
    [
      _c(
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
                    _vm._v(_vm._s(_vm.article.title))
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
                            attrs: {
                              href: "https://www.cocoyo.xin/user/cocoyo"
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "img-circle",
                              staticStyle: { width: "30px", height: "30px" },
                              attrs: { src: _vm.article.user.avatar }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: { to: "/users/" + _vm.article.user.name }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.article.user.nickname
                                      ? _vm.article.user.nickname
                                      : _vm.article.user.name
                                  )
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("time", [
                          _vm._v(
                            "发表于 " +
                              _vm._s(_vm.article.published_individualization)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.article.tags, function(tag, index) {
                        return _c("div", { staticClass: "actions" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn-comment",
                              attrs: { href: "javascript:;" }
                            },
                            [
                              _c("v-icon", { attrs: { size: "10px" } }, [
                                _vm._v("fas fa-tag")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "https://www.cocoyo.xin/tag/windows"
                              }
                            },
                            [_vm._v(_vm._s(tag.tag))]
                          )
                        ])
                      })
                    ],
                    2
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
                          _c(
                            "div",
                            {
                              directives: [
                                { name: "highlight", rawName: "v-highlight" }
                              ],
                              domProps: {
                                innerHTML: _vm._s(_vm.article.content_html)
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.article.content_html) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("license", {
                            attrs: {
                              name: _vm.article.user.nickname
                                ? _vm.article.user.nickname
                                : _vm.article.user.name,
                              is_original: _vm.is_original
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.loading_comments
                    ? _c("comments", {
                        attrs: {
                          username: _vm.username,
                          "user-avatar": _vm.avatar,
                          "user-id": _vm.user_id,
                          "commentable-type": "App\\Models\\Article",
                          "commentable-id": _vm.commentable_id,
                          "can-comment": _vm.can_comment
                        }
                      })
                    : _vm._e()
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