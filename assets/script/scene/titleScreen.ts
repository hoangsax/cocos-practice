import { _decorator, Component, director, Game } from 'cc';
import { GameState } from '../gameState';
import { ScreenName } from '../constants';
const { ccclass, property } = _decorator;

@ccclass('TitleScreen')
export class TitleScreen extends Component {
    start() {
        new GameState();
    }

    clickPlay() {
        GameState.instance.setPopupParent(GameState.instance.root);
        director.loadScene(ScreenName.MAIN);
    }

    clickSetting() {
    }
}

