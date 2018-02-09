
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui'
import HttpPlugin from './plugins/http'
import VueRouter from 'vue-router'
import routes from './router/dashboard.js'
import App from './App.vue';
import {getToken} from './plugins/auth/auth'
import store from '@/vuex/store.js';


Vue.use(ElementUI);
Vue.use(HttpPlugin);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(HttpPlugin);
Vue.use(VueRouter);



const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

router.beforeEach((to, from, next) => {
    const whiteList = ['/login']
    if(whiteList.indexOf(to.path) !== -1) {
        if (getToken()) {
            return next('/')
        }
        return next()
    } else {
        if (getToken()) {
            return next()
        }
        return next('/login')
    }
})

const app = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App),
});
