webpackHotUpdate("static/development/pages/index.js",{

/***/ "./controllers/PlayerManager.js":
/*!**************************************!*\
  !*** ./controllers/PlayerManager.js ***!
  \**************************************/
/*! exports provided: createNewPlayer, savePlayerToLocalStorage, initPlayer, updateMoney, getMoney, updateBusinessLevel, updateBusinessManager, updateOnGoingTransaction, CURRENT_PLAYER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewPlayer\", function() { return createNewPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savePlayerToLocalStorage\", function() { return savePlayerToLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPlayer\", function() { return initPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMoney\", function() { return updateMoney; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMoney\", function() { return getMoney; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBusinessLevel\", function() { return updateBusinessLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBusinessManager\", function() { return updateBusinessManager; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateOnGoingTransaction\", function() { return updateOnGoingTransaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_PLAYER\", function() { return CURRENT_PLAYER; });\n/* harmony import */ var _appConfig_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appConfig.json */ \"./appConfig.json\");\nvar _appConfig_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../appConfig.json */ \"./appConfig.json\", 1);\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\");\n/* harmony import */ var _models_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Errors */ \"./models/Errors.js\");\n/* harmony import */ var _UtilsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UtilsManager */ \"./controllers/UtilsManager.js\");\n/* CONFIGS */\n\n/* CLASSES */\n\n\n/* MODELS */\n\n\n/* CONTROLLERS */\n\n\n/* GLOBALS */\n\nvar MAX_FREQUENCY_SECONDS_DELTA_FOR_LS_SAVING = 5;\nvar CURRENT_PLAYER = {};\nvar isLsEnabled;\nvar savingRequestLock = false;\n/* METHODS */\n\n/**\n *\n * @returns {string}\n */\n\nvar createID = function createID() {\n  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n};\n/**\n *\n * @param name\n * @returns {Player}\n */\n\n\nvar createNewPlayer = function createNewPlayer(name) {\n  // create vars to assign\n  var ID = createID();\n  var initialAmountOfMoney = _appConfig_json__WEBPACK_IMPORTED_MODULE_0__.PLAYER_CONFIG.INITIAL_AMOUNT_OF_MONEY;\n  var initialBusinesess = [];\n  var lastAccessed = Date.now(); // create new player\n\n  CURRENT_PLAYER = new _classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ID, name, initialAmountOfMoney, initialBusinesess, lastAccessed); // save player instance in the localStorage\n\n  savePlayerToLocalStorage();\n  return CURRENT_PLAYER;\n};\n/*\n\n */\n\n\nvar initPlayer = function initPlayer() {\n  try {\n    CURRENT_PLAYER = retrievePlayerFromLocalStorage();\n  } catch (e) {\n    var defaultName = 'JohnDoe_' + Date.now();\n    CURRENT_PLAYER = createNewPlayer(defaultName);\n  } // calculate money while you where away\n\n\n  calculateRevenueWhileAway();\n  return CURRENT_PLAYER;\n};\n/**\n *\n */\n\n\nvar calculateRevenueWhileAway = function calculateRevenueWhileAway() {\n  var moneyToAssign = 0; // 1. take all business with manager\n\n  CURRENT_PLAYER.businesses.forEach(function (elem) {\n    if (elem.HAS_MANAGER) {\n      // 2. take last transaction\n      var secondsAfterLastTransaction = Date.now() - elem.LAST_TRANSACTION_TIMESTAMP; // TODO: calculate ongoing\n\n      var minTimeToDeliverGood = elem.SECONDS_TO_DELIVER_GOOD;\n\n      if (secondsAfterLastTransaction >= minTimeToDeliverGood) {\n        var itemsCollectedWhileAway = parseInt(secondsAfterLastTransaction / minTimeToDeliverGood / 1000);\n        moneyToAssign += itemsCollectedWhileAway * (elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL);\n      }\n    }\n  });\n  CURRENT_PLAYER.money += moneyToAssign;\n  savePlayerToLocalStorage();\n  console.log(\"While away you collect:\".concat(moneyToAssign, \" $\"));\n};\n/**\n *\n */\n\n\nvar retrievePlayerFromLocalStorage = function retrievePlayerFromLocalStorage() {\n  // is localstorage enabled? if false throw an error\n  if (isLsEnabled !== true && !Object(_UtilsManager__WEBPACK_IMPORTED_MODULE_3__[\"checkIfLocalStorageIsEnabled\"])()) throw _models_Errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].LOCAL_STORAGE_NOT_SUPPORTED; // save the player object inside the localStorage\n\n  var playerRawDataFromLS = window.localStorage.getItem(_appConfig_json__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_KEYS.PLAYER);\n  if (playerRawDataFromLS === null) throw _models_Errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PLAYER_NOT_FOUND_IN_LOCAL_STORAGE; // check if player retrieved has a valid object structure\n\n  try {\n    var _JSON$parse = JSON.parse(atob(playerRawDataFromLS)),\n        id = _JSON$parse.id,\n        name = _JSON$parse.name,\n        money = _JSON$parse.money,\n        businesses = _JSON$parse.businesses; // TODO: check if data structure is the one for the player --> no data tampering happened\n\n\n    CURRENT_PLAYER = new _classes_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, name, money, businesses, Date.now());\n    return CURRENT_PLAYER;\n  } catch (e) {\n    throw _models_Errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;\n  }\n};\n/**\n *\n * @returns {Promise<boolean>}\n */\n\n\nvar savePlayerToLocalStorage = function savePlayerToLocalStorage() {\n  // is localstorage enabled? if false throw an error\n  if (isLsEnabled !== true && !Object(_UtilsManager__WEBPACK_IMPORTED_MODULE_3__[\"checkIfLocalStorageIsEnabled\"])()) throw _models_Errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].LOCAL_STORAGE_NOT_SUPPORTED;\n  isLsEnabled = true; // save the player object inside the localStorage\n\n  if (!savingRequestLock) {\n    savingRequestLock = true;\n    setTimeout(function () {\n      window.localStorage.setItem(_appConfig_json__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_KEYS.PLAYER, btoa(CURRENT_PLAYER[\"export\"]()));\n      savingRequestLock = false;\n    }, MAX_FREQUENCY_SECONDS_DELTA_FOR_LS_SAVING * 1000);\n  }\n\n  return {\n    success: true\n  };\n};\n/**\n *\n * @param newMoney\n * @param businessId\n */\n\n\nvar updateMoney = function updateMoney(newMoney, businessId) {\n  //  TODO: check if they are int\n  CURRENT_PLAYER.money += newMoney;\n  CURRENT_PLAYER.businesses.map(function (elem) {\n    if (elem.ID === businessId) {\n      elem.LAST_TRANSACTION_TIMESTAMP = Date.now();\n      elem.LAST_ON_GOING_TRANSACTION_TIMESTAMP = Date.now();\n    }\n  });\n  savePlayerToLocalStorage();\n};\n/**\n *\n * @param businessId\n */\n\n\nvar updateOnGoingTransaction = function updateOnGoingTransaction(businessId) {\n  CURRENT_PLAYER.businesses.map(function (elem) {\n    if (elem.ID === businessId) {\n      elem.LAST_ON_GOING_TRANSACTION_TIMESTAMP = Date.now();\n    }\n  });\n  savePlayerToLocalStorage();\n};\n/**\n *\n * @param businessId\n */\n\n\nvar updateBusinessLevel = function updateBusinessLevel(businessId) {\n  // TODO: add error if business not found\n  var currentBusinessToUpdate = CURRENT_PLAYER.businesses.filter(function (elem) {\n    return elem.ID === businessId;\n  })[0];\n  if (currentBusinessToUpdate === undefined) return 'Something wrong'; // check if you reached max level\n\n  if (currentBusinessToUpdate.CURRENT_LEVEL >= 200) return 'Level max already'; // TODO: process this numbers\n\n  var priceForTheUpdate = (currentBusinessToUpdate.CURRENT_LEVEL + 1) * currentBusinessToUpdate.INITIAL_COST; // check if you have enough money\n\n  if (CURRENT_PLAYER.money < priceForTheUpdate) return 'You don\\'t have enough money';\n  CURRENT_PLAYER.businesses.map(function (elem) {\n    if (elem.ID === businessId) {\n      elem.CURRENT_LEVEL += 1;\n    }\n  });\n  CURRENT_PLAYER.money -= priceForTheUpdate;\n  savePlayerToLocalStorage();\n};\n/**\n *\n * @param businessId\n * @returns {string}\n */\n\n\nvar updateBusinessManager = function updateBusinessManager(businessId) {\n  // TODO: add error if business not found\n  var currentBusinessToUpdate = CURRENT_PLAYER.businesses.filter(function (elem) {\n    return elem.ID === businessId;\n  })[0];\n  if (currentBusinessToUpdate === undefined) return 'Something wrong'; // check if you reached max level\n\n  if (currentBusinessToUpdate.HAS_MANAGER) return 'Manager already bought'; // check if you have enough money\n\n  if (CURRENT_PLAYER.money < currentBusinessToUpdate.MANAGER_COST) return 'You don\\'t have enough money to buy manager';\n  CURRENT_PLAYER.businesses.map(function (elem) {\n    if (elem.ID === businessId) {\n      elem.HAS_MANAGER = true;\n    }\n  });\n  CURRENT_PLAYER.money -= currentBusinessToUpdate.MANAGER_COST;\n  savePlayerToLocalStorage();\n  return true;\n};\n/**\n *\n * @returns {*}\n */\n\n\nvar getMoney = function getMoney() {\n  return CURRENT_PLAYER.money;\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9QbGF5ZXJNYW5hZ2VyLmpzPzJkYjkiXSwibmFtZXMiOlsiTUFYX0ZSRVFVRU5DWV9TRUNPTkRTX0RFTFRBX0ZPUl9MU19TQVZJTkciLCJDVVJSRU5UX1BMQVlFUiIsImlzTHNFbmFibGVkIiwic2F2aW5nUmVxdWVzdExvY2siLCJjcmVhdGVJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNyZWF0ZU5ld1BsYXllciIsIm5hbWUiLCJJRCIsImluaXRpYWxBbW91bnRPZk1vbmV5IiwiYXBwQ29uZmlnIiwiUExBWUVSX0NPTkZJRyIsIklOSVRJQUxfQU1PVU5UX09GX01PTkVZIiwiaW5pdGlhbEJ1c2luZXNlc3MiLCJsYXN0QWNjZXNzZWQiLCJEYXRlIiwibm93IiwiUGxheWVyIiwic2F2ZVBsYXllclRvTG9jYWxTdG9yYWdlIiwiaW5pdFBsYXllciIsInJldHJpZXZlUGxheWVyRnJvbUxvY2FsU3RvcmFnZSIsImUiLCJkZWZhdWx0TmFtZSIsImNhbGN1bGF0ZVJldmVudWVXaGlsZUF3YXkiLCJtb25leVRvQXNzaWduIiwiYnVzaW5lc3NlcyIsImZvckVhY2giLCJlbGVtIiwiSEFTX01BTkFHRVIiLCJzZWNvbmRzQWZ0ZXJMYXN0VHJhbnNhY3Rpb24iLCJMQVNUX1RSQU5TQUNUSU9OX1RJTUVTVEFNUCIsIm1pblRpbWVUb0RlbGl2ZXJHb29kIiwiU0VDT05EU19UT19ERUxJVkVSX0dPT0QiLCJpdGVtc0NvbGxlY3RlZFdoaWxlQXdheSIsInBhcnNlSW50IiwiU0lOR0xFX0lURU1fUFJJQ0UiLCJDVVJSRU5UX0xFVkVMIiwibW9uZXkiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tJZkxvY2FsU3RvcmFnZUlzRW5hYmxlZCIsIkVycm9ycyIsIkxPQ0FMX1NUT1JBR0VfTk9UX1NVUFBPUlRFRCIsInBsYXllclJhd0RhdGFGcm9tTFMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTE9DQUxfU1RPUkFHRV9LRVlTIiwiUExBWUVSIiwiUExBWUVSX05PVF9GT1VORF9JTl9MT0NBTF9TVE9SQUdFIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsImlkIiwiR0VORVJJQ19FUlJPUl9XSElMRV9SRVRSSVZJTkdfUExBWUVSX0ZST01fTE9DQUxfU1RPUkFHRSIsInNldFRpbWVvdXQiLCJzZXRJdGVtIiwiYnRvYSIsInN1Y2Nlc3MiLCJ1cGRhdGVNb25leSIsIm5ld01vbmV5IiwiYnVzaW5lc3NJZCIsIm1hcCIsIkxBU1RfT05fR09JTkdfVFJBTlNBQ1RJT05fVElNRVNUQU1QIiwidXBkYXRlT25Hb2luZ1RyYW5zYWN0aW9uIiwidXBkYXRlQnVzaW5lc3NMZXZlbCIsImN1cnJlbnRCdXNpbmVzc1RvVXBkYXRlIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwicHJpY2VGb3JUaGVVcGRhdGUiLCJJTklUSUFMX0NPU1QiLCJ1cGRhdGVCdXNpbmVzc01hbmFnZXIiLCJNQU5BR0VSX0NPU1QiLCJnZXRNb25leSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBLElBQU1BLHlDQUF5QyxHQUFHLENBQWxEO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsSUFBSUMsV0FBSjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLEtBQXhCO0FBRUE7O0FBRUE7Ozs7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUNmQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0MsRUFBeEMsSUFBOENILElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQyxF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Q0FBQ3VDLEtBQWYsSUFBd0I2Qix1QkFBdUIsQ0FBQ00sWUFBaEQ7QUFDQXRELDBCQUF3QjtBQUV4QixTQUFPLElBQVA7QUFDRCxDQXZCRDtBQXlCQTs7Ozs7O0FBSUEsSUFBTXVELFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FBTTNFLGNBQWMsQ0FBQ3VDLEtBQXJCO0FBQUEsQ0FBakI7O0FBRUEiLCJmaWxlIjoiLi9jb250cm9sbGVycy9QbGF5ZXJNYW5hZ2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09ORklHUyAqL1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9hcHBDb25maWcuanNvbic7XG5cbi8qIENMQVNTRVMgKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY2xhc3Nlcy9QbGF5ZXInO1xuXG4vKiBNT0RFTFMgKi9cbmltcG9ydCBFcnJvcnMgZnJvbSAnLi4vbW9kZWxzL0Vycm9ycyc7XG5cbi8qIENPTlRST0xMRVJTICovXG5pbXBvcnQgeyBjaGVja0lmTG9jYWxTdG9yYWdlSXNFbmFibGVkIH0gZnJvbSAnLi9VdGlsc01hbmFnZXInO1xuXG4vKiBHTE9CQUxTICovXG5jb25zdCBNQVhfRlJFUVVFTkNZX1NFQ09ORFNfREVMVEFfRk9SX0xTX1NBVklORyA9IDU7XG5sZXQgQ1VSUkVOVF9QTEFZRVIgPSB7fTtcbmxldCBpc0xzRW5hYmxlZDtcbmxldCBzYXZpbmdSZXF1ZXN0TG9jayA9IGZhbHNlO1xuXG4vKiBNRVRIT0RTICovXG5cbi8qKlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGNyZWF0ZUlEID0gKCkgPT5cbiAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcmV0dXJucyB7UGxheWVyfVxuICovXG5jb25zdCBjcmVhdGVOZXdQbGF5ZXIgPSAobmFtZSkgPT4ge1xuXG4gIC8vIGNyZWF0ZSB2YXJzIHRvIGFzc2lnblxuICBjb25zdCBJRCA9IGNyZWF0ZUlEKCk7XG4gIGNvbnN0IGluaXRpYWxBbW91bnRPZk1vbmV5ID0gYXBwQ29uZmlnLlBMQVlFUl9DT05GSUcuSU5JVElBTF9BTU9VTlRfT0ZfTU9ORVk7XG4gIGNvbnN0IGluaXRpYWxCdXNpbmVzZXNzID0gW107XG4gIGNvbnN0IGxhc3RBY2Nlc3NlZCA9IERhdGUubm93KCk7XG5cbiAgLy8gY3JlYXRlIG5ldyBwbGF5ZXJcbiAgQ1VSUkVOVF9QTEFZRVIgPSBuZXcgUGxheWVyKElELCBuYW1lLCBpbml0aWFsQW1vdW50T2ZNb25leSwgaW5pdGlhbEJ1c2luZXNlc3MsIGxhc3RBY2Nlc3NlZCk7XG5cbiAgLy8gc2F2ZSBwbGF5ZXIgaW5zdGFuY2UgaW4gdGhlIGxvY2FsU3RvcmFnZVxuICBzYXZlUGxheWVyVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICByZXR1cm4gQ1VSUkVOVF9QTEFZRVI7XG59XG5cbi8qXG5cbiAqL1xuY29uc3QgaW5pdFBsYXllciA9ICgpID0+IHtcblxuICB0cnkge1xuICAgIENVUlJFTlRfUExBWUVSID0gcmV0cmlldmVQbGF5ZXJGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zdCBkZWZhdWx0TmFtZSA9ICdKb2huRG9lXycgKyBEYXRlLm5vdygpO1xuICAgIENVUlJFTlRfUExBWUVSID0gY3JlYXRlTmV3UGxheWVyKGRlZmF1bHROYW1lKVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIG1vbmV5IHdoaWxlIHlvdSB3aGVyZSBhd2F5XG4gIGNhbGN1bGF0ZVJldmVudWVXaGlsZUF3YXkoKTtcblxuICByZXR1cm4gQ1VSUkVOVF9QTEFZRVI7XG5cbn1cblxuLyoqXG4gKlxuICovXG5jb25zdCBjYWxjdWxhdGVSZXZlbnVlV2hpbGVBd2F5ID0gKCkgPT4ge1xuXG4gIGxldCBtb25leVRvQXNzaWduID0gMDtcblxuICAvLyAxLiB0YWtlIGFsbCBidXNpbmVzcyB3aXRoIG1hbmFnZXJcbiAgQ1VSUkVOVF9QTEFZRVIuYnVzaW5lc3Nlcy5mb3JFYWNoKGVsZW0gPT4ge1xuXG4gICAgaWYgKGVsZW0uSEFTX01BTkFHRVIpIHtcbiAgICAgIC8vIDIuIHRha2UgbGFzdCB0cmFuc2FjdGlvblxuICAgICAgY29uc3Qgc2Vjb25kc0FmdGVyTGFzdFRyYW5zYWN0aW9uID0gRGF0ZS5ub3coKSAtIGVsZW0uTEFTVF9UUkFOU0FDVElPTl9USU1FU1RBTVA7XG4gICAgICAvLyBUT0RPOiBjYWxjdWxhdGUgb25nb2luZ1xuICAgICAgY29uc3QgbWluVGltZVRvRGVsaXZlckdvb2QgPSBlbGVtLlNFQ09ORFNfVE9fREVMSVZFUl9HT09EO1xuXG4gICAgICBpZiAoc2Vjb25kc0FmdGVyTGFzdFRyYW5zYWN0aW9uID49IG1pblRpbWVUb0RlbGl2ZXJHb29kKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zQ29sbGVjdGVkV2hpbGVBd2F5ID0gcGFyc2VJbnQoKHNlY29uZHNBZnRlckxhc3RUcmFuc2FjdGlvbiAvIG1pblRpbWVUb0RlbGl2ZXJHb29kKSAvIDEwMDApO1xuICAgICAgICBtb25leVRvQXNzaWduICs9IGl0ZW1zQ29sbGVjdGVkV2hpbGVBd2F5ICogKGVsZW0uU0lOR0xFX0lURU1fUFJJQ0UgKiBlbGVtLkNVUlJFTlRfTEVWRUwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgQ1VSUkVOVF9QTEFZRVIubW9uZXkgKz0gbW9uZXlUb0Fzc2lnbjtcbiAgc2F2ZVBsYXllclRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgY29uc29sZS5sb2coYFdoaWxlIGF3YXkgeW91IGNvbGxlY3Q6JHttb25leVRvQXNzaWdufSAkYClcbn1cblxuLyoqXG4gKlxuICovXG5jb25zdCByZXRyaWV2ZVBsYXllckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG5cbiAgLy8gaXMgbG9jYWxzdG9yYWdlIGVuYWJsZWQ/IGlmIGZhbHNlIHRocm93IGFuIGVycm9yXG4gIGlmIChpc0xzRW5hYmxlZCAhPT0gdHJ1ZSAmJiAhY2hlY2tJZkxvY2FsU3RvcmFnZUlzRW5hYmxlZCgpKSB0aHJvdyBFcnJvcnMuTE9DQUxfU1RPUkFHRV9OT1RfU1VQUE9SVEVEXG5cbiAgLy8gc2F2ZSB0aGUgcGxheWVyIG9iamVjdCBpbnNpZGUgdGhlIGxvY2FsU3RvcmFnZVxuICBjb25zdCBwbGF5ZXJSYXdEYXRhRnJvbUxTID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGFwcENvbmZpZy5MT0NBTF9TVE9SQUdFX0tFWVMuUExBWUVSKTtcbiAgaWYgKHBsYXllclJhd0RhdGFGcm9tTFMgPT09IG51bGwpIHRocm93IEVycm9ycy5QTEFZRVJfTk9UX0ZPVU5EX0lOX0xPQ0FMX1NUT1JBR0U7XG5cbiAgLy8gY2hlY2sgaWYgcGxheWVyIHJldHJpZXZlZCBoYXMgYSB2YWxpZCBvYmplY3Qgc3RydWN0dXJlXG4gIHRyeSB7XG4gICAgY29uc3Qge2lkLCBuYW1lLCBtb25leSwgYnVzaW5lc3Nlc30gPSBKU09OLnBhcnNlKGF0b2IocGxheWVyUmF3RGF0YUZyb21MUykpO1xuICAgIC8vIFRPRE86IGNoZWNrIGlmIGRhdGEgc3RydWN0dXJlIGlzIHRoZSBvbmUgZm9yIHRoZSBwbGF5ZXIgLS0+IG5vIGRhdGEgdGFtcGVyaW5nIGhhcHBlbmVkXG4gICAgQ1VSUkVOVF9QTEFZRVIgPSBuZXcgUGxheWVyKGlkLCBuYW1lLCBtb25leSwgYnVzaW5lc3NlcywgRGF0ZS5ub3coKSk7XG4gICAgcmV0dXJuIENVUlJFTlRfUExBWUVSO1xuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBFcnJvcnMuR0VORVJJQ19FUlJPUl9XSElMRV9SRVRSSVZJTkdfUExBWUVSX0ZST01fTE9DQUxfU1RPUkFHRTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAqL1xuY29uc3Qgc2F2ZVBsYXllclRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuXG4gIC8vIGlzIGxvY2Fsc3RvcmFnZSBlbmFibGVkPyBpZiBmYWxzZSB0aHJvdyBhbiBlcnJvclxuICBpZiAoaXNMc0VuYWJsZWQgIT09IHRydWUgJiYgIWNoZWNrSWZMb2NhbFN0b3JhZ2VJc0VuYWJsZWQoKSkgdGhyb3cgRXJyb3JzLkxPQ0FMX1NUT1JBR0VfTk9UX1NVUFBPUlRFRDtcbiAgaXNMc0VuYWJsZWQgPSB0cnVlO1xuXG4gIC8vIHNhdmUgdGhlIHBsYXllciBvYmplY3QgaW5zaWRlIHRoZSBsb2NhbFN0b3JhZ2VcbiAgaWYgKCFzYXZpbmdSZXF1ZXN0TG9jaykge1xuICAgIHNhdmluZ1JlcXVlc3RMb2NrID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShhcHBDb25maWcuTE9DQUxfU1RPUkFHRV9LRVlTLlBMQVlFUiwgYnRvYShDVVJSRU5UX1BMQVlFUi5leHBvcnQoKSkpO1xuICAgICAgc2F2aW5nUmVxdWVzdExvY2sgPSBmYWxzZTtcbiAgICB9LCBNQVhfRlJFUVVFTkNZX1NFQ09ORFNfREVMVEFfRk9SX0xTX1NBVklORyAqIDEwMDApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IHRydWVcbiAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG5ld01vbmV5XG4gKiBAcGFyYW0gYnVzaW5lc3NJZFxuICovXG5jb25zdCB1cGRhdGVNb25leSA9IChuZXdNb25leSwgYnVzaW5lc3NJZCkgPT4ge1xuICAvLyAgVE9ETzogY2hlY2sgaWYgdGhleSBhcmUgaW50XG4gIENVUlJFTlRfUExBWUVSLm1vbmV5ICs9IG5ld01vbmV5O1xuICBDVVJSRU5UX1BMQVlFUi5idXNpbmVzc2VzLm1hcChlbGVtID0+IHtcbiAgICBpZiAoZWxlbS5JRCA9PT0gYnVzaW5lc3NJZCkge1xuICAgICAgZWxlbS5MQVNUX1RSQU5TQUNUSU9OX1RJTUVTVEFNUCA9IERhdGUubm93KCk7XG4gICAgICBlbGVtLkxBU1RfT05fR09JTkdfVFJBTlNBQ1RJT05fVElNRVNUQU1QID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH0pO1xuICBzYXZlUGxheWVyVG9Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGJ1c2luZXNzSWRcbiAqL1xuY29uc3QgdXBkYXRlT25Hb2luZ1RyYW5zYWN0aW9uID0gKGJ1c2luZXNzSWQpID0+IHtcbiAgQ1VSUkVOVF9QTEFZRVIuYnVzaW5lc3Nlcy5tYXAoZWxlbSA9PiB7XG4gICAgaWYgKGVsZW0uSUQgPT09IGJ1c2luZXNzSWQpIHtcbiAgICAgIGVsZW0uTEFTVF9PTl9HT0lOR19UUkFOU0FDVElPTl9USU1FU1RBTVAgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfSk7XG4gIHNhdmVQbGF5ZXJUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gYnVzaW5lc3NJZFxuICovXG5jb25zdCB1cGRhdGVCdXNpbmVzc0xldmVsID0gKGJ1c2luZXNzSWQpID0+IHtcblxuICAvLyBUT0RPOiBhZGQgZXJyb3IgaWYgYnVzaW5lc3Mgbm90IGZvdW5kXG4gIGxldCBjdXJyZW50QnVzaW5lc3NUb1VwZGF0ZSA9IENVUlJFTlRfUExBWUVSLmJ1c2luZXNzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbS5JRCA9PT0gYnVzaW5lc3NJZClbMF07XG4gIGlmIChjdXJyZW50QnVzaW5lc3NUb1VwZGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ1NvbWV0aGluZyB3cm9uZyc7XG5cbiAgLy8gY2hlY2sgaWYgeW91IHJlYWNoZWQgbWF4IGxldmVsXG4gIGlmIChjdXJyZW50QnVzaW5lc3NUb1VwZGF0ZS5DVVJSRU5UX0xFVkVMID49IDIwMClcbiAgICByZXR1cm4gJ0xldmVsIG1heCBhbHJlYWR5JztcblxuICAvLyBUT0RPOiBwcm9jZXNzIHRoaXMgbnVtYmVyc1xuICBjb25zdCBwcmljZUZvclRoZVVwZGF0ZSA9IChjdXJyZW50QnVzaW5lc3NUb1VwZGF0ZS5DVVJSRU5UX0xFVkVMICsgMSkgKiBjdXJyZW50QnVzaW5lc3NUb1VwZGF0ZS5JTklUSUFMX0NPU1Q7XG5cbiAgLy8gY2hlY2sgaWYgeW91IGhhdmUgZW5vdWdoIG1vbmV5XG4gIGlmIChDVVJSRU5UX1BMQVlFUi5tb25leSA8IHByaWNlRm9yVGhlVXBkYXRlKVxuICAgIHJldHVybiAnWW91IGRvblxcJ3QgaGF2ZSBlbm91Z2ggbW9uZXknO1xuXG4gIENVUlJFTlRfUExBWUVSLmJ1c2luZXNzZXMubWFwKGVsZW0gPT4ge1xuICAgIGlmIChlbGVtLklEID09PSBidXNpbmVzc0lkKSB7XG4gICAgICBlbGVtLkNVUlJFTlRfTEVWRUwgKz0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIENVUlJFTlRfUExBWUVSLm1vbmV5IC09IHByaWNlRm9yVGhlVXBkYXRlO1xuICBzYXZlUGxheWVyVG9Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGJ1c2luZXNzSWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHVwZGF0ZUJ1c2luZXNzTWFuYWdlciA9IChidXNpbmVzc0lkKSA9PiB7XG4gIC8vIFRPRE86IGFkZCBlcnJvciBpZiBidXNpbmVzcyBub3QgZm91bmRcbiAgbGV0IGN1cnJlbnRCdXNpbmVzc1RvVXBkYXRlID0gQ1VSUkVOVF9QTEFZRVIuYnVzaW5lc3Nlcy5maWx0ZXIoZWxlbSA9PiBlbGVtLklEID09PSBidXNpbmVzc0lkKVswXTtcbiAgaWYgKGN1cnJlbnRCdXNpbmVzc1RvVXBkYXRlID09PSB1bmRlZmluZWQpIHJldHVybiAnU29tZXRoaW5nIHdyb25nJztcblxuICAvLyBjaGVjayBpZiB5b3UgcmVhY2hlZCBtYXggbGV2ZWxcbiAgaWYgKGN1cnJlbnRCdXNpbmVzc1RvVXBkYXRlLkhBU19NQU5BR0VSKVxuICAgIHJldHVybiAnTWFuYWdlciBhbHJlYWR5IGJvdWdodCc7XG5cbiAgLy8gY2hlY2sgaWYgeW91IGhhdmUgZW5vdWdoIG1vbmV5XG4gIGlmIChDVVJSRU5UX1BMQVlFUi5tb25leSA8IGN1cnJlbnRCdXNpbmVzc1RvVXBkYXRlLk1BTkFHRVJfQ09TVClcbiAgICByZXR1cm4gJ1lvdSBkb25cXCd0IGhhdmUgZW5vdWdoIG1vbmV5IHRvIGJ1eSBtYW5hZ2VyJztcblxuICBDVVJSRU5UX1BMQVlFUi5idXNpbmVzc2VzLm1hcChlbGVtID0+IHtcbiAgICBpZiAoZWxlbS5JRCA9PT0gYnVzaW5lc3NJZCkge1xuICAgICAgZWxlbS5IQVNfTUFOQUdFUiA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBDVVJSRU5UX1BMQVlFUi5tb25leSAtPSBjdXJyZW50QnVzaW5lc3NUb1VwZGF0ZS5NQU5BR0VSX0NPU1Q7XG4gIHNhdmVQbGF5ZXJUb0xvY2FsU3RvcmFnZSgpO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgZ2V0TW9uZXkgPSAoKSA9PiBDVVJSRU5UX1BMQVlFUi5tb25leTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTmV3UGxheWVyLFxuICBzYXZlUGxheWVyVG9Mb2NhbFN0b3JhZ2UsXG4gIGluaXRQbGF5ZXIsXG4gIHVwZGF0ZU1vbmV5LFxuICBnZXRNb25leSxcbiAgdXBkYXRlQnVzaW5lc3NMZXZlbCxcbiAgdXBkYXRlQnVzaW5lc3NNYW5hZ2VyLFxuICB1cGRhdGVPbkdvaW5nVHJhbnNhY3Rpb24sXG4gIENVUlJFTlRfUExBWUVSXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./controllers/PlayerManager.js\n");

/***/ })

})