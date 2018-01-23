<template>
    <div class="cocoyo">
        <div class="container">
            <div id="wrapper">
                <sidebar></sidebar>
                <!--<div id="page-content-wrapper">-->
                    <!--<navbar></navbar>-->
                    <!--<div class="container-fluid">-->
                        <!--<transition name="slide-fade">-->
                            <!--<router-view></router-view>-->
                        <!--</transition>-->
                    <!--</div>-->
                <!--</div>-->
                <div id="wrapper-box" class="wrappeer_box mCustomScrollbar _mCS_3 mCS-autoHide" style="overflow: visible;">
                    <div id="mCSB_3" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabindex="0" style="max-height: none;">
                        <div id="mCSB_3_container" class="mCSB_container" style="position: relative; top: 0px; left: 0px;">
                            <navbar></navbar>
                            <div class="wrapper_container" style="width: 784px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/dashboard/particals/Sidebar.vue';
    import Navbar from '../components/dashboard/particals/Navbar.vue';
    export default{
        components : {
            Sidebar,
            Navbar
        },
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for <2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
