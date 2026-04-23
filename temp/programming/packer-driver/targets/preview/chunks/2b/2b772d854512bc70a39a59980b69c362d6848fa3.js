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

          var returnInstance = instantiate(prefab);
          returnInstance.parent = this.node;
          return returnInstance;
        }

        return(prefab, instance) {
          // instance.parent = null;
          var instances = this.instancePool.get(prefab);
          instances.push(instance);
          console.log(this.instancePool);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b772d854512bc70a39a59980b69c362d6848fa3.js.map