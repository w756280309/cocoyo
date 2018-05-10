<template>
    <div class="ui threaded comments trigger">
        <v-flex md12 class="comment">
            <a class="avatar avatar-large"><img width="60px" src="/images/default_avatar.png" class="b-lazy b-loaded"></a>
            <div :class="{ padding : show_level }" class="comment_content">

                <a href="/user/Tomoe" class="author">{{comment['owner'].name}}</a>

                <div class="metadata">
                    <span class="date" style="font-weight: 700;">
                    1年前
                    </span>
                </div>
                <div class="text Post-body">
                    <div style="margin-top: 2px;">
                        <div>
                            <p>{{comment.body}} 😃</p>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <a class="reply" v-if="get_is_show_reply()" @click="show_relpy">
                        回复
                    </a>
                </div>

                <div v-show="is_show" style="margin-top: 10px;">
                    <Form>
                        <FormItem>
                            <Input v-model="comment_content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">立即回复</Button>
                            <Button type="ghost" @click="show_relpy()" style="margin-left: 8px">取消回复</Button>
                        </FormItem>
                    </Form>
                    <!--<form >-->
                        <!--<div class="form-group">-->
                            <!--<textarea v-model="" id="body" name="body" class="form-control" required="required"></textarea>-->
                        <!--</div>-->
                        <!--<button type="submit" class="btn btn-success">立即回复</button>-->
                        <!--<button  type="submit" class="btn btn-default">取消回复</button>-->
                    <!--</form>-->
                </div>
                <div v-if="is_follow()">
                    <comment_root :post_id="post_id" :user_id="user_id" :collections="get_child_list()"
                                  :comments="real_comments"></comment_root>
                </div>

                <!--<v-btn to="/login" block style="background-color:#F96854 !important;color: #fff !important;" v-if="!canComment" dark>登陆发表评论</v-btn>-->
            </div>
        </v-flex>
    </div>
</template>

<script>
    import Comment_root from './Comment_root'
    export default {
        components: {
            Comment_root
        },
        props:['comment','comments','user_id','post_id'],
        data() {
            return {
                canComment:false,
                show_level:true,
                is_show:false,
                comment_content:'',
                real_comments:this.comments,
            }
        },
        mounted(){
            if(this.comment.level >2){
                this.show_level=false;
            }else{
                this.show_level=true;
            }
        },
        methods: {
            show_relpy(){
                this.is_show=!this.is_show;
            },
            is_follow(){
                if(typeof(this.comments[this.comment.id])=='undefined'){
                    return false;
                }
                return true;
            },
            get_child_list(){
                return this.comments[this.comment.id];
            },
            get_is_show_reply(){
                return this.user_id!=this.comment['owner'].id;
            },
            post_comment(){
                axios.post('/post/'+this.post_id+'/comments',{'parent_id':this.comment.id,'body':this.comment_content}).then((response)=>{
                    if(response.data.success){
                        this.comment_content='';
                        this.is_show=!this.is_show;
                        if(typeof(this.real_comments[''+response.data.reply_block.parent_id])!='undefined'){
                            this.real_comments[response.data.reply_block.parent_id].push(response.data.reply_block);
                        }else{
                            this.real_comments[this.comment.id]=new Array();
                            this.real_comments[this.comment.id].push(response.data.reply_block);
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .ui.comments:last-child {
        margin-bottom: 0;
    }
    .ui.comments:first-child {
        margin-top: 0;
    }
    .ui.comments {
        font-size: 1em;
    }
    .ui.comments {
        margin: 1.5em 0;
        padding-bottom: 30px;
    }
    .comments {
        clear: both;
    }
    .ui.comments .comment:first-child {
        margin-top: 0;
        padding-top: 0;
    }
    .ui.comments .comment {
        position: relative;
        background: none;
        margin: .5em 0 0;
        padding: .5em 0 0;
        border: none;
        border-top: none;
        line-height: 1.2;
    }
    .ui.comments .comment .avatar.avatar-large {
        width: 3.5em;
    }
    .ui.comments .comment .avatar {
        display: block;
        width: 3em;
        height: auto;
        float: left;
        margin: .2em 0 0;
    }
    .ui.comments .comment .avatar img, .ui.comments .comment img.avatar {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        border-radius: .25rem;
    }
    .ui.comments .comment>.avatar.avatar-large~.comment_content {
        margin-left: 4.5em;
    }
    .ui.comments .comment a.author:hover {
        color: #15b982;
    }
    .ui.comments .comment a.author {
        cursor: pointer;
    }
    .ui.comments .comment .author {
        font-size: 1em;
        color: #15b982;
        font-weight: 700;
    }
    .ui.comments .comment .metadata {
        display: inline-block;
        margin-left: .5em;
        color: rgba(0, 0, 0, .4);
        font-size: .875em;
    }
    .ui.comments .comment .metadata>* {
        display: inline-block;
        margin: 0 .5em 0 0;
    }
    .ui.comments .comment .text {
        margin: .25em 0 .5em;
        font-size: 1em;
        word-wrap: break-word;
        color: rgba(0,0,0,.87);
        line-height: 1.3;
    }
    .Post-body {
        font-size: 18px;
        line-height: 1.6;
        position: relative;
        overflow: auto;
    }
    .ui.comments .comment .actions {
        font-size: .9em;
        font-weight: 600;
    }
    .ui.comments .comment .actions a {
        cursor: pointer;
        display: inline-block;
        margin: 0 .75em 0 0;
        color: rgba(0,0,0,.4);
    }
</style>