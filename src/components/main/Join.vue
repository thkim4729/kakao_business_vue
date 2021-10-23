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
                    <v-icon x-large>mdi-arrow-right</v-icon>
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
export default {};
</script>
<style lang="scss">
.join {
    overflow: hidden;
    min-height: 800px;
    background-color: #fff;
    .join-inner {
        max-width: 1160px;
        margin: 0 auto;
        padding: 123px 0;
        box-sizing: border-box;
        .join-title {
            position: relative;
            z-index: 1;
            letter-spacing: -0.03em;
            display: flex;
            flex-flow: column;
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
            .join-btn {
                width: 412px;
                height: 80px;
                font-size: 27px;
                background-color: rgba(2, 20, 63, 0.06);
                border-radius: 13px;
                letter-spacing: -0.03em;
                color: #222;
                margin-top: 40px;
            }
            .join-btn:hover {
                color: #fff;
                background-color: #326edc;
            }
        }
        .join-visual {
            position: relative;
            .visual-thumb {
                position: absolute;
                width: 1168px;
                min-height: 555px;
                margin-top: -330px;
                .video {
                    max-height: 555px;
                    padding-left: 234px;
                    transform: scale(1.5);
                    box-sizing: border-box;
                }
            }
        }
    }
}
</style>
