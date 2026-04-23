System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mEmitter, CharacterEventType, _dec, _class, _crd, ccclass, property, CharacterManager;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "../mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEventType(extras) {
    _reporterNs.report("CharacterEventType", "../constants", _context.meta, extras);
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
      CharacterEventType = _unresolved_3.CharacterEventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9757cOa4JtIsJSFEyPQ5Bus", "manager", undefined);

      __checkObsolete__(['_decorator', 'CCObject', 'Component', 'Node', 'Prefab', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CharacterManager", CharacterManager = (_dec = ccclass('CharacterManager'), _dec(_class = class CharacterManager extends Component {
        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).MOVE, this.onPressMove.bind(this), this.node);
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).STOP, this.onPressStop.bind(this), this.node);
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).SHOOT, this.onPressShoot.bind(this), this.node);
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).RELOAD, this.onReloadDone.bind(this), this.node);
        }

        update(deltaTime) {}

        onPressMove() {}

        onPressStop() {}

        onPressShoot() {}

        onReloadDone() {}

        onDestroy() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.removeAllEvent(this.node);
          console.log((_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b67c77fdbe4b2e3161aa4acdebb9f7f3d9b6e5c7.js.map