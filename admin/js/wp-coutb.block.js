/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/wp-coutb.block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AcademicCapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AcademicCapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AdjustmentsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AdjustmentsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AnnotationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnnotationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArchiveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArchiveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    stroke: "#374151",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowsExpandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AtSymbolIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AtSymbolIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BackspaceIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BackspaceIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BadgeCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgeCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BanIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BanIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BanIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BanIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BeakerIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BeakerIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BeakerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BeakerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BellIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BellIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BellIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BellIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BookOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BookmarkAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookmarkAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BookmarkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookmarkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function BriefcaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BriefcaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CakeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CakeIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CakeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CakeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CalculatorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalculatorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CalendarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CalendarIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CalendarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalendarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CameraIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CameraIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CashIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CashIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChartPieIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartPieIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartSquareBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChatAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChatAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChatIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CheckCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChevronUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChipIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChipIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ChipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13 7H7v6h6V7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardCopyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ClipboardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ClipboardListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClockIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClockIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ClockIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClockIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CloudDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CloudIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CloudUploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 13h2v5a1 1 0 11-2 0v-5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudUploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CodeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CodeIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CogIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CogIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CogIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CogIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CollectionIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CollectionIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CollectionIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ColorSwatchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ColorSwatchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CreditCardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreditCardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CubeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CubeIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CubeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CubeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CubeTransparentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CubeTransparentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyBangladeshiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyDollarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyEuroIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyPoundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyRupeeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CurrencyYenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyYenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CursorClickIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CursorClickIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DatabaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DatabaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DesktopComputerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DesktopComputerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DeviceMobileIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceMobileIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DeviceTabletIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceTabletIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentDuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentReportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentReportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentSearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentSearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DocumentTextIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentTextIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsCircleHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DotsVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DownloadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DownloadIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function EmojiHappyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EmojiHappyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function EmojiSadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EmojiSadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExclamationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ExternalLinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExternalLinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EyeIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function EyeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EyeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function EyeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EyeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FastForwardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FastForwardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FilmIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FilmIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FilmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FilterIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FilterIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FilterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FingerPrintIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FingerPrintIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FireIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FireIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FireIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FireIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FlagIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FlagIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FlagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FlagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FolderAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4m-2-2v4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FolderDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v4m0 0l-2-2m2 2l2-2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FolderIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FolderOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FolderRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GiftIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GiftIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function GiftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GiftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function GlobeAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobeAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GlobeIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GlobeIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function GlobeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HandIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HandIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function HandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HashtagIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HashtagIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function HashtagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HashtagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HeartIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function HeartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HeartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HomeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HomeIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function HomeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function IdentificationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (IdentificationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InboxIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InboxIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function InboxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InboxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InboxInIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InboxInIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function InboxInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InboxInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function InformationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InformationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/KeyIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/KeyIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function KeyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LibraryIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LibraryIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LibraryIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LibraryIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LightBulbIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightBulbIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LightningBoltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightningBoltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LinkIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LinkIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LocationMarkerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LocationMarkerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LockClosedIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LockClosedIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LockOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LockOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LoginIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LoginIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LoginIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LogoutIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LogoutIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function LogoutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LogoutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MailIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MailIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MailIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MailIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MailOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MailOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MapIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MapIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MenuAlt1Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt1Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MenuAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MenuAlt3Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt3Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MenuAlt4Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt4Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MenuIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MicrophoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MicrophoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MinusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MinusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MinusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MoonIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MoonIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MoonIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MoonIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MusicNoteIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MusicNoteIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NewspaperIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NewspaperIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (OfficeBuildingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PaperAirplaneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PaperClipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PaperClipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PauseIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PauseIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PauseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PauseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PencilAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PencilAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PencilIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PencilIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PencilIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PencilIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PhoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneIncomingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneMissedCallIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneOutgoingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhotographIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PhotographIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhotographIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlayIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlayIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PlayIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlayIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PlusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PlusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PlusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PresentationChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PresentationChartLineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PrinterIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PrinterIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PrinterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PrinterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PuzzleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PuzzleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function QrcodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QrcodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QuestionMarkCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReceiptRefundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReceiptTaxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RefreshIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RefreshIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function RefreshIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RefreshIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReplyIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReplyIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ReplyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReplyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RewindIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RewindIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function RewindIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RewindIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RssIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RssIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function RssIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RssIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SaveAsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveAsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SaveIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SaveIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SaveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ScaleIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ScaleIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ScaleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScaleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ScissorsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScissorsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SearchCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SearchIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SelectorIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SelectorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ServerIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ServerIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ServerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ServerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShareIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShareIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ShareIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShareIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ShieldCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShieldCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShieldExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ShoppingBagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShoppingBagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ShoppingCartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SortAscendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SortAscendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SortDescendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SortDescendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SparklesIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SparklesIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SparklesIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SparklesIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SpeakerphoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StarIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StarIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function StarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function StatusOfflineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StatusOfflineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function StatusOnlineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StatusOnlineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StopIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StopIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function StopIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StopIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SunIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SunIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SunIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SunIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SupportIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SupportIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SupportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SupportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwitchHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwitchVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TableIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TableIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TagIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TagIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TemplateIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TemplateIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TemplateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TemplateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TerminalIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TerminalIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TerminalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TerminalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ThumbDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThumbDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ThumbUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThumbUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TicketIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TicketIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TicketIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TicketIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TranslateIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TranslateIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TranslateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TranslateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrashIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrashIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TrashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TrendingDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TrendingUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TruckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TruckIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TruckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TruckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UploadIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UploadIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserAddIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserAddIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UserAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UserCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UserGroupIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserGroupIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UserIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UserRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UsersIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UsersIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UsersIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UsersIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VariableIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VariableIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function VariableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VariableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function VideoCameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VideoCameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ViewBoardsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewBoardsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ViewGridAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewGridAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ViewGridIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewGridIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewListIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewListIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ViewListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function VolumeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function VolumeUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/WifiIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/WifiIcon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function WifiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WifiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XCircleIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function XCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (XCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XIcon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XIcon.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function XIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (XIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ZoomInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ZoomOutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomOutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/index.js ***!
  \**********************************************************/
/*! exports provided: AcademicCapIcon, AdjustmentsIcon, AnnotationIcon, ArchiveIcon, ArrowCircleDownIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowCircleUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ArrowNarrowUpIcon, ArrowRightIcon, ArrowSmDownIcon, ArrowSmLeftIcon, ArrowSmRightIcon, ArrowSmUpIcon, ArrowUpIcon, ArrowsExpandIcon, AtSymbolIcon, BackspaceIcon, BadgeCheckIcon, BanIcon, BeakerIcon, BellIcon, BookOpenIcon, BookmarkAltIcon, BookmarkIcon, BriefcaseIcon, CakeIcon, CalculatorIcon, CalendarIcon, CameraIcon, CashIcon, ChartBarIcon, ChartPieIcon, ChartSquareBarIcon, ChatAlt2Icon, ChatAltIcon, ChatIcon, CheckCircleIcon, CheckIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChipIcon, ClipboardCheckIcon, ClipboardCopyIcon, ClipboardListIcon, ClipboardIcon, ClockIcon, CloudDownloadIcon, CloudUploadIcon, CloudIcon, CodeIcon, CogIcon, CollectionIcon, ColorSwatchIcon, CreditCardIcon, CubeTransparentIcon, CubeIcon, CurrencyBangladeshiIcon, CurrencyDollarIcon, CurrencyEuroIcon, CurrencyPoundIcon, CurrencyRupeeIcon, CurrencyYenIcon, CursorClickIcon, DatabaseIcon, DesktopComputerIcon, DeviceMobileIcon, DeviceTabletIcon, DocumentAddIcon, DocumentDownloadIcon, DocumentDuplicateIcon, DocumentRemoveIcon, DocumentReportIcon, DocumentSearchIcon, DocumentTextIcon, DocumentIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, DotsVerticalIcon, DownloadIcon, DuplicateIcon, EmojiHappyIcon, EmojiSadIcon, ExclamationCircleIcon, ExclamationIcon, ExternalLinkIcon, EyeOffIcon, EyeIcon, FastForwardIcon, FilmIcon, FilterIcon, FingerPrintIcon, FireIcon, FlagIcon, FolderAddIcon, FolderDownloadIcon, FolderOpenIcon, FolderRemoveIcon, FolderIcon, GiftIcon, GlobeAltIcon, GlobeIcon, HandIcon, HashtagIcon, HeartIcon, HomeIcon, IdentificationIcon, InboxInIcon, InboxIcon, InformationCircleIcon, KeyIcon, LibraryIcon, LightBulbIcon, LightningBoltIcon, LinkIcon, LocationMarkerIcon, LockClosedIcon, LockOpenIcon, LoginIcon, LogoutIcon, MailOpenIcon, MailIcon, MapIcon, MenuAlt1Icon, MenuAlt2Icon, MenuAlt3Icon, MenuAlt4Icon, MenuIcon, MicrophoneIcon, MinusCircleIcon, MinusSmIcon, MinusIcon, MoonIcon, MusicNoteIcon, NewspaperIcon, OfficeBuildingIcon, PaperAirplaneIcon, PaperClipIcon, PauseIcon, PencilAltIcon, PencilIcon, PhoneIncomingIcon, PhoneMissedCallIcon, PhoneOutgoingIcon, PhoneIcon, PhotographIcon, PlayIcon, PlusCircleIcon, PlusSmIcon, PlusIcon, PresentationChartBarIcon, PresentationChartLineIcon, PrinterIcon, PuzzleIcon, QrcodeIcon, QuestionMarkCircleIcon, ReceiptRefundIcon, ReceiptTaxIcon, RefreshIcon, ReplyIcon, RewindIcon, RssIcon, SaveAsIcon, SaveIcon, ScaleIcon, ScissorsIcon, SearchCircleIcon, SearchIcon, SelectorIcon, ServerIcon, ShareIcon, ShieldCheckIcon, ShieldExclamationIcon, ShoppingBagIcon, ShoppingCartIcon, SortAscendingIcon, SortDescendingIcon, SparklesIcon, SpeakerphoneIcon, StarIcon, StatusOfflineIcon, StatusOnlineIcon, StopIcon, SunIcon, SupportIcon, SwitchHorizontalIcon, SwitchVerticalIcon, TableIcon, TagIcon, TemplateIcon, TerminalIcon, ThumbDownIcon, ThumbUpIcon, TicketIcon, TranslateIcon, TrashIcon, TrendingDownIcon, TrendingUpIcon, TruckIcon, UploadIcon, UserAddIcon, UserCircleIcon, UserGroupIcon, UserRemoveIcon, UserIcon, UsersIcon, VariableIcon, VideoCameraIcon, ViewBoardsIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon, VolumeOffIcon, VolumeUpIcon, WifiIcon, XCircleIcon, XIcon, ZoomInIcon, ZoomOutIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcademicCapIcon.js */ "./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcademicCapIcon", function() { return _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdjustmentsIcon.js */ "./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdjustmentsIcon", function() { return _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationIcon.js */ "./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnotationIcon", function() { return _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArchiveIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArchiveIcon", function() { return _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowCircleDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowCircleDownIcon", function() { return _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowCircleLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowCircleLeftIcon", function() { return _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArrowCircleRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowCircleRightIcon", function() { return _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArrowCircleUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowCircleUpIcon", function() { return _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArrowDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDownIcon", function() { return _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ArrowLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ArrowNarrowDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowNarrowDownIcon", function() { return _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArrowNarrowLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowNarrowLeftIcon", function() { return _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArrowNarrowRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowNarrowRightIcon", function() { return _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ArrowNarrowUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowNarrowUpIcon", function() { return _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArrowRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ArrowSmDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowSmDownIcon", function() { return _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ArrowSmLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowSmLeftIcon", function() { return _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArrowSmRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowSmRightIcon", function() { return _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArrowSmUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowSmUpIcon", function() { return _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ArrowUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUpIcon", function() { return _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ArrowsExpandIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowsExpandIcon", function() { return _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AtSymbolIcon.js */ "./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AtSymbolIcon", function() { return _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BackspaceIcon.js */ "./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackspaceIcon", function() { return _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BadgeCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadgeCheckIcon", function() { return _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./BanIcon.js */ "./node_modules/@heroicons/react/solid/esm/BanIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BanIcon", function() { return _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BeakerIcon.js */ "./node_modules/@heroicons/react/solid/esm/BeakerIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeakerIcon", function() { return _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./BellIcon.js */ "./node_modules/@heroicons/react/solid/esm/BellIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BellIcon", function() { return _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./BookOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookOpenIcon", function() { return _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BookmarkAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookmarkAltIcon", function() { return _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./BookmarkIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookmarkIcon", function() { return _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./BriefcaseIcon.js */ "./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BriefcaseIcon", function() { return _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CakeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CakeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CakeIcon", function() { return _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./CalculatorIcon.js */ "./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculatorIcon", function() { return _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CalendarIcon.js */ "./node_modules/@heroicons/react/solid/esm/CalendarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarIcon", function() { return _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./CameraIcon.js */ "./node_modules/@heroicons/react/solid/esm/CameraIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraIcon", function() { return _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./CashIcon.js */ "./node_modules/@heroicons/react/solid/esm/CashIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CashIcon", function() { return _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ChartBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartBarIcon", function() { return _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ChartPieIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPieIcon", function() { return _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ChartSquareBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartSquareBarIcon", function() { return _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ChatAlt2Icon.js */ "./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatAlt2Icon", function() { return _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ChatAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatAltIcon", function() { return _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ChatIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatIcon", function() { return _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./CheckCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckCircleIcon", function() { return _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckIcon", function() { return _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ChevronDoubleDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronDoubleDownIcon", function() { return _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ChevronDoubleLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronDoubleLeftIcon", function() { return _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ChevronDoubleRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronDoubleRightIcon", function() { return _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ChevronDoubleUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronDoubleUpIcon", function() { return _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ChevronDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronDownIcon", function() { return _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ChevronLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronLeftIcon", function() { return _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ChevronRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronRightIcon", function() { return _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ChevronUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronUpIcon", function() { return _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ChipIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChipIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipIcon", function() { return _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ClipboardCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardCheckIcon", function() { return _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ClipboardCopyIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardCopyIcon", function() { return _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ClipboardListIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardListIcon", function() { return _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ClipboardIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardIcon", function() { return _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ClockIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClockIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockIcon", function() { return _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./CloudDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudDownloadIcon", function() { return _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./CloudUploadIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudUploadIcon", function() { return _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./CloudIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudIcon", function() { return _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./CodeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CodeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeIcon", function() { return _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./CogIcon.js */ "./node_modules/@heroicons/react/solid/esm/CogIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CogIcon", function() { return _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./CollectionIcon.js */ "./node_modules/@heroicons/react/solid/esm/CollectionIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionIcon", function() { return _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./ColorSwatchIcon.js */ "./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorSwatchIcon", function() { return _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./CreditCardIcon.js */ "./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCardIcon", function() { return _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./CubeTransparentIcon.js */ "./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeTransparentIcon", function() { return _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./CubeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CubeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeIcon", function() { return _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./CurrencyBangladeshiIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyBangladeshiIcon", function() { return _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./CurrencyDollarIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyDollarIcon", function() { return _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./CurrencyEuroIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyEuroIcon", function() { return _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./CurrencyPoundIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyPoundIcon", function() { return _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./CurrencyRupeeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyRupeeIcon", function() { return _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./CurrencyYenIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyYenIcon", function() { return _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./CursorClickIcon.js */ "./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CursorClickIcon", function() { return _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./DatabaseIcon.js */ "./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabaseIcon", function() { return _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./DesktopComputerIcon.js */ "./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopComputerIcon", function() { return _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./DeviceMobileIcon.js */ "./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeviceMobileIcon", function() { return _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./DeviceTabletIcon.js */ "./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeviceTabletIcon", function() { return _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./DocumentAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAddIcon", function() { return _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./DocumentDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentDownloadIcon", function() { return _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./DocumentDuplicateIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentDuplicateIcon", function() { return _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./DocumentRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentRemoveIcon", function() { return _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./DocumentReportIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentReportIcon", function() { return _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./DocumentSearchIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentSearchIcon", function() { return _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./DocumentTextIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentTextIcon", function() { return _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./DocumentIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentIcon", function() { return _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./DotsCircleHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotsCircleHorizontalIcon", function() { return _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./DotsHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotsHorizontalIcon", function() { return _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./DotsVerticalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotsVerticalIcon", function() { return _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./DownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/DownloadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./DuplicateIcon.js */ "./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateIcon", function() { return _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./EmojiHappyIcon.js */ "./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiHappyIcon", function() { return _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./EmojiSadIcon.js */ "./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiSadIcon", function() { return _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./ExclamationCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExclamationCircleIcon", function() { return _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./ExclamationIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExclamationIcon", function() { return _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./ExternalLinkIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkIcon", function() { return _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./EyeOffIcon.js */ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EyeOffIcon", function() { return _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./EyeIcon.js */ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EyeIcon", function() { return _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./FastForwardIcon.js */ "./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FastForwardIcon", function() { return _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./FilmIcon.js */ "./node_modules/@heroicons/react/solid/esm/FilmIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilmIcon", function() { return _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./FilterIcon.js */ "./node_modules/@heroicons/react/solid/esm/FilterIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterIcon", function() { return _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./FingerPrintIcon.js */ "./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FingerPrintIcon", function() { return _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./FireIcon.js */ "./node_modules/@heroicons/react/solid/esm/FireIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireIcon", function() { return _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./FlagIcon.js */ "./node_modules/@heroicons/react/solid/esm/FlagIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagIcon", function() { return _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./FolderAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderAddIcon", function() { return _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./FolderDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderDownloadIcon", function() { return _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./FolderOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderOpenIcon", function() { return _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./FolderRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderRemoveIcon", function() { return _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./FolderIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderIcon", function() { return _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./GiftIcon.js */ "./node_modules/@heroicons/react/solid/esm/GiftIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GiftIcon", function() { return _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./GlobeAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobeAltIcon", function() { return _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./GlobeIcon.js */ "./node_modules/@heroicons/react/solid/esm/GlobeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobeIcon", function() { return _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./HandIcon.js */ "./node_modules/@heroicons/react/solid/esm/HandIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandIcon", function() { return _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./HashtagIcon.js */ "./node_modules/@heroicons/react/solid/esm/HashtagIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashtagIcon", function() { return _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./HeartIcon.js */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeartIcon", function() { return _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./HomeIcon.js */ "./node_modules/@heroicons/react/solid/esm/HomeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeIcon", function() { return _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./IdentificationIcon.js */ "./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentificationIcon", function() { return _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./InboxInIcon.js */ "./node_modules/@heroicons/react/solid/esm/InboxInIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboxInIcon", function() { return _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./InboxIcon.js */ "./node_modules/@heroicons/react/solid/esm/InboxIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboxIcon", function() { return _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./InformationCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InformationCircleIcon", function() { return _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./KeyIcon.js */ "./node_modules/@heroicons/react/solid/esm/KeyIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyIcon", function() { return _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./LibraryIcon.js */ "./node_modules/@heroicons/react/solid/esm/LibraryIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LibraryIcon", function() { return _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./LightBulbIcon.js */ "./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightBulbIcon", function() { return _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__["default"]; });

/* harmony import */ var _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./LightningBoltIcon.js */ "./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightningBoltIcon", function() { return _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__["default"]; });

/* harmony import */ var _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./LinkIcon.js */ "./node_modules/@heroicons/react/solid/esm/LinkIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkIcon", function() { return _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__["default"]; });

/* harmony import */ var _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./LocationMarkerIcon.js */ "./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationMarkerIcon", function() { return _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__["default"]; });

/* harmony import */ var _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./LockClosedIcon.js */ "./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LockClosedIcon", function() { return _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__["default"]; });

/* harmony import */ var _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./LockOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LockOpenIcon", function() { return _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__["default"]; });

/* harmony import */ var _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./LoginIcon.js */ "./node_modules/@heroicons/react/solid/esm/LoginIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginIcon", function() { return _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__["default"]; });

/* harmony import */ var _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./LogoutIcon.js */ "./node_modules/@heroicons/react/solid/esm/LogoutIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutIcon", function() { return _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__["default"]; });

/* harmony import */ var _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./MailOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailOpenIcon", function() { return _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__["default"]; });

/* harmony import */ var _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./MailIcon.js */ "./node_modules/@heroicons/react/solid/esm/MailIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailIcon", function() { return _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__["default"]; });

/* harmony import */ var _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./MapIcon.js */ "./node_modules/@heroicons/react/solid/esm/MapIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapIcon", function() { return _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__["default"]; });

/* harmony import */ var _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./MenuAlt1Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuAlt1Icon", function() { return _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__["default"]; });

/* harmony import */ var _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./MenuAlt2Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuAlt2Icon", function() { return _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__["default"]; });

/* harmony import */ var _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./MenuAlt3Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuAlt3Icon", function() { return _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__["default"]; });

/* harmony import */ var _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./MenuAlt4Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuAlt4Icon", function() { return _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__["default"]; });

/* harmony import */ var _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./MenuIcon.js */ "./node_modules/@heroicons/react/solid/esm/MenuIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__["default"]; });

/* harmony import */ var _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./MicrophoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MicrophoneIcon", function() { return _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__["default"]; });

/* harmony import */ var _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./MinusCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinusCircleIcon", function() { return _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__["default"]; });

/* harmony import */ var _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./MinusSmIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinusSmIcon", function() { return _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__["default"]; });

/* harmony import */ var _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./MinusIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinusIcon", function() { return _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__["default"]; });

/* harmony import */ var _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./MoonIcon.js */ "./node_modules/@heroicons/react/solid/esm/MoonIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoonIcon", function() { return _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__["default"]; });

/* harmony import */ var _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./MusicNoteIcon.js */ "./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MusicNoteIcon", function() { return _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__["default"]; });

/* harmony import */ var _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./NewspaperIcon.js */ "./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewspaperIcon", function() { return _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__["default"]; });

/* harmony import */ var _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./OfficeBuildingIcon.js */ "./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficeBuildingIcon", function() { return _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__["default"]; });

/* harmony import */ var _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./PaperAirplaneIcon.js */ "./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperAirplaneIcon", function() { return _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__["default"]; });

/* harmony import */ var _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./PaperClipIcon.js */ "./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperClipIcon", function() { return _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__["default"]; });

/* harmony import */ var _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./PauseIcon.js */ "./node_modules/@heroicons/react/solid/esm/PauseIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseIcon", function() { return _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__["default"]; });

/* harmony import */ var _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./PencilAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PencilAltIcon", function() { return _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__["default"]; });

/* harmony import */ var _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./PencilIcon.js */ "./node_modules/@heroicons/react/solid/esm/PencilIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PencilIcon", function() { return _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__["default"]; });

/* harmony import */ var _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./PhoneIncomingIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneIncomingIcon", function() { return _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__["default"]; });

/* harmony import */ var _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./PhoneMissedCallIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneMissedCallIcon", function() { return _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__["default"]; });

/* harmony import */ var _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./PhoneOutgoingIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneOutgoingIcon", function() { return _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__["default"]; });

/* harmony import */ var _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./PhoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneIcon", function() { return _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__["default"]; });

/* harmony import */ var _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./PhotographIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotographIcon", function() { return _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__["default"]; });

/* harmony import */ var _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./PlayIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlayIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayIcon", function() { return _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__["default"]; });

/* harmony import */ var _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./PlusCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusCircleIcon", function() { return _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__["default"]; });

/* harmony import */ var _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./PlusSmIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusSmIcon", function() { return _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__["default"]; });

/* harmony import */ var _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./PlusIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusIcon", function() { return _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__["default"]; });

/* harmony import */ var _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./PresentationChartBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresentationChartBarIcon", function() { return _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__["default"]; });

/* harmony import */ var _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./PresentationChartLineIcon.js */ "./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresentationChartLineIcon", function() { return _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__["default"]; });

/* harmony import */ var _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./PrinterIcon.js */ "./node_modules/@heroicons/react/solid/esm/PrinterIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrinterIcon", function() { return _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__["default"]; });

/* harmony import */ var _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./PuzzleIcon.js */ "./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PuzzleIcon", function() { return _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__["default"]; });

/* harmony import */ var _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./QrcodeIcon.js */ "./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrcodeIcon", function() { return _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__["default"]; });

/* harmony import */ var _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./QuestionMarkCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMarkCircleIcon", function() { return _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__["default"]; });

/* harmony import */ var _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./ReceiptRefundIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReceiptRefundIcon", function() { return _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__["default"]; });

/* harmony import */ var _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./ReceiptTaxIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReceiptTaxIcon", function() { return _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__["default"]; });

/* harmony import */ var _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./RefreshIcon.js */ "./node_modules/@heroicons/react/solid/esm/RefreshIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshIcon", function() { return _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__["default"]; });

/* harmony import */ var _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./ReplyIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReplyIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplyIcon", function() { return _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__["default"]; });

/* harmony import */ var _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./RewindIcon.js */ "./node_modules/@heroicons/react/solid/esm/RewindIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RewindIcon", function() { return _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__["default"]; });

/* harmony import */ var _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./RssIcon.js */ "./node_modules/@heroicons/react/solid/esm/RssIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RssIcon", function() { return _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__["default"]; });

/* harmony import */ var _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./SaveAsIcon.js */ "./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAsIcon", function() { return _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__["default"]; });

/* harmony import */ var _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./SaveIcon.js */ "./node_modules/@heroicons/react/solid/esm/SaveIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveIcon", function() { return _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__["default"]; });

/* harmony import */ var _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./ScaleIcon.js */ "./node_modules/@heroicons/react/solid/esm/ScaleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleIcon", function() { return _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__["default"]; });

/* harmony import */ var _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./ScissorsIcon.js */ "./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScissorsIcon", function() { return _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__["default"]; });

/* harmony import */ var _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./SearchCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchCircleIcon", function() { return _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__["default"]; });

/* harmony import */ var _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./SearchIcon.js */ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__["default"]; });

/* harmony import */ var _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./SelectorIcon.js */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorIcon", function() { return _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__["default"]; });

/* harmony import */ var _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./ServerIcon.js */ "./node_modules/@heroicons/react/solid/esm/ServerIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerIcon", function() { return _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__["default"]; });

/* harmony import */ var _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./ShareIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShareIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__["default"]; });

/* harmony import */ var _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./ShieldCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShieldCheckIcon", function() { return _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__["default"]; });

/* harmony import */ var _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./ShieldExclamationIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShieldExclamationIcon", function() { return _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__["default"]; });

/* harmony import */ var _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./ShoppingBagIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagIcon", function() { return _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__["default"]; });

/* harmony import */ var _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./ShoppingCartIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartIcon", function() { return _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__["default"]; });

/* harmony import */ var _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./SortAscendingIcon.js */ "./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortAscendingIcon", function() { return _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__["default"]; });

/* harmony import */ var _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./SortDescendingIcon.js */ "./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortDescendingIcon", function() { return _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__["default"]; });

/* harmony import */ var _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./SparklesIcon.js */ "./node_modules/@heroicons/react/solid/esm/SparklesIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparklesIcon", function() { return _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__["default"]; });

/* harmony import */ var _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./SpeakerphoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeakerphoneIcon", function() { return _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__["default"]; });

/* harmony import */ var _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./StarIcon.js */ "./node_modules/@heroicons/react/solid/esm/StarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__["default"]; });

/* harmony import */ var _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./StatusOfflineIcon.js */ "./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusOfflineIcon", function() { return _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__["default"]; });

/* harmony import */ var _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./StatusOnlineIcon.js */ "./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusOnlineIcon", function() { return _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__["default"]; });

/* harmony import */ var _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./StopIcon.js */ "./node_modules/@heroicons/react/solid/esm/StopIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopIcon", function() { return _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__["default"]; });

/* harmony import */ var _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./SunIcon.js */ "./node_modules/@heroicons/react/solid/esm/SunIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SunIcon", function() { return _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__["default"]; });

/* harmony import */ var _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./SupportIcon.js */ "./node_modules/@heroicons/react/solid/esm/SupportIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportIcon", function() { return _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__["default"]; });

/* harmony import */ var _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./SwitchHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchHorizontalIcon", function() { return _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__["default"]; });

/* harmony import */ var _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./SwitchVerticalIcon.js */ "./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchVerticalIcon", function() { return _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__["default"]; });

/* harmony import */ var _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./TableIcon.js */ "./node_modules/@heroicons/react/solid/esm/TableIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableIcon", function() { return _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__["default"]; });

/* harmony import */ var _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./TagIcon.js */ "./node_modules/@heroicons/react/solid/esm/TagIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagIcon", function() { return _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__["default"]; });

/* harmony import */ var _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./TemplateIcon.js */ "./node_modules/@heroicons/react/solid/esm/TemplateIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateIcon", function() { return _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__["default"]; });

/* harmony import */ var _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./TerminalIcon.js */ "./node_modules/@heroicons/react/solid/esm/TerminalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminalIcon", function() { return _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__["default"]; });

/* harmony import */ var _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./ThumbDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbDownIcon", function() { return _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__["default"]; });

/* harmony import */ var _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./ThumbUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbUpIcon", function() { return _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__["default"]; });

/* harmony import */ var _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./TicketIcon.js */ "./node_modules/@heroicons/react/solid/esm/TicketIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketIcon", function() { return _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__["default"]; });

/* harmony import */ var _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./TranslateIcon.js */ "./node_modules/@heroicons/react/solid/esm/TranslateIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TranslateIcon", function() { return _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__["default"]; });

/* harmony import */ var _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./TrashIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrashIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrashIcon", function() { return _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__["default"]; });

/* harmony import */ var _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./TrendingDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrendingDownIcon", function() { return _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__["default"]; });

/* harmony import */ var _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./TrendingUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrendingUpIcon", function() { return _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__["default"]; });

/* harmony import */ var _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./TruckIcon.js */ "./node_modules/@heroicons/react/solid/esm/TruckIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruckIcon", function() { return _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__["default"]; });

/* harmony import */ var _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./UploadIcon.js */ "./node_modules/@heroicons/react/solid/esm/UploadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadIcon", function() { return _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__["default"]; });

/* harmony import */ var _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./UserAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserAddIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddIcon", function() { return _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__["default"]; });

/* harmony import */ var _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./UserCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserCircleIcon", function() { return _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__["default"]; });

/* harmony import */ var _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./UserGroupIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserGroupIcon", function() { return _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__["default"]; });

/* harmony import */ var _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./UserRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRemoveIcon", function() { return _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__["default"]; });

/* harmony import */ var _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./UserIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__["default"]; });

/* harmony import */ var _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./UsersIcon.js */ "./node_modules/@heroicons/react/solid/esm/UsersIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersIcon", function() { return _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__["default"]; });

/* harmony import */ var _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./VariableIcon.js */ "./node_modules/@heroicons/react/solid/esm/VariableIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariableIcon", function() { return _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__["default"]; });

/* harmony import */ var _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./VideoCameraIcon.js */ "./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoCameraIcon", function() { return _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__["default"]; });

/* harmony import */ var _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./ViewBoardsIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewBoardsIcon", function() { return _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__["default"]; });

/* harmony import */ var _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./ViewGridAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewGridAddIcon", function() { return _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__["default"]; });

/* harmony import */ var _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./ViewGridIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewGridIcon", function() { return _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__["default"]; });

/* harmony import */ var _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./ViewListIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewListIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewListIcon", function() { return _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__["default"]; });

/* harmony import */ var _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./VolumeOffIcon.js */ "./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeOffIcon", function() { return _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__["default"]; });

/* harmony import */ var _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./VolumeUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeUpIcon", function() { return _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__["default"]; });

/* harmony import */ var _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./WifiIcon.js */ "./node_modules/@heroicons/react/solid/esm/WifiIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WifiIcon", function() { return _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__["default"]; });

/* harmony import */ var _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./XCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XCircleIcon", function() { return _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__["default"]; });

/* harmony import */ var _XIcon_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./XIcon.js */ "./node_modules/@heroicons/react/solid/esm/XIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XIcon", function() { return _XIcon_js__WEBPACK_IMPORTED_MODULE_227__["default"]; });

/* harmony import */ var _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./ZoomInIcon.js */ "./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomInIcon", function() { return _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__["default"]; });

/* harmony import */ var _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./ZoomOutIcon.js */ "./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomOutIcon", function() { return _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__["default"]; });








































































































































































































































/***/ }),

/***/ "./node_modules/uppercamelcase/index.js":
/*!**********************************************!*\
  !*** ./node_modules/uppercamelcase/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const camelCase = __webpack_require__(/*! camelcase */ "./node_modules/uppercamelcase/node_modules/camelcase/index.js");

