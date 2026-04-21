
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/CharItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23def/9FaBCIZ9s6buXCtgm', 'CharItem');
// Script/MonsterFight/CharItem.js

"use strict";

var _require = require("./Constants"),
    MoveDirection = _require.MoveDirection;

var charProps = {
  speed: 400,
  scencePaddingLeft: 75,
  scencePaddingRight: 1000,
  scencePaddingTop: 150,
  scencePaddingBottom: 75
};
var animations = {
  walk: "walk",
  idle: "idle",
  run: "run",
  shoot: "shoot"
};
cc.Class({
  "extends": cc.Component,
  properties: {
    posFire: cc.Node,
    canvas: cc.Node,
    charSpine: sp.Skeleton
  },
  ctor: function ctor() {
    this.speed = charProps.speed;
    this.isReload = false;
    this.preReload = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
    this.isMoving = false;
  },
  onLoad: function onLoad() {
    this.node.PosFire = this.posFire.position.clone();
    this.node.onPressMove = this.onPressMove.bind(this);
    this.node.onPressStop = this.onPressStop.bind(this);
    this.node.onShoot = this.onShoot.bind(this);
    this.node.onReloadDone = this.onReloadDone.bind(this);
    console.log(this.charSpine);
  },
  update: function update(dt) {
    var currState = this.isMoving;
    this.onMove(dt);
    this.handleAnimation(currState);
    this.preReload = this.isReload;
  },
  setMoving: function setMoving(direction, isMoving) {
    if (isMoving === void 0) {
      isMoving = false;
    }

    switch (direction) {
      case MoveDirection.LEFT:
        this.isMovingLeft = isMoving;
        break;

      case MoveDirection.RIGHT:
        this.isMovingRight = isMoving;
        break;

      case MoveDirection.UP:
        this.isMovingUp = isMoving;
        break;

      case MoveDirection.DOWN:
        this.isMovingDown = isMoving;
        break;
    }
  },
  onPressMove: function onPressMove(direction) {
    this.setMoving(direction, true);
  },
  onPressStop: function onPressStop(direction) {
    this.setMoving(direction, false);
  },
  limitPositionOnScene: function limitPositionOnScene() {
    if (this.node.x < -this.canvas.width / 2 + charProps.scencePaddingLeft) {
      this.node.x = -this.canvas.width / 2 + charProps.scencePaddingLeft;
    }

    if (this.node.x > this.canvas.width / 2 - charProps.scencePaddingRight) {
      this.node.x = this.canvas.width / 2 - charProps.scencePaddingRight;
    }

    if (this.node.y < -this.canvas.height / 2 + charProps.scencePaddingBottom) {
      this.node.y = -this.canvas.height / 2 + charProps.scencePaddingBottom;
    }

    if (this.node.y > this.canvas.height / 2 - charProps.scencePaddingTop) {
      this.node.y = this.canvas.height / 2 - charProps.scencePaddingTop;
    }
  },
  onMove: function onMove(dt) {
    if (this.isReload) {
      return;
    }

    var moveX = 0;
    var moveY = 0;
    if (this.isMovingRight) moveX += 1;
    if (this.isMovingLeft) moveX -= 1;
    if (this.isMovingUp) moveY += 1;
    if (this.isMovingDown) moveY -= 1;

    if (moveX !== 0 || moveY !== 0) {
      this.node.x += moveX * this.speed * dt;
      this.node.y += moveY * this.speed * dt;
      this.isMoving = true;
    } else {
      this.isMoving = false;
    }

    this.limitPositionOnScene();
  },
  onStop: function onStop() {
    this.isMoving = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  },
  onShoot: function onShoot() {
    if (!this.isReload) {
      this.isReload = true;
      this.playAnimation(animations.shoot, false);
    }
  },
  onReloadDone: function onReloadDone() {
    this.isReload = false;
  },
  handleAnimation: function handleAnimation(currState) {
    if (this.isMoving && !currState) {
      this.addAnimation(animations.run);
    } else if (!this.isMoving && currState) {
      this.addAnimation(animations.idle);
    }
  },
  playAnimation: function playAnimation(animationName, loop) {
    if (loop === void 0) {
      loop = true;
    }

    this.charSpine.setAnimation(0, animationName, loop, 0);
  },
  addAnimation: function addAnimation(animationName, loop) {
    if (loop === void 0) {
      loop = true;
    }

    this.charSpine.clearTracks();
    this.charSpine.setToSetupPose();
    this.charSpine.addAnimation(0, animationName, loop, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0NoYXJJdGVtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJNb3ZlRGlyZWN0aW9uIiwiY2hhclByb3BzIiwic3BlZWQiLCJzY2VuY2VQYWRkaW5nTGVmdCIsInNjZW5jZVBhZGRpbmdSaWdodCIsInNjZW5jZVBhZGRpbmdUb3AiLCJzY2VuY2VQYWRkaW5nQm90dG9tIiwiYW5pbWF0aW9ucyIsIndhbGsiLCJpZGxlIiwicnVuIiwic2hvb3QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBvc0ZpcmUiLCJOb2RlIiwiY2FudmFzIiwiY2hhclNwaW5lIiwic3AiLCJTa2VsZXRvbiIsImN0b3IiLCJpc1JlbG9hZCIsInByZVJlbG9hZCIsImlzTW92aW5nTGVmdCIsImlzTW92aW5nUmlnaHQiLCJpc01vdmluZ1VwIiwiaXNNb3ZpbmdEb3duIiwiaXNNb3ZpbmciLCJvbkxvYWQiLCJub2RlIiwiUG9zRmlyZSIsInBvc2l0aW9uIiwiY2xvbmUiLCJvblByZXNzTW92ZSIsImJpbmQiLCJvblByZXNzU3RvcCIsIm9uU2hvb3QiLCJvblJlbG9hZERvbmUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZHQiLCJjdXJyU3RhdGUiLCJvbk1vdmUiLCJoYW5kbGVBbmltYXRpb24iLCJzZXRNb3ZpbmciLCJkaXJlY3Rpb24iLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJsaW1pdFBvc2l0aW9uT25TY2VuZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJtb3ZlWCIsIm1vdmVZIiwib25TdG9wIiwicGxheUFuaW1hdGlvbiIsImFkZEFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJsb29wIiwic2V0QW5pbWF0aW9uIiwiY2xlYXJUcmFja3MiLCJzZXRUb1NldHVwUG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUEwQkEsT0FBTyxDQUFDLGFBQUQsQ0FBakM7QUFB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b3ZlRGlyZWN0aW9uIH0gPSByZXF1aXJlKFwiLi9Db25zdGFudHNcIik7XG5cbmNvbnN0IGNoYXJQcm9wcyA9IHtcbiAgICBzcGVlZDogNDAwLFxuICAgIHNjZW5jZVBhZGRpbmdMZWZ0OiA3NSxcbiAgICBzY2VuY2VQYWRkaW5nUmlnaHQ6IDEwMDAsXG4gICAgc2NlbmNlUGFkZGluZ1RvcDogMTUwLFxuICAgIHNjZW5jZVBhZGRpbmdCb3R0b206IDc1LFxufVxuXG5jb25zdCBhbmltYXRpb25zID0ge1xuICAgIHdhbGs6IFwid2Fsa1wiLFxuICAgIGlkbGU6IFwiaWRsZVwiLFxuICAgIHJ1bjogXCJydW5cIixcbiAgICBzaG9vdDogXCJzaG9vdFwiXG59XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBvc0ZpcmU6IGNjLk5vZGUsXG4gICAgICAgIGNhbnZhczogY2MuTm9kZSxcbiAgICAgICAgY2hhclNwaW5lOiBzcC5Ta2VsZXRvbixcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IGNoYXJQcm9wcy5zcGVlZDtcbiAgICAgICAgdGhpcy5pc1JlbG9hZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZVJlbG9hZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUuUG9zRmlyZSA9IHRoaXMucG9zRmlyZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLm5vZGUub25QcmVzc01vdmUgPSB0aGlzLm9uUHJlc3NNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vblByZXNzU3RvcCA9IHRoaXMub25QcmVzc1N0b3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uU2hvb3QgPSB0aGlzLm9uU2hvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uUmVsb2FkRG9uZSA9IHRoaXMub25SZWxvYWREb25lLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhclNwaW5lKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGxldCBjdXJyU3RhdGUgPSB0aGlzLmlzTW92aW5nO1xuICAgICAgICB0aGlzLm9uTW92ZShkdCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uKGN1cnJTdGF0ZSk7XG4gICAgICAgIHRoaXMucHJlUmVsb2FkID0gdGhpcy5pc1JlbG9hZDtcbiAgICB9LFxuXG4gICAgc2V0TW92aW5nKGRpcmVjdGlvbiwgaXNNb3ZpbmcgPSBmYWxzZSkge1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0xlZnQgPSBpc01vdmluZztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBpc01vdmluZztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5VUDpcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSBpc01vdmluZztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5ET1dOOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gaXNNb3Zpbmc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QcmVzc01vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0TW92aW5nKGRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uUHJlc3NTdG9wKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnNldE1vdmluZyhkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgbGltaXRQb3NpdGlvbk9uU2NlbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC10aGlzLmNhbnZhcy53aWR0aCAvIDIgKyBjaGFyUHJvcHMuc2NlbmNlUGFkZGluZ0xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLXRoaXMuY2FudmFzLndpZHRoIC8gMiArIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nTGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSBjaGFyUHJvcHMuc2NlbmNlUGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgLXRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyBjaGFyUHJvcHMuc2NlbmNlUGFkZGluZ0JvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAtdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA+IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSBjaGFyUHJvcHMuc2NlbmNlUGFkZGluZ1RvcCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gY2hhclByb3BzLnNjZW5jZVBhZGRpbmdUb3A7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Nb3ZlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmVYID0gMDtcbiAgICAgICAgbGV0IG1vdmVZID0gMDtcblxuICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSBtb3ZlWCArPSAxO1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZ0xlZnQpIG1vdmVYIC09IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nVXApIG1vdmVZICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nRG93bikgbW92ZVkgLT0gMTtcblxuICAgICAgICBpZiAobW92ZVggIT09IDAgfHwgbW92ZVkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IG1vdmVYICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gbW92ZVkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbWl0UG9zaXRpb25PblNjZW5lKCk7XG4gICAgfSxcblxuICAgIG9uU3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uU2hvb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlbG9hZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oYW5pbWF0aW9ucy5zaG9vdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUmVsb2FkRG9uZSgpIHtcbiAgICAgICAgdGhpcy5pc1JlbG9hZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBoYW5kbGVBbmltYXRpb24oY3VyclN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nICYmICFjdXJyU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uKGFuaW1hdGlvbnMucnVuKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmlzTW92aW5nICYmIGN1cnJTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb24oYW5pbWF0aW9ucy5pZGxlKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBsYXlBbmltYXRpb24oYW5pbWF0aW9uTmFtZSwgbG9vcCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5jaGFyU3BpbmUuc2V0QW5pbWF0aW9uKDAsIGFuaW1hdGlvbk5hbWUsIGxvb3AsIDApO1xuICAgIH0sXG5cbiAgICBhZGRBbmltYXRpb24oYW5pbWF0aW9uTmFtZSwgbG9vcCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5jaGFyU3BpbmUuY2xlYXJUcmFja3MoKTtcbiAgICAgICAgdGhpcy5jaGFyU3BpbmUuc2V0VG9TZXR1cFBvc2UoKTtcbiAgICAgICAgdGhpcy5jaGFyU3BpbmUuYWRkQW5pbWF0aW9uKDAsIGFuaW1hdGlvbk5hbWUsIGxvb3AsIDApO1xuICAgIH0sXG59KTtcbiJdfQ==