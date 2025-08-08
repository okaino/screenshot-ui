<template>
  <label class="switch">
    <input type="checkbox" v-model="checked" @change="$emit('update:modelValue', checked)" />
    <span class="slider"></span>
  </label>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
const props = defineProps({
  modelValue: { type: Boolean, default: false }
});
const emit = defineEmits(['update:modelValue']);
const checked = ref(props.modelValue);
watch(() => props.modelValue, v => checked.value = v);
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 52px;
  margin-left: 30px;
  height: 28px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c4c4c4;
  transition: 0.4s;
  border-radius: 34px;
  box-shadow: 0 2px 8px rgba(35,41,70,0.15);
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background: #ffffff;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(35,41,70,0.10);
}
input:checked + .slider {
  background: #389f00;
}
input:checked + .slider:before {
  transform: translateX(24px);
  background: #e6e6e6;
}
</style>
