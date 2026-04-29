System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sp, Vec3, UITransform, MoveDirection, animations, GameState, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, charProps, CharacterController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMoveDirection(extras) {
    _reporterNs.report("MoveDirection", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfanimations(extras) {
    _reporterNs.report("animations", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../gameState", _context.meta, extras);
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
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f1aax4fmVGrao/+48zQq7u", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp', 'Vec3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      charProps = {
        speed: 100,
        scencePaddingLeft: 75,
        scencePaddingRight: 75,
        scencePaddingTop: 150,
        scencePaddingBottom: 10
      };

      _export("CharacterController", CharacterController = (_dec = ccclass('CharacterController'), _dec2 = property(Node), _dec3 = property(sp.Skeleton), _dec(_class = (_class2 = class CharacterController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "posFire", _descriptor, this);

          _initializerDefineProperty(this, "skeleton", _descriptor2, this);

          this._maxResolution = void 0;
          this.readyTimer = 0;
          this.speed = 400;
          this.isReload = false;
          this.preReload = false;
          this.isMoving = false;
          this.isMovingRight = false;
          this.isMovingLeft = false;
          this.isMovingUp = false;
          this.isMovingDown = false;
        }

        onLoad() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          this.readyState();
          this.skeleton.setMix((_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
            error: Error()
          }), animations) : animations).shoot, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
            error: Error()
          }), animations) : animations).run, 0.2);
          this.node.posFire = this.posFire;
          this.node.onPressMove = this.onPressMove.bind(this);
          this.node.onPressStop = this.onPressStop.bind(this);
          this.node.onShoot = this.onShoot.bind(this);
          this.node.onReloadDone = this.onReloadDone.bind(this);
          this.node.setMaxResolution = this.setMaxResolution.bind(this);
        }

        update(dt) {
          if (!this.readyTimer) {
            if ((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).instance._isPause) {
              this.skeleton.clearAnimation();
              return;
            }

            let currState = this.isMoving;
            this.onMove(dt);
            this.handleAnimation(currState);
            this.preReload = this.isReload;
          } else {
            this.readyTimer -= dt;

            if (this.readyTimer <= 0) {
              this.readyTimer = 0;
              this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
                error: Error()
              }), animations) : animations).idle);
            }
          }
        }

        readyState() {
          this.readyTimer = 3;
          this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
            error: Error()
          }), animations) : animations).portal, false);
        }

        resetState() {
          this.isReload = false;
          this.preReload = false;
          this.isMoving = false;
          this.isMovingRight = false;
          this.isMovingLeft = false;
          this.isMovingUp = false;
          this.isMovingDown = false;
          this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
            error: Error()
          }), animations) : animations).idle);
        }

        setMaxResolution(height, width) {
          this._maxResolution = {
            height: height,
            width: width
          };
        }

        getNodePosition() {
          return this.node.position;
        } // getWorldPosition(): Vec3 {
        //     return this.node.worldPosition;
        // }


        toNodePosition(node) {
          const uiTransform = this.node.getComponent(UITransform);

          if (uiTransform) {
            return uiTransform.convertToNodeSpaceAR(node.position);
          }

          return null;
        }

        setMoving(direction, isMoving = false) {
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
        }

        onPressStop(direction) {
          this.setMoving(direction, false);
        }

        limitPositionOnScene() {
          if (this.getNodePosition().x < -this._maxResolution.width / 2 + charProps.scencePaddingLeft) {
            this.getNodePosition().x = -this._maxResolution.width / 2 + charProps.scencePaddingLeft;
          }

          if (this.getNodePosition().x > this._maxResolution.width / 2 - charProps.scencePaddingRight) {
            this.getNodePosition().x = this._maxResolution.width / 2 - charProps.scencePaddingRight;
          }

          if (this.getNodePosition().y < -this._maxResolution.height / 2 + charProps.scencePaddingBottom) {
            this.getNodePosition().y = -this._maxResolution.height / 2 + charProps.scencePaddingBottom;
          }

          if (this.getNodePosition().y > this._maxResolution.height / 2 - charProps.scencePaddingTop) {
            this.getNodePosition().y = this._maxResolution.height / 2 - charProps.scencePaddingTop;
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

          if (moveX !== 0 && moveY !== 0) {
            let distance = Math.sqrt((this.speed * dt) ** 2 / 2);
            let posX = this.getNodePosition().x + moveX * distance;
            let posY = this.getNodePosition().y + moveY * distance;
            this.node.setPosition(new Vec3(posX, posY, 0));
            this.isMoving = true;
          } else if (moveX !== 0 || moveY !== 0) {
            let posX = this.getNodePosition().x + moveX * this.speed * dt;
            let posY = this.getNodePosition().y + moveY * this.speed * dt;
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
            this.playAnimation(0, (_crd && animations === void 0 ? (_reportPossibleCrUseOfanimations({
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

        playAnimation(track = 0, animationName, loop = true) {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd39515727198f3c43438e218855859277302851.js.map