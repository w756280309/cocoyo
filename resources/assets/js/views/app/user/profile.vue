<template>
    <!--<v-content class="main-content base_content">-->
        <!--<v-container grid-list-xl>-->
            <!--<v-layout row wrap>-->
                <!--<v-flex md2 offset-md1 class="profile">-->
                    <!--<div class="cover-avatar text-center">-->
                        <!--<img :src="form.avatar" class="avatar">-->
                        <!--<input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="previewModel" id="fileinput" class="fileinput" />-->
                        <!--<label class="filelabe" for="fileinput"><Icon type="image"></Icon>&nbsp;修改头像</label>-->
                        <!--<Modal title="裁剪头像" ok-text="裁剪" :loading="true" :mask-closable="false" @on-ok="handelCut" v-model="cut_avatar">-->
                            <!--<Row :gutter="10">-->
                                <!--<Col span="14" class="image-editor-con">-->
                                <!--<div class="cropper">-->
                                    <!--<img id="cropimg" alt="">-->
                                <!--</div>-->
                                <!--</Col>-->
                                <!--<Col span="10" class="image-editor-con">-->
                                <!--<Row type="flex" justify="center" align="middle" class="image-editor-con-preview-con">-->
                                    <!--<div id="preview"></div>-->
                                <!--</Row>-->
                                <!--</Col>-->
                            <!--</Row>-->
                        <!--</Modal>-->
                    <!--</div>-->
                <!--</v-flex>-->
                <!--<v-flex md7 offset-md1>-->
    <div>
        <Form :model="form" :label-width="80">
            <FormItem label="用户名">
                <Input v-model="form.name" size="large" disabled></Input>
            </FormItem>
            <FormItem label="邮箱">
                <Input v-model="form.email" size="large" disabled></Input>
            </FormItem>
            <FormItem label="昵称">
                <Input v-model="form.nickname" size="large" placeholder="请输入您的昵称仅用户展示"></Input>
            </FormItem>
            <FormItem label="Website">
                <Input v-model="form.input" size="large" placeholder="请输入您的个人网站"></Input>
            </FormItem>
            <FormItem label="微博名">
                <Input v-model="form.weibo_name" size="large" placeholder="请输入您的weibo名称"></Input>
            </FormItem>
            <FormItem label="微博主页">
                <Input v-model="form.weibo_link" size="large" placeholder="请输入您的weibo主页"></Input>
            </FormItem>
            <FormItem label="GitHub">
                <Input v-model="form.github_name" size="large" placeholder="请输入您的github名称"></Input>
            </FormItem>
            <FormItem label="Text">
                <Input size="large" v-model="form.description" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="请输入您的描述"></Input>
            </FormItem>
            <FormItem>
                <Button :loading="loading" style="color: #fff;background-color: #1abc9c;border-color: #1abc9c;"  @click="handleSubmit" long>
                    <span v-if="!loading">编辑资料</span>
                    <span v-else>Loading...</span>
                </Button>
            </FormItem>

        </Form>
    </div>

                <!--</v-flex>-->
            <!--</v-layout>-->
        <!--</v-container>-->
    <!--</v-content>-->
</template>

<script>
    import Cropper from 'cropperjs'
    export default {
        data () {
            return {
                form: {},
                loading: false,
                cut_avatar: false,
            }
        },
        created() {
            this.$http.get('user/profile').then((response) => {
                this.form = response.data
            })
        },
        mounted() {
            let img = document.getElementById('cropimg');
            this.cropper = new Cropper(img, {
                dragMode: 'move',
                preview: '#preview',
                restore: false,
                center: false,
                highlight: false,
                cropBoxMovable: false,
                toggleDragModeOnDblclick: false
            });
        },
        methods: {
            handleSubmit() {
                this.loading = true
                this.$http.put('user/profile', this.form).then((response) => {
                    this.loading = false
                    this.$store.commit('SET_USERINFO', response.data)
                    this.$Notice.success({
                        title: '编辑资料',
                        desc: '编辑成功',
                    })
                })
            },
            previewModel(e) {
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onload = () => {
                    this.cropper.replace(reader.result);
                    reader.onload = null;
                };

                reader.readAsDataURL(file);
                this.cut_avatar = true;
            },
            handelCut() {
                let vm = this;
                vm.cropper.getCroppedCanvas().toBlob(function (blob) {
                    var formData = new FormData();

                    formData.append('image', blob);

                    vm.$http.post('user/avatar', formData).then((response) => {
                        vm.form.avatar = response.relative_url;
                        vm.$store.commit('modifyAvatar', response.relative_url);
                        vm.cut_avatar = false;
                    })
                });
            },
        }
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