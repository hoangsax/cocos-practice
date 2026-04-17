const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        spineManger: cc.Node,
        animationItem: cc.Prefab,
    },

    ctor() {
        this.animations = [];
    },
    onLoad () {
        let spines = this.spineManger.children;
        this.node.removeAllChildren();
        console.log(spines)
        this.animations = spines[0].active ? spines[0].getComponent("sp.Skeleton")._skeleton.data.animations : [];
        let animationsLength = this.animations.length? this.animations.length : 0;
        for (let i = 0; i < animationsLength; i++){
            const item = cc.instantiate(this.animationItem);
            item.parent = this.node;
            item.children[0].children[0].getComponent("cc.Label").string = this.animations[i].name;
            item.name = this.animations[i].name;
            console.log(item);
        }
    },
});
