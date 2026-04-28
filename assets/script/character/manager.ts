import { _decorator, Component, Node, UITransform } from 'cc';
import { mEmitter } from '../mEmitter';
import { EventType, CharacterEventType, GameStateType, EventListenerType } from '../constants';
import { CharItemNode } from './controller';
import { GameState } from '../gameState';
import { BulletManager, BulletManagerNode } from '../bullet/manager';

const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {

    @property(Node)
    charItem: CharItemNode;

    @property(Node)
    bulletManager: Node;

    @property(UITransform)
    uiTransform: UITransform;

    protected onLoad(): void {
        new mEmitter();
        new GameState();
        this.startListener();
    }

    protected start(): void {
        (this.charItem as CharItemNode).setMaxResolution(this.uiTransform.height, this.uiTransform.width);
    }

    startListener() {
        mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this.node);
        mEmitter.instance.registerEvent(EventListenerType.SET_GAME_STATE, this.onSetGameState.bind(this), this.node);
    }

    onPressMove(direction: number){
        this.charItem.onPressMove(direction);
    }

    onPressStop(direction: number){
        this.charItem.onPressStop(direction);
    }

    onPressShoot(){
        (this.bulletManager as BulletManagerNode).createBullet(this.charItem.posFire);
        this.charItem.onShoot();
    }

    onReloadDone(){
        this.charItem.onReloadDone();
    }

    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
    }

}

