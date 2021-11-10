<template>
    <div class="visual">
        <hooper class="visual-wrap" :settings="hooperSettings">
            <slide class="slide">
                <div class="slide-details video-details">
                    <div class="video_pc-wrap">
                        <video
                            class="video video_pc"
                            src="../../assets/video/main_visual_210525.mp4"
                            autoplay
                            muted
                            loop
                        ></video>
                    </div>
                    <div class="video_m-wrap">
                        <img
                            class="video video_m"
                            src="../../assets/video/m_visual.gif"
                            alt="비주얼_모바일"
                        />
                    </div>
                    <div class="video-words-wrap">
                        <div class="video-words_pc">
                            <strong>
                                비즈니스, 톡처럼 쉬워지다<br />
                                카카오비즈니스
                            </strong>
                        </div>
                        <div class="video-words_m">
                            <strong>
                                비즈니스,<br />
                                톡처럼 쉬워지다<br />
                                카카오비즈니스
                            </strong>
                        </div>
                    </div>
                </div>
            </slide>
            <slide class="slide">
                <div class="slide-details info-details">
                    <div class="thumb-inner">
                        <div class="thumb-bg thumb-bg-01"></div>
                        <div class="thumb-words">
                            <div class="thumb-title">카카오페이 구매</div>
                            <div class="thumb-details">
                                <strong>전국민이 가진 카카오 계정과<br /></strong>
                                <strong>결제 기반으로<br /></strong>
                                <strong>비즈니스가 더 쉬워집니다</strong>
                            </div>
                            <v-btn class="thumb-btn" color="primary" x-large
                                >카카오페이 구매 바로가기
                                <v-spacer></v-spacer>
                                <v-icon large>mdi-arrow-right</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </slide>
            <slide class="slide">
                <div class="slide-details info-details">
                    <div class="thumb-inner">
                        <div class="thumb-bg thumb-bg-02"></div>
                        <div class="thumb-words">
                            <div class="thumb-title">카카오구독ON</div>
                            <div class="thumb-details">
                                <strong>10초면 계약 끝!<br /></strong>
                                <strong>렌탈 계약도 정기배송도<br /></strong>
                                <strong>더 쉽고 편리하게</strong>
                            </div>
                            <v-btn class="thumb-btn" color="primary" x-large
                                >카카오구독ON 바로가기
                                <v-spacer></v-spacer>
                                <v-icon large>mdi-arrow-right</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons" class="page-navigation"></hooper-navigation>
            <hooper-pagination slot="hooper-addons" class="page page-indicator"></hooper-pagination>
            <hooper-pagination
                slot="hooper-addons"
                class="page page-fraction"
                mode="fraction"
            ></hooper-pagination>
        </hooper>
    </div>
</template>
<script>
import {
    Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: 'Intro',
    data() {
        return {
            hooperSettings: {
                wheelControl: false,
                autoPlay: false,
                playSpeed: 5000,
                transition: 500,
                // infiniteScroll: true,
            },
        };
    },
    components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation,
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss">
.visual-wrap {
    height: 640px;
    // background-color: #02143f;
    .slide {
        .slide-details {
        }
        .video-details {
            background-color: #02143f;
            height: 100%;
            .video_pc-wrap {
                margin: 0 auto;
                .video_pc {
                    display: none;
                }
            }
            .video_m-wrap {
                text-align: center;
                display: block;
                // transform: translate(0, -15%) scale(0.7);
                width: 100%;
                min-width: 320px;
                max-width: 360px;
                margin: 0 auto;
                .video_m {
                    display: block;
                    width: 100%;
                }
            }
            .video-words-wrap {
                width: 100%;
                position: absolute;
                left: auto;
                top: auto;
                right: auto;
                bottom: 60px;
                text-align: center;
                .video-words_m {
                    strong {
                        color: #fff;
                        font-size: 36px;
                        line-height: 46px;
                        letter-spacing: -2px;
                    }
                }
                .video-words_pc {
                    display: none;
                }
            }
        }
        .info-details {
            background-color: #f5f8ff;
            height: 100%;
            padding: 40px 0 0 0;
            .thumb-inner {
                width: 360px;
                height: 100%;
                margin: 0 auto;
                .thumb-bg {
                }
                .thumb-bg-01 {
                    background: url('../../assets/img/m_visual_02.png') 50% 50% no-repeat;
                    position: absolute;
                    width: 360px;
                    min-width: 360px;
                    min-height: 590px;
                    margin: 0 auto;
                    background-size: contain;
                    transform: inherit;
                }
                .thumb-bg-02 {
                    background: url('../../assets/img/m_visual_03.png') 50% 50% no-repeat;
                    position: absolute;
                    width: 360px;
                    min-width: 360px;
                    min-height: 590px;
                    margin: 0 auto;
                    background-size: contain;
                    transform: inherit;
                }
            }
            .thumb-words {
                .thumb-title {
                    margin: 0 0 8px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #828282;
                    font-weight: bold;
                }
                .thumb-details {
                    strong {
                        font-size: 24px;
                        line-height: 34px;
                        color: #323232;
                        letter-spacing: -2px;
                    }
                }
                .thumb-btn {
                    width: 360px;
                    height: 56px;
                    font-size: 18px;
                    border-radius: 10px;
                    position: absolute;
                    bottom: 60px;
                    font-weight: bold;
                    letter-spacing: -1px;
                }
            }
        }
    }
    .page-fraction,
    .page-navigation {
        display: none;
    }
}
@media (min-width: 768px) {
    .page-fraction,
    .page-navigation {
        display: block;
    }
    .page-indicator {
        display: none;
    }
}
</style>
