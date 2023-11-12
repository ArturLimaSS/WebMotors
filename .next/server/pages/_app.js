/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/Constants/api.js":
/*!******************************!*\
  !*** ./src/Constants/api.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst baseUrl = \"http://127.0.0.1:8000/api\";\nconst endpoint = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: baseUrl\n});\nconst api = {\n    options: ()=>{\n        return endpoint.get(\"/options\");\n    },\n    ofertas: ()=>{\n        return endpoint.get(\"/ofertas\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29uc3RhbnRzL2FwaS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVO0FBRWhCLE1BQU1DLFdBQVdGLG9EQUFZLENBQUM7SUFDMUJJLFNBQVNIO0FBQ2I7QUFFQSxNQUFNSSxNQUFNO0lBQ1JDLFNBQVM7UUFDTCxPQUFPSixTQUFTSyxHQUFHLENBQUM7SUFDeEI7SUFDQUMsU0FBUztRQUNMLE9BQU9OLFNBQVNLLEdBQUcsQ0FBQztJQUN4QjtBQUNKO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db25zdGFudHMvYXBpLmpzPzQ2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpXCI7XG5cbmNvbnN0IGVuZHBvaW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBiYXNlVXJsXG59KVxuXG5jb25zdCBhcGkgPSB7XG4gICAgb3B0aW9uczogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5kcG9pbnQuZ2V0KCcvb3B0aW9ucycpXG4gICAgfSxcbiAgICBvZmVydGFzOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludC5nZXQoJy9vZmVydGFzJylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTsiXSwibmFtZXMiOlsiYXhpb3MiLCJiYXNlVXJsIiwiZW5kcG9pbnQiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBpIiwib3B0aW9ucyIsImdldCIsIm9mZXJ0YXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Constants/api.js\n");

/***/ }),

/***/ "./src/Context/OfertasContext.jsx":
/*!****************************************!*\
  !*** ./src/Context/OfertasContext.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OfertasContext: () => (/* binding */ OfertasContext),\n/* harmony export */   OfertasProvider: () => (/* binding */ OfertasProvider),\n/* harmony export */   useOfertas: () => (/* binding */ useOfertas)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Constants/api */ \"./src/Constants/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Constants_api__WEBPACK_IMPORTED_MODULE_2__]);\n_Constants_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst OfertasContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst OfertasProvider = ({ children })=>{\n    const [ofertas, setOfertas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const data = async ()=>{\n        try {\n            const response = await _Constants_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ofertas();\n            if (response.data) {\n                setOfertas(response.data);\n            }\n        } catch (error) {\n            console.error(\"Error fetching options:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        data();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OfertasContext.Provider, {\n        value: {\n            ofertas\n        },\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/Context/OfertasContext.jsx\",\n            lineNumber: 30,\n            columnNumber: 27\n        }, undefined) : children\n    }, void 0, false, {\n        fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/Context/OfertasContext.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\nconst useOfertas = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OfertasContext);\n    if (!context) {\n        throw new Error(\"Error\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC9PZmVydGFzQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQzVDO0FBRTNCLE1BQU1NLCtCQUFpQkwsb0RBQWFBLEdBQUc7QUFFdkMsTUFBTU0sa0JBQWtCLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBRXhDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSxPQUFPO1FBQ1QsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTVQsOERBQVc7WUFDbEMsSUFBSVMsU0FBU0QsSUFBSSxFQUFFO2dCQUNmSCxXQUFXSSxTQUFTRCxJQUFJO1lBQzVCO1FBQ0osRUFBRSxPQUFPRSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQzdDLFNBQVU7WUFDTkgsYUFBYTtRQUNqQjtJQUNKO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ05TO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNQLGVBQWVXLFFBQVE7UUFBQ0MsT0FBTztZQUFFVDtRQUFRO2tCQUNyQ0UsMEJBQWEsOERBQUNRO3NCQUFJOzs7Ozt3QkFBd0JYOzs7Ozs7QUFHdkQsRUFBQztBQUVNLE1BQU1ZLGFBQWE7SUFDdEIsTUFBTUMsVUFBVW5CLGlEQUFVQSxDQUFDSTtJQUUzQixJQUFJLENBQUNlLFNBQVM7UUFDVixNQUFNLElBQUlDLE1BQU07SUFDcEI7SUFFQSxPQUFPRDtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db250ZXh0L09mZXJ0YXNDb250ZXh0LmpzeD84NzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXBpIGZyb20gXCJAL0NvbnN0YW50cy9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IE9mZXJ0YXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgT2ZlcnRhc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgW29mZXJ0YXMsIHNldE9mZXJ0YXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkub2ZlcnRhcygpXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHNldE9mZXJ0YXMocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvcHRpb25zOlwiLCBlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8T2ZlcnRhc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb2ZlcnRhcyB9fT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoPGRpdj5DYXJyZWdhbmRvLi4uPC9kaXY+KSA6IChjaGlsZHJlbil9XG4gICAgICAgIDwvT2ZlcnRhc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlT2ZlcnRhcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChPZmVydGFzQ29udGV4dClcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFwaSIsIk9mZXJ0YXNDb250ZXh0IiwiT2ZlcnRhc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJvZmVydGFzIiwic2V0T2ZlcnRhcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRhdGEiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJ1c2VPZmVydGFzIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Context/OfertasContext.jsx\n");

/***/ }),

