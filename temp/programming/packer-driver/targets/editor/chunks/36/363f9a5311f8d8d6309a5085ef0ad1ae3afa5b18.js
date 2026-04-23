System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mEmitter, _dec, _class, _crd, ccclass, property, Control;

  function _reportPossibleCrUseOfmEmitter(extras) {
    _reporterNs.report("mEmitter", "./mEmitter", _context.meta, extras);
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
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a661WLdKVFt70xJqMeWCK0", "control", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Control", Control = (_dec = ccclass('Control'), _dec(_class = class Control extends Component {
        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
        }

        start() {}

        update(deltaTime) {}

        onClickEnable(event) {
          // mEmitter.instance.emit(EventType.ENABLE, 'holi');
          console.log(event);
          console.log("click enable");
        }

        onClickDisable() {
          // mEmitter.instance.emit(EventType.DISABLE, 'hello');
          console.log("click disable");
        }

        onClickHoli() {
          // mEmitter.instance.emit("HOLI");
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
//# sourceMappingURL=363f9a5311f8d8d6309a5085ef0ad1ae3afa5b18.js.map