System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventType, GameScreenState, EventListenerType, MoveDirection, CharacterEventType;

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0bcd4096fde62da30f725284275c5578871a448f.js.map