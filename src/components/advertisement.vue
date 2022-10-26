<template>
<div class="advertisement">
    <div class="video">
        <video src="images/99miscellaneous/Advertisement.mp4"></video>
    </div>
    <div class="text">
        <div class="phrase">
            <h5>우리 청소년들이 미래의 인재로 성장하도록</h5>
            <h3>JA KOREA가 함께합니다.</h3>
        </div>
        <div class="button"><a href="#!">자세히 보기 →</a></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.advertisement {
    height: 80vh;
    overflow: hidden;
    position: relative;

    .video {
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .text {
        color: #FFFFFF;
        height: 100%;
        display: grid;
        grid-template: repeat(12, 1fr) / repeat(12, 1fr);

        .phrase {
            grid-column: 3 / span 8;
            grid-row: 3 / span 8;

            h5 {
                font-family: 'NanumSquareNeoLight';
                font-size: 1.75rem;

                @media screen and (max-width: 767px) {
                    font-size: 1rem;
                }
            }

            h3 {
                font-family: 'NanumSquareNeoExtraBold';
                font-size: 4rem;

                @media screen and (max-width: 767px) {
                    font-size: 2.25rem;
                }
            }
        }

        .button {
            grid-column: 3 / span 8;
            grid-row: 9 / span 2;

            a {
                padding: 1.25rem 2.5rem;
                border: 1px solid #FFFFFF;
                border-radius: 2rem;

                &:hover {
                    background-color: #FFFFFF;
                    color: #000000;
                }
            }
        }
    }
}
</style>