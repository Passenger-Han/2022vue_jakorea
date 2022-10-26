<template>
<div class="container py-5 newsline">

    <div class="wrapper d-flex flex-column flex-md-row mb-5">
        <h2>JA 기관소식</h2>
        <ul class="menu d-flex align-items-end">
            <li @click="categoryIndex = 0">공지사항<span :class="[categoryIndex == 0? 'active' : '']"></span></li>
            <li @click="categoryIndex = 1">스토리<span :class="[categoryIndex == 1? 'active' : '']"></span></li>
            <li @click="categoryIndex = 2">언론보도<span :class="[categoryIndex == 2? 'active' : '']"></span></li>
        </ul>
    </div>
    <swiper
        :slides-per-view="1"
        :breakpoints="{
            '768': {
                slidesPerView: 3,
                spaceBetween: 4,
            }
        }"
        :navigation="{
            'nextEl': '.swiper-button-next.ne',
            'prevEl': '.swiper-button-prev.ne',
        }"
        :modules="modulesNews"
    >
        <swiper-slide v-for="(element, index) in dataObject[categoryIndex]" :key="index" class="p-3">
            <div class="titles">
                <h4 class="mb-3">{{ element.name }}</h4>
                <h5>{{ element.title }}</h5>
            </div>
        </swiper-slide>
    </swiper>
    <div class="swiper-button-next ne d-none d-md-block"></div>
    <div class="swiper-button-prev ne d-none d-md-block"></div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';

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
    },

    setup(){
        return {
            modulesNews: [ Navigation, ],
        };
    },
}
</script>

<style lang="scss">
* {margin: 0; padding: 0; box-sizing: border-box;}
ul, ol, li {list-style: none;}

.newsline {
    &.container {
        height: 500px;
        position: relative;

        .swiper-button-next, .swiper-button-prev {
            top: calc(50% + 3rem);
            filter: grayscale(1);
            transition: 1.5s;
        }

        .swiper-button-prev {
            left: 64px;

            &:hover {
                transform: translateX(25%);
            }
        }

        .swiper-button-next {
            right: 64px;
            
            &:hover {
                transform: translateX(-25%);
            }
        }
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
        max-width: 990px;
        padding: 0 0.5rem;
        // border-left: 2px solid #00000033;
        // border-right: 2px solid #00000033;

        @media screen and (max-width: 991px) {
            max-width: 766px;
        }

        @media screen and (max-width: 767px) {
            width: 100%;
        }

        .swiper-slide {
            height: 300px;
            border-radius: 2rem;
            border-left: 1px solid #00000025;
            border-right: 1px solid #00000025;
    
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
}
</style>