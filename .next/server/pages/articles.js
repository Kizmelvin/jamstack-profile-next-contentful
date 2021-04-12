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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/articles/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ArticleList.js":
/*!***********************************!*\
  !*** ./components/ArticleList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"react-moment\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kenny/Desktop/Kizmelvin.dev/my-next-project/components/ArticleList.js\";\n\n\nfunction ArticleList({\n  details,\n  articleContents\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [details && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"art-hero\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"pg-img\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"https://images.unsplash.com/photo-1521079299535-94854b0a7b27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHx3cml0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\",\n          alt: details[0].fields.image.fields.file.description // style={{ filter: \"grayscale(100%)\" }}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"art-intro\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: details[0].fields.articles.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: details[0].fields.articles.content[1].content[0].value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: articleContents.map(content => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"art-list\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: content.fields.body.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"list-pbtn\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: content.fields.body.content[1].content[0].value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"read-more\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"-blank\",\n              referrerPolicy: \"no-referrer\",\n              href: content.fields.links,\n              children: [\"3 mins read \\u2192\", \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n          className: \"date\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            format: \"DD/MM/YYYY\",\n            children: content.fields.date.slice(0, 10)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this)]\n      }, content.sys.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGVMaXN0LmpzPzAyNWEiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJkZXRhaWxzIiwiYXJ0aWNsZUNvbnRlbnRzIiwiZmllbGRzIiwiaW1hZ2UiLCJmaWxlIiwiZGVzY3JpcHRpb24iLCJhcnRpY2xlcyIsImNvbnRlbnQiLCJ2YWx1ZSIsIm1hcCIsImJvZHkiLCJsaW5rcyIsImRhdGUiLCJzbGljZSIsInN5cyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBckIsRUFBbUQ7QUFDakQsc0JBQ0U7QUFBQSxlQUNHRCxPQUFPLGlCQUNOO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUVFO0FBQ0UsYUFBRyxFQUFDLHlLQUROO0FBRUUsYUFBRyxFQUFFQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdFLE1BQVgsQ0FBa0JDLEtBQWxCLENBQXdCRCxNQUF4QixDQUErQkUsSUFBL0IsQ0FBb0NDLFdBRjNDLENBR0U7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0wsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxNQUFYLENBQWtCSSxRQUFsQixDQUEyQkMsT0FBM0IsQ0FBbUMsQ0FBbkMsRUFBc0NBLE9BQXRDLENBQThDLENBQTlDLEVBQWlEQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxpQ0FDRTtBQUFBLHNCQUFJUixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdFLE1BQVgsQ0FBa0JJLFFBQWxCLENBQTJCQyxPQUEzQixDQUFtQyxDQUFuQyxFQUFzQ0EsT0FBdEMsQ0FBOEMsQ0FBOUMsRUFBaURDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBbUJFO0FBQUEsZ0JBQ0dQLGVBQWUsQ0FBQ1EsR0FBaEIsQ0FBcUJGLE9BQUQsaUJBQ25CO0FBQTBCLGlCQUFTLEVBQUMsVUFBcEM7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxPQUFPLENBQUNMLE1BQVIsQ0FBZVEsSUFBZixDQUFvQkgsT0FBcEIsQ0FBNEIsQ0FBNUIsRUFBK0JBLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFBLHNCQUFJRCxPQUFPLENBQUNMLE1BQVIsQ0FBZVEsSUFBZixDQUFvQkgsT0FBcEIsQ0FBNEIsQ0FBNUIsRUFBK0JBLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDRTtBQUNFLG9CQUFNLEVBQUMsUUFEVDtBQUVFLDRCQUFjLEVBQUMsYUFGakI7QUFHRSxrQkFBSSxFQUFFRCxPQUFPLENBQUNMLE1BQVIsQ0FBZVMsS0FIdkI7QUFBQSwrQ0FLcUIsR0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFjRTtBQUFPLG1CQUFTLEVBQUMsTUFBakI7QUFBQSxpQ0FDRSxxRUFBQyxtREFBRDtBQUFRLGtCQUFNLEVBQUMsWUFBZjtBQUFBLHNCQUNHSixPQUFPLENBQUNMLE1BQVIsQ0FBZVUsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBLFNBQVVOLE9BQU8sQ0FBQ08sR0FBUixDQUFZQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztBQUNjaEIsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5cbmZ1bmN0aW9uIEFydGljbGVMaXN0KHsgZGV0YWlscywgYXJ0aWNsZUNvbnRlbnRzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RldGFpbHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1oZXJvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZy1pbWdcIj5cbiAgICAgICAgICAgIHsvKiB7ZGV0YWlsc1swXS5maWVsZHMuaW1hZ2UuZmllbGRzLmZpbGUudXJsfSAqL31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjEwNzkyOTk1MzUtOTQ4NTRiMGE3YjI3P2l4aWQ9TVh3eE1qQTNmREI4TUh4elpXRnlZMmg4TWprNGZIeDNjbWwwWlhKOFpXNThNSHg4TUh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuICAgICAgICAgICAgICBhbHQ9e2RldGFpbHNbMF0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvLyBzdHlsZT17eyBmaWx0ZXI6IFwiZ3JheXNjYWxlKDEwMCUpXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtaW50cm9cIj5cbiAgICAgICAgICAgIDxoND57ZGV0YWlsc1swXS5maWVsZHMuYXJ0aWNsZXMuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfTwvaDQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD57ZGV0YWlsc1swXS5maWVsZHMuYXJ0aWNsZXMuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICB7YXJ0aWNsZUNvbnRlbnRzLm1hcCgoY29udGVudCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LnN5cy5pZH0gY2xhc3NOYW1lPVwiYXJ0LWxpc3RcIj5cbiAgICAgICAgICAgIDxoMz57Y29udGVudC5maWVsZHMuYm9keS5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1wYnRuXCI+XG4gICAgICAgICAgICAgIDxwPntjb250ZW50LmZpZWxkcy5ib2R5LmNvbnRlbnRbMV0uY29udGVudFswXS52YWx1ZX08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1tb3JlXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIi1ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2NvbnRlbnQuZmllbGRzLmxpbmtzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDMgbWlucyByZWFkICZyYXJyO3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVlcIj5cbiAgICAgICAgICAgICAgICB7Y29udGVudC5maWVsZHMuZGF0ZS5zbGljZSgwLCAxMCl9XG4gICAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArticleList.js\n");

/***/ }),

