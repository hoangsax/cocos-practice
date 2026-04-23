System.register([], function (_export, _context) {
  "use strict";

  var _crd, EventType, GameScreenState, EventListenerType;

  return {
    setters: [],
    execute: function () {
      _crd = true;

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
        SET_GAME_SCREEN_STATE: 'SET_GAME_SCREEN_STATE'
      });

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5d8d2e1f39b1d9f02b1bcef10b4e3bf0713edd6.js.map