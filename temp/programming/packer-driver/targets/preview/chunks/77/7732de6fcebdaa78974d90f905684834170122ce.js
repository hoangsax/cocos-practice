System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Contact2DType, _dec, _class, _class2, _descriptor, _crd, ccclass, property, BulletController;

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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          this.returnToPool = void 0;
          this.boxCollider = void 0;
        }

        onLoad() {
          this.node.addMethodReturnToPool = this.addMethodReturnToPool.bind(this); // physics.PhysicsSystem.instance.debugLineLayer = 1; 
        }

        start() {
          this.boxCollider = this.getComponent(BoxCollider2D);

          if (this.boxCollider) {
            // 2. Register collision event listeners
            this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this); // Note: You can also listen to PRE_SOLVE and POST_SOLVE if needed
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 'selfCollider' is the collider on this node
          // 'otherCollider' is the collider it just hit
          console.log("Collision started with: " + otherCollider.node.name); // Example: Check the tag or group of the other collider to apply specific logic

          if (otherCollider.tag === 1) {
            console.log("Hit an enemy!");
          }
        }

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

        onCollisionEnter(event) {
          console.log('Va chạm xảy ra với:');
        }

        move(deltaTime) {
          var pos = this.node.position;
          this.node.setPosition(pos.x + this.speed * deltaTime, pos.y, 0);
        }

        hitAnnounce() {
          console.log('hit');
        }

        addMethodReturnToPool(callback) {
          this.returnToPool = callback;
        }

        onDisable() {// let myCollider = this.getComponent(BoxCollider2D);
          // if (myCollider) {
          //     myCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7732de6fcebdaa78974d90f905684834170122ce.js.map