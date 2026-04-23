import { _decorator, Component, Node, BoxCollider2D, Collider2D, IPhysics2DContact, Contact2DType, ICollisionEvent } from 'cc';
import { Pooling } from '../pooling';
const { ccclass, property } = _decorator;

export interface BulletNode extends Node {
    addMethodReturnToPool?: (callback: (instance: Node) => void) => void;
    setPause?: (state: boolean) => void;
}

@ccclass('BulletController')
export class BulletController extends Component {
    @property
    speed: number = 10;

    returnToPool: (instance: Node) => void;
    boxCollider: BoxCollider2D;
    isPause: boolean = false;

    protected onLoad(): void {
        (this.node as BulletNode).setPause = this.setPause.bind(this);
        (this.node as BulletNode).addMethodReturnToPool = this.addMethodReturnToPool.bind(this)
    }

    protected start(): void {
        this.boxCollider = this.getComponent(BoxCollider2D);
        if (this.boxCollider) {
            this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 'selfCollider' is the collider on this node
        // 'otherCollider' is the collider it just hit

        console.log(`Collision started with: ${otherCollider.node.name}`);

        // Example: Check the tag or group of the other collider to apply specific logic
        if (otherCollider.tag === 1) {
            console.log("Hit an enemy!");
        }
    }

    update(deltaTime: number) {
        if (!this.isPause) {
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

    private onCollisionEnter(event: ICollisionEvent) {
        console.log('Va chạm xảy ra với:');
    }

    move(deltaTime: number) {
        let pos = this.node.position;
        this.node.setPosition(pos.x + this.speed * deltaTime, pos.y, 0);
    }

    hitAnnounce() {
        console.log('hit')
    }

    addMethodReturnToPool(callback: (instance: Node) => void) {
        this.returnToPool = callback;
    }

    protected onDisable(): void {
        let myCollider = this.getComponent(BoxCollider2D);
        if (myCollider) {
            myCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    setPause(state: boolean) {
        if (state !== this.isPause){
            this.isPause = !this.isPause;
        }
    }

}

