<template>
    <v-app>
        <navbar></navbar>

        <router-view></router-view>

        <footer-bar></footer-bar>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import FooterBar from '@/components/Footer'

    export default {
        components: {
            Navbar,
            FooterBar
        },
        data() {
            return {

            }
        },

    }
</script>


