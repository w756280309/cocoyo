import Main from '@/views/dashboard/Main.vue';

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => void(require(['@/views/dashboard/error-page/404.vue'], resolve))
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => void(require(['@/views/dashboard/error-page/403.vue'], resolve))
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => void(require(['@/views/dashboard/error-page/500.vue'], resolve))
};


export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: '主页', name: 'home_index', component: resolve => void(require(['@/views/dashboard/home/home.vue'], resolve)) },
        { path: 'users/:id/edit', title: '编辑用户', name: 'users_edit', component: resolve => void(require(['@/views/dashboard/users/edit.vue'], resolve)) },
        { path: 'categories/:id/edit', title: '编辑分类', name: 'categories_edit', component: resolve => void(require(['@/views/dashboard/categories/edit.vue'], resolve)) },
        { path: 'categories/add', title: '添加分类', name: 'categories_add', component: resolve => void(require(['@/views/dashboard/categories/add.vue'], resolve)) },
        { path: 'tags/:id/edit', title: '编辑标签', name: 'tags_edit', component: resolve => void(require(['@/views/dashboard/tags/edit.vue'], resolve)) },
        { path: 'tags/add', title: '添加标签', name: 'tags_add', component: resolve => void(require(['@/views/dashboard/tags/add.vue'], resolve)) },
        { path: 'comments/:id/edit', title: '编辑评论', name: 'comments_add', component: resolve => void(require(['@/views/dashboard/comments/edit.vue'], resolve)) },
        { path: 'articles/add', title: '添加文章', name: 'articles_add', component: resolve => void(require(['@/views/dashboard/articles/add.vue'], resolve)) },
        { path: 'articles/:id/edit', title: '编辑文章', name: 'articles_edit', component: resolve => void(require(['@/views/dashboard/articles/edit.vue'], resolve)) },
        { path: 'links/:id/edit', title: '编辑友链', name: 'links_edit', component: resolve => void(require(['@/views/dashboard/links/edit.vue'], resolve)) },
        { path: 'links/add', title: '添加友链', name: 'links_add', component: resolve => void(require(['@/views/dashboard/links/add.vue'], resolve)) },
    ]
};

export const appRouter = [
    {
        path: '/users',
        icon: 'android-people',
        name: 'users',
        title: '用户管理',
        component: Main,
        children: [
            { path: 'index', title: '用户管理', name: 'users_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    },
    {
        path: '/categories',
        icon: 'more',
        name: 'categories',
        title: '分类管理',
        component: Main,
        children: [
            { path: 'index', title: '分类管理', name: 'categories_index', component: resolve => void(require(['@/views/dashboard/categories/index.vue'], resolve)) },
        ]
    },
    {
        path: '/tags',
        icon: 'pricetags',
        name: 'tags',
        title: '标签管理',
        component: Main,
        children: [
            { path: 'index', title: '标签管理', name: 'tags_index', component: resolve => void(require(['@/views/dashboard/tags/index.vue'], resolve)) },
        ]
    },
    {
        path: '/comments',
        icon: 'chatboxes',
        name: 'comments',
        title: '评论管理',
        component: Main,
        children: [
            { path: 'index', title: '评论管理', name: 'comments_index', component: resolve => void(require(['@/views/dashboard/comments/index.vue'], resolve)) },
        ]
    },
    {
        path: '/articles',
        icon: 'ios-book',
        name: 'articles',
        title: '文章管理',
        component: Main,
        children: [
            { path: 'index', title: '文章管理', name: 'articles_index', component: resolve => void(require(['@/views/dashboard/articles/index.vue'], resolve)) },
        ]
    },
    {
        path: '/links',
        icon: 'ios-redo',
        name: 'links',
        title: '友链管理',
        component: Main,
        children: [
            { path: 'index', title: '友链管理', name: 'links_index', component: resolve => void(require(['@/views/dashboard/links/index.vue'], resolve)) },
        ]
    }
]

export const routers = [
    otherRouter,
    ...appRouter,
    page403,
    page500,
    page404,
];