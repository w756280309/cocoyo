<template>
    <div class="drawer_nav">
        <div class="current_team">
            <div class="title_box">
                <img src="/images/logo.png" alt="logo">
            </div>
        </div>

        <div class="action_list">
            <el-menu :default-active="$route.path" class="el-menu-vertical">
                <router-link v-for="(menu, key) in menus" :key="key" :to="menu.uri">
                    <el-menu-item :index="menu.uri">
                        <i :class="menu.icon"></i>
                        <span>{{ menu.label }}</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </div>
    </div>
</template>


<script>
    import menus from "../../../config/menu.js";

    export default {
        data() {
            return {
                menus: menus,
                user: {},
            }
        },
        mounted() {
            this.user = {
                avatar: 'https://image.cocoyo.xin/IMG_0347.PNG',
                name: 'cocoyo',
                email: '2430114823@qq.com'
            }
        },
        computed: {
            userInfo() {
                return '/user/' + this.user.name
            }
        },
        methods: {
            logout() {
            }
        }
    }
</script>

<style scoped>
    .drawer_nav {
        width: 266px;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        background: white;
        white-space: nowrap;
        overflow: hidden;
        transition: all ease 500ms;
        float: left;
        overflow-y: visible;
    }
    .drawer_nav::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    .drawer_nav::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .drawer_nav::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }
    .drawer_nav .current_team {
        height: 51px;
        position: relative;
        padding: 28px 32px 0 22px;
    }

    .drawer_nav .current_team .title_box {
        width: 230px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }

    .drawer_nav .team_name {
        width: 220px;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        color: #0E1726;
        line-height: 28px;
        word-wrap: break-word;
    }

    .drawer_nav .action_list {
        height: 210px;
        margin-top: 16px;
        position: relative;
    }

    .el-menu li{
        height: 64px;
        line-height: 64px;
        font-size: 16px;
    }
    .el-menu-item i {
        color: #909399;
        margin-right: 15px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
    }
    .mu-avatar img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display: block;
    }
</style>