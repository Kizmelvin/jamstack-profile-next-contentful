webpackHotUpdate_N_E("pages/talks",{

/***/ "./components/TalksList.js":
/*!*********************************!*\
  !*** ./components/TalksList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kenny/Desktop/my-next-project/components/TalksList.js\";\n\n\nfunction TalksList(_ref) {\n  var _this = this;\n\n  var talksContents = _ref.talksContents,\n      details = _ref.details;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [details && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"talk-hero\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"talk-intro\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: details[0].fields.talks.content[0].content[0].value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: details[0].fields.talks.content[1].content[0].value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"pg-img\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/mic.jpg\",\n          alt: details[0].fields.image.fields.file.description,\n          width: \"400\",\n          height: \"400\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: talksContents.map(function (content) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"talk-list\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: content.fields.body.content[0].content[0].value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"list-pbtn\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: content.fields.body.content[1].content[0].value\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"view-more\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                target: \"_blank\",\n                referrerPolicy: \"no-referrer\",\n                href: content.fields.links,\n                children: [\"View Slides \\u2192\", \" \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"date\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              format: \"DD/MM/YYYY\",\n              children: content.fields.date.slice(0, 10)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)]\n        }, content.sys.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\n\n_c = TalksList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TalksList);\n\nvar _c;\n\n$RefreshReg$(_c, \"TalksList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWxrc0xpc3QuanM/ZjYwOCJdLCJuYW1lcyI6WyJUYWxrc0xpc3QiLCJ0YWxrc0NvbnRlbnRzIiwiZGV0YWlscyIsImZpZWxkcyIsInRhbGtzIiwiY29udGVudCIsInZhbHVlIiwiaW1hZ2UiLCJmaWxlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJib2R5IiwibGlua3MiLCJkYXRlIiwic2xpY2UiLCJzeXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBLFNBQVNBLFNBQVQsT0FBK0M7QUFBQTs7QUFBQSxNQUExQkMsYUFBMEIsUUFBMUJBLGFBQTBCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzdDLHNCQUNFO0FBQUEsZUFDR0EsT0FBTyxpQkFDTjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLE1BQVgsQ0FBa0JDLEtBQWxCLENBQXdCQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0EsT0FBbkMsQ0FBMkMsQ0FBM0MsRUFBOENDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLGlDQUNFO0FBQUEsc0JBQUlKLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsTUFBWCxDQUFrQkMsS0FBbEIsQ0FBd0JDLE9BQXhCLENBQWdDLENBQWhDLEVBQW1DQSxPQUFuQyxDQUEyQyxDQUEzQyxFQUE4Q0M7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUVFO0FBQ0UsYUFBRyxFQUFDLFVBRE47QUFFRSxhQUFHLEVBQUVKLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsTUFBWCxDQUFrQkksS0FBbEIsQ0FBd0JKLE1BQXhCLENBQStCSyxJQUEvQixDQUFvQ0MsV0FGM0M7QUFHRSxlQUFLLEVBQUMsS0FIUjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBb0JFO0FBQUEsZ0JBQ0dSLGFBQWEsQ0FBQ1MsR0FBZCxDQUFrQixVQUFDTCxPQUFEO0FBQUEsNEJBQ2pCO0FBQTBCLG1CQUFTLEVBQUMsV0FBcEM7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLQSxPQUFPLENBQUNGLE1BQVIsQ0FBZVEsSUFBZixDQUFvQk4sT0FBcEIsQ0FBNEIsQ0FBNUIsRUFBK0JBLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDRTtBQUFBLHdCQUFJRCxPQUFPLENBQUNGLE1BQVIsQ0FBZVEsSUFBZixDQUFvQk4sT0FBcEIsQ0FBNEIsQ0FBNUIsRUFBK0JBLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxxQ0FDRTtBQUNFLHNCQUFNLEVBQUMsUUFEVDtBQUVFLDhCQUFjLEVBQUMsYUFGakI7QUFHRSxvQkFBSSxFQUFFRCxPQUFPLENBQUNGLE1BQVIsQ0FBZVMsS0FIdkI7QUFBQSxpREFLcUIsR0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFjRTtBQUFPLHFCQUFTLEVBQUMsTUFBakI7QUFBQSxtQ0FDRSxxRUFBQyxtREFBRDtBQUFRLG9CQUFNLEVBQUMsWUFBZjtBQUFBLHdCQUNHUCxPQUFPLENBQUNGLE1BQVIsQ0FBZVUsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBLFdBQVVULE9BQU8sQ0FBQ1UsR0FBUixDQUFZQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERDs7S0FqRFFoQixTO0FBa0RNQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFsa3NMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5mdW5jdGlvbiBUYWxrc0xpc3QoeyB0YWxrc0NvbnRlbnRzLCBkZXRhaWxzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RldGFpbHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhbGstaGVyb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFsay1pbnRyb1wiPlxuICAgICAgICAgICAgPGg0PntkZXRhaWxzWzBdLmZpZWxkcy50YWxrcy5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWV9PC9oND5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPntkZXRhaWxzWzBdLmZpZWxkcy50YWxrcy5jb250ZW50WzFdLmNvbnRlbnRbMF0udmFsdWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZy1pbWdcIj5cbiAgICAgICAgICAgIHsvKiB7ZGV0YWlsc1swXS5maWVsZHMuaW1hZ2UuZmllbGRzLmZpbGUudXJsfSAqL31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL21pYy5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9e2RldGFpbHNbMF0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB3aWR0aD1cIjQwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICB7dGFsa3NDb250ZW50cy5tYXAoKGNvbnRlbnQpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5zeXMuaWR9IGNsYXNzTmFtZT1cInRhbGstbGlzdFwiPlxuICAgICAgICAgICAgPGgzPntjb250ZW50LmZpZWxkcy5ib2R5LmNvbnRlbnRbMF0uY29udGVudFswXS52YWx1ZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXBidG5cIj5cbiAgICAgICAgICAgICAgPHA+e2NvbnRlbnQuZmllbGRzLmJvZHkuY29udGVudFsxXS5jb250ZW50WzBdLnZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LW1vcmVcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17Y29udGVudC5maWVsZHMubGlua3N9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVmlldyBTbGlkZXMgJnJhcnI7e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWVwiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LmZpZWxkcy5kYXRlLnNsaWNlKDAsIDEwKX1cbiAgICAgICAgICAgICAgPC9Nb21lbnQ+XG4gICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBUYWxrc0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TalksList.js\n");

/***/ })

})