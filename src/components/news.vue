<template>
<div class="container">
    <swiper
        :slides-per-view="3"
    >
        <template v-slot:container-start><span>메롱</span></template>
        <swiper-slide v-for="(element, index) in dataObject[0]" :key="index">
            {{ element.name }}
            <br>
            {{ element.title }}
        </swiper-slide>
    </swiper>
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
        'notices',
        'stories',
        'news',
    ],

    data(){
        return {
            dataObject: [
                this.notices,
                this.stories,
                this.news,
            ],
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    height: 500px;
}
</style>