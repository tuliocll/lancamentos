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
exports.id = "pages/api/services";
exports.ids = ["pages/api/services"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\n\nif (false) {} else {\n  //@ts-ignore\n  if (!global.prisma) {\n    //@ts-ignore\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  } //@ts-ignore\n\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMO0FBQ0EsTUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0QsR0FMSSxDQU1MOzs7QUFDQUMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL2xpYi9wcmlzbWEudHM/ZDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIC8vQHRzLWlnbm9yZVxuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIC8vQHRzLWlnbm9yZVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/services/index.ts":
/*!*************************************!*\
  !*** ./pages/api/services/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleServices)\n/* harmony export */ });\n/* harmony import */ var _services_api_modules_services_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/modules/services/create */ \"./services/api/modules/services/create.ts\");\n/* harmony import */ var _services_api_modules_services_listAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/modules/services/listAll */ \"./services/api/modules/services/listAll.ts\");\n\n\nasync function handleServices(req, res) {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      {\n        try {\n          const all = await (0,_services_api_modules_services_listAll__WEBPACK_IMPORTED_MODULE_1__.default)();\n          return res.status(200).json({\n            success: true,\n            content: all\n          });\n        } catch (err) {\n          return res.status(500).json({\n            success: false,\n            error: \"Não foi possível concluir\"\n          });\n        }\n      }\n\n    case \"POST\":\n      {\n        const {\n          name\n        } = req.body;\n        const created = await (0,_services_api_modules_services_create__WEBPACK_IMPORTED_MODULE_0__.default)({\n          name\n        });\n\n        if (created) {\n          return res.status(200).json({\n            success: true\n          });\n        } else {\n          return res.status(500).json({\n            success: false,\n            error: \"Não foi possível inserir o registro\"\n          });\n        }\n      }\n\n    default:\n      {\n        res.setHeader(\"Allow\", [\"GET\", \"POST\"]);\n        return res.status(405).json({\n          success: false,\n          message: `Método ${method} não permitido`\n        });\n      }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VydmljZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFDQTtBQUVlLGVBQWVFLGNBQWYsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBYUYsR0FBbkI7O0FBRUEsVUFBUUUsTUFBUjtBQUNFLFNBQUssS0FBTDtBQUFZO0FBQ1YsWUFBSTtBQUNGLGdCQUFNQyxHQUFHLEdBQUcsTUFBTUwsK0VBQU8sRUFBekI7QUFFQSxpQkFBT0csR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsWUFBQUEsT0FBTyxFQUFFLElBQVg7QUFBaUJDLFlBQUFBLE9BQU8sRUFBRUo7QUFBMUIsV0FBckIsQ0FBUDtBQUNELFNBSkQsQ0FJRSxPQUFPSyxHQUFQLEVBQVk7QUFDWixpQkFBT1AsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLFlBQUFBLE9BQU8sRUFBRSxLQURpQjtBQUUxQkcsWUFBQUEsS0FBSyxFQUFFO0FBRm1CLFdBQXJCLENBQVA7QUFJRDtBQUNGOztBQUVELFNBQUssTUFBTDtBQUFhO0FBQ1gsY0FBTTtBQUFFQyxVQUFBQTtBQUFGLFlBQVdWLEdBQUcsQ0FBQ1csSUFBckI7QUFFQSxjQUFNQyxPQUFPLEdBQUcsTUFBTWYsOEVBQU0sQ0FBQztBQUMzQmEsVUFBQUE7QUFEMkIsU0FBRCxDQUE1Qjs7QUFJQSxZQUFJRSxPQUFKLEVBQWE7QUFDWCxpQkFBT1gsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FBckIsQ0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPTCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkMsWUFBQUEsT0FBTyxFQUFFLEtBRGlCO0FBRTFCRyxZQUFBQSxLQUFLLEVBQUU7QUFGbUIsV0FBckIsQ0FBUDtBQUlEO0FBQ0Y7O0FBQ0Q7QUFBUztBQUNQUixRQUFBQSxHQUFHLENBQUNZLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBdkI7QUFDQSxlQUFPWixHQUFHLENBQ1BHLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxVQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQlEsVUFBQUEsT0FBTyxFQUFHLFVBQVNaLE1BQU87QUFBNUMsU0FGRCxDQUFQO0FBR0Q7QUFuQ0g7QUFxQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL3BhZ2VzL2FwaS9zZXJ2aWNlcy9pbmRleC50cz9mOThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9tb2R1bGVzL3NlcnZpY2VzL2NyZWF0ZVwiO1xuaW1wb3J0IGxpc3RBbGwgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9tb2R1bGVzL3NlcnZpY2VzL2xpc3RBbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VydmljZXMoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjoge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsID0gYXdhaXQgbGlzdEFsbCgpO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGNvbnRlbnQ6IGFsbCB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBcIk7Do28gZm9pIHBvc3PDrXZlbCBjb25jbHVpclwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIFwiUE9TVFwiOiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xuXG4gICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgY3JlYXRlKHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogXCJOw6NvIGZvaSBwb3Nzw612ZWwgaW5zZXJpciBvIHJlZ2lzdHJvXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiR0VUXCIsIFwiUE9TVFwiXSk7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgTcOpdG9kbyAke21ldGhvZH0gbsOjbyBwZXJtaXRpZG9gIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsImxpc3RBbGwiLCJoYW5kbGVTZXJ2aWNlcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFsbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiY29udGVudCIsImVyciIsImVycm9yIiwibmFtZSIsImJvZHkiLCJjcmVhdGVkIiwic2V0SGVhZGVyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/services/index.ts\n");

