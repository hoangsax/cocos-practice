import { _decorator, Component, Node } from 'cc';
import { mEmitter } from '../mEmitter';
import { EventType, CharacterEventType, GameStateType, EventListenerType } from '../constants';
import { CharItemNode } from './controller';
import { GameState } from '../gameState';
import { BulletManager, BulletManagerNode } from '../bullet/manager';

const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {

    @property(Node)
    charItemNode: CharItemNode;

    @property(Node)
    bulletManager: Node;

    protected onLoad(): void {
        new mEmitter();
        new GameState();
        this.startListener();
    }

    startListener() {
        mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this.node);
        mEmitter.instance.registerEvent(EventListenerType.SET_GAME_STATE, this.onSetGameState.bind(this), this.node);
    }

    onPressMove(direction: number){
        this.charItemNode.onPressMove(direction);
    }

    onPressStop(direction: number){
        this.charItemNode.onPressStop(direction);
    }

    onPressShoot(){
        (this.bulletManager as BulletManagerNode).createBullet(this.charItemNode.posFire);
        this.charItemNode.onShoot();
    }

    onReloadDone(){
        this.charItemNode.onReloadDone();
    }

    onSetGameState() {
        
    }

    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
    }

}

