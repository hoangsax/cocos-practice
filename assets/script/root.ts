import {
    _decorator, Component, Node,
    director, 
} from 'cc';
import { GameState } from './gameState';
const { ccclass, property } = _decorator;

@ccclass('RootManager')
export class RootManager extends Component {

    @property(Node)
    popup: Node;

    @property(Node)
    gameManager: Node;

    protected onLoad(): void {
        new GameState();
        GameState.instance.popupNode = this.popup;
        this.popup.active = false;
        director.loadScene('titleScreen')
        console.log(this.node)
    }

}

