"use strict";
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