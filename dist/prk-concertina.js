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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Private Methods
	function extendConfig(defaults, options) {
	    var prop = void 0,
	        extended = {};
	
	    for (prop in defaults) {
	        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
	            extended[prop] = defaults[prop];
	        }
	    }
	
	    for (prop in options) {
	        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
	            extended[prop] = options[prop];
	        }
	    }
	
	    return extended;
	};
	
	var Concertina = function () {
	    function Concertina(el, options) {
	        _classCallCheck(this, Concertina);
	
	        // Config
	        this.element = el; // TODO: Get this to work with multiple elements - document.querySelectorAll('blah');
	        this.defaults = {
	            'blockClass': '.Concertina',
	            'tabClass': '.Concertina-tab',
	            'tabActiveClass': '.is-selected',
	            'panelClass': '.Concertina-panel',
	            'panelActiveClass': '.is-visible'
	        };
	        this.options = extendConfig.bind(this)(this.defaults, options);
	        this.tabs = this.element.querySelectorAll(this.options.tabClass);
	        this.panels = this.element.querySelectorAll(this.options.panelClass);
	    }
	
	    _createClass(Concertina, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            //TODO: Set aria-controls attr on tabs and aria-labelledby attr on panels.
	            this.setTabsInactive();
	            this.setPanelsInactive();
	
	            this.element.addEventListener('click', function (e) {
	                if (e.target.classList.contains(_this.options.tabClass.replace('.', ''))) {
	                    e.preventDefault();
	
	                    _this.setTabsInactive();
	                    _this.setPanelsInactive();
	                    _this.setTabState(e.target);
	                    _this.setPanelState(e.target.getAttribute('href').replace('#', ''));
	                }
	            });
	        }
	
	        // Disable all tabs.
	
	    }, {
	        key: 'setTabsInactive',
	        value: function setTabsInactive() {
	            for (var i = 0; i < this.tabs.length; i += 1) {
	                this.tabs[i].setAttribute('aria-selected', 'false');
	                this.tabs[i].classList.remove(this.options.tabActiveClass.replace('.', ''));
	            }
	        }
	
	        // Set state on a single tab.
	
	    }, {
	        key: 'setTabState',
	        value: function setTabState(el) {
	            this.setTabsInactive();
	
	            el.setAttribute('aria-selected', 'true');
	            el.classList.add(this.options.tabActiveClass.replace('.', ''));
	        }
	
	        // Disable all panels.
	
	    }, {
	        key: 'setPanelsInactive',
	        value: function setPanelsInactive() {
	            for (var i = 0; i < this.panels.length; i += 1) {
	                this.panels[i].setAttribute('aria-hidden', 'true');
	                this.panels[i].classList.remove(this.options.panelActiveClass.replace('.', ''));
	            }
	        }
	
	        // Set state on a single panel.
	
	    }, {
	        key: 'setPanelState',
	        value: function setPanelState(id) {
	            var el = document.getElementById(id);
	
	            el.setAttribute('aria-hidden', 'false');
	            el.classList.add(this.options.panelActiveClass.replace('.', ''));
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