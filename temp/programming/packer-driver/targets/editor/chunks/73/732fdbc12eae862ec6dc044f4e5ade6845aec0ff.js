System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Contact2DType, ProgressBar, GameState, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MonsterController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletNode(extras) {
    _reporterNs.report("BulletNode", "../bullet/controller", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd4c8zTYj5ODKRG9l8cIYFe", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Collider2D', 'IPhysics2DContact', 'Contact2DType', 'ICollisionEvent', 'ProgressBar', 'ExtrapolationMode']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterController", MonsterController = (_dec = ccclass('MonsterController'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class MonsterController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hpBar", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);

          _initializerDefineProperty(this, "baseHP", _descriptor3, this);

          this._hp = 1000;
          this._maxDistance = 1500;
          this._boxCollider = void 0;
          this._hitTimer = 0;
          this._returnToPool = void 0;
        }

        onLoad() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          this._hp = this.baseHP;
          this._boxCollider = this.node.getComponent(BoxCollider2D);
          this.node.setReturnToPoolMethod = this.setReturnToPoolMethod.bind(this); // this.startListener();
        }

        start() {
          this.startListener();
        }

        onEnable() {
          this._hp = this.baseHP;
          this.startListener();
        }

        update(dt) {
          if ((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.isPause) {
            return;
          }

          if (this._hitTimer > 0) {
            this._hitTimer -= dt;
          } else {
            this.move(dt);
          }

          this.hpBar.progress = this._hp / 1000;
        }

        startListener() {
          if (this._boxCollider) {
            this._boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);

          }

          console.log("monster enable;");
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          let bullet = otherCollider.node.getScript();
          let damage = bullet.getDamage();
          console.log(damage);
          bullet.onHit();
          this.onHit(damage);
        }

        onHit(damage) {
          this._hp -= damage; // this._boxCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);

          if (this._hp <= 0) {
            this.scheduleOnce(() => {
              if (this.node) {
                this._boxCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);

                this.node.active = false;
              }
            });
          }

          this._hitTimer = 1;
          console.log(this._hp);
        }

        move(dt) {
          this.node.setPosition(this.node.position.x - this.speed * dt, this.node.position.y, 0);

          if (this.node.position.x < -this._maxDistance) {
            this.node.active = false;
          }
        }

        setMaxDistance(value) {
          this._maxDistance = value;
        }

        setReturnToPoolMethod(callback) {
          this._returnToPool = callback;
        }

        onDisable() {
          console.log("monster disable;");

          this._boxCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);

          this._returnToPool(this.node);
        }

        onDestroy() {
          this._boxCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "baseHP", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=732fdbc12eae862ec6dc044f4e5ade6845aec0ff.js.map