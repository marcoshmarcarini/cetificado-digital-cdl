/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages\n\nconst pageview = url => {\n  window.gtag('config', GA_TRACKING_ID, {\n    page_path: url\n  });\n}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events\n\nconst event = ({\n  action,\n  category,\n  label,\n  value\n}) => {\n  window.gtag('event', action, {\n    event_category: category,\n    event_label: label,\n    value: value\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBbkMsRUFFUDs7QUFDTyxNQUFNQyxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUMvQkMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQlAsY0FBdEIsRUFBc0M7QUFDcENRLElBQUFBLFNBQVMsRUFBRUg7QUFEeUIsR0FBdEM7QUFHRCxDQUpNLEVBTVA7O0FBQ08sTUFBTUksS0FBSyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsTUFBRjtBQUFVQyxFQUFBQSxRQUFWO0FBQW9CQyxFQUFBQSxLQUFwQjtBQUEyQkMsRUFBQUE7QUFBM0IsQ0FBRCxLQUF3QztBQUMzRFAsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixFQUFxQkcsTUFBckIsRUFBNkI7QUFDM0JJLElBQUFBLGNBQWMsRUFBRUgsUUFEVztBQUUzQkksSUFBQUEsV0FBVyxFQUFFSCxLQUZjO0FBRzNCQyxJQUFBQSxLQUFLLEVBQUVBO0FBSG9CLEdBQTdCO0FBS0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVfcmVhY3RfbmV4dC8uL2xpYi9ndGFnLmpzPzMzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfSURcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9wYWdlc1xuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICB3aW5kb3cuZ3RhZygnY29uZmlnJywgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSlcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KVxufSJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/custom.css */ \"./styles/custom.css\");\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/imaccarlos/Documents/GitHub/cetificado-digital-cdl/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      strategy: \"afterInteractive\",\n      src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.GA_TRACKING_ID}`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      id: \"gtag-init\",\n      strategy: \"afterInteractive\",\n      dangerouslySetInnerHTML: {\n        __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.GA_TRACKING_ID}', {\n              page_path: window.location.pathname,\n            });\n          `\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNFLEtBQVQsQ0FBZTtBQUFDQyxFQUFBQSxTQUFEO0FBQVlDLEVBQUFBO0FBQVosQ0FBZixFQUFzQztBQUNqRCxzQkFDQTtBQUFBLDRCQUVBLDhEQUFDLG9EQUFEO0FBQ0ksY0FBUSxFQUFDLGtCQURiO0FBRUksU0FBRyxFQUFHLCtDQUE4Q0oscURBQW9CO0FBRjVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQU1FLDhEQUFDLG9EQUFEO0FBQ0UsUUFBRSxFQUFDLFdBREw7QUFFRSxjQUFRLEVBQUMsa0JBRlg7QUFHRSw2QkFBdUIsRUFBRTtBQUN2Qk0sUUFBQUEsTUFBTSxFQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qk4scURBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQVJpQztBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFvQkEsOERBQUMsU0FBRCxvQkFBZUksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJBO0FBQUEsa0JBREE7QUF5QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlX3JlYWN0X25leHQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLmNzcydcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSAnLi4vbGliL2d0YWcnXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KXtcbiAgICByZXR1cm4oIFxuICAgIDw+XG4gICAgey8qIEdsb2JhbCBTaXRlIFRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzICovfVxuICAgIDxTY3JpcHRcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2d0YWcuR0FfVFJBQ0tJTkdfSUR9YH1cbiAgICAvPlxuICAgICAgPFNjcmlwdFxuICAgICAgICBpZD1cImd0YWctaW5pdFwiXG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtndGFnLkdBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICBcbiAgICA8Lz5cbiAgICApXG59IFxuIl0sIm5hbWVzIjpbImd0YWciLCJTY3JpcHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkdBX1RSQUNLSU5HX0lEIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();