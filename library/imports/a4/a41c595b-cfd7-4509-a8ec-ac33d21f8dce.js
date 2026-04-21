"use strict";
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