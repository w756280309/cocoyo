<template>
    <div>
        <div class="main">
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                        label="请输入您的邮箱"
                        v-model="form.email"
                        :rules="emailRule"
                        required
                ></v-text-field>
                <v-btn block color="success" v-show="show" @click="getCode" style="background-color: #F96854 !important">发送重置密码链接</v-btn>
                <v-btn block depressed v-show="!show">{{count}}秒后重新发送</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valid:true,
                form: {},
                show: true,
                count: '',
                emailRule: [
                    v => !!v || '请输入邮箱',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                ],
            }
        },
        methods: {
            getCode() {
                if (this.$refs.form.validate()) {
                    this.$http.post('send-forget-password-mail', this.form).then((response) => {
                        this.$Message.success('发送成功');
                        const TIME_COUNT = 60;
                        if (!this.timer) {
                            this.count = TIME_COUNT;
                            this.show = false;
                            this.timer = setInterval(() => {
                                if (this.count > 0 && this.count <= TIME_COUNT) {
                                    this.count--;
                                } else {
                                    this.show = true;
                                    clearInterval(this.timer);
                                    this.timer = null;
                                }
                            }, 1000)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>