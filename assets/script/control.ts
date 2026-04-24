import { _decorator, Component } from 'cc';
import { mEmitter } from './mEmitter';
import { EventListenerType, EventType, GameScreenState, GameStateType } from './constants';
import { GameState } from './gameState';
const { ccclass, property } = _decorator;

@ccclass('Control')
export class Control extends Component {
    protected onLoad(): void {
        new mEmitter();

    }
    
    setLobby(event: any) {
        mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
    }

    setPlaying() {
        mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.PLAYING);
    }

    pauseGame() {
        mEmitter.instance.emit(GameStateType.TOGGLEPAUSE);
    }

    onClickHoli(){
        new GameState();
        let temp = GameState.instance.popupNode;
        if (temp){
            temp.active = !temp.active;
        }

    }

    returnToLobby() {
        mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
        this.pauseGame();
    }

    clear(){
        this.node.destroy();
    }
}

