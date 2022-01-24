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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"G-4GYN48T7E6\"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages\n\nconst pageview = url => {\n  window.gtag('config', GA_TRACKING_ID, {\n    page_path: url\n  });\n}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events\n\nconst event = ({\n  action,\n  category,\n  label,\n  value\n}) => {\n  window.gtag('event', action, {\n    event_category: category,\n    event_label: label,\n    value: value\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQUdDLGNBQXZCLEVBRVA7O0FBQ08sTUFBTUcsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDL0JDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JQLGNBQXRCLEVBQXNDO0FBQ3BDUSxJQUFBQSxTQUFTLEVBQUVIO0FBRHlCLEdBQXRDO0FBR0QsQ0FKTSxFQU1QOztBQUNPLE1BQU1JLEtBQUssR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQUY7QUFBVUMsRUFBQUEsUUFBVjtBQUFvQkMsRUFBQUEsS0FBcEI7QUFBMkJDLEVBQUFBO0FBQTNCLENBQUQsS0FBd0M7QUFDM0RQLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFBcUJHLE1BQXJCLEVBQTZCO0FBQzNCSSxJQUFBQSxjQUFjLEVBQUVILFFBRFc7QUFFM0JJLElBQUFBLFdBQVcsRUFBRUgsS0FGYztBQUczQkMsSUFBQUEsS0FBSyxFQUFFQTtBQUhvQixHQUE3QjtBQUtELENBTk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlX3JlYWN0X25leHQvLi9saWIvZ3RhZy5qcz8zMzRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX0lEXG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgcGFnZV9wYXRoOiB1cmwsXG4gIH0pXG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHtcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgfSlcbn0iXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0FfSUQiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/custom.css */ \"./styles/custom.css\");\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/imaccarlos/Documents/GitHub/cetificado-digital-cdl/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      strategy: \"afterInteractive\",\n      src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.GA_TRACKING_ID}`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      id: \"gtag-init\",\n      strategy: \"afterInteractive\",\n      dangerouslySetInnerHTML: {\n        __html: `\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.GA_TRACKING_ID}', {\n                page_path: window.location.pathname,\n              });\n            `\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: \"https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTRyxLQUFULENBQWU7QUFBQ0MsRUFBQUEsU0FBRDtBQUFZQyxFQUFBQTtBQUFaLENBQWYsRUFBc0M7QUFDakQsc0JBQ0E7QUFBQSw0QkFHRSw4REFBQyxvREFBRDtBQUNJLGNBQVEsRUFBQyxrQkFEYjtBQUVJLFNBQUcsRUFBRywrQ0FBOENMLHFEQUFvQjtBQUY1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFPSSw4REFBQyxvREFBRDtBQUNFLFFBQUUsRUFBQyxXQURMO0FBRUUsY0FBUSxFQUFDLGtCQUZYO0FBR0UsNkJBQXVCLEVBQUU7QUFDdkJPLFFBQUFBLE1BQU0sRUFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0NQLHFEQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFSbUM7QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBcUJJLDhEQUFDLG9EQUFEO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSixlQXVCRSw4REFBQyxTQUFELG9CQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFEQTtBQTRCSCIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVfcmVhY3RfbmV4dC8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9jdXN0b20uY3NzJ1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZydcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pe1xuICAgIHJldHVybiggXG4gICAgPD5cblxuICAgICAgey8qIEdsb2JhbCBTaXRlIFRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzICovfVxuICAgICAgPFNjcmlwdFxuICAgICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2d0YWcuR0FfVFJBQ0tJTkdfSUR9YH1cbiAgICAgIC8+XG4gICAgICAgIDxTY3JpcHRcbiAgICAgICAgICBpZD1cImd0YWctaW5pdFwiXG4gICAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke2d0YWcuR0FfVFJBQ0tJTkdfSUR9Jywge1xuICAgICAgICAgICAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9pb25pY29uc0A0LjUuMTAtMC9kaXN0L2lvbmljb25zLmpzXCIgLz5cbiAgICAgICAgXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgIFxuICAgIDwvPlxuICAgIClcbn0gXG4iXSwibmFtZXMiOlsiZ3RhZyIsIlNjcmlwdCIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkdBX1RSQUNLSU5HX0lEIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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