
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

    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    console.log((_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments));
  };

  _proto.registerEvent = function registerEvent(event, listener) {
    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);
  };

  _proto.removeAllEvent = function removeAllEvent() {
    this._emiter.removeAllListeners();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckV2ZW50IiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9uIiwicmVnaXN0ZXJPbmNlIiwib25jZSIsInJlbW92ZUV2ZW50IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxFdmVudCIsInJlbW92ZUFsbExpc3RlbmVycyIsImRlc3Ryb3kiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBNUI7O0lBQ01DO0VBRUYsb0JBQWM7SUFDVixJQUFJQSxRQUFRLENBQUNDLFFBQWIsRUFBdUI7TUFDbkIsT0FBT0QsUUFBUSxDQUFDQyxRQUFoQjtJQUNIOztJQUNELEtBQUtDLE9BQUwsR0FBZSxJQUFJSixZQUFKLEVBQWY7O0lBQ0EsS0FBS0ksT0FBTCxDQUFhQyxlQUFiLENBQTZCLEdBQTdCO0VBQ0g7Ozs7U0FFREMsT0FBQSxnQkFDQTtJQUFBOztJQUNJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBS0osT0FBTCxFQUFhRSxJQUFiLGdDQUFaO0VBQ0g7O1NBRURHLGdCQUFBLHVCQUFjQyxLQUFkLEVBQXFCQyxRQUFyQixFQUErQjtJQUMzQixLQUFLUCxPQUFMLENBQWFRLEVBQWIsQ0FBZ0JGLEtBQWhCLEVBQXVCQyxRQUF2QjtFQUNIOztTQUNERSxlQUFBLHNCQUFhSCxLQUFiLEVBQW9CQyxRQUFwQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFVLElBQWIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxRQUF6QjtFQUNIOztTQUVESSxjQUFBLHFCQUFZTCxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFZLGNBQWIsQ0FBNEJOLEtBQTVCLEVBQW1DQyxRQUFuQztFQUNIOztTQUVETSxpQkFBQSwwQkFBaUI7SUFDYixLQUFLYixPQUFMLENBQWFjLGtCQUFiO0VBQ0g7O1NBRURDLFVBQUEsbUJBQ0E7SUFDSSxLQUFLZixPQUFMLENBQWFjLGtCQUFiOztJQUNBLEtBQUtkLE9BQUwsR0FBZSxJQUFmO0lBQ0FGLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQixJQUFwQjtFQUNIOzs7OztBQUVMRCxRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7QUFDQWlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNsYXNzIG1FbWl0dGVyIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1FbWl0dGVyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbUVtaXR0ZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMCk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZW1pdGVyLmVtaXQoLi4uYXJncykpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICByZWdpc3Rlck9uY2UoZXZlbnQsIGxpc3RlbmVyKXtcbiAgICAgICAgdGhpcy5fZW1pdGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudChldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KClcbiAgICB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fZW1pdGVyID0gbnVsbDtcbiAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbn1cbm1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbm1vZHVsZS5leHBvcnRzID0gbUVtaXR0ZXI7Il19