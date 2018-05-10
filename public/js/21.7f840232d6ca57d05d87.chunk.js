webpackJsonp([21],{

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(548)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(550)
/* template */
var __vue_template__ = __webpack_require__(551)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11f9a616"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\users\\edit_email_notify.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11f9a616", Component.options)
  } else {
    hotAPI.reload("data-v-11f9a616", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("05b48536", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11f9a616\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_email_notify.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11f9a616\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_email_notify.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 550:
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
    data: function data() {
        return {
            form: {
                email_notify_enabled: true
            },
            loading: false
        };
    },
    created: function created() {
        this.form.email_notify_enabled = this.$store.state.user.userinfo.email_notify_enabled == 'yes' ? true : false;
    },

    methods: {
        handleSubmit: function handleSubmit() {
            var _this = this;

            this.loading = true;
            this.$http.put('users/' + this.$route.params.name + '/email_notify_enabled', this.form).then(function (response) {
                _this.$Message.success('修改成功');
                var email_notify_enabled = _this.form.email_notify_enabled ? 'yes' : 'no';
                _this.$store.commit('modifyEmailNotify', email_notify_enabled);
                _this.loading = false;
            });
        }
    }
});

/***/ }),

/***/ 551:
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
        [_c("Icon", { attrs: { type: "gear-b" } }), _vm._v(" Email 通知设置")],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "Form",
        { attrs: { model: _vm.form, "label-width": 150 } },
        [
          _c(
            "FormItem",
            { attrs: { label: "开启邮件通知？" } },
            [
              _c("v-switch", {
                attrs: { color: "orange" },
                model: {
                  value: _vm.form.email_notify_enabled,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email_notify_enabled", $$v)
                  },
                  expression: "form.email_notify_enabled"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              staticStyle: {
                color: "#fff",
                "background-color": "#1abc9c",
                "border-color": "#1abc9c"
              },
              attrs: { loading: _vm.loading },
              on: { click: _vm.handleSubmit }
            },
            [
              !_vm.loading
                ? _c("span", [_vm._v("应用修改")])
                : _c("span", [_vm._v("Loading...")])
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-11f9a616", module.exports)
  }
}

/***/ })

});