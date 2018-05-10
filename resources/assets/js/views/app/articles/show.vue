<template>
    <v-content class="main-content">
        <v-container grid-list-xl class="container-show" id="article">
            <v-layout row wrap>
                <v-flex md10 offset-md1>
                    <h1 class="article-title">{{ article.title }}</h1>
                    <div class="meta" style="text-align: center;">
                        <div class="user-card size60">
                            <a href="https://www.cocoyo.xin/user/cocoyo" class="avatar">
                                <img :src="article.user.avatar" class="img-circle" style="width: 30px; height: 30px;">
                            </a>
                            <h4>
                                <router-link :to="'/users/' + article.user.name">{{ article.user.nickname ? article.user.nickname : article.user.name }}</router-link>
                            </h4>
                            <time>发表于 {{ article.published_individualization }}</time>
                        </div>
                        <div class="actions" v-for="(tag, index) in article.tags">
                            <a href="javascript:;" class="btn-comment">
                                <v-icon size="10px">fas fa-tag</v-icon>
                            </a>
                            <a href="https://www.cocoyo.xin/tag/windows">{{ tag.tag }}</a>
                        </div>
                    </div>
                    <v-card>
                        <v-card-text class="markdown elevation-8" style="padding: 15px 20px 1px 30px;">
                            <div v-html="article.content_html" v-highlight>
                                {{ article.content_html }}
                            </div>
                            <license :name="article.user.nickname ? article.user.nickname : article.user.name"
                                     :is_original="is_original"></license>
                        </v-card-text>
                    </v-card>

                    <!--<comments :username="username"-->
                              <!--:user-avatar="avatar"-->
                              <!--:user-id="user_id"-->
                              <!--commentable-type="App\Models\Article"-->
                              <!--:commentable-id="commentable_id"-->
                              <!--:can-comment="can_comment"-->
                              <!--v-if="loading_comments"-->
                    <!--&gt;</comments>-->
                    <comment :user_id="1" :comments="collections" :post_id="1" :collections="root"></comment>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import license from '@/components/license'
    import Comment from '@/components/comments/Comment_Post'

    export default {
        components: {
            license,
            Comment
        },
        data() {
            return {
                article: {
                    user: {}
                },
                is_original: false,
                commentable_id: 0,
                loading_comments: false,
                collections: [{
                    "id": 2,
                    "user_id": 3,
                    "post_id": 1,
                    "parent_id": 1,
                    "body": "哈哈哈哈",
                    "created_at": "2017-08-17 11:53:01",
                    "updated_at": "2017-08-17 11:53:01",
                    "level": 1,
                    "owner" : {
                        "id": 3,
                        "name": "Norwood Bogan",
                        "email": "orion72@example.org",
                        "created_at": "2017-08-17 23:59:41",
                        "updated_at": "2017-08-17 23:59:41"
                    }
                }],
                root: [{
                    "id": 1,
                    "user_id": 2,
                    "post_id": 1,
                    "parent_id": null,
                    "body": "这是一条评论\n",
                    "created_at": "2017-08-17 10:58:00",
                    "updated_at": "2017-08-17 10:58:00",
                    "level": 0,
                    "owner" : {
                        "id": 2,
                        "name": "LaravelChen",
                        "email": "848407695@qq.com",
                        "created_at": "2017-08-17 14:48:40",
                        "updated_at": "2017-08-17 14:48:40"
                    }
                }]
            }
        },
        computed: {
            username() {
                if (this.$store.state.user.token) {
                    return this.$store.state.user.userinfo.name;
                }
                return ''
            },
            avatar() {
                if (this.$store.state.user.token) {
                    console.log(this.$store.state.user.userinfo.avatar)
                    return this.$store.state.user.userinfo.avatar
                }
                return ''
            },
            user_id() {
                if (this.$store.state.user.token) {
                    return this.$store.state.user.userinfo.id
                }
            },
            can_comment() {
                return this.$store.state.user.token ? true : false
            }
        },
        created() {
            this.$http.get('/articles/' + this.$route.params.slug).then((response) => {
                this.article = response.data;
                this.is_original = response.data.is_original == 1 ? true : false;
                this.commentable_id = this.article.id
                this.loading_comments = true
            })
        }
    }
</script>

<style scoped lang="less">
    @import "~highlight.js/styles/atom-one-dark.css";
    @import "styles/index.less";
</style>



