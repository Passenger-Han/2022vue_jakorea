<template>
<div class="container py-5">
    <div class="row flex-column flex-md-row">
        

        <div class="col col-md-4 text mb-5">
            <div>
                <h5>국내외 여러기업이 동참하고 있습니다.</h5>
                <h3 class="mb-3">JA Korea 후원</h3>
            </div>
            <a href="#!">자세히 보기 →</a>
        </div>
        <div class="col col-md-8">
            <swiper
                :effect="'fade'"
                :fadeEffect="{crossFade: true,}"
                :navigation="{
                    'prevEl': '.swiper-button-prev.sup',
                    'nextEl': '.swiper-button-next.sup',
                }"
                :modules="modulesSup"
            >
                <swiper-slide v-for="(element, index) in iconArray" :key="index">
                    <div class="row">
                        <div class="col-4" v-for="(subelement, subindex) in element" :key="subindex">
                            <div class="image">
                                <img :src="`images/09support/${subelement.src}`" :alt="subelement.title">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    
    <div class="navigation-wrapper d-none d-md-flex">
        <div class="swiper-button-prev sup"></div>
        <div class="swiper-button-next sup"></div>
    </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'supports',
    ],

    data(){
        return {
            iconArray: [],
        };
    },

    setup(){
        return {
            modulesSup: [ Navigation, EffectFade, ],
        };
    },

    methods: {
        sorter(){
            for (let i = 0; i < Math.ceil(this.supports.length / 9); i++){
                let tempArray = [];

                for (let j = 0; j <= 8; j++){
                    if (this.supports[(9 * i) + j] != undefined){
                        tempArray.push(this.supports[(9 * i) + j]);
                    } else {
                        this.iconArray.push(tempArray);
                        break; // 마지막 묶음(array)이 9개로 떨어지지 않을 경우를 상정하고 쓰는 코드 뭉치
                    };
                    if (j == 8){
                        this.iconArray.push(tempArray);
                    };
                };
            };
        },
    },

    mounted(){
        this.sorter();
        console.log(this.iconArray);
    }
}
</script>

<style scoped lang="scss">
.row {margin-top: 0; margin-left: 0; margin-right: 0;} // 어째서인지는 모르겠으나, margin 이 swiper 의 fade-opacity 에 영향을 주고 있다..

.text {
    h5 {font-size: 1rem; font-weight: 600;}
    h3 {font-family: 'NanumSquareNeoHeavy'; font-size: 2.5rem;}
    a {
        display: inline-block;
        padding: 16px 24px;
        background: #FFF;
        box-shadow: 0 0 16px #00000023;
        border-radius: 32px;
    }
}

.swiper {
    .swiper-slide {
        background: #FFFFFF;
    }

    .row {
        .col-4 {
            height: 152px;
            padding: 0.375rem;

            .image {
                // img wrapper
                width: 100%;
                height: 100%;
                background: rgb(243, 246, 247);
                border-radius: 1rem;

                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;

            }

            img {
                width: 80%;
                max-width: 136px;
                height: auto;
            }
        }
    }
}

.navigation-wrapper {
    --swiper-navigation-size: 20px;

    position: relative;
    display: flex;
    gap: 3rem;
    bottom: 18px;

    .swiper-button-prev, .swiper-button-next {
        position: initial;
        left: initial;
        right: initial;

        filter: grayscale(1);
        transition: 1.5s;
    }

    .swiper-button-prev:hover {transform: translateX(25%);}
    .swiper-button-next:hover {transform: translateX(-25%);}
}
</style>