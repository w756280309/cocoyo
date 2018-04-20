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
                                    <v-btn color="warning" style="margin-left: -2px;" small v-if="user_edit">编辑资料</v-btn>
                                    <v-btn :color="follow ? 'teal' : 'error'" style="margin-left: -2px;" small v-if="follow">{{ follow ? '关注中' : '关注' }}</v-btn>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex md5 offset-md2>
                            <v-layout row wrap>
                                <v-flex md4>
                                    <div class="experience">
                                        <h4 class="experience-count">
                                            {{ user.followings_count }}
                                            <span>关注</span></h4>
                                    </div>
                                </v-flex>
                                <v-flex md4>
                                    <div class="experience">
                                        <h4 class="experience-count">
                                            {{ user.comments_count }}
                                            <span>评论数</span></h4>
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
                                    <Icon size="15" type="earth"></Icon>
                                </a>
                            </span>
                            <span class="banner-profile__github" v-if="user.github_name">
                                <a :href="'https://github.com/' + user.github_name" title="github">
                                    <Icon size="15" type="chatbubble"></Icon>
                                </a>
                            </span>
                        </div>
                        <ul>
                            <li><a aria-current="false" href="/profile/"  class="active__1IwF">
                                <Icon size="15" type="chatbubble"></Icon>&nbsp;&nbsp;&nbsp; Ta发表的回复</a>
                            </li>
                            <li>
                                <a aria-current="false" href="/profile/points/">
                                    <Icon size="15" type="happy-outline"></Icon>&nbsp;&nbsp;&nbsp; Ta关注的用户</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content-toggled__1rll content__2Ok3">
                    <div class="container__PZyq">
                        <div class="section__3bS4">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Icon,Button } from 'iview'
    export default {
        components: {
            Icon,
            Button
        },
        data() {
            return {
                user:{}
            }
        },
        computed: {
            is_login() {
                return this.$store.state.user.token ? true : false
            },
            user_edit() {
                if (this.is_login && (this.$store.state.user.userinfo.id == this.user.id)) {
                    return true;
                }

                return false;
            },
            follow() {
                if (this.is_login && ! (this.$store.state.user.userinfo.id == this.user.id)) {
                    return this.user.is_following
                }

                return false
            }
        },
        created() {
            this.$http.get('users/' + this.$route.params.name).then((response) => {
                this.user = response.data
            })
        }
    }
</script>

<style lang="less">
    @import "../styles/index.less";
</style>