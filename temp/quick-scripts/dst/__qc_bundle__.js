
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/CharacterMovement');
require('./assets/Script/HelloWorld');
require('./assets/Script/SpineAnimation/AnimationHandler');
require('./assets/Script/SpineAnimation/AnimationList');
require('./assets/Script/SpineAnimation/EventSender');
require('./assets/Script/SpineAnimation/ItemScript');
require('./assets/Script/SpineAnimation/SpineInspector');
require('./assets/Script/mEmitter');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: 'Hello, World!'
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.label.string = this.text;
  },
  // called every frame
  update: function update(dt) {}
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidGV4dCIsIm9uTG9hZCIsInN0cmluZyIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZOLENBREM7SUFLUjtJQUNBQyxJQUFJLEVBQUU7RUFORSxDQUhQO0VBWUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtKLEtBQUwsQ0FBV0ssTUFBWCxHQUFvQixLQUFLRixJQUF6QjtFQUNILENBZkk7RUFpQkw7RUFDQUcsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FFckI7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLyBkZWZhdWx0cywgc2V0IHZpc3VhbGx5IHdoZW4gYXR0YWNoaW5nIHRoaXMgc2NyaXB0IHRvIHRoZSBDYW52YXNcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBXb3JsZCEnXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/mEmitter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca6d2yrzcZJXZVIpSw7P2Nc', 'mEmitter');
// Script/mEmitter.js

"use strict";

var EventEmitter = require('events');

var mEmitter = /*#__PURE__*/function () {
  function mEmitter() {
    if (mEmitter.instance) {
      return mEmitter.instance;
    }

    this.events = [];
    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    console.log((_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments));
  };

  _proto.registerEvent = function registerEvent(event, listener) {
    this.events.push(event);

    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);

    this.events.splice(this.events.indexOf(event), 1);
  };

  _proto.removeAllEvent = function removeAllEvent() {
    this._emiter.removeAllListeners();
  };

  _proto.destroy = function destroy() {
    this._emiter.removeAllListeners();

    this._emiter = null;
    mEmitter.instance = null;
  };

  return mEmitter;
}();

