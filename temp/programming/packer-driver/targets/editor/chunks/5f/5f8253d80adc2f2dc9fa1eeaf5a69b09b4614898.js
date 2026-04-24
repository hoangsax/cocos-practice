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

      __checkObsolete__(['_decorator', 'Component', 'game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameState", GameState = (_dec = ccclass('GameState'), _dec(_class = (_class2 = class GameState {
        constructor() {
          this.isPause = false;

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
//# sourceMappingURL=5f8253d80adc2f2dc9fa1eeaf5a69b09b4614898.js.map