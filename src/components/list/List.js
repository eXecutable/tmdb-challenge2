import { Lightning } from "wpe-lightning-sdk";
import Item from '../item/Item';

const _itemSpace = 200;
export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: { text: '', fontFace: 'Magra' }
            },
            Movies: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _handleLeft() {
        if (this._index <= 0) return
        this.setIndex(--this._index)
    }

    _handleRight() {
        if (this._index >= this.movieData.length - 1) return
        this.setIndex(++this._index)
    }

    setIndex(index) {
        this.tag('Movies').patch({
            x: index * -_itemSpace
        })
        this._index = index;
    }

    $changeLabel(__itemData) {
        this.label = __itemData.title;
    }

    set label(__title) {
        this.patch({
            Label: { text: { text: __title } }
        })
    }

    set movies(__data) {
        this.movieData = __data;
        // we add an array of object with type: Item
        this.tag("Movies").children = this.movieData.map((el, idx) => {
            return {
                type: Item,
                item: el,
                x: idx * _itemSpace
            };
        });
    }

    get items() {
        return this.tag("Movies").children;
    }

    get activeItem() {
        return this.tag("Movies").children[this._index]
    }

    _getFocused() {
        return this.activeItem
    }
}
