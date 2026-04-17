
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CharacterMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f9d6gYq49HgbPyW9Bm43Bz', 'CharacterMovement');
// Script/CharacterMovement.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    "char": cc.Node,
    baseSpeed: 100 // spine: cc.Node,
    // manaBar: cc.Node,

  },
  ctor: function ctor() {
    this.position = 0;
    this.isStartWalk = 0;
    this.manaBar = null;
    this.spine = null;
  },
  checkPosition: function checkPosition() {
    if (this.position > this["char"].parent.width / 2 - 75) {
      this.position = this["char"].parent.width / 2 - 75;
      return true;
    }

    if (this.position < -this["char"].parent.width / 2 + 75) {
      this.position = -this["char"].parent.width / 2 + 75;
      return true;
    }

    return false;
  },
  getManaValue: function getManaValue() {
    return this.manaBar.getComponent("cc.ProgressBar").progress;
  },
  getSpeed: function getSpeed() {
    return this.baseSpeed * (this.getManaValue() < .5 ? 0.5 : 1);
  },
  goLeft: function goLeft() {
    if (this.spine.scaleX > 0) this.spine.scaleX = -this.spine.scaleX;
    this.position = this["char"].x - this.baseSpeed;
    this.checkPosition();
  },
  goRight: function goRight() {
    if (this.spine.scaleX < 0) this.spine.scaleX = -this.spine.scaleX;
    this.position = this["char"].x + this.baseSpeed;
    this.checkPosition();
  },
  checkStartWalk: function checkStartWalk(value) {
    if (this.isStartWalk && !value) {
      this.startWalk();
    } else if (!this.isStartWalk && value) {
      this.stopWalk();
    }
  },
  startWalk: function startWalk() {
    this.spine.getComponent("sp.Skeleton").setAnimation(0, "walk", true, 0);
  },
  stopWalk: function stopWalk() {
    this.spine.getComponent("sp.Skeleton").setAnimation(0, "idle", true, 0);
  },
  depleteMana: function depleteMana(value) {
    if (this.manaBar.getComponent("cc.ProgressBar").progress - (value ? value / 15 : .008 / 1) < 0) {
      this.manaBar.getComponent("cc.ProgressBar").progress = 0;
    } else {
      this.manaBar.getComponent("cc.ProgressBar").progress -= value ? value / 15 : .008 / 15;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (!this["char"]) {
      this["char"] = this.node.parent;
    }

    this.spine = this["char"].getChildByName("Spine");
    this.manaBar = this["char"].getChildByName("ManaBar");
    this.manaBar.getComponent("cc.ProgressBar").progress = 1; // 0 - 1;

    this.position = this["char"].x;
    this["char"].getChildByName("Speed") && (this["char"].getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());
  },
  start: function start() {},
  update: function update(dt) {
    var tempIsWalk = this.isStartWalk;
    var tempPosition = this["char"].x;
    var tempSpeed = this.getSpeed();

    if (this["char"].x - this.position < -1) {
      tempPosition = this["char"].x + .01 * tempSpeed;
      this.isStartWalk = 1;
      this.depleteMana(dt);
    } else if (this["char"].x - this.position > 1) {
      tempPosition = this["char"].x - .01 * tempSpeed;
      this.isStartWalk = 1;
      this.depleteMana(dt);
    } else {
      this.isStartWalk = 0;
    }

    this["char"].x = tempPosition;
    this.checkStartWalk(tempIsWalk);

    if (tempSpeed !== this.getSpeed()) {
      this["char"].getChildByName("Speed") && (this["char"].getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());
    }

    if (this.manaBar.getComponent("cc.ProgressBar").progress <= 0) {
      this["char"].active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2hhcmFjdGVyTW92ZW1lbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJOb2RlIiwiYmFzZVNwZWVkIiwiY3RvciIsInBvc2l0aW9uIiwiaXNTdGFydFdhbGsiLCJtYW5hQmFyIiwic3BpbmUiLCJjaGVja1Bvc2l0aW9uIiwicGFyZW50Iiwid2lkdGgiLCJnZXRNYW5hVmFsdWUiLCJnZXRDb21wb25lbnQiLCJwcm9ncmVzcyIsImdldFNwZWVkIiwiZ29MZWZ0Iiwic2NhbGVYIiwieCIsImdvUmlnaHQiLCJjaGVja1N0YXJ0V2FsayIsInZhbHVlIiwic3RhcnRXYWxrIiwic3RvcFdhbGsiLCJzZXRBbmltYXRpb24iLCJkZXBsZXRlTWFuYSIsIm9uTG9hZCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInN0cmluZyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ0ZW1wSXNXYWxrIiwidGVtcFBvc2l0aW9uIiwidGVtcFNwZWVkIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUVMQyxVQUFVLEVBQUU7SUFDUixRQUFNSCxFQUFFLENBQUNJLElBREQ7SUFFUkMsU0FBUyxFQUFFLEdBRkgsQ0FHUjtJQUNBOztFQUpRLENBRlA7RUFTTEMsSUFUSyxrQkFTRTtJQUNILEtBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQW5CO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxLQUFMLEdBQWEsSUFBYjtFQUNILENBZEk7RUFnQkxDLGFBaEJLLDJCQWdCVztJQUNaLElBQUksS0FBS0osUUFBTCxHQUFnQixhQUFVSyxNQUFWLENBQWlCQyxLQUFqQixHQUF5QixDQUF6QixHQUE2QixFQUFqRCxFQUFxRDtNQUNqRCxLQUFL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QW5CO0lBQ0g7O0lBQ0QsYUFBVVksQ0FBVixHQUFjZ0IsWUFBZDtJQUNBLEtBQUtkLGNBQUwsQ0FBb0JhLFVBQXBCOztJQUNBLElBQUlFLFNBQVMsS0FBSyxLQUFLcEIsUUFBTCxFQUFsQixFQUFtQztNQUMvQixhQUFVYSxjQUFWLENBQXlCLE9BQXpCLE1BQXNDLGFBQVVBLGNBQVYsQ0FBeUIsT0FBekIsRUFBa0NmLFlBQWxDLENBQStDLFVBQS9DLEVBQTJEZ0IsTUFBM0QsR0FBb0UsWUFBWSxLQUFLZCxRQUFMLEVBQXRIO0lBRUg7O0lBQ0QsSUFBSSxLQUFLUixPQUFMLENBQWFNLFlBQWIsQ0FBMEIsZ0JBQTFCLEVBQTRDQyxRQUE1QyxJQUF3RCxDQUE1RCxFQUErRDtNQUMzRCxhQUFVc0IsTUFBVixHQUFtQixLQUFuQjtJQUNIO0VBQ0o7QUF2SEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNoYXI6IGNjLk5vZGUsXG4gICAgICAgIGJhc2VTcGVlZDogMTAwLFxuICAgICAgICAvLyBzcGluZTogY2MuTm9kZSxcbiAgICAgICAgLy8gbWFuYUJhcjogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuaXNTdGFydFdhbGsgPSAwO1xuICAgICAgICB0aGlzLm1hbmFCYXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lID0gbnVsbDtcbiAgICB9LFxuXG4gICAgY2hlY2tQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPiB0aGlzLmNoYXIucGFyZW50LndpZHRoIC8gMiAtIDc1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jaGFyLnBhcmVudC53aWR0aCAvIDIgLSA3NTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgLSB0aGlzLmNoYXIucGFyZW50LndpZHRoIC8gMiArIDc1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLSB0aGlzLmNoYXIucGFyZW50LndpZHRoIC8gMiArIDc1O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBnZXRNYW5hVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3M7XG4gICAgfSxcblxuICAgIGdldFNwZWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlU3BlZWQgKiAodGhpcy5nZXRNYW5hVmFsdWUoKSA8IC41ID8gMC41IDogMSk7XG4gICAgfSxcblxuICAgIGdvTGVmdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3BpbmUuc2NhbGVYID4gMCkgdGhpcy5zcGluZS5zY2FsZVggPSAtIHRoaXMuc3BpbmUuc2NhbGVYO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jaGFyLnggLSB0aGlzLmJhc2VTcGVlZDtcbiAgICAgICAgdGhpcy5jaGVja1Bvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIGdvUmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwaW5lLnNjYWxlWCA8IDApIHRoaXMuc3BpbmUuc2NhbGVYID0gLSB0aGlzLnNwaW5lLnNjYWxlWDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY2hhci54ICsgdGhpcy5iYXNlU3BlZWQ7XG4gICAgICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpO1xuXG4gICAgfSxcblxuICAgIGNoZWNrU3RhcnRXYWxrKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRXYWxrICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc1N0YXJ0V2FsayAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wV2FsaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0V2FsaygpIHtcbiAgICAgICAgdGhpcy5zcGluZS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5zZXRBbmltYXRpb24oMCwgXCJ3YWxrXCIsIHRydWUsIDApO1xuICAgIH0sXG5cbiAgICBzdG9wV2FsaygpIHtcbiAgICAgICAgdGhpcy5zcGluZS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUsIDApO1xuICAgIH0sXG5cbiAgICBkZXBsZXRlTWFuYSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tYW5hQmFyLmdldENvbXBvbmVudChcImNjLlByb2dyZXNzQmFyXCIpLnByb2dyZXNzIC0gKHZhbHVlID8gdmFsdWUgLyAxNSA6IC4wMDggLyAxKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMubWFuYUJhci5nZXRDb21wb25lbnQoXCJjYy5Qcm9ncmVzc0JhclwiKS5wcm9ncmVzcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3MgLT0gdmFsdWUgPyB2YWx1ZSAvIDE1IDogLjAwOCAvIDE1O1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhciA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpO1xuICAgICAgICB0aGlzLm1hbmFCYXIgPSB0aGlzLmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJNYW5hQmFyXCIpO1xuICAgICAgICB0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3MgPSAxIC8vIDAgLSAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jaGFyLng7XG4gICAgICAgIHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcIlNwZWVkXCIpICYmICh0aGlzLmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJTcGVlZFwiKS5nZXRDb21wb25lbnQoXCJjYy5MYWJlbFwiKS5zdHJpbmcgPSBcIlNwZWVkOiBcIiArIHRoaXMuZ2V0U3BlZWQoKSk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgY29uc3QgdGVtcElzV2FsayA9IHRoaXMuaXNTdGFydFdhbGs7XG4gICAgICAgIGxldCB0ZW1wUG9zaXRpb24gPSB0aGlzLmNoYXIueDtcbiAgICAgICAgY29uc3QgdGVtcFNwZWVkID0gdGhpcy5nZXRTcGVlZCgpO1xuICAgICAgICBpZiAodGhpcy5jaGFyLnggLSB0aGlzLnBvc2l0aW9uIDwgLSAxKSB7XG4gICAgICAgICAgICB0ZW1wUG9zaXRpb24gPSB0aGlzLmNoYXIueCArIC4wMSAqIHRlbXBTcGVlZDtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydFdhbGsgPSAxO1xuICAgICAgICAgICAgdGhpcy5kZXBsZXRlTWFuYShkdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jaGFyLnggLSB0aGlzLnBvc2l0aW9uID4gMSkge1xuICAgICAgICAgICAgdGVtcFBvc2l0aW9uID0gdGhpcy5jaGFyLnggLSAuMDEgKiB0ZW1wU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRXYWxrID0gMTtcbiAgICAgICAgICAgIHRoaXMuZGVwbGV0ZU1hbmEoZHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0V2FsayA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFyLnggPSB0ZW1wUG9zaXRpb247XG4gICAgICAgIHRoaXMuY2hlY2tTdGFydFdhbGsodGVtcElzV2Fsayk7XG4gICAgICAgIGlmICh0ZW1wU3BlZWQgIT09IHRoaXMuZ2V0U3BlZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwiU3BlZWRcIikgJiYgKHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcIlNwZWVkXCIpLmdldENvbXBvbmVudChcImNjLkxhYmVsXCIpLnN0cmluZyA9IFwiU3BlZWQ6IFwiICsgdGhpcy5nZXRTcGVlZCgpKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3MgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdfQ==