System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MoveDirection, CharacterEventType, animations, GameStateType, ScreenName, GameCommand;

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

      _export("ScreenName", ScreenName = {
        ROOT: 'ROOT',
        LOADING: 'loading',
        LOBBY: 'lobby',
        MAIN: 'mainGame',
        TITLE: 'titleScreen'
      });

      _export("GameCommand", GameCommand = {
        START: 'START',
        END: 'END'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb815962b9ab50534ce362b2de5a334f5e62b0c1.js.map