module.exports = function () {
	const cased = camelCase.apply(camelCase, arguments);
	return cased.charAt(0).toUpperCase() + cased.slice(1);
};


/***/ }),

/***/ "./node_modules/uppercamelcase/node_modules/camelcase/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/uppercamelcase/node_modules/camelcase/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function preserveCamelCase(str) {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < str.length; i++) {
		const c = str[i];

		if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
			str = str.substr(0, i) + '-' + str.substr(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
			str = str.substr(0, i - 1) + '-' + str.substr(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = c.toLowerCase() === c;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = c.toUpperCase() === c;
		}
	}

	return str;
}

module.exports = function (str) {
	if (arguments.length > 1) {
		str = Array.from(arguments)
			.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		str = str.trim();
	}

	if (str.length === 0) {
		return '';
	}

	if (str.length === 1) {
		return str.toLowerCase();
	}

	if (/^[a-z0-9]+$/.test(str)) {
		return str;
	}

	const hasUpperCase = str !== str.toLowerCase();

	if (hasUpperCase) {
		str = preserveCamelCase(str);
	}

	return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
};


/***/ }),

/***/ "./src/Icon.js":
/*!*********************!*\
  !*** ./src/Icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var uppercamelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uppercamelcase */ "./node_modules/uppercamelcase/index.js");
