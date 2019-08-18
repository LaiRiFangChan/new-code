require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(109);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4529c5ad_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(112);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4529c5ad_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4529c5ad", Component.options)
  } else {
    hotAPI.reload("data-v-4529c5ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 引入


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      itemIndex: 0,
      // 展示详情数据的id
      id: 0,
      // 数据源:当前渲染页面的详情数据
      obj: {},
      // 保存购物车数据的数组
      cartList: {} // 当每次打开页面时，应该先去 storage 中取出数据，
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, _res$data, meta, message;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.id = options.id;
              // 根据 id 去获取数据源
              _context.next = 3;
              return Object(__WEBPACK_IMPORTED_MODULE_3__utils_wxrequest_js__["a" /* default */])({
                url: 'api/public/v1/goods/detail?goods_id=' + options.id
              });

            case 3:
              res = _context.sent;
              _res$data = res.data, meta = _res$data.meta, message = _res$data.message;

              if (meta.status === 200) {
                _this.obj = message;
              }
              // 当页面打开时 需要从 storage 中取出原有的购物车数据
              _this.cartList = wx.getStorageSync('cart') || {};

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: {
    preview: function preview(url) {
      // 将 obj.pics 中的图片单独提取为一个数组
      var newPicArr = [];
      this.obj.pics.forEach(function (item) {
        newPicArr.push(item.pics_big_url);
      });

      // console.log(newPicArr)
      // 调用 wx 自带的预览方法
      wx.previewImage({
        current: url, // 当前预览的图片地址
        urls: newPicArr // 要预览的所有图片
      });
    },
    toCart: function toCart() {
      // 使用编程式导航进行路径的跳转
      // wx.navigateTo({
      //   url: '/pages/searchList/main?query=小米'
      // })
      console.log(111111);
      // 这个方法不能跳转到 tabBar 对应的页面
      // wx.navigateTo({
      //   url: '/pages/cart/main'
      // })
      // 跳转到 tabbar
      wx.switchTab({
        url: '/pages/cart/main'
      });
    },

    // 将商品信息保存到 storage 中
    addToCart: function addToCart() {
      // 判断是否存在这条数据：
      if (this.cartList[this.obj.goods_id]) {
        this.cartList[this.obj.goods_id].num++;
      } else {
        // 以对象形式保存
        this.cartList[this.obj.goods_id] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.obj, {
          num: 1, // 商品的数量
          status: true // 商品的状态（默认为选中状态）
        });
      }
      // 保存到 storage 中
      // 小程序中的 storage 可以保存任意类型的数据
      wx.setStorageSync('cart', this.cartList);
      // 添加一个保存成功的提示框
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 2000
      });
    }
  },
  // 点击分享以后会触发的方法
  onShareAppMessage: function onShareAppMessage() {
    console.log('打开了分享页面');
  }
});

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bigbox"
  }, [_c('swiper', {
    staticClass: "lb",
    attrs: {
      "indicator-dots": "",
      "autoplay": "",
      "interval": "3000",
      "duration": "300",
      "circular": ""
    }
  }, _vm._l((_vm.obj.pics), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      attrs: {
        "mode": "aspectFill",
        "src": item.pics_big_url,
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.preview(item.pics_big_url)
        }
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "msg"
  }, [_c('div', {
    staticClass: "price"
  }, [_vm._v("\n      ￥" + _vm._s(_vm.obj.goods_price) + ".00\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "word"
  }, [_c('div', {
    staticClass: "left"
  }, [_vm._v(_vm._s(_vm.obj.goods_name))]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('i', {
    staticClass: "iconfont icon-fenxiang"
  }), _vm._v("\n        分享\n        "), _c('button', {
    attrs: {
      "open-type": "share"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "isSend"
  }, [_vm._v("快递： 免运费")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tab"
  }, [_c('div', {
    staticClass: "item",
    class: {
      active: _vm.itemIndex === 0
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.itemIndex = 0
      }
    }
  }, [_vm._v("图文介绍")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      active: _vm.itemIndex === 1
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.itemIndex = 1
      }
    }
  }, [_vm._v("规格参数")])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.itemIndex === 0) ? _c('div', {
    staticClass: "jieshao",
    domProps: {
      "innerHTML": _vm._s(_vm.obj.goods_introduce)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.itemIndex === 1) ? _c('div', {
    staticClass: "canshu"
  }, _vm._l((_vm.obj.attrs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "key"
    }, [_vm._v(_vm._s(item.attr_name))]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_vm._v(_vm._s(item.attr_value))])])
  })) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "start kefu"
  }, [_c('i', {
    staticClass: "iconfont icon-kefu"
  }), _vm._v("\n      联系客服\n      "), _c('button', {
    attrs: {
      "open-type": "contact"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "start",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toCart
    }
  }, [_c('i', {
    staticClass: "iconfont icon-gouwuche"
  }), _vm._v("\n      购物车\n    ")], 1), _vm._v(" "), _c('button', {
    staticClass: "end one",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addToCart
    }
  }, [_vm._v("\n      加入购物车\n    ")]), _vm._v(" "), _c('button', {
    staticClass: "end two"
  }, [_vm._v("立即购买")])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chuxiao"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._v("\n      促销：\n      "), _c('span', {
    staticClass: "color"
  }, [_vm._v("满 300 减 30")])]), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_vm._v("\n      已选：\n      "), _c('span', [_vm._v("黑色/s/1件")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4529c5ad", esExports)
  }
}

/***/ })

},[108]);