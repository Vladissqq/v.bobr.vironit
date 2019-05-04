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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n.queue-count--container {\n    margin: auto;\n    display: flex;\n    width: 50px;\n    height: 50px;\n    border: 3px solid black;\n    border-radius: 17px;\n    background-color: blueviolet;\n}\n\n.queue--count {\n    margin: auto;\n}\n\n.atm--container {\n    margin-top: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.atm-item {\n    margin: auto;\n    height: 100px;\n    border: 3px solid black;\n    border-radius: 17px;\n}\n\n.free {\n    background-color: rgb(4, 184, 4);\n}\n\n.busy {\n    background-color: tomato;\n}\n\n.btn {\n    margin-top: 20px;\n}\n\n.btn--container {\n    display: flex;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/components/EventEmitter.js");
/* harmony import */ var _Atm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Atm */ "./src/components/Atm.js");
/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Queue */ "./src/components/Queue.js");
/* harmony import */ var _UI_AtmUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/AtmUI */ "./src/components/UI/AtmUI.js");
/* harmony import */ var _UI_QueueUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/QueueUI */ "./src/components/UI/QueueUI.js");
/* eslint-disable no-console */





function App() {
  _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.Queue = new _Queue__WEBPACK_IMPORTED_MODULE_2__["default"]();
  this.UIQueue = new _UI_QueueUI__WEBPACK_IMPORTED_MODULE_4__["default"](this.Queue);
  this.UIAtm = new _UI_AtmUI__WEBPACK_IMPORTED_MODULE_3__["default"]();
  this.atmTable = [];
  this.atmTableUI = [];
}
App.prototype = Object.create(_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
App.prototype.constructor = App;

App.prototype.changeTurn = function changeTurn(min, max) {
  return setTimeout(() => {
    this.Queue.addPerson();
    this.changeTurn(min, max);
  }, App.prototype.rand(min, max));
};

App.prototype.rand = function rand(min, max) {
  return (max - min) * Math.random() + min;
};

App.prototype.addAtm = function addAtm() {
  const atm = new _Atm__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const atmUI = new _UI_AtmUI__WEBPACK_IMPORTED_MODULE_3__["default"]();
  atmUI.atmRender(atm);
  atmUI.on('remove', () => atmUI.removeAtm());
  atm.on('free', () => {
    this.start();
    atmUI.setFreeUI();
    atmUI.changeCounter(atm);
  });
  atm.on('busy', () => {
    atmUI.setBusyUI();
    this.Queue.removePerson();
    setTimeout(() => {
      if (!this.stateIsFree(atm)) {
        atm.setFree();
      }
    }, this.perOrNo());
  });
  this.atmTable.push(atm);
  this.atmTableUI.push(atmUI);
  this.emit('addAtm');
};

App.prototype.perOrNo = function perOrNo() {
  if (this.Queue.turn[0]) {
    return this.Queue.turn[0].personTime;
  }

  return 1000;
};

App.prototype.removeAtm = function removeAtm() {
  this.atmTable.pop();
  const rem = this.atmTableUI.pop();
  rem.emit('remove', this.atmTableUI);
};

App.prototype.stateIsFree = function stateIsFree(atm) {
  return atm.state === 'free';
};

App.prototype.start = function start() {
  if (this.Queue.returnQueue() > 0) {
    const firstFreeAtm = this.atmTable.find(this.stateIsFree);

    if (firstFreeAtm) {
      setTimeout(() => {
        if (this.Queue.returnQueue() > 0 && firstFreeAtm.state === 'free') {
          firstFreeAtm.setBusy();
        }
      }, 1000);
    }
  }
};

App.prototype.begin = function begin() {
  this.Queue.on('changeTurn', () => {
    this.start();
  });
};

App.prototype.logger = function logger() {
  this.Queue.on('changeTurn', () => console.log(`В очереди ${this.Queue.turn.length}человек`));
  this.on('addAtm', () => {
    for (let i = 0; i < this.atmTable.length; i = +1) {
      this.atmTable[i].on('busy', () => console.log(`Банкомат  ${i} занят`));
      this.atmTable[i].on('free', () => console.log(`Банкомат  ${i} \`\`   свободен`));
      this.atmTable[i].on('free', () => console.log(`Банкомат${i}обслужил ${this.atmTable[i].count}человек`));
    }
  });
};

App.prototype.addBtn = function addBtn() {
  const addAtmnBtn = document.getElementById('btn-atm--add');
  addAtmnBtn.addEventListener('click', () => this.addAtm());
};

App.prototype.remBtn = function remBtn() {
  const remAtmBtn = document.getElementById('btn-atm--rem');
  remAtmBtn.addEventListener('click', () => this.removeAtm());
};

/***/ }),

