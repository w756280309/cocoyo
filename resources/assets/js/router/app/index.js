import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import {routers} from './router';

Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

// router.beforeEach((to, from, next) => {
//     next();
// });
//
// router.afterEach((to) => {
//     console.log(to);
// });