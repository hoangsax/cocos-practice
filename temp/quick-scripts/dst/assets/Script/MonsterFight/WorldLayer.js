
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