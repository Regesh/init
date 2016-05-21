'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var Init = function () {
  function Init(initFuncs) {
    _classCallCheck(this, Init);

    if (!instance) {
      instance = this;
    }
    this.time = new Date();
    this.initFuncs = initFuncs;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.small = 0;
    this.medium = 0;
    this.large = 0;
    this.currentMedia = 'no sizes found, please init them using : setSizes method';
    this.mode = this.width > this.height ? 'land' : 'port';
    this.funcs = [];
    window.addEventListener('resize', this.onResize);
    this.init();
    return instance;
  }

  _createClass(Init, [{
    key: 'register',
    value: function register(funcName, size, orientation) {
      this.funcs.push({ 'funcName': funcName, 'size': size, 'orientation': orientation });
      this.onResize();
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      instance.width = window.innerWidth;
      instance.height = window.innerHeight;
      instance.mode = instance.width > instance.height ? 'land' : 'port';
      if (instance.small && instance.medium && instance.large) {
        var smallScope = instance.width < instance.medium,
            mediumScope = instance.width < instance.large && instance.width >= instance.medium,
            largeScope = instance.width > instance.medium && instance.width >= instance.large;
        if (smallScope) {
          instance.currentMedia = 'small';
        }
        if (mediumScope) {
          instance.currentMedia = 'medium';
        }
        if (largeScope) {
          instance.currentMedia = 'large';
        }

        if (instance.funcs.length > 0) {
          instance.invokeFunctions();
        }
      }
    }
  }, {
    key: 'invokeFunctions',
    value: function invokeFunctions() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.funcs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          if (this.currentMedia == value.size) {
            if (typeof window[value.funcName] == "function") {
              if (typeof value.orientation !== "undefined") {
                if (value.orientation == this.mode) {
                  window[value.funcName]();
                }
              } else {
                window[value.funcName]();
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'setSizes',
    value: function setSizes(small, medium, large) {
      this.small = small;
      this.medium = medium;
      this.large = large;
      var smallScope = instance.width < instance.medium,
          mediumScope = instance.width < instance.large && instance.width >= instance.medium,
          largeScope = instance.width > instance.medium && instance.width >= instance.large;
      if (smallScope) {
        instance.currentMedia = 'small';
      }
      if (mediumScope) {
        instance.currentMedia = 'medium';
      }
      if (largeScope) {
        instance.currentMedia = 'large';
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this.setSizes(380, 960, 1280);
      switch (this.mode) {
        case "port":
          this.portInit();
          break;
        case "land":
          this.landInit();
          break;
      }
    }
  }, {
    key: 'portInit',
    value: function portInit() {
      if (typeof this.initFuncs !== 'undefined' && typeof this.initFuncs.initPort !== 'undefined') {
        var initFunc = this.initFuncs.initPort;
        if (typeof window[initFunc] == 'function') {
          window[initFunc]();
        } else {
          eval(initFunc);
        }
      }
    }
  }, {
    key: 'landInit',
    value: function landInit() {
      if (typeof this.initFuncs !== 'undefined' && typeof this.initFuncs.initLand !== 'undefined') {
        var initFunc = this.initFuncs.initLand;
        if (typeof window[initFunc] == 'function') {
          window[initFunc]();
        } else {
          eval(initFunc);
        }
      }
    }
  }]);

  return Init;
}();