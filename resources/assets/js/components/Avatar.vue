<template>
    <div class="cover-avatar text-center">
        <vue-image-core-upload field="image"
                               @crop-success="cropSuccess"
                               @crop-upload-success="cropUploadSuccess"
                               @crop-upload-fail="cropUploadFail"
                               v-model="show"
                               url="/api/upload/image"
                               :headers="headers"
                               img-format="png">
        </vue-image-core-upload>
            <img :src="avatar" class="avatar">
            <a class="btn btn-success file" @click="toggleShow"><span>修改头像</span></a>
    </div>
</template>

<script>
    import VueImageCropUpload from 'vue-image-crop-upload/upload-2.vue'
    import {getToken} from '@/plugins/auth/auth'

    export default{
        props:['imgDataUrl'],
        components: {
            'vue-image-core-upload': VueImageCropUpload,
        },
        computed: {
            avatar() {
                return this.upload || this.imgDataUrl
            }
        },
        data(){
            return {
                show: false,
                upload: '',
                headers: {
                    'Authorization': getToken().token_type + ' ' + getToken().access_token,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        },

        methods: {
            toggleShow() {
                this.show = !this.show;
            },
            /**
             * crop success
             *
             * [param] imgDataUrl
             * [param] field
             */
            cropSuccess(imgDataUrl, field){
                this.upload = imgDataUrl;
            },
            /**
             * upload success
             *
             * [param] jsonData  server api return data, already json encode
             * [param] field
             */
            cropUploadSuccess(response, field){
                this.upload = response.relative_url;
                this.toggleShow();
                console.log(this.upload)
//                swal("Here's a message!", "It's pretty, isn't it?")
           //     toastr.success('头像修改成功');
            },
            /**
             * upload fail
             *
             * [param] status    server api return error status, like 500
             * [param] field
             */
            cropUploadFail(status, field){
                console.log('-------- upload fail --------');
                console.log(status);
                console.log('field: ' + field);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .file {
        position: relative;
        margin: 0 auto;
        display: block;
        width: 100px;
        height: 30px;
        font-size: 10px;

        span {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        }
        input {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            width: 100px;
            height: 30px;
            opacity: 0;
        }
    }
    .cover-avatar .avatar {
        width: 150px !important;
        height: 150px;
        border-radius: 50%;
        transition: -webkit-transform .6s ease-in;
        transition: transform .6s ease-in;
        transition: transform .6s ease-in, -webkit-transform .6s ease-in;
        margin-bottom: 20px;
    }

    .cover-avatar:hover .avatar {
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }
</style>
