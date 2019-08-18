require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(156);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_09aea502_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09aea502"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_09aea502_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09aea502", Component.options)
  } else {
    hotAPI.reload("data-v-09aea502", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wxrequest_js__ = __webpack_require__(14);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 引入 wxrequest

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // 搜索的关键字
      query: '',
      // 导航中的 文本
      navList: ['综合', '销量', '价格'],
      // 激活的下标
      selectedIndex: 0,
      // 页容量
      pagesize: 10,
      // 当前页
      pagenum: 1,
      // 搜索数据源
      searchList: [],
      // 数据总条数
      total: -1, // 为了保存页面打开时两个数据不相等
      // bool值
      isEnd: true,
      // 设置头部的定位
      position: 'static',
      marginTop: '0px'
    };
  },

  methods: {
    changeIndex: function changeIndex(index) {
      // 设置了当前的激活导航的下标
      this.selectedIndex = index;
      // 判断点击的是否是价格
      if (index === 2) {
        // 将数据源通过价格排序
        this.searchList.sort(function (a, b) {
          return b.goods_price - a.goods_price; // 升序
        });
      }
    },

    // 请求搜索列表数据
    getSearchList: function getSearchList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, _res$data, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.searchList.length === _this.total)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                if (_this.isEnd) {
                  _context.next = 5;
                  break;
                }

                _this.pagenum--;
                return _context.abrupt('return');

              case 5:
                // 将状态改为 false
                _this.isEnd = false;
                wx.showLoading({
                  title: '加载中'
                });
                _context.next = 9;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/goods/search',
                  data: {
                    query: _this.query,
                    pagesize: _this.pagesize,
                    pagenum: _this.pagenum // 5s
                  }
                });

              case 9:
                res = _context.sent;
                _res$data = res.data, meta = _res$data.meta, message = _res$data.message;

                if (meta.status === 200) {
                  _this.total = message.total;
                  // 不应该直接赋值，应该进行追加
                  _this.searchList = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(_this.searchList), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(message.goods));
                }
                _this.isEnd = true;
                wx.hideLoading();

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  // 得到上一个页面传递过来的参数
  onLoad: function onLoad(options) {
    console.log('onLoad');
    // 清除缓存数据
    this.selectedIndex = 0;
    this.pagenum = 1;
    this.searchList = [];
    this.total = -1;
    this.isEnd = true;

    this.query = options.query;
    // 请求数据
    this.getSearchList();
  },
  onShow: function onShow() {
    console.log('onShow');
  },
  onReady: function onReady() {
    console.log('onReady');
  },
  onHide: function onHide() {
    console.log('onHide');
  },
  onUnload: function onUnload() {
    console.log('onUnload');
  },

  // 上拉触底事件：
  onReachBottom: function onReachBottom() {
    // 修改当前页
    this.pagenum++;
    // 重新请求数据
    this.getSearchList();
  },

  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    // 更新数据
    this.pagenum = 1;
    this.searchList = [];
    this.total = -1;
    // 重新请求数据
    this.getSearchList();
    // 关闭刷新背景
    wx.stopPullDownRefresh();
  },

  // 当页面滚动时触发
  onPageScroll: function onPageScroll(scroll) {
    if (scroll.scrollTop === 0) {
      this.position = 'static';
      this.marginTop = '0px';
    } else {
      this.position = 'fixed';
      this.marginTop = '200rpx';
    }
  }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "myHead",
    style: ({
      position: _vm.position
    })
  }, [_c('div', {
    staticClass: "topHead"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    staticClass: "search",
    attrs: {
      "type": "search",
      "placeholder": "搜索",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "icon"
  }, [_c('icon', {
    attrs: {
      "type": "search",
      "size": "20"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, _vm._l((_vm.navList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "n-item",
      class: {
        active: _vm.selectedIndex === index
      },
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeIndex(index)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "goodsList",
    style: ({
      marginTop: _vm.marginTop
    })
  }, [_vm._l((_vm.searchList), function(item, index) {
    return _c('a', {
      key: index,
      staticClass: "g-item",
      attrs: {
        "href": '/pages/detail/main?id=' + item.goods_id
      }
    }, [_c('div', {
      staticClass: "left"
    }, [_c('img', {
      attrs: {
        "src": item.goods_small_logo,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "word"
    }, [_vm._v("\n          " + _vm._s(item.goods_name) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_vm._v("￥\n          "), _c('span', [_vm._v(_vm._s(item.goods_price))]), _vm._v(".00")])])])
  }), _vm._v(" "), (_vm.searchList.length === _vm.total) ? _c('div', {
    staticClass: "bottomLine"
  }, [_vm._v("\n      ---我是有底线的---\n    ")]) : _vm._e()], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-09aea502", esExports)
  }
}

/***/ })

},[155]);