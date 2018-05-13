<template>
    <div>
        <div v-if="notifications.length">
            <div class="section__3bS4" v-for="(notification, index) in notifications">

            </div>
        </div>

        <div style="text-align:center" v-else>
            <img src="/images/following.png">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notifications: []
            }
        },
        watch: {
            '$route' (to, from) {
                this.loadData()
            }
        },
        created() {
           this.loadData()
        },
        methods: {
            loadData() {
                this.$http.get('users/' + this.$route.params.name + '/notifications').then((response) => {
                    this.notifications = response.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>