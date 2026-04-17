"use strict";
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