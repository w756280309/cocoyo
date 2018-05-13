<template>
    <div style="margin-top: 20px;">
        <div v-for="(comment, key) in collections">
            <comment_child
                    :commentable_id="commentable_id"
                    :comment_key="key"
                    :user_id="user_id"
                    :commentable_type="commentable_type"
                    :canComment="canComment"
                    :comments="comments"
                    :comment="comment">
            </comment_child>
        </div>
    </div>

</template>
<script>
    export default{
        props:['collections','comments','user_id','commentable_id', 'commentable_type', 'canComment']
    }
</script>