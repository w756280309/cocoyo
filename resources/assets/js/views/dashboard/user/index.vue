<template>
    <body-header :name="name" :action_add="action_add" :add_to_url="add_to_url"></body-header>
</template>

<script>
    import  bodyHeader from '../../../components/dashboard/body/header'
    export default {
        components : {
            bodyHeader
        },
       data() {
            return {
                name : '用户列表',
                add_to_url : '/',
                action_add: true
            }
       }
    }
</script>

<style scoped>

</style>