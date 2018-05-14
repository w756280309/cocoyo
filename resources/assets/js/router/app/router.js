import Main from '@/views/app/Main.vue';
import User from '@/components/User.vue';
import SideBar from '@/components/SideBar.vue';
import AuthCommon from '@/views/app/auth/common.vue'
import Message from '@/components/Message.vue';

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => void(require(['@/views/app/error-page/404.vue'], resolve))
};


export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => void(require(['@/views/app/error-page/403.vue'], resolve))
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => void(require(['@/views/app/error-page/500.vue'], resolve))
};

export const otherRouter = {
    path: '/',
    component: Main,
    children: [
        {
            path: '/',
            title: '主页',
            name: 'index',
            component: resolve => void(require(['@/views/app/articles/index.vue'], resolve))
        },
        {
            path: 'articles/:slug',
            title: '文章详情',
            name: 'articles.show', component: resolve => void(require(['@/views/app/articles/show.vue'], resolve))
        },
        {
            path: '/',
            component: AuthCommon,
            children: [
                {
                    path: '/login',
                    title: '登陆',
                    name: 'login',
                    component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)),
                    meta: {requiresNotAuth: true}
                },
                {
                    path: '/socialite/:driver',
                    title: '授权登陆',
                    name: 'socialite',
                    meta: {requiresNotAuth: true},
                    component: resolve => void(require(['@/views/app/auth/socialite.vue'], resolve)),
                },
                {
                    path: '/register_success',
                    title: '注册提示',
                    name: 'register_tip',
                    component: resolve => void(require(['@/views/app/auth/register_success.vue'], resolve)),
                },
                {
                    path: '/register',
                    title: '注册',
                    name: 'register',
                    component: resolve => void(require(['@/views/app/auth/register.vue'], resolve)),
                    meta: {requiresNotAuth: true}
                },
                {
                    path: '/register/confirmed',
                    title: '注册验证',
                    name: 'register_confirmed',
                    component: resolve => void(require(['@/views/app/auth/confirmed.vue'], resolve)),
                    meta: {requiresNotAuth: true}
                },
                {
                    path: '/forgetpassword',
                    title: '忘记密码',
                    name: 'forgetpassword',
                    component: resolve => void(require(['@/views/app/auth/forgetpassword.vue'], resolve)),
                    meta: {requiresNotAuth: true}
                },
                {
                    path: '/forgetverify',
                    title: '重置密码',
                    name: 'forgetverify',
                    component: resolve => void(require(['@/views/app/auth/forgetverify.vue'], resolve)),
                    meta: {requiresNotAuth: true}
                },
            ]
        },
        {
            path: '/users',
            component: User,
            children: [
                {
                    path: ':name',
                    title: '用户信息',
                    name: 'user_replies',
                    component: resolve => void(require(['@/views/app/users/replies.vue'], resolve)),
                },
                {
                    path: ':name/following',
                    title: '用户关注',
                    name: 'user_following',
                    component: resolve => void(require(['@/views/app/users/following.vue'], resolve)),
                }
            ]
        },
        {
            path: '/users',
            component: SideBar,
            children: [
                {
                    path: ':name/edit',
                    title: '用户编辑',
                    name: 'user_edit',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/profile.vue'], resolve)),
                },
                {
                    path: ':name/edit_avatar',
                    title: '编辑头像',
                    name: 'user_avatar_edit',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/avatar.vue'], resolve)),
                },
                {
                    path: ':name/edit_email_notify',
                    title: '修改消息通知',
                    name: 'edit_email_notify',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/edit_email_notify.vue'], resolve)),
                },
                {
                    path: ':name/edit_password',
                    title: '修改密码',
                    name: 'edit_password',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/edit_password.vue'], resolve)),
                }
            ]
        },
        {
            path: '/',
            component: Message,
            children: [
                {
                    path: 'notifications',
                    title: '消息通知',
                    name: 'user_notifications',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/notifications.vue'], resolve)),
                }
            ]
        },
        {
            path: '/contact',
            title: '联系我',
            name: 'contact', component: resolve => void(require(['@/views/app/about/contact.vue'], resolve))
        },
    ]
};

export const appRouter = {

}



export const routers = [
    otherRouter,
    ...appRouter,
    page403,
    page500,
    page404,
];