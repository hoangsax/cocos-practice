System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, SceneName, AudioManager, PopupManager, _dec, _class, _crd, ccclass, property, TitleScreen;

  function _reportPossibleCrUseOfSceneName(extras) {
    _reporterNs.report("SceneName", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../popup/popupManager", _context.meta, extras);
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
      SceneName = _unresolved_2.SceneName;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      PopupManager = _unresolved_4.PopupManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e678emH991A8rgXqlOaeJjy", "titleScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TitleScreen", TitleScreen = (_dec = ccclass('TitleScreen'), _dec(_class = class TitleScreen extends Component {
        clickPlay() {
          this.playSFX();
          director.loadScene((_crd && SceneName === void 0 ? (_reportPossibleCrUseOfSceneName({
            error: Error()
          }), SceneName) : SceneName).MAIN);
        }

        clickSetting() {
          this.playSFX();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.showSettingPopup();
        }

        playSFX() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSFX();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a659aad8541bd89f6e948089d064f0cc6ffa8d1e.js.map