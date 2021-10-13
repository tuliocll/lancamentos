"use strict";
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
exports.id = "pages/api/operations";
exports.ids = ["pages/api/operations"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\n\nif (false) {} else {\n  //@ts-ignore\n  if (!global.prisma) {\n    //@ts-ignore\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  } //@ts-ignore\n\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMO0FBQ0EsTUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0QsR0FMSSxDQU1MOzs7QUFDQUMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL2xpYi9wcmlzbWEudHM/ZDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIC8vQHRzLWlnbm9yZVxuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIC8vQHRzLWlnbm9yZVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/operations/index.ts":
/*!***************************************!*\
  !*** ./pages/api/operations/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleOperation)\n/* harmony export */ });\n/* harmony import */ var _services_api_modules_operation_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/modules/operation/create */ \"./services/api/modules/operation/create.ts\");\n/* harmony import */ var _services_api_modules_operation_listAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/modules/operation/listAll */ \"./services/api/modules/operation/listAll.ts\");\n\n\nasync function handleOperation(req, res) {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      {\n        try {\n          const all = await (0,_services_api_modules_operation_listAll__WEBPACK_IMPORTED_MODULE_1__.default)();\n          return res.status(200).json({\n            success: true,\n            content: all\n          });\n        } catch (err) {\n          return res.status(500).json({\n            success: false,\n            error: \"Não foi possível concluir\"\n          });\n        }\n      }\n\n    case \"POST\":\n      {\n        const {\n          name\n        } = req.body;\n        const created = await (0,_services_api_modules_operation_create__WEBPACK_IMPORTED_MODULE_0__.default)({\n          name\n        });\n\n        if (created) {\n          return res.status(200).json({\n            success: true\n          });\n        } else {\n          return res.status(500).json({\n            success: false,\n            error: \"Não foi possível inserir o registro\"\n          });\n        }\n      }\n\n    default:\n      {\n        res.setHeader(\"Allow\", [\"GET\", \"POST\"]);\n        return res.status(405).json({\n          success: false,\n          message: `Método ${method} não permitido`\n        });\n      }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3BlcmF0aW9ucy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUNBO0FBRWUsZUFBZUUsZUFBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFhRixHQUFuQjs7QUFFQSxVQUFRRSxNQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQVk7QUFDVixZQUFJO0FBQ0YsZ0JBQU1DLEdBQUcsR0FBRyxNQUFNTCxnRkFBTyxFQUF6QjtBQUVBLGlCQUFPRyxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxZQUFBQSxPQUFPLEVBQUUsSUFBWDtBQUFpQkMsWUFBQUEsT0FBTyxFQUFFSjtBQUExQixXQUFyQixDQUFQO0FBQ0QsU0FKRCxDQUlFLE9BQU9LLEdBQVAsRUFBWTtBQUNaLGlCQUFPUCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkMsWUFBQUEsT0FBTyxFQUFFLEtBRGlCO0FBRTFCRyxZQUFBQSxLQUFLLEVBQUU7QUFGbUIsV0FBckIsQ0FBUDtBQUlEO0FBQ0Y7O0FBRUQsU0FBSyxNQUFMO0FBQWE7QUFDWCxjQUFNO0FBQUVDLFVBQUFBO0FBQUYsWUFBV1YsR0FBRyxDQUFDVyxJQUFyQjtBQUVBLGNBQU1DLE9BQU8sR0FBRyxNQUFNZiwrRUFBTSxDQUFDO0FBQzNCYSxVQUFBQTtBQUQyQixTQUFELENBQTVCOztBQUlBLFlBQUlFLE9BQUosRUFBYTtBQUNYLGlCQUFPWCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUFyQixDQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU9MLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxZQUFBQSxPQUFPLEVBQUUsS0FEaUI7QUFFMUJHLFlBQUFBLEtBQUssRUFBRTtBQUZtQixXQUFyQixDQUFQO0FBSUQ7QUFDRjs7QUFDRDtBQUFTO0FBQ1BSLFFBQUFBLEdBQUcsQ0FBQ1ksU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUF2QjtBQUNBLGVBQU9aLEdBQUcsQ0FDUEcsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCUSxVQUFBQSxPQUFPLEVBQUcsVUFBU1osTUFBTztBQUE1QyxTQUZELENBQVA7QUFHRDtBQW5DSDtBQXFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmNhbWVudG9zLy4vcGFnZXMvYXBpL29wZXJhdGlvbnMvaW5kZXgudHM/OGQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgY3JlYXRlIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9vcGVyYXRpb24vY3JlYXRlXCI7XG5pbXBvcnQgbGlzdEFsbCBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpL21vZHVsZXMvb3BlcmF0aW9uL2xpc3RBbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT3BlcmF0aW9uKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbCA9IGF3YWl0IGxpc3RBbGwoKTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBjb250ZW50OiBhbGwgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogXCJOw6NvIGZvaSBwb3Nzw612ZWwgY29uY2x1aXJcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSBcIlBPU1RcIjoge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSByZXEuYm9keTtcblxuICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGNyZWF0ZSh7XG4gICAgICAgIG5hbWUsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IFwiTsOjbyBmb2kgcG9zc8OtdmVsIGluc2VyaXIgbyByZWdpc3Ryb1wiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiLCBcIlBPU1RcIl0pO1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwNSlcbiAgICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogYE3DqXRvZG8gJHttZXRob2R9IG7Do28gcGVybWl0aWRvYCB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJsaXN0QWxsIiwiaGFuZGxlT3BlcmF0aW9uIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYWxsIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJjb250ZW50IiwiZXJyIiwiZXJyb3IiLCJuYW1lIiwiYm9keSIsImNyZWF0ZWQiLCJzZXRIZWFkZXIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/operations/index.ts\n");

