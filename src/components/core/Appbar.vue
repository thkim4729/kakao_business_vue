<template>
    <div class="appbar">
        <v-card class="mx-auto overflow-hidden" tile elevation="0">
            <v-app-bar color="white" class="menu" elevation="0" rounded="false">
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
                                <v-list-item v-for="(item, i) in pc_items" :key="i">
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
                <div class="drawer-icon">
                    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                </div>
            </v-app-bar>
        </v-card>

        <v-navigation-drawer v-model="drawer" absolute temporary height="100vh" right width="300px">
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-row class="close-box" no-gutters>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        />
                        <v-spacer></v-spacer>
                        <v-btn icon large @click="drawer = false" style="margin: 0 8px 0 0">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-list-item v-for="(item, i) in m_items" :key="i" class="menu_list_m">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        pc_items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
        m_items: [
            { title: '홈' },
            { title: '채널' },
            { title: '광고' },
            { title: '서비스/도구' },
            { title: '파트너 지원' },
            { title: '서비스 전체보기' },
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
    height: 56px;
}
.v-toolbar__content {
    // height: 64px !important;
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
.close-box {
    margin-bottom: 24px;
}
.menu_list_m {
    border-bottom: 1px solid #ebebeb;
    height: 56px;
}
@media (min-width: 768px) {
    .text-center,
    .logIn {
        display: block;
    }
    .drawer-icon {
        display: none;
    }
}
</style>
