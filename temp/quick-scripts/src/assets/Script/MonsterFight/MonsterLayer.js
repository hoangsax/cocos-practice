"use strict";
cc._RF.push(module, 'caf1fqUbtdKVY1VGjC2cjGg', 'MonsterLayer');
// Script/MonsterFight/MonsterLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    MonsterEventType = _require.MonsterEventType;

var monsterPosition = cc.Vec2(600, -10);
cc.Class({
  "extends": cc.Component,
  properties: {
    monster: cc.Node
  },
  onLoad: function onLoad() {
    mEmitter.instance.registerEvent(MonsterEventType.HIT, this.onHit.bind(this), this);
  },
  onHit: function onHit(damage) {
    this.monster.onHit(damage);
  },
  onDestroy: function onDestroy() {
    mEmitter.instance.removeAllEvent(this);
  }
});

cc._RF.pop();