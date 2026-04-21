
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/AnimationButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1de6PsKdJG16NpfzMNhTxP', 'AnimationButton');
// Script/SpineAnimation/AnimationButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    spineNode: cc.Node
  },
  ctor: function ctor() {
    this.initialPosition = new cc.Vec3();
    this.initialScale = 1;
    this.initialAngle = 0;
  },
  onLoad: function onLoad() {
    this.initialPosition = this.spineNode.position.clone();
    this.initialScale = this.spineNode.scale;
    this.initialAngle = this.spineNode.rotation;
    this.node.stopAll = this.stopAll.bind(this);
  },
  stopAll: function stopAll() {
    this.spineNode.stopAllActions();
    var spine = this.spineNode.getComponent("sp.Skeleton");
    spine.setAnimation(0, "idle", true);
    cc.tween(this.spineNode).stop();
    var anim = this.getComponent("cc.Animation");
    if (anim) anim.stop();
    this.spineNode.setPosition(this.initialPosition);
    this.spineNode.scale = this.initialScale;
    this.spineNode.angle = this.initialRotation;
  },
  runAnimationClip: function runAnimationClip() {
    this.stopAll();
    this.spineNode.getComponent("cc.Animation").play("ani2", 0);
  },
  runTween: function runTween() {
    this.stopAll();
    cc.tween(this.spineNode).to(1, {
      scale: 2
    }, {
      easing: 'sineOutIn'
    }).to(1, {
      scale: 1
    }, {
      easing: 'sineOutIn'
    }).start();
  },
  runAction: function runAction() {
    this.stopAll();
    this.spineNode.runAction(cc.sequence(cc.moveTo(1, 300, 0), cc.moveTo(1, -300, 0), cc.moveTo(1, 0, 0)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BpbmVOb2RlIiwiTm9kZSIsImN0b3IiLCJpbml0aWFsUG9zaXRpb24iLCJWZWMzIiwiaW5pdGlhbFNjYWxlIiwiaW5pdGlhbEFuZ2xlIiwib25Mb2FkIiwicG9zaXRpb24iLCJjbG9uZSIsInNjYWxlIiwicm90YXRpb24iLCJub2RlIiwic3RvcEFsbCIsImJpbmQiLCJzdG9wQWxsQWN0aW9ucyIsInNwaW5lIiwiZ2V0Q29tcG9uZW50Iiwic2V0QW5pbWF0aW9uIiwidHdlZW4iLCJzdG9wIiwiYW5pbSIsInNldFBvc2l0aW9uIiwiYW5nbGUiLCJpbml0aWFsUm90YXRpb24iLCJydW5BbmltYXRpb25DbGlwIiwicGxheSIsInJ1blR3ZWVuIiwidG8iLCJlYXNpbmciLCJzdGFydCIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLO0VBRE4sQ0FIUDtFQU9MQyxJQVBLLGtCQU9FO0lBQ0gsS0FBS0MsZUFBTCxHQUF1QixJQUFJUCxFQUFFLENBQUNRLElBQVAsRUFBdkI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFwQjtFQUNILENBWEk7RUFhTEMsTUFiSyxvQkFhSTtJQUNMLEtBQUtKLGVBQUwsR0FBdUIsS0FBS0gsU0FBTCxDQUFlUSxRQUFmLENBQXdCQyxLQUF4QixFQUF2QjtJQUNBLEtBQUtKLFlBQUwsR0FBb0IsS0FBS0wsU0FBTCxDQUFlVSxLQUFuQztJQUNBLEtBQUtKLFlBQUwsR0FBb0IsS0FBS04sU0FBTCxDQUFlVyxRQUFuQztJQUNBLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQixLQUFLQSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBcEI7RUFFSCxDQW5CSTtFQXFCTEQsT0FyQksscUJBcUJLO0lBQ04sS0FBS2IsU0FBTCxDQUFlZSxjQUFmO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtoQixTQUFMLENBQWVpQixZQUFmLENBQTRCLGFBQTVCLENBQVo7SUFDQUQsS0FBSyxDQUFDRSxZQUFOLENBQW1CLENBQW5CLEVBQXNCLE1BQXRCLEVBQThCLElBQTlCO0lBQ0F0QixFQUFFLENBQUN1QixLQUFILENBQVMsS0FBS25CLFNBQWQsRUFBeUJvQixJQUF6QjtJQUNBLElBQUlDLElBQUksR0FBRyxLQUFLSixZQUFMLENBQWtCLGNBQWxCLENBQVg7SUFDQSxJQUFJSSxJQUFKLEVBQVVBLElBQUksQ0FBQ0QsSUFBTDtJQUVWLEtBQUtwQixTQUFMLENBQWVzQixXQUFmLENBQTJCLEtBQUtuQixlQUFoQztJQUNBLEtBQUtILFNBQUwsQ0FBZVUsS0FBZixHQUF1QixLQUFLTCxZQUE1QjtJQUNBLEtBQUtMLFNBQUwsQ0FBZXVCLEtBQWYsR0FBdUIsS0FBS0MsZUFBNUI7RUFDSCxDQWhDSTtFQWtDTEMsZ0JBbENLLDhCQWtDYztJQUNmLEtBQUtaLE9BQUw7SUFDQSxLQUFLYixTQUFMLENBQWVpQixZQUFmLENBQTRCLGNBQTVCLEVBQTRDUyxJQUE1QyxDQUFpRCxNQUFqRCxFQUF5RCxDQUF6RDtFQUNILENBckNJO0VBdUNMQyxRQXZDSyxzQkF1Q007SUFDUCxLQUFLZCxPQUFMO0lBQ0FqQixFQUFFLENBQUN1QixLQUFILENBQVMsS0FBS25CLFNBQWQsRUFDSzRCLEVBREwsQ0FDUSxDQURSLEVBQ1c7TUFBRWxCLEtBQUssRUFBRTtJQUFULENBRFgsRUFDeUI7TUFBRW1CLE1BQU0sRUFBRTtJQUFWLENBRHpCLEVBRUtELEVBRkwsQ0FFUSxDQUZSLEVBRVc7TUFBRWxCLEtBQUssRUFBRTtJQUFULENBRlgsRUFFeUI7TUFBRW1CLE1BQU0sRUFBRTtJQUFWLENBRnpCLEVBR0tDLEtBSEw7RUFLSCxDQTlDSTtFQWdETEMsU0FoREssdUJBZ0RPO0lBQ1IsS0FBS2xCLE9BQUw7SUFDQSxLQUFLYixTQUFMLENBQWUrQixTQUFmLENBQXlCbkMsRUFBRSxDQUFDb0MsUUFBSCxDQUNyQnBDLEVBQUUsQ0FBQ3FDLE1BQUgsQ0FBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixDQUFsQixDQURxQixFQUVyQnJDLEVBQUUsQ0FBQ3FDLE1BQUgsQ0FBVSxDQUFWLEVBQWEsQ0FBQyxHQUFkLEVBQW1CLENBQW5CLENBRnFCLEVBR3JCckMsRUFBRSxDQUFDcUMsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBSHFCLENBQXpCO0VBS0g7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmVOb2RlOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSAwO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5zcGluZU5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSB0aGlzLnNwaW5lTm9kZS5zY2FsZTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSB0aGlzLnNwaW5lTm9kZS5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGwgPSB0aGlzLnN0b3BBbGwuYmluZCh0aGlzKTtcblxuICAgIH0sXG5cbiAgICBzdG9wQWxsKCkge1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBsZXQgc3BpbmUgPSB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKTtcbiAgICAgICAgc3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lTm9kZSkuc3RvcCgpO1xuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KFwiY2MuQW5pbWF0aW9uXCIpO1xuICAgICAgICBpZiAoYW5pbSkgYW5pbS5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc2V0UG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5zY2FsZSA9IHRoaXMuaW5pdGlhbFNjYWxlO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5hbmdsZSA9IHRoaXMuaW5pdGlhbFJvdGF0aW9uO1xuICAgIH0sXG5cbiAgICBydW5BbmltYXRpb25DbGlwKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGwoKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwiY2MuQW5pbWF0aW9uXCIpLnBsYXkoXCJhbmkyXCIsIDApO1xuICAgIH0sXG5cbiAgICBydW5Ud2VlbigpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKVxuICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6ICdzaW5lT3V0SW4nIH0pXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIHJ1bkFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAzMDAsIDApLFxuICAgICAgICAgICAgY2MubW92ZVRvKDEsIC0zMDAsIDApLFxuICAgICAgICAgICAgY2MubW92ZVRvKDEsIDAsIDApKVxuICAgICAgICApXG4gICAgfVxufSk7XG4iXX0=