mEmitter.instance = null;
module.exports = mEmitter;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJldmVudHMiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckV2ZW50IiwiZXZlbnQiLCJsaXN0ZW5lciIsInB1c2giLCJvbiIsInJlZ2lzdGVyT25jZSIsIm9uY2UiLCJyZW1vdmVFdmVudCIsInJlbW92ZUxpc3RlbmVyIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlbW92ZUFsbEV2ZW50IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZGVzdHJveSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUE1Qjs7SUFDTUM7RUFFRixvQkFBYztJQUNWLElBQUlBLFFBQVEsQ0FBQ0MsUUFBYixFQUF1QjtNQUNuQixPQUFPRCxRQUFRLENBQUNDLFFBQWhCO0lBQ0g7O0lBQ0QsS0FBS0MsTUFBTCxHQUFjLEVBQWQ7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSUwsWUFBSixFQUFmOztJQUNBLEtBQUtLLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixHQUE3QjtFQUNIOzs7O1NBRURDLE9BQUEsZ0JBQ0E7SUFBQTs7SUFDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQUtKLE9BQUwsRUFBYUUsSUFBYixnQ0FBWjtFQUNIOztTQUVERyxnQkFBQSx1QkFBY0MsS0FBZCxFQUFxQkMsUUFBckIsRUFBK0I7SUFDM0IsS0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWlCRixLQUFqQjs7SUFDQSxLQUFLTixPQUFMLENBQWFTLEVBQWIsQ0FBZ0JILEtBQWhCLEVBQXVCQyxRQUF2QjtFQUNIOztTQUNERyxlQUFBLHNCQUFhSixLQUFiLEVBQW9CQyxRQUFwQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFXLElBQWIsQ0FBa0JMLEtBQWxCLEVBQXlCQyxRQUF6QjtFQUNIOztTQUVESyxjQUFBLHFCQUFZTixLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtJQUN6QixLQUFLUCxPQUFMLENBQWFhLGNBQWIsQ0FBNEJQLEtBQTVCLEVBQW1DQyxRQUFuQzs7SUFDQSxLQUFLUixNQUFMLENBQVllLE1BQVosQ0FBbUIsS0FBS2YsTUFBTCxDQUFZZ0IsT0FBWixDQUFvQlQsS0FBcEIsQ0FBbkIsRUFBK0MsQ0FBL0M7RUFDSDs7U0FFRFUsaUJBQUEsMEJBQWlCO0lBQ2IsS0FBS2hCLE9BQUwsQ0FBYWlCLGtCQUFiO0VBQ0g7O1NBRURDLFVBQUEsbUJBQ0E7SUFDSSxLQUFLbEIsT0FBTCxDQUFhaUIsa0JBQWI7O0lBQ0EsS0FBS2pCLE9BQUwsR0FBZSxJQUFmO0lBQ0FILFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQixJQUFwQjtFQUNIOzs7OztBQUVMRCxRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7QUFDQXFCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNsYXNzIG1FbWl0dGVyIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1FbWl0dGVyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbUVtaXR0ZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fZW1pdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMCk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZW1pdGVyLmVtaXQoLi4uYXJncykpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB0aGlzLl9lbWl0ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJPbmNlKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgICAgIHRoaXMuX2VtaXRlci5vbmNlKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnQoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UodGhpcy5ldmVudHMuaW5kZXhPZihldmVudCksIDEpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEV2ZW50KCkge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpXG4gICAge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG51bGw7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG59XG5tRW1pdHRlci5pbnN0YW5jZSA9IG51bGw7XG5tb2R1bGUuZXhwb3J0cyA9IG1FbWl0dGVyOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CharacterMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f9d6gYq49HgbPyW9Bm43Bz', 'CharacterMovement');
// Script/CharacterMovement.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    "char": cc.Node,
    baseSpeed: 100 // spine: cc.Node,
    // manaBar: cc.Node,

  },
  ctor: function ctor() {
    this.position = 0;
    this.isStartWalk = 0;
    this.manaBar = null;
    this.spine = null;
  },
  checkPosition: function checkPosition() {
    if (this.position > this["char"].parent.width / 2 - 75) {
      this.position = this["char"].parent.width / 2 - 75;
      return true;
    }

    if (this.position < -this["char"].parent.width / 2 + 75) {
      this.position = -this["char"].parent.width / 2 + 75;
      return true;
    }

    return false;
  },
  getManaValue: function getManaValue() {
    return this.manaBar.getComponent("cc.ProgressBar").progress;
  },
  getSpeed: function getSpeed() {
    return this.baseSpeed * (this.getManaValue() < .5 ? 0.5 : 1);
  },
  goLeft: function goLeft() {
    if (this.spine.scaleX > 0) this.spine.scaleX = -this.spine.scaleX;
    this.position = this["char"].x - this.baseSpeed;
    this.checkPosition();
  },
  goRight: function goRight() {
    if (this.spine.scaleX < 0) this.spine.scaleX = -this.spine.scaleX;
    this.position = this["char"].x + this.baseSpeed;
    this.checkPosition();
  },
  checkStartWalk: function checkStartWalk(value) {
    if (this.isStartWalk && !value) {
      this.startWalk();
    } else if (!this.isStartWalk && value) {
      this.stopWalk();
    }
  },
  startWalk: function startWalk() {
    this.spine.getComponent("sp.Skeleton").setAnimation(0, "walk", true, 0);
  },
  stopWalk: function stopWalk() {
    this.spine.getComponent("sp.Skeleton").setAnimation(0, "idle", true, 0);
  },
  depleteMana: function depleteMana(value) {
    if (this.manaBar.getComponent("cc.ProgressBar").progress - (value ? value / 15 : .008 / 1) < 0) {
      this.manaBar.getComponent("cc.ProgressBar").progress = 0;
    } else {
      this.manaBar.getComponent("cc.ProgressBar").progress -= value ? value / 15 : .008 / 15;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (!this["char"]) {
      this["char"] = this.node.parent;
    }

    this.spine = this["char"].getChildByName("Spine");
    this.manaBar = this["char"].getChildByName("ManaBar");
    this.manaBar.getComponent("cc.ProgressBar").progress = 1; // 0 - 1;

    this.position = this["char"].x;
    this["char"].getChildByName("Speed") && (this["char"].getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());
  },
  start: function start() {},
  update: function update(dt) {
    var tempIsWalk = this.isStartWalk;
    var tempPosition = this["char"].x;
    var tempSpeed = this.getSpeed();

    if (this["char"].x - this.position < -1) {
      tempPosition = this["char"].x + .01 * tempSpeed;
      this.isStartWalk = 1;
      this.depleteMana(dt);
    } else if (this["char"].x - this.position > 1) {
      tempPosition = this["char"].x - .01 * tempSpeed;
      this.isStartWalk = 1;
      this.depleteMana(dt);
    } else {
      this.isStartWalk = 0;
    }

    this["char"].x = tempPosition;
    this.checkStartWalk(tempIsWalk);

    if (tempSpeed !== this.getSpeed()) {
      this["char"].getChildByName("Speed") && (this["char"].getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());
    }

    if (this.manaBar.getComponent("cc.ProgressBar").progress <= 0) {
      this["char"].active = false;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2hhcmFjdGVyTW92ZW1lbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJOb2RlIiwiYmFzZVNwZWVkIiwiY3RvciIsInBvc2l0aW9uIiwiaXNTdGFydFdhbGsiLCJtYW5hQmFyIiwic3BpbmUiLCJjaGVja1Bvc2l0aW9uIiwicGFyZW50Iiwid2lkdGgiLCJnZXRNYW5hVmFsdWUiLCJnZXRDb21wb25lbnQiLCJwcm9ncmVzcyIsImdldFNwZWVkIiwiZ29MZWZ0Iiwic2NhbGVYIiwieCIsImdvUmlnaHQiLCJjaGVja1N0YXJ0V2FsayIsInZhbHVlIiwic3RhcnRXYWxrIiwic3RvcFdhbGsiLCJzZXRBbmltYXRpb24iLCJkZXBsZXRlTWFuYSIsIm9uTG9hZCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInN0cmluZyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ0ZW1wSXNXYWxrIiwidGVtcFBvc2l0aW9uIiwidGVtcFNwZWVkIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUVMQyxVQUFVLEVBQUU7SUFDUixRQUFNSCxFQUFFLENBQUNJLElBREQ7SUFFUkMsU0FBUyxFQUFFLEdBRkgsQ0FHUjtJQUNBOztFQUpRLENBRlA7RUFTTEMsSUFUSyxrQkFTRTtJQUNILEtBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQW5CO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFDQSxLQUFLQyxLQUFMLEdBQWEsSUFBYjtFQUNILENBZEk7RUFnQkxDLGFBaEJLLDJCQWdCVztJQUNaLElBQUksS0FBS0osUUFBTCxHQUFnQixhQUFVSyxNQUFWLENBQWlCQyxLQUFqQixHQUF5QixDQUF6QixHQUE2QixFQUFqRCxFQUFxRDtNQUNqRCxLQUFL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QW5CO0lBQ0g7O0lBQ0QsYUFBVVksQ0FBVixHQUFjZ0IsWUFBZDtJQUNBLEtBQUtkLGNBQUwsQ0FBb0JhLFVBQXBCOztJQUNBLElBQUlFLFNBQVMsS0FBSyxLQUFLcEIsUUFBTCxFQUFsQixFQUFtQztNQUMvQixhQUFVYSxjQUFWLENBQXlCLE9BQXpCLE1BQXNDLGFBQVVBLGNBQVYsQ0FBeUIsT0FBekIsRUFBa0NmLFlBQWxDLENBQStDLFVBQS9DLEVBQTJEZ0IsTUFBM0QsR0FBb0UsWUFBWSxLQUFLZCxRQUFMLEVBQXRIO0lBRUg7O0lBQ0QsSUFBSSxLQUFLUixPQUFMLENBQWFNLFlBQWIsQ0FBMEIsZ0JBQTFCLEVBQTRDQyxRQUE1QyxJQUF3RCxDQUE1RCxFQUErRDtNQUMzRCxhQUFVc0IsTUFBVixHQUFtQixLQUFuQjtJQUNIO0VBQ0o7QUF2SEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNoYXI6IGNjLk5vZGUsXG4gICAgICAgIGJhc2VTcGVlZDogMTAwLFxuICAgICAgICAvLyBzcGluZTogY2MuTm9kZSxcbiAgICAgICAgLy8gbWFuYUJhcjogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuaXNTdGFydFdhbGsgPSAwO1xuICAgICAgICB0aGlzLm1hbmFCYXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lID0gbnVsbDtcbiAgICB9LFxuXG4gICAgY2hlY2tQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPiB0aGlzLmNoYXIucGFyZW50LndpZHRoIC8gMiAtIDc1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jaGFyLnBhcmVudC53aWR0aCAvIDIgLSA3NTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgLSB0aGlzLmNoYXIucGFyZW50LndpZHRoIC8gMiArIDc1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLSB0aGlzLmNoYXIucGFyZW50LndpZHRoIC8gMiArIDc1O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBnZXRNYW5hVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3M7XG4gICAgfSxcblxuICAgIGdldFNwZWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlU3BlZWQgKiAodGhpcy5nZXRNYW5hVmFsdWUoKSA8IC41ID8gMC41IDogMSk7XG4gICAgfSxcblxuICAgIGdvTGVmdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3BpbmUuc2NhbGVYID4gMCkgdGhpcy5zcGluZS5zY2FsZVggPSAtIHRoaXMuc3BpbmUuc2NhbGVYO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jaGFyLnggLSB0aGlzLmJhc2VTcGVlZDtcbiAgICAgICAgdGhpcy5jaGVja1Bvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIGdvUmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwaW5lLnNjYWxlWCA8IDApIHRoaXMuc3BpbmUuc2NhbGVYID0gLSB0aGlzLnNwaW5lLnNjYWxlWDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY2hhci54ICsgdGhpcy5iYXNlU3BlZWQ7XG4gICAgICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpO1xuXG4gICAgfSxcblxuICAgIGNoZWNrU3RhcnRXYWxrKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRXYWxrICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc1N0YXJ0V2FsayAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wV2FsaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0V2FsaygpIHtcbiAgICAgICAgdGhpcy5zcGluZS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5zZXRBbmltYXRpb24oMCwgXCJ3YWxrXCIsIHRydWUsIDApO1xuICAgIH0sXG5cbiAgICBzdG9wV2FsaygpIHtcbiAgICAgICAgdGhpcy5zcGluZS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUsIDApO1xuICAgIH0sXG5cbiAgICBkZXBsZXRlTWFuYSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tYW5hQmFyLmdldENvbXBvbmVudChcImNjLlByb2dyZXNzQmFyXCIpLnByb2dyZXNzIC0gKHZhbHVlID8gdmFsdWUgLyAxNSA6IC4wMDggLyAxKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMubWFuYUJhci5nZXRDb21wb25lbnQoXCJjYy5Qcm9ncmVzc0JhclwiKS5wcm9ncmVzcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3MgLT0gdmFsdWUgPyB2YWx1ZSAvIDE1IDogLjAwOCAvIDE1O1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhciA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGluZSA9IHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcIlNwaW5lXCIpO1xuICAgICAgICB0aGlzLm1hbmFCYXIgPSB0aGlzLmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJNYW5hQmFyXCIpO1xuICAgICAgICB0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3MgPSAxIC8vIDAgLSAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jaGFyLng7XG4gICAgICAgIHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcIlNwZWVkXCIpICYmICh0aGlzLmNoYXIuZ2V0Q2hpbGRCeU5hbWUoXCJTcGVlZFwiKS5nZXRDb21wb25lbnQoXCJjYy5MYWJlbFwiKS5zdHJpbmcgPSBcIlNwZWVkOiBcIiArIHRoaXMuZ2V0U3BlZWQoKSk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgY29uc3QgdGVtcElzV2FsayA9IHRoaXMuaXNTdGFydFdhbGs7XG4gICAgICAgIGxldCB0ZW1wUG9zaXRpb24gPSB0aGlzLmNoYXIueDtcbiAgICAgICAgY29uc3QgdGVtcFNwZWVkID0gdGhpcy5nZXRTcGVlZCgpO1xuICAgICAgICBpZiAodGhpcy5jaGFyLnggLSB0aGlzLnBvc2l0aW9uIDwgLSAxKSB7XG4gICAgICAgICAgICB0ZW1wUG9zaXRpb24gPSB0aGlzLmNoYXIueCArIC4wMSAqIHRlbXBTcGVlZDtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydFdhbGsgPSAxO1xuICAgICAgICAgICAgdGhpcy5kZXBsZXRlTWFuYShkdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jaGFyLnggLSB0aGlzLnBvc2l0aW9uID4gMSkge1xuICAgICAgICAgICAgdGVtcFBvc2l0aW9uID0gdGhpcy5jaGFyLnggLSAuMDEgKiB0ZW1wU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRXYWxrID0gMTtcbiAgICAgICAgICAgIHRoaXMuZGVwbGV0ZU1hbmEoZHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0V2FsayA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFyLnggPSB0ZW1wUG9zaXRpb247XG4gICAgICAgIHRoaXMuY2hlY2tTdGFydFdhbGsodGVtcElzV2Fsayk7XG4gICAgICAgIGlmICh0ZW1wU3BlZWQgIT09IHRoaXMuZ2V0U3BlZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmdldENoaWxkQnlOYW1lKFwiU3BlZWRcIikgJiYgKHRoaXMuY2hhci5nZXRDaGlsZEJ5TmFtZShcIlNwZWVkXCIpLmdldENvbXBvbmVudChcImNjLkxhYmVsXCIpLnN0cmluZyA9IFwiU3BlZWQ6IFwiICsgdGhpcy5nZXRTcGVlZCgpKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hbmFCYXIuZ2V0Q29tcG9uZW50KFwiY2MuUHJvZ3Jlc3NCYXJcIikucHJvZ3Jlc3MgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/EventSender.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92887wCyaRLkaHeRsewZ29m', 'EventSender');
// Script/EventSender.js

"use strict";

var Emitter = require('mEmitter');

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {},
  start: function start() {},
  onHello: function onHello() {
    Emitter.instance.emit('HELLO', "hellooooooo");
  },
  onWelcome: function onWelcome() {
    Emitter.instance.emit('WELCOME', "Welcomeeeee");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRXZlbnRTZW5kZXIuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwic3RhcnQiLCJvbkhlbGxvIiwiaW5zdGFuY2UiLCJlbWl0Iiwib25XZWxjb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BRkssb0JBRUssQ0FDVCxDQUhJO0VBSUxDLEtBSkssbUJBSUcsQ0FDUCxDQUxJO0VBTUxDLE9BTksscUJBTUs7SUFDTlAsT0FBTyxDQUFDUSxRQUFSLENBQWlCQyxJQUFqQixDQUFzQixPQUF0QixFQUErQixhQUEvQjtFQUNILENBUkk7RUFTTEMsU0FUSyx1QkFTTztJQUNSVixPQUFPLENBQUNRLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLFNBQXRCLEVBQWlDLGFBQWpDO0VBQ0g7QUFYSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgb25Mb2FkICgpIHtcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG4gICAgb25IZWxsbygpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KCdIRUxMTycsIFwiaGVsbG9vb29vb29cIik7XG4gICAgfSxcbiAgICBvbldlbGNvbWUoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdCgnV0VMQ09NRScsIFwiV2VsY29tZWVlZWVcIik7XG4gICAgfSxcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/AnimationList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5d1e9hlOZGjLJ62vVFib+6', 'AnimationList');
// Script/SpineAnimation/AnimationList.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    spineManger: cc.Node,
    animationItem: cc.Prefab
  },
  ctor: function ctor() {
    this.animations = [];
  },
  onLoad: function onLoad() {
    var spines = this.spineManger.children;
    console.log(spines);
    this.node.removeAllChildren();

    for (var i = 0; i < spines.length; i++) {
      {
        if (!!spines[i].active) {
          this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
          console.log('a');
          break;
        }
      }
    } // this.animations = spines[0].active ? spines[0].getComponent("sp.Skeleton")._skeleton.data.animations : [];


    var animationsLength = this.animations.length ? this.animations.length : 0;

    for (var _i = 0; _i < animationsLength; _i++) {
      var button = cc.instantiate(this.animationItem);
      button.parent = this.node;
      button.children[0].children[0].getComponent("cc.Label").string = this.animations[_i].name;
      button.name = this.animations[_i].name;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwaW5lTWFuZ2VyIiwiTm9kZSIsImFuaW1hdGlvbkl0ZW0iLCJQcmVmYWIiLCJjdG9yIiwiYW5pbWF0aW9ucyIsIm9uTG9hZCIsInNwaW5lcyIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJfc2tlbGV0b24iLCJkYXRhIiwiYW5pbWF0aW9uc0xlbmd0aCIsImJ1dHRvbiIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwic3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQURSO0lBRVJDLGFBQWEsRUFBRU4sRUFBRSxDQUFDTztFQUZWLENBSFA7RUFRTEMsSUFSSyxrQkFRRTtJQUNILEtBQUtDLFVBQUwsR0FBa0IsRUFBbEI7RUFDSCxDQVZJO0VBV0xDLE1BWEssb0JBV0k7SUFDTCxJQUFJQyxNQUFNLEdBQUcsS0FBS1AsV0FBTCxDQUFpQlEsUUFBOUI7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7SUFDQSxLQUFLSSxJQUFMLENBQVVDLGlCQUFWOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sTUFBTSxDQUFDTyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztNQUNwQztRQUNJLElBQUksQ0FBQyxDQUFDTixNQUFNLENBQUNNLENBQUQsQ0FBTixDQUFVRSxNQUFoQixFQUF3QjtVQUNwQixLQUFLVixVQUFMLEdBQWtCRSxNQUFNLENBQUNNLENBQUQsQ0FBTixDQUFVRyxZQUFWLENBQXVCLGFBQXZCLEVBQXNDQyxTQUF0QyxDQUFnREMsSUFBaEQsQ0FBcURiLFVBQXZFO1VBQ0FJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7VUFDQTtRQUNIO01BQ0o7SUFDSixDQVpJLENBYUw7OztJQUNBLElBQUlTLGdCQUFnQixHQUFHLEtBQUtkLFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXlCLEtBQUtULFVBQUwsQ0FBZ0JTLE1BQXpDLEdBQWtELENBQXpFOztJQUNBLEtBQUssSUFBSUQsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR00sZ0JBQXBCLEVBQXNDTixFQUFDLEVBQXZDLEVBQTJDO01BQ3ZDLElBQU1PLE1BQU0sR0FBR3hCLEVBQUUsQ0FBQ3lCLFdBQUgsQ0FBZSxLQUFLbkIsYUFBcEIsQ0FBZjtNQUNBa0IsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLEtBQUtYLElBQXJCO01BQ0FTLE1BQU0sQ0FBQ1osUUFBUCxDQUFnQixDQUFoQixFQUFtQkEsUUFBbkIsQ0FBNEIsQ0FBNUIsRUFBK0JRLFlBQS9CLENBQTRDLFVBQTVDLEVBQXdETyxNQUF4RCxHQUFpRSxLQUFLbEIsVUFBTCxDQUFnQlEsRUFBaEIsRUFBbUJXLElBQXBGO01BQ0FKLE1BQU0sQ0FBQ0ksSUFBUCxHQUFjLEtBQUtuQixVQUFMLENBQWdCUSxFQUFoQixFQUFtQlcsSUFBakM7SUFDSDtFQUNKO0FBaENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwaW5lTWFuZ2VyOiBjYy5Ob2RlLFxuICAgICAgICBhbmltYXRpb25JdGVtOiBjYy5QcmVmYWIsXG4gICAgfSxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5zcGluZU1hbmdlci5jaGlsZHJlbjtcbiAgICAgICAgY29uc29sZS5sb2coc3BpbmVzKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCEhc3BpbmVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBzcGluZXNbaV0uZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIikuX3NrZWxldG9uLmRhdGEuYW5pbWF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9ucyA9IHNwaW5lc1swXS5hY3RpdmUgPyBzcGluZXNbMF0uZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIikuX3NrZWxldG9uLmRhdGEuYW5pbWF0aW9ucyA6IFtdO1xuICAgICAgICBsZXQgYW5pbWF0aW9uc0xlbmd0aCA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPyB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoIDogMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb25zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYW5pbWF0aW9uSXRlbSk7XG4gICAgICAgICAgICBidXR0b24ucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgYnV0dG9uLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcImNjLkxhYmVsXCIpLnN0cmluZyA9IHRoaXMuYW5pbWF0aW9uc1tpXS5uYW1lO1xuICAgICAgICAgICAgYnV0dG9uLm5hbWUgPSB0aGlzLmFuaW1hdGlvbnNbaV0ubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/ItemScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'ItemScript');
// Script/SpineAnimation/ItemScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onClick: function onClick() {
    Emitter.instance.emit('SET_ANIMATION', this.node.name);
  },
  playAnimationClip: function playAnimationClip() {
    Emitter.instance.emit('ANIMATION_CLIP', this.node.name);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vSXRlbVNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25DbGljayIsIkVtaXR0ZXIiLCJpbnN0YW5jZSIsImVtaXQiLCJub2RlIiwibmFtZSIsInBsYXlBbmltYXRpb25DbGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxPQUhLLHFCQUdNO0lBQ1BDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0IsZUFBdEIsRUFBdUMsS0FBS0MsSUFBTCxDQUFVQyxJQUFqRDtFQUNILENBTEk7RUFPTEMsaUJBUEssK0JBT2dCO0lBQ2pCTCxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLGdCQUF0QixFQUF3QyxLQUFLQyxJQUFMLENBQVVDLElBQWxEO0VBQ0g7QUFUSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25DbGljayAoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdCgnU0VUX0FOSU1BVElPTicsIHRoaXMubm9kZS5uYW1lKTtcbiAgICB9LFxuXG4gICAgcGxheUFuaW1hdGlvbkNsaXAgKCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLmVtaXQoJ0FOSU1BVElPTl9DTElQJywgdGhpcy5ub2RlLm5hbWUpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/SpineInspector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineInspector');
// Script/SpineAnimation/SpineInspector.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  properties: {
    buttonScript: cc.Node
  },
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
  },
  setAnimation: function setAnimation(data) {
    this.buttonScript.getComponent("AnimationHandler").stopEverything();
    this.node.children[0].getComponent(sp.Skeleton).setAnimation(0, data, true);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVJbnNwZWN0b3IuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ1dHRvblNjcmlwdCIsIk5vZGUiLCJvbkxvYWQiLCJpbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnQiLCJzZXRBbmltYXRpb24iLCJiaW5kIiwiZGF0YSIsImdldENvbXBvbmVudCIsInN0b3BFdmVyeXRoaW5nIiwibm9kZSIsImNoaWxkcmVuIiwic3AiLCJTa2VsZXRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFqQjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsWUFBWSxFQUFFSixFQUFFLENBQUNLO0VBRFQsQ0FIUDtFQU9MQyxNQVBLLG9CQU9LO0lBQ05SLE9BQU8sQ0FBQ1MsUUFBUixHQUFtQixJQUFJVCxPQUFKLEVBQW5CO0lBQ0FBLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQkMsYUFBakIsQ0FBK0IsZUFBL0IsRUFBZ0QsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEQ7RUFDSCxDQVZJO0VBWUxELFlBWkssd0JBWVFFLElBWlIsRUFZYztJQUNmLEtBQUtQLFlBQUwsQ0FBa0JRLFlBQWxCLENBQStCLGtCQUEvQixFQUFtREMsY0FBbkQ7SUFDQSxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JILFlBQXRCLENBQW1DSSxFQUFFLENBQUNDLFFBQXRDLEVBQWdEUixZQUFoRCxDQUE2RCxDQUE3RCxFQUFnRUUsSUFBaEUsRUFBc0UsSUFBdEU7RUFDSDtBQWZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIkVtaXR0ZXIgPSByZXF1aXJlKCdtRW1pdHRlcicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnV0dG9uU2NyaXB0OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KCdTRVRfQU5JTUFUSU9OJywgdGhpcy5zZXRBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHNldEFuaW1hdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uU2NyaXB0LmdldENvbXBvbmVudChcIkFuaW1hdGlvbkhhbmRsZXJcIikuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGRhdGEsIHRydWUpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/events/events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/AnimationHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1de6PsKdJG16NpfzMNhTxP', 'AnimationHandler');
// Script/SpineAnimation/AnimationHandler.js

"use strict";

var Emitter = require("../mEmitter");

cc.Class({
  "extends": cc.Component,
  properties: {
    spineNode: cc.Node
  },
  ctor: function ctor() {
    this.initialPosition = new cc.Vec3();
    this.initialScale = 1;
    this.initialAngle = 0;
  },
  onLoad: function onLoad() {
    this.initialPosition = this.spineNode.position.clone();
    this.initialScale = this.spineNode.scale;
    this.initialAngle = this.spineNode.rotation;
  },
  stopEverything: function stopEverything() {
    this.spineNode.stopAllActions();
    var spine = this.spineNode.getComponent("sp.Skeleton");
    spine.setAnimation(0, "idle", true);
    cc.tween(this.spineNode).stop();
    var anim = this.getComponent("cc.Animation");
    if (anim) anim.stop();
    this.spineNode.setPosition(this.initialPosition);
    this.spineNode.scale = this.initialScale;
    this.spineNode.angle = this.initialRotation;
  },
  runAnimationClip: function runAnimationClip() {
    this.stopEverything();
    this.spineNode.getComponent("cc.Animation").play("ani2", 0);
  },
  runTween: function runTween() {
    this.stopEverything();
    cc.tween(this.spineNode).to(1, {
      scale: 2
    }, {
      easing: 'sineOutIn'
    }).to(1, {
      scale: 1
    }, {
      easing: 'sineOutIn'
    }).start();
  },
  runAction: function runAction() {
    this.stopEverything();
    this.spineNode.runAction(cc.sequence(cc.moveTo(1, 300, 0), cc.moveTo(1, -300, 0), cc.moveTo(1, 0, 0)));
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJFbWl0dGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BpbmVOb2RlIiwiTm9kZSIsImN0b3IiLCJpbml0aWFsUG9zaXRpb24iLCJWZWMzIiwiaW5pdGlhbFNjYWxlIiwiaW5pdGlhbEFuZ2xlIiwib25Mb2FkIiwicG9zaXRpb24iLCJjbG9uZSIsInNjYWxlIiwicm90YXRpb24iLCJzdG9wRXZlcnl0aGluZyIsInN0b3BBbGxBY3Rpb25zIiwic3BpbmUiLCJnZXRDb21wb25lbnQiLCJzZXRBbmltYXRpb24iLCJ0d2VlbiIsInN0b3AiLCJhbmltIiwic2V0UG9zaXRpb24iLCJhbmdsZSIsImluaXRpYWxSb3RhdGlvbiIsInJ1bkFuaW1hdGlvbkNsaXAiLCJwbGF5IiwicnVuVHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQUROLENBSFA7RUFPTEMsSUFQSyxrQkFPRTtJQUNILEtBQUtDLGVBQUwsR0FBdUIsSUFBSVAsRUFBRSxDQUFDUSxJQUFQLEVBQXZCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFwQjtJQUNBLEtBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7RUFDSCxDQVhJO0VBYUxDLE1BYkssb0JBYUk7SUFDTCxLQUFLSixlQUFMLEdBQXVCLEtBQUtILFNBQUwsQ0FBZVEsUUFBZixDQUF3QkMsS0FBeEIsRUFBdkI7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQUtMLFNBQUwsQ0FBZVUsS0FBbkM7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQUtOLFNBQUwsQ0FBZVcsUUFBbkM7RUFDSCxDQWpCSTtFQW1CTEMsY0FuQkssNEJBbUJZO0lBQ2IsS0FBS1osU0FBTCxDQUFlYSxjQUFmO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtkLFNBQUwsQ0FBZWUsWUFBZixDQUE0QixhQUE1QixDQUFaO0lBQ0FELEtBQUssQ0FBQ0UsWUFBTixDQUFtQixDQUFuQixFQUFzQixNQUF0QixFQUE4QixJQUE5QjtJQUNBcEIsRUFBRSxDQUFDcUIsS0FBSCxDQUFTLEtBQUtqQixTQUFkLEVBQXlCa0IsSUFBekI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS0osWUFBTCxDQUFrQixjQUFsQixDQUFYO0lBQ0EsSUFBSUksSUFBSixFQUFVQSxJQUFJLENBQUNELElBQUw7SUFFVixLQUFLbEIsU0FBTCxDQUFlb0IsV0FBZixDQUEyQixLQUFLakIsZUFBaEM7SUFDQSxLQUFLSCxTQUFMLENBQWVVLEtBQWYsR0FBdUIsS0FBS0wsWUFBNUI7SUFDQSxLQUFLTCxTQUFMLENBQWVxQixLQUFmLEdBQXVCLEtBQUtDLGVBQTVCO0VBQ0gsQ0E5Qkk7RUFnQ0xDLGdCQWhDSyw4QkFnQ2M7SUFDZixLQUFLWCxjQUFMO0lBQ0EsS0FBS1osU0FBTCxDQUFlZSxZQUFmLENBQTRCLGNBQTVCLEVBQTRDUyxJQUE1QyxDQUFpRCxNQUFqRCxFQUF5RCxDQUF6RDtFQUNILENBbkNJO0VBcUNMQyxRQXJDSyxzQkFxQ007SUFDUCxLQUFLYixjQUFMO0lBQ0FoQixFQUFFLENBQUNxQixLQUFILENBQVMsS0FBS2pCLFNBQWQsRUFBeUIwQixFQUF6QixDQUE0QixDQUE1QixFQUErQjtNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FBL0IsRUFBNkM7TUFBRWlCLE1BQU0sRUFBRTtJQUFWLENBQTdDLEVBQXNFRCxFQUF0RSxDQUF5RSxDQUF6RSxFQUE0RTtNQUFFaEIsS0FBSyxFQUFFO0lBQVQsQ0FBNUUsRUFBMEY7TUFBRWlCLE1BQU0sRUFBRTtJQUFWLENBQTFGLEVBQW1IQyxLQUFuSDtFQUVILENBekNJO0VBMkNMQyxTQTNDSyx1QkEyQ087SUFDUixLQUFLakIsY0FBTDtJQUNBLEtBQUtaLFNBQUwsQ0FBZTZCLFNBQWYsQ0FBeUJqQyxFQUFFLENBQUNrQyxRQUFILENBQ3JCbEMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFiLEVBQWtCLENBQWxCLENBRHFCLEVBRXJCbkMsRUFBRSxDQUFDbUMsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFDLEdBQWQsRUFBbUIsQ0FBbkIsQ0FGcUIsRUFHckJuQyxFQUFFLENBQUNtQyxNQUFILENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FIcUIsQ0FBekI7RUFLSCxDQWxESSxDQW1ETDs7QUFuREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCIuLi9tRW1pdHRlclwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmVOb2RlOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSAwO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5zcGluZU5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSB0aGlzLnNwaW5lTm9kZS5zY2FsZTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSB0aGlzLnNwaW5lTm9kZS5yb3RhdGlvbjtcbiAgICB9LFxuXG4gICAgc3RvcEV2ZXJ5dGhpbmcoKSB7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBzcGluZSA9IHRoaXMuc3BpbmVOb2RlLmdldENvbXBvbmVudChcInNwLlNrZWxldG9uXCIpO1xuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKS5zdG9wKCk7XG4gICAgICAgIGxldCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoXCJjYy5BbmltYXRpb25cIik7XG4gICAgICAgIGlmIChhbmltKSBhbmltLnN0b3AoKTtcblxuICAgICAgICB0aGlzLnNwaW5lTm9kZS5zZXRQb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnNjYWxlID0gdGhpcy5pbml0aWFsU2NhbGU7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLmFuZ2xlID0gdGhpcy5pbml0aWFsUm90YXRpb247XG4gICAgfSxcblxuICAgIHJ1bkFuaW1hdGlvbkNsaXAoKSB7XG4gICAgICAgIHRoaXMuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwiY2MuQW5pbWF0aW9uXCIpLnBsYXkoXCJhbmkyXCIsIDApO1xuICAgIH0sXG5cbiAgICBydW5Ud2VlbigpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlcnl0aGluZygpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lTm9kZSkudG8oMSwgeyBzY2FsZTogMiB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSkudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSkuc3RhcnQoKTtcblxuICAgIH0sXG5cbiAgICBydW5BY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RvcEV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MubW92ZVRvKDEsIDMwMCwgMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgLTMwMCwgMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgMCwgMCkpXG4gICAgICAgIClcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
