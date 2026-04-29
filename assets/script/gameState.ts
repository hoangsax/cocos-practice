import { _decorator, AudioSource, Component, director, game, Node } from 'cc';
import { StateMachine } from 'javascript-state-machine'
const { ccclass, property } = _decorator;

@ccclass('GameState')
export class GameState {
    static instance: GameState = null;
    _isPause: boolean = true;

    _music: boolean;
    _isShowPopup: boolean;
    _popupNode: Node;
    _root: Node;
    _musicSource: AudioSource;
    _score: number;


    constructor() {
        this._isPause = false;
        this._music = true;
        this._isShowPopup = false;
        this._score = 0;
        if (GameState.instance) {
            GameState.instance.setPopupParent();
            return GameState.instance;
        }
        GameState.instance = this;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    resetScore() {
        this._score = 0;
    }

    get isPause(): boolean {
        return this._isPause;
    }

    set isPause(value: boolean) {
        this._isPause = value;
    }

    get music(): boolean {
        return this._music;
    }

    set music(value: boolean) {
        this._music = value;
    }

    get popupNode(): Node {
        return this._popupNode;
    }

    set popupNode(value: Node) {
        this._popupNode = value;
        this._popupNode.active = false;
    }

    get root(): Node {
        return this._root;
    }

    set root(value: Node) {
        this._root = value;
    }

    get musicSource(): AudioSource {
        return this._musicSource;
    }

    set musicSource(value: AudioSource) {
        this._musicSource = value;
    }

    setPopupParent(value?: Node) {
        if (this._popupNode) {
            this._popupNode.parent = value? value : director.getScene().getChildByName('Canvas');
        }
    }

    playClickSound() {
        if (this._music && this._musicSource){
            console.log('playsound');
            this._musicSource.play();
        }
    }

    togglePopup() {
        this._popupNode.active = !this._popupNode.active;
    }

    togglePause() {
        this._isPause = !this._isPause;
    }

    destroy() {
        GameState.instance = null;
    }
}

GameState.instance = null;