<template>
    <div>
        <form-navbar page_name="创建文章" menu="文章列表" back="/articles"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col>
                                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                                    <el-form-item label="所属分类" prop="category_id">
                                        <el-select v-model="form.category_id" placeholder="请选择所属分类">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>

                                    <el-form-item label="图标" prop="title">
                                        <el-input v-model="form.icon"></el-input>
                                    </el-form-item>

                                    <el-form-item label="描述" prop="description">
                                        <el-input type="textarea" v-model="form.description"></el-input>
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

    export default {
        components: {
            FormNavbar,
        },
        data() {
            return {
                form: {
                    name: '',
                    path: '',
                    description: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入分类名称', trigger: 'blur' },
                        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                    ],
                    path: [
                        { required: true, message: '请输入路径', trigger: 'change' }
                    ],
                    description: [
                        { required: true, message: '请输入描述', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('articles', this.form).then((response) => {
                            this.$notify({
                                title: 'success',
                                message: '添加成功',
                                type: 'success'
                            })
                            this.$router.push('/articles')
                        });

                    } else {
                        return false;
                    }
                });

            },
            handleBack() {
                this.$router.push('/articles')
            }
        }
    }
</script>

<style scoped>

</style>