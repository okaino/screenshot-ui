
<script setup>
import SidebarNav from './components/SidebarNav.vue';
</script>



<template>
  <div class="app-layout">
    <aside class="sidebar-container">
      <SidebarNav />
    </aside>
    <section class="main-container">
      <main class="main-content">
        <router-view />
      </main>
    </section>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: var(--background, #f5f6fa);
}

.sidebar-container {
  width: 240px;
  min-width: 200px;
  max-width: 280px;
  background: #232946;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 2px 0 8px rgba(0,0,0,0.04);
  z-index: 10;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #f5f6fa;
  min-height: 100vh;
  overflow-x: auto;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 2rem 2rem 2rem;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 800px) {
  .sidebar-container {
    width: 64px;
    min-width: 64px;
    max-width: 64px;
    padding: 0;
  }
  .main-content {
    padding: 1rem;
  }
}
</style>
