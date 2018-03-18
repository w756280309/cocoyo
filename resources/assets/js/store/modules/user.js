import Cookies from 'js-cookie';

const user = {
    state: {
        info : Cookies.getJSON('user'),
        token: Cookies.getJSON('token'),
    },
    mutations: {
        modifyAvatar(state, avatar) {
            state.info.avatar = avatar;
            let user = state.info;
            Cookies.set('user', user);
        },
        profile(state, user) {
            state.info = user;
            Cookies.set('user', user);
        },
        logout (state, vm) {
            Cookies.remove('user');
            Cookies.remove('token');
        }
    }
};

export default user;