
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/BulletItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c214b5CDTpErLxEIV7hgLuH', 'BulletItem');
// Script/MonsterFight/BulletItem.js

"use strict";

mEmitter = require("mEmitter");
var BulletProps = {
  0: {
    damage: 10,
    speed: 500
  },
  1: {
    damage: 50,
    speed: 100
  },
  2: {
    damage: 20,
    speed: 350
  },
  3: {
    damage: 5,
    speed: 600
  },
  4: {
    damage: 70,
    speed: 200
  }
};
cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.damage = 10;
    this.speed = 500;
    this.maxLength = 1500;
    this.posX = 0;
  },
  onLoad: function onLoad() {
    this.posX = this.node.x;
    this.node.initData = this.initData.bind(this);
    console.log(this);
  },
  update: function update(dt) {
    this.onMove(dt);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.destroy();
    mEmitter.instance.emit("HIT", this.damage);
  },
  onMove: function onMove(dt) {
    this.node.x += this.speed * dt;

    if (this.node.x - this.posX > this.maxLength) {
      this.node.destroy();
    }
  },
  initData: function initData(bulletID) {
    var bullet = BulletProps[bulletID];
    this.damage += bullet.damage;
    this.speed += bullet.speed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0J1bGxldEl0ZW0uanMiXSwibmFtZXMiOlsibUVtaXR0ZXIiLCJyZXF1aXJlIiwiQnVsbGV0UHJvcHMiLCJkYW1hZ2UiLCJzcGVlZCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJjdG9yIiwibWF4TGVuZ3RoIiwicG9zWCIsIm9uTG9hZCIsIm5vZGUiLCJ4IiwiaW5pdERhdGEiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImR0Iiwib25Nb3ZlIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImRlc3Ryb3kiLCJpbnN0YW5jZSIsImVtaXQiLCJidWxsZXRJRCIsImJ1bGxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFsQjtBQUVBLElBQU1DLFdBQVcsR0FBRztFQUNoQixHQUFHO0lBQ0NDLE1BQU0sRUFBRSxFQURUO0lBRUNDLEtBQUssRUFBRTtFQUZSLENBRGE7RUFLaEIsR0FBRztJQUNDRCxNQUFNLEVBQUUsRUFEVDtJQUVDQyxLQUFLLEVBQUU7RUFGUixDQUxhO0VBU2hCLEdBQUc7SUFDQ0QsTUFBTSxFQUFFLEVBRFQ7SUFFQ0MsS0FBSyxFQUFFO0VBRlIsQ0FUYTtFQWFoQixHQUFHO0lBQ0NELE1BQU0sRUFBRSxDQURUO0lBRUNDLEtBQUssRUFBRTtFQUZSLENBYmE7RUFpQmhCLEdBQUc7SUFDQ0QsTUFBTSxFQUFFLEVBRFQ7SUFFQ0MsS0FBSyxFQUFFO0VBRlI7QUFqQmEsQ0FBcEI7QUF3QkFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLElBSEssa0JBR0U7SUFDSCxLQUFLTCxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLEtBQUwsR0FBYSxHQUFiO0lBQ0EsS0FBS0ssU0FBTCxHQUFpQixJQUFqQjtJQUNBLEtBQUtDLElBQUwsR0FBWSxDQUFaO0VBQ0gsQ0FSSTtFQVVMQyxNQVZLLG9CQVVJO0lBQ0wsS0FBS0QsSUFBTCxHQUFZLEtBQUtFLElBQUwsQ0FBVUMsQ0FBdEI7SUFDQSxLQUFLRCxJQUFMLENBQVVFLFFBQVYsR0FBcUIsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXJCO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7RUFDSCxDQWRJO0VBZ0JMQyxNQWhCSyxrQkFnQkVDLEVBaEJGLEVBZ0JNO0lBQ1AsS0FBS0MsTUFBTCxDQUFZRCxFQUFaO0VBQ0gsQ0FsQkk7RUFvQkxFLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtJQUNyQyxLQUFLWCxJQUFMLENBQVVZLE9BQVY7SUFDQXhCLFFBQVEsQ0FBQ3lCLFFBQVQsQ0FBa0JDLElBQWxCLENBQXVCLEtBQXZCLEVBQThCLEtBQUt2QixNQUFuQztFQUNILENBdkJJO0VBeUJMaUIsTUF6Qkssa0JBeUJFRCxFQXpCRixFQXlCTTtJQUNQLEtBQUtQLElBQUwsQ0FBVUMsQ0FBVixJQUFlLEtBQUtULEtBQUwsR0FBYWUsRUFBNUI7O0lBQ0EsSUFBSSxLQUFLUCxJQUFMLENBQVVDLENBQVYsR0FBYyxLQUFLSCxJQUFuQixHQUEwQixLQUFLRCxTQUFuQyxFQUE4QztNQUMxQyxLQUFLRyxJQUFMLENBQVVZLE9BQVY7SUFDSDtFQUVKLENBL0JJO0VBaUNMVixRQWpDSyxvQkFpQ0lhLFFBakNKLEVBaUNjO0lBQ2YsSUFBSUMsTUFBTSxHQUFHMUIsV0FBVyxDQUFDeUIsUUFBRCxDQUF4QjtJQUNBLEtBQUt4QixNQUFMLElBQWV5QixNQUFNLENBQUN6QixNQUF0QjtJQUNBLEtBQUtDLEtBQUwsSUFBY3dCLE1BQU0sQ0FBQ3hCLEtBQXJCO0VBQ0g7QUFyQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibUVtaXR0ZXIgPSByZXF1aXJlKFwibUVtaXR0ZXJcIik7XG5cbmNvbnN0IEJ1bGxldFByb3BzID0ge1xuICAgIDA6IHtcbiAgICAgICAgZGFtYWdlOiAxMCxcbiAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICB9LFxuICAgIDE6IHtcbiAgICAgICAgZGFtYWdlOiA1MCxcbiAgICAgICAgc3BlZWQ6IDEwMCxcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgICAgZGFtYWdlOiAyMCxcbiAgICAgICAgc3BlZWQ6IDM1MCxcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgICAgZGFtYWdlOiA1LFxuICAgICAgICBzcGVlZDogNjAwLFxuICAgIH0sXG4gICAgNDoge1xuICAgICAgICBkYW1hZ2U6IDcwLFxuICAgICAgICBzcGVlZDogMjAwLFxuICAgIH0sXG59XG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSA1MDA7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoID0gMTUwMDtcbiAgICAgICAgdGhpcy5wb3NYID0gMDtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnBvc1ggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgdGhpcy5ub2RlLmluaXREYXRhID0gdGhpcy5pbml0RGF0YS5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMub25Nb3ZlKGR0KTtcbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLmVtaXQoXCJISVRcIiwgdGhpcy5kYW1hZ2UpO1xuICAgIH0sXG5cbiAgICBvbk1vdmUoZHQpIHtcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggLSB0aGlzLnBvc1ggPiB0aGlzLm1heExlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGluaXREYXRhKGJ1bGxldElEKSB7XG4gICAgICAgIGxldCBidWxsZXQgPSBCdWxsZXRQcm9wc1tidWxsZXRJRF07XG4gICAgICAgIHRoaXMuZGFtYWdlICs9IGJ1bGxldC5kYW1hZ2U7XG4gICAgICAgIHRoaXMuc3BlZWQgKz0gYnVsbGV0LnNwZWVkO1xuICAgIH1cblxufSk7XG4iXX0=