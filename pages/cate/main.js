require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(104);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_633eef6b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_633eef6b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cate\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-633eef6b", Component.options)
  } else {
    hotAPI.reload("data-v-633eef6b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
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
//
//
//
//
//

// 引入 wxreqst


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // 设置默认选中的 li 标签的下标
      selectedIndex: 0,
      // 分类数据源
      cateList: [],
      // 内容数据源
      contentList: []
    };
  },

  methods: {
    // 点击 li 标签时触发
    changeActive: function changeActive(index) {
      // 修改选中下标
      this.selectedIndex = index;
      // 根据下标得到右侧的数据源
      this.contentList = this.cateList[index].children;
      console.log(this.contentList);
    },

    // 获取分类数据源
    getCateList: function getCateList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, _res$data, meta, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: '正在加载'
                });
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_wxrequest_js__["a" /* default */])({
                  url: 'api/public/v1/categories'
                });

              case 3:
                res = _context.sent;

                // 解构
                _res$data = res.data, meta = _res$data.meta, message = _res$data.message;
                // 判断

                if (meta.status === 200) {
                  _this.cateList = message;
                  // 在打开页面时也需要给 contentList 赋值
                  _this.contentList = _this.cateList[_this.selectedIndex].children;
                }
                wx.hideLoading();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  mounted: function mounted() {
    // 获取数据
    this.getCateList();
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "topHead"
  }, [_c('input', {
    staticClass: "search",
    attrs: {
      "type": "search"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "icon"
  }, [_c('icon', {
    attrs: {
      "type": "search",
      "size": "20"
    }
  }), _vm._v(" "), _c('span', [_vm._v("搜索")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('ul', _vm._l((_vm.cateList), function(item, index) {
    return _c('li', {
      key: index,
      class: {
        active: _vm.selectedIndex === index
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeActive(index)
        }
      }
    }, [_vm._v("\n          " + _vm._s(item.cat_name) + "\n        ")])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('img', {
    staticClass: "topImg",
    attrs: {
      "src": "https://img.alicdn.com/tps/i4/TB1OKgFXvb2gK0jSZK9SuuEgFXa.jpg_q90_.webp",
      "alt": ""
    }
  }), _vm._v(" "), _vm._l((_vm.contentList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item-box"
    }, [_c('div', {
      staticClass: "title"
    }, [_c('span', [_vm._v("/")]), _vm._v("\n          " + _vm._s(item.cat_name) + "\n          "), _c('span', [_vm._v("/")])]), _vm._v(" "), _c('div', {
      staticClass: "box"
    }, _vm._l((item.children), function(item1, index1) {
      return _c('div', {
        key: index1,
        staticClass: "item"
      }, [_c('a', {
        attrs: {
          "href": '/pages/searchList/main?query=' + item1.cat_name
        }
      }, [_c('img', {
        attrs: {
          "src": 'https://autumnfish.cn/wx/' + item1.cat_icon,
          "alt": ""
        }
      }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item1.cat_name))])])])
    }))])
  })], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-633eef6b", esExports)
  }
}

/***/ })

},[103]);