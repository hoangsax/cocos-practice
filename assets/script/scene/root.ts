import {
    _decorator, Component, Node,
    director,
    AudioSource, 
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

        // togglePopup() {
        //     this.popup.active = !this.popup.active;
        // }

}

