<template>
<div class="container py-5">
    <div class="row">
        <div class="col col-4">
            <div class="text">
                <h5>국내외 여러기업이 동참하고 있습니다.</h5>
                <h3>JA Korea 후원</h3>
            </div>
            <a href="">자세히 보기 →</a>
        </div>
        <div class="col col-8">
            <swiper>
                <swiper-slide class="grid">
                    <div class="g-col-4"></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'supports',
    ],

    methods: {
        sorter(){
            for (let i = 0; i < Math.ceil(this.supports / 9); i++){
                
            }
        }
    }
}
</script>

<style>

</style>