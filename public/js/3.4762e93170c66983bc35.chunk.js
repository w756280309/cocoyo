webpackJsonp([3],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(110)
/* template */
var __vue_template__ = __webpack_require__(111)
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\categories\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-111e3c07", Component.options)
  } else {
    hotAPI.reload("data-v-111e3c07", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 110:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            columns7: [{
                title: 'Name',
                key: 'name',
                render: function render(h, params) {
                    return h('div', [h('Icon', {
                        props: {
                            type: 'person'
                        }
                    }), h('strong', params.row.name)]);
                }
            }, {
                title: 'Age',
                key: 'age'
            }, {
                title: 'Address',
                key: 'address'
            }, {
                title: 'Action',
                key: 'action',
                width: 150,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: function click() {
                                _this.show(params.index);
                            }
                        }
                    }, 'View'), h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: function click() {
                                _this.remove(params.index);
                            }
                        }
                    }, 'Delete')]);
                }
            }],
            data6: [{
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park'
            }, {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park'
            }, {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park'
            }, {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park'
            }]
        };
    },

    methods: {
        show: function show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: 'Name\uFF1A' + this.data6[index].name + '<br>Age\uFF1A' + this.data6[index].age + '<br>Address\uFF1A' + this.data6[index].address
            });
        },
        remove: function remove(index) {
            this.data6.splice(index, 1);
        }
    }
});

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Row",
        [
          _c(
            "Col",
            { attrs: { span: 24 } },
            [
              _c("Table", {
                attrs: {
                  data: _vm.tableData1,
                  columns: _vm.tableColumns1,
                  stripe: ""
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { margin: "10px", overflow: "hidden" } },
                [
                  _c(
                    "div",
                    { staticStyle: { float: "right" } },
                    [
                      _c("Page", {
                        attrs: { total: 100, current: 1 },
                        on: { "on-change": _vm.changePage }
                      })
                    ],
                    1
                  )
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
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-111e3c07", module.exports)
  }
}

/***/ })

});