<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
<style lang="scss">
html {
    scroll-behavior: smooth;
}
.v-application ul,
.v-application ol {
    padding: 0px !important;
}
a,
ul,
li {
    text-decoration: none;
    list-style: none;
}
* {
    margin: 0;
    padding: 0;
    // font-family: 'NEXONFootballGothicLA1';
    font-family: NotoSans-regular, sans-serif;
}
</style>
