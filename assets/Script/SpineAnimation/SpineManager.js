Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        buttonScript: cc.Node,
    },

    ctor() {
        this.activeSpine = null;
    },

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
        Emitter.instance.registerEvent('SET_ANIMATION2', this.setAnimation.bind(this));
        let temp = Emitter.instance._emiter._events;
        console.log(temp);
        console.log(temp[Object.keys(temp)[0]]);
        let spines = this.node.children;
        for (let i = 0; i < spines.length; i++) {
            if (spines[i].active) {
                this.activeSpine = spines[i];
                break;
            }
        }
    },

    setAnimation(data) {
        this.buttonScript.stopAll();
        this.activeSpine.getComponent(sp.Skeleton).setAnimation(0, data, true);
    },

    removeAllEvent() {
        Emitter.instance.removeAllEvent();
    },

    onDestroy() {
        Emitter.instance.removeAllEvent();
    }
});