/***/ "./components/SocialLinks.js":
/*!***********************************!*\
  !*** ./components/SocialLinks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/kenny/Desktop/Kizmelvin.dev/my-next-project/components/SocialLinks.js\";\n\nfunction SocialLinks({\n  links\n}) {\n  const linkTag = links[0].fields.tag;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"footer\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: linkTag.Skype,\n          target: \"_blank\",\n          children: \"Skype\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: linkTag.Twitter,\n          target: \"_blank\",\n          children: [\" \", \"Twitter\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: linkTag.Linkedin,\n          target: \"_blank\",\n          children: [\" \", \"Linkedin\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialLinks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbExpbmtzLmpzPzZjODkiXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJsaW5rcyIsImxpbmtUYWciLCJmaWVsZHMiLCJ0YWciLCJTa3lwZSIsIlR3aXR0ZXIiLCJMaW5rZWRpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQztBQUFGLENBQXJCLEVBQWdDO0FBQzlCLFFBQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRSxNQUFULENBQWdCQyxHQUFoQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUVGLE9BQU8sQ0FBQ0csS0FBakI7QUFBd0IsZ0JBQU0sRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsbUJBQ0csR0FESCxlQUVFO0FBQUcsY0FBSSxFQUFFSCxPQUFPLENBQUNJLE9BQWpCO0FBQTBCLGdCQUFNLEVBQUMsUUFBakM7QUFBQSxxQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQWFFO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssUUFBakI7QUFBMkIsZ0JBQU0sRUFBQyxRQUFsQztBQUFBLHFCQUNHLEdBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7QUFFY1AsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbExpbmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU29jaWFsTGlua3MoeyBsaW5rcyB9KSB7XG4gIGNvbnN0IGxpbmtUYWcgPSBsaW5rc1swXS5maWVsZHMudGFnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9e2xpbmtUYWcuU2t5cGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgU2t5cGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj17bGlua1RhZy5Ud2l0dGVyfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPXtsaW5rVGFnLkxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIExpbmtlZGluXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SocialLinks.js\n");

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

/***/ "./pages/articles/index.js":
/*!*********************************!*\
  !*** ./pages/articles/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SocialLinks */ \"./components/SocialLinks.js\");\n/* harmony import */ var _contentful_Contentful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contentful/Contentful */ \"./contentful/Contentful.js\");\n\n\nvar _jsxFileName = \"/Users/kenny/Desktop/Kizmelvin.dev/my-next-project/pages/articles/index.js\";\n\n\n\nasync function getStaticProps() {\n  const data = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getEntries({\n    content_type: \"blogPostArticle\"\n  });\n  const data1 = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getEntries({\n    content_type: \"blogPost\"\n  });\n  const data2 = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getEntries({\n    content_type: \"blogLinks\"\n  }); // if (!data || !data1) {\n  //   return {\n  //     notFound: true,\n  //   };\n  // }\n\n  return {\n    props: {\n      articleContents: data.items,\n      details: data1.items,\n      links: data2.items\n    }\n  };\n}\n\nfunction Articles({\n  articleContents,\n  details,\n  links\n}) {\n  console.log(details);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ArticleList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      articleContents: articleContents,\n      details: details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      links: links\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcnRpY2xlcy9pbmRleC5qcz8xMmQxIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsIkNsaWVudCIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJkYXRhMSIsImRhdGEyIiwicHJvcHMiLCJhcnRpY2xlQ29udGVudHMiLCJpdGVtcyIsImRldGFpbHMiLCJsaW5rcyIsIkFydGljbGVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLDhEQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFDbkNDLGdCQUFZLEVBQUU7QUFEcUIsR0FBbEIsQ0FBbkI7QUFHQSxRQUFNQyxLQUFLLEdBQUcsTUFBTUgsOERBQU0sQ0FBQ0MsVUFBUCxDQUFrQjtBQUNwQ0MsZ0JBQVksRUFBRTtBQURzQixHQUFsQixDQUFwQjtBQUdBLFFBQU1FLEtBQUssR0FBRyxNQUFNSiw4REFBTSxDQUFDQyxVQUFQLENBQWtCO0FBQ3BDQyxnQkFBWSxFQUFFO0FBRHNCLEdBQWxCLENBQXBCLENBUHFDLENBV3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBTztBQUNMRyxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRVAsSUFBSSxDQUFDUSxLQURqQjtBQUVMQyxhQUFPLEVBQUVMLEtBQUssQ0FBQ0ksS0FGVjtBQUdMRSxXQUFLLEVBQUVMLEtBQUssQ0FBQ0c7QUFIUjtBQURGLEdBQVA7QUFPRDs7QUFFRCxTQUFTRyxRQUFULENBQWtCO0FBQUVKLGlCQUFGO0FBQW1CRSxTQUFuQjtBQUE0QkM7QUFBNUIsQ0FBbEIsRUFBdUQ7QUFDckRFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFhLHFCQUFlLEVBQUVGLGVBQTlCO0FBQStDLGFBQU8sRUFBRUU7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsK0RBQUQ7QUFBYSxXQUFLLEVBQUVDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0FBRWNDLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3RcIjtcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb2NpYWxMaW5rc1wiO1xuaW1wb3J0IENsaWVudCBmcm9tIFwiLi4vLi4vY29udGVudGZ1bC9Db250ZW50ZnVsXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IENsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwiYmxvZ1Bvc3RBcnRpY2xlXCIsXG4gIH0pO1xuICBjb25zdCBkYXRhMSA9IGF3YWl0IENsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwiYmxvZ1Bvc3RcIixcbiAgfSk7XG4gIGNvbnN0IGRhdGEyID0gYXdhaXQgQ2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJibG9nTGlua3NcIixcbiAgfSk7XG5cbiAgLy8gaWYgKCFkYXRhIHx8ICFkYXRhMSkge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZUNvbnRlbnRzOiBkYXRhLml0ZW1zLFxuICAgICAgZGV0YWlsczogZGF0YTEuaXRlbXMsXG4gICAgICBsaW5rczogZGF0YTIuaXRlbXMsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gQXJ0aWNsZXMoeyBhcnRpY2xlQ29udGVudHMsIGRldGFpbHMsIGxpbmtzIH0pIHtcbiAgY29uc29sZS5sb2coZGV0YWlscyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlQ29udGVudHM9e2FydGljbGVDb250ZW50c30gZGV0YWlscz17ZGV0YWlsc30gLz5cbiAgICAgIDxTb2NpYWxMaW5rcyBsaW5rcz17bGlua3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles/index.js\n");

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