<template>
    <div class="cocoyo">
        <div class="container">
            <div id="wrapper">
                <sidebar></sidebar>
                <div id="wrapper-box" :class="isToggle ? 'toggled wrappeer_box mCustomScrollbar _mCS_3 mCS-autoHide' : 'wrappeer_box mCustomScrollbar _mCS_3 mCS-autoHide'">
                    <div id="mCSB_3" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" style="max-height: none;">
                        <div id="mCSB_3_container" class="mCSB_container" style="position: relative; top: 0px; left: 0px;height:100%;">
                            <navbar></navbar>
                            <div class="wrapper_container">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/dashboard/particals/Sidebar.vue';
    import Navbar from '@/components/dashboard/particals/Navbar.vue';

    export default{
        components : {
            Sidebar,
            Navbar
        },
        computed: {
            isToggle() {
                return this.$store.getters.opened
            }
        }
    }
</script>

<style scoped>

</style>
