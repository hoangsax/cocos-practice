"use strict";
cc._RF.push(module, 'c214b5CDTpErLxEIV7hgLuH', 'BulletItem');
// Script/MonsterFight/BulletItem.js

"use strict";

mEmitter = require("mEmitter");
var BulletProps = {
  0: {
    damage: 10,
    speed: 500
  },
  1: {
    damage: 50,
    speed: 100
  },
  2: {
    damage: 20,
    speed: 350
  },
  3: {
    damage: 5,
    speed: 600
  },
  4: {
    damage: 70,
    speed: 200
  }
};
cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.damage = 10;
    this.speed = 500;
    this.maxLength = 1500;
    this.posX = 0;
  },
  onLoad: function onLoad() {
    this.posX = this.node.x;
    this.node.initData = this.initData.bind(this);
    console.log(this);
  },
  update: function update(dt) {
    this.onMove(dt);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.destroy();
    mEmitter.instance.emit("HIT", this.damage);
  },
  onMove: function onMove(dt) {
    this.node.x += this.speed * dt;

    if (this.node.x - this.posX > this.maxLength) {
      this.node.destroy();
    }
  },
  initData: function initData(bulletID) {
    var bullet = BulletProps[bulletID];
    this.damage += bullet.damage;
    this.speed += bullet.speed;
  }
});

cc._RF.pop();