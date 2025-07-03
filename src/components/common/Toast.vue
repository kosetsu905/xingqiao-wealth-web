<template>
  <transition name="fade">
    <div
        v-if="show"
        class="fixed left-1/2 top-1/2 z-50 mx-4 px-6 py-4 rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2
              w-[60%]  /* 移动端默认宽度 */
              md:max-w-md md:w-auto  /* 桌面端适配 */"
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}
</style>