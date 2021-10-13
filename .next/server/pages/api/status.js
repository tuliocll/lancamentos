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
exports.id = "pages/api/status";
exports.ids = ["pages/api/status"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\n\nif (false) {} else {\n  //@ts-ignore\n  if (!global.prisma) {\n    //@ts-ignore\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  } //@ts-ignore\n\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMO0FBQ0EsTUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0QsR0FMSSxDQU1MOzs7QUFDQUMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL2xpYi9wcmlzbWEudHM/ZDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIC8vQHRzLWlnbm9yZVxuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIC8vQHRzLWlnbm9yZVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/status/index.ts":
/*!***********************************!*\
  !*** ./pages/api/status/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleStatus)\n/* harmony export */ });\n/* harmony import */ var _services_api_modules_status_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/modules/status/create */ \"./services/api/modules/status/create.ts\");\n/* harmony import */ var _services_api_modules_status_listAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/modules/status/listAll */ \"./services/api/modules/status/listAll.ts\");\n\n\nasync function handleStatus(req, res) {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      {\n        try {\n          const all = await (0,_services_api_modules_status_listAll__WEBPACK_IMPORTED_MODULE_1__.default)();\n          return res.status(200).json({\n            success: true,\n            content: all\n          });\n        } catch (err) {\n          return res.status(500).json({\n            success: false,\n            error: \"Não foi possível concluir\"\n          });\n        }\n      }\n\n    case \"POST\":\n      {\n        const {\n          name\n        } = req.body;\n        const created = await (0,_services_api_modules_status_create__WEBPACK_IMPORTED_MODULE_0__.default)({\n          name\n        });\n\n        if (created) {\n          return res.status(200).json({\n            success: true\n          });\n        } else {\n          return res.status(500).json({\n            success: false,\n            error: \"Não foi possível inserir o registro\"\n          });\n        }\n      }\n\n    default:\n      {\n        res.setHeader(\"Allow\", [\"GET\", \"POST\"]);\n        return res.status(405).json({\n          success: false,\n          message: `Método ${method} não permitido`\n        });\n      }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3RhdHVzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQ0E7QUFFZSxlQUFlRSxZQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBQ0EsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWFGLEdBQW5COztBQUVBLFVBQVFFLE1BQVI7QUFDRSxTQUFLLEtBQUw7QUFBWTtBQUNWLFlBQUk7QUFDRixnQkFBTUMsR0FBRyxHQUFHLE1BQU1MLDZFQUFPLEVBQXpCO0FBRUEsaUJBQU9HLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFlBQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCQyxZQUFBQSxPQUFPLEVBQUVKO0FBQTFCLFdBQXJCLENBQVA7QUFDRCxTQUpELENBSUUsT0FBT0ssR0FBUCxFQUFZO0FBQ1osaUJBQU9QLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxZQUFBQSxPQUFPLEVBQUUsS0FEaUI7QUFFMUJHLFlBQUFBLEtBQUssRUFBRTtBQUZtQixXQUFyQixDQUFQO0FBSUQ7QUFDRjs7QUFFRCxTQUFLLE1BQUw7QUFBYTtBQUNYLGNBQU07QUFBRUMsVUFBQUE7QUFBRixZQUFXVixHQUFHLENBQUNXLElBQXJCO0FBRUEsY0FBTUMsT0FBTyxHQUFHLE1BQU1mLDRFQUFNLENBQUM7QUFDM0JhLFVBQUFBO0FBRDJCLFNBQUQsQ0FBNUI7O0FBSUEsWUFBSUUsT0FBSixFQUFhO0FBQ1gsaUJBQU9YLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFlBQUFBLE9BQU8sRUFBRTtBQUFYLFdBQXJCLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBT0wsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLFlBQUFBLE9BQU8sRUFBRSxLQURpQjtBQUUxQkcsWUFBQUEsS0FBSyxFQUFFO0FBRm1CLFdBQXJCLENBQVA7QUFJRDtBQUNGOztBQUNEO0FBQVM7QUFDUFIsUUFBQUEsR0FBRyxDQUFDWSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsRUFBUSxNQUFSLENBQXZCO0FBQ0EsZUFBT1osR0FBRyxDQUNQRyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsVUFBQUEsT0FBTyxFQUFFLEtBQVg7QUFBa0JRLFVBQUFBLE9BQU8sRUFBRyxVQUFTWixNQUFPO0FBQTVDLFNBRkQsQ0FBUDtBQUdEO0FBbkNIO0FBcUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuY2FtZW50b3MvLi9wYWdlcy9hcGkvc3RhdHVzL2luZGV4LnRzP2ExZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGNyZWF0ZSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpL21vZHVsZXMvc3RhdHVzL2NyZWF0ZVwiO1xuaW1wb3J0IGxpc3RBbGwgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9tb2R1bGVzL3N0YXR1cy9saXN0QWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN0YXR1cyhcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGwgPSBhd2FpdCBsaXN0QWxsKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogYWxsIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IFwiTsOjbyBmb2kgcG9zc8OtdmVsIGNvbmNsdWlyXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgXCJQT1NUXCI6IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcmVxLmJvZHk7XG5cbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBjcmVhdGUoe1xuICAgICAgICBuYW1lLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBcIk7Do28gZm9pIHBvc3PDrXZlbCBpbnNlcmlyIG8gcmVnaXN0cm9cIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJHRVRcIiwgXCJQT1NUXCJdKTtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBNw6l0b2RvICR7bWV0aG9kfSBuw6NvIHBlcm1pdGlkb2AgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwibGlzdEFsbCIsImhhbmRsZVN0YXR1cyIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFsbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiY29udGVudCIsImVyciIsImVycm9yIiwibmFtZSIsImJvZHkiLCJjcmVhdGVkIiwic2V0SGVhZGVyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/status/index.ts\n");

