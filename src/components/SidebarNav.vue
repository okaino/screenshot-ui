<template>
  <aside :class="['sidebar', { open: isOpen }]">
    <div class="sidebar-header">
        <a href="/" rel="Dashboard">
      <img style="width:90%" src="../assets/img/dashboard_logo.png" />
      <!-- <span class="sidebar-title">Menu</span> -->
       </a>
    </div>
    <nav class="sidebar-nav">
        <h1 class="sidebar-title">Menu</h1>
      <router-link class="router-link" to="/" exact-active-class="router-link-exact-active" >
        <span style="margin-right: 8px;">🏠</span>
        <p class="nav-title">Dashboard</p>
      </router-link>
      <router-link class="router-link" to="/device-management" exact-active-class="router-link-exact-active" >
        <span style="margin-right: 8px;">📋</span>
        <p class="nav-title">Device Management</p>
      </router-link>
      <router-link class="router-link" to="/settings" exact-active-class="router-link-exact-active" >
        <span style="margin-right: 8px;">⚙️</span>
        <p class="nav-title">Settings</p>
      </router-link>
      <router-link class="router-link" to="/support" exact-active-class="router-link-exact-active" >
        <span style="margin-right: 8px;">📁</span>
        <p class="nav-title">Support</p>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(true);
</script>

<style scoped>
.router-link {
  display: flex;
  align-items: center;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  background: #fff;
  border-right: 1px solid #eee;
  box-shadow: 2px 0 8px rgba(0,0,0,0.04);
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}
.sidebar.open {
  transform: translateX(0);
  box-shadow: 2px 0 16px rgba(0,0,0,0.10);
}
.sidebar-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
.drawer-toggle {
  background: none;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 1rem;
  font-size: 1.5rem;
  outline: none;
  color: #35495e;
}
.icon-menu::before {
  content: '\2630';
  font-size: 1.5rem;
}
.icon-close::before {
  content: '\2715';
  font-size: 1.5rem;
}
.sidebar-title {
  font-weight: bold;
  color: #4a8bf7;
  width: 100%;
  display: flex;
  padding: 0px 0px 0px 25px;
  font-size: 1rem;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
.sidebar-nav a {
  text-decoration: none;
  color: #959ca4;
  padding: 0.75rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.sidebar-nav a.router-link-exact-active {
  color: #35495e;
  background: #fbfdfe;
}
.sidebar-nav a:hover {
  background: #f5f5f5;
}
@media (max-width: 800px) {
  .sidebar {
    width: 20vw;
  }

.nav-title {
  display: none;
  overflow: hidden;
}
}
</style>
