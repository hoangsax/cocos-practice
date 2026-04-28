System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, mEmitter, GameStateType, GameState, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PopupController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./gameState", _context.meta, extras);
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
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }, function (_unresolved_3) {
      GameStateType = _unresolved_3.GameStateType;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "popupController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PopupController", PopupController = (_dec = ccclass('PopupController'), _dec2 = property(Node), _dec(_class = (_class2 = class PopupController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "music", _descriptor, this);
        }

        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
        }

        start() {
          this.initMusicButton();
        }

        initMusicButton() {
          if (this.music) {
            this.music.children[0].active = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).instance.music;
            this.music.children[1].active = !(_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).instance.music;
          }
        } // setLobby(event: any) {
        //     mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
        // }
        // setPlaying() {
        //     mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.PLAYING);
        // }


        showPopup() {}

        pauseGame() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && GameStateType === void 0 ? (_reportPossibleCrUseOfGameStateType({
            error: Error()
          }), GameStateType) : GameStateType).TOGGLEPAUSE);
        }

        onClickHoli() {
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          let temp = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.popupNode;

          if (temp) {
            temp.active = !temp.active;
          }
        }

        toggleMusic() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.music = !(_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.music;
          this.initMusicButton();
        }

        togglePopup() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.togglePopup();
        } // returnToLobby() {
        //     mEmitter.instance.emit(EventListenerType.SET_LAYER_STATE, GameScreenState.LOBBY);
        //     this.pauseGame();
        // }


        clear() {
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "music", [_dec2], {
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
//# sourceMappingURL=54e138993e2e5b7b3d5dacd9a69fecd75be61aef.js.map