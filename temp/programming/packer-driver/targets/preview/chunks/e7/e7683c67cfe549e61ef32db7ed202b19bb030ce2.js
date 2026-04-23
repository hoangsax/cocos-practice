System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, MonsterController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd4c8zTYj5ODKRG9l8cIYFe", "controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterController", MonsterController = (_dec = ccclass('MonsterController'), _dec(_class = class MonsterController extends Component {
        onLoad() {
          console.log(this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7683c67cfe549e61ef32db7ed202b19bb030ce2.js.map