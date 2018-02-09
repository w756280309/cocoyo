<template>
    <div class="drawer_nav">
        <el-menu class="el-menu-vertical" :collapse="collapse" :default-active="$route.path">
            <el-menu-item index="7">
                <div class="logo">
                    <img src="/images/logo.png" alt="logo">
                </div>
            </el-menu-item>
            <el-menu-item index="4" @click="toggle">
                <i class="el-icon-menu"></i>
                <span slot="title">收放自如</span>
            </el-menu-item>

            <router-link v-for="(menu, index) in menus" :key="index" :to="menu.uri">
                <el-menu-item  :index="menu.uri">
                    <icon class="el-icon-menu" :name="menu.icon"></icon>
                    <span slot="title">{{ menu.label }}</span>
                </el-menu-item>
            </router-link>


        </el-menu>
    </div>
</template>


<script>
    import menus from "@/config/menu.js";

    export default {
        data() {
            return {
                menus: menus,
            }
        },
        computed: {
            collapse() {
                return this.$store.getters.opened
            }
        },
        methods: {
            toggle() {
                this.$store.commit('modifyOpen')
            }
        }
    }
</script>

<style scoped>
    .drawer_nav{
        position: fixed;
        height: 100%;
    }
    .logo{
        padding: 10px;
    }
    .el-menu-vertical {
        height: 100%;
        overflow: auto;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 266px;
    }
</style>