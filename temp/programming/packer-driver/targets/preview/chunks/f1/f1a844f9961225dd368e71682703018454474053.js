System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sp, Vec3, UITransform, MoveDirection, animations, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, charProps, CharItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMoveDirection(extras) {
    _reporterNs.report("MoveDirection", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfanimations(extras) {
    _reporterNs.report("animations", "../constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      sp = _cc.sp;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      MoveDirection = _unresolved_2.MoveDirection;
      animations = _unresolved_2.animations;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f1aax4fmVGrao/+48zQq7u", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Event', 'sp', 'Canvas', 'Vec3', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      charProps = {
        speed: 300,
        scencePaddingLeft: 75,
        scencePaddingRight: 1000,
        scencePaddingTop: 150,
        scencePaddingBottom: 75
      };

      _export("CharItem", CharItem = (_dec = ccclass('CharItem'), _dec2 = property(Node), _dec3 = property(sp.Skeleton), _dec4 = property(UITransform), _dec(_class = (_class2 = class CharItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "posFire", _descriptor, this);

          _initializerDefineProperty(this, "skeleton", _descriptor2, this);

          _initializerDefineProperty(this, "canvas", _descriptor3, this);

          this.speed = 1000;
          this.isReload = false;
          this.preReload = false;
          this.isMoving = false;
          this.isMovingRight = false;
          this.isMovingLeft = false;
          this.isMovingUp = false;
          this.isMovingDown = false;
        }

        onLoad() {
          this.skeleton.setMix((_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
            error: Error()
          }), animations) : animations).shoot, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
            error: Error()
          }), animations) : animations).run, 0.2);
          this.node.onPressMove = this.onPressMove.bind(this);
          this.node.onPressStop = this.onPressStop.bind(this);
          this.node.onShoot = this.onShoot.bind(this);
          this.node.onReloadDone = this.onReloadDone.bind(this);
        }

        update(dt) {
          var currState = this.isMoving;
          this.onMove(dt);
          this.handleAnimation(currState);
          this.preReload = this.isReload;
        }

        getNodePosition() {
          return this.node.position;
        } // getWorldPosition(): Vec3 {
        //     return this.node.worldPosition;
        // }


        toNodePosition(node) {
          var uiTransform = this.node.getComponent(UITransform);

          if (uiTransform) {
            return uiTransform.convertToNodeSpaceAR(node.position);
          }

          return null;
        }

        setMoving(direction, isMoving) {
          if (isMoving === void 0) {
            isMoving = false;
          }

          switch (direction) {
            case (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
              error: Error()
            }), MoveDirection) : MoveDirection).LEFT:
              this.isMovingLeft = isMoving;
              break;

            case (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
              error: Error()
            }), MoveDirection) : MoveDirection).RIGHT:
              this.isMovingRight = isMoving;
              break;

            case (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
              error: Error()
            }), MoveDirection) : MoveDirection).UP:
              this.isMovingUp = isMoving;
              break;

            case (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
              error: Error()
            }), MoveDirection) : MoveDirection).DOWN:
              this.isMovingDown = isMoving;
              break;
          }
        }

        onPressMove(direction) {
          this.setMoving(direction, true);
          console.log("charItem move", direction);
        }

        onPressStop(direction) {
          this.setMoving(direction, false);
        }

        limitPositionOnScene() {
          if (this.getNodePosition().x < -this.canvas.width / 2 + charProps.scencePaddingLeft) {
            this.getNodePosition().x = -this.canvas.width / 2 + charProps.scencePaddingLeft;
          }

          if (this.getNodePosition().x > this.canvas.width / 2 - charProps.scencePaddingRight) {
            this.getNodePosition().x = this.canvas.width / 2 - charProps.scencePaddingRight;
          }

          if (this.getNodePosition().y < -this.canvas.height / 2 + charProps.scencePaddingBottom) {
            this.getNodePosition().y = -this.canvas.height / 2 + charProps.scencePaddingBottom;
          }

          if (this.getNodePosition().y > this.canvas.height / 2 - charProps.scencePaddingTop) {
            this.getNodePosition().y = this.canvas.height / 2 - charProps.scencePaddingTop;
          }
        }

        onMove(dt) {
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
            var posX = this.getNodePosition().x + moveX * this.speed * dt;
            var posY = this.getNodePosition().y + moveY * this.speed * dt;
            this.node.setPosition(new Vec3(posX, posY, 0));
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
            this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
              error: Error()
            }), animations) : animations).walk, false);
            this.playAnimation(1, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
              error: Error()
            }), animations) : animations).shoot, true);
          }
        }

        onReloadDone() {
          this.isReload = false;
        }

        handleAnimation(currState) {
          if (this.preReload && !this.isReload) {
            if (this.isMoving) {
              this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
                error: Error()
              }), animations) : animations).run);
            } else {
              this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
                error: Error()
              }), animations) : animations).idle);
            }
          } else if (this.isMoving && !currState) {
            this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
              error: Error()
            }), animations) : animations).run);
          } else if (!this.isMoving && currState) {
            this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
              error: Error()
            }), animations) : animations).idle);
          }
        }

        playAnimation(track, animationName, loop) {
          if (track === void 0) {
            track = 0;
          }

          if (loop === void 0) {
            loop = true;
          }

          this.skeleton.setAnimation(track, animationName, loop);
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
//# sourceMappingURL=f1a844f9961225dd368e71682703018454474053.js.map