import { _decorator, Component, Node, sp, Vec3, UITransform } from 'cc';
import { MoveDirection, animations } from '../constants';
const { ccclass, property } = _decorator;

export interface CharItemNode extends Node {
    onPressMove?: (direction: number) => void;
    onPressStop?: (direction: number) => void;
    onShoot?: () => void;
    onReloadDone?: () => void;
    setPause?: (state: boolean) => void;
}


const charProps = {
    speed: 300,
    scencePaddingLeft: 75,
    scencePaddingRight: 1000,
    scencePaddingTop: 150,
    scencePaddingBottom: 75,
}

@ccclass('CharacterController')
export class CharacterController extends Component {
    @property(Node)
    posFire: Node;

    @property(sp.Skeleton)
    skeleton: sp.Skeleton;

    @property(UITransform)
    canvas: UITransform;

    isPause: boolean = false;
    speed: number = 1000;
    isReload: boolean = false;
    preReload: boolean = false;
    isMoving: boolean = false;
    isMovingRight: boolean = false;
    isMovingLeft: boolean = false;
    isMovingUp: boolean = false;
    isMovingDown: boolean = false;

    protected onLoad(): void {
        this.skeleton.setMix(animations.shoot, animations.run, 0.2);

        (this.node as CharItemNode).setPause = this.setPause.bind(this);

        (this.node as CharItemNode).onPressMove = this.onPressMove.bind(this);
        (this.node as CharItemNode).onPressStop = this.onPressStop.bind(this);
        (this.node as CharItemNode).onShoot = this.onShoot.bind(this);
        (this.node as CharItemNode).onReloadDone = this.onReloadDone.bind(this);
    }

    protected update(dt: number): void {
        if (!this.isPause) {
            let currState = this.isMoving;
            this.onMove(dt);
            this.handleAnimation(currState);
            this.preReload = this.isReload;
        }
    }

    getNodePosition(): Vec3 {
        return this.node.position;
    }

    // getWorldPosition(): Vec3 {
    //     return this.node.worldPosition;
    // }

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
                this.isMovingLeft = isMoving;
                break;
            case MoveDirection.RIGHT:
                this.isMovingRight = isMoving;
                break;
            case MoveDirection.UP:
                this.isMovingUp = isMoving;
                break;
            case MoveDirection.DOWN:
                this.isMovingDown = isMoving;
                break;
        }
    }

    onPressMove(direction: number) {
        this.setMoving(direction, true);
        console.log("charItem move", direction);
    }

    onPressStop(direction: number) {
        this.setMoving(direction, false);
    }

    limitPositionOnScene() {
        if (this.getNodePosition().x < -this.canvas.width / 2 + charProps.scencePaddingLeft) {
            this.getNodePosition().x = -this.canvas.width / 2 + charProps.scencePaddingLeft;
        }
        if (this.getNodePosition().x > this.canvas.width / 2 - charProps.scencePaddingRight) {
            this.getNodePosition().x = this.canvas.width / 2 - charProps.scencePaddingRight;
        }
        if (this.getNodePosition().y < -this.canvas.height / 2 + charProps.scencePaddingBottom) {
            this.getNodePosition().y = -this.canvas.height / 2 + charProps.scencePaddingBottom;
        }
        if (this.getNodePosition().y > this.canvas.height / 2 - charProps.scencePaddingTop) {
            this.getNodePosition().y = this.canvas.height / 2 - charProps.scencePaddingTop;
        }
    }

    onMove(dt: number) {
        if (this.isReload && !this.preReload) {
            return;
        }
        let moveX = 0;
        let moveY = 0;

        if (this.isMovingRight) moveX += 1;
        if (this.isMovingLeft) moveX -= 1;
        if (this.isMovingUp) moveY += 1;
        if (this.isMovingDown) moveY -= 1;

        if (moveX !== 0 || moveY !== 0) {
            let posX = this.getNodePosition().x + moveX * this.speed * dt;
            let posY = this.getNodePosition().y + moveY * this.speed * dt;
            this.node.setPosition(new Vec3(posX, posY, 0))
            this.isMoving = true;
        }
        else {
            this.isMoving = false;
        }
        this.limitPositionOnScene();
    }

    onStop() {
        this.isMoving = false;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isMovingUp = false;
        this.isMovingDown = false;
    }

    onShoot() {
        if (!this.isReload) {
            this.isReload = true;
            this.playAnimation(0, animations.walk, false);
            this.playAnimation(0, animations.shoot, true);
        }
    }

    onReloadDone() {
        this.isReload = false;
    }

    handleAnimation(currState: boolean) {
        if (this.preReload && !this.isReload) {
            if (this.isMoving) {
                this.playAnimation(0, animations.run)
            }
            else {
                this.playAnimation(0, animations.idle)
            }
        }
        else if (this.isMoving && !currState) {
            this.playAnimation(0, animations.run)
        }
        else if (!this.isMoving && currState) {
            this.playAnimation(0, animations.idle)
        }
    }

    playAnimation(track = 0, animationName: string, loop = true) {
        this.skeleton.setAnimation(track, animationName, loop);
    }

    setPause(state: boolean) {
        if (state !== this.isPause){
            this.isPause = !this.isPause;
        }
    }
}

