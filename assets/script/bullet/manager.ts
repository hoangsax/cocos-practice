import { _decorator, Component, Prefab, Node, Vec3, instantiate, BoxCollider2D } from 'cc';
import { Pooling } from '../pooling';
import { mEmitter } from '../mEmitter';
import { CharacterEventType } from '../constants';
import { BulletNode } from './controller';
const { ccclass, property } = _decorator;

export interface BulletManagerNode extends Node {
    createBullet?: (posFire: Node) => void;
    resetState?: () => void;
}

@ccclass('BulletManager')
export class BulletManager extends Component {

    @property(Prefab)
    bulletPrefab: Prefab;

    _colliderBox: BoxCollider2D;

    // @property(Node)
    // posFire: Node;

    bulletPool = new Pooling();

    protected onLoad(): void {
        (this.node as BulletManagerNode).createBullet = this.createBullet.bind(this);
        (this.node as BulletManagerNode).resetState = this.resetState.bind(this);

    }

    protected onEnable(): void {
        // mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.createBullet.bind(this), this.node);
    }

    createBullet(firePosition: Node) {
        let bullet = this.bulletPool.get(this.bulletPrefab, this.node);
        bullet.setPosition(firePosition.worldPosition.x - this.node.worldPosition.x, firePosition.worldPosition.y - this.node.worldPosition.y);
        bullet.active = true;
        (bullet as BulletNode).addMethodReturnToPool(this.returnToPool.bind(this));
    }

    returnToPool(instance: Node) {
        this.bulletPool.return(this.bulletPrefab, instance);
        // this.node.removeChild(instance);
    }

    resetState() {
        this.node.children.forEach(child => {
            child.active = false;
        });
    }

    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
    }

}

