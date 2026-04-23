System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventType, GameScreenState;

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

      _export("GameScreenState", GameScreenState = {
        LOBBY: 'LOBBY',
        PLAYING: 'PLAYING',
        POPUP: 'POPUP'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b909c4a7c7225510e1fba96ca8d9ebe2d623293.js.map