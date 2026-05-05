System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioManager, _crd;

  _export("AudioManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "005b348E5RAqpa6gSIDDvmH", "audioManager", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource']);

      _export("AudioManager", AudioManager = class AudioManager {
        constructor() {
          this._bgmSource = null;
          this._sfxSource = null;
          this._sfxMute = false;
          this._bgmMute = false;

          if (AudioManager.instance) {
            return AudioManager.instance;
          }

          AudioManager.instance = this;
        }

        set bgmSource(value) {
          this._bgmSource = value;
        }

        get bgmSource() {
          return this._bgmSource;
        }

        set sfxSource(value) {
          this._sfxSource = value;
        }

        get sfxSource() {
          return this._sfxSource;
        }

        set bgmMute(value) {
          this._bgmMute = value;
        }

        get bgmMute() {
          return this._bgmMute;
        }

        set sfxMute(value) {
          this._sfxMute = value;
        }

        get sfxMute() {
          return this._sfxMute;
        }

        toggleSFX() {
          this._sfxMute = !this._sfxMute;
        }

        toggleBGM() {
          this._bgmMute = !this._bgmMute;

          if (this._bgmMute) {
            this._bgmSource.stop();
          } else {
            this._bgmSource.play();
          }
        }

        playSFX() {
          if (!this._sfxMute) {
            this._sfxSource.play();
          }
        }

        setSFXVolume(volume) {
          this._sfxSource.volume = volume;
        }

        setBGMVolume(volume) {
          this._bgmSource.volume = volume;
        }

      });

      AudioManager.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5f95416028b29f55008c53bc0ca931818e17ed8.js.map