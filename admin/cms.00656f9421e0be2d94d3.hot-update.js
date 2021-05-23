webpackHotUpdate("cms",{

/***/ "./src/templates/blog-post.js":
/*!************************************!*\
  !*** ./src/templates/blog-post.js ***!
  \************************************/
/*! exports provided: BlogPostTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostTemplate", function() { return BlogPostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_style_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/style/color */ "./src/components/style/color.js");
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _jsxFileName = "/home/alvin/portfolio-alvin/src/templates/blog-post.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};












var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "blog-post__ContentWrapper"
})(["position:relative;width:80%;margin:40px auto;& a{margin-top:30px;font-size:24px;color:", ";}"], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].red[500]);
var TagContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "blog-post__TagContainer"
})(["display:flex;flex-wrap:wrap;margin:40px 0;border-top:3px solid ", ";padding-top:30px;& > div{border:1px solid ", ";padding:4px 8px;border-radius:10px;line-height:1.2;margin-right:10px;}"], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].gray[400], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].gray[500]);
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "blog-post__HeaderContainer"
})(["padding-bottom:15px;border-bottom:3px solid ", ";margin-bottom:45px;font-size:24px;color:", ";"], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].gray[400], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].gray[600]);
var BlogTitle = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h1.withConfig({
  displayName: "blog-post__BlogTitle"
})(["font-size:52px;color:", ";font-weight:900;line-height:1.2;"], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].red[600]);
var BodyContent = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].body.withConfig({
  displayName: "blog-post__BodyContent"
})(["& h1{font-size:36px;font-weight:700;margin:15px 0;}& h2{font-size:24px;font-weight:700;margin:15px 0;}& img{padding:30px 0;}"]);
var ImageFrame = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "blog-post__ImageFrame"
})(["margin-bottom:45px;"]);
var HomeButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"]).withConfig({
  displayName: "blog-post__HomeButton"
})(["&&&{position:fixed;top:2%;right:5%;font-size:32px;color:white;border-radius:50%;padding:5px;background-color:", ";opacity:0.3;z-index:5;transition:all 0.5s;&:hover{opacity:1;}}"], _components_style_color__WEBPACK_IMPORTED_MODULE_8__["default"].gray[800]);
var BlogPostTemplate = function BlogPostTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      description = _ref.description,
      tags = _ref.tags,
      title = _ref.title,
      helmet = _ref.helmet,
      date = _ref.date,
      featuredimage = _ref.featuredimage;
  // const PostContent = contentComponent || Content
  console.log(tags);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, helmet || '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_10__["IoIosHome"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageFrame, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageInfo: {
      image: featuredimage,
      alt: "featured image thumbnail for post " + title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyContent, {
    dangerouslySetInnerHTML: {
      __html: content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "See other posts"), tags && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, tag);
  }))))));
};

var BlogPost = function BlogPost(_ref2) {
  var data = _ref2.data;
  var post = data.markdownRemark;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogPostTemplate, {
    content: post.html,
    contentComponent: _components_Content__WEBPACK_IMPORTED_MODULE_6__["HTMLContent"],
    description: post.frontmatter.description,
    helmet: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
      titleTemplate: "%s | Blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "" + post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "" + post.frontmatter.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })),
    tags: post.frontmatter.tags,
    title: post.frontmatter.title,
    featuredimage: post.frontmatter.featuredimage,
    date: post.frontmatter.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }));
};

BlogPost.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
};
var _default = BlogPost;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3932167895";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContentWrapper, "ContentWrapper", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(TagContainer, "TagContainer", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(HeaderContainer, "HeaderContainer", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(BlogTitle, "BlogTitle", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(BodyContent, "BodyContent", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(ImageFrame, "ImageFrame", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(HomeButton, "HomeButton", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(BlogPostTemplate, "BlogPostTemplate", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(BlogPost, "BlogPost", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
  reactHotLoader.register(_default, "default", "/home/alvin/portfolio-alvin/src/templates/blog-post.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.00656f9421e0be2d94d3.hot-update.js.map