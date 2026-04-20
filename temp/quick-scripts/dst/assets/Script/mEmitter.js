
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

    this.events = [];
    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    console.log((_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments));
  };

  _proto.registerEvent = function registerEvent(event, listener) {
    this.events.push(event);

    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);

    this.events.splice(this.events.indexOf(event), 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJldmVudHMiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckV2ZW50IiwiZXZlbnQiLCJsaXN0ZW5lciIsInB1c2giLCJvbiIsInJlZ2lzdGVyT25jZSIsIm9uY2UiLCJyZW1vdmVFdmVudCIsInJlbW92ZUxpc3RlbmVyIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlbW92ZUFsbEV2ZW50IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZGVzdHJveSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUE1Qjs7SUFDTUM7RUFFRixvQkFBYztJQUNWLElBQUlBLFFBQVEsQ0FBQ0MsUUFBYixFQUF1QjtNQUNuQixPQUFPRCxRQUFRLENBQUNDLFFBQWhCO0lBQ0g7O0lBQ0QsS0FBS0MsTUFBTCxHQUFjLEVBQWQ7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSUwsWUFBSixFQUFmOztJQUNBLEtBQUtLLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixHQUE3QjtFQUNIOzs7O1NBRURDLE9BQUEsZ0JBQ0E7SUFBQTs7SUFDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQUtKLE9BQUwsRUFBYUUsSUFBYixnQ0FBWjtFQUNIOztTQUVERyxnQkFBQSx1QkFBY0MsS0FBZCxFQUFxQkMsUUFBckIsRUFBK0I7SUFDM0IsS0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWlCRixLQUFqQjs7SUFDQSxLQUFLTixPQUFMLENBQWFTLEVBQWIsQ0FBZ0JILEtBQWhCLEVBQXVCQyxRQUF2QjtFQUNIOztTQUNERyxlQUFBLHNCQUFhSixLQUFiLEVBQW9CQyxRQUFwQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFXLElBQWIsQ0FBa0JMLEtBQWxCLEVBQXlCQyxRQUF6QjtFQUNIOztTQUVESyxjQUFBLHFCQUFZTixLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFhLGNBQWIsQ0FBNEJQLEtBQTVCLEVBQW1DQyxRQUFuQzs7SUFDQSxLQUFLUixNQUFMLENBQVllLE1BQVosQ0FBbUIsS0FBS2YsTUFBTCxDQUFZZ0IsT0FBWixDQUFvQlQsS0FBcEIsQ0FBbkIsRUFBK0MsQ0FBL0M7RUFDSDs7U0FFRFUsaUJBQUEsMEJBQWlCO0lBQ2IsS0FBS2hCLE9BQUwsQ0FBYWlCLGtCQUFiO0VBQ0g7O1NBRURDLFVBQUEsbUJBQ0E7SUFDSSxLQUFLbEIsT0FBTCxDQUFhaUIsa0JBQWI7O0lBQ0EsS0FBS2pCLE9BQUwsR0FBZSxJQUFmO0lBQ0FILFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQixJQUFwQjtFQUNIOzs7OztBQUVMRCxRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7QUFDQXFCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNsYXNzIG1FbWl0dGVyIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1FbWl0dGVyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbUVtaXR0ZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fZW1pdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMCk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZW1pdGVyLmVtaXQoLi4uYXJncykpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJPbmNlKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgICAgIHRoaXMuX2VtaXRlci5vbmNlKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UodGhpcy5ldmVudHMuaW5kZXhPZihldmVudCksIDEpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEV2ZW50KCkge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpXG4gICAge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG51bGw7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG59XG5tRW1pdHRlci5pbnN0YW5jZSA9IG51bGw7XG5tb2R1bGUuZXhwb3J0cyA9IG1FbWl0dGVyOyJdfQ==