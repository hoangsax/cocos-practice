System.register(["__unresolved_0", "cc", "javascript-state-machine"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, StateMachine, _dec, _class, _class2, _crd, ccclass, property, GameState;

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "javascript-state-machine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_javascriptStateMachine) {
      StateMachine = _javascriptStateMachine.StateMachine;
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
          GameState.instance = this;
          var fsm = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine)({
            init: 'solid',
            transitions: [{
              name: 'loading',
              from: '*',
              to: '*'
            } // { name: 'freeze', from: 'liquid', to: 'solid' },
            // { name: 'vaporize', from: 'liquid', to: 'gas' },
            // { name: 'condense', from: 'gas', to: 'liquid' }
            ],
            methods: {
              onLoading: function onLoading() {
                console.log('I melted');
              } // onFreeze: function () { console.log('I froze') },
              // onVaporize: function () { console.log('I vaporized') },
              // onCondense: function () { console.log('I condensed') }

            }
          });
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
//# sourceMappingURL=d3bdf78f48d0a6d791b3b3c9f2d5ea2d10279090.js.map