System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sp, Canvas, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CharItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      sp = _cc.sp;
      Canvas = _cc.Canvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f1aax4fmVGrao/+48zQq7u", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Event', 'sp', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CharItem", CharItem = (_dec = ccclass('CharItem'), _dec2 = property(Node), _dec3 = property(sp.Skeleton), _dec4 = property(Canvas), _dec(_class = (_class2 = class CharItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "posFire", _descriptor, this);

          _initializerDefineProperty(this, "skeleton", _descriptor2, this);

          _initializerDefineProperty(this, "canvas", _descriptor3, this);

          this.animations = void 0;
        }

        onLoad() {
          this.node.PosFire = this.posFire.position.clone();
          this.charSpine.setMix(animations.shoot, animations.run, 0.2);
          this.node.onPressMove = this.onPressMove.bind(this);
          this.node.onPressStop = this.onPressStop.bind(this);
          this.node.onShoot = this.onShoot.bind(this);
          this.node.onReloadDone = this.onReloadDone.bind(this);
        }

        update(dt) {
          let currState = this.isMoving;
          this.onMove(dt);
          this.handleAnimation(currState);
          this.preReload = this.isReload;
        }

        setMoving(direction, isMoving = false) {
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
        }

        onPressMove(direction) {
          this.setMoving(direction, true);
        }

        onPressStop(direction) {
          this.setMoving(direction, false);
        }

        limitPositionOnScene() {
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
        }

        onMove(dt) {
          if (this.isReload && !this.preReload) {
            return;
          }

          let moveX = 0;
          let moveY = 0;
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
        }

        onStop() {
          this.isMoving = false;
          this.isMovingLeft = false;
          this.isMovingRight = false;
          this.isMovingUp = false;
          this.isMovingDown = false;
        }

        onShoot() {
          if (!this.isReload) {
            this.isReload = true;
            this.playAnimation(animations.idle, false, 0);
            this.playAnimation(animations.shoot, false, 1);
          }
        }

        onReloadDone() {
          this.isReload = false;
        }

        handleAnimation(currState) {
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
        }

        playAnimation(animationName, loop = true, track = 0) {
          this.charSpine.setAnimation(track, animationName, loop, 0);
        }

        addAnimation(animationName, loop = true) {
          this.charSpine.clearTracks();
          this.charSpine.setToSetupPose();
          this.charSpine.addAnimation(0, animationName, loop, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "posFire", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b35d0d8c80aec3501f1f38f487d7b139ac7a669f.js.map