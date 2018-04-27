import Vue from 'vue';
import VueRouter from 'vue-router';
import { LoadingBar, Spin } from 'iview';
import {routers} from './router';
import {getToken} from '@/utils/auth';

Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    LoadingBar.start()
    Spin.show()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (! getToken()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }//把要跳转的地址作为参数传到下一步
            })
        } else {
            next()
        }
    } else {
        if (getToken() && to.name == 'login') {
            next({
                path: '/'
            })
        } else {
            next()
        }

    }
    // next();
});

router.afterEach((to) => {
    LoadingBar.finish()
    Spin.hide()
});