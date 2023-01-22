import { createApp } from 'vue'
import i18n from './modules/i18n'
import pinia from './modules/pinia'
import router from './modules/router'
import App from './App.vue'

createApp(App)
.use(i18n)
.use(pinia)
.use(router)
.mount('#app')
