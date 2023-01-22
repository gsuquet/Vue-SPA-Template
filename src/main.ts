import { createApp } from 'vue'
import router from './modules/router'
import pinia from './modules/pinia'
import App from './App.vue'

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
