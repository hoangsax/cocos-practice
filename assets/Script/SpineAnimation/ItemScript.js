cc.Class({
    extends: cc.Component,

    onClick () {
        Emitter.instance.emit('SET_ANIMATION', this.node.name);
    },
});
