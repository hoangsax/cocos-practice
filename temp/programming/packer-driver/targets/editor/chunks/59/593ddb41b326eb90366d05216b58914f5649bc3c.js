System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Contact2DType, GameState, _dec, _class, _class2, _descriptor, _crd, ccclass, property, BulletController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70eeanyBVxIObORcYIuA60H", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Collider2D', 'IPhysics2DContact', 'Contact2DType', 'ICollisionEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletController", BulletController = (_dec = ccclass('BulletController'), _dec(_class = (_class2 = class BulletController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          this.returnToPool = void 0;
          this.boxCollider = void 0;
        }

        onLoad() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          this.node.addMethodReturnToPool = this.addMethodReturnToPool.bind(this);
        }

        start() {
          this.boxCollider = this.getComponent(BoxCollider2D);
        }

        onEnable() {
          if (this.boxCollider) {
            this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
          }
        }

        update(deltaTime) {
          if (!(_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.isPause) {
            if (this.node.position.x > 1000) {
              this.node.active = false;
              this.node.parent = null;

              if (this.returnToPool) {
                this.returnToPool(this.node);
              }
            }

            this.move(deltaTime);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 'selfCollider' is the collider on this node
          // 'otherCollider' is the collider it just hit
          console.log(`Collision started with: ${otherCollider.node.name}`); // Example: Check the tag or group of the other collider to apply specific logic

          if (otherCollider.tag === 1) {
            console.log("Hit an enemy!");
          }
        }

        move(deltaTime) {
          let pos = this.node.position;
          this.node.setPosition(pos.x + this.speed * deltaTime, pos.y, 0);
        }

        hitAnnounce() {
          console.log('hit');
        }

        addMethodReturnToPool(callback) {
          this.returnToPool = callback;
        }

        onDisable() {
          let myCollider = this.getComponent(BoxCollider2D);

          if (myCollider) {
            myCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=593ddb41b326eb90366d05216b58914f5649bc3c.js.map