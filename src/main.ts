import { createApp } from 'vue'
// 引入svg图标
import 'virtual:svg-icons-register'
// 引入  element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由
import router from '@/router'

//引入首页样式
import './styles/index.scss'

// 设置语言为中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'

const app = createApp(App)
// // 导入icons图标
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

// 使用 element-plus
app.use(ElementPlus, {
  locale: zhCn
})
// 使用路由
app.use(router)
app.mount('#app')
