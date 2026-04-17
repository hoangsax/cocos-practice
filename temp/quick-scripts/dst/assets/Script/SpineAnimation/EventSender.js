
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/EventSender.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRXZlbnRTZW5kZXIuanMiXSwibmFtZXMiOlsiRW1pdHRlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwic3RhcnQiLCJvbkhlbGxvIiwiaW5zdGFuY2UiLCJlbWl0Iiwib25XZWxjb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLE1BRkssb0JBRUssQ0FDVCxDQUhJO0VBSUxDLEtBSkssbUJBSUcsQ0FDUCxDQUxJO0VBTUxDLE9BTksscUJBTUs7SUFDTlAsT0FBTyxDQUFDUSxRQUFSLENBQWlCQyxJQUFqQixDQUFzQixPQUF0QixFQUErQixhQUEvQjtFQUNILENBUkk7RUFTTEMsU0FUSyx1QkFTTztJQUNSVixPQUFPLENBQUNRLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLFNBQXRCLEVBQWlDLGFBQWpDO0VBQ0g7QUFYSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbWl0dGVyID0gcmVxdWlyZSgnbUVtaXR0ZXInKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgb25Mb2FkICgpIHtcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG4gICAgb25IZWxsbygpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KCdIRUxMTycsIFwiaGVsbG9vb29vb29cIik7XG4gICAgfSxcbiAgICBvbldlbGNvbWUoKSB7XG4gICAgICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdCgnV0VMQ09NRScsIFwiV2VsY29tZWVlZWVcIik7XG4gICAgfSxcbn0pOyJdfQ==