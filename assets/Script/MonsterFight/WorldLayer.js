const { MoveDirection, CharacterEventType } = require("./Constants");
mEmitter = require("mEmitter");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        new mEmitter();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onPressKey, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onPressKey, this);
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },

    onPressKey(event) {
        const moveType = event.type === cc.SystemEvent.EventType.KEY_DOWN? CharacterEventType.MOVE : CharacterEventType.STOP;
        const shootType = event.type === cc.SystemEvent.EventType.KEY_DOWN ? CharacterEventType.SHOOT : CharacterEventType.RELOAD;
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                mEmitter.instance.emit(moveType, MoveDirection.LEFT);
                break;
            case cc.macro.KEY.d:
                mEmitter.instance.emit(moveType, MoveDirection.RIGHT);
                break;
            case cc.macro.KEY.w:
                mEmitter.instance.emit(moveType, MoveDirection.UP);
                break;
            case cc.macro.KEY.s:
                mEmitter.instance.emit(moveType, MoveDirection.DOWN);
                break;
            case cc.macro.KEY.space:
                mEmitter.instance.emit(shootType);
                break;
        }
    }
});
