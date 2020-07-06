webpackHotUpdate(4,{

/***/ "./components/index/IndexCoffeeContent.js":
/*!************************************************!*\
  !*** ./components/index/IndexCoffeeContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexCoffeeContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_iobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/iobs */ \"./lib/iobs.js\");\n\n\nvar _jsxFileName = \"/Users/munirap/Work/personal-blog/components/index/IndexCoffeeContent.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction IndexCoffeeContent(_ref) {\n  _s();\n\n  var _this = this;\n\n  var classExtend = _ref.classExtend;\n  var fallbackImg = \"/image/blur.jpg\";\n  var listChannel = [{\n    link: \"https://www.patreon.com/munirapp\",\n    name: \"patreon\",\n    image: \"https://res.cloudinary.com/softwaremakassar/image/upload/v1594008989/munirapp.github.io/channel/patreon_njelf2.webp\"\n  }, {\n    link: \"https://karyakarsa.com/munirapp\",\n    name: \"karyakarsa\",\n    image: \"https://res.cloudinary.com/softwaremakassar/image/upload/v1594008989/munirapp.github.io/channel/karyakarsa_eakslf.webp\"\n  }, {\n    link: \"https://www.buymeacoffee.com/munirapp\",\n    name: \"buymeacoffee\"\n  }];\n\n  var _iobs = Object(_lib_iobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    threshold: 0.25,\n    root: null\n  }),\n      _iobs2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iobs, 3),\n      observer = _iobs2[0],\n      setElements = _iobs2[1],\n      entries = _iobs2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var channel = Array.from(document.querySelectorAll(\".channel-lazy\"));\n    setElements(channel);\n  }, [setElements]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        var lazyChannel = entry.target; // Lazyload Image Portofolio\n\n        var image = lazyChannel.querySelector(\"img\");\n        image.src = image.dataset.src;\n        lazyChannel.classList.remove(\"channel-lazy\");\n        observer.unobserve(lazyChannel);\n      }\n    });\n  }, [entries, observer]);\n  return __jsx(\"div\", {\n    className: \"content-wrapper pb-5 \".concat(classExtend),\n    id: \"coffee\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"content-bg icon-contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"container pt-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content-body\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"Coffee Shop\"), __jsx(\"div\", {\n    className: \"desc mt-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"Sometimes Programming, developing, and debugging is a tiring process. Like coffee for programmers, a cup of appreciation can make me even more excited to write code better. If you are helped by what I have done, you can give me a cup of appreciation on the following channel\"), __jsx(\"div\", {\n    className: \"div-flex mt-5 lg:mt-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, listChannel.map(function (item, index) {\n    return __jsx(\"a\", {\n      href: item.link,\n      target: \"__blank\",\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: \"card channel-lazy\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 19\n      }\n    }, __jsx(\"div\", {\n      className: \"card-content-flex\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }\n    }, __jsx(\"img\", {\n      className: \"img-btn\",\n      src: fallbackImg,\n      \"data-src\": \"/image/channel/\".concat(item.name, \".png\"),\n      alt: item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 23\n      }\n    }))));\n  })), __jsx(\"div\", {\n    className: \"div-flex mt-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"text-2xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Need Contact me?\")), __jsx(\"div\", {\n    className: \"div-flex mt-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"card\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"card-content-flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: \"mailto:softwaremakassar@gmail.com\",\n    target: \"__blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 19\n    }\n  }, \"\\uD83D\\uDCE5 softwaremakassar@gmail.com\"))))))));\n}\n\n_s(IndexCoffeeContent, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n\n_c = IndexCoffeeContent;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexCoffeeContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4L0luZGV4Q29mZmVlQ29udGVudC5qcz80ZWU5Il0sIm5hbWVzIjpbIkluZGV4Q29mZmVlQ29udGVudCIsImNsYXNzRXh0ZW5kIiwiZmFsbGJhY2tJbWciLCJsaXN0Q2hhbm5lbCIsImxpbmsiLCJuYW1lIiwiaW1hZ2UiLCJpb2JzIiwidGhyZXNob2xkIiwicm9vdCIsIm9ic2VydmVyIiwic2V0RWxlbWVudHMiLCJlbnRyaWVzIiwidXNlRWZmZWN0IiwiY2hhbm5lbCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibGF6eUNoYW5uZWwiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwiZGF0YXNldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVub2JzZXJ2ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxrQkFBVCxPQUE2QztBQUFBOztBQUFBOztBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUMxRCxNQUFNQyxXQUFXLEdBQUcsaUJBQXBCO0FBRUEsTUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLFFBQUksRUFBRSxrQ0FEUjtBQUVFQyxRQUFJLEVBQUUsU0FGUjtBQUdFQyxTQUFLLEVBQ0g7QUFKSixHQURrQixFQU9sQjtBQUNFRixRQUFJLEVBQUUsaUNBRFI7QUFFRUMsUUFBSSxFQUFFLFlBRlI7QUFHRUMsU0FBSyxFQUNIO0FBSkosR0FQa0IsRUFhbEI7QUFBRUYsUUFBSSxFQUFFLHVDQUFSO0FBQWlEQyxRQUFJLEVBQUU7QUFBdkQsR0Fia0IsQ0FBcEI7O0FBSDBELGNBbUJqQkUseURBQUksQ0FBQztBQUM1Q0MsYUFBUyxFQUFFLElBRGlDO0FBRTVDQyxRQUFJLEVBQUU7QUFGc0MsR0FBRCxDQW5CYTtBQUFB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QUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsbUNBQVI7QUFBNEMsVUFBTSxFQUFDLFNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURGLENBREYsQ0FERixDQURGLENBaENGLENBREYsQ0FGRixDQURGO0FBaUREOztHQTdGdUJMLGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5kZXgvSW5kZXhDb2ZmZWVDb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvYnMgZnJvbSBcIi4uLy4uL2xpYi9pb2JzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4Q29mZmVlQ29udGVudCh7IGNsYXNzRXh0ZW5kIH0pIHtcbiAgY29uc3QgZmFsbGJhY2tJbWcgPSBcIi9pbWFnZS9ibHVyLmpwZ1wiO1xuXG4gIGNvbnN0IGxpc3RDaGFubmVsID0gW1xuICAgIHtcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucGF0cmVvbi5jb20vbXVuaXJhcHBcIixcbiAgICAgIG5hbWU6IFwicGF0cmVvblwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc29mdHdhcmVtYWthc3Nhci9pbWFnZS91cGxvYWQvdjE1OTQwMDg5ODkvbXVuaXJhcHAuZ2l0aHViLmlvL2NoYW5uZWwvcGF0cmVvbl9uamVsZjIud2VicFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogXCJodHRwczovL2thcnlha2Fyc2EuY29tL211bmlyYXBwXCIsXG4gICAgICBuYW1lOiBcImthcnlha2Fyc2FcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3NvZnR3YXJlbWFrYXNzYXIvaW1hZ2UvdXBsb2FkL3YxNTk0MDA4OTg5L211bmlyYXBwLmdpdGh1Yi5pby9jaGFubmVsL2thcnlha2Fyc2FfZWFrc2xmLndlYnBcIixcbiAgICB9LFxuICAgIHsgbGluazogXCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL211bmlyYXBwXCIsIG5hbWU6IFwiYnV5bWVhY29mZmVlXCIgfSxcbiAgXTtcblxuICBjb25zdCBbb2JzZXJ2ZXIsIHNldEVsZW1lbnRzLCBlbnRyaWVzXSA9IGlvYnMoe1xuICAgIHRocmVzaG9sZDogMC4yNSxcbiAgICByb290OiBudWxsLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjaGFubmVsID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYW5uZWwtbGF6eVwiKSk7XG4gICAgc2V0RWxlbWVudHMoY2hhbm5lbCk7XG4gIH0sIFtzZXRFbGVtZW50c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIGxldCBsYXp5Q2hhbm5lbCA9IGVudHJ5LnRhcmdldDtcblxuICAgICAgICAvLyBMYXp5bG9hZCBJbWFnZSBQb3J0b2ZvbGlvXG4gICAgICAgIGxldCBpbWFnZSA9IGxhenlDaGFubmVsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlLmRhdGFzZXQuc3JjO1xuXG4gICAgICAgIGxhenlDaGFubmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGFubmVsLWxhenlcIik7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShsYXp5Q2hhbm5lbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtlbnRyaWVzLCBvYnNlcnZlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bjb250ZW50LXdyYXBwZXIgcGItNSAke2NsYXNzRXh0ZW5kfWB9IGlkPVwiY29mZmVlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmcgaWNvbi1jb250YWN0XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZmZlZSBTaG9wPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjIG10LTNcIj5cbiAgICAgICAgICAgIFNvbWV0aW1lcyBQcm9ncmFtbWluZywgZGV2ZWxvcGluZywgYW5kIGRlYnVnZ2luZyBpcyBhIHRpcmluZ1xuICAgICAgICAgICAgcHJvY2Vzcy4gTGlrZSBjb2ZmZWUgZm9yIHByb2dyYW1tZXJzLCBhIGN1cCBvZiBhcHByZWNpYXRpb24gY2FuIG1ha2VcbiAgICAgICAgICAgIG1lIGV2ZW4gbW9yZSBleGNpdGVkIHRvIHdyaXRlIGNvZGUgYmV0dGVyLiBJZiB5b3UgYXJlIGhlbHBlZCBieSB3aGF0XG4gICAgICAgICAgICBJIGhhdmUgZG9uZSwgeW91IGNhbiBnaXZlIG1lIGEgY3VwIG9mIGFwcHJlY2lhdGlvbiBvbiB0aGUgZm9sbG93aW5nXG4gICAgICAgICAgICBjaGFubmVsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtZmxleCBtdC01IGxnOm10LTEyXCI+XG4gICAgICAgICAgICB7bGlzdENoYW5uZWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PVwiX19ibGFua1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNoYW5uZWwtbGF6eVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZhbGxiYWNrSW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9e2AvaW1hZ2UvY2hhbm5lbC8ke2l0ZW0ubmFtZX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1mbGV4IG10LTVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+TmVlZCBDb250YWN0IG1lPzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWZsZXggbXQtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50LWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnNvZnR3YXJlbWFrYXNzYXJAZ21haWwuY29tXCIgdGFyZ2V0PVwiX19ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+8J+TpSBzb2Z0d2FyZW1ha2Fzc2FyQGdtYWlsLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index/IndexCoffeeContent.js\n");

/***/ })

})