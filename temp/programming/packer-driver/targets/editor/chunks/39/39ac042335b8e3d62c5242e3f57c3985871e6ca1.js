System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, mEmitter, EventListenerType, GameScreenState, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListenerType(extras) {
    _reporterNs.report("EventListenerType", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScreenState(extras) {
    _reporterNs.report("GameScreenState", "./constants", _context.meta, extras);
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
      EventListenerType = _unresolved_3.EventListenerType;
      GameScreenState = _unresolved_3.GameScreenState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8a43XvHX5N+oEmQpYZrYbS", "gameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);
          this.currentState = void 0;
          this.layerMap = new Map();

          _initializerDefineProperty(this, "lobbyLayer", _descriptor, this);

          _initializerDefineProperty(this, "popup", _descriptor2, this);

          _initializerDefineProperty(this, "stageLayer", _descriptor3, this);
        }

        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.registerEvent((_crd && EventListenerType === void 0 ? (_reportPossibleCrUseOfEventListenerType({
            error: Error()
          }), EventListenerType) : EventListenerType).SET_GAME_SCREEN_STATE, this.setGameState.bind(this), this.node);
          this.initState();
        }

        start() {
          console.log(this.layerMap);
        }

        update(deltaTime) {}

        initState() {
          this.currentState = (_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).LOBBY;
          this.layerMap.set((_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).LOBBY, this.lobbyLayer);
          this.layerMap.set((_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).PLAYING, this.stageLayer);
          this.layerMap.set((_crd && GameScreenState === void 0 ? (_reportPossibleCrUseOfGameScreenState({
            error: Error()
          }), GameScreenState) : GameScreenState).POPUP, this.popup);
          Array.from(this.layerMap.values()).forEach(layer => {
            layer.active = false;
          });
          this.showCurrentLayer();
        }

        showCurrentLayer(state = true) {
          this.layerMap.get(this.currentState).active = state;
        }

        setGameState(state) {
          this.showCurrentLayer(false);
          this.currentState = state;
          this.showCurrentLayer();
        }

        onDestroy() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.removeAllEvent(this.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lobbyLayer", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stageLayer", [_dec3], {
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
//# sourceMappingURL=39ac042335b8e3d62c5242e3f57c3985871e6ca1.js.map