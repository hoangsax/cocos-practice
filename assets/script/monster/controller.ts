import { _decorator, Component, Node, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MonsterController')
export class MonsterController extends Component {
    protected onLoad(): void {
        console.log(this.node)
    }
}

