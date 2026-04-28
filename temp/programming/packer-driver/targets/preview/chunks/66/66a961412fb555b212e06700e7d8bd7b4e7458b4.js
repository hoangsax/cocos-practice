System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, ScreenName, _dec, _class, _crd, ccclass, property, loading;

  function _reportPossibleCrUseOfScreenName(extras) {
    _reporterNs.report("ScreenName", "./constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      ScreenName = _unresolved_2.ScreenName;
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
              console.log(completedCount);
              setTimeout(() => {
                director.loadScene((_crd && ScreenName === void 0 ? (_reportPossibleCrUseOfScreenName({
                  error: Error()
                }), ScreenName) : ScreenName).TITLE);
              });
            }
          }, () => {});
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66a961412fb555b212e06700e7d8bd7b4e7458b4.js.map