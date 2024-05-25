// 路由鉴权
import router from './router'
// 引入进度条
import nprogress from '@/api/nprogress/nprogress'
// 全局路由前置路由守卫
router.beforeEach((to, from, next) => {
  // to 是去哪个路由
  // from 是从哪个路由来
  // next 放行路由
  nprogress.start()
  next()
})

// 全局路由后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
