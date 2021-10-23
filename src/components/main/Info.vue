<template>
    <div class="info">
        <div class="info-inner">
            <div class="info-title">
                <p>카카오의 다양한 비즈니스 서비스들을 지금 바로 만나보세요!</p>
                <v-btn class="info-btn" x-large elevation="0"
                    >비즈니스 서비스 전체보기
                    <v-spacer></v-spacer>
                    <v-icon x-large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.info {
    position: relative;
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    background: url('../../assets/img/visual_cont5.acd0fad.png') no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-color: #f5f8ff;
    .info-inner {
        max-width: 1160px;
        margin: 0 auto;
        padding: 76px 0;
        box-sizing: border-box;
        .info-title {
            text-align: center;
            p {
                display: block;
                margin-bottom: 40px;
                font-size: 28px;
                line-height: 28px;
                color: #fff;
                letter-spacing: -0.03em;
            }
            .info-btn {
                background-color: #02143f;
                color: #fff;
                width: 412px;
                height: 80px;
                font-size: 27px;
                border-color: #d2d2d2;
                border: 1px solid #d2d2d2;
                border-radius: 13px;
                letter-spacing: -0.03em;
            }
            .info-btn:hover {
                background-color: #fff;
                color: #222;
                border-color: #d2d2d2;
            }
        }
    }
}
</style>
