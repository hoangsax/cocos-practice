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
          this.isPause = false;
          this._popupNode = void 0;

          if (GameState.instance) {
            return GameState.instance;
          }

          this.isPause = false;
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

        get popupNode() {
          return this._popupNode;
        }

        set popupNode(value) {
          this._popupNode = value;
          this._popupNode.active = false;
          this._popupNode.parent = director.getScene() ? director.getScene().parent : this.popupNode.parent;
        }

        togglePause() {
          this.isPause = !this.isPause;
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
//# sourceMappingURL=75829d698f671fc2c1f5514c693e13cba090139e.js.map