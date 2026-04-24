System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, loading;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a313KT11tHeLnHlPbhpLPX", "loading", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loading", loading = (_dec = ccclass('loading'), _dec(_class = class loading extends Component {
        onLoad() {}

        start() {
          director.preloadScene('titleScreen', (completedCount, totalCount, item) => {
            if (completedCount === totalCount) {
              director.loadScene('titleScreen');
            }
          }, () => {});
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=edcad70aaa059760eaaaf6fc70a46913e3b841d2.js.map