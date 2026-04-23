System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventType, GameState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b857b0sjtAR6QLWR3m8aas", "Constants", undefined);

      _export("EventType", EventType = {
        DISABLE: 'DISABLE',
        ENABLE: 'ENABLE'
      });

      _export("GameState", GameState = {
        LOBBY: 'LOBBY',
        START: 'START',
        PLAYING: 'PLAYING',
        END: 'END'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7691146f38c3049970ea8cef6efe85a55dc0e28.js.map