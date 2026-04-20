const Emitter = require("../mEmitter");

cc.Class({
    extends: cc.Component,

    properties: {
        spineNode: cc.Node,
    },

    ctor() {
        this.initialPosition = new cc.Vec3();
        this.initialScale = 1;
        this.initialAngle = 0;
    },

    onLoad() {
        this.initialPosition = this.spineNode.position.clone();
        this.initialScale = this.spineNode.scale;
        this.initialAngle = this.spineNode.rotation;
    },

    stopEverything() {
        this.spineNode.stopAllActions();
        let spine = this.spineNode.getComponent("sp.Skeleton");
        spine.setAnimation(0, "idle", true)
        cc.tween(this.spineNode).stop();
        let anim = this.getComponent("cc.Animation");
        if (anim) anim.stop();

        this.spineNode.setPosition(this.initialPosition);
        this.spineNode.scale = this.initialScale;
        this.spineNode.angle = this.initialRotation;
    },

    runAnimationClip() {
        this.stopEverything();
        this.spineNode.getComponent("cc.Animation").play("ani2", 0);
    },

    runTween() {
        this.stopEverything();
        cc.tween(this.spineNode).to(1, { scale: 2 }, { easing: 'sineOutIn' }).to(1, { scale: 1 }, { easing: 'sineOutIn' }).start();

    },

    runAction() {
        this.stopEverything();
        this.spineNode.runAction(cc.sequence(
            cc.moveTo(1, 300, 0),
            cc.moveTo(1, -300, 0),
            cc.moveTo(1, 0, 0))
        )
    }
});
