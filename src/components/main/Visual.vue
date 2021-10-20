<template>
    <div class="visual">
        <hooper class="visual-wrap" :settings="hooperSettings">
            <slide class="slide">
                <div class="slide-details">
                    <video
                        class="video"
                        src="../../assets/video/main_visual_210525.mp4"
                        autoplay
                        muted
                        loop
                    ></video>
                    <div class="video-words">
                        <strong>비즈니스, 톡처럼 쉬워지다<br /></strong>
                        <strong>카카오비즈니스</strong>
                    </div>
                </div>
            </slide>
            <slide class="slide">
                <div class="slide-details">
                    <div class="thumb thumb-01">
                        <div class="thumb-inner">
                            <!-- <img src="../../assets/img/transparent.png" alt="background" /> -->
                            <div class="thumb-words">
                                <div class="thumb-title">카카오페이 구매</div>
                                <div class="thumb-details">
                                    <strong>전국민이 가진<br /></strong>
                                    <strong>카카오 계정과 결제 기반으로<br /></strong>
                                    <strong>비즈니스가 더 쉬워집니다</strong>
                                </div>
                                <v-btn class="thumb-btn" color="primary" x-large
                                    >카카오페이 구매 바로가기
                                    <v-spacer></v-spacer>
                                    <v-icon x-large>mdi-arrow-right</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
            <slide class="slide">
                <div class="slide-details">
                    <div class="thumb thumb-02">
                        <div class="thumb-inner">
                            <!-- <img src="../../assets/img/transparent.png" alt="background" /> -->
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
                                    <v-icon x-large>mdi-arrow-right</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination
                slot="hooper-addons"
                mode="fraction"
                class="page"
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
                autoPlay: true,
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
.visual {
    // height: calc(100vh - 60px);
    height: 100vh;
    box-sizing: border-box;
    .visual-wrap {
        overflow: hidden;
        position: relative;
        width: 100%;
        min-width: 500px;
        height: 100%;
        .slide {
            overflow: hidden;
            .slide-details {
                width: 100%;
                height: 100%;
                background: #f5f8ff;
                .video {
                    position: absolute;
                    // top: -10%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    pointer-events: none;
                    // transform: scale(1.5);
                    overflow: hidden;
                }
                .video-words {
                    text-align: center;
                    letter-spacing: -4px;
                    position: absolute;
                    top: 80%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    strong {
                        color: #fff;
                        font-size: 60px;
                    }
                }
                .thumb {
                    height: 100%;
                    .thumb-inner {
                        max-width: 1410px;
                        margin: 0 auto;
                        padding: 0 120px;
                        .thumb-words {
                            width: 100%;
                            position: absolute;
                            top: 50%;
                            transform: translate(0, -50%);
                            .thumb-title {
                                font-size: 24px;
                                letter-spacing: -1px;
                            }
                            .thumb-details {
                                margin: 28px 0;
                                font-size: 48px;
                                letter-spacing: -5px;
                            }
                            .thumb-btn {
                                width: 412px;
                                height: 80px;
                                border-radius: 12px;
                                font-size: 24px;
                                letter-spacing: -1px;
                                font-weight: 500;
                            }
                        }
                    }
                }
                .thumb-01 {
                    background: url('../../assets/img/visual_thumb_01.png') center no-repeat;
                }
                .thumb-02 {
                    background: url('../../assets/img/visual_thumb_02.png') center no-repeat;
                }
            }
        }
        .page {
            position: absolute;
            right: 5%;
            bottom: 5%;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 10px;
        }
    }
}
</style>
