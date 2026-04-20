cc.Class({
    extends: cc.Component,

    onClick () {
        Emitter.instance.emit('SET_ANIMATION', this.node.name);
    },

    playAnimationClip () {
        Emitter.instance.emit('ANIMATION_CLIP', this.node.name);
    }
});
