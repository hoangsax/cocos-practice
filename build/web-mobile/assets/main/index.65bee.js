window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!"
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  move: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f9d6gYq49HgbPyW9Bm43Bz", "move");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        char: cc.Node,
        baseSpeed: 100
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
        return this.baseSpeed * (this.getManaValue() < .5 ? .5 : 1);
      },
      goLeft: function goLeft() {
        this.spine.scaleX > 0 && (this.spine.scaleX = -this.spine.scaleX);
        this.position = this["char"].x - this.baseSpeed;
        this.checkPosition();
      },
      goRight: function goRight() {
        this.spine.scaleX < 0 && (this.spine.scaleX = -this.spine.scaleX);
        this.position = this["char"].x + this.baseSpeed;
        this.checkPosition();
      },
      checkStartWalk: function checkStartWalk(value) {
        this.isStartWalk && !value ? this.startWalk() : !this.isStartWalk && value && this.stopWalk();
      },
      startWalk: function startWalk() {
        this.spine.getComponent("sp.Skeleton").setAnimation(0, "walk", true, 0);
      },
      stopWalk: function stopWalk() {
        this.spine.getComponent("sp.Skeleton").setAnimation(0, "idle", true, 0);
      },
      depleteMana: function depleteMana(value) {
        this.manaBar.getComponent("cc.ProgressBar").progress - (value ? value / 15 : .008) < 0 ? this.manaBar.getComponent("cc.ProgressBar").progress = 0 : this.manaBar.getComponent("cc.ProgressBar").progress -= value ? value / 15 : .008 / 15;
      },
      onLoad: function onLoad() {
        this.spine = this["char"].getChildByName("Spine");
        this.manaBar = this["char"].getChildByName("ManaBar");
        this.manaBar.getComponent("cc.ProgressBar").progress = 1;
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
        } else this.isStartWalk = 0;
        this["char"].x = tempPosition;
        this.checkStartWalk(tempIsWalk);
        tempSpeed !== this.getSpeed() && this["char"].getChildByName("Speed") && (this["char"].getChildByName("Speed").getComponent("cc.Label").string = "Speed: " + this.getSpeed());
        this.manaBar.getComponent("cc.ProgressBar").progress <= 0 && (this["char"].active = false);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "HelloWorld", "move" ]);