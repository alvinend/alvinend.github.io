webpackHotUpdate("cms",{

/***/ "./src/components/pages/index/SkillList.js":
/*!*************************************************!*\
  !*** ./src/components/pages/index/SkillList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/color */ "./src/components/style/color.js");

var _jsxFileName = "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var GreenDot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SkillList__GreenDot"
})(["width:8px;height:8px;background-color:", ";border-radius:50%;margin:1rem 0.5rem 0 0;"], _style_color__WEBPACK_IMPORTED_MODULE_3__["default"].red[500]);
var GreyDot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SkillList__GreyDot"
})(["width:8px;height:8px;background-color:#c4c4c4;border-radius:50%;margin:1rem 0.5rem 0 0;"]);
var IconGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SkillList__IconGroup"
})(["display:flex;"]);
var StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SkillList__StyledWrapper"
})(["display:flex;color:#515151;font-weight:bold;width:100%;"]);
var SkillName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "SkillList__SkillName"
})(["min-width:150px;"]);
var SkillDesc = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "SkillList__SkillDesc"
})(["margin-left:20px;font-weight:normal;"]);

var SkillList = function SkillList(_ref) {
  var name = _ref.name,
      desc = _ref.desc,
      point = _ref.point;
  var score = [];

  for (var i = 0; i < 5; i++) {
    if (point > 0) {
      score.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GreenDot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
      point--;
    } else {
      score.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GreyDot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, score), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillDesc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, desc));
};

var _default = SkillList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GreenDot, "GreenDot", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(GreyDot, "GreyDot", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(IconGroup, "IconGroup", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(StyledWrapper, "StyledWrapper", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(SkillName, "SkillName", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(SkillDesc, "SkillDesc", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(SkillList, "SkillList", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
  reactHotLoader.register(_default, "default", "/home/alvin/portfolio-alvin/src/components/pages/index/SkillList.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.b8ee3b37fe5a9d9f60b8.hot-update.js.map