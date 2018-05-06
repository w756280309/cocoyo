<template>
    <div>
        <div class="main">
            <div v-if="! confirmed">
                <div class="error404-body-con-title">
                    <span>
                        <Icon type="close-circled"></Icon>
                    </span>
                </div>
                <p class="error404-body-con-message">
                    您的邮箱 <strong>{{ email }}</strong>
                    <span>验证失败,验证链接已失效。</span>
                </p>
            </div>
            <div v-else>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field
                            label="请输入新密码"
                            v-model="form.password"
                            :rules="passwordRule"
                            required
                            type="password"
                    ></v-text-field>
                    <v-text-field
                            label="请输入确认密码"
                            v-model="form.password_confirmation"
                            :rules="passwordConfirmationRule"
                            required
                            type="password"
                    ></v-text-field>
                    <v-btn block @click="submit" color="primary" dark>修改密码</v-btn>
                </v-form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valid:true,
                email: '',
                confirmed: true,
                form: {},
                passwordRule: [
                    v => !!v || '请输入密码',
                    v => v.length <= 16 || '密码必须少于16个字符',
                    v => v.length >= 6 || '密码必须大于6个字符'
                ],
                passwordConfirmationRule: [
                    v => !!v || '请输入确认密码',
                    v => v == this.form.password || '两次密码不一致',
                ]
            }
        },
        created() {
            this.email = this.$route.query.from_user
            this.form.email = this.$route.query.from_user
            this.form.code = this.$route.query.token
        },
        methods: {
            submit () {
                let vm = this
                if (this.$refs.form.validate()) {
                    this.$http.post('forget-password', this.form).then((response) => {
                        this.$Notice.success({
                            title: '消息通知',
                            desc: '重置密码成功',
                        });
                        this.$router.push({
                            path: '/login'
                        })
                    }).catch(function (err) {
                        vm.confirmed = false
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../styles/socialite.less';
</style>