import Swiper, {SwiperOptions} from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, {Pagination} from 'swiper/core';

import {utils} from '~/scripts/utils';

SwiperCore.use([Pagination]);

const MOBILE_MEDIA_RANGE_VALUE = 639;

export class Slider {
    private swiper: Swiper = null;
    private readonly swiperCommonOptions: SwiperOptions = {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        height: 200,
        // width: 200,
        spaceBetween: 120,
        centeredSlides: true,
        updateOnWindowResize: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    };

    constructor() {
        window.addEventListener(
            'resize',
            utils.debounce(() => {
                const newWidth = window.innerWidth;

                console.log(`DEBUG >> newWidth:`, newWidth);

                this.initSlider(newWidth);
            }, 500)
        );
    }

    public initSlider(width: number = null)/*: Promise<void>*/ {
        // return new Promise<void>((resolve, reject) => {
        if (this.swiper) {
            this.swiper.destroy();
        }

        width = width ?? window.innerWidth;

        if (width < MOBILE_MEDIA_RANGE_VALUE) {
            this.createSlider(1);
        } else {
            this.createSlider(2);
        }

        // resolve();
        // });
    }

    private createSlider(slidesPerView: number = 2)/*: Promise<void>*/ {
        try {
            console.log(`DEBUG >> optins`, {
                ...this.swiperCommonOptions,
                slidesPerView
            });

            this.swiper = new Swiper('.swiper-container', {
                ...this.swiperCommonOptions,
                slidesPerView
            });
        } catch (err) {
            console.error(`Slider creating error: `, err);
        }
    }
}
