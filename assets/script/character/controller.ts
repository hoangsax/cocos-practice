import { _decorator, Component, Node, sp, Vec3, UITransform, Vec2, Game } from 'cc';
import { MoveDirection, animations } from '../constants';
import { GameState } from '../gameState';
const { ccclass, property } = _decorator;

export interface CharItemNode extends Node {
    onPressMove?: (direction: number) => void;
    onPressStop?: (direction: number) => void;
    onShoot?: () => void;
    onReloadDone?: () => void;
    posFire?: Node;
    setMaxResolution?: (h: number, w: number) => void;
    setCanPlay?: (value: boolean) => void;
    resetState?: () => void;
}


const charProps = {
    speed: 100,
    scencePaddingLeft: 75,
    scencePaddingRight: 75,
    scencePaddingTop: 150,
    scencePaddingBottom: 10,
}

@ccclass('CharacterController')
export class CharacterController extends Component {
    @property(Node)
    posFire: Node;

    @property(sp.Skeleton)
    skeleton: sp.Skeleton;

    _maxResolution: {
        height: number,
        width: number
    }
    _speed: number = 400;
    _isReload: boolean = false;
    _preReload: boolean = false;
    _isMoving: boolean = false;
    _isMovingRight: boolean = false;
    _isMovingLeft: boolean = false;
    _isMovingUp: boolean = false;
    _isMovingDown: boolean = false;
    _readyTimer: number = 3;
    _canPlay: boolean = false;

    _initPosition: Vec3;

    protected onLoad(): void {

        new GameState();
        this.readyState();
        this._initPosition = this.node.position.clone();
        this.skeleton.setMix(animations.shoot, animations.run, 0.2);
        (this.node as CharItemNode).posFire = this.posFire;
        (this.node as CharItemNode).onPressMove = this.onPressMove.bind(this);
        (this.node as CharItemNode).onPressStop = this.onPressStop.bind(this);
        (this.node as CharItemNode).onShoot = this.onShoot.bind(this);
        (this.node as CharItemNode).onReloadDone = this.onReloadDone.bind(this);
        (this.node as CharItemNode).setMaxResolution = this.setMaxResolution.bind(this);
        (this.node as CharItemNode).setCanPlay = this.setCanPlay.bind(this);
        (this.node as CharItemNode).resetState = this.resetState.bind(this);
    }

    protected update(dt: number): void {
        if (this._canPlay && !GameState.instance.isPause) {
            if (this._readyTimer > 0){
                this._readyTimer -= dt;
                if (this._readyTimer <= 0){
                    this._readyTimer = 0;
                }
                return;
            }
            let currState = this._isMoving;
            this.onMove(dt);
            this.handleAnimation(currState);
            this._preReload = this._isReload;
        }

    }

    readyState() {
        this.playAnimation(0, animations.portal, false);
    }

    resetState() {
        this._isReload = false;
        this._preReload = false;
        this._isMoving = false;
        this._isMovingRight = false;
        this._isMovingLeft = false;
        this._isMovingUp = false;
        this._readyTimer = 3;
        this._isMovingDown = false;
        this._canPlay = false;
        this.node.setPosition(this._initPosition);
        this.readyState();
    }

    setMaxResolution(height: number, width: number) {
        this._maxResolution = {
            height: height,
            width: width
        }
    }

    setCanPlay(value: boolean) {
        this._canPlay = value;
    }

    getNodePosition(): Vec3 {
        return this.node.position;
    }

    toNodePosition(node: Node): Vec3 {
        const uiTransform = this.node.getComponent(UITransform);
        if (uiTransform) {
            return uiTransform.convertToNodeSpaceAR(node.position);
        }
        return null;
    }

    setMoving(direction: number, isMoving = false) {
        switch (direction) {
            case MoveDirection.LEFT:
                this._isMovingLeft = isMoving;
                break;
            case MoveDirection.RIGHT:
                this._isMovingRight = isMoving;
                break;
            case MoveDirection.UP:
                this._isMovingUp = isMoving;
                break;
            case MoveDirection.DOWN:
                this._isMovingDown = isMoving;
                break;
        }
    }

    onPressMove(direction: number) {
        this.setMoving(direction, true);
    }

    onPressStop(direction: number) {
        this.setMoving(direction, false);
    }

    limitPositionOnScene() {
        if (this.getNodePosition().x < -this._maxResolution.width / 2 + charProps.scencePaddingLeft) {
            this.getNodePosition().x = -this._maxResolution.width / 2 + charProps.scencePaddingLeft;
        }
        if (this.getNodePosition().x > this._maxResolution.width / 2 - charProps.scencePaddingRight) {
            this.getNodePosition().x = this._maxResolution.width / 2 - charProps.scencePaddingRight;
        }
        if (this.getNodePosition().y < -this._maxResolution.height / 2 + charProps.scencePaddingBottom) {
            this.getNodePosition().y = -this._maxResolution.height / 2 + charProps.scencePaddingBottom;
        }
        if (this.getNodePosition().y > this._maxResolution.height / 2 - charProps.scencePaddingTop) {
            this.getNodePosition().y = this._maxResolution.height / 2 - charProps.scencePaddingTop;
        }
    }

    onMove(dt: number) {
        if (this._isReload && !this._preReload) {
            return;
        }
        let moveX = 0;
        let moveY = 0;

        if (this._isMovingRight) moveX += 1;
        if (this._isMovingLeft) moveX -= 1;
        if (this._isMovingUp) moveY += 1;
        if (this._isMovingDown) moveY -= 1;

        if (moveX !== 0 && moveY !== 0) {
            let distance = Math.sqrt((this._speed * dt) ** 2 / 2);
            let posX = this.getNodePosition().x + moveX * distance;
            let posY = this.getNodePosition().y + moveY * distance;
            this.node.setPosition(new Vec3(posX, posY, 0))
            this._isMoving = true;
        }
        else if (moveX !== 0 || moveY !== 0) {
            let posX = this.getNodePosition().x + moveX * this._speed * dt;
            let posY = this.getNodePosition().y + moveY * this._speed * dt;
            this.node.setPosition(new Vec3(posX, posY, 0))
            this._isMoving = true;
        }
        else {
            this._isMoving = false;
        }
        this.limitPositionOnScene();
    }

    onStop() {
        this._isMoving = false;
        this._isMovingLeft = false;
        this._isMovingRight = false;
        this._isMovingUp = false;
        this._isMovingDown = false;
    }

    onShoot() {
        if (!this._isReload) {
            this._isReload = true;
            this.playAnimation(0, animations.idle, true);
            this.playAnimation(1, animations.shoot, false);
        }
    }

    onReloadDone() {
        this._isReload = false;
    }

    handleAnimation(currState: boolean) {
        if (this._preReload && !this._isReload) {
            if (this._isMoving) {
                this.playAnimation(0, animations.run)
            }
            else {
                this.playAnimation(0, animations.idle)
            }
        }
        else if (this._isMoving && !currState) {
            this.playAnimation(0, animations.run)
        }
        else if (!this._isMoving && currState) {
            this.playAnimation(0, animations.idle)
        }
    }

    playAnimation(track = 0, animationName: string, loop = true) {
        this.skeleton.setAnimation(track, animationName, loop);
    }
}

