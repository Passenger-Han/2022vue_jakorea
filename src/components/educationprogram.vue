<template>
    <div class="container py-5 educations">

        <swiper
            :effect="'fade'"
            :fadeEffect="{crossFade: true,}"
            :modules="modulesEdu"
            navigation
            @swiper="onSwiper"
        >
            <template v-for="(element, index) in educationprograms" :key="index">
                <swiper-slide class="padding-big">
                    <div class="swiper-content p-3" :style="{'background-image': `url(images/03eduProgram/${element.src})`}">
                        <div class="text mb-5">
                            <h4 v-html="element.title" class="fw-bold mb-4"></h4>
                            <p v-html="element.subtitle"></p>
                        </div>
                        <a :href="element.href" class="detail">자세히 보기 →</a>
                    </div>
                </swiper-slide>
            </template>

            <template v-slot:container-start>
                <div class="educategory d-flex flex-column flex-md-row align-items-md-baseline">
                    <h3 class="mb-3">JA 교육 프로그램</h3>
                    <ul class="d-flex justify-content-evenly justify-content-md-start mb-5">
                        
                        <template v-for="(element, index) in educationprograms" :key="index">
                            <li @click="swiperEdu.slideTo(index)">
                                {{ element.name }}
                            </li>
                        </template>

                    </ul>
                </div>
            </template>
        </swiper>

    </div>
</template>

<script>
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'educationprograms',
    ],

    data(){
        return {
            swiperEdu: null, // swiper 인스턴스를 인수할 데이터
        };
    },

    setup(){
        return {
            // modulesEdu: [EffectFade,],
            modulesEdu: [EffectFade, Navigation,],
        };
    },

    methods: {
        onSwiper(swiper){
            // console.log(swiper);
            this.swiperEdu = swiper; // 어느 hook 에서 어떤 일이 일어나는 지 모르겠다. 감도 안온다. 확실한 건 'swiper 이벤트에서 swiper 인스턴스를 반환' 하니 '여기서 받아야 한다' 는건데.. 이건 module 을 직접 열어서 봐야하나..?
        }
    },
}
</script>

<style lang="scss">
    .educations {

        .swiper {
            h3 {
                font-weight: 900;
            }

            .educategory {
                gap: 0 3rem;

                ul, li {
                    margin: 0;
                    padding: 0;
                }

                h3 {text-align: center; font-family: 'NanumSquareNeoHeavy';}

                ul {
                    // gap: 0 1.5rem;

                    @media screen and (max-width: 767px) {
                        gap: 0;
                    }

                    li {
                        font-size: 0.875rem;
                        font-weight: bold;
                        color: #00000099;
                        padding: 0.25rem 0.875rem;
                        cursor: pointer;
                        user-select: none;

                        &:hover {
                            color: #FFFFFF;
                            background-color: #000000;
                            border-radius: 1.5rem;
                        }
                    }
                }
            }

            .swiper-slide {
                &.padding-big{
                    padding: 0 6rem;
                    @media screen and (max-width: 767px) {
                        padding: 0 16px;
                    }
                }

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

            .swiper-button-prev, .swiper-button-next {
                filter: grayscale(1);
                transition: 1.5s;
            }

            .swiper-button-prev {
                &:hover {
                    transform: translateX(25%);
                }
            }
            .swiper-button-next {
                &:hover {
                    transform: translateX(-25%);
                }
            }
        }

    }
</style>