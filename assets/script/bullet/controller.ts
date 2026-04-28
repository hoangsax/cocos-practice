import { _decorator, Component, Node, BoxCollider2D, Contact2DType, RigidBody2D } from 'cc';
import { Pooling } from '../pooling';
import { GameState } from '../gameState';
const { ccclass, property } = _decorator;

export interface BulletNode extends Node {
    addMethodReturnToPool?: typeof callback;
    getDamage?: () => number;
    onHit?: () => void;
    getScript?: () => BulletController;
}

function callback(instance: Node) {

}

@ccclass('BulletController')
export class BulletController extends Component {
    @property
    speed: number = 100;

    @property
    damage: number = 50;

    @property(BoxCollider2D)
    boxCollider: BoxCollider2D;

    @property(RigidBody2D)
    rigidBody: RigidBody2D;

    _initPositionX = 0;
    _maxDistance = 1500;
    returnToPool: (instance: Node) => void;

    protected onLoad(): void {
        new GameState();
        this.initState();
        // this.startListener();
    }

    protected onEnable(): void {
        this.initState();
        if (this.rigidBody) {
            this.rigidBody.wakeUp();
        }
    }

    protected start(): void {
        this.initState();
    }

    update(deltaTime: number) {
        if (!GameState.instance._isPause) {
            this.move(deltaTime);
        }
    }

    initState() {
        (this.node as BulletNode).getScript = this.getScript.bind(this);
        (this.node as BulletNode).addMethodReturnToPool = this.addMethodReturnToPool.bind(this);
        (this.node as BulletNode).getDamage = this.getDamage.bind(this);
        (this.node as BulletNode).onHit = this.onHit.bind(this);
        this._initPositionX = this.node.position.x;
    }

    // startListener() {
    //     if (this.boxCollider) {
    //         this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    //         // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
    //     }
    // }

    // onBeginContact() {
    //     this.onHit();
    // }

    onHit() {
        this.scheduleOnce(() => {
            if (this.node) {
                this.node.active = false;
            }
        });
    }

    getDamage(): number {
        return this.damage;
    }

    move(deltaTime: number) {
        let pos = this.node.position;
        this.node.setPosition(pos.x + this.speed * deltaTime, pos.y);
        if (this.node.position.x - this._initPositionX > this._maxDistance) {
            this.scheduleOnce(() => {
                if (this.node) {
                    this.node.active = false;
                }
            });
        }
    }

    addMethodReturnToPool(callback: (instance: Node) => void): void {
        this.returnToPool = callback;
    }

    getScript() {
        return this;
    }

    protected onDisable(): void {
        this.returnToPool(this.node);
    }

}

