import { _decorator, Component, Label, Node } from 'cc';
import { GameState } from '../gameState';
const { ccclass, property } = _decorator;

@ccclass('ResultPopup')
export class ResultPopup extends Component {

    @property(Label)
    scoreValue: Label;

    protected onLoad(): void {
        console.log('load result popup');
    }

    protected onEnable(): void {
        this.scoreValue.string = GameState.instance.score.toString();
    }
}

