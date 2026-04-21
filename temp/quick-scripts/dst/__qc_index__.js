
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