/***/ "./src/Context/OptionsContext.js":
/*!***************************************!*\
  !*** ./src/Context/OptionsContext.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OptionsProvider: () => (/* binding */ OptionsProvider),\n/* harmony export */   useOptions: () => (/* binding */ useOptions)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Constants/api */ \"./src/Constants/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Constants_api__WEBPACK_IMPORTED_MODULE_2__]);\n_Constants_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst OptionsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst OptionsProvider = ({ children })=>{\n    const [options, setOptionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getOptions = async ()=>{\n        try {\n            const response = await _Constants_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].options();\n            if (response.data) {\n                setOptionData(response.data);\n            }\n        } catch (error) {\n            console.error(\"Error fetching options:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OptionsContext.Provider, {\n        value: {\n            options,\n            isLoading\n        },\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Carregando...\"\n        }, void 0, false, {\n            fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/Context/OptionsContext.js\",\n            lineNumber: 34,\n            columnNumber: 27\n        }, undefined) : children\n    }, void 0, false, {\n        fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/Context/OptionsContext.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\nconst useOptions = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OptionsContext);\n    if (!context) {\n        throw new Error(\"useOptions deve ser usado dentro do provider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC9PcHRpb25zQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNyQztBQUlsQyxNQUFNSywrQkFBaUJMLG9EQUFhQTtBQUU3QixNQUFNTSxrQkFBa0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDeEMsTUFBTSxDQUFDQyxTQUFTQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDNUMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRzNDLE1BQU1VLGFBQWE7UUFDZixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNVCw4REFBVztZQUNsQyxJQUFJUyxTQUFTQyxJQUFJLEVBQUU7Z0JBQ2ZMLGNBQWNJLFNBQVNDLElBQUk7WUFDL0I7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDN0MsU0FBVTtZQUNOSixhQUFhO1FBQ2pCO0lBQ0o7SUFJQVIsZ0RBQVNBLENBQUM7UUFDTlM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1AsZUFBZVksUUFBUTtRQUFDQyxPQUFPO1lBQUVWO1lBQVNFO1FBQVU7a0JBQ2hEQSwwQkFBYSw4REFBQ1M7c0JBQUk7Ozs7O3dCQUF3Qlo7Ozs7OztBQUd2RCxFQUFDO0FBRU0sTUFBTWEsYUFBYTtJQUN0QixNQUFNQyxVQUFVcEIsaURBQVVBLENBQUNJO0lBRTNCLElBQUksQ0FBQ2dCLFNBQVM7UUFDVixNQUFNLElBQUlDLE1BQU07SUFDcEI7SUFFQSxPQUFPRDtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db250ZXh0L09wdGlvbnNDb250ZXh0LmpzPzY0YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiQC9Db25zdGFudHMvYXBpXCI7XG5cblxuXG5jb25zdCBPcHRpb25zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IE9wdGlvbnNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uRGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cblxuICAgIGNvbnN0IGdldE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5vcHRpb25zKCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHNldE9wdGlvbkRhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb3B0aW9uczpcIiwgZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0T3B0aW9ucygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxPcHRpb25zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcHRpb25zLCBpc0xvYWRpbmcgfX0+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKDxkaXY+Q2FycmVnYW5kby4uLjwvZGl2PikgOiAoY2hpbGRyZW4pfVxuICAgICAgICA8L09wdGlvbnNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoT3B0aW9uc0NvbnRleHQpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlT3B0aW9ucyBkZXZlIHNlciB1c2FkbyBkZW50cm8gZG8gcHJvdmlkZXInKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiT3B0aW9uc0NvbnRleHQiLCJPcHRpb25zUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm9wdGlvbnMiLCJzZXRPcHRpb25EYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZ2V0T3B0aW9ucyIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJ1c2VPcHRpb25zIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Context/OptionsContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DropDown_DropDown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DropDown/DropDown.css */ \"./src/components/DropDown/DropDown.css\");\n/* harmony import */ var _components_DropDown_DropDown_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_DropDown_DropDown_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context_OptionsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Context/OptionsContext */ \"./src/Context/OptionsContext.js\");\n/* harmony import */ var _Context_OfertasContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Context/OfertasContext */ \"./src/Context/OfertasContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Context_OptionsContext__WEBPACK_IMPORTED_MODULE_3__, _Context_OfertasContext__WEBPACK_IMPORTED_MODULE_4__]);\n([_Context_OptionsContext__WEBPACK_IMPORTED_MODULE_3__, _Context_OfertasContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_OfertasContext__WEBPACK_IMPORTED_MODULE_4__.OfertasProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_OptionsContext__WEBPACK_IMPORTED_MODULE_3__.OptionsProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/artur/\\xc1rea de Trabalho/Documentos/Estudos/WebMotors/WebMotors/src/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2U7QUFDYztBQUNBO0FBRzVDLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILG9FQUFlQTtrQkFDZCw0RUFBQ0Qsb0VBQWVBO3NCQUNkLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9Ecm9wRG93bi9Ecm9wRG93bi5jc3NcIjtcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJ0AvQ29udGV4dC9PcHRpb25zQ29udGV4dCc7XG5pbXBvcnQgeyBPZmVydGFzUHJvdmlkZXIgfSBmcm9tICdAL0NvbnRleHQvT2ZlcnRhc0NvbnRleHQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8T2ZlcnRhc1Byb3ZpZGVyPlxuICAgICAgPE9wdGlvbnNQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9PcHRpb25zUHJvdmlkZXI+XG4gICAgPC9PZmVydGFzUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJPcHRpb25zUHJvdmlkZXIiLCJPZmVydGFzUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/components/DropDown/DropDown.css":
/*!**********************************************!*\
  !*** ./src/components/DropDown/DropDown.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();