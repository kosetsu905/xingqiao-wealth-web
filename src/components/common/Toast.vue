<template>
  <transition name="fade">
    <div
        v-if="show"
        class="fixed top-4 right-4 z-50 px-4 py-2 rounded-md shadow-lg"
        :class="{
        'bg-green-100 text-green-800': type === 'success',
        'bg-blue-100 text-blue-800': type === 'info',
        'bg-yellow-100 text-yellow-800': type === 'warning',
        'bg-red-100 text-red-800': type === 'error'
      }"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String as () => 'success' | 'info' | 'warning' | 'error',
    default: 'info'
  },
  duration: {
    type: Number,
    default: 3000
  }
})

const show = ref(false)

onMounted(() => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, props.duration)
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>