<template>
    <div class="info">
        <div class="info-inner">
            <div class="info-title">
                <p>카카오의 다양한 비즈니스 서비스들을 지금 바로 만나보세요!</p>
                <v-btn class="info-btn" x-large elevation="0"
                    >비즈니스 서비스 전체보기
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Info',
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
.info {
    height: 276px;
    background: url('../../assets/img/info_m.png');
    background-size: cover;
    background-position: 50% 50%;
    .info-inner {
        padding: 70px 0;
        margin: 0 40px;
        .info-title {
            text-align: center;
            width: 100%;
            p {
                width: 272px;
                font-size: 18px;
                line-height: 27px;
                margin: 0 auto 26px;
                color: #fff;
                font-weight: bold;
            }
            .info-btn {
                margin: 0 30px;
                background-color: #02143f;
                color: #fff;
                border: 1px solid transparent;
                border-color: #d2d2d2;
                border-radius: 9px;
                width: 100%;
                height: 56px;
                margin: 0 auto;
                padding: 0 20px;
                font-size: 18px;
                line-height: 54px;
                font-weight: bold;
            }
        }
    }
}
@media (min-width: 768px) {
    .info {
        position: relative;
        width: 100%;
        height: 300px;
        box-sizing: border-box;
        background: url('../../assets/img/info_pc.png') no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        background-color: #f5f8ff;
        .info-inner {
            max-width: 1160px;
            margin: 0 auto;
            padding: 76px 0;
            box-sizing: border-box;
            .info-title {
                text-align: center;
                p {
                    width: 100%;
                    display: block;
                    margin-bottom: 40px;
                    font-size: 28px;
                    line-height: 28px;
                    color: #fff;
                    letter-spacing: -2px;
                    font-weight: 500;
                }
                .info-btn {
                    background-color: #02143f;
                    color: #fff;
                    display: inline-block;
                    position: relative;
                    width: 450px;
                    height: 80px;
                    padding: 0 30px;
                    font-size: 27px;
                    line-height: 75px;
                    border-radius: 13px;
                    box-sizing: border-box;
                    border: 1px solid transparent;
                    border-color: #d2d2d2;
                    text-align: left;
                    letter-spacing: -1px;
                    z-index: 10;
                }
            }
        }
    }
}
</style>
