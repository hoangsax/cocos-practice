System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Slider, onButtonClick, AudioManager, PopupManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SettingPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfonButtonClick(extras) {
    _reporterNs.report("onButtonClick", "../button/handler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./popupManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Slider = _cc.Slider;
    }, function (_unresolved_2) {
      onButtonClick = _unresolved_2.onButtonClick;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      PopupManager = _unresolved_4.PopupManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "setting", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Button', 'Component', 'director', 'Node', 'Slider']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingPopup", SettingPopup = (_dec = ccclass('SettingPopup'), _dec2 = property(Button), _dec3 = property(Slider), _dec4 = property(Button), _dec5 = property(Slider), _dec(_class = (_class2 = class SettingPopup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sfxButton", _descriptor, this);

          _initializerDefineProperty(this, "sfxSlider", _descriptor2, this);

          _initializerDefineProperty(this, "bgmButton", _descriptor3, this);

          _initializerDefineProperty(this, "bgmSlider", _descriptor4, this);
        }

        onLoad() {}

        onEnable() {// this.initMusicButton();
        }

        initMusicButton() {
          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.bgmMute) {
            (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
              error: Error()
            }), onButtonClick) : onButtonClick)(this.bgmButton);
          }

          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.sfxMute) {
            (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
              error: Error()
            }), onButtonClick) : onButtonClick)(this.sfxButton);
          }

          console.log((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance);
          this.sfxSlider.progress = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.getSFXVolume();
          this.bgmSlider.progress = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.getBGMVolume();
        }

        setVolume(value) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.setBGMVolume(this.sfxSlider.progress);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.setSFXVolume(this.bgmSlider.progress);
        }

        toggleSFX() {
          this.playSFX();
          (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
            error: Error()
          }), onButtonClick) : onButtonClick)(this.sfxButton);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.toggleSFX();
        }

        toggleBGM() {
          this.playSFX();
          (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
            error: Error()
          }), onButtonClick) : onButtonClick)(this.bgmButton);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.toggleBGM();
        }

        closeSetting() {
          this.playSFX();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.hidePopup();
        }

        playSFX() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSFX();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfxButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfxSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgmButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgmSlider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb5e79918c46e140412717353a62ec374c977490.js.map