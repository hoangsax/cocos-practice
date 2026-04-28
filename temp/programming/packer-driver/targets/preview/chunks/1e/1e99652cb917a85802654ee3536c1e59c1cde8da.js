System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, GameState, ScreenName, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RootManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../gameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenName(extras) {
    _reporterNs.report("ScreenName", "../constants", _context.meta, extras);
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
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      ScreenName = _unresolved_3.ScreenName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c283fBymGdMuYMxSdwVAl2v", "root", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RootManager", RootManager = (_dec = ccclass('RootManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class RootManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "popup", _descriptor, this);

          _initializerDefineProperty(this, "gameManager", _descriptor2, this);
        }

        onLoad() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.popupNode = this.popup;
          this.popup.active = false;
          director.addPersistRootNode(this.node);
          director.loadScene((_crd && ScreenName === void 0 ? (_reportPossibleCrUseOfScreenName({
            error: Error()
          }), ScreenName) : ScreenName).LOADING);
        } // togglePopup() {
        //     this.popup.active = !this.popup.active;
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec3], {
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
//# sourceMappingURL=1e99652cb917a85802654ee3536c1e59c1cde8da.js.map