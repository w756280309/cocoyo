<template>
    <div>
        <div class="error404-body-con-title"><span><Icon type="checkmark-circled"></Icon></span></div>
        <p class="error404-body-con-message">邮箱链接已发送!请验证您的邮箱</p>
        <div class="error404-btn-con">
            <v-btn block color="success" v-show="show" @click="getCode" style="background-color: #F96854 !important">未收到邮箱</v-btn>
            <v-btn block depressed v-show="!show">{{count}}秒后重新发送</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                show: true,
                count: '',
            }
        },
        created() {
            this.email = this.$route.query.email;
        },
        methods: {
            goHome() {
                this.$router.push('/')
            },
            getCode(){
                if (! this.email) {
                    return this.$Message.error('无效的参数');
                }
                this.$http.put('register/send-register-email', {email: this.email}).then((response) => {
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
</script>

<style lang="less">
    @import '../../../styles/socialite.less';
</style>