<template>
  <div class="page-tabs">
    <button :class="{ active: currentTab === 'Home' }" @click="emitTab('Home')">
      <span>🏠 Home</span>
    </button>
    <button :class="{ active: currentTab === 'Analysis' }" @click="emitTab('Analysis')">
      <span>📊 Analysis</span>
    </button>
    <button :class="{ active: currentTab === 'Settings' }" @click="emitTab('Settings')">
      <span>⚙️ Settings</span>
    </button>
    <button :class="{ active: currentTab === 'Logs' }" @click="emitTab('Logs')">
      <span>📜 Logs</span>
    </button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  currentTab: String
});
const emit = defineEmits(['tab-change']);
function emitTab(tab) {
  emit('tab-change', tab);
}
</script>

<style>
.page-tabs button {
  background-color: transparent;
  border-bottom: #002fff 2px solid
}
.page-tabs button {
  background-color: transparent;
  color: #002fff;
  height: 100%;
  border-radius: 0%;
}
.page-tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  background-color: #f5f5f5;
  width: 50%;
}
</style>