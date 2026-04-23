System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, BoxCollider2D, Contact2DType, Pooling, _dec, _class, _class2, _descriptor, _crd, ccclass, property, BulletController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPooling(extras) {
    _reporterNs.report("Pooling", "../pooling", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      Pooling = _unresolved_2.Pooling;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70eeanyBVxIObORcYIuA60H", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'BoxCollider2D', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletController", BulletController = (_dec = ccclass('BulletController'), _dec(_class = (_class2 = class BulletController extends (_crd && Pooling === void 0 ? (_reportPossibleCrUseOfPooling({
        error: Error()
      }), Pooling) : Pooling) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);
        }

        onLoad() {
          this.node.initData = this.initData.bind(this);
          console.log(this.node);
          var collider = this.node.getComponent(BoxCollider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, () => {
              console.log('hit');
            }, this);
          }
        }

        start() {}

        update(deltaTime) {
          if (this.node.position.y > 1000) {
            this.node.active = false;
            this.node.parent = null;
          }

          this.move();
        }

        initData(startPos) {
          if (startPos === void 0) {
            startPos = new Vec3(0, 0, 0);
          }

          this.node.setPosition(startPos);
          this.node.active = true;
        }

        move() {
          var pos = this.node.position;
          this.node.setPosition(pos.x + this.speed, pos.y, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71f386d4a3af45f8e6e4ff3d6765255822a87ab8.js.map