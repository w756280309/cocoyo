<template>
    <div>
        <form-navbar page_name="编辑评论" menu="分类列表" back="/comments"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col>
                                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">

                                    <el-form-item label="评论内容" prop="content_raw">
                                        <template>
                                            <markdown-editor ref="markdownEditor" v-model="form.content_raw"></markdown-editor>
                                        </template>
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit('form')">编辑评论</el-button>
                                        <el-button @click="handleBack">取消</el-button>
                                    </el-form-item>

                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormNavbar from '@/components/dashboard/form/navbar'
    import markdownEditor from 'vue-simplemde/src/markdown-editor'
    import FineUploader from 'fine-uploader/lib/traditional'
    import {getToken} from '@/plugins/auth/auth'

    export default {
        components: {
            FormNavbar,
            markdownEditor,
        },
        created() {
            this.$http.get('comments/' + this.$route.params.id + '/edit').then((response) => {
                this.form = response.data;
            })
        },
        mounted() {
            this.simplemdeMark = this.$refs.markdownEditor.simplemde
            this.contentUploader()
        },
        data() {
            return {
                form: {},
                simplemdeMark: {},
                rules: {
                    content_raw: [
                        { required: true, message: '请输入评论内容', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.put('comments/' + this.$route.params.id, this.form).then((response) => {
                            this.$notify({
                                title: 'success',
                                message: '编辑成功',
                                type: 'success'
                            })
                            this.$router.push('/comments')
                        });

                    } else {
                        return false;
                    }
                });

            },
            handleBack() {
                this.$router.push('/comments')
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
                        endpoint: '/api/dashboard/upload/image',
                        inputName: 'image',
                        customHeaders: {
                            Authorization : getToken().token_type + ' ' + getToken().access_token,
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
                            vm.replaceImageUploading(responseJSON.filename, responseJSON.relative_url)
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
        }
    }
</script>

<style scoped>
    @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
</style>