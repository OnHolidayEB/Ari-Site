/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n#content{\\n    height: 100vh;\\n\\n}\\n/*homepage*/\\n\\n.title{\\n    font-weight: 900;\\n    font-family: Helvetica;\\n    font-size: 56px;\\n    margin: 4vh 0px 0px 0px;\\n    text-align: center;\\n    \\n}\\n\\n.titleLink{\\n    \\n    margin: 2.3vh 0px 0px 2vw;\\n    text-align: center;\\n    color: black;\\n    display: block;\\n    width: fit-content;\\n    font-weight: 700;\\n    font-family: Helvetica;\\n    font-size: 18px;\\n}\\n\\n.menuWrapper{\\n    display: flex;\\n    flex-direction: column;\\n    width: fit-content;\\n    position: absolute;\\n    top: 2vh;\\n    left: 2vw;\\n\\n   \\n}\\n\\n.linkWrapper{\\n    display: flex;\\n    flex-direction: column;\\n    width: fit-content;\\n    padding-left: 3vw;\\n    padding-top: .75vh;\\n    line-height: 1.5;\\n\\n    animation-name: fadeIn;\\n    animation-duration: .5s;\\n    animation-iteration-count: 1;\\n    animation-fill-mode: forwards;\\n}\\n\\n.linkWrapperFadeOut{\\n    animation-name: fadeOut;\\n    animation-duration: .5s;\\n    animation-iteration-count: 1;\\n    animation-fill-mode: forwards;\\n}\\n\\n\\n\\n.menu-link{\\n    color: black;\\n    text-decoration: none;\\n\\n}\\n\\n\\n#splashWrapper{\\n    display: flex;\\n    flex-direction: column;\\n    width: 60vw;\\n    margin: 6vw auto 0 auto;\\n    align-items: center;\\n}\\n\\n#splashImg{\\n    width: 40vw;\\n    height: auto;\\n}\\n\\n#linkWrapper{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 5vh;\\n}\\n\\n.link{\\n    \\n    font-size: 18px;\\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\\n    color: black;\\n    text-decoration: none;\\n    padding: 0px 10px;\\n}\\n\\n\\n\\n.link:hover{\\n    cursor: pointer;\\n}\\n\\n.thumbWrapper{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n}\\n\\n.thumbnail{\\n    height: 150px;\\n    width: auto;\\n\\n    animation-name: fadeIn;\\n    animation-duration: 1s;\\n    animation-iteration-count: 1;\\n    animation-fill-mode: forwards;\\n}\\n\\n.thumbnail:hover{\\n    cursor:pointer;\\n}\\n\\n.thumbCaption{\\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\\n    text-align: center;\\n    color: black;\\n    text-decoration: none;\\n}\\n\\n.thumbCaption:hover{\\n    cursor: pointer;\\n}\\n\\n#editorialWrapper{\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    margin-top: 5vh;\\n}\\n\\n.edThumbnail{\\n    height: 250px;\\n    width: auto;\\n}\\n\\na:hover, a:visited, a:link, a:active\\n{\\n    text-decoration: none;\\n}\\n\\n/* about page */\\n\\n.aboutText{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    font-size: 14px;\\n    height: 80vh;\\n    margin: 0px auto;\\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\\n    text-align: center;\\n    line-height: 2;\\n}\\n\\n\\n/* photo gallery */\\n\\n.gallery-title{\\n    font-weight: 700;\\n    font-family: Helvetica;\\n    font-size: 18px;\\n    margin: 0px;\\n    padding-left: 1.25vw;\\n    padding-top: 1vh;\\n    text-decoration: none;\\n    color: black;\\n}\\n    \\n.arrow-left{\\n    display: flex;\\n    width: 0;\\n    height: 0;\\n    border-top: 10px solid transparent;\\n    border-bottom: 10px solid transparent;\\n    border-right: 10px solid black;\\n    margin-left: 15px;\\n    justify-self: center;\\n    \\n}\\n\\n.arrow-right{\\n  width: 0; \\n  height: 0; \\n  border-top: 10px solid transparent;\\n  border-bottom: 10px solid transparent;\\n  border-left: 10px solid black;\\n  margin-right: 15px;\\n}\\n\\n.gallery-img{\\n    display: flex;\\n    height: 80vh;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: 0 auto;\\n    opacity: 0;\\n    \\n    animation-name: fadeIn;\\n    animation-duration: 1.5s;\\n    animation-iteration-count: 1;\\n    animation-fill-mode: forwards;\\n\\n}\\n\\n.img-fadeOut{\\n    animation-name: fadeOut;\\n    animation-duration: 1.5s;\\n    animation-iteration-count: 1;\\n    animation-fill-mode: forwards;\\n}\\n\\n@keyframes fadeIn{\\n    0%{\\n        opacity: 0%\\n    }\\n\\n    100%{\\n        opacity: 100%\\n    }\\n}\\n\\n@keyframes fadeOut {\\n    0% {\\n        opacity: 100%;\\n    }\\n\\n    100%{\\n        opacity: 0%;\\n    }\\n    \\n}\\n\\n.galleryWrapper{\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    \\n    height: 100vh;\\n    margin: 0 auto;\\n    justify-content: space-between;\\n\\n    /*\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    margin-top: 15vh;\\n    justify-content: space-between;*/\\n}\\n\\n\\n.gallery-caption{\\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\\n    margin-top: 10px;\\n}\\n\\n.gallery-figure{\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    height: 80vh;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: auto;\\n    width: fit-content;\\n\\n\\n    /*\\n    display: flex;\\n    position: static;\\n    height: 80vh;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: 0 auto;*/\\n}\\n\\n.click-caption{\\n    display: none;\\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\\n    font-size: 10px;\\n    margin-top: 10px;\\n}\\n\\n\\n@media only screen and (max-width: 500px){\\n    /* homepage */\\n    \\n    .title{\\n        font-weight: 900;\\n        font-family: Helvetica;\\n        font-size: 36px;\\n        margin: 4vh 0px 0px 0px;\\n        text-align: center;\\n        \\n    }\\n    \\n    \\n    #splashWrapper {\\n        display: flex;\\n        flex-direction: column;\\n        width: 90vw;\\n        margin: 6vw auto 0 auto;\\n    }    \\n\\n    #splashImg{\\n        width: 90vw;\\n        height: auto;\\n    }\\n\\n    #linkWrapper{\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: space-evenly;\\n        align-items: center;\\n        margin: 5vh;\\n    }\\n\\n    .link{\\n        margin: 0px;\\n    }\\n\\n    /* menu bar */\\n\\n    .menuWrapper{\\n        background-color: rgba(255, 255, 255, .65);\\n        z-index: 40;\\n    }\\n\\n    /* about page*/\\n\\n    .aboutText{\\n        width: 75vw;\\n    }\\n\\n    /* gallery */\\n\\n    .gallery-figure {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        margin: 0 auto;\\n        justify-content: center;\\n        height: auto;\\n    }\\n    .galleryWrapper {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        margin-top: 0px;\\n        justify-content: center;\\n        height: 90vh;\\n    }\\n\\n    .gallery-img {\\n        max-width: 95vw;\\n        height: fit-content;\\n        margin: 0 auto;\\n        max-height: 65vh;\\n        object-fit: contain;\\n    }\\n\\n    .gallery-caption{\\n        \\n        font-size: 14px;\\n        position: absolute;\\n        bottom: 8vh;\\n\\n    }\\n\\n    .arrow-left {\\n        display:none;\\n    }\\n\\n    .arrow-right{\\n        display: none;\\n    }\\n\\n    .click-caption{\\n        display: block;\\n        font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\\n        font-size: 10px;\\n        margin-top: 10px;\\n        position: absolute;\\n        bottom: 10vh;\\n    }\\n\\n\\n        \\n\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ari/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ari/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/images/Brion.jpeg":
/*!*******************************!*\
  !*** ./src/images/Brion.jpeg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/2e172b1568330393f412fc50cabdc3c9.jpeg\");\n\n//# sourceURL=webpack://ari/./src/images/Brion.jpeg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DestinyStrudwick-Image1.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/EditorialGallery/DestinyStrudwick-Image1.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/5c343d302a48acad33d0e15801c377b3.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DestinyStrudwick-Image1.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DestinyStrudwick-Image2.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/EditorialGallery/DestinyStrudwick-Image2.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/756f3ac7b80f342fb01903ce22631e5c.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DestinyStrudwick-Image2.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DestinyStrudwick-Image3.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/EditorialGallery/DestinyStrudwick-Image3.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/0fc97c12c38941b5b9a0283858e32656.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DestinyStrudwick-Image3.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DestinyStrudwick-Image4.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/EditorialGallery/DestinyStrudwick-Image4.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/e0f1c512876fe83514400f723e61e0b3.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DestinyStrudwick-Image4.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DestinyStrudwick-Image5.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/EditorialGallery/DestinyStrudwick-Image5.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/b42c005cd94b77ca67ae273160c5ee26.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DestinyStrudwick-Image5.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DustinHeath-Image1.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/DustinHeath-Image1.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/4926f58a4a3aef5cac87c764c32d4752.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DustinHeath-Image1.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DustinHeath-Image2.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/DustinHeath-Image2.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/29e5075238788a4e7837fb94ec872507.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DustinHeath-Image2.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DustinHeath-Image3.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/DustinHeath-Image3.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/19b43d0b89441a03fe58d12ce5266bda.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DustinHeath-Image3.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/DustinHeath-Image4.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/DustinHeath-Image4.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/812e8b18c376dd5787f083200094b13e.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/DustinHeath-Image4.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/EmmaBoyd-FirstImage.jpg":
/*!*************************************************************!*\
  !*** ./src/images/EditorialGallery/EmmaBoyd-FirstImage.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/55fa73fc3a81ac37bdc086df73333eb7.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/EmmaBoyd-FirstImage.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/EmmaBoyd-FourthImage.jpg":
/*!**************************************************************!*\
  !*** ./src/images/EditorialGallery/EmmaBoyd-FourthImage.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/ae8dfb53cfb5b085fe1251cca5edd0e7.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/EmmaBoyd-FourthImage.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/EmmaBoyd-SecondImage.jpg":
/*!**************************************************************!*\
  !*** ./src/images/EditorialGallery/EmmaBoyd-SecondImage.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/9605bc53571450cb9446405c134d945b.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/EmmaBoyd-SecondImage.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/EmmaBoyd-ThirdImage.jpg":
/*!*************************************************************!*\
  !*** ./src/images/EditorialGallery/EmmaBoyd-ThirdImage.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/44040cbd3282ca2c060d5d9ed44bad14.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/EmmaBoyd-ThirdImage.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/FosterJames-Image1.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/FosterJames-Image1.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/1928d55fee6632dd3f9eb7b421552801.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/FosterJames-Image1.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/FosterJames-Image2.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/FosterJames-Image2.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/cb18d161cd6258b62768a20eb3d821ab.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/FosterJames-Image2.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/FosterJames-Image3.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/FosterJames-Image3.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/4de840a5f0d51db3ccb32c6b9a356e9a.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/FosterJames-Image3.jpg?");

/***/ }),

