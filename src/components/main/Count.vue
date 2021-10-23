<template>
    <div class="count">
        <div class="count-inner">
            <div class="count-words">
                <div class="count-title">
                    <p>카카오의 영향력</p>
                </div>
                <div class="count-info">
                    <strong>카카오비즈니스를 한다는 건?<br /></strong>
                    <strong>전 국민이 잠재 고객이 된다는 것</strong>
                </div>
            </div>
            <div class="count-value">
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
</template>
<script>
export default {};
</script>
<style lang="scss">
.count {
    height: 540px;
    background: url('../../assets/img/count.png') center no-repeat;
    background-size: cover;
    .count-inner {
        display: flex;
        flex-flow: row;
        max-width: 1160px;
        margin: 0 auto;
        padding: 150px 0;
        .count-words {
            display: flex;
            flex-flow: column;
            margin: 0 48px 0 0;
            .count-title {
                margin-bottom: 18 px;
                font-size: 24px;
                line-height: 34px;
                color: hsla(0, 0%, 100%, 0.7);
                font-weight: 500;
                letter-spacing: -2px;
            }
            .count-info {
                display: block;
                font-size: 36px;
                line-height: 58px;
                color: #fff;
                letter-spacing: -3px;
            }
        }
        .count-value {
            display: flex;
            flex-flow: column;
            width: 600px;
            border-top: 1px solid hsla(0, 0%, 100%, 0.3);
            border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
            box-sizing: border-box;
            .value-title {
                display: table;
                box-sizing: border-box;
                span {
                    display: table-cell;
                    width: 50%;
                    padding: 19px 0 20px;
                    font-size: 20px;
                    line-height: 29px;
                    color: hsla(0, 0%, 100%, 0.8);
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
                    letter-spacing: -0.03em;
                    font-weight: 600;
                    box-sizing: border-box;
                    text-align: center;
                }
                span:first-child {
                    border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                }
            }
            .value-desc {
                display: table;
                box-sizing: border-box;
                span {
                    display: table-cell;
                    width: 50%;
                    padding: 32px 0 39px;
                    font-size: 57px;
                    line-height: 74px;
                    color: #fff;
                    font-weight: 600;
                    box-sizing: border-box;
                    text-align: center;
                }
                span:first-child {
                    border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                }
            }
        }
    }
}
</style>
