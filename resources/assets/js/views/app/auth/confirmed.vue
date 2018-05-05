<template>
    <div>
        <div class="error404-body-con-title">
            <span  v-if="confirmed">
                <Icon type="checkmark-circled"></Icon>
            </span>
            <span v-else>
                <Icon type="close-circled"></Icon>
            </span>
        </div>
        <p class="error404-body-con-message">
            您的邮箱 <strong>{{ email }}</strong>
            <span  v-if="confirmed">已经验证成功,开启愉快之旅吧</span>
            <span v-else>
                验证失败,{{ message }}。
            </span>
        </p>
        <div class="error404-btn-con">
            <div v-if="confirmed">
                <v-btn block color="success" to="/">返回主页</v-btn>
            </div>
            <div v-else>
                <v-btn block color="success" v-show="show" @click="getCode" style="background-color: #F96854 !important">重新发送验证链接</v-btn>
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

<style lang="less">
    @import '../../../styles/socialite.less';
     .back{
        font-size: 14px;
        text-align: center;
        margin-top: 26px;
        line-height: 20px;
        color: #2878FF;
        cursor: pointer;
    }
</style>