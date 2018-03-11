<template>
    <div>
        <Row>
            <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="50">
                <Col span="15">
                    <Card>
                        <FormItem label="标题" prop="title">
                            <Input icon="android-list" v-model="form.title"/>
                        </FormItem>
                        <FormItem label="内容" prop="content">
                            <markdown-editor :configs="config" ref="markdownEditor" v-model="form.content"></markdown-editor>
                        </FormItem>
                    </Card>
                </Col>
                <Col span="9" style="padding-left: 10px">
                    <Card>
                        <p slot="title">
                            <Icon type="paper-airplane"></Icon>
                            选项
                        </p>
                        <FormItem label="分类" prop="category_id">
                            <Select v-model="form.category_id">
                                <Option v-for="(category,key) in categories" :value="category.id" :key="key">{{ category.name }}</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="标签" prop="title">
                            <Select v-model="form.tags" multiple>
                                <Option v-for="tag in tags" :value="tag.id" :key="tag.id">{{ tag.tag }}</Option>
                            </Select>
                        </FormItem>
                    </Card>
                    <Card style="margin-top: 10px">
                        <p slot="title">
                            <Icon type="paper-airplane"></Icon>
                            发布
                        </p>
                        <FormItem label="封面" prop="category_id">
                            <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="previewModel" id="fileinput" class="fileinput" />
                            <label class="filelabe" for="fileinput"><Icon type="image"></Icon>&nbsp;上传封面图片</label>
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
                        </FormItem>
                        <FormItem label="标签" prop="title">
                            <Select v-model="form.tags" multiple>
                                <Option v-for="tag in tags" :value="tag.id" :key="tag.id">{{ tag.tag }}</Option>
                            </Select>
                        </FormItem>
                    </Card>
                </Col>
            </Form>
        </Row>
    </div>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'
    import Cropper from 'cropperjs'

    export default {
        components: {
            markdownEditor
        },
        data() {
            return {
                form: {
                    tags: []
                },
                ruleValidate: {},
                simplemdeMark: {},
                config:{
                    toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
                },
                categories: {},
                tags: {},
                cut_avatar: false,
                cropper:{},
            }
        },
        mounted () {
            this.simplemdeMark = this.$refs.markdownEditor.simplemde
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
        created() {
            Promise.all([this.$http.get('categories?type=all'), this.$http.get('tags?type=all')]).then((response) => {
                this.categories = response[0].data;
                this.tags = response[1].data
            })
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
            handelCut() {
                let vm = this;
                vm.cropper.getCroppedCanvas().toBlob(function (blob) {
                    var formData = new FormData();

                    formData.append('image', blob);
                });
            },
        }
    }
</script>

<style scoped>
    @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
</style>