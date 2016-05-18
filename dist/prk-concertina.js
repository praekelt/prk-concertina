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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	            this.setTabsInactive();
	            this.toggleState(el, true);
	        }
	
	        // Set state on a single panel.
	
	    }, {
	        key: 'setPanelState',
	        value: function setPanelState(id) {
	            id = id.replace('#', '');
	            var el = this.panels.find(function (elem) {
	                return elem.id == id;
	            });
	            this.setPanelsInactive();
	            this.toggleState(el, true);
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=prk-concertina.js.map