<template>
    <div class="PostStream-item">
        <article class="Post EventPost DiscussionStickiedPost">
            <div>
                <Icon type="chatbubbles" class="EventPost-icon"></Icon>
                <div class="EventPost-info">
                    <a href="" class="EventPost-user">
                        <span class="username">共24条回复</span>
                    </a>
                </div>
            </div>
        </article>

        <comment_root :post_id="post_id" :user_id="user_id" :comments="comments" :collections="comment_list"></comment_root>

        <Form>
            <FormItem>
                <Input v-model="comment_content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"placeholder="请填写您的评论"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">提交评论</Button>
            </FormItem>
        </Form>
        <!--<form method="POST" @submit.prevent="post_comment" accept-charset="UTF-8">-->
            <!--<div class="form-group">-->
                <!--<label for="comment" class="control-label">Info:</label>-->
                <!--<textarea v-model="comment_content" id="comment" name="comment" rows="4" class="form-control"-->
                          <!--placeholder="请填写您的评论"-->
                          <!--required="required"></textarea>-->
            <!--</div>-->
            <!--<button type="submit" class="btn btn-success form-control">提交评论</button>-->
        <!--</form>-->
    </div>
</template>
<script>
    import Comment_root from './Comment_root'

    export default{
        components: {
            Comment_root
        },
        props:['post_id','collections','comments','user_id'],
        data(){
            return{
                comment_content:'',
                comment_list:this.collections,
            }
        },
        methods:{
            post_comment(){
                axios.post('/post/'+this.post_id+'/comments',{'body':this.comment_content}).then((response)=>{
                    if(response.data.success){
                        this.comment_list.push(response.data.reply_block);
                        this.comment_content='';
                        console.log('asd')
                    }
                });
            },
        },
    }
</script>

<style scoped lang="less">
    @import '../../styles/comment.less';
</style>
