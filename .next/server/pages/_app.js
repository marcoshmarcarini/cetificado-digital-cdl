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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/custom.css */ \"./styles/custom.css\");\n/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_vantagens_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/vantagens.css */ \"./styles/vantagens.css\");\n/* harmony import */ var _styles_vantagens_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_vantagens_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_duvidas_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/duvidas.css */ \"./styles/duvidas.css\");\n/* harmony import */ var _styles_duvidas_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_duvidas_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_cta_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/cta.css */ \"./styles/cta.css\");\n/* harmony import */ var _styles_cta_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_cta_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_gtm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/gtm */ \"./lib/gtm.js\");\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fpixel */ \"./lib/fpixel.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"/Users/imaccarlos/Documents/GitHub/certificado-digital-cdl/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    router.events.on('routeChangeComplete', _lib_gtm__WEBPACK_IMPORTED_MODULE_8__.pageview);\n    return () => {\n      router.events.off('routeChangeComplete', _lib_gtm__WEBPACK_IMPORTED_MODULE_8__.pageview);\n    };\n  }, [router.events]);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    // This pageview only triggers the first time (it's important for Pixel to have real information)\n    _lib_fpixel__WEBPACK_IMPORTED_MODULE_9__.pageview();\n\n    const handleRouteChange = () => {\n      _lib_fpixel__WEBPACK_IMPORTED_MODULE_9__.pageview();\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [router.events]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {\n      src: `\"https://www.googletagmanager.com/gtm.js?id=${_lib_gtm__WEBPACK_IMPORTED_MODULE_8__.GTM_ID}\"`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {\n      strategy: \"afterInteractive\",\n      dangerouslySetInnerHTML: {\n        __html: `\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '${_lib_fpixel__WEBPACK_IMPORTED_MODULE_9__.FB_PIXEL_ID}');\n            fbq('track', 'PageView');\n          `\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTTSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUF4QjtBQUNBRixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZFMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDUCw4Q0FBeEM7QUFDQSxXQUFPLE1BQU07QUFDWEssTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDUiw4Q0FBekM7QUFDRCxLQUZEO0FBR0QsR0FMUSxFQUtOLENBQUNLLE1BQU0sQ0FBQ0MsTUFBUixDQUxNLENBQVQ7QUFPQVYsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQUssSUFBQUEsaURBQUE7O0FBRUEsVUFBTVEsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QlIsTUFBQUEsaURBQUE7QUFDRCxLQUZEOztBQUlBSSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NFLGlCQUF4QztBQUNBLFdBQU8sTUFBTTtBQUNYSixNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNDLGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQVpRLEVBWU4sQ0FBQ0osTUFBTSxDQUFDQyxNQUFSLENBWk0sQ0FBVDtBQWNBLHNCQUNFO0FBQUEsNEJBQ0EsK0RBQUMsb0RBQUQ7QUFBUSxTQUFHLEVBQUcsK0NBQThDUCw0Q0FBTztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFvQkUsK0RBQUMsb0RBQUQ7QUFDRSxjQUFRLEVBQUMsa0JBRFg7QUFFRSw2QkFBdUIsRUFBRTtBQUN2QlcsUUFBQUEsTUFBTSxFQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkJULG9EQUFnQjtBQUMzQztBQUNBO0FBWmlDO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsZUFxQ0UsK0RBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNGO0FBQUEsa0JBREY7QUF5Q0Q7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlX3JlYWN0X25leHQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2N1c3RvbS5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy92YW50YWdlbnMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZHV2aWRhcy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9jdGEuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHVE1fSUQsIHBhZ2V2aWV3IH0gZnJvbSAnLi4vbGliL2d0bSdcbmltcG9ydCAqIGFzIGZicSBmcm9tICcuLi9saWIvZnBpeGVsJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgcGFnZXZpZXcpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgcGFnZXZpZXcpXG4gICAgfVxuICB9LCBbcm91dGVyLmV2ZW50c10pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRoaXMgcGFnZXZpZXcgb25seSB0cmlnZ2VycyB0aGUgZmlyc3QgdGltZSAoaXQncyBpbXBvcnRhbnQgZm9yIFBpeGVsIHRvIGhhdmUgcmVhbCBpbmZvcm1hdGlvbilcbiAgICBmYnEucGFnZXZpZXcoKVxuXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBmYnEucGFnZXZpZXcoKVxuICAgIH1cblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNjcmlwdCBzcmM9e2BcImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0ke0dUTV9JRH1cImB9IC8+XG4gICAgICB7LyogXG4gICAgICBcbiAgICAgIEdvb2dsZSBUYWcgTWFuYWdlciAtIEdsb2JhbCBiYXNlIGNvZGUgXG5cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIChmdW5jdGlvbih3LGQscyxsLGkpe3dbbF09d1tsXXx8W107d1tsXS5wdXNoKHsnZ3RtLnN0YXJ0JzpcbiAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpLGV2ZW50OidndG0uanMnfSk7dmFyIGY9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcbiAgICAgICAgICAgIGo9ZC5jcmVhdGVFbGVtZW50KHMpLGRsPWwhPSdkYXRhTGF5ZXInPycmbD0nK2w6Jyc7ai5hc3luYz10cnVlO2ouc3JjPVxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nK2krZGw7Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqLGYpO1xuICAgICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdkYXRhTGF5ZXInLCAnJHtHVE1fSUR9Jyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICAqL31cbiAgICAgIHsvKiBHbG9iYWwgU2l0ZSBDb2RlIFBpeGVsIC0gRmFjZWJvb2sgUGl4ZWwgKi99XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAhZnVuY3Rpb24oZixiLGUsdixuLHQscylcbiAgICAgICAgICAgIHtpZihmLmZicSlyZXR1cm47bj1mLmZicT1mdW5jdGlvbigpe24uY2FsbE1ldGhvZD9cbiAgICAgICAgICAgIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9O1xuICAgICAgICAgICAgaWYoIWYuX2ZicSlmLl9mYnE9bjtuLnB1c2g9bjtuLmxvYWRlZD0hMDtuLnZlcnNpb249JzIuMCc7XG4gICAgICAgICAgICBuLnF1ZXVlPVtdO3Q9Yi5jcmVhdGVFbGVtZW50KGUpO3QuYXN5bmM9ITA7XG4gICAgICAgICAgICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTtcbiAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxzKX0od2luZG93LCBkb2N1bWVudCwnc2NyaXB0JyxcbiAgICAgICAgICAgICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL2ZiZXZlbnRzLmpzJyk7XG4gICAgICAgICAgICBmYnEoJ2luaXQnLCAnJHtmYnEuRkJfUElYRUxfSUR9Jyk7XG4gICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1BhZ2VWaWV3Jyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJTY3JpcHQiLCJ1c2VSb3V0ZXIiLCJHVE1fSUQiLCJwYWdldmlldyIsImZicSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsIl9faHRtbCIsIkZCX1BJWEVMX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/cta.css":
/*!************************!*\
  !*** ./styles/cta.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/duvidas.css":
/*!****************************!*\
  !*** ./styles/duvidas.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vantagens.css":
/*!******************************!*\
  !*** ./styles/vantagens.css ***!
  \******************************/
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