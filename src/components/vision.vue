<template>
    <div class="vision container py-md-5">
        <ul class="row">
            <template v-for="(element, index) in visions" :key="index"> <!-- 생각해보니 이렇게 적어서야 element의 순서가 바뀌면 :key가 제 역할을 못하는 건 동일하지 않은가..? -->
                <template v-if="index != visions.length - 1">
                    <li class="col-md col-6 p-3">
                        <div class="image" :style="{'background-image': `url(images/02iconBanner/${element.src})`}">
                        </div>
                        <div class="text">
                            <h4 class="fw-bold">{{ element.title }}</h4>
                            <p class="mt-3">{{ element.subtitle }}</p>
                        </div>
                    </li>
                </template>
                <template v-else>
                    <li class="col-md col-6 p-3 d-none d-md-flex">
                        <div class="image" :style="{'background-image': `url(images/02iconBanner/${element.src})`}">
                        </div>
                        <div class="text">
                            <h4 class="fw-bold">{{ element.title }}</h4>
                            <p class="mt-3">{{ element.subtitle }}</p>
                        </div>
                    </li>
                </template>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'visions',
    ],
}
</script>

<style scoped lang="scss">
    h1, h2, h3, h4, h5, h6, p, ul, li {list-style: none; margin: 0; padding: 0;}

    .container {
        --bs-gutter-x: 0;
    }

    // ul {
    //     li {
    //         flex-basis: 20%;
    //         padding: 16px;
    //     }
    // }
    
    .image {
        width: 100%;
        padding-bottom: 100%;

        background-repeat: no-repeat;
        background-position: center;
    }

    .text {
        text-align: center;
    }

    .row {
        .col-6 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    // @media screen and (max-width: 768px) {
    //     .d-flex {
    //         flex-direction: column;

    //         li {
    //             display: flex;
    //             justify-content: space-between;
    //             align-items: center;
    //             background: lightgray;

    //             .text {
    //                 order: 1;

    //                 h4 {
    //                     margin-bottom: 0;
    //                     font-size: 1.125rem;
    //                 }

    //                 p {
    //                     display: none;
    //                 }
    //             }

    //             .image {
    //                 order: 2;
    //                 flex-basis: 20%;
    //                 padding-bottom: initial;
    //                 height: 72px;
    //             }
    //         }
    //     }
    // }
</style>