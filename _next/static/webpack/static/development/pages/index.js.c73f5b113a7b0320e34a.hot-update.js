webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/PlayerManager */ \"./controllers/PlayerManager.js\");\n/* harmony import */ var _controllers_BusinessManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/BusinessManager */ \"./controllers/BusinessManager.js\");\n/* harmony import */ var _components_OuterContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OuterContainer */ \"./components/OuterContainer/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar/index.js\");\n/* harmony import */ var _components_BusinessesList___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BusinessesList/ */ \"./components/BusinessesList/index.js\");\n/* harmony import */ var _elements_OwnedBusiness__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/OwnedBusiness */ \"./elements/OwnedBusiness/index.js\");\n/* harmony import */ var _elements_WannabeBusiness__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/WannabeBusiness */ \"./elements/WannabeBusiness/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pierfrancescodorsogna/Desktop/adventure-cap_italy_st/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n/* REACT */\n\n\n/* CONTROLLERS */\n\n\n\n/* COMPONENTS */\n\n\n\n\n/* ELEMENTS */\n\n\n\n/**\n * React Home component\n * @returns {*}\n * @constructor\n */\n\nvar Home = function Home() {\n  _s();\n\n  // quick state app, TODO: use reducer or redux\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      player = _useState[0],\n      setPlayer = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      money = _useState2[0],\n      setMoney = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      ownBusinesses = _useState3[0],\n      setOwnBusinesses = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      wannabeBusiness = _useState4[0],\n      setWannabeBusiness = _useState4[1]; // helper to update react state\n\n\n  var updatePlayerInfoInsideReactState = function updatePlayerInfoInsideReactState() {\n    setMoney(Object(_controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__[\"getMoney\"])());\n    setOwnBusinesses(Object(_controllers_BusinessManager__WEBPACK_IMPORTED_MODULE_4__[\"getBoughtBusinessesList\"])());\n    setWannabeBusiness(Object(_controllers_BusinessManager__WEBPACK_IMPORTED_MODULE_4__[\"getAvailableBusinessList\"])());\n  }; // helpers to bind action from UI to controller\n\n\n  var actionBuyBusiness = function actionBuyBusiness(business) {\n    var result = Object(_controllers_BusinessManager__WEBPACK_IMPORTED_MODULE_4__[\"buyBusinesses\"])(business);\n    if (result) updatePlayerInfoInsideReactState();\n  };\n\n  var actionCollectMoney = function actionCollectMoney(newMoney, businessId) {\n    Object(_controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__[\"updateMoney\"])(newMoney, businessId);\n    updatePlayerInfoInsideReactState();\n  };\n\n  var actionBuyUpgrade = function actionBuyUpgrade(businessId) {\n    Object(_controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__[\"updateBusinessLevel\"])(businessId);\n    updatePlayerInfoInsideReactState();\n  };\n\n  var actionBuyManager = function actionBuyManager(businessId) {\n    var result = Object(_controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__[\"updateBusinessManager\"])(businessId);\n    updatePlayerInfoInsideReactState();\n    return result;\n  }; // execute this once app is mounted and window. is available\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPlayer(Object(_controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__[\"initPlayer\"])());\n    updatePlayerInfoInsideReactState();\n  }, []);\n  return __jsx(\"div\", {\n    className: \"jsx-345400554\" + \" \" + \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 10\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-345400554\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, \"Adventure Cap-Italy-St\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    className: \"jsx-345400554\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\",\n    rel: \"stylesheet\",\n    className: \"jsx-345400554\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  })), __jsx(_components_OuterContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    name: player && player.name,\n    profilePic: \"/static/images/profile/profile.png\",\n    money: money,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }), __jsx(_components_BusinessesList___WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, ownBusinesses && ownBusinesses.map(function (elem) {\n    // TODO: refactor this\n    return __jsx(_elements_OwnedBusiness__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      id: elem.ID,\n      name: elem.SCREEN_NAME,\n      level: elem.CURRENT_LEVEL,\n      hasManager: elem.HAS_MANAGER,\n      revenue: elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL,\n      collectMoney: function collectMoney() {\n        return actionCollectMoney(elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL, elem.ID);\n      },\n      secondsForGoodGeneration: elem.SECONDS_TO_DELIVER_GOOD,\n      managerCost: elem.MANAGER_COST,\n      upgradeCost: (elem.CURRENT_LEVEL + 1) * elem.INITIAL_COST,\n      upgradeBusiness: function upgradeBusiness() {\n        return actionBuyUpgrade(elem.ID);\n      },\n      buyManager: function buyManager() {\n        return actionBuyManager(elem.ID);\n      },\n      updateOnGoingTransaction: function updateOnGoingTransaction() {\n        return Object(_controllers_PlayerManager__WEBPACK_IMPORTED_MODULE_3__[\"updateOnGoingTransaction\"])(elem.ID);\n      },\n      img: \"/static/images/businesses/\".concat(elem.ID, \"/main.png\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 18\n      }\n    });\n  }), wannabeBusiness && wannabeBusiness.map(function (elem) {\n    return __jsx(_elements_WannabeBusiness__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      business: elem,\n      img: \"/static/images/businesses/\".concat(elem.ID, \"/main.png\"),\n      buyBusinessAction: function buyBusinessAction() {\n        return actionBuyBusiness(elem);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 18\n      }\n    });\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"345400554\",\n    __self: _this\n  }, \"body{margin:0;font-family:'Dancing Script',cursive;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVyZnJhbmNlc2NvZG9yc29nbmEvRGVza3RvcC9hZHZlbnR1cmUtY2FwX2l0YWx5X3N0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHdUIsQUFHb0IsU0FDNkIscUNBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9waWVyZnJhbmNlc2NvZG9yc29nbmEvRGVza3RvcC9hZHZlbnR1cmUtY2FwX2l0YWx5X3N0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUkVBQ1QgKi9cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDT05UUk9MTEVSUyAqL1xuaW1wb3J0IHtcbiAgZ2V0TW9uZXksXG4gIGluaXRQbGF5ZXIsXG4gIHVwZGF0ZUJ1c2luZXNzTGV2ZWwsXG4gIHVwZGF0ZUJ1c2luZXNzTWFuYWdlcixcbiAgdXBkYXRlTW9uZXksXG4gIHVwZGF0ZU9uR29pbmdUcmFuc2FjdGlvblxufSBmcm9tICcuLi9jb250cm9sbGVycy9QbGF5ZXJNYW5hZ2VyJztcblxuaW1wb3J0IHsgZ2V0Qm91Z2h0QnVzaW5lc3Nlc0xpc3QsIGdldEF2YWlsYWJsZUJ1c2luZXNzTGlzdCwgYnV5QnVzaW5lc3NlcyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL0J1c2luZXNzTWFuYWdlcic7XG5cbi8qIENPTVBPTkVOVFMgKi9cbmltcG9ydCBPdXRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL091dGVyQ29udGFpbmVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IEJ1c2luZXNzZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQnVzaW5lc3Nlc0xpc3QvJztcblxuLyogRUxFTUVOVFMgKi9cbmltcG9ydCBPd25lZEJ1c2luZXNzIGZyb20gJy4uL2VsZW1lbnRzL093bmVkQnVzaW5lc3MnO1xuaW1wb3J0IFdhbm5hYmVCdXNpbmVzcyBmcm9tICcuLi9lbGVtZW50cy9XYW5uYWJlQnVzaW5lc3MnO1xuXG4vKipcbiAqIFJlYWN0IEhvbWUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIC8vIHF1aWNrIHN0YXRlIGFwcCwgVE9ETzogdXNlIHJlZHVjZXIgb3IgcmVkdXhcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbW9uZXksIHNldE1vbmV5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtvd25CdXNpbmVzc2VzLCBzZXRPd25CdXNpbmVzc2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbd2FubmFiZUJ1c2luZXNzLCBzZXRXYW5uYWJlQnVzaW5lc3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaGVscGVyIHRvIHVwZGF0ZSByZWFjdCBzdGF0ZVxuICBjb25zdCB1cGRhdGVQbGF5ZXJJbmZvSW5zaWRlUmVhY3RTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXRNb25leShnZXRNb25leSgpKTtcbiAgICBzZXRPd25CdXNpbmVzc2VzKGdldEJvdWdodEJ1c2luZXNzZXNMaXN0KCkpO1xuICAgIHNldFdhbm5hYmVCdXNpbmVzcyhnZXRBdmFpbGFibGVCdXNpbmVzc0xpc3QoKSk7XG4gIH07XG5cbiAgLy8gaGVscGVycyB0byBiaW5kIGFjdGlvbiBmcm9tIFVJIHRvIGNvbnRyb2xsZXJcbiAgY29uc3QgYWN0aW9uQnV5QnVzaW5lc3MgPSAoYnVzaW5lc3MpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBidXlCdXNpbmVzc2VzKGJ1c2luZXNzKTtcbiAgICBpZiAocmVzdWx0KSB1cGRhdGVQbGF5ZXJJbmZvSW5zaWRlUmVhY3RTdGF0ZSgpO1xuICB9XG5cbiAgY29uc3QgYWN0aW9uQ29sbGVjdE1vbmV5ID0gKG5ld01vbmV5LCBidXNpbmVzc0lkKSA9PiB7XG4gICAgdXBkYXRlTW9uZXkobmV3TW9uZXksIGJ1c2luZXNzSWQpO1xuICAgIHVwZGF0ZVBsYXllckluZm9JbnNpZGVSZWFjdFN0YXRlKCk7XG4gIH1cblxuICBjb25zdCBhY3Rpb25CdXlVcGdyYWRlID0gKGJ1c2luZXNzSWQpID0+IHtcbiAgICB1cGRhdGVCdXNpbmVzc0xldmVsKGJ1c2luZXNzSWQpO1xuICAgIHVwZGF0ZVBsYXllckluZm9JbnNpZGVSZWFjdFN0YXRlKCk7XG4gIH1cblxuICBjb25zdCBhY3Rpb25CdXlNYW5hZ2VyID0gKGJ1c2luZXNzSWQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdXBkYXRlQnVzaW5lc3NNYW5hZ2VyKGJ1c2luZXNzSWQpXG4gICAgdXBkYXRlUGxheWVySW5mb0luc2lkZVJlYWN0U3RhdGUoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gZXhlY3V0ZSB0aGlzIG9uY2UgYXBwIGlzIG1vdW50ZWQgYW5kIHdpbmRvdy4gaXMgYXZhaWxhYmxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGxheWVyKGluaXRQbGF5ZXIoKSk7XG4gICAgdXBkYXRlUGxheWVySW5mb0luc2lkZVJlYWN0U3RhdGUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFkdmVudHVyZSBDYXAtSXRhbHktU3Q8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cblxuXG4gICAgPE91dGVyQ29udGFpbmVyPlxuICAgICAgPE5hdmJhciBuYW1lPXtwbGF5ZXIgJiYgcGxheWVyLm5hbWV9IHByb2ZpbGVQaWM9e1wiL3N0YXRpYy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLnBuZ1wifSBtb25leT17bW9uZXl9Lz5cbiAgICAgIDxCdXNpbmVzc2VzTGlzdD5cbiAgICAgICAge293bkJ1c2luZXNzZXMgJiYgb3duQnVzaW5lc3Nlcy5tYXAoZWxlbSA9PiB7XG4gICAgICAgICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpc1xuICAgICAgICAgIHJldHVybiA8T3duZWRCdXNpbmVzc1xuICAgICAgICAgICAgaWQ9e2VsZW0uSUR9XG4gICAgICAgICAgICBuYW1lPXtlbGVtLlNDUkVFTl9OQU1FfVxuICAgICAgICAgICAgbGV2ZWw9e2VsZW0uQ1VSUkVOVF9MRVZFTH1cbiAgICAgICAgICAgIGhhc01hbmFnZXI9e2VsZW0uSEFTX01BTkFHRVJ9XG4gICAgICAgICAgICByZXZlbnVlPXtlbGVtLlNJTkdMRV9JVEVNX1BSSUNFICogZWxlbS5DVVJSRU5UX0xFVkVMfVxuICAgICAgICAgICAgY29sbGVjdE1vbmV5PXsoKSA9PiBhY3Rpb25Db2xsZWN0TW9uZXkoZWxlbS5TSU5HTEVfSVRFTV9QUklDRSAqIGVsZW0uQ1VSUkVOVF9MRVZFTCwgZWxlbS5JRCl9XG4gICAgICAgICAgICBzZWNvbmRzRm9yR29vZEdlbmVyYXRpb249e2VsZW0uU0VDT05EU19UT19ERUxJVkVSX0dPT0R9XG4gICAgICAgICAgICBtYW5hZ2VyQ29zdD17ZWxlbS5NQU5BR0VSX0NPU1R9XG4gICAgICAgICAgICB1cGdyYWRlQ29zdD17KGVsZW0uQ1VSUkVOVF9MRVZFTCArIDEpICogZWxlbS5JTklUSUFMX0NPU1R9XG4gICAgICAgICAgICB1cGdyYWRlQnVzaW5lc3M9eygpID0+IGFjdGlvbkJ1eVVwZ3JhZGUoZWxlbS5JRCl9XG4gICAgICAgICAgICBidXlNYW5hZ2VyPXsoKSA9PiBhY3Rpb25CdXlNYW5hZ2VyKGVsZW0uSUQpfVxuICAgICAgICAgICAgdXBkYXRlT25Hb2luZ1RyYW5zYWN0aW9uPXsoKSA9PiB1cGRhdGVPbkdvaW5nVHJhbnNhY3Rpb24oZWxlbS5JRCl9XG4gICAgICAgICAgICBpbWc9e2Avc3RhdGljL2ltYWdlcy9idXNpbmVzc2VzLyR7ZWxlbS5JRH0vbWFpbi5wbmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHt3YW5uYWJlQnVzaW5lc3MgJiYgd2FubmFiZUJ1c2luZXNzLm1hcChlbGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gPFdhbm5hYmVCdXNpbmVzcyBidXNpbmVzcz17ZWxlbX0gaW1nPXtgL3N0YXRpYy9pbWFnZXMvYnVzaW5lc3Nlcy8ke2VsZW0uSUR9L21haW4ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXNpbmVzc0FjdGlvbj17KCkgPT4gYWN0aW9uQnV5QnVzaW5lc3MoZWxlbSl9Lz5cbiAgICAgICAgfSl9XG4gICAgICA8L0J1c2luZXNzZXNMaXN0PlxuXG5cbiAgICA8L091dGVyQ29udGFpbmVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\\n/*@ sourceURL=/Users/pierfrancescodorsogna/Desktop/adventure-cap_italy_st/pages/index.js */\"));\n};\n\n_s(Home, \"a7YQVvSA3fkMKY8QgNBCi52YtfA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBsYXllciIsInNldFBsYXllciIsIm1vbmV5Iiwic2V0TW9uZXkiLCJvd25CdXNpbmVzc2VzIiwic2V0T3duQnVzaW5lc3NlcyIsIndhbm5hYmVCdXNpbmVzcyIsInNldFdhbm5hYmVCdXNpbmVzcyIsInVwZGF0ZVBsYXllckluZm9JbnNpZGVSZWFjdFN0YXRlIiwiZ2V0TW9uZXkiLCJnZXRCb3VnaHRCdXNpbmVzc2VzTGlzdCIsImdldEF2YWlsYWJsZUJ1c2luZXNzTGlzdCIsImFjdGlvbkJ1eUJ1c2luZXNzIiwiYnVzaW5lc3MiLCJyZXN1bHQiLCJidXlCdXNpbmVzc2VzIiwiYWN0aW9uQ29sbGVjdE1vbmV5IiwibmV3TW9uZXkiLCJidXNpbmVzc0lkIiwidXBkYXRlTW9uZXkiLCJhY3Rpb25CdXlVcGdyYWRlIiwidXBkYXRlQnVzaW5lc3NMZXZlbCIsImFjdGlvbkJ1eU1hbmFnZXIiLCJ1cGRhdGVCdXNpbmVzc01hbmFnZXIiLCJ1c2VFZmZlY3QiLCJpbml0UGxheWVyIiwibmFtZSIsIm1hcCIsImVsZW0iLCJJRCIsIlNDUkVFTl9OQU1FIiwiQ1VSUkVOVF9MRVZFTCIsIkhBU19NQU5BR0VSIiwiU0lOR0xFX0lURU1fUFJJQ0UiLCJTRUNPTkRTX1RPX0RFTElWRVJfR09PRCIsIk1BTkFHRVJfQ09TVCIsIklOSVRJQUxfQ09TVCIsInVwZGF0ZU9uR29pbmdUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFTQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVqQjtBQUZpQixrQkFHV0Msc0RBQVEsQ0FBQyxJQUFELENBSG5CO0FBQUEsTUFH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cEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBRUQsR0FIbUIsQ0FwQnRCLENBRkYsQ0FSSztBQUFBO0FBQUE7QUFBQSxtdkxBQVA7QUE2Q0QsQ0F4RkQ7O0dBQU05QixJOztLQUFBQSxJO0FBeUZTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUkVBQ1QgKi9cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDT05UUk9MTEVSUyAqL1xuaW1wb3J0IHtcbiAgZ2V0TW9uZXksXG4gIGluaXRQbGF5ZXIsXG4gIHVwZGF0ZUJ1c2luZXNzTGV2ZWwsXG4gIHVwZGF0ZUJ1c2luZXNzTWFuYWdlcixcbiAgdXBkYXRlTW9uZXksXG4gIHVwZGF0ZU9uR29pbmdUcmFuc2FjdGlvblxufSBmcm9tICcuLi9jb250cm9sbGVycy9QbGF5ZXJNYW5hZ2VyJztcblxuaW1wb3J0IHsgZ2V0Qm91Z2h0QnVzaW5lc3Nlc0xpc3QsIGdldEF2YWlsYWJsZUJ1c2luZXNzTGlzdCwgYnV5QnVzaW5lc3NlcyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL0J1c2luZXNzTWFuYWdlcic7XG5cbi8qIENPTVBPTkVOVFMgKi9cbmltcG9ydCBPdXRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL091dGVyQ29udGFpbmVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IEJ1c2luZXNzZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQnVzaW5lc3Nlc0xpc3QvJztcblxuLyogRUxFTUVOVFMgKi9cbmltcG9ydCBPd25lZEJ1c2luZXNzIGZyb20gJy4uL2VsZW1lbnRzL093bmVkQnVzaW5lc3MnO1xuaW1wb3J0IFdhbm5hYmVCdXNpbmVzcyBmcm9tICcuLi9lbGVtZW50cy9XYW5uYWJlQnVzaW5lc3MnO1xuXG4vKipcbiAqIFJlYWN0IEhvbWUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIC8vIHF1aWNrIHN0YXRlIGFwcCwgVE9ETzogdXNlIHJlZHVjZXIgb3IgcmVkdXhcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbW9uZXksIHNldE1vbmV5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtvd25CdXNpbmVzc2VzLCBzZXRPd25CdXNpbmVzc2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbd2FubmFiZUJ1c2luZXNzLCBzZXRXYW5uYWJlQnVzaW5lc3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaGVscGVyIHRvIHVwZGF0ZSByZWFjdCBzdGF0ZVxuICBjb25zdCB1cGRhdGVQbGF5ZXJJbmZvSW5zaWRlUmVhY3RTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXRNb25leShnZXRNb25leSgpKTtcbiAgICBzZXRPd25CdXNpbmVzc2VzKGdldEJvdWdodEJ1c2luZXNzZXNMaXN0KCkpO1xuICAgIHNldFdhbm5hYmVCdXNpbmVzcyhnZXRBdmFpbGFibGVCdXNpbmVzc0xpc3QoKSk7XG4gIH07XG5cbiAgLy8gaGVscGVycyB0byBiaW5kIGFjdGlvbiBmcm9tIFVJIHRvIGNvbnRyb2xsZXJcbiAgY29uc3QgYWN0aW9uQnV5QnVzaW5lc3MgPSAoYnVzaW5lc3MpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBidXlCdXNpbmVzc2VzKGJ1c2luZXNzKTtcbiAgICBpZiAocmVzdWx0KSB1cGRhdGVQbGF5ZXJJbmZvSW5zaWRlUmVhY3RTdGF0ZSgpO1xuICB9XG5cbiAgY29uc3QgYWN0aW9uQ29sbGVjdE1vbmV5ID0gKG5ld01vbmV5LCBidXNpbmVzc0lkKSA9PiB7XG4gICAgdXBkYXRlTW9uZXkobmV3TW9uZXksIGJ1c2luZXNzSWQpO1xuICAgIHVwZGF0ZVBsYXllckluZm9JbnNpZGVSZWFjdFN0YXRlKCk7XG4gIH1cblxuICBjb25zdCBhY3Rpb25CdXlVcGdyYWRlID0gKGJ1c2luZXNzSWQpID0+IHtcbiAgICB1cGRhdGVCdXNpbmVzc0xldmVsKGJ1c2luZXNzSWQpO1xuICAgIHVwZGF0ZVBsYXllckluZm9JbnNpZGVSZWFjdFN0YXRlKCk7XG4gIH1cblxuICBjb25zdCBhY3Rpb25CdXlNYW5hZ2VyID0gKGJ1c2luZXNzSWQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdXBkYXRlQnVzaW5lc3NNYW5hZ2VyKGJ1c2luZXNzSWQpXG4gICAgdXBkYXRlUGxheWVySW5mb0luc2lkZVJlYWN0U3RhdGUoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gZXhlY3V0ZSB0aGlzIG9uY2UgYXBwIGlzIG1vdW50ZWQgYW5kIHdpbmRvdy4gaXMgYXZhaWxhYmxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGxheWVyKGluaXRQbGF5ZXIoKSk7XG4gICAgdXBkYXRlUGxheWVySW5mb0luc2lkZVJlYWN0U3RhdGUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFkdmVudHVyZSBDYXAtSXRhbHktU3Q8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cblxuXG4gICAgPE91dGVyQ29udGFpbmVyPlxuICAgICAgPE5hdmJhciBuYW1lPXtwbGF5ZXIgJiYgcGxheWVyLm5hbWV9IHByb2ZpbGVQaWM9e1wiL3N0YXRpYy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLnBuZ1wifSBtb25leT17bW9uZXl9Lz5cbiAgICAgIDxCdXNpbmVzc2VzTGlzdD5cbiAgICAgICAge293bkJ1c2luZXNzZXMgJiYgb3duQnVzaW5lc3Nlcy5tYXAoZWxlbSA9PiB7XG4gICAgICAgICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpc1xuICAgICAgICAgIHJldHVybiA8T3duZWRCdXNpbmVzc1xuICAgICAgICAgICAgaWQ9e2VsZW0uSUR9XG4gICAgICAgICAgICBuYW1lPXtlbGVtLlNDUkVFTl9OQU1FfVxuICAgICAgICAgICAgbGV2ZWw9e2VsZW0uQ1VSUkVOVF9MRVZFTH1cbiAgICAgICAgICAgIGhhc01hbmFnZXI9e2VsZW0uSEFTX01BTkFHRVJ9XG4gICAgICAgICAgICByZXZlbnVlPXtlbGVtLlNJTkdMRV9JVEVNX1BSSUNFICogZWxlbS5DVVJSRU5UX0xFVkVMfVxuICAgICAgICAgICAgY29sbGVjdE1vbmV5PXsoKSA9PiBhY3Rpb25Db2xsZWN0TW9uZXkoZWxlbS5TSU5HTEVfSVRFTV9QUklDRSAqIGVsZW0uQ1VSUkVOVF9MRVZFTCwgZWxlbS5JRCl9XG4gICAgICAgICAgICBzZWNvbmRzRm9yR29vZEdlbmVyYXRpb249e2VsZW0uU0VDT05EU19UT19ERUxJVkVSX0dPT0R9XG4gICAgICAgICAgICBtYW5hZ2VyQ29zdD17ZWxlbS5NQU5BR0VSX0NPU1R9XG4gICAgICAgICAgICB1cGdyYWRlQ29zdD17KGVsZW0uQ1VSUkVOVF9MRVZFTCArIDEpICogZWxlbS5JTklUSUFMX0NPU1R9XG4gICAgICAgICAgICB1cGdyYWRlQnVzaW5lc3M9eygpID0+IGFjdGlvbkJ1eVVwZ3JhZGUoZWxlbS5JRCl9XG4gICAgICAgICAgICBidXlNYW5hZ2VyPXsoKSA9PiBhY3Rpb25CdXlNYW5hZ2VyKGVsZW0uSUQpfVxuICAgICAgICAgICAgdXBkYXRlT25Hb2luZ1RyYW5zYWN0aW9uPXsoKSA9PiB1cGRhdGVPbkdvaW5nVHJhbnNhY3Rpb24oZWxlbS5JRCl9XG4gICAgICAgICAgICBpbWc9e2Avc3RhdGljL2ltYWdlcy9idXNpbmVzc2VzLyR7ZWxlbS5JRH0vbWFpbi5wbmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHt3YW5uYWJlQnVzaW5lc3MgJiYgd2FubmFiZUJ1c2luZXNzLm1hcChlbGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gPFdhbm5hYmVCdXNpbmVzcyBidXNpbmVzcz17ZWxlbX0gaW1nPXtgL3N0YXRpYy9pbWFnZXMvYnVzaW5lc3Nlcy8ke2VsZW0uSUR9L21haW4ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlCdXNpbmVzc0FjdGlvbj17KCkgPT4gYWN0aW9uQnV5QnVzaW5lc3MoZWxlbSl9Lz5cbiAgICAgICAgfSl9XG4gICAgICA8L0J1c2luZXNzZXNMaXN0PlxuXG5cbiAgICA8L091dGVyQ29udGFpbmVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})