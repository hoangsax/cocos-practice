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
        PLAYING: 'PLAYING',
        POPUP: 'POPUP'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=645fe031cc0e5a1802d2de649e729cc28f32b975.js.map