/***/ "./src/images/EditorialGallery/FosterJames-Image4.jpg":
/*!************************************************************!*\
  !*** ./src/images/EditorialGallery/FosterJames-Image4.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/487099d91163267f2d2196ee820e827f.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/EditorialGallery/FosterJames-Image4.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/Alexia-Image1.jpg":
/*!******************************************************!*\
  !*** ./src/images/PortriatGallery/Alexia-Image1.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/eec5d6f8f239afd6627d1e3e51cc0637.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/Alexia-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/Alexia-Image2.jpg":
/*!******************************************************!*\
  !*** ./src/images/PortriatGallery/Alexia-Image2.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/bef384a187a254172348d31c9a2cff0a.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/Alexia-Image2.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/BeastieVee-Image1.jpg":
/*!**********************************************************!*\
  !*** ./src/images/PortriatGallery/BeastieVee-Image1.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/88967553ac8c8e81ec1655cf067b2f47.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/BeastieVee-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/BrionStarr-Image1.jpg":
/*!**********************************************************!*\
  !*** ./src/images/PortriatGallery/BrionStarr-Image1.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/96de0f0a81caaa0bfcd7b517108977ab.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/BrionStarr-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/BrionStarr-Image2.jpg":
/*!**********************************************************!*\
  !*** ./src/images/PortriatGallery/BrionStarr-Image2.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/a8e84a9a714fa3206ce1a6bb454ebbc7.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/BrionStarr-Image2.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/DimphyJanse-Image1.jpg":
/*!***********************************************************!*\
  !*** ./src/images/PortriatGallery/DimphyJanse-Image1.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/c1a711e04a0cfcff42493f1020f49961.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/DimphyJanse-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/DimphyJanse-Image2.jpg":
/*!***********************************************************!*\
  !*** ./src/images/PortriatGallery/DimphyJanse-Image2.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/3ddf232de7f1c78e1b315602ff19accc.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/DimphyJanse-Image2.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/DimphyJanse-Image3.jpg":
/*!***********************************************************!*\
  !*** ./src/images/PortriatGallery/DimphyJanse-Image3.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/e399112ae8767fb5ba13e5530e6038e3.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/DimphyJanse-Image3.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/IanWeglarz-Image1.jpg":
/*!**********************************************************!*\
  !*** ./src/images/PortriatGallery/IanWeglarz-Image1.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/7d85199ded32dfd98a3828f63d783ad9.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/IanWeglarz-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/IanWeglarz-Image2.jpg":
/*!**********************************************************!*\
  !*** ./src/images/PortriatGallery/IanWeglarz-Image2.jpg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/5adc492e04cc2629ae80a94acb38ef16.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/IanWeglarz-Image2.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/JohnnyDonohoe-Image1.jpg":
/*!*************************************************************!*\
  !*** ./src/images/PortriatGallery/JohnnyDonohoe-Image1.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/66cc977bfd009fda82779f38d16e3fa0.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/JohnnyDonohoe-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/JohnnyDonohoe-Image2.jpg":
/*!*************************************************************!*\
  !*** ./src/images/PortriatGallery/JohnnyDonohoe-Image2.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/0778bafbf2d4dc70417ce011075d1f8c.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/JohnnyDonohoe-Image2.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/MiloMatthieu-Image1.jpg":
/*!************************************************************!*\
  !*** ./src/images/PortriatGallery/MiloMatthieu-Image1.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/e241222b4d6f95d1c64ee19ef99e97fe.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/MiloMatthieu-Image1.jpg?");

/***/ }),

