<template>
    <div class="drawer_nav">
        <div class="current_team">
            <div class="title_box">
                <span class="team_name" style="font-size: 20px;">我是青年</span>
            </div>
        </div>

        <div class="action_list">
            <div v-for="(menu, key) in menus" :key="key">
                <router-link :to="menu.uri">
                    <div class="mu-list">
                        <div>
                            <div class="mu-item-wrapper" tabindex="0"
                                 style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
                                <div class="" style="margin-left: 0px;">
                                    <div class="mu-ripple-wrapper"></div>
                                    <div class="mu-item show-left has-avatar">
                                        <div class="mu-item-left">
                                            <div class="mu-avatar">
                                                <div class="mu-avatar-inner">
                                                    <i :class="menu.icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mu-item-content">
                                            <div class="mu-item-text" style="max-height: 36px; -webkit-line-clamp: 2;">
                                                {{ menu.label }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
    import menus from "../../../config/menu.js";

    export default {
        data() {
            return {
                menus: menus,
                user: {}
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

    .mu-list {
        padding: 8px 0;
        width: 100%;
        position: relative;
        overflow-x: hidden;
        overflow-y: visible;
    }

    .mu-item-wrapper {
        display: block;
        color: inherit;
        position: relative;
        outline: none;
        cursor: pointer;
    }

    .mu-item-wrapper:hover {
        background-color: #ecf5ff;
        color: #66b1ff;
    }

    .mu-ripple-wrapper {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .mu-ripple-wrapper {
        overflow: hidden;
    }

    .drawer_nav .action_list .mu-item.show-left {
        padding-left: 60px;
    }

    .mu-item.has-avatar {
        min-height: 56px;
    }

    .mu-item.show-left {
        padding-left: 72px;
    }

    .mu-item {
        color: rgba(0, 0, 0, 0.87);
    }

    .mu-item {
        min-height: 48px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 16px;
        color: rgba(0, 0, 0, .87);
        position: relative;
    }

    .drawer_nav .action_list .mu-item-left {
        left: 22px;
        top: 2px;
    }

    .mu-item-left {
        color: #757575;
    }

    .mu-item-left, .mu-item-right {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        width: 40px;
        height: 100%;
        position: absolute;
        color: #757575;
        top: 0;
        max-height: 72px;
    }

    .mu-item-content {
        width: 100%;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    }

    .mu-item-text {
        color: rgba(0, 0, 0, 0.54);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        position: relative;
        overflow: hidden;
        font-size: 14px;
        line-height: 18px;
        margin-top: 4px;
        max-height: 40px;
        max-width: 100%;
        text-overflow: ellipsis;
        word-break: break-all;
        color: rgba(0, 0, 0, .54);
    }

    .drawer_nav .action_list .mu-avatar {
        background: none;
        width: 24px;
        height: 24px;
    }

    .mu-avatar {
        color: #ffffff;
        background-color: #bdbdbd;
        display: inline-block;
        height: 40px;
        width: 40px;
        font-size: 20px;
        text-align: center;
        border-radius: 50%;
    }

    .mu-avatar-inner {
        height: 100%;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .mu-avatar img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display: block;
    }
</style>