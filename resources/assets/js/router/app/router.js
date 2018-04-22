import Main from '@/views/app/Main.vue';
import User from '@/components/User.vue';

export const otherRouter = {
    path: '/',
    component: Main,
    children: [
        { path: '/', title: '主页', name: 'index', component: resolve => void(require(['@/views/app/articles/index.vue'], resolve)) },
        { path: 'articles/:slug', title: '文章详情', name: 'articles.show', component: resolve => void(require(['@/views/app/articles/show.vue'], resolve)) },
        { path: '/login', title: '登陆', name: 'login', component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)) },
        { path: '/user/profile', title: '编辑个人资料', name: 'edit_profile', component: resolve => void(require(['@/views/app/user/profile.vue'], resolve)) },
        {
            path: '/users',
            component: User,
            children: [
                {
                    path: ':name',
                    title: '用户信息',
                    name: 'user_replies',
                    component: resolve => void(require(['@/views/app/user/replies.vue'], resolve)),
                },
                {
                    path: ':name/following',
                    title: '用户关注',
                    name: 'user_following',
                    component: resolve => void(require(['@/views/app/user/following.vue'], resolve)),
                }
            ]
        }
    ]
};

export const appRouter = [
]

export const routers = [
    otherRouter,
    ...appRouter,
];