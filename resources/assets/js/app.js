require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui'
import HttpPlugin from '@/plugins/app'
import routes from '@/router/app.js'
import VueRouter from 'vue-router'
import App from '@/App.vue';

Vue.use(ElementUI);
Vue.use(HttpPlugin);
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App),
});