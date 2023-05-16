/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FAQs.jsx":
/*!*********************************!*\
  !*** ./src/components/FAQs.jsx ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CallToAction */ \"./src/components/CallToAction.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Hero */ \"./src/components/Hero.jsx\");\n/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AboutMe */ \"./src/components/AboutMe.jsx\");\n/* harmony import */ var _components_WhatCanDo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/WhatCanDo */ \"./src/components/WhatCanDo.jsx\");\n/* harmony import */ var _components_OurTeam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/OurTeam */ \"./src/components/OurTeam.jsx\");\n/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Contacts */ \"./src/components/Contacts.jsx\");\n/* harmony import */ var _components_Parceries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Parceries */ \"./src/components/Parceries.jsx\");\n/* harmony import */ var _components_FAQs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/FAQs */ \"./src/components/FAQs.jsx\");\n/* harmony import */ var _components_FAQs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_FAQs__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"DI Gabinete de Terapia da Fala\"\n                }, void 0, false, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"primaryBack\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe__WEBPACK_IMPORTED_MODULE_6__.AboutMe, {}, void 0, false, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OurTeam__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Parceries__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CallToAction__WEBPACK_IMPORTED_MODULE_2__.CallToAction, {}, void 0, false, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contacts__WEBPACK_IMPORTED_MODULE_9__.Contacts, {}, void 0, false, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/DIGabineteTF/src/pages/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRTRCO0FBQ1o7QUFDQTtBQUNOO0FBQ1E7QUFDSTtBQUNSO0FBQ007QUFDRjtBQUNWO0FBS3JCLFNBQVNXLE9BQU87SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDWCxrREFBSUE7MEJBQ0gsNEVBQUNZOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ1Qsc0RBQU1BOzs7OzswQkFDUCw4REFBQ1U7Z0JBQUtDLFdBQVU7O2tDQUNkLDhEQUFDVix3REFBSUE7Ozs7O2tDQUNMLDhEQUFDQyx3REFBT0E7Ozs7O2tDQUNSLDhEQUFDRSwyREFBT0E7Ozs7O2tDQUNSLDhEQUFDRSw4REFBU0E7Ozs7O2tDQUNWLDhEQUFDUixrRUFBWUE7Ozs7O2tDQUNiLDhEQUFDTywwREFBUUE7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDTixzREFBTUE7Ozs7Ozs7QUFHYixDQUFDO0tBbEJ1QlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgQ2FsbFRvQWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0NhbGxUb0FjdGlvbidcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0ICBIZXJvICBmcm9tICdAL2NvbXBvbmVudHMvSGVybydcbmltcG9ydCB7IEFib3V0TWUgfSBmcm9tICdAL2NvbXBvbmVudHMvQWJvdXRNZSdcbmltcG9ydCB7IFdoYXRDYW5EbyB9IGZyb20gJ0AvY29tcG9uZW50cy9XaGF0Q2FuRG8nXG5pbXBvcnQgT3VyVGVhbSBmcm9tICdAL2NvbXBvbmVudHMvT3VyVGVhbSdcbmltcG9ydCB7IENvbnRhY3RzIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhY3RzJ1xuaW1wb3J0IFBhcmNlcmllcyBmcm9tICdAL2NvbXBvbmVudHMvUGFyY2VyaWVzJ1xuaW1wb3J0IEZBUXMgZnJvbSAnQC9jb21wb25lbnRzL0ZBUXMnXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+REkgR2FiaW5ldGUgZGUgVGVyYXBpYSBkYSBGYWxhPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0ncHJpbWFyeUJhY2snPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8QWJvdXRNZSAvPlxuICAgICAgICA8T3VyVGVhbSAvPlxuICAgICAgICA8UGFyY2VyaWVzIC8+XG4gICAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICAgICAgPENvbnRhY3RzIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQ2FsbFRvQWN0aW9uIiwiRm9vdGVyIiwiSGVhZGVyIiwiSGVybyIsIkFib3V0TWUiLCJXaGF0Q2FuRG8iLCJPdXJUZWFtIiwiQ29udGFjdHMiLCJQYXJjZXJpZXMiLCJGQVFzIiwiSG9tZSIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});