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
                    <v-icon large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="start-visual">
                <div class="visual-thumb">
                    <video
                        src="../../assets/video/m_kfb_start_210727.mp4"
                        poster="../../assets/img/m_kfb_start.d8f8902.png"
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
export default {
    name: 'Start',
    components: {},
    computed: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss">
.start {
    position: relative;
    height: 642px;
    background-color: #f5f8ff;
    .start-inner {
        padding: 40px 0 0;
        margin: 0 auto;
        max-width: 85%;
        height: 100%;
        .start-words {
            p {
                margin-bottom: 9px;
                font-size: 14px;
                line-height: 20px;
                color: #828282;
                font-weight: bold;
                letter-spacing: -1px;
            }
            strong {
                font-size: 24px;
                line-height: 34px;
                letter-spacing: -1.5px;
                display: block;
                color: #222;
            }
            .start-btn {
                position: absolute;
                left: 50%;
                bottom: 40px;
                transform: translate(-50%, 0);
                width: 85%;
                height: 56px;
                padding: 0 20px;
                margin: 0 auto;
                font-size: 18px;
                line-height: 54px;
                border-radius: 9px;
                color: #222;
                letter-spacing: -1px;
                font-weight: bold;
            }
        }
        .start-visual {
            overflow: hidden;
            .visual-thumb {
                overflow: hidden;
                width: 100%;
                height: 548px;
                margin-top: -140px;
                .video {
                    display: block;
                    width: 100%;
                    max-width: 360px;
                    margin: 0 auto;
                }
            }
        }
    }
}
@media (min-width: 768px) {
}
</style>
