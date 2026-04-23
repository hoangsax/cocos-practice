import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags } from 'cc';
import { mEmitter } from './mEmitter';
import { EventListenerType, GameScreenState } from './constants';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    private currentState: string;

    private layerMap: Map<string, Node> = new Map();

    @property(Node)
    lobbyLayer: Node;

    @property(Node)
    stageLayer: Node;

    @property(Node)
    popupLayer: Node;

    protected onLoad(): void {
        new mEmitter();
        mEmitter.instance.registerEvent(EventListenerType.SET_LAYER_STATE, this.setGameState.bind(this), this.node);
        this.initState()
    }

    start() {
        this.showHitBox()
    }

    update(deltaTime: number) {

    }

    initState(){
        this.currentState = GameScreenState.LOBBY;
        this.layerMap.set(GameScreenState.LOBBY, this.lobbyLayer);
        this.layerMap.set(GameScreenState.PLAYING, this.stageLayer);
        this.layerMap.set(GameScreenState.POPUP, this.popupLayer);

        Array.from(this.layerMap.values()).forEach(layer => {
            layer.active = false;
        })

        this.showCurrentLayer();
    }

    showCurrentLayer(state: boolean = true) {
        this.layerMap.get(this.currentState).active = state;
    }

    setGameState(data: string) {
        this.showCurrentLayer(false);
        this.currentState = data;
        this.showCurrentLayer();
        console.log(this.layerMap)
    }

    showHitBox(){
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        EPhysics2DDrawFlags.Pair |
        EPhysics2DDrawFlags.CenterOfMass |
        EPhysics2DDrawFlags.Joint |
        EPhysics2DDrawFlags.Shape;
    }

    protected onDestroy(): void {
        mEmitter.instance.removeAllEvent(this.node);
    }

}

