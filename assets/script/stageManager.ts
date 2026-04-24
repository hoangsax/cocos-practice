import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode } from 'cc';
import { mEmitter } from './mEmitter';
import { CharacterEventType, MoveDirection } from './constants';
import { GameState } from './gameState';
const { ccclass, property } = _decorator;

@ccclass('stageManager')
export class stageManager extends Component {
    protected onLoad(): void {
        new mEmitter();
        new GameState();
        this.startListener();
    }

    startListener() {
        input.on(Input.EventType.KEY_DOWN, this.handlePress.bind(this), this);
        input.on(Input.EventType.KEY_UP, this.handlePress.bind(this), this);
    }

    stopListener() {
        input.off(Input.EventType.KEY_DOWN, this.handlePress.bind(this), this);
        input.off(Input.EventType.KEY_UP, this.handlePress.bind(this), this);
    }

    handlePress(event: EventKeyboard) {
        if (GameState.instance.isPause){
            return;
        }
        const moveType = event.type === Input.EventType.KEY_DOWN? CharacterEventType.MOVE : CharacterEventType.STOP;
        const shootType = event.type === Input.EventType.KEY_DOWN ? CharacterEventType.SHOOT : CharacterEventType.RELOAD;
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                mEmitter.instance.emit(moveType, MoveDirection.LEFT);
                break;
            case KeyCode.KEY_D:
                mEmitter.instance.emit(moveType, MoveDirection.RIGHT);
                break;
            case KeyCode.KEY_W:
                mEmitter.instance.emit(moveType, MoveDirection.UP);
                break;
            case KeyCode.KEY_S:
                mEmitter.instance.emit(moveType, MoveDirection.DOWN);
                break;
            case KeyCode.SPACE:
                mEmitter.instance.emit(shootType);
                break;
        }
    }

    protected onDestroy(): void {
        this.stopListener();
    }

}

