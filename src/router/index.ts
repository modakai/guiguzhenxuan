// 第一步引入路由器
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@/router/routes'
// 第二部定义路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  // 设置滚动行为
  scrollBehavior: () => {
    return { left: 0, top: 0 }
  }
})

// 第三步导出
export default router
