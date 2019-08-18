require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(124);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_536dc5e2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(173);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(172)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-536dc5e2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_536dc5e2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\pay\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-536dc5e2", Component.options)
  } else {
    hotAPI.reload("data-v-536dc5e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_wxrequest_js__ = __webpack_require__(14);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      goodsList: {}
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    // 购物车中的所有数据
    var cartList = wx.getStorageSync('cart') || {};
    // 筛选出选中的数据
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(cartList).forEach(function (item) {
      if (cartList[item].status === true) {
        _this.goodsList[item] = cartList[item];
      }
    });
  },

  methods: {
    payMoney: function payMoney() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, _res$data, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/my/orders/req_unifiedorder',
                  method: 'POST',
                  header: {
                    Authorization: wx.getStorageSync('token')
                  },
                  data: {
                    order_number: wx.getStorageSync('orderId')
                  }
                });

              case 2:
                res = _context.sent;
                _res$data = res.data, meta = _res$data.meta, message = _res$data.message;

                if (meta.status === 200) {
                  // 开启一个支付界面
                  wx.requestPayment({
                    timeStamp: message.wxorder.timeStamp,
                    nonceStr: message.wxorder.nonceStr,
                    package: message.wxorder.package,
                    signType: message.wxorder.signType,
                    paySign: message.wxorder.paySign,
                    success: function success(res) {
                      var _this2 = this;

                      // 清除购物车：
                      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this.goodsList).forEach(function (item) {
                        if (_this2.goodsList[item].status === true) {
                          delete _this2.goodsList[item];
                        }
                      });
                      // 更新视图
                      this.goodsList = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.goodsList);
                      // 重新存在本地
                      wx.setStorageSync('cart', this.goodsList);
                      // 提示
                      wx.showToast({
                        title: '支付成功',
                        icon: 'success',
                        duration: 500
                      });
                      setTimeout(function () {
                        // 跳转到我的页面
                        wx.switchTab({
                          url: '/pages/me/main'
                        });
                      }, 500);
                    },
                    fail: function fail(res) {
                      wx.showToast({
                        title: '支付不成功',
                        icon: 'none',
                        duration: 500
                      });
                    }
                  });
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    }
  }
});

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "goodsList"
  }, [_c('div', {
    staticClass: "list"
  }, _vm._l((_vm.goodsList), function(value, key) {
    return _c('div', {
      key: key,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": value.goods_small_logo,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "word"
    }, [_c('div', {
      staticClass: "msg"
    }, [_vm._v("\n              " + _vm._s(value.goods_name) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('div', {
      staticClass: "money"
    }, [_vm._v("￥" + _vm._s(value.goods_price) + ".00")])])])])])
  }))]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.payMoney
    }
  }, [_vm._v("微信支付")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-536dc5e2", esExports)
  }
}

/***/ })

},[123]);