import { _decorator, Component, Node, Event } from 'cc';
const { ccclass, property } = _decorator;
import EventEmitter from 'events';

interface listenerType {
    event: string,
    listener: Function
}

@ccclass('mEmitter')
class mEmitter {
    static instance: mEmitter = null;
    private _emitter: EventEmitter;
    private eventListeners = new Map<Node, listenerType[]>();
    constructor() {
        if (mEmitter.instance) {
            return mEmitter.instance;
        }
        this._emitter = new EventEmitter();
        this._emitter.setMaxListeners(100);
        mEmitter.instance = this;
    }

    emit(...args) {
        this._emitter.emit(...args);
    }

    registerEvent(event: string, listener: Function, node: Node) {
        if (!this.eventListeners.has(node)) {
            this.eventListeners.set(node, []);
        }
        for (let listener of this.eventListeners.get(node)) {
            if (listener.event === event) {
                return;
            }
        }
        this._emitter.on(event, listener);
        const item: listenerType = {
            event: event,
            listener: listener
        }
        this.eventListeners.get(node).push(item)
    }
    registerOnce(event: string, listener: Function) {
        this._emitter.once(event, listener);
    }

    removeEvent(event: string, listener: Function, node: Node) {
        this.eventListeners.get(node).forEach((item: listenerType, index: number) => {
            if (item.event === event && item.listener === listener) {
                this.eventListeners.get(node).splice(index, 1);
            }
        });
        this._emitter.removeListener(event, listener);

    }

    removeAllEvent(node: Node) {
        this.eventListeners.get(node).forEach((item: listenerType) => {
            this._emitter.removeListener(item.event, item.listener);
        });
        this.eventListeners.delete(node);
    }

    destroy() {
        this._emitter.removeAllListeners();
        this._emitter = null;
        mEmitter.instance = null;
    }
}
mEmitter.instance = null;
export { mEmitter };