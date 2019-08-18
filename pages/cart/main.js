require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "address"
  }, [(!_vm.addredss.userName) ? _c('div', {
    staticClass: "no-add"
  }, [_c('span', [_vm._v("没有地址")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.setAddress
    }
  }, [_vm._v(">")])]) : _c('div', {
    staticClass: "yes-add"
  }, [_c('div', {
    staticClass: "msg"
  }, [_c('span', [_vm._v("收货人： " + _vm._s(_vm.addredss.userName))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.addredss.telNumber) + "\n          "), _c('text', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.setAddress
    }
  }, [_vm._v(">")])])]), _vm._v(" "), _c('div', {
    staticClass: "addmsg"
  }, [_vm._v("\n        " + _vm._s(_vm.detailAddress) + "\n      ")])]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/icon/cart_border@2x(1).png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "goodsList"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._v("\n      优购生活馆\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.goodsList), function(value, key) {
    return _c('div', {
      key: key,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "left"
    }, [_c('icon', {
      attrs: {
        "type": "success",
        "color": value.status ? 'red' : 'gray',
        "eventid": '2_' + key
      },
      on: {
        "click": function($event) {
          _vm.changeStatus(value)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
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
    }, [_vm._v("￥" + _vm._s(value.goods_price) + ".00")]), _vm._v(" "), _c('div', {
      staticClass: "count"
    }, [_c('span', {
      attrs: {
        "eventid": '3_' + key
      },
      on: {
        "click": function($event) {
          _vm.subOne(value)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (value.num),
        expression: "value.num"
      }],
      attrs: {
        "type": "text",
        "eventid": '4_' + key
      },
      domProps: {
        "value": (value.num)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          value.num = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      attrs: {
        "eventid": '5_' + key
      },
      on: {
        "click": function($event) {
          _vm.addOne(value)
        }
      }
    }, [_vm._v("+")])])])])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "selAll"
  }, [_c('icon', {
    attrs: {
      "type": "success",
      "color": _vm.selectAll ? 'red' : 'gray',
      "eventid": '6'
    },
    on: {
      "click": _vm.checkAll
    }
  }), _vm._v(" "), _c('span', [_vm._v("全选")])], 1), _vm._v(" "), _c('div', {
    staticClass: "total"
  }, [_c('span', [_vm._v("合计: ￥" + _vm._s(_vm.total) + ".00")]), _vm._v(" "), _c('span', [_vm._v("包运费")])]), _vm._v(" "), _c('div', {
    staticClass: "pay"
  }, [_c('button', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.pay
    }
  }, [_vm._v("结算(" + _vm._s(_vm.totalNum) + ")")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0d421dfc", esExports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(68);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0d421dfc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d421dfc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0d421dfc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d421dfc", Component.options)
  } else {
    hotAPI.reload("data-v-0d421dfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // 收货地址
      addredss: {},
      // 购物车列表
      goodsList: {},
      // 登录信息
      token: null
    };
  },
  onShow: function onShow() {
    // 从storage 中取出地址
    this.addredss = wx.getStorageSync('address') || {};
    //  从storage 中取出购物车列表
    this.goodsList = wx.getStorageSync('cart') || {};
    // 给 token 赋值
    this.token = wx.getStorageSync('token') || null;
  },

  computed: {
    // 拼接的收货地址
    detailAddress: function detailAddress() {
      return this.addredss ? this.addredss.provinceName + this.addredss.cityName + this.addredss.countyName + this.addredss.detailInfo : '';
    },

    // 得到总价
    total: function total() {
      var _this = this;

      var count = 0;
      // 遍历数据源，将价格相加
      // item: key
      // for (var item in this.goodsList) {
      //   if (this.goodsList[item].status === true) {
      //     count += this.goodsList[item].goods_price
      //   }
      // }
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this.goodsList).forEach(function (item) {
        if (_this.goodsList[item].status === true) {
          count += _this.goodsList[item].goods_price * _this.goodsList[item].num;
        }
      });
      // 提示，明天再来写的时候这个写会变为
      // Object.Keys(this.goodsList).forEach(item => { console.log(this.goodsList[item])})
      return count;
    },

    // 选中的状态
    selectAll: function selectAll() {
      var _this2 = this;

      var isAll = true;
      // 遍历 goodsList 来得到当前元素的状态
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this.goodsList).forEach(function (item) {
        if (_this2.goodsList[item].status === false) {
          isAll = false;
        }
      });
      return isAll;
    },
    totalNum: function totalNum() {
      var _this3 = this;

      var num = 0;
      // 得到购物车中所有选中商品的数量的总和
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this.goodsList).forEach(function (item) {
        if (_this3.goodsList[item].status === true) {
          num += _this3.goodsList[item].num;
        }
      });
      return num;
    }
  },
  methods: {
    // 设置收货地址
    setAddress: function setAddress() {
      var _this4 = this;

      wx.chooseAddress({
        success: function success(res) {
          _this4.addredss = res;
          // 将数据保存到 storage 中
          wx.setStorageSync('address', _this4.addredss);
        }
      });
    },

    // 点击状态时，改变元素状态
    changeStatus: function changeStatus(item) {
      // console.log(item)
      // 改变状态
      item.status = !item.status;
      // 重新保存到 storage
      wx.setStorageSync('cart', this.goodsList);
    },

    // 数量减一
    subOne: function subOne(value) {
      var _this5 = this;

      value.num--;
      // 判断元素是否等于0，如果等于就访问用户是否要将商品删除
      if (value.num === 0) {
        wx.showModal({
          title: '提示',
          content: '您确定要删除此商品吗',
          success: function success(res) {
            if (res.confirm) {
              // 将当商品（value）从 goodsList 中删除
              delete _this5.goodsList[value.goods_id];
              // console.log(this.goodsList)
              // 重新给  goodsList 赋值:更新视图
              _this5.goodsList = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, _this5.goodsList);
            } else if (res.cancel) {
              // 重新将数据变为 1
              value.num = 1;
            }
            // 将数据重新保存到 storage 中
            wx.setStorageSync('cart', _this5.goodsList);
          }
        });
      }
    },

    // 数据加一
    addOne: function addOne(value) {
      value.num++;
      wx.setStorageSync('cart', this.goodsList);
    },

    // 改变状态
    checkAll: function checkAll() {
      var _this6 = this;

      // 得到当前全选的状态
      var status = !this.selectAll;
      // 给所有的元素都设置为这个状态
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(this.goodsList).forEach(function (item) {
        _this6.goodsList[item].status = status;
      });
      // 保存到 storage 中
      wx.setStorageSync('cart', this.goodsList);
    },

    // 结算逻辑
    pay: function pay() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var time, goods, item, res, _res$data, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this7.totalNum === 0)) {
                  _context.next = 3;
                  break;
                }

                wx.showToast({
                  title: '您还没有选中商品',
                  icon: 'none',
                  duration: 1000
                });
                return _context.abrupt('return');

              case 3:
                // 判断是否登录
                if (!_this7.token) {
                  time = 500;
                  // 跳转到 me

                  wx.showToast({
                    title: '您还没有登录',
                    icon: 'none',
                    duration: time
                  });
                  setTimeout(function () {
                    wx.switchTab({
                      url: '/pages/me/main'
                    });
                  }, time);
                }
                // 生成一个 goods 数组
                goods = [];

                for (item in _this7.goodsList) {
                  goods.push({
                    goods_id: _this7.goodsList[item].goods_id,
                    goods_number: _this7.goodsList[item].num,
                    goods_price: _this7.goodsList[item].goods_price
                  });
                }
                // 下单
                _context.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/my/orders/create',
                  method: 'POST',
                  header: {
                    Authorization: _this7.token
                  },
                  data: {
                    order_price: _this7.total,
                    consignee_addr: _this7.detailAddress,
                    goods: goods
                  }
                });

              case 8:
                res = _context.sent;
                _res$data = res.data, meta = _res$data.meta, message = _res$data.message;

                if (meta.status === 200) {
                  // 将订单号&订单中的商品数据进行保存
                  // 保存订单号
                  wx.setStorageSync('orderId', message.order_number);
                  // 保存订单中的商品数据
                  wx.setStorageSync('goods_detail', message.goods);

                  // 跳转到订单支付
                  wx.navigateTo({
                    url: '/pages/pay/main'
                  });
                  // 提示下单成功
                  wx.showToast({
                    title: '下单成功',
                    icon: 'success',
                    duration: 1000
                  });
                }

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this7);
      }))();
    }
  }
});

/***/ })

},[67]);