/***/ "./src/images/PortriatGallery/MiloMatthieu-Image2.jpg":
/*!************************************************************!*\
  !*** ./src/images/PortriatGallery/MiloMatthieu-Image2.jpg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/bc18b8d3835208406824dc794ad36816.jpg\");\n\n//# sourceURL=webpack://ari/./src/images/PortriatGallery/MiloMatthieu-Image2.jpg?");

/***/ }),

/***/ "./src/images/editorial.jpeg":
/*!***********************************!*\
  !*** ./src/images/editorial.jpeg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/9985edefc7b1b6ec2ae52884c3186668.jpeg\");\n\n//# sourceURL=webpack://ari/./src/images/editorial.jpeg?");

/***/ }),

/***/ "./src/images/portrait.jpeg":
/*!**********************************!*\
  !*** ./src/images/portrait.jpeg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/69b4864ae23daea7a8e57dcb27bca12c.jpeg\");\n\n//# sourceURL=webpack://ari/./src/images/portrait.jpeg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://ari/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ari/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createDiv = (divClass) => {\n    const div = document.createElement('div');\n    div.classList.add(`${divClass}`);\n\n    return div;\n}\n\n\n\nconst loadAbout = () => {\n    const content = document.getElementById('content');\n    \n    const aboutText = createDiv('aboutText');\n    \n    aboutText.innerHTML = \"Fashion and Portrait photographer based in New York City. <br/a> For inquiries email Ariel.Sadok@gmail.com\"\n\n    content.appendChild(aboutText);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://ari/./src/about.js?");

/***/ }),

