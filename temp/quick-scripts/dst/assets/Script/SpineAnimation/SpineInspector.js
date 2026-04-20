
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/SpineInspector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineInspector');
// Script/SpineAnimation/SpineInspector.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  properties: {
    buttonScript: cc.Node
  },
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
  },
  setAnimation: function setAnimation(data) {
    this.buttonScript.getComponent("AnimationHandler").stopEverything();
    this.node.children[0].getComponent(sp.Skeleton).setAnimation(0, data, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVJbnNwZWN0b3IuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ1dHRvblNjcmlwdCIsIk5vZGUiLCJvbkxvYWQiLCJpbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnQiLCJzZXRBbmltYXRpb24iLCJiaW5kIiwiZGF0YSIsImdldENvbXBvbmVudCIsInN0b3BFdmVyeXRoaW5nIiwibm9kZSIsImNoaWxkcmVuIiwic3AiLCJTa2VsZXRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFqQjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsWUFBWSxFQUFFSixFQUFFLENBQUNLO0VBRFQsQ0FIUDtFQU9MQyxNQVBLLG9CQU9LO0lBQ05SLE9BQU8sQ0FBQ1MsUUFBUixHQUFtQixJQUFJVCxPQUFKLEVBQW5CO0lBQ0FBLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQkMsYUFBakIsQ0FBK0IsZUFBL0IsRUFBZ0QsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEQ7RUFDSCxDQVZJO0VBWUxELFlBWkssd0JBWVFFLElBWlIsRUFZYztJQUNmLEtBQUtQLFlBQUwsQ0FBa0JRLFlBQWxCLENBQStCLGtCQUEvQixFQUFtREMsY0FBbkQ7SUFDQSxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JILFlBQXRCLENBQW1DSSxFQUFFLENBQUNDLFFBQXRDLEVBQWdEUixZQUFoRCxDQUE2RCxDQUE3RCxFQUFnRUUsSUFBaEUsRUFBc0UsSUFBdEU7RUFDSDtBQWZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIkVtaXR0ZXIgPSByZXF1aXJlKCdtRW1pdHRlcicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnV0dG9uU2NyaXB0OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KCdTRVRfQU5JTUFUSU9OJywgdGhpcy5zZXRBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHNldEFuaW1hdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uU2NyaXB0LmdldENvbXBvbmVudChcIkFuaW1hdGlvbkhhbmRsZXJcIikuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGRhdGEsIHRydWUpO1xuICAgIH0sXG59KTtcbiJdfQ==