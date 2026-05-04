import {
    _decorator, Component, Node,
    director,
    AudioSource,
    Game, 
} from 'cc';
import { GameState } from '../gameState';
import { ScreenName } from '../constants';
const { ccclass, property } = _decorator;

@ccclass('RootManager')
export class RootManager extends Component {

    @property(Node)
    popup: Node;

    @property(Node)
    gameManager: Node;

    @property(AudioSource)
    musicSource: AudioSource;

    @property(AudioSource)
    bgmSource: AudioSource;

    protected onLoad(): void {
        new GameState();
        GameState.instance.popupNode = this.popup;
        GameState.instance.root = this.node;
        GameState.instance.musicSource = this.musicSource;
        this.popup.active = false;
        GameState.instance.popupNode.parent = this.node
        director.addPersistRootNode(this.node);
        director.loadScene(ScreenName.LOADING);
    }

    protected update(dt: number): void {
        if (GameState.instance.music){
            this.bgmSource.volume = 1;
        }
        else {
            this.bgmSource.volume = 0;
        }
    }

}

