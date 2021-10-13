<template>
    <div class="visual">
        <hooper class="visual-wrap" :settings="hooperSettings">
            <slide class="slide">
                <div class="video-wrap">
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
            <slide class="slide"></slide>
            <slide class="slide"></slide>
        </hooper>
    </div>
</template>
<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: 'Intro',
    data() {
        return {
            hooperSettings: {
                wheelControl: false,
                // infiniteScroll: true,
            },
        };
    },
    components: {
        Hooper,
        Slide,
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss">
.visual {
    height: calc(100vh - 60px);
    box-sizing: border-box;
    .visual-wrap {
        overflow: hidden;
        position: relative;
        width: 100%;
        min-width: 500px;
        height: 100%;
        .slide {
            overflow: hidden;
            .video-wrap {
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
            }
        }
    }
}
</style>
