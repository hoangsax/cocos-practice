import { _decorator, Component, Node, BoxCollider2D, Collider2D, IPhysics2DContact, Contact2DType, ICollisionEvent, ProgressBar } from 'cc';
import { BulletNode } from '../bullet/controller';
const { ccclass, property } = _decorator;

@ccclass('MonsterController')
export class MonsterController extends Component {

    @property(ProgressBar)
    hpBar: ProgressBar;
    @property
    speed: number = 100;
    @property
    hp: number = 1000;

    _boxCollider: BoxCollider2D;
    _hitTimer: number = 0;

    protected onLoad(): void {
        this._boxCollider = this.node.getComponent(BoxCollider2D);
        this.startListener();
    }
    startListener() {
        if (this._boxCollider) {
            this._boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // this.boxCollider.on(Contact2DType.END_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        this.scheduleOnce(() => {
            let bullet = (otherCollider.node as BulletNode).getScript();
            let damage = bullet.getDamage();
            bullet.onHit();
            this.onHit(damage);
        })
    }

    onHit(damage: number) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.node.destroy();
        }
        this.hpBar.progress = this.hp / 1000;
        this._hitTimer = 1;
    }

    move(dt: number) {
        this.node.setPosition(this.node.position.x - this.speed * dt, this.node.position.y, 0);
    }

    protected update(dt: number): void {
        if (this._hitTimer > 0) {
            this._hitTimer -= dt;
        }
        else {
            this.move(dt);
        }
    }
}

