<template>
    <div class="home">
        <core-appbar></core-appbar>
        <core-view></core-view>
        <core-footer></core-footer>
    </div>
</template>

<script>
export default {
    name: 'Home',

    components: {
        CoreAppbar: () => import('@/components/core/Appbar.vue'),
        CoreView: () => import('@/components/core/View.vue'),
        CoreFooter: () => import('@/components/core/Footer.vue'),
    },
};
</script>
