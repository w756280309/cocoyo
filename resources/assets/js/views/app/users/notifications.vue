<template>
    <div>
        <h2><Icon type="android-notifications"></Icon> 我的提醒</h2>
        <hr>
        <div v-for="notification in notifications">
            <div v-if="notification.type == 'followed-user-notification'">
                <followed-user :name="notification.data.name"
                               :avatar="notification.data.avatar"
                               :created_diff="notification.created_diff"
                ></followed-user>
            </div>
        </div>
    </div>
</template>

<script>
    import FollowedUser from './followed_user'
    export default {
        components: {
            FollowedUser
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
</style>