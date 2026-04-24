System.register(["__unresolved_0", "cc", "events"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventEmitter, _dec, _class, _class2, _crd, ccclass, property, mEmitter;

  function _reportPossibleCrUseOfEventEmitter(extras) {
    _reporterNs.report("EventEmitter", "events", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_events) {
      EventEmitter = _events.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a6cdaSAo9Pl6nvkrVkrWqB", "mEmitter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mEmitter", mEmitter = (_dec = ccclass('mEmitter'), _dec(_class = (_class2 = class mEmitter {
        constructor() {
          this._emitter = void 0;
          this.eventListeners = new Map();

          if (mEmitter.instance) {
            return mEmitter.instance;
          }

          this._emitter = new (_crd && EventEmitter === void 0 ? (_reportPossibleCrUseOfEventEmitter({
            error: Error()
          }), EventEmitter) : EventEmitter)();

          this._emitter.setMaxListeners(100);

          mEmitter.instance = this;
        }

        emit(...args) {
          this._emitter.emit(...args);
        }

        registerEvent(event, listener, node) {
          if (!this.eventListeners.has(node)) {
            this.eventListeners.set(node, []);
          }

          for (let listener of this.eventListeners.get(node)) {
            if (listener.event === event) {
              return;
            }
          }

          this._emitter.on(event, listener);

          const item = {
            event: event,
            listener: listener
          };
          this.eventListeners.get(node).push(item);
        }

        registerOnce(event, listener) {
          this._emitter.once(event, listener);
        }

        removeEvent(event, listener, node) {
          this._emitter.removeListener(event, listener);

          this.eventListeners.delete(node);
        }

        removeAllEvent(node) {
          this.eventListeners.get(node).forEach(item => {
            this._emitter.removeListener(item.event, item.listener);
          });
          console.log('1');
          this.eventListeners.set(node, []);
          console.log('2');
        }

        destroy() {
          this._emitter.removeAllListeners();

          this._emitter = null;
          mEmitter.instance = null;
        }

      }, _class2.instance = null, _class2)) || _class));

      mEmitter.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9d843ffee52883a2964c9a562d22827ad34f610.js.map