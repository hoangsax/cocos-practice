System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, KeyCode, mEmitter, CharacterEventType, MoveDirection, GameState, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, stageManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "../mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEventType(extras) {
    _reporterNs.report("CharacterEventType", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveDirection(extras) {
    _reporterNs.report("MoveDirection", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../gameState", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }, function (_unresolved_3) {
      CharacterEventType = _unresolved_3.CharacterEventType;
      MoveDirection = _unresolved_3.MoveDirection;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b1f5qCkypLSomoxvRlK+p7", "mainGame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'EventKeyboard', 'KeyCode']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("stageManager", stageManager = (_dec = ccclass('stageManager'), _dec2 = property(Node), _dec(_class = (_class2 = class stageManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "popup", _descriptor, this);
        }

        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          this.startListener();
        }

        startListener() {
          input.on(Input.EventType.KEY_DOWN, this.handlePress.bind(this), this);
          input.on(Input.EventType.KEY_UP, this.handlePress.bind(this), this);
        }

        stopListener() {
          input.off(Input.EventType.KEY_DOWN, this.handlePress.bind(this), this);
          input.off(Input.EventType.KEY_UP, this.handlePress.bind(this), this);
        }

        handlePress(event) {
          if ((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance._isPause) {
            return;
          }

          const moveType = event.type === Input.EventType.KEY_DOWN ? (_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).MOVE : (_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).STOP;
          const shootType = event.type === Input.EventType.KEY_DOWN ? (_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).SHOOT : (_crd && CharacterEventType === void 0 ? (_reportPossibleCrUseOfCharacterEventType({
            error: Error()
          }), CharacterEventType) : CharacterEventType).RELOAD;

          switch (event.keyCode) {
            case KeyCode.KEY_A:
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit(moveType, (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
                error: Error()
              }), MoveDirection) : MoveDirection).LEFT);
              break;

            case KeyCode.KEY_D:
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit(moveType, (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
                error: Error()
              }), MoveDirection) : MoveDirection).RIGHT);
              break;

            case KeyCode.KEY_W:
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit(moveType, (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
                error: Error()
              }), MoveDirection) : MoveDirection).UP);
              break;

            case KeyCode.KEY_S:
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit(moveType, (_crd && MoveDirection === void 0 ? (_reportPossibleCrUseOfMoveDirection({
                error: Error()
              }), MoveDirection) : MoveDirection).DOWN);
              break;

            case KeyCode.SPACE:
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit(shootType);
              break;
          }
        }

        onDestroy() {
          this.stopListener();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec2], {
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
//# sourceMappingURL=de6b393fc006334c19a7532bbee5d432b1990246.js.map