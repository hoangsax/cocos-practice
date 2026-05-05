import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, director, Label, Prefab } from 'cc';
import { mEmitter } from '../mEmitter';
import { CharacterEventType, GameCommand, MoveDirection, SceneName } from '../constants';
import { GameState } from '../gameState';
import { PopupManager } from '../popup/popupManager';
import { AudioManager } from '../audioManager';
const { ccclass, property } = _decorator;

@ccclass('mainGame')
export class mainGame extends Component {

    @property(Label)
    timer: Label;

    _startCountdown: number = 3;
    _stageLimitTime: number = 5;
    _currentTimer: number = 0;
    _isStart: boolean = false;


    protected onLoad(): void {
        this.initState();
        this._startListener();
    }

    protected update(dt: number): void {
        if (GameState.instance.isPause){
            return;
        }
        if (this._startCountdown > 0) {
            if (!this._isStart) {
                mEmitter.instance.emit(GameCommand.START, this._startCountdown)
            }
            this._isStart = true;
            this._startCountdown -= dt;
            if (this._startCountdown <= 0) {
                this._startCountdown = 0;
            }
        }
        else {
            this._currentTimer -= dt;
            this.timer.string = Math.floor(this._currentTimer).toString();
            if (this._currentTimer <= 0) {
                this.timer.string = '0';
                this.showResult();
                // mEmitter.instance.emit(GameCommand.END);
            }
        }
    }

    initState() {
        GameState.instance.isPause = false;
        GameState.instance.resetScore();
        this._startCountdown = 3;
        this._isStart = false;
        this._currentTimer = this._stageLimitTime;
        this.timer.string = Math.floor(this._stageLimitTime).toString();
    }

    private _startListener() {
        input.on(Input.EventType.KEY_DOWN, this._handlePress.bind(this), this);
        input.on(Input.EventType.KEY_UP, this._handlePress.bind(this), this);
    }

    private _stopListener() {
        input.off(Input.EventType.KEY_DOWN, this._handlePress.bind(this), this);
        input.off(Input.EventType.KEY_UP, this._handlePress.bind(this), this);
    }

    private _handlePress(event: EventKeyboard) {
        if (GameState.instance.isPause) {
            return;
        }
        const moveType = event.type === Input.EventType.KEY_DOWN ? CharacterEventType.MOVE : CharacterEventType.STOP;
        const shootType = event.type === Input.EventType.KEY_DOWN ? CharacterEventType.SHOOT : CharacterEventType.RELOAD;
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                mEmitter.instance.emit(moveType, MoveDirection.LEFT);
                break;
            case KeyCode.KEY_D:
                mEmitter.instance.emit(moveType, MoveDirection.RIGHT);
                break;
            case KeyCode.KEY_W:
                mEmitter.instance.emit(moveType, MoveDirection.UP);
                break;
            case KeyCode.KEY_S:
                mEmitter.instance.emit(moveType, MoveDirection.DOWN);
                break;
            case KeyCode.SPACE:
                mEmitter.instance.emit(shootType);
                break;
        }
    }

    showResult() {
        GameState.instance.isPause = true;
        PopupManager.instance.showResultPopup();
    }

    togglePause() {
        this.playSFX();
        PopupManager.instance.showPausePopup();
        GameState.instance.togglePause();
    }

    toggleSetting() {
        this.playSFX();
        PopupManager.instance.showSettingPopup();
    }

    resetStage() {
        this.playSFX();
        mEmitter.instance.emit(GameCommand.RESTART);
        this.initState();
    }

    playSFX() {
        AudioManager.instance.playSFX();
    }

    exitGame() {
        this.playSFX();
        director.loadScene(SceneName.LOADING);
    }

    protected onDestroy(): void {
        this._stopListener();
    }

}

