<template>
    <div class="visual">
        <hooper class="visual-wrap" :settings="hooperSettings">
            <slide class="slide">
                <div class="slide-details video-details">
                    <div class="visual_pc">
                        <video
                            class="video"
                            src="../../assets/video/visual_pc.mp4"
                            autoplay
                            muted
                            loop
                        ></video>
                    </div>
                    <div class="visual_m">
                        <img
                            class="video"
                            src="../../assets/video/visual_m.gif"
                            alt="비주얼_모바일"
                        />
                    </div>
                    <div class="visual-words">
                        <div class="visual-words_pc">
                            <strong>
                                비즈니스, 톡처럼 쉬워지다<br />
                                카카오비즈니스
                            </strong>
                        </div>
                        <div class="visual-words_m">
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
                        <div class="thumb-bg thumb-m-01"></div>
                        <div class="thumb-bg thumb-pc-01"></div>
                        <div class="thumb-words">
                            <div class="words-inner">
                                <div class="thumb-title">카카오페이 구매</div>
                                <div class="thumb-details-m">
                                    <strong>전국민이 가진 카카오 계정과<br /></strong>
                                    <strong>결제 기반으로<br /></strong>
                                    <strong>비즈니스가 더 쉬워집니다</strong>
                                </div>
                                <div class="thumb-details-pc">
                                    <strong>전국민이 가진<br /></strong>
                                    <strong>카카오 계정과 결제 기반으로<br /></strong>
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
                </div>
            </slide>
            <slide class="slide">
                <div class="slide-details info-details">
                    <div class="thumb-inner">
                        <div class="thumb-bg thumb-m-02"></div>
                        <div class="thumb-bg thumb-pc-02"></div>
                        <div class="thumb-words">
                            <div class="words-inner">
                                <div class="thumb-title">카카오구독ON</div>
                                <div class="thumb-details-m">
                                    <strong>10초면 계약 끝!<br /></strong>
                                    <strong>렌탈 계약도 정기배송도<br /></strong>
                                    <strong>더 쉽고 편리하게</strong>
                                </div>
                                <div class="thumb-details-pc">
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
    name: 'Visual',
    data() {
        return {
            hooperSettings: {
                wheelControl: false,
                autoPlay: true,
                playSpeed: 5000,
                transition: 750,
                infiniteScroll: true,
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
            .visual_pc {
                display: none;
                .video {
                }
            }
            .visual_m {
                text-align: center;
                display: block;
                // transform: translate(0, -15%) scale(0.7);
                width: 100%;
                min-width: 320px;
                max-width: 360px;
                margin: 0 auto;
                .video {
                    display: block;
                    width: 100%;
                }
            }
            .visual-words {
                width: 100%;
                position: absolute;
                left: auto;
                top: auto;
                right: auto;
                bottom: 60px;
                text-align: center;
                .visual-words_m {
                    strong {
                        color: #fff;
                        font-size: 36px;
                        line-height: 46px;
                        letter-spacing: -2px;
                    }
                }
                .visual-words_pc {
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
                .thumb-m-01 {
                    background: url('../../assets/img/visual_m_pay.png') 50% 50% no-repeat;
                    position: absolute;
                    width: 360px;
                    min-width: 360px;
                    min-height: 590px;
                    margin: 0 auto;
                    background-size: contain;
                    transform: inherit;
                }
                .thumb-m-02 {
                    background: url('../../assets/img/visual_m_sub.png') 50% 50% no-repeat;
                    position: absolute;
                    width: 360px;
                    min-width: 360px;
                    min-height: 590px;
                    margin: 0 auto;
                    background-size: contain;
                    transform: inherit;
                }
                .thumn-pc-01,
                .thumb-pc-02 {
                    display: none;
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
                .thumb-details-m {
                    display: block;
                    strong {
                        font-size: 24px;
                        line-height: 34px;
                        color: #323232;
                        letter-spacing: -2px;
                    }
                }
                .thumb-details-pc {
                    display: none;
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
    .page-indicator {
        display: block;
    }
    .page-fraction,
    .page-navigation {
        display: none;
    }
}
@media (min-width: 768px) {
    .visual-wrap {
        position: relative;
        height: calc(100vh - 64px);
        .slide {
            overflow: hidden;
            .slide-details {
            }
            .video-details {
                .visual_pc {
                    display: block;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    background-color: #0a2254;
                    .video {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        right: auto;
                        bottom: auto;
                        width: 100%;
                        min-width: 1382px;
                        max-width: 1796px;
                        margin-top: -60px;
                        transform: translate(-50%, -50%) scale(1.5);
                        padding: 60px 0 120px;
                        background-color: #0a2254;
                    }
                }
                .visual_m {
                    display: none;
                }
                .visual-words {
                    position: absolute;
                    left: auto;
                    top: auto;
                    right: auto;
                    bottom: 150px;
                    width: 100%;
                    box-sizing: border-box;
                    z-index: 2;
                    text-align: center;
                    .visual-words_m {
                        display: none;
                    }
                    .visual-words_pc {
                        display: block;
                        strong {
                            width: 100%;
                            font-size: 60px;
                            line-height: 85px;
                            color: #fff;
                            text-align: center;
                            letter-spacing: -2px;
                        }
                    }
                }
            }
            .info-details {
                position: relative;
                background-color: #f5f8ff;
                .thumb-inner {
                    width: 100%;
                    .thumb-bg {
                        display: block;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        top: 0;
                        right: 0;
                        transform: translate(0);
                        min-width: 1600px;
                        max-width: 1600px;
                        margin: 0 auto;
                        padding: 0;
                        min-height: 940px;
                        max-height: 940px;
                        background-size: contain;
                        background-position: 100%;
                    }
                    .thumb-pc-01 {
                        background: url('../../assets/img/visual_pc_pay.png') 50% 50% no-repeat;
                    }
                    .thumb-pc-02 {
                        background: url('../../assets/img/visual_pc_sub.png') 50% 50% no-repeat;
                    }
                    .thumb-m-01,
                    .thumb-m-02 {
                        display: none;
                    }
                }
                .thumb-words {
                    display: table;
                    position: relative;
                    bottom: 0;
                    width: 100%;
                    max-width: 1410px;
                    height: 100%;
                    margin: 0 auto;
                    text-align: left;
                    padding: 0 120px;
                    box-sizing: border-box;
                    .words-inner {
                        display: table-cell;
                        height: 100%;
                        vertical-align: middle;
                        .thumb-title {
                            display: block;
                            margin-bottom: 20px;
                            font-size: 26px;
                            line-height: 38px;
                            color: #444;
                            margin-top: -44px;
                            font-weight: 500;
                            letter-spacing: -2px;
                        }
                        .thumb-details-pc {
                            display: block;
                            strong {
                                font-size: 50px;
                                line-height: 72px;
                                color: #323232;
                                text-align: left;
                                letter-spacing: -5px;
                            }
                        }
                        .thumb-details-m {
                            display: none;
                        }
                        .thumb-btn {
                            margin-top: 100px;
                            display: inline-block;
                            position: relative;
                            width: 440px;
                            height: 80px;
                            padding: 0 30px;
                            font-size: 27px;
                            line-height: 75px;
                            background-color: #326edc;
                            color: #fff;
                            border-radius: 13px;
                            box-sizing: border-box;
                            border: 1px solid transparent;
                            text-align: left;
                            letter-spacing: -1px;
                            z-index: 10;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
        .page-indicator {
            display: none;
        }
        .page-fraction,
        .page-navigation {
            display: block;
            font-size: 20px;
            letter-spacing: 16px;
        }
        .page-navigation {
            button {
                .icon {
                    width: 36px;
                    height: 36px;
                }
            }
        }
        .page-fraction {
            position: absolute;
            right: 5%;
            bottom: 5%;
        }
    }
}
</style>
