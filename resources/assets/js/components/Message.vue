<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md3>
                    <div class="box">
                        <div class="padding-md">
                            <Menu active-name="1" theme="light" class="text-xs-center user-sidebar">
                                <router-link to="/" style="color: #495060;">
                                    <MenuItem name="1">
                                        <Icon type="android-notifications"></Icon>
                                        通知消息
                                    </MenuItem>
                                </router-link>
                            </Menu>
                        </div>
                    </div>
                </v-flex>
                <v-flex md9 style="padding-left: 15px;">
                    <div class="panel panel-default padding-md">
                        <div class="panel-body" style="font-size: 14px;color: #000;">
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