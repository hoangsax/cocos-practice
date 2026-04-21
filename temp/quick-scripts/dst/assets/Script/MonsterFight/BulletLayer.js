
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/BulletLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a1b2omrpFNXIa65MLpLVa7', 'BulletLayer');
// Script/MonsterFight/BulletLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    CharacterEventType = _require.CharacterEventType;

cc.Class({
  "extends": cc.Component,
  properties: {
    bulletItem: [cc.Prefab],
    posFire: cc.Node,
    "char": cc.Node
  },
  ctor: function ctor() {
    this.isReload = false;
  },
  onLoad: function onLoad() {
    new mEmitter();
    mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.createBullet.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.finishReload.bind(this), this);
  },
  onClick: function onClick() {
    this.createBullet();
  },
  createBullet: function createBullet() {
    if (this.isReload) return;
    this.isReload = true;
    var bulletID = Math.floor(Math.random() * this.bulletItem.length);
    var bullet = cc.instantiate(this.bulletItem[bulletID]);
    console.log('create type: ', bulletID);
    bullet.setPosition(this.node.convertToNodeSpaceAR(this.posFire.convertToWorldSpaceAR(cc.Vec2(0, 0))));
    bullet.parent = this.node;
    bullet.initData(bulletID);
  },
  finishReload: function finishReload() {
    this.isReload = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0J1bGxldExheWVyLmpzIl0sIm5hbWVzIjpbIm1FbWl0dGVyIiwicmVxdWlyZSIsIkNoYXJhY3RlckV2ZW50VHlwZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnVsbGV0SXRlbSIsIlByZWZhYiIsInBvc0ZpcmUiLCJOb2RlIiwiY3RvciIsImlzUmVsb2FkIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50IiwiU0hPT1QiLCJjcmVhdGVCdWxsZXQiLCJiaW5kIiwiUkVMT0FEIiwiZmluaXNoUmVsb2FkIiwib25DbGljayIsImJ1bGxldElEIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiYnVsbGV0IiwiaW5zdGFudGlhdGUiLCJjb25zb2xlIiwibG9nIiwic2V0UG9zaXRpb24iLCJub2RlIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMyIiwicGFyZW50IiwiaW5pdERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBbEI7O0FBRUEsZUFBK0JBLE9BQU8sQ0FBQyxhQUFELENBQXRDO0FBQUEsSUFBUUMsa0JBQVIsWUFBUUEsa0JBQVI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUUsQ0FBQ0osRUFBRSxDQUFDSyxNQUFKLENBREo7SUFFUkMsT0FBTyxFQUFFTixFQUFFLENBQUNPLElBRko7SUFHUixRQUFNUCxFQUFFLENBQUNPO0VBSEQsQ0FIUDtFQVNMQyxJQVRLLGtCQVNFO0lBQ0gsS0FBS0MsUUFBTCxHQUFnQixLQUFoQjtFQUNILENBWEk7RUFhTEMsTUFiSyxvQkFhSztJQUNOLElBQUliLFFBQUo7SUFDQUEsUUFBUSxDQUFDYyxRQUFULENBQWtCQyxhQUFsQixDQUFnQ2Isa0JBQWtCLENBQUNjLEtBQW5ELEVBQTBELEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQTFELEVBQXdGLElBQXhGO0lBQ0FsQixRQUFRLENBQUNjLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDYixrQkFBa0IsQ0FBQ2lCLE1BQW5ELEVBQTJELEtBQUtDLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQTNELEVBQXlGLElBQXpGO0VBQ0gsQ0FqQkk7RUFtQkxHLE9BbkJLLHFCQW1CTTtJQUNQLEtBQUtKLFlBQUw7RUFDSCxDQXJCSTtFQXVCTEEsWUF2QkssMEJBdUJVO0lBQ1gsSUFBSSxLQUFLTCxRQUFULEVBQW1CO0lBQ25CLEtBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7SUFDQSxJQUFJVSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBS2xCLFVBQUwsQ0FBZ0JtQixNQUEzQyxDQUFmO0lBQ0EsSUFBTUMsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsV0FBSCxDQUFlLEtBQUtyQixVQUFMLENBQWdCZSxRQUFoQixDQUFmLENBQWY7SUFDQU8sT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlIsUUFBN0I7SUFDQUssTUFBTSxDQUFDSSxXQUFQLENBQW1CLEtBQUtDLElBQUwsQ0FBVUMsb0JBQVYsQ0FBK0IsS0FBS3hCLE9BQUwsQ0FBYXlCLHFCQUFiLENBQW1DL0IsRUFBRSxDQUFDZ0MsSUFBSCxDQUFRLENBQVIsRUFBVyxDQUFYLENBQW5DLENBQS9CLENBQW5CO0lBQ0FSLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQixLQUFLSixJQUFyQjtJQUNBTCxNQUFNLENBQUNVLFFBQVAsQ0FBZ0JmLFFBQWhCO0VBQ0gsQ0FoQ0k7RUFrQ0xGLFlBbENLLDBCQWtDVTtJQUNYLEtBQUtSLFFBQUwsR0FBZ0IsS0FBaEI7RUFDSDtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtRW1pdHRlciA9IHJlcXVpcmUoXCJtRW1pdHRlclwiKTtcblxuY29uc3QgeyBDaGFyYWN0ZXJFdmVudFR5cGUgfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnVsbGV0SXRlbTogW2NjLlByZWZhYl0sXG4gICAgICAgIHBvc0ZpcmU6IGNjLk5vZGUsXG4gICAgICAgIGNoYXI6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNSZWxvYWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbmV3IG1FbWl0dGVyO1xuICAgICAgICBtRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KENoYXJhY3RlckV2ZW50VHlwZS5TSE9PVCwgdGhpcy5jcmVhdGVCdWxsZXQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLlJFTE9BRCwgdGhpcy5maW5pc2hSZWxvYWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVCdWxsZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVsb2FkKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNSZWxvYWQgPSB0cnVlO1xuICAgICAgICBsZXQgYnVsbGV0SUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJ1bGxldEl0ZW0ubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRJdGVtW2J1bGxldElEXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgdHlwZTogJywgYnVsbGV0SUQpO1xuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMucG9zRmlyZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMigwLCAwKSkpKTtcbiAgICAgICAgYnVsbGV0LnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgYnVsbGV0LmluaXREYXRhKGJ1bGxldElEKTtcbiAgICB9LFxuXG4gICAgZmluaXNoUmVsb2FkKCkge1xuICAgICAgICB0aGlzLmlzUmVsb2FkID0gZmFsc2VcbiAgICB9XG5cblxufSk7XG4iXX0=