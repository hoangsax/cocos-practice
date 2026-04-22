System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, LobbyMananger;

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

      _cclegacy._RF.push({}, "679f9NT7MBMrYvVCeVOOKhA", "LobbyMananger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LobbyMananger", LobbyMananger = (_dec = ccclass('LobbyMananger'), _dec(_class = class LobbyMananger extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d56a92d267878b7870f0694bcd9cb776ba2d3f76.js.map