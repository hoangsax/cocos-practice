
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/AnimationList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5d1e9hlOZGjLJ62vVFib+6', 'AnimationList');
// Script/SpineAnimation/AnimationList.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    spineManger: cc.Node,
    animationItem: cc.Prefab
  },
  ctor: function ctor() {
    this.animations = [];
  },
  onLoad: function onLoad() {
    var spines = this.spineManger.children;
    this.node.removeAllChildren();

    for (var i = 0; i < spines.length; i++) {
      {
        if (spines[i].active) {
          this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
          break;
        }
      }
    }

    var animationsLength = this.animations.length ? this.animations.length : 0;

    for (var _i = 0; _i < animationsLength; _i++) {
      var button = cc.instantiate(this.animationItem);
      button.parent = this.node;
      button.children[0].children[0].getComponent("cc.Label").string = this.animations[_i].name;
      button.name = this.animations[_i].name;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwaW5lTWFuZ2VyIiwiTm9kZSIsImFuaW1hdGlvbkl0ZW0iLCJQcmVmYWIiLCJjdG9yIiwiYW5pbWF0aW9ucyIsIm9uTG9hZCIsInNwaW5lcyIsImNoaWxkcmVuIiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIl9za2VsZXRvbiIsImRhdGEiLCJhbmltYXRpb25zTGVuZ3RoIiwiYnV0dG9uIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLLElBRFI7SUFFUkMsYUFBYSxFQUFFTixFQUFFLENBQUNPO0VBRlYsQ0FIUDtFQVFMQyxJQVJLLGtCQVFFO0lBQ0gsS0FBS0MsVUFBTCxHQUFrQixFQUFsQjtFQUNILENBVkk7RUFZTEMsTUFaSyxvQkFZSTtJQUNMLElBQUlDLE1BQU0sR0FBRyxLQUFLUCxXQUFMLENBQWlCUSxRQUE5QjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsaUJBQVY7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDO1FBQ0ksSUFBSUosTUFBTSxDQUFDSSxDQUFELENBQU4sQ0FBVUUsTUFBZCxFQUFzQjtVQUNsQixLQUFLUixVQUFMLEdBQWtCRSxNQUFNLENBQUNJLENBQUQsQ0FBTixDQUFVRyxZQUFWLENBQXVCLGFBQXZCLEVBQXNDQyxTQUF0QyxDQUFnREMsSUFBaEQsQ0FBcURYLFVBQXZFO1VBQ0E7UUFDSDtNQUNKO0lBQ0o7O0lBQ0QsSUFBSVksZ0JBQWdCLEdBQUcsS0FBS1osVUFBTCxDQUFnQk8sTUFBaEIsR0FBeUIsS0FBS1AsVUFBTCxDQUFnQk8sTUFBekMsR0FBa0QsQ0FBekU7O0lBQ0EsS0FBSyxJQUFJRCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHTSxnQkFBcEIsRUFBc0NOLEVBQUMsRUFBdkMsRUFBMkM7TUFDdkMsSUFBTU8sTUFBTSxHQUFHdEIsRUFBRSxDQUFDdUIsV0FBSCxDQUFlLEtBQUtqQixhQUFwQixDQUFmO01BQ0FnQixNQUFNLENBQUNFLE1BQVAsR0FBZ0IsS0FBS1gsSUFBckI7TUFDQVMsTUFBTSxDQUFDVixRQUFQLENBQWdCLENBQWhCLEVBQW1CQSxRQUFuQixDQUE0QixDQUE1QixFQUErQk0sWUFBL0IsQ0FBNEMsVUFBNUMsRUFBd0RPLE1BQXhELEdBQWlFLEtBQUtoQixVQUFMLENBQWdCTSxFQUFoQixFQUFtQlcsSUFBcEY7TUFDQUosTUFBTSxDQUFDSSxJQUFQLEdBQWMsS0FBS2pCLFVBQUwsQ0FBZ0JNLEVBQWhCLEVBQW1CVyxJQUFqQztJQUNIO0VBQ0o7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmVNYW5nZXI6IGNjLk5vZGUsXG4gICAgICAgIGFuaW1hdGlvbkl0ZW06IGNjLlByZWZhYixcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHNwaW5lcyA9IHRoaXMuc3BpbmVNYW5nZXIuY2hpbGRyZW47XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChzcGluZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IHNwaW5lc1tpXS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5fc2tlbGV0b24uZGF0YS5hbmltYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFuaW1hdGlvbnNMZW5ndGggPSB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoID8gdGhpcy5hbmltYXRpb25zLmxlbmd0aCA6IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9uc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFuaW1hdGlvbkl0ZW0pO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIGJ1dHRvbi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJjYy5MYWJlbFwiKS5zdHJpbmcgPSB0aGlzLmFuaW1hdGlvbnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGJ1dHRvbi5uYW1lID0gdGhpcy5hbmltYXRpb25zW2ldLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==