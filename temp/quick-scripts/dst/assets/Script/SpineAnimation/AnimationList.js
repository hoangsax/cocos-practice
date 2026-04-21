
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
      if (spines[i].active) {
        this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwaW5lTWFuZ2VyIiwiTm9kZSIsImFuaW1hdGlvbkl0ZW0iLCJQcmVmYWIiLCJjdG9yIiwiYW5pbWF0aW9ucyIsIm9uTG9hZCIsInNwaW5lcyIsImNoaWxkcmVuIiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIl9za2VsZXRvbiIsImRhdGEiLCJhbmltYXRpb25zTGVuZ3RoIiwiYnV0dG9uIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLLElBRFI7SUFFUkMsYUFBYSxFQUFFTixFQUFFLENBQUNPO0VBRlYsQ0FIUDtFQVFMQyxJQVJLLGtCQVFFO0lBQ0gsS0FBS0MsVUFBTCxHQUFrQixFQUFsQjtFQUNILENBVkk7RUFZTEMsTUFaSyxvQkFZSTtJQUNMLElBQUlDLE1BQU0sR0FBRyxLQUFLUCxXQUFMLENBQWlCUSxRQUE5QjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsaUJBQVY7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDLElBQUlKLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOLENBQVVFLE1BQWQsRUFBc0I7UUFDbEIsS0FBS1IsVUFBTCxHQUFrQkUsTUFBTSxDQUFDSSxDQUFELENBQU4sQ0FBVUcsWUFBVixDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLElBQWhELENBQXFEWCxVQUF2RTtRQUNBO01BQ0g7SUFDSjs7SUFDRCxJQUFJWSxnQkFBZ0IsR0FBRyxLQUFLWixVQUFMLENBQWdCTyxNQUFoQixHQUF5QixLQUFLUCxVQUFMLENBQWdCTyxNQUF6QyxHQUFrRCxDQUF6RTs7SUFDQSxLQUFLLElBQUlELEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdNLGdCQUFwQixFQUFzQ04sRUFBQyxFQUF2QyxFQUEyQztNQUN2QyxJQUFNTyxNQUFNLEdBQUd0QixFQUFFLENBQUN1QixXQUFILENBQWUsS0FBS2pCLGFBQXBCLENBQWY7TUFDQWdCLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixLQUFLWCxJQUFyQjtNQUNBUyxNQUFNLENBQUNWLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJBLFFBQW5CLENBQTRCLENBQTVCLEVBQStCTSxZQUEvQixDQUE0QyxVQUE1QyxFQUF3RE8sTUFBeEQsR0FBaUUsS0FBS2hCLFVBQUwsQ0FBZ0JNLEVBQWhCLEVBQW1CVyxJQUFwRjtNQUNBSixNQUFNLENBQUNJLElBQVAsR0FBYyxLQUFLakIsVUFBTCxDQUFnQk0sRUFBaEIsRUFBbUJXLElBQWpDO0lBQ0g7RUFDSjtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGluZU1hbmdlcjogY2MuTm9kZSxcbiAgICAgICAgYW5pbWF0aW9uSXRlbTogY2MuUHJlZmFiLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5zcGluZU1hbmdlci5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3BpbmVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IHNwaW5lc1tpXS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5fc2tlbGV0b24uZGF0YS5hbmltYXRpb25zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBhbmltYXRpb25zTGVuZ3RoID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aCA/IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggOiAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuaW1hdGlvbnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmltYXRpb25JdGVtKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBidXR0b24uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiY2MuTGFiZWxcIikuc3RyaW5nID0gdGhpcy5hbmltYXRpb25zW2ldLm5hbWU7XG4gICAgICAgICAgICBidXR0b24ubmFtZSA9IHRoaXMuYW5pbWF0aW9uc1tpXS5uYW1lO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=