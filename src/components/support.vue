<template>
<div class="container py-5">
    <div class="row flex-column flex-md-row">
        <div class="col col-md-4">
            <div class="text">
                <h5>국내외 여러기업이 동참하고 있습니다.</h5>
                <h3>JA Korea 후원</h3>
            </div>
            <a href="">자세히 보기 →</a>
        </div>
        <div class="col col-md-8">
            <swiper
                :effect="'fade'"
                :fadeEffect="{crossFade: true,}"
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
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-fade";
import { EffectFade } from 'swiper';

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
            modulesSup: [EffectFade, ],
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
                        break;
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
// :root {
//     $enable-grid-classes: false;
//     $enable-cssgrid: true;
// }

.row {margin-top: 0; margin-left: 0; margin-right: 0;} // 어째서인지는 모르겠으나, margin 이 swiper 의 fade-opacity 에 영향을 주고 있다..

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
</style>