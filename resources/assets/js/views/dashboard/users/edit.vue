<template>
    <div>
        <form-navbar page_name="编辑用户" menu="用户列表" back="/users"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col :span="4">
                               <avatar :imgDataUrl="form.avatar"></avatar>
                            </el-col>
                            <el-col :span="14" :offset="2">
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item label="用户名">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>

                                    <el-form-item label="邮箱">
                                        <el-input v-model="form.email"></el-input>
                                    </el-form-item>

                                    <el-form-item label="昵称">
                                        <el-input v-model="form.nickname"></el-input>
                                    </el-form-item>

                                    <el-form-item label="个人网站">
                                        <el-input v-model="form.website"></el-input>
                                    </el-form-item>

                                    <el-form-item label="个人描述">
                                        <el-input type="textarea" v-model="form.description"></el-input>
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                        <el-button>取消</el-button>
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
    import Avatar from '@/components/Avatar'

    export default {
        components: {
            FormNavbar,
            Avatar
        },
        mounted() {
            this.$http.get('users/' + this.$route.params.id + '/edit').then((response) => {
                this.form = response.data;
            })
        },
        data() {
            return {
                form: {
                    avatar: '',
                    name: '',
                    email: '',
                    nickname: '',
                    website: '',
                    description: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>