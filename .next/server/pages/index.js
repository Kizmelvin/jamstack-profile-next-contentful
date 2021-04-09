module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "9ghr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("siz1");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);




function TalksList({
  talksContents,
  details
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [details && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "talk-hero",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "talk-intro",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
          children: details[0].fields.talks.content[0].content[0].value
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: details[0].fields.talks.content[1].content[0].value
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "pg-img",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "/mic.jpg",
          alt: details[0].fields.image.fields.file.description,
          width: "400",
          height: "400"
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: talksContents.map(content => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "talk-list",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: content.fields.body.content[0].content[0].value
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "list-pbtn",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: content.fields.body.content[1].content[0].value
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "view-more",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              target: "_blank",
              referrerPolicy: "no-referrer",
              href: content.fields.links,
              children: ["View Slides \u2192", " "]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          className: "date",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {
            format: "DD/MM/YYYY",
            children: content.fields.date.slice(0, 10)
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {})]
      }, content.sys.id))
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (TalksList);

/***/ }),

/***/ "AlrA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("siz1");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);




function ArticleList({
  details,
  articleContents
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [details && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "art-hero",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "pg-img",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "https://images.unsplash.com/photo-1521079299535-94854b0a7b27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHx3cml0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          alt: details[0].fields.image.fields.file.description // style={{ filter: "grayscale(100%)" }}

        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "art-intro",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
          children: details[0].fields.articles.content[0].content[0].value
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: details[0].fields.articles.content[1].content[0].value
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: articleContents.map(content => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "art-list",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: content.fields.body.content[0].content[0].value
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "list-pbtn",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: content.fields.body.content[1].content[0].value
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "read-more",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              target: "-blank",
              referrerPolicy: "no-referrer",
              href: content.fields.links,
              children: ["3 mins read \u2192", " "]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          className: "date",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {
            format: "DD/MM/YYYY",
            children: content.fields.date.slice(0, 10)
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {})]
      }, content.sys.id))
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (ArticleList);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/HeroDivs.js



const HeroDivs = ({
  details
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "heroDiv-section",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "hero_div",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        children: details[0].fields.intro.content[0].content[0].value
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [" ", details[0].fields.intro.content[1].content[0].value]
      })]
    }, details[0].fields.intro.content[0].content[0].value), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "hero_div",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        children: details[0].fields.talks.content[0].content[0].value
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: details[0].fields.talks.content[1].content[0].value
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "hero_div",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        children: details[0].fields.articles.content[0].content[0].value
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: details[0].fields.articles.content[1].content[0].value
      })]
    })]
  });
};

/* harmony default export */ var components_HeroDivs = (HeroDivs);
// EXTERNAL MODULE: ./contentful/Contentful.js
var Contentful = __webpack_require__("bgwG");

// EXTERNAL MODULE: ./components/SocialLinks.js
var SocialLinks = __webpack_require__("bIlT");

// EXTERNAL MODULE: ./components/ArticleList.js
var ArticleList = __webpack_require__("AlrA");

// EXTERNAL MODULE: ./components/TalksList.js
var TalksList = __webpack_require__("9ghr");

// CONCATENATED MODULE: ./components/Svgs.js

const Center = /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  width: "1",
  height: "3",
  viewBox: "0 0 1 3",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
    width: "1",
    height: "3",
    rx: "0.5",
    fill: "#454545"
  })
});
const Left = /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  width: "172",
  height: "3",
  viewBox: "0 0 172 3",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0 1.68536L43 1.35214L86 1.10221C100.333 1.01225 114.666 0.826759 128.999 0.935611C143.333 1.08778 157.666 1.2083 172 1.68536V1.85197C157.666 2.32958 143.333 2.44955 128.999 2.60172C114.666 2.71113 100.333 2.52507 86 2.4351L43 2.18519L0 1.85197V1.68536Z",
    fill: "#003333"
  })
});
// CONCATENATED MODULE: ./pages/index.js









async function getStaticProps() {
  // getting datatypes from contentful
  const data = await Contentful["a" /* default */].getEntries({
    content_type: "blogPost"
  });
  const data1 = await Contentful["a" /* default */].getEntries({
    content_type: "blogLinks"
  });
  const data2 = await Contentful["a" /* default */].getEntries({
    content_type: "blogPostArticle"
  });
  const data3 = await Contentful["a" /* default */].getEntries({
    content_type: "blogPostTalks"
  });

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      details: data.items,
      articleContents: data2.items,
      links: data1.items,
      talksContents: data3.items
    },
    revalidate: 20 // In seconds

  };
}

function Home({
  talksContents,
  articleContents,
  links,
  details
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "header_section",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/homeimg.jpg",
        alt: "avatar"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_HeroDivs, {
          details: details
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "pengs",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: Left
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "center",
        children: Center
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: Left
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "intro",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: details[0].fields.articles.content[0].content[0].value
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: details[0].fields.articles.content[1].content[0].value
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "indexArticleList",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArticleList["a" /* default */], {
        articleContents: articleContents
      })
    }), "", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "intro",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: details[0].fields.talks.content[0].content[0].value
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: details[0].fields.talks.content[1].content[0].value
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "indexTalkList",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TalksList["a" /* default */], {
        talksContents: talksContents
      })
    }), "", /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialLinks["a" /* default */], {
      links: links
    })]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "bIlT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function SocialLinks({
  links
}) {
  const linkTag = links[0].fields.tag;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "footer",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: linkTag.Skype,
          target: "_blank",
          children: "Skype"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
        children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
          href: linkTag.Twitter,
          target: "_blank",
          children: [" ", "Twitter"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
          href: linkTag.Linkedin,
          target: "_blank",
          children: [" ", "Linkedin"]
        })
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (SocialLinks);

/***/ }),

/***/ "bgwG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5NG/");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);

const Client = Object(contentful__WEBPACK_IMPORTED_MODULE_0__["createClient"])({
  accessToken: "8QL6d7ViHyhY3g29-Iy5DHH18XCT8W3CMDV_Q-dafMs",
  space: "tbpou4ypel8r"
});
/* harmony default export */ __webpack_exports__["a"] = (Client);

/***/ }),

/***/ "siz1":
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ })

/******/ });