"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/main/Main.tsx":
/*!*********************************!*\
  !*** ./src/pages/main/Main.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _about_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/About */ \"./src/pages/about/About.tsx\");\n/* harmony import */ var _components_features_loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/features/loading/Loading */ \"./src/components/features/loading/Loading.tsx\");\n/* harmony import */ var _redux_slices_loadingSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/loadingSlice */ \"./src/redux/slices/loadingSlice.ts\");\n/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Main.module.scss */ \"./src/pages/main/Main.module.scss\");\n/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/hooks */ \"./src/redux/hooks.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // UseSelector for reading page loading state\n    const pageData = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{\n        return state.loading;\n    });\n    // Callback / dispatch and effect for setting page loading state\n    const pageLoading = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((loading)=>{\n        setTimeout(()=>{\n            dispatch((0,_redux_slices_loadingSlice__WEBPACK_IMPORTED_MODULE_4__.setLoading)(loading));\n        }, 1000);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        pageLoading(false);\n    }, [\n        pageLoading\n    ]);\n    // Spinner logic\n    const transitionLoader = pageData.isLoading ? (_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().showLoading) : (_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hideLoading);\n    const renderPage = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            \"aria-label\": \"Main Section\",\n            className: \"container-fluid\",\n            children: loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: transitionLoader,\n                onTransitionEnd: ()=>setLoader(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_features_loading_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mykds\\\\Code\\\\WhatIsWildPastry\\\\src\\\\pages\\\\main\\\\Main.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mykds\\\\Code\\\\WhatIsWildPastry\\\\src\\\\pages\\\\main\\\\Main.tsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_about_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mykds\\\\Code\\\\WhatIsWildPastry\\\\src\\\\pages\\\\main\\\\Main.tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mykds\\\\Code\\\\WhatIsWildPastry\\\\src\\\\pages\\\\main\\\\Main.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined);\n    };\n    // Error logic\n    return pageData.isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mykds\\\\Code\\\\WhatIsWildPastry\\\\src\\\\pages\\\\main\\\\Main.tsx\",\n        lineNumber: 51,\n        columnNumber: 29\n    }, undefined) : renderPage();\n};\n_s(Main, \"ivEZ6tfUCgQbdZaG2X6LejBoT0c=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Main;\n// EXPORT Main\nMain.displayName = \"WILDPASTRY | Main\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFpbi9NYWluLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUN0QjtBQUU2QjtBQUNIO0FBQ3JCO0FBQ1c7QUFDVDtBQUUxQyxNQUFNUyxPQUFpQixJQUFtQjs7SUFDeEMsTUFBTUMsV0FBV0gsNERBQWNBO0lBQy9CLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpDLDZDQUE2QztJQUM3QyxNQUFNVyxXQUFXTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUE2QjtRQUN6RCxPQUFPQSxNQUFNQyxPQUFPO0lBQ3RCO0lBRUEsZ0VBQWdFO0lBQ2hFLE1BQU1DLGNBQWNoQixrREFBV0EsQ0FBQyxDQUFDZSxVQUEyQjtRQUMxREUsV0FBVyxJQUFNO1lBQ2ZQLFNBQVNMLHNFQUFVQSxDQUFDVTtRQUN0QixHQUFHO0lBQ0wsR0FBRyxFQUFFO0lBRUxkLGdEQUFTQSxDQUFDLElBQVk7UUFDcEJlLFlBQVksS0FBSztJQUNuQixHQUFHO1FBQUNBO0tBQVk7SUFFaEIsZ0JBQWdCO0lBQ2hCLE1BQU1FLG1CQUFtQkwsU0FBU00sU0FBUyxHQUN2Q2Isc0VBQWtCLEdBQ2xCQSxzRUFBa0I7SUFFdEIsTUFBTWdCLGFBQWEsSUFBbUI7UUFDcEMscUJBQ0UsOERBQUNDO1lBQUtDLGNBQVc7WUFBZUMsV0FBVTtzQkFDdkNkLHVCQUNDLDhEQUFDZTtnQkFDQ0QsV0FBV1A7Z0JBQ1hTLGlCQUFpQixJQUFNZixVQUFVLEtBQUs7MEJBQ3RDLDRFQUFDUiw0RUFBT0E7Ozs7Ozs7OzswQ0FHViw4REFBQ0Qsb0RBQUtBOzs7O3lCQUNQOzs7Ozs7SUFHUDtJQUNBLGNBQWM7SUFDZCxPQUFPVSxTQUFTZSxPQUFPLGlCQUFHLDhEQUFDQztrQkFBSTs7Ozs7b0JBQWNQLFlBQVk7QUFDM0Q7R0ExQ01iOztRQUNhRix3REFBY0E7UUFJZEMsb0RBQVdBOzs7S0FMeEJDO0FBNENOLGNBQWM7QUFDZEEsS0FBS3FCLFdBQVcsR0FBRztBQUNuQiwrREFBZXJCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21haW4vTWFpbi50c3g/ODMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2Fib3V0L0Fib3V0JztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbG9hZGluZy9Mb2FkaW5nJztcclxuaW1wb3J0IHsgc2V0TG9hZGluZyB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy9sb2FkaW5nU2xpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFpbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vcmVkdXgvaG9va3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IE1haW46IFJlYWN0LkZDID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBVc2VTZWxlY3RvciBmb3IgcmVhZGluZyBwYWdlIGxvYWRpbmcgc3RhdGVcclxuICBjb25zdCBwYWdlRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpOiBMb2FkaW5nID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5sb2FkaW5nO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDYWxsYmFjayAvIGRpc3BhdGNoIGFuZCBlZmZlY3QgZm9yIHNldHRpbmcgcGFnZSBsb2FkaW5nIHN0YXRlXHJcbiAgY29uc3QgcGFnZUxvYWRpbmcgPSB1c2VDYWxsYmFjaygobG9hZGluZzogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcobG9hZGluZykpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk6IHZvaWQgPT4ge1xyXG4gICAgcGFnZUxvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIFtwYWdlTG9hZGluZ10pO1xyXG5cclxuICAvLyBTcGlubmVyIGxvZ2ljXHJcbiAgY29uc3QgdHJhbnNpdGlvbkxvYWRlciA9IHBhZ2VEYXRhLmlzTG9hZGluZ1xyXG4gICAgPyBzdHlsZXMuc2hvd0xvYWRpbmdcclxuICAgIDogc3R5bGVzLmhpZGVMb2FkaW5nO1xyXG5cclxuICBjb25zdCByZW5kZXJQYWdlID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtYWluIGFyaWEtbGFiZWw9J01haW4gU2VjdGlvbicgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgIHtsb2FkZXIgPyAoXHJcbiAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3RyYW5zaXRpb25Mb2FkZXJ9XHJcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZD17KCkgPT4gc2V0TG9hZGVyKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbiAgfTtcclxuICAvLyBFcnJvciBsb2dpY1xyXG4gIHJldHVybiBwYWdlRGF0YS5pc0Vycm9yID8gPGRpdj5FcnJvcjwvZGl2PiA6IHJlbmRlclBhZ2UoKTtcclxufTtcclxuXHJcbi8vIEVYUE9SVCBNYWluXHJcbk1haW4uZGlzcGxheU5hbWUgPSAnV0lMRFBBU1RSWSB8IE1haW4nO1xyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFib3V0IiwiTG9hZGluZyIsInNldExvYWRpbmciLCJzdHlsZXMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTWFpbiIsImRpc3BhdGNoIiwibG9hZGVyIiwic2V0TG9hZGVyIiwicGFnZURhdGEiLCJzdGF0ZSIsImxvYWRpbmciLCJwYWdlTG9hZGluZyIsInNldFRpbWVvdXQiLCJ0cmFuc2l0aW9uTG9hZGVyIiwiaXNMb2FkaW5nIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsInJlbmRlclBhZ2UiLCJtYWluIiwiYXJpYS1sYWJlbCIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJvblRyYW5zaXRpb25FbmQiLCJpc0Vycm9yIiwiZGl2IiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/main/Main.tsx\n"));

/***/ })

});