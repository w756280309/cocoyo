/**
 * Created by Ningge on 2017/4/23.
 */
import Dashboard from '../views/Dashboard.vue'
import From from '@/views/Form.vue'

export default [
    {
        path : '/',
        component : Dashboard,
        redirect:'/home',
        children : [
            {
                path :'home',
                component : resolve => void(require(['../views/dashboard/Home.vue'], resolve))
            },
            {
                path: 'users',
                component : resolve => void(require(['@/views/dashboard/users/index.vue'], resolve))
            },
            {
                path: 'category',
                component : resolve => void(require(['@/views/dashboard/categories/index.vue'], resolve))
            },
            {
                path: 'tags',
                component : resolve => void(require(['@/views/dashboard/tags/index.vue'], resolve))
            }
        ]
    },
    {
        path : '/users',
        component : From,
        children : [
            {
                path: ':id/edit',
                component : resolve => void(require(['@/views/dashboard/users/edit.vue'], resolve))
            }
        ]
    },
    {
        path : '/category',
        component : From,
        children : [
            {
                path: 'create',
                component : resolve => void(require(['@/views/dashboard/categories/create.vue'], resolve))
            },
            {
                path: ':id/edit',
                component: resolve => void(require(['@/views/dashboard/categories/edit.vue'], resolve))
            }
        ]
    },
    {
        path : '/tags',
        component : From,
        children : [
            {
                path: 'create',
                component : resolve => void(require(['@/views/dashboard/tags/create.vue'], resolve))
            },
            {
                path: ':id/edit',
                component: resolve => void(require(['@/views/dashboard/tags/edit.vue'], resolve))
            }
        ]
    },
    {
        path : '/login',
        component: resolve => void(require(['../views/auth/Login.vue'], resolve))
    }
]
