import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Pooling')
export class Pooling extends Component {

    instancePool = new Map<Prefab, Node[]>();

    get(prefab: Prefab){
        if(!this.instancePool.has(prefab)){
            this.instancePool.set(prefab, []);
        }
        let instances = this.instancePool.get(prefab);
        if(instances.length > 0){
            return instances.pop();
        }
        return instantiate(prefab)
    }

    return(prefab: Prefab, instance: Node) {
        let instances = this.instancePool.get(prefab);
        instances.push(instance);
    }
}

