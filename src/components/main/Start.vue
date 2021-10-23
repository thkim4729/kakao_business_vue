<template>
    <div class="start">
        <div class="start-inner">
            <div class="start-words">
                <p>카카오비즈니스 시작하기</p>
                <strong>
                    망설임은 성공만 늦출 뿐!<br />
                    지금 바로 시작하세요
                </strong>
                <v-btn class="start-btn" x-large elevation="0"
                    >카카오비즈니스 시작하기
                    <v-spacer></v-spacer>
                    <v-icon x-large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="start-visual">
                <div class="visual-thumb">
                    <video
                        src="../../assets/video/pc_kfb_start_210727.mp4"
                        poster="../../assets/img/pc_kfb_start.5248561.png"
                        muted
                        autoplay
                        loop
                        class="video"
                    ></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.start {
    overflow: hidden;
    position: relative;
    min-height: 1250px;
    background-color: #f5f8ff;
    .start-inner {
        max-width: 1160px;
        margin: 0 auto;
        padding: 123px 0;
        box-sizing: border-box;
        .start-words {
            position: relative;
            z-index: 1;
            letter-spacing: -0.03em;
            p {
                margin-bottom: 18px;
                font-size: 24px;
                line-height: 34px;
                color: #828282;
            }
            strong {
                display: block;
                color: #222;
                font-size: 40px;
                line-height: 58px;
                word-break: keep-all;
            }
            .start-btn {
                width: 412px;
                height: 80px;
                font-size: 27px;
                background-color: rgba(2, 20, 63, 0.06);
                border-radius: 13px;
                letter-spacing: -0.03em;
                color: #222;
                margin-top: 40px;
            }
            .start-btn:hover {
                color: #fff;
                background-color: #326edc;
            }
        }
        .start-visual {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
