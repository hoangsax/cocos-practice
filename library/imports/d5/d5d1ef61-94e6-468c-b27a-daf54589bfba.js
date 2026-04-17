"use strict";
cc._RF.push(module, 'd5d1e9hlOZGjLJ62vVFib+6', 'AnimationList');
// Script/SpineAnimation/AnimationList.js

"use strict";

var Emitter = require('mEmitter');

cc.Class({
  "extends": cc.Component,
  properties: {
    spineManger: cc.Node,
    animationItem: cc.Prefab
  },
  ctor: function ctor() {
    this.animations = [];
  },
  onLoad: function onLoad() {
    var spines = this.spineManger.children;
    this.node.removeAllChildren();
    console.log(spines);
    this.animations = spines[0].active ? spines[0].getComponent("sp.Skeleton")._skeleton.data.animations : [];
    var animationsLength = this.animations.length ? this.animations.length : 0;

    for (var i = 0; i < animationsLength; i++) {
      var item = cc.instantiate(this.animationItem);
      item.parent = this.node;
      item.children[0].children[0].getComponent("cc.Label").string = this.animations[i].name;
      item.name = this.animations[i].name;
      console.log(item);
    }
  }
});

cc._RF.pop();