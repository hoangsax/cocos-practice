cc.Class({
    extends: cc.Component,

    properties: {
        spineManger: cc.Node,
        animationItem: cc.Prefab,
    },

    ctor() {
        this.animations = [];
    },

    onLoad() {
        let spines = this.spineManger.children;
        this.node.removeAllChildren();
        for (let i = 0; i < spines.length; i++) {
            if (spines[i].active) {
                this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
                break;
            }
        }
        let animationsLength = this.animations.length ? this.animations.length : 0;
        for (let i = 0; i < animationsLength; i++) {
            const button = cc.instantiate(this.animationItem);
            button.parent = this.node;
            button.children[0].children[0].getComponent("cc.Label").string = this.animations[i].name;
            button.name = this.animations[i].name;
        }
    }
});
