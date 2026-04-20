const EventEmitter = require('events');
class mEmitter {

    constructor() {
        if (mEmitter.instance) {
            return mEmitter.instance;
        }
        this.events = new Map();
        this._emiter = new EventEmitter();
        this._emiter.setMaxListeners(100);
    }

    emit(...args) {
        this._emiter.emit(...args);
    }

    registerEvent(event, listener) {
        this.events.set(event, listener);
        this._emiter.on(event, listener);
    }
    registerOnce(event, listener) {
        this._emiter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emiter.removeListener(event, listener);
        this.events.delete(event);
    }

    removeAllEvent() {
        this.events.forEach((listener, event) => {
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