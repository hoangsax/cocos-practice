System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mEmitter, _dec, _class, _crd, ccclass, property, CharacterManager;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
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
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9757cOa4JtIsJSFEyPQ5Bus", "CharacterManager", undefined);

      __checkObsolete__(['_decorator', 'CCObject', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CharacterManager", CharacterManager = (_dec = ccclass('CharacterManager'), _dec(_class = class CharacterManager extends Component {
        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)(); // mEmitter.instance.registerEvent(EventType.DISABLE, this.toEnable.bind(this), this.node);
          // mEmitter.instance.registerEvent(EventType.ENABLE, this.toEnable.bind(this), this.node);

          console.log("finish manager");
        }

        start() {}

        update(deltaTime) {}

        toEnable(event) {
          console.log(event);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97620f659efa4140457f76fb1a18a40880883906.js.map