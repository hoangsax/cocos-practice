import { _decorator, Component, Prefab, UITransform, Node } from 'cc';
import { Pooling } from '../pooling';
import { mEmitter } from '../mEmitter';
import { GameCommand } from '../constants';
import { GameState } from '../gameState';
import { MonsterItemNode } from './controller';
const { ccclass, property } = _decorator;

@ccclass('manager')
export class manager extends Component {
    @property(Prefab)
    monsterPrefab: Prefab = null;

    @property(UITransform)
    nodeUI: UITransform;

    spawnInterval: number = 10;

    _monsterPool = new Pooling();
    _canPlay: boolean = false;

    private _timer: number = 0;

    protected onLoad(): void {
        mEmitter.instance.registerEvent(GameCommand.START, this.onGameStart.bind(this), this.node);
        mEmitter.instance.registerEvent(GameCommand.END, this.onGameEnd.bind(this), this.node);
        mEmitter.instance.registerEvent(GameCommand.RESTART, this.onGameRestart.bind(this), this.node);
    }

    protected update(dt: number): void {
        if (!this._canPlay || GameState.instance.isPause) {
            return;
        }
        this._timer -= dt;
        if (this._timer <= 0) {
            this.spawnMonster();
            this._timer = this.spawnInterval;
        }
    }

    onGameStart(data: number) {
        this._timer = data;
        this._canPlay = true;
    }

    onGameEnd() {

    }

    onGameRestart(data: number) {
        this.node.children.forEach((child) => {
            child.active = false;
        })
    }

    spawnMonster() {
        if (!this.monsterPrefab) return;
        const monster = this._monsterPool.get(this.monsterPrefab, this.node);
        (monster as MonsterItemNode).setReturnToPoolMethod(this.returnToPool.bind(this));
        monster.setPosition(0, Math.random() * this.nodeUI.height - this.nodeUI.height / 2, 0);
        monster.active = true;
    }

    returnToPool(instance: Node) {
        this._monsterPool.return(this.monsterPrefab, instance);
    }

    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
    }

}