/***/ "./src/components/Atm.js":
/*!*******************************!*\
  !*** ./src/components/Atm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Atm; });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/components/EventEmitter.js");

function Atm() {
  _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.state = 'free';
  this.count = 0;
}
Atm.prototype = Object.create(_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Atm.prototype.constructor = Atm;

Atm.prototype.setBusy = function setBusy() {
  this.state = 'busy';
  this.emit('busy', this.state);
  this.count += 1;
};

Atm.prototype.setFree = function setFree() {
  this.state = 'free';
  this.emit('free', this.state);
};

Atm.prototype.getState = function getState() {
  return this.state;
};

Atm.prototype.getCount = function getCount() {
  return this.count;
};

/***/ }),

/***/ "./src/components/EventEmitter.js":
/*!****************************************!*\
  !*** ./src/components/EventEmitter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
function EventEmitter() {
  this.eventTable = {};
}

EventEmitter.prototype.emit = function emit(eventName, ...args) {
  const event = this.eventTable[eventName];

  if (event) {
    event.forEach(fn => {
      // eslint-disable-next-line prefer-spread
      fn.apply(null, args);
    });
  }
};

EventEmitter.prototype.on = function on(eventName, fn) {
  if (!this.eventTable[eventName]) {
    this.eventTable[eventName] = [];
  }

  this.eventTable[eventName].push(fn);
  return () => {
    this.eventTable[eventName] = this.eventTable[eventName].filter(eventFn => fn !== eventFn);
  };
};

/***/ }),

/***/ "./src/components/Person.js":
/*!**********************************!*\
  !*** ./src/components/Person.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
function Person(data) {
  this.personTime = data;
}

/***/ }),

/***/ "./src/components/Queue.js":
/*!*********************************!*\
  !*** ./src/components/Queue.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queue; });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/components/EventEmitter.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Person */ "./src/components/Person.js");


function Queue() {
  _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.turn = [];
}
Queue.prototype = Object.create(_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.returnQueue = function returnQueue() {
  return this.turn.length;
};

Queue.prototype.addPerson = function addPerson() {
  this.turn.push(this.personTimeMaker(1000, 2000).next().value);
  this.emit('changeTurn', this.turn.length);
};

Queue.prototype.removePerson = function removePerson() {
  this.turn.splice(0, 1);
  this.emit('changeTrun', this.turn.length);
};

Queue.prototype.personTimeMaker = function* personTimeMaker(min, max) {
  while (true) yield new _Person__WEBPACK_IMPORTED_MODULE_1__["default"](this.rand(min, max));
};

Queue.prototype.rand = function rand(min, max) {
  return (max - min) * Math.random() + min;
};

/***/ }),

/***/ "./src/components/UI/AtmUI.js":
/*!************************************!*\
  !*** ./src/components/UI/AtmUI.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIAtm; });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventEmitter */ "./src/components/EventEmitter.js");

function UIAtm() {
  _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.atm = null;
  this.count = 0;
}
UIAtm.prototype = Object.create(_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
UIAtm.prototype.constructor = UIAtm;

UIAtm.prototype.atmRender = function atmRender(atm) {
  const atmContainer = document.getElementsByClassName('atm--container');
  const atmItem = document.createElement('div');
  this.atm = atmItem;
  this.count = atm.getCount();
  atmItem.setAttribute('class', 'atm-item free');
  atmItem.innerHTML = `       <h1>ATM</h1>
                  <div class="atm-item--count ">
                    ${atm.count}
                  </div>
          `;
  atmContainer[0].appendChild(atmItem);
};

UIAtm.prototype.changeCounter = function changeCounter(atm) {
  this.atm.innerHTML = `       <h1>ATM</h1>
                  <div class="atm-item--count ">
                    ${atm.getCount()}
                  </div>
          `;
};

UIAtm.prototype.setBusyUI = function setBusyUI() {
  this.atm.setAttribute('class', 'busy atm-item');
};

UIAtm.prototype.setFreeUI = function setFreeUI() {
  this.atm.setAttribute('class', 'free atm-item');
};

UIAtm.prototype.removeAtm = function removeAtm() {
  const container = document.getElementsByClassName('atm--container');
  container[0].removeChild(this.atm);
};

/***/ }),

