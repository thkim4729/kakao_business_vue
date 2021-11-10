<template>
    <div class="appbar">
        <v-card class="mx-auto overflow-hidden">
            <v-app-bar color="white" class="menu">
                <router-link to="/" class="logo" style="color: #000">
                    <v-toolbar-title @click="reload" style="font-weight: bold">
                        kakao business
                    </v-toolbar-title>
                </router-link>

                <div class="text-center">
                    <v-btn class="menu-btn" text> 채널 </v-btn>
                    <v-menu open-on-hover offset-y v-for="(btn, i) in btns" :key="i">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="menu-btn" text v-bind="attrs" v-on="on">
                                {{ btn }}
                            </v-btn>
                        </template>

                        <v-list>
                            <a href="#">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </a>
                        </v-list>
                    </v-menu>
                </div>

                <v-spacer></v-spacer>
                <div class="logIn">
                    <v-btn text depressed outlined>로그인</v-btn>
                </div>

                <v-app-bar-nav-icon class="drawer-icon" @click="drawer = true"></v-app-bar-nav-icon>
            </v-app-bar>
        </v-card>

        <!-- <div class="null"></div> -->

        <v-navigation-drawer v-model="drawer" absolute temporary height="100vh" right width="300px">
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
    name: 'AppBar',
    data: () => ({
        drawer: false,
        group: null,
        btns: ['광고', '서비스/도구', '파트너 지원'],
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
    }),
    methods: {
        reload() {
            setTimeout(() => {
                location.reload(true);
            });
        },
    },
};
</script>
<style lang="scss">
.appbar {
    position: fixed;
    z-index: 10;
    width: 100%;
}
.menu {
    position: relative;
}
.logo {
    margin: 0 32px 0 16px;
}
.drawer-icon {
}
.menu-btn {
    font-weight: bold;
}
.text-center,
.logIn {
    display: none;
}
@media (min-width: 768px) {
    .text-center,
    .logIn {
        display: block;
    }
    .drawer-icon {
    }
}
</style>
