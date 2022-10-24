<template>
    <div class="container educations">
        <h3>JA 교육 프로그램</h3>

        <swiper
            :effect="'fade'"
            :fadeEffect="{crossFade: true,}"
            :modules="modulesEdu"
        >
            <template v-for="(element, index) in educationprograms" :key="index">
                <swiper-slide>
                    <div class="swiper-content" :style="{'background-image': `url(images/03eduProgram/${element.src})`}">
                        <div class="text">
                            <h4 v-html="element.title" class="fw-bold"></h4>
                            <p v-html="element.subtitle"></p>
                        </div>
                        <a :href="element.href" class="detail">자세히 보기 →</a>
                    </div>
                </swiper-slide>
            </template>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import { EffectFade, Pagination } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'educationprograms',
    ],

    setup(){
        return {
            modulesEdu: [EffectFade,],
            // modules: [EffectFade, Pagination,],
        };
    },
}
</script>

<style lang="scss">
    .educations {
        > h3 {
            font-weight: 900;
        }
        
        .swiper {
            .swiper-slide {
                padding: 0 180px;

                .swiper-content {
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: right;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;

                    .detail {
                        padding: 16px 24px;
                        background: #FFF;
                        box-shadow: 0 0 16px #00000023;
                        border-radius: 32px;
                    }
                }
            }
        }
    }
</style>