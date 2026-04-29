export const MoveDirection = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
}

export const CharacterEventType = {
    MOVE: 'MOVE',
    STOP: 'STOP',
    SHOOT: 'SHOOT',
    RELOAD: 'RELOAD',
}

export const animations = {
    walk: "walk",
    idle: "idle",
    run: "run",
    shoot: "shoot",
    portal: "portal",
}

export const GameStateType = {
    TOGGLEPAUSE: "TOGGLEPAUSE",
    UNPAUSE: "UNPAUSE"
}

export const ScreenName = {
    ROOT: 'ROOT',
    LOADING: 'loading',
    LOBBY: 'lobby',
    MAIN: 'mainGame',
    TITLE: 'titleScreen'
}

export const GameCommand = {
    START: 'START',
    END: 'END',
    RESTART: 'RESTART',
}
