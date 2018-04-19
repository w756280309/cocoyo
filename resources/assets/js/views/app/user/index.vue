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
                                    <img src="https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/users/ningge123/avatar_1523873317.png" alt="Avatar" class="avatar__2sMj">
                                </a>
                            </div>
                        </v-flex>
                        <v-flex md3>
                            <div class="user-info__2aLr">
                                <div class="header">
                                    coco-ning
                                </div>
                                <div class="description">
                                    一个快乐的极客！！
                                </div>
                                <div class="edit">
                                    <v-btn color="error" style="margin-left: -2px;">编辑资料</v-btn>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex md5 offset-md2>
                            <v-layout row wrap>
                                <v-flex md4>
                                    <div class="experience">
                                        <h4 class="experience-count">
                                        1
                                        <span>关注</span></h4>
                                    </div>
                                </v-flex>
                                <v-flex md4>
                                    <div class="experience">
                                        <h4 class="experience-count">
                                            5
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
                            <span class="banner-profile__github">
                                <a href="" title="微博">
                                    <Icon size="15" type="chatbubble"></Icon>
                                </a>
                            </span>
                            <span class="banner-profile__github">
                                <a href="" title="微博">
                                    <Icon size="15" type="chatbubble"></Icon>
                                </a>
                            </span>
                            <span class="banner-profile__github">
                                <a href="" title="微博">
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
                            <a href="https://www.cocoyo.xin/the-use-of-browsersync">Browsersync的使用</a>
                            <span class="meta">在 <span class="timeago">2周前</span></span>
                            <div class="markdown">

                            </div>
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
        created() {
            this.$http.get('users/' + this.$route.params.name).then((response) => {
                console.log(response)
            })
        }
    }
</script>

<style lang="less">
    @import "styles/index.less";
</style>