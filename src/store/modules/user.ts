import { defineStore } from 'pinia'
import type { loginFormData } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user/user'
import type { UserState } from './types/types'
// 引入路由数据
import { constantRoute } from '@/router/routes'

const ADMIN_TOKEN: string = 'ADMIN_TOKEN'
const ADMIN_USERNAME: string = 'USERNAME'
const ADMIN_AVATAR: string = 'AVATAR'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem(ADMIN_TOKEN) || '',
      menuRoutes: constantRoute,
      username: localStorage.getItem(ADMIN_USERNAME) || '',
      avatar: localStorage.getItem(ADMIN_USERNAME) || ''
    }
  },
  actions: {
    // 用户登入
    async userLogin(form: loginFormData) {
      // 执行登入请求
      // 登入请求：成功code200 -》 token
      // 登入请求：失败code201 -》登入失败提示错误信息
      const result = await reqLogin(form)
      console.log(result.code)
      if (result.code === 200) {
        // // 保存对应得token
        this.token = result.data.token
        // // 那么我本地也要存储一份
        localStorage.setItem(ADMIN_TOKEN, this.token)
        this.menuRoutes = constantRoute
        // 返回promise
        return 'ok'
      } else {
        // 登入失败提示错误信息
        return Promise.reject(new Error(result.data.message))
      }
    },
    // 获取用户信息
    async getUserInfo() {
      // 发起获取信息
      const result = await reqUserInfo()
      if (result.code === 200) {
        // 保存对应用户信息
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        localStorage.setItem(ADMIN_USERNAME, this.username)
        localStorage.setItem(ADMIN_AVATAR, this.avatar)
      }
    },
    // 退出登入
    logout() {
      // 删除对应的数据
      this.rest()
    },
    rest() {
      this.token = ''
      this.menuRoutes = []
      this.username = ''
      this.avatar = ''
      // 删除本地缓存
      localStorage.removeItem(ADMIN_TOKEN)
      localStorage.removeItem(ADMIN_USERNAME)
      localStorage.removeItem(ADMIN_AVATAR)
    }
  },
  getters: {}
})

export default useUserStore
