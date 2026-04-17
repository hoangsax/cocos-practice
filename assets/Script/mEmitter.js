const EventEmitter = require('events');
class mEmitter {
    
    constructor() {
        if (mEmitter.instance) {
            return mEmitter.instance;
        }
        this._emiter = new EventEmitter();
        this._emiter.setMaxListeners(100);
    }

    emit(...args)
    {
        console.log(this._emiter.emit(...args));
    }

    registerEvent(event, listener) {
        this._emiter.on(event, listener);
    }
    registerOnce(event, listener){
        this._emiter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emiter.removeListener(event, listener);
    }

    removeAllEvent() {
        this._emiter.removeAllListeners();
    }

    destroy()
    {
        this._emiter.removeAllListeners();
        this._emiter = null;
        mEmitter.instance = null;
    }
}
mEmitter.instance = null;
module.exports = mEmitter;