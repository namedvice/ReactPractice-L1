/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupLoginForm: () => (/* binding */ setupLoginForm)
/* harmony export */ });
var setupLoginForm = function setupLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if (username.value === "" || password.value === "") {
      //throw input borders in red
      username.className = "".concat(username.className, " invalid");
      username.setCustomValidity("Поле должно быть заполненным!");
      password.className = "".concat(password.className, " invalid");
      password.setCustomValidity("Поле должно быть заполненным!");
    } else if (username.value === "123" && password.value === "123") {
      alert("This form has been successfully submitted!");
      var token = (Math.random() + 1).toString(36).substring(7);
      sessionStorage.setItem("authorizationKey", token);
      location.reload();
    } else {
      username.className = "".concat(username.className, " invalid");
      username.setCustomValidity("Логин или пароль неверны!");
      password.className = "".concat(password.className, " invalid");
    }
    username.value = "";
    password.value = "";
    // handle submit
  });
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderKnowledgePanel: () => (/* binding */ renderKnowledgePanel)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ "./src/login.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var currentPage; // Текущая отображаемая страница
if (sessionStorage.getItem("currentPage")) {
  currentPage = Number(sessionStorage.getItem("currentPage"));
} else {
  currentPage = 1;
}
var pagesHTML = document.getElementById("pages");
var DOGS_PER_PAGE = 4;
var CATS_PER_PAGE = 4;
var currentDogsPerPage = DOGS_PER_PAGE;
var currentCatsPerPage = CATS_PER_PAGE;
// let skipDogs
// let skipCats

var maxButtonsDisplayed = 7;
var numberOfDogs = 25;
var numberOfCats = 25;

