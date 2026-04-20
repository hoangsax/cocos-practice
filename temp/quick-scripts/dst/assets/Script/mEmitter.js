
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
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    (_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments);
  };

  _proto.registerEvent = function registerEvent(event, listener) {
    this.events.set(event, listener);

    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);

    this.events["delete"](event);
  };

  _proto.removeAllEvent = function removeAllEvent() {
    var _this = this;

    this.events.forEach(function (listener, event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJldmVudHMiLCJNYXAiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsInJlZ2lzdGVyRXZlbnQiLCJldmVudCIsImxpc3RlbmVyIiwic2V0Iiwib24iLCJyZWdpc3Rlck9uY2UiLCJvbmNlIiwicmVtb3ZlRXZlbnQiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50IiwiZm9yRWFjaCIsImNsZWFyIiwiZGVzdHJveSIsInJlbW92ZUFsbExpc3RlbmVycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUE1Qjs7SUFDTUM7RUFFRixvQkFBYztJQUNWLElBQUlBLFFBQVEsQ0FBQ0MsUUFBYixFQUF1QjtNQUNuQixPQUFPRCxRQUFRLENBQUNDLFFBQWhCO0lBQ0g7O0lBQ0QsS0FBS0MsTUFBTCxHQUFjLElBQUlDLEdBQUosRUFBZDtJQUNBLEtBQUtDLE9BQUwsR0FBZSxJQUFJTixZQUFKLEVBQWY7O0lBQ0EsS0FBS00sT0FBTCxDQUFhQyxlQUFiLENBQTZCLEdBQTdCO0VBQ0g7Ozs7U0FFREMsT0FBQSxnQkFBYztJQUFBOztJQUNWLHNCQUFLRixPQUFMLEVBQWFFLElBQWI7RUFDSDs7U0FFREMsZ0JBQUEsdUJBQWNDLEtBQWQsRUFBcUJDLFFBQXJCLEVBQStCO0lBQzNCLEtBQUtQLE1BQUwsQ0FBWVEsR0FBWixDQUFnQkYsS0FBaEIsRUFBdUJDLFFBQXZCOztJQUNBLEtBQUtMLE9BQUwsQ0FBYU8sRUFBYixDQUFnQkgsS0FBaEIsRUFBdUJDLFFBQXZCO0VBQ0g7O1NBQ0RHLGVBQUEsc0JBQWFKLEtBQWIsRUFBb0JDLFFBQXBCLEVBQThCO0lBQzFCLEtBQUtMLE9BQUwsQ0FBYVMsSUFBYixDQUFrQkwsS0FBbEIsRUFBeUJDLFFBQXpCO0VBQ0g7O1NBRURLLGNBQUEscUJBQVlOLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0lBQ3pCLEtBQUtMLE9BQUwsQ0FBYVcsY0FBYixDQUE0QlAsS0FBNUIsRUFBbUNDLFFBQW5DOztJQUNBLEtBQUtQLE1BQUwsV0FBbUJNLEtBQW5CO0VBQ0g7O1NBRURRLGlCQUFBLDBCQUFpQjtJQUFBOztJQUNiLEtBQUtkLE1BQUwsQ0FBWWUsT0FBWixDQUFvQixVQUFDUixRQUFELEVBQVdELEtBQVgsRUFBcUI7TUFDckMsS0FBSSxDQUFDSixPQUFMLENBQWFXLGNBQWIsQ0FBNEJQLEtBQTVCLEVBQW1DQyxRQUFuQztJQUNILENBRkQ7SUFHQSxLQUFLUCxNQUFMLENBQVlnQixLQUFaO0VBQ0g7O1NBRURDLFVBQUEsbUJBQVU7SUFDTixLQUFLZixPQUFMLENBQWFnQixrQkFBYjs7SUFDQSxLQUFLaEIsT0FBTCxHQUFlLElBQWY7SUFDQUosUUFBUSxDQUFDQyxRQUFULEdBQW9CLElBQXBCO0VBQ0g7Ozs7O0FBRUxELFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQixJQUFwQjtBQUNBb0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEIsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY2xhc3MgbUVtaXR0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChtRW1pdHRlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1FbWl0dGVyLmluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlci5zZXRNYXhMaXN0ZW5lcnMoMTAwKTtcbiAgICB9XG5cbiAgICBlbWl0KC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLmVtaXQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudChldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuX2VtaXRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICByZWdpc3Rlck9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5vbmNlKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmV2ZW50cy5kZWxldGUoZXZlbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEV2ZW50KCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudHMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG51bGw7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG59XG5tRW1pdHRlci5pbnN0YW5jZSA9IG51bGw7XG5tb2R1bGUuZXhwb3J0cyA9IG1FbWl0dGVyOyJdfQ==