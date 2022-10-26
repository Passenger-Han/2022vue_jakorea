<template>
<div class="background graph">
    <div class="container">
        <div class="row">
            <div class="col col-lg-4 d-none d-lg-flex image">
                <img src="images/99miscellaneous/graph-thumb.jpg" alt="">
            </div>
            <ul class="col col-lg-8 row text flex-md-column justify-content-md-center">
                <li v-for="(element, index) in miscellaneous.graph" :key="index" class="col-6 col-md-12 flex-column flex-md-row">
                    <div class="bars order-2 order-md-1">
                        <div class="bar d-none d-md-block"></div>
                        <p>{{ element.title }}: <span>{{ element.desc }}</span></p>
                    </div>
                    <h3 class="order-1 order-md-2">+{{ element.counts }}</h3>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'miscellaneous',
    ]
}
</script>

<style scoped lang="scss">
.graph {
    height: 470px;
    background: linear-gradient(to left, #13547A 0%, #5a968f 100%);

    .container {
        height: inherit;

        > .row {
            height: inherit;

            > .col {
                height: inherit;
            }
        }
    }

    .image {
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 1rem;
        }
    }

    .text {
        list-style: none;
        padding: 0;
        gap: 1.25rem 0;
        li {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #FFF;
            .bars {
                flex-basis: 80%;
                display: flex;
                gap: 8px;
                flex-direction: column;
                justify-content: center;
                .bar {
                    width: 100%;
                    height: 6px;
                    border-radius: 3px;
                    background: linear-gradient(to right, #13547A 0%, #5a968f 100%);
                }

                span {
                    font-family: 'NanumSquareNeoLight';
                }
            }
        }

        @media screen and (max-width: 767px) {
            padding: 1rem;
            li {
                padding: 0.5rem;
                justify-content: flex-end;
                .bars {
                    flex-basis: 50%;

                }
                h3 {
                    font-size: 2.5em;
                }
            }
        }
    }
}

h2, h3, h4, ul, li, p {margin: 0; padding: 0;}

// .col-md-4 {background: #000;}
// .col-md-8 {background: #667;}
</style>