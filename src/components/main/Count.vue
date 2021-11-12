<template>
    <div class="count">
        <div class="count-inner">
            <div class="count-words">
                <div class="words-title">
                    <p>카카오의 영향력</p>
                </div>
                <div class="words-info">
                    <strong>카카오비즈니스를 한다는 건?<br /></strong>
                    <strong>전 국민이 잠재 고객이 된다는 것</strong>
                </div>
            </div>
            <div class="count-value">
                <div class="value-inner">
                    <div class="value-title">
                        <span>국내 카카오톡 월간 이용자 수</span>
                        <span>전체 가입자 중 채널 이용자 비율</span>
                    </div>
                    <div class="value-desc">
                        <span>4,600만+</span>
                        <span>84%+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Count',
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
.count {
    height: 410px;
    background: url('../../assets/img/count.png') center no-repeat;
    background-position: 50% 100%;
    background-size: 800px 50%;
    background-color: #3846b1;
    .count-inner {
        padding: 40px 0 0;
        .count-words {
            margin: 0 0 0 30px;
            letter-spacing: -1px;
            .words-title {
                color: hsla(0, 0%, 100%, 0.7);
                font-weight: bold;
                font-size: 14px;
                line-height: 20px;
            }
            .words-info {
                font-size: 24px;
                line-height: 34px;
                letter-spacing: -1.5px;
                color: #fff;
            }
        }
        .count-value {
            margin-top: 70px;
            padding: 0 31px;
            width: 100%;
            .value-inner {
                border-top: 1px solid hsla(0, 0%, 100%, 0.3);
                border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
                text-align: center;
                box-sizing: border-box;
                .value-title {
                    display: table;
                    width: 100%;
                    span {
                        display: table-cell;
                        width: 50%;
                        padding: 8px 2px 7px;
                        font-size: 12px;
                        line-height: 17px;
                        word-break: keep-all;
                        color: hsla(0, 0%, 100%, 0.8);
                        border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
                        letter-spacing: -1px;
                        box-sizing: border-box;
                        font-weight: bold;
                    }
                    span:first-child {
                        border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                    }
                }
                .value-desc {
                    display: table;
                    width: 100%;
                    span {
                        display: table-cell;
                        width: 50%;
                        padding: 16px 0 16px;
                        font-size: 28px;
                        line-height: 32px;
                        word-break: keep-all;
                        color: #fff;
                        letter-spacing: -1px;
                        box-sizing: border-box;
                        font-weight: bold;
                    }
                    span:first-child {
                        border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                    }
                }
            }
        }
    }
}
@media (min-width: 768px) {
    .count {
        position: relative;
        width: 100%;
        padding: 0 80px;
        box-sizing: border-box;
        overflow: hidden;
        height: 540px;
        background: url('../../assets/img/count.png') center no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        background-color: #3846b1;
        .count-inner {
            position: relative;
            max-width: 1160px;
            margin: 0 auto;
            padding: 123px 0;
            box-sizing: border-box;
            display: flex;
            flex-flow: row;
            justify-content: center;
            .count-words {
                position: relative;
                width: 50%;
                z-index: 1;
                margin: 0;
                .words-title {
                    margin-bottom: 18px;
                    font-size: 24px;
                    line-height: 34px;
                    color: hsla(0, 0%, 100%, 0.7);
                    font-weight: 500;
                    letter-spacing: -2px;
                }
                .words-info {
                    display: block;
                    color: #fff;
                    font-size: 40px;
                    line-height: 58px;
                    word-break: keep-all;
                    letter-spacing: -2px;
                }
            }
            .count-value {
                width: 50%;
                box-sizing: border-box;
                margin: 0;
                .value-inner {
                    width: 600px;
                    border-top: 1px solid hsla(0, 0%, 100%, 0.3);
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
                    text-align: center;
                    box-sizing: border-box;
                    .value-title {
                        display: table;
                        width: 100%;
                        span {
                            display: table-cell;
                            width: 50%;
                            padding: 19px 0 20px;
                            font-size: 20px;
                            line-height: 29px;
                            color: hsla(0, 0%, 100%, 0.8);
                            border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
                            letter-spacing: -0.03em;
                            box-sizing: border-box;
                            letter-spacing: -2px;
                        }
                        span:first-child {
                            border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                        }
                    }
                    .value-desc {
                        display: table;
                        width: 100%;
                        span {
                            display: table-cell;
                            width: 50%;
                            padding: 32px 0 39px;
                            font-size: 60px;
                            line-height: 74px;
                            color: #fff;
                            box-sizing: border-box;
                            letter-spacing: -2px;
                        }
                        span:first-child {
                            border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                        }
                    }
                }
            }
        }
    }
}
</style>
