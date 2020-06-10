import { Lightning, Utils } from 'wpe-lightning-sdk';
import { List } from "../components"

export default class Main extends Lightning.Component {
    static _template() {
        return {
            scale: 0.5,
            Lists: {
                x: 100, y: 560, zIndex: 3
            },
            ScaleBeforePos: {
                scale: 2,
                Logo: {
                    src: Utils.asset("images/logo.png"),
                    x: 50,
                    y: 80,
                }
            }
        };
    }

    _init() {
        this._index = 0;
    }

    _focus() {

    }

    /**
     * @todo: add set movies() that will be called by the data-provider
     * inside set movies create new List child and call it's movies setter
     * and hand over the movies
     */

    _unfocus() {
        // @todo
    }

    _getFocused() {
        // @todo: delegate focus to List child
    }

}