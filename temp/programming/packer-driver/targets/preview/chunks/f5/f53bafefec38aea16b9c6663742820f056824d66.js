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
          this._settingPopup = null;
          this._resultPopup = null;
          this._popupNode = null;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new PopupManager();
          }

          return this._instance;
        }

        set popupNode(node) {
          this._popupNode = node;
        }

        get popupNode() {
          return this._popupNode;
        }

        showPopup() {
          if (this._popupNode) {
            this._popupNode.active = true;
          }
        }

        hidePopup() {
          if (this._popupNode) {
            this._popupNode.active = false;
          }
        }

        togglePopup() {
          if (this._popupNode) {
            this._popupNode.active = !this._popupNode.active;
          }
        }

      });

      PopupManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f53bafefec38aea16b9c6663742820f056824d66.js.map