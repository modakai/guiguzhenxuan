export const constantRoute = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    name: 'login',
    meta: { title: '登入页' }
  },
  {
    // 家路由
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    name: 'layout',
    meta: { title: '布局页' },
    children: [
      {
        // 登录路由
        path: '/login1',
        component: () => import('@/views/login/Login.vue'),
        name: 'login',
        meta: { title: '登入页', hidden: true }
      },
      {
        // 登录路由
        path: '/login2',
        component: () => import('@/views/login/Login.vue'),
        name: 'login',
        meta: { title: '测试', hidden: false }
      }
    ]
  },
  {
    // 404
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404',
    meta: { title: '404页' }
  },
  {
    // 匹配路由，如果不存在则跳转404
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Unknown',
    meta: { title: '未知页' }
  }
]
