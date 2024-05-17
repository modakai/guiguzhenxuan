import { createApp } from 'vue'
// 引入svg图标
import 'virtual:svg-icons-register'
// 引入  element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

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

app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
