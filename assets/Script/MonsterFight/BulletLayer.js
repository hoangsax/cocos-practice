mEmitter = require("mEmitter");

const { CharacterEventType } = require("./Constants");

cc.Class({
    extends: cc.Component,

    properties: {
        bulletItem: [cc.Prefab],
        posFire: cc.Node,
        char: cc.Node,
    },

    ctor() {
        this.isReload = false;
    },

    onLoad () {
        new mEmitter;
        mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.createBullet.bind(this), this);
        mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.finishReload.bind(this), this);
    },

    onClick () {
        this.createBullet();
    },

    createBullet() {
        if (this.isReload) return;
        this.isReload = true;
        let bulletID = Math.floor(Math.random() * this.bulletItem.length);
        const bullet = cc.instantiate(this.bulletItem[bulletID]);
        console.log('create type: ', bulletID);
        bullet.setPosition(this.node.convertToNodeSpaceAR(this.posFire.convertToWorldSpaceAR(cc.Vec2(0, 0))));
        bullet.parent = this.node;
        bullet.initData(bulletID);
    },

    finishReload() {
        this.isReload = false
    }


});
