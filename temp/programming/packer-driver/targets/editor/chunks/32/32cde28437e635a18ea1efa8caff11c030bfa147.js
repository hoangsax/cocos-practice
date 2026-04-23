System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SystemEvent, mEmitter, EventType, _dec, _class, _crd, ccclass, property, Control;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./Constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "Control", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SystemEvent', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Control", Control = (_dec = ccclass('Control'), _dec(_class = class Control extends Component {
        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          let systemEvent = new SystemEvent();
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onClickDisable.bind(this), this);
        }

        start() {}

        update(deltaTime) {}

        onClickEnable(event) {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).ENABLE, 'holi');
          console.log(event);
        }

        onClickDisable() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).DISABLE, 'hello');
          console.log("click disable");
        }

        onClickHoli() {
          (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter).instance.emit("HOLI");
          console.log("click holi");
        }

        clear() {
          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32cde28437e635a18ea1efa8caff11c030bfa147.js.map