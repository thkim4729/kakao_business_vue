<template>
    <div class="join">
        <div class="join-inner">
            <div class="join-title">
                <p>카카오비즈니스 생태계</p>
                <strong
                    >나만의 채널을 만들어,<br />
                    광고로 고객을 모으고,<br />
                    도구로 액션까지 한 번에!
                </strong>
                <v-btn class="join-btn" x-large elevation="0"
                    >카카오톡 채널 더 알아보기
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="join-visual">
                <div class="visual-thumb">
                    <video
                        src="../../assets/video/kfb_ecosystem.mp4"
                        poster="../../assets/img/kfb_ecosystem.482c793.png"
                        autoplay
                        muted
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
    name: 'Join',
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
.join {
    position: relative;
    height: 610px;
    .join-inner {
        padding: 40px 0 0;
        margin: 0 auto;
        max-width: 85%;
        height: 100%;
        .join-title {
            position: static;
            width: 100%;
            // margin: 0 0 0 30px;
            p {
                color: #828282;
                margin-bottom: 9px;
                font-size: 14px;
                line-height: 20px;
                font-weight: bold;
                letter-spacing: -1px;
            }
            strong {
                display: block;
                color: #222;
                font-size: 40px;
                line-height: 58px;
                word-break: keep-all;
                font-size: 24px;
                line-height: 34px;
                letter-spacing: -2px;
                font-weight: 600;
            }
            .join-btn {
                position: absolute;
                left: 50%;
                bottom: 40px;
                transform: translate(-50%, 0);
                width: 85%;
                height: 56px;
                padding: 0 20px;
                font-size: 18px;
                line-height: 54px;
                border-radius: 9px;
                color: #222;
                letter-spacing: -1px;
                font-weight: bold;
                // margin: 0 auto;
            }
        }
        .join-visual {
            position: relative;
            .visual-thumb {
                width: auto;
                position: relative;
                overflow: hidden;
                height: 310px;
                min-height: 310px;
                margin-top: 0;
                .video {
                    position: absolute;
                    left: 50%;
                    top: -28px;
                    width: 720px;
                    margin-left: -360px;
                    padding-left: 0;
                    transform: scale(1);
                }
            }
        }
    }
}
@media (min-width: 768px) {
}
</style>
