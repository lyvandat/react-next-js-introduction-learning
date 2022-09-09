webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\web developer\\Theory\\React source\\react-complete-guide-code-23-nextjs-introduction\\react-complete-guide-code-23-nextjs-introduction\\code\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var MeetupDetails = function MeetupDetails(props) {
  _s();

  var route = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var itemId = route.query.meetupId;
  console.log(itemId); // fetching data using id
  // ...

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.meetupItem.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meetupItem.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: props.meetupItem.id,
      title: props.meetupItem.title,
      image: props.meetupItem.image,
      address: props.meetupItem.address,
      description: props.meetupItem.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(MeetupDetails, "JD5qVJBo0MNDbUb5oI+DMKChels=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = MeetupDetails;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJyb3V0ZSIsInVzZVJvdXRlciIsIml0ZW1JZCIsInF1ZXJ5IiwibWVldHVwSWQiLCJjb25zb2xlIiwibG9nIiwibWVldHVwSXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpZCIsImltYWdlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdEQ7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDL0IsTUFBTUMsS0FBSyxHQUFHQyw2REFBUyxFQUF2QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLFFBQTNCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBSCtCLENBSy9CO0FBQ0E7O0FBQ0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRSCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFVCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLHdFQUFEO0FBQ0UsUUFBRSxFQUFFVixLQUFLLENBQUNRLFVBQU4sQ0FBaUJHLEVBRHZCO0FBRUUsV0FBSyxFQUFFWCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJDLEtBRjFCO0FBR0UsV0FBSyxFQUFFVCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJJLEtBSDFCO0FBSUUsYUFBTyxFQUFFWixLQUFLLENBQUNRLFVBQU4sQ0FBaUJLLE9BSjVCO0FBS0UsaUJBQVcsRUFBRWIsS0FBSyxDQUFDUSxVQUFOLENBQWlCRTtBQUxoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXRCRDs7R0FBTVgsYTtVQUNVRyxxRDs7O0tBRFZILGE7O0FBaUdTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLmUwYTFhMThiNjI5MjY4NDQyMGY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpdGVtSWQgPSByb3V0ZS5xdWVyeS5tZWV0dXBJZDtcclxuICBjb25zb2xlLmxvZyhpdGVtSWQpO1xyXG5cclxuICAvLyBmZXRjaGluZyBkYXRhIHVzaW5nIGlkXHJcbiAgLy8gLi4uXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBJdGVtLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwSXRlbS5kZXNjcmlwdGlvbn0+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICBpZD17cHJvcHMubWVldHVwSXRlbS5pZH1cclxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwSXRlbS50aXRsZX1cclxuICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwSXRlbS5pbWFnZX1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBJdGVtLmFkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cEl0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgID48L01lZXR1cERldGFpbD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2x5dmFuZGF0OjA5MDk5MjcyMTJhQUBjbHVzdGVyMC5sc2cycXVmLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIC8vIGZpcnN0IHt9OiBmaWx0ZXIgY3JpdGVyaWEuIGV4OiB7dGl0bGU6IFwiZmlyc3QgbWVldCB1cFwifSAodGltIHRoYW5nIGNvIHRpdGxlIGxhIGZpcnN0IG1lZXQgdXApXHJcbiAgLy8gc2Vjb25kIHt9OiB0aHVvYyB0aW5oIGxheSByYVxyXG4gIGNvbnN0IG1lZXR1cElkTGlzdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gYWxsIG5lZWRlZCBwYWdlcyBhcmUgY292ZXJlZCAoZGlmZmVyZW50IHVybCB3aWxsIGJlIDQwNCAtIG5vdCBmb3VuZClcclxuICAgIHBhdGhzOiBtZWV0dXBJZExpc3QubWFwKChpZEl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG1lZXR1cElkOiBpZEl0ZW0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gICAgLy8gcGF0aHM6IFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHBhcmFtczoge1xyXG4gICAgLy8gICAgICAgbWVldHVwSWQ6IFwibTFcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgcGFyYW1zOiB7XHJcbiAgICAvLyAgICAgICBtZWV0dXBJZDogXCJtMlwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgIG1lZXR1cElkOiBcIm0zXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIF0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBnZXQgbWVldHVwIGlkLlxyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgY29uc29sZS5sb2cobWVldHVwSWQpO1xyXG5cclxuICAvLyBnZXR0aW5nIHNpbmdsZSBtZWV0dXAgZnJvbSBtb25nbyBkYi5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2x5dmFuZGF0OjA5MDk5MjcyMTJhQUBjbHVzdGVyMC5sc2cycXVmLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cEl0ZW0gPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhtZWV0dXBJdGVtKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwSXRlbToge1xyXG4gICAgICAgIGlkOiBtZWV0dXBJdGVtLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBtZWV0dXBJdGVtLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cEl0ZW0uYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwSXRlbS5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWVldHVwSXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMDAwLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=