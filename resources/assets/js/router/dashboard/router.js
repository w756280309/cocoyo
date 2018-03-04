import Main from '@/views/dashboard/Main.vue';

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => void(require(['@/views/home/home.vue'], resolve)) },
    ]
};

export const appRouter = []

export const routers = [
    otherRouter,
    ...appRouter
];