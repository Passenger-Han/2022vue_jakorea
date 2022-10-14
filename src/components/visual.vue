<template>
    <swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="true"
        class="visuals"
    >

        <swiper-slide
            v-for="(element, index) in visuals" :key="index"
        >

            <div class="texts">
                <h2 v-html="element.mainTitle"></h2>
                <p v-html="element.subtitle"></p>
                <a :href="element.href">자세히 보기 →</a>
            </div>
            <div class="videos">
                <video :src="`images/01mainSlide_video/${element.mVideo}`"></video>
            </div>


        </swiper-slide>

    </swiper>
</template>

<script>
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'visuals',
    ]
}
</script>

<style lang="scss">
    .visuals .swiper-slide{
        background-color: rgb(225, 239, 242);
        background-size: cover;
        background-position: center;
        height: auto;

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

            .videos {
                height: 100%;
                display: flex;
                align-items: center;
            }
        
            .texts {
                position: absolute;

                top: 40%; transform: translateY(-50%);
                left: 12%;
            }
        }

    }
</style>