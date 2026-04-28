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

      __checkObsolete__(['_decorator', 'Component', 'game', 'Node', 'director']);

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
          this._music = true;
          this._isShowPopup = false;

          if (GameState.instance) {
            return GameState.instance;
          }

          this._isPause = false;
          GameState.instance = this; // var fsm = new StateMachine({
          //     init: 'solid',
          //     transitions: [
          //         { name: 'loading', from: '*', to: '*' },
          //         // { name: 'freeze', from: 'liquid', to: 'solid' },
          //         // { name: 'vaporize', from: 'liquid', to: 'gas' },
          //         // { name: 'condense', from: 'gas', to: 'liquid' }
          //     ],
          //     methods: {
          //         onLoading: function () { console.log('I melted') },
          //         // onFreeze: function () { console.log('I froze') },
          //         // onVaporize: function () { console.log('I vaporized') },
          //         // onCondense: function () { console.log('I condensed') }
          //     }
          // });
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
          this._popupNode.parent = director.getScene() ? director.getScene().parent : this.popupNode.parent;
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
//# sourceMappingURL=f94f9593d42b426737d8f7037d96fc9b74b8f432.js.map