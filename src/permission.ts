// 路由鉴权
import router from './router'
// 引入进度条
import nprogress from '@/api/nprogress/nprogress'

const ADMIN_TOKEN: string = 'ADMIN_TOKEN'
// 全局路由前置路由守卫
// to 是去哪个路由
// from 是从哪个路由来
// next 放行路由
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(ADMIN_TOKEN)
  nprogress.start()
  if (token) {
    // 登入成功说明local里面存在token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    console.log('to', to.path)
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

// 全局路由后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
