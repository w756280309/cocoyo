import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import { LoadingBar } from 'iview';
import {routers} from './router';

Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    LoadingBar.start()
    next();
});

router.afterEach((to) => {
    LoadingBar.finish()
});