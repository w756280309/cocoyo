<template>
   <div class="userContainer">
       <div class="mu-paper login_wrap mu-paper-round mu-paper-3">
           <div class="login">
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
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import Cookies from 'js-cookie';

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
                        Cookies.set('user', response.data.user);
                        Cookies.set('token', response.data.token);

                        this.$router.push('/');
                    })
                }
            },
        }
    }
</script>

<style scoped>
    .userContainer {
        height: 100%;
        background: #F4F7FD;
    }
    .login_wrap{
        width: 510px;
        position: absolute;
        left: 50%;
        top: 50%;
        background: white;
        border-radius: 4px;
        padding-bottom: 40px;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
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
        width: 510px;
        text-align: center;
    }
    .login .login_con{
        width: 280px;
        margin: 0 auto;
    }
    .login .login_con h3{
        margin: 40px 0 22px 0;
        font-size: 20px;
        line-height: 34px;
        color: #0E1726;
    }
    .userContainer h3 {
        font-size: 20px;
        line-height: 20px;
        color: #222222;
        text-align: center;
        font-weight: normal;
    }
</style>