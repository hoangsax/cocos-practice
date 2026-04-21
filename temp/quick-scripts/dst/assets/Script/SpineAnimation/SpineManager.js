
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
    Emitter.instance.registerEvent('SET_ANIMATION2', this.setAnimation.bind(this));
    var temp = Emitter.instance._emiter._events;
    console.log(temp);
    console.log(temp[Object.keys(temp)[0]]);
    var spines = this.node.children;

    for (var i = 0; i < spines.length; i++) {
      if (spines[i].active) {
        this.activeSpine = spines[i];
        break;
      }
    }
  },
  setAnimation: function setAnimation(data) {
    this.buttonScript.stopAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidXR0b25TY3JpcHQiLCJOb2RlIiwiY3RvciIsImFjdGl2ZVNwaW5lIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50Iiwic2V0QW5pbWF0aW9uIiwiYmluZCIsInRlbXAiLCJfZW1pdGVyIiwiX2V2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwic3BpbmVzIiwibm9kZSIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsImRhdGEiLCJzdG9wQWxsIiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsInJlbW92ZUFsbEV2ZW50Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWpCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEVCxDQUhQO0VBT0xDLElBUEssa0JBT0U7SUFDSCxLQUFLQyxXQUFMLEdBQW1CLElBQW5CO0VBQ0gsQ0FUSTtFQVdMQyxNQVhLLG9CQVdLO0lBQ05WLE9BQU8sQ0FBQ1csUUFBUixHQUFtQixJQUFJWCxPQUFKLEVBQW5CO0lBQ0FBLE9BQU8sQ0FBQ1csUUFBUixDQUFpQkMsYUFBakIsQ0FBK0IsZUFBL0IsRUFBZ0QsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEQ7SUFDQWQsT0FBTyxDQUFDVyxRQUFSLENBQWlCQyxhQUFqQixDQUErQixnQkFBL0IsRUFBaUQsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakQ7SUFDQSxJQUFJQyxJQUFJLEdBQUdmLE9BQU8sQ0FBQ1csUUFBUixDQUFpQkssT0FBakIsQ0FBeUJDLE9BQXBDO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFJLENBQUNLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixJQUFaLEVBQWtCLENBQWxCLENBQUQsQ0FBaEI7SUFDQSxJQUFJTyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxRQUF2Qjs7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7TUFDcEMsSUFBSUgsTUFBTSxDQUFDRyxDQUFELENBQU4sQ0FBVUUsTUFBZCxFQUFzQjtRQUNsQixLQUFLbEIsV0FBTCxHQUFtQmEsTUFBTSxDQUFDRyxDQUFELENBQXpCO1FBQ0E7TUFDSDtJQUNKO0VBQ0osQ0F6Qkk7RUEyQkxaLFlBM0JLLHdCQTJCUWUsSUEzQlIsRUEyQmM7SUFDZixLQUFLdEIsWUFBTCxDQUFrQnVCLE9BQWxCO0lBQ0EsS0FBS3BCLFdBQUwsQ0FBaUJxQixZQUFqQixDQUE4QkMsRUFBRSxDQUFDQyxRQUFqQyxFQUEyQ25CLFlBQTNDLENBQXdELENBQXhELEVBQTJEZSxJQUEzRCxFQUFpRSxJQUFqRTtFQUNILENBOUJJO0VBZ0NMSyxjQWhDSyw0QkFnQ1k7SUFDYmpDLE9BQU8sQ0FBQ1csUUFBUixDQUFpQnNCLGNBQWpCO0VBQ0gsQ0FsQ0k7RUFvQ0xDLFNBcENLLHVCQW9DTztJQUNSbEMsT0FBTyxDQUFDVyxRQUFSLENBQWlCc0IsY0FBakI7RUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvblNjcmlwdDogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTcGluZSA9IG51bGw7XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UgPSBuZXcgRW1pdHRlcigpO1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoJ1NFVF9BTklNQVRJT04nLCB0aGlzLnNldEFuaW1hdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KCdTRVRfQU5JTUFUSU9OMicsIHRoaXMuc2V0QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICBsZXQgdGVtcCA9IEVtaXR0ZXIuaW5zdGFuY2UuX2VtaXRlci5fZXZlbnRzO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcFtPYmplY3Qua2V5cyh0ZW1wKVswXV0pO1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNwaW5lc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNwaW5lID0gc3BpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldEFuaW1hdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uU2NyaXB0LnN0b3BBbGwoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVTcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBkYXRhLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsRXZlbnQoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVtb3ZlQWxsRXZlbnQoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KCk7XG4gICAgfVxufSk7XG4iXX0=