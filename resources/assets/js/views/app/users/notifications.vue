<template>
    <div>
        <h2><Icon type="android-notifications"></Icon> 我的提醒</h2>
        <hr>
        <div v-for="notification in notifications">
            <div v-if="notification.type == 'followed-user-notification'">
                <followed-user :name="notification.data.name"
                               :avatar="notification.data.avatar"
                               :created_diff="notification.created_diff"
                               :read_at="notification.read_at"
                ></followed-user>
            </div>
            <div v-if="notification.type == 'received-comment-notification'">
                <received-comment :name="notification.data.reply_user.name"
                                  :created_diff="notification.created_diff"
                                  :body="notification.data.content.html"
                                  :title="notification.data.commentable.title"
                                  :read_at="notification.read_at"
                                  :slug="notification.data.commentable.slug"
                ></received-comment>
            </div>
        </div>
    </div>
</template>

<script>
    import FollowedUser from './followed_user'
    import ReceivedComment from './received_comment'
    export default {
        components: {
            FollowedUser,
            ReceivedComment
        },
        data() {
            return {
                notifications: []
            }
        },
        created() {
            this.$http.get('notifications').then((response) => {
                this.notifications = response.data
            })
        }
    }
</script>

<style scoped>
    .section__3bS4 {
        padding: 10px 15px;
        border: none;
        margin-bottom: 0px;
        border-bottom: 1px solid #f2f2f2;
    }
    .section__3bS4 a {
        color: #15b982;
    }
</style>