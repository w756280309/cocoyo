<template>
    <div>
        <div v-if="code == '1003'">
            <div class="error404-body-con-title"><span><Icon type="checkmark-circled"></Icon></span></div>
            <p class="error404-body-con-message">授权登录成功</p>
            <div class="error404-btn-con">
                <Button @click="goHome" size="large" style="width: 200px;" type="primary">返回首页</Button>
            </div>
        </div>
        <div v-if="code == '1001'" class="main">
            <v-form v-model="valid" ref="form" lazy-validation>
                <div class="avatar-base__19M6">
                    <a>
                        <img alt="Avatar" class="avatar__2sMj" :src="form.avatar">
                    </a>
                </div>
                <v-text-field label="用户名" v-model="form.name" :rules="nameRules" required></v-text-field>
                <v-text-field label="邮箱" v-model="form.email" :rules="emailRule" required></v-text-field>
                <v-text-field label="密码" v-model="form.password" :rules="passwordRule" required type="password"></v-text-field>
                <v-text-field label="确认密码" v-model="form.password_confirmation" :rules="passwordConfirmationRule" required type="password"></v-text-field>
                <v-btn block @click="submit" color="primary" dark>注册</v-btn>
            </v-form>
        </div>
    </div>

</template>

<script>
    import {setSocialiteToken} from '@/utils/auth'
    export default {
       data(){
           return {
               code: '',
               valid:true,
               form: {
                   avatar: '',
                   name: '',
                   password: '',
                   password_confirmation: ''
               },
               nameRules: [
                   v => !!v || '请输入昵称',
                   v => v.length <= 10 || '名称必须少于8个字符',
                   v => v.length >= 3 || '名称必须大于3个字符'
               ],
               emailRule: [
                   v => !!v || '请输入邮箱',
                   v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
               ],
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
           this.$http.post('socials/'+ this.$route.params.driver +'/authorizations', {code: this.$route.query.code}).then((response) => {
               this.code = response.data.code

               if (this.code == '1001') {
                   this.form = response.data.social_user
               }
               if (this.code == '1002') {
                   this.$router.push({
                       path: '/register_success',
                       query: {email: response.data.user.email}
                   })
               }
               if (this.code == '1003') {
                   this.$store.commit('SET_USERINFO', response.data.user);
                   this.$store.commit('SET_TOKEN', response.data.token);
               }
           })
        },
        methods: {
            goHome() {
                this.$router.push('/')
            },
            submit () {
                if (this.$refs.form.validate()) {
                    this.$http.post('register', this.form).then((response) => {
                        this.$router.push({
                            path: '/register_success',
                            query: {email: this.form.email}
                        })
                    })
                }
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/socialite.less';
    .avatar-base__19M6 {
        text-align: center;
    }
    .avatar__2sMj {
        cursor: pointer;
        height: 140px;
        width: 140px;
        border: 5px solid #fff;
        border-radius: 15px;
    }
</style>