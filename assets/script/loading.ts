import { _decorator, Component, Node, director, Director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {
    protected onLoad(): void {

    }

    protected start(): void {
        director.preloadScene(
            'titleScreen',
            (completedCount: number, totalCount: number, item: any) => {
                if (completedCount === totalCount) {
                    console.log(completedCount);
                    director.loadScene('titleScreen');
                }
            }, () => {

            })
    }
}

