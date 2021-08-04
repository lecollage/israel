import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Pagination } from 'swiper/core';

export class Slider {
    constructor() {
    }

    public initSlider(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                SwiperCore.use([Pagination]);

                new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 120,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                    },
                });
            } catch (err) {
                reject(err);
            }

            resolve();
        });
    }
}
