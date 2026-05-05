System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, PopupManager, _crd, ccclass, property;

  _export("PopupManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8854bNg8h1Jc4e6qPoKCRxk", "popupManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PopupManager", PopupManager = class PopupManager {
        constructor() {
          this._background = null;
          this._settingPopup = null;
          this._resultPopup = null;
          this._pausePopup = null;

          if (PopupManager.instance) {
            return PopupManager.instance;
          }

          PopupManager.instance = this;
        }

        set background(value) {
          this._background = value;
        }

        get background() {
          return this._background;
        }

        set settingPopup(value) {
          this._settingPopup = value;
        }

        get settingPopup() {
          return this._settingPopup;
        }

        set resultPopup(value) {
          this._resultPopup = value;
        }

        get resultPopup() {
          return this._resultPopup;
        }

        get pausePopup() {
          return this._pausePopup;
        }

        set pausePopup(value) {
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

        closeSetting() {// this._settingPopup.active = false;
          // if (!this._settingPopup.active && !this._resultPopup.active && !this._pausePopup.active){
          //     this._background.active = false;
          // }
        }

      });

      PopupManager.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9830dbc2e6d71eee14d9b40b247941fba175e76f.js.map