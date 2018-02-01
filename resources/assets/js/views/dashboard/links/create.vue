<template>
    <div>
        <form-navbar page_name="添加友链" menu="友链列表" back="/links"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col>
                                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                                    <el-form-item label="链接名" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>

                                    <el-form-item label="链 接" prop="link">
                                        <el-input v-model="form.link"></el-input>
                                    </el-form-item>

                                    <el-form-item label="图片" prop="image">
                                        <el-upload
                                                :headers="headers"
                                                name="image"
                                                accept="image/*"
                                                action="/api/dashboard/links/upload"
                                                :on-success="handleImageSuccess"
                                                :on-preview="handleImagePreview"
                                                :limit="limit"
                                                list-type="picture">
                                                <el-button size="small" type="primary">点击上传</el-button>
                                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                            </el-upload>
                                    </el-form-item>

                                    <el-form-item label="是否开启" prop="status">
                                        <el-switch
                                                v-model="form.status"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit('form')">添加</el-button>
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
    import {getToken} from '@/plugins/auth/auth'

    export default {
        components: {
            FormNavbar,
        },
        data() {
            return {
                headers:{
                    Authorization : getToken().token_type + ' ' + getToken().access_token,
                    'X-Requested-With': 'XMLHttpRequest'
                },
                limit: 1,
                form: {
                    name: '',
                    link: '',
                    image: '',
                    status: true
                },
                rules: {
                    name: [
                        { required: true, message: '请输入链接名', trigger: 'blur' },
                        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                    ],
                    link: [
                        { required: true, message: '请输入链接', trigger: 'change' }
                    ],
                    image: [
                        { required: true, message: '请上传图片', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('links', this.form).then((response) => {
                            this.$notify({
                                title: 'success',
                                message: '添加成功',
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
                this.$router.push('/links')
            },
            handleImageSuccess(res, file) {
                this.form.image = res.relative_url;
            },
            handleImagePreview(file) {
                console.log(file);
                this.$alert('<img src="' + file.response.relative_url + '">', '', {
                    dangerouslyUseHTMLString: true,
                    showConfirmButton: false,
                    customClass : 'alert-preview'
                })
            }
        }
    }
</script>

<style scoped>

</style>