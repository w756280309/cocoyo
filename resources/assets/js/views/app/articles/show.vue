<template>
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
                            <a href="">{{ article.user.nickname ? article.user.nickname : article.user.name }}</a>
                        </h4>
                        <time>发表于 {{ article.published_individualization }}</time>
                    </div>
                    <div class="actions">
                        <a href="javascript:;" class="btn-comment">
                            <i class="ion-pricetag"></i>
                        </a>
                        <a href="https://www.cocoyo.xin/tag/windows">windows</a>
                    </div>
                </div>
                <v-card>
                    <v-card-text class="markdown elevation-8" style="padding: 15px 20px 1px 30px;">
                        <div v-html="article.content_html">
                            {{ article.content_html }}
                        </div>
                        <license :name="article.user.nickname ? article.user.nickname : article.user.name" :is_original="is_original"></license>
                    </v-card-text>
                </v-card>

                <comments username="cocoyo"
                          user-avatar="https://image.cocoyo.xin/IMG_0347.PNG"
                          commentable-type="App\Models\Article"
                          :commentable-id="49"
                          can-comment></comments>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import hljs from 'highlight.js'
    import license from '@/components/license'
    import Comments from '@/components/Comments'

    const highlightCode = () => {
        const preEl = document.querySelectorAll('pre');
        preEl.forEach((el) => {
            hljs.highlightBlock(el)
        })
    }

    export default {
        components: {
            license,
            Comments
        },
        data() {
            return {
                article: {
                    user: {}
                },
                is_original: false,
            }
        },
        mounted() {
            highlightCode()
        },
        updated() {
            highlightCode()
        },
        created() {
            this.$http.get('/articles/' + this.$route.params.slug).then((response) => {
                this.article = response.data;
                this.is_original = response.data.is_original == 1 ? true : false;
            })
        }
    }
</script>

<style scoped>
    @import "~highlight.js/styles/atom-one-dark.css";
</style>