/***/ "./src/editorialGallery.js":
/*!*********************************!*\
  !*** ./src/editorialGallery.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_EditorialGallery_EmmaBoyd_FirstImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/EditorialGallery/EmmaBoyd-FirstImage.jpg */ \"./src/images/EditorialGallery/EmmaBoyd-FirstImage.jpg\");\n/* harmony import */ var _images_EditorialGallery_EmmaBoyd_SecondImage_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/EditorialGallery/EmmaBoyd-SecondImage.jpg */ \"./src/images/EditorialGallery/EmmaBoyd-SecondImage.jpg\");\n/* harmony import */ var _images_EditorialGallery_EmmaBoyd_ThirdImage_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/EditorialGallery/EmmaBoyd-ThirdImage.jpg */ \"./src/images/EditorialGallery/EmmaBoyd-ThirdImage.jpg\");\n/* harmony import */ var _images_EditorialGallery_EmmaBoyd_FourthImage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/EditorialGallery/EmmaBoyd-FourthImage.jpg */ \"./src/images/EditorialGallery/EmmaBoyd-FourthImage.jpg\");\n/* harmony import */ var _images_EditorialGallery_DestinyStrudwick_Image1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/EditorialGallery/DestinyStrudwick-Image1.jpg */ \"./src/images/EditorialGallery/DestinyStrudwick-Image1.jpg\");\n/* harmony import */ var _images_EditorialGallery_DestinyStrudwick_Image2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/EditorialGallery/DestinyStrudwick-Image2.jpg */ \"./src/images/EditorialGallery/DestinyStrudwick-Image2.jpg\");\n/* harmony import */ var _images_EditorialGallery_DestinyStrudwick_Image3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/EditorialGallery/DestinyStrudwick-Image3.jpg */ \"./src/images/EditorialGallery/DestinyStrudwick-Image3.jpg\");\n/* harmony import */ var _images_EditorialGallery_DestinyStrudwick_Image4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/EditorialGallery/DestinyStrudwick-Image4.jpg */ \"./src/images/EditorialGallery/DestinyStrudwick-Image4.jpg\");\n/* harmony import */ var _images_EditorialGallery_DestinyStrudwick_Image5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/EditorialGallery/DestinyStrudwick-Image5.jpg */ \"./src/images/EditorialGallery/DestinyStrudwick-Image5.jpg\");\n/* harmony import */ var _images_EditorialGallery_DustinHeath_Image1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/EditorialGallery/DustinHeath-Image1.jpg */ \"./src/images/EditorialGallery/DustinHeath-Image1.jpg\");\n/* harmony import */ var _images_EditorialGallery_DustinHeath_Image2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/EditorialGallery/DustinHeath-Image2.jpg */ \"./src/images/EditorialGallery/DustinHeath-Image2.jpg\");\n/* harmony import */ var _images_EditorialGallery_DustinHeath_Image3_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/EditorialGallery/DustinHeath-Image3.jpg */ \"./src/images/EditorialGallery/DustinHeath-Image3.jpg\");\n/* harmony import */ var _images_EditorialGallery_DustinHeath_Image4_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/EditorialGallery/DustinHeath-Image4.jpg */ \"./src/images/EditorialGallery/DustinHeath-Image4.jpg\");\n/* harmony import */ var _images_EditorialGallery_FosterJames_Image1_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/EditorialGallery/FosterJames-Image1.jpg */ \"./src/images/EditorialGallery/FosterJames-Image1.jpg\");\n/* harmony import */ var _images_EditorialGallery_FosterJames_Image2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/EditorialGallery/FosterJames-Image2.jpg */ \"./src/images/EditorialGallery/FosterJames-Image2.jpg\");\n/* harmony import */ var _images_EditorialGallery_FosterJames_Image3_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/EditorialGallery/FosterJames-Image3.jpg */ \"./src/images/EditorialGallery/FosterJames-Image3.jpg\");\n/* harmony import */ var _images_EditorialGallery_FosterJames_Image4_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/EditorialGallery/FosterJames-Image4.jpg */ \"./src/images/EditorialGallery/FosterJames-Image4.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst createDiv = (divClass) => {\n    const div = document.createElement('div');\n    div.classList.add(`${divClass}`);\n\n    return div;\n}\n\n\n\nconst createFigure = (source, caption, idNumber ) => {\n    const figure = document.createElement('figure');\n    figure.classList.add('gallery-figure');\n    figure.id = 'gallery-figure';\n    figure.dataset.idNumber = idNumber;\n\n    const img = document.createElement('img');\n    img.classList.add('gallery-img');\n    img.src = source;\n\n    const figCaption = document.createElement('figcaption');\n    figCaption.classList.add('gallery-caption');\n    figCaption.innerHTML = caption;\n\n    figure.appendChild(img);\n    figure.appendChild(figCaption);\n\n    return figure;\n\n};\n\n\nconst galleryImg = (img, caption, idNumber) =>{\n\n    return {img, caption, idNumber}\n\n}\n\nconst GalleryArray = () => {\n    \n    const galleryArray_ = [];\n\n    function populateArray(...images) {\n        images.forEach(image => galleryArray_.push(image));\n    }\n\n    const getArray = () => {\n        return galleryArray_\n    }\n\n    return {populateArray, getArray};\n\n}\n\nconst GalleryDom = () => {\n    const emmaFirst_ = galleryImg(_images_EditorialGallery_EmmaBoyd_FirstImage_jpg__WEBPACK_IMPORTED_MODULE_0__.default, 'Emma Kate Boyd', '0');\n    const emmaSecond_ = galleryImg(_images_EditorialGallery_EmmaBoyd_SecondImage_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 'Emma Kate Boyd', '1');\n    const emmaThird_ = galleryImg(_images_EditorialGallery_EmmaBoyd_ThirdImage_jpg__WEBPACK_IMPORTED_MODULE_2__.default, 'Emma Kate Boyd', '2');\n    const emmaFourth_ = galleryImg(_images_EditorialGallery_EmmaBoyd_FourthImage_jpg__WEBPACK_IMPORTED_MODULE_3__.default, 'Emma Kate Boyd', '3');\n    const destinyFirst_ = galleryImg(_images_EditorialGallery_DestinyStrudwick_Image1_jpg__WEBPACK_IMPORTED_MODULE_4__.default, 'Destiny Strudwick', '4');\n    const destinySecond_ = galleryImg(_images_EditorialGallery_DestinyStrudwick_Image2_jpg__WEBPACK_IMPORTED_MODULE_5__.default, 'Destiny Strudwick', '5');\n    const destinyThird_ = galleryImg(_images_EditorialGallery_DestinyStrudwick_Image3_jpg__WEBPACK_IMPORTED_MODULE_6__.default, 'Destiny Strudwick', '6');\n    const destinyFourth_ = galleryImg(_images_EditorialGallery_DestinyStrudwick_Image4_jpg__WEBPACK_IMPORTED_MODULE_7__.default, 'Destiny Strudwick', '7');\n    const destinyFifth_ = galleryImg(_images_EditorialGallery_DestinyStrudwick_Image5_jpg__WEBPACK_IMPORTED_MODULE_8__.default, 'Destiny Strudwick', '8');\n    const dustinFirst_ = galleryImg(_images_EditorialGallery_DustinHeath_Image1_jpg__WEBPACK_IMPORTED_MODULE_9__.default, 'Dustin Heath', '9');\n    const dustinSecond_ = galleryImg(_images_EditorialGallery_DustinHeath_Image2_jpg__WEBPACK_IMPORTED_MODULE_10__.default, 'Dustin Heath', '10');\n    const dustinThird_ = galleryImg(_images_EditorialGallery_DustinHeath_Image3_jpg__WEBPACK_IMPORTED_MODULE_11__.default, 'Dustin Heath', '11');\n    const dustinFourth_ = galleryImg(_images_EditorialGallery_DustinHeath_Image4_jpg__WEBPACK_IMPORTED_MODULE_12__.default, 'Dustin Heath', '12');\n    const fosterFirst_ = galleryImg(_images_EditorialGallery_FosterJames_Image1_jpg__WEBPACK_IMPORTED_MODULE_13__.default, 'Foster James', '13');\n    const fosterSecond_ = galleryImg(_images_EditorialGallery_FosterJames_Image2_jpg__WEBPACK_IMPORTED_MODULE_14__.default, 'Foster James', '14');\n    const fosterThird_ = galleryImg(_images_EditorialGallery_FosterJames_Image3_jpg__WEBPACK_IMPORTED_MODULE_15__.default, 'Foster James', '15');\n    const fosterForth_ = galleryImg(_images_EditorialGallery_FosterJames_Image4_jpg__WEBPACK_IMPORTED_MODULE_16__.default, 'Foster James', '16');\n    \n    const galleryDom = GalleryArray();\n    galleryDom.populateArray(emmaFirst_, emmaSecond_, emmaThird_, emmaFourth_, \n            destinyFirst_, destinySecond_, destinyThird_, destinyFourth_, destinyFifth_,\n            dustinFirst_, dustinSecond_, dustinThird_, dustinFourth_,\n            fosterFirst_, fosterSecond_, fosterThird_, fosterForth_\n                );\n\n    const galleryArray = galleryDom.getArray();\n    \n    function getGalleryDom(){\n        return galleryArray;\n    }\n\n    return {getGalleryDom};\n}\n\n\n\nconst addEventListeners = () => {\n    const leftArrow = document.getElementById('arrow-left');\n    const rightArrow = document.getElementById('arrow-right');\n    const images = document.querySelectorAll('img.gallery-img');\n\n    leftArrow.addEventListener('click', backArrow);\n    rightArrow.addEventListener('click', forwardArrow);\n    images.forEach(img => {\n        img.addEventListener('click', forwardArrow);\n    })\n}   \n\nfunction backArrow() {\n    const gallery = GalleryDom().getGalleryDom();\n    const currentFig = getCurrentGalleryFigure();\n    const currentFigID = parseInt(currentFig.dataset.idNumber);\n    const newFigID = currentFigID - 1;\n    const newFig = document.querySelector(`.gallery-figure[data-id-number=\"${newFigID}\"]`)\n\n    currentFig.style.zIndex = 0;\n    currentFig.classList.toggle('img-fadeOut')\n    currentFig.addEventListener('animationend', (e) => {\n\n        if(e.animationName == 'fadeIn'){\n            return;\n        }\n\n        else{\n            currentFig.style.display = 'none';\n            currentFig.classList.remove('img-fadeOut');\n\n        }\n        \n    })\n\n    if(currentFigID == 0){\n        const firstImg = document.querySelector(`.gallery-figure[data-id-number= '${gallery.length - 1}']`);\n        firstImg.style.zIndex = 30;\n        firstImg.style.display = 'flex';\n        firstImg.id = 'current-figure';\n        currentFig.id = '';\n\n\n    }\n\n    else{\n        currentFig.id = '';\n        newFig.style.zIndex = 30;\n        newFig.style.display = 'flex';\n        newFig.id = 'current-figure'\n        const newFigImg = newFig.querySelector('.gallery-img');\n        newFigImg.id = 'current-image';\n    }\n    \n    \n    \n    \n    \n    /*const gallery = GalleryDom().getGalleryDom();\n    const currentFig = getCurrentGalleryFigure();\n    const currentFigID = currentFig.dataset.idNumber;\n    const newFigID = parseInt(currentFigID) - 1;\n    const figureWrapper = document.getElementById('figureWrapper');\n\n    if(currentFigID == 0){\n        const lastImgId = gallery.length - 1;\n        const newImg = createFigure(gallery[lastImgId].img, gallery[lastImgId].caption, gallery[lastImgId].idNumber);\n        currentFig.remove();\n        figureWrapper.appendChild(newImg);\n        newImg.addEventListener('click', forwardArrow);\n\n\n    }\n\n    else{\n        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);\n        currentFig.remove();\n        figureWrapper.appendChild(newImg);\n        newImg.addEventListener('click', forwardArrow);\n\n\n    }\n    */\n\n}\n\nfunction forwardArrow(){\n    const gallery = GalleryDom().getGalleryDom();\n    const currentFig = getCurrentGalleryFigure();\n    const currentFigID = parseInt(currentFig.dataset.idNumber);\n    const newFigID = currentFigID + 1;\n    const newFig = document.querySelector(`.gallery-figure[data-id-number=\"${newFigID}\"]`)\n\n    currentFig.style.zIndex = 0;\n    currentFig.classList.toggle('img-fadeOut')\n    currentFig.addEventListener('animationend', (e) => {\n\n        if(e.animationName == 'fadeIn'){\n            return;\n        }\n\n        else{\n            currentFig.style.display = 'none';\n            currentFig.classList.remove('img-fadeOut');\n\n        }\n        \n    })\n\n    if(currentFigID == gallery.length - 1){\n        const firstImg = document.querySelector('.gallery-figure[data-id-number=\"0\"]');\n        firstImg.style.zIndex = 30;\n        firstImg.style.display = 'flex';\n        firstImg.id = 'current-figure';\n        currentFig.id = '';\n\n\n    }\n\n    else{\n        currentFig.id = '';\n        const currentFigImg = currentFig.querySelector('.gallery-img');\n        currentFigImg.id = '';\n        newFig.style.zIndex = 30;\n        newFig.style.display = 'flex';\n        newFig.id = 'current-figure'\n        const newFigImg = newFig.querySelector('.gallery-img');\n        newFigImg.id = 'current-image';\n        if(document.getElementById('click-caption') != null){\n            removeClickCaption();\n        }\n    }\n    \n   \n\n    \n\n\n\n\n\n/*\n    if(currentFigID == gallery.length - 1){\n        const newImg = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);\n        currentFig.remove();\n        figureWrapper.appendChild(newImg);\n        newImg.addEventListener('click', forwardArrow);\n\n    }\n\n    else{\n        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);\n        currentFig.addEventListener('animationend', () => {\n            currentFig.remove();\n        })\n        currentFig.classList.toggle(\"img-fadeOut\")\n\n        newImg.addEventListener('click', forwardArrow);\n        if(document.getElementById('click-caption') != null){\n            removeClickCaption();\n        }\n\n        figureWrapper.appendChild(newImg);\n\n    }*/\n\n    \n}   \n\nconst removeClickCaption = () => {\n    const clickCaption = document.getElementById('click-caption');\n    clickCaption.remove();\n}\n\nconst getCurrentGalleryFigure = () => {\n    const figure = document.getElementById('current-figure');\n    \n    return figure;\n}\n\nconst loadEditorialGallery = () => {\n    const content = document.getElementById('content');\n\n    const galleryWrapper = createDiv('galleryWrapper');\n    const arrowLeft = createDiv('arrow-left');\n    arrowLeft.id= 'arrow-left';\n    const arrowRight = createDiv('arrow-right');\n    arrowRight.id='arrow-right';\n\n    const gallery = GalleryDom().getGalleryDom();\n\n    const figureWrapper = createDiv('figureWrapper');\n    figureWrapper.id = 'figureWrapper';\n\n    const clickCaption = createDiv('click-caption');\n    clickCaption.id = 'click-caption'\n    clickCaption.innerHTML = \"Click Image to Scroll\";\n    \n    content.appendChild(galleryWrapper);\n    galleryWrapper.appendChild(arrowLeft);\n    galleryWrapper.appendChild(figureWrapper);\n    gallery.forEach((image, index) => {\n        image = createFigure(gallery[index].img, gallery[index].caption, gallery[index].idNumber);\n        figureWrapper.appendChild(image);\n        image.style.zIndex = 0;\n        image.style.display = 'none';\n    })\n    galleryWrapper.appendChild(arrowRight);\n    galleryWrapper.appendChild(clickCaption);\n\n    \n    const currentFigure = document.querySelector('.gallery-figure[data-id-number=\"0\"]');\n    currentFigure.style.zIndex = 30;\n    currentFigure.style.display = 'flex';\n    currentFigure.id = 'current-figure';\n    const currentFigureImg = currentFigure.querySelector('.gallery-img');\n    currentFigureImg.id = 'current-image';\n   \n\n\n    addEventListeners();\n\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadEditorialGallery);\n\n\n\n\n\n//# sourceURL=webpack://ari/./src/editorialGallery.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_Brion_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Brion.jpeg */ \"./src/images/Brion.jpeg\");\n\n\n\nconst createSplashWrapper = () => {\n    const splashWrapper = document.createElement('div');\n    splashWrapper.id = 'splashWrapper';\n\n    return splashWrapper;\n}\n\nconst createSplashImg = () => {\n    const splashImg = document.createElement('img');\n    splashImg.id = 'splashImg';\n    splashImg.src = _images_Brion_jpeg__WEBPACK_IMPORTED_MODULE_0__.default;\n    \n    return splashImg;\n}\n\nconst createTitle = (titleText) => {\n    const title = document.createElement('h1');\n    title.classList.add('title');\n    title.innerHTML = titleText;\n\n    return title;\n}\n\nconst createLinkWrapper = () => {\n    const linkWrapper = document.createElement('div');\n    linkWrapper.id = 'linkWrapper';\n\n    return linkWrapper;\n}\n\nconst createLink = (linkText) => {\n    const link = document.createElement('a');\n    link.classList.add('link');\n    link.innerHTML = `${linkText}`;\n\n    return link;\n}\n\nconst pushSplash = () => {\n    const splashWrapper = createSplashWrapper();\n    const splashImg = createSplashImg();\n\n    splashWrapper.appendChild(splashImg);\n    splashWrapper.appendChild(createTitle('ARIEL SADOK'));\n\n\n    return splashWrapper;\n}\n\nconst pushLink = () => {\n    const linkWrapper =  createLinkWrapper();\n    \n    const portfolios = linkWrapper.appendChild(createLink('Portfolios'));\n    portfolios.id = 'portfolio';\n    portfolios.href = '#thumbWrapper';\n    const bio = linkWrapper.appendChild(createLink('Contact'));\n    bio.id = 'bio';\n    bio.href = 'about.html'\n\n\n    return linkWrapper;\n}\n\nconst loadHomePage = () => {\n    const content = document.getElementById('content');\n    content.appendChild(pushSplash());\n    content.appendChild(pushLink());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\n\n//# sourceURL=webpack://ari/./src/home.js?");

