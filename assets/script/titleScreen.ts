import { _decorator, Component, Node } from 'cc';
import { GameState } from './gameState';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {
    start() {
        new GameState();
        GameState.instance.popupNode.active = true;
        console.log(GameState.instance.popupNode.parent = this.node.parent)
    }

    update(deltaTime: number) {
        
    }
}

