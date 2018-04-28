<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout align-center justify-center>
            <v-flex md7>
                <div class="login mu-paper login_wrap mu-paper-round mu-paper-3">
                    <div class="login_con">
                        <div class="main">
                            <h3>登录</h3>
                            <v-form v-model="valid" ref="form" lazy-validation>
                                <v-text-field
                                        label="邮箱"
                                        v-model="form.email"
                                        :rules="emailRule"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        label="密码"
                                        v-model="form.password"
                                        :rules="passwordRule"
                                        required
                                        type="password"
                                ></v-text-field>
                                <v-btn block @click="submit" color="primary" dark>登录</v-btn>
                            </v-form>
                            <div class="jump_link">
                                <span class="register">注册</span>
                                <span class="forget">找回密码</span>
                            </div>
                            <div class="wx_login">
                                <div class="wx_btn">第三方登陆</div>
                            </div>
                            <div class="text-xs-center">
                                <v-btn fab dark small style="background: #00adb5;" @click="socialiteQQ">
                                    <v-icon dark style="padding-top: 6px;">fab fa-qq</v-icon>
                                </v-btn>

                                <v-btn fab dark small style="background: #f75b5b;">
                                    <v-icon dark style="padding-top: 6px;">fab fa-weibo</v-icon>
                                </v-btn>

                            </div>
                        </div>
                    </div>
                </div>
            </v-flex>
        </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data() {
            return {
                valid:true,
                form: {},
                emailRule: [
                    v => !!v || '请输入邮箱',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                ],
                passwordRule: [
                    v => !!v || '请输入密码',
                ]
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    this.$http.post('login', this.form).then((response) => {
                        this.$store.commit('SET_USERINFO', response.data.user);
                        this.$store.commit('SET_TOKEN', response.data.token);

                        let redirect = this.$route.query.redirect;
                        if (redirect) {
                            this.$router.push(redirect);
                        } else {
                            this.$router.push('/');
                        }
                    })
                }
            },
            socialiteQQ() {
                window.open('/api/auth/qq')
                // this.$http.get('auth/qq').then((response) => {
                //     console.log(response)
                // })
            }
        }
    }
</script>

<style scoped>
    .login_wrap{
        background: white;
        border-radius: 4px;
        padding-bottom: 40px;
        padding-top: 40px;
    }
    .mu-paper-3{
        box-shadow: 0 6px 20px 5px rgba(40, 120, 255, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.05);
    }
    .mu-paper {
        background-color: #ffffff;
        color: rgba(0, 0, 0, 0.87);
    }
    .mu-paper {
        -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
        transition: all .45s cubic-bezier(.23,1,.32,1);
        color: rgba(0,0,0,.87);
        background-color: #fff;
    }
    .login{
        text-align: center;
        margin-top:40px;
    }
    .login .login_con{
        width: 280px;
        margin: 0 auto;
    }
    .login .login_con h3{
        margin: 5px 0 22px 0;
        font-size: 20px;
        line-height: 34px;
        color: #0E1726;
    }
    .login h3 {
        font-size: 20px;
        line-height: 20px;
        color: #222222;
        text-align: center;
    }
    .login .login_con .jump_link{
        height: 17px;
        line-height: 17px;
        font-size: 12px;
        margin-top: 16px;
    }
    .login .login_con .jump_link .register {
        float: left;
        color: #2878FF;
        cursor: pointer;
    }
    .login .login_con .jump_link .forget{
        float: right;
        cursor: pointer;
        color: #9FA2A8;
    }
    .login .wx_login {
        border-top: 1px solid #C9C9C9;
        margin-top: 40px;
        position: relative;
    }
    .login .wx_login .wx_btn{
        font-size: 12px;
        color: #888888;
        margin: 0 auto;
        position: relative;
        top: -10px;
        left: 0;
        height: 14px;
        width: 100px;
        background: white;
        padding: 0 20px 0 20px;
        cursor: pointer;
    }
</style>