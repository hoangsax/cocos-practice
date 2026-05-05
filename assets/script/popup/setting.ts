import { _decorator, AudioSource, Button, Component, director, Node, Slider } from 'cc';
import { mEmitter } from '../mEmitter';
import { CharacterEventType, MoveDirection, animations, GameStateType } from '../constants';
import { GameState } from '../gameState';
import { onButtonClick } from '../button/handler';
import { AudioManager } from '../audioManager';
import { PopupManager } from './popupManager';

const { ccclass, property } = _decorator;

@ccclass('SettingPopup')
export class SettingPopup extends Component {

    @property(Button)
    sfxButton: Button;

    @property(Slider)
    sfxSlider: Slider;

    @property(Button)
    bgmButton: Button;

    @property(Slider)
    bgmSlider: Slider;

    protected onLoad(): void {
        console.log('load setting popup');
    }

    protected onEnable(): void {
        this.initMusicButton();
    }

    initMusicButton() {
        if (AudioManager.instance.bgmMute) {
            onButtonClick(this.bgmButton);
        }
        if (AudioManager.instance.sfxMute){
            onButtonClick(this.sfxButton);
        }
        this.sfxSlider.progress = AudioManager.instance.getSFXVolume();
        this.bgmSlider.progress = AudioManager.instance.getBGMVolume();
    }

    setVolume(value: number) {
        AudioManager.instance.setBGMVolume(this.bgmSlider.progress)
        AudioManager.instance.setSFXVolume(this.sfxSlider.progress);
        console.log(this.sfxSlider);
    }

    toggleSFX() {
        this.playSFX();
        onButtonClick(this.sfxButton);
        AudioManager.instance.toggleSFX();
    }

    toggleBGM() {
        this.playSFX();
        onButtonClick(this.bgmButton);
        AudioManager.instance.toggleBGM();
    }

    closeSetting() {
        this.playSFX();
        PopupManager.instance.closeSetting();
    }

    playSFX() {
        AudioManager.instance.playSFX();
    }
}

