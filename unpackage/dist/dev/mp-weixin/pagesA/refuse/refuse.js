require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesA/refuse/refuse"],{

/***/ 334:
/*!********************************************************************************************!*\
  !*** /Users/agenthou/work/uni-ddzk-jingkou-wx/main.js?{"page":"pagesA%2Frefuse%2Frefuse"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _refuse = _interopRequireDefault(__webpack_require__(/*! ./pagesA/refuse/refuse.vue */ 335));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_refuse.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 335:
/*!*************************************************************************!*\
  !*** /Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refuse.vue?vue&type=template&id=569e122a&scoped=true& */ 336);
/* harmony import */ var _refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refuse.vue?vue&type=script&lang=js& */ 338);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refuse.vue?vue&type=style&index=0&id=569e122a&lang=scss&scoped=true& */ 340);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "569e122a",
  null,
  false,
  _refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/refuse/refuse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 336:
/*!********************************************************************************************************************!*\
  !*** /Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue?vue&type=template&id=569e122a&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./refuse.vue?vue&type=template&id=569e122a&scoped=true& */ 337);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_template_id_569e122a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 337:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue?vue&type=template&id=569e122a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 338:
/*!**************************************************************************************************!*\
  !*** /Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./refuse.vue?vue&type=script&lang=js& */ 339);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 339:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var NavBar = function NavBar() {
  __webpack_require__.e(/*! require.ensure | components/NavBar */ "components/NavBar").then((function () {
    return resolve(__webpack_require__(/*! @/components/NavBar.vue */ 438));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    NavBar: NavBar
  },
  data: function data() {
    return {
      title: '',
      value: '',
      bgHeight: '',
      newList: [],
      arrList: [{
        text: '磁盘',
        title: '可回收物'
      }, {
        text: '唱片',
        title: '可回收物'
      }, {
        text: '充电头',
        title: '可回收物'
      }, {
        text: '金属容器',
        title: '可回收物'
      }, {
        text: '玻璃',
        title: '可回收物'
      }, {
        text: 'U盘',
        title: '可回收物'
      }, {
        text: '硬盘',
        title: '可回收物'
      }, {
        text: '网线',
        title: '可回收物'
      }, {
        text: '光盘',
        title: '可回收物'
      }, {
        text: '磁带',
        title: '可回收物'
      }, {
        text: '画板',
        title: '可回收物'
      }, {
        text: '相框',
        title: '可回收物'
      }, {
        text: '画框',
        title: '可回收物'
      }, {
        text: '塑料衣架',
        title: '可回收物'
      }, {
        text: '塑料挂钩',
        title: '可回收物'
      }, {
        text: '笔的外壳',
        title: '可回收物'
      }, {
        text: '塑料文件夹',
        title: '可回收物'
      }, {
        text: '文件盒',
        title: '可回收物'
      }, {
        text: '文件套',
        title: '可回收物'
      }, {
        text: '塑料画笔',
        title: '可回收物'
      }, {
        text: '乐高',
        title: '可回收物'
      }, {
        text: '塑料车',
        title: '可回收物'
      }, {
        text: '海洋球',
        title: '可回收物'
      }, {
        text: '塑料花架',
        title: '可回收物'
      }, {
        text: '泡沫填充物',
        title: '可回收物'
      }, {
        text: '塑料盆',
        title: '可回收物'
      }, {
        text: '塑料饭盒',
        title: '可回收物'
      }, {
        text: '塑料杯',
        title: '可回收物'
      }, {
        text: '塑料玩具',
        title: '可回收物'
      }, {
        text: '雪花片',
        title: '可回收物'
      }, {
        text: '纸板',
        title: '可回收物'
      }, {
        text: '利乐包',
        title: '可回收物'
      }, {
        text: '不直接接触药品的纸质外包装',
        title: '可回收物'
      }, {
        text: '塑料收纳箱',
        title: '可回收物'
      }, {
        text: '塑料容器',
        title: '可回收物'
      }, {
        text: '废弃报纸',
        title: '可回收物'
      }, {
        text: '传单',
        title: '可回收物'
      }, {
        text: '书本杂志',
        title: '可回收物'
      }, {
        text: '废纸盒',
        title: '可回收物'
      }, {
        text: '纸箱',
        title: '可回收物'
      }],
      cardList: [{
        text: '可回收物',
        active: true,
        arrList: [{
          text: '磁盘',
          title: '可回收物'
        }, {
          text: '唱片',
          title: '可回收物'
        }, {
          text: '充电头',
          title: '可回收物'
        }, {
          text: '金属容器',
          title: '可回收物'
        }, {
          text: '玻璃',
          title: '可回收物'
        }, {
          text: 'U盘',
          title: '可回收物'
        }, {
          text: '硬盘',
          title: '可回收物'
        }, {
          text: '网线',
          title: '可回收物'
        }, {
          text: '光盘',
          title: '可回收物'
        }, {
          text: '磁带',
          title: '可回收物'
        }, {
          text: '画板',
          title: '可回收物'
        }, {
          text: '相框',
          title: '可回收物'
        }, {
          text: '画框',
          title: '可回收物'
        }, {
          text: '塑料衣架',
          title: '可回收物'
        }, {
          text: '塑料挂钩',
          title: '可回收物'
        }, {
          text: '笔的外壳',
          title: '可回收物'
        }, {
          text: '塑料文件夹',
          title: '可回收物'
        }, {
          text: '文件盒',
          title: '可回收物'
        }, {
          text: '文件套',
          title: '可回收物'
        }, {
          text: '塑料画笔',
          title: '可回收物'
        }, {
          text: '乐高',
          title: '可回收物'
        }, {
          text: '塑料车',
          title: '可回收物'
        }, {
          text: '海洋球',
          title: '可回收物'
        }, {
          text: '塑料花架',
          title: '可回收物'
        }, {
          text: '泡沫填充物',
          title: '可回收物'
        }, {
          text: '塑料盆',
          title: '可回收物'
        }, {
          text: '塑料饭盒',
          title: '可回收物'
        }, {
          text: '塑料杯',
          title: '可回收物'
        }, {
          text: '塑料玩具',
          title: '可回收物'
        }, {
          text: '雪花片',
          title: '可回收物'
        }, {
          text: '纸板',
          title: '可回收物'
        }, {
          text: '利乐包',
          title: '可回收物'
        }, {
          text: '不直接接触药品的纸质外包装',
          title: '可回收物'
        }, {
          text: '塑料收纳箱',
          title: '可回收物'
        }, {
          text: '塑料容器',
          title: '可回收物'
        }, {
          text: '废弃报纸',
          title: '可回收物'
        }, {
          text: '传单',
          title: '可回收物'
        }, {
          text: '书本杂志',
          title: '可回收物'
        }, {
          text: '废纸盒',
          title: '可回收物'
        }, {
          text: '纸箱',
          title: '可回收物'
        }]
      }, {
        text: '有害垃圾',
        active: false,
        arrList: [{
          text: '充电电池',
          title: '有害垃圾'
        }, {
          text: '移动电源',
          title: '有害垃圾'
        }, {
          text: '废电路板',
          title: '有害垃圾'
        }, {
          text: '自动变速器油',
          title: '有害垃圾'
        }, {
          text: '齿轮油',
          title: '有害垃圾'
        }, {
          text: '废X光片',
          title: '有害垃圾'
        }, {
          text: 'CT光片',
          title: '有害垃圾'
        }, {
          text: '铅蓄电池',
          title: '有害垃圾'
        }, {
          text: '废日光灯管',
          title: '有害垃圾'
        }, {
          text: '荧光灯管',
          title: '有害垃圾'
        }, {
          text: '节能灯',
          title: '有害垃圾'
        }, {
          text: '废发动机油',
          title: '有害垃圾'
        }, {
          text: '制动器油',
          title: '有害垃圾'
        }, {
          text: '废硒鼓墨盒及其包装物',
          title: '有害垃圾'
        }, {
          text: '废杀虫剂',
          title: '有害垃圾'
        }, {
          text: '消毒剂',
          title: '有害垃圾'
        }, {
          text: '废清洁剂',
          title: '有害垃圾'
        }, {
          text: '空调清洗剂',
          title: '有害垃圾'
        }, {
          text: '废药品及其内包装',
          title: '有害垃圾'
        }, {
          text: '废含汞温度计',
          title: '有害垃圾'
        }, {
          text: '含汞血压计',
          title: '有害垃圾'
        }, {
          text: '废油漆',
          title: '有害垃圾'
        }, {
          text: '废笔芯',
          title: '有害垃圾'
        }]
      }, {
        text: '厨余垃圾',
        active: false,
        arrList: [{
          text: '枯枝',
          title: '厨余垃圾'
        }, {
          text: '残花枯草',
          title: '厨余垃圾'
        }, {
          text: '西瓜',
          title: '厨余垃圾'
        }, {
          text: '水果果肉',
          title: '厨余垃圾'
        }, {
          text: '水果果皮',
          title: '厨余垃圾'
        }, {
          text: '花卉',
          title: '厨余垃圾'
        }, {
          text: '盆栽植物残枝落叶',
          title: '厨余垃圾'
        }, {
          text: '宠物饲料',
          title: '厨余垃圾'
        }, {
          text: '水果',
          title: '厨余垃圾'
        }, {
          text: '葡萄',
          title: '厨余垃圾'
        }, {
          text: '桔子',
          title: '厨余垃圾'
        }, {
          text: '苹果',
          title: '厨余垃圾'
        }, {
          text: '糖',
          title: '厨余垃圾'
        }, {
          text: '香料',
          title: '厨余垃圾'
        }, {
          text: '果酱',
          title: '厨余垃圾'
        }, {
          text: '番茄酱',
          title: '厨余垃圾'
        }, {
          text: '调味品',
          title: '厨余垃圾'
        }, {
          text: '坚果',
          title: '厨余垃圾'
        }, {
          text: '罐头食品',
          title: '厨余垃圾'
        }, {
          text: '奶粉',
          title: '厨余垃圾'
        }, {
          text: '面粉',
          title: '厨余垃圾'
        }, {
          text: '面包粉',
          title: '厨余垃圾'
        }, {
          text: '碎骨',
          title: '厨余垃圾'
        }, {
          text: '茶叶渣',
          title: '厨余垃圾'
        }, {
          text: '咖啡渣',
          title: '厨余垃圾'
        }, {
          text: '糕饼',
          title: '厨余垃圾'
        }, {
          text: '糖果',
          title: '厨余垃圾'
        }, {
          text: '绿叶菜',
          title: '厨余垃圾'
        }, {
          text: '根茎蔬菜',
          title: '厨余垃圾'
        }, {
          text: '菌菇',
          title: '厨余垃圾'
        }, {
          text: '剩菜剩饭',
          title: '厨余垃圾'
        }, {
          text: '鱼骨',
          title: '厨余垃圾'
        }, {
          text: '鱼',
          title: '厨余垃圾'
        }, {
          text: '鱼鳞',
          title: '厨余垃圾'
        }, {
          text: '虾',
          title: '厨余垃圾'
        }, {
          text: '虾壳',
          title: '厨余垃圾'
        }, {
          text: '鱿鱼',
          title: '厨余垃圾'
        }, {
          text: '蛋',
          title: '厨余垃圾'
        }, {
          text: '动物内脏',
          title: '厨余垃圾'
        }, {
          text: '腊肉',
          title: '厨余垃圾'
        }, {
          text: '午餐肉',
          title: '厨余垃圾'
        }, {
          text: '蛋壳',
          title: '厨余垃圾'
        }, {
          text: '鸡',
          title: '厨余垃圾'
        }, {
          text: '鸭',
          title: '厨余垃圾'
        }, {
          text: '猪',
          title: '厨余垃圾'
        }, {
          text: '牛',
          title: '厨余垃圾'
        }, {
          text: '羊肉',
          title: '厨余垃圾'
        }, {
          text: '米',
          title: '厨余垃圾'
        }, {
          text: '米饭',
          title: '厨余垃圾'
        }, {
          text: '面',
          title: '厨余垃圾'
        }, {
          text: '面包',
          title: '厨余垃圾'
        }, {
          text: '豆类',
          title: '厨余垃圾'
        }]
      }, {
        text: '其他垃圾',
        active: false,
        arrList: [{
          text: '防尘罩',
          title: '其他垃圾'
        }, {
          text: '地毯',
          title: '其他垃圾'
        }, {
          text: '踏垫',
          title: '其他垃圾'
        }, {
          text: '钢丝球',
          title: '其他垃圾'
        }, {
          text: '碱性电池',
          title: '其他垃圾'
        }, {
          text: '碳性电池',
          title: '其他垃圾'
        }, {
          text: '普通塑料购物袋',
          title: '其他垃圾'
        }, {
          text: 'led灯',
          title: '其他垃圾'
        }, {
          text: '各类绳子',
          title: '其他垃圾'
        }, {
          text: '指南针',
          title: '其他垃圾'
        }, {
          text: '雨伞',
          title: '其他垃圾'
        }, {
          text: '雨衣',
          title: '其他垃圾'
        }, {
          text: '火柴',
          title: '其他垃圾'
        }, {
          text: '蜡烛',
          title: '其他垃圾'
        }, {
          text: '沙袋',
          title: '其他垃圾'
        }, {
          text: '拳击手套',
          title: '其他垃圾'
        }, {
          text: '帐篷',
          title: '其他垃圾'
        }, {
          text: '睡袋',
          title: '其他垃圾'
        }, {
          text: '头灯',
          title: '其他垃圾'
        }, {
          text: '球拍',
          title: '其他垃圾'
        }, {
          text: '瑜伽垫',
          title: '其他垃圾'
        }, {
          text: '非金属筷子',
          title: '其他垃圾'
        }, {
          text: '汤勺',
          title: '其他垃圾'
        }, {
          text: '碟子',
          title: '其他垃圾'
        }, {
          text: '烘培用具',
          title: '其他垃圾'
        }, {
          text: '各类球',
          title: '其他垃圾'
        }, {
          text: '毛绒玩具',
          title: '其他垃圾'
        }, {
          text: '枕头',
          title: '其他垃圾'
        }, {
          text: '干燥剂',
          title: '其他垃圾'
        }, {
          text: '镜子',
          title: '其他垃圾'
        }, {
          text: '瓶塞',
          title: '其他垃圾'
        }, {
          text: '袜子',
          title: '其他垃圾'
        }, {
          text: '鞋垫',
          title: '其他垃圾'
        }, {
          text: '帽子',
          title: '其他垃圾'
        }, {
          text: '手套',
          title: '其他垃圾'
        }, {
          text: '口罩',
          title: '其他垃圾'
        }, {
          text: '遮光布',
          title: '其他垃圾'
        }, {
          text: '桌布',
          title: '其他垃圾'
        }, {
          text: '餐具',
          title: '其他垃圾'
        }, {
          text: '杯子',
          title: '其他垃圾'
        }, {
          text: '棉被',
          title: '其他垃圾'
        }, {
          text: '内衣裤',
          title: '其他垃圾'
        }, {
          text: '各类刷子',
          title: '其他垃圾'
        }, {
          text: '面膜',
          title: '其他垃圾'
        }, {
          text: '化妆刷',
          title: '其他垃圾'
        }, {
          text: '化妆棉',
          title: '其他垃圾'
        }, {
          text: '海绵',
          title: '其他垃圾'
        }, {
          text: '搓澡巾',
          title: '其他垃圾'
        }, {
          text: '剃须刀等个护用品',
          title: '其他垃圾'
        }, {
          text: '浴帽',
          title: '其他垃圾'
        }, {
          text: '浴球',
          title: '其他垃圾'
        }, {
          text: '牙线',
          title: '其他垃圾'
        }, {
          text: '牙膏',
          title: '其他垃圾'
        }]
      }],
      allList: [{
        text: '磁盘',
        title: '可回收物'
      }, {
        text: '唱片',
        title: '可回收物'
      }, {
        text: '充电头',
        title: '可回收物'
      }, {
        text: '金属容器',
        title: '可回收物'
      }, {
        text: '玻璃',
        title: '可回收物'
      }, {
        text: 'U盘',
        title: '可回收物'
      }, {
        text: '硬盘',
        title: '可回收物'
      }, {
        text: '网线',
        title: '可回收物'
      }, {
        text: '光盘',
        title: '可回收物'
      }, {
        text: '磁带',
        title: '可回收物'
      }, {
        text: '画板',
        title: '可回收物'
      }, {
        text: '相框',
        title: '可回收物'
      }, {
        text: '画框',
        title: '可回收物'
      }, {
        text: '塑料衣架',
        title: '可回收物'
      }, {
        text: '塑料挂钩',
        title: '可回收物'
      }, {
        text: '笔的外壳',
        title: '可回收物'
      }, {
        text: '塑料文件夹',
        title: '可回收物'
      }, {
        text: '文件盒',
        title: '可回收物'
      }, {
        text: '文件套',
        title: '可回收物'
      }, {
        text: '塑料画笔',
        title: '可回收物'
      }, {
        text: '乐高',
        title: '可回收物'
      }, {
        text: '塑料车',
        title: '可回收物'
      }, {
        text: '海洋球',
        title: '可回收物'
      }, {
        text: '塑料花架',
        title: '可回收物'
      }, {
        text: '泡沫填充物',
        title: '可回收物'
      }, {
        text: '塑料盆',
        title: '可回收物'
      }, {
        text: '塑料饭盒',
        title: '可回收物'
      }, {
        text: '塑料杯',
        title: '可回收物'
      }, {
        text: '塑料玩具',
        title: '可回收物'
      }, {
        text: '雪花片',
        title: '可回收物'
      }, {
        text: '纸板',
        title: '可回收物'
      }, {
        text: '利乐包',
        title: '可回收物'
      }, {
        text: '不直接接触药品的纸质外包装',
        title: '可回收物'
      }, {
        text: '塑料收纳箱',
        title: '可回收物'
      }, {
        text: '塑料容器',
        title: '可回收物'
      }, {
        text: '废弃报纸',
        title: '可回收物'
      }, {
        text: '传单',
        title: '可回收物'
      }, {
        text: '书本杂志',
        title: '可回收物'
      }, {
        text: '废纸盒',
        title: '可回收物'
      }, {
        text: '纸箱',
        title: '可回收物'
      }, {
        text: '充电电池',
        title: '有害垃圾'
      }, {
        text: '移动电源',
        title: '有害垃圾'
      }, {
        text: '废电路板',
        title: '有害垃圾'
      }, {
        text: '自动变速器油',
        title: '有害垃圾'
      }, {
        text: '齿轮油',
        title: '有害垃圾'
      }, {
        text: '废X光片',
        title: '有害垃圾'
      }, {
        text: 'CT光片',
        title: '有害垃圾'
      }, {
        text: '铅蓄电池',
        title: '有害垃圾'
      }, {
        text: '废日光灯管',
        title: '有害垃圾'
      }, {
        text: '荧光灯管',
        title: '有害垃圾'
      }, {
        text: '节能灯',
        title: '有害垃圾'
      }, {
        text: '废发动机油',
        title: '有害垃圾'
      }, {
        text: '制动器油',
        title: '有害垃圾'
      }, {
        text: '废硒鼓墨盒及其包装物',
        title: '有害垃圾'
      }, {
        text: '废杀虫剂',
        title: '有害垃圾'
      }, {
        text: '消毒剂',
        title: '有害垃圾'
      }, {
        text: '废清洁剂',
        title: '有害垃圾'
      }, {
        text: '空调清洗剂',
        title: '有害垃圾'
      }, {
        text: '废药品及其内包装',
        title: '有害垃圾'
      }, {
        text: '废含汞温度计',
        title: '有害垃圾'
      }, {
        text: '含汞血压计',
        title: '有害垃圾'
      }, {
        text: '废油漆',
        title: '有害垃圾'
      }, {
        text: '废笔芯',
        title: '有害垃圾'
      }, {
        text: '枯枝',
        title: '厨余垃圾'
      }, {
        text: '残花枯草',
        title: '厨余垃圾'
      }, {
        text: '西瓜',
        title: '厨余垃圾'
      }, {
        text: '水果果肉',
        title: '厨余垃圾'
      }, {
        text: '水果果皮',
        title: '厨余垃圾'
      }, {
        text: '花卉',
        title: '厨余垃圾'
      }, {
        text: '盆栽植物残枝落叶',
        title: '厨余垃圾'
      }, {
        text: '宠物饲料',
        title: '厨余垃圾'
      }, {
        text: '水果',
        title: '厨余垃圾'
      }, {
        text: '葡萄',
        title: '厨余垃圾'
      }, {
        text: '桔子',
        title: '厨余垃圾'
      }, {
        text: '苹果',
        title: '厨余垃圾'
      }, {
        text: '糖',
        title: '厨余垃圾'
      }, {
        text: '香料',
        title: '厨余垃圾'
      }, {
        text: '果酱',
        title: '厨余垃圾'
      }, {
        text: '番茄酱',
        title: '厨余垃圾'
      }, {
        text: '调味品',
        title: '厨余垃圾'
      }, {
        text: '坚果',
        title: '厨余垃圾'
      }, {
        text: '罐头食品',
        title: '厨余垃圾'
      }, {
        text: '奶粉',
        title: '厨余垃圾'
      }, {
        text: '面粉',
        title: '厨余垃圾'
      }, {
        text: '面包粉',
        title: '厨余垃圾'
      }, {
        text: '碎骨',
        title: '厨余垃圾'
      }, {
        text: '茶叶渣',
        title: '厨余垃圾'
      }, {
        text: '咖啡渣',
        title: '厨余垃圾'
      }, {
        text: '糕饼',
        title: '厨余垃圾'
      }, {
        text: '糖果',
        title: '厨余垃圾'
      }, {
        text: '绿叶菜',
        title: '厨余垃圾'
      }, {
        text: '根茎蔬菜',
        title: '厨余垃圾'
      }, {
        text: '菌菇',
        title: '厨余垃圾'
      }, {
        text: '剩菜剩饭',
        title: '厨余垃圾'
      }, {
        text: '鱼骨',
        title: '厨余垃圾'
      }, {
        text: '鱼',
        title: '厨余垃圾'
      }, {
        text: '鱼鳞',
        title: '厨余垃圾'
      }, {
        text: '虾',
        title: '厨余垃圾'
      }, {
        text: '虾壳',
        title: '厨余垃圾'
      }, {
        text: '鱿鱼',
        title: '厨余垃圾'
      }, {
        text: '蛋',
        title: '厨余垃圾'
      }, {
        text: '动物内脏',
        title: '厨余垃圾'
      }, {
        text: '腊肉',
        title: '厨余垃圾'
      }, {
        text: '午餐肉',
        title: '厨余垃圾'
      }, {
        text: '蛋壳',
        title: '厨余垃圾'
      }, {
        text: '鸡',
        title: '厨余垃圾'
      }, {
        text: '鸭',
        title: '厨余垃圾'
      }, {
        text: '猪',
        title: '厨余垃圾'
      }, {
        text: '牛',
        title: '厨余垃圾'
      }, {
        text: '羊肉',
        title: '厨余垃圾'
      }, {
        text: '米',
        title: '厨余垃圾'
      }, {
        text: '米饭',
        title: '厨余垃圾'
      }, {
        text: '面',
        title: '厨余垃圾'
      }, {
        text: '面包',
        title: '厨余垃圾'
      }, {
        text: '豆类',
        title: '厨余垃圾'
      }, {
        text: '防尘罩',
        title: '其他垃圾'
      }, {
        text: '地毯',
        title: '其他垃圾'
      }, {
        text: '踏垫',
        title: '其他垃圾'
      }, {
        text: '钢丝球',
        title: '其他垃圾'
      }, {
        text: '碱性电池',
        title: '其他垃圾'
      }, {
        text: '碳性电池',
        title: '其他垃圾'
      }, {
        text: '普通塑料购物袋',
        title: '其他垃圾'
      }, {
        text: 'led灯',
        title: '其他垃圾'
      }, {
        text: '各类绳子',
        title: '其他垃圾'
      }, {
        text: '指南针',
        title: '其他垃圾'
      }, {
        text: '雨伞',
        title: '其他垃圾'
      }, {
        text: '雨衣',
        title: '其他垃圾'
      }, {
        text: '火柴',
        title: '其他垃圾'
      }, {
        text: '蜡烛',
        title: '其他垃圾'
      }, {
        text: '沙袋',
        title: '其他垃圾'
      }, {
        text: '拳击手套',
        title: '其他垃圾'
      }, {
        text: '帐篷',
        title: '其他垃圾'
      }, {
        text: '睡袋',
        title: '其他垃圾'
      }, {
        text: '头灯',
        title: '其他垃圾'
      }, {
        text: '球拍',
        title: '其他垃圾'
      }, {
        text: '瑜伽垫',
        title: '其他垃圾'
      }, {
        text: '非金属筷子',
        title: '其他垃圾'
      }, {
        text: '汤勺',
        title: '其他垃圾'
      }, {
        text: '碟子',
        title: '其他垃圾'
      }, {
        text: '烘培用具',
        title: '其他垃圾'
      }, {
        text: '各类球',
        title: '其他垃圾'
      }, {
        text: '毛绒玩具',
        title: '其他垃圾'
      }, {
        text: '枕头',
        title: '其他垃圾'
      }, {
        text: '干燥剂',
        title: '其他垃圾'
      }, {
        text: '镜子',
        title: '其他垃圾'
      }, {
        text: '瓶塞',
        title: '其他垃圾'
      }, {
        text: '袜子',
        title: '其他垃圾'
      }, {
        text: '鞋垫',
        title: '其他垃圾'
      }, {
        text: '帽子',
        title: '其他垃圾'
      }, {
        text: '手套',
        title: '其他垃圾'
      }, {
        text: '口罩',
        title: '其他垃圾'
      }, {
        text: '遮光布',
        title: '其他垃圾'
      }, {
        text: '桌布',
        title: '其他垃圾'
      }, {
        text: '餐具',
        title: '其他垃圾'
      }, {
        text: '杯子',
        title: '其他垃圾'
      }, {
        text: '棉被',
        title: '其他垃圾'
      }, {
        text: '内衣裤',
        title: '其他垃圾'
      }, {
        text: '各类刷子',
        title: '其他垃圾'
      }, {
        text: '面膜',
        title: '其他垃圾'
      }, {
        text: '化妆刷',
        title: '其他垃圾'
      }, {
        text: '化妆棉',
        title: '其他垃圾'
      }, {
        text: '海绵',
        title: '其他垃圾'
      }, {
        text: '搓澡巾',
        title: '其他垃圾'
      }, {
        text: '剃须刀等个护用品',
        title: '其他垃圾'
      }, {
        text: '浴帽',
        title: '其他垃圾'
      }, {
        text: '浴球',
        title: '其他垃圾'
      }, {
        text: '牙线',
        title: '其他垃圾'
      }, {
        text: '牙膏',
        title: '其他垃圾'
      }]
    };
  },
  onLoad: function onLoad(option) {
    console.log(option);
    this.title = option.title;
  },
  onShow: function onShow() {
    var _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(),
      top = _wx$getMenuButtonBoun.top,
      height = _wx$getMenuButtonBoun.height,
      width = _wx$getMenuButtonBoun.width;
    this.bgHeight = 46 + top + 'px';
  },
  methods: {
    // 点击card
    clickCard: function clickCard(item) {
      console.log(item);
      this.cardList.forEach(function (e, i) {
        e.active = false;
      });
      item.active = !item.active;
      this.arrList = item.arrList;
    },
    // 搜索
    onSearch: function onSearch(event) {
      this.value = event.detail;
      console.log(this.value, 66);
      if (this.value) {
        var arr = [];
        this.allList.map(function (item) {
          console.log(item.text.includes(event.detail), item.text, 996);
          if (item.text.includes(event.detail)) {
            arr.push(item);
          }
        });
        this.newList = arr;
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 340:
/*!***********************************************************************************************************************************!*\
  !*** /Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue?vue&type=style&index=0&id=569e122a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./refuse.vue?vue&type=style&index=0&id=569e122a&lang=scss&scoped=true& */ 341);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_refuse_vue_vue_type_style_index_0_id_569e122a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 341:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/agenthou/work/uni-ddzk-jingkou-wx/pagesA/refuse/refuse.vue?vue&type=style&index=0&id=569e122a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[334,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesA/refuse/refuse.js.map