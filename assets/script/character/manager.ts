import { _decorator, Component, Node, UITransform } from 'cc';
import { mEmitter } from '../mEmitter';
import { CharacterEventType, GameCommand } from '../constants';
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

    _characterReadyTimer: number = 3;

    protected update(dt: number): void {
        if (this._characterReadyTimer > 0) {
            this._characterReadyTimer -= dt;
            if (this._characterReadyTimer <= 0) {
                this._characterReadyTimer = 0;
            }
            return;
        }
    }

    protected onLoad(): void {
        new mEmitter();
        new GameState();
        this.startListener();
        this.charItem.active = true;
    }

    protected start(): void {
        (this.charItem as CharItemNode).setMaxResolution(this.uiTransform.height, this.uiTransform.width);
        this.charItem.active = false;
    }

    startListener() {
        mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this.node);
        mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this.node);
        mEmitter.instance.registerEvent(GameCommand.START, this.onGameStart.bind(this), this.node);
        mEmitter.instance.registerEvent(GameCommand.END, this.onGameEnd.bind(this), this.node);
        mEmitter.instance.registerEvent(GameCommand.RESTART, this.onGameRestart.bind(this), this.node);
    }

    onPressMove(direction: number) {
        this.charItem.onPressMove(direction);
    }

    onPressStop(direction: number) {
        this.charItem.onPressStop(direction);
    }

    onPressShoot() {
        if (this._characterReadyTimer > 0){
            return;
        }
        (this.bulletManager as BulletManagerNode).createBullet(this.charItem.posFire);
        this.charItem.onShoot();
    }

    onReloadDone() {
        this.charItem.onReloadDone();
    }

    onGameStart(data: number) {
        this._characterReadyTimer = data;
        this.charItem.active = true;
        this.charItem.setCanPlay(true);
    }
    onGameEnd() {
        // this.node.destroy();
    }
    onGameRestart() {
        this.charItem.resetState();
    }


    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
    }

}

