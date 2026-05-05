import {
    _decorator, Component, Node,
    director,
    AudioSource,
} from 'cc';
import { GameState } from '../gameState';
import { SceneName } from '../constants';
import { AudioManager } from '../audioManager';
import { mEmitter } from '../mEmitter';
import { PopupManager } from '../popup/popupManager';
const { ccclass, property } = _decorator;

@ccclass('RootManager')
export class RootManager extends Component {

    @property(AudioSource)
    musicSource: AudioSource;

    @property(AudioSource)
    bgmSource: AudioSource;

    @property(Node)
    popupBackground: Node;

    @property(Node)
    settingPopup: Node;

    @property(Node)
    resultPopup: Node;

    @property(Node)
    pausePopup: Node;


    protected onLoad(): void {
        this.mEmitterInit();
        this.gameStateInit();
        this.audioManagerInit();
        this.popupManagerInit();
    }

    protected start(): void {
        director.addPersistRootNode(this.node);
        director.loadScene(SceneName.LOADING);
    }

    protected update(dt: number): void {

    }

    mEmitterInit() {
        new mEmitter();
    }

    gameStateInit() {
        new GameState();
    }

    audioManagerInit() {
        new AudioManager();
        const audio = AudioManager.instance;
        audio.bgmSource = this.bgmSource;
        audio.sfxSource = this.musicSource;

    }

    popupManagerInit() {
        new PopupManager();
        const popup = PopupManager.instance;
        popup.background = this.popupBackground;
        popup.settingPopup = this.settingPopup;
        popup.resultPopup = this.resultPopup;
        popup.pausePopup = this.pausePopup;
        popup.initState();
    }
}

