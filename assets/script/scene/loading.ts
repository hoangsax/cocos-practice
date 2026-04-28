import { _decorator, Component, Node, director, Director, ProgressBar, Label } from 'cc';
import { ScreenName } from '../constants';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {

    @property(ProgressBar)
    loadingBar: ProgressBar;
    @property(Label)
    loadingPercent: Label;

    protected start(): void {
        director.preloadScene(
            ScreenName.TITLE,
            (completedCount: number, totalCount: number, item: any) => {
                this.loadingBar.progress = completedCount / totalCount;
                this.loadingPercent.string = `${completedCount / totalCount * 100}%`;
                if (completedCount === totalCount) {
                    setTimeout(() => {
                        director.loadScene(ScreenName.TITLE);
                    }, 1000)
                }
            }, () => {

            })
    }
}

