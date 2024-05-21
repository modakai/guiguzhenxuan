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
    meta: {
      title: '',
      hidden: false,
      icon: ''
    },
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
    path: '/screen',
    component: () => import('@/views/screen/Screen.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'screen'
    }
  },
  {
    path: '/acl',
    component: () => import('@/layout/Layout.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'lock'
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/User.vue'),
        meta: {
          title: '用户管理',
          icon: 'user'
        }
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/Role.vue'),
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/Permission.vue'),
        meta: {
          title: '菜单管理',
          icon: 'menu'
        }
      }
    ]
  },
  {
    path: '/product',
    component: () => import('@/layout/Layout.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'product'
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/Trademark.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'trademark'
        }
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/Attr.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'productAttr'
        }
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/Spu.vue'),
        name: 'Spu',
        meta: {
          title: 'Spu管理',
          icon: 'spu'
        }
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/Sku.vue'),
        name: 'Sku',
        meta: {
          title: 'Sku管理',
          icon: 'sku'
        }
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
