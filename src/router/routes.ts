export const constantRoute = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    name: 'login'
  },
  {
    // 家路由
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    name: 'layout'
  },
  {
    // 404
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404'
  },
  {
    // 匹配路由，如果不存在则跳转404
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Unknown'
  }
]
