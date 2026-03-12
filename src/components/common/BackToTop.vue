
<template>
  <!-- 返回顶部按钮 -->
  <button
      id="back-to-top"
      class="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300"
      :class="{
      'opacity-0 invisible': !showBackToTop,
      'opacity-100 visible': showBackToTop
    }"
      @click="scrollToTop"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
#back-to-top {
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
</style>