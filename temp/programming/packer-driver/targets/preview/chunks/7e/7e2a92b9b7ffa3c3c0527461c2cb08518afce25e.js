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
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).DISABLE, this.toEnable.bind(this), this.node);
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).ENABLE, this.toEnable.bind(this), this.node);
        }

        start() {}

        update(deltaTime) {}

        toEnable(event) {
          console.log('event');
        }

        clear() {
          this.node.destroy();
        }

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
//# sourceMappingURL=7e2a92b9b7ffa3c3c0527461c2cb08518afce25e.js.map