/***/ }),

/***/ "./src/homepageLinks.js":
/*!******************************!*\
  !*** ./src/homepageLinks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_portrait_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/portrait.jpeg */ \"./src/images/portrait.jpeg\");\n/* harmony import */ var _images_editorial_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/editorial.jpeg */ \"./src/images/editorial.jpeg\");\n\n\n\n\nconst addEventListeners = () => {\n    const links = document.querySelectorAll('.link');\n    links.forEach(link => {\n        link.addEventListener('click', parseLink);\n\n    })\n\n}\n\nfunction parseLink() {\n    \n    switch(this.id){\n        case 'portfolio':\n            pushPortfolioDom();\n            break;\n        case 'bio':\n            bio();\n            break;\n            \n    }\n}\n\nconst createWrapper = () => {\n    const thumbWrapper = document.createElement('div');\n    thumbWrapper.classList.add('thumbWrapper');\n    thumbWrapper.id = 'thumbWrapper'\n\n    return thumbWrapper;\n\n}\n\nconst createPortfolioLink = (thumbnail, caption, link) => {\n    const anchor = document.createElement('a');\n    const figure = document.createElement('figure');\n    const portraitThumb = document.createElement('img');\n    const figCaption = document.createElement('figcaption');\n\n    anchor.href=`${link}`;\n\n    portraitThumb.src = thumbnail;\n    portraitThumb.classList.add('thumbnail')\n\n    figCaption.innerHTML = `${caption}`;\n    figCaption.classList.add('thumbCaption');\n\n    anchor.appendChild(figure);\n    figure.appendChild(portraitThumb);\n    figure.appendChild(figCaption);\n\n    return anchor;\n   \n}\n\n\nconst pushPortfolioDom = () =>{\n\n    if(document.body.contains(document.getElementById('thumbWrapper'))){\n        return;\n    }\n\n    else{\n        const content = document.getElementById('content');\n        const thumbWrapper = content.appendChild(createWrapper());\n        thumbWrapper.appendChild(createPortfolioLink(_images_portrait_jpeg__WEBPACK_IMPORTED_MODULE_0__.default, 'Portrait', 'portrait.html'));\n        thumbWrapper.appendChild(createPortfolioLink(_images_editorial_jpeg__WEBPACK_IMPORTED_MODULE_1__.default, 'Editorial', 'editorial.html'));\n\n    }\n    \n}\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners);\n\n//# sourceURL=webpack://ari/./src/homepageLinks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _homepageLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepageLinks */ \"./src/homepageLinks.js\");\n/* harmony import */ var _editorialGallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editorialGallery.js */ \"./src/editorialGallery.js\");\n/* harmony import */ var _portraitGallery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portraitGallery.js */ \"./src/portraitGallery.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menuBar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuBar.js */ \"./src/menuBar.js\");\n\n\n\n\n\n\n\n\n\n\nfunction getUrl(){\n    return window.location.href;\n}\nswitch (getUrl()) {\n\n    case 'https://onholidayeb.github.io/Ari-Site/':\n        init();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        (0,_homepageLinks__WEBPACK_IMPORTED_MODULE_2__.default)();\n        break;\n\n    case 'https://onholidayeb.github.io/Ari-Site/index.html': \n        init();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        (0,_homepageLinks__WEBPACK_IMPORTED_MODULE_2__.default)();\n        break;\n\n    case 'https://onholidayeb.github.io/Ari-Site/portrait.html':\n        init();\n        (0,_menuBar_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n        (0,_portraitGallery_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n        break;\n    \n    case 'https://onholidayeb.github.io/Ari-Site/index.html#thumbWrapper':\n        init();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        (0,_homepageLinks__WEBPACK_IMPORTED_MODULE_2__.default)();\n        break;\n    \n    case 'https://onholidayeb.github.io/Ari-Site/editorial.html':\n        init();\n        (0,_menuBar_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n        (0,_editorialGallery_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n        break;\n    \n    case 'https://onholidayeb.github.io/Ari-Site/about.html':\n        init();\n        (0,_menuBar_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n        break;\n        \n    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html':\n        init();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        (0,_homepageLinks__WEBPACK_IMPORTED_MODULE_2__.default)();\n        break;\n \n    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/portrait.html':\n            \n        init();\n        (0,_menuBar_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n        (0,_portraitGallery_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n        break;\n     \n    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html#thumbWrapper':\n              \n        init();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        (0,_homepageLinks__WEBPACK_IMPORTED_MODULE_2__.default)();\n        break;\n     \n    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/editorial.html':\n            \n        init();\n        (0,_menuBar_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n        (0,_editorialGallery_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n        break;\n     \n    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/about.html':\n         init();\n         (0,_menuBar_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n         (0,_about_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n         break;\n\n        \n}\n\nfunction init(){\n    const content = document.getElementById('content');\n    const div = content.querySelectorAll('div')\n\n    div.forEach(e => e.remove());\n\n}\n\n\n\n//# sourceURL=webpack://ari/./src/index.js?");

