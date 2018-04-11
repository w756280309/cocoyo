import Cookies from 'js-cookie';
import request from '@/libs/app_http'

const user = {
    state: {
        token: Cookies.getJSON('token'),
        id: '',
        name: '',
        nickname: '',
        email: '',
        avatar: '',
        github_name: '',
        github_url: '',
        weibo_name: '',
        weibo_link: '',
        website: '',
        description: '',
        email_notify_enabled: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            Cookies.set('token', token);
        },
        REMOVE_TOKEN: (state) => {
            state.token = ''
            Cookies.remove('token')
        },
        SET_USERINFO: (state, userinfo) => {
            state = Object.assign(state, userinfo)
            Cookies.set('user', userinfo);
        },
        modifyAvatar(state, avatar) {
            state.user.avatar = avatar
            Cookies.set('user', state.user);
        },
        logout (state, vm) {
            Cookies.remove('user');
            Cookies.remove('token');
        }
    },
    actions: {
        // Login({ commit }, data) {
        //     return new Promise((resolve, reject) => {
        //         request.post('login', data).then(res => {
        //             console.log(res);
        //         }).catch(error => {
        //             reject(error)
        //         })
        //     })
        // }
    }
};

export default user;