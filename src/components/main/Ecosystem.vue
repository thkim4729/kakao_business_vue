<template>
    <div class="ecosystem">
        <div class="ecosystem-inner">
            <div class="ecosystem-title">
                <p>카카오비즈니스 생태계</p>
                <strong
                    >나만의 채널을 만들어,<br />
                    광고로 고객을 모으고,<br />
                    도구로 액션까지 한 번에!
                </strong>
                <v-btn class="ecosystem-btn" x-large elevation="0"
                    >카카오톡 채널 더 알아보기
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="ecosystem-visual">
                <div class="visual-mobile">
                    <video
                        src="../../assets/video/ecosystem.mp4"
                        poster="../../assets/img/ecosystem_m.png"
                        autoplay
                        muted
                        loop
                        class="video"
                    ></video>
                </div>
                <div class="visual-pc">
                    <video
                        src="../../assets/video/ecosystem.mp4"
                        poster="../../assets/img/ecosystem_pc.png"
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
    name: 'EcoSystem',
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
.ecosystem {
    position: relative;
    height: 610px;
    .ecosystem-inner {
        padding: 40px 0 0;
        margin: 0 auto;
        max-width: 85%;
        height: 100%;
        .ecosystem-title {
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
            .ecosystem-btn {
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
        .ecosystem-visual {
            position: relative;
            .visual-mobile {
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
            .visual-pc {
                display: none;
            }
        }
    }
}
@media (min-width: 768px) {
    .ecosystem {
        position: relative;
        width: 100%;
        padding: 0 80px;
        box-sizing: border-box;
        overflow: hidden;
        min-height: 800px;
        background-color: #fff;
        .ecosystem-inner {
            max-width: 1160px;
            margin: 0 auto;
            padding: 123px 0;
            box-sizing: border-box;
            .ecosystem-title {
                position: relative;
                z-index: 1;
                letter-spacing: -1px;
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
                .ecosystem-btn {
                    display: inline-block;
                    position: relative;
                    top: 80px;
                    left: 0;
                    transform: translate(0, -50%);
                    width: 412px;
                    height: 80px;
                    padding: 0 30px;
                    font-size: 27px;
                    line-height: 75px;
                    color: #222;
                    background-color: rgba(2, 20, 63, 0.06);
                    border-radius: 13px;
                    box-sizing: border-box;
                    border: 1px solid transparent;
                    z-index: 10;
                }
            }
            .ecosystem-visual {
                position: relative;
                .visual-mobile {
                    display: none;
                }
                .visual-pc {
                    display: block;
                    position: absolute;
                    width: 1168px;
                    min-height: 555px;
                    margin-top: -330px;
                    video {
                        max-height: 555px;
                        padding-left: 234px;
                        transform: scale(1.5);
                        box-sizing: border-box;
                        object-fit: contain;
                    }
                }
            }
        }
    }
}
</style>
