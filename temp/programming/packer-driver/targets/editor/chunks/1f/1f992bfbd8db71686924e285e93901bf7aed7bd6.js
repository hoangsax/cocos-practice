System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Contact2DType, ProgressBar, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MonsterController;

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
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
      ProgressBar = _cc.ProgressBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd4c8zTYj5ODKRG9l8cIYFe", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Collider2D', 'IPhysics2DContact', 'Contact2DType', 'ICollisionEvent', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterController", MonsterController = (_dec = ccclass('MonsterController'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class MonsterController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hpBar", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);

          _initializerDefineProperty(this, "hp", _descriptor3, this);

          this._boxCollider = void 0;
          this._hitTimer = 0;
        }

        onLoad() {
          this._boxCollider = this.node.getComponent(BoxCollider2D);
          this.startListener();
        }

        startListener() {
          if (this._boxCollider) {
            this._boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);

          }
        }

        onBeginContact(otherCollider, selfCollider, contact) {
          // let temp = otherCollider.node as BulletNode;
          // console.log(temp.onHit);
          console.log(otherCollider.node); // let damage = bullet.getDamage();
          // bullet.onHit();
          // this.onHit(damage)
        }

        onHit(damage) {
          this.hp -= damage;

          if (this.hp <= 0) {
            this.node.destroy();
          }

          this.hpBar.progress = this.hp / 1000;
          this._hitTimer = 1;
        }

        move(dt) {
          this.node.setPosition(this.node.position.x - this.speed * dt, this.node.position.y, 0);
        }

        update(dt) {
          if (this._hitTimer > 0) {
            this._hitTimer -= dt;
          } else {
            this.move(dt);
          }
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hp", [property], {
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
//# sourceMappingURL=1f992bfbd8db71686924e285e93901bf7aed7bd6.js.map