<template>
    <swiper
        :effect="'fade'"
        :fadeEffect="{crossFade: true,}"
        :slides-per-view="1"
        :loop="true"
        :autoplay="true"
        :navigation="{
            'nextEl': '.swiper-button-next.vis',
            'prevEl': '.swiper-button-prev.vis',
        }"
        :pagination="{
            el: '.swiper-pagination',
            type: 'bullets',
        }"
        class="visuals"
        :modules="modulesVisual"
    >

        <template v-slot:container-end>
            <div class="container pagination-wrapper d-flex align-items-baseline">
                <div class="swiper-button-prev vis"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next vis"></div>
            </div>
        </template>

        <swiper-slide
            v-for="(element, index) in visuals" :key="index"
        >

            <div class="container">
                <div class="texts">
                    <h2 v-html="element.mainTitle"></h2>
                    <p v-html="element.subtitle"></p>
                    <a :href="element.href">자세히 보기 →</a>
                </div>
                <div class="videos">
                    <video :src="`images/01mainSlide_video/${element.mVideo}`"></video>
                </div>
            </div>


        </swiper-slide>

    </swiper>
</template>

<script>
// swiper
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "swiper/css/effect-fade";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'visuals',
    ],

    setup(){
        return {
            modulesVisual: [ Navigation, Pagination, EffectFade, ],
        };
    },
}
</script>

<style lang="scss">
    .visuals {
        --swiper-navigation-size: 20px;
        --swiper-pagination-bullet-size: 16px;

        .swiper-button-prev, .swiper-button-next, .swiper-pagination {position: initial;}
        .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet {filter: grayscale(1);}
        .swiper-pagination {width: initial;}


        .pagination-wrapper {
            gap: 8px;
            position: relative;
            bottom: 180px;
        }
    }

    .visuals .swiper-slide{
        background-color: rgb(225, 239, 242);
        background-size: cover;
        background-position: center;
        height: auto;
        padding: 16px;

        .videos {
            margin-left: auto;
            max-width: 968px;

            video {
                width: 100%;
                height: auto;
            }
        }

        .texts {
            margin-bottom: 4rem;

            h2 {
                font-size: 3.75rem;
                line-height: 1.4em;
            }
            p {
                font-size: 1.125rem;
                margin-bottom: 4rem;
            }
            a {
                padding: 1.25rem 3.5rem;
                background: #FFF;
                border-radius: 40px;
            }

            span {
                font-family: 'NanumSquareNeoExtraBold';
            }
        }
        

    }

    @media screen and (min-width: 768px) {
        .visuals .swiper-slide {
            height: 92vh;

            .container {
                height: 100%;
                position: relative;
            }

            .videos {
                height: 100%;
                display: flex;
                align-items: center;
                transform: translateX(200px);
            }
        
            .texts {
                position: absolute;
                z-index: 2;

                top: 50%; 
                transform: translateY(-50%);
                // left: calc( 50% - 616px );
            }
        }

    }
</style>