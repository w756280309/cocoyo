/**
 * Created by Ningge on 2017/4/23.
 */
import Dashboard from '../views/Dashboard.vue'
import Parent from '../views/Parent.vue'

export default [
    {
        path : '/',
        component : Dashboard,
        redirect:'/home',
        children : [
            {
                path :'home',
                component : resolve => void(require(['../views/dashboard/Home.vue'], resolve))
            }
        ]
    },
    {
        path : '/login',
        component: resolve => void(require(['../views/auth/Login.vue'], resolve))
    }
]
