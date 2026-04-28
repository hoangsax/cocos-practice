System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, GameState, ScreenName, _dec, _class, _crd, ccclass, property, TitleScreen;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../gameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenName(extras) {
    _reporterNs.report("ScreenName", "../constants", _context.meta, extras);
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
      ScreenName = _unresolved_3.ScreenName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e678emH991A8rgXqlOaeJjy", "titleScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TitleScreen", TitleScreen = (_dec = ccclass('TitleScreen'), _dec(_class = class TitleScreen extends Component {
        start() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)(); // GameState.instance.popupNode.parent = this.node.parent;
        }

        clickPlay() {
          director.loadScene((_crd && ScreenName === void 0 ? (_reportPossibleCrUseOfScreenName({
            error: Error()
          }), ScreenName) : ScreenName).MAIN);
        }

        clickSetting() {
          console.log('click setting');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6703eb115cd52defe154fcd7ddde6d54ff15713.js.map