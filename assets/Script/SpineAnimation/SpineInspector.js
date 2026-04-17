Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));

    },

    setAnimation(data) {
        this.node.children[0].getComponent(sp.Skeleton).setAnimation(0, data, true);
    },
});
