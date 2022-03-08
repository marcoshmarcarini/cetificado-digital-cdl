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

/***/ "./lib/fpixel.js":
/*!***********************!*\
  !*** ./lib/fpixel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FB_PIXEL_ID\": () => (/* binding */ FB_PIXEL_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst FB_PIXEL_ID = '491643972326849';\nconst pageview = () => {\n  window.fbq('track', 'PageView');\n}; // https://developers.facebook.com/docs/facebook-pixel/advanced/\n\nconst event = (name, options = {}) => {\n  window.fbq('track', name, options);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZnBpeGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFdBQVcsR0FBRyxpQkFBcEI7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUM1QkMsRUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQixVQUFwQjtBQUNELENBRk0sRUFJUDs7QUFDTyxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxPQUFPLEdBQUcsRUFBakIsS0FBd0I7QUFDM0NKLEVBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsRUFBb0JFLElBQXBCLEVBQTBCQyxPQUExQjtBQUNELENBRk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlX3JlYWN0X25leHQvLi9saWIvZnBpeGVsLmpzP2RhODkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZCX1BJWEVMX0lEID0gJzQ5MTY0Mzk3MjMyNjg0OSdcblxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKCkgPT4ge1xuICB3aW5kb3cuZmJxKCd0cmFjaycsICdQYWdlVmlldycpXG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1waXhlbC9hZHZhbmNlZC9cbmV4cG9ydCBjb25zdCBldmVudCA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcbiAgd2luZG93LmZicSgndHJhY2snLCBuYW1lLCBvcHRpb25zKVxufSJdLCJuYW1lcyI6WyJGQl9QSVhFTF9JRCIsInBhZ2V2aWV3Iiwid2luZG93IiwiZmJxIiwiZXZlbnQiLCJuYW1lIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/fpixel.js\n");

/***/ }),

