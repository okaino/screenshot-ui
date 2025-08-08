import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue' 
import Settings from './pages/Settings.vue'
import DeviceManagement from './pages/DeviceManagement.vue'
import Support from './pages/Support.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/device-management', name: 'DeviceManagement', component: DeviceManagement },
  { path: '/support', name: 'Support', component: Support },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
