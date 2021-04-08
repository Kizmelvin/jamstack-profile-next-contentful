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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about/index.js");
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

/***/ "./contentful/Contentful.js":
/*!**********************************!*\
  !*** ./contentful/Contentful.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Client = Object(contentful__WEBPACK_IMPORTED_MODULE_0__[\"createClient\"])({\n  accessToken: \"8QL6d7ViHyhY3g29-Iy5DHH18XCT8W3CMDV_Q-dafMs\",\n  space: \"tbpou4ypel8r\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50ZnVsL0NvbnRlbnRmdWwuanM/NmUwYyJdLCJuYW1lcyI6WyJDbGllbnQiLCJjcmVhdGVDbGllbnQiLCJhY2Nlc3NUb2tlbiIsInNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsK0RBQVksQ0FBQztBQUMxQkMsYUFBVyxFQUFFLDZDQURhO0FBRTFCQyxPQUFLLEVBQUU7QUFGbUIsQ0FBRCxDQUEzQjtBQUtlSCxxRUFBZiIsImZpbGUiOiIuL2NvbnRlbnRmdWwvQ29udGVudGZ1bC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCI7XG5cbmNvbnN0IENsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGFjY2Vzc1Rva2VuOiBcIjhRTDZkN1ZpSHloWTNnMjktSXk1REhIMThYQ1Q4VzNDTURWX1EtZGFmTXNcIixcbiAgc3BhY2U6IFwidGJwb3U0eXBlbDhyXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contentful/Contentful.js\n");

/***/ }),

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SocialLinks */ \"./components/SocialLinks.js\");\n/* harmony import */ var _contentful_Contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contentful/Contentful */ \"./contentful/Contentful.js\");\n\n\nvar _jsxFileName = \"/Users/kenny/Desktop/my-next-project/pages/about/index.js\";\n\n\nasync function getStaticProps() {\n  const data = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getEntries({\n    content_type: \"blogPost\"\n  });\n  const data1 = await _contentful_Contentful__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getEntries({\n    content_type: \"blogLinks\"\n  });\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      details: data.items,\n      links: data1.items\n    },\n    revalidate: 20\n  };\n}\n\nfunction About({\n  details,\n  links\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"header_section about\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: details[0].fields.image.fields.file.url,\n        alt: details[0].fields.image.fields.file.description // style={{ filter: \"grayscale(100%)\", opacity: \".9\" }}\n        ,\n        width: \"100%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"about-div\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"hero_div\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: details[0].fields.about.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\" \", details[0].fields.about.content[1].content[0].value]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)]\n      }, details[0].fields.about.content[0].content[0].value, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), \"\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"hero_div\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: details[0].fields.crafts.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\" \", details[0].fields.crafts.content[1].content[0].value]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)]\n      }, details[0].fields.crafts.content[0].content[0].value, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      links: links\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC9pbmRleC5qcz9lYzRlIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsIkNsaWVudCIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJkYXRhMSIsIm5vdEZvdW5kIiwicHJvcHMiLCJkZXRhaWxzIiwiaXRlbXMiLCJsaW5rcyIsInJldmFsaWRhdGUiLCJBYm91dCIsImZpZWxkcyIsImltYWdlIiwiZmlsZSIsInVybCIsImRlc2NyaXB0aW9uIiwiYWJvdXQiLCJjb250ZW50IiwidmFsdWUiLCJjcmFmdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxlQUFlQSxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLElBQUksR0FBRyxNQUFNQyw4REFBTSxDQUFDQyxVQUFQLENBQWtCO0FBQ25DQyxnQkFBWSxFQUFFO0FBRHFCLEdBQWxCLENBQW5CO0FBR0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1ILDhEQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFDcENDLGdCQUFZLEVBQUU7QUFEc0IsR0FBbEIsQ0FBcEI7O0FBSUEsTUFBSSxDQUFDSCxJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQ0xLLGNBQVEsRUFBRTtBQURMLEtBQVA7QUFHRDs7QUFFRCxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVQLElBQUksQ0FBQ1EsS0FEVDtBQUdMQyxXQUFLLEVBQUVMLEtBQUssQ0FBQ0k7QUFIUixLQURGO0FBT0xFLGNBQVUsRUFBRTtBQVBQLEdBQVA7QUFTRDs7QUFFRCxTQUFTQyxLQUFULENBQWU7QUFBRUosU0FBRjtBQUFXRTtBQUFYLENBQWYsRUFBbUM7QUFDakMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNFO0FBQ0UsV0FBRyxFQUFFRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLE1BQVgsQ0FBa0JDLEtBQWxCLENBQXdCRCxNQUF4QixDQUErQkUsSUFBL0IsQ0FBb0NDLEdBRDNDO0FBRUUsV0FBRyxFQUFFUixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLE1BQVgsQ0FBa0JDLEtBQWxCLENBQXdCRCxNQUF4QixDQUErQkUsSUFBL0IsQ0FBb0NFLFdBRjNDLENBR0U7QUFIRjtBQUlFLGFBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFDLFVBRFo7QUFBQSxnQ0FJRTtBQUFBLG9CQUFLVCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLE1BQVgsQ0FBa0JLLEtBQWxCLENBQXdCQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0EsT0FBbkMsQ0FBMkMsQ0FBM0MsRUFBOENDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFBLDBCQUFLWixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLE1BQVgsQ0FBa0JLLEtBQWxCLENBQXdCQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0EsT0FBbkMsQ0FBMkMsQ0FBM0MsRUFBOENDLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBLFNBRU9aLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssTUFBWCxDQUFrQkssS0FBbEIsQ0FBd0JDLE9BQXhCLENBQWdDLENBQWhDLEVBQW1DQSxPQUFuQyxDQUEyQyxDQUEzQyxFQUE4Q0MsS0FGckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBUUcsRUFSSCxlQVNFO0FBQ0UsaUJBQVMsRUFBQyxVQURaO0FBQUEsZ0NBSUU7QUFBQSxvQkFBS1osT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxNQUFYLENBQWtCUSxNQUFsQixDQUF5QkYsT0FBekIsQ0FBaUMsQ0FBakMsRUFBb0NBLE9BQXBDLENBQTRDLENBQTVDLEVBQStDQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBS0U7QUFBQSwwQkFBS1osT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxNQUFYLENBQWtCUSxNQUFsQixDQUF5QkYsT0FBekIsQ0FBaUMsQ0FBakMsRUFBb0NBLE9BQXBDLENBQTRDLENBQTVDLEVBQStDQyxLQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQSxTQUVPWixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLE1BQVgsQ0FBa0JRLE1BQWxCLENBQXlCRixPQUF6QixDQUFpQyxDQUFqQyxFQUFvQ0EsT0FBcEMsQ0FBNEMsQ0FBNUMsRUFBK0NDLEtBRnREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQTBCRSxxRUFBQywrREFBRDtBQUFhLFdBQUssRUFBRVY7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBLGtCQURGO0FBOEJEOztBQUVjRSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvY2lhbExpbmtzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvY2lhbExpbmtzXCI7XG5pbXBvcnQgQ2xpZW50IGZyb20gXCIuLi8uLi9jb250ZW50ZnVsL0NvbnRlbnRmdWxcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgQ2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJibG9nUG9zdFwiLFxuICB9KTtcbiAgY29uc3QgZGF0YTEgPSBhd2FpdCBDbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiBcImJsb2dMaW5rc1wiLFxuICB9KTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRldGFpbHM6IGRhdGEuaXRlbXMsXG5cbiAgICAgIGxpbmtzOiBkYXRhMS5pdGVtcyxcbiAgICB9LFxuXG4gICAgcmV2YWxpZGF0ZTogMjAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIEFib3V0KHsgZGV0YWlscywgbGlua3MgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9zZWN0aW9uIGFib3V0XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2RldGFpbHNbMF0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICBhbHQ9e2RldGFpbHNbMF0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIC8vIHN0eWxlPXt7IGZpbHRlcjogXCJncmF5c2NhbGUoMTAwJSlcIiwgb3BhY2l0eTogXCIuOVwiIH19XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1kaXZcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm9fZGl2XCJcbiAgICAgICAgICBrZXk9e2RldGFpbHNbMF0uZmllbGRzLmFib3V0LmNvbnRlbnRbMF0uY29udGVudFswXS52YWx1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj57ZGV0YWlsc1swXS5maWVsZHMuYWJvdXQuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfTwvaDI+XG4gICAgICAgICAgPHA+IHtkZXRhaWxzWzBdLmZpZWxkcy5hYm91dC5jb250ZW50WzFdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1wiXCJ9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvX2RpdlwiXG4gICAgICAgICAga2V5PXtkZXRhaWxzWzBdLmZpZWxkcy5jcmFmdHMuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyPntkZXRhaWxzWzBdLmZpZWxkcy5jcmFmdHMuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfTwvaDI+XG4gICAgICAgICAgPHA+IHtkZXRhaWxzWzBdLmZpZWxkcy5jcmFmdHMuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTb2NpYWxMaW5rcyBsaW5rcz17bGlua3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about/index.js\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentful\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCI/OWU0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb250ZW50ZnVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///contentful\n");

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