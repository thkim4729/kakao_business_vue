<template>
    <div class="home">
        <core-appbar></core-appbar>
        <div class="null"></div>
        <core-view></core-view>
        <core-footer></core-footer>
        <!-- <drawer></drawer> -->
    </div>
</template>

<script>
export default {
    name: 'Home',

    components: {
        CoreAppbar: () => import('@/components/core/Appbar.vue'),
        CoreView: () => import('@/components/core/View.vue'),
        CoreFooter: () => import('@/components/core/Footer.vue'),
        // Drawer: () => import('@/components/drawer/Drawer.vue'),
    },
};
</script>
<style lang="scss">
.null {
    height: 56px;
}
</style>
