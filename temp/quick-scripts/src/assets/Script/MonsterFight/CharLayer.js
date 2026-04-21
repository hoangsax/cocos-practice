"use strict";
cc._RF.push(module, 'fa3b6gN//NO/aYhKL6zXu+3', 'CharLayer');
// Script/MonsterFight/CharLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    CharacterEventType = _require.CharacterEventType;

cc.Class({
  "extends": cc.Component,
  properties: {
    Char: cc.Node
  },
  onLoad: function onLoad() {
    new mEmitter();
    mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this);
  },
  onPressMove: function onPressMove(direction) {
    this.Char.onPressMove(direction);
  },
  onPressStop: function onPressStop(direction) {
    this.Char.onPressStop(direction);
  },
  onPressShoot: function onPressShoot() {
    this.Char.onShoot();
  },
  onReloadDone: function onReloadDone() {
    this.Char.onReloadDone();
  },
  onDestroy: function onDestroy() {
    mEmitter.instance.removeAllEvent(this);
  }
});

cc._RF.pop();