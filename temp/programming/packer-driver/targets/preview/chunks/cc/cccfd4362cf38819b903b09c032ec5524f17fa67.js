System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mEmitter, EventListenerType, GameScreenState, GameStateType, GameState, _dec, _class, _crd, ccclass, property, Control;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListenerType(extras) {
    _reporterNs.report("EventListenerType", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScreenState(extras) {
    _reporterNs.report("GameScreenState", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./gameState", _context.meta, extras);
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
      GameStateType = _unresolved_3.GameStateType;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "control", undefined);

      __checkObsolete__(['_decorator', 'Component']);

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

        setLobby(event) {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventListenerType === void 0 ? (_reportPossibleCrUseOfEventListenerType({
            error: Error()
          }), EventListenerType) : EventListenerType).SET_LAYER_STATE, (_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).LOBBY);
        }

        setPlaying() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventListenerType === void 0 ? (_reportPossibleCrUseOfEventListenerType({
            error: Error()
          }), EventListenerType) : EventListenerType).SET_LAYER_STATE, (_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).PLAYING);
        }

        pauseGame() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && GameStateType === void 0 ? (_reportPossibleCrUseOfGameStateType({
            error: Error()
          }), GameStateType) : GameStateType).TOGGLEPAUSE);
        }

        onClickHoli() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          var temp = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.popupNode;

          if (temp) {
            temp.active = !temp.active;
          }
        }

        returnToLobby() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventListenerType === void 0 ? (_reportPossibleCrUseOfEventListenerType({
            error: Error()
          }), EventListenerType) : EventListenerType).SET_LAYER_STATE, (_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).LOBBY);
          this.pauseGame();
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
//# sourceMappingURL=cccfd4362cf38819b903b09c032ec5524f17fa67.js.map