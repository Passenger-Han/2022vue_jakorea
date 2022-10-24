<template>
<footer>
    <div class="footer-upper">
        <div class="container py-4">
            <ul class="termsofservice flex-column flex-md-row">
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>이메일수집거부</li>
                <li>오시는길</li>
            </ul>

            <div class="related" @click="toggleRelated();">
                    <span>관련 사이트 보기</span>
                    <ul :class="{active: showRelated,}">
                        <li>JA Worldwide</li>
                        <li>JA Africa</li>
                        <li>JA Americas</li>
                        <li>JA Asia Pacific</li>
                        <li>JA Europe</li>
                        <li>JA Middle East / INJAZ Al-Arab</li>
                        <li>JA U.S.A</li>
                    </ul>
            </div>
        </div>
    </div>
    <div class="footer-lower">
        <div class="container">
            <div class="footer-lower-upper py-4">
                <ul class="financial flex-column flex-md-row">
                    <li>후원하기</li>
                    <li>온라인 학습관리</li>
                    <li>기부금영수증</li>
                    <li>국세청 공시 및 공개 내역</li>
                    <li>1:1 문의</li>
                </ul>
                <div class="sns">
                    Follow SNS
                    <ul>
                        <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
                    </ul>
                </div>
            </div>

            <div class="footer-lower-lower py-4">
                <div class="company-address">
                    <h2 class="mb-4"><img src="../assets/logo.svg" alt=""></h2>
                    <p>서울특별시 강서구 서울특 000, A동 0000호(별시강, 서구서울특별시강서구서울) 특별시강 서구서울특별시 우편번호: 00000 대표: 대표자 사업자번호: 000-00-00000</p>
                    <p>대표전화: 00-000-0000 팩스: 000-0000-0000 이메일: noreply@noreply.nor</p>
                    <p>ⓒJA Korea, 2022, 본 사이트는 교육용으로 제작한 미러사이트입니다. 실제 사이트와 연관없음을 알립니다.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    data(){
        return {
            showRelated: false,
        }
    },

    methods: {
        toggleRelated(){
            this.showRelated = !this.showRelated;
        },
    },
}
</script>

<style scoped lang="scss">
ul, ol, li {list-style: none; margin: 0; padding: 0;}
p {margin: 0; padding: 0;}
li:hover {
    color: rgb(109, 109, 230);
    font-weight: bold;
}

footer {
    .footer-upper {
        background: #E5E5E5;

        .container {
            display: flex;
            justify-content: space-between;
            gap: 2rem;

            ul {
                display: flex;
            }

            .termsofservice {
                gap: 1rem;

                align-self: center;
            }

            .related {
                flex-grow: 1;
                max-width: 25%;

                position: relative;
                
                border: 1px solid #00000033;
                border-radius: 0.5rem;
                padding: 0.5rem 1.25rem;
                cursor: pointer;
                user-select: none;

                @media screen and (max-width: 767px) {
                    max-width: none;
                    align-self: center;
                }

                ul {
                    width: 100%;
                    position: absolute;
                    left: 0;
                    bottom: 100%;

                    display: none;
                    flex-direction: column;

                    border-radius: 0.5rem;
                    overflow: hidden;

                    li {
                        background: #FFFFFF;
                        padding: 0.875rem;
                    }

                    &.active {
                        display: flex;
                    }
                }
            }
        }
    }

    .footer-lower {
        background: #F5F5F5;

        .footer-lower-upper {
            display: flex;
            justify-content: space-between;

            ul {
                display: flex;
                gap: 1rem;
            }

            .sns {
                ul {
                    font-size: 2rem;
                }
            }
        }

        .footer-lower-lower {
            h2 {
                max-width: 200px;
                filter: grayscale(100%);
            }

            .company-address {
                p {
                    font-size: 0.875rem;
                    opacity: 0.82;
                    margin-bottom: 0.5rem;
                    &:last-child {
                        font-size: 0.8rem;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>