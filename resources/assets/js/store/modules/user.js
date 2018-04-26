import {getToken, getUser, setToken, setUser, removeToken, removeUser} from '@/utils/auth';

const user = {
    state: {
        token: getToken(),
        userinfo: getUser()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            setToken(token)
        },
        REMOVE_TOKEN: (state) => {
            state.token = ''
            removeToken()
        },
        SET_USERINFO: (state, userinfo) => {
            state.userinfo = userinfo
            setUser(userinfo)
        },
        modifyAvatar(state, avatar) {
            state.userinfo.avatar = avatar
            setUser(state.userinfo)
        },
        modifyEmailNotify(state, email_notify_enabled) {
            state.userinfo.email_notify_enabled = email_notify_enabled
            setUser(state.userinfo)
        },
        logout (state, vm) {
            state.token = ''
            state.userinfo = ''
            removeToken()
            removeUser()
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