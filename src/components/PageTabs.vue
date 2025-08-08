<template>
  <div class="page-tabs">

    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ active: currentTab === tab }"
      @click="emitTab(tab)"
    >
      {{ tab }}
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
const tabs = ['Home', 'Analysis', 'Settings', 'Logs'];
const activeTab = 0;
</script>

<style>
.page-tabs button {
  background-color: transparent;
  color: #002fff;
  height: 100%;
  border-bottom: 2px solid #002fff;
  border-radius: 0%;
}
.page-tabs button.active {
  border-bottom: 2px solid black;
  color: #002fff;
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