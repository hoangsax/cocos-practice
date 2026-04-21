
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