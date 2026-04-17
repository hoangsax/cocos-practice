"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'ItemScript');
// Script/SpineAnimation/ItemScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onClick: function onClick() {
    Emitter.instance.emit('SET_ANIMATION', this.node.name);
  }
});

cc._RF.pop();