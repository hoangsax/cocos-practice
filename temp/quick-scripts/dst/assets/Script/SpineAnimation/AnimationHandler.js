
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJFbWl0dGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BpbmVOb2RlIiwiTm9kZSIsImN0b3IiLCJpbml0aWFsUG9zaXRpb24iLCJWZWMzIiwiaW5pdGlhbFNjYWxlIiwiaW5pdGlhbEFuZ2xlIiwib25Mb2FkIiwicG9zaXRpb24iLCJjbG9uZSIsInNjYWxlIiwicm90YXRpb24iLCJzdG9wRXZlcnl0aGluZyIsInN0b3BBbGxBY3Rpb25zIiwic3BpbmUiLCJnZXRDb21wb25lbnQiLCJzZXRBbmltYXRpb24iLCJ0d2VlbiIsInN0b3AiLCJhbmltIiwic2V0UG9zaXRpb24iLCJhbmdsZSIsImluaXRpYWxSb3RhdGlvbiIsInJ1bkFuaW1hdGlvbkNsaXAiLCJwbGF5IiwicnVuVHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQUROLENBSFA7RUFPTEMsSUFQSyxrQkFPRTtJQUNILEtBQUtDLGVBQUwsR0FBdUIsSUFBSVAsRUFBRSxDQUFDUSxJQUFQLEVBQXZCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFwQjtJQUNBLEtBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7RUFDSCxDQVhJO0VBYUxDLE1BYkssb0JBYUk7SUFDTCxLQUFLSixlQUFMLEdBQXVCLEtBQUtILFNBQUwsQ0FBZVEsUUFBZixDQUF3QkMsS0FBeEIsRUFBdkI7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQUtMLFNBQUwsQ0FBZVUsS0FBbkM7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQUtOLFNBQUwsQ0FBZVcsUUFBbkM7RUFDSCxDQWpCSTtFQW1CTEMsY0FuQkssNEJBbUJZO0lBQ2IsS0FBS1osU0FBTCxDQUFlYSxjQUFmO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLFNBQUwsQ0FBZWUsWUFBZixDQUE0QixhQUE1QixDQUFaO0lBQ0FELEtBQUssQ0FBQ0UsWUFBTixDQUFtQixDQUFuQixFQUFzQixNQUF0QixFQUE4QixJQUE5QjtJQUNBcEIsRUFBRSxDQUFDcUIsS0FBSCxDQUFTLEtBQUtqQixTQUFkLEVBQXlCa0IsSUFBekI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS0osWUFBTCxDQUFrQixjQUFsQixDQUFYO0lBQ0EsSUFBSUksSUFBSixFQUFVQSxJQUFJLENBQUNELElBQUw7SUFFVixLQUFLbEIsU0FBTCxDQUFlb0IsV0FBZixDQUEyQixLQUFLakIsZUFBaEM7SUFDQSxLQUFLSCxTQUFMLENBQWVVLEtBQWYsR0FBdUIsS0FBS0wsWUFBNUI7SUFDQSxLQUFLTCxTQUFMLENBQWVxQixLQUFmLEdBQXVCLEtBQUtDLGVBQTVCO0VBQ0gsQ0E5Qkk7RUFnQ0xDLGdCQWhDSyw4QkFnQ2M7SUFDZixLQUFLWCxjQUFMO0lBQ0EsS0FBS1osU0FBTCxDQUFlZSxZQUFmLENBQTRCLGNBQTVCLEVBQTRDUyxJQUE1QyxDQUFpRCxNQUFqRCxFQUF5RCxDQUF6RDtFQUNILENBbkNJO0VBcUNMQyxRQXJDSyxzQkFxQ007SUFDUCxLQUFLYixjQUFMO0lBQ0FoQixFQUFFLENBQUNxQixLQUFILENBQVMsS0FBS2pCLFNBQWQsRUFBeUIwQixFQUF6QixDQUE0QixDQUE1QixFQUErQjtNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FBL0IsRUFBNkM7TUFBRWlCLE1BQU0sRUFBRTtJQUFWLENBQTdDLEVBQXNFRCxFQUF0RSxDQUF5RSxDQUF6RSxFQUE0RTtNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FBNUUsRUFBMEY7TUFBRWlCLE1BQU0sRUFBRTtJQUFWLENBQTFGLEVBQW1IQyxLQUFuSDtFQUVILENBekNJO0VBMkNMQyxTQTNDSyx1QkEyQ087SUFDUixLQUFLakIsY0FBTDtJQUNBLEtBQUtaLFNBQUwsQ0FBZTZCLFNBQWYsQ0FBeUJqQyxFQUFFLENBQUNrQyxRQUFILENBQ3JCbEMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFiLEVBQWtCLENBQWxCLENBRHFCLEVBRXJCbkMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFDLEdBQWQsRUFBbUIsQ0FBbkIsQ0FGcUIsRUFHckJuQyxFQUFFLENBQUNtQyxNQUFILENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIcUIsQ0FBekI7RUFLSDtBQWxESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbWl0dGVyID0gcmVxdWlyZShcIi4uL21FbWl0dGVyXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGluZU5vZGU6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gbmV3IGNjLlZlYzMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmluaXRpYWxBbmdsZSA9IDA7XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLnNwaW5lTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTY2FsZSA9IHRoaXMuc3BpbmVOb2RlLnNjYWxlO1xuICAgICAgICB0aGlzLmluaXRpYWxBbmdsZSA9IHRoaXMuc3BpbmVOb2RlLnJvdGF0aW9uO1xuICAgIH0sXG5cbiAgICBzdG9wRXZlcnl0aGluZygpIHtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIik7XG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcGluZU5vZGUpLnN0b3AoKTtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChcImNjLkFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0uc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnNldFBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc2NhbGUgPSB0aGlzLmluaXRpYWxTY2FsZTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYW5nbGUgPSB0aGlzLmluaXRpYWxSb3RhdGlvbjtcbiAgICB9LFxuXG4gICAgcnVuQW5pbWF0aW9uQ2xpcCgpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoXCJjYy5BbmltYXRpb25cIikucGxheShcImFuaTJcIiwgMCk7XG4gICAgfSxcblxuICAgIHJ1blR3ZWVuKCkge1xuICAgICAgICB0aGlzLnN0b3BFdmVyeXRoaW5nKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKS50bygxLCB7IHNjYWxlOiAyIH0sIHsgZWFzaW5nOiAnc2luZU91dEluJyB9KS50bygxLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZU91dEluJyB9KS5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIHJ1bkFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgMzAwLCAwKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAtMzAwLCAwKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAwLCAwKSlcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuIl19