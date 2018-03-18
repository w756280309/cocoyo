export const appRouter = [
    {
        path: '/',
        name: 'app'
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: resolve => void(require(['@/views/app/auth/login.vue'], resolve))
    }
]


export const routers = [
    ...appRouter
];