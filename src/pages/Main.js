import { Lightning, Utils } from 'wpe-lightning-sdk';
import { List } from "../components"

export default class Main extends Lightning.Component {
    static _template() {
        return {
            Logo: {
                src: Utils.asset("images/logo.png"),
                x: 50,
                y: 80,
            },
            ScaleBeforePos: {
                scale: 0.5,
                Lists: {
                    x: 100, y: 560, zIndex: 3
                },
            },
        };
    }

    _init() {
        this._index = 0;
    }

    _focus() {

    }

    set movies(__data) {
        let list = new List(this.stage);
        list.movies = __data.results;
        this.tag('Lists').childList.add(list)
    }

    _unfocus() {
        // @todo
    }

    _getFocused() {
        // @todo: delegate focus to List child
    }

}