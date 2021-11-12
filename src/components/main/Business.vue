<template>
    <div class="business">
        <div class="business-inner">
            <div class="business-words">
                <p>카카오비즈니스 시작하기</p>
                <strong>
                    망설임은 성공만 늦출 뿐!<br />
                    지금 바로 시작하세요
                </strong>
                <v-btn class="business-btn" x-large elevation="0"
                    >카카오비즈니스 시작하기
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="business-visual">
                <div class="visual-mobile">
                    <video
                        src="../../assets/video/business_m.mp4"
                        poster="../../assets/img/business_m.png"
                        muted
                        autoplay
                        loop
                        class="video"
                    ></video>
                </div>
                <div class="visual-pc">
                    <video
                        src="../../assets/video/business_pc.mp4"
                        poster="../../assets/img/business_pc.png"
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
    name: 'Business',
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
.business {
    position: relative;
    height: 642px;
    background-color: #f5f8ff;
    .business-inner {
        padding: 40px 0 0;
        margin: 0 auto;
        max-width: 85%;
        height: 100%;
        .business-words {
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
            .business-btn {
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
        .business-visual {
            overflow: hidden;
            .visual-mobile {
                display: block;
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
            .visual-pc {
                display: none;
            }
        }
    }
}
@media (min-width: 768px) {
    .business {
        position: relative;
        width: 100%;
        padding: 0 80px;
        box-sizing: border-box;
        overflow: hidden;
        min-height: 1250px;
        background-color: #f5f8ff;
        .business-inner {
            max-width: 1160px;
            margin: 0 auto;
            padding: 123px 0px;
            box-sizing: border-box;
            .business-words {
                position: relative;
                z-index: 1;
                letter-spacing: -1px;
                font-weight: bold;
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
                .business-btn {
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
            .business-visual {
                overflow: hidden;
                .visual-mobile {
                    display: none;
                }
                .visual-pc {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    video {
                        display: block;
                        object-fit: contain;
                    }
                }
            }
        }
    }
}
</style>
