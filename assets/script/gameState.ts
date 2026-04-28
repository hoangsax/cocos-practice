import { _decorator, Component, director, game, Node } from 'cc';
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

    constructor() {
        this._music = true;
        this._isShowPopup = false;
        if (GameState.instance) {
            GameState.instance.setPopupParent();
            return GameState.instance;
        }
        this._isPause = false;
        GameState.instance = this;
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

    setPopupParent(value?: Node) {
        if (this._popupNode) {
            this._popupNode.parent = value? value : director.getScene().getChildByName('Canvas');
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