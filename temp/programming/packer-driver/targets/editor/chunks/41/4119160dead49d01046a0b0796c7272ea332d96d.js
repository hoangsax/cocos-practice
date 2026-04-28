System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameScene, EventType, GameScreenState, EventListenerType, MoveDirection, CharacterEventType, animations, GameStateType, ScreenName;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b857b0sjtAR6QLWR3m8aas", "constants", undefined);

      _export("GameScene", GameScene = {
        LOADING: 'LOADING',
        LOBBY: 'LOBBY',
        STAGE: 'STAGE'
      });

      _export("EventType", EventType = {
        DISABLE: 'DISABLE',
        ENABLE: 'ENABLE'
      });

      _export("GameScreenState", GameScreenState = {
        LOBBY: 'LOBBY',
        PLAYING: 'PLAYING',
        POPUP: 'POPUP',
        GLOBALBUTTON: 'GLOBALBUTTON'
      });

      _export("EventListenerType", EventListenerType = {
        SET_LAYER_STATE: 'SET_LAYER_STATE',
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

      _export("GameStateType", GameStateType = {
        TOGGLEPAUSE: "TOGGLEPAUSE",
        UNPAUSE: "UNPAUSE"
      });

      _export("ScreenName", ScreenName = {
        LOADING: 'LOADING',
        LOBBY: 'LOBBY',
        STAGE: 'STAGE',
        TITLE: 'TITLE'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4119160dead49d01046a0b0796c7272ea332d96d.js.map