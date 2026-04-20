"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'Item');
// Script/SpineAnimation/Item.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onClick: function onClick() {
    Emitter.instance.emit('SET_ANIMATION', this.node.name);
  },
  playAnimationClip: function playAnimationClip() {
    Emitter.instance.emit('ANIMATION_CLIP', this.node.name);
  }
});

cc._RF.pop();