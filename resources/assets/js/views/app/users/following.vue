<template>
    <div>
        <div v-if="follows.length">
            <div class="section__3bS4" v-for="(follow, index) in follows">
                <router-link :to="'/users/' + follow.name">
                    <img :src="follow.avatar"
                         class="avatar img-circle" style="width: 40px; height: 40px; background: rgb(255, 255, 255); padding: 3px; border: 1px solid rgb(197, 197, 197);">
                    {{ follow.name }}
                </router-link>
                <span class="introduction">
                    - {{ follow.description }}
                </span>
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
                follows: []
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
                this.$http.get('users/' + this.$route.params.name + '/following').then((response) => {
                    this.follows = response.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>