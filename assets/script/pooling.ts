import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Pooling')
export class Pooling extends Component {

    instancePool = new Map<Prefab, Node[]>();

    get(prefab: Prefab, parent: Node) {
        if (!this.instancePool.has(prefab)) {
            this.instancePool.set(prefab, []);
        }
        let instances = this.instancePool.get(prefab);
        if (instances.length > 0) {
            return instances.pop();
        }
        let object = instantiate(prefab);
        parent.addChild(object);
        return object;
    }

    return(prefab: Prefab, instance: Node) {
        let instances = this.instancePool.get(prefab);
        if (instances) {
            instances.push(instance);
        }
    }
}

