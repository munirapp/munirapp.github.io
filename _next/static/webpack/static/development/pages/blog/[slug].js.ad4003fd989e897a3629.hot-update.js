webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_blog_BlogHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/blog/BlogHeader */ \"./components/blog/BlogHeader.js\");\n/* harmony import */ var _components_general_GeneralFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/general/GeneralFooter */ \"./components/general/GeneralFooter.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/munirap/Work/personal-blog/pages/blog/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar BlogDetail = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(BlogDetail, _Component);\n\n  var _super = _createSuper(BlogDetail);\n\n  function BlogDetail(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BlogDetail);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BlogDetail, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(\"test\");\n      console.log(highlight_js__WEBPACK_IMPORTED_MODULE_8__[\"highlightBlock\"]);\n      document.querySelectorAll(\"pre code\").forEach(function (block) {\n        Object(highlight_js__WEBPACK_IMPORTED_MODULE_8__[\"highlightBlock\"])(block);\n      });\n      document.querySelectorAll(\"input[type=checkbox]\").forEach(function (list) {\n        list.parentElement.style.listStyle = \"none\";\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          content = _this$props.content,\n          meta = _this$props.meta;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 7\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }\n      }, meta.title), __jsx(\"meta\", {\n        name: \"author\",\n        content: meta.author,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"description\",\n        content: meta.desc,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:url\",\n        content: \"https://munirapp.github.io/blog/\".concat(meta.date, \"-\").concat(meta.slug),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:type\",\n        content: \"article\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:title\",\n        content: meta.title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:description\",\n        content: meta.desc,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:image\",\n        content: meta.image,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }\n      })), __jsx(_components_blog_BlogHeader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        linkBack: \"/blog\",\n        textBack: \"Back to Blog\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"blog-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"blog-header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, meta.title), __jsx(\"div\", {\n        className: \"desc\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, \"Author: \", meta.author, \" | Date: \", meta.date), __jsx(\"img\", {\n        src: meta.image,\n        alt: meta.title,\n        className: \"animate__animated animate__zoomIn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: \"blog-body\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: content\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 15\n        }\n      })))), __jsx(_components_general_GeneralFooter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return BlogDetail;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetail);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIkJsb2dEZXRhaWwiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJoaWdobGlnaHRCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJibG9jayIsImxpc3QiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJsaXN0U3R5bGUiLCJjb250ZW50IiwibWV0YSIsInRpdGxlIiwiYXV0aG9yIiwiZGVzYyIsImRhdGUiLCJzbHVnIiwiaW1hZ2UiLCJfX2h0bWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTs7SUFFTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNYQSxLQURXO0FBRWxCOzs7O3dDQUVtQjtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsMkRBQVo7QUFFQUMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixFQUFzQ0MsT0FBdEMsQ0FBOEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZESiwyRUFBYyxDQUFDSSxLQUFELENBQWQ7QUFDRCxPQUZEO0FBSUFILGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLEVBQWtEQyxPQUFsRCxDQUEwRCxVQUFDRSxJQUFELEVBQVU7QUFDbEVBLFlBQUksQ0FBQ0MsYUFBTCxDQUFtQkMsS0FBbkIsQ0FBeUJDLFNBQXpCLEdBQXFDLE1BQXJDO0FBQ0QsT0FGRDtBQUdEOzs7NkJBRVE7QUFBQSx3QkFDbUIsS0FBS1gsS0FEeEI7QUFBQSxVQUNDWSxPQURELGVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxJQURWLGVBQ1VBLElBRFY7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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eyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgeyBoaWdobGlnaHRCbG9jayB9IGZyb20gXCJoaWdobGlnaHQuanNcIjtcblxuaW1wb3J0IEJsb2dIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmxvZy9CbG9nSGVhZGVyXCI7XG5pbXBvcnQgR2VuZXJhbEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL0dlbmVyYWxGb290ZXJcIjtcblxuY2xhc3MgQmxvZ0RldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgIGNvbnNvbGUubG9nKGhpZ2hsaWdodEJsb2NrKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwcmUgY29kZVwiKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxpc3QucGFyZW50RWxlbWVudC5zdHlsZS5saXN0U3R5bGUgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQsIG1ldGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnttZXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9e21ldGEuYXV0aG9yfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY30gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgICAgY29udGVudD17YGh0dHBzOi8vbXVuaXJhcHAuZ2l0aHViLmlvL2Jsb2cvJHttZXRhLmRhdGV9LSR7bWV0YS5zbHVnfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY30gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxCbG9nSGVhZGVyIGxpbmtCYWNrPVwiL2Jsb2dcIiB0ZXh0QmFjaz1cIkJhY2sgdG8gQmxvZ1wiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e21ldGEudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAgICAgICAgQXV0aG9yOiB7bWV0YS5hdXRob3J9IHwgRGF0ZToge21ldGEuZGF0ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e21ldGEuaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17bWV0YS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fem9vbUluXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxHZW5lcmFsRm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhcImRhdGEvYXJ0aWtlbFwiKTtcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBzbHVnOiBpdGVtLnJlcGxhY2UoXCIubWRcIiwgXCJcIiksXG4gICAgfSxcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xuICBjb25zdCByYXdNYXJrRG93biA9IGZzXG4gICAgLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oXCJkYXRhL2FydGlrZWxcIiwgYCR7c2x1Z30ubWRgKSlcbiAgICAudG9TdHJpbmcoKTtcbiAgY29uc3QgcGFyc2VNYXJrRG93biA9IG1hdHRlcihyYXdNYXJrRG93bik7XG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBtYXJrZWQocGFyc2VNYXJrRG93bi5jb250ZW50KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHNsdWcsIGNvbnRlbnQ6IGh0bWxTdHJpbmcsIG1ldGE6IHBhcnNlTWFya0Rvd24uZGF0YSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0RldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

})