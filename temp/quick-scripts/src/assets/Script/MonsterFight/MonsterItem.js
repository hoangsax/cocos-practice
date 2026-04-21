"use strict";
cc._RF.push(module, '23bd6/+wM1CuJHWgNuWlpxR', 'MonsterItem');
// Script/MonsterFight/MonsterItem.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    MonsterEventType = _require.MonsterEventType;

var monsterProps = {
  hp: 1000,
  speed: 400,
  minY: -360,
  maxY: 360
};
cc.Class({
  "extends": cc.Component,
  properties: {
    HpBar: cc.ProgressBar
  },
  ctor: function ctor() {
    this.hp = monsterProps.hp;
    this.speed = monsterProps.speed;
    this.isUp = false;
  },
  onLoad: function onLoad() {
    this.node.onHit = this.onHit.bind(this);
  },
  update: function update(dt) {
    this.move(dt);
  },
  move: function move(dt) {
    this.node.y += this.isUp ? this.speed * dt : -this.speed * dt;

    if (this.node.y < -360) {
      this.node.y = -360;
      this.isUp = true;
    } else if (this.node.y > 360) {
      this.node.y = 360;
      this.isUp = false;
    }
  },
  onHit: function onHit(damage) {
    this.hp -= damage;
    this.HpBar.progress = this.hp / monsterProps.hp;

    if (this.hp <= 0) {
      this.node.destroy();
    }
  }
});

cc._RF.pop();