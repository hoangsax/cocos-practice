System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, popupManager, _crd, ccclass, property;

  _export("popupManager", void 0);

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

      _export("popupManager", popupManager = class popupManager {
        constructor() {
          this._popupNode = null;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new popupManager();
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

      popupManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f331d94dec211c5d73e6adc8c0596da5d8667bc.js.map