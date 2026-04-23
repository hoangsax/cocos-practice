import { _decorator, Component, Node } from 'cc';
import { mEmitter } from '../mEmitter';
import { EventType, CharacterEventType, GameState, EventListenerType } from '../constants';
import { CharItemNode } from './controller';

const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {

    @property(Node)
    charItemNode: CharItemNode;

    protected onLoad(): void {
        new mEmitter();
        mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this.node);
        mEmitter.instance.registerEvent(EventListenerType.SET_GAME_STATE, this.onSetGameState.bind(this), this.node);
    }

    update(deltaTime: number) {

    }

    onPressMove(direction: number){
        this.charItemNode.onPressMove(direction);
        console.log("manager move")
    }

    onPressStop(direction: number){
        this.charItemNode.onPressStop(direction);
    }

    onPressShoot(){
        this.charItemNode.onShoot();
    }

    onReloadDone(){
        this.charItemNode.onReloadDone();
    }

    onSetGameState() {
        
    }

    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
        console.log(mEmitter.instance);
    }

}

