<template>
    <div class="drawer_nav">
        <el-menu default-active="1-4-1" class="el-menu-vertical" :collapse="collapse">
            <el-menu-item index="7">
                <div style="padding:10px">
                    <img src="/images/logo.png" alt="logo">
                </div>
            </el-menu-item>
            <el-menu-item index="4" @click="toggle">
                <i class="el-icon-menu"></i>
                <span slot="title">收放自如</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>


<script>
    import menus from "@/config/menu.js";
    import { mapActions } from 'vuex';
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
        height: 51px;
        position: relative;
        padding: 28px 32px 0 22px;
        background: #fff;
    }
    .el-menu-vertical {
        height: 100%;
        overflow: auto;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 266px;
    }
</style>