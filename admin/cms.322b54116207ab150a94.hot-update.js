webpackHotUpdate("cms",{

/***/ "./src/components/pages/index/Works.js":
/*!*********************************************!*\
  !*** ./src/components/pages/index/Works.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SectionHeader */ "./src/components/pages/SectionHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/color */ "./src/components/style/color.js");
/* harmony import */ var _style_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style/layouts */ "./src/components/style/layouts.js");
var _jsxFileName = "/home/alvin/portfolio-alvin/src/components/pages/index/Works.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Works__StyledDiv"
})(["padding:16rem 0;background-color:", ";.list-container{margin-top:10rem;.list-section-container{width:80vw;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);margin:5rem auto 0 auto;background-color:", ";", " display:flex;flex-wrap:wrap;align-items:center;padding:3rem 0;@media only screen and (max-width:1024px){justify-content:center;text-align:center;}.image-frame{width:10rem;margin:0 4rem;}.text-frame{margin:0 1.5rem;h1{font-size:1.5rem;color:", ";font-weight:600;margin:1rem 0;}a{display:inline-block;margin-top:1rem;padding:0.7rem  1.5rem;border-radius:25px;border:1px solid ", ";transition:all 0.25s;&:hover{border:1px solid ", ";background-color:", ";color:", ";}}}}}"], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].gray[100], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].white, _style_layouts__WEBPACK_IMPORTED_MODULE_4__["default"].clearfix, _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].red[500], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].gray[500], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].red[100], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].red[500], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].white);

var Works = function Works(_ref) {
  var works = _ref.works;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Works"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, works.map(function (work) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list-section-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "image-frame",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: !!work.image.childImageSharp ? work.image.childImageSharp.fluid.src : work.image,
      alt: "work",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-frame",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, work.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, work.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: work.github,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Go To Github")));
  })));
};

var _default = Works;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledDiv, "StyledDiv", "/home/alvin/portfolio-alvin/src/components/pages/index/Works.js");
  reactHotLoader.register(Works, "Works", "/home/alvin/portfolio-alvin/src/components/pages/index/Works.js");
  reactHotLoader.register(_default, "default", "/home/alvin/portfolio-alvin/src/components/pages/index/Works.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.322b54116207ab150a94.hot-update.js.map