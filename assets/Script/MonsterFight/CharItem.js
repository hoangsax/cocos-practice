const { MoveDirection } = require("./Constants");

const charProps = {
    speed: 400,
    scencePaddingLeft: 75,
    scencePaddingRight: 1000,
    scencePaddingTop: 150,
    scencePaddingBottom: 75,
}

const animations = {
    walk: "walk",
    idle: "idle",
    run: "run",
    shoot: "shoot"
}

cc.Class({
    extends: cc.Component,

    properties: {
        posFire: cc.Node,
        canvas: cc.Node,
        charSpine: sp.Skeleton,
    },

    ctor() {
        this.speed = charProps.speed;
        this.isReload = false;
        this.preReload = false;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.isMoving = false;
    },

    onLoad() {
        this.node.PosFire = this.posFire.position.clone();
        this.node.onPressMove = this.onPressMove.bind(this);
        this.node.onPressStop = this.onPressStop.bind(this);
        this.node.onShoot = this.onShoot.bind(this);
        this.node.onReloadDone = this.onReloadDone.bind(this);
        console.log(this.charSpine);
    },

    update(dt) {
        let currState = this.isMoving;
        this.onMove(dt);
        this.handleAnimation(currState);
        this.preReload = this.isReload;
    },

    setMoving(direction, isMoving = false) {
        switch (direction) {
            case MoveDirection.LEFT:
                this.isMovingLeft = isMoving;
                break;
            case MoveDirection.RIGHT:
                this.isMovingRight = isMoving;
                break;
            case MoveDirection.UP:
                this.isMovingUp = isMoving;
                break;
            case MoveDirection.DOWN:
                this.isMovingDown = isMoving;
                break;
        }
    },

    onPressMove(direction) {
        this.setMoving(direction, true);
    },

    onPressStop(direction) {
        this.setMoving(direction, false);
    },

    limitPositionOnScene() {
        if (this.node.x < -this.canvas.width / 2 + charProps.scencePaddingLeft) {
            this.node.x = -this.canvas.width / 2 + charProps.scencePaddingLeft;
        }
        if (this.node.x > this.canvas.width / 2 - charProps.scencePaddingRight) {
            this.node.x = this.canvas.width / 2 - charProps.scencePaddingRight;
        }
        if (this.node.y < -this.canvas.height / 2 + charProps.scencePaddingBottom) {
            this.node.y = -this.canvas.height / 2 + charProps.scencePaddingBottom;
        }
        if (this.node.y > this.canvas.height / 2 - charProps.scencePaddingTop) {
            this.node.y = this.canvas.height / 2 - charProps.scencePaddingTop;
        }
    },

    onMove(dt) {
        if (this.isReload) {
            return;
        }
        let moveX = 0;
        let moveY = 0;

        if (this.isMovingRight) moveX += 1;
        if (this.isMovingLeft) moveX -= 1;
        if (this.isMovingUp) moveY += 1;
        if (this.isMovingDown) moveY -= 1;

        if (moveX !== 0 || moveY !== 0) {
            this.node.x += moveX * this.speed * dt;
            this.node.y += moveY * this.speed * dt;
            this.isMoving = true;
        }
        else {
            this.isMoving = false;
        }
        this.limitPositionOnScene();
    },

    onStop() {
        this.isMoving = false;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isMovingUp = false;
        this.isMovingDown = false;
    },

    onShoot() {
        if (!this.isReload) {
            this.isReload = true;
            this.playAnimation(animations.shoot, false);
        }
    },

    onReloadDone() {
        this.isReload = false;
    },

    handleAnimation(currState) {
        if (this.isMoving && !currState) {
            this.addAnimation(animations.run)
        }
        else if (!this.isMoving && currState) {
            this.addAnimation(animations.idle)
        }
    },

    playAnimation(animationName, loop = true) {
        this.charSpine.setAnimation(0, animationName, loop, 0);
    },

    addAnimation(animationName, loop = true) {
        this.charSpine.clearTracks();
        this.charSpine.setToSetupPose();
        this.charSpine.addAnimation(0, animationName, loop, 0);
    },
});
