System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, _dec, _class, _class2, _crd, ccclass, property, GameState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
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
          this._isShowPopup = void 0;
          this._popupNode = void 0;
          this._root = void 0;
          this._musicSource = void 0;
          this._isPause = false;
          this._music = true;
          this._isShowPopup = false;

          if (GameState.instance) {
            GameState.instance.setPopupParent();
            return GameState.instance;
          }

          GameState.instance = this;
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

        get popupNode() {
          return this._popupNode;
        }

        set popupNode(value) {
          this._popupNode = value;
          this._popupNode.active = false;
        }

        get root() {
          return this._root;
        }

        set root(value) {
          this._root = value;
        }

        get musicSource() {
          return this._musicSource;
        }

        set musicSource(value) {
          this._musicSource = value;
        }

        setPopupParent(value) {
          if (this._popupNode) {
            this._popupNode.parent = value ? value : director.getScene().getChildByName('Canvas');
          }
        }

        playClickSound() {
          if (this._music && this._musicSource) {
            console.log('playsound');

            this._musicSource.play();
          }
        }

        togglePopup() {
          this._popupNode.active = !this._popupNode.active;
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
//# sourceMappingURL=7f47774746995589d92861b31a8a5bed65df2fb1.js.map