System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, GameManager;

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

      _cclegacy._RF.push({}, "e8a43XvHX5N+oEmQpYZrYbS", "gameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends Component {
        // private _currentState: string;
        // private _layerMap: Map<string, Node> = new Map();
        // @property(Node)
        // lobbyLayer: Node;
        // @property(Node)
        // stageLayer: Node;
        // @property(Node)
        // popupLayer: Node;
        // @property(Node)
        // GlobalButton: Node;
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=849ece2711c282bba078705af21be4509f319e5c.js.map