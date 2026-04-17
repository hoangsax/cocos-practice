
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/CharacterMovement');
require('./assets/Script/HelloWorld');
require('./assets/Script/SpineAnimation/AnimationList');
require('./assets/Script/SpineAnimation/EventSender');
require('./assets/Script/SpineAnimation/ItemScript');
require('./assets/Script/SpineAnimation/SpineInspector');
require('./assets/Script/mEmitter');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: 'Hello, World!'
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.label.string = this.text;
  },
  // called every frame
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidGV4dCIsIm9uTG9hZCIsInN0cmluZyIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZOLENBREM7SUFLUjtJQUNBQyxJQUFJLEVBQUU7RUFORSxDQUhQO0VBWUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtKLEtBQUwsQ0FBV0ssTUFBWCxHQUFvQixLQUFLRixJQUF6QjtFQUNILENBZkk7RUFpQkw7RUFDQUcsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FFckI7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLyBkZWZhdWx0cywgc2V0IHZpc3VhbGx5IHdoZW4gYXR0YWNoaW5nIHRoaXMgc2NyaXB0IHRvIHRoZSBDYW52YXNcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBXb3JsZCEnXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/mEmitter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca6d2yrzcZJXZVIpSw7P2Nc', 'mEmitter');
// Script/mEmitter.js

"use strict";

var EventEmitter = require('events');

var mEmitter = /*#__PURE__*/function () {
  function mEmitter() {
    if (mEmitter.instance) {
      return mEmitter.instance;
    }

    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    console.log((_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments));
  };

  _proto.registerEvent = function registerEvent(event, listener) {
    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);
  };

  _proto.removeAllEvent = function removeAllEvent() {
    this._emiter.removeAllListeners();
  };

  _proto.destroy = function destroy() {
    this._emiter.removeAllListeners();

    this._emiter = null;
    mEmitter.instance = null;
  };

  return mEmitter;
}();

mEmitter.instance = null;
module.exports = mEmitter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckV2ZW50IiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9uIiwicmVnaXN0ZXJPbmNlIiwib25jZSIsInJlbW92ZUV2ZW50IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxFdmVudCIsInJlbW92ZUFsbExpc3RlbmVycyIsImRlc3Ryb3kiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBNUI7O0lBQ01DO0VBRUYsb0JBQWM7SUFDVixJQUFJQSxRQUFRLENBQUNDLFFBQWIsRUFBdUI7TUFDbkIsT0FBT0QsUUFBUSxDQUFDQyxRQUFoQjtJQUNIOztJQUNELEtBQUtDLE9BQUwsR0FBZSxJQUFJSixZQUFKLEVBQWY7O0lBQ0EsS0FBS0ksT0FBTCxDQUFhQyxlQUFiLENBQTZCLEdBQTdCO0VBQ0g7Ozs7U0FFREMsT0FBQSxnQkFDQTtJQUFBOztJQUNJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBS0osT0FBTCxFQUFhRSxJQUFiLGdDQUFaO0VBQ0g7O1NBRURHLGdCQUFBLHVCQUFjQyxLQUFkLEVBQXFCQyxRQUFyQixFQUErQjtJQUMzQixLQUFLUCxPQUFMLENBQWFRLEVBQWIsQ0FBZ0JGLEtBQWhCLEVBQXVCQyxRQUF2QjtFQUNIOztTQUNERSxlQUFBLHNCQUFhSCxLQUFiLEVBQW9CQyxRQUFwQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFVLElBQWIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxRQUF6QjtFQUNIOztTQUVESSxjQUFBLHFCQUFZTCxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFZLGNBQWIsQ0FBNEJOLEtBQTVCLEVBQW1DQyxRQUFuQztFQUNIOztTQUVETSxpQkFBQSwwQkFBaUI7SUFDYixLQUFLYixPQUFMLENBQWFjLGtCQUFiO0VBQ0g7O1NBRURDLFVBQUEsbUJBQ0E7SUFDSSxLQUFLZixPQUFMLENBQWFjLGtCQUFiOztJQUNBLEtBQUtkLE9BQUwsR0FBZSxJQUFmO0lBQ0FGLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQixJQUFwQjtFQUNIOzs7OztBQUVMRCxRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7QUFDQWlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNsYXNzIG1FbWl0dGVyIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1FbWl0dGVyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbUVtaXR0ZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMCk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZW1pdGVyLmVtaXQoLi4uYXJncykpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICByZWdpc3Rlck9uY2UoZXZlbnQsIGxpc3RlbmVyKXtcbiAgICAgICAgdGhpcy5fZW1pdGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudChldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KClcbiAgICB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fZW1pdGVyID0gbnVsbDtcbiAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbn1cbm1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbm1vZHVsZS5leHBvcnRzID0gbUVtaXR0ZXI7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/events/events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/EventSender.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92887wCyaRLkaHeRsewZ29m', 'EventSender');
// Script/EventSender.js

