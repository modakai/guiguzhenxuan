export const constantRoute = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    name: 'login',
    meta: { title: '登入页', hidden: true }
  },
  {
    // 家路由
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    name: 'layout',
    meta: { title: '布局页', hidden: true },
    redirect: '/home',
    children: [
      {
        // 主路由
        path: '/home',
        component: () => import('@/views/home/Home.vue'),
        name: 'home',
        meta: { title: '首页', hidden: false, icon: 'home' }
      }
    ]
  },
  {
    // 404
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404',
    meta: { title: '404页', hidden: true }
  },
  {
    // 匹配路由，如果不存在则跳转404
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Unknown',
    meta: { title: '未知页', hidden: true }
  }
]
