System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, _dec, _class, _crd, ccclass, property, Pooling;

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

      _export("Pooling", Pooling = (_dec = ccclass('Pooling'), _dec(_class = class Pooling extends Component {
        constructor() {
          super(...arguments);
          this.instancePool = new Map();
        }

        get(prefab) {
          if (!this.instancePool.has(prefab)) {
            this.instancePool.set(prefab, []);
          }

          var instances = this.instancePool.get(prefab);

          if (instances.length > 0) {
            return instances.pop();
          }

          return instantiate(prefab);
        }

        return(prefab, instance) {
          var instances = this.instancePool.get(prefab);
          instances.push(instance);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1d19eedd0661fbc0f5eed89da08d71633e0dbba.js.map