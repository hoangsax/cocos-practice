Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        buttonScript: cc.Node,
    },

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
    },

    setAnimation(data) {
        this.buttonScript.getComponent("AnimationHandler").stopEverything();
        this.node.children[0].getComponent(sp.Skeleton).setAnimation(0, data, true);
    },
});
