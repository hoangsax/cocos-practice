System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, mEmitter, _dec, _class, _crd, ccclass, property, GameManager;

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
      input = _cc.input;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      mEmitter = _unresolved_2.mEmitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8a43XvHX5N+oEmQpYZrYbS", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends Component {
        onLoad() {
          new (_crd && mEmitter === void 0 ? (_reportPossibleCrUseOfmEmitter({
            error: Error()
          }), mEmitter) : mEmitter)();
          input.on(Input.EventType.KEY_DOWN, this.onPress.bind(this), this);
          input.on(Input.EventType.KEY_UP, this.onUnPress.bind(this), this);
        }

        start() {}

        onPress(event) {
          if (event) {
            console.log(event.target);
          }
        }

        onUnPress(event) {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9ab4197cb0252c9824230a228d6d87da44b7e0b.js.map