"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_imaccarlos_Documents_GitHub_certificado_digital_cdl_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/custom.css */ \"./styles/custom.css\");\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_gtm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/gtm */ \"./lib/gtm.js\");\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/fpixel */ \"./lib/fpixel.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/imaccarlos/Documents/GitHub/certificado-digital-cdl/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_imaccarlos_Documents_GitHub_certificado_digital_cdl_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    router.events.on('routeChangeComplete', _lib_gtm__WEBPACK_IMPORTED_MODULE_5__.pageview);\n    return function () {\n      router.events.off('routeChangeComplete', _lib_gtm__WEBPACK_IMPORTED_MODULE_5__.pageview);\n    };\n  }, [router.events]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // This pageview only triggers the first time (it's important for Pixel to have real information)\n    _lib_fpixel__WEBPACK_IMPORTED_MODULE_6__.pageview();\n\n    var handleRouteChange = function handleRouteChange() {\n      _lib_fpixel__WEBPACK_IMPORTED_MODULE_6__.pageview();\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n    return function () {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [router.events]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n      strategy: \"afterInteractive\",\n      dangerouslySetInnerHTML: {\n        __html: \"\\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\\n            })(window,document,'script','dataLayer', 'GTM-NW29PBT');\\n          \"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n      strategy: \"afterInteractive\",\n      dangerouslySetInnerHTML: {\n        __html: \"\\n            !function(f,b,e,v,n,t,s)\\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\\n            n.queue=[];t=b.createElement(e);t.async=!0;\\n            t.src=v;s=b.getElementsByTagName(e)[0];\\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\\n            'https://connect.facebook.net/en_US/fbevents.js');\\n            fbq('init', '\".concat(_lib_fpixel__WEBPACK_IMPORTED_MODULE_6__.FB_PIXEL_ID, \"');\\n            fbq('track', 'PageView');\\n          \")\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MyApp, \"TvQOAa6MuxS5wkANqefpxaThEc4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNNLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7QUFDQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RTLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q1AsOENBQXhDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hLLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q1IsOENBQXpDO0FBQ0QsS0FGRDtBQUdELEdBTFEsRUFLTixDQUFDSyxNQUFNLENBQUNDLE1BQVIsQ0FMTSxDQUFUO0FBT0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FLLElBQUFBLGlEQUFBOztBQUVBLFFBQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QlIsTUFBQUEsaURBQUE7QUFDRCxLQUZEOztBQUlBSSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NFLGlCQUF4QztBQUNBLFdBQU8sWUFBTTtBQUNYSixNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNDLGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQVpRLEVBWU4sQ0FBQ0osTUFBTSxDQUFDQyxNQUFSLENBWk0sQ0FBVDtBQWNBLHNCQUNFO0FBQUEsNEJBRUUsOERBQUMsb0RBQUQ7QUFDRSxjQUFRLEVBQUMsa0JBRFg7QUFFRSw2QkFBdUIsRUFBRTtBQUN2QkksUUFBQUEsTUFBTTtBQURpQjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFlRSw4REFBQyxvREFBRDtBQUNFLGNBQVEsRUFBQyxrQkFEWDtBQUVFLDZCQUF1QixFQUFFO0FBQ3ZCQSxRQUFBQSxNQUFNLGdoQkFTV1Qsb0RBVFg7QUFEaUI7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBZ0NFLDhEQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBLGtCQURGO0FBb0NEOztHQTNEUUY7VUFDUUo7OztLQURSSTtBQTZEVCwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR1RNX0lELCBwYWdldmlldyB9IGZyb20gJy4uL2xpYi9ndG0nXG5pbXBvcnQgKiBhcyBmYnEgZnJvbSAnLi4vbGliL2ZwaXhlbCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHBhZ2V2aWV3KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHBhZ2V2aWV3KVxuICAgIH1cbiAgfSwgW3JvdXRlci5ldmVudHNdKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUaGlzIHBhZ2V2aWV3IG9ubHkgdHJpZ2dlcnMgdGhlIGZpcnN0IHRpbWUgKGl0J3MgaW1wb3J0YW50IGZvciBQaXhlbCB0byBoYXZlIHJlYWwgaW5mb3JtYXRpb24pXG4gICAgZmJxLnBhZ2V2aWV3KClcblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgZmJxLnBhZ2V2aWV3KClcbiAgICB9XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgfVxuICB9LCBbcm91dGVyLmV2ZW50c10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEdvb2dsZSBUYWcgTWFuYWdlciAtIEdsb2JhbCBiYXNlIGNvZGUgKi99XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAoZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6XG4gICAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG4gICAgICAgICAgICBqPWQuY3JlYXRlRWxlbWVudChzKSxkbD1sIT0nZGF0YUxheWVyJz8nJmw9JytsOicnO2ouYXN5bmM9dHJ1ZTtqLnNyYz1cbiAgICAgICAgICAgICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTtcbiAgICAgICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywgJ0dUTS1OVzI5UEJUJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7LyogR2xvYmFsIFNpdGUgQ29kZSBQaXhlbCAtIEZhY2Vib29rIFBpeGVsICovfVxuICAgICAgPFNjcmlwdFxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpXG4gICAgICAgICAgICB7aWYoZi5mYnEpcmV0dXJuO249Zi5mYnE9ZnVuY3Rpb24oKXtuLmNhbGxNZXRob2Q/XG4gICAgICAgICAgICBuLmNhbGxNZXRob2QuYXBwbHkobixhcmd1bWVudHMpOm4ucXVldWUucHVzaChhcmd1bWVudHMpfTtcbiAgICAgICAgICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnO1xuICAgICAgICAgICAgbi5xdWV1ZT1bXTt0PWIuY3JlYXRlRWxlbWVudChlKTt0LmFzeW5jPSEwO1xuICAgICAgICAgICAgdC5zcmM9djtzPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSlbMF07XG4gICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpO1xuICAgICAgICAgICAgZmJxKCdpbml0JywgJyR7ZmJxLkZCX1BJWEVMX0lEfScpO1xuICAgICAgICAgICAgZmJxKCd0cmFjaycsICdQYWdlVmlldycpO1xuICAgICAgICAgIGAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2NyaXB0IiwidXNlUm91dGVyIiwiR1RNX0lEIiwicGFnZXZpZXciLCJmYnEiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImV2ZW50cyIsIm9uIiwib2ZmIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJfX2h0bWwiLCJGQl9QSVhFTF9JRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});