/***/ "./src/components/UI/QueueUI.js":
/*!**************************************!*\
  !*** ./src/components/UI/QueueUI.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIQueue; });
function UIQueue(Queue) {
  this.Queue = Queue;
}

UIQueue.prototype.queueUI = function queueUI() {
  const oldQueue = document.getElementsByClassName('queue-count--container');
  const appContainer = document.getElementsByClassName('container');
  const queue = document.createElement('div');
  queue.setAttribute('class', 'queue-count--container');
  queue.innerHTML = `
              <h1 class='queue--count'>${this.Queue.returnQueue()}</h1>
          `;
  appContainer[0].replaceChild(queue, oldQueue[0]);
};

UIQueue.prototype.queueRender = function queueRender() {
  this.Queue.on('changeTurn', () => {
    this.queueUI();
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* 
import '@babel/polyfill'; */


const manager = new _components_App__WEBPACK_IMPORTED_MODULE_1__["default"]();
manager.addBtn();
manager.remBtn();
manager.UIQueue.queueRender();
manager.logger();
manager.begin();
manager.changeTurn(1000, 2000);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdG0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRFbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BlcnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BdG1VSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9RdWV1ZVVJLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzhmMzQiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNzcyIsImxvY2F0aW9uIiwid2luZG93IiwiRXJyb3IiLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwicmVwbGFjZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsInRyaW0iLCJvIiwiJDEiLCJ0ZXN0IiwibmV3VXJsIiwiaW5kZXhPZiIsIkFwcCIsIkV2ZW50RW1pdHRlciIsImNhbGwiLCJRdWV1ZSIsIlVJUXVldWUiLCJVSUF0bSIsImF0bVRhYmxlIiwiYXRtVGFibGVVSSIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiY2hhbmdlVHVybiIsIm1pbiIsIm1heCIsInNldFRpbWVvdXQiLCJhZGRQZXJzb24iLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImFkZEF0bSIsImF0bSIsIkF0bSIsImF0bVVJIiwiYXRtUmVuZGVyIiwib24iLCJyZW1vdmVBdG0iLCJzdGFydCIsInNldEZyZWVVSSIsImNoYW5nZUNvdW50ZXIiLCJzZXRCdXN5VUkiLCJyZW1vdmVQZXJzb24iLCJzdGF0ZUlzRnJlZSIsInNldEZyZWUiLCJwZXJPck5vIiwiZW1pdCIsInR1cm4iLCJwZXJzb25UaW1lIiwicG9wIiwicmVtIiwic3RhdGUiLCJyZXR1cm5RdWV1ZSIsImZpcnN0RnJlZUF0bSIsImZpbmQiLCJzZXRCdXN5IiwiYmVnaW4iLCJsb2dnZXIiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJhZGRCdG4iLCJhZGRBdG1uQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1CdG4iLCJyZW1BdG1CdG4iLCJnZXRTdGF0ZSIsImdldENvdW50IiwiZXZlbnRUYWJsZSIsImV2ZW50TmFtZSIsImFyZ3MiLCJldmVudCIsImZvckVhY2giLCJmbiIsImFwcGx5IiwiZmlsdGVyIiwiZXZlbnRGbiIsIlBlcnNvbiIsInBlcnNvblRpbWVNYWtlciIsIm5leHQiLCJ2YWx1ZSIsInNwbGljZSIsImF0bUNvbnRhaW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhdG1JdGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY29udGFpbmVyIiwicmVtb3ZlQ2hpbGQiLCJxdWV1ZVVJIiwib2xkUXVldWUiLCJhcHBDb250YWluZXIiLCJxdWV1ZSIsInJlcGxhY2VDaGlsZCIsInF1ZXVlUmVuZGVyIiwibWFuYWdlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxpQkFBaUIsb0JBQW9CLDZCQUE2QixHQUFHLDZCQUE2QixtQkFBbUIs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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztB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QUFDRCxHQUZEO0FBR0QsQ0FKRCxDOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBRUEsTUFBTU0sT0FBTyxHQUFHLElBQUl4Rix1REFBSixFQUFoQjtBQUVBd0YsT0FBTyxDQUFDdEMsTUFBUjtBQUNBc0MsT0FBTyxDQUFDakMsTUFBUjtBQUNBaUMsT0FBTyxDQUFDcEYsT0FBUixDQUFnQm1GLFdBQWhCO0FBQ0FDLE9BQU8sQ0FBQzFDLE1BQVI7QUFDQTBDLE9BQU8sQ0FBQzNDLEtBQVI7QUFDQTJDLE9BQU8sQ0FBQzVFLFVBQVIsQ0FBbUIsSUFBbkIsRUFBeUIsSUFBekIsRTs7Ozs7Ozs7Ozs7O0FDWEEsY0FBYyxtQkFBTyxDQUFDLGtIQUFzRDs7QUFFNUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5xdWV1ZS1jb3VudC0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLnF1ZXVlLS1jb3VudCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmF0bS0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uYXRtLWl0ZW0ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbn1cXG5cXG4uZnJlZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAxODQsIDQpO1xcbn1cXG5cXG4uYnVzeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5idG4tLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBBdG0gZnJvbSAnLi9BdG0nO1xuaW1wb3J0IFF1ZXVlIGZyb20gJy4vUXVldWUnO1xuXG5pbXBvcnQgVUlBdG0gZnJvbSAnLi9VSS9BdG1VSSc7XG5pbXBvcnQgVUlRdWV1ZSBmcm9tICcuL1VJL1F1ZXVlVUknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLlF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gIHRoaXMuVUlRdWV1ZSA9IG5ldyBVSVF1ZXVlKHRoaXMuUXVldWUpO1xuICB0aGlzLlVJQXRtID0gbmV3IFVJQXRtKCk7XG4gIHRoaXMuYXRtVGFibGUgPSBbXTtcbiAgdGhpcy5hdG1UYWJsZVVJID0gW107XG59XG5cbkFwcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuQXBwLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFwcDtcblxuXG5BcHAucHJvdG90eXBlLmNoYW5nZVR1cm4gPSBmdW5jdGlvbiBjaGFuZ2VUdXJuKG1pbiwgbWF4KSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KChcbiAgICAoKSA9PiB7XG4gICAgICB0aGlzLlF1ZXVlLmFkZFBlcnNvbigpO1xuICAgICAgdGhpcy5jaGFuZ2VUdXJuKG1pbiwgbWF4KTtcbiAgICB9KSxcbiAgICBBcHAucHJvdG90eXBlLnJhbmQobWluLCBtYXgpKTtcbn07XG5cbkFwcC5wcm90b3R5cGUucmFuZCA9IGZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKSArIG1pbjtcbn07XG5cblxuQXBwLnByb3RvdHlwZS5hZGRBdG0gPSBmdW5jdGlvbiBhZGRBdG0oKSB7XG4gIGNvbnN0IGF0bSA9IG5ldyBBdG0oKTtcbiAgY29uc3QgYXRtVUkgPSBuZXcgVUlBdG0oKTtcbiAgYXRtVUkuYXRtUmVuZGVyKGF0bSk7XG4gIGF0bVVJLm9uKCdyZW1vdmUnLCAoKSA9PiBhdG1VSS5yZW1vdmVBdG0oKSk7XG4gIGF0bS5vbignZnJlZScsICgpID0+IHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gICAgYXRtVUkuc2V0RnJlZVVJKCk7XG4gICAgYXRtVUkuY2hhbmdlQ291bnRlcihhdG0pO1xuICB9KTtcbiAgYXRtLm9uKCdidXN5JywgKCkgPT4ge1xuICAgIGF0bVVJLnNldEJ1c3lVSSgpO1xuICAgIHRoaXMuUXVldWUucmVtb3ZlUGVyc29uKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGVJc0ZyZWUoYXRtKSkge1xuICAgICAgICBhdG0uc2V0RnJlZSgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMucGVyT3JObygpKTtcbiAgfSk7XG5cbiAgdGhpcy5hdG1UYWJsZS5wdXNoKGF0bSk7XG4gIHRoaXMuYXRtVGFibGVVSS5wdXNoKGF0bVVJKTtcbiAgdGhpcy5lbWl0KCdhZGRBdG0nKTtcbn07XG5cbkFwcC5wcm90b3R5cGUucGVyT3JObyA9IGZ1bmN0aW9uIHBlck9yTm8oKSB7XG4gIGlmICh0aGlzLlF1ZXVlLnR1cm5bMF0pIHtcbiAgICByZXR1cm4gdGhpcy5RdWV1ZS50dXJuWzBdLnBlcnNvblRpbWU7XG4gIH1cbiAgcmV0dXJuIDEwMDA7XG59O1xuXG5BcHAucHJvdG90eXBlLnJlbW92ZUF0bSA9IGZ1bmN0aW9uIHJlbW92ZUF0bSgpIHtcbiAgdGhpcy5hdG1UYWJsZS5wb3AoKTtcbiAgY29uc3QgcmVtID0gdGhpcy5hdG1UYWJsZVVJLnBvcCgpO1xuICByZW0uZW1pdCgncmVtb3ZlJywgdGhpcy5hdG1UYWJsZVVJKTtcbn07XG5cblxuQXBwLnByb3RvdHlwZS5zdGF0ZUlzRnJlZSA9IGZ1bmN0aW9uIHN0YXRlSXNGcmVlKGF0bSkge1xuICByZXR1cm4gYXRtLnN0YXRlID09PSAnZnJlZSc7XG59O1xuXG5BcHAucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICh0aGlzLlF1ZXVlLnJldHVyblF1ZXVlKCkgPiAwKSB7XG4gICAgY29uc3QgZmlyc3RGcmVlQXRtID0gdGhpcy5hdG1UYWJsZS5maW5kKHRoaXMuc3RhdGVJc0ZyZWUpO1xuICAgIGlmIChmaXJzdEZyZWVBdG0pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5RdWV1ZS5yZXR1cm5RdWV1ZSgpID4gMCAmJiBmaXJzdEZyZWVBdG0uc3RhdGUgPT09ICdmcmVlJykge1xuICAgICAgICAgIGZpcnN0RnJlZUF0bS5zZXRCdXN5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxufTtcblxuQXBwLnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uIGJlZ2luKCkge1xuICB0aGlzLlF1ZXVlLm9uKCdjaGFuZ2VUdXJuJywgKCkgPT4ge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfSk7XG59O1xuXG5cbkFwcC5wcm90b3R5cGUubG9nZ2VyID0gZnVuY3Rpb24gbG9nZ2VyKCkge1xuICB0aGlzLlF1ZXVlLm9uKCdjaGFuZ2VUdXJuJywgKCkgPT4gY29uc29sZS5sb2coYNCSINC+0YfQtdGA0LXQtNC4ICR7dGhpcy5RdWV1ZS50dXJuLmxlbmd0aH3Rh9C10LvQvtCy0LXQumApKTtcbiAgdGhpcy5vbignYWRkQXRtJywgKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdG1UYWJsZS5sZW5ndGg7IGkgPSArMSkge1xuICAgICAgdGhpcy5hdG1UYWJsZVtpXS5vbignYnVzeScsICgpID0+IGNvbnNvbGUubG9nKGDQkdCw0L3QutC+0LzQsNGCICAke2l9INC30LDQvdGP0YJgKSk7XG4gICAgICB0aGlzLmF0bVRhYmxlW2ldLm9uKCdmcmVlJywgKCkgPT4gY29uc29sZS5sb2coYNCR0LDQvdC60L7QvNCw0YIgICR7aX0gXFxgXFxgICAg0YHQstC+0LHQvtC00LXQvWApKTtcbiAgICAgIHRoaXMuYXRtVGFibGVbaV0ub24oJ2ZyZWUnLCAoKSA9PiBjb25zb2xlLmxvZyhg0JHQsNC90LrQvtC80LDRgiR7aX3QvtCx0YHQu9GD0LbQuNC7ICR7dGhpcy5hdG1UYWJsZVtpXS5jb3VudH3Rh9C10LvQvtCy0LXQumApKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5BcHAucHJvdG90eXBlLmFkZEJ0biA9IGZ1bmN0aW9uIGFkZEJ0bigpIHtcbiAgY29uc3QgYWRkQXRtbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYXRtLS1hZGQnKTtcbiAgYWRkQXRtbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYWRkQXRtKCkpO1xufTtcblxuQXBwLnByb3RvdHlwZS5yZW1CdG4gPSBmdW5jdGlvbiByZW1CdG4oKSB7XG4gIGNvbnN0IHJlbUF0bUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYXRtLS1yZW0nKTtcbiAgcmVtQXRtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmVBdG0oKSk7XG59O1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF0bSgpIHtcbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5zdGF0ZSA9ICdmcmVlJztcbiAgdGhpcy5jb3VudCA9IDA7XG59XG5cbkF0bS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuQXRtLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEF0bTtcblxuQXRtLnByb3RvdHlwZS5zZXRCdXN5ID0gZnVuY3Rpb24gc2V0QnVzeSgpIHtcbiAgdGhpcy5zdGF0ZSA9ICdidXN5JztcbiAgdGhpcy5lbWl0KCdidXN5JywgdGhpcy5zdGF0ZSk7XG4gIHRoaXMuY291bnQgKz0gMTtcbn07XG5cbkF0bS5wcm90b3R5cGUuc2V0RnJlZSA9IGZ1bmN0aW9uIHNldEZyZWUoKSB7XG4gIHRoaXMuc3RhdGUgPSAnZnJlZSc7XG4gIHRoaXMuZW1pdCgnZnJlZScsIHRoaXMuc3RhdGUpO1xufTtcblxuQXRtLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbkF0bS5wcm90b3R5cGUuZ2V0Q291bnQgPSBmdW5jdGlvbiBnZXRDb3VudCgpIHtcbiAgcmV0dXJuIHRoaXMuY291bnQ7XG59O1xuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuZXZlbnRUYWJsZSA9IHt9O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRUYWJsZVtldmVudE5hbWVdO1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnROYW1lLCBmbikge1xuICBpZiAoIXRoaXMuZXZlbnRUYWJsZVtldmVudE5hbWVdKSB7XG4gICAgdGhpcy5ldmVudFRhYmxlW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIHRoaXMuZXZlbnRUYWJsZVtldmVudE5hbWVdLnB1c2goZm4pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHRoaXMuZXZlbnRUYWJsZVtldmVudE5hbWVdID0gdGhpcy5ldmVudFRhYmxlW2V2ZW50TmFtZV0uZmlsdGVyKGV2ZW50Rm4gPT4gZm4gIT09IGV2ZW50Rm4pO1xuICB9O1xufTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uKGRhdGEpIHtcbiAgdGhpcy5wZXJzb25UaW1lID0gZGF0YTtcbn1cbiIsIlxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgUGVyc29uIGZyb20gJy4vUGVyc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVldWUoKSB7XG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gIHRoaXMudHVybiA9IFtdO1xufVxuXG5RdWV1ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuUXVldWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUXVldWU7XG5cblF1ZXVlLnByb3RvdHlwZS5yZXR1cm5RdWV1ZSA9IGZ1bmN0aW9uIHJldHVyblF1ZXVlKCkge1xuICByZXR1cm4gdGhpcy50dXJuLmxlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5hZGRQZXJzb24gPSBmdW5jdGlvbiBhZGRQZXJzb24oKSB7XG4gIHRoaXMudHVybi5wdXNoKHRoaXMucGVyc29uVGltZU1ha2VyKDEwMDAsIDIwMDApLm5leHQoKS52YWx1ZSk7XG4gIHRoaXMuZW1pdCgnY2hhbmdlVHVybicsIHRoaXMudHVybi5sZW5ndGgpO1xufTtcblxuUXVldWUucHJvdG90eXBlLnJlbW92ZVBlcnNvbiA9IGZ1bmN0aW9uIHJlbW92ZVBlcnNvbigpIHtcbiAgdGhpcy50dXJuLnNwbGljZSgwLCAxKTtcbiAgdGhpcy5lbWl0KCdjaGFuZ2VUcnVuJywgdGhpcy50dXJuLmxlbmd0aCk7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUucGVyc29uVGltZU1ha2VyID0gZnVuY3Rpb24qIHBlcnNvblRpbWVNYWtlcihtaW4sIG1heCkge1xuICB3aGlsZSAodHJ1ZSkgeWllbGQgbmV3IFBlcnNvbih0aGlzLnJhbmQobWluLCBtYXgpKTtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5yYW5kID0gZnVuY3Rpb24gcmFuZChtaW4sIG1heCkge1xuICByZXR1cm4gKG1heCAtIG1pbikgKiBNYXRoLnJhbmRvbSgpICsgbWluO1xufTtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vRXZlbnRFbWl0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUlBdG0oKSB7XG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLmF0bSA9IG51bGw7XG4gIHRoaXMuY291bnQgPSAwO1xufVxuXG5VSUF0bS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xuVUlBdG0ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVUlBdG07XG5cblVJQXRtLnByb3RvdHlwZS5hdG1SZW5kZXIgPSBmdW5jdGlvbiBhdG1SZW5kZXIoYXRtKSB7XG4gIGNvbnN0IGF0bUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F0bS0tY29udGFpbmVyJyk7XG4gIGNvbnN0IGF0bUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy5hdG0gPSBhdG1JdGVtO1xuICB0aGlzLmNvdW50ID0gYXRtLmdldENvdW50KCk7XG4gIGF0bUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhdG0taXRlbSBmcmVlJyk7XG4gIGF0bUl0ZW0uaW5uZXJIVE1MID0gYCAgICAgICA8aDE+QVRNPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdG0taXRlbS0tY291bnQgXCI+XG4gICAgICAgICAgICAgICAgICAgICR7YXRtLmNvdW50fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYDtcblxuICBhdG1Db250YWluZXJbMF0uYXBwZW5kQ2hpbGQoYXRtSXRlbSk7XG59O1xuXG5VSUF0bS5wcm90b3R5cGUuY2hhbmdlQ291bnRlciA9IGZ1bmN0aW9uIGNoYW5nZUNvdW50ZXIoYXRtKSB7XG4gIHRoaXMuYXRtLmlubmVySFRNTCA9IGAgICAgICAgPGgxPkFUTTwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRtLWl0ZW0tLWNvdW50IFwiPlxuICAgICAgICAgICAgICAgICAgICAke2F0bS5nZXRDb3VudCgpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYDtcbn07XG5cblVJQXRtLnByb3RvdHlwZS5zZXRCdXN5VUkgPSBmdW5jdGlvbiBzZXRCdXN5VUkoKSB7XG4gIHRoaXMuYXRtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnVzeSBhdG0taXRlbScpO1xufTtcblxuVUlBdG0ucHJvdG90eXBlLnNldEZyZWVVSSA9IGZ1bmN0aW9uIHNldEZyZWVVSSgpIHtcbiAgdGhpcy5hdG0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmcmVlIGF0bS1pdGVtJyk7XG59O1xuXG5VSUF0bS5wcm90b3R5cGUucmVtb3ZlQXRtID0gZnVuY3Rpb24gcmVtb3ZlQXRtKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdG0tLWNvbnRhaW5lcicpO1xuICBjb250YWluZXJbMF0ucmVtb3ZlQ2hpbGQodGhpcy5hdG0pO1xufTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUlRdWV1ZShRdWV1ZSkge1xuICB0aGlzLlF1ZXVlID0gUXVldWU7XG59XG5cblVJUXVldWUucHJvdG90eXBlLnF1ZXVlVUkgPSBmdW5jdGlvbiBxdWV1ZVVJKCkge1xuICBjb25zdCBvbGRRdWV1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1ZXVlLWNvdW50LS1jb250YWluZXInKTtcbiAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFpbmVyJyk7XG4gIGNvbnN0IHF1ZXVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHF1ZXVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncXVldWUtY291bnQtLWNvbnRhaW5lcicpO1xuXG4gIHF1ZXVlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGgxIGNsYXNzPSdxdWV1ZS0tY291bnQnPiR7dGhpcy5RdWV1ZS5yZXR1cm5RdWV1ZSgpfTwvaDE+XG4gICAgICAgICAgYDtcbiAgYXBwQ29udGFpbmVyWzBdLnJlcGxhY2VDaGlsZChxdWV1ZSwgb2xkUXVldWVbMF0pO1xufTtcblxuVUlRdWV1ZS5wcm90b3R5cGUucXVldWVSZW5kZXIgPSBmdW5jdGlvbiBxdWV1ZVJlbmRlcigpIHtcbiAgdGhpcy5RdWV1ZS5vbignY2hhbmdlVHVybicsICgpID0+IHtcbiAgICB0aGlzLnF1ZXVlVUkoKTtcbiAgfSk7XG59O1xuIiwiLyogXG5pbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCc7ICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IG1hbmFnZXIgPSBuZXcgQXBwKCk7XG5cbm1hbmFnZXIuYWRkQnRuKCk7XG5tYW5hZ2VyLnJlbUJ0bigpO1xubWFuYWdlci5VSVF1ZXVlLnF1ZXVlUmVuZGVyKCk7XG5tYW5hZ2VyLmxvZ2dlcigpO1xubWFuYWdlci5iZWdpbigpO1xubWFuYWdlci5jaGFuZ2VUdXJuKDEwMDAsIDIwMDApO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==