/***/ }),

/***/ "./services/api/modules/operation/create.ts":
/*!**************************************************!*\
  !*** ./services/api/modules/operation/create.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createService)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function createService({\n  name\n}) {\n  try {\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.operations.create({\n      data: {\n        name\n      }\n    });\n    return true;\n  } catch (err) {\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9vcGVyYXRpb24vY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFPZSxlQUFlQyxhQUFmLENBQTZCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBN0IsRUFBc0Q7QUFDbkUsTUFBSTtBQUNGLFVBQU1GLGtFQUFBLENBQXlCO0FBQzdCSyxNQUFBQSxJQUFJLEVBQUU7QUFDSkgsUUFBQUE7QUFESTtBQUR1QixLQUF6QixDQUFOO0FBTUEsV0FBTyxJQUFQO0FBQ0QsR0FSRCxDQVFFLE9BQU9JLEdBQVAsRUFBWTtBQUNaLFdBQU8sS0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL3NlcnZpY2VzL2FwaS9tb2R1bGVzL29wZXJhdGlvbi9jcmVhdGUudHM/N2FmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbnR5cGUgT3BlcmF0aW9uVHlwZSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2UoeyBuYW1lIH06IE9wZXJhdGlvblR5cGUpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEub3BlcmF0aW9ucy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJjcmVhdGVTZXJ2aWNlIiwibmFtZSIsIm9wZXJhdGlvbnMiLCJjcmVhdGUiLCJkYXRhIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api/modules/operation/create.ts\n");

/***/ }),

/***/ "./services/api/modules/operation/listAll.ts":
/*!***************************************************!*\
  !*** ./services/api/modules/operation/listAll.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listAllService)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function listAllService() {\n  try {\n    const allOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.operations.findMany();\n    return allOperations;\n  } catch (err) {\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9vcGVyYXRpb24vbGlzdEFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRWUsZUFBZUMsY0FBZixHQUFnQztBQUM3QyxNQUFJO0FBQ0YsVUFBTUMsYUFBYSxHQUFHLE1BQU1GLG9FQUFBLEVBQTVCO0FBRUEsV0FBT0UsYUFBUDtBQUNELEdBSkQsQ0FJRSxPQUFPRyxHQUFQLEVBQVk7QUFDWixXQUFPLEtBQVA7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuY2FtZW50b3MvLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9vcGVyYXRpb24vbGlzdEFsbC50cz8wOWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbGlzdEFsbFNlcnZpY2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWxsT3BlcmF0aW9ucyA9IGF3YWl0IHByaXNtYS5vcGVyYXRpb25zLmZpbmRNYW55KCk7XG5cbiAgICByZXR1cm4gYWxsT3BlcmF0aW9ucztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwibGlzdEFsbFNlcnZpY2UiLCJhbGxPcGVyYXRpb25zIiwib3BlcmF0aW9ucyIsImZpbmRNYW55IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api/modules/operation/listAll.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/operations/index.ts"));
module.exports = __webpack_exports__;

})();