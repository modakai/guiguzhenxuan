// 引入 axios
import axios from 'axios'
// 引入 element的消息提示
import { ElMessage } from 'element-plus'
// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
request.interceptors.request.use((config) => config)
// 响应拦截器
request.interceptors.response.use(
  (response) => response,
  (error) => {
    //处理网络错误
    let msg: string
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg
    })
    return Promise.reject(error)
  }
)
export default request
