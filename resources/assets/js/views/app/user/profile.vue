<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md2 offset-md1 class="profile">
                    <div class="cover-avatar text-center">
                        <img src="https://image.cocoyo.xin/IMG_0347.PNG" class="avatar">
                    </div>


                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>
    .profile .cover-avatar {
        position: relative;
    }
    .text-center {
        text-align: center;
    }
    .profile .cover-avatar:hover .avatar {
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }
    .profile .cover-avatar .avatar {
        width: 150px !important;
        height: 150px;
        border-radius: 50%;
        transition: -webkit-transform .6s ease-in;
        transition: transform .6s ease-in;
        transition: transform .6s ease-in, -webkit-transform .6s ease-in;
        margin-bottom: 20px;
    }
</style>