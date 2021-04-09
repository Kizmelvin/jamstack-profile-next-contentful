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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/talks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SocialLinks.js":
/*!***********************************!*\
  !*** ./components/SocialLinks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/kenny/Desktop/my-next-project/components/SocialLinks.js\";\n\nfunction SocialLinks({\n  links\n}) {\n  const linkTag = links[0].fields.tag;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"footer\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: linkTag.Skype,\n          target: \"_blank\",\n          children: \"Skype\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: linkTag.Twitter,\n          target: \"_blank\",\n          children: [\" \", \"Twitter\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: linkTag.Linkedin,\n          target: \"_blank\",\n          children: [\" \", \"Linkedin\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialLinks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbExpbmtzLmpzPzZjODkiXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJsaW5rcyIsImxpbmtUYWciLCJmaWVsZHMiLCJ0YWciLCJTa3lwZSIsIlR3aXR0ZXIiLCJMaW5rZWRpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQztBQUFGLENBQXJCLEVBQWdDO0FBQzlCLFFBQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRSxNQUFULENBQWdCQyxHQUFoQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUVGLE9BQU8sQ0FBQ0csS0FBakI7QUFBd0IsZ0JBQU0sRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsbUJBQ0csR0FESCxlQUVFO0FBQUcsY0FBSSxFQUFFSCxPQUFPLENBQUNJLE9BQWpCO0FBQTBCLGdCQUFNLEVBQUMsUUFBakM7QUFBQSxxQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQWFFO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssUUFBakI7QUFBMkIsZ0JBQU0sRUFBQyxRQUFsQztBQUFBLHFCQUNHLEdBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7QUFFY1AsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbExpbmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU29jaWFsTGlua3MoeyBsaW5rcyB9KSB7XG4gIGNvbnN0IGxpbmtUYWcgPSBsaW5rc1swXS5maWVsZHMudGFnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9e2xpbmtUYWcuU2t5cGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgU2t5cGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj17bGlua1RhZy5Ud2l0dGVyfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPXtsaW5rVGFnLkxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIExpbmtlZGluXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SocialLinks.js\n");

/***/ }),

