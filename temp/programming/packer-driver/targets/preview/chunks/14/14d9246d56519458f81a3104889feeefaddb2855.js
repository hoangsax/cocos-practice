System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Contact2DType, RigidBody2D, GameState, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, BulletController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function callback(instance) {}

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
      RigidBody2D = _cc.RigidBody2D;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70eeanyBVxIObORcYIuA60H", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Contact2DType', 'RigidBody2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletController", BulletController = (_dec = ccclass('BulletController'), _dec2 = property(BoxCollider2D), _dec3 = property(RigidBody2D), _dec(_class = (_class2 = class BulletController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "damage", _descriptor2, this);

          _initializerDefineProperty(this, "boxCollider", _descriptor3, this);

          _initializerDefineProperty(this, "rigidBody", _descriptor4, this);

          this._initPositionX = 0;
          this._maxDistance = 1500;
          this.returnToPool = void 0;
        }

        onLoad() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          this.node.addMethodReturnToPool = this.addMethodReturnToPool.bind(this);
          this.node.getDamage = this.getDamage.bind(this);
          this.node.onHit = this.onHit.bind(this);
          this._initPositionX = this.node.position.x;
          this.startListener();
        }

        onEnable() {
          this._initPositionX = this.node.position.x;

          if (this.rigidBody) {
            this.rigidBody.wakeUp();
          }
        }

        update(deltaTime) {
          if (!(_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance._isPause) {
            this.move(deltaTime);
          }
        }

        startListener() {
          if (this.boxCollider) {
            this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact() {
          this.onHit();
        }

        onHit() {
          console.log('hit');
          this.scheduleOnce(() => {
            if (this.node) {
              this.node.active = false;
            }
          });
        }

        getDamage() {
          return this.damage;
        }

        move(deltaTime) {
          var pos = this.node.position;
          this.node.setPosition(pos.x + this.speed * deltaTime, pos.y);

          if (this.node.position.x - this._initPositionX > this._maxDistance) {
            console.log(this.node);
            this.node.active = false;
          }
        }

        addMethodReturnToPool(callback) {
          this.returnToPool = callback;
        }

        onDisable() {
          this.returnToPool(this.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "damage", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boxCollider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec3], {
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
//# sourceMappingURL=14d9246d56519458f81a3104889feeefaddb2855.js.map