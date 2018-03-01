import Main from '@/views/Main.vue';

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => require('@/views/home/home.vue') },
    ]
};

export const appRouter = []

export const routers = [
    otherRouter,
    ...appRouter
];