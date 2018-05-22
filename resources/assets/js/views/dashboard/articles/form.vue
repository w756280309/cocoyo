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
                    <FormItem label="标签" prop="tags">
                        <Select v-model="form.tags" multiple>
                            <Option v-for="tag in tags" :value="tag.id" :key="tag.id">{{ tag.tag }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="描述" prop="meta_description">
                        <Input v-model="form.meta_description" type="textarea"></Input>
                    </FormItem>
                </Card>
                <Card style="margin-top: 10px">
                    <p slot="title">
                        <Icon type="paper-airplane"></Icon>
                        发布
                    </p>
                    <FormItem label="封面" prop="page_image">
                        <image-cover action="upload/image" :image="form.page_image" @successUpload="handleImageSuccess"></image-cover>
                    </FormItem>
                    <FormItem label="时间" prop="published_at">
                        <DatePicker format="yyyy-MM-dd HH:mm:ss" :value="form.published_at" type="datetime" @on-change="changeDate"></DatePicker>
                    </FormItem>
                    <Row>
                        <Col span="11">
                        <FormItem label="原创?" prop="is_original">
                            <i-switch v-model="form.is_original" size="large" :true-value="1" :false-value="0">
                                <span slot="open">是</span>
                                <span slot="close">否</span>
                            </i-switch>
                        </FormItem>
                        </Col>
                        <Col span="11">
                        <FormItem label="草稿?" prop="is_draft">
                            <i-switch v-model="form.is_draft" size="large" :true-value="1" :false-value="0">
                                <span slot="open">是</span>
                                <span slot="close">否</span>
                            </i-switch>
                        </FormItem>
                        </Col>
                    </Row>

                    <FormItem>
                        <Button @click="onSubmit('form')" type="success" long>发布</Button>
                    </FormItem>
                </Card>
                </Col>
            </Form>
            <Modal title="View Image" v-model="page_image_view">
                <img :src="form.page_image" v-if="page_image_view" style="width: 100%">
            </Modal>
        </Row>
    </div>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'
    import ImageCover from '@/components/ImageCover'
    import FineUploader from 'fine-uploader/lib/traditional'

    export default {
        components: {
            markdownEditor,
            ImageCover
        },
        props: {
            form: {
                type: Object,
                default() {
                    return {
                        tags: [],
                        page_image: '',
                        is_original: 1,
                        is_draft: 0
                    }
                }
            }
        },
        data() {
            return {
                ruleValidate: {
                    title: [
                        {required: true, message: '文章标题不能为空'}
                    ],
                    content: [
                        {required: true, message: '文章内容不能为空'}
                    ],
                    category_id: [
                        {required: true, message: '文章分类不能为空'}
                    ],
                    tags: [
                        {required: true, message: '请选择文章标签'}
                    ],
                    meta_description: [
                        {required: true, message: '文章描述不能为空'}
                    ],
                    page_image: [
                        {required: true, message: '文章封面图片不能为空'}
                    ],
                    published_at: [
                        {required: true, message: '请选择文章发布时间'}
                    ]
                },
                simplemdeMark: {},
                config:{
                    toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
                },
                categories: {},
                tags: {},
                page_image_view: false,
            }
        },
        mounted () {
            this.simplemdeMark = this.$refs.markdownEditor.simplemde
            this.contentUploader()
        },
        created() {
            Promise.all([this.$http.get('categories?type=all'), this.$http.get('tags?type=all')]).then((response) => {
                this.categories = response[0].data;
                this.tags = response[1].data
            })
        },
        methods: {
            onSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let url = this.form.id ?  'articles/' + this.form.id : 'articles';
                        let method = this.form.id ? 'put' : 'post'

                        if (method == 'post') {
                            this.$http.post(url, this.form).then((response) => {
                                this.$Notice.success({
                                    title: '添加文章成功'
                                });
                                this.$router.push('/articles')
                            })
                        } else {
                            this.$http.put(url, this.form).then((response) => {
                                this.$Notice.success({
                                    title: '编辑文章成功'
                                });
                                this.$router.push('/articles')
                            })
                        }

                    } else {
                        this.$Message.error('表单信息不完善!');
                    }
                })
            },
            handleImageSuccess(response) {
                this.form.page_image = response.relative_url;
            },
            changeDate(date) {
                this.form.published_at = date
            },
            contentUploader() {
                let vm = this
                this.simplemdeMark.codemirror.on('paste', function(editor, event){
                    if (event.clipboardData.types.indexOf("Files") >= 0) {
                        event.preventDefault()
                    }
                })
                let contentUploader = new FineUploader.FineUploaderBasic({
                    paste: {
                        targetElement: document.querySelector('.CodeMirror')
                    },
                    request: {
                        endpoint: '/api/upload/image',
                        inputName: 'image',
                        customHeaders: {
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        params: {
                            strategy: 'article'
                        }
                    },
                    validation: {
                        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
                    },
                    callbacks: {
                        onPasteReceived(file) {
                            let promise = new FineUploader.Promise()
                            if (file == null || typeof file.type == 'undefined' || file.type.indexOf('image/')) {
                                toastr.error('Only can upload image!');
                                return promise.failure('not a image.')
                            }
                            return promise.then(() => {
                                vm.createdImageUploading('image.png')
                            }).success('image')
                        },
                        onComplete(id, name, responseJSON) {
                            vm.replaceImageUploading(name, responseJSON.relative_url)
                        },
                    },
                });
                let dragAndDropModule = new FineUploader.DragAndDrop({
                    dropZoneElements: [document.querySelector('.CodeMirror')],
                    callbacks: {
                        processingDroppedFilesComplete(files, dropTarget) {
                            files.forEach((file) => {
                                vm.createdImageUploading(file.name)
                            })
                            contentUploader.addFiles(files); //this submits the dropped files to Fine Uploader
                        }
                    }
                })
            },
            getImageUploading() {
                return '\n![Uploading ...]()\n'
            },
            createdImageUploading(name) {
                this.simplemdeMark.value(this.simplemdeMark.value() + this.getImageUploading())
            },
            replaceImageUploading(name, url) {
                let result = '\n!['+name+']('+url+')\n'
                this.simplemdeMark.value(this.simplemdeMark.value().replace(this.getImageUploading(), result))
            },
        },
    }
</script>

<style scoped>
    @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';

    .page_image_show{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .page_image_show img{
        width: 100%;
        height: 100%;
    }
    .page_image_show .upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .page_image_show:hover .upload-list-cover{
        display: block;
    }
    .page_image_show .upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>