/* harmony import */ var uppercamelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uppercamelcase__WEBPACK_IMPORTED_MODULE_2__);




function Icon(props) {
  const Component = `${uppercamelcase__WEBPACK_IMPORTED_MODULE_2___default()(props.icon)}Icon`;
  const Icon = _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__[Component];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    className: 'wp-coutb-icon'
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/*! exports provided: apiVersion, name, title, category, icon, description, keywords, version, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"roelmagdaleno/wp-callout-box\",\"title\":\"Callout Box\",\"category\":\"text\",\"icon\":\"welcome-write-blog\",\"description\":\"Insert callout boxes in your posts.\",\"keywords\":[\"callout\",\"box\"],\"version\":\"0.1.0\",\"attributes\":{\"icon\":{\"type\":\"string\",\"default\":\"check-circle\"},\"type\":{\"type\":\"string\",\"default\":\"primary\"},\"content\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\"p\"}}}");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.json */ "./src/icons.json");
var _icons_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./icons.json */ "./src/icons.json", 1);
/* harmony import */ var _types_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.json */ "./src/types.json");
var _types_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./types.json */ "./src/types.json", 1);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ "./src/Icon.js");








const edit = ({
  attributes,
  setAttributes
}) => {
  const {
    icon,
    type,
    content
  } = attributes;

  const onChangeIcon = icon => {
    setAttributes({
      icon
    });
  };

  const onChangeType = type => {
    setAttributes({
      type
    });
  };

  const onChangeContent = content => {
    setAttributes({
      content
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "For a better icon preview visit ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://heroicons.com",
    target: '_blank'
  }, "HeroIcons"), "."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], {
    className: 'wp-coutb-icon__panel-row'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'wp-coutb-icon__container'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: 'Icon',
    value: icon,
    options: _icons_json__WEBPACK_IMPORTED_MODULE_3__,
    onChange: onChangeIcon
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: icon
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: 'Type',
    value: type,
    options: _types_json__WEBPACK_IMPORTED_MODULE_4__,
    onChange: onChangeType
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `wp-coutb-callout-box ${type}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-coutb-callout-box__icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: icon
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "p",
    onChange: onChangeContent,
    value: content,
    placeholder: "Type a callout text"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/icons.json":
/*!************************!*\
  !*** ./src/icons.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"label\":\"academic-cap\",\"value\":\"academic-cap\"},{\"label\":\"adjustments\",\"value\":\"adjustments\"},{\"label\":\"annotation\",\"value\":\"annotation\"},{\"label\":\"archive\",\"value\":\"archive\"},{\"label\":\"arrow-circle-down\",\"value\":\"arrow-circle-down\"},{\"label\":\"arrow-circle-left\",\"value\":\"arrow-circle-left\"},{\"label\":\"arrow-circle-right\",\"value\":\"arrow-circle-right\"},{\"label\":\"arrow-circle-up\",\"value\":\"arrow-circle-up\"},{\"label\":\"arrow-down\",\"value\":\"arrow-down\"},{\"label\":\"arrow-left\",\"value\":\"arrow-left\"},{\"label\":\"arrow-narrow-down\",\"value\":\"arrow-narrow-down\"},{\"label\":\"arrow-narrow-left\",\"value\":\"arrow-narrow-left\"},{\"label\":\"arrow-narrow-right\",\"value\":\"arrow-narrow-right\"},{\"label\":\"arrow-narrow-up\",\"value\":\"arrow-narrow-up\"},{\"label\":\"arrow-right\",\"value\":\"arrow-right\"},{\"label\":\"arrow-sm-down\",\"value\":\"arrow-sm-down\"},{\"label\":\"arrow-sm-left\",\"value\":\"arrow-sm-left\"},{\"label\":\"arrow-sm-right\",\"value\":\"arrow-sm-right\"},{\"label\":\"arrow-sm-up\",\"value\":\"arrow-sm-up\"},{\"label\":\"arrow-up\",\"value\":\"arrow-up\"},{\"label\":\"arrows-expand\",\"value\":\"arrows-expand\"},{\"label\":\"at-symbol\",\"value\":\"at-symbol\"},{\"label\":\"backspace\",\"value\":\"backspace\"},{\"label\":\"badge-check\",\"value\":\"badge-check\"},{\"label\":\"ban\",\"value\":\"ban\"},{\"label\":\"beaker\",\"value\":\"beaker\"},{\"label\":\"bell\",\"value\":\"bell\"},{\"label\":\"book-open\",\"value\":\"book-open\"},{\"label\":\"bookmark-alt\",\"value\":\"bookmark-alt\"},{\"label\":\"bookmark\",\"value\":\"bookmark\"},{\"label\":\"briefcase\",\"value\":\"briefcase\"},{\"label\":\"cake\",\"value\":\"cake\"},{\"label\":\"calculator\",\"value\":\"calculator\"},{\"label\":\"calendar\",\"value\":\"calendar\"},{\"label\":\"camera\",\"value\":\"camera\"},{\"label\":\"cash\",\"value\":\"cash\"},{\"label\":\"chart-bar\",\"value\":\"chart-bar\"},{\"label\":\"chart-pie\",\"value\":\"chart-pie\"},{\"label\":\"chart-square-bar\",\"value\":\"chart-square-bar\"},{\"label\":\"chat-alt-2\",\"value\":\"chat-alt-2\"},{\"label\":\"chat-alt\",\"value\":\"chat-alt\"},{\"label\":\"chat\",\"value\":\"chat\"},{\"label\":\"check-circle\",\"value\":\"check-circle\"},{\"label\":\"check\",\"value\":\"check\"},{\"label\":\"chevron-double-down\",\"value\":\"chevron-double-down\"},{\"label\":\"chevron-double-left\",\"value\":\"chevron-double-left\"},{\"label\":\"chevron-double-right\",\"value\":\"chevron-double-right\"},{\"label\":\"chevron-double-up\",\"value\":\"chevron-double-up\"},{\"label\":\"chevron-down\",\"value\":\"chevron-down\"},{\"label\":\"chevron-left\",\"value\":\"chevron-left\"},{\"label\":\"chevron-right\",\"value\":\"chevron-right\"},{\"label\":\"chevron-up\",\"value\":\"chevron-up\"},{\"label\":\"chip\",\"value\":\"chip\"},{\"label\":\"clipboard-check\",\"value\":\"clipboard-check\"},{\"label\":\"clipboard-copy\",\"value\":\"clipboard-copy\"},{\"label\":\"clipboard-list\",\"value\":\"clipboard-list\"},{\"label\":\"clipboard\",\"value\":\"clipboard\"},{\"label\":\"clock\",\"value\":\"clock\"},{\"label\":\"cloud-download\",\"value\":\"cloud-download\"},{\"label\":\"cloud-upload\",\"value\":\"cloud-upload\"},{\"label\":\"cloud\",\"value\":\"cloud\"},{\"label\":\"code\",\"value\":\"code\"},{\"label\":\"cog\",\"value\":\"cog\"},{\"label\":\"collection\",\"value\":\"collection\"},{\"label\":\"color-swatch\",\"value\":\"color-swatch\"},{\"label\":\"credit-card\",\"value\":\"credit-card\"},{\"label\":\"cube-transparent\",\"value\":\"cube-transparent\"},{\"label\":\"cube\",\"value\":\"cube\"},{\"label\":\"currency-bangladeshi\",\"value\":\"currency-bangladeshi\"},{\"label\":\"currency-dollar\",\"value\":\"currency-dollar\"},{\"label\":\"currency-euro\",\"value\":\"currency-euro\"},{\"label\":\"currency-pound\",\"value\":\"currency-pound\"},{\"label\":\"currency-rupee\",\"value\":\"currency-rupee\"},{\"label\":\"currency-yen\",\"value\":\"currency-yen\"},{\"label\":\"cursor-click\",\"value\":\"cursor-click\"},{\"label\":\"database\",\"value\":\"database\"},{\"label\":\"desktop-computer\",\"value\":\"desktop-computer\"},{\"label\":\"device-mobile\",\"value\":\"device-mobile\"},{\"label\":\"device-tablet\",\"value\":\"device-tablet\"},{\"label\":\"document-add\",\"value\":\"document-add\"},{\"label\":\"document-download\",\"value\":\"document-download\"},{\"label\":\"document-duplicate\",\"value\":\"document-duplicate\"},{\"label\":\"document-remove\",\"value\":\"document-remove\"},{\"label\":\"document-report\",\"value\":\"document-report\"},{\"label\":\"document-search\",\"value\":\"document-search\"},{\"label\":\"document-text\",\"value\":\"document-text\"},{\"label\":\"document\",\"value\":\"document\"},{\"label\":\"dots-circle-horizontal\",\"value\":\"dots-circle-horizontal\"},{\"label\":\"dots-horizontal\",\"value\":\"dots-horizontal\"},{\"label\":\"dots-vertical\",\"value\":\"dots-vertical\"},{\"label\":\"download\",\"value\":\"download\"},{\"label\":\"duplicate\",\"value\":\"duplicate\"},{\"label\":\"emoji-happy\",\"value\":\"emoji-happy\"},{\"label\":\"emoji-sad\",\"value\":\"emoji-sad\"},{\"label\":\"exclamation-circle\",\"value\":\"exclamation-circle\"},{\"label\":\"exclamation\",\"value\":\"exclamation\"},{\"label\":\"external-link\",\"value\":\"external-link\"},{\"label\":\"eye-off\",\"value\":\"eye-off\"},{\"label\":\"eye\",\"value\":\"eye\"},{\"label\":\"fast-forward\",\"value\":\"fast-forward\"},{\"label\":\"film\",\"value\":\"film\"},{\"label\":\"filter\",\"value\":\"filter\"},{\"label\":\"finger-print\",\"value\":\"finger-print\"},{\"label\":\"fire\",\"value\":\"fire\"},{\"label\":\"flag\",\"value\":\"flag\"},{\"label\":\"folder-add\",\"value\":\"folder-add\"},{\"label\":\"folder-download\",\"value\":\"folder-download\"},{\"label\":\"folder-open\",\"value\":\"folder-open\"},{\"label\":\"folder-remove\",\"value\":\"folder-remove\"},{\"label\":\"folder\",\"value\":\"folder\"},{\"label\":\"gift\",\"value\":\"gift\"},{\"label\":\"globe-alt\",\"value\":\"globe-alt\"},{\"label\":\"globe\",\"value\":\"globe\"},{\"label\":\"hand\",\"value\":\"hand\"},{\"label\":\"hashtag\",\"value\":\"hashtag\"},{\"label\":\"heart\",\"value\":\"heart\"},{\"label\":\"home\",\"value\":\"home\"},{\"label\":\"identification\",\"value\":\"identification\"},{\"label\":\"inbox-in\",\"value\":\"inbox-in\"},{\"label\":\"inbox\",\"value\":\"inbox\"},{\"label\":\"information-circle\",\"value\":\"information-circle\"},{\"label\":\"key\",\"value\":\"key\"},{\"label\":\"library\",\"value\":\"library\"},{\"label\":\"light-bulb\",\"value\":\"light-bulb\"},{\"label\":\"lightning-bolt\",\"value\":\"lightning-bolt\"},{\"label\":\"link\",\"value\":\"link\"},{\"label\":\"location-marker\",\"value\":\"location-marker\"},{\"label\":\"lock-closed\",\"value\":\"lock-closed\"},{\"label\":\"lock-open\",\"value\":\"lock-open\"},{\"label\":\"login\",\"value\":\"login\"},{\"label\":\"logout\",\"value\":\"logout\"},{\"label\":\"mail-open\",\"value\":\"mail-open\"},{\"label\":\"mail\",\"value\":\"mail\"},{\"label\":\"map\",\"value\":\"map\"},{\"label\":\"menu-alt-1\",\"value\":\"menu-alt-1\"},{\"label\":\"menu-alt-2\",\"value\":\"menu-alt-2\"},{\"label\":\"menu-alt-3\",\"value\":\"menu-alt-3\"},{\"label\":\"menu-alt-4\",\"value\":\"menu-alt-4\"},{\"label\":\"menu\",\"value\":\"menu\"},{\"label\":\"microphone\",\"value\":\"microphone\"},{\"label\":\"minus-circle\",\"value\":\"minus-circle\"},{\"label\":\"minus-sm\",\"value\":\"minus-sm\"},{\"label\":\"minus\",\"value\":\"minus\"},{\"label\":\"moon\",\"value\":\"moon\"},{\"label\":\"music-note\",\"value\":\"music-note\"},{\"label\":\"newspaper\",\"value\":\"newspaper\"},{\"label\":\"office-building\",\"value\":\"office-building\"},{\"label\":\"paper-airplane\",\"value\":\"paper-airplane\"},{\"label\":\"paper-clip\",\"value\":\"paper-clip\"},{\"label\":\"pause\",\"value\":\"pause\"},{\"label\":\"pencil-alt\",\"value\":\"pencil-alt\"},{\"label\":\"pencil\",\"value\":\"pencil\"},{\"label\":\"phone-incoming\",\"value\":\"phone-incoming\"},{\"label\":\"phone-missed-call\",\"value\":\"phone-missed-call\"},{\"label\":\"phone-outgoing\",\"value\":\"phone-outgoing\"},{\"label\":\"phone\",\"value\":\"phone\"},{\"label\":\"photograph\",\"value\":\"photograph\"},{\"label\":\"play\",\"value\":\"play\"},{\"label\":\"plus-circle\",\"value\":\"plus-circle\"},{\"label\":\"plus-sm\",\"value\":\"plus-sm\"},{\"label\":\"plus\",\"value\":\"plus\"},{\"label\":\"presentation-chart-bar\",\"value\":\"presentation-chart-bar\"},{\"label\":\"presentation-chart-line\",\"value\":\"presentation-chart-line\"},{\"label\":\"printer\",\"value\":\"printer\"},{\"label\":\"puzzle\",\"value\":\"puzzle\"},{\"label\":\"qrcode\",\"value\":\"qrcode\"},{\"label\":\"question-mark-circle\",\"value\":\"question-mark-circle\"},{\"label\":\"receipt-refund\",\"value\":\"receipt-refund\"},{\"label\":\"receipt-tax\",\"value\":\"receipt-tax\"},{\"label\":\"refresh\",\"value\":\"refresh\"},{\"label\":\"reply\",\"value\":\"reply\"},{\"label\":\"rewind\",\"value\":\"rewind\"},{\"label\":\"rss\",\"value\":\"rss\"},{\"label\":\"save-as\",\"value\":\"save-as\"},{\"label\":\"save\",\"value\":\"save\"},{\"label\":\"scale\",\"value\":\"scale\"},{\"label\":\"scissors\",\"value\":\"scissors\"},{\"label\":\"search-circle\",\"value\":\"search-circle\"},{\"label\":\"search\",\"value\":\"search\"},{\"label\":\"selector\",\"value\":\"selector\"},{\"label\":\"server\",\"value\":\"server\"},{\"label\":\"share\",\"value\":\"share\"},{\"label\":\"shield-check\",\"value\":\"shield-check\"},{\"label\":\"shield-exclamation\",\"value\":\"shield-exclamation\"},{\"label\":\"shopping-bag\",\"value\":\"shopping-bag\"},{\"label\":\"shopping-cart\",\"value\":\"shopping-cart\"},{\"label\":\"sort-ascending\",\"value\":\"sort-ascending\"},{\"label\":\"sort-descending\",\"value\":\"sort-descending\"},{\"label\":\"sparkles\",\"value\":\"sparkles\"},{\"label\":\"speakerphone\",\"value\":\"speakerphone\"},{\"label\":\"star\",\"value\":\"star\"},{\"label\":\"status-offline\",\"value\":\"status-offline\"},{\"label\":\"status-online\",\"value\":\"status-online\"},{\"label\":\"stop\",\"value\":\"stop\"},{\"label\":\"sun\",\"value\":\"sun\"},{\"label\":\"support\",\"value\":\"support\"},{\"label\":\"switch-horizontal\",\"value\":\"switch-horizontal\"},{\"label\":\"switch-vertical\",\"value\":\"switch-vertical\"},{\"label\":\"table\",\"value\":\"table\"},{\"label\":\"tag\",\"value\":\"tag\"},{\"label\":\"template\",\"value\":\"template\"},{\"label\":\"terminal\",\"value\":\"terminal\"},{\"label\":\"thumb-down\",\"value\":\"thumb-down\"},{\"label\":\"thumb-up\",\"value\":\"thumb-up\"},{\"label\":\"ticket\",\"value\":\"ticket\"},{\"label\":\"translate\",\"value\":\"translate\"},{\"label\":\"trash\",\"value\":\"trash\"},{\"label\":\"trending-down\",\"value\":\"trending-down\"},{\"label\":\"trending-up\",\"value\":\"trending-up\"},{\"label\":\"truck\",\"value\":\"truck\"},{\"label\":\"upload\",\"value\":\"upload\"},{\"label\":\"user-add\",\"value\":\"user-add\"},{\"label\":\"user-circle\",\"value\":\"user-circle\"},{\"label\":\"user-group\",\"value\":\"user-group\"},{\"label\":\"user-remove\",\"value\":\"user-remove\"},{\"label\":\"user\",\"value\":\"user\"},{\"label\":\"users\",\"value\":\"users\"},{\"label\":\"variable\",\"value\":\"variable\"},{\"label\":\"video-camera\",\"value\":\"video-camera\"},{\"label\":\"view-boards\",\"value\":\"view-boards\"},{\"label\":\"view-grid-add\",\"value\":\"view-grid-add\"},{\"label\":\"view-grid\",\"value\":\"view-grid\"},{\"label\":\"view-list\",\"value\":\"view-list\"},{\"label\":\"volume-off\",\"value\":\"volume-off\"},{\"label\":\"volume-up\",\"value\":\"volume-up\"},{\"label\":\"wifi\",\"value\":\"wifi\"},{\"label\":\"x-circle\",\"value\":\"x-circle\"},{\"label\":\"x\",\"value\":\"x\"},{\"label\":\"zoom-in\",\"value\":\"zoom-in\"},{\"label\":\"zoom-out\",\"value\":\"zoom-out\"}]");

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/Icon.js");




const save = ({
  attributes
}) => {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `wp-coutb-callout-box ${attributes.type}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-coutb-callout-box__icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: attributes.icon
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "p",
    value: attributes.content
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/types.json":
/*!************************!*\
  !*** ./src/types.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"label\":\"Primary\",\"value\":\"primary\"},{\"label\":\"Success\",\"value\":\"success\"},{\"label\":\"Danger\",\"value\":\"danger\"},{\"label\":\"Warning\",\"value\":\"warning\"}]");

/***/ }),

/***/ "./src/wp-coutb.block.js":
/*!*******************************!*\
  !*** ./src/wp-coutb.block.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

function WP_COUTB_fixSVGAttributes(element, blockType, attributes) {
  console.log(element);
  console.log(attributes);
  console.log(blockType);

  if (blockType.name !== 'roelmagdaleno/wp-callout-box') {
    return element;
  }

  return element;
}

wp.hooks.addFilter('blocks.getSaveElement', 'roelmagdaleno/wp-callout-box', WP_COUTB_fixSVGAttributes);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=wp-coutb.block.js.map