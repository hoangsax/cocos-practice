System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, KeyCode, director, Label, mEmitter, CharacterEventType, GameCommand, MoveDirection, ScreenName, GameState, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, mainGame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "../mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEventType(extras) {
    _reporterNs.report("CharacterEventType", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCommand(extras) {
    _reporterNs.report("GameCommand", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveDirection(extras) {
    _reporterNs.report("MoveDirection", "../constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenName(extras) {
    _reporterNs.report("ScreenName", "../constants", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }, function (_unresolved_3) {
      CharacterEventType = _unresolved_3.CharacterEventType;
      GameCommand = _unresolved_3.GameCommand;
      MoveDirection = _unresolved_3.MoveDirection;
      ScreenName = _unresolved_3.ScreenName;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b1f5qCkypLSomoxvRlK+p7", "mainGame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'EventKeyboard', 'KeyCode', 'director', 'Label', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mainGame", mainGame = (_dec = ccclass('mainGame'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = class mainGame extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stagePopup", _descriptor, this);

          _initializerDefineProperty(this, "timer", _descriptor2, this);

          _initializerDefineProperty(this, "resultScreen", _descriptor3, this);

          this._startCountdown = 3;
          this._stageLimitTime = 10;
          this._currentTimer = 0;
          this._isStart = false;
        }

        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)();
          this.initState();
        }

        update(dt) {
          if ((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.isPause) {
            return;
          }

          if (this._startCountdown > 0) {
            if (!this._isStart) {
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit((_crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
                error: Error()
              }), GameCommand) : GameCommand).START, this._startCountdown);
            }

            this._isStart = true;
            this._startCountdown -= dt;

            if (this._startCountdown <= 0) {
              this._startCountdown = 0;
            }
          } else {
            this._currentTimer -= dt;
            this.timer.string = Math.floor(this._currentTimer).toString();

            if (this._currentTimer <= 0) {
              this.timer.string = '0';
              this.showResult();
              (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
                error: Error()
              }), mEmitter) : mEmitter).instance.emit((_crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
                error: Error()
              }), GameCommand) : GameCommand).END);
            }
          }
        }

        initState() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.isPause = false;
          this._startCountdown = 3;
          this.stagePopup.active = false;
          this.resultScreen.active = false;
          this._isStart = false;

          this._startListener();

          this._currentTimer = this._stageLimitTime;
          this.timer.string = Math.floor(this._stageLimitTime).toString();
        }

        _startListener() {
          input.on(Input.EventType.KEY_DOWN, this._handlePress.bind(this), this);
          input.on(Input.EventType.KEY_UP, this._handlePress.bind(this), this);
        }

        _stopListener() {
          input.off(Input.EventType.KEY_DOWN, this._handlePress.bind(this), this);
          input.off(Input.EventType.KEY_UP, this._handlePress.bind(this), this);
        }

        _handlePress(event) {
          if ((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.isPause) {
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

        showResult() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.isPause = true;
          this.resultScreen.active = true;
        }

        togglePause() {
          this.stagePopup.active = !this.stagePopup.active;
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.togglePause(); // if (this.stagePopup.active) {
          //     director.pause();
          // }
          // else {
          //     director.resume();
          // }
        }

        toggleSetting() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.togglePopup();
        }

        playClickSound() {
          (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).instance.playClickSound();
        }

        resetStage() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
            error: Error()
          }), GameCommand) : GameCommand).RESTART);
          this.initState();
        }

        exitGame() {
          director.loadScene((_crd && ScreenName === void 0 ? (_reportPossibleCrUseOfScreenName({
            error: Error()
          }), ScreenName) : ScreenName).LOADING);
        }

        onDestroy() {
          this._stopListener();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stagePopup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultScreen", [_dec4], {
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
//# sourceMappingURL=6a2eae45647fad49a408a29256e41831a6baa054.js.map