
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
    if (this.isReload && !this.preReload) {
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
    if (this.preReload && !this.isReload) {
      if (this.isMoving) {
        this.addAnimation(animations.run);
      } else {
        this.addAnimation(animations.idle);
      }
    } else if (this.isMoving && !currState) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0NoYXJJdGVtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJNb3ZlRGlyZWN0aW9uIiwiY2hhclByb3BzIiwic3BlZWQiLCJzY2VuY2VQYWRkaW5nTGVmdCIsInNjZW5jZVBhZGRpbmdSaWdodCIsInNjZW5jZVBhZGRpbmdUb3AiLCJzY2VuY2VQYWRkaW5nQm90dG9tIiwiYW5pbWF0aW9ucyIsIndhbGsiLCJpZGxlIiwicnVuIiwic2hvb3QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBvc0ZpcmUiLCJOb2RlIiwiY2FudmFzIiwiY2hhclNwaW5lIiwic3AiLCJTa2VsZXRvbiIsImN0b3IiLCJpc1JlbG9hZCIsInByZVJlbG9hZCIsImlzTW92aW5nTGVmdCIsImlzTW92aW5nUmlnaHQiLCJpc01vdmluZ1VwIiwiaXNNb3ZpbmdEb3duIiwiaXNNb3ZpbmciLCJvbkxvYWQiLCJub2RlIiwiUG9zRmlyZSIsInBvc2l0aW9uIiwiY2xvbmUiLCJvblByZXNzTW92ZSIsImJpbmQiLCJvblByZXNzU3RvcCIsIm9uU2hvb3QiLCJvblJlbG9hZERvbmUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZHQiLCJjdXJyU3RhdGUiLCJvbk1vdmUiLCJoYW5kbGVBbmltYXRpb24iLCJzZXRNb3ZpbmciLCJkaXJlY3Rpb24iLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJsaW1pdFBvc2l0aW9uT25TY2VuZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJtb3ZlWCIsIm1vdmVZIiwib25TdG9wIiwicGxheUFuaW1hdGlvbiIsImFkZEFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJsb29wIiwic2V0QW5pbWF0aW9uIiwiY2xlYXJUcmFja3MiLCJzZXRUb1NldHVwUG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUEwQkEsT0FBTyxDQUFDLGFBQUQsQ0FBakM7QUFB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YSxHQUFOLElBQU07SUFBQTs7SUFDckMsS0FBSzdDLFNBQUwsQ0FBZStDLFdBQWY7SUFDQSxLQUFLL0MsU0FBTCxDQUFlZ0QsY0FBZjtJQUNBLEtBQUtoRCxTQUFMLENBQWUyQyxZQUFmLENBQTRCLENBQTVCLEVBQStCQyxhQUEvQixFQUE4Q0MsSUFBOUMsRUFBb0QsQ0FBcEQ7RUFDSDtBQS9JSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IE1vdmVEaXJlY3Rpb24gfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcblxuY29uc3QgY2hhclByb3BzID0ge1xuICAgIHNwZWVkOiA0MDAsXG4gICAgc2NlbmNlUGFkZGluZ0xlZnQ6IDc1LFxuICAgIHNjZW5jZVBhZGRpbmdSaWdodDogMTAwMCxcbiAgICBzY2VuY2VQYWRkaW5nVG9wOiAxNTAsXG4gICAgc2NlbmNlUGFkZGluZ0JvdHRvbTogNzUsXG59XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgd2FsazogXCJ3YWxrXCIsXG4gICAgaWRsZTogXCJpZGxlXCIsXG4gICAgcnVuOiBcInJ1blwiLFxuICAgIHNob290OiBcInNob290XCJcbn1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcG9zRmlyZTogY2MuTm9kZSxcbiAgICAgICAgY2FudmFzOiBjYy5Ob2RlLFxuICAgICAgICBjaGFyU3BpbmU6IHNwLlNrZWxldG9uLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gY2hhclByb3BzLnNwZWVkO1xuICAgICAgICB0aGlzLmlzUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJlUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5Qb3NGaXJlID0gdGhpcy5wb3NGaXJlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubm9kZS5vblByZXNzTW92ZSA9IHRoaXMub25QcmVzc01vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uUHJlc3NTdG9wID0gdGhpcy5vblByZXNzU3RvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub25TaG9vdCA9IHRoaXMub25TaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub25SZWxvYWREb25lID0gdGhpcy5vblJlbG9hZERvbmUuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFyU3BpbmUpO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgbGV0IGN1cnJTdGF0ZSA9IHRoaXMuaXNNb3Zpbmc7XG4gICAgICAgIHRoaXMub25Nb3ZlKGR0KTtcbiAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb24oY3VyclN0YXRlKTtcbiAgICAgICAgdGhpcy5wcmVSZWxvYWQgPSB0aGlzLmlzUmVsb2FkO1xuICAgIH0sXG5cbiAgICBzZXRNb3ZpbmcoZGlyZWN0aW9uLCBpc01vdmluZyA9IGZhbHNlKSB7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIE1vdmVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGlzTW92aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGlzTW92aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLlVQOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdVcCA9IGlzTW92aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSBpc01vdmluZztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblByZXNzTW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRNb3ZpbmcoZGlyZWN0aW9uLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgb25QcmVzc1N0b3AoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0TW92aW5nKGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBsaW1pdFBvc2l0aW9uT25TY2VuZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS54IDwgLXRoaXMuY2FudmFzLndpZHRoIC8gMiArIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtdGhpcy5jYW52YXMud2lkdGggLyAyICsgY2hhclByb3BzLnNjZW5jZVBhZGRpbmdMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyIC0gY2hhclByb3BzLnNjZW5jZVBhZGRpbmdSaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nQm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IC10aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgY2hhclByb3BzLnNjZW5jZVBhZGRpbmdCb3R0b207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nVG9wKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSBjaGFyUHJvcHMuc2NlbmNlUGFkZGluZ1RvcDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vdmUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWxvYWQgJiYgIXRoaXMucHJlUmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmVYID0gMDtcbiAgICAgICAgbGV0IG1vdmVZID0gMDtcblxuICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSBtb3ZlWCArPSAxO1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZ0xlZnQpIG1vdmVYIC09IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nVXApIG1vdmVZICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nRG93bikgbW92ZVkgLT0gMTtcblxuICAgICAgICBpZiAobW92ZVggIT09IDAgfHwgbW92ZVkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IG1vdmVYICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gbW92ZVkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbWl0UG9zaXRpb25PblNjZW5lKCk7XG4gICAgfSxcblxuICAgIG9uU3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uU2hvb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlbG9hZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oYW5pbWF0aW9ucy5zaG9vdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUmVsb2FkRG9uZSgpIHtcbiAgICAgICAgdGhpcy5pc1JlbG9hZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBoYW5kbGVBbmltYXRpb24oY3VyclN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnByZVJlbG9hZCAmJiAhdGhpcy5pc1JlbG9hZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3Zpbmcpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uKGFuaW1hdGlvbnMucnVuKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb24oYW5pbWF0aW9ucy5pZGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNNb3ZpbmcgJiYgIWN1cnJTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb24oYW5pbWF0aW9ucy5ydW4pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaXNNb3ZpbmcgJiYgY3VyclN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbihhbmltYXRpb25zLmlkbGUpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxheUFuaW1hdGlvbihhbmltYXRpb25OYW1lLCBsb29wID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5zZXRBbmltYXRpb24oMCwgYW5pbWF0aW9uTmFtZSwgbG9vcCwgMCk7XG4gICAgfSxcblxuICAgIGFkZEFuaW1hdGlvbihhbmltYXRpb25OYW1lLCBsb29wID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5jbGVhclRyYWNrcygpO1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5hZGRBbmltYXRpb24oMCwgYW5pbWF0aW9uTmFtZSwgbG9vcCwgMCk7XG4gICAgfSxcbn0pO1xuIl19