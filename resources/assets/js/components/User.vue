<template>
    <div class="base_content">
        <div class="profile-app__KJyN">
            <div class="header__NyBc">
                <div class="bg-wrapper__teZt">
                    <div class="background__26YF"></div>
                </div>
                <div class="container container__28Ei">
                    <v-layout row wrap>
                        <v-flex md2>
                            <div class="avatar-base__19M6">
                                <a>
                                    <img :src="user.avatar" alt="Avatar" class="avatar__2sMj">
                                </a>
                            </div>
                            <div style="color: #aaa;margin: 5px 0 0 0;text-align:center;">
                                最后活跃于{{ user.last_actived_at }}
                            </div>
                        </v-flex>
                        <v-flex md3>
                            <div class="user-info__2aLr">
                                <div class="header">
                                    {{ user.name }}
                                </div>
                                <div class="description">
                                    {{ user.description }}
                                </div>
                                <div class="action" v-if="is_login">
                                    <span>
                                          <v-btn color="warning" style="margin-left: -2px;" small v-if="user_edit" :to="'/users/' + name + '/edit'">编辑资料</v-btn>
                                    </span>
                                  <span>
                                       <v-btn :color="user.is_following ? 'teal' : 'error'" style="margin-left: -2px;" small v-if="is_me" @click="following(user.id)">{{ user.is_following ? '关注中' : '关注' }}</v-btn>
                                  </span>

                                </div>
                                <div class="action" v-else>
                                    <v-btn color="error" style="margin-left: -2px;" small to="/login">关注</v-btn>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex md5 offset-md2>
                            <v-layout row wrap>
                                <v-flex md4>
                                    <div class="experience">
                                        <count-up :id-name="followings_name" :end-val="user.followings_count">
                                            <span slot="intro">关注</span>
                                        </count-up>
                                    </div>
                                </v-flex>
                                <v-flex md4>
                                    <div class="experience">
                                        <count-up :id-name="comments_name" :end-val="user.comments_count">
                                            <span slot="intro">评论数</span>
                                        </count-up>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
            </div>
            <div class="container nav-toggled__oxhf nav__2IK2">
                <div class="side__1bvU">
                    <div class="sidebar-base__2RIZ">
                        <div class="header__2nTK">
                            <span class="banner-profile__twitter">
                                <a href="javascript:;" title="注册用户">
                                    <Icon size="15" type="social-vimeo"></Icon>
                                </a>
                            </span>
                            <span class="banner-profile__github" v-if="user.website">
                                <a :href="user.website" title="个人网站">
                                    <Icon size="15" type="ios-world"></Icon>
                                </a>
                            </span>
                            <span class="banner-profile__github" v-if="user.github_name">
                                <a :href="'https://github.com/' + user.github_name" title="github">
                                    <Icon size="15" type="social-github"></Icon>
                                </a>
                            </span>
                        </div>
                        <div>
                            <Menu active-name="1" theme="light">
                                <router-link :to="'/users/' + name" style="color: #495060;">
                                    <MenuItem name="1">
                                        <Icon type="chatbubbles"></Icon>
                                        Ta发表的回复
                                    </MenuItem>
                                </router-link>
                                <router-link :to="'/users/' + name + '/following'" style="color: #495060;">
                                    <MenuItem name="2">
                                        <Icon type="happy-outline"></Icon>
                                        Ta关注的用户
                                    </MenuItem>
                                </router-link>
                                <router-link :to="'/users/' + name + '/notifications'" style="color: #495060;">
                                    <MenuItem name="3">
                                        <Icon type="happy-outline"></Icon>
                                        我的消息提醒
                                    </MenuItem>
                                </router-link>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div class="content-toggled__1rll content__2Ok3">
                    <div class="container__PZyq">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countUp from '@/components/countUp.vue';

    export default {
        components: {
            countUp
        },
        data() {
            return {
                user:{
                    followings_count: 0,
                    comments_count: 0,
                    is_following: false
                },
                comments_name: 'comments_name',
                followings_name: 'followings_name',
            }
        },
        computed: {
            name() {
                return this.$route.params.name
            },
            is_login() {
                return this.$store.state.user.token ? true : false
            },
            user_edit() {
                if (this.is_login && (this.$store.state.user.userinfo.id == this.user.id)) {
                    return true;
                }
            },
            is_me() {
                if (this.is_login && ! (this.$store.state.user.userinfo.id == this.user.id)) {
                    return true
                }

            }
        },
        watch: {
            '$route' (to, from) {
                this.loadData()
            }
        },
        created() {
           this.loadData()
        },
        methods: {
            following(id) {
                this.$http.post('users/' + id + '/follow').then((response) => {
                    return this.user.is_following = ! this.user.is_following
                })
            },
            loadData() {
                this.$http.get('users/' + this.$route.params.name).then((response) => {
                    this.user = response.data
                })
            }
        },
    }
</script>

<style lang="less" scope>
    @import "../styles/index.less";
</style>