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

      __checkObsolete__(['_decorator', 'Component', 'director', 'game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameState", GameState = (_dec = ccclass('GameState'), _dec(_class = (_class2 = class GameState {
        constructor() {
          this._isPause = false;
          this._music = void 0;
          this._isShowPopup = void 0;
          this._popupNode = void 0;
          this._root = void 0;
          console.log(director.getScene());
          this._music = true;
          this._isShowPopup = false;

          if (GameState.instance) {
            GameState.instance.setPopupParent();
            console.log(GameState.instance);
            return GameState.instance;
          }

          this._isPause = false;
          GameState.instance = this;
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

        setPopupParent() {
          if (this._popupNode) {
            console.log('set');
            this._popupNode.parent = director.getScene().getChildByName('Canvas');
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
//# sourceMappingURL=f23074831b1af5aef9df9c9e9740674e5898cc47.js.map