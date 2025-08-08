
import { createApp } from 'vue'
import './archivo-font.css'
import './style.css'
import './sidebar-nav.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
