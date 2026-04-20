
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/SpineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineManager');
// Script/SpineAnimation/SpineManager.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  properties: {
    buttonScript: cc.Node
  },
  ctor: function ctor() {
    this.activeSpine = null;
  },
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
    var spines = this.node.children;

    for (var i = 0; i < spines.length; i++) {
      if (spines[i].active) {
        this.activeSpine = spines[i];
        break;
      }
    }
  },
  setAnimation: function setAnimation(data) {
    this.buttonScript.getComponent("AnimationHandler").stopEverything();
    this.activeSpine.getComponent(sp.Skeleton).setAnimation(0, data, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidXR0b25TY3JpcHQiLCJOb2RlIiwiY3RvciIsImFjdGl2ZVNwaW5lIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50Iiwic2V0QW5pbWF0aW9uIiwiYmluZCIsInNwaW5lcyIsIm5vZGUiLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJkYXRhIiwiZ2V0Q29tcG9uZW50Iiwic3RvcEV2ZXJ5dGhpbmciLCJzcCIsIlNrZWxldG9uIiwicmVtb3ZlQWxsRXZlbnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBakI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSztFQURULENBSFA7RUFPTEMsSUFQSyxrQkFPRTtJQUNILEtBQUtDLFdBQUwsR0FBbUIsSUFBbkI7RUFDSCxDQVRJO0VBV0xDLE1BWEssb0JBV0s7SUFDTlYsT0FBTyxDQUFDVyxRQUFSLEdBQW1CLElBQUlYLE9BQUosRUFBbkI7SUFDQUEsT0FBTyxDQUFDVyxRQUFSLENBQWlCQyxhQUFqQixDQUErQixlQUEvQixFQUFnRCxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoRDtJQUNBLElBQUlDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQXZCOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBTSxDQUFDSSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztNQUNwQyxJQUFJSCxNQUFNLENBQUNHLENBQUQsQ0FBTixDQUFVRSxNQUFkLEVBQXNCO1FBQ2xCLEtBQUtYLFdBQUwsR0FBbUJNLE1BQU0sQ0FBQ0csQ0FBRCxDQUF6QjtRQUNBO01BQ0g7SUFDSjtFQUNKLENBckJJO0VBdUJMTCxZQXZCSyx3QkF1QlFRLElBdkJSLEVBdUJjO0lBQ2YsS0FBS2YsWUFBTCxDQUFrQmdCLFlBQWxCLENBQStCLGtCQUEvQixFQUFtREMsY0FBbkQ7SUFDQSxLQUFLZCxXQUFMLENBQWlCYSxZQUFqQixDQUE4QkUsRUFBRSxDQUFDQyxRQUFqQyxFQUEyQ1osWUFBM0MsQ0FBd0QsQ0FBeEQsRUFBMkRRLElBQTNELEVBQWlFLElBQWpFO0VBQ0gsQ0ExQkk7RUE0QkxLLGNBNUJLLDRCQTRCWTtJQUNiMUIsT0FBTyxDQUFDVyxRQUFSLENBQWlCZSxjQUFqQjtFQUNILENBOUJJO0VBZ0NMQyxTQWhDSyx1QkFnQ087SUFDUjNCLE9BQU8sQ0FBQ1csUUFBUixDQUFpQmUsY0FBakI7RUFDSDtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvblNjcmlwdDogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTcGluZSA9IG51bGw7XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UgPSBuZXcgRW1pdHRlcigpO1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoJ1NFVF9BTklNQVRJT04nLCB0aGlzLnNldEFuaW1hdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgbGV0IHNwaW5lcyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzcGluZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTcGluZSA9IHNwaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRBbmltYXRpb24oZGF0YSkge1xuICAgICAgICB0aGlzLmJ1dHRvblNjcmlwdC5nZXRDb21wb25lbnQoXCJBbmltYXRpb25IYW5kbGVyXCIpLnN0b3BFdmVyeXRoaW5nKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgZGF0YSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIHJlbW92ZUFsbEV2ZW50KCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KCk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5yZW1vdmVBbGxFdmVudCgpO1xuICAgIH1cbn0pO1xuIl19