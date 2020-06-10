import { Lightning, Utils } from "wpe-lightning-sdk";
import { getImgUrl } from '../../lib/tools';

export default class Level extends Lightning.Component {
    static _template() {
        return {
            alpha: 0.5,
            Image: {

            },
            Title: {
                y: 310, x: 20,
                text: { fontFace: "Magra", fontSize: 24, wordWrapWidth: 200 }
            }
        }
    }

    _focus() {
        this.patch({
            alpha: 1
        })
    }

    _unfocus() {
        this.patch({
            alpha: 0.5
        })
    }

    set item(v) {
        //v
        // adult: false
        // backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
        // genre_ids: (2) [18, 878]
        // id: 419704
        // original_language: "en"
        // original_title: "Ad Astra"
        // overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown."
        // popularity: 407.572
        // poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
        // release_date: "2019-09-17"
        // title: "Ad Astra"
        // video: false
        // vote_average: 6
        // vote_count: 3655

        this.patch({
            Title: {
                text: {
                    text: v.title,
                },
            },
            Image: {
                src: getImgUrl(v.poster_path),
            },
        });
    }
}