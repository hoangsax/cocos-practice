System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, onButtonClick;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8fe9XWybVMAayNBu99H6cb", "handler", undefined);

      __checkObsolete__(['Button', 'Component']);

      _export("onButtonClick", onButtonClick = button => {
        const normalSprite = button.normalSprite;
        button.normalSprite = button.disabledSprite;
        button.disabledSprite = normalSprite;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed4e43ea7dd1d3dcaf29c10579f5141d8ebfe705.js.map