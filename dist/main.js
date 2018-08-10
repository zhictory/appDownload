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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\nhtml,\\nbody {\\n  -webkit-tap-highlight-color: transparent;\\n}\\n.app-download {\\n  margin: 0 auto;\\n  width: 7.5rem;\\n  height: 1rem;\\n  background: url(\" + escape(__webpack_require__(/*! ./img/app-download-bg.png */ \"./src/img/app-download-bg.png\")) + \");\\n  background-color: #333;\\n  background-size: 100% 1rem;\\n}\\n.app-download .close {\\n  float: right;\\n  margin-right: 0.2rem;\\n  width: 0.5rem;\\n  height: 1rem;\\n  line-height: 1rem;\\n  color: #fff;\\n  font-size: 0.24rem;\\n  text-align: center;\\n  text-decoration: none;\\n  font-style: normal;\\n  cursor: pointer;\\n}\\n.app-download .close:after {\\n  font-size: 0.3rem;\\n}\\n.app-download .open {\\n  float: right;\\n  margin-right: 0.7rem;\\n  margin-top: 0.2rem;\\n  width: 1.7rem;\\n  height: 0.6rem;\\n  border-radius: 2px;\\n  background: #f60;\\n  color: #fff;\\n  font-size: 0.24rem;\\n  line-height: 0.6rem;\\n  text-align: center;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/detect.js":
/*!***********************!*\
  !*** ./src/detect.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return detect; });\n/**\r\n * 浏览器特性检测\r\n * @param  {[object]} ua       navigator.userAgent 属性\r\n * @param  {[object]} platform navigator.platform  浏览器所在平台\r\n * @return {[object]}          os属性和browser属性，描述相关的系统平台信息和浏览器相关信息\r\n */\nfunction detect(ua, platform) {\n  ua = navigator.userAgent;\n  platform = navigator.platform;\n  var os = global.os = {};\n  var browser = global.browser = {};\n  var webkit = ua.match(/Web[kK]it[\\/]{0,1}([\\d.]+)/);\n  var android = ua.match(/(Android);?[\\s\\/]+([\\d.]+)?/);\n  var osx = !!ua.match(/\\(Macintosh\\; Intel /);\n  var ipad = ua.match(/(iPad).*OS\\s([\\d_]+)/);\n  var ipod = ua.match(/(iPod)(.*OS\\s([\\d_]+))?/);\n  var iphone = !ipad && ua.match(/(iPhone\\sOS)\\s([\\d_]+)/);\n  var webos = ua.match(/(webOS|hpwOS)[\\s\\/]([\\d.]+)/);\n  var win = /Win\\d{2}|Windows/.test(platform);\n  var wp = ua.match(/Windows Phone ([\\d.]+)/);\n  var touchpad = webos && ua.match(/TouchPad/);\n  var kindle = ua.match(/Kindle\\/([\\d.]+)/);\n  var silk = ua.match(/Silk\\/([\\d._]+)/);\n  var blackberry = ua.match(/(BlackBerry).*Version\\/([\\d.]+)/);\n  var bb10 = ua.match(/(BB10).*Version\\/([\\d.]+)/);\n  var rimtabletos = ua.match(/(RIM\\sTablet\\sOS)\\s([\\d.]+)/);\n  var playbook = ua.match(/PlayBook/);\n  var chrome = ua.match(/Chrome\\/([\\d.]+)/) || ua.match(/CriOS\\/([\\d.]+)/);\n  var firefox = ua.match(/Firefox\\/([\\d.]+)/);\n  var firefoxos = ua.match(/\\((?:Mobile|Tablet); rv:([\\d.]+)\\).*Firefox\\/[\\d.]+/);\n  var ie = ua.match(/MSIE\\s([\\d.]+)/) || ua.match(/Trident\\/[\\d](?=[^\\?]+).*rv:([0-9.].)/);\n  var webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);\n  var safari = webview || ua.match(/Version\\/([\\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);\n  var qq = ua.match(/QQ\\/([\\d.]+)/); // 判断是否是QQ客户端内置浏览器\n  var weixin = ua.match(/MicroMessenger\\/([\\d.]+)/); // 判断是否是微信浏览器\n  var ucbrowser = ua.match(/UCBrowser\\/([\\d.]+)/); // 判断是否是UC浏览器\n  var qqbrowser = ua.match(/MQQBrowser\\/([\\d.]+)/); // 判断是否是QQ浏览器\n  // Todo: clean this up with a better OS/browser seperation:\n  // - discern (more) between multiple browsers on android\n  // - decide if kindle fire in silk mode is android or not\n  // - Firefox on Android doesn't specify the Android version\n  // - possibly devide in os, device and browser hashes\n  if (browser.webkit === !!webkit) browser.version = webkit[1];\n  if (android) os.android = true, os.version = android[2];\n  if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');\n  if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');\n  if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;\n  if (wp) os.wp = true, os.version = wp[1];\n  if (webos) os.webos = true, os.version = webos[2];\n  if (touchpad) os.touchpad = true;\n  if (blackberry) os.blackberry = true, os.version = blackberry[2];\n  if (bb10) os.bb10 = true, os.version = bb10[2];\n  if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];\n  if (playbook) browser.playbook = true;\n  if (kindle) os.kindle = true, os.version = kindle[1];\n  if (silk) browser.silk = true, browser.version = silk[1];\n  if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;\n  if (chrome) browser.chrome = true, browser.version = chrome[1];\n  if (firefox) browser.firefox = true, browser.version = firefox[1];\n  if (firefoxos) os.firefoxos = true, os.version = firefoxos[1];\n  if (ie) browser.ie = true, browser.version = ie[1];\n  if (safari && (osx || os.ios || win)) {\n    browser.safari = true;\n    if (!os.ios) browser.version = safari[1];\n  }\n  if (webview) browser.webview = true;\n  os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));\n  os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\\/([\\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));\n  if (os.phone) {\n    // 如果是手机端的浏览器\n    if (qq) {\n      // QQ扫码\n      browser.qq = true;\n      browser.version = qq[1];\n    }\n    if (weixin) {\n      // 微信\n      browser.weixin = true;\n      browser.version = weixin[1];\n    }\n    if (ucbrowser) {\n      // UC浏览器\n      browser.ucbrowser = true;\n      browser.version = ucbrowser[1];\n    }\n    if (qqbrowser) {\n      // QQ浏览器\n      browser.qqbrowser = true;\n      browser.version = qqbrowser[1];\n    }\n  }\n  return {\n    os: os,\n    browser: browser\n  };\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/detect.js?");

/***/ }),

/***/ "./src/img/app-download-bg.png":
/*!*************************************!*\
  !*** ./src/img/app-download-bg.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d8f8b3b7de48321e0acdc7fe4ca4f154.png\";\n\n//# sourceURL=webpack:///./src/img/app-download-bg.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tplDownloadTips_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tplDownloadTips.html */ \"./src/tplDownloadTips.html\");\n/* harmony import */ var _tplDownloadTips_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tplDownloadTips_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _detect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detect.js */ \"./src/detect.js\");\n/**\r\n *  ---------------------------------------------\r\n *      APP下载提示\r\n * \r\n *      功能：\r\n *      从WAP页调起App时，系统如果没有安装App则下载App，如果有安装App则打开App。\r\n\r\n *      注意：\r\n *      1. 暂时只能不同平台使用不同方式，不能不同平台使用同一方式\r\n *      2. 各方式优先的原因：能打开App -> 能下载App -> 能传参 -> 步骤相对简单\r\n *      3. 安卓的还没对接打开对应详情页的功能\r\n *      4. 微信内置浏览器Android和iOS版都无法打开对应详情页（因为借助应用宝）\r\n *      5. 微博内置浏览器Android版有无安装App都只能下载不能打开，\r\n *         微博内置浏览器iOS版有无安装均不能下载和打开\r\n *      6. 考察的浏览器：微信内置浏览器、微博内置浏览器、QQ内置浏览器、\r\n *                       UC浏览器、QQ浏览器、Safari、Chrome、Opera\r\n *      7. 暂时无法判断是否系统有安装App\r\n *      8. 暂时无法在调起App后取消下载App\r\n *      9. 此插件代码依赖于base.js中的平台检测（detect方法）\r\n\r\n *      使用：\r\n *      在逻辑js引入：let download = require(`/widget/Download/main`);\r\n *      样式已经放在common.less\r\n *  ---------------------------------------------\r\n */\n\n\n\n\n\nfunction Download() {\n  this._URLS = {\n    yybUrl: `http://a.app.qq.com/o/simple.jsp?pkgname=com.bluemobi.jinhaima`, //应用宝下载链接\n    AndroidUrl: `jinhaima://kinhomapp`, //安卓打开金海马商城的链接\n    iOSUrl: `com.kinhom.JinHaiMa://com.kinhom.JinHaiMa`, //苹果打开金海马商城的链接\n    downloadUrl: `http://api.kinhom.com/download/index` //金海马商城下载链接（包括iOS版和Android版的）\n    // itunesUrl: `http://itunes.apple.com/cn/app/id1011663719`,//App Store下载链接\n    // apkUrl: `http://dd.myapp.com/16891/6B4194FC7A35489E725A4328D92A9C65.apk?fsname=com.bluemobi.jinhaima_1.4.1_7.apk`//金海马商城下载链接\n  };\n  this.init();\n  this.openBtn = `#J_appDownload .j_open`;\n  this.closeBtn = `#J_appDownload .j_close`;\n  this.wrap = `#J_appDownload`;\n  this.platforms = this.getPlatform(Object(_detect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(navigator.userAgent, navigator.platform));\n  this.skuId = `01`;\n}\n\nDownload.prototype = {\n  // 初始化\n  init: function () {\n    const self = this;\n    // 如果是详情页则添加sku参数\n    if (location.href.indexOf(`item`) > -1) {\n      self._URLS.AndroidUrl += `?sku_id=` + self.skuId;\n      self._URLS.iOSUrl += `?sku_id=` + self.skuId;\n    }\n    // 延时加载是为了优先加载主页面\n    let downTimer = setTimeout(function () {\n      clearTimeout(downTimer);\n      const div = document.createElement(`div`);\n      div.innerHTML = _tplDownloadTips_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n      document.body.appendChild(div);\n      self.setOpen();\n      self.setClose();\n    }, 200);\n  },\n  // “立即打开”按钮\n  setOpen: function () {\n\n    const self = this;\n\n    document.querySelector(self.openBtn).addEventListener(`click`, event => {\n\n      const btn = event.target;\n\n      btn.classList.remove(`j_open`);\n\n      if (self.platforms.os.iphone) {\n        if (self.platforms.browser.weixin) {\n          self.openUrl(self._URLS.yybUrl, false, btn);\n        } else if (self.platforms.browser.qq || self.platforms.browser.opera) {\n          self.openUrl(self._URLS.downloadUrl, false, btn);\n        } else {\n          self.openUrl(self._URLS.iOSUrl, true, btn);\n        }\n      } else if (self.platforms.os.android) {\n        if (self.platforms.browser.weixin) {\n          self.openUrl(self._URLS.yybUrl, false, btn);\n        } else if (self.platforms.browser.weibo) {\n          self.openUrl(self._URLS.downloadUrl, false, btn);\n        } else {\n          self.openUrl(self._URLS.AndroidUrl, true, btn);\n        }\n      } else {\n        self.openUrl(self._URLS.downloadUrl, false, btn);\n      }\n    });\n  },\n  // “关闭”按钮\n  setClose: function () {\n\n    const self = this;\n\n    document.querySelector(self.closeBtn).addEventListener(`click`, event => {\n      self.remove();\n    });\n  },\n  // 打开操作\n  openUrl: function (url, isCustomed, btn) {\n    const self = this;\n    if (isCustomed) {\n      location.href = url;\n      // 超时未调起App则跳转到下载链接（调起App后尚不知如何取消跳转）\n      setTimeout(function () {\n        window.location.href = self._URLS.downloadUrl;\n        btn.classList.add(`j_open`);\n      }, 1000);\n    } else {\n      window.location.href = url;\n      btn.classList.add(`j_open`);\n    }\n  },\n  // 获取平台类型\n  getPlatform: function (obj) {\n    return {\n      os: {\n        iphone: !!obj.os.iphone,\n        android: !!obj.os.android\n      },\n      browser: {\n        safari: !!(obj.browser.safari && !obj.browser.weixin && !obj.browser.ucbrowser && !obj.browser.qq && !obj.browser.weibo),\n        qq: !!obj.browser.qq,\n        ucbrowser: !!obj.browser.ucbrowser,\n        qqbrowser: !!obj.browser.qqbrowser,\n        weixin: !!obj.browser.weixin,\n        weibo: !!obj.browser.weibo,\n        opera: !!obj.browser.opera\n      }\n    };\n  },\n  remove: function () {\n    const self = this;\n    document.querySelector(`#J_appDownload`).parentNode.removeChild(document.getElementById(`J_appDownload`));\n  }\n};\n\nnew Download();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.less?");

/***/ }),

/***/ "./src/tplDownloadTips.html":
/*!**********************************!*\
  !*** ./src/tplDownloadTips.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=\\\"J_appDownload\\\" class=\\\"app-download\\\">\\r\\n\\t<i class=\\\"close j_close\\\">关闭</i>\\r\\n\\t<a class=\\\"open j_open\\\">立即打开</a>\\r\\n</div> \";\n\n//# sourceURL=webpack:///./src/tplDownloadTips.html?");

/***/ })

/******/ });