System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, ProgressBar, Label, ScreenName, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, loading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ScreenName = _unresolved_2.ScreenName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a313KT11tHeLnHlPbhpLPX", "loading", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Director', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loading", loading = (_dec = ccclass('loading'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = class loading extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "loadingBar", _descriptor, this);

          _initializerDefineProperty(this, "loadingPercent", _descriptor2, this);
        }

        onLoad() {}

        start() {
          director.preloadScene('titleScreen', (completedCount, totalCount, item) => {
            this.loadingBar.progress = completedCount / totalCount;
            this.loadingPercent.string = `${completedCount / totalCount * 100}%`;

            if (completedCount === totalCount) {
              setTimeout(() => {
                director.loadScene((_crd && ScreenName === void 0 ? (_reportPossibleCrUseOfScreenName({
                  error: Error()
                }), ScreenName) : ScreenName).TITLE);
              }, 1000);
            }
          }, () => {});
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingPercent", [_dec3], {
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
//# sourceMappingURL=57f647ddfa6d81b6e55d68d6b1ca74a072445a28.js.map