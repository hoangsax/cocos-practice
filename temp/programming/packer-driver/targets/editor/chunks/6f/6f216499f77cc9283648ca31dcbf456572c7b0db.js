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
          this._background = void 0;
          this._settingPopup = void 0;
          this._resultPopup = void 0;

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

        initState() {
          this._background.active = false;
          this._settingPopup.active = false;
          this._resultPopup.active = false;
        }

        showSettingPopup() {
          this._background.active = true;
          this._settingPopup.active = true;
        }

        showResultPopup() {
          this._background.active = true;
          this._resultPopup.active = true;
        }

        hidePopup() {
          this.initState();
        }

      });

      PopupManager.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f216499f77cc9283648ca31dcbf456572c7b0db.js.map