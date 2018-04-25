<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md3>
                    <div class="box">
                        <div class="padding-md">
                            <Menu active-name="1" theme="light">
                                <router-link to="/" style="color: #495060;">
                                    <MenuItem name="1">
                                        <Icon type="chatbubbles"></Icon>
                                        个人信息
                                    </MenuItem>
                                </router-link>
                                <router-link to="/" style="color: #495060;">
                                    <MenuItem name="2">
                                        <Icon type="happy-outline"></Icon>
                                        修改头像
                                    </MenuItem>
                                </router-link>
                                <router-link to="/" style="color: #495060;">
                                    <MenuItem name="3">
                                        <Icon type="happy-outline"></Icon>
                                        消息通知
                                    </MenuItem>
                                </router-link>
                                <router-link to="/" style="color: #495060;">
                                    <MenuItem name="4">
                                        <Icon type="happy-outline"></Icon>
                                        修改密码
                                    </MenuItem>
                                </router-link>
                            </Menu>
                        </div>
                    </div>
                </v-flex>
                <v-flex md9 style="padding-left: 15px;">
                    <router-view></router-view>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "side-bar"
    }
</script>

<style scoped>
    .box {
        background-color: #fff;
        padding: 10px;
        margin: 0 0 20px 0;
        -webkit-box-shadow: 0 0.2em 0 0 #ddd, 0 0 0 1px #ddd;
        box-shadow: 0 0.2em 0 0 #ddd, 0 0 0 1px #ddd;
    }
    .padding-md {
        padding: 15px;
    }
</style>