"use strict";

var Emitter = require('mEmitter');

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {},
  start: function start() {},
  onHello: function onHello() {
    Emitter.instance.emit('HELLO', "hellooooooo");
  },
  onWelcome: function onWelcome() {
    Emitter.instance.emit('WELCOME', "Welcomeeeee");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRXZlbnRTZW5kZXIuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwic3RhcnQiLCJvbkhlbGxvIiwiaW5zdGFuY2UiLCJlbWl0Iiwib25XZWxjb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BRkssb0JBRUssQ0FDVCxDQUhJO0VBSUxDLEtBSkssbUJBSUcsQ0FDUCxDQUxJO0VBTUxDLE9BTksscUJBTUs7SUFDTlAsT0FBTyxDQUFDUSxRQUFSLENBQWlCQyxJQUFqQixDQUFzQixPQUF0QixFQUErQixhQUEvQjtFQUNILENBUkk7RUFTTEMsU0FUSyx1QkFTTztJQUNSVixPQUFPLENBQUNRLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLFNBQXRCLEVBQWlDLGFBQWpDO0VBQ0g7QUFYSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgb25Mb2FkICgpIHtcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG4gICAgb25IZWxsbygpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KCdIRUxMTycsIFwiaGVsbG9vb29vb29cIik7XG4gICAgfSxcbiAgICBvbldlbGNvbWUoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdCgnV0VMQ09NRScsIFwiV2VsY29tZWVlZWVcIik7XG4gICAgfSxcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/SpineInspector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineInspector');
// Script/SpineAnimation/SpineInspector.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
  },
  setAnimation: function setAnimation(data) {
    this.node.children[0].getComponent(sp.Skeleton).setAnimation(0, data, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVJbnNwZWN0b3IuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50Iiwic2V0QW5pbWF0aW9uIiwiYmluZCIsImRhdGEiLCJub2RlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWpCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BRkssb0JBRUs7SUFDTkwsT0FBTyxDQUFDTSxRQUFSLEdBQW1CLElBQUlOLE9BQUosRUFBbkI7SUFDQUEsT0FBTyxDQUFDTSxRQUFSLENBQWlCQyxhQUFqQixDQUErQixlQUEvQixFQUFnRCxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoRDtFQUVILENBTkk7RUFRTEQsWUFSSyx3QkFRUUUsSUFSUixFQVFjO0lBQ2YsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxZQUF0QixDQUFtQ0MsRUFBRSxDQUFDQyxRQUF0QyxFQUFnRFAsWUFBaEQsQ0FBNkQsQ0FBN0QsRUFBZ0VFLElBQWhFLEVBQXNFLElBQXRFO0VBQ0g7QUFWSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZSA9IG5ldyBFbWl0dGVyKCk7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudCgnU0VUX0FOSU1BVElPTicsIHRoaXMuc2V0QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuXG4gICAgfSxcblxuICAgIHNldEFuaW1hdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBkYXRhLCB0cnVlKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/ItemScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'ItemScript');
// Script/SpineAnimation/ItemScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onClick: function onClick() {
    Emitter.instance.emit('SET_ANIMATION', this.node.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vSXRlbVNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25DbGljayIsIkVtaXR0ZXIiLCJpbnN0YW5jZSIsImVtaXQiLCJub2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsT0FISyxxQkFHTTtJQUNQQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLGVBQXRCLEVBQXVDLEtBQUtDLElBQUwsQ0FBVUMsSUFBakQ7RUFDSDtBQUxJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KCdTRVRfQU5JTUFUSU9OJywgdGhpcy5ub2RlLm5hbWUpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
