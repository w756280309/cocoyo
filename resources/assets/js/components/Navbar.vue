<template>
    <v-toolbar style="box-shadow: 0 3px 8px -4px rgba(0,0,0,0.15);background-color: #fff;z-index:999">
        <v-container style="padding: 0;height: 100%;">
            <router-link to="/" class="uk-navbar-brand">
                <img src="/images/logo.png" class="avatar" alt="logo">
            </router-link>
            <div class="uk-navbar-flip uk-hidden-small" v-if="is_login">
                <div class="uk-navbar-content">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            {{ name }}
                            <Icon type="arrow-down-b"></Icon>
                            <b class="caret"></b>&nbsp;&nbsp;
                            <img :src="avatar" class="avatar img-circle" style="width: 40px;height: 40px;background: #fff;padding: 3px;border: 1px solid #c5c5c5;">
                        </a>
                        <DropdownMenu slot="list">
                            <router-link :to="'/users/' + name">
                                <DropdownItem>
                                    <Icon type="person"></Icon>&nbsp;&nbsp;<span>个人中心</span>
                                </DropdownItem>
                            </router-link>
                            <DropdownItem>
                                <router-link to="/">
                                    <Icon type="gear-a"></Icon>&nbsp;&nbsp;<span>个人设置</span>
                                </router-link>
                            </DropdownItem>
                            <DropdownItem disabled>
                                <Icon type="university"></Icon>&nbsp;&nbsp;<span>我的小说</span>
                            </DropdownItem>
                            <DropdownItem @cilck="logout">
                                <Icon type="log-out"></Icon>&nbsp;&nbsp;<span>退出登录</span>
                            </DropdownItem>
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

            }
        },
        computed: {
            is_login() {
                return this.$store.state.user.token ? true : false
            },
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
        },
        methods: {
            logout() {
                this.$store.commit('logout')
                return this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
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