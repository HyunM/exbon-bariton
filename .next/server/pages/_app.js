(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoTop)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\hyunmyung.kim\\workspace\\React\\exbon-bariton\\components\\Shared\\GoTop.js";

class GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {
      is_visible
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "scroll-to-top",
      children: is_visible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "top",
        onClick: () => this.scrollToTop(),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\hyunmyung.kim\\workspace\\React\\exbon-bariton\\components\\Shared\\Loader.js";


class Loader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `preloader ${this.props.loading ? '' : 'preloader-deactivate'}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "loader",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "loader-outter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "loader-inner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/flaticon.css */ "./public/css/flaticon.css");
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/fontawesome.min.css */ "./public/css/fontawesome.min.css");
/* harmony import */ var _public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ "./node_modules/react-modal-video/css/modal-video.min.css");
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");


var _jsxFileName = "C:\\Users\\hyunmyung.kim\\workspace\\React\\exbon-bariton\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_9___default()) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: true
    });
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({
      loading: false
    }), 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Exbon Developmen, Inc."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__.default, {
        loading: this.state.loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__.default, {
        scrollStepInPx: "50",
        delayInMs: "10.50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/fontawesome.min.css":
/*!****************************************!*\
  !*** ./public/css/fontawesome.min.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFGO0FBQWE0RCxNQUFBQTtBQUFiLFFBQTJCLEtBQUt6RCxLQUF0QztBQUVBLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsaUJBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFLDhEQUFDLFNBQUQsb0JBQWV5RCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVlFLDhEQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUt4RCxLQUFMLENBQVdpQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFlRSw4REFBQyw4REFBRDtBQUFPLHNCQUFjLEVBQUMsSUFBdEI7QUFBMkIsaUJBQVMsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQSxvQkFERjtBQW1CRDs7QUF4Q29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FTZnZDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFyaXRvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9iYXJpdG9uLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vYmFyaXRvbi8uL2NvbXBvbmVudHMvU2hhcmVkL0xvYWRlci5qcyIsIndlYnBhY2s6Ly9iYXJpdG9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Jhcml0b24vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Jhcml0b24vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vYmFyaXRvbi8uL25vZGVfbW9kdWxlcy9yZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzIiwid2VicGFjazovL2Jhcml0b24vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vYmFyaXRvbi8uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vYmFyaXRvbi8uL3B1YmxpYy9jc3MvZmxhdGljb24uY3NzIiwid2VicGFjazovL2Jhcml0b24vLi9wdWJsaWMvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vYmFyaXRvbi8uL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MiLCJ3ZWJwYWNrOi8vYmFyaXRvbi8uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2Jhcml0b24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2Jhcml0b24vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9iYXJpdG9uL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYXJpdG9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb1RvcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc192aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbENvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbENvbXBvbmVudC50b2dnbGVWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb1RvcCgpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNfdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC10by10b3BcIj5cclxuICAgICAgICAgICAgICAgIHtpc192aXNpYmxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2Nyb2xsVG9Ub3AoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy11cFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJlbG9hZGVyICR7dGhpcy5wcm9wcy5sb2FkaW5nID8gJycgOiAncHJlbG9hZGVyLWRlYWN0aXZhdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1vdXR0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1pbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFwcEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkFwcEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRXZWJWaXRhbHNNZXRyaWNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHBhZ2VQcm9wcykpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL2ZsYXRpY29uLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9yZXNwb25zaXZlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0xvYWRlclwiO1xyXG5pbXBvcnQgR29Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgLy8gUHJlbG9hZGVyXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnRpbWVySGFuZGxlID0gc2V0VGltZW91dChcclxuICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pLFxyXG4gICAgICAyMDAwXHJcbiAgICApO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVySGFuZGxlKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGFuZGxlKTtcclxuICAgICAgdGhpcy50aW1lckhhbmRsZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDx0aXRsZT5FeGJvbiBEZXZlbG9wbWVuLCBJbmMuPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHJcbiAgICAgICAgey8qIFByZWxvYWRlciAqL31cclxuICAgICAgICA8TG9hZGVyIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cclxuXHJcbiAgICAgICAgey8qIEdvIFRvcCBCdXR0b24gKi99XHJcbiAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiNTBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJHb1RvcCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImlzX3Zpc2libGUiLCJjb21wb25lbnREaWRNb3VudCIsInNjcm9sbENvbXBvbmVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzZXRTdGF0ZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInJlbmRlciIsIkxvYWRlciIsImxvYWRpbmciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJIZWFkIiwiTXlBcHAiLCJ0aW1lckhhbmRsZSIsInNldFRpbWVvdXQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=