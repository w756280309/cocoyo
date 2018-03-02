<template>
    <div>
        <h1>hello world</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "main",
        created() {
            console.log('asd')
        }
    }
</script>

<style scoped>

</style>