"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineInspector');
// Script/SpineAnimation/SpineInspector.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
  },
  setAnimation: function setAnimation(data) {
    this.node.children[0].getComponent(sp.Skeleton).setAnimation(0, data, true);
  }
});

cc._RF.pop();