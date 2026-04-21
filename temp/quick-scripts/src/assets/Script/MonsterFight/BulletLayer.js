"use strict";
cc._RF.push(module, '1a1b2omrpFNXIa65MLpLVa7', 'BulletLayer');
// Script/MonsterFight/BulletLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    CharacterEventType = _require.CharacterEventType;

cc.Class({
  "extends": cc.Component,
  properties: {
    bulletItem: [cc.Prefab],
    posFire: cc.Node,
    "char": cc.Node
  },
  ctor: function ctor() {
    this.isReload = false;
  },
  onLoad: function onLoad() {
    new mEmitter();
    mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.createBullet.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.finishReload.bind(this), this);
  },
  onClick: function onClick() {
    this.createBullet();
  },
  createBullet: function createBullet() {
    if (this.isReload) return;
    this.isReload = true;
    var bulletID = Math.floor(Math.random() * this.bulletItem.length);
    var bullet = cc.instantiate(this.bulletItem[bulletID]);
    console.log('create type: ', bulletID);
    bullet.setPosition(this.node.convertToNodeSpaceAR(this.posFire.convertToWorldSpaceAR(cc.Vec2(0, 0))));
    bullet.parent = this.node;
    bullet.initData(bulletID);
  },
  finishReload: function finishReload() {
    this.isReload = false;
  }
});

cc._RF.pop();