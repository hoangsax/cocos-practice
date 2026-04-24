import { _decorator, Component, Node } from 'cc';
import { Pooling } from '../pooling';
import { GameState } from '../gameState';
const { ccclass, property } = _decorator;

export interface BulletNode extends Node {
    addMethodReturnToPool?: typeof callback;
    getDamage?: () => number;
}

function callback(instance: Node) {

}

@ccclass('BulletController')
export class BulletController extends Component {
    @property
    speed: number = 10;

    @property
    damage: number = 50;

    returnToPool: (instance: Node) => void;

    protected onLoad(): void {
        new GameState();
        (this.node as BulletNode).addMethodReturnToPool = this.addMethodReturnToPool.bind(this);
        (this.node as BulletNode).getDamage = this.getDamage.bind(this);
    }
    
    update(deltaTime: number) {
        if (!GameState.instance.isPause) {
            if (this.node.position.x > 1000) {
                this.node.active = false;
                this.node.parent = null;
                if (this.returnToPool) {
                    this.returnToPool(this.node);
                }
            }

            this.move(deltaTime);
        }
    }

    getDamage(): number{
        return this.damage;
    }

    move(deltaTime: number) {
        let pos = this.node.position;
        this.node.setPosition(pos.x + this.speed * deltaTime, pos.y, 0);
    }
    
    addMethodReturnToPool(callback: (instance: Node) => void): void {
        this.returnToPool = callback;
    }

    protected onDisable(): void {
        this.returnToPool(this.node);
    }

}

