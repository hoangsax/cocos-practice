cc.Class({
    extends: cc.Component,
    properties: {
        char: cc.Node,
        baseSpeed: 100,
        // spine: cc.Node,
        // manaBar: cc.Node,
    },

    ctor() {
        this.position = 0;
        this.isStartWalk = 0;
        this.manaBar = null;
        this.spine = null;
    },

    checkPosition() {
        if (this.position > this.char.parent.width / 2 - 75) {
            this.position = this.char.parent.width / 2 - 75;
            return true;
        }
        if (this.position < - this.char.parent.width / 2 + 75) {
            this.position = - this.char.parent.width / 2 + 75;
            return true;
        }
        return false;
    },

    getManaValue() {
        return this.manaBar.getComponent("cc.ProgressBar").progress;
    },

    getSpeed() {
        return this.baseSpeed * (this.getManaValue() < .5 ? 0.5 : 1);
    },

    goLeft() {
        if (this.spine.scaleX > 0) this.spine.scaleX = - this.spine.scaleX;
        this.position = this.char.x - this.baseSpeed;
        this.checkPosition();
    },

    goRight() {
        if (this.spine.scaleX < 0) this.spine.scaleX = - this.spine.scaleX;
        this.position = this.char.x + this.baseSpeed;
        this.checkPosition();

    },

    checkStartWalk(value) {
        if (this.isStartWalk && !value) {
            this.startWalk();
        }
        else if (!this.isStartWalk && value) {
            this.stopWalk();
        }
    },

    startWalk() {
        this.spine.getComponent("sp.Skeleton").setAnimation(0, "walk", true, 0);
    },

    stopWalk() {
        this.spine.getComponent("sp.Skeleton").setAnimation(0, "idle", true, 0);
    },

    depleteMana(value) {
        if (this.manaBar.getComponent("cc.ProgressBar").progress - (value ? value / 15 : .008 / 1) < 0) {
            this.manaBar.getComponent("cc.ProgressBar").progress = 0;
        }
        else {
            this.manaBar.getComponent("cc.ProgressBar").progress -= value ? value / 15 : .008 / 15;

        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (!this.char) {
            this.char = this.node.parent;
        }
        this.spine = this.char.getChildByName("Spine");
        this.manaBar = this.char.getChildByName("ManaBar");
        this.manaBar.getComponent("cc.ProgressBar").progress = 1 // 0 - 1;
        this.position = this.char.x;
        this.char.getChildByName("Speed") && (this.char.getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());
    },

    start() {

    },
    update(dt) {
        const tempIsWalk = this.isStartWalk;
        let tempPosition = this.char.x;
        const tempSpeed = this.getSpeed();
        if (this.char.x - this.position < - 1) {
            tempPosition = this.char.x + .01 * tempSpeed;
            this.isStartWalk = 1;
            this.depleteMana(dt);
        }
        else if (this.char.x - this.position > 1) {
            tempPosition = this.char.x - .01 * tempSpeed;
            this.isStartWalk = 1;
            this.depleteMana(dt);
        }
        else {
            this.isStartWalk = 0;
        }
        this.char.x = tempPosition;
        this.checkStartWalk(tempIsWalk);
        if (tempSpeed !== this.getSpeed()) {
            this.char.getChildByName("Speed") && (this.char.getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());

        }
        if (this.manaBar.getComponent("cc.ProgressBar").progress <= 0) {
            this.char.active = false;
        }
    }

});
