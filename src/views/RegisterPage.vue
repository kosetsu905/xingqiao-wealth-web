<template>
  <div id="login-page" class="login-page">
    <div id="login-container" class="login-container">
      <!-- 左侧栏-->
      <BrandSection :brand-data="brandData"/>
      <!-- 右侧栏-->
      <RegisterFormSection />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import BrandSection from '../components/login/BrandSection.vue'
import RegisterFormSection from "@/components/login/RegisterFormSection.vue";

const brandData = ref({
  name: '账户安全保护',
  value: '我们致力于保护您的账户安全，确保资金安全可靠',
  image: '/images/45a7e2715c-f1858b4d9da69dbba506.png'
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