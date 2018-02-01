<template>
    <el-form ref="form" :rules="rules" status-icon :model="form" label-width="120px">
        <el-form-item label="所属分类" prop="category_id">
            <el-select v-model="form.category_id" placeholder="请选择所属分类">
                <el-option v-for="(category, key) in allCategory" :key="key" :label="category.name" :value="category.id"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="文章标题" prop="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="封面显示图标" prop="icon">
            <el-input v-model="form.icon"></el-input>
        </el-form-item>

        <el-form-item label="封面图片" prop="page_image">
            <el-upload
                    accept="image/*"
                    name="image"
                    drag
                    :headers="headers"
                    action="api/dashboard/articles/upload"
                    :on-success="handleImageSuccess"
                    :on-preview="handleImagePreview"
                    :limit="1"
                    list-type="picture">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>

        <el-form-item label="文章内容" prop="content">
            <template>
                <markdown-editor ref="markdownEditor" v-model="form.content"></markdown-editor>
            </template>
        </el-form-item>

        <el-form-item label="标签" prop="tags">
            <multiselect
                    v-model="tags"
                    :options="allTags"
                    :multiple="true"
                    :searchable="true"
                    :hide-selected="true"
                    :close-on-select="false"
                    :clear-on-select="false"
                    label="tag"
                    track-by="tag">
            </multiselect>
        </el-form-item>

        <el-form-item label="文章描述" prop="meta_description">
            <el-input type="textarea"  v-model="form.meta_description"></el-input>
        </el-form-item>

        <el-row>
            <el-col :span="12">
                <el-form-item label="是否草稿">
                    <el-switch
                            v-model="form.is_draft"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="是否原创">
                    <el-switch
                            align="right"
                            v-model="form.is_original"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item label="发布时间" prop="published_at">
            <el-date-picker
                    v-model="form.published_at"
                    type="datetime"
                    placeholder="选择日期时间">
            </el-date-picker>
        </el-form-item>



        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">发布文章</el-button>
            <el-button @click="handleBack">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'
    import Multiselect from 'vue-multiselect'
    import {getToken} from '@/plugins/auth/auth'

    export default {
        components: {
            markdownEditor,
            Multiselect
        },
        props: {
            form: {
                type: Object,
                default() {
                    return {
                        page_image: ''
                    }
                }
            }
        },
        created() {
            Promise.all([this.$http.get('category?type=all'), this.$http.get('tags?type=all')]).then((response) => {
                this.allCategory = response[0].data;
                this.allTags = response[1].data
            })
        },
        mounted() {
            this.simplemdeMark = this.$refs.markdownEditor.simplemde
            this.contentUploader()
        },
        data() {
           return {
               tags: null,
               allCategory: [],
               allTags: [],
               simplemdeMark: {},
               headers: {
                   Authorization : getToken().token_type + ' ' + getToken().access_token,
                   'X-Requested-With': 'XMLHttpRequest'
               },
               rules: {
                   category_id : [
                       {required: true, message: '请选择分类'}
                       ],
                   title: [
                       {required: true, message: '请输入标题'},
                       {min:1, max:255, message: '长度在1到255个字符'},
                   ],
                   icon: [
                       {required: true, message:'请填写封面图标'}
                   ],
                   page_image: [
                       {required: true, message: '请上传封面图片'}
                   ],
                   content: [
                       {required: true, message: '请输入内容'}
                   ],
                   tags: [
                       {type: 'array', required: true, message: '至少选择一个标签'},
                   ],
                   meta_description: [
                       {required: true, message: '请输入文章描述'}
                   ],
                   published_at: [
                       {type: 'date', required: true, message: '请选择发布时间'}
                   ]
               }
           }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.put('links/' + this.$route.params.id, this.form).then((response) => {
                            this.$notify({
                                title: 'success',
                                message: '编辑成功',
                                type: 'success'
                            })
                            this.$router.push('/links')
                        });

                    } else {
                        return false;
                    }
                });

            },
            handleBack() {
                this.$router.push('/articles')
            },
            handleImageSuccess(res, file) {
                this.form.page_image = res.relative_url;
            },
            handleImagePreview(file) {
                this.$alert('<img src="' + file.url + '">', '', {
                    dangerouslyUseHTMLString: true,
                    showConfirmButton: false,
                    customClass : 'alert-preview'
                })
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
                        endpoint: '/api/file/upload',
                        inputName: 'image',
                        customHeaders: {
                            'X-CSRF-TOKEN': window.Laravel.csrfToken,
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
                            vm.replaceImageUploading(name, responseJSON.url)
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
    .el-select{
        display:block;
    }
</style>