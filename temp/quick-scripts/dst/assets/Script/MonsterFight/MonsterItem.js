
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/MonsterItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23bd6/+wM1CuJHWgNuWlpxR', 'MonsterItem');
// Script/MonsterFight/MonsterItem.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    MonsterEventType = _require.MonsterEventType;

var monsterProps = {
  hp: 1000,
  speed: 400,
  minY: -360,
  maxY: 360
};
cc.Class({
  "extends": cc.Component,
  properties: {
    HpBar: cc.ProgressBar
  },
  ctor: function ctor() {
    this.hp = monsterProps.hp;
    this.speed = monsterProps.speed;
    this.isUp = false;
  },
  onLoad: function onLoad() {
    this.node.onHit = this.onHit.bind(this);
  },
  update: function update(dt) {
    this.move(dt);
  },
  move: function move(dt) {
    this.node.y += this.isUp ? this.speed * dt : -this.speed * dt;

    if (this.node.y < -360) {
      this.node.y = -360;
      this.isUp = true;
    } else if (this.node.y > 360) {
      this.node.y = 360;
      this.isUp = false;
    }
  },
  onHit: function onHit(damage) {
    this.hp -= damage;
    this.HpBar.progress = this.hp / monsterProps.hp;

    if (this.hp <= 0) {
      this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L01vbnN0ZXJJdGVtLmpzIl0sIm5hbWVzIjpbIm1FbWl0dGVyIiwicmVxdWlyZSIsIk1vbnN0ZXJFdmVudFR5cGUiLCJtb25zdGVyUHJvcHMiLCJocCIsInNwZWVkIiwibWluWSIsIm1heFkiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkhwQmFyIiwiUHJvZ3Jlc3NCYXIiLCJjdG9yIiwiaXNVcCIsIm9uTG9hZCIsIm5vZGUiLCJvbkhpdCIsImJpbmQiLCJ1cGRhdGUiLCJkdCIsIm1vdmUiLCJ5IiwiZGFtYWdlIiwicHJvZ3Jlc3MiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWxCOztBQUVBLGVBQTZCQSxPQUFPLENBQUMsYUFBRCxDQUFwQztBQUFBLElBQVFDLGdCQUFSLFlBQVFBLGdCQUFSOztBQUVBLElBQU1DLFlBQVksR0FBRztFQUNqQkMsRUFBRSxFQUFFLElBRGE7RUFFakJDLEtBQUssRUFBRSxHQUZVO0VBR2pCQyxJQUFJLEVBQUUsQ0FBQyxHQUhVO0VBSWpCQyxJQUFJLEVBQUU7QUFKVyxDQUFyQjtBQU9BQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFSixFQUFFLENBQUNLO0VBREYsQ0FIUDtFQU9MQyxJQVBLLGtCQU9DO0lBQ0YsS0FBS1YsRUFBTCxHQUFVRCxZQUFZLENBQUNDLEVBQXZCO0lBQ0EsS0FBS0MsS0FBTCxHQUFhRixZQUFZLENBQUNFLEtBQTFCO0lBQ0EsS0FBS1UsSUFBTCxHQUFZLEtBQVo7RUFDSCxDQVhJO0VBYUxDLE1BYkssb0JBYUs7SUFDTixLQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsS0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQWxCO0VBQ0gsQ0FmSTtFQWlCTEMsTUFqQkssa0JBaUJFQyxFQWpCRixFQWlCTTtJQUNQLEtBQUtDLElBQUwsQ0FBVUQsRUFBVjtFQUNILENBbkJJO0VBcUJMQyxJQXJCSyxnQkFxQkFELEVBckJBLEVBcUJHO0lBQ0osS0FBS0osSUFBTCxDQUFVTSxDQUFWLElBQWUsS0FBS1IsSUFBTCxHQUFZLEtBQUtWLEtBQUwsR0FBYWdCLEVBQXpCLEdBQThCLENBQUMsS0FBS2hCLEtBQU4sR0FBY2dCLEVBQTNEOztJQUNBLElBQUksS0FBS0osSUFBTCxDQUFVTSxDQUFWLEdBQWMsQ0FBQyxHQUFuQixFQUF1QjtNQUNuQixLQUFLTixJQUFMLENBQVVNLENBQVYsR0FBYyxDQUFDLEdBQWY7TUFDQSxLQUFLUixJQUFMLEdBQVksSUFBWjtJQUNILENBSEQsTUFJSyxJQUFJLEtBQUtFLElBQUwsQ0FBVU0sQ0FBVixHQUFjLEdBQWxCLEVBQXNCO01BQ3ZCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBVixHQUFjLEdBQWQ7TUFDQSxLQUFLUixJQUFMLEdBQVksS0FBWjtJQUNIO0VBQ0osQ0EvQkk7RUFpQ0xHLEtBakNLLGlCQWlDQ00sTUFqQ0QsRUFpQ1M7SUFDVixLQUFLcEIsRUFBTCxJQUFXb0IsTUFBWDtJQUNBLEtBQUtaLEtBQUwsQ0FBV2EsUUFBWCxHQUFzQixLQUFLckIsRUFBTCxHQUFVRCxZQUFZLENBQUNDLEVBQTdDOztJQUNBLElBQUksS0FBS0EsRUFBTCxJQUFXLENBQWYsRUFBa0I7TUFDZCxLQUFLYSxJQUFMLENBQVVTLE9BQVY7SUFDSDtFQUNKO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1FbWl0dGVyID0gcmVxdWlyZShcIm1FbWl0dGVyXCIpO1xuXG5jb25zdCB7IE1vbnN0ZXJFdmVudFR5cGUgfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcblxuY29uc3QgbW9uc3RlclByb3BzID0ge1xuICAgIGhwOiAxMDAwLFxuICAgIHNwZWVkOiA0MDAsXG4gICAgbWluWTogLTM2MCxcbiAgICBtYXhZOiAzNjAsXG59XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIEhwQmFyOiBjYy5Qcm9ncmVzc0JhcixcbiAgICB9LFxuXG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLmhwID0gbW9uc3RlclByb3BzLmhwO1xuICAgICAgICB0aGlzLnNwZWVkID0gbW9uc3RlclByb3BzLnNwZWVkO1xuICAgICAgICB0aGlzLmlzVXAgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uSGl0ID0gdGhpcy5vbkhpdC5iaW5kKHRoaXMpO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5tb3ZlKGR0KTtcbiAgICB9LFxuXG4gICAgbW92ZShkdCl7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuaXNVcCA/IHRoaXMuc3BlZWQgKiBkdCA6IC10aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IC0zNjApe1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAtMzYwO1xuICAgICAgICAgICAgdGhpcy5pc1VwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUueSA+IDM2MCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IDM2MDtcbiAgICAgICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uSGl0KGRhbWFnZSkge1xuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZTtcbiAgICAgICAgdGhpcy5IcEJhci5wcm9ncmVzcyA9IHRoaXMuaHAgLyBtb25zdGVyUHJvcHMuaHA7XG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==