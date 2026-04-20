
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGluZU5vZGUiLCJOb2RlIiwiY3RvciIsImluaXRpYWxQb3NpdGlvbiIsIlZlYzMiLCJpbml0aWFsU2NhbGUiLCJpbml0aWFsQW5nbGUiLCJvbkxvYWQiLCJwb3NpdGlvbiIsImNsb25lIiwic2NhbGUiLCJyb3RhdGlvbiIsInN0b3BFdmVyeXRoaW5nIiwic3RvcEFsbEFjdGlvbnMiLCJzcGluZSIsImdldENvbXBvbmVudCIsInNldEFuaW1hdGlvbiIsInR3ZWVuIiwic3RvcCIsImFuaW0iLCJzZXRQb3NpdGlvbiIsImFuZ2xlIiwiaW5pdGlhbFJvdGF0aW9uIiwicnVuQW5pbWF0aW9uQ2xpcCIsInBsYXkiLCJydW5Ud2VlbiIsInRvIiwiZWFzaW5nIiwic3RhcnQiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsIm1vdmVUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLO0VBRE4sQ0FIUDtFQU9MQyxJQVBLLGtCQU9FO0lBQ0gsS0FBS0MsZUFBTCxHQUF1QixJQUFJUCxFQUFFLENBQUNRLElBQVAsRUFBdkI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFwQjtFQUNILENBWEk7RUFhTEMsTUFiSyxvQkFhSTtJQUNMLEtBQUtKLGVBQUwsR0FBdUIsS0FBS0gsU0FBTCxDQUFlUSxRQUFmLENBQXdCQyxLQUF4QixFQUF2QjtJQUNBLEtBQUtKLFlBQUwsR0FBb0IsS0FBS0wsU0FBTCxDQUFlVSxLQUFuQztJQUNBLEtBQUtKLFlBQUwsR0FBb0IsS0FBS04sU0FBTCxDQUFlVyxRQUFuQztFQUNILENBakJJO0VBbUJMQyxjQW5CSyw0QkFtQlk7SUFDYixLQUFLWixTQUFMLENBQWVhLGNBQWY7SUFDQSxJQUFJQyxLQUFLLEdBQUcsS0FBS2QsU0FBTCxDQUFlZSxZQUFmLENBQTRCLGFBQTVCLENBQVo7SUFDQUQsS0FBSyxDQUFDRSxZQUFOLENBQW1CLENBQW5CLEVBQXNCLE1BQXRCLEVBQThCLElBQTlCO0lBQ0FwQixFQUFFLENBQUNxQixLQUFILENBQVMsS0FBS2pCLFNBQWQsRUFBeUJrQixJQUF6QjtJQUNBLElBQUlDLElBQUksR0FBRyxLQUFLSixZQUFMLENBQWtCLGNBQWxCLENBQVg7SUFDQSxJQUFJSSxJQUFKLEVBQVVBLElBQUksQ0FBQ0QsSUFBTDtJQUVWLEtBQUtsQixTQUFMLENBQWVvQixXQUFmLENBQTJCLEtBQUtqQixlQUFoQztJQUNBLEtBQUtILFNBQUwsQ0FBZVUsS0FBZixHQUF1QixLQUFLTCxZQUE1QjtJQUNBLEtBQUtMLFNBQUwsQ0FBZXFCLEtBQWYsR0FBdUIsS0FBS0MsZUFBNUI7RUFDSCxDQTlCSTtFQWdDTEMsZ0JBaENLLDhCQWdDYztJQUNmLEtBQUtYLGNBQUw7SUFDQSxLQUFLWixTQUFMLENBQWVlLFlBQWYsQ0FBNEIsY0FBNUIsRUFBNENTLElBQTVDLENBQWlELE1BQWpELEVBQXlELENBQXpEO0VBQ0gsQ0FuQ0k7RUFxQ0xDLFFBckNLLHNCQXFDTTtJQUNQLEtBQUtiLGNBQUw7SUFDQWhCLEVBQUUsQ0FBQ3FCLEtBQUgsQ0FBUyxLQUFLakIsU0FBZCxFQUNLMEIsRUFETCxDQUNRLENBRFIsRUFDVztNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FEWCxFQUN5QjtNQUFFaUIsTUFBTSxFQUFFO0lBQVYsQ0FEekIsRUFFS0QsRUFGTCxDQUVRLENBRlIsRUFFVztNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FGWCxFQUV5QjtNQUFFaUIsTUFBTSxFQUFFO0lBQVYsQ0FGekIsRUFHS0MsS0FITDtFQUtILENBNUNJO0VBOENMQyxTQTlDSyx1QkE4Q087SUFDUixLQUFLakIsY0FBTDtJQUNBLEtBQUtaLFNBQUwsQ0FBZTZCLFNBQWYsQ0FBeUJqQyxFQUFFLENBQUNrQyxRQUFILENBQ3JCbEMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFiLEVBQWtCLENBQWxCLENBRHFCLEVBRXJCbkMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFDLEdBQWQsRUFBbUIsQ0FBbkIsQ0FGcUIsRUFHckJuQyxFQUFFLENBQUNtQyxNQUFILENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIcUIsQ0FBekI7RUFLSDtBQXJESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbWl0dGVyID0gcmVxdWlyZShcIi4uL21FbWl0dGVyXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGluZU5vZGU6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gbmV3IGNjLlZlYzMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmluaXRpYWxBbmdsZSA9IDA7XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLnNwaW5lTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTY2FsZSA9IHRoaXMuc3BpbmVOb2RlLnNjYWxlO1xuICAgICAgICB0aGlzLmluaXRpYWxBbmdsZSA9IHRoaXMuc3BpbmVOb2RlLnJvdGF0aW9uO1xuICAgIH0sXG5cbiAgICBzdG9wRXZlcnl0aGluZygpIHtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIik7XG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcGluZU5vZGUpLnN0b3AoKTtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChcImNjLkFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0uc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnNldFBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc2NhbGUgPSB0aGlzLmluaXRpYWxTY2FsZTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYW5nbGUgPSB0aGlzLmluaXRpYWxSb3RhdGlvbjtcbiAgICB9LFxuXG4gICAgcnVuQW5pbWF0aW9uQ2xpcCgpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoXCJjYy5BbmltYXRpb25cIikucGxheShcImFuaTJcIiwgMCk7XG4gICAgfSxcblxuICAgIHJ1blR3ZWVuKCkge1xuICAgICAgICB0aGlzLnN0b3BFdmVyeXRoaW5nKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKVxuICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6ICdzaW5lT3V0SW4nIH0pXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIHJ1bkFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgMzAwLCAwKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAtMzAwLCAwKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAwLCAwKSlcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuIl19