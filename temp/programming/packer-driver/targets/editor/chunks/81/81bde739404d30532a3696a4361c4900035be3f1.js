System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, BoxCollider2D, Contact2DType, _dec, _class, _class2, _descriptor, _crd, ccclass, property, BulletController;

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
      Vec3 = _cc.Vec3;
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70eeanyBVxIObORcYIuA60H", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'BoxCollider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletController", BulletController = (_dec = ccclass('BulletController'), _dec(_class = (_class2 = class BulletController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          this.returnToPool = void 0;
        }

        onLoad() {
          this.node.initData = this.initData.bind(this);
          console.log(this.node);
          let myCollider = this.getComponent(BoxCollider2D);
          this.node.addMethodReturnToPool = this.addMethodReturnToPool.bind(this);

          if (myCollider) {
            // 2. Tell the engine to listen for the exact moment of impact
            myCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        start() {}

        update(deltaTime) {
          if (this.node.position.x > 1000) {
            this.node.active = false;
            this.node.parent = null;

            if (this.returnToPool) {
              this.returnToPool(this.node);
            }
          }

          this.move(deltaTime);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          console.log('hit');
        }

        initData(startPos = new Vec3(0, 0, 0)) {
          this.node.setPosition(startPos);
          this.node.active = true;
        }

        move(deltaTime) {
          let pos = this.node.position;
          this.node.setPosition(pos.x + this.speed * deltaTime, pos.y, 0);
        }

        hitAnnounce() {
          console.log('hit');
        }

        addMethodReturnToPool(callback) {
          callback(this.node);
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
//# sourceMappingURL=81bde739404d30532a3696a4361c4900035be3f1.js.map