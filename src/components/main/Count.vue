<template>
    <div class="count">
        <div class="count-inner">
            <div class="count-words">
                <div class="count-title"></div>
                <div class="count-info"></div>
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
        max-width: 1160px;
        margin: 0 auto;
        .count-words {
            display: flex;
            flex-flow: row;
        }
    }
}
</style>
