import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupPlugins } from './plugins'
import { setupPinia } from './store'

import App from './App.vue'
import './assets/all.scss'

async function setupApp () {
  const AppInstance = createApp(App)

  // 把引入 libraries 做統一整理
  setupPlugins(AppInstance)

  // stores
  setupPinia(AppInstance)

  // 路由
  await setupRouter(AppInstance)

  // 掛載根元素
  AppInstance.mount('#app')
}

setupApp()
