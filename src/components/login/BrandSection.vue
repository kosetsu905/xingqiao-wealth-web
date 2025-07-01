<template>
  <div id="login-branding" class="login-branding">
    <div id="brand-logo" class="brand-logo">
      <div class="brand-logo-image">
        <i class="fa-solid fa-chart-line text-primary text-2xl"></i>
      </div>
      <h1 class="ml-3 text-2xl font-bold">财富管理</h1>
    </div>

    <div id="brand-image" class="brand-image">
      <img class="w-full h-auto rounded-lg" src="/images/1e58e4c6eb-272e2ec5c6e717c81391.png"
           alt="financial wealth management illustration">
    </div>

    <div id="brand-text" class="mt-8">
      <h2 class="text-xl font-bold mb-2">专业财富管理</h2>
      <p class="text-sm opacity-80">为您的未来提供安全可靠的财务规划和投资解决方案</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

  .login-branding {
    @apply w-full md:w-5/12 bg-gradient-to-br from-primary-dark to-primary p-8 text-white flex flex-col justify-between;
  }
  .brand-logo{
    @apply mb-8 flex items-center;
  }
  .brand-logo-image{
    @apply w-12 h-12 bg-white rounded-lg flex items-center justify-center;
  }
  .brand-image{
    @apply flex-grow flex items-center justify-center py-8;
  }

</style>
