const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    onLoad () {
    },
    start() {
    },
    onHello() {
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome() {
        Emitter.instance.emit('WELCOME', "Welcomeeeee");
    },
});