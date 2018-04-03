<template>
    <div>
        <div class="my-uploader ivu-upload"
             :style="{backgroundImage:`url(${image})`}">
            <div class="ivu-upload ivu-upload-drag">
                <input accept="image/png, image/jpeg, image/gif, image/jpg" id="fileinput" @change="previewModel" type="file" class="ivu-upload-input">
                <div class="upload-compoment hasBg">
                    <i class="ivu-icon ivu-icon-ios-cloud-upload" style="font-size: 52px; color: rgb(51, 153, 255);"></i>
                    <div class="el-upload__text">支持png/jpg/gif格式图片，或<em>点击上传</em></div>
                </div>
            </div>
        </div>
        <Modal title="裁剪图片" ok-text="裁剪" :loading="true" :mask-closable="false" @on-ok="handelCut" v-model="innerVisible">
            <Row :gutter="10">
                <Col span="14" class="image-editor-con">
                <div class="cropper">
                    <img id="image-cover" alt="">
                </div>
                </Col>
                <Col span="10" class="image-editor-con">
                <Row type="flex" justify="center" align="middle" class="image-editor-con-preview-con">
                    <div id="preview"></div>
                </Row>
                </Col>
            </Row>
        </Modal>
    </div>

</template>

<script>
    import Cropper from 'cropperjs'

    export default {
        name: "ImageCover",
        props: {
            image: {
                default() {
                    return ''
                },
                type: String
            },
            action: {
                type: String,
                default: 'upload/image'
            },
        },
        mounted () {
            let img = document.getElementById('image-cover');
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
        data() {
            return {
                cropper: {},
                innerVisible: false,
            }
        },
        methods: {
            previewModel(e) {
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onload = () => {
                    this.cropper.replace(reader.result);
                    reader.onload = null;
                };

                reader.readAsDataURL(file);
                this.innerVisible = true;
            },
            handelCut() {
                let vm = this;
                vm.cropper.getCroppedCanvas().toBlob(function (blob) {
                    var formData = new FormData();

                    formData.append('image', blob);

                    vm.$http.post(vm.action, formData).then((response) => {
                        vm.$emit('successUpload', response)
                        vm.innerVisible = false;
                    })
                });
            },
        }

    }
</script>

<style lang="scss">
    .my-uploader{
        border-radius: 6px;
        background: no-repeat center center/cover;
        .el-upload{
            width: 100%
        }
        width: 100%;
        .upload-compoment{
            padding-top: 40px;
            padding-bottom: 20px;
            text-align: center;
            font-size: 13px;
            line-height: 1;
            border-radius: 20px;
            cursor: pointer;
            div{
                margin-bottom: 20px;
                margin-top: 25px;
            }
            small{
                display: block;
                margin-bottom: 15px
            }
            &.hasBg{
                transition: all 0.5s;
                .iconfont{
                    color: #fff
                }
                small{
                    color: #fff
                }
            }
        }
        &:hover{
            .upload-compoment.hasBg{
                opacity: 1;
            }
        }
    }
    .ivu-upload-drag{
        background:none;
    }
    .ivu-upload input[type=file]{
        display:block;
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        right:0;
        cursor: pointer;
        width:100%;
        height:100%;
        opacity: 0;
    }
</style>