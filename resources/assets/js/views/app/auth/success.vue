<template>
    <div>
        <h1>qq授权登录成功</h1>
    </div>
</template>

<script>
    import {setSocialiteToken} from '@/utils/auth'
    export default {
        data() {},
        beforeCreate() {
            setSocialiteToken(this.$route.query.access_token)
        }
    }
</script>

<style scoped>

</style>