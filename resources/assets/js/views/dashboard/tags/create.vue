<template>
    <div>
        <form-navbar page_name="创建标签" menu="标签列表" back="/tags"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col>
                                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                                    <el-form-item label="标签名" prop="tag">
                                        <el-input v-model="form.tag"></el-input>
                                    </el-form-item>

                                    <el-form-item label="标题" prop="title">
                                        <el-input v-model="form.title"></el-input>
                                    </el-form-item>

                                    <el-form-item label="描述" prop="meta_description">
                                        <el-input type="textarea" v-model="form.meta_description"></el-input>
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
                    tag: '',
                    title: '',
                    meta_description: '',
                },
                rules: {
                    tag: [
                        { required: true, message: '请输入标签名称', trigger: 'change'},
                        { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'change'}
                    ],
                    title: [
                        { required: true, message: '请输入标题', trigger: 'change' }
                    ],
                    meta_description: [
                        { required: true, message: '请输入描述', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('tags', this.form).then((response) => {
                            this.$notify({
                                title: 'success',
                                message: '添加成功',
                                type: 'success'
                            })
                            this.$router.push('/tags')
                        });

                    } else {
                        return false;
                    }
                });

            },
            handleBack() {
                this.$router.push('/tags')
            }
        }
    }
</script>

<style scoped>

</style>