/***/ }),

/***/ "./services/api/modules/services/create.ts":
/*!*************************************************!*\
  !*** ./services/api/modules/services/create.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createService)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function createService({\n  name\n}) {\n  try {\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.services.create({\n      data: {\n        name\n      }\n    });\n    return true;\n  } catch (err) {\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9zZXJ2aWNlcy9jcmVhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQU9lLGVBQWVDLGFBQWYsQ0FBNkI7QUFBRUMsRUFBQUE7QUFBRixDQUE3QixFQUFxRDtBQUNsRSxNQUFJO0FBQ0YsVUFBTUYsZ0VBQUEsQ0FBdUI7QUFDM0JLLE1BQUFBLElBQUksRUFBRTtBQUNKSCxRQUFBQTtBQURJO0FBRHFCLEtBQXZCLENBQU47QUFNQSxXQUFPLElBQVA7QUFDRCxHQVJELENBUUUsT0FBT0ksR0FBUCxFQUFZO0FBQ1osV0FBTyxLQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmNhbWVudG9zLy4vc2VydmljZXMvYXBpL21vZHVsZXMvc2VydmljZXMvY3JlYXRlLnRzPzllZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG50eXBlIFNlcnZpY2VzVHlwZSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2UoeyBuYW1lIH06IFNlcnZpY2VzVHlwZSkge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5zZXJ2aWNlcy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJjcmVhdGVTZXJ2aWNlIiwibmFtZSIsInNlcnZpY2VzIiwiY3JlYXRlIiwiZGF0YSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api/modules/services/create.ts\n");

/***/ }),

/***/ "./services/api/modules/services/listAll.ts":
/*!**************************************************!*\
  !*** ./services/api/modules/services/listAll.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listAllService)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function listAllService() {\n  try {\n    const allServices = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.services.findMany();\n    return allServices;\n  } catch (err) {\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9zZXJ2aWNlcy9saXN0QWxsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxlQUFlQyxjQUFmLEdBQWdDO0FBQzdDLE1BQUk7QUFDRixVQUFNQyxXQUFXLEdBQUcsTUFBTUYsa0VBQUEsRUFBMUI7QUFFQSxXQUFPRSxXQUFQO0FBQ0QsR0FKRCxDQUlFLE9BQU9HLEdBQVAsRUFBWTtBQUNaLFdBQU8sS0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL3NlcnZpY2VzL2FwaS9tb2R1bGVzL3NlcnZpY2VzL2xpc3RBbGwudHM/ZTg5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxpc3RBbGxTZXJ2aWNlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGFsbFNlcnZpY2VzID0gYXdhaXQgcHJpc21hLnNlcnZpY2VzLmZpbmRNYW55KCk7XG5cbiAgICByZXR1cm4gYWxsU2VydmljZXM7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImxpc3RBbGxTZXJ2aWNlIiwiYWxsU2VydmljZXMiLCJzZXJ2aWNlcyIsImZpbmRNYW55IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api/modules/services/listAll.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/services/index.ts"));
module.exports = __webpack_exports__;

})();