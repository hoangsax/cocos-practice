System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8a43XvHX5N+oEmQpYZrYbS", "gameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          // private _currentState: string;
          // private _layerMap: Map<string, Node> = new Map();
          // @property(Node)
          // lobbyLayer: Node;
          // @property(Node)
          // stageLayer: Node;
          // @property(Node)
          // popupLayer: Node;
          _initializerDefineProperty(this, "Popup", _descriptor, this);
        }

        // protected onLoad(): void {
        //     new GameState();
        //     new mEmitter();
        //     mEmitter.instance.registerEvent(EventListenerType.SET_LAYER_STATE, this.setLayerState.bind(this), this.node);
        //     mEmitter.instance.registerEvent(GameStateType.TOGGLEPAUSE, this.setGameState.bind(this), this.node);
        //     this.initState()
        // }
        // start() {
        //     this.showHitBox()
        // }
        // update(deltaTime: number) {
        //     if (GameState.instance.isPause){
        //         this._layerMap.get(GameScreenState.POPUP).active = true;
        //     }
        //     else {
        //         this._layerMap.get(GameScreenState.POPUP).active = false;
        //     }
        // }
        // initState(){
        //     this._currentState = GameScreenState.LOBBY;
        //     this._layerMap.set(GameScreenState.LOBBY, this.lobbyLayer);
        //     this._layerMap.set(GameScreenState.PLAYING, this.stageLayer);
        //     this._layerMap.set(GameScreenState.POPUP, this.popupLayer);
        //     this._layerMap.set(GameScreenState.GLOBALBUTTON, this.popupLayer);
        //     Array.from(this._layerMap.values()).forEach(layer => {
        //         layer.active = false;
        //     })
        //     this.showCurrentLayer();
        // }
        // showCurrentLayer(state: boolean = true) {
        //     this._layerMap.get(this._currentState).active = state;
        // }
        // setGameState(){
        //     GameState.instance.togglePause();
        // }
        // setLayerState(data: string) {
        //     this.showCurrentLayer(false);
        //     this._currentState = data;
        //     this.showCurrentLayer();
        // }
        // showHitBox(){
        //     PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        //     EPhysics2DDrawFlags.Pair |
        //     EPhysics2DDrawFlags.CenterOfMass |
        //     EPhysics2DDrawFlags.Joint |
        //     EPhysics2DDrawFlags.Shape;
        // }
        // protected onDestroy(): void {
        //     mEmitter.instance.removeAllEvent(this.node);
        // }
        onLoad() {
          director.loadScene('loading');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Popup", [_dec2], {
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
//# sourceMappingURL=1b23dc647d01755a5cf1c499a5caaf0931456bf3.js.map