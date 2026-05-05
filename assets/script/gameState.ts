import { _decorator, AudioSource, Component, director, game, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameState')
export class GameState {
    static instance: GameState = null;
    _isPause: boolean = true;
    _music: boolean;
    _score: number;


    constructor() {
        this._isPause = false;
        this._music = true;
        this._score = 0;
        if (GameState.instance) {
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

    togglePause() {
        this._isPause = !this._isPause;
    }

    destroy() {
        GameState.instance = null;
    }
}

GameState.instance = null;