<template>
<div class="container py-5">
    <swiper
        :slides-per-view="3"
    >
        <template v-slot:container-start>
            <div class="wrapper d-flex mb-5">
                <h2>JA 기관소식</h2>
                <ul class="menu d-flex align-items-end">
                    <li @click="categoryIndex = 0">공지사항<span :class="[categoryIndex == 0? 'active' : '']"></span></li>
                    <li @click="categoryIndex = 1">스토리<span :class="[categoryIndex == 1? 'active' : '']"></span></li>
                    <li @click="categoryIndex = 2">언론보도<span :class="[categoryIndex == 2? 'active' : '']"></span></li>
                </ul>
            </div>
        </template>
        <swiper-slide v-for="(element, index) in dataObject[categoryIndex]" :key="index" class="p-3">
            <div class="titles">
                <h4 class="mb-3">{{ element.name }}</h4>
                <h5>{{ element.title }}</h5>
            </div>
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
            categoryIndex: 0,
        }
    }
}
</script>

<style scoped lang="scss">
* {margin: 0; padding: 0; box-sizing: border-box;}
ul, ol, li {list-style: none;}

.container {
    height: 500px;
}

.wrapper {
    gap: 2rem;

    h2 {
        font-family: 'NanumSquareNeoExtraBold';
        font-size: 3rem;
    }

    .menu {
        gap: 2rem;
        font-weight: bold;

        li {
            &:hover span {
                background: #777;
            }

            span {
                display: block;
                width: 100%;
                height: 3px;
                transform: translateY(100%);
    
                &.active{
                    background: #000;
                }
            }
        }
    }
}

.swiper {
    .swiper-slide {
        height: 300px;
        background: beige;

        .titles {
            h4 {
                line-height: 1;
                display: inline-block;
                font-size: 0.875rem;
                color: #FFF;
                padding: 0.5rem 0.75rem;
                background: #000;
                border-radius: 20px;
            }

            h5 {
                font-weight: bold;
                line-height: 1.6;
            }
        }
    }
}
</style>