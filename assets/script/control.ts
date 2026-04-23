import { _decorator, Component, Node, input, Input, Event} from 'cc';
import { mEmitter } from './mEmitter';
import { EventListenerType, EventType, GameScreenState, GameState } from './constants';
const { ccclass, property } = _decorator;

@ccclass('Control')
export class Control extends Component {
    protected onLoad(): void {
        new mEmitter();

    }
    
    setLobby(event: any) {
        mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
        console.log("click enable")
    }

    setPlaying() {
        mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.PLAYING);
        console.log("click disable")
    }

    pauseGame() {
        mEmitter.instance.emit(GameState.PAUSE, );
    }

    unPauseGame() {
        mEmitter.instance.emit(GameState.UNPAUSE, GameScreenState.LOBBY);
    }


    onClickHoli(){
        // mEmitter.instance.emit("HOLI");
        console.log("click holi")
    }

    clear(){
        this.node.destroy();
    }
}

