import { _decorator, Component, Node, BoxCollider2D, Collider2D, IPhysics2DContact, Contact2DType, ICollisionEvent, ProgressBar, ExtrapolationMode } from 'cc';
import { BulletNode } from '../bullet/controller';
import { GameState } from '../gameState';
const { ccclass, property } = _decorator;

export interface MonsterItemNode extends Node {
    setReturnToPoolMethod?: (callback: (instance: Node) => void) => void;
    setMaxDistance?: (value: number) => void;
}

@ccclass('MonsterController')
export class MonsterController extends Component {

    @property(ProgressBar)
    hpBar: ProgressBar;
    @property
    speed: number = 100;
    @property
    baseHP: number = 1000;
    
    _hp: number = 1000;
    _maxDistance: number = 1500;
    _boxCollider: BoxCollider2D;
    _hitTimer: number = 0;
    _returnToPool: (instance: Node) => void;

    protected onLoad(): void {
        new GameState();
        this._hp = this.baseHP;
        this._boxCollider = this.node.getComponent(BoxCollider2D);
        (this.node as MonsterItemNode).setReturnToPoolMethod = this.setReturnToPoolMethod.bind(this);
    }

    protected onEnable(): void {
        this._hp = this.baseHP;
        this._hitTimer = 0;
        this.startListener();
    }

    protected update(dt: number): void {
        if (GameState.instance.isPause) {
            return;
        }
        if (this._hitTimer > 0) {
            this._hitTimer -= dt;
        }
        else {
            this.move(dt);
        }
        this.hpBar.progress = this._hp / 1000;

    }

    startListener() {
        if (this._boxCollider) {
            this._boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
            let bullet = (otherCollider.node as BulletNode).getScript();
            let damage = bullet.getDamage();
            bullet.onHit();
            this.onHit(damage);
    }

    onHit(damage: number) {
        this._hp -= damage;
        if (this._hp <= 0) {
            this.scheduleOnce(() => {
                if (this.node) {
                GameState.instance.score += 100;
                this.node.active = false;
                }
            });
        }
        this._hitTimer = 1;
    }

    move(dt: number) {
        this.node.setPosition(this.node.position.x - this.speed * dt, this.node.position.y, 0);
        if (this.node.position.x < -this._maxDistance) {
            this.node.active = false;
        }
    }

    setMaxDistance(value: number) {
        this._maxDistance = value;
    }

    setReturnToPoolMethod(callback: (instance: Node) => void): void {
        this._returnToPool = callback;
    }

    protected onDisable(): void {
        this._boxCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        this._returnToPool(this.node);
    }

    protected onDestroy(): void {
        this._boxCollider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
}