/***/ "./lib/gtm.js":
/*!********************!*\
  !*** ./lib/gtm.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GTM_ID\": () => (/* binding */ GTM_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\nconst GTM_ID = 'GTM-NW29PBT';\nconst pageview = url => {\n  window.dataLayer.push({\n    event: 'pageview',\n    page: url\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsTUFBTSxHQUFHLGFBQWY7QUFFQSxNQUFNQyxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUMvQkMsRUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxJQUFqQixDQUFzQjtBQUNwQkMsSUFBQUEsS0FBSyxFQUFFLFVBRGE7QUFFcEJDLElBQUFBLElBQUksRUFBRUw7QUFGYyxHQUF0QjtBQUlELENBTE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlX3JlYWN0X25leHQvLi9saWIvZ3RtLmpzP2RiMDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdUTV9JRCA9ICdHVE0tTlcyOVBCVCdcblxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICAgIGV2ZW50OiAncGFnZXZpZXcnLFxuICAgIHBhZ2U6IHVybCxcbiAgfSlcbn1cblxuXG4iXSwibmFtZXMiOlsiR1RNX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJkYXRhTGF5ZXIiLCJwdXNoIiwiZXZlbnQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/gtm.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/custom.css */ \"./styles/custom.css\");\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_gtm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gtm */ \"./lib/gtm.js\");\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fpixel */ \"./lib/fpixel.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/imaccarlos/Documents/GitHub/certificado-digital-cdl/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    router.events.on('routeChangeComplete', _lib_gtm__WEBPACK_IMPORTED_MODULE_4__.pageview);\n    return () => {\n      router.events.off('routeChangeComplete', _lib_gtm__WEBPACK_IMPORTED_MODULE_4__.pageview);\n    };\n  }, [router.events]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    // This pageview only triggers the first time (it's important for Pixel to have real information)\n    _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.pageview();\n\n    const handleRouteChange = () => {\n      _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.pageview();\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [router.events]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: `https://www.googletagmanager.com/gtm.js?id=${_lib_gtm__WEBPACK_IMPORTED_MODULE_4__.GTM_ID}`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      strategy: \"afterInteractive\",\n      dangerouslySetInnerHTML: {\n        __html: `\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '${_lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.FB_PIXEL_ID}');\n            fbq('track', 'PageView');\n          `\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNNLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQXhCO0FBQ0FGLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkUyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NQLDhDQUF4QztBQUNBLFdBQU8sTUFBTTtBQUNYSyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNSLDhDQUF6QztBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ0ssTUFBTSxDQUFDQyxNQUFSLENBTE0sQ0FBVDtBQU9BVixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDtBQUNBSyxJQUFBQSxpREFBQTs7QUFFQSxVQUFNUSxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCUixNQUFBQSxpREFBQTtBQUNELEtBRkQ7O0FBSUFJLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0UsaUJBQXhDO0FBQ0EsV0FBTyxNQUFNO0FBQ1hKLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q0MsaUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBWlEsRUFZTixDQUFDSixNQUFNLENBQUNDLE1BQVIsQ0FaTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDQSw4REFBQyxvREFBRDtBQUFRLFNBQUcsRUFBRyw4Q0FBNkNQLDRDQUFPO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQW9CRSw4REFBQyxvREFBRDtBQUNFLGNBQVEsRUFBQyxrQkFEWDtBQUVFLDZCQUF1QixFQUFFO0FBQ3ZCVyxRQUFBQSxNQUFNLEVBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQlQsb0RBQWdCO0FBQzNDO0FBQ0E7QUFaaUM7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQXFDRSw4REFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0Y7QUFBQSxrQkFERjtBQXlDRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVfcmVhY3RfbmV4dC8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9jdXN0b20uY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHVE1fSUQsIHBhZ2V2aWV3IH0gZnJvbSAnLi4vbGliL2d0bSdcbmltcG9ydCAqIGFzIGZicSBmcm9tICcuLi9saWIvZnBpeGVsJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgcGFnZXZpZXcpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgcGFnZXZpZXcpXG4gICAgfVxuICB9LCBbcm91dGVyLmV2ZW50c10pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRoaXMgcGFnZXZpZXcgb25seSB0cmlnZ2VycyB0aGUgZmlyc3QgdGltZSAoaXQncyBpbXBvcnRhbnQgZm9yIFBpeGVsIHRvIGhhdmUgcmVhbCBpbmZvcm1hdGlvbilcbiAgICBmYnEucGFnZXZpZXcoKVxuXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBmYnEucGFnZXZpZXcoKVxuICAgIH1cblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNjcmlwdCBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JHtHVE1fSUR9YH0gLz5cbiAgICAgIHsvKiBcbiAgICAgIFxuICAgICAgR29vZ2xlIFRhZyBNYW5hZ2VyIC0gR2xvYmFsIGJhc2UgY29kZSBcblxuICAgICAgPFNjcmlwdFxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgKGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxuICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxuICAgICAgICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XG4gICAgICAgICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XG4gICAgICAgICAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsICcke0dUTV9JRH0nKTtcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgICovfVxuICAgICAgey8qIEdsb2JhbCBTaXRlIENvZGUgUGl4ZWwgLSBGYWNlYm9vayBQaXhlbCAqL31cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICFmdW5jdGlvbihmLGIsZSx2LG4sdCxzKVxuICAgICAgICAgICAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kP1xuICAgICAgICAgICAgbi5jYWxsTWV0aG9kLmFwcGx5KG4sYXJndW1lbnRzKTpuLnF1ZXVlLnB1c2goYXJndW1lbnRzKX07XG4gICAgICAgICAgICBpZighZi5fZmJxKWYuX2ZicT1uO24ucHVzaD1uO24ubG9hZGVkPSEwO24udmVyc2lvbj0nMi4wJztcbiAgICAgICAgICAgIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDtcbiAgICAgICAgICAgIHQuc3JjPXY7cz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpWzBdO1xuICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHMpfSh3aW5kb3csIGRvY3VtZW50LCdzY3JpcHQnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTtcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICcke2ZicS5GQl9QSVhFTF9JRH0nKTtcbiAgICAgICAgICAgIGZicSgndHJhY2snLCAnUGFnZVZpZXcnKTtcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNjcmlwdCIsInVzZVJvdXRlciIsIkdUTV9JRCIsInBhZ2V2aWV3IiwiZmJxIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJldmVudHMiLCJvbiIsIm9mZiIsImhhbmRsZVJvdXRlQ2hhbmdlIiwiX19odG1sIiwiRkJfUElYRUxfSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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