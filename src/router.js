import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue' 
import Settings from './pages/Settings.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/settings', name: 'Settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
