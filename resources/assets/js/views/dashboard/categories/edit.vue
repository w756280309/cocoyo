<template>
    <div>
        <form-navbar page_name="编辑分类" menu="分类列表" back="/category"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col>
                                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                                    <el-form-item label="分类名" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>

                                    <el-form-item label="路径" prop="path">
                                        <el-input v-model="form.path"></el-input>
                                    </el-form-item>

                                    <el-form-item label="描述" prop="description">
                                        <el-input type="textarea" v-model="form.description"></el-input>
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit('form')">编辑</el-button>
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
        created() {
            this.$http.get('category/' + this.$route.params.id + '/edit').then((response) => {
                this.form = response.data;
            })
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
                        { required: true, message: '请输入分类名称', trigger: 'change' },
                        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'change' }
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
                        this.$http.put('category/' + this.$route.params.id, this.form).then((response) => {
                            this.$notify({
                                title: 'success',
                                message: '编辑成功',
                                type: 'success'
                            })
                            this.$router.push('/category')
                        });

                    } else {
                        return false;
                    }
                });

            },
            handleBack() {
                this.$router.push('/category')
            }
        }
    }
</script>

<style scoped>

</style>