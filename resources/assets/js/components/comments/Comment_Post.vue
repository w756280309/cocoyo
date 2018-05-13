<template>
    <div class="PostStream-item">
        <article class="Post EventPost DiscussionStickiedPost">
            <div>
                <Icon type="chatbubbles" class="EventPost-icon"></Icon>
                <div class="EventPost-info">
                    <a class="EventPost-user">
                        <span class="username">共{{ comment_count }}条回复</span>
                    </a>
                </div>
            </div>
        </article>

        <comment_root :commentable_id="commentableId" :canComment="canComment" :user_id="user_id" :comments="comments" :commentable_type="commentableType" :collections="root"></comment_root>

        <div v-if="! canComment">
            <v-btn to="/login"  block style="background-color:#F96854 !important;color: #fff !important;" dark>登陆发表评论</v-btn>
        </div>
      <div v-else>
          <Form>
              <FormItem>
                  <Input v-model="comment_content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"placeholder="请填写您的评论"></Input>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="post_comment">提交评论</Button>
              </FormItem>
          </Form>
      </div>

    </div>
</template>
<script>
    export default{
        props: {
            commentableId: {
                type: Number,
            },
            commentableType: {
                type: String,
                default() {
                    return 'article'
                }
            },
            user_id: {
                type: Number
            },
            canComment: {
                type: Boolean,
                default() {
                    return false
                }
            },
        },
        data(){
            return{
                comment_content:'',
                comments: {},
                root: [],
                comment_count: 0
            }
        },
        created() {
            //获取评论内容
            var url = 'commentable/' + this.commentableId + '/comment'
            this.$http.get(url, {
                params: {
                    commentable_type: this.commentableType
                }
            }).then((response) => {
                this.comments = response.data
                this.root = response.data.root
                this.comment_count = response.data.count
            })
        },
        methods:{
            post_comment(){
                if (! this.comment_content) {
                    this.$Message.error('请输入评论内容!');
                    return false;
                }
                const data = {
                    content: this.comment_content,
                    commentable_id: this.commentableId,
                    commentable_type: this.commentableType,
                }
                this.$http.post('comments', data).then((response) => {
                    this.root.push(response.data);
                    this.comment_content = '';
                    this.comment_count++
                })
            },
        },
    }
</script>

<style scoped lang="less">
    @import '../../styles/comment.less';
</style>
