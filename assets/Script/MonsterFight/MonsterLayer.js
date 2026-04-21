mEmitter = require("mEmitter");
const { MonsterEventType } = require("./Constants");

const monsterPosition = cc.Vec2(600, -10)

cc.Class({
    extends: cc.Component,

    properties: {
        monster: cc.Node,
    },

    onLoad () {
        mEmitter.instance.registerEvent(MonsterEventType.HIT, this.onHit.bind(this), this);
    },

    onHit(damage) {
        this.monster.onHit(damage);
    },

    onDestroy() {
        mEmitter.instance.removeAllEvent(this);
    }
});
