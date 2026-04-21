
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
require('./assets/Script/MonsterFight/BulletItem');
require('./assets/Script/MonsterFight/BulletLayer');
require('./assets/Script/MonsterFight/CharItem');
require('./assets/Script/MonsterFight/CharLayer');
require('./assets/Script/MonsterFight/Constants');
require('./assets/Script/MonsterFight/MonsterItem');
require('./assets/Script/MonsterFight/MonsterLayer');
require('./assets/Script/MonsterFight/WorldLayer');
require('./assets/Script/SpineAnimation/AnimationButton');
require('./assets/Script/SpineAnimation/AnimationList');
require('./assets/Script/SpineAnimation/Item');
require('./assets/Script/SpineAnimation/SpineManager');
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
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/AnimationButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1de6PsKdJG16NpfzMNhTxP', 'AnimationButton');
// Script/SpineAnimation/AnimationButton.js

"use strict";

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
    this.node.stopAll = this.stopAll.bind(this);
  },
  stopAll: function stopAll() {
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
    this.stopAll();
    this.spineNode.getComponent("cc.Animation").play("ani2", 0);
  },
  runTween: function runTween() {
    this.stopAll();
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
    this.stopAll();
    this.spineNode.runAction(cc.sequence(cc.moveTo(1, 300, 0), cc.moveTo(1, -300, 0), cc.moveTo(1, 0, 0)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BpbmVOb2RlIiwiTm9kZSIsImN0b3IiLCJpbml0aWFsUG9zaXRpb24iLCJWZWMzIiwiaW5pdGlhbFNjYWxlIiwiaW5pdGlhbEFuZ2xlIiwib25Mb2FkIiwicG9zaXRpb24iLCJjbG9uZSIsInNjYWxlIiwicm90YXRpb24iLCJub2RlIiwic3RvcEFsbCIsImJpbmQiLCJzdG9wQWxsQWN0aW9ucyIsInNwaW5lIiwiZ2V0Q29tcG9uZW50Iiwic2V0QW5pbWF0aW9uIiwidHdlZW4iLCJzdG9wIiwiYW5pbSIsInNldFBvc2l0aW9uIiwiYW5nbGUiLCJpbml0aWFsUm90YXRpb24iLCJydW5BbmltYXRpb25DbGlwIiwicGxheSIsInJ1blR3ZWVuIiwidG8iLCJlYXNpbmciLCJzdGFydCIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLO0VBRE4sQ0FIUDtFQU9MQyxJQVBLLGtCQU9FO0lBQ0gsS0FBS0MsZUFBTCxHQUF1QixJQUFJUCxFQUFFLENBQUNRLElBQVAsRUFBdkI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFwQjtFQUNILENBWEk7RUFhTEMsTUFiSyxvQkFhSTtJQUNMLEtBQUtKLGVBQUwsR0FBdUIsS0FBS0gsU0FBTCxDQUFlUSxRQUFmLENBQXdCQyxLQUF4QixFQUF2QjtJQUNBLEtBQUtKLFlBQUwsR0FBb0IsS0FBS0wsU0FBTCxDQUFlVSxLQUFuQztJQUNBLEtBQUtKLFlBQUwsR0FBb0IsS0FBS04sU0FBTCxDQUFlVyxRQUFuQztJQUNBLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQixLQUFLQSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBcEI7RUFFSCxDQW5CSTtFQXFCTEQsT0FyQksscUJBcUJLO0lBQ04sS0FBS2IsU0FBTCxDQUFlZSxjQUFmO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtoQixTQUFMLENBQWVpQixZQUFmLENBQTRCLGFBQTVCLENBQVo7SUFDQUQsS0FBSyxDQUFDRSxZQUFOLENBQW1CLENBQW5CLEVBQXNCLE1BQXRCLEVBQThCLElBQTlCO0lBQ0F0QixFQUFFLENBQUN1QixLQUFILENBQVMsS0FBS25CLFNBQWQsRUFBeUJvQixJQUF6QjtJQUNBLElBQUlDLElBQUksR0FBRyxLQUFLSixZQUFMLENBQWtCLGNBQWxCLENBQVg7SUFDQSxJQUFJSSxJQUFKLEVBQVVBLElBQUksQ0FBQ0QsSUFBTDtJQUVWLEtBQUtwQixTQUFMLENBQWVzQixXQUFmLENBQTJCLEtBQUtuQixlQUFoQztJQUNBLEtBQUtILFNBQUwsQ0FBZVUsS0FBZixHQUF1QixLQUFLTCxZQUE1QjtJQUNBLEtBQUtMLFNBQUwsQ0FBZXVCLEtBQWYsR0FBdUIsS0FBS0MsZUFBNUI7RUFDSCxDQWhDSTtFQWtDTEMsZ0JBbENLLDhCQWtDYztJQUNmLEtBQUtaLE9BQUw7SUFDQSxLQUFLYixTQUFMLENBQWVpQixZQUFmLENBQTRCLGNBQTVCLEVBQTRDUyxJQUE1QyxDQUFpRCxNQUFqRCxFQUF5RCxDQUF6RDtFQUNILENBckNJO0VBdUNMQyxRQXZDSyxzQkF1Q007SUFDUCxLQUFLZCxPQUFMO0lBQ0FqQixFQUFFLENBQUN1QixLQUFILENBQVMsS0FBS25CLFNBQWQsRUFDSzRCLEVBREwsQ0FDUSxDQURSLEVBQ1c7TUFBRWxCLEtBQUssRUFBRTtJQUFULENBRFgsRUFDeUI7TUFBRW1CLE1BQU0sRUFBRTtJQUFWLENBRHpCLEVBRUtELEVBRkwsQ0FFUSxDQUZSLEVBRVc7TUFBRWxCLEtBQUssRUFBRTtJQUFULENBRlgsRUFFeUI7TUFBRW1CLE1BQU0sRUFBRTtJQUFWLENBRnpCLEVBR0tDLEtBSEw7RUFLSCxDQTlDSTtFQWdETEMsU0FoREssdUJBZ0RPO0lBQ1IsS0FBS2xCLE9BQUw7SUFDQSxLQUFLYixTQUFMLENBQWUrQixTQUFmLENBQXlCbkMsRUFBRSxDQUFDb0MsUUFBSCxDQUNyQnBDLEVBQUUsQ0FBQ3FDLE1BQUgsQ0FBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixDQUFsQixDQURxQixFQUVyQnJDLEVBQUUsQ0FBQ3FDLE1BQUgsQ0FBVSxDQUFWLEVBQWEsQ0FBQyxHQUFkLEVBQW1CLENBQW5CLENBRnFCLEVBR3JCckMsRUFBRSxDQUFDcUMsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBSHFCLENBQXpCO0VBS0g7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmVOb2RlOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSAwO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5zcGluZU5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSB0aGlzLnNwaW5lTm9kZS5zY2FsZTtcbiAgICAgICAgdGhpcy5pbml0aWFsQW5nbGUgPSB0aGlzLnNwaW5lTm9kZS5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGwgPSB0aGlzLnN0b3BBbGwuYmluZCh0aGlzKTtcblxuICAgIH0sXG5cbiAgICBzdG9wQWxsKCkge1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBsZXQgc3BpbmUgPSB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKTtcbiAgICAgICAgc3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKVxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lTm9kZSkuc3RvcCgpO1xuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KFwiY2MuQW5pbWF0aW9uXCIpO1xuICAgICAgICBpZiAoYW5pbSkgYW5pbS5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5zcGluZU5vZGUuc2V0UG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5zY2FsZSA9IHRoaXMuaW5pdGlhbFNjYWxlO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5hbmdsZSA9IHRoaXMuaW5pdGlhbFJvdGF0aW9uO1xuICAgIH0sXG5cbiAgICBydW5BbmltYXRpb25DbGlwKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGwoKTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KFwiY2MuQW5pbWF0aW9uXCIpLnBsYXkoXCJhbmkyXCIsIDApO1xuICAgIH0sXG5cbiAgICBydW5Ud2VlbigpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmVOb2RlKVxuICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6ICdzaW5lT3V0SW4nIH0pXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ3NpbmVPdXRJbicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIHJ1bkFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMuc3BpbmVOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLm1vdmVUbygxLCAzMDAsIDApLFxuICAgICAgICAgICAgY2MubW92ZVRvKDEsIC0zMDAsIDApLFxuICAgICAgICAgICAgY2MubW92ZVRvKDEsIDAsIDApKVxuICAgICAgICApXG4gICAgfVxufSk7XG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/SpineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67a0c/hiblH8L7vRgs/tYx4', 'SpineManager');
// Script/SpineAnimation/SpineManager.js

"use strict";

Emitter = require('mEmitter');
cc.Class({
  "extends": cc.Component,
  properties: {
    buttonScript: cc.Node
  },
  ctor: function ctor() {
    this.activeSpine = null;
  },
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('SET_ANIMATION', this.setAnimation.bind(this));
    Emitter.instance.registerEvent('SET_ANIMATION2', this.setAnimation.bind(this));
    var temp = Emitter.instance._emiter._events;
    console.log(temp);
    console.log(temp[Object.keys(temp)[0]]);
    var spines = this.node.children;

    for (var i = 0; i < spines.length; i++) {
      if (spines[i].active) {
        this.activeSpine = spines[i];
        break;
      }
    }
  },
  setAnimation: function setAnimation(data) {
    this.buttonScript.stopAll();
    this.activeSpine.getComponent(sp.Skeleton).setAnimation(0, data, true);
  },
  removeAllEvent: function removeAllEvent() {
    Emitter.instance.removeAllEvent();
  },
  onDestroy: function onDestroy() {
    Emitter.instance.removeAllEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vU3BpbmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidXR0b25TY3JpcHQiLCJOb2RlIiwiY3RvciIsImFjdGl2ZVNwaW5lIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50Iiwic2V0QW5pbWF0aW9uIiwiYmluZCIsInRlbXAiLCJfZW1pdGVyIiwiX2V2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwic3BpbmVzIiwibm9kZSIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsImRhdGEiLCJzdG9wQWxsIiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsInJlbW92ZUFsbEV2ZW50Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWpCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxZQUFZLEVBQUVKLEVBQUUsQ0FBQ0s7RUFEVCxDQUhQO0VBT0xDLElBUEssa0JBT0U7SUFDSCxLQUFLQyxXQUFMLEdBQW1CLElBQW5CO0VBQ0gsQ0FUSTtFQVdMQyxNQVhLLG9CQVdLO0lBQ05WLE9BQU8sQ0FBQ1csUUFBUixHQUFtQixJQUFJWCxPQUFKLEVBQW5CO0lBQ0FBLE9BQU8sQ0FBQ1csUUFBUixDQUFpQkMsYUFBakIsQ0FBK0IsZUFBL0IsRUFBZ0QsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEQ7SUFDQWQsT0FBTyxDQUFDVyxRQUFSLENBQWlCQyxhQUFqQixDQUErQixnQkFBL0IsRUFBaUQsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakQ7SUFDQSxJQUFJQyxJQUFJLEdBQUdmLE9BQU8sQ0FBQ1csUUFBUixDQUFpQkssT0FBakIsQ0FBeUJDLE9BQXBDO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0lBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFJLENBQUNLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixJQUFaLEVBQWtCLENBQWxCLENBQUQsQ0FBaEI7SUFDQSxJQUFJTyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxRQUF2Qjs7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7TUFDcEMsSUFBSUgsTUFBTSxDQUFDRyxDQUFELENBQU4sQ0FBVUUsTUFBZCxFQUFzQjtRQUNsQixLQUFLbEIsV0FBTCxHQUFtQmEsTUFBTSxDQUFDRyxDQUFELENBQXpCO1FBQ0E7TUFDSDtJQUNKO0VBQ0osQ0F6Qkk7RUEyQkxaLFlBM0JLLHdCQTJCUWUsSUEzQlIsRUEyQmM7SUFDZixLQUFLdEIsWUFBTCxDQUFrQnVCLE9BQWxCO0lBQ0EsS0FBS3BCLFdBQUwsQ0FBaUJxQixZQUFqQixDQUE4QkMsRUFBRSxDQUFDQyxRQUFqQyxFQUEyQ25CLFlBQTNDLENBQXdELENBQXhELEVBQTJEZSxJQUEzRCxFQUFpRSxJQUFqRTtFQUNILENBOUJJO0VBZ0NMSyxjQWhDSyw0QkFnQ1k7SUFDYmpDLE9BQU8sQ0FBQ1csUUFBUixDQUFpQnNCLGNBQWpCO0VBQ0gsQ0FsQ0k7RUFvQ0xDLFNBcENLLHVCQW9DTztJQUNSbEMsT0FBTyxDQUFDVyxRQUFSLENBQWlCc0IsY0FBakI7RUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvblNjcmlwdDogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTcGluZSA9IG51bGw7XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UgPSBuZXcgRW1pdHRlcigpO1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoJ1NFVF9BTklNQVRJT04nLCB0aGlzLnNldEFuaW1hdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KCdTRVRfQU5JTUFUSU9OMicsIHRoaXMuc2V0QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICBsZXQgdGVtcCA9IEVtaXR0ZXIuaW5zdGFuY2UuX2VtaXRlci5fZXZlbnRzO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcFtPYmplY3Qua2V5cyh0ZW1wKVswXV0pO1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNwaW5lc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNwaW5lID0gc3BpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldEFuaW1hdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uU2NyaXB0LnN0b3BBbGwoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVTcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBkYXRhLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsRXZlbnQoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVtb3ZlQWxsRXZlbnQoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBFbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KCk7XG4gICAgfVxufSk7XG4iXX0=
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

    this.events = new Map();
    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);

    mEmitter.instance = this;
  }

  var _proto = mEmitter.prototype;

  _proto.emit = function emit() {
    var _this$_emiter;

    (_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments);
  };

  _proto.registerEvent = function registerEvent(event, listener, node) {
    if (node) {
      this.events.set(node, {
        'event': event,
        'listener': listener
      });
    }

    this._emiter.on(event, listener);
  };

  _proto.registerOnce = function registerOnce(event, listener) {
    this._emiter.once(event, listener);
  };

  _proto.removeEvent = function removeEvent(event, listener) {
    this._emiter.removeListener(event, listener);

    this.events["delete"](event);
  };

  _proto.removeAllEvent = function removeAllEvent(node) {
    var _this = this;

    this.events[node].forEach(function (listener, event) {
      _this._emiter.removeListener(event, listener);
    });
    this.events.clear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbUVtaXR0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIm1FbWl0dGVyIiwiaW5zdGFuY2UiLCJldmVudHMiLCJNYXAiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsInJlZ2lzdGVyRXZlbnQiLCJldmVudCIsImxpc3RlbmVyIiwibm9kZSIsInNldCIsIm9uIiwicmVnaXN0ZXJPbmNlIiwib25jZSIsInJlbW92ZUV2ZW50IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxFdmVudCIsImZvckVhY2giLCJjbGVhciIsImRlc3Ryb3kiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBNUI7O0lBQ01DO0VBRUYsb0JBQWM7SUFDVixJQUFJQSxRQUFRLENBQUNDLFFBQWIsRUFBdUI7TUFDbkIsT0FBT0QsUUFBUSxDQUFDQyxRQUFoQjtJQUNIOztJQUNELEtBQUtDLE1BQUwsR0FBYyxJQUFJQyxHQUFKLEVBQWQ7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSU4sWUFBSixFQUFmOztJQUNBLEtBQUtNLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixHQUE3Qjs7SUFDQUwsUUFBUSxDQUFDQyxRQUFULEdBQW9CLElBQXBCO0VBQ0g7Ozs7U0FFREssT0FBQSxnQkFBYztJQUFBOztJQUNWLHNCQUFLRixPQUFMLEVBQWFFLElBQWI7RUFDSDs7U0FFREMsZ0JBQUEsdUJBQWNDLEtBQWQsRUFBcUJDLFFBQXJCLEVBQStCQyxJQUEvQixFQUFxQztJQUNqQyxJQUFJQSxJQUFKLEVBQVU7TUFDTixLQUFLUixNQUFMLENBQVlTLEdBQVosQ0FBZ0JELElBQWhCLEVBQXNCO1FBQUUsU0FBU0YsS0FBWDtRQUFrQixZQUFZQztNQUE5QixDQUF0QjtJQUNIOztJQUNELEtBQUtMLE9BQUwsQ0FBYVEsRUFBYixDQUFnQkosS0FBaEIsRUFBdUJDLFFBQXZCO0VBQ0g7O1NBQ0RJLGVBQUEsc0JBQWFMLEtBQWIsRUFBb0JDLFFBQXBCLEVBQThCO0lBQzFCLEtBQUtMLE9BQUwsQ0FBYVUsSUFBYixDQUFrQk4sS0FBbEIsRUFBeUJDLFFBQXpCO0VBQ0g7O1NBRURNLGNBQUEscUJBQVlQLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0lBQ3pCLEtBQUtMLE9BQUwsQ0FBYVksY0FBYixDQUE0QlIsS0FBNUIsRUFBbUNDLFFBQW5DOztJQUNBLEtBQUtQLE1BQUwsV0FBbUJNLEtBQW5CO0VBQ0g7O1NBRURTLGlCQUFBLHdCQUFlUCxJQUFmLEVBQXFCO0lBQUE7O0lBQ2pCLEtBQUtSLE1BQUwsQ0FBWVEsSUFBWixFQUFrQlEsT0FBbEIsQ0FBMEIsVUFBQ1QsUUFBRCxFQUFXRCxLQUFYLEVBQXFCO01BQzNDLEtBQUksQ0FBQ0osT0FBTCxDQUFhWSxjQUFiLENBQTRCUixLQUE1QixFQUFtQ0MsUUFBbkM7SUFDSCxDQUZEO0lBR0EsS0FBS1AsTUFBTCxDQUFZaUIsS0FBWjtFQUNIOztTQUVEQyxVQUFBLG1CQUFVO0lBQ04sS0FBS2hCLE9BQUwsQ0FBYWlCLGtCQUFiOztJQUNBLEtBQUtqQixPQUFMLEdBQWUsSUFBZjtJQUNBSixRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7RUFDSDs7Ozs7QUFFTEQsUUFBUSxDQUFDQyxRQUFULEdBQW9CLElBQXBCO0FBQ0FxQixNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jbGFzcyBtRW1pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1FbWl0dGVyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbUVtaXR0ZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fZW1pdGVyLnNldE1heExpc3RlbmVycygxMDApO1xuICAgICAgICBtRW1pdHRlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX2VtaXRlci5lbWl0KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQsIGxpc3RlbmVyLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQobm9kZSwgeyAnZXZlbnQnOiBldmVudCwgJ2xpc3RlbmVyJzogbGlzdGVuZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdGVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIHJlZ2lzdGVyT25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudChldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsRXZlbnQobm9kZSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tub2RlXS5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudHMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9lbWl0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2VtaXRlciA9IG51bGw7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG59XG5tRW1pdHRlci5pbnN0YW5jZSA9IG51bGw7XG5tb2R1bGUuZXhwb3J0cyA9IG1FbWl0dGVyOyJdfQ==
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/CharItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23def/9FaBCIZ9s6buXCtgm', 'CharItem');
// Script/MonsterFight/CharItem.js

"use strict";

var _require = require("./Constants"),
    MoveDirection = _require.MoveDirection;

var charProps = {
  speed: 400,
  scencePaddingLeft: 75,
  scencePaddingRight: 1000,
  scencePaddingTop: 150,
  scencePaddingBottom: 75
};
var animations = {
  walk: "walk",
  idle: "idle",
  run: "run",
  shoot: "shoot"
};
cc.Class({
  "extends": cc.Component,
  properties: {
    posFire: cc.Node,
    canvas: cc.Node,
    charSpine: sp.Skeleton
  },
  ctor: function ctor() {
    this.speed = charProps.speed;
    this.isReload = false;
    this.preReload = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
    this.isMoving = false;
  },
  onLoad: function onLoad() {
    this.node.PosFire = this.posFire.position.clone();
    this.node.onPressMove = this.onPressMove.bind(this);
    this.node.onPressStop = this.onPressStop.bind(this);
    this.node.onShoot = this.onShoot.bind(this);
    this.node.onReloadDone = this.onReloadDone.bind(this);
    console.log(this.charSpine);
  },
  update: function update(dt) {
    var currState = this.isMoving;
    this.onMove(dt);
    this.handleAnimation(currState);
    this.preReload = this.isReload;
  },
  setMoving: function setMoving(direction, isMoving) {
    if (isMoving === void 0) {
      isMoving = false;
    }

    switch (direction) {
      case MoveDirection.LEFT:
        this.isMovingLeft = isMoving;
        break;

      case MoveDirection.RIGHT:
        this.isMovingRight = isMoving;
        break;

      case MoveDirection.UP:
        this.isMovingUp = isMoving;
        break;

      case MoveDirection.DOWN:
        this.isMovingDown = isMoving;
        break;
    }
  },
  onPressMove: function onPressMove(direction) {
    this.setMoving(direction, true);
  },
  onPressStop: function onPressStop(direction) {
    this.setMoving(direction, false);
  },
  limitPositionOnScene: function limitPositionOnScene() {
    if (this.node.x < -this.canvas.width / 2 + charProps.scencePaddingLeft) {
      this.node.x = -this.canvas.width / 2 + charProps.scencePaddingLeft;
    }

    if (this.node.x > this.canvas.width / 2 - charProps.scencePaddingRight) {
      this.node.x = this.canvas.width / 2 - charProps.scencePaddingRight;
    }

    if (this.node.y < -this.canvas.height / 2 + charProps.scencePaddingBottom) {
      this.node.y = -this.canvas.height / 2 + charProps.scencePaddingBottom;
    }

    if (this.node.y > this.canvas.height / 2 - charProps.scencePaddingTop) {
      this.node.y = this.canvas.height / 2 - charProps.scencePaddingTop;
    }
  },
  onMove: function onMove(dt) {
    if (this.isReload && !this.preReload) {
      return;
    }

    var moveX = 0;
    var moveY = 0;
    if (this.isMovingRight) moveX += 1;
    if (this.isMovingLeft) moveX -= 1;
    if (this.isMovingUp) moveY += 1;
    if (this.isMovingDown) moveY -= 1;

    if (moveX !== 0 || moveY !== 0) {
      this.node.x += moveX * this.speed * dt;
      this.node.y += moveY * this.speed * dt;
      this.isMoving = true;
    } else {
      this.isMoving = false;
    }

    this.limitPositionOnScene();
  },
  onStop: function onStop() {
    this.isMoving = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  },
  onShoot: function onShoot() {
    if (!this.isReload) {
      this.isReload = true;
      this.playAnimation(animations.shoot, false);
    }
  },
  onReloadDone: function onReloadDone() {
    this.isReload = false;
  },
  handleAnimation: function handleAnimation(currState) {
    if (this.preReload && !this.isReload) {
      if (this.isMoving) {
        this.addAnimation(animations.run);
      } else {
        this.addAnimation(animations.idle);
      }
    } else if (this.isMoving && !currState) {
      this.addAnimation(animations.run);
    } else if (!this.isMoving && currState) {
      this.addAnimation(animations.idle);
    }
  },
  playAnimation: function playAnimation(animationName, loop) {
    if (loop === void 0) {
      loop = true;
    }

    this.charSpine.setAnimation(0, animationName, loop, 0);
  },
  addAnimation: function addAnimation(animationName, loop) {
    if (loop === void 0) {
      loop = true;
    }

    this.charSpine.clearTracks();
    this.charSpine.setToSetupPose();
    this.charSpine.addAnimation(0, animationName, loop, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0NoYXJJdGVtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJNb3ZlRGlyZWN0aW9uIiwiY2hhclByb3BzIiwic3BlZWQiLCJzY2VuY2VQYWRkaW5nTGVmdCIsInNjZW5jZVBhZGRpbmdSaWdodCIsInNjZW5jZVBhZGRpbmdUb3AiLCJzY2VuY2VQYWRkaW5nQm90dG9tIiwiYW5pbWF0aW9ucyIsIndhbGsiLCJpZGxlIiwicnVuIiwic2hvb3QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBvc0ZpcmUiLCJOb2RlIiwiY2FudmFzIiwiY2hhclNwaW5lIiwic3AiLCJTa2VsZXRvbiIsImN0b3IiLCJpc1JlbG9hZCIsInByZVJlbG9hZCIsImlzTW92aW5nTGVmdCIsImlzTW92aW5nUmlnaHQiLCJpc01vdmluZ1VwIiwiaXNNb3ZpbmdEb3duIiwiaXNNb3ZpbmciLCJvbkxvYWQiLCJub2RlIiwiUG9zRmlyZSIsInBvc2l0aW9uIiwiY2xvbmUiLCJvblByZXNzTW92ZSIsImJpbmQiLCJvblByZXNzU3RvcCIsIm9uU2hvb3QiLCJvblJlbG9hZERvbmUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZHQiLCJjdXJyU3RhdGUiLCJvbk1vdmUiLCJoYW5kbGVBbmltYXRpb24iLCJzZXRNb3ZpbmciLCJkaXJlY3Rpb24iLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJsaW1pdFBvc2l0aW9uT25TY2VuZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJtb3ZlWCIsIm1vdmVZIiwib25TdG9wIiwicGxheUFuaW1hdGlvbiIsImFkZEFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJsb29wIiwic2V0QW5pbWF0aW9uIiwiY2xlYXJUcmFja3MiLCJzZXRUb1NldHVwUG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUEwQkEsT0FBTyxDQUFDLGFBQUQsQ0FBakM7QUFBQSxJQUFRQyxhQUFSLFlBQVFBLGFBQVI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHO0VBQ2RDLEtBQUssRUFBRSxHQURPO0VBRWRDLGlCQUFpQixFQUFFLEVBRkw7RUFHZEMsa0JBQWtCLEVBQUUsSUFITjtFQUlkQyxnQkFBZ0IsRUFBRSxHQUpKO0VBS2RDLG1CQUFtQixFQUFFO0FBTFAsQ0FBbEI7QUFRQSxJQUFNQyxVQUFVLEdBQUc7RUFDZkMsSUFBSSxFQUFFLE1BRFM7RUFFZkMsSUFBSSxFQUFFLE1BRlM7RUFHZkMsR0FBRyxFQUFFLEtBSFU7RUFJZkMsS0FBSyxFQUFFO0FBSlEsQ0FBbkI7QUFPQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQURKO0lBRVJDLE1BQU0sRUFBRU4sRUFBRSxDQUFDSyxJQUZIO0lBR1JFLFNBQVMsRUFBRUMsRUFBRSxDQUFDQztFQUhOLENBSFA7RUFTTEMsSUFUSyxrQkFTRTtJQUNILEtBQUtwQixLQUFMLEdBQWFELFNBQVMsQ0FBQ0MsS0FBdkI7SUFDQSxLQUFLcUIsUUFBTCxHQUFnQixLQUFoQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBakI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQixLQUFyQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsS0FBbEI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixLQUFoQjtFQUNILENBbEJJO0VBb0JMQyxNQXBCSyxvQkFvQkk7SUFDTCxLQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsS0FBS2hCLE9BQUwsQ0FBYWlCLFFBQWIsQ0FBc0JDLEtBQXRCLEVBQXBCO0lBQ0EsS0FBS0gsSUFBTCxDQUFVSSxXQUFWLEdBQXdCLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXhCO0lBQ0EsS0FBS0wsSUFBTCxDQUFVTSxXQUFWLEdBQXdCLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQXhCO0lBQ0EsS0FBS0wsSUFBTCxDQUFVTyxPQUFWLEdBQW9CLEtBQUtBLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUFwQjtJQUNBLEtBQUtMLElBQUwsQ0FBVVEsWUFBVixHQUF5QixLQUFLQSxZQUFMLENBQWtCSCxJQUFsQixDQUF1QixJQUF2QixDQUF6QjtJQUNBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLdEIsU0FBakI7RUFDSCxDQTNCSTtFQTZCTHVCLE1BN0JLLGtCQTZCRUMsRUE3QkYsRUE2Qk07SUFDUCxJQUFJQyxTQUFTLEdBQUcsS0FBS2YsUUFBckI7SUFDQSxLQUFLZ0IsTUFBTCxDQUFZRixFQUFaO0lBQ0EsS0FBS0csZUFBTCxDQUFxQkYsU0FBckI7SUFDQSxLQUFLcEIsU0FBTCxHQUFpQixLQUFLRCxRQUF0QjtFQUNILENBbENJO0VBb0NMd0IsU0FwQ0sscUJBb0NLQyxTQXBDTCxFQW9DZ0JuQixRQXBDaEIsRUFvQ2tDO0lBQUEsSUFBbEJBLFFBQWtCO01BQWxCQSxRQUFrQixHQUFQLEtBQU87SUFBQTs7SUFDbkMsUUFBUW1CLFNBQVI7TUFDSSxLQUFLaEQsYUFBYSxDQUFDaUQsSUFBbkI7UUFDSSxLQUFLeEIsWUFBTCxHQUFvQkksUUFBcEI7UUFDQTs7TUFDSixLQUFLN0IsYUFBYSxDQUFDa0QsS0FBbkI7UUFDSSxLQUFLeEIsYUFBTCxHQUFxQkcsUUFBckI7UUFDQTs7TUFDSixLQUFLN0IsYUFBYSxDQUFDbUQsRUFBbkI7UUFDSSxLQUFLeEIsVUFBTCxHQUFrQkUsUUFBbEI7UUFDQTs7TUFDSixLQUFLN0IsYUFBYSxDQUFDb0QsSUFBbkI7UUFDSSxLQUFLeEIsWUFBTCxHQUFvQkMsUUFBcEI7UUFDQTtJQVpSO0VBY0gsQ0FuREk7RUFxRExNLFdBckRLLHVCQXFET2EsU0FyRFAsRUFxRGtCO0lBQ25CLEtBQUtELFNBQUwsQ0FBZUMsU0FBZixFQUEwQixJQUExQjtFQUNILENBdkRJO0VBeURMWCxXQXpESyx1QkF5RE9XLFNBekRQLEVBeURrQjtJQUNuQixLQUFLRCxTQUFMLENBQWVDLFNBQWYsRUFBMEIsS0FBMUI7RUFDSCxDQTNESTtFQTZETEssb0JBN0RLLGtDQTZEa0I7SUFDbkIsSUFBSSxLQUFLdEIsSUFBTCxDQUFVdUIsQ0FBVixHQUFjLENBQUMsS0FBS3BDLE1BQUwsQ0FBWXFDLEtBQWIsR0FBcUIsQ0FBckIsR0FBeUJ0RCxTQUFTLENBQUNFLGlCQUFyRCxFQUF3RTtNQUNwRSxLQUFLNEIsSUFBTCxDQUFVdUIsQ0FBVixHQUFjLENBQUMsS0FBS3BDLE1BQUwsQ0FBWXFDLEtBQWIsR0FBcUIsQ0FBckIsR0FBeUJ0RCxTQUFTLENBQUNFLGlCQUFqRDtJQUNIOztJQUNELElBQUksS0FBSzRCLElBQUwsQ0FBVXVCLENBQVYsR0FBYyxLQUFLcEMsTUFBTCxDQUFZcUMsS0FBWixHQUFvQixDQUFwQixHQUF3QnRELFNBQVMsQ0FBQ0csa0JBQXBELEVBQXdFO01BQ3BFLEtBQUsyQixJQUFMLENBQVV1QixDQUFWLEdBQWMsS0FBS3BDLE1BQUwsQ0FBWXFDLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0J0RCxTQUFTLENBQUNHLGtCQUFoRDtJQUNIOztJQUNELElBQUksS0FBSzJCLElBQUwsQ0FBVXlCLENBQVYsR0FBYyxDQUFDLEtBQUt0QyxNQUFMLENBQVl1QyxNQUFiLEdBQXNCLENBQXRCLEdBQTBCeEQsU0FBUyxDQUFDSyxtQkFBdEQsRUFBMkU7TUFDdkUsS0FBS3lCLElBQUwsQ0FBVXlCLENBQVYsR0FBYyxDQUFDLEtBQUt0QyxNQUFMLENBQVl1QyxNQUFiLEdBQXNCLENBQXRCLEdBQTBCeEQsU0FBUyxDQUFDSyxtQkFBbEQ7SUFDSDs7SUFDRCxJQUFJLEtBQUt5QixJQUFMLENBQVV5QixDQUFWLEdBQWMsS0FBS3RDLE1BQUwsQ0FBWXVDLE1BQVosR0FBcUIsQ0FBckIsR0FBeUJ4RCxTQUFTLENBQUNJLGdCQUFyRCxFQUF1RTtNQUNuRSxLQUFLMEIsSUFBTCxDQUFVeUIsQ0FBVixHQUFjLEtBQUt0QyxNQUFMLENBQVl1QyxNQUFaLEdBQXFCLENBQXJCLEdBQXlCeEQsU0FBUyxDQUFDSSxnQkFBakQ7SUFDSDtFQUNKLENBMUVJO0VBNEVMd0MsTUE1RUssa0JBNEVFRixFQTVFRixFQTRFTTtJQUNQLElBQUksS0FBS3BCLFFBQUwsSUFBaUIsQ0FBQyxLQUFLQyxTQUEzQixFQUFzQztNQUNsQztJQUNIOztJQUNELElBQUlrQyxLQUFLLEdBQUcsQ0FBWjtJQUNBLElBQUlDLEtBQUssR0FBRyxDQUFaO0lBRUEsSUFBSSxLQUFLakMsYUFBVCxFQUF3QmdDLEtBQUssSUFBSSxDQUFUO0lBQ3hCLElBQUksS0FBS2pDLFlBQVQsRUFBdUJpQyxLQUFLLElBQUksQ0FBVDtJQUN2QixJQUFJLEtBQUsvQixVQUFULEVBQXFCZ0MsS0FBSyxJQUFJLENBQVQ7SUFDckIsSUFBSSxLQUFLL0IsWUFBVCxFQUF1QitCLEtBQUssSUFBSSxDQUFUOztJQUV2QixJQUFJRCxLQUFLLEtBQUssQ0FBVixJQUFlQyxLQUFLLEtBQUssQ0FBN0IsRUFBZ0M7TUFDNUIsS0FBSzVCLElBQUwsQ0FBVXVCLENBQVYsSUFBZUksS0FBSyxHQUFHLEtBQUt4RCxLQUFiLEdBQXFCeUMsRUFBcEM7TUFDQSxLQUFLWixJQUFMLENBQVV5QixDQUFWLElBQWVHLEtBQUssR0FBRyxLQUFLekQsS0FBYixHQUFxQnlDLEVBQXBDO01BQ0EsS0FBS2QsUUFBTCxHQUFnQixJQUFoQjtJQUNILENBSkQsTUFLSztNQUNELEtBQUtBLFFBQUwsR0FBZ0IsS0FBaEI7SUFDSDs7SUFDRCxLQUFLd0Isb0JBQUw7RUFDSCxDQWpHSTtFQW1HTE8sTUFuR0ssb0JBbUdJO0lBQ0wsS0FBSy9CLFFBQUwsR0FBZ0IsS0FBaEI7SUFDQSxLQUFLSixZQUFMLEdBQW9CLEtBQXBCO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQixLQUFyQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsS0FBbEI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0VBQ0gsQ0F6R0k7RUEyR0xVLE9BM0dLLHFCQTJHSztJQUNOLElBQUksQ0FBQyxLQUFLZixRQUFWLEVBQW9CO01BQ2hCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7TUFDQSxLQUFLc0MsYUFBTCxDQUFtQnRELFVBQVUsQ0FBQ0ksS0FBOUIsRUFBcUMsS0FBckM7SUFDSDtFQUNKLENBaEhJO0VBa0hMNEIsWUFsSEssMEJBa0hVO0lBQ1gsS0FBS2hCLFFBQUwsR0FBZ0IsS0FBaEI7RUFDSCxDQXBISTtFQXNITHVCLGVBdEhLLDJCQXNIV0YsU0F0SFgsRUFzSHNCO0lBQ3ZCLElBQUksS0FBS3BCLFNBQUwsSUFBa0IsQ0FBQyxLQUFLRCxRQUE1QixFQUFzQztNQUNsQyxJQUFJLEtBQUtNLFFBQVQsRUFBa0I7UUFDZCxLQUFLaUMsWUFBTCxDQUFrQnZELFVBQVUsQ0FBQ0csR0FBN0I7TUFDSCxDQUZELE1BR0s7UUFDRCxLQUFLb0QsWUFBTCxDQUFrQnZELFVBQVUsQ0FBQ0UsSUFBN0I7TUFDSDtJQUNKLENBUEQsTUFRSyxJQUFJLEtBQUtvQixRQUFMLElBQWlCLENBQUNlLFNBQXRCLEVBQWlDO01BQ2xDLEtBQUtrQixZQUFMLENBQWtCdkQsVUFBVSxDQUFDRyxHQUE3QjtJQUNILENBRkksTUFHQSxJQUFJLENBQUMsS0FBS21CLFFBQU4sSUFBa0JlLFNBQXRCLEVBQWlDO01BQ2xDLEtBQUtrQixZQUFMLENBQWtCdkQsVUFBVSxDQUFDRSxJQUE3QjtJQUNIO0VBQ0osQ0FySUk7RUF1SUxvRCxhQXZJSyx5QkF1SVNFLGFBdklULEVBdUl3QkMsSUF2SXhCLEVBdUlxQztJQUFBLElBQWJBLElBQWE7TUFBYkEsSUFBYSxHQUFOLElBQU07SUFBQTs7SUFDdEMsS0FBSzdDLFNBQUwsQ0FBZThDLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JGLGFBQS9CLEVBQThDQyxJQUE5QyxFQUFvRCxDQUFwRDtFQUNILENBeklJO0VBMklMRixZQTNJSyx3QkEySVFDLGFBM0lSLEVBMkl1QkMsSUEzSXZCLEVBMklvQztJQUFBLElBQWJBLElBQWE7TUFBYkEsSUFBYSxHQUFOLElBQU07SUFBQTs7SUFDckMsS0FBSzdDLFNBQUwsQ0FBZStDLFdBQWY7SUFDQSxLQUFLL0MsU0FBTCxDQUFlZ0QsY0FBZjtJQUNBLEtBQUtoRCxTQUFMLENBQWUyQyxZQUFmLENBQTRCLENBQTVCLEVBQStCQyxhQUEvQixFQUE4Q0MsSUFBOUMsRUFBb0QsQ0FBcEQ7RUFDSDtBQS9JSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IE1vdmVEaXJlY3Rpb24gfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcblxuY29uc3QgY2hhclByb3BzID0ge1xuICAgIHNwZWVkOiA0MDAsXG4gICAgc2NlbmNlUGFkZGluZ0xlZnQ6IDc1LFxuICAgIHNjZW5jZVBhZGRpbmdSaWdodDogMTAwMCxcbiAgICBzY2VuY2VQYWRkaW5nVG9wOiAxNTAsXG4gICAgc2NlbmNlUGFkZGluZ0JvdHRvbTogNzUsXG59XG5cbmNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgd2FsazogXCJ3YWxrXCIsXG4gICAgaWRsZTogXCJpZGxlXCIsXG4gICAgcnVuOiBcInJ1blwiLFxuICAgIHNob290OiBcInNob290XCJcbn1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcG9zRmlyZTogY2MuTm9kZSxcbiAgICAgICAgY2FudmFzOiBjYy5Ob2RlLFxuICAgICAgICBjaGFyU3BpbmU6IHNwLlNrZWxldG9uLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gY2hhclByb3BzLnNwZWVkO1xuICAgICAgICB0aGlzLmlzUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJlUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5Qb3NGaXJlID0gdGhpcy5wb3NGaXJlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubm9kZS5vblByZXNzTW92ZSA9IHRoaXMub25QcmVzc01vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uUHJlc3NTdG9wID0gdGhpcy5vblByZXNzU3RvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub25TaG9vdCA9IHRoaXMub25TaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub25SZWxvYWREb25lID0gdGhpcy5vblJlbG9hZERvbmUuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFyU3BpbmUpO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgbGV0IGN1cnJTdGF0ZSA9IHRoaXMuaXNNb3Zpbmc7XG4gICAgICAgIHRoaXMub25Nb3ZlKGR0KTtcbiAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb24oY3VyclN0YXRlKTtcbiAgICAgICAgdGhpcy5wcmVSZWxvYWQgPSB0aGlzLmlzUmVsb2FkO1xuICAgIH0sXG5cbiAgICBzZXRNb3ZpbmcoZGlyZWN0aW9uLCBpc01vdmluZyA9IGZhbHNlKSB7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIE1vdmVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGlzTW92aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGlzTW92aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLlVQOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdVcCA9IGlzTW92aW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSBpc01vdmluZztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblByZXNzTW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRNb3ZpbmcoZGlyZWN0aW9uLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgb25QcmVzc1N0b3AoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0TW92aW5nKGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBsaW1pdFBvc2l0aW9uT25TY2VuZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS54IDwgLXRoaXMuY2FudmFzLndpZHRoIC8gMiArIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtdGhpcy5jYW52YXMud2lkdGggLyAyICsgY2hhclByb3BzLnNjZW5jZVBhZGRpbmdMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyIC0gY2hhclByb3BzLnNjZW5jZVBhZGRpbmdSaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nQm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IC10aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgY2hhclByb3BzLnNjZW5jZVBhZGRpbmdCb3R0b207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID4gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIGNoYXJQcm9wcy5zY2VuY2VQYWRkaW5nVG9wKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSBjaGFyUHJvcHMuc2NlbmNlUGFkZGluZ1RvcDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vdmUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWxvYWQgJiYgIXRoaXMucHJlUmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmVYID0gMDtcbiAgICAgICAgbGV0IG1vdmVZID0gMDtcblxuICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSBtb3ZlWCArPSAxO1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZ0xlZnQpIG1vdmVYIC09IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nVXApIG1vdmVZICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nRG93bikgbW92ZVkgLT0gMTtcblxuICAgICAgICBpZiAobW92ZVggIT09IDAgfHwgbW92ZVkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IG1vdmVYICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gbW92ZVkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbWl0UG9zaXRpb25PblNjZW5lKCk7XG4gICAgfSxcblxuICAgIG9uU3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uU2hvb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlbG9hZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oYW5pbWF0aW9ucy5zaG9vdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUmVsb2FkRG9uZSgpIHtcbiAgICAgICAgdGhpcy5pc1JlbG9hZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBoYW5kbGVBbmltYXRpb24oY3VyclN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnByZVJlbG9hZCAmJiAhdGhpcy5pc1JlbG9hZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3Zpbmcpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uKGFuaW1hdGlvbnMucnVuKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb24oYW5pbWF0aW9ucy5pZGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNNb3ZpbmcgJiYgIWN1cnJTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb24oYW5pbWF0aW9ucy5ydW4pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaXNNb3ZpbmcgJiYgY3VyclN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbihhbmltYXRpb25zLmlkbGUpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxheUFuaW1hdGlvbihhbmltYXRpb25OYW1lLCBsb29wID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5zZXRBbmltYXRpb24oMCwgYW5pbWF0aW9uTmFtZSwgbG9vcCwgMCk7XG4gICAgfSxcblxuICAgIGFkZEFuaW1hdGlvbihhbmltYXRpb25OYW1lLCBsb29wID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5jbGVhclRyYWNrcygpO1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLmNoYXJTcGluZS5hZGRBbmltYXRpb24oMCwgYW5pbWF0aW9uTmFtZSwgbG9vcCwgMCk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/MonsterLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'caf1fqUbtdKVY1VGjC2cjGg', 'MonsterLayer');
// Script/MonsterFight/MonsterLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    MonsterEventType = _require.MonsterEventType;

var monsterPosition = cc.Vec2(600, -10);
cc.Class({
  "extends": cc.Component,
  properties: {
    monster: cc.Node
  },
  onLoad: function onLoad() {
    mEmitter.instance.registerEvent(MonsterEventType.HIT, this.onHit.bind(this), this);
  },
  onHit: function onHit(damage) {
    this.monster.onHit(damage);
  },
  onDestroy: function onDestroy() {
    mEmitter.instance.removeAllEvent(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L01vbnN0ZXJMYXllci5qcyJdLCJuYW1lcyI6WyJtRW1pdHRlciIsInJlcXVpcmUiLCJNb25zdGVyRXZlbnRUeXBlIiwibW9uc3RlclBvc2l0aW9uIiwiY2MiLCJWZWMyIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uc3RlciIsIk5vZGUiLCJvbkxvYWQiLCJpbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnQiLCJISVQiLCJvbkhpdCIsImJpbmQiLCJkYW1hZ2UiLCJvbkRlc3Ryb3kiLCJyZW1vdmVBbGxFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFsQjs7QUFDQSxlQUE2QkEsT0FBTyxDQUFDLGFBQUQsQ0FBcEM7QUFBQSxJQUFRQyxnQkFBUixZQUFRQSxnQkFBUjs7QUFFQSxJQUFNQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLEdBQVIsRUFBYSxDQUFDLEVBQWQsQ0FBeEI7QUFFQUQsRUFBRSxDQUFDRSxLQUFILENBQVM7RUFDTCxXQUFTRixFQUFFLENBQUNHLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUwsRUFBRSxDQUFDTTtFQURKLENBSFA7RUFPTEMsTUFQSyxvQkFPSztJQUNOWCxRQUFRLENBQUNZLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDWCxnQkFBZ0IsQ0FBQ1ksR0FBakQsRUFBc0QsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQXRELEVBQTZFLElBQTdFO0VBQ0gsQ0FUSTtFQVdMRCxLQVhLLGlCQVdDRSxNQVhELEVBV1M7SUFDVixLQUFLUixPQUFMLENBQWFNLEtBQWIsQ0FBbUJFLE1BQW5CO0VBQ0gsQ0FiSTtFQWVMQyxTQWZLLHVCQWVPO0lBQ1JsQixRQUFRLENBQUNZLFFBQVQsQ0FBa0JPLGNBQWxCLENBQWlDLElBQWpDO0VBQ0g7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibUVtaXR0ZXIgPSByZXF1aXJlKFwibUVtaXR0ZXJcIik7XG5jb25zdCB7IE1vbnN0ZXJFdmVudFR5cGUgfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcblxuY29uc3QgbW9uc3RlclBvc2l0aW9uID0gY2MuVmVjMig2MDAsIC0xMClcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW9uc3RlcjogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudChNb25zdGVyRXZlbnRUeXBlLkhJVCwgdGhpcy5vbkhpdC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25IaXQoZGFtYWdlKSB7XG4gICAgICAgIHRoaXMubW9uc3Rlci5vbkhpdChkYW1hZ2UpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KHRoaXMpO1xuICAgIH1cbn0pO1xuIl19
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
    this.node.removeAllChildren();

    for (var i = 0; i < spines.length; i++) {
      if (spines[i].active) {
        this.animations = spines[i].getComponent("sp.Skeleton")._skeleton.data.animations;
        break;
      }
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vQW5pbWF0aW9uTGlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwaW5lTWFuZ2VyIiwiTm9kZSIsImFuaW1hdGlvbkl0ZW0iLCJQcmVmYWIiLCJjdG9yIiwiYW5pbWF0aW9ucyIsIm9uTG9hZCIsInNwaW5lcyIsImNoaWxkcmVuIiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIl9za2VsZXRvbiIsImRhdGEiLCJhbmltYXRpb25zTGVuZ3RoIiwiYnV0dG9uIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJzdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsV0FBVyxFQUFFSixFQUFFLENBQUNLLElBRFI7SUFFUkMsYUFBYSxFQUFFTixFQUFFLENBQUNPO0VBRlYsQ0FIUDtFQVFMQyxJQVJLLGtCQVFFO0lBQ0gsS0FBS0MsVUFBTCxHQUFrQixFQUFsQjtFQUNILENBVkk7RUFZTEMsTUFaSyxvQkFZSTtJQUNMLElBQUlDLE1BQU0sR0FBRyxLQUFLUCxXQUFMLENBQWlCUSxRQUE5QjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsaUJBQVY7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO01BQ3BDLElBQUlKLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOLENBQVVFLE1BQWQsRUFBc0I7UUFDbEIsS0FBS1IsVUFBTCxHQUFrQkUsTUFBTSxDQUFDSSxDQUFELENBQU4sQ0FBVUcsWUFBVixDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLElBQWhELENBQXFEWCxVQUF2RTtRQUNBO01BQ0g7SUFDSjs7SUFDRCxJQUFJWSxnQkFBZ0IsR0FBRyxLQUFLWixVQUFMLENBQWdCTyxNQUFoQixHQUF5QixLQUFLUCxVQUFMLENBQWdCTyxNQUF6QyxHQUFrRCxDQUF6RTs7SUFDQSxLQUFLLElBQUlELEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdNLGdCQUFwQixFQUFzQ04sRUFBQyxFQUF2QyxFQUEyQztNQUN2QyxJQUFNTyxNQUFNLEdBQUd0QixFQUFFLENBQUN1QixXQUFILENBQWUsS0FBS2pCLGFBQXBCLENBQWY7TUFDQWdCLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixLQUFLWCxJQUFyQjtNQUNBUyxNQUFNLENBQUNWLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJBLFFBQW5CLENBQTRCLENBQTVCLEVBQStCTSxZQUEvQixDQUE0QyxVQUE1QyxFQUF3RE8sTUFBeEQsR0FBaUUsS0FBS2hCLFVBQUwsQ0FBZ0JNLEVBQWhCLEVBQW1CVyxJQUFwRjtNQUNBSixNQUFNLENBQUNJLElBQVAsR0FBYyxLQUFLakIsVUFBTCxDQUFnQk0sRUFBaEIsRUFBbUJXLElBQWpDO0lBQ0g7RUFDSjtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGluZU1hbmdlcjogY2MuTm9kZSxcbiAgICAgICAgYW5pbWF0aW9uSXRlbTogY2MuUHJlZmFiLFxuICAgIH0sXG5cbiAgICBjdG9yKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgc3BpbmVzID0gdGhpcy5zcGluZU1hbmdlci5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3BpbmVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IHNwaW5lc1tpXS5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKS5fc2tlbGV0b24uZGF0YS5hbmltYXRpb25zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBhbmltYXRpb25zTGVuZ3RoID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aCA/IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggOiAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuaW1hdGlvbnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmltYXRpb25JdGVtKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBidXR0b24uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiY2MuTGFiZWxcIikuc3RyaW5nID0gdGhpcy5hbmltYXRpb25zW2ldLm5hbWU7XG4gICAgICAgICAgICBidXR0b24ubmFtZSA9IHRoaXMuYW5pbWF0aW9uc1tpXS5uYW1lO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/CharLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa3b6gN//NO/aYhKL6zXu+3', 'CharLayer');
// Script/MonsterFight/CharLayer.js

"use strict";

mEmitter = require("mEmitter");

var _require = require("./Constants"),
    CharacterEventType = _require.CharacterEventType;

cc.Class({
  "extends": cc.Component,
  properties: {
    Char: cc.Node
  },
  onLoad: function onLoad() {
    new mEmitter();
    mEmitter.instance.registerEvent(CharacterEventType.MOVE, this.onPressMove.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.STOP, this.onPressStop.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.SHOOT, this.onPressShoot.bind(this), this);
    mEmitter.instance.registerEvent(CharacterEventType.RELOAD, this.onReloadDone.bind(this), this);
  },
  onPressMove: function onPressMove(direction) {
    this.Char.onPressMove(direction);
  },
  onPressStop: function onPressStop(direction) {
    this.Char.onPressStop(direction);
  },
  onPressShoot: function onPressShoot() {
    this.Char.onShoot();
  },
  onReloadDone: function onReloadDone() {
    this.Char.onReloadDone();
  },
  onDestroy: function onDestroy() {
    mEmitter.instance.removeAllEvent(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0NoYXJMYXllci5qcyJdLCJuYW1lcyI6WyJtRW1pdHRlciIsInJlcXVpcmUiLCJDaGFyYWN0ZXJFdmVudFR5cGUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkNoYXIiLCJOb2RlIiwib25Mb2FkIiwiaW5zdGFuY2UiLCJyZWdpc3RlckV2ZW50IiwiTU9WRSIsIm9uUHJlc3NNb3ZlIiwiYmluZCIsIlNUT1AiLCJvblByZXNzU3RvcCIsIlNIT09UIiwib25QcmVzc1Nob290IiwiUkVMT0FEIiwib25SZWxvYWREb25lIiwiZGlyZWN0aW9uIiwib25TaG9vdCIsIm9uRGVzdHJveSIsInJlbW92ZUFsbEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQWxCOztBQUNBLGVBQStCQSxPQUFPLENBQUMsYUFBRCxDQUF0QztBQUFBLElBQVFDLGtCQUFSLFlBQVFBLGtCQUFSOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFSixFQUFFLENBQUNLO0VBREQsQ0FIUDtFQU9MQyxNQVBLLG9CQU9JO0lBQ0wsSUFBSVQsUUFBSjtJQUNBQSxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDVCxrQkFBa0IsQ0FBQ1UsSUFBbkQsRUFBeUQsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBekQsRUFBc0YsSUFBdEY7SUFDQWQsUUFBUSxDQUFDVSxRQUFULENBQWtCQyxhQUFsQixDQUFnQ1Qsa0JBQWtCLENBQUNhLElBQW5ELEVBQXlELEtBQUtDLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQXpELEVBQXNGLElBQXRGO0lBQ0FkLFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkMsYUFBbEIsQ0FBZ0NULGtCQUFrQixDQUFDZSxLQUFuRCxFQUEwRCxLQUFLQyxZQUFMLENBQWtCSixJQUFsQixDQUF1QixJQUF2QixDQUExRCxFQUF3RixJQUF4RjtJQUNBZCxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLGFBQWxCLENBQWdDVCxrQkFBa0IsQ0FBQ2lCLE1BQW5ELEVBQTJELEtBQUtDLFlBQUwsQ0FBa0JOLElBQWxCLENBQXVCLElBQXZCLENBQTNELEVBQXlGLElBQXpGO0VBQ0gsQ0FiSTtFQWVMRCxXQWZLLHVCQWVPUSxTQWZQLEVBZWtCO0lBQ25CLEtBQUtkLElBQUwsQ0FBVU0sV0FBVixDQUFzQlEsU0FBdEI7RUFDSCxDQWpCSTtFQW1CTEwsV0FuQkssdUJBbUJPSyxTQW5CUCxFQW1Ca0I7SUFDbkIsS0FBS2QsSUFBTCxDQUFVUyxXQUFWLENBQXNCSyxTQUF0QjtFQUNILENBckJJO0VBdUJMSCxZQXZCSywwQkF1QlU7SUFDWCxLQUFLWCxJQUFMLENBQVVlLE9BQVY7RUFDSCxDQXpCSTtFQTJCTEYsWUEzQkssMEJBMkJVO0lBQ1gsS0FBS2IsSUFBTCxDQUFVYSxZQUFWO0VBQ0gsQ0E3Qkk7RUErQkxHLFNBL0JLLHVCQStCTztJQUNSdkIsUUFBUSxDQUFDVSxRQUFULENBQWtCYyxjQUFsQixDQUFpQyxJQUFqQztFQUNIO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1FbWl0dGVyID0gcmVxdWlyZShcIm1FbWl0dGVyXCIpO1xuY29uc3QgeyBDaGFyYWN0ZXJFdmVudFR5cGUgfSA9IHJlcXVpcmUoXCIuL0NvbnN0YW50c1wiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIENoYXI6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbmV3IG1FbWl0dGVyKCk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLk1PVkUsIHRoaXMub25QcmVzc01vdmUuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLlNUT1AsIHRoaXMub25QcmVzc1N0b3AuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlZ2lzdGVyRXZlbnQoQ2hhcmFjdGVyRXZlbnRUeXBlLlNIT09ULCB0aGlzLm9uUHJlc3NTaG9vdC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudChDaGFyYWN0ZXJFdmVudFR5cGUuUkVMT0FELCB0aGlzLm9uUmVsb2FkRG9uZS5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25QcmVzc01vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuQ2hhci5vblByZXNzTW92ZShkaXJlY3Rpb24pO1xuICAgIH0sXG5cbiAgICBvblByZXNzU3RvcChkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5DaGFyLm9uUHJlc3NTdG9wKGRpcmVjdGlvbik7XG4gICAgfSxcblxuICAgIG9uUHJlc3NTaG9vdCgpIHtcbiAgICAgICAgdGhpcy5DaGFyLm9uU2hvb3QoKTtcbiAgICB9LFxuXG4gICAgb25SZWxvYWREb25lKCkge1xuICAgICAgICB0aGlzLkNoYXIub25SZWxvYWREb25lKCk7XG4gICAgfSxcbiAgICBcbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLnJlbW92ZUFsbEV2ZW50KHRoaXMpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'Item');
// Script/SpineAnimation/Item.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onClick: function onClick() {
    Emitter.instance.emit('SET_ANIMATION', this.node.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25DbGljayIsIkVtaXR0ZXIiLCJpbnN0YW5jZSIsImVtaXQiLCJub2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsT0FISyxxQkFHTTtJQUNQQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLGVBQXRCLEVBQXVDLEtBQUtDLElBQUwsQ0FBVUMsSUFBakQ7RUFDSDtBQUxJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KCdTRVRfQU5JTUFUSU9OJywgdGhpcy5ub2RlLm5hbWUpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/WorldLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2524599u4pICYb5CMjgDAtu', 'WorldLayer');
// Script/MonsterFight/WorldLayer.js

"use strict";

var _require = require("./Constants"),
    MoveDirection = _require.MoveDirection,
    CharacterEventType = _require.CharacterEventType;

mEmitter = require("mEmitter");
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    new mEmitter();
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onPressKey, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onPressKey, this);
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
  },
  onPressKey: function onPressKey(event) {
    var moveType = event.type === cc.SystemEvent.EventType.KEY_DOWN ? CharacterEventType.MOVE : CharacterEventType.STOP;
    var shootType = event.type === cc.SystemEvent.EventType.KEY_DOWN ? CharacterEventType.SHOOT : CharacterEventType.RELOAD;

    switch (event.keyCode) {
      case cc.macro.KEY.a:
        mEmitter.instance.emit(moveType, MoveDirection.LEFT);
        break;

      case cc.macro.KEY.d:
        mEmitter.instance.emit(moveType, MoveDirection.RIGHT);
        break;

      case cc.macro.KEY.w:
        mEmitter.instance.emit(moveType, MoveDirection.UP);
        break;

      case cc.macro.KEY.s:
        mEmitter.instance.emit(moveType, MoveDirection.DOWN);
        break;

      case cc.macro.KEY.space:
        mEmitter.instance.emit(shootType);
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L1dvcmxkTGF5ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk1vdmVEaXJlY3Rpb24iLCJDaGFyYWN0ZXJFdmVudFR5cGUiLCJtRW1pdHRlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvblByZXNzS2V5IiwiS0VZX1VQIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3IiwiZXZlbnQiLCJtb3ZlVHlwZSIsInR5cGUiLCJNT1ZFIiwiU1RPUCIsInNob290VHlwZSIsIlNIT09UIiwiUkVMT0FEIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImluc3RhbmNlIiwiZW1pdCIsIkxFRlQiLCJkIiwiUklHSFQiLCJ3IiwiVVAiLCJzIiwiRE9XTiIsInNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQThDQSxPQUFPLENBQUMsYUFBRCxDQUFyRDtBQUFBLElBQVFDLGFBQVIsWUFBUUEsYUFBUjtBQUFBLElBQXVCQyxrQkFBdkIsWUFBdUJBLGtCQUF2Qjs7QUFDQUMsUUFBUSxHQUFHSCxPQUFPLENBQUMsVUFBRCxDQUFsQjtBQUNBSSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MQyxNQVBLLG9CQU9JO0lBQ0wsSUFBSUwsUUFBSjtJQUNBQyxFQUFFLENBQUNLLFdBQUgsQ0FBZUMsRUFBZixDQUFrQk4sRUFBRSxDQUFDTyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFVBQTFELEVBQXNFLElBQXRFO0lBQ0FWLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlQyxFQUFmLENBQWtCTixFQUFFLENBQUNPLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkcsTUFBM0MsRUFBbUQsS0FBS0QsVUFBeEQsRUFBb0UsSUFBcEU7SUFDQSxJQUFJRSxPQUFPLEdBQUdaLEVBQUUsQ0FBQ2EsUUFBSCxDQUFZQyxtQkFBWixFQUFkO0lBQ0FGLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQjtJQUNBSCxPQUFPLENBQUNJLGdCQUFSLEdBQTJCLElBQTNCO0VBQ0gsQ0FkSTtFQWdCTE4sVUFoQkssc0JBZ0JNTyxLQWhCTixFQWdCYTtJQUNkLElBQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxJQUFOLEtBQWVuQixFQUFFLENBQUNPLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBeEMsR0FBa0RYLGtCQUFrQixDQUFDc0IsSUFBckUsR0FBNEV0QixrQkFBa0IsQ0FBQ3VCLElBQWhIO0lBQ0EsSUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNFLElBQU4sS0FBZW5CLEVBQUUsQ0FBQ08sV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUF4QyxHQUFtRFgsa0JBQWtCLENBQUN5QixLQUF0RSxHQUE4RXpCLGtCQUFrQixDQUFDMEIsTUFBbkg7O0lBQ0EsUUFBUVAsS0FBSyxDQUFDUSxPQUFkO01BQ0ksS0FBS3pCLEVBQUUsQ0FBQzBCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtRQUNJN0IsUUFBUSxDQUFDOEIsUUFBVCxDQUFrQkMsSUFBbEIsQ0FBdUJaLFFBQXZCLEVBQWlDckIsYUFBYSxDQUFDa0MsSUFBL0M7UUFDQTs7TUFDSixLQUFLL0IsRUFBRSxDQUFDMEIsS0FBSCxDQUFTQyxHQUFULENBQWFLLENBQWxCO1FBQ0lqQyxRQUFRLENBQUM4QixRQUFULENBQWtCQyxJQUFsQixDQUF1QlosUUFBdkIsRUFBaUNyQixhQUFhLENBQUNvQyxLQUEvQztRQUNBOztNQUNKLEtBQUtqQyxFQUFFLENBQUMwQixLQUFILENBQVNDLEdBQVQsQ0FBYU8sQ0FBbEI7UUFDSW5DLFFBQVEsQ0FBQzhCLFFBQVQsQ0FBa0JDLElBQWxCLENBQXVCWixRQUF2QixFQUFpQ3JCLGFBQWEsQ0FBQ3NDLEVBQS9DO1FBQ0E7O01BQ0osS0FBS25DLEVBQUUsQ0FBQzBCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhUyxDQUFsQjtRQUNJckMsUUFBUSxDQUFDOEIsUUFBVCxDQUFrQkMsSUFBbEIsQ0FBdUJaLFFBQXZCLEVBQWlDckIsYUFBYSxDQUFDd0MsSUFBL0M7UUFDQTs7TUFDSixLQUFLckMsRUFBRSxDQUFDMEIsS0FBSCxDQUFTQyxHQUFULENBQWFXLEtBQWxCO1FBQ0l2QyxRQUFRLENBQUM4QixRQUFULENBQWtCQyxJQUFsQixDQUF1QlIsU0FBdkI7UUFDQTtJQWZSO0VBaUJIO0FBcENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgTW92ZURpcmVjdGlvbiwgQ2hhcmFjdGVyRXZlbnRUeXBlIH0gPSByZXF1aXJlKFwiLi9Db25zdGFudHNcIik7XG5tRW1pdHRlciA9IHJlcXVpcmUoXCJtRW1pdHRlclwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBuZXcgbUVtaXR0ZXIoKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uUHJlc3NLZXksIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uUHJlc3NLZXksIHRoaXMpO1xuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25QcmVzc0tleShldmVudCkge1xuICAgICAgICBjb25zdCBtb3ZlVHlwZSA9IGV2ZW50LnR5cGUgPT09IGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTj8gQ2hhcmFjdGVyRXZlbnRUeXBlLk1PVkUgOiBDaGFyYWN0ZXJFdmVudFR5cGUuU1RPUDtcbiAgICAgICAgY29uc3Qgc2hvb3RUeXBlID0gZXZlbnQudHlwZSA9PT0gY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOID8gQ2hhcmFjdGVyRXZlbnRUeXBlLlNIT09UIDogQ2hhcmFjdGVyRXZlbnRUeXBlLlJFTE9BRDtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLmVtaXQobW92ZVR5cGUsIE1vdmVEaXJlY3Rpb24uTEVGVCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLmVtaXQobW92ZVR5cGUsIE1vdmVEaXJlY3Rpb24uUklHSFQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICBtRW1pdHRlci5pbnN0YW5jZS5lbWl0KG1vdmVUeXBlLCBNb3ZlRGlyZWN0aW9uLlVQKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgbUVtaXR0ZXIuaW5zdGFuY2UuZW1pdChtb3ZlVHlwZSwgTW92ZURpcmVjdGlvbi5ET1dOKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxuICAgICAgICAgICAgICAgIG1FbWl0dGVyLmluc3RhbmNlLmVtaXQoc2hvb3RUeXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MonsterFight/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a41c5lbz9dFCajsrDPSH43O', 'Constants');
// Script/MonsterFight/Constants.js

"use strict";

exports.__esModule = true;
exports.MoveDirection = exports.MonsterEventType = exports.CharacterEventType = void 0;
var MoveDirection = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
};
exports.MoveDirection = MoveDirection;
var CharacterEventType = {
  MOVE: 'MOVE',
  STOP: 'STOP',
  SHOOT: 'SHOOT',
  RELOAD: 'RELOAD'
};
exports.CharacterEventType = CharacterEventType;
var MonsterEventType = {
  HIT: 'HIT',
  DEATH: 'DEATH'
};
exports.MonsterEventType = MonsterEventType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9uc3RlckZpZ2h0L0NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJNb3ZlRGlyZWN0aW9uIiwiVVAiLCJET1dOIiwiTEVGVCIsIlJJR0hUIiwiQ2hhcmFjdGVyRXZlbnRUeXBlIiwiTU9WRSIsIlNUT1AiLCJTSE9PVCIsIlJFTE9BRCIsIk1vbnN0ZXJFdmVudFR5cGUiLCJISVQiLCJERUFUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGFBQWEsR0FBRztFQUN6QkMsRUFBRSxFQUFFLENBRHFCO0VBRXpCQyxJQUFJLEVBQUUsQ0FGbUI7RUFHekJDLElBQUksRUFBRSxDQUhtQjtFQUl6QkMsS0FBSyxFQUFFO0FBSmtCLENBQXRCOztBQU9BLElBQU1DLGtCQUFrQixHQUFHO0VBQzlCQyxJQUFJLEVBQUUsTUFEd0I7RUFFOUJDLElBQUksRUFBRSxNQUZ3QjtFQUc5QkMsS0FBSyxFQUFFLE9BSHVCO0VBSTlCQyxNQUFNLEVBQUU7QUFKc0IsQ0FBM0I7O0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUc7RUFDNUJDLEdBQUcsRUFBRSxLQUR1QjtFQUU1QkMsS0FBSyxFQUFFO0FBRnFCLENBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTW92ZURpcmVjdGlvbiA9IHtcbiAgICBVUDogMCxcbiAgICBET1dOOiAxLFxuICAgIExFRlQ6IDIsXG4gICAgUklHSFQ6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBDaGFyYWN0ZXJFdmVudFR5cGUgPSB7XG4gICAgTU9WRTogJ01PVkUnLFxuICAgIFNUT1A6ICdTVE9QJyxcbiAgICBTSE9PVDogJ1NIT09UJyxcbiAgICBSRUxPQUQ6ICdSRUxPQUQnLFxufVxuXG5leHBvcnQgY29uc3QgTW9uc3RlckV2ZW50VHlwZSA9IHtcbiAgICBISVQ6ICdISVQnLFxuICAgIERFQVRIOiAnREVBVEgnXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
