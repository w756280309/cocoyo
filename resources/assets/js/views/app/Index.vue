<template>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>