<template>
    <div>
        <Modal title="裁剪图片" ok-text="裁剪" :loading="true" :mask-closable="false" @on-ok="handelCut" v-model="cut_avatar">
            <Row :gutter="10">
                <Col span="14" class="image-editor-con">
                <div class="cropper">
                    <img id="cropimg" alt="">
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
    import './cropper.min.css

    export default {
        name: "ImageCover",
        data() {
            cropper: {}
        },
        props: {
            cut_avatar: {
                type: Boolean,
                default() {
                    return false
                }
            }
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
        }

    }
</script>

<style scoped>
    .image-editor-con{
        height: 300px;
    }
    .image-editor-con .cropper{
        box-sizing: border-box;
        border: 1px solid #c3c3c3;
        width: 100%;
        height: 100%;
    }
    .image-editor-con .cropper img{
        max-height: 100%;
    }
    .image-editor-con-preview-con{
        width: 100% !important;
        height: 200px !important;
        border: 1px solid #c3c3c3;
    }
    #preview{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>