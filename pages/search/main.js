require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(129);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0e369244_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e369244"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0e369244_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e369244", Component.options)
  } else {
    hotAPI.reload("data-v-0e369244", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_wxrequest_js__ = __webpack_require__(14);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 引入 wxreqest


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // 搜索的关键字
      key: '',
      // 搜索的列表
      searchList: [],
      // 联想的数据源
      thinkList: [],
      // 定时器：用来发送联想请求
      timer: null
    };
  },
  mounted: function mounted() {
    // 从 storage 中取出
    var res = wx.getStorageSync('key');
    this.searchList = res ? JSON.parse(res) : [];
  },

  methods: {
    // 清除key
    clearkey: function clearkey() {
      this.key = '';
    },

    // 定义一个方法用来将数据进行去重
    // 当敲击回车时触发，跳转到搜索页面
    toSearch: function toSearch() {
      var _this = this;

      // 跳转到搜索页面
      if (this.key != '') {
        wx.navigateTo({
          url: '/pages/searchList/main?query=' + this.key,
          success: function success() {
            _this.thinkList = [];
          }
        });
        // 将 key 保存到数组中
        this.searchList.unshift(this.key);
        // 去重
        this.searchList = [].concat(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default.a([].concat(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(this.searchList)))));
        // 将 数组转为 字符串
        var searchListStr = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.searchList);
        // 使用 Storage 来保存
        wx.setStorageSync('key', searchListStr);
      }
    },

    // 将搜索数据放到输入框，并且跳转到搜索列表
    // 点击搜索记录时触发
    opensearch: function opensearch(item) {
      var _this2 = this;

      this.key = item;
      // 跳转
      wx.navigateTo({
        url: '/pages/searchList/main?query=' + this.key,
        success: function success() {
          _this2.thinkList = [];
        }
      });
    },

    // 清除搜索历史
    clearsearch: function clearsearch() {
      var _this3 = this;

      // 显示一个模态框
      wx.showModal({
        title: '警告',
        content: '是否清空搜索历史',
        success: function success(res) {
          if (res.confirm) {
            // 将 storage 中的数据清除
            wx.removeStorageSync('key');
            // 将 key 清空'
            _this3.key = '';
            _this3.searchList = [];
          }
        }
      });
    },

    // 在输入框中只要输入内容就需要进行联想
    thinkSearch: function thinkSearch() {
      var _this4 = this;

      // 进来以后先判断 timer 是否存在 ，如果存在 先清空
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // 将内容添加到一个定时器中
      this.timer = setTimeout(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, _res$data, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__utils_wxrequest_js__["a" /* default */])({
                  // 最多只联想10条
                  url: 'api/public/v1/goods/search?query=' + _this4.key + '&pagenum=1&pagesize=10'
                });

              case 2:
                res = _context.sent;
                _res$data = res.data, meta = _res$data.meta, message = _res$data.message;

                if (meta.status === 200) {
                  _this4.thinkList = message.goods;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4);
      })), 500);
    },

    // 点击联想出来的数据进行搜索
    lianxiangSearch: function lianxiangSearch(item) {
      var _this5 = this;

      this.key = item;
      // 跳转
      wx.navigateTo({
        url: '/pages/searchList/main?query=' + this.key,
        success: function success() {
          _this5.thinkList = [];
        }
      });
      // 将数据保存到 storage
      // 将 key 保存到数组中
      this.searchList.unshift(this.key);
      // 去重
      this.searchList = [].concat(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default.a([].concat(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(this.searchList)))));
      // 将 数组转为 字符串
      var searchListStr = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.searchList);
      // 使用 Storage 来保存
      wx.setStorageSync('key', searchListStr);
    }
  }
});

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "topHead"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.key),
      expression: "key"
    }],
    staticClass: "search",
    attrs: {
      "placeholder": "请输入要搜索的内容",
      "type": "search",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.key)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.key = $event.target.value
      }, _vm.thinkSearch],
      "confirm": _vm.toSearch
    }
  }), _vm._v(" "), (_vm.thinkList.length != 0) ? _c('div', {
    staticClass: "thinkbox"
  }, _vm._l((_vm.thinkList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "think",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.lianxiangSearch(item.goods_name)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.goods_name) + "\n      ")])
  })) : _vm._e(), _vm._v(" "), (_vm.key.length !== 0) ? _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.clearkey
    }
  }, [_vm._v("取消")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "icon"
  }, [_c('icon', {
    attrs: {
      "type": "search",
      "size": "20"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "bigbox"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("搜索历史")]), _vm._v(" "), _c('icon', {
    attrs: {
      "type": "clear",
      "size": "16",
      "eventid": '3'
    },
    on: {
      "click": _vm.clearsearch
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.searchList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.opensearch(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0e369244", esExports)
  }
}

/***/ })

},[128]);