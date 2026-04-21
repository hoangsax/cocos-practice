
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/mEmitter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca6d2yrzcZJXZVIpSw7P2Nc', 'mEmitter');
// Script/mEmitter.js

"use strict";

var EventEmitter = require('events');

var mEmitter = /*#__PURE__*/function () {
  function mEmitter() {
    if (mEmitter.instance) {
      return mEmitter.instance;
    }

    this.events = new Map();
    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);

    mEmitter.instance = this;
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    (_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments);
  };

  _proto.registerEvent = function registerEvent(event, listener, node) {
    if (node) {
      this.events.set(node, {
        'event': event,
        'listener': listener
      });
    }

    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);

    this.events["delete"](event);
  };

  _proto.removeAllEvent = function removeAllEvent(node) {
    var _this = this;

    this.events[node].forEach(function (listener, event) {
      _this._emiter.removeListener(event, listener);
    });
    this.events.clear();
  };

  _proto.destroy = function destroy() {
    this._emiter.removeAllListeners();

    this._emiter = null;
    mEmitter.instance = null;
  };

  return mEmitter;
}();

mEmitter.instance = null;
module.exports = mEmitter;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJldmVudHMiLCJNYXAiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsInJlZ2lzdGVyRXZlbnQiLCJldmVudCIsImxpc3RlbmVyIiwibm9kZSIsInNldCIsIm9uIiwicmVnaXN0ZXJPbmNlIiwib25jZSIsInJlbW92ZUV2ZW50IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxFdmVudCIsImZvckVhY2giLCJjbGVhciIsImRlc3Ryb3kiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBNUI7O0lBQ01DO0VBRUYsb0JBQWM7SUFDVixJQUFJQSxRQUFRLENBQUNDLFFBQWIsRUFBdUI7TUFDbkIsT0FBT0QsUUFBUSxDQUFDQyxRQUFoQjtJQUNIOztJQUNELEtBQUtDLE1BQUwsR0FBYyxJQUFJQyxHQUFKLEVBQWQ7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSU4sWUFBSixFQUFmOztJQUNBLEtBQUtNLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixHQUE3Qjs7SUFDQUwsUUFBUSxDQUFDQyxRQUFULEdBQW9CLElBQXBCO0VBQ0g7Ozs7U0FFREssT0FBQSxnQkFBYztJQUFBOztJQUNWLHNCQUFLRixPQUFMLEVBQWFFLElBQWI7RUFDSDs7U0FFREMsZ0JBQUEsdUJBQWNDLEtBQWQsRUFBcUJDLFFBQXJCLEVBQStCQyxJQUEvQixFQUFxQztJQUNqQyxJQUFJQSxJQUFKLEVBQVU7TUFDTixLQUFLUixNQUFMLENBQVlTLEdBQVosQ0FBZ0JELElBQWhCLEVBQXNCO1FBQUUsU0FBU0YsS0FBWDtRQUFrQixZQUFZQztNQUE5QixDQUF0QjtJQUNIOztJQUNELEtBQUtMLE9BQUwsQ0FBYVEsRUFBYixDQUFnQkosS0FBaEIsRUFBdUJDLFFBQXZCO0VBQ0g7O1NBQ0RJLGVBQUEsc0JBQWFMLEtBQWIsRUFBb0JDLFFBQXBCLEVBQThCO0lBQzFCLEtBQUtMLE9BQUwsQ0FBYVUsSUFBYixDQUFrQk4sS0FBbEIsRUFBeUJDLFFBQXpCO0VBQ0g7O1NBRURNLGNBQUEscUJBQVlQLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0lBQ3pCLEtBQUtMLE9BQUwsQ0FBYVksY0FBYixDQUE0QlIsS0FBNUIsRUFBbUNDLFFBQW5DOztJQUNBLEtBQUtQLE1BQUwsV0FBbUJNLEtBQW5CO0VBQ0g7O1NBRURTLGlCQUFBLHdCQUFlUCxJQUFmLEVBQXFCO0lBQUE7O0lBQ2pCLEtBQUtSLE1BQUwsQ0FBWVEsSUFBWixFQUFrQlEsT0FBbEIsQ0FBMEIsVUFBQ1QsUUFBRCxFQUFXRCxLQUFYLEVBQXFCO01BQzNDLEtBQUksQ0FBQ0osT0FBTCxDQUFhWSxjQUFiLENBQTRCUixLQUE1QixFQUFtQ0MsUUFBbkM7SUFDSCxDQUZEO0lBR0EsS0FBS1AsTUFBTCxDQUFZaUIsS0FBWjtFQUNIOztTQUVEQyxVQUFBLG1CQUFVO0lBQ04sS0FBS2hCLE9BQUwsQ0FBYWlCLGtCQUFiOztJQUNBLEtBQUtqQixPQUFMLEdBQWUsSUFBZjtJQUNBSixRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7RUFDSDs7Ozs7QUFFTEQsUUFBUSxDQUFDQyxRQUFULEdBQW9CLElBQXBCO0FBQ0FxQixNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jbGFzcyBtRW1pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1FbWl0dGVyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbUVtaXR0ZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fZW1pdGVyLnNldE1heExpc3RlbmVycygxMDApO1xuICAgICAgICBtRW1pdHRlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5lbWl0KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQsIGxpc3RlbmVyLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQobm9kZSwgeyAnZXZlbnQnOiBldmVudCwgJ2xpc3RlbmVyJzogbGlzdGVuZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdGVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIHJlZ2lzdGVyT25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudChldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsRXZlbnQobm9kZSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tub2RlXS5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudHMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG51bGw7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG59XG5tRW1pdHRlci5pbnN0YW5jZSA9IG51bGw7XG5tb2R1bGUuZXhwb3J0cyA9IG1FbWl0dGVyOyJdfQ==