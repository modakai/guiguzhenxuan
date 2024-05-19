import { defineStore } from 'pinia'
import type { loginFormData } from '@/api/user/type'
import { reqLogin } from '@/api/user/user'
import type { UserState } from './types/types'

const ADMIN_TOKEN = 'ADMIN_TOKEN'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem(ADMIN_TOKEN) || ''
    }
  },
  actions: {
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
        // 返回promise
        return 'ok'
      } else {
        // 登入失败提示错误信息
        return Promise.reject(new Error(result.data.message))
      }
    }
  },
  getters: {}
})

export default useUserStore