/***/ "./components/TalksList.js":
/*!*********************************!*\
  !*** ./components/TalksList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"react-moment\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kenny/Desktop/my-next-project/components/TalksList.js\";\n\n\nfunction TalksList({\n  talksContents,\n  details\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [details && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"talk-hero\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"talk-intro\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: details[0].fields.talks.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: details[0].fields.talks.content[1].content[0].value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"pg-img\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/mic.jpg\",\n          alt: details[0].fields.image.fields.file.description,\n          width: \"400\",\n          height: \"400\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: talksContents.map(content => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"talk-list\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: content.fields.body.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"list-pbtn\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: content.fields.body.content[1].content[0].value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"view-more\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"_blank\",\n              referrerPolicy: \"no-referrer\",\n              href: content.fields.links,\n              children: [\"View Slides \\u2192\", \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          className: \"date\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            format: \"DD/MM/YYYY\",\n            children: content.fields.date.slice(0, 10)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this)]\n      }, content.sys.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TalksList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhbGtzTGlzdC5qcz9mNjA4Il0sIm5hbWVzIjpbIlRhbGtzTGlzdCIsInRhbGtzQ29udGVudHMiLCJkZXRhaWxzIiwiZmllbGRzIiwidGFsa3MiLCJjb250ZW50IiwidmFsdWUiLCJpbWFnZSIsImZpbGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImJvZHkiLCJsaW5rcyIsImRhdGUiLCJzbGljZSIsInN5cyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQjtBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFuQixFQUErQztBQUM3QyxzQkFDRTtBQUFBLGVBQ0dBLE9BQU8saUJBQ047QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxNQUFYLENBQWtCQyxLQUFsQixDQUF3QkMsT0FBeEIsQ0FBZ0MsQ0FBaEMsRUFBbUNBLE9BQW5DLENBQTJDLENBQTNDLEVBQThDQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxpQ0FDRTtBQUFBLHNCQUFJSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLE1BQVgsQ0FBa0JDLEtBQWxCLENBQXdCQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0EsT0FBbkMsQ0FBMkMsQ0FBM0MsRUFBOENDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFFRTtBQUNFLGFBQUcsRUFBQyxVQUROO0FBRUUsYUFBRyxFQUFFSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLE1BQVgsQ0FBa0JJLEtBQWxCLENBQXdCSixNQUF4QixDQUErQkssSUFBL0IsQ0FBb0NDLFdBRjNDO0FBR0UsZUFBSyxFQUFDLEtBSFI7QUFJRSxnQkFBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQW9CRTtBQUFBLGdCQUNHUixhQUFhLENBQUNTLEdBQWQsQ0FBbUJMLE9BQUQsaUJBQ2pCO0FBQTBCLGlCQUFTLEVBQUMsV0FBcEM7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxPQUFPLENBQUNGLE1BQVIsQ0FBZVEsSUFBZixDQUFvQk4sT0FBcEIsQ0FBNEIsQ0FBNUIsRUFBK0JBLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFBLHNCQUFJRCxPQUFPLENBQUNGLE1BQVIsQ0FBZVEsSUFBZixDQUFvQk4sT0FBcEIsQ0FBNEIsQ0FBNUIsRUFBK0JBLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDRTtBQUNFLG9CQUFNLEVBQUMsUUFEVDtBQUVFLDRCQUFjLEVBQUMsYUFGakI7QUFHRSxrQkFBSSxFQUFFRCxPQUFPLENBQUNGLE1BQVIsQ0FBZVMsS0FIdkI7QUFBQSwrQ0FLcUIsR0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFjRTtBQUFPLG1CQUFTLEVBQUMsTUFBakI7QUFBQSxpQ0FDRSxxRUFBQyxtREFBRDtBQUFRLGtCQUFNLEVBQUMsWUFBZjtBQUFBLHNCQUNHUCxPQUFPLENBQUNGLE1BQVIsQ0FBZVUsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBLFNBQVVULE9BQU8sQ0FBQ1UsR0FBUixDQUFZQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0REOztBQUNjaEIsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhbGtzTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuZnVuY3Rpb24gVGFsa3NMaXN0KHsgdGFsa3NDb250ZW50cywgZGV0YWlscyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkZXRhaWxzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWxrLWhlcm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhbGstaW50cm9cIj5cbiAgICAgICAgICAgIDxoND57ZGV0YWlsc1swXS5maWVsZHMudGFsa3MuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfTwvaDQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD57ZGV0YWlsc1swXS5maWVsZHMudGFsa3MuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGctaW1nXCI+XG4gICAgICAgICAgICB7Lyoge2RldGFpbHNbMF0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybH0gKi99XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9taWMuanBnXCJcbiAgICAgICAgICAgICAgYWx0PXtkZXRhaWxzWzBdLmZpZWxkcy5pbWFnZS5maWVsZHMuZmlsZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgd2lkdGg9XCI0MDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAge3RhbGtzQ29udGVudHMubWFwKChjb250ZW50KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQuc3lzLmlkfSBjbGFzc05hbWU9XCJ0YWxrLWxpc3RcIj5cbiAgICAgICAgICAgIDxoMz57Y29udGVudC5maWVsZHMuYm9keS5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1wYnRuXCI+XG4gICAgICAgICAgICAgIDxwPntjb250ZW50LmZpZWxkcy5ib2R5LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1tb3JlXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2NvbnRlbnQuZmllbGRzLmxpbmtzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFZpZXcgU2xpZGVzICZyYXJyO3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVlcIj5cbiAgICAgICAgICAgICAgICB7Y29udGVudC5maWVsZHMuZGF0ZS5zbGljZSgwLCAxMCl9XG4gICAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgVGFsa3NMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TalksList.js\n");

/***/ }),

/***/ "./contentful/Contentful.js":
/*!**********************************!*\
  !*** ./contentful/Contentful.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Client = Object(contentful__WEBPACK_IMPORTED_MODULE_0__[\"createClient\"])({\n  accessToken: \"8QL6d7ViHyhY3g29-Iy5DHH18XCT8W3CMDV_Q-dafMs\",\n  space: \"tbpou4ypel8r\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50ZnVsL0NvbnRlbnRmdWwuanM/NmUwYyJdLCJuYW1lcyI6WyJDbGllbnQiLCJjcmVhdGVDbGllbnQiLCJhY2Nlc3NUb2tlbiIsInNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsK0RBQVksQ0FBQztBQUMxQkMsYUFBVyxFQUFFLDZDQURhO0FBRTFCQyxPQUFLLEVBQUU7QUFGbUIsQ0FBRCxDQUEzQjtBQUtlSCxxRUFBZiIsImZpbGUiOiIuL2NvbnRlbnRmdWwvQ29udGVudGZ1bC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCI7XG5cbmNvbnN0IENsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGFjY2Vzc1Rva2VuOiBcIjhRTDZkN1ZpSHloWTNnMjktSXk1REhIMThYQ1Q4VzNDTURWX1EtZGFmTXNcIixcbiAgc3BhY2U6IFwidGJwb3U0eXBlbDhyXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contentful/Contentful.js\n");

/***/ }),

