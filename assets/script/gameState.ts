import { _decorator, Component, game, Node, director } from 'cc';
import { StateMachine } from 'javascript-state-machine'
const { ccclass, property } = _decorator;

@ccclass('GameState')
export class GameState {
    static instance: GameState = null;
    isPause: boolean = false;

    _popupNode: Node;

    constructor() {
        if (GameState.instance) {
            return GameState.instance;
        }
        this.isPause = false;
        GameState.instance = this;

        // var fsm = new StateMachine({
        //     init: 'solid',
        //     transitions: [
        //         { name: 'loading', from: '*', to: '*' },
        //         // { name: 'freeze', from: 'liquid', to: 'solid' },
        //         // { name: 'vaporize', from: 'liquid', to: 'gas' },
        //         // { name: 'condense', from: 'gas', to: 'liquid' }
        //     ],
        //     methods: {
        //         onLoading: function () { console.log('I melted') },
        //         // onFreeze: function () { console.log('I froze') },
        //         // onVaporize: function () { console.log('I vaporized') },
        //         // onCondense: function () { console.log('I condensed') }
        //     }
        // });
    }

    get popupNode(): Node {
        return this._popupNode;
    }

    set popupNode(value: Node) {
        this._popupNode = value;
        this._popupNode.active = false;
        this._popupNode.parent = director.getScene()? director.getScene().parent : this.popupNode.parent;
    }

    togglePause() {
        this.isPause = !this.isPause;
    }

    destroy() {
        GameState.instance = null;
    }
}

GameState.instance = null;