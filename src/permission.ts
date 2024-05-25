// 路由鉴权
import router from './router'
// 引入进度条
import nprogress from '@/api/nprogress/nprogress'
import pinia from '@/store'
import useUserStore from './store/modules/user'

const userStore = useUserStore(pinia)

// 全局路由前置路由守卫
router.beforeEach(async (to, from, next) => {
  const token = userStore.token
  nprogress.start()
  if (token) {
    // 登入成功说明local里面存在token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 判断用户名
      if (userStore.username) {
        next()
      } else {
        try {
          // 如果没有，则发起请求获取用户信息
          await userStore.getUserInfo()
          // 放行
          next()
        } catch (e) {
          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关的数据清空
          userStore.logout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
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
