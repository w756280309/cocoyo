import Main from '@/views/app/Main.vue';

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: '/', title: '主页', name: 'index', component: resolve => void(require(['@/views/app/articles/index.vue'], resolve)) },
        { path: '/login', title: '登陆', name: 'login', component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)) },
    ]
};

export const appRouter = [
]

export const routers = [
    otherRouter,
    ...appRouter,
];