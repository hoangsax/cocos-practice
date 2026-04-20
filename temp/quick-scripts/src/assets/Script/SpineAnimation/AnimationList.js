"use strict";
cc._RF.push(module, 'd5d1e9hlOZGjLJ62vVFib+6', 'AnimationList');
// Script/SpineAnimation/AnimationList.js

"use strict";

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
    console.log(spines);
    this.node.removeAllChildren();

    for (var i = 0; i < spines.length; i++) {
      {
        if (!!spines[i].active) {
          this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
          console.log('a');
          break;
        }
      }
    } // this.animations = spines[0].active ? spines[0].getComponent("sp.Skeleton")._skeleton.data.animations : [];


    var animationsLength = this.animations.length ? this.animations.length : 0;

    for (var _i = 0; _i < animationsLength; _i++) {
      var button = cc.instantiate(this.animationItem);
      button.parent = this.node;
      button.children[0].children[0].getComponent("cc.Label").string = this.animations[_i].name;
      button.name = this.animations[_i].name;
    }
  }
});

cc._RF.pop();