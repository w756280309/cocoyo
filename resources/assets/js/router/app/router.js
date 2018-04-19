import Main from '@/views/app/Main.vue';

export const otherRouter = {
    path: '/',
    component: Main,
    children: [
        { path: '/', title: '主页', name: 'index', component: resolve => void(require(['@/views/app/articles/index.vue'], resolve)) },
        { path: 'articles/:slug', title: '文章详情', name: 'articles.show', component: resolve => void(require(['@/views/app/articles/show.vue'], resolve)) },
        { path: '/login', title: '登陆', name: 'login', component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)) },
        { path: '/user/:name', title: '用户信息', name: 'userinfo', component: resolve => void(require(['@/views/app/user/index.vue'], resolve))}
    ]
};

export const appRouter = [
]

export const routers = [
    otherRouter,
    ...appRouter,
];