/***/ }),

/***/ "./src/menuBar.js":
/*!************************!*\
  !*** ./src/menuBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createDiv = (divClass) => {\n    const div = document.createElement('div');\n    div.classList.add(`${divClass}`);\n\n    return div;\n}\n\nconst createMenuLink = (linkText, linkPage) => {\n    const link = document.createElement('a');\n    link.classList.add('menu-link');\n    link.innerHTML = linkText;\n    link.href =  `${linkPage}.html`\n\n    return link;\n\n}\n\nconst createTitle = (titleText) => {\n    const anchor = document.createElement('a');\n    anchor.id = 'title-anchor'\n    const title = document.createElement('h1');\n\n\n    title.classList.add('gallery-title');\n    title.innerHTML = titleText;\n\n\n    anchor.appendChild(title);\n\n    return anchor;\n}\n\nconst pushMenu = () => {\n    if(document.body.contains(document.getElementById('about-link'))){\n        return;\n    }\n\n    else{\n\n        const menuWrapper = document.getElementById('menuWrapper')\n        const linkWrapper = createDiv('linkWrapper');\n        linkWrapper.id = 'menu-link-wrapper';\n        const title = document.getElementById('title-anchor');\n\n      \n        \n        const editorial = createMenuLink('Editorial', 'editorial');\n        const portrait = createMenuLink('Portrait', 'portrait');\n        const about = createMenuLink('Contact', 'about');\n        about.id = 'about-link'\n\n        linkWrapper.appendChild(editorial);\n        linkWrapper.appendChild(portrait);\n        linkWrapper.appendChild(about);\n\n        menuWrapper.appendChild(linkWrapper);\n        title.addEventListener('click', () => {\n            title.href = 'index.html'\n\n        })\n\n    }\n}\n\nconst rmMenu = () => {\n    const linkWrapper = document.getElementById('menu-link-wrapper');\n    linkWrapper.addEventListener('animationend', () => {\n        linkWrapper.remove();\n\n    })\n    linkWrapper.classList.toggle('linkWrapperFadeOut')\n}\n\n\nconst pushMenuBar = () => {\n    const content = document.getElementById('content');\n    const menuWrapper = createDiv('menuWrapper');\n    menuWrapper.id = \"menuWrapper\";\n    const title = createTitle('ARIEL SADOK');\n    \n    \n\n    menuWrapper.appendChild(title);\n    content.appendChild(menuWrapper);\n    \n    title.addEventListener('mouseover', pushMenu)\n    title.addEventListener('touchstart', pushMenu);\n    menuWrapper.addEventListener('mouseleave', rmMenu)\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pushMenuBar);\n\n//# sourceURL=webpack://ari/./src/menuBar.js?");

/***/ }),

