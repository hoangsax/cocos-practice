import { _decorator, Component, Node } from 'cc';
import { mEmitter } from '../mEmitter';
import { EmitterEventType } from '../constants';
const { ccclass, property } = _decorator;

export class PopupManager {

    static instance: PopupManager = null;

    private _background: Node = null;
    private _settingPopup: Node = null;
    private _resultPopup: Node = null;
    private _pausePopup: Node = null;

    constructor() {
        if (PopupManager.instance) {
            return PopupManager.instance;
        }
        PopupManager.instance = this;
    }

    set background(value: Node) {
        this._background = value;
    }

    get background(): Node {
        return this._background;
    }

    set settingPopup(value: Node) {
        this._settingPopup = value;
    }

    get settingPopup(): Node {
        return this._settingPopup;
    }

    set resultPopup(value: Node) {
        this._resultPopup = value;
    }

    get resultPopup(): Node {
        return this._resultPopup;
    }

    get pausePopup(): Node {
        return this._pausePopup;
    }

    set pausePopup(value: Node) {
        this._pausePopup = value;
    }

    initState() {
        this._background.active = false;
        this._settingPopup.active = false;
        this._resultPopup.active = false;
        this._pausePopup.active = false;
    }

    showSettingPopup() {
        this._background.active = true;
        this._settingPopup.active = true;
    }

    showResultPopup() {
        this._background.active = true;
        this._resultPopup.active = true;
    }

    showPausePopup() {
        this._background.active = true;
        this._pausePopup.active = true;
    }

    hidePopup() {
        this.initState();
    }

    closeSetting() {
        this._settingPopup.active = false;
        if (!this._settingPopup.active && !this._resultPopup.active && !this._pausePopup.active){
            this._background.active = false;
        }
    }

}

