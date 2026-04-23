System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventType, GameScreenState, EventListenerType, MoveDirection, CharacterEventType, animations, GameState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b857b0sjtAR6QLWR3m8aas", "constants", undefined);

      _export("EventType", EventType = {
        DISABLE: 'DISABLE',
        ENABLE: 'ENABLE'
      });

      _export("GameScreenState", GameScreenState = {
        LOBBY: 'LOBBY',
        PLAYING: 'PLAYING',
        POPUP: 'POPUP'
      });

      _export("EventListenerType", EventListenerType = {
        SET_GAME_STATE: 'SET_GAME_STATE'
      });

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
        shoot: "shoot"
      });

      _export("GameState", GameState = {
        PAUSE: "PAUSE",
        UNPAUSE: "UNPAUSE"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7c6578eb2a73adc5953a8f07f6cb2638733352b.js.map