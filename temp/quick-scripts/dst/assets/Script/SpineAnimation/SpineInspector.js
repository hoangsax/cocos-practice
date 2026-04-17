
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
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
  },
  setAnimation: function setAnimation(data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVJbnNwZWN0b3IuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50Iiwic2V0QW5pbWF0aW9uIiwiYmluZCIsImRhdGEiLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWpCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BRkssb0JBRUs7SUFDTkwsT0FBTyxDQUFDTSxRQUFSLEdBQW1CLElBQUlOLE9BQUosRUFBbkI7SUFDQUEsT0FBTyxDQUFDTSxRQUFSLENBQWlCQyxhQUFqQixDQUErQixlQUEvQixFQUFnRCxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoRDtFQUVILENBTkk7RUFRTEQsWUFSSyx3QkFRUUUsSUFSUixFQVFjO0lBQ2YsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxZQUF0QixDQUFtQ0MsRUFBRSxDQUFDQyxRQUF0QyxFQUFnRFAsWUFBaEQsQ0FBNkQsQ0FBN0QsRUFBZ0VFLElBQWhFLEVBQXNFLElBQXRFO0VBQ0g7QUFWSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZSA9IG5ldyBFbWl0dGVyKCk7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudCgnU0VUX0FOSU1BVElPTicsIHRoaXMuc2V0QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuXG4gICAgfSxcblxuICAgIHNldEFuaW1hdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBkYXRhLCB0cnVlKTtcbiAgICB9LFxufSk7XG4iXX0=