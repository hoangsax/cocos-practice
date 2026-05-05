import { _decorator, Component, director, Game } from 'cc';
import { GameState } from '../gameState';
import { SceneName } from '../constants';
import { AudioManager } from '../audioManager';
import { PopupManager } from '../popup/popupManager';
const { ccclass, property } = _decorator;

@ccclass('TitleScreen')
export class TitleScreen extends Component {
    clickPlay() {
        this.playSFX();
        director.loadScene(SceneName.MAIN);
    }

    clickSetting() {
        this.playSFX();
        PopupManager.instance.showSettingPopup();
    }

    playSFX() {
        AudioManager.instance.playSFX();
    }
}

