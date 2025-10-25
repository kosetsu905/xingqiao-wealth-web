<template>
  <div id="login-page" class="login-page">
    <div id="login-container" class="login-container">
      <!-- 左侧栏-->
      <BrandSection :brand-data="brandData"/>
      <!-- 右侧栏-->
      <LoginFormSection />
    </div>
  </div>
</template>

<script setup>
import BrandSection from '../../components/login/BrandSection.vue'
import LoginFormSection from '../../components/login/LoginFormSection.vue'
import { ref } from 'vue';

const brandData = ref({
  name: 'QuantPro',
  value: '为您的未来提供安全可靠的财务规划和投资解决方案',
  image: '/images/1e58e4c6eb-272e2ec5c6e717c81391.png'
});


</script>


<style scoped>
  .login-container {
    @apply w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row;
  }
  .login-page{
    @apply flex min-h-[800px] items-center justify-center p-4;
  }
</style>
