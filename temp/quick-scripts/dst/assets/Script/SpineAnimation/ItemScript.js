
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpineAnimation/ItemScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e712emfzKlLOrZGoMKYTXFw', 'ItemScript');
// Script/SpineAnimation/ItemScript.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpbmVBbmltYXRpb24vSXRlbVNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25DbGljayIsIkVtaXR0ZXIiLCJpbnN0YW5jZSIsImVtaXQiLCJub2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsT0FISyxxQkFHTTtJQUNQQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLGVBQXRCLEVBQXVDLEtBQUtDLElBQUwsQ0FBVUMsSUFBakQ7RUFDSDtBQUxJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KCdTRVRfQU5JTUFUSU9OJywgdGhpcy5ub2RlLm5hbWUpO1xuICAgIH0sXG59KTtcbiJdfQ==