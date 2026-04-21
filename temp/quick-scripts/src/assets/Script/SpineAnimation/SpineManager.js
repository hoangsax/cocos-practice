"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineManager');
// Script/SpineAnimation/SpineManager.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  properties: {
    buttonScript: cc.Node
  },
  ctor: function ctor() {
    this.activeSpine = null;
  },
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
    Emitter.instance.registerEvent('SET_ANIMATION2', this.setAnimation.bind(this));
    var temp = Emitter.instance._emiter._events;
    console.log(temp);
    console.log(temp[Object.keys(temp)[0]]);
    var spines = this.node.children;

    for (var i = 0; i < spines.length; i++) {
      if (spines[i].active) {
        this.activeSpine = spines[i];
        break;
      }
    }
  },
  setAnimation: function setAnimation(data) {
    this.buttonScript.stopAll();
    this.activeSpine.getComponent(sp.Skeleton).setAnimation(0, data, true);
  },
  removeAllEvent: function removeAllEvent() {
    Emitter.instance.removeAllEvent();
  },
  onDestroy: function onDestroy() {
    Emitter.instance.removeAllEvent();
  }
});

cc._RF.pop();