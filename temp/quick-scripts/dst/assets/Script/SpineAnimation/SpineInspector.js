
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
  },
  removeAllEvent: function removeAllEvent() {
    Emitter.instance.removeAllEvent();
  },
  onDestroy: function onDestroy() {
    Emitter.instance.removeAllEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVJbnNwZWN0b3IuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ1dHRvblNjcmlwdCIsIk5vZGUiLCJvbkxvYWQiLCJpbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnQiLCJzZXRBbmltYXRpb24iLCJiaW5kIiwiZGF0YSIsImdldENvbXBvbmVudCIsInN0b3BFdmVyeXRoaW5nIiwibm9kZSIsImNoaWxkcmVuIiwic3AiLCJTa2VsZXRvbiIsInJlbW92ZUFsbEV2ZW50Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWpCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEVCxDQUhQO0VBT0xDLE1BUEssb0JBT0s7SUFDTlIsT0FBTyxDQUFDUyxRQUFSLEdBQW1CLElBQUlULE9BQUosRUFBbkI7SUFDQUEsT0FBTyxDQUFDUyxRQUFSLENBQWlCQyxhQUFqQixDQUErQixlQUEvQixFQUFnRCxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoRDtFQUNILENBVkk7RUFZTEQsWUFaSyx3QkFZUUUsSUFaUixFQVljO0lBQ2YsS0FBS1AsWUFBTCxDQUFrQlEsWUFBbEIsQ0FBK0Isa0JBQS9CLEVBQW1EQyxjQUFuRDtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkgsWUFBdEIsQ0FBbUNJLEVBQUUsQ0FBQ0MsUUFBdEMsRUFBZ0RSLFlBQWhELENBQTZELENBQTdELEVBQWdFRSxJQUFoRSxFQUFzRSxJQUF0RTtFQUNILENBZkk7RUFpQkxPLGNBakJLLDRCQWlCWTtJQUNicEIsT0FBTyxDQUFDUyxRQUFSLENBQWlCVyxjQUFqQjtFQUNILENBbkJJO0VBcUJMQyxTQXJCSyx1QkFxQk87SUFDUnJCLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQlcsY0FBakI7RUFDSDtBQXZCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvblNjcmlwdDogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZSA9IG5ldyBFbWl0dGVyKCk7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudCgnU0VUX0FOSU1BVElPTicsIHRoaXMuc2V0QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBzZXRBbmltYXRpb24oZGF0YSkge1xuICAgICAgICB0aGlzLmJ1dHRvblNjcmlwdC5nZXRDb21wb25lbnQoXCJBbmltYXRpb25IYW5kbGVyXCIpLnN0b3BFdmVyeXRoaW5nKCk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBkYXRhLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsRXZlbnQoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVtb3ZlQWxsRXZlbnQoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KCk7XG4gICAgfVxufSk7XG4iXX0=