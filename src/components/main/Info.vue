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
    background: url('../../assets/img/m_visual_cont5.1cc66f1.png');
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
}
</style>
