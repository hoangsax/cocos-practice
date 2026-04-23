System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, _dec, _class, _crd, ccclass, property, pooling;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9795b0IVL1AkLvOZRPGUZz+", "pooling", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pooling", pooling = (_dec = ccclass('pooling'), _dec(_class = class pooling extends Component {
        constructor(...args) {
          super(...args);
          this.instancePool = new Map();
        }

        get(prefab) {
          if (!this.instancePool.has(prefab)) {
            this.instancePool.set(prefab, []);
          }

          let instances = this.instancePool.get(prefab);

          if (instances.length > 0) {
            return instances.pop();
          }

          return instantiate(prefab);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd9bd882ffb166532592947b4b3453e5f0232f0e.js.map