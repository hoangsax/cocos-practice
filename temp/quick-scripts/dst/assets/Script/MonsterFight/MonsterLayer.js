
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/MonsterLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'caf1fqUbtdKVY1VGjC2cjGg', 'MonsterLayer');
// Script/MonsterFight/MonsterLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    MonsterEventType = _require.MonsterEventType;

var monsterPosition = cc.Vec2(600, -10);
cc.Class({
  "extends": cc.Component,
  properties: {
    monster: cc.Node
  },
  onLoad: function onLoad() {
    mEmitter.instance.registerEvent(MonsterEventType.HIT, this.onHit.bind(this), this);
  },
  onHit: function onHit(damage) {
    this.monster.onHit(damage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L01vbnN0ZXJMYXllci5qcyJdLCJuYW1lcyI6WyJtRW1pdHRlciIsInJlcXVpcmUiLCJNb25zdGVyRXZlbnRUeXBlIiwibW9uc3RlclBvc2l0aW9uIiwiY2MiLCJWZWMyIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uc3RlciIsIk5vZGUiLCJvbkxvYWQiLCJpbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnQiLCJISVQiLCJvbkhpdCIsImJpbmQiLCJkYW1hZ2UiLCJvbkRlc3Ryb3kiLCJyZW1vdmVBbGxFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFsQjs7QUFDQSxlQUE2QkEsT0FBTyxDQUFDLGFBQUQsQ0FBcEM7QUFBQSxJQUFRQyxnQkFBUixZQUFRQSxnQkFBUjs7QUFFQSxJQUFNQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLEdBQVIsRUFBYSxDQUFDLEVBQWQsQ0FBeEI7QUFFQUQsRUFBRSxDQUFDRSxLQUFILENBQVM7RUFDTCxXQUFTRixFQUFFLENBQUNHLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUwsRUFBRSxDQUFDTTtFQURKLENBSFA7RUFPTEMsTUFQSyxvQkFPSztJQUNOWCxRQUFRLENBQUNZLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDWCxnQkFBZ0IsQ0FBQ1ksR0FBakQsRUFBc0QsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQXRELEVBQTZFLElBQTdFO0VBQ0gsQ0FUSTtFQVdMRCxLQVhLLGlCQVdDRSxNQVhELEVBV1M7SUFDVixLQUFLUixPQUFMLENBQWFNLEtBQWIsQ0FBbUJFLE1BQW5CO0VBQ0gsQ0FiSTtFQWVMQyxTQWZLLHVCQWVPO0lBQ1JsQixRQUFRLENBQUNZLFFBQVQsQ0FBa0JPLGNBQWxCLENBQWlDLElBQWpDO0VBQ0g7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibUVtaXR0ZXIgPSByZXF1aXJlKFwibUVtaXR0ZXJcIik7XG5jb25zdCB7IE1vbnN0ZXJFdmVudFR5cGUgfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcblxuY29uc3QgbW9uc3RlclBvc2l0aW9uID0gY2MuVmVjMig2MDAsIC0xMClcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW9uc3RlcjogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudChNb25zdGVyRXZlbnRUeXBlLkhJVCwgdGhpcy5vbkhpdC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25IaXQoZGFtYWdlKSB7XG4gICAgICAgIHRoaXMubW9uc3Rlci5vbkhpdChkYW1hZ2UpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KHRoaXMpO1xuICAgIH1cbn0pO1xuIl19