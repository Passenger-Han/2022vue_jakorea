<template>
<div class="newsletter py-5">
    <div class="container p-5">
        <h3 class="text-center text-md-start fw-bold mb-5">JA Korea 뉴스레터 구독하기</h3>
        <form action="#!">
            <div class="d-flex flex-column flex-md-row gap-1 mb-2 position-relative">
                <input type="text" name="name" id="name" placeholder="이메일 ID">
                <span class="align-self-center d-none d-md-block">
                    <font-awesome-icon class="" icon="fa-solid fa-at" />
                </span>
                <input type="text" name="emailaddress" id="emailaddress" placeholder="이메일 도메인 ('@' 없이 입력)">
                <button>신청하기</button>
            </div>
            <div class="d-flex gap-1 position-relative checkbox">
                <input type="checkbox" name="emailagreement" id="emailagreement">
                <label for="emailagreement">뉴스레터 구독을 위한 이름 및 이메일 주소 수집에 동의합니다.</label>
                <img src="images/99miscellaneous/Newsletter_bg.png" alt="" class="d-none d-lg-block position-absolute end-0 bottom-0">
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .newsletter {
        .container {
            min-height: 280px;
            color: #FFFFFF;
            background: linear-gradient(to left, #13547A 0%, #5a968f 100%);
            border-radius: 2.5rem;

            input[type="text"] {
                flex-grow: 0.15;
                padding: 1rem;
                border-radius: 1rem;
            }

            button {
                padding: 1rem 2rem;
                border-radius: 1rem;
            }

            input, button {
                border: none;
                outline: none;
            }

            .checkbox {
                img {
                    width: 28%;
                    transform: translateY(20px);
                }
            }
        }

        form {
            flex-grow: 0.5;
        }

        .container, form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
</style>