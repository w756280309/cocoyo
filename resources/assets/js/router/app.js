export default [
    {
        path : '/login',
        component: resolve => void(require(['@/views/auth/Login.vue'], resolve))
    }
]