/***/ "./src/portraitGallery.js":
/*!********************************!*\
  !*** ./src/portraitGallery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_PortriatGallery_JohnnyDonohoe_Image1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/PortriatGallery/JohnnyDonohoe-Image1.jpg */ \"./src/images/PortriatGallery/JohnnyDonohoe-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_JohnnyDonohoe_Image2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/PortriatGallery/JohnnyDonohoe-Image2.jpg */ \"./src/images/PortriatGallery/JohnnyDonohoe-Image2.jpg\");\n/* harmony import */ var _images_PortriatGallery_DimphyJanse_Image1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/PortriatGallery/DimphyJanse-Image1.jpg */ \"./src/images/PortriatGallery/DimphyJanse-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_DimphyJanse_Image2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/PortriatGallery/DimphyJanse-Image2.jpg */ \"./src/images/PortriatGallery/DimphyJanse-Image2.jpg\");\n/* harmony import */ var _images_PortriatGallery_DimphyJanse_Image3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/PortriatGallery/DimphyJanse-Image3.jpg */ \"./src/images/PortriatGallery/DimphyJanse-Image3.jpg\");\n/* harmony import */ var _images_PortriatGallery_MiloMatthieu_Image1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/PortriatGallery/MiloMatthieu-Image1.jpg */ \"./src/images/PortriatGallery/MiloMatthieu-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_MiloMatthieu_Image2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/PortriatGallery/MiloMatthieu-Image2.jpg */ \"./src/images/PortriatGallery/MiloMatthieu-Image2.jpg\");\n/* harmony import */ var _images_PortriatGallery_Alexia_Image1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/PortriatGallery/Alexia-Image1.jpg */ \"./src/images/PortriatGallery/Alexia-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_Alexia_Image2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/PortriatGallery/Alexia-Image2.jpg */ \"./src/images/PortriatGallery/Alexia-Image2.jpg\");\n/* harmony import */ var _images_PortriatGallery_BeastieVee_Image1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/PortriatGallery/BeastieVee-Image1.jpg */ \"./src/images/PortriatGallery/BeastieVee-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_BrionStarr_Image1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/PortriatGallery/BrionStarr-Image1.jpg */ \"./src/images/PortriatGallery/BrionStarr-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_BrionStarr_Image2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/PortriatGallery/BrionStarr-Image2.jpg */ \"./src/images/PortriatGallery/BrionStarr-Image2.jpg\");\n/* harmony import */ var _images_PortriatGallery_IanWeglarz_Image1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/PortriatGallery/IanWeglarz-Image1.jpg */ \"./src/images/PortriatGallery/IanWeglarz-Image1.jpg\");\n/* harmony import */ var _images_PortriatGallery_IanWeglarz_Image2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/PortriatGallery/IanWeglarz-Image2.jpg */ \"./src/images/PortriatGallery/IanWeglarz-Image2.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst createDiv = (divClass) => {\n    const div = document.createElement('div');\n    div.classList.add(`${divClass}`);\n\n    return div;\n}\n\n\nconst createFigure = (source, caption, idNumber ) => {\n    const figure = document.createElement('figure');\n    figure.classList.add('gallery-figure');\n    //figure.id = 'gallery-figure';\n    figure.dataset.idNumber = idNumber;\n\n    const img = document.createElement('img');\n    img.classList.add('gallery-img');\n    img.src = source;\n\n    const figCaption = document.createElement('figcaption');\n    figCaption.classList.add('gallery-caption');\n    figCaption.innerHTML = caption;\n\n    figure.appendChild(img);\n    figure.appendChild(figCaption);\n\n    return figure;\n\n};\n\n\nconst galleryImg = (img, caption, idNumber) =>{\n\n    return {img, caption, idNumber}\n\n}\n\nconst GalleryArray = () => {\n    \n    const galleryArray_ = [];\n\n    function populateArray(...images) {\n        images.forEach(image => galleryArray_.push(image));\n    }\n\n    const getArray = () => {\n        return galleryArray_\n    }\n\n    return {populateArray, getArray};\n\n}\n\nconst GalleryDom = () => {\n    const johnnyFirst_ = galleryImg(_images_PortriatGallery_JohnnyDonohoe_Image1_jpg__WEBPACK_IMPORTED_MODULE_0__.default, 'Johnny Donohoe', '0');\n    const johnnySecond_ = galleryImg(_images_PortriatGallery_JohnnyDonohoe_Image2_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 'Johnny Donohoe', '1');\n    const dimphyFirst_ = galleryImg(_images_PortriatGallery_DimphyJanse_Image1_jpg__WEBPACK_IMPORTED_MODULE_2__.default, 'Dimphy Janse', '2');\n    const dimphySecond_ = galleryImg(_images_PortriatGallery_DimphyJanse_Image2_jpg__WEBPACK_IMPORTED_MODULE_3__.default, 'Dimphy Janse', '3');\n    const dimphyThird_ = galleryImg(_images_PortriatGallery_DimphyJanse_Image3_jpg__WEBPACK_IMPORTED_MODULE_4__.default, 'Dimphy Janse', '4');\n    const miloFirst_ = galleryImg(_images_PortriatGallery_MiloMatthieu_Image1_jpg__WEBPACK_IMPORTED_MODULE_5__.default, 'Milo Matthieu', '5');\n    const miloSecond_ = galleryImg(_images_PortriatGallery_MiloMatthieu_Image2_jpg__WEBPACK_IMPORTED_MODULE_6__.default, 'Milo Matthieu', '6');\n    const alexiaFirst_ = galleryImg(_images_PortriatGallery_Alexia_Image1_jpg__WEBPACK_IMPORTED_MODULE_7__.default, 'Alexia', '7');\n    const alexiaSecond_ = galleryImg(_images_PortriatGallery_Alexia_Image2_jpg__WEBPACK_IMPORTED_MODULE_8__.default, 'Alexia', '8');\n    const beastieFirst_ = galleryImg (_images_PortriatGallery_BeastieVee_Image1_jpg__WEBPACK_IMPORTED_MODULE_9__.default, 'Beastie Vee', '9');\n    const brionFirst_ = galleryImg(_images_PortriatGallery_BrionStarr_Image1_jpg__WEBPACK_IMPORTED_MODULE_10__.default, 'Brion Starr', '10');\n    const brionSecond_ = galleryImg(_images_PortriatGallery_BrionStarr_Image2_jpg__WEBPACK_IMPORTED_MODULE_11__.default, 'Brion Starr', '11');\n    const ianFirst_ = galleryImg(_images_PortriatGallery_IanWeglarz_Image1_jpg__WEBPACK_IMPORTED_MODULE_12__.default, 'Ian Weglarz', '12');\n    const ianSecond_ = galleryImg(_images_PortriatGallery_IanWeglarz_Image2_jpg__WEBPACK_IMPORTED_MODULE_13__.default, 'Ian Weglarz', '13');\n\n    const galleryDom = GalleryArray();\n    galleryDom.populateArray(johnnyFirst_, johnnySecond_, dimphyFirst_, dimphySecond_, dimphyThird_,\n            miloFirst_, miloSecond_, alexiaFirst_, alexiaSecond_, beastieFirst_, brionFirst_, brionSecond_,\n            ianFirst_, ianSecond_\n                );\n\n    const galleryArray = galleryDom.getArray();\n    \n    function getGalleryDom(){\n        return galleryArray;\n    }\n\n    return {getGalleryDom};\n}\n\n\nconst addEventListeners = () => {\n    const leftArrow = document.getElementById('arrow-left');\n    const rightArrow = document.getElementById('arrow-right');\n    const images = document.querySelectorAll('img.gallery-img');\n\n    leftArrow.addEventListener('click', backArrow);\n    rightArrow.addEventListener('click', forwardArrow);\n    images.forEach(img => {\n        img.addEventListener('click', forwardArrow);\n    })\n}   \n\nfunction backArrow() {\n    const gallery = GalleryDom().getGalleryDom();\n    const currentFig = getCurrentGalleryFigure();\n    const currentFigID = parseInt(currentFig.dataset.idNumber);\n    const newFigID = currentFigID - 1;\n    const newFig = document.querySelector(`.gallery-figure[data-id-number=\"${newFigID}\"]`)\n\n    currentFig.style.zIndex = 0;\n    currentFig.classList.toggle('img-fadeOut')\n    currentFig.addEventListener('animationend', (e) => {\n\n        if(e.animationName == 'fadeIn'){\n            return;\n        }\n\n        else{\n            currentFig.style.display = 'none';\n            currentFig.classList.remove('img-fadeOut');\n\n        }\n        \n    })\n\n    if(currentFigID == 0){\n        const firstImg = document.querySelector(`.gallery-figure[data-id-number= '${gallery.length - 1}']`);\n        firstImg.style.zIndex = 30;\n        firstImg.style.display = 'flex';\n        firstImg.id = 'current-figure';\n        currentFig.id = '';\n\n\n    }\n\n    else{\n        currentFig.id = '';\n        newFig.style.zIndex = 30;\n        newFig.style.display = 'flex';\n        newFig.id = 'current-figure'\n        const newFigImg = newFig.querySelector('.gallery-img');\n        newFigImg.id = 'current-image';\n    }\n    \n    \n    \n    \n    \n    /*const gallery = GalleryDom().getGalleryDom();\n    const currentFig = getCurrentGalleryFigure();\n    const currentFigID = currentFig.dataset.idNumber;\n    const newFigID = parseInt(currentFigID) - 1;\n    const figureWrapper = document.getElementById('figureWrapper');\n\n    if(currentFigID == 0){\n        const lastImgId = gallery.length - 1;\n        const newImg = createFigure(gallery[lastImgId].img, gallery[lastImgId].caption, gallery[lastImgId].idNumber);\n        currentFig.remove();\n        figureWrapper.appendChild(newImg);\n        newImg.addEventListener('click', forwardArrow);\n\n\n    }\n\n    else{\n        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);\n        currentFig.remove();\n        figureWrapper.appendChild(newImg);\n        newImg.addEventListener('click', forwardArrow);\n\n\n    }\n    */\n\n}\n\nfunction forwardArrow(){\n    const gallery = GalleryDom().getGalleryDom();\n    const currentFig = getCurrentGalleryFigure();\n    const currentFigID = parseInt(currentFig.dataset.idNumber);\n    const newFigID = currentFigID + 1;\n    const newFig = document.querySelector(`.gallery-figure[data-id-number=\"${newFigID}\"]`)\n\n    currentFig.style.zIndex = 0;\n    currentFig.classList.toggle('img-fadeOut')\n    currentFig.addEventListener('animationend', (e) => {\n\n        if(e.animationName == 'fadeIn'){\n            return;\n        }\n\n        else{\n            currentFig.style.display = 'none';\n            currentFig.classList.remove('img-fadeOut');\n\n        }\n        \n    })\n\n    if(currentFigID == gallery.length - 1){\n        const firstImg = document.querySelector('.gallery-figure[data-id-number=\"0\"]');\n        firstImg.style.zIndex = 30;\n        firstImg.style.display = 'flex';\n        firstImg.id = 'current-figure';\n        currentFig.id = '';\n\n\n    }\n\n    else{\n        currentFig.id = '';\n        newFig.style.zIndex = 30;\n        newFig.style.display = 'flex';\n        newFig.id = 'current-figure'\n        if(document.getElementById('click-caption') != null){\n            removeClickCaption();\n        }\n    }\n    \n   \n\n    \n\n\n\n\n\n/*\n    if(currentFigID == gallery.length - 1){\n        const newImg = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);\n        currentFig.remove();\n        figureWrapper.appendChild(newImg);\n        newImg.addEventListener('click', forwardArrow);\n\n    }\n\n    else{\n        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);\n        currentFig.addEventListener('animationend', () => {\n            currentFig.remove();\n        })\n        currentFig.classList.toggle(\"img-fadeOut\")\n\n        newImg.addEventListener('click', forwardArrow);\n        if(document.getElementById('click-caption') != null){\n            removeClickCaption();\n        }\n\n        figureWrapper.appendChild(newImg);\n\n    }*/\n\n    \n}   \n\nconst removeClickCaption = () => {\n    const clickCaption = document.getElementById('click-caption');\n    clickCaption.remove();\n}\n\nconst getCurrentGalleryFigure = () => {\n    const figure = document.getElementById('current-figure');\n    \n    return figure;\n}\n\nconst loadPortraitGallery = () => {\n\n    \n    const content = document.getElementById('content');\n\n    const galleryWrapper = createDiv('galleryWrapper');\n    const arrowLeft = createDiv('arrow-left');\n    arrowLeft.id= 'arrow-left';\n    const arrowRight = createDiv('arrow-right');\n    arrowRight.id='arrow-right';\n\n    const gallery = GalleryDom().getGalleryDom();\n\n    const figureWrapper = createDiv('figureWrapper');\n    figureWrapper.id = 'figureWrapper';\n    //const figure = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);\n\n    \n\n\n    const clickCaption = createDiv('click-caption');\n    clickCaption.id = 'click-caption'\n    clickCaption.innerHTML = \"Click Image to Scroll\";\n    \n    content.appendChild(galleryWrapper);\n    galleryWrapper.appendChild(arrowLeft);\n    galleryWrapper.appendChild(figureWrapper);\n    //figureWrapper.appendChild(figure);\n    gallery.forEach((image, index) => {\n        image = createFigure(gallery[index].img, gallery[index].caption, gallery[index].idNumber);\n        figureWrapper.appendChild(image);\n        image.style.zIndex = 0;\n        image.style.display = 'none';\n    })\n    galleryWrapper.appendChild(arrowRight);\n    galleryWrapper.appendChild(clickCaption);\n\n    \n    const currentFigure = document.querySelector('.gallery-figure[data-id-number=\"0\"]');\n    currentFigure.style.zIndex = 30;\n    currentFigure.style.display = 'flex';\n    currentFigure.id = 'current-figure';\n    const currentFigureImg = currentFigure.querySelector('.gallery-img');\n    currentFigureImg.id = 'current-image';\n   \n\n\n    addEventListeners();\n\n    \n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPortraitGallery);\n\n\n//# sourceURL=webpack://ari/./src/portraitGallery.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;