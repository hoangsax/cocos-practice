System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MoveDirection, CharacterEventType, animations, GameStateType, SceneName, GameCommand, EmitterEventType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b857b0sjtAR6QLWR3m8aas", "constants", undefined);

      _export("MoveDirection", MoveDirection = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
      });

      _export("CharacterEventType", CharacterEventType = {
        MOVE: 'MOVE',
        STOP: 'STOP',
        SHOOT: 'SHOOT',
        RELOAD: 'RELOAD'
      });

      _export("animations", animations = {
        walk: "walk",
        idle: "idle",
        run: "run",
        shoot: "shoot",
        portal: "portal"
      });

      _export("GameStateType", GameStateType = {
        TOGGLEPAUSE: "TOGGLEPAUSE",
        UNPAUSE: "UNPAUSE"
      });

      _export("SceneName", SceneName = {
        ROOT: 'ROOT',
        LOADING: 'loading',
        LOBBY: 'lobby',
        MAIN: 'mainGame',
        TITLE: 'titleScreen'
      });

      _export("GameCommand", GameCommand = {
        START: 'START',
        END: 'END',
        RESTART: 'RESTART'
      });

      _export("EmitterEventType", EmitterEventType = {
        POPUP: {
          SETTING: 'SETTING',
          RESULT: 'RESULT'
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86d1f30a269ccc56eef8f6fe387729a2eaaaadf3.js.map