System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, GameState, PopupManager, mEmitter, GameCommand, SceneName, _dec, _class, _crd, ccclass, property, PausePopup;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../gameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./popupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "../mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCommand(extras) {
    _reporterNs.report("GameCommand", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneName(extras) {
    _reporterNs.report("SceneName", "../constants", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      PopupManager = _unresolved_3.PopupManager;
    }, function (_unresolved_4) {
      mEmitter = _unresolved_4.mEmitter;
    }, function (_unresolved_5) {
      GameCommand = _unresolved_5.GameCommand;
      SceneName = _unresolved_5.SceneName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5298dXa7sBA65d2k7y0j53m", "pause", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PausePopup", PausePopup = (_dec = ccclass('PausePopup'), _dec(_class = class PausePopup extends Component {
        resume() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.togglePause();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.hidePopup();
        }

        restart() {
          this.resume();
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
            error: Error()
          }), GameCommand) : GameCommand).RESTART);
        }

        exit() {
          this.resume();
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
            error: Error()
          }), GameCommand) : GameCommand).END);
          director.loadScene((_crd && SceneName === void 0 ? (_reportPossibleCrUseOfSceneName({
            error: Error()
          }), SceneName) : SceneName).ROOT);
        }

        setting() {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.showSettingPopup();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a401acf1767d587d22e9098c1619480dec05d2cd.js.map