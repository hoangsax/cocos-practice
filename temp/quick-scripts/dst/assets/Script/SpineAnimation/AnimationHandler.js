
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/AnimationHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1de6PsKdJG16NpfzMNhTxP', 'AnimationHandler');
// Script/SpineAnimation/AnimationHandler.js

"use strict";

var Emitter = require("../mEmitter");

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
  },
  stopEverything: function stopEverything() {
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
    this.stopEverything();
    this.spineNode.getComponent("cc.Animation").play("ani2", 0);
  },
  runTween: function runTween() {
    this.stopEverything();
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
    this.stopEverything();
    this.spineNode.runAction(cc.sequence(cc.moveTo(1, 300, 0), cc.moveTo(1, -300, 0), cc.moveTo(1, 0, 0)));
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJFbWl0dGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BpbmVOb2RlIiwiTm9kZSIsImN0b3IiLCJpbml0aWFsUG9zaXRpb24iLCJWZWMzIiwiaW5pdGlhbFNjYWxlIiwiaW5pdGlhbEFuZ2xlIiwib25Mb2FkIiwicG9zaXRpb24iLCJjbG9uZSIsInNjYWxlIiwicm90YXRpb24iLCJzdG9wRXZlcnl0aGluZyIsInN0b3BBbGxBY3Rpb25zIiwic3BpbmUiLCJnZXRDb21wb25lbnQiLCJzZXRBbmltYXRpb24iLCJ0d2VlbiIsInN0b3AiLCJhbmltIiwic2V0UG9zaXRpb24iLCJhbmdsZSIsImluaXRpYWxSb3RhdGlvbiIsInJ1bkFuaW1hdGlvbkNsaXAiLCJwbGF5IiwicnVuVHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQUROLENBSFA7RUFPTEMsSUFQSyxrQkFPRTtJQUNILEtBQUtDLGVBQUwsR0FBdUIsSUFBSVAsRUFBRSxDQUFDUSxJQUFQLEVBQXZCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFwQjtJQUNBLEtBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7RUFDSCxDQVhJO0VBYUxDLE1BYkssb0JBYUk7SUFDTCxLQUFLSixlQUFMLEdBQXVCLEtBQUtILFNBQUwsQ0FBZVEsUUFBZixDQUF3QkMsS0FBeEIsRUFBdkI7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQUtMLFNBQUwsQ0FBZVUsS0FBbkM7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQUtOLFNBQUwsQ0FBZVcsUUFBbkM7RUFDSCxDQWpCSTtFQW1CTEMsY0FuQkssNEJBbUJZO0lBQ2IsS0FBS1osU0FBTCxDQUFlYSxjQUFmO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLFNBQUwsQ0FBZWUsWUFBZixDQUE0QixhQUE1QixDQUFaO0lBQ0FELEtBQUssQ0FBQ0UsWUFBTixDQUFtQixDQUFuQixFQUFzQixNQUF0QixFQUE4QixJQUE5QjtJQUNBcEIsRUFBRSxDQUFDcUIsS0FBSCxDQUFTLEtBQUtqQixTQUFkLEVBQXlCa0IsSUFBekI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS0osWUFBTCxDQUFrQixjQUFsQixDQUFYO0lBQ0EsSUFBSUksSUFBSixFQUFVQSxJQUFJLENBQUNELElBQUw7SUFFVixLQUFLbEIsU0FBTCxDQUFlb0IsV0FBZixDQUEyQixLQUFLakIsZUFBaEM7SUFDQSxLQUFLSCxTQUFMLENBQWVVLEtBQWYsR0FBdUIsS0FBS0wsWUFBNUI7SUFDQSxLQUFLTCxTQUFMLENBQWVxQixLQUFmLEdBQXVCLEtBQUtDLGVBQTVCO0VBQ0gsQ0E5Qkk7RUFnQ0xDLGdCQWhDSyw4QkFnQ2M7SUFDZixLQUFLWCxjQUFMO0lBQ0EsS0FBS1osU0FBTCxDQUFlZSxZQUFmLENBQTRCLGNBQTVCLEVBQTRDUyxJQUE1QyxDQUFpRCxNQUFqRCxFQUF5RCxDQUF6RDtFQUNILENBbkNJO0VBcUNMQyxRQXJDSyxzQkFxQ007SUFDUCxLQUFLYixjQUFMO0lBQ0FoQixFQUFFLENBQUNxQixLQUFILENBQVMsS0FBS2pCLFNBQWQsRUFBeUIwQixFQUF6QixDQUE0QixDQUE1QixFQUErQjtNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FBL0IsRUFBNkM7TUFBRWlCLE1BQU0sRUFBRTtJQUFWLENBQTdDLEVBQXNFRCxFQUF0RSxDQUF5RSxDQUF6RSxFQUE0RTtNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FBNUUsRUFBMEY7TUFBRWlCLE1BQU0sRUFBRTtJQUFWLENBQTFGLEVBQW1IQyxLQUFuSDtFQUVILENBekNJO0VBMkNMQyxTQTNDSyx1QkEyQ087SUFDUixLQUFLakIsY0FBTDtJQUNBLEtBQUtaLFNBQUwsQ0FBZTZCLFNBQWYsQ0FBeUJqQyxFQUFFLENBQUNrQyxRQUFILENBQ3JCbEMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFiLEVBQWtCLENBQWxCLENBRHFCLEVBRXJCbkMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFDLEdBQWQsRUFBbUIsQ0FBbkIsQ0FGcUIsRUFHckJuQyxFQUFFLENBQUNtQyxNQUFILENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIcUIsQ0FBekI7RUFLSCxDQWxESSxDQW1ETDs7QUFuREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCIuLi9tRW1pdHRlclwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmVOb2RlOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSAwO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5zcGluZU5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSB0aGlzLnNwaW5lTm9kZS5zY2FsZTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSB0aGlzLnNwaW5lTm9kZS5yb3RhdGlvbjtcbiAgICB9LFxuXG4gICAgc3RvcEV2ZXJ5dGhpbmcoKSB7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBzcGluZSA9IHRoaXMuc3BpbmVOb2RlLmdldENvbXBvbmVudChcInNwLlNrZWxldG9uXCIpO1xuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKS5zdG9wKCk7XG4gICAgICAgIGxldCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoXCJjYy5BbmltYXRpb25cIik7XG4gICAgICAgIGlmIChhbmltKSBhbmltLnN0b3AoKTtcblxuICAgICAgICB0aGlzLnNwaW5lTm9kZS5zZXRQb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnNjYWxlID0gdGhpcy5pbml0aWFsU2NhbGU7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLmFuZ2xlID0gdGhpcy5pbml0aWFsUm90YXRpb247XG4gICAgfSxcblxuICAgIHJ1bkFuaW1hdGlvbkNsaXAoKSB7XG4gICAgICAgIHRoaXMuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwiY2MuQW5pbWF0aW9uXCIpLnBsYXkoXCJhbmkyXCIsIDApO1xuICAgIH0sXG5cbiAgICBydW5Ud2VlbigpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lTm9kZSkudG8oMSwgeyBzY2FsZTogMiB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSkudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSkuc3RhcnQoKTtcblxuICAgIH0sXG5cbiAgICBydW5BY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MubW92ZVRvKDEsIDMwMCwgMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgLTMwMCwgMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgMCwgMCkpXG4gICAgICAgIClcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==