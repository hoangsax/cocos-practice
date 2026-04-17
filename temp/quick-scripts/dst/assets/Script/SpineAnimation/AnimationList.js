
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

var Emitter = require('mEmitter');

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
    console.log(spines);
    this.animations = spines[0].active ? spines[0].getComponent("sp.Skeleton")._skeleton.data.animations : [];
    var animationsLength = this.animations.length ? this.animations.length : 0;

    for (var i = 0; i < animationsLength; i++) {
      var item = cc.instantiate(this.animationItem);
      item.parent = this.node;
      item.children[0].children[0].getComponent("cc.Label").string = this.animations[i].name;
      item.name = this.animations[i].name;
      console.log(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6WyJFbWl0dGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BpbmVNYW5nZXIiLCJOb2RlIiwiYW5pbWF0aW9uSXRlbSIsIlByZWZhYiIsImN0b3IiLCJhbmltYXRpb25zIiwib25Mb2FkIiwic3BpbmVzIiwiY2hpbGRyZW4iLCJub2RlIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50IiwiX3NrZWxldG9uIiwiZGF0YSIsImFuaW1hdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJpIiwiaXRlbSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwic3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLLElBRFI7SUFFUkMsYUFBYSxFQUFFTixFQUFFLENBQUNPO0VBRlYsQ0FIUDtFQVFMQyxJQVJLLGtCQVFFO0lBQ0gsS0FBS0MsVUFBTCxHQUFrQixFQUFsQjtFQUNILENBVkk7RUFXTEMsTUFYSyxvQkFXSztJQUNOLElBQUlDLE1BQU0sR0FBRyxLQUFLUCxXQUFMLENBQWlCUSxRQUE5QjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsaUJBQVY7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7SUFDQSxLQUFLRixVQUFMLEdBQWtCRSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVNLE1BQVYsR0FBbUJOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sWUFBVixDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLElBQWhELENBQXFEWCxVQUF4RSxHQUFxRixFQUF2RztJQUNBLElBQUlZLGdCQUFnQixHQUFHLEtBQUtaLFVBQUwsQ0FBZ0JhLE1BQWhCLEdBQXdCLEtBQUtiLFVBQUwsQ0FBZ0JhLE1BQXhDLEdBQWlELENBQXhFOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsZ0JBQXBCLEVBQXNDRSxDQUFDLEVBQXZDLEVBQTBDO01BQ3RDLElBQU1DLElBQUksR0FBR3hCLEVBQUUsQ0FBQ3lCLFdBQUgsQ0FBZSxLQUFLbkIsYUFBcEIsQ0FBYjtNQUNBa0IsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBS2IsSUFBbkI7TUFDQVcsSUFBSSxDQUFDWixRQUFMLENBQWMsQ0FBZCxFQUFpQkEsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJNLFlBQTdCLENBQTBDLFVBQTFDLEVBQXNEUyxNQUF0RCxHQUErRCxLQUFLbEIsVUFBTCxDQUFnQmMsQ0FBaEIsRUFBbUJLLElBQWxGO01BQ0FKLElBQUksQ0FBQ0ksSUFBTCxHQUFZLEtBQUtuQixVQUFMLENBQWdCYyxDQUFoQixFQUFtQkssSUFBL0I7TUFDQWIsT0FBTyxDQUFDQyxHQUFSLENBQVlRLElBQVo7SUFDSDtFQUNKO0FBeEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKCdtRW1pdHRlcicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmVNYW5nZXI6IGNjLk5vZGUsXG4gICAgICAgIGFuaW1hdGlvbkl0ZW06IGNjLlByZWZhYixcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5zcGluZU1hbmdlci5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNwaW5lcylcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gc3BpbmVzWzBdLmFjdGl2ZSA/IHNwaW5lc1swXS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5fc2tlbGV0b24uZGF0YS5hbmltYXRpb25zIDogW107XG4gICAgICAgIGxldCBhbmltYXRpb25zTGVuZ3RoID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aD8gdGhpcy5hbmltYXRpb25zLmxlbmd0aCA6IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9uc0xlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFuaW1hdGlvbkl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcImNjLkxhYmVsXCIpLnN0cmluZyA9IHRoaXMuYW5pbWF0aW9uc1tpXS5uYW1lO1xuICAgICAgICAgICAgaXRlbS5uYW1lID0gdGhpcy5hbmltYXRpb25zW2ldLm5hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==