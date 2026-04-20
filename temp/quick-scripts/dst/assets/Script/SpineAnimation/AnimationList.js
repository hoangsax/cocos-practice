
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
    console.log(spines);
    this.node.removeAllChildren();

    for (var i = 0; i < spines.length; i++) {
      {
        if (!!spines[i].active) {
          this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
          console.log('a');
          break;
        }
      }
    } // this.animations = spines[0].active ? spines[0].getComponent("sp.Skeleton")._skeleton.data.animations : [];


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwaW5lTWFuZ2VyIiwiTm9kZSIsImFuaW1hdGlvbkl0ZW0iLCJQcmVmYWIiLCJjdG9yIiwiYW5pbWF0aW9ucyIsIm9uTG9hZCIsInNwaW5lcyIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJfc2tlbGV0b24iLCJkYXRhIiwiYW5pbWF0aW9uc0xlbmd0aCIsImJ1dHRvbiIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwic3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQURSO0lBRVJDLGFBQWEsRUFBRU4sRUFBRSxDQUFDTztFQUZWLENBSFA7RUFRTEMsSUFSSyxrQkFRRTtJQUNILEtBQUtDLFVBQUwsR0FBa0IsRUFBbEI7RUFDSCxDQVZJO0VBV0xDLE1BWEssb0JBV0k7SUFDTCxJQUFJQyxNQUFNLEdBQUcsS0FBS1AsV0FBTCxDQUFpQlEsUUFBOUI7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7SUFDQSxLQUFLSSxJQUFMLENBQVVDLGlCQUFWOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sTUFBTSxDQUFDTyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztNQUNwQztRQUNJLElBQUksQ0FBQyxDQUFDTixNQUFNLENBQUNNLENBQUQsQ0FBTixDQUFVRSxNQUFoQixFQUF3QjtVQUNwQixLQUFLVixVQUFMLEdBQWtCRSxNQUFNLENBQUNNLENBQUQsQ0FBTixDQUFVRyxZQUFWLENBQXVCLGFBQXZCLEVBQXNDQyxTQUF0QyxDQUFnREMsSUFBaEQsQ0FBcURiLFVBQXZFO1VBQ0FJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7VUFDQTtRQUNIO01BQ0o7SUFDSixDQVpJLENBYUw7OztJQUNBLElBQUlTLGdCQUFnQixHQUFHLEtBQUtkLFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXlCLEtBQUtULFVBQUwsQ0FBZ0JTLE1BQXpDLEdBQWtELENBQXpFOztJQUNBLEtBQUssSUFBSUQsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR00sZ0JBQXBCLEVBQXNDTixFQUFDLEVBQXZDLEVBQTJDO01BQ3ZDLElBQU1PLE1BQU0sR0FBR3hCLEVBQUUsQ0FBQ3lCLFdBQUgsQ0FBZSxLQUFLbkIsYUFBcEIsQ0FBZjtNQUNBa0IsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLEtBQUtYLElBQXJCO01BQ0FTLE1BQU0sQ0FBQ1osUUFBUCxDQUFnQixDQUFoQixFQUFtQkEsUUFBbkIsQ0FBNEIsQ0FBNUIsRUFBK0JRLFlBQS9CLENBQTRDLFVBQTVDLEVBQXdETyxNQUF4RCxHQUFpRSxLQUFLbEIsVUFBTCxDQUFnQlEsRUFBaEIsRUFBbUJXLElBQXBGO01BQ0FKLE1BQU0sQ0FBQ0ksSUFBUCxHQUFjLEtBQUtuQixVQUFMLENBQWdCUSxFQUFoQixFQUFtQlcsSUFBakM7SUFDSDtFQUNKO0FBaENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwaW5lTWFuZ2VyOiBjYy5Ob2RlLFxuICAgICAgICBhbmltYXRpb25JdGVtOiBjYy5QcmVmYWIsXG4gICAgfSxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5zcGluZU1hbmdlci5jaGlsZHJlbjtcbiAgICAgICAgY29uc29sZS5sb2coc3BpbmVzKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCEhc3BpbmVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBzcGluZXNbaV0uZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIikuX3NrZWxldG9uLmRhdGEuYW5pbWF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9ucyA9IHNwaW5lc1swXS5hY3RpdmUgPyBzcGluZXNbMF0uZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIikuX3NrZWxldG9uLmRhdGEuYW5pbWF0aW9ucyA6IFtdO1xuICAgICAgICBsZXQgYW5pbWF0aW9uc0xlbmd0aCA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPyB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoIDogMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb25zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYW5pbWF0aW9uSXRlbSk7XG4gICAgICAgICAgICBidXR0b24ucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgYnV0dG9uLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcImNjLkxhYmVsXCIpLnN0cmluZyA9IHRoaXMuYW5pbWF0aW9uc1tpXS5uYW1lO1xuICAgICAgICAgICAgYnV0dG9uLm5hbWUgPSB0aGlzLmFuaW1hdGlvbnNbaV0ubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19