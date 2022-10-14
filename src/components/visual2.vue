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

            <div class="row flex-column flex-md-row">
                <div class="col-md-4 d-flex flex-column justify-content-center ">
                    <div class="text">
                        <h2 class="fs-1">{{ element.mainTitle }}</h2>
                        <p>{{ element.subtitle }}</p>
                    </div>
                </div>
                <div class="col-md-8 flex-grow-1">
                    <div class="video ps-5 pe-5">
                        <video
                            :src="`images/01mainSlide_video/${element.mVideo}`"
                        >
                        </video>
                    </div>
                </div>
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

        .row {
            height: 100%;
        }

        .video {
            height: 100%;
            display: flex;
            justify-content: center;

            video {
                max-width: 100%;
                height: auto;
            }
        }

        .text {
            // white-space: nowrap;

            h2 {
                font-family: 'NanumSquareNeoLight';
            }
            p {
                font-family: 'NanumSquareNeoBold';
            }
        }
    }

    @media screen and (min-width: 768px) {
        .visuals .swiper-slide {
            height: 100vh;

            .text {
                padding-left: 5rem;
            }
        }
    }
</style>