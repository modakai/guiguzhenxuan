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
    // 登录成功且目标路径为登录页面，重定向到根路径
    if (to.path === '/login') {
      next({ path: '/' })
      return
    }

    // 判断用户名是否存在
    if (userStore.username) {
      next()
      return
    }

    try {
      // 获取用户信息
      await getUserInfo()

      // 放行
      next({ ...to })
    } catch (error) {
      // 处理获取用户信息失败的情况
      await userStore.logout()

      // 重定向到登录页面，并携带当前目标路径作为查询参数
      next({ path: '/login', query: { redirect: to.path } })
    }
  } else {
    // 未登录且目标路径不为登录页面，重定向到登录页面，并携带当前目标路径作为查询参数
    if (to.path !== '/login') {
      next({ path: '/login', query: { redirect: to.path } })
    } else {
      // 目标路径为登录页面，直接放行
      next()
    }
  }
})

// 提取获取用户信息的函数
async function getUserInfo() {
  const result = await userStore.getUserInfo()

  if (result.code !== 200) {
    throw new Error('获取用户信息失败')
  }
}

// 全局路由后置守卫
router.afterEach(() => {
  nprogress.done()
})
