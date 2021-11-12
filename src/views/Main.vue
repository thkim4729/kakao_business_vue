<template>
    <div class="main" id="main">
        <visual id="visual"></visual>
        <count id="count"></count>
        <ecosystem id="ecosystem"></ecosystem>
        <business id="start"></business>
        <info id="info"></info>

        <!-- <div id="top" data-aos="fade-in">
            <v-btn small fab dark color="#132448" @click="scrollToTop()">
                <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
        </div> -->
        <!--top-->
    </div>
</template>

<script>
export default {
    name: 'Main',
    components: {
        Visual: () => import('@/components/main/Visual.vue'),
        Count: () => import('@/components/main/Count.vue'),
        Ecosystem: () => import('@/components/main/Ecosystem.vue'),
        Business: () => import('@/components/main/Business.vue'),
        Info: () => import('@/components/main/Info.vue'),
    },
    computed: {},
    data() {
        return {};
    },
    mounted() {
        // document.querySelector('#core-view').addEventListener('scroll', (el) => {
        //     console.log('scrolltop: ', el.target.scrollTop);
        //     let scrollTop = el.target.scrollTop;
        //     this.$refs.about.scrollCallbackProgressAnimationStart(scrollTop);
        // });
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css?family=poppins:300,400,500,600,700,800,900&display=swap');

#top {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 100000;
}
</style>
