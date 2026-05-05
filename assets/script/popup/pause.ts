import { _decorator, Component, director, Node } from 'cc';
import { GameState } from '../gameState';
import { PopupManager } from './popupManager';
import { mEmitter } from '../mEmitter';
import { GameCommand, SceneName } from '../constants';
const { ccclass, property } = _decorator;

@ccclass('PausePopup')
export class PausePopup extends Component {

    resume() {
        GameState.instance.togglePause();
        PopupManager.instance.hidePopup();
    }

    restart() {
        this.resume();
        mEmitter.instance.emit(GameCommand.RESTART);
    }

    exit() {
        this.resume();
        mEmitter.instance.emit(GameCommand.END);
        director.loadScene(SceneName.LOADING);
    }

    setting() {
        PopupManager.instance.showSettingPopup();
    }
}

