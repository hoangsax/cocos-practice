
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
    this.buttonScript.stopEverything();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidXR0b25TY3JpcHQiLCJOb2RlIiwiY3RvciIsImFjdGl2ZVNwaW5lIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50Iiwic2V0QW5pbWF0aW9uIiwiYmluZCIsInNwaW5lcyIsIm5vZGUiLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJkYXRhIiwic3RvcEV2ZXJ5dGhpbmciLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwicmVtb3ZlQWxsRXZlbnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBakI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSztFQURULENBSFA7RUFPTEMsSUFQSyxrQkFPRTtJQUNILEtBQUtDLFdBQUwsR0FBbUIsSUFBbkI7RUFDSCxDQVRJO0VBV0xDLE1BWEssb0JBV0s7SUFDTlYsT0FBTyxDQUFDVyxRQUFSLEdBQW1CLElBQUlYLE9BQUosRUFBbkI7SUFDQUEsT0FBTyxDQUFDVyxRQUFSLENBQWlCQyxhQUFqQixDQUErQixlQUEvQixFQUFnRCxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoRDtJQUNBLElBQUlDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQXZCOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBTSxDQUFDSSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztNQUNwQyxJQUFJSCxNQUFNLENBQUNHLENBQUQsQ0FBTixDQUFVRSxNQUFkLEVBQXNCO1FBQ2xCLEtBQUtYLFdBQUwsR0FBbUJNLE1BQU0sQ0FBQ0csQ0FBRCxDQUF6QjtRQUNBO01BQ0g7SUFDSjtFQUNKLENBckJJO0VBdUJMTCxZQXZCSyx3QkF1QlFRLElBdkJSLEVBdUJjO0lBQ2YsS0FBS2YsWUFBTCxDQUFrQmdCLGNBQWxCO0lBQ0EsS0FBS2IsV0FBTCxDQUFpQmMsWUFBakIsQ0FBOEJDLEVBQUUsQ0FBQ0MsUUFBakMsRUFBMkNaLFlBQTNDLENBQXdELENBQXhELEVBQTJEUSxJQUEzRCxFQUFpRSxJQUFqRTtFQUNILENBMUJJO0VBNEJMSyxjQTVCSyw0QkE0Qlk7SUFDYjFCLE9BQU8sQ0FBQ1csUUFBUixDQUFpQmUsY0FBakI7RUFDSCxDQTlCSTtFQWdDTEMsU0FoQ0ssdUJBZ0NPO0lBQ1IzQixPQUFPLENBQUNXLFFBQVIsQ0FBaUJlLGNBQWpCO0VBQ0g7QUFsQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiRW1pdHRlciA9IHJlcXVpcmUoJ21FbWl0dGVyJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBidXR0b25TY3JpcHQ6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3BpbmUgPSBudWxsO1xuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KCdTRVRfQU5JTUFUSU9OJywgdGhpcy5zZXRBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIGxldCBzcGluZXMgPSB0aGlzLm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3BpbmVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU3BpbmUgPSBzcGluZXNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0QW5pbWF0aW9uKGRhdGEpIHtcbiAgICAgICAgdGhpcy5idXR0b25TY3JpcHQuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVTcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBkYXRhLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsRXZlbnQoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVtb3ZlQWxsRXZlbnQoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KCk7XG4gICAgfVxufSk7XG4iXX0=