/***/ "./pages/talks/index.js":
/*!******************************!*\
  !*** ./pages/talks/index.js ***!
  \******************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contentful_Contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contentful/Contentful */ \"./contentful/Contentful.js\");\n/* harmony import */ var _components_TalksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TalksList */ \"./components/TalksList.js\");\n/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SocialLinks */ \"./components/SocialLinks.js\");\n\n\nvar _jsxFileName = \"/Users/kenny/Desktop/my-next-project/pages/talks/index.js\";\n\n\n\nasync function getStaticProps() {\n  const data = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEntries({\n    content_type: \"blogPostTalks\"\n  });\n  const data1 = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEntries({\n    content_type: \"blogPost\"\n  });\n  const data2 = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEntries({\n    content_type: \"blogLinks\"\n  });\n\n  if (!data || !data1) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      talksContents: data.items,\n      details: data1.items,\n      links: data2.items\n    },\n    revalidate: 20\n  };\n}\n\nfunction Talks({\n  talksContents,\n  details,\n  links\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TalksList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      talksContents: talksContents,\n      details: details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      links: links\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Talks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YWxrcy9pbmRleC5qcz82YmMwIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsIkNsaWVudCIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJkYXRhMSIsImRhdGEyIiwibm90Rm91bmQiLCJwcm9wcyIsInRhbGtzQ29udGVudHMiLCJpdGVtcyIsImRldGFpbHMiLCJsaW5rcyIsInJldmFsaWRhdGUiLCJUYWxrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLDhEQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFDbkNDLGdCQUFZLEVBQUU7QUFEcUIsR0FBbEIsQ0FBbkI7QUFHQSxRQUFNQyxLQUFLLEdBQUcsTUFBTUgsOERBQU0sQ0FBQ0MsVUFBUCxDQUFrQjtBQUNwQ0MsZ0JBQVksRUFBRTtBQURzQixHQUFsQixDQUFwQjtBQUdBLFFBQU1FLEtBQUssR0FBRyxNQUFNSiw4REFBTSxDQUFDQyxVQUFQLENBQWtCO0FBQ3BDQyxnQkFBWSxFQUFFO0FBRHNCLEdBQWxCLENBQXBCOztBQUlBLE1BQUksQ0FBQ0gsSUFBRCxJQUFTLENBQUNJLEtBQWQsRUFBcUI7QUFDbkIsV0FBTztBQUNMRSxjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0Q7O0FBRUQsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTEMsbUJBQWEsRUFBRVIsSUFBSSxDQUFDUyxLQURmO0FBRUxDLGFBQU8sRUFBRU4sS0FBSyxDQUFDSyxLQUZWO0FBR0xFLFdBQUssRUFBRU4sS0FBSyxDQUFDSTtBQUhSLEtBREY7QUFNTEcsY0FBVSxFQUFFO0FBTlAsR0FBUDtBQVFEOztBQUVELFNBQVNDLEtBQVQsQ0FBZTtBQUFFTCxlQUFGO0FBQWlCRSxTQUFqQjtBQUEwQkM7QUFBMUIsQ0FBZixFQUFrRDtBQUNoRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDZEQUFEO0FBQVcsbUJBQWEsRUFBRUgsYUFBMUI7QUFBeUMsYUFBTyxFQUFFRTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQywrREFBRDtBQUFhLFdBQUssRUFBRUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFNRDs7QUFFY0Usb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy90YWxrcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSBcIi4uLy4uL2NvbnRlbnRmdWwvQ29udGVudGZ1bFwiO1xuaW1wb3J0IFRhbGtzTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWxrc0xpc3RcIjtcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb2NpYWxMaW5rc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBDbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiBcImJsb2dQb3N0VGFsa3NcIixcbiAgfSk7XG4gIGNvbnN0IGRhdGExID0gYXdhaXQgQ2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJibG9nUG9zdFwiLFxuICB9KTtcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCBDbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiBcImJsb2dMaW5rc1wiLFxuICB9KTtcblxuICBpZiAoIWRhdGEgfHwgIWRhdGExKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YWxrc0NvbnRlbnRzOiBkYXRhLml0ZW1zLFxuICAgICAgZGV0YWlsczogZGF0YTEuaXRlbXMsXG4gICAgICBsaW5rczogZGF0YTIuaXRlbXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAyMCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gVGFsa3MoeyB0YWxrc0NvbnRlbnRzLCBkZXRhaWxzLCBsaW5rcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUYWxrc0xpc3QgdGFsa3NDb250ZW50cz17dGFsa3NDb250ZW50c30gZGV0YWlscz17ZGV0YWlsc30gLz5cbiAgICAgIDxTb2NpYWxMaW5rcyBsaW5rcz17bGlua3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhbGtzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/talks/index.js\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentful\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCI/OWU0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb250ZW50ZnVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///contentful\n");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIj9hNmMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LW1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-moment\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });