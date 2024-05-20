import { createApp } from 'vue'
// 引入svg图标
import 'virtual:svg-icons-register'
// 引入  element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 设置语言为中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入路由
import router from '@/router'
// 引入pinia仓库
import pinia from '@/store'
//引入首页样式
import './styles/index.scss'

// 导入app组件
import App from './App.vue'
// 引入全局注册组件
import globalComponent from '@/components/index'

const app = createApp(App)

// 使用 element-plus
app.use(ElementPlus, {
  locale: zhCn
})
// 使用全局组件
app.use(globalComponent)
// 使用路由
app.use(router)
// 使用pinia
app.use(pinia)
app.mount('#app')
