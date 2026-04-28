System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, UITransform, Pooling, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, manager;

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
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Pooling = _unresolved_2.Pooling;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b81ea5fglJNwagU8hvpM/f2", "manager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab', 'Canvas', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("manager", manager = (_dec = ccclass('manager'), _dec2 = property(Prefab), _dec3 = property(UITransform), _dec(_class = (_class2 = class manager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "monsterPrefab", _descriptor, this);

          _initializerDefineProperty(this, "nodeUI", _descriptor2, this);

          _initializerDefineProperty(this, "spawnInterval", _descriptor3, this);

          this._monsterPool = new (_crd && Pooling === void 0 ? (_reportPossibleCrUseOfPooling({
            error: Error()
          }), Pooling) : Pooling)();
          this._timer = 0;
        }

        onLoad() {
          this.spawnMonster();
        }

        update(dt) {
          this._timer += dt;

          if (this._timer >= this.spawnInterval) {
            this.spawnMonster();
            this._timer = 0;
          }
        }

        spawnMonster() {
          if (!this.monsterPrefab) return;

          const monster = this._monsterPool.get(this.monsterPrefab, this.node);

          monster.setPosition(0, Math.random() * this.nodeUI.height / 2, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "monsterPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spawnInterval", [property], {
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
//# sourceMappingURL=35b43ebf300f45e3724f159e916675f526601dd6.js.map