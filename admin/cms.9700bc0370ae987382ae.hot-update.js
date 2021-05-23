webpackHotUpdate("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_pages_index_MainVisual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pages/index/MainVisual */ "./src/components/pages/index/MainVisual.js");
/* harmony import */ var _components_pages_index_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/index/AboutMe */ "./src/components/pages/index/AboutMe.js");
/* harmony import */ var _components_pages_index_ImageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pages/index/ImageSection */ "./src/components/pages/index/ImageSection.js");
/* harmony import */ var _components_pages_index_Works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/pages/index/Works */ "./src/components/pages/index/Works.js");
/* harmony import */ var _components_pages_index_Experience__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pages/index/Experience */ "./src/components/pages/index/Experience.js");
/* harmony import */ var _components_pages_index_BlogList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/pages/index/BlogList */ "./src/components/pages/index/BlogList.js");
var _jsxFileName = "/home/alvin/portfolio-alvin/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var data = _ref.data,
      image = _ref.image,
      image2 = _ref.image2,
      works = _ref.works,
      image3 = _ref.image3,
      image4 = _ref.image4;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_index_MainVisual__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_index_AboutMe__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_index_ImageSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: image2,
    desc: "Osaka Castle",
    time: "Nov 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_index_Works__WEBPACK_IMPORTED_MODULE_6__["default"], {
    works: works,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_index_Experience__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_index_BlogList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    data: data,
    image: frontmatter.image,
    image2: frontmatter.image2,
    works: frontmatter.works,
    image3: frontmatter.image3,
    image4: frontmatter.image4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3794816643";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/home/alvin/portfolio-alvin/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/home/alvin/portfolio-alvin/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/home/alvin/portfolio-alvin/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/home/alvin/portfolio-alvin/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.9700bc0370ae987382ae.hot-update.js.map