System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mEmitter, EventType, _dec, _class, _crd, ccclass, property, CharacterManager;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./Constants", _context.meta, extras);
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
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
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
          let temp = new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          console.log(temp);
          console.log((_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance);
          temp.registerEvent((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).DISABLE, this.toEnable.bind(this), this.node); // mEmitter.instance.registerEvent(EventType.ENABLE, this.toEnable.bind(this), this.node);

          console.log("finish manager");
        }

        start() {}

        update(deltaTime) {}

        toEnable() {
          console.log();
        }

        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd725f739978c55104f680dac86afc2e7eaeeb2c.js.map