//dogs and cats arrays of rendered html elements
var catsList = [];
var dogsList = [];
var knowledgeBlocks = [];
var getDogsInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("https://api.thedogapi.com/v1/breeds?limit=".concat(numberOfDogs), {
            method: "GET",
            headers: {
              "x-api-key": "live_lWvmtEurGGkiDbuhzBhBgPfe4Snq0vqj7nQL2bx3CXfxcYVEMPZHGWnbIa3cYy7F"
            }
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          return _context.abrupt("return", _context.sent);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getDogsInfo() {
    return _ref.apply(this, arguments);
  };
}();
var getCatsInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("https://api.thecatapi.com/v1/breeds?limit=".concat(numberOfCats), {
            method: "GET",
            headers: {
              "x-api-key": "live_qTto4DK2B9DlgwEAyOqLNLd2Rt6nNxwhZxxz6AzdcCtFOYft9awLT2h6VNZ35hVm"
            }
          });
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          return _context2.abrupt("return", _context2.sent);
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getCatsInfo() {
    return _ref2.apply(this, arguments);
  };
}();
var renderBlock = function renderBlock(animalType, animalInfo) {
  switch (animalType) {
    case "cat":
      return "<div class=\"knowledgeBlock\">\n            <img class = \"knowledgeBlockImage\" src = \"".concat(animalInfo.image.url, "\" alt = \"cat's missing\" >\n            <h3>").concat(animalInfo.name, "</h3>\n            <p>").concat(animalInfo.temperament, "</p>\n            </div>");
    case "dog":
      return "<div class=\"knowledgeBlock\">\n        <img class = \"knowledgeBlockImage\" src = \"".concat(animalInfo.image.url, "\" alt = \"dog's missing\" >\n        <h3>").concat(animalInfo.name, "</h3>\n        <p>").concat(animalInfo.temperament, "</p>\n        </div>");
  }
};
var getKnowledgeBlocks = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var dogsInfo, catsInfo, i, _i;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getDogsInfo();
        case 2:
          dogsInfo = _context3.sent;
          _context3.next = 5;
          return getCatsInfo();
        case 5:
          catsInfo = _context3.sent;
          if (!((currentPage - 1) * currentCatsPerPage <= numberOfCats)) {
            _context3.next = 17;
            break;
          }
          i = (currentPage - 1) * CATS_PER_PAGE;
        case 8:
          if (!(i < (currentPage - 1) * CATS_PER_PAGE + CATS_PER_PAGE)) {
            _context3.next = 17;
            break;
          }
          if (!(i >= numberOfCats)) {
            _context3.next = 13;
            break;
          }
          currentCatsPerPage -= 1;
          currentDogsPerPage = currentCatsPerPage;
          return _context3.abrupt("continue", 14);
        case 13:
          catsList.push(renderBlock("cat", catsInfo[i]));
          // catsInfo.shift()
        case 14:
          i++;
          _context3.next = 8;
          break;
        case 17:
          if (!((currentPage - 1) * currentDogsPerPage <= numberOfDogs)) {
            _context3.next = 29;
            break;
          }
          _i = (currentPage - 1) * currentDogsPerPage;
        case 19:
          if (!(_i < (currentPage - 1) * currentDogsPerPage + currentDogsPerPage)) {
            _context3.next = 29;
            break;
          }
          if (!(_i >= numberOfDogs)) {
            _context3.next = 24;
            break;
          }
          currentDogsPerPage -= 1;
          currentCatsPerPage = currentDogsPerPage;
          return _context3.abrupt("continue", 26);
        case 24:
          console.log("dog i == " + _i);
          dogsList.push(renderBlock("dog", dogsInfo[_i]));
          // dogsInfo.shift()
        case 26:
          _i++;
          _context3.next = 19;
          break;
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getKnowledgeBlocks() {
    return _ref3.apply(this, arguments);
  };
}();
var setCurrentPage = function setCurrentPage(pageToLoad) {
  currentPage = pageToLoad;
  sessionStorage.setItem("currentPage", currentPage);
  location.reload();
};
var createPaginationButtons = function createPaginationButtons(pagesCount) {
  var buttonsCounter = 0;
  var i;
  var buttonsBeforeSelected = 3;

  //depending on maximum displayed buttons - we make user see only selected one and 3 before them
  if (currentPage > 4) {
    pagesHTML.innerHTML += "<button class=\"pageButton\" key={12345}>\u0412 \u043D\u0430\u0447\u0430\u043B\u043E</button>";
    pagesHTML.children[pagesHTML.children.length - 1].addEventListener("click", function () {
      setCurrentPage(1);
    });
    buttonsCounter++;
    pagesHTML.innerHTML += "<button class=\"pageButton_inactive\" key={111}>...</button>";
    buttonsCounter++;
    i = currentPage - buttonsBeforeSelected; //add 3 buttons before dots
  } else {
    i = 1;
  }
  for (i; i <= pagesCount; i++) {
    if (buttonsCounter <= maxButtonsDisplayed) {
      var className = "pageButton";
      if (i === currentPage) {
        className = "pageButton_highlighted";
      }
      pagesHTML.innerHTML += "<button class=".concat(className, " key=").concat(i, ">").concat(i, "</button>");
      pagesHTML.children.item(pagesHTML.children.length - 1).addEventListener("click", function () {
        console.log("That's your i: " + i);
      });
      console.log(pagesHTML.children.item(pagesHTML.children.length - 1));
    } else break;
  }

  //add ... only if last page button is NOT visible
  if (i <= pagesCount) {
    pagesHTML.innerHTML += "<button class=\"pageButton_inactive\" key={000}>...</button>";
  }
  if (currentPage !== pagesCount) {
    pagesHTML.innerHTML += "<button class=\"pageButton\" key={54321} \">\u0414\u0430\u043B\u044C\u0448\u0435</button>";
    pagesHTML.children.item(pagesHTML.children.length - 1).addEventListener("click", function () {
      setCurrentPage(currentPage + 1);
    });
  }
  // setCurrentPage(1)
};
var paginationSetup = function paginationSetup() {
  var totalPages = Math.ceil((numberOfCats + numberOfDogs) / (currentCatsPerPage + currentDogsPerPage));
  createPaginationButtons(totalPages);
};
var renderKnowledgePanel = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var startIndex, blocksOnThePage;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          checkDeviceWidth();

          // Вычисление индекса первого отображаемого элемента
          startIndex = currentPage * (currentCatsPerPage + currentDogsPerPage) - (currentCatsPerPage + currentDogsPerPage);
          if (!(catsList.length === 0 || dogsList.length === 0)) {
            _context4.next = 5;
            break;
          }
          _context4.next = 5;
          return getKnowledgeBlocks();
        case 5:
          // await getKnowledgeBlocks()
          //add if no cats are on the page at all
          // if (!catsList[startIndex + catsPerPage]) {
          //     catsPerPage = catsList.length - startIndex
          //     dogsPerPage = catsPerPage
          // }
          blocksOnThePage = [].concat(catsList, dogsList);
          document.getElementById("knowledgePanel").innerHTML = blocksOnThePage.join("");

          //change CSS of knowledge panel according to amount of items on the page
          if (currentDogsPerPage > currentCatsPerPage) {
            document.getElementById("knowledgePanel").style.gridTemplateColumns = "repeat(".concat(currentDogsPerPage, ",minmax(13em, 15em))");
          } else {
            document.getElementById("knowledgePanel").style.gridTemplateColumns = "repeat(".concat(currentCatsPerPage, ",minmax(13em, 15em))");
          }
          paginationSetup();
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function renderKnowledgePanel() {
    return _ref4.apply(this, arguments);
  };
}();
var checkDeviceWidth = function checkDeviceWidth() {
  if (visualViewport.width < 1024) {
    DOGS_PER_PAGE = 2;
    CATS_PER_PAGE = 2;
    currentDogsPerPage = DOGS_PER_PAGE;
    currentCatsPerPage = CATS_PER_PAGE;
  }
  console.log("Viewport Width = " + visualViewport.width);
};
visualViewport.addEventListener("resize", function () {
  checkDeviceWidth();
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --step--2: clamp(0.7813rem, 0.7786rem + 0.0134vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9286rem + 0.0446vw, 1rem);
  --step-0: clamp(1.125rem, 1.1071rem + 0.0893vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.3196rem + 0.1518vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5724rem + 0.2379vw, 1.9531rem);
  --step-3: clamp(1.9438rem, 1.8727rem + 0.3554vw, 2.4413rem);
  --step-4: clamp(2.3325rem, 2.2297rem + 0.5138vw, 3.0519rem);
  --step-5: clamp(2.7994rem, 2.6543rem + 0.7254vw, 3.815rem);
  --ff-primary: "PT Sans", Calibri, Tahoma, sans-serif ;
}

body {
  font-family: var(--ff-primary);
  /*font-weight: 600;*/
  line-height: 1.6;
  height: 100%;
  width: 100%;
}

body, h1, h2, h3, p {
  margin: 0;
}

h2 {
  margin-block-end: 1rem;
}

p {
  margin-block-start: 0;
}

section {
  padding: 1rem 0;
}

img {
  display: block;
  max-width: 100%;
}

input {
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  width: 90%;
  height: 40px;
  border-width: 3px;
  border-color: #775139;
  background-color: #FFFFFF;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
}

input:hover {
  background-color: antiquewhite;
}

input:active {
  background-color: azure;
}

header {
  display: flex;
  padding-block: 1rem;
}

.container {
  margin-inline: auto;
  padding: 1rem;
  width: min(90%, 70.5rem);
  height: auto;
}

.navigation {
  display: flex;
  justify-content: space-evenly;
  margin-inline: auto;
  max-width: 500px;
}

.knowledgeSection {
  height: 100%;
}

.bg-creme {
  background-color: cornsilk;
}

.bg-dark {
  background-color: #333029;
}

.bg-light {
  background-color: antiquewhite;
}

.authorizationBlock {
  padding-block: 1rem;
}

.authorizationPanel {
  max-width: 30rem;
  height: 200px;
  margin: auto;
  padding: 1rem;
  /*padding-left: 30px;*/
  /*padding-right: 30px;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  background-color: burlywood;
  border: 5px solid #000000;
  border-radius: 25px;
}

.invalid {
  border-color: red;
}

.knowledgePanel {
  /*border: solid 5px #333029;*/
  margin-inline: 5rem;
  display: grid;
  /*grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));*/
  grid-gap: 3rem;
  justify-content: center;
}

.knowledgeBlock {
  display: flex;
  text-align: left;
  height: auto;
  background-color: white;
  /*max-width: 300px;*/
  flex-direction: column;
  padding: 1rem;
  border: solid burlywood 5px;
  border-radius: 20px;
}

.knowledgeBlock:hover {
  background-color: burlywood;
}

.knowledgeBlockImage {
  object-fit: cover;
  width: 100%;
  height: 8em;
}

.footer {
  position: sticky;
  bottom: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-inline: 15rem;
}

.pageButton, .pageButton_highlighted, .pageButtonInactive {
  background: #eae0c2;
  border-radius: 15px;
  border: 2px solid #333029;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
  color: #505739;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 16px;
  text-decoration: none;
  text-shadow: 0 1px 0 #ffffff;
}

.pageButton_highlighted {
  background: #fff8f8;
  border: none;
}

.pageButton_inactive {
  background-color: transparent;
  border-color: transparent;
  outline: none;
  cursor: default;
}

.submitButton {
  margin: auto;
}

.pageButton:hover {
  background-color: #ccc2a6;
}

.pageButton:active {
  position: relative;
  top: 1px;
  background-color: #505739;
}

.bg {
  position: sticky;
  z-index: -1;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg, #ffae00 0%, #ff9100 25%, #ffe35a 51%, #ff357f 100%);
  -webkit-animation: AnimateBG 20s ease infinite;
  animation: AnimateBG 20s ease infinite;
}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACI,yDAAA;EACA,uDAAA;EACA,wDAAA;EACA,yDAAA;EACA,yDAAA;EACA,2DAAA;EACA,2DAAA;EACA,0DAAA;EACA,qDAAA;AACJ;;AAEA;EACI,8BAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;AACJ;;AAGA;EACI,SAAA;AAAJ;;AAGA;EACI,sBAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;;AAGA;EACI,cAAA;EACA,eAAA;AAAJ;;AAIA;EACI,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,8CAAA;EACA,+CAAA;AADJ;;AAIA;EACI,8BAAA;AADJ;;AAIA;EACI,uBAAA;AADJ;;AAIA;EACI,aAAA;EACA,mBAAA;AADJ;;AAIA;EACI,mBAAA;EACA,aAAA;EACA,wBAAA;EACA,YAAA;AADJ;;AAIA;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,YAAA;AADJ;;AAIA;EACI,0BAAA;AADJ;;AAIA;EACI,yBAAA;AADJ;;AAIA;EACI,8BAAA;AADJ;;AAKA;EACI,mBAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,2BAAA;EACA,yBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,iBAAA;AAFJ;;AAKA;EACI,6BAAA;EACA,mBAAA;EACA,aAAA;EACA,+DAAA;EACA,cAAA;EACA,uBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,oBAAA;EACA,sBAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,2BAAA;AAFJ;;AAKA;EACI,iBAAA;EACA,WAAA;EACA,WAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,SAAA;AAFJ;;AAOA;EACI,aAAA;EACA,uBAAA;EACA,oBAAA;AAJJ;;AAOA;EACI,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,4BAAA;AAJJ;;AAOA;EACI,mBAAA;EACA,YAAA;AAJJ;;AAOA;EACI,6BAAA;EACA,yBAAA;EACA,aAAA;EACA,eAAA;AAJJ;;AAOA;EACI,YAAA;AAJJ;;AAOA;EACI,yBAAA;AAJJ;;AAOA;EACI,kBAAA;EACA,QAAA;EACA,yBAAA;AAJJ;;AAOA;EACI,gBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,0BAAA;EACA,6FAAA;EACA,8CAAA;EACA,sCAAA;AAJJ;;AAOA;EACI;IACI,2BAAA;EAJN;EAME;IACI,6BAAA;EAJN;EAME;IACI,2BAAA;EAJN;AACF;AAOA;EACI;IACI,2BAAA;EALN;EAOE;IACI,6BAAA;EALN;EAOE;IACI,2BAAA;EALN;AACF","sourcesContent":[":root {\r\n    --step--2: clamp(0.7813rem, 0.7786rem + 0.0134vw, 0.8rem);\r\n    --step--1: clamp(0.9375rem, 0.9286rem + 0.0446vw, 1rem);\r\n    --step-0: clamp(1.125rem, 1.1071rem + 0.0893vw, 1.25rem);\r\n    --step-1: clamp(1.35rem, 1.3196rem + 0.1518vw, 1.5625rem);\r\n    --step-2: clamp(1.62rem, 1.5724rem + 0.2379vw, 1.9531rem);\r\n    --step-3: clamp(1.9438rem, 1.8727rem + 0.3554vw, 2.4413rem);\r\n    --step-4: clamp(2.3325rem, 2.2297rem + 0.5138vw, 3.0519rem);\r\n    --step-5: clamp(2.7994rem, 2.6543rem + 0.7254vw, 3.815rem);\r\n    --ff-primary: \"PT Sans\", Calibri, Tahoma, sans-serif\r\n}\r\n\r\nbody {\r\n    font-family: var(--ff-primary);\r\n    /*font-weight: 600;*/\r\n    line-height: 1.6;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}\r\n\r\nbody, h1, h2, h3, p {\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    margin-block-end: 1rem;\r\n}\r\n\r\np {\r\n    margin-block-start: 0;\r\n}\r\n\r\nsection {\r\n    padding: 1rem 0;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\n\r\ninput {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    width: 90%;\r\n    height: 40px;\r\n    border-width: 3px;\r\n    border-color: #775139;\r\n    background-color: #FFFFFF;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 5px rgba(66, 66, 66, .75);\r\n    text-shadow: 0px 0px 5px rgba(66, 66, 66, .75);\r\n}\r\n\r\ninput:hover {\r\n    background-color: antiquewhite;\r\n}\r\n\r\ninput:active {\r\n    background-color: azure;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    padding-block: 1rem;\r\n}\r\n\r\n.container {\r\n    margin-inline: auto;\r\n    padding: 1rem;\r\n    width: min(90%, 70.5rem);\r\n    height: auto;\r\n}\r\n\r\n.navigation {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin-inline: auto;\r\n    max-width: 500px;\r\n}\r\n\r\n.knowledgeSection {\r\n    height: 100%;\r\n}\r\n\r\n.bg-creme {\r\n    background-color: cornsilk;\r\n}\r\n\r\n.bg-dark {\r\n    background-color: #333029;\r\n}\r\n\r\n.bg-light {\r\n    background-color: antiquewhite;\r\n}\r\n\r\n\r\n.authorizationBlock {\r\n    padding-block: 1rem;\r\n}\r\n\r\n.authorizationPanel {\r\n    max-width: 30rem;\r\n    height: 200px;\r\n    margin: auto;\r\n    padding: 1rem;\r\n    /*padding-left: 30px;*/\r\n    /*padding-right: 30px;*/\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    row-gap: 5px;\r\n    background-color: burlywood;\r\n    border: 5px solid #000000;\r\n    border-radius: 25px;\r\n}\r\n\r\n.invalid {\r\n    border-color: red;\r\n}\r\n\r\n.knowledgePanel {\r\n    /*border: solid 5px #333029;*/\r\n    margin-inline: 5rem;\r\n    display: grid;\r\n    /*grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));*/\r\n    grid-gap: 3rem;\r\n    justify-content: center;\r\n}\r\n\r\n.knowledgeBlock {\r\n    display: flex;\r\n    text-align: left;\r\n    height: auto;\r\n    background-color: white;\r\n    /*max-width: 300px;*/\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    border: solid burlywood 5px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.knowledgeBlock:hover {\r\n    background-color: burlywood;\r\n}\r\n\r\n.knowledgeBlockImage {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 8em;\r\n}\r\n\r\n.footer {\r\n    position: sticky;\r\n    bottom: 0;\r\n\r\n}\r\n\r\n\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-inline: 15rem;\r\n}\r\n\r\n.pageButton, .pageButton_highlighted, .pageButtonInactive {\r\n    background: #eae0c2;\r\n    border-radius: 15px;\r\n    border: 2px solid #333029;\r\n    display: inline-block;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n    color: #505739;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    text-shadow: 0 1px 0 #ffffff;\r\n}\r\n\r\n.pageButton_highlighted {\r\n    background: #fff8f8;\r\n    border: none;\r\n}\r\n\r\n.pageButton_inactive {\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    outline: none;\r\n    cursor: default;\r\n}\r\n\r\n.submitButton {\r\n    margin: auto;\r\n}\r\n\r\n.pageButton:hover {\r\n    background-color: #ccc2a6;\r\n}\r\n\r\n.pageButton:active {\r\n    position: relative;\r\n    top: 1px;\r\n    background-color: #505739;\r\n}\r\n\r\n.bg {\r\n    position: sticky;\r\n    z-index: -1;\r\n    bottom: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-size: 300% 300%;\r\n    background-image: linear-gradient(-45deg, #ffae00 0%, #ff9100 25%, #ffe35a 51%, #ff357f 100%);\r\n    -webkit-animation: AnimateBG 20s ease infinite;\r\n    animation: AnimateBG 20s ease infinite;\r\n}\r\n\r\n@-webkit-keyframes AnimateBG {\r\n    0% {\r\n        background-position: 0% 50%;\r\n    }\r\n    50% {\r\n        background-position: 100% 50%;\r\n    }\r\n    100% {\r\n        background-position: 0% 50%;\r\n    }\r\n}\r\n\r\n@keyframes AnimateBG {\r\n    0% {\r\n        background-position: 0% 50%;\r\n    }\r\n    50% {\r\n        background-position: 100% 50%;\r\n    }\r\n    100% {\r\n        background-position: 0% 50%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ "./src/login.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");



//update UI depending on having been authorized
if (sessionStorage.getItem("authorizationKey") !== null) {
  document.getElementById("auth").remove();
  document.getElementById("signButton").remove();
  document.getElementById("mainButton").className = "pageButton_highlighted";
  void (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.renderKnowledgePanel)();
} else {
  document.getElementById("signButton").className = "pageButton_highlighted";
  document.getElementById("mainButton").remove();
  document.getElementById("knowledge").remove();
  document.getElementById("pagination").remove();
  (0,_login_js__WEBPACK_IMPORTED_MODULE_0__.setupLoginForm)();
}
})();

/******/ })()
;
//# sourceMappingURL=bundle9169ae9fc6a5eeb0305e.js.map