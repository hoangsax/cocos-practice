
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/ItemScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'ItemScript');
// Script/SpineAnimation/ItemScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onClick: function onClick() {
    Emitter.instance.emit('SET_ANIMATION', this.node.name);
  },
  playAnimationClip: function playAnimationClip() {
    Emitter.instance.emit('ANIMATION_CLIP', this.node.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vSXRlbVNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25DbGljayIsIkVtaXR0ZXIiLCJpbnN0YW5jZSIsImVtaXQiLCJub2RlIiwibmFtZSIsInBsYXlBbmltYXRpb25DbGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxPQUhLLHFCQUdNO0lBQ1BDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0IsZUFBdEIsRUFBdUMsS0FBS0MsSUFBTCxDQUFVQyxJQUFqRDtFQUNILENBTEk7RUFPTEMsaUJBUEssK0JBT2dCO0lBQ2pCTCxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLGdCQUF0QixFQUF3QyxLQUFLQyxJQUFMLENBQVVDLElBQWxEO0VBQ0g7QUFUSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25DbGljayAoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdCgnU0VUX0FOSU1BVElPTicsIHRoaXMubm9kZS5uYW1lKTtcbiAgICB9LFxuXG4gICAgcGxheUFuaW1hdGlvbkNsaXAgKCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLmVtaXQoJ0FOSU1BVElPTl9DTElQJywgdGhpcy5ub2RlLm5hbWUpO1xuICAgIH1cbn0pO1xuIl19