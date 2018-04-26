<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md3>
                    <div class="box">
                        <div class="padding-md">
                            <Menu active-name="1" theme="light" class="text-xs-center user-sidebar">
                                <router-link :to="'/users/' + name + '/edit'" style="color: #495060;">
                                    <MenuItem name="1">
                                        <Icon type="card"></Icon>
                                        个人信息
                                    </MenuItem>
                                </router-link>
                                <router-link :to="'/users/' + name + '/edit_avatar'" style="color: #495060;">
                                    <MenuItem name="2">
                                        <Icon type="images"></Icon>
                                        修改头像
                                    </MenuItem>
                                </router-link>
                                <router-link :to="'/users/' + name + '/edit_email_notify'" style="color: #495060;">
                                    <MenuItem name="3">
                                        <Icon type="android-notifications"></Icon>
                                        消息通知
                                    </MenuItem>
                                </router-link>
                                <router-link :to="'/users/' + name + '/edit_password'" style="color: #495060;">
                                    <MenuItem name="4">
                                        <Icon type="locked"></Icon>
                                        修改密码
                                    </MenuItem>
                                </router-link>
                            </Menu>
                        </div>
                    </div>
                </v-flex>
                <v-flex md9 style="padding-left: 15px;">
                    <div class="panel panel-default padding-md">
                        <div class="panel-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        computed: {
            name() {
                return this.$route.params.name
            }
        }
    }
</script>

<style scoped>
    @import "../styles/user.less";
</style>