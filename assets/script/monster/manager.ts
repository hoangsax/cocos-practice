import { _decorator, Component, Node, instantiate, Prefab, Canvas, UITransform } from 'cc';
import { Pooling } from '../pooling';
const { ccclass, property } = _decorator;

@ccclass('manager')
export class manager extends Component {
    @property(Prefab)
    monsterPrefab: Prefab = null;

    @property(UITransform)
    nodeUI: UITransform;

    spawnInterval: number = 3; 

    _monsterPool = new Pooling();
    readyTimer: number = 0;

    private _timer: number = 0;

    protected onLoad(): void {

    }

    protected update(dt: number): void {
        if (this.readyTimer > 0) {
            this.readyTimer -= dt;
            return;
        }
        this._timer += dt;
        if (this._timer >= this.spawnInterval) {
            this.spawnMonster();
            this._timer = 0;
        }
    }

    readyState() {
        this.readyTimer = 3;
        setTimeout(() => {
            this.spawnMonster();
        }, 3000)
    }

    spawnMonster() {
        if (!this.monsterPrefab) return;
        // const monster = this._monsterPool.get(this.monsterPrefab, this.node);
        const monster = instantiate(this.monsterPrefab);
        this.node.addChild(monster);
        monster.setPosition(0, Math.random() * this.nodeUI.height - this.nodeUI.height / 2, 0);
    }

}

