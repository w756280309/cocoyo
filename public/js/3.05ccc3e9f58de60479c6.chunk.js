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
            tableData1: this.mockTableData1(),
            tableColumns1: [{
                title: 'Name',
                key: 'name'
            }, {
                title: 'Status',
                key: 'status',
                render: function render(h, params) {
                    var row = params.row;
                    var color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                    var text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

                    return h('Tag', {
                        props: {
                            type: 'dot',
                            color: color
                        }
                    }, text);
                }
            }, {
                title: 'Portrayal',
                key: 'portrayal',
                render: function render(h, params) {
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: params.row.portrayal.length + 'portrayals',
                            placement: 'bottom'
                        }
                    }, [h('Tag', params.row.portrayal.length), h('div', {
                        slot: 'content'
                    }, [h('ul', _this.tableData1[params.index].portrayal.map(function (item) {
                        return h('li', {
                            style: {
                                textAlign: 'center',
                                padding: '4px'
                            }
                        }, item);
                    }))])]);
                }
            }, {
                title: 'People',
                key: 'people',
                render: function render(h, params) {
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: params.row.people.length + 'customers',
                            placement: 'bottom'
                        }
                    }, [h('Tag', params.row.people.length), h('div', {
                        slot: 'content'
                    }, [h('ul', _this.tableData1[params.index].people.map(function (item) {
                        return h('li', {
                            style: {
                                textAlign: 'center',
                                padding: '4px'
                            }
                        }, item.n + '：' + item.c + 'People');
                    }))])]);
                }
            }, {
                title: 'Sampling Time',
                key: 'time',
                render: function render(h, params) {
                    return h('div', 'Almost' + params.row.time + 'days');
                }
            }, {
                title: 'Updated Time',
                key: 'update',
                render: function render(h, params) {
                    return h('div', _this.formatDate(_this.tableData1[params.index].update));
                }
            }]
        };
    },

    methods: {
        mockTableData1: function mockTableData1() {
            var data = [];
            for (var i = 0; i < 10; i++) {
                data.push({
                    name: 'Business' + Math.floor(Math.random() * 100 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                    people: [{
                        n: 'People' + Math.floor(Math.random() * 100 + 1),
                        c: Math.floor(Math.random() * 1000000 + 100000)
                    }, {
                        n: 'People' + Math.floor(Math.random() * 100 + 1),
                        c: Math.floor(Math.random() * 1000000 + 100000)
                    }, {
                        n: 'People' + Math.floor(Math.random() * 100 + 1),
                        c: Math.floor(Math.random() * 1000000 + 100000)
                    }],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                });
            }
            return data;
        },
        formatDate: function formatDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            var d = date.getDate();
            d = d < 10 ? '0' + d : d;
            return y + '-' + m + '-' + d;
        },
        changePage: function changePage() {
            // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
            this.tableData1 = this.mockTableData1();
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