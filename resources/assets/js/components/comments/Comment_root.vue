<template>
    <div style="margin-top: 20px;">
        <div v-for="comment in collections">
            <comment_child :post_id="post_id" :user_id="user_id" :comments="comments" :comment="comment" :collections="collections"></comment_child>
        </div>
    </div>

</template>
<script>
    import Comment_child from './Comment_child'
    export default{
        components: {
            Comment_child
        },
        props:['collections','comments','user_id','post_id'],
    }
</script>