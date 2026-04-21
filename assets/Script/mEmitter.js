const EventEmitter = require('events');
class mEmitter {

    constructor() {
        if (mEmitter.instance) {
            return mEmitter.instance;
        }
        this.events = new Map();
        this._emiter = new EventEmitter();
        this._emiter.setMaxListeners(100);
        mEmitter.instance = this;
    }

    emit(...args) {
        this._emiter.emit(...args);
    }

    registerEvent(event, listener, node) {
        if (node) {
            this.events.set(node, { 'event': event, 'listener': listener });
        }
        this._emiter.on(event, listener);
    }
    registerOnce(event, listener) {
        this._emiter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emiter.removeListener(event, listener);
        this.events.delete(event);
    }

    removeAllEvent(node) {
        this.events[node].forEach((listener, event) => {
            this._emiter.removeListener(event, listener);
        });
        this.events.clear();
    }

    destroy() {
        this._emiter.removeAllListeners();
        this._emiter = null;
        mEmitter.instance = null;
    }
}
mEmitter.instance = null;
module.exports = mEmitter;