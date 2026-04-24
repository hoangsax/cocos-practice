System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Vec3, Pooling, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BulletManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPooling(extras) {
    _reporterNs.report("Pooling", "../pooling", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletNode(extras) {
    _reporterNs.report("BulletNode", "./controller", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Pooling = _unresolved_2.Pooling;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9cb66jaKNdKEqp3ac1hjfqW", "manager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Node', 'Vec3', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletManager", BulletManager = (_dec = ccclass('BulletManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = class BulletManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bulletPrefab", _descriptor, this);

          // @property(Node)
          // posFire: Node;
          this.bulletPool = new (_crd && Pooling === void 0 ? (_reportPossibleCrUseOfPooling({
            error: Error()
          }), Pooling) : Pooling)();
        }

        onEnable() {// mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.createBullet.bind(this), this.node);
        }

        createBullet(posFire) {
          let bullet = this.bulletPool.get(this.bulletPrefab);
          bullet.setParent(this.node);
          bullet.active = true;
          console.log(bullet);
          bullet.setPosition(new Vec3(posFire.worldPosition.x - this.node.worldPosition.x, posFire.worldPosition.y - this.node.worldPosition.y, 0));
          bullet.addMethodReturnToPool(this.returnToPool.bind(this));
        }

        returnToPool(instance) {
          this.bulletPool.return(this.bulletPrefab, instance);
        } // protected onDisable(): void {
        //     mEmitter.instance.removeAllEvent(this.node);
        // }
        // protected onDestroy(): void {
        //     mEmitter.instance.removeAllEvent(this.node);
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
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
//# sourceMappingURL=d645a14062798f3d89fb7c5fad0548713607b241.js.map