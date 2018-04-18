<template>
    <div>
        <v-flex md12 class="comment">
            <v-btn to="/login" block style="background-color:#F96854 !important;color: #fff !important;" v-if="!canComment" dark>登陆发表评论</v-btn>
            <v-flex md9 offset-md2>
                <div class="media" v-for="(comment, index) in comments">
                    <div class="media-left">
                        <a :href="'/user/' + comment.user.name">
                            <v-avatar class="grey lighten-4" size="60px">
                                <img :src="comment.user.avatar" alt="avatar">
                            </v-avatar>
                        </a>
                    </div>
                    <div class="media-body box-body">
                        <div class="heading">
                            <v-icon size="10px">fas fa-user</v-icon>
                            {{ comment.user.nickname ? comment.user.nickname : comment.user.name }}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <v-icon size="10px">fas fa-clock</v-icon>
                            {{ comment.created_at }}
                            <span class="pull-right operate">
                            <a href="javascript:;" @click="commentDelete(index, comment.id)" v-if="userId == comment.user.id" title="删除">
                                  <v-icon size="10px">fas fa-trash</v-icon>
                            </a>
                            <a href="javascript:;" @click="reply(comment.user.nickname ? comment.user.nickname : comment.user.name)" title="回复">
                                 <v-icon size="10px">fas fa-reply</v-icon>
                            </a>
                        </span>
                        </div>
                        <div class="comment-body markdown" v-html="comment.content_html"></div>
                    </div>
                </div>
                <v-form v-if="canComment" style="margin-top:20px">
                    <v-layout row>
                        <v-flex md2>
                            <v-subheader style="padding-top: 60px">
                                <v-avatar class="grey lighten-4" size="60px">
                                    <img :src="userAvatar" alt="avatar">
                                </v-avatar>
                            </v-subheader>
                        </v-flex>
                        <v-flex md10>
                            <textarea class="form-control"
                                      rows="5"
                                      placeholder="请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。"
                                      style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 164px;"
                                      id="reply_content" name="body" cols="50"
                                      v-model="form.content"
                            >
                            </textarea>
                            <v-layout row>
                                <v-flex md12>
                                    <v-btn dark @click="submit" large style="background-color: #15b982">发布评论</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>

                </v-form>
            </v-flex>
        </v-flex>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import { Message } from 'iview'

    const highlightCode = () => {
        const preEl = document.querySelectorAll('pre');
        preEl.forEach((el) => {
            hljs.highlightBlock(el)
        })
    }

    export default {
        props: {
            commentableId: {
                type: Number,
            },
            commentableType: {
                type: String,
                default() {
                    return 'App\Models\Article'
                }
            },
            username: {
                type: String,
                default() {
                    return ''
                }
            },
            userAvatar: {
                type: String,
                default() {
                    return ''
                }
            },
            userId: {
                type: Number
            },
            canComment: {
                type: Boolean,
                default() {
                    return false
                }
            },
        },
        data() {
            return {
                comments: [],
                form: {
                    content : ''
                },
            }
        },
        mounted() {
            var url = 'commentable/' + this.commentableId + '/comment'
            this.$http.get(url, {
                params: {
                    commentable_type: this.commentableType
                }
            }).then((response) => {
                this.comments = response.data
            })

            highlightCode()
        },
        methods: {
            submit() {
                if (! this.form.content) {
                    Message.error('请输入评论内容!');
                    return false;
                }
                const data = {
                    content: this.form.content,
                    commentable_id: this.commentableId,
                    commentable_type: this.commentableType
                }
                this.$http.post('comments', data).then((response) => {
                    this.comments.push(response.data)
                    this.form.content = ''
                })

            },
            reply(name) {
                $('#reply_content').focus()
                this.form.content = '@' + name + ' '
            },
            commentDelete(index, id) {
                this.$http.delete('comments/' + id)
                    .then((response) => {
                        Message.success('删除成功')
                        this.comments.splice(index, 1)
                    })
            }
        },
        updated() {
            highlightCode()
        },
    }
</script>

<style scoped>
    .comment{
        margin-top:20px;
    }
    .comment .avatar img{
        transition: transform .6s ease-in;
    }
    .comment .avatar:hover img{
        transform: rotateZ(360deg);
    }
    textarea {
        -webkit-appearance: textarea;
        background-color: white;
        -webkit-rtl-ordering: logical;
        flex-direction: column;
        resize: auto;
        cursor: text;
        white-space: pre-wrap;
        word-wrap: break-word;
        border-width: 1px;
        border-style: solid;
        border-color: initial;
        border-image: initial;
        padding: 2px;
        text-rendering: auto;
        color: initial;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font: 400 13.3333px Arial;
    }
    .form-control {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    }
</style>