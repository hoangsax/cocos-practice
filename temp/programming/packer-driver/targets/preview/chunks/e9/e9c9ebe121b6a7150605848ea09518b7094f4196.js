System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Button, Component, mEmitter, GameStateType, GameState, onButtonClick, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PopupController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./gameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonButtonClick(extras) {
    _reporterNs.report("onButtonClick", "./button/handler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./audioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }, function (_unresolved_3) {
      GameStateType = _unresolved_3.GameStateType;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }, function (_unresolved_5) {
      onButtonClick = _unresolved_5.onButtonClick;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "popup", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PopupController", PopupController = (_dec = ccclass('PopupController'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(AudioSource), _dec(_class = (_class2 = class PopupController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sfxButton", _descriptor, this);

          _initializerDefineProperty(this, "bgmButton", _descriptor2, this);

          _initializerDefineProperty(this, "musicSource", _descriptor3, this);
        }

        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
        }

        start() {
          this.initMusicButton();
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
        }

        showPopup() {}

        pauseGame() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && GameStateType === void 0 ? (_reportPossibleCrUseOfGameStateType({
            error: Error()
          }), GameStateType) : GameStateType).TOGGLEPAUSE);
        }

        onClickHoli() {
          console.log(this.bgmButton);
          (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
            error: Error()
          }), onButtonClick) : onButtonClick)(this.bgmButton); // let temp = GameState.instance.popupNode;
          // if (temp) {
          //     temp.active = !temp.active;
          // }
        }

        toggleSFX() {
          (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
            error: Error()
          }), onButtonClick) : onButtonClick)(this.sfxButton);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.toggleSFX();
          this.playSFX();
        }

        toggleBGM() {
          (_crd && onButtonClick === void 0 ? (_reportPossibleCrUseOfonButtonClick({
            error: Error()
          }), onButtonClick) : onButtonClick)(this.bgmButton);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.toggleBGM();
          this.initMusicButton();
        }

        togglePopup() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.togglePopup();
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgmButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "musicSource", [_dec4], {
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
//# sourceMappingURL=e9c9ebe121b6a7150605848ea09518b7094f4196.js.map