<template>
    <div >
        <div class="main" v-if="confirmed">
            <h3>邮箱验证成功</h3>
            <div class="send_suc_box">
                <p class="text">您的邮箱 <strong>{{ email }}</strong> 已经验证成功,开启愉快之旅吧。</p>
                <v-btn block color="error">邮箱验证成功&nbsp;&nbsp;<Icon type="checkmark-round"></Icon></v-btn>
                <div class="back">
                    <router-link to="/">返回主页</router-link>
                </div>
            </div>
        </div>
        <div class="main" v-else>
            <h3>邮箱验证失败</h3>
            <div class="send_suc_box">
                <p class="text">您的邮箱 <strong>{{ email }}</strong>验证失败,{{ message }}。</p>
                <v-btn block color="error" v-show="show" @click="getCode">点击重新发送验证链接</v-btn>
                <v-btn block depressed v-show="!show">{{count}}秒后重新发送</v-btn>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                confirmed : true,
                email: '',
                message: '验证链接已过期',
                show: true,
                count: '',
                timer: null,
            }
        },
        created() {
            this.email = this.$route.query.from_user
            let data = {
                code: this.$route.query.token,
                email: this.$route.query.from_user,
            }

            var vm = this;
            this.$http.put('register/confirmed', data).then((response) => {
                this.$store.commit('SET_USERINFO', response.data.user);
                this.$store.commit('SET_TOKEN', response.data.token);
            }).catch(function (err) {
                vm.confirmed = false
                vm.message = '验证链接已失效'
            })
        },
        methods: {
            getCode(){
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

<style scoped>
    .login .main .send_suc_box{
        width: 310px;
        margin: 0 auto;
    }
    .login .main .send_suc_box .text{
        color: #797D85;
        font-size: 14px;
        line-height: 23px;
        padding-top: 50px;
    }
    .login .main .send_suc_box .back{
        font-size: 14px;
        text-align: center;
        margin-top: 26px;
        line-height: 20px;
        color: #2878FF;
        cursor: pointer;
    }
</style>