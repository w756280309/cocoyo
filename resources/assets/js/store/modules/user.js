import Cookies from 'js-cookie';
import request from '@/libs/app_http'

const user = {
    state: {
        token: Cookies.getJSON('token'),
        userinfo: Cookies.getJSON('user')
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
            state.userinfo = userinfo
            Cookies.set('user', userinfo);
        },
        modifyAvatar(state, avatar) {
            state.userinfo.avatar = avatar
            Cookies.set('user', state.userinfo);
        },
        modifyEmailNotify(state, email_notify_enabled) {
            state.userinfo.email_notify_enabled = email_notify_enabled
            Cookies.set('user', state.userinfo);
        },
        logout (state, vm) {
            state.token = ''
            state.userinfo = ''
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