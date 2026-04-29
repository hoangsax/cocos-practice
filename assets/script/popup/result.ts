import { _decorator, Component, Label, Node } from 'cc';
import { GameState } from '../gameState';
const { ccclass, property } = _decorator;

@ccclass('result')
export class result extends Component {

    @property(Label)
    scoreValue: Label;

    protected onEnable(): void {
        new GameState();
        this.scoreValue.string = GameState.instance.score.toString();
    }
}

