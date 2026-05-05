System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, GameState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1a192q/UVDsKWOzRBSuMzJ", "gameState", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Component', 'director', 'game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameState", GameState = (_dec = ccclass('GameState'), _dec(_class = (_class2 = class GameState {
        constructor() {
          this._isPause = true;
          this._music = void 0;
          this._score = void 0;
          this._isPause = false;
          this._music = true;
          this._score = 0;

          if (GameState.instance) {
            return GameState.instance;
          }

          GameState.instance = this;
        }

        get score() {
          return this._score;
        }

        set score(value) {
          this._score = value;
        }

        resetScore() {
          this._score = 0;
        }

        get isPause() {
          return this._isPause;
        }

        set isPause(value) {
          this._isPause = value;
        }

        get music() {
          return this._music;
        }

        set music(value) {
          this._music = value;
        }

        togglePause() {
          this._isPause = !this._isPause;
        }

        destroy() {
          GameState.instance = null;
        }

      }, _class2.instance = null, _class2)) || _class));

      GameState.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecaea3c622d1bf7021d543511bf609c8b644b01c.js.map