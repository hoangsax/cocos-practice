System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mEmitter, EventListenerType, GameScreenState, _dec, _class, _crd, ccclass, property, Control;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListenerType(extras) {
    _reporterNs.report("EventListenerType", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScreenState(extras) {
    _reporterNs.report("GameScreenState", "./constants", _context.meta, extras);
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
      EventListenerType = _unresolved_3.EventListenerType;
      GameScreenState = _unresolved_3.GameScreenState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "control", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Control", Control = (_dec = ccclass('Control'), _dec(_class = class Control extends Component {
        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
        }

        start() {}

        update(deltaTime) {}

        setLobby(event) {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventListenerType === void 0 ? (_reportPossibleCrUseOfEventListenerType({
            error: Error()
          }), EventListenerType) : EventListenerType).SET_GAME_STATE, (_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).LOBBY);
          console.log("click enable");
        }

        setPlaying() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventListenerType === void 0 ? (_reportPossibleCrUseOfEventListenerType({
            error: Error()
          }), EventListenerType) : EventListenerType).SET_GAME_STATE, (_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).PLAYING);
          console.log("click disable");
        }

        onClickHoli() {
          // mEmitter.instance.emit("HOLI");
          console.log("click holi");
        }

        clear() {
          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f67f34fe147729d4c9d00937ee5cb173a6b44f9.js.map