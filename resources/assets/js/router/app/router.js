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
            meta: {
                title: 'cocoyo'
            },
            name: 'index',
            component: resolve => void(require(['@/views/app/articles/index.vue'], resolve))
        },
        {
            path: 'articles/:slug',
            meta: {
                title: '文章详情 | cocoyo'
            },
            name: 'articles.show', component: resolve => void(require(['@/views/app/articles/show.vue'], resolve))
        },
        {
            path: '/',
            component: AuthCommon,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)),
                    meta: {
                        requiresNotAuth: true,
                        title: '用户登录 | cocoyo'
                    }
                },
                {
                    path: '/socialite/:driver',
                    name: 'socialite',
                    meta: {
                        requiresNotAuth: true,
                        title: '第三方授权登录 | cocoyo'
                    },
                    component: resolve => void(require(['@/views/app/auth/socialite.vue'], resolve)),
                },
                {
                    path: '/register_success',
                    meta: {
                        title: '用户注册提示 | cocoyo'
                    },
                    name: 'register_tip',
                    component: resolve => void(require(['@/views/app/auth/register_success.vue'], resolve)),
                },
                {
                    path: '/register',
                    meta: {
                        requiresNotAuth: true,
                        title: '用户注册 | cocoyo'
                    },
                    name: 'register',
                    component: resolve => void(require(['@/views/app/auth/register.vue'], resolve)),
                },
                {
                    path: '/register/confirmed',
                    meta: {
                        requiresNotAuth: true,
                        title: '用户注册验证 | cocoyo'
                    },
                    name: 'register_confirmed',
                    component: resolve => void(require(['@/views/app/auth/confirmed.vue'], resolve)),
                },
                {
                    path: '/forgetpassword',
                    meta: {
                        requiresNotAuth: true,
                        title: '忘记密码 | cocoyo'
                    },
                    name: 'forgetpassword',
                    component: resolve => void(require(['@/views/app/auth/forgetpassword.vue'], resolve)),
                },
                {
                    path: '/forgetverify',
                    meta: {
                        requiresNotAuth: true,
                        title: '重置密码 | cocoyo'
                    },
                    name: 'forgetverify',
                    component: resolve => void(require(['@/views/app/auth/forgetverify.vue'], resolve)),
                },
            ]
        },
        {
            path: '/users',
            component: User,
            children: [
                {
                    path: ':name',
                    meta: {
                        title: ':name 个人信息 | cocoyo'
                    },
                    name: 'user_replies',
                    component: resolve => void(require(['@/views/app/users/replies.vue'], resolve)),
                },
                {
                    path: ':name/following',
                    meta: {
                        title: ':name 关注信息 | cocoyo'
                    },
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
                    meta: {
                        title: '编辑个人资料 | cocoyo'
                    },
                    name: 'user_edit',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/profile.vue'], resolve)),
                },
                {
                    path: ':name/edit_avatar',
                    meta: {
                        title: '编辑头像 | cocoyo'
                    },
                    name: 'user_avatar_edit',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/avatar.vue'], resolve)),
                },
                {
                    path: ':name/edit_email_notify',
                    meta: {
                        title: '修改消息通知 | cocoyo'
                    },
                    name: 'edit_email_notify',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/edit_email_notify.vue'], resolve)),
                },
                {
                    path: ':name/edit_password',
                    meta: {
                        title: '修改密码 | cocoyo'
                    },
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
                    meta: {
                        title: '我的提醒 | cocoyo'
                    },
                    name: 'user_notifications',
                    meta: { requiresAuth: true },
                    component: resolve => void(require(['@/views/app/users/notifications.vue'], resolve)),
                }
            ]
        },
        {
            path: '/contact',
            meta: {
                title: '关于我 | cocoyo'
            },
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