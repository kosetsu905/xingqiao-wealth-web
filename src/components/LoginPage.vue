<template>
  <div id="login-page" class="login-page">
    <div id="login-container" class="login-container">
      <!-- 左侧栏-->
      <BrandSection />
      <!-- 右侧栏-->
      <LoginFormSection />
    </div>
  </div>
</template>

<script>
import BrandSection from './login/BrandSection.vue'
import LoginFormSection from './login/LoginFormSection.vue'

export default {
  components: {
    BrandSection,
    LoginFormSection
  }
}
</script>


<style scoped>
  .login-container {
    @apply w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row;
  }
  .login-page{
    @apply flex min-h-[800px] items-center justify-center p-4;
  }
</style>