mEmitter = require("mEmitter");
const { CharacterEventType } = require("./Constants");
cc.Class({
    extends: cc.Component,

    properties: {
        Char: cc.Node,
    },

    onLoad() {
        new mEmitter();
        mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this);
        mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this);
        mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this);
        mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this);
    },

    onPressMove(direction) {
        this.Char.onPressMove(direction);
    },

    onPressStop(direction) {
        this.Char.onPressStop(direction);
    },

    onPressShoot() {
        this.Char.onShoot();
    },

    onReloadDone() {
        this.Char.onReloadDone();
    },
    
    onDestroy() {
        mEmitter.instance.removeAllEvent(this);
    }
});
