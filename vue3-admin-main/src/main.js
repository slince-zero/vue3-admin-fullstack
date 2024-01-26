import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入所有图标
import { createPinia } from 'pinia' // 引入pinia,用于状态管理
import 'element-plus/theme-chalk/dark/css-vars.css' // 引入 element 黑暗样式
// import  '../mock/user'

const app = createApp(App)
const pinia = createPinia()

// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

