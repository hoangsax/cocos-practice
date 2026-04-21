"use strict";
cc._RF.push(module, '2524599u4pICYb5CMjgDAtu', 'WorldLayer');
// Script/MonsterFight/WorldLayer.js

"use strict";

var _require = require("./Constants"),
    MoveDirection = _require.MoveDirection,
    CharacterEventType = _require.CharacterEventType;

mEmitter = require("mEmitter");
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    new mEmitter();
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onPressKey, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onPressKey, this);
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
  },
  onPressKey: function onPressKey(event) {
    var moveType = event.type === cc.SystemEvent.EventType.KEY_DOWN ? CharacterEventType.MOVE : CharacterEventType.STOP;
    var shootType = event.type === cc.SystemEvent.EventType.KEY_DOWN ? CharacterEventType.SHOOT : CharacterEventType.RELOAD;

    switch (event.keyCode) {
      case cc.macro.KEY.a:
        mEmitter.instance.emit(moveType, MoveDirection.LEFT);
        break;

      case cc.macro.KEY.d:
        mEmitter.instance.emit(moveType, MoveDirection.RIGHT);
        break;

      case cc.macro.KEY.w:
        mEmitter.instance.emit(moveType, MoveDirection.UP);
        break;

      case cc.macro.KEY.s:
        mEmitter.instance.emit(moveType, MoveDirection.DOWN);
        break;

      case cc.macro.KEY.space:
        mEmitter.instance.emit(shootType);
        break;
    }
  }
});

cc._RF.pop();