/***/ }),

/***/ "./services/api/modules/status/create.ts":
/*!***********************************************!*\
  !*** ./services/api/modules/status/create.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createService)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function createService({\n  name\n}) {\n  try {\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.status.create({\n      data: {\n        name\n      }\n    });\n    return true;\n  } catch (err) {\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9zdGF0dXMvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFPZSxlQUFlQyxhQUFmLENBQTZCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBN0IsRUFBbUQ7QUFDaEUsTUFBSTtBQUNGLFVBQU1GLDhEQUFBLENBQXFCO0FBQ3pCSyxNQUFBQSxJQUFJLEVBQUU7QUFDSkgsUUFBQUE7QUFESTtBQURtQixLQUFyQixDQUFOO0FBTUEsV0FBTyxJQUFQO0FBQ0QsR0FSRCxDQVFFLE9BQU9JLEdBQVAsRUFBWTtBQUNaLFdBQU8sS0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5jYW1lbnRvcy8uL3NlcnZpY2VzL2FwaS9tb2R1bGVzL3N0YXR1cy9jcmVhdGUudHM/NzQ0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbnR5cGUgU3RhdHVzVHlwZSA9IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2UoeyBuYW1lIH06IFN0YXR1c1R5cGUpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc3RhdHVzLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImNyZWF0ZVNlcnZpY2UiLCJuYW1lIiwic3RhdHVzIiwiY3JlYXRlIiwiZGF0YSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api/modules/status/create.ts\n");

/***/ }),

/***/ "./services/api/modules/status/listAll.ts":
/*!************************************************!*\
  !*** ./services/api/modules/status/listAll.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listAllService)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function listAllService() {\n  try {\n    const allStatus = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.status.findMany();\n    return allStatus;\n  } catch (err) {\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9zdGF0dXMvbGlzdEFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRWUsZUFBZUMsY0FBZixHQUFnQztBQUM3QyxNQUFJO0FBQ0YsVUFBTUMsU0FBUyxHQUFHLE1BQU1GLGdFQUFBLEVBQXhCO0FBRUEsV0FBT0UsU0FBUDtBQUNELEdBSkQsQ0FJRSxPQUFPRyxHQUFQLEVBQVk7QUFDWixXQUFPLEtBQVA7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuY2FtZW50b3MvLi9zZXJ2aWNlcy9hcGkvbW9kdWxlcy9zdGF0dXMvbGlzdEFsbC50cz8xZTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbGlzdEFsbFNlcnZpY2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWxsU3RhdHVzID0gYXdhaXQgcHJpc21hLnN0YXR1cy5maW5kTWFueSgpO1xuXG4gICAgcmV0dXJuIGFsbFN0YXR1cztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwibGlzdEFsbFNlcnZpY2UiLCJhbGxTdGF0dXMiLCJzdGF0dXMiLCJmaW5kTWFueSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api/modules/status/listAll.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/status/index.ts"));
module.exports = __webpack_exports__;

})();