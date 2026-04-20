
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
    this.node.stopEverything = this.stopEverything.bind(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGluZU5vZGUiLCJOb2RlIiwiY3RvciIsImluaXRpYWxQb3NpdGlvbiIsIlZlYzMiLCJpbml0aWFsU2NhbGUiLCJpbml0aWFsQW5nbGUiLCJvbkxvYWQiLCJwb3NpdGlvbiIsImNsb25lIiwic2NhbGUiLCJyb3RhdGlvbiIsIm5vZGUiLCJzdG9wRXZlcnl0aGluZyIsImJpbmQiLCJzdG9wQWxsQWN0aW9ucyIsInNwaW5lIiwiZ2V0Q29tcG9uZW50Iiwic2V0QW5pbWF0aW9uIiwidHdlZW4iLCJzdG9wIiwiYW5pbSIsInNldFBvc2l0aW9uIiwiYW5nbGUiLCJpbml0aWFsUm90YXRpb24iLCJydW5BbmltYXRpb25DbGlwIiwicGxheSIsInJ1blR3ZWVuIiwidG8iLCJlYXNpbmciLCJzdGFydCIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7RUFETixDQUhQO0VBT0xDLElBUEssa0JBT0U7SUFDSCxLQUFLQyxlQUFMLEdBQXVCLElBQUlQLEVBQUUsQ0FBQ1EsSUFBUCxFQUF2QjtJQUNBLEtBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0VBQ0gsQ0FYSTtFQWFMQyxNQWJLLG9CQWFJO0lBQ0wsS0FBS0osZUFBTCxHQUF1QixLQUFLSCxTQUFMLENBQWVRLFFBQWYsQ0FBd0JDLEtBQXhCLEVBQXZCO0lBQ0EsS0FBS0osWUFBTCxHQUFvQixLQUFLTCxTQUFMLENBQWVVLEtBQW5DO0lBQ0EsS0FBS0osWUFBTCxHQUFvQixLQUFLTixTQUFMLENBQWVXLFFBQW5DO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLEdBQTJCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQTNCO0VBRUgsQ0FuQkk7RUFxQkxELGNBckJLLDRCQXFCWTtJQUNiLEtBQUtiLFNBQUwsQ0FBZWUsY0FBZjtJQUNBLElBQUlDLEtBQUssR0FBRyxLQUFLaEIsU0FBTCxDQUFlaUIsWUFBZixDQUE0QixhQUE1QixDQUFaO0lBQ0FELEtBQUssQ0FBQ0UsWUFBTixDQUFtQixDQUFuQixFQUFzQixNQUF0QixFQUE4QixJQUE5QjtJQUNBdEIsRUFBRSxDQUFDdUIsS0FBSCxDQUFTLEtBQUtuQixTQUFkLEVBQXlCb0IsSUFBekI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS0osWUFBTCxDQUFrQixjQUFsQixDQUFYO0lBQ0EsSUFBSUksSUFBSixFQUFVQSxJQUFJLENBQUNELElBQUw7SUFFVixLQUFLcEIsU0FBTCxDQUFlc0IsV0FBZixDQUEyQixLQUFLbkIsZUFBaEM7SUFDQSxLQUFLSCxTQUFMLENBQWVVLEtBQWYsR0FBdUIsS0FBS0wsWUFBNUI7SUFDQSxLQUFLTCxTQUFMLENBQWV1QixLQUFmLEdBQXVCLEtBQUtDLGVBQTVCO0VBQ0gsQ0FoQ0k7RUFrQ0xDLGdCQWxDSyw4QkFrQ2M7SUFDZixLQUFLWixjQUFMO0lBQ0EsS0FBS2IsU0FBTCxDQUFlaUIsWUFBZixDQUE0QixjQUE1QixFQUE0Q1MsSUFBNUMsQ0FBaUQsTUFBakQsRUFBeUQsQ0FBekQ7RUFDSCxDQXJDSTtFQXVDTEMsUUF2Q0ssc0JBdUNNO0lBQ1AsS0FBS2QsY0FBTDtJQUNBakIsRUFBRSxDQUFDdUIsS0FBSCxDQUFTLEtBQUtuQixTQUFkLEVBQ0s0QixFQURMLENBQ1EsQ0FEUixFQUNXO01BQUVsQixLQUFLLEVBQUU7SUFBVCxDQURYLEVBQ3lCO01BQUVtQixNQUFNLEVBQUU7SUFBVixDQUR6QixFQUVLRCxFQUZMLENBRVEsQ0FGUixFQUVXO01BQUVsQixLQUFLLEVBQUU7SUFBVCxDQUZYLEVBRXlCO01BQUVtQixNQUFNLEVBQUU7SUFBVixDQUZ6QixFQUdLQyxLQUhMO0VBS0gsQ0E5Q0k7RUFnRExDLFNBaERLLHVCQWdETztJQUNSLEtBQUtsQixjQUFMO0lBQ0EsS0FBS2IsU0FBTCxDQUFlK0IsU0FBZixDQUF5Qm5DLEVBQUUsQ0FBQ29DLFFBQUgsQ0FDckJwQyxFQUFFLENBQUNxQyxNQUFILENBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FEcUIsRUFFckJyQyxFQUFFLENBQUNxQyxNQUFILENBQVUsQ0FBVixFQUFhLENBQUMsR0FBZCxFQUFtQixDQUFuQixDQUZxQixFQUdyQnJDLEVBQUUsQ0FBQ3FDLE1BQUgsQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixDQUhxQixDQUF6QjtFQUtIO0FBdkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiLi4vbUVtaXR0ZXJcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwaW5lTm9kZTogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSBuZXcgY2MuVmVjMygpO1xuICAgICAgICB0aGlzLmluaXRpYWxTY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuaW5pdGlhbEFuZ2xlID0gMDtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMuc3BpbmVOb2RlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjYWxlID0gdGhpcy5zcGluZU5vZGUuc2NhbGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbEFuZ2xlID0gdGhpcy5zcGluZU5vZGUucm90YXRpb247XG4gICAgICAgIHRoaXMubm9kZS5zdG9wRXZlcnl0aGluZyA9IHRoaXMuc3RvcEV2ZXJ5dGhpbmcuYmluZCh0aGlzKTtcblxuICAgIH0sXG5cbiAgICBzdG9wRXZlcnl0aGluZygpIHtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIik7XG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSlcbiAgICAgICAgY2MudHdlZW4odGhpcy5zcGluZU5vZGUpLnN0b3AoKTtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChcImNjLkFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0uc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnNldFBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc2NhbGUgPSB0aGlzLmluaXRpYWxTY2FsZTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYW5nbGUgPSB0aGlzLmluaXRpYWxSb3RhdGlvbjtcbiAgICB9LFxuXG4gICAgcnVuQW5pbWF0aW9uQ2xpcCgpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoXCJjYy5BbmltYXRpb25cIikucGxheShcImFuaTJcIiwgMCk7XG4gICAgfSxcblxuICAgIHJ1blR3ZWVuKCkge1xuICAgICAgICB0aGlzLnN0b3BFdmVyeXRoaW5nKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKVxuICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6ICdzaW5lT3V0SW4nIH0pXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIHJ1bkFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgMzAwLCAwKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAtMzAwLCAwKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAwLCAwKSlcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuIl19