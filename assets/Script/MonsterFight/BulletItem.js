mEmitter = require("mEmitter");

const BulletProps = {
    0: {
        damage: 10,
        speed: 500,
    },
    1: {
        damage: 50,
        speed: 100,
    },
    2: {
        damage: 20,
        speed: 350,
    },
    3: {
        damage: 5,
        speed: 600,
    },
    4: {
        damage: 70,
        speed: 200,
    },
}


cc.Class({
    extends: cc.Component,

    ctor() {
        this.damage = 10;
        this.speed = 500;
        this.maxLength = 1500;
        this.posX = 0;
    },

    onLoad() {
        this.posX = this.node.x;
        this.node.initData = this.initData.bind(this);
        console.log(this);
    },

    update(dt) {
        this.onMove(dt);
    },

    onCollisionEnter: function (other, self) {
        this.node.destroy();
        mEmitter.instance.emit("HIT", this.damage);
    },

    onMove(dt) {
        this.node.x += this.speed * dt;
        if (this.node.x - this.posX > this.maxLength) {
            this.node.destroy();
        }

    },

    initData(bulletID) {
        let bullet = BulletProps[bulletID];
        this.damage += bullet.damage;
        this.speed += bullet.speed;
    }

});
