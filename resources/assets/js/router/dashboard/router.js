import Main from '@/views/dashboard/Main.vue';

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: '主页'}, name: 'home_index', component: resolve => void(require(['@/views/home/home.vue'], resolve)) },
    ]
};

export const appRouter = [
    {
        path: '/users',
        icon: 'key',
        name: 'users',
        title: '分类管理',
        component: Main,
        children: [
            { path: 'index', title: '用户管理', name: 'users_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) }
        ]
    }
]

export const routers = [
    otherRouter,
    ...appRouter
];