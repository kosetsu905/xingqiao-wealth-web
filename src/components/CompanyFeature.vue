<template>
  <div class="flex items-center">
    <i :class="iconClass" class="mr-2" :style="{ color: color }"></i>
    <span class="text-gray-600">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: 'fa fa-check-circle'
  },
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'var(--primary)' // 使用CSS变量保持与主题一致
  }
})
</script>
