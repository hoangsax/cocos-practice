System.register(["__unresolved_0", "cc", "events"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Emitter, _dec, _class, _class2, _crd, ccclass, property, mEmitter;

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "events", _context.meta, extras);
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
      Emitter = _events.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a6cdaSAo9Pl6nvkrVkrWqB", "mEmitter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mEmitter", mEmitter = (_dec = ccclass('mEmitter'), _dec(_class = (_class2 = class mEmitter {
        constructor() {
          this._emitter = void 0;
          this.eventListeners = new Map();

          if ((_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
            error: Error()
          }), Emitter) : Emitter).instance) {
            return (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
              error: Error()
            }), Emitter) : Emitter).instance;
          }

          this._emitter = new (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
            error: Error()
          }), Emitter) : Emitter)();

          this._emitter.setMaxListeners(100);

          mEmitter.instance = this._emitter;
          console.log("finish emitter");
        }

        emit() {
          this._emitter.emit(...arguments);
        }

        registerEvent(event, listener, node) {
          this._emitter.on(event, listener);

          if (!this.eventListeners.has(node)) {
            this.eventListeners.set(node, []);
          }

          for (var _listener of this.eventListeners.get(node)) {
            if (_listener.event === event) {
              return;
            }
          }

          this.eventListeners.get(node).push({
            event: event,
            listener: listener
          });
        }

        registerOnce(event, listener) {
          this._emitter.once(event, listener);
        }

        removeEvent(event, listener, node) {
          this._emitter.removeListener(event, listener);

          this.eventListeners.delete(node);
        }

        removeAllEvent(node) {
          this.eventListeners.get(node).forEach((listener, event) => {
            this._emitter.removeListener(event, listener);
          });
          this.eventListeners.clear();
        }

        destroy() {
          this._emitter.removeAllListeners();

          this._emitter = null;
          mEmitter.instance = null;
        }

      }, _class2.instance = void 0, _class2)) || _class));

      (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
        error: Error()
      }), Emitter) : Emitter).instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be692055c5d5cad322ce1bd06a3eee5fa28aee32.js.map