mEmitter = require("mEmitter");

const { MonsterEventType } = require("./Constants");

const monsterProps = {
    hp: 1000,
    speed: 400,
    minY: -360,
    maxY: 360,
}

cc.Class({
    extends: cc.Component,

    properties: {
        HpBar: cc.ProgressBar,
    },

    ctor(){
        this.hp = monsterProps.hp;
        this.speed = monsterProps.speed;
        this.isUp = false;
    },

    onLoad () {
        this.node.onHit = this.onHit.bind(this);
    },

    update(dt) {
        this.move(dt);
    },

    move(dt){
        this.node.y += this.isUp ? this.speed * dt : -this.speed * dt;
        if (this.node.y < -360){
            this.node.y = -360;
            this.isUp = true;
        }
        else if (this.node.y > 360){
            this.node.y = 360;
            this.isUp = false;
        }
    },

    onHit(damage) {
        this.hp -= damage;
        this.HpBar.progress = this.hp / monsterProps.hp;
        if (this.hp <= 0) {
            this.node.destroy();
        }
    }
});
