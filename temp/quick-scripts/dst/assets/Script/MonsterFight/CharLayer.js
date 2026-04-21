
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/CharLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa3b6gN//NO/aYhKL6zXu+3', 'CharLayer');
// Script/MonsterFight/CharLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    CharacterEventType = _require.CharacterEventType;

cc.Class({
  "extends": cc.Component,
  properties: {
    Char: cc.Node
  },
  onLoad: function onLoad() {
    new mEmitter();
    mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this);
  },
  onPressMove: function onPressMove(direction) {
    this.Char.onPressMove(direction);
  },
  onPressStop: function onPressStop(direction) {
    this.Char.onPressStop(direction);
  },
  onPressShoot: function onPressShoot() {
    this.Char.onShoot();
  },
  onReloadDone: function onReloadDone() {
    this.Char.onReloadDone();
  },
  onDestroy: function onDestroy() {
    mEmitter.instance.removeAllEvent(this);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0NoYXJMYXllci5qcyJdLCJuYW1lcyI6WyJtRW1pdHRlciIsInJlcXVpcmUiLCJDaGFyYWN0ZXJFdmVudFR5cGUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkNoYXIiLCJOb2RlIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50IiwiTU9WRSIsIm9uUHJlc3NNb3ZlIiwiYmluZCIsIlNUT1AiLCJvblByZXNzU3RvcCIsIlNIT09UIiwib25QcmVzc1Nob290IiwiUkVMT0FEIiwib25SZWxvYWREb25lIiwiZGlyZWN0aW9uIiwib25TaG9vdCIsIm9uRGVzdHJveSIsInJlbW92ZUFsbEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWxCOztBQUNBLGVBQStCQSxPQUFPLENBQUMsYUFBRCxDQUF0QztBQUFBLElBQVFDLGtCQUFSLFlBQVFBLGtCQUFSOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFSixFQUFFLENBQUNLO0VBREQsQ0FIUDtFQU9MQyxNQVBLLG9CQU9JO0lBQ0wsSUFBSVQsUUFBSjtJQUNBQSxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDVCxrQkFBa0IsQ0FBQ1UsSUFBbkQsRUFBeUQsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBekQsRUFBc0YsSUFBdEY7SUFDQWQsUUFBUSxDQUFDVSxRQUFULENBQWtCQyxhQUFsQixDQUFnQ1Qsa0JBQWtCLENBQUNhLElBQW5ELEVBQXlELEtBQUtDLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQXpELEVBQXNGLElBQXRGO0lBQ0FkLFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkMsYUFBbEIsQ0FBZ0NULGtCQUFrQixDQUFDZSxLQUFuRCxFQUEwRCxLQUFLQyxZQUFMLENBQWtCSixJQUFsQixDQUF1QixJQUF2QixDQUExRCxFQUF3RixJQUF4RjtJQUNBZCxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDVCxrQkFBa0IsQ0FBQ2lCLE1BQW5ELEVBQTJELEtBQUtDLFlBQUwsQ0FBa0JOLElBQWxCLENBQXVCLElBQXZCLENBQTNELEVBQXlGLElBQXpGO0VBQ0gsQ0FiSTtFQWVMRCxXQWZLLHVCQWVPUSxTQWZQLEVBZWtCO0lBQ25CLEtBQUtkLElBQUwsQ0FBVU0sV0FBVixDQUFzQlEsU0FBdEI7RUFDSCxDQWpCSTtFQW1CTEwsV0FuQkssdUJBbUJPSyxTQW5CUCxFQW1Ca0I7SUFDbkIsS0FBS2QsSUFBTCxDQUFVUyxXQUFWLENBQXNCSyxTQUF0QjtFQUNILENBckJJO0VBdUJMSCxZQXZCSywwQkF1QlU7SUFDWCxLQUFLWCxJQUFMLENBQVVlLE9BQVY7RUFDSCxDQXpCSTtFQTJCTEYsWUEzQkssMEJBMkJVO0lBQ1gsS0FBS2IsSUFBTCxDQUFVYSxZQUFWO0VBQ0gsQ0E3Qkk7RUErQkxHLFNBL0JLLHVCQStCTztJQUNSdkIsUUFBUSxDQUFDVSxRQUFULENBQWtCYyxjQUFsQixDQUFpQyxJQUFqQztFQUNIO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1FbWl0dGVyID0gcmVxdWlyZShcIm1FbWl0dGVyXCIpO1xuY29uc3QgeyBDaGFyYWN0ZXJFdmVudFR5cGUgfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIENoYXI6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbmV3IG1FbWl0dGVyKCk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLk1PVkUsIHRoaXMub25QcmVzc01vdmUuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLlNUT1AsIHRoaXMub25QcmVzc1N0b3AuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLlNIT09ULCB0aGlzLm9uUHJlc3NTaG9vdC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudChDaGFyYWN0ZXJFdmVudFR5cGUuUkVMT0FELCB0aGlzLm9uUmVsb2FkRG9uZS5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25QcmVzc01vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuQ2hhci5vblByZXNzTW92ZShkaXJlY3Rpb24pO1xuICAgIH0sXG5cbiAgICBvblByZXNzU3RvcChkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5DaGFyLm9uUHJlc3NTdG9wKGRpcmVjdGlvbik7XG4gICAgfSxcblxuICAgIG9uUHJlc3NTaG9vdCgpIHtcbiAgICAgICAgdGhpcy5DaGFyLm9uU2hvb3QoKTtcbiAgICB9LFxuXG4gICAgb25SZWxvYWREb25lKCkge1xuICAgICAgICB0aGlzLkNoYXIub25SZWxvYWREb25lKCk7XG4gICAgfSxcbiAgICBcbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KHRoaXMpO1xuICAgIH1cbn0pO1xuIl19