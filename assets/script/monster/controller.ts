import { _decorator, Component, Node, BoxCollider2D, Collider2D, IPhysics2DContact, Contact2DType, ICollisionEvent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MonsterController')
export class MonsterController extends Component {

    @property
    speed: number = 100;
    @property
    hp: number = 1000;

    boxCollider: BoxCollider2D;

    protected onLoad(): void {
        this.boxCollider = this.getComponent(BoxCollider2D);
        this.startListener();
    }
    startListener(){
        if (this.boxCollider) {
            this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

        console.log(`Collision started with: ${otherCollider.node.name}`);
        console.log(otherCollider);
    }
    move(dt: number) {
        // this.node.setPosition( this.node.position.x - this.speed * dt, this.node.position.y, 0);
    }

    protected update(dt: number): void {
        this.move(dt);
    }
}

