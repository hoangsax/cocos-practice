import {
    _decorator, Component, Node,
     PhysicsSystem2D, EPhysics2DDrawFlags ,
    director
} from 'cc';

import { GameState } from './gameState';
import { AudioManager } from './audioManager';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    protected onLoad(): void {
        new GameState();
        new AudioManager();
    }

    showHitBox(){
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        EPhysics2DDrawFlags.Pair |
        EPhysics2DDrawFlags.CenterOfMass |
        EPhysics2DDrawFlags.Joint |
        EPhysics2DDrawFlags.Shape;
    }

}

