require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(114);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_bc3a960a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bc3a960a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_bc3a960a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc3a960a", Component.options)
  } else {
    hotAPI.reload("data-v-bc3a960a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_wxrequest_js__ = __webpack_require__(14);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      // 保存轮播图的数据
      lunboList: [],
      // 导航数据
      navList: [],
      // 楼层数据
      floorList: []
    };
  },

  // 当 data 和 methods 初始化完成之后执行
  methods: {
    // 获取轮播图的数据
    getlunboList: function getlunboList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, _res$data, message, meta;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/home/swiperdata'
                });

              case 2:
                res = _context.sent;

                // 解构
                _res$data = res.data, message = _res$data.message, meta = _res$data.meta;
                // 判断

                if (meta.status === 200) {
                  _this.lunboList = message;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 获取导航的数据
    getNavList: function getNavList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, _res$data2, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/home/catitems'
                });

              case 2:
                res = _context2.sent;

                // 解构
                _res$data2 = res.data, meta = _res$data2.meta, message = _res$data2.message;
                // 判断

                if (meta.status === 200) {
                  _this2.navList = message;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    // 获取楼层数据
    getFloorList: function getFloorList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res, _res$data3, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/home/floordata'
                });

              case 2:
                res = _context3.sent;
                _res$data3 = res.data, meta = _res$data3.meta, message = _res$data3.message;

                if (meta.status === 200) {
                  _this3.floorList = message;
                }
                console.log(_this3.floorList);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    // 跳转到搜索页面
    toSearch: function toSearch() {
      wx.navigateTo({
        url: '/pages/search/main'
      });
    }
  },
  onLoad: function onLoad() {
    // 发送请求
    this.getlunboList();
    this.getNavList();
    this.getFloorList();
  }
});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "topHead"
  }, [_c('input', {
    staticClass: "search",
    attrs: {
      "type": "search",
      "eventid": '0'
    },
    on: {
      "click": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "icon"
  }, [_c('icon', {
    attrs: {
      "type": "search",
      "size": "20"
    }
  }), _vm._v(" "), _c('span', [_vm._v("搜索")])], 1)]), _vm._v(" "), _c('swiper', {
    staticClass: "lunbo",
    attrs: {
      "indicator-dots": "",
      "autoplay": "",
      "interval": "3000",
      "duration": "300",
      "circular": ""
    }
  }, _vm._l((_vm.lunboList), function(item, index) {
    return _c('swiper-item', {
      key: index,
      staticClass: "lb-item",
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.image_src
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, _vm._l((_vm.navList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "n-item"
    }, [_c('img', {
      attrs: {
        "src": item.image_src,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.name))])])
  })), _vm._v(" "), _vm._l((_vm.floorList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "floor"
    }, [_c('div', {
      staticClass: "title"
    }, [_c('img', {
      attrs: {
        "mode": "scaleToFill",
        "src": item.floor_title.image_src,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.floor_title.name))])]), _vm._v(" "), _c('div', {
      staticClass: "f-item"
    }, _vm._l((item.product_list), function(item1, index1) {
      return _c('img', {
        key: index1,
        attrs: {
          "src": item1.image_src,
          "alt": item1.name
        }
      })
    }))])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bc3a960a", esExports)
  }
}

/***/ })

},[113]);