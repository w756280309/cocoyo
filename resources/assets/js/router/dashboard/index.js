import Vue from 'vue';
import iView from 'iview';
import Util from '../../libs/util';
import VueRouter from 'vue-router';
import {getToken} from '@/utils/auth';
import {routers, otherRouter, appRouter} from './router';

Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);

    let token = getToken()

    if (! token) { // 判断是否已经登录
       window.location.href = '/#/login';
    }

    Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next);
});

router.afterEach((to) => {
    Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});