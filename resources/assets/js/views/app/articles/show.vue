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
                                <router-link style="color: #15b982;" :to="'/users/' + article.user.name">{{ article.user.nickname ? article.user.nickname : article.user.name }}</router-link>
                            </h4>
                            <time style="vertical-align: middle;font-size: 12px;color: #9b9b9b;">发表于 {{ article.published_individualization }}</time>
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

                    <div v-if="commentable_id">
                        <comment_post :canComment="can_comment" :user_id="user_id" :username="username" :commentableId="commentable_id"></comment_post>
                    </div>

                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import license from '@/components/license'

    export default {
        components: {
            license,
        },
        data() {
            return {
                article: {
                    user: {}
                },
                is_original: false,
                commentable_id: 0,
                commentableType: 'article',
                comment_count: 0
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
            })
        }
    }
</script>

<style scoped lang="less">
    @import "~highlight.js/styles/atom-one-dark.css";
    @import "styles/index.less";
</style>



