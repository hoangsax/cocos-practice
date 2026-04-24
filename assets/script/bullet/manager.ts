import { _decorator, Component, Prefab, Node, Vec3, instantiate } from 'cc';
import { Pooling } from '../pooling';
import { mEmitter } from '../mEmitter';
import { CharacterEventType } from '../constants';
import { BulletNode } from './controller';
const { ccclass, property } = _decorator;

export interface BulletManagerNode extends Node {
    createBullet?: (posFire: Node) => void;
}

@ccclass('BulletManager')
export class BulletManager extends Component {

    @property(Prefab)
    bulletPrefab: Prefab;

    // @property(Node)
    // posFire: Node;

    bulletPool = new Pooling();

    protected onLoad(): void {
        (this.node as BulletManagerNode).createBullet = this.createBullet.bind(this);
    }

    protected onEnable(): void {
        // mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.createBullet.bind(this), this.node);
    }

    createBullet(posFire: Node) {
        console.log(this.node);
        let bullet = this.bulletPool.get(this.bulletPrefab) as BulletNode;
        bullet.parent = this.node;
        bullet.active = true;
        bullet.setPosition(new Vec3(posFire.worldPosition.x - this.node.worldPosition.x, posFire.worldPosition.y - this.node.worldPosition.y, 0));
        bullet.addMethodReturnToPool(this.returnToPool.bind(this));
    }

    returnToPool(instance: Node) {
        this.bulletPool.return(this.bulletPrefab, instance);
    }

    // protected onDisable(): void {
    //     mEmitter.instance.removeAllEvent(this.node);
    // }

    // protected onDestroy(): void {
    //     mEmitter.instance.removeAllEvent(this.node);
    // }

}

