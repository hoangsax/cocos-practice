System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Pooling, mEmitter, GameCommand, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BulletManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPooling(extras) {
    _reporterNs.report("Pooling", "../pooling", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "../mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCommand(extras) {
    _reporterNs.report("GameCommand", "../constants", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Pooling = _unresolved_2.Pooling;
    }, function (_unresolved_3) {
      mEmitter = _unresolved_3.mEmitter;
    }, function (_unresolved_4) {
      GameCommand = _unresolved_4.GameCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9cb66jaKNdKEqp3ac1hjfqW", "manager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Node', 'Vec3', 'instantiate', 'BoxCollider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletManager", BulletManager = (_dec = ccclass('BulletManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = class BulletManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bulletPrefab", _descriptor, this);

          this._colliderBox = void 0;
          this.bulletPool = new (_crd && Pooling === void 0 ? (_reportPossibleCrUseOfPooling({
            error: Error()
          }), Pooling) : Pooling)();
        }

        onLoad() {
          this.node.createBullet = this.createBullet.bind(this);
          this.node.resetState = this.resetState.bind(this);
        }

        onEnable() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
            error: Error()
          }), GameCommand) : GameCommand).RESTART, this.resetState.bind(this), this.node);
        }

        createBullet(firePosition) {
          let bullet = this.bulletPool.get(this.bulletPrefab, this.node);
          bullet.setPosition(firePosition.worldPosition.x - this.node.worldPosition.x, firePosition.worldPosition.y - this.node.worldPosition.y);
          bullet.addMethodReturnToPool(this.returnToPool.bind(this));
          bullet.active = true;
        }

        returnToPool(instance) {
          this.bulletPool.return(this.bulletPrefab, instance); // this.node.removeChild(instance);
        }

        resetState() {
          this.node.children.forEach(child => {
            child.active = false;
          });
        }

        onDestroy() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.removeAllEvent(this.node);
        }

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
//# sourceMappingURL=29d4098948216fb5aa704fa2f449cb8d3a93f623.js.map