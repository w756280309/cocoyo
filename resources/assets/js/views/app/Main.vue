<template>
    <v-app>
        <v-toolbar style="box-shadow: 0 3px 8px -4px rgba(0,0,0,0.15);background-color: #fff;z-index:999">
            <v-container style="padding: 0;height: 100%;">
                <router-link to="/" class="uk-navbar-brand">
                    <img src="/images/logo.png" alt="logo" style="padding-top: 10px;">
                </router-link>
                <div class="uk-navbar-flip uk-hidden-small" v-if="is_login">
                    <div class="uk-navbar-content">
                        <Dropdown trigger="click">
                            <a href="javascript:void(0)">
                                {{ name }}
                                <Icon type="arrow-down-b"></Icon>
                                <b class="caret"></b>&nbsp;&nbsp;
                                <img :src="avatar" class="avatar img-circle" style="width: 50px;height: 50px;">
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem>冰糖葫芦</DropdownItem>
                                <DropdownItem divided>北京烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>

                <div  class="uk-navbar-flip uk-hidden-small" v-else>
                    <div class="uk-navbar-content">
                        <router-link to="/login">
                            <v-btn class="white--text" color="indigo" >登陆</v-btn>
                        </router-link>
                    </div>
                    <div class="uk-navbar-content">
                        <router-link to="/login">
                            <v-btn depressed class="white--text" color="pink">注册</v-btn>
                        </router-link>
                    </div>
                </div>
            </v-container>

        </v-toolbar>
        <v-content class="main-content">
            <router-view></router-view>
        </v-content>
        <v-footer height="auto">
            <v-card flat tile class="lighten-1 white--text text-xs-center blue-grey darken-4" style="width: 100%">
                <v-card-text class="contact">
                    <div class="github">
                        <v-btn icon class="mx-3 white--text" @click="window.location.href='https://github.com/ningge123'">
                            <v-icon size="24px">fab fa-github</v-icon>
                        </v-btn>
                    </div>

                    <div class="qq">
                        <v-btn icon class="mx-3 white--text">
                            <v-icon size="24px">fab fa-qq</v-icon>
                        </v-btn>
                        <div class="qq-qr-code">
                            <img src="/images/qq.JPG" alt="cocoyo QQ" width="160">
                        </div>
                    </div>

                    <div class="wechat">
                        <v-btn icon class="mx-3 white--text">
                            <v-icon size="24px">fab fa-weixin</v-icon>
                        </v-btn>
                        <div class="wechat-qr-code">
                            <img src="/images/weixin.JPG" alt="cocoyo 微信" width="160">
                        </div>
                    </div>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    一个快乐的极客
                </v-card-text>
                <v-card-text class="white--text">
                    &copy;2018 — <strong>cocoyo . All rights reserved. 粤ICP备17015096号</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
    import { Dropdown, DropdownMenu, DropdownItem, Icon } from 'iview'

    export default {
        components: {
            Dropdown,
            DropdownMenu,
            DropdownItem,
            Icon
        },
        data() {
            return {
                is_login : false
            }
        },
        created() {
            if (this.$store.state.user.token) {
                this.is_login = true
            }
        },
        computed: {
            name() {
                if (this.is_login) {
                    return this.$store.state.user.userinfo.name;
                }
            },
            avatar() {
                if (this.is_login) {
                    return this.$store.state.user.userinfo.avatar;
                }
            }
        }
    }
</script>

<style>
    .uk-navbar-brand {
        font-size: 20px;
        color: #525255;
        text-decoration: none;
        box-sizing: border-box;
        display: block;
        height: 100%;
        padding: 0 15px;
        float: left;
        position: relative;
    }
    .uk-navbar-flip {
        float: right;
        height:100%;
    }
    .uk-navbar-content{
        box-sizing: border-box;
        height: 100%;
        float: left;
        position: relative;
        font-size: 14px;
    }
    .uk-navbar-content:before, .uk-navbar-brand:before, .uk-navbar-toggle:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
</style>
