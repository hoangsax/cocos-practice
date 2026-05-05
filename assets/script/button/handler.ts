import { Button, Component } from "cc";

export const onButtonClick = (button: Button) => {
    const normalSprite = button.normalSprite;
    button.normalSprite = button.disabledSprite;
    button.disabledSprite = normalSprite;
}