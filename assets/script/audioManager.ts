import { AudioClip, AudioSource } from "cc";


export class AudioManager {
    static instance: AudioManager = null;
    private _bgmSource: AudioSource = null;
    private _sfxSource: AudioSource = null;


    private _sfxMute: boolean = false;
    private _bgmMute: boolean = false;


    constructor() {
        if (AudioManager.instance) {
            return AudioManager.instance;
        }
        AudioManager.instance = this;
    }

    set bgmSource(value: AudioSource) {
        this._bgmSource = value;
    }

    get bgmSource(): AudioSource {
        return this._bgmSource;
    }

    set sfxSource(value: AudioSource) {
        this._sfxSource = value;
    }

    get sfxSource(): AudioSource {
        return this._sfxSource;
    }

    set bgmMute(value: boolean) {
        this._bgmMute = value;
    }

    get bgmMute(): boolean {
        return this._bgmMute;
    }

    set sfxMute(value: boolean) {
        this._sfxMute = value;
    }

    get sfxMute(): boolean {
        return this._sfxMute;
    }

    toggleSFX() {
        this._sfxMute = !this._sfxMute;
    }

    toggleBGM() {
        this._bgmMute = !this._bgmMute;
        if (this._bgmMute) {
            this._bgmSource.stop();
        }
        else {
            this._bgmSource.play();
        }
    }
    
    playSFX() {
        if (!this._sfxMute) {
            this._sfxSource.play();
        }
    }

    setSFXVolume(volume: number) {
        this._sfxSource.volume = volume;
    }

    getSFXVolume() {
        return this.sfxSource.volume;
    }

    setBGMVolume(volume: number) {
        this._bgmSource.volume = volume;
    }

    getBGMVolume() {
        return this.bgmSource.volume;
    }

}

