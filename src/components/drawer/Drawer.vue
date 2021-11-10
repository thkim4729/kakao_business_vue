<template>
    <div class="drawer">
        <v-navigation-drawer :absolute="absolute" :value="isDrawer" temporary class="drawer-box">
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: 'Drawer',
    components: {},
    computed: {
        form() {
            return {};
        },
    },
    data() {
        return {
            absolute: false,
            group: null,
        };
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss">
.drawer-box {
}
</style>
