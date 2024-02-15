/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ "./src/login.ts":
/*!**********************!*\
  !*** ./src/login.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupLoginForm = void 0;
var setupLoginForm = function () {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        if (username.value === "" || password.value === "") {
            username.className = "".concat(username.className, " invalid");
            username.setCustomValidity("Поле должно быть заполненным!");
            password.className = "".concat(password.className, " invalid");
            password.setCustomValidity("Поле должно быть заполненным!");
        }
        else if (username.value === "123" && password.value === "123") {
            alert("This form has been successfully submitted!");
            var token = (Math.random() + 1).toString(36).substring(7);
            sessionStorage.setItem("authorizationKey", token);
            location.reload();
        }
        else {
            username.className = "".concat(username.className, " invalid");
            username.setCustomValidity("Логин или пароль неверны!");
            password.className = "".concat(password.className, " invalid");
        }
        username.value = "";
        password.value = "";
    });
};
exports.setupLoginForm = setupLoginForm;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderKnowledgePanel = void 0;
__webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
var currentPage;
if (sessionStorage.getItem("currentPage")) {
    currentPage = Number(sessionStorage.getItem("currentPage"));
}
else {
    currentPage = 1;
}
var pagesHTML = document.getElementById("pages");
var DOGS_PER_PAGE = 4;
var CATS_PER_PAGE = 4;
var currentDogsPerPage = DOGS_PER_PAGE;
var currentCatsPerPage = CATS_PER_PAGE;
var maxButtonsDisplayed = 7;
var numberOfDogs = 25;
var numberOfCats = 25;
var catsList = [];
var dogsList = [];
var getDogsInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, fetch("https://api.thedogapi.com/v1/breeds?limit=".concat(numberOfDogs), {
                        method: "GET", headers: {
                            "x-api-key": "live_lWvmtEurGGkiDbuhzBhBgPfe4Snq0vqj7nQL2bx3CXfxcYVEMPZHGWnbIa3cYy7F"
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4, response.json()];
            case 2: return [2, _a.sent()];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
var getCatsInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, fetch("https://api.thecatapi.com/v1/breeds?limit=".concat(numberOfCats), {
                        method: "GET", headers: {
                            "x-api-key": "live_qTto4DK2B9DlgwEAyOqLNLd2Rt6nNxwhZxxz6AzdcCtFOYft9awLT2h6VNZ35hVm"
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4, response.json()];
            case 2: return [2, _a.sent()];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
var renderBlock = function (animalType, animalInfo) {
    switch (animalType) {
        case "cat":
            return ("<div class=\"knowledgeBlock\">\n            <img class = \"knowledgeBlockImage\" src = \"".concat(animalInfo.image.url, "\" alt = \"cat's missing\" >\n            <h3>").concat(animalInfo.name, "</h3>\n            <p>").concat(animalInfo.temperament, "</p>\n            </div>"));
        case "dog":
            return ("<div class=\"knowledgeBlock\">\n        <img class = \"knowledgeBlockImage\" src = \"".concat(animalInfo.image.url, "\" alt = \"dog's missing\" >\n        <h3>").concat(animalInfo.name, "</h3>\n        <p>").concat(animalInfo.temperament, "</p>\n        </div>"));
        default:
            return null;
    }
};
var getKnowledgeBlocks = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dogsInfo, catsInfo, i, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getDogsInfo()];
            case 1:
                dogsInfo = _a.sent();
                return [4, getCatsInfo()];
            case 2:
                catsInfo = _a.sent();
                if ((currentPage - 1) * currentCatsPerPage <= numberOfCats) {
                    for (i = (currentPage - 1) * CATS_PER_PAGE; i < (currentPage - 1) * CATS_PER_PAGE + CATS_PER_PAGE; i++) {
                        if (i >= numberOfCats) {
                            currentCatsPerPage -= 1;
                            currentDogsPerPage = currentCatsPerPage;
                            continue;
                        }
                        catsList.push(renderBlock("cat", catsInfo[i]));
                    }
                }
                if ((currentPage - 1) * currentDogsPerPage <= numberOfDogs) {
                    for (i = (currentPage - 1) * currentDogsPerPage; i < (currentPage - 1) * currentDogsPerPage + currentDogsPerPage; i++) {
                        if (i >= numberOfDogs) {
                            currentDogsPerPage -= 1;
                            currentCatsPerPage = currentDogsPerPage;
                            continue;
                        }
                        console.log("dog i == " + i);
                        dogsList.push(renderBlock("dog", dogsInfo[i]));
                    }
                }
                return [2];
        }
    });
}); };
var setCurrentPage = function (pageToLoad) {
    currentPage = pageToLoad;
    sessionStorage.setItem("currentPage", currentPage.toString());
    location.reload();
};
window.setCurrentPage = setCurrentPage;
var createPaginationButtons = function (pagesCount) {
    var buttonsCounter = 0;
    var i;
    var buttonsBeforeSelected = 3;
    if (currentPage > 4) {
        pagesHTML.innerHTML += "<button class=\"pageButton\" key={12345} onclick=\"setCurrentPage(1)\">\u0412 \u043D\u0430\u0447\u0430\u043B\u043E</button>";
        buttonsCounter++;
        pagesHTML.innerHTML += "<button class=\"pageButton_inactive\" key={111}>...</button>";
        buttonsCounter++;
        i = currentPage - buttonsBeforeSelected;
    }
    else {
        i = 1;
    }
    for (i; i <= pagesCount; i++) {
        if (buttonsCounter <= maxButtonsDisplayed) {
            var className = "pageButton";
            if (i === currentPage) {
                className = "pageButton_highlighted";
            }
            pagesHTML.innerHTML += "<button class=".concat(className, " key=").concat(i, " onclick=\"setCurrentPage(").concat(i, ")\">").concat(i, "</button>");
        }
        else
            break;
    }
    if (i <= pagesCount) {
        pagesHTML.innerHTML += "<button class=\"pageButton_inactive\" key={000}>...</button>";
    }
    if (currentPage !== pagesCount) {
        pagesHTML.innerHTML += "<button class=\"pageButton\" key={54321} \">\u0414\u0430\u043B\u044C\u0448\u0435</button>";
        pagesHTML.children.item(pagesHTML.children.length - 1).addEventListener("click", function () {
            setCurrentPage(currentPage + 1);
        });
    }
};
var paginationSetup = function () {
    var totalPages = Math.ceil((numberOfCats + numberOfDogs) / (currentCatsPerPage + currentDogsPerPage));
    createPaginationButtons(totalPages);
};
var renderKnowledgePanel = function () { return __awaiter(void 0, void 0, void 0, function () {
    var blocksOnThePage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                checkDeviceWidth();
                if (!(catsList.length === 0 || dogsList.length === 0)) return [3, 2];
                return [4, getKnowledgeBlocks()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                blocksOnThePage = [].concat(catsList, dogsList);
                document.getElementById("knowledgePanel").innerHTML = blocksOnThePage.join("");
                if (currentDogsPerPage > currentCatsPerPage) {
                    document.getElementById("knowledgePanel").style.gridTemplateColumns = "repeat(".concat(currentDogsPerPage, ",minmax(13em, 15em))");
                }
                else {
                    document.getElementById("knowledgePanel").style.gridTemplateColumns = "repeat(".concat(currentCatsPerPage, ",minmax(13em, 15em))");
                }
                paginationSetup();
                return [2];
        }
    });
}); };
exports.renderKnowledgePanel = renderKnowledgePanel;
var checkDeviceWidth = function () {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var login_1 = __webpack_require__(/*! ./login */ "./src/login.ts");
var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
if (sessionStorage.getItem("authorizationKey") !== null) {
    document.getElementById("auth").remove();
    document.getElementById("signButton").remove();
    document.getElementById("mainButton").className = "pageButton_highlighted";
    void (0, main_1.renderKnowledgePanel)();
}
else {
    document.getElementById("signButton").className = "pageButton_highlighted";
    document.getElementById("mainButton").remove();
    document.getElementById("knowledge").remove();
    document.getElementById("pagination").remove();
    (0, login_1.setupLoginForm)();
}

})();

/******/ })()
;
//# sourceMappingURL=bundled83cd259dc6ae32b0c3f.js.map