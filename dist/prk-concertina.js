(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Concertina", [], factory);
	else if(typeof exports === 'object')
		exports["Concertina"] = factory();
	else
		root["Concertina"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

	var Concertina = function () {
	    function Concertina(el, customOptions) {
	        _classCallCheck(this, Concertina);

	        // Config
	        this.element = el; // TODO: Get this to work with multiple elements - document.querySelectorAll('blah');
	        this.options = {
	            'blockClass': '.Concertina',
	            'tabClass': '.Concertina-tab',
	            'tabActiveClass': '.is-selected',
	            'panelClass': '.Concertina-panel',
	            'panelActiveClass': '.is-visible'
	        };

	        for (var prop in customOptions) {
	            this.options[prop] = customOptions[prop];
	        }

	        this.tabs = [].concat(_toConsumableArray(this.element.querySelectorAll(this.options.tabClass)));
	        this.panels = [].concat(_toConsumableArray(this.element.querySelectorAll(this.options.panelClass)));
	    }

	    _createClass(Concertina, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            //TODO: Set aria-controls attr on tabs and aria-labelledby attr on panels.

	            this.setTabsInactive();
	            this.setPanelsInactive();

	            this.element.addEventListener('click', function (e) {
	                if (_this.tabs.includes(e.target)) {
	                    e.preventDefault();
	                    _this.setTabState(e.target);
	                    _this.setPanelState(e.target.getAttribute('href'));
	                }
	            });
	        }

	        // Set state on a single tab.

	    }, {
	        key: 'setTabState',
	        value: function setTabState(el) {
	            if (!el.classList.contains(this.options.tabActiveClass.replace('.', ''))) {
	                this.setTabsInactive();
	                this.toggleState(el, true);
	            } else {
	                this.setTabsInactive();
	            }
	        }

	        // Set state on a single panel.

	    }, {
	        key: 'setPanelState',
	        value: function setPanelState(id) {
	            id = id.replace('#', '');
	            var el = this.panels.find(function (elem) {
	                return elem.id === id;
	            });

	            if (!el.classList.contains(this.options.panelActiveClass.replace('.', ''))) {
	                this.setPanelsInactive();
	                this.toggleState(el, true);
	            } else {
	                this.setPanelsInactive();
	            }
	        }

	        // Disable all tabs.

	    }, {
	        key: 'setTabsInactive',
	        value: function setTabsInactive() {
	            var _this2 = this;

	            this.tabs.map(function (elem) {
	                return _this2.toggleState(elem, false);
	            });
	        }

	        // Disable all panels.

	    }, {
	        key: 'setPanelsInactive',
	        value: function setPanelsInactive() {
	            var _this3 = this;

	            this.panels.map(function (elem) {
	                return _this3.toggleState(elem, false);
	            });
	        }

	        // Toggle the active state.

	    }, {
	        key: 'toggleState',
	        value: function toggleState(el, state) {
	            var className = '';
	            if (this.tabs.includes(el)) {
	                el.setAttribute('aria-selected', state);
	                className = this.options.tabActiveClass.replace('.', '');
	            }
	            if (this.panels.includes(el)) {
	                el.setAttribute('aria-hidden', !state);
	                className = this.options.panelActiveClass.replace('.', '');
	            }
	            state ? el.classList.add(className) : el.classList.remove(className);
	        }
	    }]);

	    return Concertina;
	}();

	exports.default = Concertina;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * @license MIT, GPL, do whatever you want
	 * @requires polyfill: Array.prototype.slice fix {@link https://gist.github.com/brettz9/6093105}
	 */

	if (!Array.from) {
	    Array.from = function (object) {
	        return [].slice.call(object);
	    };
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	if (!Array.prototype.includes) {
	    Array.prototype.includes = function (searchElement /*, fromIndex*/) {
	        var O = Object(this);
	        var len = parseInt(O.length, 10) || 0;
	        if (len === 0) {
	            return false;
	        }
	        var n = parseInt(arguments[1], 10) || 0;
	        var k;
	        if (n >= 0) {
	            k = n;
	        } else {
	            k = len + n;
	            if (k < 0) {
	                k = 0;
	            }
	        }
	        var currentElement;
	        while (k < len) {
	            currentElement = O[k];
	            if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	                // NaN !== NaN
	                return true;
	            }
	            k++;
	        }
	        return false;
	    };
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    if (typeof window.Element === 'undefined' || 'classList' in document.documentElement) return;

	    var prototype = Array.prototype,
	        push = prototype.push,
	        splice = prototype.splice,
	        join = prototype.join;

	    function DOMTokenList(el) {
	        this.el = el;
	        // The className needs to be trimmed and split on whitespace
	        // to retrieve a list of classes.
	        var classes = el.className.replace(/^\s+|\s+$/g, '').split(/\s+/);
	        for (var i = 0; i < classes.length; i++) {
	            push.call(this, classes[i]);
	        }
	    };

	    DOMTokenList.prototype = {
	        add: function add(token) {
	            if (this.contains(token)) return;
	            push.call(this, token);
	            this.el.className = this.toString();
	        },
	        contains: function contains(token) {
	            return this.el.className.indexOf(token) !== -1;
	        },
	        item: function item(index) {
	            return this[index] || null;
	        },
	        remove: function remove(token) {
	            if (!this.contains(token)) return;
	            for (var i = 0; i < this.length; i++) {
	                if (this[i] === token) break;
	            }
	            splice.call(this, i, 1);
	            this.el.className = this.toString();
	        },
	        toString: function toString() {
	            return join.call(this, ' ');
	        },
	        toggle: function toggle(token) {
	            if (!this.contains(token)) {
	                this.add(token);
	            } else {
	                this.remove(token);
	            }

	            return this.contains(token);
	        }
	    };

	    window.DOMTokenList = DOMTokenList;

	    function defineElementGetter(obj, prop, getter) {
	        if (Object.defineProperty) {
	            Object.defineProperty(obj, prop, {
	                get: getter
	            });
	        } else {
	            obj.__defineGetter__(prop, getter);
	        }
	    }

	    defineElementGetter(Element.prototype, 'classList', function () {
	        return new DOMTokenList(this);
	    });
	})();

/***/ }
/******/ ])
});
;