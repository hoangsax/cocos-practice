import { _decorator, AudioSource, Button, Component, director, Node } from 'cc';
import { mEmitter } from './mEmitter';
import { GameStateType } from './constants';
import { GameState } from './gameState';
const { ccclass, property } = _decorator;

@ccclass('PopupController')
export class PopupController extends Component {

    @property(Node)
    musicButton: Node;

    @property(AudioSource)
    musicSource: AudioSource;

    protected onLoad(): void {
        new mEmitter();
        new GameState();
    }

    protected start(): void {
        this.initMusicButton();
    }

    initMusicButton() {
        if (this.musicButton){
            this.musicButton.children[0].active = GameState.instance.music;
            this.musicButton.children[1].active = !GameState.instance.music;
        }
    }

    // setLobby(event: any) {
    //     mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
    // }

    // setPlaying() {
    //     mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.PLAYING);
    // }

    showPopup() {

    }

    pauseGame() {
        mEmitter.instance.emit(GameStateType.TOGGLEPAUSE);
    }

    onClickHoli() {
        new GameState();
        let temp = GameState.instance.popupNode;
        if (temp) {
            temp.active = !temp.active;
        }

    }

    toggleMusic() {
        GameState.instance.music = !GameState.instance.music;
        this.initMusicButton();
    }

    togglePopup() {
        GameState.instance.togglePopup();
    }

    playSound() {
        console.log(GameState.instance)
        GameState.instance.playClickSound();
    }

    // returnToLobby() {
    //     mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
    //     this.pauseGame();
    // }

    clear() {
        this.node.destroy();
    }
}

