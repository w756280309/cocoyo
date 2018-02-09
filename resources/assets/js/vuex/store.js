import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebar: {
            opened: false,
        }
    },
    getters: {
        opened: state => {
            return state.sidebar.opened
        }
    },
    mutations: {
        modifyOpen(state) {
            state.sidebar.opened = ! state.sidebar.opened
        }
    }
});
